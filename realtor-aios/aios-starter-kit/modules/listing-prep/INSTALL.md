# INSTALL — Listing Prep

Module: listing-prep
Version: 1.0.0
Requires: context-os, brain-clone
Installs commands: /prep-listing

## Install steps

1. Verify `context/voice-profile.md` exists. If it doesn't, STOP — do not
   install — and tell the owner to run `/brain-dump` first; prep sheets are
   written in their voice.

2. Create `listings/prepped/` with a one-line `README.md`: "Saved prep
   sheets, one per address — created by /prep-listing."

3. Copy `modules/listing-prep/commands/prep-listing.md` into
   `.claude/commands/`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner it's ready: next time they book a listing appointment,
   run `/prep-listing`.

## After install

Run `/prep-listing` before your next listing appointment.
