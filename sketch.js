let xBolinha = 300;
let yBolinha = 200;
let diametro = 70;

let velocidadexbolinha = 15;
let velocidadeybolinha = 15;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadexbolinha;
  yBolinha += velocidadeybolinha;

  if(xBolinha > width || xBolinha < 0) { 
    velocidadexbolinha *= -1;
  }

  if(yBolinha > height || yBolinha < 0) { 
    velocidadeybolinha *= -1; 
}
}