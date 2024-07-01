### setup y draw

La función `setup()` es ejecutada una vez, cuando el programa empieza. 

La función `draw()` es ejecutada después de `setup()`, y ejecuta contínuamente las líneas de código dentro de su bloque hasta que el programa es detenido o se ejecuta la función `noLoop()`.

[Positioning your canvas](https://github.com/processing/p5.js/wiki/Positioning-your-canvas)

[Global and instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode)

---

### Frames (tiempo)

[`frameRate()`](https://p5js.org/reference/p5/frameRate/) especifica el número de cuadros mostrados por segundo.

`frameCount` contiene el número de cuadros (frames) que se han mostrado desde que el programa empezó a ejecutarse.

`millis()` retorna el número de milisegundos (milésimas de segundo) desde que el programa empezó a correr.

La variable del sistema `deltaTime` contiene la diferencia de tiempo entre cuando empezo el cuadro (frame) anterior y cuando empezó el cuadro actual en milisegundos.

---

### Disposición (Posición y coordenadas)

`width()` almacena el ancho del lienzo dibujado

`height()` almacena la altura del lienzo dibujado

`resizeCanvas()` Redimensiona el lienzo al ancho y la altura dados

`fullscreen()` define que el boceto esté a pantalla completa o no basado en el valor del argumento.

`saveFrames()` Captura una secuencia de cuadros que pueden ser usados para crear una película.