

//red team
var goalie = {
    x: 20,
    y: 135,
    width: 50,
    height: 50,
    color: 'rgba(0, 0, 200, 0)',
}
var stickR1 = {
    x: 170, //STICKS
    y: 75,
    width: 50,
    height: 150,
    test:"rgba(0, 0, 200, 0)",
    color: 'rgba(0, 0, 200, 0)',
    height1: 50,


}
var stickR2 = {
    x: 350,
    y: 25,
    width: 35,
    height: 280,
    test: "rgba(0, 0, 200, 0)",
    color: 'rgba(0, 0, 200, 0)',
    height1: 35,
}
var stickR3 = {
    x: 550,
    y: 35,
    width: 50,
    height: 230,
    test: "rgba(0, 0, 200, 0)",
    color: "rgba(0, 0, 200, 0)",
    height1: 50,
}
//blue team
var goalieB = {
    x: 740,
    y: 135,
    width: 50,
    height: 50,
    color: 'rgba(0, 0, 200, 0)',
}
var stickB1 = {
    x: 620, //STICKS
    y: 75,
    width: 40,
    height: 150,
    test: 'rgba(0, 0, 200, 0)',
    color: 'rgba(0, 0, 200, 0)',
    height1: 40,
}
var stickB2 = {
  x: 450, //STICKS
  y: 25,
  width: 35,
  height: 280,
  test: 'rgba(0, 0, 200, 0)',
  color: 'rgba(0, 0, 200, 0)',
  height1: 35,
}
var stickB3 = {
  x: 260, //STICKS
  y: 35,
  width: 40,
  height: 230,
  test: 'rgba(0, 0, 200, 0)',
  color: 'rgba(0, 0, 200, 0)',
  height1: 40,
}
var distance = 30;

function keysPlayer() {
    document.body.onkeydown = function(event) {

        if (keys[81] && goalie.y > 0) {
            //goalie up q
            goalie.y -= distance;

        }
        if (keys[65] && goalie.y < canvas.height-goalie.height) { // player 1 defenders down S
            // goalie down a
            goalie.y += distance;
        }
        if (keys[87] && stickR1.y > 0 ) {
            // defendersR up w
            stickR1.y -= distance;
        }
        if (keys[83] && stickR1.y < canvas.height- stickR1.height*1.1) {
            //defendersR down s
            stickR1.y += distance;

        }
        if (keys[69] && stickR2.y > 10) {
            //midR up e
            stickR2.y -= distance;
        }
        if (keys[68] && stickR2.y <canvas.height - stickR2.height*1.08) {
            //midR down d
            stickR2.y += distance;
        }
        if (keys[87] && stickR3.y > 0) {
            //strikerR up r
            stickR3.y -= distance;
        }
        if (keys[83] && stickR3.y <canvas.height - stickR3.height*1.1) {
            //strikerR down f
            stickR3.y += distance;
        }
          if (keys[76] && goalieB.y > 0) {
              //goalieB  up  j
              goalieB.y -= distance;
          }
          if (keys[190] && goalieB.y < canvas.height-goalieB.height*1.2) { // player 1 defenders down S
              //goalieB down m
              goalieB.y += distance;
          }
          if (keys[74] && stickB1.y > 0 ) {
              // defendersB up k
              stickB1.y -= distance;

          }
          if (keys[77] && stickB1.y < canvas.height- stickB1.height*1.1) {
              //defendersB down ,
              stickB1.y += distance;

          }
          if (keys[75] && stickB2.y > 10) {
              // midB up l
              stickB2.y -= distance;
          }
          if (keys[188] && stickB2.y <canvas.height - stickB2.height*1.05) {
              //midB down .
              stickB2.y += distance;
          }
          if (keys[74] && stickB3.y > 0) {
              //strikerB up ;
              stickB3.y -= distance;
          }
          if (keys[77] && stickB3.y <canvas.height - stickB3.height*1.1) {
              //strikerB down;
              stickB3.y += distance;
          }
          if (keys[80]){
            if (!gamePaused) {
          ballSpeedX = 0;
          ballSpeedY = 0;
           gamePaused = true;
 } else if (gamePaused) {
   ballSpeedY = 5;
   ballSpeedX = 5;
   gamePaused = false;

          }
      }
    }
  }

function paddleLeftSide() {
    canvasContext.fillStyle = goalieB.color;
    canvasContext.fillRect(goalieB.x, goalieB.y, goalieB.width, goalieB.height)
}

function rowB1() {
    canvasContext.fillStyle = stickB1.test; //STICKS
    canvasContext.fillRect(stickB1.x, stickB1.y, stickB1.width, stickB1.height);
    canvasContext.fillStyle = stickB1.color;
    canvasContext.fillRect(stickB1.x,stickB1.y+120, stickB1.width, stickB1.height1);
    canvasContext.fillStyle = stickB1.color;
    canvasContext.fillRect(stickB1.x, stickB1.y, stickB1.width, stickB1.height1);
}

function rowB2() {
    canvasContext.fillStyle = stickB2.test; //STICKS
    canvasContext.fillRect(stickB2.x, stickB2.y, stickB2.width, stickB2.height);
    canvasContext.fillStyle = stickB2.color;
    canvasContext.fillRect(stickB2.x, stickB2.y, stickB2.width, stickB2.height1);
    canvasContext.fillStyle = stickB2.color;
    canvasContext.fillRect(stickB2.x, stickB2.y + 65, stickB2.width, stickB2.height1);
    canvasContext.fillStyle = stickB2.color;
    canvasContext.fillRect(stickB2.x, stickB2.y +130, stickB2.width, stickB2.height1);
    canvasContext.fillStyle = stickB2.color;
    canvasContext.fillRect(stickB2.x, stickB2.y +195, stickB2.width, stickB2.height1);
    canvasContext.fillStyle = stickB2.color;
    canvasContext.fillRect(stickB2.x, stickB2.y +260, stickB2.width, stickB2.height1);
}

function rowB3() {
    canvasContext.fillStyle = stickB3.test; //STICKS
    canvasContext.fillRect(stickB3.x, stickB3.y, stickB3.width, stickB3.height);
    canvasContext.fillStyle = stickB3.color;
    canvasContext.fillRect(stickB3.x, stickB3.y + 100, stickB3.width, stickB3.height1);
    canvasContext.fillStyle = stickB3.color;
    canvasContext.fillRect(stickB3.x, stickB3.y + 200, stickB3.width, stickB3.height1);
    canvasContext.fillStyle = stickB3.color;
    canvasContext.fillRect(stickB3.x, stickB3.y, stickB3.width, stickB3.height1);
}

function da() { //for draw
    paddleLeftSide();
    row1();
    row2();
    row3();
    paddleRightSide();
    rowB1();
    rowB2();
    rowB3();
}

function paddleRightSide() {
    canvasContext.fillStyle = goalie.color;
    canvasContext.fillRect(goalie.x, goalie.y, goalie.width, goalie.height);
}

function row1() {
    canvasContext.fillStyle = stickR1.test; //STICKS
    canvasContext.fillRect(stickR1.x, stickR1.y, stickR1.width, stickR1.height);
    canvasContext.fillStyle = stickR1.color;
    canvasContext.fillRect(stickR1.x, stickR1.y + 120, stickR1.width, stickR1.height1);
    canvasContext.fillStyle = stickR1.color;
    canvasContext.fillRect(stickR1.x, stickR1.y, stickR1.width, stickR1.height1);
};

function row2() {
    canvasContext.fillStyle = stickR2.test; //STICKS
    canvasContext.fillRect(stickR2.x, stickR2.y, stickR2.width, stickR2.height);
    canvasContext.fillStyle = stickR2.color;
    canvasContext.fillRect(stickR2.x, stickR2.y, stickR2.width, stickR2.height1);
    canvasContext.fillStyle = stickR2.color;
    canvasContext.fillRect(stickR2.x, stickR2.y + 65, stickR2.width, stickR2.height1);
    canvasContext.fillStyle = stickR2.color;
    canvasContext.fillRect(stickR2.x, stickR2.y + 130, stickR2.width, stickR2.height1);
    canvasContext.fillStyle = stickR2.color;
    canvasContext.fillRect(stickR2.x, stickR2.y + 195, stickR2.width, stickR2.height1);
    canvasContext.fillStyle = stickR2.color;
    canvasContext.fillRect(stickR2.x, stickR2.y + 260, stickR2.width, stickR2.height1);
}

function row3() {
    canvasContext.fillStyle = stickR3.test; //STICKS
    canvasContext.fillRect(stickR3.x, stickR3.y, stickR3.width, stickR3.height);
    canvasContext.fillStyle = stickR3.color;
    canvasContext.fillRect(stickR3.x, stickR3.y + 200, stickR3.width, stickR3.height1);
    canvasContext.fillStyle = stickR3.color;
    canvasContext.fillRect(stickR3.x, stickR3.y, stickR3.width, stickR3.height1);
    canvasContext.fillStyle = stickR3.color;
    canvasContext.fillRect(stickR3.x, stickR3.y + 100, stickR3.width, stickR3.height1);
}
