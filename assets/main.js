/* Cards use textContent so project text is displayed safely as plain text. */
const grid = document.querySelector('#project-grid');
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function safeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value, document.baseURI);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}
(window.portfolioProjects || []).forEach((project, index) => {
  const card = element('article', 'project-card');
  const imageUrl = safeUrl(project.image);
  if (imageUrl) {
    const image = element('img', 'project-image');
    image.src = imageUrl;
    image.alt = project.imageAlt || '';
    image.loading = 'lazy';
    image.decoding = 'async';
    card.append(image);
  }
  card.append(element('p', 'eyebrow', `${String(index + 1).padStart(2, '0')} / ${project.category}`));
  card.append(element('h3', '', project.title), element('p', 'project-summary', project.summary));
  const list = element('ul', 'contributions');
  project.contributions.forEach(text => list.append(element('li', '', text)));
  card.append(list);
  const tags = element('ul', 'chips project-tags');
  project.tags.forEach(text => tags.append(element('li', '', text)));
  card.append(tags);
  // Optional case studies stay in the reusable project data file.
  if (project.caseStudy && project.caseStudy.length) {
    const details = element('details', 'case-study');
    const label = project.caseStudyLabel || 'Read case study';
    const summary = element('summary', '', label);
    summary.setAttribute('aria-label', `${label}: ${project.title}`);
    details.append(summary);
    project.caseStudy.forEach(section => {
      const block = element('section', 'case-study-section');
      const heading = element('h4', '', section.heading);
      heading.id = `case-study-${index}-${details.childElementCount}`;
      block.setAttribute('aria-labelledby', heading.id);
      block.append(heading, element('p', '', section.text));
      details.append(block);
    });
    card.append(details);
  }
  const linkUrl = safeUrl(project.url);
  if (linkUrl) {
    const link = element('a', 'project-link', 'View project ↗');
    link.href = linkUrl;
    link.setAttribute('aria-label', `View ${project.title}`);
    card.append(link);
  }
  grid.append(card);
});
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
document.body.classList.add('js-enabled');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
