---
description: Manage your weekly focus list and match new listings against each client's profile
---

# /weekly-match

The weekly ritual. Run whenever — "Monday" is the habit, not a rule.

## 1 — Load the focus list

Read `clients/focus-list.md`. If it's empty, list everyone in
`clients/profiles/` and ask who to start with. If it already has names, show
it and ask: anyone to add or drop this week? Update the file to match
before moving on — this list persists until changed, so only touch what the
owner actually wants changed.

If `clients/profiles/` is empty entirely, tell the owner to build at least
one profile with `/build-profile` first and stop here.

## 2 — For each client on the list

Read that client's profile, including their `## Search log` section (last
searched date, listings already shown).

### Get new listings

Ask how they want to search for this client — offer both:
- **Drop in an MLS export** — paste the text or drag the export file
  straight into the chat; either works. This is the default; most runs
  should use this.
- **Describe the search in plain language** ("new Willoughby townhomes
  under 800 this week") — runs as a live web search of public listing
  sites, only if the current session has web access. Always label results
  clearly as public-facing listings, not MLS data, and remind the owner to
  verify against their board's system before contacting anyone about a
  listing found this way.

### Match, don't invent

Compare what's newly given against the client's `## Looking for` criteria.
For each candidate listing:
- Show which criteria it matches, which are close-but-not-exact, and which
  it misses — plainly, so the owner can judge fit themselves.
- **Price position** — if `market-research` is installed, check
  `market/price-reads/` for a current read (under ~4 weeks old) covering
  this listing's area and property type. When one exists, add one line per
  match: whether it's priced under, at, or above what comparable homes
  actually sold for, citing the read's date. No current read → no line;
  never estimate market value without one, and never present a price read
  as an appraisal.
- Use ONLY details present in what was pasted or found. Never fill in a
  price, size, or feature that wasn't actually given.
- Skip anything that misses a hard criterion badly (way outside price range
  or wrong city) unless nothing else qualifies — then say so honestly
  ("nothing new fit well this week for Maya").

### Handle repeats efficiently

- Anything already logged as shown to this client: don't redo the fit
  reasoning — that's already in the log and hasn't changed.
- But do check it for **material changes**: a different price, a status
  change (pending/sold/back on market), or a changed detail that affects
  fit. A price drop on a listing you already showed is real news, even
  though the listing itself isn't new — surface it as "still active, price
  drop: was $X, now $Y" rather than a bare "still active" that buries it.
  If nothing changed, the plain "still active from last time" one-liner is
  enough — don't manufacture an update where there isn't one.
- Anything previously shown that's now missing from a fresh search or
  export: flag as "no longer showing — likely sold or delisted" rather than
  silently dropping it. This applies however many rounds ago it was first
  shown, not just the immediately preceding run.
- A new listing just outside the client's stated area or a soft criterion,
  but a strong fit on everything else: don't silently include it (it wasn't
  asked for) or silently drop it (it might be exactly what changes their
  mind) — flag it explicitly as a borderline mention, and say which
  criterion put it outside the stated ask.

## 3 — Optional: draft the client email

If `brain-clone` is installed (check `system/modules.md` and confirm
`context/voice-profile.md` exists), ask if the owner wants an email drafted
presenting the new matches to this client, in their voice. If yes, write a
proper email — subject line + body, addressed to the client by name — using
the same truth rules as the rest of the AIOS — no invented details,
placeholders for anything uncertain. If brain-clone isn't installed, skip
this step without mentioning it as missing (offering module installs isn't
this command's job).

**Getting it into Gmail — check what's actually available, never assume:**
- If a Gmail (or other email) connector is available in the current Claude
  session, offer to create the email as a **draft** in the owner's Gmail —
  staged and ready for them to review, edit, and send themselves. Never send
  it automatically; client-facing email always gets a human's eyes first.
  Tell the owner plainly it's sitting in their Drafts folder, not sent.
- If no email connector is available (true for most installs — this AIOS
  workspace doesn't connect to email by default, same as it doesn't connect
  to a CRM), show the drafted email as text, ready to copy and paste into
  whatever the owner already uses to send email. This is the normal path
  and isn't a lesser outcome — it's the default the rest of the product is
  built on.

## 4 — Optional: export a PDF report

Ask if the owner wants a PDF version of this client's matches — something
they could forward, print, or hand over directly. If yes, build one using
the `pdf` skill/tooling, structured as:

- Header: client name, "prepared by" the owner's name and brokerage
  (from `context/business-profile.md`), today's date
- "What we're looking for" — a clean recap of the client's `## Looking for`
  criteria
- "This week's matches" — each listing with its address, key facts, and the
  same honest fit reasoning shown in chat (including price-change notes)
- "Worth a second look" — borderline mentions, clearly separated, same
  honesty rule: never silently folded into the main matches
- "No longer available" — anything flagged likely sold/delisted this run
- A short closing note in the owner's voice (reuse the drafted email's
  content if one was written this run)
- A footer disclaimer: listings shown come from what the owner searched or
  pasted in, not a live MLS feed — current status should be verified before
  acting on anything in the report

Save it as `clients/reports/<client-slug>-<date>.pdf` (create the folder if
it doesn't exist) and tell the owner where it landed.

## 5 — Update the log

Append to that client's `## Search log`:

```markdown
## Search log
- <date>: shown — <address/listing 1>, <address/listing 2>, …
- <date>: still active, price drop — <address> (was $X, now $Y)
- <date>: no longer active — <address>, …
- Last researched: <date>
```

## 6 — Close

One-line summary per client (e.g. "Maya: 2 new matches, 1 still active from
last week, email drafted to Gmail, PDF saved"), then done. Keep the whole
run tight — this is meant to take minutes, not become its own research
project.
