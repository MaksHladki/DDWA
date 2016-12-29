const gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    watch = require('gulp-watch'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    connect = require('gulp-connect');

const srcPath = {
    'src': './src',
    'html': './src/**/*.html',
    'img': './src/**/*.+(jpg|png|svg|gif)',
    'css': './src/**/*.css',
    'js': './src/**/*.js',
    'font': './src/font/**/*.*'
};

const distPath = {
    'dist': './dist/',
    'html': './dist/',
    'img': './dist/',
    'css': './dist/',
    'js': './dist/',
    'font': './dist/font/',
};

gulp.task('clean', () => {
    return del([distPath.dist]);
});

gulp.task('html', () => {
    return gulp.src(srcPath.html)
        .pipe(gulp.dest(distPath.html))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    return gulp.src(srcPath.css)
        .pipe(gulp.dest(distPath.css));
});

gulp.task('js', () => {
    return gulp.src(srcPath.js)
        .pipe(gulp.dest(distPath.js));
});

gulp.task('img', () => {
    return gulp.src(srcPath.img)
        .pipe(imagemin())
        .pipe(gulp.dest(distPath.img));
});

gulp.task('font', () => {
    return gulp.src(srcPath.font)
        .pipe(gulp.dest(distPath.font));
});

gulp.task('connect', () => {
    return connect.server({
        root: distPath.dist,
        port: 4000,
        livereload: true
    });
});

gulp.task('build', gulpSequence('clean', ['html', 'img', 'js', 'css', 'font']));

gulp.task('watch', () => {
    watch(srcPath.css, () => gulp.start('css'));
    watch(srcPath.html, () => gulp.start('html'));
    watch(srcPath.js, () => gulp.start('js'));
    watch(srcPath.img, () => gulp.start('img'));
    watch(srcPath.font, () => gulp.start('font'));
});

gulp.task('default', ['watch', 'build', 'connect']);