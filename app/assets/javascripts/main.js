$(document).scroll(function() {
  $('.section_2').css('margin-top', ($(window).height() - 50));
  $('.section_3').css('margin-top', ($(window).height() * 2) - 50);
  // $(".menu_item").css("height", ($(window).height()/4));

});


// $('#container').masonry({
//   itemSelector: '.menu_item',
//   // set columnWidth a fraction of the container width
//   columnWidth: function( containerWidth ) {
//     return containerWidth / 1;
//   }
// });

// $('#trigger').waypoint(function() {
//   alert('Basic example callback triggered.');
// });