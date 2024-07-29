// analytics.js

const API_URL = 'https://vercel-analytics.vercel.app/api/track';

function trackEvent(event) {
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event,
      project: 'maneesha007-github-io',
    }),
  });
}

// Call trackEvent when the page loads
window.onload = () => {
  trackEvent('page_view');
};
