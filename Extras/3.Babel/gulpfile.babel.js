//Importación de librerías
import gulp from "gulp"
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"

// La tarea babel realizará la transpilación de código
gulp.task("babel", () => {
    return gulp
        .src("dev/js/*.js")// Obtiene todos los archivos javascript a convertir
        .pipe(plumber())
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            }),
        )
        .pipe(concat("scripts-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("prod/js"))// Carpeta de destino luego de la conversión
})

// La tarea default se encargará de estar pendiente de cualquier cambio en los archivos javascript y si lo detecta
// ejecuta la tarea babel
gulp.task("default", () => {
    gulp.watch("dev/js/*.js", gulp.series("babel"))
})