$(document).ready(function(){

$('.create').on('click', function() {
  $(this).toggleClass('color');
    if($('.first').css('display') == 'block') {
      $('.first').css('display', 'none');
    } else {
      $('.first').css('display', 'block');
    }
})

})
