if(screen.width < 1189) { 
  // Bye bye.
} else {
  var nav = document.querySelector('nav');

window.onscroll = function() {
  windowScroll();
};

function windowScroll() {
  getElementById("mainnav").classList.toggle("after-scroll", nav.scrollTop > 800 || document.documentElement.scrollTop > 800);
}
}