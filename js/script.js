$(document).ready(function(){


$('.create').on('click', function() {
  if($('.create').css === '') {
      $(this).css('background-color', 'grey');
  } else {
    $(this).css('background-color', '');
  }

});

$('.preview').on('click', function() {
console.log('click')
});

$('.export1').on('click', function() {
console.log('click')
});

})
