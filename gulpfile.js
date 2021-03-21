const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();
sass.compiler = require('node-sass');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const babel = require("gulp-babel");


const browserRefresh = () => {
  browserSync.init({
    open: true,
    proxy: "http://localhost/",
    baseDir: "./build",
    notify: false,
    https: true
  });
};

const jsBabel = () => {
  return gulp
    .src("./src/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(gulp.dest("./build/js"));
};

const movePHP = () => {
  return gulp
    .src("./src/**/*.php", { base: "src/" })
    .pipe(gulp.dest("./build/"));
};

const moveJSON = () => {
  return gulp
    .src("./src/**/*.json", { base: "src/" })
    .pipe(gulp.dest("./build/"));
};

const moveHTML = () => {
  return gulp
    .src("./src/**/*.html", { base: "src/" })
    .pipe(gulp.dest("./build/"));
};

const moveJPG = () => {
  return gulp
    .src("./src/**/*.jpg", { base: "src/" })
    .pipe(gulp.dest("./build/"));
};

const movePNG = () => {
  return gulp
    .src("./src/**/*.png", { base: "src/" })
    .pipe(gulp.dest("./build/"));
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
  gulp.watch("src/**/*.php", movePHP);
  gulp.watch("src/**/*.json", moveJSON);
  gulp.watch("src/**/*.html", moveHTML);
  gulp.watch("src/**/*.jpg", moveJPG);
  gulp.watch("src/**/*.png", movePNG);
  gulp.watch("src/js/*.js", jsBabel);
  gulp.watch("src/**/*.*").on("change", browserSync.reload);
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
