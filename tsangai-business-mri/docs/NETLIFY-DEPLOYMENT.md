# Netlify Deployment — Putting Your Site Live

**Time needed: about 15 minutes.**

Netlify is a free service that turns your GitHub project into a live
website. It also **collects your leads** (names + emails) for free.

## Step 1 — Create a free Netlify account (3 min)

1. Go to **netlify.com** and click **Sign up**
2. Choose **Sign up with GitHub** (easiest — one less password)
3. Authorize Netlify when GitHub asks

*(Screenshot placeholder: Netlify sign-up)*

## Step 2 — Connect your project (5 min)

1. In Netlify, click **Add new site** → **Import an existing project**
2. Choose **GitHub**
3. Find and click your repository (e.g. `business-mri`)
4. Netlify shows a settings page. It should already say:
   - Build command: `npm run build`
   - Publish directory: `out`

   These come from the `netlify.toml` file in your project —
   **you shouldn't need to change anything.**
5. Click **Deploy site**

*(Screenshot placeholder: Netlify import screen)*

> **Only if your project sits inside a bigger folder on GitHub** (for
> example the files live at `your-repo/tsangai-business-mri/` instead of
> the top level): on the settings page, set **Base directory** to
> `tsangai-business-mri`. Otherwise leave it empty.

## Step 3 — Wait for the green light (3 min)

Netlify now builds your site. You'll see a progress log — it takes 2–4
minutes. When it says **Published**, click the link that looks like
`https://something-random.netlify.app` — that's your live website! 🎉

## Step 4 — Turn on lead collection (3 min)

1. In your site's Netlify dashboard, click **Forms** in the left menu
2. If asked, click **Enable form detection**, then go to **Deploys** and
   click **Trigger deploy → Deploy site** (one re-build so Netlify finds the form)
3. After the rebuild, a form named **leads** appears under Forms
4. Every person who completes an assessment now shows up here with their
   name, email, which assessment they took, and their score

**Get emailed for every new lead:** Forms → click the **leads** form →
**Notifications** (or Site settings → Forms → Form notifications) →
**Add notification → Email notification** → enter your email address.

*(Screenshot placeholder: Netlify Forms page with the "leads" form)*

## Step 5 — Give your site a better name (2 min, optional)

1. **Site settings → Site details → Change site name** — free, e.g.
   `tsangai-mri.netlify.app`
2. Or connect your own domain: **Domain management → Add a domain**
   (you can buy one through Netlify or connect one you already own)

## Updating the site later

Any time you edit a file on GitHub (questions, colors, your booking
link), Netlify **automatically rebuilds and republishes** within a few
minutes. You never have to "deploy" manually again.

✅ Done! Now do the final checklist in [START-HERE.md](START-HERE.md).
