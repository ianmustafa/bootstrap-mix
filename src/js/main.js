try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');

  // Halaman basic biasanya hanya akan butuh ini
  require('bootstrap/js/dist/button');
  require('bootstrap/js/dist/collapse');
  require('bootstrap/js/dist/dropdown');
  require('bootstrap/js/dist/modal');
  require('bootstrap/js/dist/tab');
} catch (e) { }
