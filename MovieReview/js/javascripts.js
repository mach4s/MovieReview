$(function() {
  function render() {
    $('.bg').removeAttr('style').css({
      width: $('body').width(),
      height: $('body').height(),
      marginLeft: -$('.box').offset().left - 11,
      marginTop: -$('.box').offset().top - 11,
      marginBottom: -$('body').height() + $('.box').offset().top + 11,
    });
  }
  render();
  // When the window resizes, or the `.box` moves/resizes, recall the `render` function.
  $(window).resize(render);
});

// LOGIN STUFF
// Get the modal
/*var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
// LOGIN STUFF

/*This Script allows people to enter by using a form that asks for a
UserID and Password*/
function pasuser(form) {

if (form.uname.value=="JavaScript") {
if (form.psw.value=="Kit") {
location="page2.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}


//Star Rating
$(document).ready(function(){
    // Check Radio-box
    $(".rating input:radio").attr("checked", false);

    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
        var userRating = this.value;
        alert(userRating);
    });
});
