'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
    return gulp.src('./css/*.scss')
    .pipe(sass().once('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        './img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.setMaxListeners('sass:watch');
});

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('copyfonts', function() {
    gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('./distp/fonts'));
});

gulp.task('imagemin', function() {
    return gulp.src('img/*.{png,jpg,gif}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('distp/img'));
});



gulp.task('usemin', function() {
    return gulp.src('./*.html')
    .pipe(flatmap(function(stream, file) {
        return stream
        .pipe(usemin({
            css: [rev()],
            html: [ function() { return htmlmin({ collapseWhitespace: true})}],
            js: [ uglify(), rev()],
            inlinejs: [ uglify()],
            inlinecss: [cleanCss(), 'concat']

        }))
    }))
    .pipe(gulp.dest('distp/'))
});

gulp.task('build', ['clean'], function() {
    gulp.setMaxListeners('copyfonts', 'imagemin', 'usemin');
});