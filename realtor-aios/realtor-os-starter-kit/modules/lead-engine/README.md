# Lead Engine

*Catches every inquiry at intake, answers fast in your voice, and never lets
a follow-up slip.*

**Requires:** `context-os` AND `brain-clone` installed — follow-up messages
are client-facing, so the voice profile must exist first.

## The problem this kills

Most leads don't die because the realtor was bad. They die in intake:

- The inquiry sat unanswered while you were at a showing — and speed of
  first response is the whole game.
- Nothing was captured — the name, the property, the timeline all lived in
  a DM thread you'd have to scroll to find.
- Follow-up stopped after one try, because remembering "day 7" for eleven
  different leads is a job in itself.

## How it works

Two commands, one habit:

**`/log-lead` — the moment an inquiry arrives.** Paste it in, raw — the
portal email, the Instagram DM, the voicemail transcript, whatever you got.
Your AIOS:

1. Extracts a structured intake record: who they are, where they came from,
   what property or need, timeline and motivation signals, how to reach
   them — and saves it to your `leads/` folder.
2. Drafts your first reply **immediately, in your voice**, ready to copy and
   send. The lead that used to wait until tonight gets answered in two
   minutes.
3. Puts them on your follow-up rhythm automatically: reply same day, then
   day 2 · day 7 · day 14 · monthly keep-warm (adjust it anytime — it's
   written at the top of your pipeline file).

**`/lead-check` — five minutes each morning.** It reads your pipeline and
tells you exactly who's due today, drafts each follow-up message in your
voice (each one with a fresh angle — a market note, a new listing, a useful
answer — never "just checking in" four times in a row), and flags anything
going stale. You copy, send, done.

When a lead replies, tell it ("Maya replied — booked Saturday") and the
record and schedule update themselves. When a lead closes or goes cold, it
archives them with the reason, so your pipeline file only ever shows live
work.

## Honest boundaries

This module doesn't connect to your email, portal, or CRM — everything is
paste-in, copy-out. That's deliberate: it works with whatever inbox and CRM
you already use, needs no risky account access, and takes zero technical
setup. The habit is the integration: inquiry arrives → paste it in.

## What it creates

```
leads/
├── pipeline.md    # every active lead, next touch date, one line each
├── active/        # one file per live lead — the full record and history
└── closed/        # archived leads, with outcome and reason
```

## Commands it adds

- `/log-lead` — capture a new inquiry and get the first reply drafted.
- `/lead-check` — the daily five minutes: who's due, messages drafted.
