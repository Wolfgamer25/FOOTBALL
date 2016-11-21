var pokeball = document.createElement("img");
var pokeballLoaded = false;
var chariazard = document.createElement("img");
var chariazardLoaded = false;
var charmander = document.createElement("img");
var charmanderLoaded = false;
var charmeleon = document.createElement("img");
var charmeleonLoaded = false;
var squirtle = document.createElement("img");
var squirtleLoaded = false;
var wartortle = document.createElement("img");
var wartortleLoaded = false;
var blastoise = document.createElement("img");
var blastoiseLoaded = false;
var canvasBackground = document.createElement("img")
var canvasBackgroundLoaded = false;
var canvas;
var gamePaused = false;
var canvasContext;
var ballX = 400;
var ballSpeedX = 5;
var ballY = 175;
var ballSpeedY = 5;
var keys = [];
var paddley = goalie.y;
window.onload = function() {
    canvasBackground.onload = function() {
        canvasBackgroundLoaded = true;
    }
    canvasBackground.src = "pics/147950214579530.gif"
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEveryThing();
    var framesPerSecond = 60;
    setInterval(updateAll, 1000 / framesPerSecond); //speed of the ball
    pokeball.onload = function() {
        pokeballLoaded = true;
    }
    pokeball.src = "pics/imageedit_12_4119867470.png";
    chariazard.onload = function() {
        chariazardLoaded = true;
    }
    chariazard.src = "pics/goalie redteam_burned.png"

}
charmander.onload = function() {
    charmanderLoaded = true;
}
charmander.src = "pics/soccer red team_burned.png";
charmeleon.onload = function() {
    charmeleonLoaded = true;
}
charmeleon.src = "pics/red team defenders _burned.png"
squirtle.onload = function() {
    squirtleLoaded = true;
}
squirtle.src = "pics/soccer team blue_burned.png"
wartortle.onload = function() {
    wartortleLoaded = true;
}
wartortle.src = "pics/soccer team blue copy_burned.png"
blastoise.onload = function() {
    blastoiseLoaded = true;
}
blastoise.src = "pics/soccer team blue copy 2_burned.png"

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
    if (canvasBackgroundLoaded) {
        canvasContext.drawImage(canvasBackground, -75, -5, 950, 360)
    }
    //draws the soccerField
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    paddleRightSide();
    // drawCircle(ballX, ballY, 9, 'white');
    da();

    if (pokeballLoaded) {
        canvasContext.drawImage(pokeball,
            ballX, ballY, 20, 20);
    }
    if (chariazardLoaded) {
        canvasContext.drawImage(chariazard,
            goalie.x, goalie.y, goalie.width, goalie.height)
    }
    if (charmanderLoaded) {
        canvasContext.drawImage(charmander,
            stickR2.x, stickR2.y, stickR2.width, stickR2.height1)
    }
    if (charmanderLoaded) {
        canvasContext.drawImage(charmander,
            stickR2.x, stickR2.y + 65, stickR2.width, stickR2.height1)
    }
    if (charmanderLoaded) {
        canvasContext.drawImage(charmander,
            stickR2.x, stickR2.y + 130, stickR2.width, stickR2.height1)
    }
    if (charmanderLoaded) {
        canvasContext.drawImage(charmander,
            stickR2.x, stickR2.y + 195, stickR2.width, stickR2.height1)
    }
    if (charmanderLoaded) {
        canvasContext.drawImage(charmander,
            stickR2.x, stickR2.y + 260, stickR2.width, stickR2.height1)
    }
    if (charmeleonLoaded) {
        canvasContext.drawImage(charmeleon,
            stickR1.x, stickR1.y, stickR1.width, stickR1.height1)
    }
    if (charmeleonLoaded) {
        canvasContext.drawImage(charmeleon,
            stickR1.x, stickR1.y + 120, stickR1.width, stickR1.height1)
    }
    if (charmeleonLoaded) {
        canvasContext.drawImage(charmeleon,
            stickR3.x, stickR3.y, stickR3.width, stickR3.height1)
    }
    if (charmeleonLoaded) {
        canvasContext.drawImage(charmeleon,
            stickR3.x, stickR3.y + 100, stickR3.width, stickR3.height1)
    }
    if (charmeleonLoaded) {
        canvasContext.drawImage(charmeleon,
            stickR3.x, stickR3.y + 200, stickR3.width, stickR3.height1)
    }
    if (squirtleLoaded) {
        canvasContext.drawImage(squirtle,
            stickB2.x, stickB2.y, stickB2.width, stickB2.height1)
    }
    if (squirtleLoaded) {
        canvasContext.drawImage(squirtle,
            stickB2.x, stickB2.y + 65, stickB2.width, stickB2.height1)
    }
    if (squirtleLoaded) {
        canvasContext.drawImage(squirtle,
            stickB2.x, stickB2.y + 130, stickB2.width, stickB2.height1)
    }
    if (squirtleLoaded) {
        canvasContext.drawImage(squirtle,
            stickB2.x, stickB2.y + 195, stickB2.width, stickB2.height1)
    }
    if (squirtleLoaded) {
        canvasContext.drawImage(squirtle,
            stickB2.x, stickB2.y + 260, stickB2.width, stickB2.height1)
    }
    if (wartortleLoaded) {
        canvasContext.drawImage(wartortle,
            stickB1.x, stickB1.y, stickB1.width, stickB1.height1)
    }
    if (wartortleLoaded) {
        canvasContext.drawImage(wartortle,
            stickB1.x, stickB1.y + 120, stickB1.width, stickB1.height1)
    }
    if (wartortleLoaded) {
        canvasContext.drawImage(wartortle,
            stickB3.x, stickB3.y, stickB3.width, stickB3.height1)
    }
    if (wartortleLoaded) {
        canvasContext.drawImage(wartortle,
            stickB3.x, stickB3.y + 100, stickB3.width, stickB3.height1)
    }
    if (wartortleLoaded) {
        canvasContext.drawImage(wartortle,
            stickB3.x, stickB3.y + 200, stickB3.width, stickB3.height1)
    }
    if (blastoiseLoaded) {
        canvasContext.drawImage(blastoise,
            goalieB.x, goalieB.y, goalieB.width, goalieB.height)
    }
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(1,canvas.height/2 -60, 10, 120  )
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(canvas.width-10,canvas.height/2 -60, 10, 120  )
}
// canvasContext.fillStyle = 'white';
// canvasContext.fillRect(1,canvas.height/2 +60, 10, 120  )
// function drawCircle(centerX, centerY, radius, fillColor) {
//     canvasContext.fillStyle = fillColor;
//     canvasContext.beginPath();
//     canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
//     canvasContext.fill();
// }

function moveEveryThing() {
    ballX += ballSpeedX; //evertime the screen update the ball is going get updated
    ballY += ballSpeedY;
    box();
    if (ballX === goalie.x) {
        if (ballY > goalie.y &&
            ballY < goalie.y + goalie.height) {
            ballSpeedX = -ballSpeedX
        }
    }
    if (ballX === stickR1.x) {
        if (ballY > stickR1.y &&
            ballY < stickR1.y + stickR1.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR1.y + 120 &&
            ballY < stickR1.y + 120 + stickR1.height1) {
            ballSpeedX = -ballSpeedX;
        }
    }
    if (ballX === stickR2.x) {
        if (ballY > stickR2.y &&
            ballY < stickR2.y + stickR2.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR2.y + 65 &&
            ballY < stickR2.y + 65 + stickR2.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR2.y + 130 &&
            ballY < stickR2.y + 130 + stickR2.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR2.y + 195 &&
            ballY < stickR2.y + 195 + stickR2.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR2.y + 260 &&
            ballY < stickR2.y + 260 + stickR2.height1) {
            ballSpeedX = -ballSpeedX;
        }
    }
    if (ballX === stickR3.x) {
        if (ballY > stickR3.y &&
            ballY < stickR3.y + stickR3.height1) {
            ballSpeedX = -ballSpeedX
        }
        if (ballY > stickR3.y + 100 &&
            ballY < stickR3.y + 100 + stickR3.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickR3.y + 200 &&
            ballY < stickR3.y + 200 + stickR3.height1) {
            ballSpeedX = -ballSpeedX;
        }
    }
    if (ballX === goalieB.x) {
        if (ballY > goalieB.y &&
            ballY < goalieB.y + goalieB.height) {
            ballSpeedX = -ballSpeedX;
        }
    }
    if (ballX === stickB1.x) {
        if (ballY > stickB1.y &&
            ballY < stickB1.y + stickB1.height1) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY > stickB1.y + 120 &&
            ballY < stickB1.y + 120 + stickB1.height1) {
            ballSpeedX = -ballSpeedX;
        }

    }
    if (ballX === stickB2.x) {
        if (ballY > stickB2.y &&
            ballY < stickB2.y + stickB2.height1) {
            ballSpeedY = -ballSpeedY
            console.log('hit')
        }
        if (ballY > stickB2.y + 65 &&
            ballY < stickB2.y + 65 + stickB2.height1) {
            ballSpeedY = -ballSpeedY
            console.log('hit')
        }
        if (ballY > stickB2.y + 130 &&
            ballY < stickB2.y + 130 + stickB2.height1) {
            ballSpeedY = -ballSpeedY
            console.log('hit')
        }
        if (ballY > stickB2.y + 195 &&
            ballY < stickB2.y + 195 + stickB2.height1) {
            ballSpeedY = -ballSpeedY
            console.log('hit')
        }
        if (ballY > stickB2.y + 260 &&
            ballY < stickB2.y + 260 + stickB2.height1) {
            ballSpeedY = -ballSpeedY
            console.log('hit')
        }
    }


}




function box() {
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
    if (ballX < 0 && ballY < canvas.height / 2 + 60 && ballY > canvas.height / 2 - 60) {
        ballReset();
    }
    if (ballX === canvas.width) {
        // ballReset();
        ballSpeedX *= -1; //ballReset();
    }
    if (ballX === canvas.width && ballY < canvas.height / 2 + 60 && ballY > canvas.height / 2 - 60) {
        ballReset();
        console.log('huh')
    }
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
