---
description: Install an AIOS module from the modules/ folder
---

# /install-module

The owner wants to install a module. Module name given: `$ARGUMENTS`

Follow these steps exactly:

1. **No name given?** If `$ARGUMENTS` is empty, list every folder in
   `modules/`, showing each module's name and its one-line description (the
   italic line at the top of its `README.md`), plus whether it is already
   installed per `system/modules.md`. Ask which one to install, then continue.

2. **Read before acting.** Read `modules/<name>/INSTALL.md` completely before
   executing anything. If the folder or file doesn't exist, say so and list
   the modules that do exist.

3. **Already installed?** Check `system/modules.md`. If this module is already
   listed as installed, tell the owner and ask whether they want to re-run the
   install (re-running must be safe: overwrite the module's command files, but
   NEVER overwrite existing `context/` files without asking).

4. **Check prerequisites.** Read the `Requires:` line in the INSTALL.md
   header. Every required module must appear as installed in
   `system/modules.md`. If one is missing, STOP — do not install — and tell
   the owner the correct order (e.g. "brain-clone needs context-os first —
   run `/install-module context-os`").

5. **Execute the install steps** in `## Install steps`, in order, top to
   bottom. Announce briefly what you're doing at each step in plain language.

6. **Record the install.** Add a row to the table in `system/modules.md` with
   the module name, version (from the INSTALL.md header), today's date, and
   status `installed`. If the table still contains the `_none yet_`
   placeholder row, remove it.

7. **Hand back.** Tell the owner the install succeeded and relay the
   `## After install` section of the INSTALL.md in plain language — that's
   their next step.
