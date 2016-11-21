
function scoreP1(){
  $('#player1' ).text(name1.value + ': '+ scoreR);
}
function scoreP2(){
  $('#player2').text(name2.value + ': ' + scoreB);
}

$('.hidden').hide();
function show(){
  $('.hidden').show()
     ballSpeedX = 5;
     ballSpeedY = 5;
     $('.goaway').hide();


}
