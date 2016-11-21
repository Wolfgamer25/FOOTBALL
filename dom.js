
function scoreP1(){
  $('#player1' ).text(name1.value + ': '+ scoreR);
}
function scoreP2(){
  $('#player2').text(name2.value + ': ' + scoreB);
}
$('.winner').hide();
$('.hidden').hide();
function show(){
  $('.hidden').show()
     ballSpeedX = 5;
     ballSpeedY = 5;
     $('.goaway').hide();
     $('.winner').hide();


}
function winner(){
  if(scoreR === 3){
    $('.hidden').hide();
    ballReset();
    ballSpeedX = 0;
    ballSpeedY = 0;
    $('.winner').show();
    $('#win').text( 'RED TEAM WINS');
    $('#win').css('color', 'red');
    scoreB = 0;
    scoreR = 0;

  }else if(scoreB === 3){
      $('.hidden').hide();
      ballReset();
      ballSpeedX = 0;
      ballSpeedY = 0;
      $('.winner').show();
      $('#win').text( 'BLUE TEAM WINS');
      $('#win').css('color', 'blue');
      scoreB = 0;
      scoreR = 0;
    }

  }
