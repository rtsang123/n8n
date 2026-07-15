---
description: Capture a new lead inquiry and get the first reply drafted in your voice
---

# /log-lead

A new inquiry just arrived. Raw content (if pasted with the command):
`$ARGUMENTS`

## Non-negotiable first step

Read `context/voice-profile.md`. If it doesn't exist, STOP and point the
owner to `/brain-dump` — the first reply is client-facing.

## 1 — Get the inquiry

If nothing was pasted, ask them to paste it raw — portal email, DM, text,
voicemail transcript. Never make them retype or summarize; raw is better.

## 2 — Extract the intake record

Pull out everything the inquiry actually contains (never infer what isn't
there — mark unknowns as `?`):

- Name and how to reach them (email / phone / platform handle)
- Source (portal, Facebook, Instagram, referral, sign call, website…)
- What they're asking about (specific listing, area, buying/selling/both)
- Timeline signals ("this weekend", "next spring", "just looking")
- Motivation and qualification signals (pre-approved, sold their place,
  relocating, investor…) — quote their words, don't editorialize
- Anything personal worth remembering (kids, pets, first-timers…)

Show the record as a short card and ask one question ONLY if something
critical is ambiguous. Save it to
`leads/active/YYYY-MM-DD-<name-slug>.md` with a `## Touch history` section
started (first entry: the inquiry itself, dated).

## 3 — Draft the first reply, now

In their voice, matched to the channel the inquiry came from (an Instagram
DM reply and a portal-email reply are different lengths and registers).
The reply should:

- Answer what was actually asked, specifically — no generic "thanks for
  reaching out" opener unless that's genuinely their style
- Move to a concrete next step (a time option, a question that advances)
- Contain zero invented facts — unknown details get `[CHECK: …]`
  placeholders

Show it ready to copy. Remind them: **speed of first response is the whole
game — send it now, polish later.** When they say it's sent, log it in the
lead's touch history.

## 4 — Put them on the rhythm

Read the follow-up rhythm from the top of `leads/pipeline.md` (default:
day 2 · day 7 · day 14 · monthly keep-warm), write the next-touch dates
into the lead file, and add the one-line row to the pipeline table.

Close with the one-line confirmation: who was logged, what was sent, when
the next touch is — and that `/lead-check` will surface it on the day.
