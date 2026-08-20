# INSTALL — Listing Marketing

Module: listing-marketing
Version: 1.0.0
Requires: context-os, brain-clone
Installs commands: /market-listing

## Install steps

1. Verify `context/voice-profile.md` exists. If it doesn't, STOP — do not
   install — and tell the owner to run `/brain-dump` first: listing
   descriptions and social posts are client/public-facing and must be in
   their voice.

2. Create `listings/marketing/` (create the parent `listings/` folder too
   if `listing-prep` isn't installed and it doesn't exist yet) with a
   one-line `README.md`: "One file per active listing, holding everything
   generated for it — created by /market-listing."

3. Copy `modules/listing-marketing/commands/market-listing.md` into
   `.claude/commands/`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner it's ready: next time they take a listing, run
   `/market-listing` with the property details. If `listing-prep` is also
   installed, mention that a matching prep sheet will be reused
   automatically.

## After install

Next active listing you have, run `/market-listing` and give it the real
details — address, price, beds/baths, square footage, key features.
