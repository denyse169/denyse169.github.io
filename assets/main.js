/* Cards use textContent so project text is displayed safely as plain text. */
const grid = document.querySelector('#project-grid');
const projects = window.portfolioProjects || [];

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

/* ---------- Project cards ---------- */
const cards = projects.map((project, index) => {
  const card = element('article', 'project-card');
  card.dataset.focus = (project.focus || []).join('|');
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
  (project.contributions || []).forEach(text => list.append(element('li', '', text)));
  card.append(list);
  const tags = element('ul', 'chips project-tags');
  (project.tags || []).forEach(text => tags.append(element('li', '', text)));
  card.append(tags);
  if (project.caseStudy && project.caseStudy.length) {
    const details = element('details', 'case-study');
    const label = project.caseStudyLabel || 'Read case study';
    const summary = element('summary', '', label);
    summary.setAttribute('aria-label', `${label}: ${project.title}`);
    details.append(summary);
    project.caseStudy.forEach((section, i) => {
      const block = element('section', 'case-study-section');
      const heading = element('h4', '', section.heading);
      heading.id = `case-study-${index}-${i}`;
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
  return card;
});

/* ---------- Project filters ---------- */
const filterBar = document.querySelector('#project-filters');
const filterStatus = document.querySelector('#filter-status');
const focusValues = [...new Set(projects.flatMap(p => p.focus || []))];
if (filterBar && focusValues.length) {
  ['All', ...focusValues].forEach(value => {
    const button = element('button', 'filter', value);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(value === 'All'));
    button.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      let shown = 0;
      cards.forEach(card => {
        const match = value === 'All' || card.dataset.focus.split('|').includes(value);
        card.hidden = !match;
        if (match) shown++;
      });
      filterStatus.textContent = `Showing ${shown} project${shown === 1 ? '' : 's'}${value === 'All' ? '' : ` in ${value}`}.`;
    });
    filterBar.append(button);
  });
}

/* ---------- Mobile menu ---------- */
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

/* ---------- Active section highlighting ---------- */
const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateActive() {
  const offset = window.innerHeight * 0.3;
  let current = null;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top - offset <= 0) current = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1].id;
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}

/* ---------- Scroll progress + back to top ---------- */
const bar = document.querySelector('.progress span');
const toTop = document.querySelector('.to-top');
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 600);
  updateActive();
}
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { onScroll(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();
