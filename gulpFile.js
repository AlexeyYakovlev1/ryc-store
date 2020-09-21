const gulp = require('gulp');
const pug = require('gulp-pug');
const fileInclude = require('gulp-file-include');

gulp.task('pug', () => {
    return gulp.src('src/views/**/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(fileInclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch('src/views/**/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch'));