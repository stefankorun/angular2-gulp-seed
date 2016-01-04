var gulp = require('gulp');

var conf = require('../config');


gulp.task('copy', function () {
  gulp.src(conf.files.html).pipe(gulp.dest(conf.paths.builds.dev));
  gulp.src(conf.files.js).pipe(gulp.dest(conf.paths.builds.dev));
});
