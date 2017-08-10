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

let newForm = $(`<form><input/></form>`);

$('.addbtn').on('click', function() {
  let newForm = $(`<input/>`);
  $('.first').prepend(newForm);
})

})
