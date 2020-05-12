const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

function css() {
    return src('scss/*.scss')
        .pipe(scss())
        .pipe(minifyCSS())
        .pipe(dest('css'));
}

function watchfiles() {
    watch('scss/**/*', css);
}

exports.css = css;
exports.watch = watch;
exports.default = parallel(css, watchfiles);