// $(document).ready(function() {
//   // Event listener using event delegation for all li elements under #p-menu
//   $('#p-menu').on("click", "li", function() {
//     // Remove 'active' class from all li elements
//     $('#p-menu li').removeClass('active');

//     // Add 'active' class to the clicked li element
//     $(this).addClass('active');

//     // Toggle corresponding accordion section
//     var id = $(this).attr('id').slice(0, -3); // Extract id without 'btn'
//     $('.accord').removeClass('active');
//     $('#' + id + 'p').addClass('active');
//   });
// });