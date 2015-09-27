$(document).ready(function(){
  bindNameValidation();
  bindEmailValidation();
  bindEnterKey();
});

function bindEmailValidation() {
  $('#followerEmail').keyup(function(){
    var email = $(this).val();
    if (validateEmail(email)) {
      $(this).css({border: '1px solid rgb(51,255,51)'});
    } else {
      $(this).css({border: '1px solid rgb(255,0,0)'});
    }
    checkSubmit();
  })
};

function bindNameValidation() {
  $('#followerName').keyup(function(){
    var name = $(this).val();
    if (name.length > 0) {
      $(this).css({border: '1px solid rgb(51,255,51)'});
    } else {
      $(this).css({border: '1px solid rgb(255,0,0)'});
    }
    checkSubmit();
  })
};

function bindEnterKey() {
  $('#followerName').on('keyup', function(e) {
    if (e.which == 13) {
      resetForm();
    }
  })
  $('#followerEmail').on('keyup', function(e){
    if (e.which == 13) {
      resetForm();
    }
  })
}

function resetForm() {
  $('#followerName').val('');
  $('#followerName').css({border: ''});
  $('#followerEmail').val('');
  $('#followerEmail').css({border: ''});
  $('#createFollower').attr('disabled', 'disabled');
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function checkSubmit() {
  if ( $('#followerName').val().length > 0 && validateEmail($('#followerEmail').val()) ) {
    $('#createFollower').removeAttr('disabled');
  } else {
    $('#createFollower').attr('disabled', 'disabled');
  }
}
