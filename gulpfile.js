const gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gulpSequence = require('gulp-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    pipe = require('multipipe'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    watch = require('gulp-watch'),
    lazypipe = require('lazypipe'),
    jshint = require('gulp-jshint'),
    csslint = require('gulp-csslint'),
    stylish = require('jshint-stylish'),
    jshintReporter = require('gulp-jshint-html-reporter'),
    csslintReporter = require('gulp-csslint-report');



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

const autoprefixerSettings = {
        browsers: ['last 2 versions', 'ie 9', 'ie 10']
    },
    cleanCSSSettings = {
        compatibility: '*'
    };


gulp.task('clean', () => {
    return del([distPath.dist]);
});

gulp.task('js:hint', () => {
    return gulp.src('./src/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter(jshintReporter, {
            filename: 'jshint-output.html'
        }))
    //.pipe(jshint.reporter('fail'));
});

gulp.task('css:lint', () => {
    return gulp.src('./src/**/*.css')
        .pipe(csslint('.csslintrc'))
        .pipe(csslintReporter({
            filename: 'index.html',
            'directory': './csslint-reports/'
        }));
    //.pipe(csslint.formatter('fail')); // Fail on error (or csslint.failFormatter())
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
                autoprefixer(autoprefixerSettings),
                cleanCSS(cleanCSSSettings)
            )
        ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPath.html))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    return gulp.src(srcPath.css)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(autoprefixerSettings))
        .pipe(cleanCSS(cleanCSSSettings))
        .pipe(sourcemaps.write())
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