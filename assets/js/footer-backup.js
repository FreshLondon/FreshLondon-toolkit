//footer scripts here

windowHeight = jQuery(window).height();
console.log('the window height is: ' + windowHeight)

// vehicles
//vehicle 1 (van) section
vehicle1section = jQuery('#vehicle1section');
vehicle1wrapper = jQuery('#vehicle1wrapper');
vehicle1 = jQuery('#vehicle1');
//vehicle 2 (car) section
vehicle2section = jQuery('#vehicle2section');
vehicle2wrapper = jQuery('#vehicle2wrapper');
vehicle2 = jQuery('#vehicle2');
//vehicle 3 (bus) section
vehicle3section = jQuery('#vehicle3section');
vehicle3wrapper = jQuery('#vehicle3wrapper');
vehicle3 = jQuery('#vehicle3');

jQuery(document).ready(function () {
	section1 = jQuery('#section1');
	section1Height = jQuery(section1).height();
	console.log('#section1 height is: ' + section1Height);
	
	section2 = jQuery('#section2');
	section2Height = jQuery(section2).height();
	console.log('#section2 height is: ' + section2Height);
	
	section3 = jQuery('#section3');
	section3Height = jQuery(section3).height();
	console.log('#section3 height is: ' + section3Height);
	
	section4 = jQuery('#section4');
	section4Height = jQuery(section4).height();
	console.log('#section4 height is: ' + section4Height);
	
	section5 = jQuery('#section5');
	section5Height = jQuery(section5).height();
	console.log('#section5 height is: ' + section5Height);
	
	section6 = jQuery('#section6');
	section6Height = jQuery(section6).height();
	console.log('#section6 height is: ' + section6Height);
	
	section7 = jQuery('#section7');
	section7Height = jQuery(section7).height();
	console.log('#section7 height is: ' + section7Height);
	
	section8 = jQuery('#section8');
	section8Height = jQuery(section8).height();
	console.log('#section8 height is: ' + section8Height);
});

jQuery(window).on('load', function () {
	section1 = jQuery('#section1');
	section1Height = jQuery(section1).height();
	console.log('loaded #section1 height is: ' + section1Height);
});

jQuery(window).scroll(function (event) {
	var scrollPosition = jQuery(window).scrollTop();
	console.log('scroll positition is: ' + scrollPosition);
	// reset to no animation:
	if (scrollPosition < windowHeight) {
		jQuery(vehicle1).css('transform', 'none')
	}
	if ((scrollPosition >= windowHeight) && (scrollPosition < 2 * windowHeight)) {
		jQuery(vehicle1).css('transform', 'rotate(90deg)');
	}
	if ((scrollPosition >= 2 * windowHeight) && (scrollPosition < 3 * windowHeight)) {
		// jQuery(vehicle1).css('transition', 'ease-in-out transform 1s');
		jQuery(vehicle1).css('transition', 'ease-in-out all 1s');
		jQuery(vehicle1).css('transform', 'translateX(-60vw) rotate(90deg)');
		jQuery(vehicle2).css('transform', 'translateX(-60vw)');
	}
	if ((scrollPosition >= 3 * windowHeight) && (scrollPosition < 4 * windowHeight)) {
		// jQuery(vehicle1).css('transition', 'ease-in-out transform 1s');
		jQuery(vehicle1).css('display', 'none');
		jQuery(vehicle2section).css('visibility', 'visible');
		jQuery(vehicle2).css('transform', 'translateX(0)');
	}
	if ((scrollPosition >= 4 * windowHeight) && (scrollPosition < 5 * windowHeight)) {
		// jQuery(vehicle1).css('transition', 'ease-in-out transform 1s');
		jQuery(vehicle2).css('display', 'none');
		jQuery(vehicle2).css('position', 'relative');
		jQuery(vehicle3section).css('visibility', 'visible');
	}
});
