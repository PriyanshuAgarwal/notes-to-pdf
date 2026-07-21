// src/pdf/NotesPDF.tsx
import { Document, Page, View, Text } from "@react-pdf/renderer";
import type { StructuredNote, ContentBlock } from "@/lib/schema";
import { styles } from "./styles";

/**
 * The exported PDF document.
 *
 * This is the deterministic renderer: it takes the validated StructuredNote
 * JSON (the single source of truth) and draws it. It mirrors the on-screen
 * preview block-for-block via a `switch (block.type)` — same data in, same
 * structure out, so "what you see is what you export" holds.
 *
 * FONT NOTE: styles.ts registers a hosted Arial-like face. If you'd rather
 * avoid a network font at render time, delete the Font.register call in
 * styles.ts and change SANS to "Helvetica" (built in, metric-similar).
 */

const CALLOUT_LABELS = {
	note: "Note",
	tip: "Tip",
	warning: "Warning",
} as const;

function renderBlock(block: ContentBlock, key: number) {
	switch (block.type) {
		case "paragraph":
			return (
				<Text key={key} style={styles.paragraph}>
					{block.text}
				</Text>
			);

		case "subheading":
			return (
				<Text key={key} style={styles.subheading}>
					{block.text}
				</Text>
			);

		case "bullets":
			return (
				<View key={key} style={{ marginBottom: 8 }}>
					{block.items.map((item, i) => (
						<View key={i} style={styles.listItem}>
							<Text style={styles.listMarker}>•</Text>
							<Text style={styles.listText}>{item}</Text>
						</View>
					))}
				</View>
			);

		case "steps":
			return (
				<View key={key} style={{ marginBottom: 8 }}>
					{block.items.map((item, i) => (
						<View key={i} style={styles.listItem}>
							<Text style={styles.listMarker}>{i + 1}.</Text>
							<Text style={styles.listText}>{item}</Text>
						</View>
					))}
				</View>
			);

		case "code":
			return (
				<View key={key} style={styles.codeBlock}>
					{block.language ? <Text style={styles.codeLang}>{block.language}</Text> : null}
					<Text style={styles.codeText}>{block.code}</Text>
				</View>
			);

		case "callout": {
			const variantStyle = block.variant === "tip" ? styles.calloutTip : block.variant === "warning" ? styles.calloutWarn : styles.calloutNote;
			const labelColor = block.variant === "tip" ? styles.calloutTip.borderLeftColor : block.variant === "warning" ? styles.calloutWarn.borderLeftColor : styles.calloutNote.borderLeftColor;
			return (
				<View key={key} style={[styles.callout, variantStyle]}>
					<Text style={[styles.calloutLabel, { color: labelColor }]}>{CALLOUT_LABELS[block.variant]}</Text>
					<Text style={styles.calloutText}>{block.text}</Text>
				</View>
			);
		}

		default: {
			// Exhaustiveness guard — if a new block type is added to the schema and
			// not handled here, TypeScript flags this line at compile time.
			const _exhaustive: never = block;
			return null;
		}
	}
}

export function NotesPDF({ note }: { note: StructuredNote }) {
	return (
		<Document title={note.title}>
			<Page size="A4" style={styles.page}>
				<Text style={styles.title}>{note.title}</Text>
				{note.summary ? <Text style={styles.summary}>{note.summary}</Text> : null}
				<View style={styles.titleRule} />

				{note.sections.map((section, si) => (
					<View key={si} wrap={false /* keep short sections together */}>
						<Text style={styles.sectionHeading}>{section.heading}</Text>
						{section.blocks.map((block, bi) => renderBlock(block, bi))}
					</View>
				))}

				<Text style={styles.footer} render={({ pageNumber, totalPages }) => `${note.title}  ·  Page ${pageNumber} of ${totalPages}`} fixed />
			</Page>
		</Document>
	);
}
