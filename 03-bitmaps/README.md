## Transformaciones

[`push()`](https://p5js.org/reference/p5/push) / [`pop()`](https://p5js.org/reference/p5/pop) Una graba la configuración actual de estilo de dibujo (push), mientras la otra la restaura (pop)

[`rotate()`](https://p5js.org/reference/p5/rotate) / [`rotateZ()`](https://p5js.org/reference/p5/rotateZ) rota una figura según el ángulo especificado.

[`scale()`](https://p5js.org/reference/p5/scale) aumenta o decrementa el tamaño de una figura por medio de expandir o contraer sus vértices.

[`shearX()`](https://p5js.org/reference/p5/shearX), [`shearY()`](https://p5js.org/reference/p5/shearY) corta la figura en torno a un eje según el ángulo especificado

[`translate()`](https://p5js.org/reference/p5/translate) especifica una cantidad a desplazar los objetos dentro de la ventana mostrada

[`applyMatrix()`](https://p5js.org/reference/p5/applyMatrix) multiplica la matriz actual por la especificada según los parámetros

## Imagen

[`loadImage()`](https://p5js.org/reference/p5/loadImage) carga una imagen desde una ruta de archivo y crea un objeto p5.Image

[`image()`](https://p5js.org/reference/p5/image) dibuja una imagen en el lienzo

[`imageMode()`](https://p5js.org/reference/p5/imageMode) modifica la ubicación de donde la imagen es dibujada

[`tint()`](https://p5js.org/reference/p5/tint) / [`noTint()`](https://p5js.org/reference/p5/noTint) definen el valor de relleno para mostrar imágenes

[`filter()`](https://p5js.org/reference/p5/filter) aplica un filtro

[`blend()`](https://p5js.org/reference/p5/blend) copia una región de pixeles de una imagen a otra, usando un modo específico de mezcla

## Bitmap Loop

```jsx
for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let index = (image.width - x + 1 + (y * image.width))*4;

      let r = image.pixels[index+0]; // R
      let g = image.pixels[index+1]; // G
      let b = image.pixels[index+2]; // B

      let bright = (r + g + b) / 3;
    }
  }

```

[`loadPixels()`](https://p5js.org/reference/p5/loadPixels) / [`updatePixels()`](https://p5js.org/reference/p5/updatePixels)  cargan los datos de los pixeles en pantalla en el array *pixels[]*, o los actualiza.

[`pixels`](https://p5js.org/reference/p5/pixels) contiene todos los valores por cada uno de los pixels de la ventana.

[`get()`](https://p5js.org/reference/p5/get) / [`set()`](https://p5js.org/reference/p5/set) obtienen y establecen el color de un pixel, o de una región entera de píxeles de una imagen

[`copy()`](https://p5js.org/reference/p5/copy) copia una región de píxeles de una imagen a otra.

## Video

[`size()`](https://p5js.org/reference/p5.Element/size) controla el ancho y alto del video.

[`play()`](https://p5js.org/reference/p5.MediaElement/play) inicia la reproducción.

[`loop()`](https://p5js.org/reference/p5.MediaElement/loop) activa la reproducción infinita del video.

[`pause()`](https://p5js.org/reference/p5.MediaElement/pause) pausa la reproducción.

[`time()`](https://p5js.org/reference/p5.MediaElement/time) almacena el tiempo de video transcurrido.

[`duration()`](https://p5js.org/reference/p5.MediaElement/duration) indica la duración del video.

[Working with video (Creative Coding)](https://creative-coding.decontextualize.com/video/)