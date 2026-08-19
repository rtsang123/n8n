# Listing Prep

*Turns an upcoming listing appointment into a one-page prep sheet — market
position, likely objections, your talking points — before you knock.*

**Requires:** `context-os` AND `brain-clone` installed.

## What it does

One command, no new setup: `/prep-listing` builds the sheet entirely from
what your AIOS already knows — your market read from `context/market.md`,
who you're really up against from `context/positioning.md`, and what you do
differently from `context/listing-process.md`. It only asks you for what it
can't already know: the specifics of this listing.

The output is one page: a seller snapshot, a pricing narrative built from
real comps (yours, pasted in — never invented), the objections you're most
likely to hear from this seller with responses in your voice, and a short
list of questions worth asking at the table.

## What it creates

`listings/prepped/` — one saved sheet per address, so a second meeting picks
up where the first one left off.

## Commands it adds

- `/prep-listing` — build or update a prep sheet for an upcoming appointment.

## Before you start

Nothing to prepare. If you already have comps, have them handy — pasted
numbers beat estimated ones.
