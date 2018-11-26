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
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// LOGIN STUFF
