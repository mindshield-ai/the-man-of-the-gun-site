document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.tmotg-archive-banner')) {
    return;
  }

  const banner = document.createElement('div');
  banner.className = 'tmotg-archive-banner';
  banner.innerHTML =
    'This is the TMOTG Archive (Story & Lore). Visit the main site \u2192 ' +
    '<a href="https://themanofthegun.com" target="_blank" rel="noopener">themanofthegun.com</a>';

  const container = document.querySelector('body');
  if (container) {
    container.insertBefore(banner, container.firstChild);
  }
});
