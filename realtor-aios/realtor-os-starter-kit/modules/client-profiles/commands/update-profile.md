---
description: Fold a follow-up conversation into an existing client profile
---

# /update-profile

Client name and/or new conversation, if given: `$ARGUMENTS`

## 1 — Find the profile

If the name isn't clear from `$ARGUMENTS`, ask which client this is and
list `clients/profiles/` if it helps jog memory. If no profile exists yet
for this person, say so and suggest `/build-profile` instead.

## 2 — Get the new conversation

If not already given, ask for the transcript or notes from the latest
conversation.

## 3 — Merge, don't overwrite

Read the existing profile. Update only what the new conversation actually
changes or adds:

- A field that was blank and is now mentioned → fill it in.
- A field that changes (e.g. budget went up, now open to condos too) →
  update it, and add a one-line note in **Notes** about what changed and
  when, so the history isn't lost.
- Everything else → leave exactly as it was.

Never remove information the owner might still want just because this
conversation didn't repeat it.

## 4 — Save and confirm

Update the `Last updated:` line, save, and show what changed in plain
language — e.g. "Updated: budget is now $850K–$950K (was $750K–$850K), and
they mentioned wanting a fenced yard — added to Notes."
