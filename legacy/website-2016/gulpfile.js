const gulp = require('gulp');
const del = require('del');
//const typescript = require('gulp-typescript');
//const tscConfig = require('./tsconfig.json');

//const tsconfig = require('tsconfig-glob');
//const sourcemaps = require('gulp-sourcemaps'); //

var uglify = require('gulp-uglify');

/* eliminada tarea de compilar los *ts a *js, dejamos que esa tarea se haga una vez 
   iniciemos la app (npm start) de la forma en la que indiquemos en tsconfig.json */

gulp.task('clean', function () {
  return del('dist/**/*');
});


gulp.task('copy:scripts', ['clean'], function() {
  return gulp.src([
    // polyfills
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',   
    // systemjs.config.js
    'systemjs.config.js',
    // system scripts
    'node_modules/angular2-in-memory-web-api/**/*.js', 
    'node_modules/rxjs/**/*.js',
    // bootstrap.min.js
    'node_modules/bootstrap/dist/js/bootstrap.min.js'], { base: './' })
     
  
    .pipe(uglify())
    .pipe(gulp.dest('dist'));    
});


gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'views/**/*', 'index.html', 'images/**/*', 'styles/**/*', '!app/**/*.ts',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    'node_modules/bootstrap/dist/fonts/**/*',
    'node_modules/font-awesome/**/*',
    // uno de los siguientes js me da error si lo pongo en copy:script 
    'node_modules/@angular/**/*.js'], { base : './' })
  
    .pipe(gulp.dest('dist'))
});
    
gulp.task('build', [/*'compile',*/ 'copy:scripts', 'copy:assets']);
gulp.task('default', ['build']);