### setup y draw

La función [`setup()`](https://p5js.org/reference/p5/setup/) es ejecutada una vez, cuando el programa empieza. 

La función [`draw()`](https://p5js.org/reference/p5/draw/) es ejecutada después de `setup()`, y ejecuta contínuamente las líneas de código dentro de su bloque hasta que el programa es detenido o se ejecuta la función [`noLoop()`](https://p5js.org/reference/p5.Score/noLoop/). La función `draw()` es el equivalente a [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) en Vanilla JS.

[Positioning your canvas](https://github.com/processing/p5.js/wiki/Positioning-your-canvas)

[Global and instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode)

---

### Frames (tiempo)

[`frameRate()`](https://p5js.org/reference/p5/frameRate/) especifica el número de cuadros mostrados por segundo.

[`frameCount`](https://p5js.org/reference/p5/frameCount/) contiene el número de cuadros (frames) que se han mostrado desde que el programa empezó a ejecutarse.

[`millis()`](https://p5js.org/reference/p5/millis/) retorna el número de milisegundos (milésimas de segundo) desde que el programa empezó a correr.

La variable del sistema [`deltaTime`](https://p5js.org/reference/p5/deltaTime/) contiene la diferencia de tiempo entre cuando empezo el cuadro (frame) anterior y cuando empezó el cuadro actual en milisegundos.

---

### Disposición (Posición y coordenadas)

[`width`](https://p5js.org/reference/p5/width/) almacena el ancho del lienzo dibujado

[`height`](https://p5js.org/reference/p5/height/) almacena la altura del lienzo dibujado

[`resizeCanvas()`](https://p5js.org/reference/p5/resizeCanvas/) Redimensiona el lienzo al ancho y la altura dados

[`fullscreen()`](https://p5js.org/reference/p5/fullscreen/) define que el boceto esté a pantalla completa o no basado en el valor del argumento.

[`saveFrames()`](https://p5js.org/reference/p5/saveFrames/) Captura una secuencia de cuadros que pueden ser usados para crear una película.