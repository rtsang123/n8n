---
description: Interview the realtor about their business and build their context files
---

# /context-interview

Run the Context OS interview. The owner is a realtor and is non-technical.

## How to run it

- **One question at a time.** Never dump a list of questions. Conversational,
  warm, plain language — like a sharp new assistant on day one.
- **"Skip" is always allowed.** Note skipped items at the bottom of the
  relevant file under `## Still to fill in` and move on.
- **Follow up on gold.** When an answer reveals something distinctive (a
  niche, a strong opinion, a signature move), ask one follow-up before moving
  on. Don't interrogate — two questions per topic max.
- **Save as you go.** Write each part's file as soon as that part is done,
  then briefly confirm: "Saved — that's your market profile done. Next up:
  your clients." An interrupted interview must lose nothing.
- **Resume support.** Before starting, check which of the seven output files
  already exist in `context/`. If some do, say "We've already covered X and Y
  — picking up at Z" and resume from the first missing part. If all seven
  exist, ask whether they want to redo a section or just update something
  (then behave like `/context-update`).

## The seven parts

Work through these in order. The bullet points are the ground to cover —
phrase the questions naturally, don't read them verbatim.

### Part 1 — You and your brokerage → `context/business-profile.md`
- Full name, and the name they go by in their marketing.
- Brokerage, office location, solo or team (team name, who does what).
- Years licensed, years in this market; designations/certifications.
- Languages spoken; anything about their background that shows up in how
  they sell (past career, grew up locally, etc.).
- Where clients find them online: website, Facebook, Instagram, LinkedIn,
  YouTube, Google Business profile.

### Part 2 — Your market and farm area → `context/market.md`
- The cities/communities they actually work (e.g. Langley, Surrey, Abbotsford)
  and the neighbourhoods they'd call their farm area.
- Typical price bands and property types they transact (detached, townhome,
  condo, acreage, presale…).
- What's true about their market *right now*: inventory, rates mood, buyer vs
  seller leverage, anything hyper-local (new developments, transit, schools).
- What outsiders get wrong about this market — great content fuel.

### Part 3 — Your niche and clients → `context/clients.md`
- The client types they serve, ranked by how much of their business each is
  (first-time buyers, move-up families, downsizers, investors, relocations…).
- Their ideal client: describe the last client they *loved* working with.
- Where business actually comes from: referrals, sphere, social, open
  houses, online leads — rough proportions.
- The questions clients ask them over and over (each one is future content).

### Part 4 — Your listing process → `context/listing-process.md`
- Walk me through a listing, from the first seller conversation to sold —
  their actual steps, in their words.
- What they do for a listing that most agents around them don't.
- How they talk about pricing with sellers (their philosophy, not a script).
- What's included in their listing marketing (photos, video, staging, etc.).

### Part 5 — Your buyer process → `context/buyer-process.md`
- Walk me through a buyer, from first call to keys.
- How they set expectations up front; how they handle multiple-offer
  situations; how they protect buyers (inspections, subjects, deposits).
- What they do for buyers that most agents don't.

### Part 6 — Your past content → `context/content-history.md`
- Which platforms they've actually posted on, and roughly how often.
- Their best-performing piece of content ever — what was it and why do they
  think it worked?
- What flopped or felt cringey to them.
- Honest answer: how much time per week can they REALLY give to content?
- Any content they already have lying around (old posts, videos, a bio, an
  email newsletter) — note where it is; the brain-clone module will want
  samples of it.

### Part 7 — Your positioning → `context/positioning.md`
- Finish this sentence: "People should call me instead of another agent
  because…"
- Who they're effectively competing with locally, and how they differ.
- How they want to come across online (pick and probe: expert, neighbour,
  straight-shooter, educator, hustler, calm advisor…).
- Hard lines: things they would never say, tactics they refuse (cold calling
  brag posts, fear-mongering, "DM me" bait…), topics to avoid.

## File format

Each file: a `#` title, a one-line summary in italics, then `##` sections with
short bullets in the owner's own words wherever possible (keep their phrasing
— it feeds the voice profile later). End each file with:

```
---
Last updated: <date> · Source: /context-interview
```

## When all seven parts are done

Give a compact recap (5–8 bullets) of the most distinctive things you learned,
tell them their AI's memory is built and they can change anything anytime with
`/context-update`, and point them at the next step: installing `brain-clone`
(`/install-module brain-clone`).
