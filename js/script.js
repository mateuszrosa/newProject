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
  let newForm = $(`
    <div class='form'>
      <label>Question</label>
      <input class='input'/>
      <label>Type</label>
      <select>
        <option selected disabled>Yes/No</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class='addsubinput'>Add Sub-Input</div>
      <div class='delete'>Delete</div>
    </div>`);
  $('.addbtn').after(newForm);
})

})
