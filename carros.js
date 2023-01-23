let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40,97,150, 210, 264, 317];
let velocidadeDoCarro = [5, 3.5, 2.5, 4, 5.5, 4.5];
let comprimentoDoCarro = 60;
let alturaDoCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro);
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