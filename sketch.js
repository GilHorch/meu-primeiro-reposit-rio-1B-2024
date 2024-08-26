function palavraAleatoria(){
  let palavras = ["Gilmar","Horchulhak","professor"];//cria uma lista
  return random(palavras); // variável palavra 
  
}

function inicializaCores(){
  
  background(220); //cor de fundo
  fill("red"); //preenchimento
  textSize(70); //tamanho da fonte
  textAlign(CENTER, CENTER); //alinha o texto ao centro, tanto na vertical quanto na horizontal
}
let palavra ;//cria a variável palavra
function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
  
}
 function palavraParcial(minimo,maximo){//cria uma função
 let quantidade = map(mouseX,minimo,maximo,0,palavra.length);
  
 let parcial = palavra.substring(quantidade); 
 return parcial;
  
}

function draw() {
inicializaCores();
     
  let parcial =palavraParcial(0,width);//chama a função
  text (parcial,200,200);

}
