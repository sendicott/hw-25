'use strict'

let gulp = require('gulp');
let browserify = require('gulp-browserify');
let sass = require('gulp-sass');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(browserify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);
    gulp.watch('*.js', ['js']);
    gulp.watch('style.scss', ['css']);
});