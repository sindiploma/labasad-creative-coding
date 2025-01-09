## Color

`colorMode()` cambia la manera en que se interpretan los datos de color usando el modelo de color RGB. Permite personalizar el rango de valores para cada componente del color.
- **P5.js**: [`colorMode(mode, [max1], [max2], [max3], [maxA])`](https://p5js.org/reference/p5/colorMode)
- **Vanilla JS**: No hay equivalente directo. Canvas siempre usa RGB/RGBA

`color()` Crea colores para ser almacenados en variables del tipo color. El modo por defecto son valores RGB. Soporta RGB, RGBA, HSB, HSL, HEX.
- **P5.js**: [`color(v1, v2, v3, [alpha])`](https://p5js.org/reference/p5/color)
- **Vanilla JS**: 
```javascript
// Almacenar valores RGB en un array
const myColor = [255, 0, 0];  // rojo
const myColorWithAlpha = [255, 0, 0, 0.5];  // rojo semi-transparente

// Para usar el color:
ctx.fillStyle = `rgb(${myColor.join(',')})`;
// o con alpha
ctx.fillStyle = `rgba(${myColorWithAlpha.join(',')})`;
```

**Lectura adicional:** [Color Arrangment in Generative Art | Tyler Hobbs](https://www.tylerxhobbs.com/words/color-arrangment-in-generative-art)

## Primitivos 2D

`point()` dibuja un punto
- **P5.js**: [`point(x, y)`](https://p5js.org/reference/p5/point)
- **Vanilla JS**:
```javascript
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
```

`ellipse()` dibuja una elipse (óvalo)
- **P5.js**: [`ellipse(x, y, w, h)`](https://p5js.org/reference/p5/ellipse)
- **Vanilla JS**: `ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)`

`circle()` dibuja una círculo (una elipse con lo ancho y lo alto igual)
- **P5.js**: [`circle(x, y, d)`](https://p5js.org/reference/p5/circle)
- **Vanilla JS**: `ctx.arc(x, y, radius, 0, Math.PI * 2)`

`rect()` dibuja una rectángulo, al que adicionalmente podemos especificar el border radius de cada uno de sus vértices.
- **P5.js**: [`rect(x, y, w, h, [tl], [tr], [br], [bl])`](https://p5js.org/reference/p5/rect)
- **Vanilla JS**: `ctx.rect(x, y, width, height)`

`line()` dibuja una línea
- **P5.js**: [`line(x1, y1, x2, y2)`](https://p5js.org/reference/p5/line)
- **Vanilla JS**:
```javascript
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
```

`arc()` dibuja un arco
- **P5.js**: [`arc(x, y, w, h, start, stop, [mode], [detail])`](https://p5js.org/reference/p5/arc)
- **Vanilla JS**: `ctx.arc(x, y, radius, startAngle, endAngle)`

`quad()` dibuja un cuadrilátero, un polígono de cuatro lados
- **P5.js**: [`quad(x1, y1, x2, y2, x3, y3, x4, y4)`](https://p5js.org/reference/p5/quad)
- **Vanilla JS**:
```javascript
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.lineTo(x4, y4);
ctx.closePath();
ctx.fill(); // o ctx.stroke();
```

`triangle()` dibuja un triángulo
- **P5.js**: [`triangle(x1, y1, x2, y2, x3, y3)`](https://p5js.org/reference/p5/triangle)
- **Vanilla JS**:
```javascript
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.closePath();
ctx.fill(); // o ctx.stroke();
```

`beginShape()` / `endShape()` / `vertex()` - beginShape empieza la grabación de vértices para una figura, mientras que endShape termina la grabación. Después de llamar a la función beginShape, debe ser seguida por una serie de comandos vertex.
- **P5.js**: [`beginShape([kind])`](https://p5js.org/reference/p5/beginShape), [`endShape([mode])`](https://p5js.org/reference/p5/endShape), [`vertex(x, y)`](https://p5js.org/reference/p5/vertex)
- **Vanilla JS**:
```javascript
ctx.beginPath();
ctx.moveTo(x1, y1);  // Primer vertex
ctx.lineTo(x2, y2);  // Siguientes vertices
// ... más vertices
ctx.closePath();     // Equivalente a endShape(CLOSE)
```

## Atributos

`background()` define el color usado como fondo del lienzo
- **P5.js**: [`background(color, [a])`](https://p5js.org/reference/p5/background)
- **Vanilla JS**: 
```javascript
ctx.fillStyle = color;
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

`fill()` / `noFill()` definen el relleno de las figuras
`stroke()` / `noStroke()` definen los bordes de las figuras
- **P5.js**: [`fill(v1, v2, v3, [alpha])`](https://p5js.org/reference/p5/fill) / [`noFill()`](https://p5js.org/reference/p5/noFill) / [`stroke(v1, v2, v3, [alpha])`](https://p5js.org/reference/p5/stroke) / [`noStroke()`](https://p5js.org/reference/p5/noStroke)
- **Vanilla JS**:
```javascript
// Fill
ctx.fillStyle = color;  // para fill()
ctx.fillStyle = 'transparent';  // para noFill()

// Stroke
ctx.strokeStyle = color;  // para stroke()
ctx.strokeStyle = 'transparent';  // para noStroke()
```

`strokeWeight()` define el ancho del trazo usado para dibujar líneas
`strokeCap()` define el estilo de rendering de los extremos de las líneas
- **P5.js**: [`strokeWeight(weight)`](https://p5js.org/reference/p5/strokeWeight) / [`strokeCap(cap)`](https://p5js.org/reference/p5/strokeCap)
- **Vanilla JS**:
```javascript
ctx.lineWidth = n;
ctx.lineCap = type;  // 'butt', 'round', 'square'
```

`ellipseMode()` modifica la ubicación de donde las elipses son dibujadas
`rectMode()` modifica la ubicación de donde los rectángulos son dibujados
- **P5.js**: [`ellipseMode(mode)`](https://p5js.org/reference/p5/ellipseMode), [`rectMode(mode)`](https://p5js.org/reference/p5/rectMode)
- **Vanilla JS**: No hay equivalente directo, requiere cálculos manuales de las coordenadas

`smooth()` / `noSmooth()`
- **P5.js**: [`smooth()`](https://p5js.org/reference/p5/smooth) / [`noSmooth()`](https://p5js.org/reference/p5/noSmooth)
- **Vanilla JS**:
```javascript
ctx.imageSmoothingEnabled = true;  // smooth()
ctx.imageSmoothingEnabled = false; // noSmooth()
```

## Tipografía

`loadFont()` Carga un archivo de fuente de letra (*.otf, .ttf*) desde un archivo o URL, y retorna un objeto *PFont*. Este método es asíncrono, lo que significa que puede que no finalice antes de que la siguiente línea en tu sketch sea ejecutada.
- **P5.js**: [`loadFont(path, [callback], [onError])`](https://p5js.org/reference/p5/loadFont)
- **Vanilla JS**:
```javascript
const font = new FontFace('fontName', 'url(path/to/font.ttf)');
font.load().then(function(loadedFont) {
  document.fonts.add(loadedFont);
});
```

`textFont()` Define la fuente con la que se dibujará el contenido de la función *text()*
`text()` dibuja texto
`textAlign()` define el alineamiento actual para dibujar texto
`textSize()` define o retorna el tamaño actual de la tipografía
- **P5.js**: [`textFont(font, [size])`](https://p5js.org/reference/p5/textFont), [`text(str, x, y, [x2], [y2])`](https://p5js.org/reference/p5/text), [`textAlign(horizAlign, [vertAlign])`](https://p5js.org/reference/p5/textAlign), [`textSize(size)`](https://p5js.org/reference/p5/textSize)
- **Vanilla JS**:
```javascript
ctx.font = '20px fontName';  // textFont() y textSize()
ctx.textAlign = 'left';      // textAlign()
ctx.fillText(str, x, y);     // text() con fill
ctx.strokeText(str, x, y);   // text() con stroke
```

`textBounds()` y `textToPoints()`
- **P5.js**: [`textBounds(str, x, y, [fontSize], [options])`](https://p5js.org/reference/p5.Font/textBounds), [`textToPoints(txt, x, y, fontSize, [options])`](https://p5js.org/reference/p5.Font/textToPoints)

## Expresiones y operadores

Comparison and logical operators `++`, `+=`, `||`, `&&`, `!`, …
[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

## Cálculo

`ceil()` / `floor()` calculan el entero más cercano que: es mayor o igual que el valor del parámetro (*ceil*), o menor o igual (*floor*).
- **P5.js**: [`ceil(n)`](https://p5js.org/reference/p5/ceil), [`floor(n)`](https://p5js.org/reference/p5/floor)
- **Vanilla JS**: `Math.ceil(n)`, `Math.floor(n)`

`random()` retorna un número aleatorio de tipo float (punto flotante).
- **P5.js**: [`random([min], [max])`](https://p5js.org/reference/p5/random)
- **Vanilla JS**: `Math.random()`

## Condicionales y loops

`if` / `else`
`for` / `while`

[I.1: Random Walker - The Nature of Code](https://www.youtube.com/watch?v=rqecAdEGW6I)

## Eventos

`mouseX` / `mouseY` almacenan la posición actual del cursor dentro del canvas
`pmouseX` / `pmouseY` almacenan la posición anterior
- **P5.js**: [`mouseX`](https://p5js.org/reference/p5/mouseX), [`mouseY`](https://p5js.org/reference/p5/mouseY), [`pmouseX`](https://p5js.org/reference/p5/pmouseX), [`pmouseY`](https://p5js.org/reference/p5/pmouseY)
- **Vanilla JS**: No existen como variables globales. Necesitas implementarlas manualmente:
```javascript
let mouseX = 0, mouseY = 0;
let pmouseX = 0, pmouseY = 0;

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  pmouseX = mouseX;
  pmouseY = mouseY;
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});
```

`winMouseX` / `winMouseY` / `pwinMouseX` / `pwinMouseY` almacenan la posición del cursor respecto a la ventana del navegador
- **P5.js**: [`winMouseX`](https://p5js.org/reference/p5/winMouseX), [`winMouseY`](https://p5js.org/reference/p5/winMouseY), [`pwinMouseX`](https://p5js.org/reference/p5/pwinMouseX), [`pwinMouseY`](https://p5js.org/reference/p5/pwinMouseY)
- **Vanilla JS**:
```javascript
window.addEventListener('mousemove', (event) => {
  const winMouseX = event.clientX;
  const winMouseY = event.clientY;
});
```

`mouseIsPressed` / `mousePressed()` La función mousePressed es llamada cada vez que un botón del ratón está siendo presionado, mientras que la variable booleana mouseIsPressed es verdadera (true) si el ratón está siendo presionado, y falsa (false) en caso contrario.
- **P5.js**: [`mouseIsPressed`](https://p5js.org/reference/p5/mouseIsPressed), [`mousePressed([function])`](https://p5js.org/reference/p5/mousePressed)
- **Vanilla JS**:
```javascript
let isMousePressed = false;
canvas.addEventListener('mousedown', () => isMousePressed = true);
canvas.addEventListener('mouseup', () => isMousePressed = false);
```

`keyPressed()` es llamada una vez cada vez que una tecla es presionada
`key` / `keyCode` la variable de sistema *key* siempre contiene el valor más reciente de la tecla del teclado presionada, mientras que la variable *keyCode* es usada para detectar teclas especiales
- **P5.js**: [`keyPressed([function])`](https://p5js.org/reference/p5/keyPressed), [`key`](https://p5js.org/reference/p5/key), [`keyCode`](https://p5js.org/reference/p5/keyCode)
- **Vanilla JS**:
```javascript
window.addEventListener('keydown', (event) => {
  const key = event.key;
  const keyCode = event.keyCode;
});
```

`touchStarted()` / `touchMoved()`
- **P5.js**: [`touchStarted([function])`](https://p5js.org/reference/p5/touchStarted), [`touchMoved([function])`](https://p5js.org/reference/p5/touchMoved)
- **Vanilla JS**:
```javascript
canvas.addEventListener('touchstart', (event) => {
  event.preventDefault();  // Prevenir el comportamiento por defecto
  const touch = event.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
});

canvas.addEventListener('touchmove', (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
});
```

`deviceOrientation`
- **P5.js**: [`deviceOrientation`](https://p5js.org/reference/p5/deviceOrientation)
- **Vanilla JS**:
```javascript
window.addEventListener('deviceorientation', (event) => {
  const alpha = event.alpha;  // Rotación alrededor del eje z (0-360)
  const beta = event.beta;    // Rotación alrededor del eje x (-180-180)
  const gamma = event.gamma;  // Rotación alrededor del eje y (-90-90)
});
```