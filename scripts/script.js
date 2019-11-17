// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!

$('.slideshow').square1({
  animation: 'slide',
  transition_time: 3000,
  prev_next_nav: 'none',
  dots_nav: 'inside',
});

$('.slideshow-brew').square1({
  animation: 'slide',
  transition_time: 3000,
  prev_next_nav: 'none',
  dots_nav: 'inside',
});

var acc = document.getElementsByClassName("accordion");
  var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// End of Your Code . Don't delete that line below!!
});