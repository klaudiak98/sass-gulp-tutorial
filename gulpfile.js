const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('src/my_sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['src/*.html']}))
        .pipe(dest('src/css'))
}

function watchTask() {
    watch(['src/my_sass/**/*.scss', 'src/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)