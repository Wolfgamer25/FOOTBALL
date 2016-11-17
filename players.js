var goalie = {
  x:20,
  y:135,
  width:20,
  height:30,
  color:'red',
}
var stickR1 = {
  x: 170,    //STICKS
  y:75,
  width:20,
  height:150,
  test:'white',
  y1:195,
  color:'red',
  height1:30,


}
var stickR2 = {
  x:350,
  y:25,
  width:20,
  height: 280,
  test:'white',
  color: 'red',
  height1: 20,
}
var stickR3 = {
  x:550,
  y:35,
  width:20,
  height: 230,
  test:'white',
  color: 'red',
  height1: 30,
}
var distance = 20;



function paddleLeftSide(){
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(770, 135, 20, 30)}
  function rowB1(){
  canvasContext.fillStyle = 'white';     //STICKS
  canvasContext.fillRect(620,75, 20, 150);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(620, 195, 20, 30);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(620, 75, 20, 30);
} function rowB2(){
  canvasContext.fillStyle = 'white';     //STICKS
  canvasContext.fillRect(450,25, 20, 280);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(450, 25, 20, 20);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(450, 90, 20, 20);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(450, 155, 20, 20);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(450, 220, 20, 20);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(450, 285, 20, 20);
} function rowB3(){
  canvasContext.fillStyle = 'white';     //STICKS
  canvasContext.fillRect(260,35, 20, 230);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(260, 135, 20, 30);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(260, 235, 20, 30);
  canvasContext.fillStyle = 'blue';
  canvasContext.fillRect(260, 35, 20, 30);
}
// var player1 = {
// goal:paddleLeftSide,
// defense:row1(),
// mid:row2(),
// striker:row3
// }
function da(){ //for draw
  paddleLeftSide();
  row1();
  row2();
  row3();
  paddleRightSide();
  rowB1();
  rowB2();
  rowB3();
}
function paddleRightSide(){
  canvasContext.fillStyle = goalie.color;
  canvasContext.fillRect(goalie.x, goalie.y, goalie.width, goalie.height);
}
function row1(){
  canvasContext.fillStyle = stickR1.test;     //STICKS
  canvasContext.fillRect(stickR1.x,stickR1.y, stickR1.width, stickR1.height);
  canvasContext.fillStyle = stickR1.color;
  canvasContext.fillRect(stickR1.x, stickR1.y1, stickR1.width, stickR1.height1);
  canvasContext.fillStyle = stickR1.color;
  canvasContext.fillRect(stickR1.x,stickR1.y,stickR1.width,stickR1.height1);
};

function row2(){
  canvasContext.fillStyle = stickR2.test;     //STICKS
  canvasContext.fillRect(stickR2.x,stickR2.y, stickR2.width, stickR2.height);
  canvasContext.fillStyle = stickR2.color;
  canvasContext.fillRect(stickR2.x, stickR2.y, stickR2.width, stickR2.height1);
  canvasContext.fillStyle = stickR2.color;
  canvasContext.fillRect(stickR2.x, stickR2.y+65, stickR2.width, stickR2.height1);
  canvasContext.fillStyle = stickR2.color;
  canvasContext.fillRect(stickR2.x, stickR2.y+130, stickR2.width, stickR2.height1);
  canvasContext.fillStyle = stickR2.color;
  canvasContext.fillRect(stickR2.x, stickR2.y+195, stickR2.width, stickR2.height1);
  canvasContext.fillStyle = stickR2.color;
  canvasContext.fillRect(stickR2.x, stickR2.y+260, stickR2.width, stickR2.height1);
} function row3(){
  canvasContext.fillStyle = stickR3.test;     //STICKS
  canvasContext.fillRect(stickR3.x,stickR3.y, stickR3.width, stickR3.height);
  canvasContext.fillStyle = stickR3.color;
  canvasContext.fillRect(stickR3.x, stickR3.y+200, stickR3.width, stickR3.height1);
  canvasContext.fillStyle = stickR3.color;
  canvasContext.fillRect(stickR3.x, stickR3.y, stickR3.width, stickR3.height1);
  canvasContext.fillStyle = stickR3.color;
  canvasContext.fillRect(stickR3.x, stickR3.y + 100, stickR3.width, stickR3.height1);
}
