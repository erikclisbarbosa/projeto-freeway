let xCarros = [600, 600, 600];
let yCarros = [40,97,150];
let velocidadeDoCarro = [2, 2.5, 3.2];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 40);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    xCarros[i] -= velocidadeDoCarro[i];
  }
} 

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    if (xCarros[i] < -50){
      xCarros[i] = 600;
    }
  }
}