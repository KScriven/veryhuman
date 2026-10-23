# VeryHuman carpentry

A responsive carpentry portfolio built with HTML and CSS only. No JavaScript, frameworks, package
installation, or build step is required.

## Pages

- [Home](./index.html): introduction, craft categories, process, and future contact section.
- [First-fix & structural](./structural.html): battening, framing, roof joisting, and sub-floors.
- [Second-fix & finish](./finishing.html): architraves, skirting, door hanging, and kitchen fitting.
- [Fine woodwork & bespoke](./bespoke.html): furniture, cabinetry, and specialist joinery.
- [The process journal](./journal.html): a short coming-soon notice for future project stories.

All pages share [styles.css](./styles.css). The visual identity uses warm neutrals, deep green,
and original CSS timber illustrations. Google Fonts supplies optional typefaces; system sans-serif
fallbacks keep the site usable offline. Navigation works without scripts.

Headers and footers use [logo-site.png](./static/logo-site.png), a tightly cropped display copy of
your original [logo.png](./static/logo.png). The original is preserved unchanged.

## Preview

Open [index.html](./index.html) directly in a browser, or serve the repository with any static server.
For example, if Python 3 is available:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. There are no application dependencies or compilation steps.

## Deploying to Netlify

[netlify.toml](./netlify.toml) configures Netlify to publish the repository root as a static site.
The build command only prints a message; it intentionally replaces the previous Svelte build command.
No Node packages, framework adapter, or serverless functions are required.

For the existing Netlify site:

1. Confirm it is connected to this GitHub repository and that its production branch is `main`.
2. In Netlify's build settings, clear any old package directory or Svelte framework settings. The
   base directory should be the repository root, and the publish directory should be `.` (not `build`).
   The committed configuration supplies the build command and publish directory.
3. Commit and push the complete static-site migration, including the root HTML pages,
   [styles.css](./styles.css), [static/](./static/), and [netlify.toml](./netlify.toml), along with the
   removal of the old Svelte configuration and package files. Pushing only the deployment configuration
   would leave the old application files in the remote repository.
4. Netlify will deploy the push automatically if continuous deployment is enabled. For the first
   deployment after the migration, use Netlify's **Clear cache and deploy site** option if stale
   framework detection or build output causes a failure.
5. Check the home page, all service pages, the journal, and the header/footer logos on the live site.

Generated `.netlify/` files are not source files and should not be committed. No catch-all SPA
redirect is needed: each page is a standalone HTML document.

## Adding content later

Category pages contain concise service descriptions rather than empty project sections. The journal
has a single coming-soon notice until real project stories are ready. Add case studies with the
brief, method, and finished result, then link to them from the relevant category pages.

Replace CSS illustrations with your own photographs as work becomes available. Add your business
details, service area, availability, and contact information in the home page's `project-brief`
section. It is a placeholder section, not a working enquiry form.

Original assets remain in [static/](./static/), but are not used as carpentry project photography.
The repository [license](./LICENSE) is unchanged.
