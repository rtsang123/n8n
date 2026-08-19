# INSTALL — Client Profiles

Module: client-profiles
Version: 1.1.0
Requires: context-os
Installs commands: /build-profile, /update-profile

## Install steps

1. Verify `context/business-profile.md` exists (context-os installed and at
   least started). If it doesn't, STOP — do not install — and tell the owner
   to run `/context-interview` first.

2. Create `clients/profiles/` with a one-line `README.md`: "One file per
   prospect, built from your conversations — created by /build-profile."

3. Copy every file from `modules/client-profiles/commands/` into
   `.claude/commands/`. This activates `/build-profile` and
   `/update-profile`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner it's ready: after their next buyer conversation, paste it
   into `/build-profile`. If they usually have a recording rather than
   notes, mention that their phone likely already transcribes it for them
   (iPhone Voice Memos, Android Recorder) — or Fathom/Otter if they record
   calls — so they always have text ready to paste, no new tool needed.

## After install

After your next conversation with a buyer, run `/build-profile` and paste
in the transcript or your notes. If you install `monday-skill` later, it
will work from the profiles built here.
