"""
Realtor AIOS -- Partnership Proposal
Generates a professional, print-ready PDF proposal.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak,
    KeepTogether
)

ACCENT = HexColor("#c0392b")
ACCENT_TINT = HexColor("#faece9")
INK = HexColor("#1a1a1a")
INK2 = HexColor("#3a3a3a")
MUTED = HexColor("#6b6b6b")
LINE = HexColor("#d8d8d8")
PANEL = HexColor("#f6f5f2")
GOOD = HexColor("#1e7a1e")
WARN = HexColor("#a06600")
WARN_TINT = HexColor("#fdf3e0")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle("Eyebrow", fontName="Helvetica", fontSize=10, textColor=MUTED,
    leading=13, spaceAfter=6))
styles.add(ParagraphStyle("Cover", fontName="Helvetica-Bold", fontSize=30, textColor=INK,
    leading=35, spaceAfter=10))
styles.add(ParagraphStyle("CoverSub", fontName="Helvetica", fontSize=13, textColor=MUTED,
    leading=18, spaceAfter=4))
styles.add(ParagraphStyle("H1", fontName="Helvetica-Bold", fontSize=17, textColor=INK,
    spaceBefore=26, spaceAfter=10, leading=21))
styles.add(ParagraphStyle("H2", fontName="Helvetica-Bold", fontSize=12.5, textColor=INK,
    spaceBefore=14, spaceAfter=6, leading=16))
styles.add(ParagraphStyle("Body", fontName="Helvetica", fontSize=10.3, textColor=INK2,
    leading=15, alignment=TA_LEFT))
styles.add(ParagraphStyle("BodyBold", parent=styles["Body"], fontName="Helvetica-Bold", textColor=INK))
styles.add(ParagraphStyle("Small", fontName="Helvetica", fontSize=8.7, textColor=MUTED, leading=12.5))
styles.add(ParagraphStyle("BulletItem", parent=styles["Body"], leftIndent=14, bulletIndent=2, spaceAfter=5))
styles.add(ParagraphStyle("StepTitle", fontName="Helvetica-Bold", fontSize=11.5, textColor=INK, leading=14))
styles.add(ParagraphStyle("StepTag", fontName="Helvetica-Bold", fontSize=8.5, textColor=ACCENT,
    leading=11))
styles.add(ParagraphStyle("BigNum", fontName="Helvetica-Bold", fontSize=22, textColor=ACCENT, leading=24))
styles.add(ParagraphStyle("BigNumLabel", fontName="Helvetica", fontSize=9.5, textColor=MUTED, leading=13))
styles.add(ParagraphStyle("Flag", fontName="Helvetica-Bold", fontSize=9.5, textColor=WARN, leading=13))
styles.add(ParagraphStyle("Sig", fontName="Helvetica", fontSize=10, textColor=INK2, leading=15))
styles.add(ParagraphStyle("Footer", fontName="Helvetica", fontSize=8.3, textColor=MUTED, leading=11))

story = []
doc = SimpleDocTemplate("Realtor-AIOS-Partnership-Proposal.pdf", pagesize=letter,
    topMargin=0.85*inch, bottomMargin=0.75*inch, leftMargin=0.85*inch, rightMargin=0.85*inch)

# ---------------------------------------------------------------- cover
story.append(Spacer(1, 0.6*inch))
story.append(Paragraph("TSANG AI CONSULTING", styles["Eyebrow"]))
story.append(Paragraph("Realtor AIOS", styles["Cover"]))
story.append(Paragraph("Partnership Proposal", styles["CoverSub"]))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="35%", thickness=2, color=ACCENT, spaceAfter=16, hAlign="LEFT"))
story.append(Paragraph(
    "An AI Operating System for realtors — installed personally, one module at a "
    "time, so a non-technical agent actually uses it instead of abandoning it.",
    styles["Body"]))
story.append(Spacer(1, 40))

overview = [
    [Paragraph("<b>What it is</b>", styles["Small"]),
     Paragraph("9 connected modules + one dashboard, running in Claude Code on the realtor's own computer", styles["Body"])],
    [Paragraph("<b>Who it's for</b>", styles["Small"]),
     Paragraph("Individual realtors and small teams — zero technical skill required", styles["Body"])],
    [Paragraph("<b>This document</b>", styles["Small"]),
     Paragraph("A partnership structure for referring Realtor AIOS into your network", styles["Body"])],
]
t = Table(overview, colWidths=[1.5*inch, 4.65*inch])
t.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), PANEL),
    ("BOX", (0,0), (-1,-1), 0.6, LINE),
    ("INNERGRID", (0,0), (-1,-1), 0.6, LINE),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("LEFTPADDING", (0,0), (-1,-1), 10), ("RIGHTPADDING", (0,0), (-1,-1), 10),
    ("TOPPADDING", (0,0), (-1,-1), 9), ("BOTTOMPADDING", (0,0), (-1,-1), 9),
]))
story.append(t)
story.append(PageBreak())

# ---------------------------------------------------------------- onboarding
story.append(Paragraph("THE ONBOARDING EXPERIENCE", styles["Eyebrow"]))
story.append(Paragraph("What a realtor you refer actually gets", styles["H1"]))
story.append(Paragraph(
    "This isn't a self-serve download. Every client gets a hands-on install, "
    "personally, because a non-technical realtor who's handed a folder and a "
    "PDF guide will quit by module two. That's the commitment behind this "
    "partnership — and why referring into it doesn't put your relationship "
    "at risk.", styles["Body"]))

def step(tag, title, body):
    story.append(Spacer(1, 12))
    story.append(Paragraph(tag, styles["StepTag"]))
    story.append(Paragraph(title, styles["StepTitle"]))
    story.append(Paragraph(body, styles["Body"]))

step("DAY 1 &middot; UP TO 3 HOURS &middot; ZOOM OR IN PERSON",
    "The full install session",
    "I sit down with them — not a call to schedule a call, the actual install. "
    "Within this session: 1&ndash;2 hours fully understanding their business "
    "(their market, their niche, how they actually work) and capturing their "
    "writing voice, so day one already sounds like them, not generic AI. The "
    "remaining time gets the foundation installed and their first real output "
    "queued before I leave.")

step("DAYS 1&ndash;30 &middot; ONE MODULE A WEEK &middot; 15-MIN WEEKLY CHECK-IN",
    "The 30-day rollout",
    "Nine modules on day one would overwhelm anyone. Instead, one new module "
    "installs each week, paired with a 15-minute check-in to confirm what's "
    "working, answer questions, and green-light the next one. By day 30 they "
    "have the full system running &mdash; at a pace they actually absorbed.")

step("ONGOING",
    "What's running by the end",
    "A realtor with all nine modules installed, their own voice captured, a "
    "month of content and lead-response habits already in motion, and a "
    "standing weekly touchpoint to keep it tuned.")

story.append(Spacer(1, 16))
story.append(HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=14))
story.append(Paragraph("THE DASHBOARD", styles["Eyebrow"]))
story.append(Paragraph("One front door for all nine modules", styles["H2"]))
story.append(Paragraph(
    "Every module is reachable from a single dashboard — no command-hunting. "
    "Organized around how a realtor's week actually runs:", styles["Body"]))

dash_rows = [
    ["Admin", "Listing Prep, Transaction Coordinator — walk into appointments ready, nothing slips between offer and close"],
    ["Marketing", "Marketing Engine — a week of on-brand content, researched and drafted in their voice"],
    ["Clients & Leads", "Client Profiles, Lead Engine, Monday Skill, Market Research — every inquiry caught, every client matched to real listings at real market value"],
    ["Access anywhere", "Claude Code runs on the desktop and reaches the same workspace from web and mobile — not chained to one computer"],
]
dt = Table([[Paragraph(f"<b>{a}</b>", styles["Body"]), Paragraph(b, styles["Body"])] for a,b in dash_rows],
    colWidths=[1.3*inch, 4.85*inch])
dt.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("LINEBELOW", (0,0), (-1,-2), 0.5, LINE),
    ("TOPPADDING", (0,0), (-1,-1), 8), ("BOTTOMPADDING", (0,0), (-1,-1), 8),
    ("LEFTPADDING", (0,0), (-1,-1), 0),
]))
story.append(dt)
story.append(PageBreak())

# ---------------------------------------------------------------- pricing
story.append(Paragraph("PRICING & PARTNERSHIP TERMS", styles["Eyebrow"]))
story.append(Paragraph("What it costs, what you earn", styles["H1"]))

price_cards = [
    [Paragraph("$2,500", styles["BigNum"]), Paragraph("STANDARD PACKAGE", styles["BigNumLabel"]),
     Paragraph("Full install, all 9 modules, 30-day rollout, one-time.", styles["Small"])],
    [Paragraph("$500", styles["BigNum"]), Paragraph("FOUNDING-PARTNER RATE", styles["BigNumLabel"]),
     Paragraph("Your first 3 referred clients only &mdash; makes it an easy yes.", styles["Small"])],
    [Paragraph("30%", styles["BigNum"]), Paragraph("REFERRAL COMMISSION", styles["BigNumLabel"]),
     Paragraph("Paid to you on every client you refer who signs on.", styles["Small"])],
]
pt = Table([price_cards], colWidths=[1.95*inch]*3)
pt.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), PANEL),
    ("BOX", (0,0), (-1,-1), 0.6, LINE),
    ("LINEAFTER", (0,0), (-2,0), 0.6, LINE),
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("LEFTPADDING", (0,0), (-1,-1), 14), ("RIGHTPADDING", (0,0), (-1,-1), 14),
    ("TOPPADDING", (0,0), (-1,-1), 14), ("BOTTOMPADDING", (0,0), (-1,-1), 14),
]))
story.append(pt)

story.append(Spacer(1, 12))
flag = Table([[Paragraph(
    "&#9888; <b>Placeholder — needs your input.</b> Your notes included "
    '"[80 50, 30%]" alongside this pricing, and I could not tell whether that '
    "meant a tiered discount schedule, a cost/margin breakdown, or something "
    "else. I did not guess at numbers for a document going to a real partner "
    "— replace this box once you tell me what it should say.",
    styles["Body"])]], colWidths=[6.15*inch])
flag.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), WARN_TINT),
    ("BOX", (0,0), (-1,-1), 0.6, WARN),
    ("LEFTPADDING", (0,0), (-1,-1), 12), ("RIGHTPADDING", (0,0), (-1,-1), 12),
    ("TOPPADDING", (0,0), (-1,-1), 10), ("BOTTOMPADDING", (0,0), (-1,-1), 10),
]))
story.append(flag)

story.append(Spacer(1, 12))
story.append(Paragraph("How the partnership works", styles["H2"]))
terms = [
    "You introduce Realtor AIOS to realtors in your network — a warm introduction is all that's needed.",
    "Every client you refer gets the identical white-glove onboarding described above — your name stays attached to a good experience, not a self-serve link.",
    "Your first 3 referred clients are onboarded at the $500 founding-partner rate — an easy first yes for people you vouch for.",
    "You earn 30% commission on each successful referral, paid after the client's onboarding is complete.",
    "No exclusivity required, no cap on referrals — this scales with your network, not against it.",
]
for tterm in terms:
    story.append(Paragraph(f"&bull; {tterm}", styles["BulletItem"]))

story.append(Spacer(1, 12))
story.append(Paragraph("Why this, why now", styles["H2"]))
story.append(Paragraph(
    "This isn't a pitch deck — it's a working product. Nine modules are built and "
    "tested end to end: a client conversation becomes a structured profile and a "
    "drafted follow-up email; an MLS export or a plain-language search becomes a "
    "shortlist matched against real market comps; a week of content gets "
    "researched and written in the realtor's own voice. The dashboard that ties "
    "it together is built. What's being proposed is distribution, not a bet on "
    "whether the product will exist.", styles["Body"]))

sig = Table([
    [Paragraph("_______________________________", styles["Sig"]), Paragraph("_______________________________", styles["Sig"])],
    [Paragraph("Raymond Tsang &middot; TsangAIConsulting", styles["Small"]), Paragraph("Partner &middot; Date", styles["Small"])],
], colWidths=[3.1*inch, 3.1*inch])
sig.setStyle(TableStyle([("TOPPADDING",(0,0),(-1,-1),4), ("BOTTOMPADDING",(0,1),(-1,1),0)]))

next_step_block = [
    Spacer(1, 14),
    HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=10),
    Paragraph("Next step", styles["H2"]),
    Paragraph(
        "If this structure works for you, reply and we'll set the first referral in "
        "motion — I'll run their full install session personally, same as every "
        "client after.", styles["Body"]),
    Spacer(1, 14),
    sig,
]
story.append(KeepTogether(next_step_block))

story.append(Spacer(1, 26))
story.append(HRFlowable(width="100%", thickness=0.4, color=LINE, spaceAfter=8))
story.append(Paragraph(
    "This proposal is a working draft — pricing marked above needs confirmation "
    "before this goes to a real partner. TsangAIConsulting &middot; Langley, BC.",
    styles["Footer"]))

doc.build(story)
print("wrote Realtor-AIOS-Partnership-Proposal.pdf")
