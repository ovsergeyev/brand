module.exports = function () {
    $.gulp.task('stylus', function () {
        return $.gulp.src('src/static/stylus/main.styl')
            .pipe($.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            // .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 1 versions'],
                cascade: false
            }))
            .pipe($.gp.cssbeautify())
            .pipe($.gulp.dest('build/css/'))
            //.on('end', browserSync.reload);
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
