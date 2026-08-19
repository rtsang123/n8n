---
description: Build a price read for a property or area from comparable sold listings
---

# /price-check

Subject property or area, if given: `$ARGUMENTS`

## 1 — Pin the subject

If `$ARGUMENTS` is empty, ask what to price: a specific property or an
area + property type (e.g. "Willoughby townhomes"). Check
`market/price-reads/` — if a read on this subject is under ~4 weeks old,
show it and ask whether to refresh or reuse; sold comps don't move daily.

## 2 — Get the comps

Ask the owner to search **www.searchhomelistings.ca** (or their board's
sold data) and paste in comparable SOLD listings. Coach the selection
briefly: same property type, same neighbourhood or at least same city,
sold within the last 3–6 months, and both asking and sold price where
available. 3–5 good comps beat 10 loose ones.

If the session has live web access, you may offer to look up public
sold-price sources instead — but label the results as unverified public
data, and have the owner confirm each comp before it enters the analysis.
If the site is unreachable (many sandboxed sessions block it), say so
plainly and use the paste-in path — never fabricate a comp to fill the gap.

## 3 — Analyze

From ONLY the comps supplied:

- **Comp quality** — rank them; say which are strongest for this subject
  and why, and which are stretches (different age, size, sub-area).
- **Sold vs. asking** — is this segment selling over, at, or under ask,
  and by roughly how much?
- **Supported range** — a price range for the subject with the reasoning
  shown, every figure traceable to a named comp. If the comps are too thin
  or too mixed to support a range, say exactly that instead of forcing one.

## 4 — Save the read

Write `market/price-reads/<subject-slug>-<date>.md`:

```markdown
# Price read — <subject>
Date: <date> · Source: comps from searchhomelistings.ca (owner-supplied)

## Comps used
- <address> · sold $X (asked $Y) · <date> · <key facts> · strength: …

## Read
- Segment: selling <over/at/under> ask by ~…
- Supported range for subject: $A–$B
- Reasoning: …

## Caveats
- <thin data, mixed comps, anything the owner should verify>
```

## 5 — Hand off

Show the read in plain language. If `monday-skill` is installed, mention
that `/weekly-match` will now use this read for any listing it matches in
this area — priced-under-market fits get called out, priced-over ones get
flagged. Remind the owner: this is a working analysis from the comps they
chose, not an appraisal.
