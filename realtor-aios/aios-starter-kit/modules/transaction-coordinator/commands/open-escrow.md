---
description: Start tracking a newly accepted offer
---

# /open-escrow

Deal details, if given: `$ARGUMENTS`

## Non-negotiable first step

Read `context/voice-profile.md`. If missing, stop and point to
`/brain-dump`.

## 1 — Capture the deal

Ask for whatever's missing: property address, buyer and/or seller names
(and which side the owner represents), accepted price, and the key dates
that apply — condition/subject removal, financing, inspection,
possession/closing, and anything else specific to this deal. Mark
unconfirmed dates `?` rather than guessing.

If a matching file exists in `leads/active/` (lead-engine installed), ask
whether to link it — note the path in the deal record rather than
duplicating its contents.

## 2 — Save

Write `deals/active/<address-slug>.md`:

```markdown
# <Address>
Parties: … · Accepted: <date> · Price: … · Linked lead: <path or none>

## Key dates
- <condition>: <date> — status
…

## Update history
- <date>: opened
```

Add the one-line row to `deals/pipeline.md`.

## 3 — Draft the client update

In the owner's voice: congratulate the client, set expectations for what
happens next and by when. No invented figures — anything unconfirmed
becomes a placeholder. Show it ready to copy; log it in the update history
once sent.
