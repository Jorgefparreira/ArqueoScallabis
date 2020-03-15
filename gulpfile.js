'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const browserSync = require("browser-sync").create();

// INDEX PAGE

const concatHTML = () => {
  return gulp.src(['./src/components/html/header.html','./src/index.html','./src/components/html/footer.html'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./public/'))
}

const movePages = () => {
  return gulp.src('./src/pages/*.js')
    .pipe(gulp.dest('./public/js/'))
}

// cons = () => {
//   browserSync.init({
//     open: false,
//     proxy: "http://localhost/",
//     baseDir: "./public",
//     notify: false
//   });
// };

const sassDev = () => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    

}

function watchFiles() {
  gulp.watch('src/scss/*.scss', sassDev);
  gulp.watch('src/pages/index.html', concatHTML);
  gulp.watch('src/components/html/*.html', concatHTML);
  gulp.watch('src/*.html', concatHTML);
  gulp.watch('src/pages/*.js', movePages);
  // gulp.watch("src/**/*.*").on("change", browserSync.reload);
}

exports.default = gulp.parallel(watchFiles);


const sassBuild = () => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
}

const htmlMinify = () => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

exports.build = gulp.parallel(sassBuild, htmlMinify);
