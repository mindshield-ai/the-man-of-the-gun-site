document.addEventListener('DOMContentLoaded', () => {
  const banner = document.createElement('div');
  banner.className = 'tmotg-archive-banner';
  banner.innerHTML =
    'This is the TMOTG Archive (Story & Lore). Visit the main site \u2192 ' +
    '<a href="https://themanofofthegun.com" target="_blank" rel="noopener">https://themanofofthegun.com</a>';

  const container = document.querySelector('body');
  if (container) {
    container.insertBefore(banner, container.firstChild);
  }
});
