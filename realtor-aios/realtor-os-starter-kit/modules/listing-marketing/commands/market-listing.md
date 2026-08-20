---
description: Generate the listing description and a full social media package for one active listing
---

# /market-listing

Property details, if given: `$ARGUMENTS`

## Non-negotiable first step

Read `context/voice-profile.md`. If it doesn't exist, STOP and point the
owner to `/brain-dump` — this content is public-facing and must be in
their voice, never generic.

## 1 — Get the property

If `$ARGUMENTS` is empty, ask for the listing's real details: address,
price, property type, beds/bathrooms, square footage, parking, and
anything about the home that makes it stand out (a renovation, a view, the
story of why the sellers loved it). Accept whatever's given, however
organized.

Check `listings/prepped/` (from `listing-prep`, if installed) for a file
matching this address. If one exists, reuse its pricing narrative and
selling points instead of asking again — just confirm nothing's changed.

Check `listings/marketing/` for an existing file on this address. If one
exists, this is a re-run (price change, new open house, refresh) — extend
that file, don't start over.

## 2 — Get the moment

Ask which this is, since it changes the framing:
- **Just listed** — first push, leads with newness and urgency
- **Open house** — leads with the date/time and a reason to show up
- **General promotion** — an established listing, no artificial urgency,
  leads with what makes the home genuinely worth a look

## 3 — Write the listing description

The formal write-up for the MLS/portal listing itself. Clean, factual,
scannable. Use ONLY details actually given — never invent square footage,
lot size, included features, renovation dates, or school catchment.
Missing a detail that would strengthen it? Flag it as
`[CONFIRM: e.g. year of roof replacement]` rather than guess.

Avoid describing an ideal buyer instead of the property — no "perfect for
a growing family," "ideal for empty nesters," "walking distance to
[specific religious or demographic amenity]." Describe what the home
offers; let the buyer decide who they are.

## 4 — Write the social package

For each platform the owner actually uses (check `context/content-history.md`;
ask if unclear — never force a platform they don't use):

- **Facebook** — warm, local, story-first. The "why" behind the listing,
  not just the spec sheet.
- **Instagram** — tighter caption, strong opening line, 5–10 hashtags from
  their market/niche if their voice profile allows hashtags.
- **LinkedIn** — same listing, professional register — often works as a
  market observation ("here's what buyers in [area] are getting right now")
  with the listing as the example, not a straight ad.
- **Short-form video** — a hook (0–3 sec), a 15–30 second script, 2–3
  on-screen text beats. They film it; this writes the words.

Match the moment from step 2: just-listed gets urgency and a "book a
showing" close; open house leads with date/time; general promotion closes
softer, more "worth a look" than "act now."

Same truth rule as the description: nothing invented, placeholders for
gaps, never buyer-profile language.

## 5 — Save

Write `listings/marketing/<address-slug>.md`:

```markdown
# <Address>
Price: … · Status: <just listed | open house | promoted> · Last updated: <date>

## Listing description
…

## Facebook
…

## Instagram
…

## LinkedIn
…

## Short-form video
Hook: …
Script: …
On-screen text: …

## Placeholders to fill
- …
```

## 6 — Hand off

Show everything, ask what needs adjusting, revise on the spot. Remind the
owner: the listing description is what goes on the MLS/portal; the social
posts are ready to copy into each platform. If `marketing-engine` is
installed, mention this can also fill one of the week's content slots
instead of competing with it.
