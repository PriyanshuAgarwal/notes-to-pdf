"use client";

// src/components/ExportButton.tsx
import { useState } from "react";
import type { StructuredNote } from "@/lib/schema";

/**
 * Client-only PDF export.
 *
 * @react-pdf/renderer cannot run during SSR, so both the library and the
 * document component are imported dynamically inside the click handler. This
 * keeps them out of the server bundle entirely and avoids the common
 * "self is not defined" / SSR build errors.
 *
 * Generation happens in the browser from the StructuredNote already in state —
 * no server round-trip, no cost.
 */
export function ExportButton({ note, label = "Export PDF", variant = "secondary" }: { note: StructuredNote | null; label?: string; variant?: "primary" | "secondary" }) {
	const [busy, setBusy] = useState(false);

	async function handleExport() {
		if (!note || busy) return;
		setBusy(true);
		try {
			// Dynamic imports: only loaded in the browser, only when needed.
			const [{ pdf }, { NotesPDF }] = await Promise.all([import("@react-pdf/renderer"), import("../pdf/NotesPDF")]);

			const blob = await pdf(<NotesPDF note={note} />).toBlob();

			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `${slugify(note.title)}.pdf`;
			document.body.appendChild(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("PDF export failed:", err);
			alert("Sorry — the PDF could not be generated. Please try again.");
		} finally {
			setBusy(false);
		}
	}

	return (
		<button
			type="button"
			onClick={handleExport}
			disabled={!note || busy}
			className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 ${
				variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-blue-800 text-blue-800 hover:bg-blue-50"
			}`}>
			{busy ? "Generating…" : label}
		</button>
	);
}

function slugify(s: string): string {
	return (
		s
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-+|-+$/g, "")
			.slice(0, 60) || "notes"
	);
}
