# INSTALL — Monday Skill

Module: monday-skill
Version: 1.2.0
Requires: context-os, client-profiles
Installs commands: /weekly-match

## Install steps

1. Verify the prerequisites are genuinely usable: `context/business-profile.md`
   must exist, and the `clients/profiles/` folder (created by client-profiles)
   must exist. If either is missing, STOP — do not install — and tell the
   owner which one to finish first.

2. Create `clients/focus-list.md` (the one new file this module owns):

   ```markdown
   # Weekly Focus List

   Who you're actively following up with. /weekly-match reads and updates
   this — add or remove names any time you run it.

   _No one on the list yet — /weekly-match will help you build it._
   ```

3. Copy `modules/monday-skill/commands/weekly-match.md` into
   `.claude/commands/`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Check whether `brain-clone` is installed (look in `system/modules.md`).
   Tell the owner: if it's there, `/weekly-match` can also draft the message
   to send each client, in their voice; if not, it'll just show them the
   research.

6. Tell the owner: whenever they're ready to do their weekly follow-up pass
   — Monday or otherwise — run `/weekly-match`. If they have zero client
   profiles yet, point them to `/build-profile` first.

## After install

Build at least one client profile if you haven't (`/build-profile`), then
run `/weekly-match`.
