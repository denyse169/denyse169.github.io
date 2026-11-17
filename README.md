# Professional portfolio

A responsive, single-page portfolio for business operations, business analysis, and digital transformation opportunities. Built with plain HTML, CSS, and JavaScript. No packages or build step are required. Fonts (Playfair Display for headings, Lato for body text) load from Google Fonts; if they can't load, the site falls back to Georgia and Arial. Change them with the `--serif` and `--sans` variables at the top of `assets/styles.css`.

## Files

- `index.html`: biography, experience, skills, certifications, education, contact, and navigation.
- `assets/styles.css`: colors, typography, and responsive layouts.
- `assets/projects.js`: the project data. Edit this file to add project cards.
- `assets/main.js`: renders projects and controls the mobile navigation.

## Update your information

Open `index.html` and look for the comments labeled HERO, IMPACT NUMBERS, ABOUT, FOCUS AREAS, APPROACH, EXPERIENCE, PROJECTS, SKILLS, EDUCATION & CERTIFICATIONS, and CONTACT. Edit text between HTML tags, keeping the tags intact. Add only verified dates, credentials, and responsibilities.

The LinkedIn link is in the hero and contact sections. To add a resume, put it at `assets/resume.pdf` and add `<li><a href="assets/resume.pdf">Resume ↗</a></li>` to the `hero-links` list. To add an email button, add `<a class="button secondary" href="mailto:YOUR_EMAIL">Email me</a>` in the contact section. Anything you add here is public.

## Navigation

The header stays at the top while visitors scroll and highlights the section they are reading. On phones it collapses into a Menu button. A progress bar shows how far down the page the reader is, and a back-to-top button appears after scrolling. If you add a section, give it an `id` and add a matching `<a href="#id">` link inside `<nav>`.

## Add future projects

Edit only `assets/projects.js`. Copy a complete object in `window.portfolioProjects`, place a comma between objects, and replace its text. The cards automatically appear in list order; no layout changes are required.

```js
{
  title: "Your project title",
  category: "Your project category",
  summary: "A short, factual overview.",
  contributions: ["What you did.", "Another contribution."],
  tags: ["Relevant skill", "Relevant tool"],
  url: "", // Optional: actual project URL or a relative file path
  image: "", // Optional: assets/project-photo.jpg
  imageAlt: "" // Describe an image's relevant content
}
```

Keep strings in quotes and escape any double quotes inside them with `\"`. Leave `url` empty to omit the project link. Local files use paths like `assets/case-study.pdf`, without a leading slash. Text is rendered as plain text; do not add HTML inside project values. Refresh the browser after saving.

### Add a written case study

A project can include an optional `caseStudy` list in `assets/projects.js`. Each item has `heading` and `text` fields. The card automatically adds an accessible “Read case study” disclosure; readers can expand it without leaving the portfolio.

```js
caseStudy: [
  { heading: "Project Overview", text: "A concise overview." },
  { heading: "My Contribution", text: "Your verified individual contribution." }
]
```

Separate team outputs from individual contributions. Label proposed benefits as expected rather than achieved.

Each project's `focus` list (for example `["Data Analysis", "Process Improvement"]`) creates the filter buttons above the project grid. Reuse existing focus names so the filters stay tidy.

## Change images and colors

For a project image, add a compressed JPG, WebP, or PNG to `assets/`, then set that project's `image` and `imageAlt`. Aim for an image under 200 KB and around 1000 pixels wide. Project images are cropped to the card width and loaded lazily.

Your headshot is `assets/denyse-tumugire.jpg`, shown at the top of the page. To change it, replace that file with a compressed JPG of a similar shape (about 720 × 830 pixels). Change the color variables at the top of `assets/styles.css` while preserving readable text contrast.

## Preview and check

From this repository directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

On your own computer, open the local server in a browser. In a cloud task, use local HTTP requests or browser tooling for validation; the onboarding UI does not provide localhost previews. Stop the server with Ctrl+C.

Check all sections, mobile Menu, keyboard focus, project cards, and any links you add. Test a narrow mobile window as well as a desktop window. If project cards disappear, check the browser console for a missing comma or quote in `projects.js`. Without JavaScript, navigation and the core profile remain available; the projects section shows a fallback summary.

## Publish with GitHub Pages

1. Commit and push these files to `main` in `denyse169/denyse169.github.io`.
2. In the repository on GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment to finish and use the published URL shown by GitHub to check the site.

`index.html` is at the repository root. `.nojekyll` makes this a plain static site. Asset paths are relative, so the site also works under a subdirectory. There is no custom domain or deployment workflow to configure. A local compatibility check does not mean a GitHub deployment has been published.

For future updates, edit the files, preview, commit, and push to the same branch. GitHub Pages will publish the update automatically once configured. Browser caching can require a hard refresh to see changes.
