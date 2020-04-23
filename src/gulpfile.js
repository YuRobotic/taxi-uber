const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.tusk('styles', function() {
      return gulp.src("src/sass/*.+(sass|scss)") 
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest(/css))
            .pipe(browserSync.stream());
})

gulp.tusk('watch', function() {
    gulp.watch("src/sass/*.+(sass|scss)", gulp.parallel("styles"))
    gulp.watch("*.html").on("change", browserSync.reload)
});

gulp.tusk('default', gulp.parallel('watch', 'server', 'styles'));