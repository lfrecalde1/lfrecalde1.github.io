(() => {
  'use strict';
  const data = window.portfolio;
  const profile = data.profile;
  const $ = (selector) => document.querySelector(selector);

  // Theme selection follows the system until a visitor chooses a preference.
  const themeToggle = $('#theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let themeChosen = false;
  try {
    themeChosen = ['light', 'dark'].includes(localStorage.getItem('portfolio-theme'));
  } catch {}
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    $('meta[name="theme-color"]').content = theme === 'dark' ? '#15171b' : '#ffffff';
  }
  applyTheme(document.documentElement.dataset.theme);
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    themeChosen = true;
    applyTheme(theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {}
  });
  systemTheme.addEventListener('change', (event) => {
    if (!themeChosen) applyTheme(event.matches ? 'dark' : 'light');
  });
  // Shared HTML helpers keep editable content escaped and external links consistent.
  const escape = (value = '') =>
    String(value).replace(
      /[&<>"']/g,
      (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const safeUrl = (value = '') =>
    /^(https?:\/\/|mailto:|assets\/|#)/i.test(value) ? escape(value) : '#';
  const external = (url) =>
    /^https?:\/\//i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const link = (label, url, primary = false) =>
    /* HTML */ `<a
      class="button${primary ? ' button-primary' : ''}"
      href="${safeUrl(url)}"
      ${external(url)}${label === 'CV' ? ' download aria-label="Download CV (PDF)"' : ''}
      >${label === 'CV' ? 'CV (PDF)' : escape(label)}</a
    >`;
  function scholarLink(name, person = 'self', className = '') {
    const url = person === 'advisor' ? profile.advisorScholarUrl : profile.links['Google Scholar'];
    return /* HTML */ `<a
      class="person-link author-${person} ${escape(className)}"
      href="${safeUrl(url)}"
      ${external(url)}
      >${escape(name)}</a
    >`;
  }

  function linkPeople(text = '') {
    return escape(text)
      .replace(/\bLuis F\.? Recalde\b/g, (name) => scholarLink(name))
      .replace(/\bGuanrui Li\b/g, (name) => scholarLink(name, 'advisor'));
  }

  const authors = (list = []) =>
    list
      .map((name) => (/^Luis F\.? Recalde$/.test(name) ? scholarLink(name) : escape(name)))
      .join(', ');

  // Introduction: edit the profile content and destinations in research.js.
  $('#header-name').innerHTML = scholarLink(profile.name, 'self', 'wordmark');
  const intro = linkPeople(profile.intro).replace(
    'Aerial-robot Control and Perception (ACP) Lab',
    /* HTML */ `<a class="lab-link" href="${safeUrl(profile.labUrl)}" ${external(profile.labUrl)}
      >Aerial-robot Control and Perception (ACP) Lab</a
    >`
  );
  $('#about').innerHTML = /* HTML */ `<div class="intro-copy">
      <p class="eyebrow">Control · Optimization · Robotics</p>
      <h1 id="intro-title">Hi, I'm <span class="name">${scholarLink(profile.name + '.')}</span></h1>
      <p class="lead">${intro}</p>
      <p>${escape(profile.research)}</p>
      <p>${escape(profile.practice)}</p>
      <div class="interests">
        <h2>Research interests</h2>
        <ul class="interest-list">
          ${profile.interests.map((x) => /* HTML */ `<li>${escape(x)}</li>`).join('')}
        </ul>
      </div>
      <div class="intro-links">
        ${Object.entries(profile.links)
          .map(([label, url]) => link(label, url, label === 'Email'))
          .join('')}
      </div>
    </div>
    <div class="intro-visual">
      <div class="profile-card">
        <img
          class="portrait"
          src="${safeUrl(profile.portrait.src)}"
          alt="${escape(profile.portrait.alt)}"
          width="340"
          height="340"
        />
        <div>
          <p class="portrait-name">${scholarLink(profile.fullName)}</p>
          <p class="portrait-role">${escape(profile.role)}</p>
          <p class="portrait-affiliation">${escape(profile.affiliation)}</p>
        </div>
      </div>
    </div>
    <figure class="intro-cover">
      <img
        class="hero-image"
        src="${safeUrl(profile.hero.src)}"
        alt="${escape(profile.hero.alt)}"
        width="1587"
        height="868"
        fetchpriority="high"
      />
    </figure>`;

  // Publications and projects share the same image/video gallery markup.
  function mediaContent(mediaItem, item) {
    if (mediaItem.type === 'video') {
      const tracks = (mediaItem.captions || [])
        .map(
          (track) =>
            /* HTML */ `<track
              kind="captions"
              src="${safeUrl(track.src)}"
              srclang="${escape(track.lang || 'en')}"
              label="${escape(track.label || 'English')}"
              ${track.default ? ' default' : ''}
            />`
        )
        .join('');
      return /* HTML */ `<div class="demo-frame">
        <video
          id="video-${escape(item.id)}"
          ${mediaItem.loop ? 'muted loop data-loop' : 'controls'}
          playsinline
          preload="none"
          data-src="${safeUrl(mediaItem.src)}"
          ${mediaItem.poster ? ` poster="${safeUrl(mediaItem.poster)}"` : ''}
          aria-label="${escape(mediaItem.alt || item.title)}"
        >
          ${tracks}<a href="${safeUrl(mediaItem.src)}">Download video</a></video
        >${mediaItem.loop
          ? /* HTML */ `<button
              class="demo-control"
              aria-controls="video-${escape(item.id)}"
              aria-label="Play demo: ${escape(mediaItem.alt || item.title)}"
            >
              Play demo
            </button>`
          : ''}
      </div>`;
    }
    const img = /* HTML */ `<img
      src="${safeUrl(mediaItem.src)}"
      alt="${escape(mediaItem.alt || item.title)}"
      loading="lazy"
      decoding="async"
      ${mediaItem.width && mediaItem.height
        ? ` width="${Number(mediaItem.width)}" height="${Number(mediaItem.height)}"`
        : ''}
    />`;
    const destination = item.links?.Project || item.links?.Paper;
    return destination
      ? /* HTML */ `<a
          href="${safeUrl(destination)}"
          ${external(destination)}
          aria-label="View ${escape(item.title)}"
          >${img}</a
        >`
      : img;
  }
  function media(item) {
    const mediaItem = item.demos?.[0] || item.media;
    if (!mediaItem) return '';
    return /* HTML */ `<figure class="paper-media" data-media="${escape(item.id)}">
      <div class="media-display">${mediaContent(mediaItem, item)}</div>
      <figcaption>
        <p class="demo-caption" ${mediaItem.caption ? '' : ' hidden'} aria-live="polite">
          ${escape(mediaItem.caption || '')}
        </p>
        ${item.demos?.length > 1
          ? /* HTML */ `<div
              class="demo-selectors"
              role="group"
              aria-label="${escape(item.title)} demonstrations"
            >
              ${item.demos
                .map(
                  (demo, i) =>
                    /* HTML */ `<button
                      class="demo-selector"
                      data-demo="${i}"
                      aria-pressed="${i === 0}"
                    >
                      ${escape(demo.label)}
                    </button>`
                )
                .join('')}
            </div>`
          : ''}
      </figcaption>
    </figure>`;
  }

  // Load only visible media; respect reduced motion, data saving, and manual pauses.
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  const autoplayAllowed = () => !reducedMotion.matches && !connection?.saveData;
  function loadVideo(video) {
    if (!video.hasAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    }
  }
  function playVideo(video) {
    loadVideo(video);
    video.play().catch(() => {}); // Autoplay may be disabled by the browser; Play remains available.
  }
  function updatePlayback(video) {
    if (document.hidden || video.dataset.visible !== 'true') video.pause();
    else if (
      video.hasAttribute('data-loop') &&
      autoplayAllowed() &&
      video.dataset.userPaused !== 'true'
    )
      playVideo(video);
  }
  const videoObserver =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              target.dataset.visible = String(isIntersecting);
              if (isIntersecting && !target.hasAttribute('data-loop')) loadVideo(target);
              updatePlayback(target);
            });
          },
          { threshold: 0.25 }
        )
      : null;
  function setupVideos(root) {
    root.querySelectorAll('video').forEach((video) => {
      const button = video.parentElement.querySelector('.demo-control');
      const updateButton = () => {
        if (!button) return;
        button.textContent = video.paused ? 'Play demo' : 'Pause';
        button.setAttribute(
          'aria-label',
          `${video.paused ? 'Play' : 'Pause'} demo: ${video.getAttribute('aria-label')}`
        );
      };
      video.addEventListener('play', updateButton);
      video.addEventListener('pause', updateButton);
      video.addEventListener('error', () => {
        if (button) button.hidden = true;
        const caption = video.closest('figure').querySelector('.demo-caption');
        caption.hidden = false;
        caption.innerHTML = `This demo could not be played. <a href="${safeUrl(video.dataset.src)}">Download the video</a>.`;
      });
      if (videoObserver) videoObserver.observe(video);
      else if (!button) loadVideo(video);
    });
  }
  function releaseVideos(root) {
    root.querySelectorAll('video').forEach((video) => {
      videoObserver?.unobserve(video);
      video.pause();
      video.removeAttribute('src');
      video.load();
    });
  }
  document.addEventListener('visibilitychange', () =>
    document.querySelectorAll('video').forEach(updatePlayback)
  );
  function preferencesChanged() {
    document.querySelectorAll('video').forEach((video) => {
      if (!autoplayAllowed()) video.pause();
      else updatePlayback(video);
    });
  }
  reducedMotion.addEventListener('change', preferencesChanged);
  connection?.addEventListener('change', preferencesChanged);
  document.addEventListener('click', (event) => {
    const control = event.target.closest('.demo-control');
    if (control) {
      const video = control.parentElement.querySelector('video');
      video.dataset.userPaused = String(!video.paused);
      if (video.paused) playVideo(video);
      else video.pause();
    }
    const selector = event.target.closest('[data-demo]');
    if (!selector) return;
    const figure = selector.closest('[data-media]');
    const item = [...data.publications, ...data.projects].find(
      (entry) => entry.id === figure.dataset.media
    );
    const selected = item.demos[Number(selector.dataset.demo)];
    const display = figure.querySelector('.media-display');
    releaseVideos(display);
    display.innerHTML = mediaContent(selected, item);
    const caption = figure.querySelector('.demo-caption');
    caption.textContent = selected.caption || '';
    caption.hidden = !selected.caption;
    figure
      .querySelectorAll('[data-demo]')
      .forEach((button) => button.setAttribute('aria-pressed', String(button === selector)));
    setupVideos(display);
  });
  // Publication rendering, local search, and topic filtering.
  function resourceLinks(item) {
    return /* HTML */ `<div class="paper-links">
      ${Object.entries(item.links || {})
        .map(([label, url]) => link(label, url, label === 'Paper'))
        .join('')}${item.bibtex
        ? /* HTML */ `<button
            class="button"
            data-cite="${escape(item.id)}"
            aria-label="Cite ${escape(item.title)}"
          >
            Cite
          </button>`
        : ''}
    </div>`;
  }
  function spotlight(item, index) {
    const venue = item.venue || item.venueShort;
    const metadata = [item.year, item.status].filter(Boolean).join(' · ');
    const kicker = venue
      ? /* HTML */ `<strong class="publication-venue">${escape(venue)}</strong
          ><span class="publication-meta">${escape(metadata)}</span>`
      : escape(item.category || 'Research project');
    return /* HTML */ `<article
      class="spotlight${index % 2 ? ' reverse' : ''}"
      id="${escape(item.id)}"
    >
      ${media(item)}
      <div class="paper-copy">
        <p class="paper-kicker">${kicker}</p>
        <h3>${escape(item.title)}</h3>
        ${item.authors
          ? /* HTML */ `<p class="authors">${authors(item.authors)}</p>`
          : ''}${item.details
          ? /* HTML */ `<p class="compact-venue">${escape(item.details)}</p>`
          : ''}${item.summary
          ? /* HTML */ `<p class="paper-summary">${escape(item.summary)}</p>`
          : ''}${item.note
          ? /* HTML */ `<p class="project-status">${escape(item.note)}</p>`
          : ''}${resourceLinks(item)}
      </div>
    </article>`;
  }
  function renderPublications() {
    const query = $('#paper-search').value.toLowerCase().trim();
    const topic = $('#topic-filter').value;
    const matches = data.publications.filter(
      (item) =>
        (topic === 'all' || item.topics?.includes(topic)) &&
        `${item.title} ${(item.authors || []).join(' ')} ${item.summary || ''} ${item.year} ${item.venue} ${(item.topics || []).join(' ')}`
          .toLowerCase()
          .includes(query)
    );
    releaseVideos($('#featured-publications'));
    $('#featured-publications').innerHTML = matches
      .filter((item) => item.featured)
      .map(spotlight)
      .join('');
    setupVideos($('#featured-publications'));
    const earlier = matches.filter((item) => !item.featured);
    $('#earlier-publications').hidden = !earlier.length;
    $('#earlier-publications').innerHTML = earlier.length
      ? /* HTML */ `<h3>More publications</h3>
          ${earlier
            .map(
              (item) =>
                /* HTML */ `<article class="compact-paper" id="${escape(item.id)}">
                  <p class="compact-year">${item.year}</p>
                  <div>
                    <h4>${escape(item.title)}</h4>
                    <p class="authors">${authors(item.authors)}</p>
                    <p class="compact-venue">
                      <strong class="publication-venue">${escape(item.venue)}</strong>${item.details
                        ? ` · ${escape(item.details)}`
                        : ''}${item.status ? ` · ${escape(item.status)}` : ''}
                    </p>
                  </div>
                  ${resourceLinks(item)}
                </article>`
            )
            .join('')}`
      : '';
    $('#no-results').hidden = !!matches.length;
    $('#result-count').textContent =
      `${matches.length} of ${data.publications.length} publications`;
  }
  renderPublications();
  $('#paper-search').addEventListener('input', renderPublications);
  $('#topic-filter').addEventListener('change', renderPublications);
  if (data.projects?.length) {
    $('#additional-projects').hidden = false;
    $('#project-list').innerHTML = data.projects.map(spotlight).join('');
    setupVideos($('#project-list'));
  }
  // CV-backed sections: experience, education, expertise, software, and service.
  $('#experience-list').innerHTML = data.experience
    .map(
      (item) =>
        /* HTML */ `<article class="timeline-item">
          <p class="date">${escape(item.dates)}</p>
          <h3>${escape(item.role)}</h3>
          <p class="organization">${escape(item.organization)}</p>
          ${item.group
            ? /* HTML */ `<p class="group">${escape(item.group)}</p>`
            : ''}${item.location
            ? /* HTML */ `<p class="location">${escape(item.location)}</p>`
            : ''}
          <p class="experience-description">${escape(item.description)}</p>
        </article>`
    )
    .join('');
  $('#education-list').innerHTML = data.education
    .map(
      (item) =>
        /* HTML */ `<article class="education-item">
          <p class="date">${escape(item.dates)}</p>
          <h3>${escape(item.degree)}</h3>
          <p class="institution">${escape(item.institution)}</p>
          ${item.location
            ? /* HTML */ `<p class="location">${escape(item.location)}</p>`
            : ''}${item.note ? /* HTML */ `<p class="note">${linkPeople(item.note)}</p>` : ''}
        </article>`
    )
    .join('');
  $('#education-cv').innerHTML = link('CV', profile.links.CV, true);
  $('#expertise-list').innerHTML = data.expertise
    .map(
      (item) =>
        /* HTML */ `<div class="expertise">
          <h3>${escape(item.title)}</h3>
          <ul>
            ${item.items.map((text) => /* HTML */ `<li>${escape(text)}</li>`).join('')}
          </ul>
        </div>`
    )
    .join('');
  $('#tools-list').innerHTML = data.tools
    .map(
      (item) =>
        /* HTML */ `<div>
          <dt>${escape(item.category)}</dt>
          <dd>${item.items.map(escape).join(' · ')}</dd>
        </div>`
    )
    .join('');
  $('#service').textContent = data.service;
  // Contact details and footer.
  $('#contact').innerHTML = /* HTML */ `<p class="eyebrow">Contact</p>
    <h2 id="contact-title">Let's get in touch.</h2>
    <p>For research, collaborations, or questions about my work,<br />you can reach me by email.</p>
    <a class="contact-email" href="mailto:${escape(profile.email)}">${escape(profile.email)}</a>
    <p>${escape(profile.location)}</p>
    <div class="contact-links">
      ${Object.entries(profile.links)
        .filter(([label]) => label !== 'Email')
        .map(([label, url]) => link(label, url))
        .join('')}
    </div>`;
  $('#year').textContent = new Date().getFullYear();
  $('#footer-name').innerHTML = scholarLink(profile.name);

  // Mobile navigation.
  const menu = $('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    $('#navigation').classList.toggle('open', open);
  });
  $('#navigation').addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menu.setAttribute('aria-expanded', 'false');
      $('#navigation').classList.remove('open');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      $('#navigation').classList.remove('open');
      menu.focus();
    }
  });
  // Citation dialog: keep BibTeX as plain text for accurate copying and downloads.
  const dialog = $('#citation-dialog');
  let selectedPaper;
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-cite]');
    if (!button) return;
    selectedPaper = [...data.publications, ...(data.projects || [])].find(
      (item) => item.id === button.dataset.cite
    );
    $('#citation-paper').textContent = selectedPaper.title;
    $('#bibtex').textContent = selectedPaper.bibtex;
    $('#copy-status').textContent = '';
    dialog.showModal();
  });
  $('#close-citation').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        dialog.close();
    }
  });
  $('#copy-citation').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(selectedPaper.bibtex);
      $('#copy-status').textContent = 'Copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents($('#bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      $('#copy-status').textContent = 'Copy the highlighted citation, or download the .bib file.';
    }
  });
  $('#download-citation').addEventListener('click', () => {
    const url = URL.createObjectURL(
      new Blob([selectedPaper.bibtex + '\n'], { type: 'application/x-bibtex' })
    );
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${selectedPaper.id}.bib`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
