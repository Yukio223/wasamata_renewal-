// ========================================
// WASAMATA HUTTE — Script
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------
  // ハンバーガーメニュー
  // ----------------------------------------
  const hamburger = document.querySelector('.hamburger');
  const nav       = document.getElementById('nav');
  const overlay   = document.getElementById('navOverlay');

  function openNav() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  });

  // ナビリンククリックで閉じる
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // オーバーレイクリックで閉じる
  overlay.addEventListener('click', closeNav);

  // Escキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (nav.classList.contains('open')) closeNav();
      if (lightbox.classList.contains('is-open')) closeLightbox();
    }
  });

  // ----------------------------------------
  // ヒーロー スライドショー
  // ----------------------------------------
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ----------------------------------------
  // スクロールフェードイン（IntersectionObserver）
  // ----------------------------------------
  const fadeTargets = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeTargets.forEach(el => fadeObserver.observe(el));

  // ----------------------------------------
  // ギャラリー ライトボックス
  // ----------------------------------------
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
  }

  galleryItems.forEach((img, i) => {
    img.parentElement.addEventListener('click', () => openLightbox(i));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // sidebar色の自動切り替え（bg-alt セクション内は黒）
  const hamburgerSpans = document.querySelectorAll('.hamburger span');
  const sidebarIcon = document.querySelector('.sidebar-icon');
  const body = document.body;

  const bgAltObserver = new IntersectionObserver((entries) => {
    let hasBgAlt = false;
    entries.forEach(entry => {
      if (entry.isIntersecting) hasBgAlt = true;
    });

    if (hasBgAlt) {
      body.classList.add('in-bg-alt');
    } else {
      body.classList.remove('in-bg-alt');
    }
  }, { threshold: 0 });

  document.querySelectorAll('.bg-alt').forEach(el => bgAltObserver.observe(el));

  // ========== Accordion ==========
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const content = header.nextElementSibling;

      accordionHeaders.forEach(h => {
        h.setAttribute('aria-expanded', 'false');
        h.nextElementSibling.setAttribute('aria-hidden', 'true');
      });

      if (!isExpanded) {
        header.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });
  });

});
