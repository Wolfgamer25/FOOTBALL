var canvas;
var canvasContext;
var ballX = 400;
var ballSpeedX = 5;
var ballY = 175;
var ballSpeedY = 5;
var keys = [];
window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEveryThing();
    var framesPerSecond = 40;
    setInterval(updateAll, 1000 / framesPerSecond); //speed of the ball

}

function updateAll() { //updates functions fps
    drawEveryThing();
    moveEveryThing();
    keysPlayer();



}



function ballReset() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function drawEveryThing() {
    //draws the soccerField
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    paddleRightSide();
    drawCircle(ballX, ballY, 9, 'white');
    da();


}

function drawCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function moveEveryThing() {
    ballX += ballSpeedX; //evertime the screen update the ball is going get updated
    ballY += ballSpeedY;
    box();

}


function box(){
  if (ballY < 0) { // top canvas bounce
      ballSpeedY *= -1;
  }
  if (ballY > canvas.height) { //bottom canvas bounce
      ballSpeedY *= -1;
  }
  if (ballX < 0) { //left canvas bounce
      ballSpeedX *= -1; //ballReset();
  }
  if (ballX > canvas.width) {
      ballSpeedX *= -1; //ballReset();
  }



}
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
