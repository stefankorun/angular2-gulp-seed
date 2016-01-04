var path = require('path');

exports.paths = {
  app: 'app',
  builds: {
    dev: '.builds/dev',
    dist: '.builds/dist',
    temp: '.builds/temp'
  }
};

exports.files = {
  ts: path.join(this.paths.app, '/**/*.ts'),
  js: path.join(this.paths.app, '/**/*.js'),
  scss: path.join(this.paths.app, '/**/*.scss'),
  html: path.join(this.paths.app, '/**/*.html')
};
