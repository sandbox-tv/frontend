var del = require('del');
var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var merge = require('merge-stream');

var paths = {
  css: ['src/**/*.css'],
  scripts: ['src/**/*.js'],
  html: ['src/**/*.html'],
  build: 'build',
  angular_ui_router_hack: 'build/node_modules/angular-ui-router/release',
  angular_cookies_hack: 'build/node_modules/angular-cookies'
};

gulp.task('clean', function() {
  return del([paths.build]);
});

gulp.task('copy-node-modules', function() {
  // hack: remove once angular providers are added
  var angular_ui_router = gulp.src('node_modules/angular-ui-router/release/angular-ui-router.min.js')
    .pipe(gulp.dest(paths.angular_ui_router_hack));

  var angular_cookies = gulp.src('node_modules/angular-cookies/angular-cookies.min.js')
    .pipe(gulp.dest(paths.angular_cookies_hack));

  return merge(angular_ui_router, angular_cookies);
});

gulp.task('styles', function() {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.build));
});

gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.build));
});

gulp.task('scripts', ['copy-node-modules'], function() {
  return gulp.src(paths.scripts)
    .pipe(preprocess({
      EXTERNAL_IP: process.env.EXTERNAL_IP
    }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('default', ['scripts', 'styles', 'html']);
