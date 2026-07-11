# How to Change the Logo

**Time needed: 2 minutes.**

The site uses a clean text logo: a colored square with your first letter,
plus your business name. It looks professional and never needs a designer.

## Change the logo text

1. On GitHub, open `data/config.json` and click the pencil ✏️ to edit
2. Find these lines:

```json
"businessName": "TsangAI",
"logoText": "TsangAI",
```

3. Change the text between the quotes to your business name
4. Click **Commit changes** — the site updates automatically

- `logoText` = what appears in the top-left corner of every page
- `businessName` = what appears in the footer and on the PDF report

The colored square automatically uses the **first letter** of your
`logoText` and your brand color (see
[HOW-TO-CHANGE-COLORS.md](HOW-TO-CHANGE-COLORS.md)).

## Want an image logo instead? (optional, 10 minutes)

The text logo is deliberately simple. If you have a real logo image and
someone comfortable editing one file:

1. Upload your logo (PNG, ideally ~200px tall, transparent background) to
   the `public` folder on GitHub — name it `logo.png`
2. Open `components/Header.tsx` and replace the `<span>...</span>` block
   inside the link with:

```html
<img src="/logo.png" alt="Logo" style={{ height: '32px' }} />
```

If that sounds scary — skip it. The text logo converts just as well.
