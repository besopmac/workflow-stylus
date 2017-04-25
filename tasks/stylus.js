module.exports = function (gulp, plugins, config) {
  const jeet = require('jeet'),
        rupture = require('rupture'),
        nib = require('nib')

  plugins.browserSync = require('browser-sync').create()

  gulp.task('stylus', function (){
    gulp.src(config.stylusSrcFolder + '/main.styl')
        .pipe(plugins.plumber())
        .pipe(plugins.stylus({
          use: [jeet(), nib(), rupture()],
          compress: true
        }))
        .pipe(gulp.dest(config.stylusSrcFolder))
        .pipe(plugins.rename('styles.css'))
        .pipe(gulp.dest(config.stylusDestFolder))
        .pipe(plugins.browserSync.reload({
          stream: true
        }))
  })
}
