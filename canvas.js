var pokeball = document.createElement("img");
var pokeballLoaded = false;
var chariazard = document.createElement("img");
var chariazardLoaded = false;
var charmander = document.createElement("img");
var charmanderLoaded = false;
var charmeleon = document.createElement("img");
var charmeleonLoaded = false;
var canvas;
var canvasContext;
var ballX = 400;
var ballSpeedX = 5;
var ballY = 175;
var ballSpeedY = 5;
var keys = [];
var paddley = goalie.y;
window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEveryThing();
    var framesPerSecond = 60;
    setInterval(updateAll, 1000 / framesPerSecond); //speed of the ball
pokeball.onload = function(){
  pokeballLoaded = true;
}
pokeball.src ="pics/imageedit_12_4119867470.png";
chariazard.onload = function(){
  chariazardLoaded = true;
}
chariazard.src = "pics/goalie redteam_burned.png"

}
charmander.onload = function(){
  charmanderLoaded = true;
}
charmander.src = "pics/soccer red team_burned.png";
charmeleon.onload = function(){
  charmeleonLoaded = true;
}
charmeleon.src = "pics/red team defenders _burned.png"
function updateAll() { //updates functions fps
    drawEveryThing();
    moveEveryThing();
    keysPlayer();



}



function ballReset() {
    ballSpeedX = -ballSpeedX
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

function drawEveryThing() {
    //draws the soccerField
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    paddleRightSide();
    // drawCircle(ballX, ballY, 9, 'white');
    da();
    if(pokeballLoaded){
      canvasContext.drawImage(pokeball,
      ballX, ballY, 20,20);
    }
    if(chariazardLoaded){
      canvasContext.drawImage(chariazard,
      goalie.x, goalie.y, goalie.width, goalie.height)
    }
    if(charmanderLoaded){
      canvasContext.drawImage(charmander,
      stickR2.x, stickR2.y, stickR2.width, stickR2.height1)
    }
    if(charmanderLoaded){
      canvasContext.drawImage(charmander,
      stickR2.x, stickR2.y + 65, stickR2.width, stickR2.height1)
    }
    if(charmanderLoaded){
      canvasContext.drawImage(charmander,
      stickR2.x, stickR2.y + 130, stickR2.width, stickR2.height1)
    }
    if(charmanderLoaded){
      canvasContext.drawImage(charmander,
      stickR2.x, stickR2.y + 195, stickR2.width, stickR2.height1)
    }if(charmanderLoaded){
      canvasContext.drawImage(charmander,
      stickR2.x, stickR2.y + 260, stickR2.width, stickR2.height1)
    }if(charmeleonLoaded){
      canvasContext.drawImage(charmeleon,
      stickR1.x, stickR1.y, stickR1.width, stickR1.height1)
    }if(charmeleonLoaded){
      canvasContext.drawImage(charmeleon,
      stickR1.x, stickR1.y+120, stickR1.width, stickR1.height1)
    }if(charmeleonLoaded){
      canvasContext.drawImage(charmeleon,
      stickR3.x, stickR3.y, stickR3.width, stickR3.height1)
    }if(charmeleonLoaded){
      canvasContext.drawImage(charmeleon,
      stickR3.x, stickR3.y+100, stickR3.width, stickR3.height1)
    }if(charmeleonLoaded){
      canvasContext.drawImage(charmeleon,
      stickR3.x, stickR3.y+200, stickR3.width, stickR3.height1)
    }

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
    if (ballX === goalie.x){
      if(ballY > goalie.y &&
        ballY < goalie.y+goalie.height){
        ballSpeedX = -ballSpeedX
         }
     }
     if (ballX === stickR1.x){
       if(ballY > stickR1.y &&
       ballY < stickR1.y+stickR1.height1){
         ballSpeedX = -ballSpeedX;
       }
       if(ballY > stickR1.y+120 &&
       ballY < stickR1.y+120+stickR1.height1){
         ballSpeedX = -ballSpeedX;
       }
     }
     if(ballX === stickR2.x){
       if(ballY >stickR2.y &&
       ballY < stickR2.y+ stickR2.height1){
         ballSpeedX = -ballSpeedX;
       }
       if(ballY > stickR2.y +65 &&
       ballY <stickR2.y +65 + stickR2.height1){
         ballSpeedX = - ballSpeedX;
       }
       if(ballY > stickR2.y+ 130 &&
       ballY <stickR2.y +130 + stickR2.height1){
         ballSpeedX = - ballSpeedX;
       }
       if(ballY > stickR2.y + 195 &&
       ballY <stickR2.y +195 + stickR2.height1){
         ballSpeedX = - ballSpeedX;
       }
       if(ballY > stickR2.y+260 &&
       ballY <stickR2.y +260 + stickR2.height1){
         ballSpeedX = - ballSpeedX;
       }
     }
     if(ballX === stickR3.x){
       if(ballY > stickR3.y &&
       ballY < stickR3.y+stickR3.height1 ){
         ballSpeedX = -ballSpeedX
       }
       if(ballY >stickR3.y+ 100 &&
       ballY < stickR3.y+ 100 + stickR3.height1 ){
         ballSpeedX = -ballSpeedX;
       }
       if(ballY >stickR3.y+ 200 &&
       ballY < stickR3.y+ 200 + stickR3.height1 ){
         ballSpeedX = -ballSpeedX;
       }
     }


}





function box(){
  if (ballY < 0) { // top canvas bounce
      ballSpeedY *= -1;
      console.log('top')
  }
  if (ballY > canvas.height) { //bottom canvas bounce
      ballSpeedY *= -1;
  }
  if (ballX < 0) { //left canvas bounce
      // ballReset();
      ballSpeedX *= -1; //ballReset();
  }
  if (ballX > canvas.width) {
      // ballReset();
     ballSpeedX *= -1; //ballReset();
  }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
