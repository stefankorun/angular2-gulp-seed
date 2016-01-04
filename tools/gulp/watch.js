var gulp = require('gulp');
var path = require('path');
var bs = require('browser-sync');

var conf = require('../config');


gulp.task('watch', ['scripts', 'styles', 'copy'], function () {

  gulp.watch(conf.files.ts, ['scripts']).on('change', bs.reload);
  gulp.watch(conf.files.scss, ['styles']).on('change', bs.reload);

  // todo separate html and js in copy task
  gulp.watch(conf.files.html, ['copy']).on('change', bs.reload);

});
