module.exports = function (gulp, plugins, config) {
  gulp.task('default', function() {
    gulp.start('stylus')
    gulp.start('browser-sync')
  })
}
