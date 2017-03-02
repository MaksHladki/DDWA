const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babelify = require('babelify'),
    rename = require("gulp-rename");

gulp.task('script', function () {
    gulp.src('./js/main.js')
        .pipe(browserify({
            standalone: 'MyModule',
            debug: false,
            transform: [babelify.configure({
                presets: ['es2015']
            })]
        }))
        .pipe(rename('index.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', () => {
    gulp.watch('./js/**/*.js', ['script']);
});

gulp.task('default', ['script', 'watch']);