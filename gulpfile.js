const gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gulpSequence = require('gulp-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    cssmin = require('gulp-cssmin'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    pipe = require('multipipe'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    watch = require('gulp-watch');


const srcPath = {
    'src': './src',
    'html': './src/**/*.html',
    'img': './src/**/*.+(jpg|png|svg|gif)',
    'css': ['./src/!(css|js)*/**/*.css'],
    'js': './src/!(js)*/**/*.js',
    'font': './src/font/**/*.*',
    'task': './src/task/**/*.pdf'
};

const distPath = {
    'dist': './dist/',
    'html': './dist/',
    'img': './dist/',
    'css': './dist/css/',
    'js': './dist/',
    'font': './dist/font/',
    'task': './dist/task/'
};


gulp.task('clean', () => {
    return del([distPath.dist]);
});

gulp.task('html', () => {
    return gulp.src(srcPath.html)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css',
            pipe(
                autoprefixer({
                    browsers: ['last 2 versions']
                }),
                cssmin()
            )
        ))
        .pipe(gulp.dest(distPath.html))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    return gulp.src(srcPath.css)
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cssmin())
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

gulp.task('task', () => {
    return gulp.src(srcPath.task)
        .pipe(gulp.dest(distPath.task));
})

gulp.task('connect', () => {
    return connect.server({
        root: distPath.dist,
        port: 4000,
        livereload: true
    });
});

gulp.task('build', gulpSequence('clean', [
    'html',
    'img',
    'js',
    'css',
    'font',
    'task'
]));

gulp.task('watch', () => {
    watch(srcPath.css, () => gulp.start('css'));
    watch(srcPath.html, () => gulp.start('html'));
    watch(srcPath.js, () => gulp.start('js'));
    watch(srcPath.img, () => gulp.start('img'));
    watch(srcPath.font, () => gulp.start('font'));
    watch(srcPath.task, () => gulp.start('task'));
});

gulp.task('default', gulpSequence('build', ['watch', 'connect']));