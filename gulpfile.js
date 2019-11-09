'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const connect = require('gulp-connect');


const serverConnect = (cb) => {
  connect.server({
    root: 'src',
    livereload: true
  });
  cb();
}

const sassDev = (cb) => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(connect.reload());
  cb();
}

function watchFiles() {
  gulp.watch('src/scss/*.scss', sassDev);
}

exports.default = gulp.parallel(watchFiles, serverConnect);
