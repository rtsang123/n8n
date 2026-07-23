# INSTALL — Transaction Coordinator

Module: transaction-coordinator
Version: 1.0.0
Requires: context-os, brain-clone
Installs commands: /open-escrow, /deal-check

## Install steps

1. Verify `context/voice-profile.md` exists. If missing, STOP — do not
   install — and point the owner to `/brain-dump`; client updates are
   client-facing.

2. Create the deals workspace:
   - `deals/active/` (README: "One file per deal in progress — created by
     /open-escrow.")
   - `deals/closed/` (README: "Closed deals, archived — moved here by
     /deal-check.")
   - `deals/pipeline.md`:

     ```markdown
     # Deal Pipeline

     | Deal | Parties | Next date | Status |
     |------|---------|-----------|--------|
     | _none yet_ | | | |
     ```

3. Copy every file from `modules/transaction-coordinator/commands/` into
   `.claude/commands/`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner: the moment an offer is accepted, `/open-escrow`.
   Otherwise, `/deal-check` on whatever rhythm gives them peace of mind —
   daily in a busy week, every few days otherwise.

## After install

Practice with `/open-escrow` on a current or recent deal, then use
`/deal-check` on your own rhythm.
