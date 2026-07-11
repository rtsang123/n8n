# Brain Clone

*Captures how you actually talk and write — a brain-dump interview plus your
past content — and turns it into a voice profile every other module must use.*

**Requires:** `context-os` installed and its interview completed.

## What it does

Context OS taught your AI *what* your business is. Brain Clone teaches it
*how you sound*. It runs in four phases:

1. **Collect samples.** You provide 5–10 pieces of your past content — social
   posts, emails to clients, a bio, video scripts, listing descriptions.
   Paste them into the chat or drop them into the `context/samples/` folder.
   More is better; unpolished is fine (unpolished is actually *better* —
   it's the real you).
2. **Brain-dump interview.** A conversation about your opinions, not your
   facts: your hot takes on your market, the stories you tell every client,
   the phrases you use without noticing, what makes you roll your eyes about
   other agents' marketing, how formal or casual you really are.
3. **Analysis.** Your AI studies the samples and the interview together and
   writes `context/voice-profile.md` — a structured description of your
   voice: tone, vocabulary, sentence rhythm, signature phrases, platform
   differences, and a hard "never do" list.
4. **Calibration.** It writes a test post, asks "does this sound like you?",
   and refines the profile until you say yes.

From then on, **every module in this AIOS must load your voice profile before
generating anything your clients or audience will read.** That rule is built
into the workspace itself.

## What it creates

- `context/voice-profile.md` — the voice profile (the point of this module)
- `context/samples/` — your past-content samples, kept for future re-tuning

## Commands it adds

- `/brain-dump` — run (or resume) the sample collection + interview + analysis.
- `/voice-check` — generate a quick test post and tune the profile against
  your reaction. Run it any time your content starts feeling "off".

## Before you start

Gather 5–10 pieces of your past content before running `/brain-dump`. Copy
them from wherever they live — Facebook, Instagram captions, old emails,
your website bio. Don't clean them up.

## Going further: the optional next layers

This module captures your **writing voice** — that's what it automates, and
that's all it automates. There are three further layers of "cloning" that
your consultant (TsangAIConsulting) can deliver as separate add-on
engagements using external tools. They are listed here so you know they
exist, not because this module does them:

- **Image clone** — a set of consistent, professional AI-generated photos of
  you (headshots and lifestyle shots) so your content always has on-brand
  visuals without a photoshoot every month.
- **Voice clone** — your actual speaking voice recreated with a voice-cloning
  tool, so scripts written in your voice profile can become audio that
  sounds like you.
- **Video clone** — an AI video avatar of you built with an avatar tool, so
  written content can become talking-head video without filming.

Each layer builds on this module: the voice profile writes the words; the
external tools give the words your face and voice. Ask your consultant about
these when your written content is running smoothly.
