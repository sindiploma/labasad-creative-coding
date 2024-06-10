### Color

`colorMode()` cambia la manera en que se interpretan los datos de color usando el modelo de color RGB.

`color()` Crea colores para ser almacenados en variables del tipo color. El modo por defecto son valores RGB. Soporta RGB, RGBA, HSB, HSL, HEX.

[Color Arrangment in Generative Art | Tyler Hobbs](https://www.tylerxhobbs.com/words/color-arrangment-in-generative-art)

### Primitivos 2D

`point()` dibuja un punto

`ellipse()` dibuja una elipse (óvalo)

`circle()` dibuja una círculo (una elipse con lo ancho y lo alto igual)

 `rect()` dibuja una rectángulo

`line()` dibuja una línea

`arc()` dibuja un arco

`quad()` dibuja un cuadrilátero, un polígono de cuatro lados

`triangle()` dibuja un triángulo

`beginShape()` / `endShape()` / `vertex()` *beginShape* empieza la grabación de vértices para una figura, mientras que *endShape* termina la grabación. Después de llamar a la función *beginShape*, debe ser seguida por una serie de comandos *vertex*.

### Atributos

`background()` define el color usado como fondo del lienzo

`fill()` / `noFill()` definen el relleno de las figuras.

`stroke()` / `noStroke()` definen los bordes de las figuras.

`strokeWeight()` define el ancho del trazo usado para dibujar líneas

`strokeCap()` define el estilo de rendering de los extremos de las líneas

`ellipseMode()`  modifica la ubicación de donde las elipses son dibujadas

`rectMode()` modifica la ubicación de donde los rectángulos son dibujados

`smooth()` / `noSmooth()`

### Tipografia

`loadFont()` Carga un archivo de fuente de letra (*.otf, .ttf*) desde un archivo o URL, y retorna un objeto *PFont*. Este método es asíncrono, lo que significa que puede que no finalice antes de que la siguiente línea en tu sketch sea ejecutada.

`textFont()` Define la fuente con la que se dibujará el contenido de la función *text()*

`text()` dibuja texto

`textAlign()` define el alineamiento actual para dibujar texto. 

`textSize()` define o retorna el tamaño actual de la tipografía.

`textBounds()`

`textToPoints()` 

### Expresiones y operadores (20’)

Comparison and logical `++`, `+=`, `||`, `&&`, `!`, …

[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

### Cálculo

`ceil()` / `floor()` 

`random()`  `noise()`

[Noise in Creative Coding](https://varun.ca/noise/)

### Condicionales y loops (20’)

- `if` / `else`
- `for` / `while`

[I.1: Random Walker - The Nature of Code](https://www.youtube.com/watch?v=rqecAdEGW6I)

### Eventos

- `mouseX` / `mouseY` almacenan la posición actual del cursor dentro del canvas
- `pmouseX` / `pmouseY` almacenan la posición
- `winMouseX` / `winMouseY` / `pwinMouseX` / `pwinMouseY` almacenan la posición del cursor respecto a la ventana del navegador
- `mouseIsPressed` / `mousePressed()` La función mousePressed es llamada cada vez que un botón del ratón está siendo presionado, mientras que la variable booleana mouseIsPressed es verdadera (true) si el ratón está siendo presionado, y falsa (false) en caso contrario.
- `mouseMoved()` es llamada cada vez que el ratón se mueve y un botón del ratón no está siendo presionado
- `keyPressed()` es llamada una vez cada vez que una tecla es presionada
- `key` / `keyCode` la variable de sistema *key* siempre contiene el valor más reciente de la tecla del teclado presionada, mientras que la variable *keyCode* es usada para detectar teclas especiales
- `touchStarted()` / `touchMoved()`
- `deviceOrientation`