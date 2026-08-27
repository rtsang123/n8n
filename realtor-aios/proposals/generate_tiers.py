"""
Realtor AIOS -- Package Tiers & Pricing (one-pager)
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

ACCENT = HexColor("#c0392b")
INK = HexColor("#1a1a1a")
INK2 = HexColor("#3a3a3a")
MUTED = HexColor("#6b6b6b")
LINE = HexColor("#d8d8d8")
PANEL = HexColor("#f6f5f2")
GOOD = HexColor("#1e7a1e")
GOOD_TINT = HexColor("#eef6ee")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle("Eyebrow", fontName="Helvetica", fontSize=10, textColor=MUTED, leading=13, spaceAfter=4))
styles.add(ParagraphStyle("PageTitle", fontName="Helvetica-Bold", fontSize=24, textColor=INK, leading=28, spaceAfter=8))
styles.add(ParagraphStyle("Sub", fontName="Helvetica", fontSize=11, textColor=MUTED, leading=15))
styles.add(ParagraphStyle("TierName", fontName="Helvetica-Bold", fontSize=15, textColor=INK, leading=18))
styles.add(ParagraphStyle("TierFor", fontName="Helvetica-Oblique", fontSize=9.5, textColor=MUTED, leading=13, spaceAfter=8))
styles.add(ParagraphStyle("Price", fontName="Helvetica-Bold", fontSize=20, textColor=ACCENT, leading=23))
styles.add(ParagraphStyle("PriceSub", fontName="Helvetica", fontSize=9, textColor=MUTED, leading=12, spaceAfter=10))
styles.add(ParagraphStyle("ModItem", fontName="Helvetica", fontSize=8.9, textColor=INK2, leading=12.5))
styles.add(ParagraphStyle("ModItemMuted", fontName="Helvetica", fontSize=8.9, textColor=MUTED, leading=12.5))
styles.add(ParagraphStyle("H2", fontName="Helvetica-Bold", fontSize=12.5, textColor=INK, spaceBefore=10, spaceAfter=5, leading=15))
styles.add(ParagraphStyle("Body", fontName="Helvetica", fontSize=9.1, textColor=INK2, leading=12.5))
styles.add(ParagraphStyle("Small", fontName="Helvetica", fontSize=8.3, textColor=MUTED, leading=12))
styles.add(ParagraphStyle("BulletItem", parent=styles["Body"], leftIndent=12, spaceAfter=3))

doc = SimpleDocTemplate("Realtor-AIOS-Package-Tiers.pdf", pagesize=letter,
    topMargin=0.45*inch, bottomMargin=0.4*inch, leftMargin=0.7*inch, rightMargin=0.7*inch)
story = []

story.append(Paragraph("TSANG AI CONSULTING", styles["Eyebrow"]))
story.append(Paragraph("Realtor AIOS — Packages & Pricing", styles["PageTitle"]))
story.append(Paragraph(
    "Two tiers, same white-glove install. The difference is how much of the system you start with.",
    styles["Sub"]))
story.append(Spacer(1, 2))
story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=8))

# ---------------------------------------------------------------- tier columns
starter_included = [
    ("Context OS", "Learns the business — required foundation"),
    ("Brain Clone", "Captures the voice — required foundation"),
    ("Lead Engine", "Answers every inquiry fast, never loses a follow-up"),
    ("Listing Marketing", "Description + full social package per listing"),
]
starter_upsell = ["Marketing Engine", "Market Research", "Client Profiles",
    "Monday Skill", "Listing Prep", "Transaction Coordinator"]

complete_included = [
    ("Context OS", "Learns the business"),
    ("Brain Clone", "Captures the voice"),
    ("Lead Engine", "Never loses a follow-up"),
    ("Listing Marketing", "Description + social package per listing"),
    ("Marketing Engine", "Weekly content, evergreen brand-building"),
    ("Market Research", "Sold-comp price reads that sharpen every match"),
    ("Client Profiles", "Buyer profiles, CRM-ready, from a conversation"),
    ("Monday Skill", "Matches listings to clients automatically"),
    ("Listing Prep", "Walk into every listing appointment ready"),
    ("Transaction Coordinator", "Nothing slips from offer to keys"),
]

def mod_rows(items, muted=False):
    style = styles["ModItemMuted"] if muted else styles["ModItem"]
    rows = []
    for name, desc in items:
        rows.append(Paragraph(f"<b>{name}</b> — {desc}" if not muted else f"{name} — {desc}", style))
    return rows

starter_col = [
    Paragraph("STARTER", styles["TierName"]),
    Paragraph("For a realtor who needs the two biggest pain points solved first", styles["TierFor"]),
    Paragraph("$750 CAD", styles["Price"]),
    Paragraph("one-time setup, then $95 CAD/month", styles["PriceSub"]),
] + mod_rows(starter_included) + [
    Spacer(1, 8),
    Paragraph("Upgrade path available:", styles["Small"]),
    Paragraph(", ".join(starter_upsell), styles["ModItemMuted"]),
]

complete_col = [
    Paragraph("COMPLETE", styles["TierName"]),
    Paragraph("For a realtor ready to run their whole practice on it", styles["TierFor"]),
    Paragraph("$1,500 CAD", styles["Price"]),
    Paragraph("one-time setup, then $195 CAD/month", styles["PriceSub"]),
] + mod_rows(complete_included)

tier_table = Table([[starter_col, complete_col]], colWidths=[3.3*inch, 3.3*inch])
tier_table.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("BACKGROUND", (0,0), (0,0), PANEL),
    ("BACKGROUND", (1,0), (1,0), GOOD_TINT),
    ("BOX", (0,0), (0,0), 0.6, LINE),
    ("BOX", (1,0), (1,0), 0.6, GOOD),
    ("LEFTPADDING", (0,0), (-1,-1), 16), ("RIGHTPADDING", (0,0), (-1,-1), 16),
    ("TOPPADDING", (0,0), (-1,-1), 12), ("BOTTOMPADDING", (0,0), (-1,-1), 12),
]))
story.append(tier_table)

story.append(Paragraph("What both tiers include, always", styles["H2"]))
for line in [
    "The same white-glove install — Context OS and Brain Clone are hands-on for every client, no self-serve download.",
    "Never invented facts — every module leaves a placeholder rather than guessing a number, a feature, or a claim.",
    "No CRM, no email, no MLS integration required — everything is paste-in, copy-out by design.",
]:
    story.append(Paragraph(f"&bull; {line}", styles["BulletItem"]))

story.append(Paragraph("Why these numbers", styles["H2"]))
for line in [
    "Every comparable tool found is self-serve — sign up and use it yourself. Saleswise (CMAs + listing copy + scripts) is $39/mo; Coffee &amp; Contracts (social templates only, still DIY) is $74/mo; Structurely (AI lead response alone) is $179/mo. Typical realtor AI spend clusters at $80&ndash;150/mo across 1&ndash;3 separate tools.",
    "Complete replaces roughly that same stack &mdash; lead response, listing content, evergreen content, and CMA research &mdash; in one connected system, personally installed, for less than most agents already spend across separate subscriptions.",
    "The setup fee reflects real hands-on time: a 1&ndash;3 hour install session plus weekly 15-minute check-ins through the rollout &mdash; the thing no self-serve competitor offers at any price.",
    "Full CRM+AI platforms (Ylopo + a CRM) run $1,500&ndash;3,500+/month combined &mdash; Complete sits well under that ceiling while covering more ground for a solo agent.",
]:
    story.append(Paragraph(f"&bull; {line}", styles["BulletItem"]))

story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=6))
story.append(Paragraph(
    "Working draft — these figures are a researched recommendation, not yet reconciled with prior pricing "
    "stated elsewhere. TsangAIConsulting &middot; Langley, BC.",
    styles["Small"]))

doc.build(story)
print("wrote Realtor-AIOS-Package-Tiers.pdf")
