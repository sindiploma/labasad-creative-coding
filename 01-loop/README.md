### setup y draw

La función [`setup()`](https://p5js.org/reference/p5/setup/) es ejecutada una vez, cuando el programa empieza. 

La función [`draw()`](https://p5js.org/reference/p5/draw/) es ejecutada después de `setup()`, y ejecuta contínuamente las líneas de código dentro de su bloque hasta que el programa es detenido o se ejecuta la función [`noLoop()`](https://p5js.org/reference/p5.Score/noLoop/).

La función `draw()` es el equivalente a [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) en Vanilla JS.

[Positioning your canvas](https://github.com/processing/p5.js/wiki/Positioning-your-canvas)

[Global and instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode)

---

### Frames (tiempo)

[`frameRate()`](https://p5js.org/reference/p5/frameRate/) especifica el número de cuadros mostrados por segundo.

[`frameCount`](https://p5js.org/reference/p5/frameCount/) contiene el número de cuadros (frames) que se han mostrado desde que el programa empezó a ejecutarse.

En Vanilla JS para reemplazar frameRate() y frameCount, tenemos requestAnimationFrame.

`frameCount` funciona como un metrónomo que cuenta cada frame, lo que lo hace perfecto para crear animaciones repetitivas ya que incremenenta de manera predecible. 

[`millis()`](https://p5js.org/reference/p5/millis/) retorna el número de milisegundos (milésimas de segundo) desde que el programa empezó a correr.

Es útil cuando queremos que las animaciones tomen períodos de tiempo específicos, como rotar una vez cada dos segundos.

El equivalente en Vanilla JS, sería: `performance.now()`, que proporciona un timestamp en milisegundos; o `Date.now()`, que devuelve los milisegundos desde el 1 de enero de 1970.

La variable del sistema [`deltaTime`](https://p5js.org/reference/p5/deltaTime/) contiene la diferencia de tiempo entre cuando empezo el cuadro (frame) anterior y cuando empezó el cuadro actual en milisegundos.

`deltaTime` es ideal para crear animaciones suaves que se perciban igual aunque el frameRate sea distinto. Si el dispositivo se ralentiza y los fotogramas tardan más, deltaTime se hace más grande y ajusta automáticamente el movimiento para que se mantenga fluido. Si multiplicamos la velocidad por deltaTime, hace que el movimiento se base en el tiempo en lugar de en los fotogramas.

---

### Disposición (Posición y coordenadas)

[`width`](https://p5js.org/reference/p5/width/) almacena el ancho del lienzo dibujado

[`height`](https://p5js.org/reference/p5/height/) almacena la altura del lienzo dibujado

[`resizeCanvas()`](https://p5js.org/reference/p5/resizeCanvas/) Redimensiona el lienzo al ancho y la altura dados

[`fullscreen()`](https://p5js.org/reference/p5/fullscreen/) define que el boceto esté a pantalla completa o no basado en el valor del argumento.

[`saveFrames()`](https://p5js.org/reference/p5/saveFrames/) Captura una secuencia de cuadros que pueden ser usados para crear una película.