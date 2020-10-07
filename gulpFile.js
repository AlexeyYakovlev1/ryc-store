"use strict";

let gulp = require('gulp'),
    scss = require('gulp-sass'),
    fileInclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    webpack = require('webpack-stream'),
    jsonServer = require('gulp-json-srv').create();


gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(fileInclude())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('jsonServer', () => {
    return gulp.src('products.json')
        .pipe(jsonServer.pipe());
});

gulp.task('scss', () => {
    return gulp.src(['src/public/scss/*.scss', '!src/public/scss/_*.scss'])
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({
            cascade: true,
            overrideBrowserslist: ['last 5 versions']
        }))
        .pipe(gulp.dest('dist/public/css'))
        .pipe(browserSync.stream());
});

gulp.task('assets', () => {
    return gulp.src('src/assets/**/**/*')
        .pipe(gulp.dest('dist/assets'))
        .pipe(browserSync.stream());
});

gulp.task('compress', () => {
    return gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(browserSync.stream());
});

gulp.task("js", () => {
    return gulp.src("src/public/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'main.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest('dist/public/js'))
        .pipe(browserSync.stream());
});

gulp.task('build', gulp.parallel('html', 'scss', 'js', 'assets', 'compress', 'jsonServer'));

gulp.task("build-prod-js", () => {
    return gulp.src("src/public/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'main.js'
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', () => {
    const watch = (path, task) => gulp.watch(path, gulp.parallel(task));

    watch('src/public/scss/*.scss', 'scss');
    watch('src/*.html', 'html');
    watch('src/public/js/*.js', 'js');
    watch('src/assets/img/*', 'compress');
    watch('src/assets/**/**/*', 'assets');
    watch('products.json', 'jsonServer');
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'dist/',
        },
        port: 4000,
        notify: false
    })
});

gulp.task('default', gulp.parallel('watch', 'build', 'browser-sync'));
