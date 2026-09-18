/* Mobile navigation. The full menu remains visible when JavaScript is disabled. */
document.documentElement.classList.add('js-enabled');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-navigation');
if (menuButton && menu) {
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close menu' : 'Menu';
  }
  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
}

/* Keep local previews out of the real, shared visitor count. */
const visitorFrame = document.querySelector('#visitor-counter');
const visitorStatus = document.querySelector('#counter-status');
const host = window.location.hostname.toLowerCase();
const localHost = /^(localhost|0\.0\.0\.0|127(?:\.\d+){3}|10(?:\.\d+){3}|192\.168(?:\.\d+){2}|172\.(?:1[6-9]|2\d|3[01])(?:\.\d+){2}|\[?::1\]?)$/.test(host) || /\.(localhost|local|test)$/.test(host);
const publicSite = /^https?:$/.test(window.location.protocol) && host && !localHost;
if (visitorFrame && visitorStatus && publicSite) {
  visitorFrame.src = visitorFrame.dataset.src;
  visitorFrame.hidden = false;
  visitorStatus.hidden = true;
  window.addEventListener('message', (event) => {
    if (event.source !== visitorFrame.contentWindow || event.data?.type !== 'visitor-counter-size') return;
    const height = Number(event.data.height);
    if (Number.isFinite(height)) visitorFrame.style.height = `${Math.max(60, Math.min(300, height))}px`;
  });
} else if (visitorFrame && visitorStatus) {
  visitorStatus.textContent = 'Shown after publishing';
}
