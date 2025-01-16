# Librerías

[Librerías p5](https://p5js.org/es/libraries/)

[p5.js-sound](https://github.com/processing/p5.js-sound)

# p5.sound

[`loadSound`](https://p5js.org/reference/p5/loadSound/) devuelve un nuevo `p5.SoundFile`.

[`p5.Amplitude`](https://p5js.org/reference/p5.sound/p5.Amplitude/) mide el volumen entre 0 y 1 de todos los sonidos p5 de forma predeterminada, o utiliza `setInput()` para escuchar una fuente de sonido específica. Acepta un valor de suavizado opcional, que tiene como valor predeterminado 0.

[`p5.FFT`](https://p5js.org/reference/p5.sound/p5.FFT/) analiza el espectro de frecuencia de audio. El espectro de frecuencia de audio es una representación de un sonido que nos muestra qué frecuencias (graves 20-250Hz, medios 250-2000Hz, agudos 2000-20000Hz) están presentes y con qué intensidad.

[`analyze()`](https://p5js.org/reference/p5.FFT/analyze/) devuelve un array de valores de amplitud (entre 0 y 255) a lo largo del espectro de frecuencias. El array tiene un tamaño de 1024 valores por defecto, pero puede especificarse en el constructor de FFT.

[`getEnergy()`](https://p5js.org/reference/p5.FFT/getEnergy/) devuelve la energía (volumen) de una frecuencia específica o un rango de frecuencias. Acepta una frecuencia en Hz o un rango predefinido ('bass', 'lowMid', 'mid', 'highMid', 'treble').

[`setInput()`](https://p5js.org/reference/p5.Amplitude/setInput/) se conecta a la instancia p5sound (salida principal) de forma predeterminada. Opcionalmente, puede pasar una fuente específica (es decir, un archivo de sonido).

[`play()`](https://p5js.org/reference/p5.SoundFile/play/) reproduce el `p5.SoundFile`

[`isPlaying()`](https://p5js.org/reference/p5.SoundFile/isPlaying/) devuelve `true` si se está reproduciendo un `p5.SoundFile`, `false` si no es así (es decir, está en pausa o detenido).

[`stop()`](https://p5js.org/reference/p5.SoundRecorder/stop/) detiene un elemento multimedia y establece su tiempo actual en 0.

[`loop()`](https://p5js.org/reference/p5.Part/loop/) reproduce el sonido en bucle.

[`duration()`](https://p5js.org/reference/p5.MediaElement/duration/) devuelve la duración del audio/video en segundos.

`currentTime()` devuelve la hora actual de un archivo de sonido que se está reproduciendo en ese momento, en segundos (formato).

[`getLevel()`](https://p5js.org/reference/p5.Amplitude/getLevel/) devuelve una única lectura de amplitud.

[`amp()`](https://p5js.org/reference/p5.AudioIn/amp/) establece la amplitud (volumen) de una entrada de micrófono entre 0 y 1.

[`setVolume()`](https://p5js.org/reference/p5.SoundFile/setVolume/) Multiplica el volumen de salida (amplitud) de un archivo de sonido entre 0 (silencio) y 1 (volumen completo).

[`rate()`](https://p5js.org/reference/p5.SoundFile/rate/) establece la velocidad de reproducción de un archivo de sonido. Cambiará la velocidad y el tono. Los valores inferiores a cero invertirán el buffer de audio.

[`pan()`](https://p5js.org/reference/p5.Oscillator/pan/) Desplaza el sonido de izquierda (-1) a derecha (1)