$(document).ready(function(){

$('.create').on('click', function() {
  $(this).toggleClass('color');
    if($('.first').css('display') == 'block') {
      $('.first').css('display', 'none');
    } else {
      $('.first').css('display', 'block');
    }
})

$('.preview').on('click', function() {
  $(this).toggleClass('color');
})

$('.export1').on('click', function() {
  $(this).toggleClass('color');
})

$('.addbtn').on('click', function() {
  let newForm = $(`<input class='form'/>`);
  $('.addbtn').after(newForm);
})

})
