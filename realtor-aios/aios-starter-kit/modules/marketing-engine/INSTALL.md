# INSTALL — Marketing Engine

Module: marketing-engine
Version: 1.0.0
Requires: context-os, brain-clone
Installs commands: /research-topics, /generate-content, /content-week

## Install steps

1. Verify `context/voice-profile.md` exists. If it doesn't, STOP — do not
   install — and tell the owner to run `/brain-dump` first. This module
   must never write client-facing content without a voice profile.

2. Create the content workspace in the workspace root:
   - `content/research/` (empty folder — add a `.gitkeep`-style empty
     `README.md` saying "Topic research reports land here, one dated file
     per run.")
   - `content/queue/` (same pattern: "Drafts waiting for your review.")
   - `content/published/` (same pattern: "Move posts here once posted —
     this becomes your archive and your future sample library.")
   - `content/calendar.md` with this starting content:

     ```markdown
     # Content Calendar

     Cadence: 3 posts/week — Mon market insight · Wed story/personal ·
     Fri educational. Each drafted for Facebook + LinkedIn.
     (Adjust anytime — tell Claude and it updates this line.)

     ## Weeks

     _No weeks planned yet. Run /content-week to plan your first one._
     ```

3. Copy every file from `modules/marketing-engine/commands/` into
   `.claude/commands/`. This activates `/research-topics`,
   `/generate-content`, and `/content-week`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner the marketing engine is ready, and that the natural first
   move is `/content-week` — it will run topic research automatically the
   first time and produce their first week of drafts.

## After install

Run `/content-week` to plan and draft your first week of content. From then
on: once a week, 15–30 minutes.
