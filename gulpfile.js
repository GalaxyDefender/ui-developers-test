var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Start BrowserSync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('css', function() {
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream:true}));
});

gulp.task('jsMinify', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(reload({stream: true}));
});

// Reload all browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('public/*.html', ['bs-reload']);
    gulp.watch('src/sass/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['jsMinify']);
});