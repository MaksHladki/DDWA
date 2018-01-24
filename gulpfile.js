//modules

const gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gulpSequence = require('gulp-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    lazypipe = require('lazypipe'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    pipe = require('multipipe'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    watch = require('gulp-watch');

//variables

const srcPath = {
    'src': './src',
    'html': ['./src/**/*.html'],
    'img': './src/**/*.+(jpg|png|svg)',
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

const pluginSettings = {
    autoprefixer: {
        browsers: ['last 2 versions', 'ie 11']
    },
    cleanCSS: {
        compatibility: '*'
    },
    imagemin: {
        optimizationLevel: 2
    }
};

//tasks

gulp.task('clean', () => {
    return del([distPath.dist]);
});

gulp.task('html', () => {
    return gulp.src(srcPath.html)
        .pipe(newer(distPath.html))
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init)))
        .pipe(gulpif('*.js', pipe(
            uglify()
        )))
        .pipe(gulpif('*.css',
            pipe(
                autoprefixer(pluginSettings.autoprefixer),
                cleanCSS(pluginSettings.cleanCSS)
            )
        ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPath.html));
});

gulp.task('css', () => {
    return gulp.src(srcPath.css)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(pluginSettings.autoprefixer))
        .pipe(cleanCSS(pluginSettings.cleanCSS))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPath.css));
});

gulp.task('js', () => {
    return gulp.src(srcPath.js)
        .pipe(gulp.dest(distPath.js));
});

gulp.task('img', () => {
    return gulp.src(srcPath.img)
        .pipe(newer(distPath.img))
        .pipe(imagemin(pluginSettings.imagemin))
        .pipe(gulp.dest(distPath.img));
});

gulp.task('font', () => {
    return gulp.src(srcPath.font)
        .pipe(gulp.dest(distPath.font));
});

gulp.task('task', () => {
    return gulp.src(srcPath.task)
        .pipe(gulp.dest(distPath.task));
});

gulp.task('serve', () => {
    browserSync.init({
        server: distPath.dist,
        port: 4000
    });

    browserSync.watch(distPath.dist).on('change', browserSync.reload);
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

gulp.task('default', gulpSequence('build', ['watch', 'serve']));