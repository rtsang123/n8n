# Test Transcripts — client-profiles

Three fictional realtor–client calls, written to test `/build-profile`
(and, downstream, `monday-skill`) before running either on real clients.
All calls feature the same example realtor (Jas Sandhu) used throughout the
rest of this package's demo materials.

| File | Client(s) | What it tests |
|------|-----------|----------------|
| `01-priya-dev-malhotra.md` | First-time buyer couple | The clean case — nearly every field is stated explicitly. Also a two-person household on one profile. |
| `02-grace-thompson.md` | Downsizing retiree | Age-restriction preference (55+, not required), a soft/conditional budget, no transit need, and square footage that's never given — should stay blank. |
| `03-marcus-elena-reyes.md` | Relocating family | The hard case: budget is explicitly provisional, city is undecided between two areas, and square footage is deliberately never quantified. Tests whether the module leaves gaps blank instead of guessing. |

## How to test

1. Open each file and copy everything below the `---` divider (skip the
   HTML comment and the "Test case" note — that's meta info for you, not
   part of the call).
2. In a Realtor AIOS session with `client-profiles` installed, run
   `/build-profile` and paste the transcript in.
3. Check the saved profile against the file's own "Test case" note — did it
   extract what it should have, and correctly leave out what wasn't said?

Watch specifically for: how it handles two-name households (profile #1 and
#3 both have this), and whether it ever fills in a budget, city, or square
footage that the client only spoke about vaguely rather than leaving the
field blank.
