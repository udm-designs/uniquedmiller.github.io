// 1. Project Navigation
$(document).ready(function() {
    // Event listener using event delegation for all li elements under #p-menu
    $('#p-menu').on("click", ".libtn", function() {
      // Remove 'active' class from all li elements
      $('#p-menu .libtn').removeClass('active');
  
      // Add 'active' class to the clicked li element
      $(this).addClass('active');
  
      // Toggle corresponding accordion section
      var id = $(this).attr('id').slice(0, -3); // Extract id without 'btn'
      $('.accord').removeClass('active');
      $('#' + id + 'p').addClass('active');
    });
});

// 2. MODALS
// Contact Form Modal
$(document).ready(function() {
    // Event listener using event delegation for all li elements under #p-menu
    $('#close').on("click", function() {
      // Remove 'active' class from all li elements
      $('#contactform').removeClass('show');
    });
    $('.contactbtn').on("click", function() {
        // Remove 'active' class from all li elements
        $('#contactform').addClass('show');
    });
});

// // navigation
// let hamburger = document.querySelector('#hamburger');
// let menu = document.querySelector('#mainnav');
// let anchors = document.querySelector('#mainnav ul');

// hamburger.addEventListener('click', function() {
//   // hamburger.classList.toggle('isactive');
//   menu.classList.toggle('mobstyle');
// });
// anchors.addEventListener('click', function() {
//   // hamburger.classList.toggle('isactive');
//   menu.classList.remove('mobstyle');
// });