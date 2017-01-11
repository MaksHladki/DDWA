const gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gulpSequence = require('gulp-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    cleanCSS = require('gulp-clean-css'),
    csslint = require('gulp-csslint'),
    csslintReporter = require('gulp-csslint-report'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    pipe = require('multipipe'),
    lazypipe = require('lazypipe'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    jshintReporter = require('gulp-jshint-html-reporter'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    watch = require('gulp-watch');

const srcPath = {
    'src': './src',
    'html': './src/**/*.html',
    'img': './src/**/*.+(jpg|png|svg|gif)',
    'css': ['./src/!(css|js)*/**/*.css'],
    'cssLint': './src/**/*.css',
    'js': './src/!(js)*/**/*.js',
    'jsHint': './src/**/*.js',
    'font': './src/font/**/*.*',
    'task': './src/task/**/*.pdf',
    'analysis': './src/code-analysis/',
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
        browsers: ['last 2 versions', 'ie 9', 'ie 10']
    },
    cleanCSS: {
        compatibility: '*'
    },
    csslint: {
        filename: 'index.html',
        directory: srcPath.analysis + '/css/'
    },
    jshint: {
        filename: srcPath.analysis + '/js/index.html',
        createMissingFolders: true
    }
};

gulp.task('clean', () => {
    return del([srcPath.analysis, distPath.dist]);
});


gulp.task('html', () => {
    return gulp.src(srcPath.html)
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, {
            loadMaps: true
        })))
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
        .pipe(gulp.dest(distPath.html))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    return gulp.src(srcPath.css)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(pluginSettings.autoprefixer))
        .pipe(cleanCSS(pluginSettings.cleanCSS))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPath.css));
});

gulp.task('css:lint', () => {
    return gulp.src(srcPath.cssLint)
        .pipe(csslint('.csslintrc'))
        .pipe(csslintReporter(pluginSettings.csslint));
});


gulp.task('js', () => {
    return gulp.src(srcPath.js)
        .pipe(gulp.dest(distPath.js));
});

gulp.task('js:hint', () => {
    return gulp.src(srcPath.jsHint)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(jshintReporter, pluginSettings.jshint));
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

gulp.task('build', gulpSequence('clean', ['js:hint', 'css:lint'], [
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