var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var conf = require('../config');

var injectCfg = {
  files: gulp.src([path.join(conf.paths.app, '/src/**/*.scss')], {read: false}),
  options: {
    transform: function (filePath) {
      filePath = filePath.replace(conf.paths.app + '/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// end-injector',
    addRootSlash: false
  }
};


gulp.task('styles', function () {
  return gulp.src(path.join(conf.paths.app, '/boot.scss'))
    .pipe(inject(injectCfg.files, injectCfg.options))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.builds.dev));
});
