---
description: Sweep active deals for dates due and draft the client updates
---

# /deal-check

Read `context/voice-profile.md` (stop and point to `/brain-dump` if
missing), then `deals/pipeline.md` and every file in `deals/active/`.

## 1 — Triage

Sort by key date: **due today**, **overdue**, **upcoming this week**.
Report overdue first. If nothing's due, say so in one line and stop —
don't pad.

## 2 — Draft updates

For each due/overdue date, draft a short client-facing update in the
owner's voice: what's happening, what (if anything) is needed from them,
and the next date to expect. Check the deal's own update history so
nothing repeats verbatim. No invented facts — `[CHECK: …]` for anything
uncertain.

## 3 — Handle changes

- **Condition met / date cleared** — update the record, mark it, move to
  the next date.
- **Closing** — draft a congratulations message, move the file to
  `deals/closed/` with the close date, remove the pipeline row. If
  brain-clone and marketing-engine are both installed, mention this closing
  story might be worth `/generate-content` down the line.
- **Date slipping** — ask what changed and update it; don't silently
  reschedule.

## 4 — Close

One-line summary: N updates drafted, M dates cleared, pipeline health in a
phrase.
