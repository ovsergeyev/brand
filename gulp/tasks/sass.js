module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/scss/main.scss')
        //return $.gulp.src('src/static/sass/main.sass')
            .pipe($.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 1 versions'],
                cascade: false
            }))
            .pipe($.gp.cssbeautify())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
