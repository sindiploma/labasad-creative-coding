### Color

[`colorMode()`](https://p5js.org/reference/p5/colorMode/) cambia la manera en que se interpretan los datos de color usando el modelo de color RGB.

[`color()`](https://p5js.org/reference/p5/color/) Crea colores para ser almacenados en variables del tipo color. El modo por defecto son valores RGB. Soporta RGB, RGBA, HSB, HSL, HEX.

**Lectura adicional:** [Color Arrangment in Generative Art | Tyler Hobbs](https://www.tylerxhobbs.com/words/color-arrangment-in-generative-art)

---

### Primitivos 2D

[`point()`](https://p5js.org/reference/p5/point) dibuja un punto

[`ellipse()`](https://p5js.org/reference/p5/ellipse) dibuja una elipse (óvalo)

[`circle()`](https://p5js.org/reference/p5/circle) dibuja una círculo (una elipse con lo ancho y lo alto igual)

[`rect()`](https://p5js.org/reference/p5/rect) dibuja una rectángulo

[`line()`](https://p5js.org/reference/p5/line) dibuja una línea

[`arc()`](https://p5js.org/reference/p5/arc) dibuja un arco

[`quad()`](https://p5js.org/reference/p5/quad) dibuja un cuadrilátero, un polígono de cuatro lados

[`triangle()`](https://p5js.org/reference/p5/triangle) dibuja un triángulo

[`beginShape()`](https://p5js.org/reference/p5/beginShape) / [`endShape()`](https://p5js.org/reference/p5/endShape) / [`vertex()`](https://p5js.org/reference/p5/vertex) *beginShape* empieza la grabación de vértices para una figura, mientras que *endShape* termina la grabación. Después de llamar a la función *beginShape*, debe ser seguida por una serie de comandos *vertex*.

---

### Atributos

[`background()`](https://p5js.org/reference/p5/background) define el color usado como fondo del lienzo

[`fill()`](https://p5js.org/reference/p5/fill) / [`noFill()`](https://p5js.org/reference/p5/noFill) definen el relleno de las figuras.

[`stroke()`](https://p5js.org/reference/p5/stroke) / [`noStroke()`](https://p5js.org/reference/p5/noStroke) definen los bordes de las figuras.

[`strokeWeight()`](https://p5js.org/reference/p5/strokeWeight) define el ancho del trazo usado para dibujar líneas

[`strokeCap()`](https://p5js.org/reference/p5/strokeCap) define el estilo de rendering de los extremos de las líneas

[`ellipseMode()`](https://p5js.org/reference/p5/ellipseMode)  modifica la ubicación de donde las elipses son dibujadas

[`rectMode()`](https://p5js.org/reference/p5/rectMode) modifica la ubicación de donde los rectángulos son dibujados

[`smooth()`](https://p5js.org/reference/p5/smooth) / [`noSmooth()`](https://p5js.org/reference/p5/noSmooth)

---

### Tipografia

[`loadFont()`](https://p5js.org/reference/p5/loadFont) Carga un archivo de fuente de letra (*.otf, .ttf*) desde un archivo o URL, y retorna un objeto *PFont*. Este método es asíncrono, lo que significa que puede que no finalice antes de que la siguiente línea en tu sketch sea ejecutada.

[`textFont()`](https://p5js.org/reference/p5/textFont) Define la fuente con la que se dibujará el contenido de la función *text()*

[`text()`](https://p5js.org/reference/p5/text) dibuja texto

[`textAlign()`](https://p5js.org/reference/p5/textAlign) define el alineamiento actual para dibujar texto.

[`textSize()`](https://p5js.org/reference/p5/textSize) define o retorna el tamaño actual de la tipografía.

[`textBounds()`](https://p5js.org/reference/p5.Font/textBounds)

[`textToPoints()`](https://p5js.org/reference/p5.Font/textToPoints)

---

### Expresiones y operadores

Comparison and logical operators `++`, `+=`, `||`, `&&`, `!`, …

[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

---

### Cálculo

[`ceil()`](https://p5js.org/es/reference/p5/ceil/) / [`floor()`](https://p5js.org/es/reference/p5/floor) calculan el entero más cercano que: es mayor o igual que el valor del parámetro (*ceil*), o menor o igual (*floor*).

[`random()`](https://p5js.org/reference/p5/random) retorna un número aleaotorio de tipo float (punto flotante).

---

### Condicionales y loops

`if` / `else`

`for` / `while`

[I.1: Random Walker - The Nature of Code](https://www.youtube.com/watch?v=rqecAdEGW6I)

---

### Eventos

[`mouseX`](https://p5js.org/reference/p5/mouseX) / [`mouseY`](https://p5js.org/reference/p5/mouseY) almacenan la posición actual del cursor dentro del canvas

[`pmouseX`](https://p5js.org/reference/p5/pmouseX) / [`pmouseY`](https://p5js.org/reference/p5/pmouseY/) almacenan la posición

[`winMouseX`](https://p5js.org/es/reference/p5/winMouseX) / [`winMouseY`](https://p5js.org/es/reference/p5/winMouseY) / [`pwinMouseX`](https://p5js.org/es/reference/p5/pwinMouseX) / [`pwinMouseY`](https://p5js.org/es/reference/p5/pwinMouseY) almacenan la posición del cursor respecto a la ventana del navegador

[`mouseIsPressed`](https://p5js.org/reference/p5/mouseIsPressed) / [`mousePressed()`](https://p5js.org/reference/p5/mousePressed) La función mousePressed es llamada cada vez que un botón del ratón está siendo presionado, mientras que la variable booleana mouseIsPressed es verdadera (true) si el ratón está siendo presionado, y falsa (false) en caso contrario.

[`mouseMoved()`](https://p5js.org/reference/p5/mouseMoved) es llamada cada vez que el ratón se mueve y un botón del ratón no está siendo presionado

[`keyPressed()`](https://p5js.org/reference/p5/keyPressed) es llamada una vez cada vez que una tecla es presionada

[`key`](https://p5js.org/reference/p5/key) / [`keyCode`](https://p5js.org/reference/p5/keyCode) la variable de sistema *key* siempre contiene el valor más reciente de la tecla del teclado presionada, mientras que la variable *keyCode* es usada para detectar teclas especiales

[`touchStarted()`](https://p5js.org/reference/p5/touchStarted) / [`touchMoved()`](https://p5js.org/reference/p5/touchMoved)

[`deviceOrientation`](https://p5js.org/reference/p5/deviceOrientation)