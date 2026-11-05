document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.join-button');
  if (!button) return;
  let navigating = false;
  button.addEventListener('click', (event) => {
    // Give Meta Pixel time to dispatch before leaving this page.
    // Subscribe is used here as a CLICK proxy, not verified Telegram membership.
    event.preventDefault();
    if (navigating) return;
    navigating = true;
    button.classList.add('pressed');
    button.setAttribute('aria-busy', 'true');
    try {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Subscribe', { content_name: 'Cricket Lover Telegram join button', subscription_status: 'click_only' });
        window.fbq('trackCustom', 'TelegramJoinClick', { channel: 'Cricket_Lover' });
      }
    } catch (error) { console.warn('Pixel tracking unavailable', error); }
    const url = button.href;
    window.setTimeout(() => { window.location.assign(url); }, 1200);
  });
  button.addEventListener('pointerdown', () => button.classList.add('pressed'));
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((name) => {
    button.addEventListener(name, () => { if (!navigating) button.classList.remove('pressed'); });
  });
});
