var canvas = document.getElementById( "myCanvas" );
var ctx = canvas.getContext( "2d" );

var ball = {
  x: 100,
  y: 250,
};

var min = 1, max = 5;

var positionX = 1, positionY = 1;

var colorBall = "black";

createBall();

function createBall() {
  ctx.beginPath();
  ctx.arc( ball.x, ball.y, 8, 0, 2 * Math.PI);  
  ctx.fillStyle = colorBall;
  ctx.fill();
}

function gravity() {
  ball.y += positionY;
}

function gera_cor(){
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++ ) {
  //E concatena à variável cor
      cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function clearArea() {
  ctx.clearRect( 0, 0, canvas.width, canvas.height );
}

function recursiva() {
  ball.x += positionX;  
}

function borderColider() {
  if( ball.x >= 445 ) {
    positionX = -positionX;
  } else if( ball.x <= 10 ) {
    positionX = -positionX;
  } 

  if( ball.y <= 5) {
    positionY = -positionY;
  } else if( ball.y >= 445 ) {
    positionY = -positionY;
  }

  if( ball.x >= 445 || ball.x <= 10 || ball.y <= 5 || ball.y >= 445 ) {
    colorBall= gera_cor();
  }
}


setInterval( function() {
  clearArea();
  createBall();
  borderColider();
  recursiva();
  gravity();
}, 1);