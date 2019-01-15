var gulp = require('gulp'); // Chamando o Gulp

//Tasks  - Funções que o gulp desempenhará


var sass = require('gulp-sass');
var watch = require('gulp-watch');

//Tasks  para o sass

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
});

//task para o watch
	gulp.task('watch', function () {
    console.log("funcionando");
   	gulp.watch('sass/*.scss', ['sass']);
	});

gulp.task('default', function(){

});
