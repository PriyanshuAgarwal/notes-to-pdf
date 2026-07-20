// src/app/api/structure/route.ts
import { generateText, Output } from "ai";
import { NextResponse } from "next/server";
import { structuringModel, INPUT_LIMITS } from "@/lib/ai";
import { STRUCTURING_SYSTEM_PROMPT } from "@/lib/prompts";
import { StructuredNoteSchema } from "@/lib/schema";

/**
 * POST /api/structure
 *
 * Body: { notes: string }
 * Returns: StructuredNote (validated against StructuredNoteSchema) | { error }
 *
 * Uses the AI SDK v6 structured-output API: `generateText` with
 * `output: Output.object({ schema })`. This replaces the deprecated
 * `generateObject`. Runs on the default Node runtime (single request/response;
 * no streaming needed). The API key stays server-side.
 */
export async function POST(req: Request) {
	// --- parse body ---
	let notes: unknown;
	try {
		const body = await req.json();
		notes = body?.notes;
	} catch {
		return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
	}

	// --- validate input (guard before spending a model call) ---
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

	// --- structure the notes ---
	try {
		const { output } = await generateText({
			model: structuringModel,
			system: STRUCTURING_SYSTEM_PROMPT,
			prompt: trimmed,
			output: Output.object({ schema: StructuredNoteSchema }),
		});

		// `output` is typed as StructuredNote and validated against the schema.
		return NextResponse.json(output);
	} catch (err) {
		// Covers model errors, schema-validation failures, quota/rate errors, etc.
		console.error("structure route error:", err);
		return NextResponse.json({ error: "Failed to structure notes. Please try again." }, { status: 500 });
	}
}
