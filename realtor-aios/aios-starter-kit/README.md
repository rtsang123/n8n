# AIOS Starter Kit

*A Claude Code workspace template with a module-install system. Modules teach
the workspace new capabilities; the workspace remembers everything in plain
Markdown files.*

This folder is the workspace the business owner opens in Claude Code. It
starts nearly empty and gains capabilities as modules are installed.

## Folder layout

```
aios-starter-kit/
├── CLAUDE.md            # Rules Claude follows in every session in this workspace
├── README.md            # This file — the module system conventions
├── .claude/
│   └── commands/        # Slash commands. Ships with /install-module and /prime;
│                        # modules add their own commands here on install.
├── context/             # The owner's context files — their "brain".
│                        # Written by modules, readable and editable as plain text.
├── system/
│   └── modules.md       # Registry of installed modules. Maintained by /install-module.
└── modules/             # Installable module packages (not yet active until installed)
    └── <module-name>/
        ├── README.md    # For humans: what the module does, what it creates
        ├── INSTALL.md   # For Claude: executed step-by-step by /install-module
        └── commands/    # Slash commands the module installs (optional)
```

## The two built-in commands

- **`/install-module <name>`** — reads `modules/<name>/INSTALL.md`, checks the
  module's prerequisites against `system/modules.md`, executes the install
  steps in order, and records the install in the registry.
- **`/prime`** — loads the whole workspace (CLAUDE.md, the module registry,
  every file in `context/`) and opens a working session with a short status
  report and suggested next actions. Run it at the start of any session.

## Module conventions

Every module MUST follow this format so `/install-module` can run it:

1. **One folder per module** under `modules/`, named in lowercase with hyphens
   (e.g. `context-os`). The folder name is the module name used with
   `/install-module`.

2. **`README.md`** — human-facing. The first line after the title must be a
   one-line italic description (shown when `/install-module` lists available
   modules). Covers: what the module does, what it creates, the commands it
   adds, and anything the owner should prepare.

3. **`INSTALL.md`** — Claude-facing. Must start with this header block:

   ```
   Module: <name>
   Version: <semver>
   Requires: <none | comma-separated module names>
   Installs commands: <none | /command, /command>
   ```

   followed by `## Install steps` (numbered, executed top to bottom) and
   `## After install` (what to tell the owner to do next). Steps must be
   concrete actions Claude can perform: create a file, copy a command file,
   run an interview, update the registry.

4. **`commands/`** (optional) — Claude Code command files (`.md` with a
   `description` frontmatter). The INSTALL.md steps copy these into
   `.claude/commands/`, which is what activates them.

5. **Prerequisites are enforced, not suggested.** If `Requires:` names a
   module that isn't in `system/modules.md`, `/install-module` stops and
   tells the owner the correct order. A module may also verify that specific
   context files exist (e.g. `context/voice-profile.md`) before installing.

6. **Modules write to `context/` — or to their own top-level workspace
   folder** (e.g. marketing-engine creates `content/`). They never write into
   `system/` or `.claude/` directly, except for copying their own command
   files during install. All owner knowledge lives in `context/` as plain
   Markdown so it survives module changes and is always human-readable.

## The shipped modules

| Order | Module | What it builds |
|-------|--------|----------------|
| 1 | `context-os` | The realtor's business context files in `context/` |
| 2 | `brain-clone` | `context/voice-profile.md` — the captured writing voice |
| 3 | `marketing-engine` | Topic research, FB/LinkedIn content, weekly cadence |
| 4 | `lead-engine` | Lead intake capture + follow-up drafting in `leads/` |

Install 1 and 2 in that order; 3 and 4 both require the first two but are
independent of each other. Each module's INSTALL.md enforces its own
prerequisites, so installing out of order fails safely with instructions.
