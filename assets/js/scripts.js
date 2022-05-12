$(document).ready(function(){

	// Mobile Menu
	$('.menu-icon').click(function(){
		$('.menu-items').slideToggle();
	});

	// Apps Carousel
	$('.apps-carousel').owlCarousel({
		nav:true,
		dots:false,
		navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
		responsive : { 
		    0 : {
		    	items:1
		    }, 
		    480 : {
		    	items:2
		    }, 
		    768 : {
		    	items:4
		    }
		}
	});

});