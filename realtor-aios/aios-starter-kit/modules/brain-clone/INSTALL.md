# INSTALL — Brain Clone

Module: brain-clone
Version: 1.0.0
Requires: context-os
Installs commands: /brain-dump, /voice-check

## Install steps

1. Verify the prerequisite is genuinely usable, not just registered: at
   minimum `context/business-profile.md` and `context/positioning.md` must
   exist. If they don't, stop and tell the owner to finish
   `/context-interview` first — the voice profile is built on top of those
   answers.

2. Create the folder `context/samples/` with a `README.md` inside containing:

   ```
   # Voice Samples

   Drop 5–10 pieces of your past content in here as plain text files —
   social posts, client emails, your bio, video scripts, listing
   descriptions. Or just paste them into the chat during /brain-dump and
   Claude will save them here for you (one file per sample, named
   sample-01.md, sample-02.md, …).

   Don't polish them. The real you is the point.
   ```

3. Copy every file from `modules/brain-clone/commands/` into
   `.claude/commands/`. This activates `/brain-dump` and `/voice-check`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Ask the owner whether they have 5–10 pieces of past content handy. If
   yes, offer to start `/brain-dump` now. If not, tell them what to gather
   (see the module README's "Before you start") and to run `/brain-dump`
   when ready.

## After install

Gather 5–10 pieces of past content, then run `/brain-dump` (about 30
minutes). When the voice profile is calibrated, the final module to install
is `marketing-engine`.
