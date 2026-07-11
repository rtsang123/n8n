import { jsPDF } from 'jspdf';

import type { AssessmentResult, SiteConfig } from './types';

interface LeadInfo {
	name: string;
	email: string;
}

// Layout constants (points; A4 = 595 x 842)
const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 56;
const CONTENT_W = PAGE_W - MARGIN * 2;

function hexToRgb(hex: string): [number, number, number] {
	const h = hex.replace('#', '');
	return [
		parseInt(h.substring(0, 2), 16),
		parseInt(h.substring(2, 4), 16),
		parseInt(h.substring(4, 6), 16),
	];
}

export function generatePdf(result: AssessmentResult, lead: LeadInfo, config: SiteConfig): void {
	const doc = new jsPDF({ unit: 'pt', format: 'a4' });
	const brand = hexToRgb(config.colors.brand);
	const ink: [number, number, number] = [23, 23, 26];
	const soft: [number, number, number] = [110, 110, 118];
	let y = 0;

	const ensureSpace = (needed: number) => {
		if (y + needed > PAGE_H - MARGIN) {
			doc.addPage();
			y = MARGIN;
		}
	};

	const heading = (text: string) => {
		ensureSpace(60);
		y += 18;
		doc.setFont('helvetica', 'bold');
		doc.setFontSize(15);
		doc.setTextColor(...brand);
		doc.text(text, MARGIN, y);
		y += 8;
		doc.setDrawColor(230, 230, 234);
		doc.setLineWidth(1);
		doc.line(MARGIN, y, PAGE_W - MARGIN, y);
		y += 18;
	};

	const paragraph = (text: string, options?: { bold?: boolean; color?: [number, number, number] }) => {
		doc.setFont('helvetica', options?.bold ? 'bold' : 'normal');
		doc.setFontSize(10.5);
		doc.setTextColor(...(options?.color ?? ink));
		const lines = doc.splitTextToSize(text, CONTENT_W) as string[];
		ensureSpace(lines.length * 15 + 6);
		doc.text(lines, MARGIN, y);
		y += lines.length * 15 + 6;
	};

	const bullet = (text: string, index?: number) => {
		doc.setFont('helvetica', 'normal');
		doc.setFontSize(10.5);
		doc.setTextColor(...ink);
		const marker = index !== undefined ? `${index}.` : '•';
		const lines = doc.splitTextToSize(text, CONTENT_W - 22) as string[];
		ensureSpace(lines.length * 15 + 4);
		doc.setFont('helvetica', 'bold');
		doc.setTextColor(...brand);
		doc.text(marker, MARGIN, y);
		doc.setFont('helvetica', 'normal');
		doc.setTextColor(...ink);
		doc.text(lines, MARGIN + 22, y);
		y += lines.length * 15 + 4;
	};

	// ---------- Header band ----------
	doc.setFillColor(...brand);
	doc.rect(0, 0, PAGE_W, 130, 'F');
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(11);
	doc.setTextColor(255, 255, 255);
	doc.text(config.businessName.toUpperCase(), MARGIN, 48);
	doc.setFontSize(24);
	doc.text(result.assessmentTitle, MARGIN, 80);
	doc.setFont('helvetica', 'normal');
	doc.setFontSize(10.5);
	doc.text(
		`Personalized report for ${lead.name}  •  ${new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})}`,
		MARGIN,
		104,
	);
	y = 170;

	// ---------- Score ----------
	const cx = MARGIN + 52;
	doc.setDrawColor(232, 232, 236);
	doc.setLineWidth(9);
	doc.circle(cx, y + 20, 44, 'S');
	doc.setDrawColor(...brand);
	doc.circle(cx, y + 20, 44, 'S');
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(26);
	doc.setTextColor(...ink);
	doc.text(String(result.overallScore), cx, y + 24, { align: 'center' });
	doc.setFontSize(8.5);
	doc.setTextColor(...soft);
	doc.text('OUT OF 100', cx, y + 40, { align: 'center' });

	doc.setFont('helvetica', 'bold');
	doc.setFontSize(17);
	doc.setTextColor(...brand);
	doc.text(result.band.label, MARGIN + 128, y + 6);
	doc.setFont('helvetica', 'normal');
	doc.setFontSize(10.5);
	doc.setTextColor(...ink);
	const summaryLines = doc.splitTextToSize(result.band.summary, CONTENT_W - 128) as string[];
	doc.text(summaryLines, MARGIN + 128, y + 26);
	y += Math.max(90, summaryLines.length * 15 + 50);

	// ---------- Key numbers ----------
	heading('What This Is Costing You');
	paragraph(`Estimated hours you could save: ${result.band.hoursSavedPerWeek}`, { bold: true });
	paragraph(`Estimated revenue opportunity: ${result.band.revenueOpportunity}`, { bold: true });
	for (const metric of result.metrics) {
		paragraph(`${metric.label}: ${metric.formatted}`, { bold: true });
		if (metric.description) paragraph(metric.description, { color: soft });
	}

	// ---------- Category breakdown ----------
	if (result.categoryScores.length > 1) {
		heading('Your Scores by Area');
		for (const cat of result.categoryScores) {
			ensureSpace(34);
			doc.setFont('helvetica', 'bold');
			doc.setFontSize(10);
			doc.setTextColor(...ink);
			doc.text(cat.label, MARGIN, y);
			doc.text(`${cat.score}`, PAGE_W - MARGIN, y, { align: 'right' });
			y += 7;
			doc.setFillColor(236, 236, 240);
			doc.roundedRect(MARGIN, y, CONTENT_W, 7, 3.5, 3.5, 'F');
			doc.setFillColor(...brand);
			doc.roundedRect(MARGIN, y, Math.max(10, CONTENT_W * (cat.score / 100)), 7, 3.5, 3.5, 'F');
			y += 22;
		}
	}

	// ---------- Strengths & weaknesses ----------
	if (result.strengths.length > 0) {
		heading('Your Strengths');
		for (const s of result.strengths) bullet(`${s.label} (${s.score}/100)`);
	}
	if (result.weaknesses.length > 0) {
		heading('Your Biggest Bottlenecks');
		for (const w of result.weaknesses) bullet(`${w.label} (${w.score}/100)`);
	}

	// ---------- Recommendations ----------
	heading('Top 5 Recommendations');
	result.recommendations.forEach((rec, i) => bullet(rec, i + 1));

	// ---------- 30-day plan ----------
	heading('Your 30-Day Action Plan');
	result.band.actionPlan.forEach((step, i) => bullet(step, i + 1));

	// ---------- Tools ----------
	if (result.tools.length > 0) {
		heading('Recommended AI Tools');
		for (const tool of result.tools) bullet(`${tool.name} — ${tool.use}`);
	}

	// ---------- CTA ----------
	ensureSpace(150);
	y += 12;
	doc.setFillColor(...brand);
	doc.roundedRect(MARGIN, y, CONTENT_W, 110, 10, 10, 'F');
	doc.setFont('helvetica', 'bold');
	doc.setFontSize(15);
	doc.setTextColor(255, 255, 255);
	doc.text('Ready to fix this? Book your free AI Audit.', MARGIN + 24, y + 34);
	doc.setFont('helvetica', 'normal');
	doc.setFontSize(10.5);
	doc.text(
		doc.splitTextToSize(
			`In 30 minutes we will walk through this report together and map out exactly which fixes will save you the most time and money. No obligation, no jargon.`,
			CONTENT_W - 48,
		),
		MARGIN + 24,
		y + 56,
	);
	doc.setFont('helvetica', 'bold');
	doc.textWithLink(config.bookingUrl, MARGIN + 24, y + 96, { url: config.bookingUrl });
	y += 130;

	doc.setFont('helvetica', 'normal');
	doc.setFontSize(8.5);
	doc.setTextColor(...soft);
	doc.text(
		`${config.businessName}  •  ${config.contactEmail}  •  Prepared for ${lead.email}`,
		MARGIN,
		PAGE_H - 30,
	);

	doc.save(`${result.assessmentId}-report.pdf`);
}
