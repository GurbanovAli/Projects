//
// window.onload = function() {
//   document.getElementById('slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });
// }
$(document).ready(function() {
  var slider = $(document).find('#slider')
  if( slider) {
    slider.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '<div class="slick__next"></div>',
      prevArrow: '<div class="slick__prev"></div>',
      onAfterChange: function(slide, index) {
       if(index === 3) {
           $('.slick__next').css('display', 'none')
       }
       else {
           $('.slick__prev').css('display', 'block')
       }
   }
    });
  }
})


// scroll down for project.css
// useful code

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
}).scroll();
