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
/*
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

*/
//Star Rating
$(document).ready(function() {
  // Check Radio-box
  $(".rating input:radio").attr("checked", false);

  $('.rating input').click(function() {
    $(".rating span").removeClass('checked');
    $(this).parent().addClass('checked');
  });

  $('input:radio').change(
    function() {
      var userRating = this.value;
      alert(userRating);
    });
});



// homepage slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//single page tab

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
