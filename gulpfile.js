'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');

// INDEX PAGE

const htmlConcatIndex = (cb) => {
  return gulp.src(['./src/components/html/header.html','./src/pages/index.html','./src/components/html/footer.html'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
  cb();
}

const jsConcatJs = (cb) => {
  return gulp.src(['./src/components/js/projectList.js','./src/components/js/indexFunctions.js'])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
  cb();
}

// CLIENTES PAGE

const htmlConcatClientes = (cb) => {
  return gulp.src(['./src/components/html/header.html','./src/pages/clientes.html','./src/components/html/footer.html'])
    .pipe(concat('clientes.html'))
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
  cb();
}

const serverConnect = (cb) => {
  connect.server({
    root: 'public',
    livereload: true
  });
  cb();
}

const sassDev = (cb) => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload());
  cb();
}



function watchFiles() {
  gulp.watch('src/scss/*.scss', sassDev);
  gulp.watch('src/components/js/*.js', jsConcatJs);
  gulp.watch('src/pages/index.html', htmlConcatIndex);
  gulp.watch('src/components/html/footer.html', htmlConcatIndex);
  gulp.watch('src/pages/clientes.html', htmlConcatClientes);
  gulp.watch('src/components/html/header.html', htmlConcatClientes);  
}

exports.default = gulp.parallel(watchFiles, serverConnect);



const sassBuild = (cb) => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
  cb();
}

const jsBuild = (cb) => {
  return gulp.src('./public/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))  
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
  cb();
}

const htmlMinify = (cb) => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
  cb();
}

exports.build = gulp.parallel(sassBuild, jsBuild, htmlMinify);
