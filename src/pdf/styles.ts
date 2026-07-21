// src/pdf/styles.ts
import { StyleSheet } from "@react-pdf/renderer";

/**
 * Design tokens for the exported PDF, matching the established
 * interview-revision-document conventions:
 *   - Helvetica (sans) for everything except code
 *   - Primary blue #1E4E8C for headings
 *   - Dark gray #333333 for body text
 *   - Light blue #D6E4F7 for note/analogy callouts
 *   - Amber #FFF8E1 for tip callouts
 *   - Dark #1E1E1E / #D4D4D4 for code blocks
 *
 * NOTE on fonts: @react-pdf does not have Arial built in. We use Helvetica,
 * which is built in and has normal, bold, italic, and bold-italic variants.
 * Courier is also built in and used for code.
 */

export const COLORS = {
	primary: "#1E4E8C",
	body: "#333333",
	muted: "#6B7280",
	noteBg: "#D6E4F7",
	noteBorder: "#1E4E8C",
	tipBg: "#FFF8E1",
	tipBorder: "#E0A800",
	warnBg: "#FDECEA",
	warnBorder: "#C0392B",
	codeBg: "#1E1E1E",
	codeText: "#D4D4D4",
	tableHeaderBg: "#1E4E8C",
	tableHeaderText: "#FFFFFF",
	tableRowAlt: "#F3F6FB",
	tableBorder: "#D0D7E2",
	pageBg: "#FFFFFF",
} as const;

const SANS = "Helvetica";
const MONO = "Courier"; // built into @react-pdf

export const styles = StyleSheet.create({
	page: {
		backgroundColor: COLORS.pageBg,
		paddingHorizontal: 48,
		paddingVertical: 44,
		fontFamily: SANS,
		fontSize: 11,
		color: COLORS.body,
		lineHeight: 1.5,
	},

	// --- title + summary ---
	title: {
		fontFamily: SANS,
		fontWeight: 700,
		fontSize: 22,
		color: COLORS.primary,
		marginBottom: 6,
	},
	summary: {
		fontSize: 11,
		color: COLORS.muted,
		fontStyle: "italic",
		marginBottom: 18,
	},
	titleRule: {
		borderBottomWidth: 2,
		borderBottomColor: COLORS.primary,
		marginBottom: 18,
	},

	// --- headings ---
	sectionHeading: {
		fontFamily: SANS,
		fontWeight: 700,
		fontSize: 15,
		color: COLORS.primary,
		marginTop: 16,
		marginBottom: 8,
	},
	subheading: {
		fontFamily: SANS,
		fontWeight: 700,
		fontSize: 12,
		color: COLORS.body,
		marginTop: 10,
		marginBottom: 5,
	},

	// --- text blocks ---
	paragraph: {
		fontSize: 11,
		color: COLORS.body,
		marginBottom: 8,
	},

	// --- lists ---
	listItem: {
		flexDirection: "row",
		marginBottom: 3,
	},
	listMarker: {
		width: 16,
		fontSize: 11,
		color: COLORS.body,
	},
	listText: {
		flex: 1,
		fontSize: 11,
		color: COLORS.body,
	},

	// --- code ---
	codeBlock: {
		backgroundColor: COLORS.codeBg,
		borderRadius: 4,
		padding: 10,
		marginBottom: 10,
	},
	codeLang: {
		fontFamily: MONO,
		fontSize: 8,
		color: "#8A8A8A",
		marginBottom: 4,
		textTransform: "uppercase",
	},
	codeText: {
		fontFamily: MONO,
		fontSize: 9,
		color: COLORS.codeText,
		lineHeight: 1.4,
	},

	// --- callouts ---
	callout: {
		borderLeftWidth: 3,
		borderRadius: 3,
		padding: 8,
		marginBottom: 10,
	},
	calloutNote: { backgroundColor: COLORS.noteBg, borderLeftColor: COLORS.noteBorder },
	calloutTip: { backgroundColor: COLORS.tipBg, borderLeftColor: COLORS.tipBorder },
	calloutWarn: { backgroundColor: COLORS.warnBg, borderLeftColor: COLORS.warnBorder },
	calloutLabel: {
		fontFamily: SANS,
		fontWeight: 700,
		fontSize: 9,
		marginBottom: 3,
		textTransform: "uppercase",
	},
	calloutText: { fontSize: 10, color: COLORS.body },

	// --- table ---
	table: {
		marginBottom: 12,
		borderWidth: 1,
		borderColor: COLORS.tableBorder,
		borderRadius: 3,
	},
	tableRow: { flexDirection: "row" },
	tableHeaderRow: { backgroundColor: COLORS.tableHeaderBg },
	tableCell: {
		flex: 1,
		padding: 6,
		fontSize: 9,
		color: COLORS.body,
		borderRightWidth: 1,
		borderRightColor: COLORS.tableBorder,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.tableBorder,
	},
	tableHeaderCell: {
		color: COLORS.tableHeaderText,
		fontWeight: 700,
	},
	tableRowAlt: { backgroundColor: COLORS.tableRowAlt },

	// --- footer ---
	footer: {
		position: "absolute",
		bottom: 24,
		left: 48,
		right: 48,
		fontSize: 8,
		color: COLORS.muted,
		textAlign: "center",
	},
});
