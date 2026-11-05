document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.join-button');
  if (!button) return;

  button.addEventListener('click', () => {
    // Tracks a click on the Telegram join link as a Subscribe event.
    // This records the outbound join-button click, not a confirmed Telegram membership.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Subscribe');
    }
  });

  button.addEventListener('pointerdown', () => button.classList.add('pressed'));
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((eventName) => {
    button.addEventListener(eventName, () => button.classList.remove('pressed'));
  });
});
