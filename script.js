// Paranoid Droid Repair — mobile hamburger nav
// Collapses below 600px, slides in from the right, closes on outside click
// or when a nav link is clicked.

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.site-nav');
  var overlay = document.querySelector('.nav-overlay');

  if (!hamburger || !nav || !overlay) return;

  function openNav() {
    nav.classList.add('open');
    hamburger.classList.add('open');
    overlay.classList.add('visible');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', function () {
    if (nav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.addEventListener('click', closeNav);

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) closeNav();
  });
});

// Contact form — this is a portfolio demo with no mail backend, so instead
// of reloading the page, "sending" takes the visitor to a confirmation page.
// The first name is passed along in sessionStorage (stays in this browser
// tab only) so the confirmation can say "Thanks, Bex."
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.pd-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var first = (form.elements['name'].value || '').trim().split(/\s+/)[0];
      try { sessionStorage.setItem('pdThanksName', first); } catch (err) {}
      window.location.href = 'message-received.html';
    });
  }

  var thanks = document.getElementById('pd-thanks-name');
  if (thanks) {
    var name = null;
    try {
      name = sessionStorage.getItem('pdThanksName');
      sessionStorage.removeItem('pdThanksName');
    } catch (err) {}
    if (name) thanks.textContent = ', ' + name;
  }
});
