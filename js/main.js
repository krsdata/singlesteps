(function ($) {
    "use strict";
    
    $(document).ready(function(){
        
        
    // this code is for meanmenu
    $('.header_area .mainmenu nav').meanmenu();
    
    
    // this code is for instafeed jquery
    var userFeed = new Instafeed({
        limit: 6,
        get: 'tagged',
        tagName: 'corporate',
        accessToken: '1189321718.467ede5.59564e795f3d4cedbd2d5c5a33b03ca1',
        template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>',
    });
    userFeed.run();
    
    
    
    // this code is for accordion_area
     $(".accordion_slider_wrapper").owlCarousel({
		loop:true,
		nav:false,
        items: 1,
        autoplay: true,
		autoplayTimeout:20000,
		autoplayHoverPause:true
    });
    
    
    
    //this code is for counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
    
    
    
    /* this code is for hero_area slider */
    
    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#hero_area_slider'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});
    
    
    /* hero_area_slider code end */
    
    
    // This code is for mixitup
    $('.project_list').mixItUp({
    animation: {
        effects: 'fade scale',
        }
    });
    
    
    //this code is for preloader
    $("body").addClass("preloader_active");
    
    
    
    // this code is for mobile drop-down menu
    // this code is for slide down //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
    });

    // this code is for slide up //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
    });
    
    
});


$(window).load(function() {
// makes sure the whole site is loaded
    $('#preloader').fadeOut(); // will first fade out the loading animation
    $('.preloader_spinner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $("body").removeClass("preloader_active");
})
 
})(jQuery);
