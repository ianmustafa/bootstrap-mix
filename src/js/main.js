try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery').default;

  // Halaman basic biasanya hanya akan butuh ini
  require('bootstrap/js/dist/button').default;
  require('bootstrap/js/dist/collapse').default;
  require('bootstrap/js/dist/dropdown').default;
  require('bootstrap/js/dist/modal').default;
  require('bootstrap/js/dist/tab').default;
} catch (e) { }
