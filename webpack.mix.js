const { mix } = require('laravel-mix');

//== Konfigurasi
mix.options({
  processCssUrls: true,
});

//== Sass
mix.sass('src/scss/style.scss', 'public/css');

//== JavaScript, dengan vendor extraction
mix.js('src/js/main.js', 'public/js')
   .extract(['jquery', 'popper.js', 'bootstrap']);

//== SourceMaps, hanya di dev
if (!mix.inProduction()) {
  mix.sourceMaps();
}

//== BrowserSync
mix.browserSync({
  injectChanges: true,
  files: ['**/*.html', '**/*.js', '**/*.css'],
  logSnippet: true,
  proxy: false,
  server: {
    baseDir: 'public',
  }
});
