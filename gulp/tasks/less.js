module.exports = function () {
    $.gulp.task('less', function () {
        return $.gulp.src('src/static/less/main.less')
            .pipe($.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.less({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 1 versions'],
                cascade: true
            }))
            .pipe($.gp.cssbeautify())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
