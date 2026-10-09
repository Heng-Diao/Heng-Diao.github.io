(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const screenshots = [
    ['Multi-Dimensional Analysis', './assets/images/mda-dimensions.webp', 'Multi-Dimensional Analysis interface'],
    ['Search for Co-occurring Tags', './assets/images/corpus-concordance.webp', 'Search interface for co-occurring tags'],
    ['Stance Annotation', './assets/images/stance-annotation.webp', 'Stance annotation interface'],
    ['Bilingual Translation Workspace', './assets/images/translation-workspace.webp', 'Bilingual translation workspace'],
    ['Model Training', './assets/images/model-training.webp', 'Model training interface'],
    ['Annotation Dashboard', './assets/images/annotation-dashboard.webp', 'Annotation dashboard interface'],
    ['Terminology Management', './assets/images/terminology-management.webp', 'Terminology management interface']
  ];

  const dialog = document.getElementById('lightbox');
  const dialogTitle = document.getElementById('lightboxTitle');
  const dialogImage = document.getElementById('lightboxImage');
  const counter = document.getElementById('lightboxCounter');
  let currentIndex = 0;
  let opener = null;

  function show(index) {
    currentIndex = (index + screenshots.length) % screenshots.length;
    const [title, src, alt] = screenshots[currentIndex];
    dialogTitle.textContent = title;
    dialogImage.src = src;
    dialogImage.alt = alt;
    counter.textContent = `${currentIndex + 1} of ${screenshots.length}`;
  }
  function open(index, source) {
    opener = source;
    show(index);
    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    dialog.querySelector('.lightbox-close').focus();
  }
  function close() {
    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (opener?.isConnected) opener.focus();
  }
  document.querySelectorAll('[data-gallery]').forEach(el => el.addEventListener('click', () => open(Number(el.dataset.gallery), el)));
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.getElementById('galleryPrevious').addEventListener('click', () => show(currentIndex - 1));
  document.getElementById('galleryNext').addEventListener('click', () => show(currentIndex + 1));
  document.addEventListener('keydown', event => {
    if (!dialog.classList.contains('open')) return;
    if (event.key === 'Escape') close();
    else if (event.key === 'ArrowRight') show(currentIndex + 1);
    else if (event.key === 'ArrowLeft') show(currentIndex - 1);
    else if (event.key === 'Tab') {
      const buttons = [...dialog.querySelectorAll('button')];
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
