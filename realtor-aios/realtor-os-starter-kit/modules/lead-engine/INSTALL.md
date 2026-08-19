# INSTALL — Lead Engine

Module: lead-engine
Version: 1.0.0
Requires: context-os, brain-clone
Installs commands: /log-lead, /lead-check

## Install steps

1. Verify `context/voice-profile.md` exists. If it doesn't, STOP — do not
   install — and tell the owner to run `/brain-dump` first. First replies
   and follow-ups are client-facing and must be written in their voice.

2. Create the leads workspace in the workspace root:
   - `leads/active/` (with an empty `README.md` saying "One file per live
     lead — created by /log-lead.")
   - `leads/closed/` (same pattern: "Archived leads with outcome and
     reason — moved here by /lead-check.")
   - `leads/pipeline.md` with this starting content:

     ```markdown
     # Lead Pipeline

     Follow-up rhythm: reply same day · day 2 · day 7 · day 14 ·
     monthly keep-warm. (Adjust anytime — tell Claude and it updates
     this line.)

     | Lead | Source | Interest | Next touch | Status |
     |------|--------|----------|------------|--------|
     | _none yet_ | | | | |
     ```

3. Copy every file from `modules/lead-engine/commands/` into
   `.claude/commands/`. This activates `/log-lead` and `/lead-check`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner the habit that makes this work: the moment an inquiry
   arrives — email, DM, portal, voicemail — paste it into `/log-lead`. And
   each morning, `/lead-check`. Offer to practice once right now with a
   real or made-up inquiry.

## After install

Practice once with `/log-lead` (a past inquiry works fine), then make
`/lead-check` part of the morning routine. Five minutes.
