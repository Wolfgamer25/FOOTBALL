var canvas;
var canvasContext;
var ballX = 400;
var ballSpeedX = 5;
var ballY = 175;
var ballSpeedY = 5;
window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawEveryThing();
  var framesPerSecond = 30;
setInterval(updateAll, 1000/framesPerSecond); //speed of the ball

}
function updateAll(){ //updates functions fps
  drawEveryThing();
  moveEveryThing();
      document.body.onkeydown=function(event){
    switch (event.keyCode){
      case 81:  //player 1 defenders up Q
        stickR1.y-=distance;
        stickR1.y1 -= distance;
        break;
        case 83: // player 1 defenders down S
        stickR1.y +=distance;
        stickR1.y1 += distance;
          break;
          case 87: // player 1 middle up W
          stickR2.y -= distance;
          break;
          case 68: //player 1 middle down d
          stickR2.y += distance;
          break;

    }
  }
}


function ballReset(){
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}
function drawEveryThing(){
  //draws the soccerField
  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  paddleRightSide();
  drawCircle(ballX, ballY, 9, 'white');
  da();


}
function drawCircle(centerX, centerY, radius, fillColor){
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function moveEveryThing(){
  ballX+= ballSpeedX;  //evertime the screen update the ball is going get updated
  ballY+= ballSpeedY;
  if(ballY < 0){   // top canvas bounce
    ballSpeedY *= -1;
  }
  if(ballY > canvas.height){ //bottom canvas bounce
    ballSpeedY *= -1;
  }
  if(ballX < 0){ //left canvas bounce
    ballSpeedX *= -1; //ballReset();
  }
  if(ballX > canvas.width){
    ballSpeedX *= -1; //ballReset();
  }
}
function keysPlayer1(){

}
function keysPlayer2(){

}
