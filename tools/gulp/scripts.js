var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var paths = require('../config').paths;


var tsProject = typescript.createProject('tsconfig.json', {
  rootDir: paths.app
});
gulp.task('scripts', function() {
  var tsResult = tsProject.src() // instead of gulp.src(...)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.builds.dev));
});

