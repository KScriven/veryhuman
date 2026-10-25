# VeryHuman carpentry

A responsive carpentry portfolio built with HTML and CSS only. No JavaScript, frameworks, package
installation, or build step is required.

## Pages

- [Home](./index.html): a simple hero introduction and illustration, followed by the learning journal.
- [First-fix & structural](./structural.html): battening, framing, roof joisting, and sub-floors.
- [Second-fix & finish](./finishing.html): architraves, skirting, door hanging, and kitchen fitting.
- [Fine woodwork & bespoke](./bespoke.html): furniture, cabinetry, and specialist joinery.
- [The learning journal](./journal.html): a home for short reflections, lessons, and project stories.
- [Post template](./posts/post-template.html): copy this file to write a reflection in plain HTML.

All pages share [styles.css](./styles.css). The visual identity uses warm neutrals, deep green,
and original CSS timber illustrations. Google Fonts supplies optional typefaces; system sans-serif
fallbacks keep the site usable offline. Navigation works without scripts.

Headers use [logo-site.png](./static/logo-site.png), a tightly cropped display copy of
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
5. Check the home page, all service pages, the journal, and the header logos on the live site.

Generated `.netlify/` files are not source files and should not be committed. No catch-all SPA
redirect is needed: each page is a standalone HTML document.

## Writing a journal post

1. Copy [posts/post-template.html](./posts/post-template.html) to a new file in the same folder,
   for example `posts/my-first-practice-session.html`. Keep the original as your reusable template.
2. Update the page `<title>`, description, breadcrumb, topic, heading, introduction, and date.
   The `<time datetime="2026-10-23">23 October 2026</time>` element needs both the machine-readable
   date (`YYYY-MM-DD`) and the visible date changed.
3. Replace the prompts with your own words. Keep, rename, or remove the suggested headings.
   A short reflection is enough: what you tried, what you noticed, what you learned, and one next
   step. You don't need a completed project or a photograph.
4. Remove the visible "Writing template only" note from your copy. When ready to publish, remove
   `<meta name="robots" content="noindex">` from the finished copy, not the original template.
5. Open the new file in your browser and check it. All paths assume posts live directly inside
   `posts/`; use `../static/your-photo.jpg` for an optional photo, with meaningful alt text.
6. Add a card inside the `journal-entries` section in [journal.html](./journal.html), beneath its
   section heading. Use the snippet below, updating the link, date, topic, title, and summary.
   Put the newest card first. Remove the `journal-empty` paragraph when adding your first post.
7. Commit and push the post, updated journal index, and any photos to deploy as usual.

```html
<article class="journal-entry">
  <p class="post-meta"><time datetime="2026-10-23">23 October 2026</time> / Reflection</p>
  <h3><a href="posts/my-first-practice-session.html">My first practice session</a></h3>
  <p>A short summary in your own words about what this session taught you.</p>
  <a class="text-link" href="posts/my-first-practice-session.html">Read the reflection</a>
</article>
```

Write paragraphs as `<p>Your words here.</p>`. Use `<h2>A heading</h2>` for sections,
`<ul><li>A point</li></ul>` for lists, and `<a href="https://example.com">Link text</a>` for links.
In text, write `&amp;` for `&` and `&lt;` for `<`. The template includes an optional photo block
inside an HTML comment; remove its surrounding `<!--` and `-->` markers to use it.

There is no browser editor, database, or automatic post listing. Saving HTML edits changes your
local copy; pushing them publishes them. Keep unfinished drafts outside the deployed repository:
`noindex` is a search-engine hint, not privacy protection. The journal starts empty rather than
presenting template text as your personal experience.

## Adding other content

Category pages contain concise service descriptions. You can also write longer case studies with
the brief, method, and finished result, then link to them from the relevant category pages.

The homepage is intentionally focused on the hero and journal. Service category pages remain
available at their existing URLs, but are not promoted on the landing page. There is no project
enquiry section or working enquiry form.

Original assets remain in [static/](./static/), but are not used as carpentry project photography.
The repository [license](./LICENSE) is unchanged.
