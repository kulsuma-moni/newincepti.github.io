(function($){
	"use strict";

	 // PRELOADER JS CODE
	 jQuery(window).on('load',function(){
		jQuery(".loader_box").fadeOut(500);
		});
	// END PRELOADER JS CODE
		
	// COLOUR AREA JS START

	$(".control_btn").click( function(event){
        event.preventDefault();
        if ( $(this).hasClass("in_out") ) {
        $(".colour_area").stop().animate({left:"-78px"}, 500);
        } else {
        $(".colour_area").stop().animate({left:"0px"}, 500);
        }
        $(this).toggleClass("in_out");
        return false;
		});
		// COLOUR BUTTON JS
		$('.blue_colour').click(function(){
			$('body').addClass('blue_virson').removeClass('purpel_virson dark_virson pest_virson');
		});
		$('.purpel_colour').click(function(){
			$('body').addClass('purpel_virson').removeClass('blue_virson dark_virson pest_virson');
		});
		$('.pest_colour').click(function(){
			$('body').addClass('pest_virson').removeClass('purpel_virson dark_virson blue_virson');
		});
		$('.dark_colour').click(function(){
			$('body').addClass('dark_virson').removeClass('purpel_virson blue_virson pest_virson');
		});
	// COLOUR AREA JS END

     // RESPONSIVE MAIN MENU JS
	 $(document).ready(function () {
		$('.menu').meanmenu();
		});
	
    //   END RESPONSIVE MAIN MENU JS

	// Sticky Menu
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 100){
        $('.main_menu').addClass('menu-shrink animated slideInDown');
        } else {
        $('.main_menu').removeClass('menu-shrink animated slideInUp');
        }
    });
	

    // Smoth scroll
    $('.menu li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000);
        e.preventDefault();
        });

	// active menu
	
	$('#menu').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});
  
	  // data-background
    $("[data-background]").each(function(){
      $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
    });

	
	//   TO-TOP
	$('.to-top').toTop({
		//options with default values
		autohide: true,  //boolean 'true' or 'false'
		offset: 420,     //numeric value (as pixels) for scrolling length from top to hide automatically
		speed: 400,      //numeric value (as mili-seconds) for duration
		position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
		left: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
		bottom: 30       //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
	});

	// TYPED JS
	var typed = new Typed('.type_txt', {
		strings: ['Adam Tkachenko ,', 'Web Developer.'],
		typeSpeed: 30,
		backSpeed: 40,
		backDelay: 700,
		loop:true,
		loopCount: Infinity,
		smartBackspace: true // Default value
	  });
    
	// Skill
	$('.chart').easyPieChart({
		barColor: '#7a28c4',
		trackColor: 'lightGray',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 8,
		trackWidth: undefined,
		size: 110,
		rotate: 0, // in degrees
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // easing function
			t = t / (d/2);
			if (t < 1) {
			return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
		});


	// portfolio FILTER
		$('.grid').isotope({
		itemSelector: '.grid-item',
		});

		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
		$('.filter-button-group button').removeClass('active');
		$(this).addClass('active');
		});


	// TESTIMONIAL

		
	$('.client-single').on('click', function (event) {
	event.preventDefault();

	var active = $(this).hasClass('active');

	var parent = $(this).parents('.testi-wrap');

		if (!active) {
			var activeBlock = parent.find('.client-single.active');

			var currentPos = $(this).attr('data-position');

			var newPos = activeBlock.attr('data-position');

			activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
			activeBlock.attr('data-position', currentPos);

			$(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
			$(this).attr('data-position', newPos);

		}
	});

      // PORTFOLIO HOVER EFFECT
      $(".snake").snakeify({
        speed: 200
      });

})(jQuery);