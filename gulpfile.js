const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');


const browserRefresh = () => {
  browserSync.init({
    open: true,
    proxy: "http://localhost/",
    baseDir: "./build",
    notify: false,
    https: true
  });
};


// const concatPHP = () => {
//   return gulp.src(['./src/components/php/header.php','./src/index.php','./src/components/php/footer.php'])
//     .pipe(concat('index.php'))
//     .pipe(gulp.dest('./public/'))
// }

// const movePages = () => {
//   return gulp.src('./src/pages/*.js')
//     .pipe(gulp.dest('./public/js/'))
// }

const sassCompile = () => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
}

function watchFiles() {
  gulp.watch('src/scss/*.scss', sassCompile);
  // gulp.watch('src/pages/index.php', concatPHP);
  // gulp.watch('src/components/php/*.php', concatPHP);
  // gulp.watch('src/*.php', concatPHP);
  // gulp.watch('src/pages/*.js', movePages);
}

exports.default = gulp.parallel(watchFiles, browserRefresh);


// const sassBuild = () => {
//   return gulp.src('./src/scss/styles.scss')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('./build/css'));
// }

// const htmlMinify = () => {
//   return gulp.src('public/*.php')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('build'));
// }

// exports.build = gulp.parallel(sassBuild, htmlMinify);
