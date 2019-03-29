var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
          
       console.log('Transformation SCSS en CSS');
    return gulp.src('dev/scss/styles.scss')
    .pipe( sass() )
    .pipe( gulp.dest('dev/css') )
          
          
          });