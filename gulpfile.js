var gulp = require('gulp'); // Chamando o Gulp

//Tasks  - Funções que o gulp desempenhará

var sass = require('gulp-sass');
var watch = require('gulp-watch');

//Tasks  para o sass

gulp.task('sass', function () {
  console.log("\n Sass compilado \n");
    return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));
});

//task para o watch
gulp.task('watch', function () {
    console.log("\n Arquivo sendo monitorado... \n");
   	gulp.watch('sass/*.scss', gulp.series('sass'));
	});

gulp.task('default', gulp.series( 'sass', 'watch'));
