# Marketing Engine

*Finds what's actually working in your niche right now, then writes your
Facebook and LinkedIn content in your voice — on a weekly rhythm you can
sustain.*

**Requires:** `context-os` AND `brain-clone` installed — your voice profile
(`context/voice-profile.md`) must exist. This module refuses to write in a
generic voice.

## How it works

The engine runs the same workflow your consultant uses:

1. **Viral-topic research** (`/research-topics`). Instead of guessing what to
   post, it looks for *outliers*: posts and videos in your niche that
   performed far above a creator's normal — and, crucially, the same topic
   working for **multiple different creators**. One creator's hit can be
   luck; three creators winning with the same topic is a signal. For each
   outlier topic it records what the hook was, how the piece was structured,
   and *why it worked* (emotion, specificity, a contrarian take, timing) —
   then ranks the topics and proposes the angle YOU should take, localized
   to your market and said in your voice.
2. **Content generation** (`/generate-content`). Takes a topic and produces
   platform-ready drafts: a Facebook version and a LinkedIn version — same
   idea, different clothes. Every draft is written against your voice
   profile and your context files, and anything factual it doesn't know is
   left as a clearly marked placeholder for you to fill, never invented.
3. **The weekly cadence** (`/content-week`). The sustainable default: **three
   posts a week** — a market insight (Monday), a story or personal post
   (Wednesday), and an educational piece (Friday) — each drafted for both
   Facebook and LinkedIn. One sitting per week: you run `/content-week`,
   review and tweak the three drafts, and post them on the planned days.
   Budget 15–30 minutes. If three is too many, tell it — the cadence you
   keep beats the cadence you quit.

## What it creates

```
content/
├── calendar.md      # your week-by-week plan and posting record
├── research/        # topic research reports, dated
├── queue/           # drafts waiting for your review / scheduled posting
└── published/       # posts you've marked as posted (your growing archive)
```

## Commands it adds

- `/research-topics` — run viral-topic research in your niche.
- `/generate-content` — draft Facebook + LinkedIn versions of a topic.
- `/content-week` — plan and draft the coming week in one sitting.

## A note on the research

When Claude has web access it will search for outlier content itself. When it
doesn't, it will ask you to paste in links or descriptions of posts you've
seen blowing up — your feed is a research tool. Either way, the analysis and
the localization to your market are the same.
