const gulp = require('gulp');
const { watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const connect = require('gulp-connect');

function build(cb) {
    gulp.src('assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
    cb();
}

function dev(cb) {
    connect.server({
        livereload: true
    });

    watch('assets/sass/**/*.scss', build);
    cb();
}

exports.build = build;
exports.dev = dev;
