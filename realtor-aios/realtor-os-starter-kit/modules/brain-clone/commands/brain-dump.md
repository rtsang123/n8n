---
description: Capture your voice — samples plus a brain-dump interview — and build your voice profile
---

# /brain-dump

Build (or rebuild) the owner's voice profile. Prerequisite: the context-os
interview is done. If `context/business-profile.md` or
`context/positioning.md` is missing, stop and point them to
`/context-interview`.

**Resume support:** if `context/samples/` already has samples but no
`context/voice-profile.md` exists, skip to the phase that isn't done. If a
voice profile already exists, ask whether they want a full redo (new samples
and interview) or a tune-up (go straight to Phase 4 with what's on file).

## Phase 1 — Collect samples

Ask the owner to share 5–10 pieces of their past content: social posts,
client emails, their bio, video scripts, listing descriptions — pasted into
chat or already dropped into `context/samples/`.

- Save each pasted piece to `context/samples/sample-NN.md` with a one-line
  header noting what it is and where it's from (e.g. "Facebook post,
  spring market update").
- After each one, ask for the next; stop collecting at 10 or when they're
  out. Fewer than 5? Proceed anyway, but note in the profile that it was
  built on thin samples and `/voice-check` matters more.
- If they truly have nothing, say that's fine — the interview will carry the
  load — and note it in the profile.

## Phase 2 — Brain-dump interview

One question at a time, conversational. This is about opinions and instincts,
NOT business facts (those are already in `context/`). Cover:

- **Hot takes:** what do they believe about their market that other agents
  would argue with? What advice do they give that surprises people?
- **Stories on repeat:** the 2–3 stories they find themselves telling every
  client (the deal that almost died, the bidding war, the one that got away).
- **Their phrases:** how do they greet people? What words or expressions do
  friends tease them about? How do they sign off emails?
- **Explaining style:** ask them to explain, out loud in their words, one
  thing — e.g. "explain to a first-time buyer what a subject-free offer is."
  Capture HOW they explain: analogies? blunt? step-by-step? humour?
- **Pet peeves:** what makes them cringe in other realtors' marketing?
  (Whatever they name goes on the never-do list.)
- **Register:** how formal are they really? Emojis — yes/no/which? Do they
  swear mildly? Exclamation marks? How do they feel about talking about
  themselves?

## Phase 3 — Analysis → write the profile

Study the samples and interview answers together, plus
`context/positioning.md`. Then write `context/voice-profile.md` in exactly
this structure:

```markdown
# Voice Profile — <name>

*One-paragraph portrait of this voice, written so vividly that a ghostwriter
could start immediately.*

## Tone dials (1–5)
- Formality: n/5 — one-line justification
- Warmth: n/5 — …
- Humour: n/5 — …
- Directness: n/5 — …
- Salesiness: n/5 — … (most realtors want this LOW; confirm)

## Vocabulary
- Signature phrases: (verbatim, from samples/interview)
- Words and constructions they favour:
- Words they'd never use:
- Emoji policy:

## Rhythm and structure
- Sentence length and pattern (short punchy? long flowing? fragments?)
- How they open (question? statement? story?)
- How they close / their CTA style
- Formatting habits (line breaks, lists, caps)

## Platform notes
- Facebook: (how the voice flexes here — usually warmer, more local)
- LinkedIn: (usually more professional-insight, still recognisably them)

## Never do
- (hard list, from their pet peeves + positioning hard lines)

## Calibration examples
1. GENERIC AI VERSION: <3–4 line sample post written generically>
   THEIR VERSION: <same post rewritten in this profile's voice>
2. (second pair, different content type)

---
Built from: N samples + brain-dump interview · Last tuned: <date>
```

## Phase 4 — Calibrate

Run the `/voice-check` procedure once: write a short test post using the new
profile, ask "Honestly — does this sound like you? What's off?", and fold
every correction back into the profile (update the relevant dial, phrase, or
never-do item — don't just tweak the one post). Repeat until they say it
sounds like them, then update the `Last tuned:` date.

Close by telling them: their voice is now on file, everything client-facing
will be written with it, `/voice-check` re-tunes it any time, and the next
step is `/install-module marketing-engine`.
