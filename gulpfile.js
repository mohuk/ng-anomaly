var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function(){
  return concatFiles('ng-anomaly.js')
    .pipe(gulp.dest('./dist/'));
});


gulp.task('min', function(){
  return concatFiles('ng-anomaly.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

function concatFiles(fileName){
  return gulp.src([
    './src/anomaly.module.js',
    './src/anomaly.provider.js',
    './src/exceptionHandler.decorator.js'
  ])
  .pipe(concat(fileName));
}
