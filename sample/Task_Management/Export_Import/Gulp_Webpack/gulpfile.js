const gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    webpack = require("webpack-stream");

gulp.task('script', () => {
    return gulp.src('./js/main.js')
        .pipe(webpack({
            module: {
                loaders: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                }]
            },
            output: {
                libraryTarget: "var",
                library: "MyModule"
            }
        }))
        .pipe(rename('index.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
    gulp.watch('./js/*.js', ['script']);
});

gulp.task('default', ['script', 'watch']);