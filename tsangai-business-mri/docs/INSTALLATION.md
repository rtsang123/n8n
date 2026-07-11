# Installation — Getting the Project onto GitHub

**Time needed: about 20 minutes. No terminal. No coding.**

GitHub is a free website that stores your project files. Netlify (next
guide) reads them from there and turns them into your live website.

## Step 1 — Create a free GitHub account (5 min)

1. Go to **github.com**
2. Click **Sign up**
3. Use your business email and pick a password
4. Verify your email when GitHub asks

*(Screenshot placeholder: GitHub sign-up page)*

## Step 2 — Create a new repository (3 min)

A "repository" is just GitHub's word for a project folder.

1. Once logged in, click the **+** in the top-right corner → **New repository**
2. Repository name: `business-mri` (or anything you like)
3. Choose **Private** (recommended — only you and Netlify can see it)
4. Do **NOT** tick any of the "Initialize" checkboxes
5. Click **Create repository**

*(Screenshot placeholder: New repository form)*

## Step 3 — Upload the project files (10 min)

1. On your new empty repository page, click the link that says
   **"uploading an existing file"**
2. On your computer, open the project folder (`tsangai-business-mri`)
3. Select **everything inside it** and drag it into the GitHub upload box
   - ✅ Include: `app`, `components`, `data`, `docs`, `lib`, `public`,
     and all files like `package.json`, `netlify.toml`, `README.md`
   - ❌ Skip if present: a folder called `node_modules`, a folder called
     `.next`, a folder called `out` (these are temporary build files —
     Netlify creates its own)
4. Wait for the upload bar to finish
5. In the box at the bottom, type: `First upload` and click **Commit changes**

*(Screenshot placeholder: drag-and-drop upload area)*

> **Tip:** GitHub sometimes struggles with dragging nested folders in
> older browsers. If folders won't upload, use Chrome, and drag the
> folders (not their contents) directly into the upload area.

## Step 4 — Check it worked (2 min)

Your repository page should now show folders named `app`, `components`,
`data`, `docs`, `lib`, `public` and files including `package.json` and
`netlify.toml`.

✅ Done! Next guide: **[NETLIFY-DEPLOYMENT.md](NETLIFY-DEPLOYMENT.md)** —
this is where the website actually goes live.
