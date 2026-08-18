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
- **Paste a listing export** — from their own MLS search. This is the
  default; most runs should use this.
- **Live web search** of public listing sites — only if the current session
  has web access. Always label results clearly as public-facing listings,
  not MLS data, and remind the owner to verify against their board's system
  before contacting anyone about a listing found this way.

### Match, don't invent

Compare what's newly given against the client's `## Looking for` criteria.
For each candidate listing:
- Show which criteria it matches, which are close-but-not-exact, and which
  it misses — plainly, so the owner can judge fit themselves.
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

## 3 — Optional: draft the outreach

If `brain-clone` is installed (check `system/modules.md` and confirm
`context/voice-profile.md` exists), ask if the owner wants a message drafted
presenting the new matches to this client, in their voice. If yes, write it
using the same truth rules as the rest of the AIOS — no invented details,
placeholders for anything uncertain. If brain-clone isn't installed, skip
this step without mentioning it as missing (offering module installs isn't
this command's job).

## 4 — Update the log

Append to that client's `## Search log`:

```markdown
## Search log
- <date>: shown — <address/listing 1>, <address/listing 2>, …
- <date>: still active, price drop — <address> (was $X, now $Y)
- <date>: no longer active — <address>, …
- Last researched: <date>
```

## 5 — Close

One-line summary per client (e.g. "Maya: 2 new matches, 1 still active from
last week, message drafted"), then done. Keep the whole run tight — this is
meant to take minutes, not become its own research project.
