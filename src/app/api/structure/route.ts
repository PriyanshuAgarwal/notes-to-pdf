// src/app/api/structure/route.ts
import { generateText, Output } from "ai";
import { NextResponse } from "next/server";
import { structuringModel, INPUT_LIMITS } from "@/lib/ai";
import { STRUCTURING_SYSTEM_PROMPT } from "@/lib/prompts";
import { StructuredNoteSchema, type StructuredNote } from "@/lib/schema";

/**
 * Structured-output calls can occasionally drift (the model emits JSON that
 * doesn't validate against the schema — e.g. a renamed field). Rather than
 * failing the whole request on the first miss, retry a small number of times;
 * the next generation almost always validates. This is standard practice for
 * schema-constrained LLM output.
 */
async function structureWithRetry(prompt: string, attempts = 3): Promise<StructuredNote> {
	let lastErr: unknown;
	for (let i = 0; i < attempts; i++) {
		try {
			const { output } = await generateText({
				model: structuringModel,
				system: STRUCTURING_SYSTEM_PROMPT,
				prompt,
				output: Output.object({ schema: StructuredNoteSchema }),
			});
			return output;
		} catch (err) {
			lastErr = err;
			console.warn(`structure attempt ${i + 1}/${attempts} failed, retrying…`);
		}
	}
	throw lastErr;
}

/**
 * POST /api/structure
 * Body: { notes: string }  →  StructuredNote | { error }
 */
export async function POST(req: Request) {
	let notes: unknown;
	try {
		const body = await req.json();
		notes = body?.notes;
	} catch {
		return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
	}

	if (typeof notes !== "string") {
		return NextResponse.json({ error: "`notes` must be a string." }, { status: 400 });
	}
	const trimmed = notes.trim();
	if (trimmed.length < INPUT_LIMITS.minChars) {
		return NextResponse.json({ error: `Please provide at least ${INPUT_LIMITS.minChars} characters of notes.` }, { status: 400 });
	}
	if (trimmed.length > INPUT_LIMITS.maxChars) {
		return NextResponse.json({ error: `Notes are too long (max ${INPUT_LIMITS.maxChars} characters).` }, { status: 413 });
	}

	try {
		const output = await structureWithRetry(trimmed);
		return NextResponse.json(output);
	} catch (err) {
		console.error("structure route error:", err);
		return NextResponse.json({ error: "Failed to structure notes. Please try again." }, { status: 500 });
	}
}
