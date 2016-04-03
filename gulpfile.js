var del = require('del');
var gulp = require('gulp');
var preprocess = require('gulp-preprocess');

var paths = {
  css: ['src/**/*.css'],
  scripts: ['src/**/*.js'],
  html: ['src/**/*.html'],
  build: 'build'
};

gulp.task('clean', function() {
  return del([paths.build]);
});

gulp.task('copy-node-modules', function() {
  gulp.src('node_modules/requirejs/require.js')
    .pipe(gulp.dest(paths.build));
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
