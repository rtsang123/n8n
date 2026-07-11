---
description: Plan and draft your coming week of content in one sitting
---

# /content-week

The weekly sitting — plan and draft the coming week. Target: the owner is
done in 15–30 minutes.

## 1 — Load state

Read `content/calendar.md`, list `content/queue/` and recent
`content/published/`, and check the date of the newest report in
`content/research/`.

## 2 — Research freshness

If there's no research yet, or the newest report is older than ~2 weeks, run
the `/research-topics` procedure first (tell the owner why: "topics go
stale"). Otherwise reuse the latest report's unused topics.

## 3 — Plan the week

Default cadence (from `calendar.md` — respect any adjustment the owner has
made): 3 posts, each drafted for Facebook + LinkedIn:

- **Mon — market insight:** something true about their market right now,
  from research or `context/market.md`.
- **Wed — story/personal:** a client story, a lesson, behind-the-scenes —
  mine the interview stories in `context/` before asking for a new one.
- **Fri — educational:** answer one of the questions clients always ask
  (they're listed in `context/clients.md`).

Reuse anything already approved in the queue before generating new. Show the
3-slot plan as one short list and get a quick thumbs-up (or swaps) before
drafting.

## 4 — Draft

For each slot, run the `/generate-content` procedure (voice profile first —
always). Save each to `content/queue/` with its `Planned:` day filled in.

## 5 — Update the calendar

Add the week to `content/calendar.md`:

```markdown
## Week of <Mon date>
- Mon · insight · <title> · queue/<file> · status
- Wed · story · <title> · queue/<file> · status
- Fri · educational · <title> · queue/<file> · status
```

## 6 — Hand back

Close with: the 3 drafts ready for review, any placeholders they need to
fill, and the reminder that posting is manual — copy, paste, post on the
planned day, then tell Claude "posted" so it archives to
`content/published/`. If the week ever feels like too much, the cadence is
theirs to shrink: a kept cadence beats a quit one.
