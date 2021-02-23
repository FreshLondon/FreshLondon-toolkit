//footer scripts here
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

function setFontSize () {
	let winWidth = jQuery(window).width();
	
	// if (winWidth <= 1124) { /* ... */
	// 	//base font size at 375px is 16.
	// 	let baseFontSizeSmall = 16;
	// 	let winPercentSmall = (375 - winWidth);
	// 	let winFractionSmall = (winPercentSmall * 0.011458333333333);
	// 	let fontSizeSmallFinal = (baseFontSizeSmall - winFractionSmall);
	// 	console.log('handheld detected, font size is: ' + fontSizeSmallFinal);
	// 	$('html').css("font-size", fontSizeSmallFinal);
	// } else if (winWidth > 1124) { /* ... */
	if (winWidth > 992) {
		//base font size at 1920px is 16.
		let baseFontSizeLarge = 16;
		// let winPercentLarge = (1920 - winWidth);
		// let winFractionLarge = (winPercentLarge * 0.008333333333333);
		// let fontSizeLargeFinal = (baseFontSizeLarge - winFractionLarge);
		let winPercent = winWidth / 1920;
		console.log('winpercent is: ' + winPercent);
		let fontSizeLargeFinal = (baseFontSizeLarge * winPercent);
		
		console.log('desktop detected, font size is: ' + fontSizeLargeFinal);
		jQuery('html').css("font-size", fontSizeLargeFinal + 'px');
	} else {
		jQuery('html').css("font-size", '16px');
	}
}

// $(document).ready(setFontSize);
jQuery(window).resize(setFontSize);
jQuery(window).on('load', function () {
	console.log('footer scripts finished');
});

//?ct_builder=true
jQuery(document).ready(function () {
	if (window.location.href.indexOf("ct_builder") > -1) {
		// if in page builder, don't run animations
	} else {
		windowHeight = jQuery(window).height();
		console.log('the window height is: ' + windowHeight)
		
		// vehicles
		//vehicle 1 (van) section
		vehicle1section = jQuery('#vehicle1section');
		vehicle1wrapper = jQuery('#vehicle1wrapper');
		vehicle1 = jQuery('#vehicle1');
		vehicle1spinStart = (0.5 * (parseFloat(jQuery('#section4').position().top) - parseFloat(jQuery('#section3').position().top))) + parseFloat(jQuery('#section3').position().top);
		vehicle1spinStop = parseFloat(jQuery('#section4').position().top);// + parseFloat(0.5*windowHeight);
		jQuery(vehicle1).css('transition', 'ease transform 1s');
		jQuery(vehicle1).css({
			'transform-origin': 'bottom left 0px',
			'-webkit-transform-origin': 'bottom left 0px'
		});
		console.log(vehicle1.height());
		//vehicle 2 (car) section
		vehicle2section = jQuery('#vehicle2section');
		vehicle2wrapper = jQuery('#vehicle2wrapper');
		vehicle2 = jQuery('#vehicle2');
		//vehicle 2 blue (car) section
		vehicle2bluesection = jQuery('#vehicle2bluesection');
		vehicle2bluewrapper = jQuery('#vehicle2bluewrapper');
		vehicle2blue = jQuery('#vehicle2blue');
		vehicle2blue.css('opacity', '0');
		//vehicle 3 (bus) section
		vehicle3section = jQuery('#vehicle3section');
		vehicle3wrapper = jQuery('#vehicle3wrapper');
		vehicle3 = jQuery('#vehicle3');
		
		// jQuery(document).ready(function () {
		jQuery(window).on('load', function () {
			//
			section1 = jQuery('#section1');
			section1Height = jQuery(section1).height();
			console.log('#section1 height is: ' + section1Height);
			section1offset = section1.offset();
			console.log('#section1 offset top is: ' + section1offset.top);
			//
			let section2start = (section1offset.top + section1Height);
			console.log('#section2 begins at: ' + section2start + 'px');
			section2 = jQuery('#section2');
			section2Height = jQuery(section2).height();
			console.log('#section2 height is: ' + section2Height);
			//
			section3start = (section2start + section2Height);
			console.log('#section3 begins at: ' + section3start + 'px');
			section3 = jQuery('#section3');
			section3Height = jQuery(section3).height();
			console.log('#section3 height is: ' + section3Height);
			//
			section4start = (section3start + section3Height);
			console.log('#section4 begins at: ' + section4start + 'px');
			section4 = jQuery('#section4');
			section4Height = jQuery(section4).height();
			console.log('#section4 height is: ' + section4Height);
			//
			section5start = (section4start + section4Height);
			console.log('#section5 begins at: ' + section5start + 'px');
			section5 = jQuery('#section5');
			section5Height = jQuery(section5).height();
			console.log('#section5 height is: ' + section5Height);
			//
			section6start = (section5start + section5Height);
			console.log('#section6 begins at: ' + section6start + 'px');
			section6 = jQuery('#section6');
			section6Height = jQuery(section6).height();
			console.log('#section6 height is: ' + section6Height);
			//
			section7start = (section6start + section6Height);
			console.log('#section7 begins at: ' + section7start + 'px');
			section7 = jQuery('#section7');
			section7Height = jQuery(section7).height();
			console.log('#section7 height is: ' + section7Height);
			//
			section8start = (section7start + section7Height);
			console.log('#section8 begins at: ' + section8start + 'px');
			section8 = jQuery('#section8');
			section8Height = jQuery(section8).height();
			console.log('#section8 height is: ' + section8Height);
		});
		
		window.fromPosition = 0; // in multiples of windowHeight. i.e. what section was viewed last
		jQuery(window).scroll(function (event) {
			var scrollPosition = jQuery(window).scrollTop();
			
			//console.log('scroll positition is: ' + scrollPosition);
			// reset to no animation:
			if (scrollPosition < windowHeight) {
				jQuery(vehicle1).css('transform', 'none');
				window.fromPosition = 0;
			}
			if ((scrollPosition >= windowHeight) && (scrollPosition < 2 * windowHeight)) {
				//jQuery(vehicle1).css('transform', 'rotate(90deg)');
				
				window.fromPosition = 1;
			}
			if ((scrollPosition >= 2 * windowHeight) && (scrollPosition < 3 * windowHeight)) {
				// jQuery(vehicle1).css('transition', 'ease-in-out transform 1s');
				
				window.fromPosition = 2;
			}
			if (scrollPosition >= vehicle1spinStart) {
				console.log(window.fromPosition);
				window.fromPosition = 3;
				jQuery(vehicle1).css({transform: 'rotate(90deg)'});
				//jQuery(vehicle1).animate({rotation: 90}, {
				//	duration: 1000,
				//easing: 'linear',
				//step: function () {
				//	window.yPos = 0.3 * (jQuery('#vehicle1').height() / 90) * this.rotation;
				//vehicle1.css({transform: 'rotate(' + this.rotation + 'deg)'});
				
				//},
				//complete: function () {
				//	vehicle2.css({transform: 'translateX(-60vw)'});
				//}
				//});
				
			}
			
			if ((scrollPosition >= 4 * windowHeight) && (scrollPosition < 5 * windowHeight)) {
				jQuery(vehicle1).animate({translation: -60}, {
					duration: 1000,
					easing: 'linear',
					step: function () {
						vehicle1.css({transform: 'translateX(' + this.translation + 'vw) rotate(90deg)'});
						
					},
					complete: function () {
						vehicle1.css('display', 'none');
						vehicle2.css({transform: 'translateX(0vw)'});
						vehicle2blue.css({transform: 'translateX(0vw)'});
					}
				});
				jQuery(vehicle2section).css('visibility', 'visible');
				
				window.fromPosition = 4;
			}
			if ((scrollPosition >= 5 * windowHeight) && (scrollPosition < 6 * windowHeight)) {
				jQuery(vehicle2bluesection).css('visibility', 'visible');
				jQuery(vehicle2).css('transition', 'ease all 0.05s');
				jQuery(vehicle2blue).css('transition', 'ease all 0.05s');
				
				jQuery(vehicle2).animate({opac: 1}, {
					duration: 500,
					easing: 'linear',
					step: function () {
						jQuery(vehicle2).css('opacity', 1 - this.opac);
						jQuery(vehicle2blue).css('opacity', this.opac);
					},
					complete: function () {
						
						vehicle2.stop(true, true);
						vehicle2blue.stop(true, true);
					}
				});
				
				window.fromPosition = 5;
			}
			if ((scrollPosition >= 6 * windowHeight) && (scrollPosition < 7 * windowHeight) && window.fromPosition != 6) {
				
				if (window.fromPosition == 5) {
					window.fromPosition = 6;
					jQuery(vehicle2).css('transition', 'ease transform 0.1s');
					jQuery(vehicle2).animate({translation: 160}, {
						duration: 1000,
						easing: 'linear',
						step: function () {
							
							vehicle2blue.css({transform: 'translateX(' + this.translation + 'vw)'});
							vehicle3.css({transform: 'translateX(160vw)'});
						},
						complete: function () {
							vehicle2blue.css('display', 'none');
							jQuery(vehicle3section).css('visibility', 'visible');
							vehicle3.stop(true, true);
							vehicle3.css({transform: 'translateX(0vw)'});
							vehicle3.stop(true, true);
							vehicle2blue.stop(true, true);
						}
					});
				} else if (window.fromPosition == 7) { //end of if scroll down
					window.fromPosition = 6;
					vehicle3.stop(true, true);
					vehicle3.css('display', 'block');
					jQuery(vehicle3).css('transition', 'ease transform 0.3s');
					jQuery(vehicle3).css({transform: 'translateX(0vw)'});
					
				} //end of else (if scroll up)
				
			}
			if ((scrollPosition >= 6 * windowHeight + 1) && (scrollPosition < 8 * windowHeight) && window.fromPosition != 7) {
				
				window.fromPosition = 7;
				jQuery(vehicle3).css('transition', 'ease transform 1s');
				vehicle3.css({transform: 'translateX(-100vw)'});
				//vehicle3.stop(true,true);
				jQuery(vehicle3).animate({translation: 160}, {
					duration: 1000,
					easing: 'linear',
					step: function () {
					
					},
					complete: function () {
						//vehicle3.css('display', 'none');
						
					}
				});
				
			}
		});
		// console.log(jQuery('#vehicle1').width());
		
	}
});

setFontSize();