let t;
let animationDuration;
let radius = 15;

function setup() {
  createCanvas(400, 600); // Canvas más alto para acomodar más elipses
  t = 0; // Contador de tiempo que se incrementa cada frame
  distance = width - radius*2;
  animationDuration = 60*2;  // Controla la duración total de la animación [60fps * 2]
}

function draw() {
  background(220);

  // Normalizar t para que oscile entre 0 y 1 en ciclos de 60 frames
  // El operador % (módulo) hace que el valor se reinicie cada 60 frames
  let normalizedT = (t % animationDuration) / animationDuration;
  
  // Aplicar cada función de easing al valor normalizado
  let easeInSineVal = easeInSine(normalizedT);
  let easeOutSineVal = easeOutSine(normalizedT);
  let easeInElasticVal = easeInElastic(normalizedT);
  let easeOutElasticVal = easeOutElastic(normalizedT);
  let easeInBounceVal = easeInBounce(normalizedT);
  let easeOutBounceVal = easeOutBounce(normalizedT);

  
  let numEllipses = 6; // Número total de elipses
  let spacingY = height / (numEllipses + 1); // Espaciado vertical entre elipses

  noStroke();
  
  // easeInSine - Aceleración suave al final [Rojo]
  fill(255, 100, 100);
  ellipse(radius + (easeInSineVal * distance), spacingY * 1, radius*2, radius*2);
  
  // easeOutSine - Desaceleración suave al final [Verde]
  fill(100, 255, 100);
  ellipse(radius + (easeOutSineVal * distance), spacingY * 2, radius*2, radius*2);
  
  // easeInElastic - Efecto elástico al inicio [Azul]
  fill(100, 100, 255);
  ellipse(radius + (easeInElasticVal * distance), spacingY * 3, radius*2, radius*2);
  
  // easeOutElastic - Efecto elástico al final [Amarillo]
  fill(255, 255, 100);
  ellipse(radius + (easeOutElasticVal * distance), spacingY * 4, radius*2, radius*2);
  
  // easeInBounce - Efecto rebote al inicio [Magenta]
  fill(255, 100, 255);
  ellipse(radius + (easeInBounceVal * distance), spacingY * 5, radius*2, radius*2);
  
  // easeOutBounce - Efecto rebote al final [Cian]
  fill(100, 255, 255);
  ellipse(radius + (easeOutBounceVal * distance), spacingY * 6, radius*2, radius*2);
  
  
  fill(0);
  textAlign(LEFT);
  textSize(8);
  text("easeInSine", 20, spacingY * 1 - 30);
  text("easeOutSine", 20, spacingY * 2 - 30);
  text("easeInElastic", 20, spacingY * 3 - 30);
  text("easeOutElastic", 20, spacingY * 4 - 30);
  text("easeInBounce", 20, spacingY * 5 - 30);
  text("easeOutBounce", 20, spacingY * 6 - 30);

  t += 1; // Incrementar el contador de tiempo
}

function easeInSine(x) {
  return 1 - Math.cos((x * Math.PI) / 2);
}

function easeOutSine(x) {
  return Math.sin((x * Math.PI) / 2);
}

function easeInElastic(x) {
const c4 = (2 * Math.PI) / 3;

return x === 0
  ? 0
  : x === 1
  ? 1
  : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
}

function easeOutElastic(x) {
const c4 = (2 * Math.PI) / 3;

return x === 0
  ? 0
  : x === 1
  ? 1
  : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInBounce(x) {
return 1 - easeOutBounce(1 - x);
}

function easeOutBounce(x) {
const n1 = 7.5625;
const d1 = 2.75;

if (x < 1 / d1) {
    return n1 * x * x;
} else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
} else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
} else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
}
}