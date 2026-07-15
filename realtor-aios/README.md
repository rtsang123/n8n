# Realtor AIOS

*A TsangAIConsulting product — an AI Operating System for realtors, installed and
supported by your consultant. Sold at $5,000 CAD setup + $600/month.*

Realtor AIOS is a Claude Code workspace that learns one specific realtor's
business, captures their voice, and produces their weekly marketing content —
in their voice, about their market, for their clients.

## What's in this package

```
realtor-aios/
├── README.md                  ← you are here (consultant-facing overview)
├── INSTALLATION-GUIDE.md      ← client-facing guide, written for a
│                                non-technical realtor (part of the paid product)
├── dashboard/
│   └── dashboard.html         ← self-contained visual dashboard (open in any browser)
└── aios-starter-kit/          ← the workspace the client actually uses
    ├── CLAUDE.md              ← workspace rules Claude follows in every session
    ├── README.md              ← how the module system works (conventions spec)
    ├── .claude/commands/      ← /install-module and /prime
    ├── context/               ← the realtor's "brain" — built by the modules
    ├── system/modules.md      ← module install registry
    └── modules/               ← the four installable modules
        ├── context-os/        ← Context OS, Realtor Edition (install FIRST)
        ├── brain-clone/       ← voice capture → context/voice-profile.md
        ├── marketing-engine/  ← topic research + FB/LinkedIn content + weekly cadence
        └── lead-engine/       ← lead intake capture + follow-up in their voice
```

## The four modules, in install order

1. **`context-os`** — Context OS, Realtor Edition. A structured interview that
   captures the realtor's market and farm area, niche and client types,
   brokerage, listing process, buyer process, past content, and positioning.
   Writes the `context/` files every other module depends on. **Must be
   installed first.**

2. **`brain-clone`** — builds on the Context OS output. A brain-dump interview
   plus analysis of 5–10 samples of the realtor's past content produces
   `context/voice-profile.md` — the file every module must load before
   generating anything client-facing. Its README also documents the optional
   consultant-delivered next layers (image, voice, and video cloning with
   external tools) as upsells; this module does not automate them.

3. **`marketing-engine`** — viral-topic research in the realtor's niche
   (outlier posts/videos from multiple creators on the same topic, and why
   they worked), platform-ready Facebook and LinkedIn content generated in the
   captured voice, and a simple weekly cadence the realtor can sustain.

4. **`lead-engine`** — closes the intake leak. `/log-lead` turns any pasted
   inquiry into a structured lead record plus an instant first reply in the
   realtor's voice; `/lead-check` is the daily five minutes — who's due for
   follow-up, with every message drafted. Paste-in/copy-out by design: no
   account access, works alongside any CRM. (Requires context-os and
   brain-clone; independent of marketing-engine — installable in either
   order after the first two.)

## Delivering to a client

1. Copy the whole `realtor-aios/` folder to the client's computer.
2. Walk them through `INSTALLATION-GUIDE.md` (or do the install with them —
   the guide assumes they have never opened a terminal).
3. Install order is enforced by the modules themselves: `context-os` →
   `brain-clone` → then `marketing-engine` and `lead-engine`. Each is
   installed by typing `/install-module <name>` inside Claude Code.
4. Open `dashboard/dashboard.html` in a browser to show them the at-a-glance
   view of their AIOS (it ships with realistic sample data; it is a static
   companion view, not wired to the workspace).

## Adding future modules

The starter kit is module-agnostic. Any new module that follows the
conventions in `aios-starter-kit/README.md` (a folder under `modules/` with a
`README.md` for humans and an `INSTALL.md` Claude reads and executes) plugs in
via `/install-module` with no changes to the kit.
