---
description: Your daily five minutes — who's due for follow-up, with messages drafted
---

# /lead-check

The daily pipeline sweep. Read `context/voice-profile.md` (client-facing
output ahead — if it's missing, stop and point to `/brain-dump`), then
`leads/pipeline.md` and every file in `leads/active/`.

## 1 — Triage

Sort active leads into: **due today**, **overdue** (flag how many days),
**upcoming this week**, and **going stale** (no response after 2+ touches,
or 30+ days quiet).

Report it as a short list, overdue first. If nothing is due: say so in one
line, show the next upcoming touch, done — don't pad.

## 2 — Draft every due and overdue follow-up

For each one, in their voice, matched to the lead's channel. Rules:

- **Every touch earns its place.** Rotate the angle: a useful answer to
  something they asked, a market note from `context/market.md`, a relevant
  new listing, a neighbourhood detail. Never two "just checking in"s in a
  row — check the lead file's touch history to see what the last angle was.
- Reference something real from THEIR record (the property, the timeline,
  the kids, the pre-approval) so it reads personal, because it is.
- No invented facts — `[CHECK: …]` placeholders where needed.

Show each message ready to copy. As they confirm each send, log it in the
lead's touch history and set the next touch date per the rhythm.

## 3 — Handle what changed

- **"They replied"** — get the gist, log it, update the record (timeline,
  status) and reschedule accordingly. A booked showing or listing appointment
  suspends the rhythm — the next touch is the appointment itself.
- **Stale leads** — recommend one of: shift to monthly keep-warm, one
  honest "last touch" message, or archive. On archive, move the file to
  `leads/closed/` with a one-line outcome and reason, and remove the
  pipeline row.
- **Closed/won** — celebrate properly, archive with the outcome, and
  suggest the owner note anything worth keeping in `context/` (a client
  story this good is future content — mention `/generate-content` if
  marketing-engine is installed).

## 4 — Close

One-line summary: sent N, rescheduled M, pipeline health in a phrase. Then
get out of their morning.
