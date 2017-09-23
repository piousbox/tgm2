
/**
 * map _vp_
 */
var isDragging = false;
var oldX, oldY;
var touchDownX, touchDownY;
$('#worldMap').mousedown(function (e) {
  $('#worldMap').css('cursor', 'pointer');
  oldX = parseInt($('#worldMap').css('background-position').split(' ')[0])
  oldY = parseInt($('#worldMap').css('background-position').split(' ')[1])

  console.log('old x, y:', oldX, oldY);

  touchDownX = e.offsetX;
  touchDownY = e.offsetY;

  isDragging = true;
});
$('#worldMap').mouseup(function (e) {
  isDragging = false;
  $('#worldMap').css('cursor', 'auto');
});
$('#worldMap').mousemove(function (e) {
  if (isDragging) {
    var deltaX = touchDownX - e.offsetX;
    var deltaY = touchDownY - e.offsetY;

    var newX = - (deltaX - oldX );
    var newY = - (deltaY - oldY );

    console.log('+++ +++ new x, y:', newX, newY);

    $('#worldMap').css( 'background-position', ""+newX+"px "+newY+"px " );
  }
});

