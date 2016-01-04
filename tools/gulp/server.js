var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = require('../config').paths;


gulp.task('serve', ['watch'], function () {
  browserSync.init({
    server: {
      baseDir: paths.builds.dev,
      routes: {
        "/jspm_packages": "jspm_packages",
        "/node_modules": "node_modules"
      }
    }
  });
});
