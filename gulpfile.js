'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed1'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});