$(document).ready(function() {
  $('.section_1').css('height', $(window).height());
  $('.section_2').css('margin-top', ($(window).height()- 5));
  $('.section_2').css('width', ($(window).width()));
  $('.section_3').css('margin-top', ($(window).height() * 2) - 50);
  // $(".menu_item").css("height", ($(window).height()/4));

});

$(document).onScroll(function() {
	  $('.section_2').css('width', ($(window).width()));

	});

$(window).scroll(function() {
  
  // get the variable of how far we've scrolled from the top
  var offset = $(window).scrollTop();
	offset     = offset * 0.4;

  $('.cask').css({
    '-moz-transform': 'rotate(' + offset + 'deg)',
    '-webkit-transform': 'rotate(' + offset + 'deg)',
    '-o-transform': 'rotate(' + offset + 'deg)',
    '-ms-transform': 'rotate(' + offset + 'deg)',
    'transform': 'rotate(' + offset + 'deg)',
  });
  
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