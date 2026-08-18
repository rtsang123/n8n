"""
Generates one weekly-match PDF report per client, using the listing data
already produced during live testing of monday-skill's /weekly-match.

IMPORTANT: All listing data here is fictional test data created during
module testing (see clients/profiles/*.md Search log sections) — realtor.ca
scraping was attempted and blocked at the network level, confirming the
product's own design choice: live listing data should come from the
realtor pasting in what they found themselves, not automated scraping.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

ACCENT = HexColor("#c0392b")      # vermilion, close to the brand accent, print-safe
INK = HexColor("#1a1a1a")
MUTED = HexColor("#6b6b6b")
GOOD = HexColor("#1e7a1e")
LINE = HexColor("#d8d8d8")
PANEL = HexColor("#f6f5f2")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle("BrandEyebrow", fontName="Helvetica", fontSize=9,
    textColor=MUTED, spaceAfter=2, leading=11))
styles.add(ParagraphStyle("ReportTitle", fontName="Helvetica-Bold", fontSize=20,
    textColor=INK, spaceAfter=2, leading=24))
styles.add(ParagraphStyle("ClientLine", fontName="Helvetica", fontSize=11,
    textColor=MUTED, spaceAfter=14, leading=14))
styles.add(ParagraphStyle("H2", fontName="Helvetica-Bold", fontSize=13,
    textColor=INK, spaceBefore=16, spaceAfter=8, leading=16))
styles.add(ParagraphStyle("Body", fontName="Helvetica", fontSize=10,
    textColor=INK, leading=14, alignment=TA_LEFT))
styles.add(ParagraphStyle("Small", fontName="Helvetica", fontSize=8.5,
    textColor=MUTED, leading=12))
styles.add(ParagraphStyle("ListingAddr", fontName="Helvetica-Bold", fontSize=11.5,
    textColor=INK, spaceAfter=2, leading=14))
styles.add(ParagraphStyle("ListingMeta", fontName="Helvetica", fontSize=9.5,
    textColor=MUTED, spaceAfter=4, leading=13))
styles.add(ParagraphStyle("ListingWhy", fontName="Helvetica", fontSize=9.5,
    textColor=INK, leading=13))
styles.add(ParagraphStyle("PriceUp", fontName="Helvetica-Bold", fontSize=10,
    textColor=ACCENT))
styles.add(ParagraphStyle("PriceDown", fontName="Helvetica-Bold", fontSize=10,
    textColor=GOOD))
styles.add(ParagraphStyle("PriceNeutral", fontName="Helvetica-Bold", fontSize=10,
    textColor=INK))
styles.add(ParagraphStyle("Disclaimer", fontName="Helvetica-Oblique", fontSize=8,
    textColor=MUTED, leading=11))


def header(realtor, client_name, report_date):
    return [
        Paragraph("REALTOR AIOS &middot; WEEKLY MATCH REPORT", styles["BrandEyebrow"]),
        Paragraph(f"Homes for {client_name}", styles["ReportTitle"]),
        Paragraph(f"Prepared by {realtor} &middot; Pacific Gate Realty &middot; {report_date}",
                   styles["ClientLine"]),
        HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=14),
    ]


def looking_for_block(criteria_lines):
    rows = [[Paragraph(f"<b>{k}</b>", styles["Small"]), Paragraph(v, styles["Body"])]
            for k, v in criteria_lines if v and v.strip() not in ("—", "")]
    t = Table(rows, colWidths=[1.4 * inch, 4.6 * inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


def listing_block(addr, meta, why, price=None, price_change=None):
    """
    price: the plain current price, shown in neutral ink (e.g. "$605,000").
    price_change: only set when there's an actual comparison to a prior
    price — "up" or "down" — colored accordingly. Never infer direction
    from text; pass it explicitly so a plain price is never mistaken for
    a warning.
    """
    flow = [Paragraph(addr, styles["ListingAddr"]), Paragraph(meta, styles["ListingMeta"])]
    if price:
        style = {"up": styles["PriceUp"], "down": styles["PriceDown"]}.get(price_change, styles["PriceNeutral"])
        flow.append(Paragraph(price, style))
        flow.append(Spacer(1, 3))
    flow.append(Paragraph(why, styles["ListingWhy"]))
    flow.append(Spacer(1, 12))
    return flow


def gone_block(addr, note):
    return [
        Paragraph(f"<strike>{addr}</strike> &mdash; <i>{note}</i>", styles["ListingMeta"]),
        Spacer(1, 6),
    ]


def build_report(path, client_name, criteria, matches, borderline, gone, outreach):
    doc = SimpleDocTemplate(path, pagesize=letter,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch)
    story = []
    story += header("Jas Sandhu", client_name, "September 6, 2026")

    story.append(Paragraph("What we're looking for", styles["H2"]))
    story.append(looking_for_block(criteria))

    story.append(Paragraph("This week's matches", styles["H2"]))
    for addr, meta, why, price, price_change in matches:
        story += listing_block(addr, meta, why, price, price_change)

    if borderline:
        story.append(Paragraph("Worth a second look", styles["H2"]))
        story.append(Paragraph(
            "Outside exactly what you told us, but close enough that we didn't want to leave it out.",
            styles["Small"]))
        story.append(Spacer(1, 6))
        for addr, meta, why, price, price_change in borderline:
            story += listing_block(addr, meta, why, price, price_change)

    if gone:
        story.append(Paragraph("No longer available", styles["H2"]))
        for addr, note in gone:
            story += gone_block(addr, note)

    story.append(Spacer(1, 6))
    story.append(Paragraph("A note from Jas", styles["H2"]))
    story.append(Paragraph(outreach, styles["Body"]))

    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=8))
    story.append(Paragraph(
        "Sample report generated for internal testing of Realtor AIOS's client-profiles and "
        "monday-skill modules. Listing data shown is fictional test data created during module "
        "testing, not live MLS or REALTOR.ca listings — nothing here should be treated as a real, "
        "current, or available property. A real report follows the same format using listings the "
        "realtor has personally found and pasted in, and always carries a reminder to verify "
        "current status against the board's MLS system before contacting anyone about a listing.",
        styles["Disclaimer"]))
    doc.build(story)
    print(f"wrote {path}")


# ---------------------------------------------------------------------------
# Priya & Dev Malhotra
# ---------------------------------------------------------------------------
build_report(
    "priya-dev-malhotra-weekly-match.pdf",
    "Priya &amp; Dev Malhotra",
    criteria=[
        ("Beds", "2, ideally + a den"),
        ("Bathrooms", "2 preferred (1 acceptable)"),
        ("Type", "Townhouse"),
        ("Area", "Willoughby (primary), open to Willowbrook"),
        ("Price", "$750K&ndash;$800K"),
        ("Parking", "1 spot minimum, 2 a bonus"),
        ("Other", "Newer construction preferred; small patio/balcony nice-to-have"),
    ],
    matches=[
        ("8532 214 St, Willoughby",
         "Townhome &middot; 2 bed + den &middot; 2 bath &middot; 1,340 sqft &middot; 2 parking &middot; new build (2023)",
         "Still the strongest fit &mdash; hits every criterion including the den. Price has moved up since last week; still under your $800K approval, but worth moving on if you love it.",
         "$786,500 (up from $774,900)", "up"),
        ("22015 46 Ave, Willowbrook",
         "Townhome &middot; 2 bed + den &middot; 2 bath &middot; 1,290 sqft &middot; 1 parking &middot; resale (built 2015)",
         "New this week. Strong match on price, beds, den and bathrooms. The one thing it doesn't hit is newer construction &mdash; it's a 2015 resale, not brand new.",
         "$758,000", None),
    ],
    borderline=[
        ("4410 200 St, Murrayville",
         "Townhome &middot; 2 bed + den &middot; 2 bath &middot; 1,310 sqft &middot; 2 parking &middot; new build (2024)",
         "You didn't ask about Murrayville, but this one hits everything &mdash; including new construction and 2 parking &mdash; at a price under your preferred anchor. Flagging it in case it's worth a look outside your stated area.",
         "$748,000", None),
    ],
    gone=[],
    outreach=(
        "Priya, Dev &mdash; found one worth seeing. 8532 214 St in Willoughby: 2 bed plus a den, "
        "2 bath, tandem parking for two, brand new construction. It's crept up to $786,500 since "
        "last week, so if you love it, worth moving. No pressure, just don't want you to miss it."
    ),
)

# ---------------------------------------------------------------------------
# Grace Thompson
# ---------------------------------------------------------------------------
build_report(
    "grace-thompson-weekly-match.pdf",
    "Grace Thompson",
    criteria=[
        ("Beds", "2 (one guest room for grandkids)"),
        ("Bathrooms", "2"),
        ("Type", "Rancher-style townhome, or condo with elevator &mdash; no stairs"),
        ("Area", "Murrayville or Willoughby, close to daughter in Walnut Grove"),
        ("Price", "Up to $650K, flexible if it's the one"),
        ("Age", "55+ building preferred, not required"),
        ("Other", "A small patio for potted plants would be lovely"),
    ],
    matches=[
        ("22045 Old Yale Rd, Murrayville",
         "55+ rancher-style townhome &middot; 2 bed &middot; 2 bath &middot; 1,180 sqft &middot; 1 parking &middot; ground-floor patio &middot; no stairs",
         "Still your best fit &mdash; hits the 55+ preference and the patio you wanted. Price just dropped, so there's even more room under your budget now.",
         "$599,900 (down from $618,000)", "down"),
    ],
    borderline=[
        ("4890 207 St, Willowbrook",
         "Ground-floor duplex &middot; 2 bed &middot; 2 bath &middot; 1,150 sqft &middot; 1 parking &middot; patio &middot; no stairs",
         "You named Murrayville and Willoughby, not Willowbrook &mdash; but it's right next door, and this one checks every other box.",
         "$605,000", None),
    ],
    gone=[
        ("20250 84 Ave #312, Willoughby", "shown two weeks ago, no longer listed &mdash; likely sold or delisted"),
        ("22130 44 Ave, Murrayville", "shown last week, no longer listed &mdash; likely sold or delisted"),
    ],
    outreach=(
        "Grace &mdash; good news on Old Yale Rd, they just dropped the price to $599,900, so it's "
        "now nicely under your range. Still no stairs, still that little patio you wanted. Want to "
        "go see it this week before someone else does? Also found one in Willowbrook worth a look "
        "if Old Yale doesn't work out &mdash; just outside where you said, but it ticks every other box."
    ),
)

# ---------------------------------------------------------------------------
# Marcus & Elena Reyes
# ---------------------------------------------------------------------------
build_report(
    "marcus-elena-reyes-weekly-match.pdf",
    "Marcus &amp; Elena Reyes",
    criteria=[
        ("Beds", "3&ndash;4 (4 preferred, one could be a home office)"),
        ("Bathrooms", "2 minimum, 2.5 preferred"),
        ("Type", "House preferred, townhouse OK with a real yard"),
        ("Area", "Undecided &mdash; comparing Willoughby vs. Walnut Grove"),
        ("Price", "~$900K ballpark, soft &mdash; contingent on Calgary home sale"),
        ("Parking", "2 vehicles &mdash; garage or 2 spots"),
        ("Other", "Fenced yard for the dog; move-in ready, no fixer-uppers"),
    ],
    matches=[
        ("8890 217B St, Walnut Grove",
         "House &middot; 3 bed &middot; 2 bath &middot; 1,950 sqft &middot; fenced yard &middot; double garage",
         "Still a strong fit for the Walnut Grove side of your comparison. Price just dropped &mdash; helpful news given your budget is still soft.",
         "$859,900 (down from $874,900)", "down"),
        ("21344 80 Ave, Willoughby",
         "House &middot; 4 bed &middot; 3 bath &middot; 2,510 sqft &middot; fenced yard &middot; double garage &middot; built 2021, move-in ready",
         "New this week, and it hits everything &mdash; 4 bed, fenced yard, and genuinely move-in ready. It's $45K over your rough $900K target, but you said not to hold you to that number, so flagging it anyway.",
         "$945,000", None),
    ],
    borderline=[
        ("21980 48 Ave, Murrayville",
         "House &middot; 3 bed &middot; 2 bath &middot; 1,890 sqft &middot; fenced yard &middot; double garage &middot; built 2018",
         "You've only been comparing Willoughby and Walnut Grove so far &mdash; this is a third option in Murrayville, under budget, that fits everything else. Not assuming you want to widen the search, just don't want to leave it out.",
         "$839,900", None),
    ],
    gone=[
        ("6215 208 St, Willoughby", "your original Willoughby match &mdash; no longer listed, likely sold or under contract"),
    ],
    outreach=(
        "Marcus, Elena &mdash; a few updates. Heads up, the Willoughby house you liked looks to be "
        "gone, probably under contract. Good news though: the Walnut Grove one just dropped to "
        "$859,900. And I found a new one in Willoughby &mdash; 4 bed, move-in ready, fenced yard "
        "&mdash; it's $945K, a bit over where you'd ballparked, but you did say that number was "
        "soft, so wanted you to see it. Want to tour the Walnut Grove one and the new Willoughby "
        "one this weekend?"
    ),
)
