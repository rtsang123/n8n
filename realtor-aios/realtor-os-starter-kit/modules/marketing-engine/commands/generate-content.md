---
description: Draft platform-ready posts on a topic, in your voice, for the platforms you use
---

# /generate-content

Draft client-facing content. Topic given: `$ARGUMENTS`

## Non-negotiable first step

Read `context/voice-profile.md`. If it doesn't exist, STOP and point the
owner to `/brain-dump` — never write client-facing content in a generic
voice. Also load `context/market.md`, `context/clients.md`,
`context/positioning.md`, `context/content-history.md` (this is where the
owner's platforms are recorded), and the latest report in
`content/research/` if one exists.

## Which platforms

Write a version for each platform the owner actually uses, per
`context/content-history.md`. If that's unclear or empty, ask which
platforms they post on and offer the common set — Facebook, Instagram,
LinkedIn, and short-form video (TikTok / Reels / YouTube Shorts). Never
force a platform they don't use; never silently drop one they do.

## Draft — one idea, every platform they use

Same core idea, re-cut per platform. Only produce the ones that apply:

**Facebook** — the neighbour voice. Conversational, local, story-first.
Short paragraphs with line breaks. Named neighbourhoods beat "the market".
A question or soft CTA at the end. Hashtags: 0–3, only if the voice profile
allows them.

**Instagram** — tighter and warmer than Facebook. Strong first line (it's
the caption preview), scannable, a light hashtag set (5–10) drawn from the
owner's market and niche if the voice profile allows them.

**LinkedIn** — the professional-insight voice. Reframed as an observation or
lesson. Strong first line (it's the preview). Generous line breaks, no wall
of text. Still unmistakably them — the profile's voice flexes, it doesn't
disappear.

**Short-form video (TikTok / Reels / YouTube Shorts)** — not a paragraph: a
**hook** (the 0–3 second opener), a short **spoken script** (15–30 seconds,
in their voice), and 2–3 **on-screen text beats**. The owner films it — the
module writes the words, never claims to produce the video.

For each platform give: 2 alternative hooks (first lines / openers), the
full piece using hook #1, and a one-line "swap note" (what to change if they
prefer hook #2).

## Truth rules

- Facts, numbers, and market claims come from `context/` files, the research
  report, or the owner — never invented. Missing number? Write
  `[YOUR STAT: e.g. average Willoughby townhome price this month]` and list
  the placeholders at the end for the owner to fill.
- Run the draft against the profile's **Never do** list before showing it;
  fix violations silently.

## Save

Write all versions to `content/queue/YYYY-MM-DD-<topic-slug>.md`, one `##`
section per platform:

```markdown
# <Topic title>
Status: draft · Planned: <weekday/date or "unscheduled"> · Slot: <insight|story|educational>

## Facebook
…

## Instagram
…

## Short-form video (hook / script / on-screen)
…

## Placeholders to fill
- …
```

(Include only the platforms the owner uses.) Show the drafts, ask what feels
off, and revise on the spot. When the owner approves, set `Status: approved`.
When they say they've posted it, move the file to `content/published/` and
log it in `content/calendar.md`.
