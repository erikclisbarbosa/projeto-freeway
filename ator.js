let xAtor = 100;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, 15)
    if (colisao){
      somDaColisao.play();
      yAtor = 365;
      meusPontos = 0;
    }
  }
}

function incluiPontos(){
  text(meusPontos, 50, 30)
  textSize(25)
  fill(255, 240, 110)
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    yAtor = 365;
  }
}

function podeSeMover(){
  return yAtor <366;
}
