var gulp  = require('gulp'),
    unCss = require('gulp-uncss');

gulp.task('uncss', () => {
  gulp.src('themes/photography/static/css/style.css')
  .pipe(unCss({
      html: ['themes/photography/layouts/index.html']
  }))
  .pipe(gulp.dest('out'));
});

gulp.task('default', ['uncss']);
