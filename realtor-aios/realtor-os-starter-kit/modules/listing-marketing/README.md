# Listing Marketing

*Turns one active listing into a full content package — the description
and every social post — in your voice, for the platforms you actually use.*

**Requires:** `context-os` AND `brain-clone` installed. Pairs with
`listing-prep` if you have it (reuses its prep sheet instead of re-asking),
but installs and works fine on its own.

## What it does

You just took a listing. Run `/market-listing`, give it the property
details, and one pass produces:

1. **The listing description** — the write-up for the MLS/portal listing
   itself: clean, factual, no invented features or superlatives.
2. **A social package** — a post for every platform you actually use
   (Facebook, Instagram, LinkedIn, short-form video hook + script), each
   re-cut for that platform's register, all written in your voice.
3. **The right framing for the moment** — it asks whether this is a
   just-listed push, an open house, or general promotion, and shapes the
   urgency and call-to-action accordingly. Same property, different
   moment, different post.

If `listing-prep` is installed and has a prep sheet for this address, it's
reused for pricing narrative and selling points instead of asking twice.

## What it creates

`listings/marketing/` — one file per listing, holding every piece
generated for that property, so a re-run (price change, new open house)
extends the same file instead of starting over.

## Commands it adds

- `/market-listing` — generate the description and social package for one
  active listing.

## Two things this module is careful about

**No invented facts.** Square footage, lot size, included features, school
catchment — anything factual comes only from what you give it. A missing
detail becomes a placeholder, never a guess. This isn't just the AIOS
house style: an inaccurate listing description is a real professional-
standards problem, not just a bad post.

**Describe the property, not an ideal buyer.** Real estate marketing has a
well-known fair-housing trap: phrases like "perfect for a young family,"
"great starter home," or "walking distance to [a specific religious or
demographic amenity]" describe *who* should live there instead of *what*
the property offers, and can read as steering. This module writes about
the property — the buyer decides who they are.

## Before you start

Have the listing's real details on hand: address, price, beds/baths,
square footage, key features, and anything about the home that isn't
obvious from a spec sheet (the reason someone will fall for it).
