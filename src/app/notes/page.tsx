"use client";

import { useState } from "react";
import Link from "next/link";
import { ExportButton } from "@/components/ExportButton";
import type { StructuredNote } from "@/lib/schema";

export default function NotesPage() {
	const [notes, setNotes] = useState("");
	const [busy, setBusy] = useState(false);
	const [structuredNote, setStructuredNote] = useState<StructuredNote | null>(null);

	const exampleNotes = `Design team sync 5/20
Lots to cover. PDF output still messy :(
We need cleaner structure + check design system updates
Who's taking the PDF work? I can help w/ layout if needed
Also - doc templates?? maybe later
Let's ship v2 of the export next week`;

	function loadExample() {
		setNotes(exampleNotes);
	}

	async function handleStructure() {
		if (!notes.trim() || busy) return;
		setBusy(true);
		try {
			const res = await fetch("/api/structure", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ notes }),
			});
			const data = await res.json();
			if (!res.ok) {
				alert(data.error || "Failed to structure notes. Please try again.");
				return;
			}
			setStructuredNote(data);
		} catch (err) {
			console.error("Structure error:", err);
			alert("Failed to structure notes. Please try again.");
		} finally {
			setBusy(false);
		}
	}

	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			{/* Header */}
			<header className="flex items-center justify-between border-b border-slate-100 px-6 py-4 lg:px-12">
				<Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
					<svg className="h-9 w-9 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
						<path d="M14 3v5h5" />
						<path d="M8 13h8" />
						<path d="M8 17h8" />
						<path d="M8 9h3" />
					</svg>
					Notes → PDF
				</Link>
				<span className="text-sm font-medium text-slate-500">AI-powered</span>
			</header>

			{/* Main */}
			<main className="px-6 py-12 lg:px-12">
				<div className="mx-auto max-w-3xl">
					<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-4 flex items-center justify-between">
							<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Paste your notes</label>
							<button type="button" onClick={loadExample} className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
								Load example
							</button>
						</div>
						<textarea
							value={notes}
							onChange={e => setNotes(e.target.value)}
							placeholder="Paste your rough notes here..."
							className="min-h-[260px] w-full resize-none rounded-lg border border-slate-200 p-4 text-sm leading-relaxed text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
							maxLength={10000}
						/>
						<div className="mt-4 flex items-center justify-between">
							<span className="text-xs text-slate-400">{notes.length.toLocaleString()} / 10,000</span>
							<button
								type="button"
								onClick={handleStructure}
								disabled={busy || notes.trim().length < 20}
								className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
								{busy ? "Structuring…" : "Structure notes"}
							</button>
						</div>
					</div>

					{structuredNote && (
						<div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
							<div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div>
									<h2 className="text-xl font-bold text-slate-900">{structuredNote.title}</h2>
									{structuredNote.summary ? <p className="mt-1 text-sm text-slate-600">{structuredNote.summary}</p> : null}
								</div>
								<div className="flex items-center gap-3">
									<ExportButton note={structuredNote} label="Create PDF" variant="primary" />
									<ExportButton note={structuredNote} label="Export PDF" variant="secondary" />
								</div>
							</div>

							<div className="space-y-6">
								{structuredNote.sections.map((section, si) => (
									<div key={si}>
										<h3 className="mb-2 text-sm font-semibold text-blue-600">{section.heading}</h3>
										<div className="space-y-3">
											{section.blocks.map((block, bi) => {
												switch (block.type) {
													case "paragraph":
														return (
															<p key={bi} className="text-sm text-slate-700">
																{block.text}
															</p>
														);
													case "subheading":
														return (
															<h4 key={bi} className="text-sm font-semibold text-slate-900">
																{block.text}
															</h4>
														);
													case "bullets":
														return (
															<ul key={bi} className="list-disc pl-5 text-sm text-slate-700">
																{block.items.map((item, i) => (
																	<li key={i}>{item}</li>
																))}
															</ul>
														);
													case "steps":
														return (
															<ol key={bi} className="list-decimal pl-5 text-sm text-slate-700">
																{block.items.map((item, i) => (
																	<li key={i}>{item}</li>
																))}
															</ol>
														);
													case "callout":
														return (
															<div
																key={bi}
																className={`rounded-md border-l-4 p-3 text-sm ${block.variant === "tip" ? "border-amber-400 bg-amber-50" : block.variant === "warning" ? "border-red-400 bg-red-50" : "border-blue-400 bg-blue-50"}`}>
																<p className="font-semibold">{block.variant === "tip" ? "Tip" : block.variant === "warning" ? "Warning" : "Note"}</p>
																<p className="text-slate-700">{block.text}</p>
															</div>
														);
													case "code":
														return (
															<pre key={bi} className="overflow-x-auto rounded-md bg-slate-900 p-3 text-xs text-slate-100">
																<code>{block.code}</code>
															</pre>
														);
													case "table":
														return (
															<div key={bi} className="overflow-x-auto">
																<table className="min-w-full border border-slate-200 text-sm">
																	<thead className="bg-slate-100">
																		<tr>
																			{block.headers.map((h, i) => (
																				<th key={i} className="px-3 py-2 text-left text-xs font-semibold text-slate-700">
																					{h}
																				</th>
																			))}
																		</tr>
																	</thead>
																	<tbody>
																		{block.rows.map((row, r) => (
																			<tr key={r} className={r % 2 === 1 ? "bg-slate-50" : ""}>
																				{row.map((cell, c) => (
																					<td key={c} className="border-t border-slate-200 px-3 py-2 text-slate-700">
																						{cell}
																					</td>
																				))}
																			</tr>
																		))}
																	</tbody>
																</table>
															</div>
														);
													default:
														return null;
												}
											})}
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
