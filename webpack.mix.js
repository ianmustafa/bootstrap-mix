const { mix } = require('laravel-mix');

//== Konfigurasi
mix.options({
  processCssUrls: false,
});

//== Sass
mix.sass('src/scss/style.scss', 'public/css');

//== JavaScript, dengan vendor extraction
mix.js('src/js/main.js', 'public/js')
   .extract();

//== SourceMaps, hanya di dev
if (!mix.inProduction()) {
  mix.sourceMaps();
}

//== BrowserSync
mix.browserSync({
  files: ['**/*.html', '**/*.js', '**/*.css'],
  proxy: false,
  server: {
    baseDir: 'public',
  }
});
