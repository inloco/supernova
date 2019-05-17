var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  rename = require('gulp-rename'),
  tailwindcss = require('tailwindcss'),
  concat = require('gulp-concat')

module.exports = function() {
  console.info('Building Tailwind')

  gulp
    .src('tailwind/main.css')
    .pipe(postcss([tailwindcss('tailwind/config.js'), require('autoprefixer')]))
    .pipe(rename('tailwind.css'))
    .pipe(gulp.dest('dist'))

  return gulp
    .src(['dist/semantic.css', 'dist/tailwind.css'])
    .pipe(concat('supernova.css'))
    .pipe(gulp.dest('dist'))
}
