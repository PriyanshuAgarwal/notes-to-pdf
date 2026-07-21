// src/lib/ai.ts
import { google } from "@ai-sdk/google";

/**
 * Central model configuration.
 *
 * Everything that talks to the LLM imports the model from here, so switching
 * providers (Gemini → OpenAI → Anthropic) is a one-line change in this file
 * rather than a hunt across route handlers.
 *
 * Requires GOOGLE_GENERATIVE_AI_API_KEY in the environment. The `google`
 * provider reads it automatically — the key never reaches the client because
 * these modules only run in server route handlers.
 */

// Fast, cheap, free-tier friendly. Good structured-output support.
export const structuringModel = google("gemini-3.1-flash-lite");

// Same model is fine for Q&A; kept separate so you can tune them independently
// later (e.g. a smaller model for chat, a stronger one for structuring).
export const chatModel = google("gemini-3.1-flash-lite");

/** Input guardrails shared across routes. */
export const INPUT_LIMITS = {
	/** Reject empty / whitespace-only submissions before spending a model call. */
	minChars: 20,
	/** Keep inputs comfortably inside the context window and cost envelope. */
	maxChars: 10_000,
} as const;
