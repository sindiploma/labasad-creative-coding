## Transformaciones (30’)

(`push()`)[https://p5js.org/reference/p5/push/] / `pop()` Una graba la configuración actual de estilo de dibujo (push), mientras la otra la restaura (pop)

`rotate()` / `rotateZ()` rota una figura según el ángulo especificado.

`scale()` aumenta o decrementa el tamaño de una figura por medio de expandir o contraer sus vértices.

`shearX()`, `shearY()` corta la figura en torno a un eje según el ángulo especificado

`translate()` especifica una cantidad a desplazar los objetos dentro de la ventana mostrada

`applyMatrix()` multiplica la matriz actual por la especificada según los parámetros

## Imagen (30’)

`loadImage()` carga una imagen desde una ruta de archivo y crea un objeto p5.Image

`image()` dibuja una imagen en el lienzo 

`imageMode()` modifica la ubicación de donde la imagen es dibujada

`tint()` / `noTint()` definen el valor de relleno para mostrar imágenes

`filter()` aplica un filtro

`blend()` copia una región de pixeles de una imagen a otra, usando un modo específico de mezcla

## Bitmap Loop (30’)

```jsx
for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (video.width - x + 1 + (y * video.width))*4;

      let r = video.pixels[index+0]; // R
      let g = video.pixels[index+1]; // G
      let b = video.pixels[index+2]; // B

      let bright = (r + g + b) / 3;
    }
  }
```

`loadPixels()` / `updatePixels()`  cargan los datos de los pixeles en pantalla en el array *pixels[]*, o los actualiza.

`pixels` contiene todos los valores por cada uno de los pixels de la ventana.

`get()` / `set()` obtienen y establecen el color de un pixel, o de una región entera de píxeles de una imagen

`copy()` copia una región de píxeles de una imagen a otra.

## Video (30’)

`size()` controla el ancho y alto del video.

`play()` inicia la reproducción.

`loop()` activa la reproducción infinita del video.

`pause()` pausa la reproducción.

`time()` almacena el tiempo de video transcurrido.

`duration()` indica la duración del video.

[Working with video (Creative Coding)](https://creative-coding.decontextualize.com/video/)