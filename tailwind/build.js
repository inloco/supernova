var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  rename = require('gulp-rename'),
  tailwindcss = require('tailwindcss')

module.exports = function() {
  console.info('Building Tailwind')

  return gulp
    .src('tailwind/main.css')
    .pipe(postcss([tailwindcss('tailwind/config.js'), require('autoprefixer')]))
    .pipe(rename('tailwind.css'))
    .pipe(gulp.dest('dist'))
}