# Client Profiles

*Turns a conversation with a prospect into a structured profile — what they
want, their budget, their must-haves — built from a pasted transcript or
notes, not a form.*

**Requires:** `context-os` installed.

## What it does

After you talk to a buyer — a call, a coffee meeting, a voice memo you
transcribed — paste the conversation into `/build-profile`. It pulls out
whatever the conversation actually contains: name and contact info, what
they want, beds, bathrooms, property type, city/area, price range, size,
parking, transit needs, and anything else that came up. Nothing is
required — a five-minute chat that only covered budget and city still makes
a useful profile; the rest fills in as you learn more.

Talked to them again? Run `/update-profile` with the new conversation and it
folds the new details into the same profile instead of starting over.

This is the roster `monday-skill` (if installed) works from — build profiles
here first, then use that module to match them against listings each week.

## What it creates

`clients/profiles/` — one file per prospect, in plain Markdown, readable and
editable by hand any time.

## Commands it adds

- `/build-profile` — paste a conversation, get a structured profile.
- `/update-profile` — feed it a follow-up conversation to refine an existing
  profile.

## A note on scope

This is for **buyers** — people searching for a home. The fields (beds,
price range, what they want to buy) are search criteria, not listing
details. Seller conversations belong in `context/listing-process.md` or a
`listing-prep` prep sheet instead.

## Before you start

Nothing to prepare. Your next client conversation is the first input.
