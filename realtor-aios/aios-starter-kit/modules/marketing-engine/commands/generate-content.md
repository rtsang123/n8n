---
description: Draft platform-ready Facebook and LinkedIn posts on a topic, in your voice
---

# /generate-content

Draft client-facing content. Topic given: `$ARGUMENTS`

## Non-negotiable first step

Read `context/voice-profile.md`. If it doesn't exist, STOP and point the
owner to `/brain-dump` — never write client-facing content in a generic
voice. Also load `context/market.md`, `context/clients.md`,
`context/positioning.md`, and the latest report in `content/research/` if
one exists.

## Topic

If `$ARGUMENTS` is empty, offer the top unused topics from the latest
research report; if there's no research, suggest running `/research-topics`
or ask what they want to talk about.

## Draft — one idea, two platforms

Produce BOTH versions:

**Facebook** — the neighbour voice. Conversational, local, story-first.
Short paragraphs with line breaks. Named neighbourhoods beat "the market".
A question or soft CTA at the end. Hashtags: 0–3, only if the voice profile
allows them.

**LinkedIn** — the professional-insight voice. Same idea, reframed as an
observation or lesson. Strong first line (it's the preview). Generous line
breaks, no wall of text. Still unmistakably them — the profile's voice
flexes, it doesn't disappear.

For each platform give: 2 alternative hooks (first lines), the full post
using hook #1, and a one-line "swap note" (what to change if they prefer
hook #2).

## Truth rules

- Facts, numbers, and market claims come from `context/` files, the research
  report, or the owner — never invented. Missing number? Write
  `[YOUR STAT: e.g. average Willoughby townhome price this month]` and list
  the placeholders at the end for the owner to fill.
- Run the draft against the profile's **Never do** list before showing it;
  fix violations silently.

## Save

Write the pair to `content/queue/YYYY-MM-DD-<topic-slug>.md`:

```markdown
# <Topic title>
Status: draft · Planned: <weekday/date or "unscheduled"> · Slot: <insight|story|educational>

## Facebook
…

## LinkedIn
…

## Placeholders to fill
- …
```

Show both drafts, ask what feels off, and revise on the spot. When the owner
approves, set `Status: approved`. When they say they've posted it, move the
file to `content/published/` and log it in `content/calendar.md`.
