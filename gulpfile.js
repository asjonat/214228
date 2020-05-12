const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");

function css() {
    return src("scss/*.scss")
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest("css"));
}

function watchFiles() {
    watch("./scss/**/*", css);
}
exports.css = css;
exports.watch = watch;
exports.default = parallel(css, watchFiles);