---
description: Turn a conversation with a buyer into a structured client profile
---

# /build-profile

Conversation content, if given: `$ARGUMENTS`

## 1 — Get the conversation

If `$ARGUMENTS` is empty, ask the owner to bring the conversation in as
text — a transcript, a voice-memo transcription, or their own notes.
Accept it exactly as given — messy, partial, out of order, doesn't matter.

**If what they have is a raw audio file (a recording, not yet text):**
Claude can't listen to audio directly, so it needs to become text first.
The good news is this is almost always a 30-second step, not a new tool to
learn — most realtors already have something that does it automatically:

- **iPhone Voice Memos** — recordings are transcribed automatically; open
  the memo, tap it, and the transcript is right there to copy.
- **Android** — the Recorder app (Pixel and many other phones) transcribes
  automatically the same way; some phones route this through Google
  Recorder specifically.
- **Fathom, Otter, or a similar call-recording tool** — if the owner
  records client calls, these already produce a transcript alongside the
  recording; copy that instead of the audio.
- If none of these apply and all they have is a raw audio file with no
  transcript anywhere, say so plainly: this module can't turn that into
  text itself, and ask them to run it through whichever of the above they
  have access to (or any other transcription tool/app they already use),
  then bring the resulting text back to `/build-profile`.

Never guess at what a recording might contain from its filename or
duration — always work from actual text.

## 2 — Check for an existing profile

Look in `clients/profiles/` for a file that might already be this person
(match on name). If one exists, stop and suggest `/update-profile` instead
— don't create a duplicate.

## 3 — Extract the profile

Pull out only what the conversation actually contains. Never guess or infer
a specific value (a price, a beds count) that wasn't stated or clearly
implied — leave it blank rather than assume. Fields:

- **Name** (required — ask if genuinely not in the conversation)
- **Contact info** — phone / email, however it came up
- **What they want** — a short freeform summary in their own words/situation
- **Beds**, **bathrooms**
- **Property type** — house / condo / townhouse / other
- **City / area**
- **Price range**
- **Size** (sq ft)
- **Parking**
- **Age-restriction preference** — e.g. "55+ community" or "no preference"
  (this is about the *property*, not the client's own age)
- **Transit / commute preference** — e.g. "near SkyTrain," "under 20 min to
  downtown," or any commute note that came up
- **Notes** — anything else worth keeping that doesn't fit above (kids,
  pets, timeline, motivation, a phrase they used, a hard dealbreaker)

Leave any field genuinely not covered by the conversation blank — don't pad
with "not specified" clutter, just omit the line.

## 4 — Save

Slug the name (e.g. `maya-chen`) and write `clients/profiles/<slug>.md`:

```markdown
# <Full name>

Contact: <phone / email or blank>
Linked lead: <path to leads/active/*.md if one matches, else blank>

## Looking for
- Beds: …
- Bathrooms: …
- Property type: …
- City/area: …
- Price range: …
- Size: …
- Parking: …
- Age-restriction preference: …
- Transit/commute preference: …

## Notes
…

## Search log
_No searches yet — run monday-skill's weekly command to start matching listings._

---
Last updated: <date> · Source: /build-profile
```

If a matching file exists in `leads/active/` (lead-engine installed), note
its path in `Linked lead:` rather than duplicating contact info.

## 5 — Confirm

Show the saved profile and ask if anything needs fixing. Tell the owner
this person is now available to add to their weekly focus list if
`monday-skill` is installed.
