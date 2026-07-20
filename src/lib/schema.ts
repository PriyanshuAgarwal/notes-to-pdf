// src/lib/schema.ts
import { z } from "zod";

/**
 * The contract for the entire app.
 *
 * This single schema:
 *  1. Constrains what the LLM returns (passed to `generateObject`).
 *  2. Validates the model's response at runtime.
 *  3. Produces the TypeScript type consumed by the preview UI and the PDF.
 *
 * Design: a FIXED schema of FLEXIBLE content blocks. The outer shape
 * (title + optional summary + sections[]) never changes; the LLM chooses
 * how many sections, in what order, and which block types fit the source
 * material. This is why one schema handles meeting notes, revision notes,
 * documentation, recipes, comparison notes, etc.
 *
 * Every `.describe()` is serialized into the schema sent to the model, so
 * these strings act as inline, field-level prompts that shape output quality.
 */

/**
 * A content block — the flexible unit a section is built from.
 * `discriminatedUnion("type", ...)` lets Zod validate the correct shape per
 * block and lets the renderer use an exhaustive `switch (block.type)` that
 * TypeScript narrows automatically. Add a block here and the compiler forces
 * you to handle it everywhere.
 */
export const ContentBlockSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("paragraph"),
		text: z.string().describe("A cleaned-up paragraph of prose. Fix grammar and flow; preserve all facts from the source. Do not invent information."),
	}),

	z.object({
		type: z.literal("subheading"),
		text: z.string().describe("A sub-section heading within a section (2–8 words). Use to group related blocks under a section, e.g. 'Field 1 — Master Switch' inside a 'Configuration' section."),
	}),

	z.object({
		type: z.literal("bullets"),
		items: z.array(z.string()).min(1).describe("An unordered list where order does NOT carry meaning (features, characteristics, notes)."),
	}),

	z.object({
		type: z.literal("steps"),
		items: z.array(z.string()).min(1).describe("An ordered list where sequence DOES carry meaning (procedures, algorithms, end-to-end flows). Each item is one step."),
	}),

	z.object({
		type: z.literal("code"),
		language: z.string().describe("Language for syntax labeling, e.g. 'javascript', 'tsx', 'java', 'json', 'bash'. Use 'text' if unknown."),
		code: z.string().describe("The code snippet, preserved verbatim from the source. Do not reformat or 'correct' code beyond fixing obvious copy artifacts."),
	}),

	z.object({
		type: z.literal("callout"),
		variant: z.enum(["note", "tip", "warning"]).describe("note = analogy/aside/context; tip = advice or interview tip; warning = gotcha, limitation, or risk."),
		text: z.string().describe("The highlighted content. Keep concise — callouts are for emphasis, not long prose."),
	}),

	z.object({
		type: z.literal("table"),
		headers: z.array(z.string()).min(1).describe("Column headers."),
		rows: z.array(z.array(z.string())).min(1).describe("Each row is an array of cell strings. Every row MUST have the same number of cells as there are headers."),
	}),
]);

export const SectionSchema = z.object({
	heading: z.string().describe("Short section heading (2–8 words)."),
	blocks: z
		.array(ContentBlockSchema)
		.min(1)
		.describe(
			"The content of this section as one or more blocks. Interleave block types freely — a section may mix a paragraph, a table, code, and bullets in whatever order best presents the material.",
		),
});

export const StructuredNoteSchema = z.object({
	title: z.string().describe("A concise, descriptive document title (3–10 words) inferred from the content. Do not just echo the first line."),

	summary: z
		.string()
		.optional()
		.describe(
			"Optional 1–2 sentence overview. Include for narrative content (meeting notes, project docs). Omit for reference material (revision notes, cheat sheets, glossaries) where a summary adds no value.",
		),

	sections: z
		.array(SectionSchema)
		.min(1)
		.max(15)
		.describe(
			"The document reorganized into logical sections. Choose the number, order, and content of sections to fit the source material. Group related points; order sections the way a reader would want to encounter them.",
		),
});

/** The single source of truth type. Preview + PDF both import this. */
export type StructuredNote = z.infer<typeof StructuredNoteSchema>;
export type Section = z.infer<typeof SectionSchema>;
export type ContentBlock = z.infer<typeof ContentBlockSchema>;

/** Narrowed per-block types — handy when writing the renderer's switch cases. */
export type ParagraphBlock = Extract<ContentBlock, { type: "paragraph" }>;
export type SubheadingBlock = Extract<ContentBlock, { type: "subheading" }>;
export type BulletsBlock = Extract<ContentBlock, { type: "bullets" }>;
export type StepsBlock = Extract<ContentBlock, { type: "steps" }>;
export type CodeBlock = Extract<ContentBlock, { type: "code" }>;
export type CalloutBlock = Extract<ContentBlock, { type: "callout" }>;
export type TableBlock = Extract<ContentBlock, { type: "table" }>;
