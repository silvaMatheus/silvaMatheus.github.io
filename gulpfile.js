var gulp = require('gulp'); // Chamando o Gulp

//Tasks  - Funções que o gulp desempenhará


var sass = require('gulp-sass');

//Tasks  para o sass

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
});

gulp.task('default', function(){

});
