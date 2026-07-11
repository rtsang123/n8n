# INSTALL — Context OS (Realtor Edition)

Module: context-os
Version: 1.1.0
Requires: none
Installs commands: /context-interview, /context-update

## Install steps

1. Confirm the `context/` folder exists in the workspace root (it ships with
   the starter kit). If it's missing, create it.

2. Copy every file from `modules/context-os/commands/` into
   `.claude/commands/`. This activates `/context-interview` and
   `/context-update`.

3. Do NOT create the context files yet — the interview creates them as it
   goes, so an interrupted interview leaves finished sections saved and
   unfinished ones absent (that's how `/context-interview` knows where to
   resume).

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Ask the owner: "Your AI is ready to learn your business. The interview
   takes about 30–45 minutes — want to start now, or later?" If now, run the
   `/context-interview` procedure immediately (read
   `.claude/commands/context-interview.md` and follow it). If later, tell
   them to type `/context-interview` whenever they're ready.

## After install

Run `/context-interview` to do the 30–45 minute business interview. Once it's
complete, the next module to install is `brain-clone`.
