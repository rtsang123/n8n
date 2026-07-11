# Common Problems (and Easy Fixes)

## "My Netlify build failed" (red ❌ on a deploy)

**Cause 99% of the time:** a typo in a JSON file — a missing quote, comma
or brace from a recent edit.

**Fix:**
1. In Netlify, open the failed deploy and glance at the log — it usually
   names the broken file
2. Open that file on GitHub, click the pencil, and check your last change
   against the rules in [HOW-TO-CHANGE-QUESTIONS.md](HOW-TO-CHANGE-QUESTIONS.md)
3. Can't spot it? Paste the whole file into ChatGPT/Claude:
   *"Fix the JSON syntax errors in this file and return the corrected file."*
4. Commit the fix — Netlify rebuilds automatically

**Good news:** a failed build never breaks your live site. The old
version stays up until a new build succeeds.

## "I don't see any leads"

1. Netlify dashboard → your site → **Forms**
2. If Forms is empty or off: click **Enable form detection**, then
   **Deploys → Trigger deploy → Deploy site**
3. After the rebuild, complete an assessment yourself using a real email —
   you should appear under the **leads** form within a minute
4. Testing on your own computer (`npm run dev`)? Lead saving only works
   on the live Netlify site — that's normal.

## "The Book a Call button goes to the wrong place"

You haven't changed the booking link yet. Open `data/config.json` and
replace `bookingUrl` with your real Calendly (or other) link. See
[START-HERE.md](START-HERE.md).

## "My changes aren't showing on the live site"

1. Did you click **Commit changes** on GitHub? (Editing isn't enough)
2. Netlify takes 2–4 minutes — check **Deploys** for a build in progress
3. Your browser may be showing an old copy: refresh with **Ctrl+Shift+R**
   (Windows) or **Cmd+Shift+R** (Mac), or check on your phone

## "The PDF won't download"

- Pop-up/download blockers can interfere — try another browser
- On iPhones, the PDF opens in a new tab; users can share/save from there
- Still stuck? The results page shows everything the PDF contains, so no
  lead is ever lost

## "Quotation marks look weird / the file broke after I pasted from Word"

Word converts straight quotes `"` into curly quotes `“ ”`, which break
JSON files. Always type directly in the GitHub editor, or paste into
ChatGPT/Claude first and ask it to *"replace all curly quotes with
straight quotes."*

## "I want to rename the whole product"

Open `data/config.json` and change `businessName`, `productName`,
`logoText` and `tagline`. Done.

## "I deleted something and everything broke"

GitHub keeps every version forever:
1. Open the broken file on GitHub → click **History** (top right)
2. Click the version from before your change
3. Copy its contents, edit the current file, paste, commit

## Still stuck?

Copy the error message and ask ChatGPT or Claude — include the file you
last edited. These are standard tools (Next.js, Netlify, JSON) and AI
assistants fix these issues in seconds.
