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
	
	if (winWidth <= 991) {
		//base font size at 750px is 22px.
		let baseFontSizeSmall = 29.1;
		let winPercentSmall = winWidth / 991;
		// let winFractionSmall = (winPercentSmall * 0.011458333333333);
		let fontSizeSmallFinal = window.finalFont = (baseFontSizeSmall * winPercentSmall);
		console.log('handheld detected, font size is: ' + fontSizeSmallFinal);
		jQuery('html').css("font-size", fontSizeSmallFinal + 'px');
	} else if (winWidth > 992) {
		//base font size at 1920px is 16px.
		let baseFontSizeLarge = 16;
		let winPercent = winWidth / 1920;
		let fontSizeLargeFinal = window.finalFont = (baseFontSizeLarge * winPercent);
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

function getDegrees (startpoint, endpoint) {
	travelDistance = endpoint - startpoint;
	travelLeft = endpoint - (jQuery(vehicle1).offset().top + vehicle1.height());
	return Math.max(0,Math.min(90, (0.9 * (((travelDistance - travelLeft) / travelDistance) * 100))));
}

function getDriveOnOffPos (startpoint, endpoint,vehicle = vehicle1) {
	
	travelDistance = endpoint - startpoint;
	travelLeft = endpoint - (jQuery(vehicle).offset().top + vehicle.height());
	//console.log(-0.8*((parseFloat(travelDistance-travelLeft) / travelDistance)*100));
	return Math.max(-80, (-0.8 * ((parseFloat(travelDistance - travelLeft) / travelDistance) * 100)));
}

function getDriveOnOffPosBus (startpoint, endpoint) {
	
	travelDistance = endpoint - startpoint;
	travelLeft = endpoint - (jQuery(vehicle3).offset().top + vehicle3.height());
	//console.log(-0.8*((parseFloat(travelDistance-travelLeft) / travelDistance)*100));
	return Math.max(0, 100 - ((parseFloat(travelDistance - travelLeft) / travelDistance) * 100));
}

function getColour (startpoint, endpoint) {
	
	travelDistance = parseFloat(endpoint - startpoint);
	changePerPixel = parseFloat(1 / travelDistance);
	travelLeft = (parseFloat(endpoint) - parseFloat(jQuery(vehicle1).offset().top+vehicle1.height()));
	return Math.max(0, ((travelDistance - travelLeft) * parseFloat(changePerPixel)));
}

//?ct_builder=true
jQuery(document).ready(function () {
	if (window.location.href.indexOf("ct_builder") > -1) {
		// if in page builder, don't run animations
	} else {
		windowHeight = jQuery(window).height();
		console.log('the window height is: ' + windowHeight)
		
		//spider web
		sectionSpider = jQuery('#sectionSpider');
		sectionSpider.css('transition', 'none');
		// vehicles
		//vehicle 1 (van) section
		vehicle1section = jQuery('#vehicle1section');
		vehicle1wrapper = jQuery('#vehicle1wrapper');
		vehicle1 = jQuery('#vehicle1');
		vehicle1purple = jQuery('#vehicle1purple');
		//vehicle1trans = jQuery('#section2bg').offset().top - jQuery('#section2bg').height();
		//console.log(vehicle1trans);
		// jQuery(vehicle1purple).css('transition', 'none');
		// jQuery(vehicle1purple).css('opacity', '0');
		// jQuery(vehicle1purple).css('transition', 'ease transform 0.1s');
		// jQuery(vehicle1).css('transition', 'ease transform 0.1s');
		// jQuery(vehicle1).css({
		// 	'transform-origin': '50% 90.476190476190476% 0px',
		// 	'-webkit-transform-origin': '50% 90.476190476190476% 0px'
		// });
		//vehicle1RotateTo = jQuery('#section4circle').offset().top
		//console.log(vehicle1RotateTo);
		//vehicle 2 (car) section
		vehicle2section = jQuery('#vehicle2section');
		vehicle2wrapper = jQuery('#vehicle2wrapper');
		vehicle2 = jQuery('#vehicle2');
		jQuery(vehicle3).css('transition', 'none');
		// jQuery(vehicle2).css({transform: 'translateX(-80vw)'});
		//vehicle 2 blue (car) section
		vehicle2bluesection = jQuery('#vehicle2bluesection');
		vehicle2bluewrapper = jQuery('#vehicle2bluewrapper');
		vehicle2blue = jQuery('#vehicle2blue');
		vehicle2blue.css('opacity', '1');
		// jQuery(vehicle2bluesection).css('visibility', 'visible');
		// jQuery(vehicle2blue).css('transition', 'none');
		// jQuery(vehicle2blue).css({transform: 'translateX(-80vw)'});
		//vehicle 3 (bus) section
		vehicle3section = jQuery('#vehicle3section');
		vehicle3wrapper = jQuery('#vehicle3wrapper');
		vehicle3 = jQuery('#vehicle3');
		vehicle3.css({transform: 'translateX(100vw)'});
		// jQuery(document).ready(function () {
		jQuery(window).on('load', function () {
			//
			section1 = jQuery('#section1');
			section1start = section1.position().top;
			section1Height = jQuery(section1).height();
			section1offset = section1.offset();
			//
			section2 = jQuery('#section2');
			section2start = section2.position().top;
			section2Height = jQuery(section2).height();
			vehicle1trans = section2.position().top + (0.25*section2Height);
			console.log(vehicle1trans);
			//
			section3 = jQuery('#section3');
			section3start = section3.position().top;
			section3Height = jQuery(section3).height();
			//
			section4 = jQuery('#section4');
			section4start = section4.position().top;
			section4Height = jQuery(section4).height();
			vehicle1RotateTo = section4start + (0.5* section4Height);
			
			//
			section5 = jQuery('#section5');
			section5start = section5.position().top;
			section5Height = jQuery(section5).height();
			//
			section6 = jQuery('#section6');
			section6start = section6.position().top;
			section6Height = jQuery(section6).height();
			//
			section7 = jQuery('#section7');
			section7start = section7.position().top;
			section7Height = jQuery(section7).height();
			//
			section8 = jQuery('#section8');
			section8start = section8.position().top;
			section8Height = jQuery(section8).height();
			
		});
		
		window.fromPosition = 0; // in multiples of windowHeight. i.e. what section was viewed last
		jQuery(window).scroll(function (event) {
			var scrollPosition = jQuery(window).scrollTop();
			if(scrollPosition < section1start + (0.5*section1Height)){	
				jQuery(vehicle1).css('transition', 'none');
				sectionSpider.css({transform: 'translateY(-' + Math.min(sectionSpider.height()/4, ( 1*(sectionSpider.height()/100) *  ((0.5*((scrollPosition / (section1start + section1Height))*100)))) ) + 'px)'});
				vehicle1.css({transform: 'translateY(-' + Math.min(sectionSpider.height()/4,( 1*(sectionSpider.height()/100) * ((0.5*((scrollPosition / (section1start + (1*section1Height)))*100))))) + 'px)'});
				vehicle1purple.css({transform: 'translateY(' + ( 1*(sectionSpider.height()/100) * ((0.5*((scrollPosition / (section1start + (1*section1Height)))*100)))) + 'px)'});
				//jQuery(vehicle1).css('transition', 'ease transform 0.1s');
			}
			
			if(scrollPosition > section1start + (0.5*section1Height) && scrollPosition < section2start){
				sectionSpider.css('transition', 'ease transform 0.1s');
				vehicle1.css('transition', 'ease transform 0.1s');
				sectionSpider.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
				vehicle1.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
				vehicle1purple.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
			} else if(scrollPosition > section2start){
				sectionSpider.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
				vehicle1purple.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
				//vehicle1.css({transform: 'translateY(-'+(sectionSpider.height()/4)+'px)'});
			}
			//console.log('vehicle1 positition is: ' + (vehicle1.offset().top + vehicle1.height()) );
			//console.log(jQuery('#section2bg').offset().top);
			
			// if (scrollPosition >= section1.position().top) {
			// 	sectionSpider.css('position', 'fixed');
			// 	sectionSpider.css('top', '50%');
			// 	sectionSpider.css('transform', 'translateY(-50%)');
			// 	vehicle1section.css('position', 'fixed');
			// 	console.log('scroll is more than offset1');
			// } else {
			// 	sectionSpider.css('position', 'absolute');
			// 	sectionSpider.css('top', '17.6875rem');
			// 	sectionSpider.css('transform', 'translateY(0)');
			// 	vehicle1section.css('position', 'absolute');
			// }
			
			if (scrollPosition >= (section2start - (windowHeight * .75))) {
				sectionSpider.css('opacity', '.5');
			} else {
				sectionSpider.css('opacity', '1');
			}
			
			if (jQuery(vehicle1).offset().top + vehicle1.height() < vehicle1trans) { // ensure fade back completes on scroll up
				jQuery(vehicle1).css('transition', 'ease transform 0.1s');
				jQuery(vehicle1purple).css('transition', 'ease transform 0.1s');
				vehicle1purple.css('opacity', '0');
				vehicle1.css('opacity', '1');
			}
			
			if (jQuery(vehicle1).offset().top + vehicle1.height() >= vehicle1trans && jQuery(vehicle1).offset().top + vehicle1.height()  <= vehicle1trans + (0.5*section2Height)) { // vehicle1 purple fade in
				vehicle1purple.css('opacity', getColour(vehicle1trans, vehicle1trans + (0.5*section2Height)));
				vehicle1.css('opacity', 1 - getColour(vehicle1trans, vehicle1trans + (0.5*section2Height)));
			}
			if (jQuery(vehicle1).offset().top + vehicle1.height()  >= vehicle1trans + (0.5*section2Height) && jQuery(vehicle1).offset().top + vehicle1.height()  <= section3start) { // vehicle1 purple fade out
				vehicle1purple.css('opacity', 1 - getColour(vehicle1trans + (0.5*section2Height), section3start));
				vehicle1.css('opacity', getColour(vehicle1trans + (0.5*section2Height), section3start));
			}
			
			if (jQuery(vehicle1).offset().top + vehicle1.height() > section3start) { // ensure full fade off
				vehicle1purple.css('opacity', '0');
				vehicle1.css('opacity', '1');
			}
			
			if (jQuery(vehicle1).offset().top + (0.5 * jQuery(vehicle1).height()) < section4start && jQuery(vehicle1).offset().top + (0.5 * jQuery(vehicle1).height()) > section2start) { // ensure 0degree rotation on scroll up
				vehicle1.css({transform: 'rotate(0deg) translateY(-'+(sectionSpider.height()/4)+'px)'});
			}
			
			
			//if (jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) >= section4start && jQuery(vehicle1).offset().top + (0.5 * jQuery(vehicle1).height()) <= vehicle1RotateTo + (0.5 * jQuery('#section4circle').height())) { // vehicle1 rotate
			if (jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) >= section4start && jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) <= vehicle1RotateTo ) { // vehicle1 rotate
				//jQuery(vehicle1).offset().top + (0.5*jQuery(vehicle1).height())
				window.fromPosition = 3;
				//vehicle1Rotation = getDegrees(section4start, vehicle1RotateTo + (0.5 * jQuery('#section4circle').height()));
				vehicle1Rotation = getDegrees(section4start, vehicle1RotateTo );
				vehicle1DriftPct = (vehicle1Rotation / 90) * 100
				vehicle1Drift = (jQuery(vehicle1).width() / 100) * vehicle1DriftPct;
				jQuery(vehicle1).css({transform: ' translate(0px, -'+((0.25*vehicle1Drift) + (sectionSpider.height()/4) )+'px) rotate(' + vehicle1Rotation + 'deg)'});
				
			}
			
			//if (scrollPosition + windowHeight > vehicle1RotateTo + (0.5 * jQuery('#section4circle').height()) && scrollPosition + windowHeight < section5start) { // ensure van turn is 90 degrees and centered
			if (jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) > vehicle1RotateTo + (0.3*section5Height) && jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) < section5start + (0.3*section5Height)) { // ensure van turn is 90 degrees and centered
				jQuery(vehicle1).css({transform: 'translate(0px, -' + ((0.25 * jQuery(vehicle1).width()) + (sectionSpider.height()/4)) + 'px) rotate(90deg)'});
				//console.log('finish rotate!');
			}
			
			if (jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) >= section5start + (0.1 * section5Height) && jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) <= section5start + (0.3 * section5Height)) { // vehicle1 exit
				
				jQuery(vehicle1).css({transform: 'rotate(90deg) translate(-' + ((0.25 * jQuery(vehicle1).width()) + (sectionSpider.height()/4)) + 'px,' + (50-getDriveOnOffPos(section5start + (0.1 * section5Height), section5start + (0.3 * section5Height))) + 'vw) '});
			}
			
			if (jQuery(vehicle1).offset().top + (1.1 * jQuery(vehicle1).height()) > section5start + (0.3 * section5Height)) { // ensure full exit
				jQuery(vehicle1).css({transform: 'translateX(-80vw) rotate(90deg)'});
			}
			
			if (jQuery(vehicle2).offset().top + (1.1 * jQuery(vehicle2).height()) >= section5start && jQuery(vehicle2).offset().top + (1.1 * jQuery(vehicle2).height()) <= section5start + (0.4 * section5Height)) { //vehicle2 enter
				jQuery(vehicle2section).css('visibility', 'visible');
				//jQuery(vehicle2).css({transform: 'translateX(' + (-80 - getDriveOnOffPos(section5start, section5start + (0.5 * section5Height))) + 'vw)'});
				jQuery(vehicle2).css({transform: 'translateX(' + (-70 - getDriveOnOffPos(section5start, section5start + (0.4 * section5Height),vehicle2)) + 'vw)'});
				
			}
			
			//if (scrollPosition + windowHeight >= section6start && scrollPosition + windowHeight <= jQuery('#image-345-9').offset().top + jQuery('#image-345-9').height()) { // vehicle 2 exit, vehicle2blue enter
			
			if(jQuery(vehicle2blue).offset().top + (0.5 * vehicle2.height()) < section6start){ // ensure full exit
				jQuery(vehicle2blue).css('transition', 'ease all 0.5s');
				jQuery(vehicle2blue).css({transform: 'translateX(-80vw)'});
			}
			
			if (jQuery(vehicle2).offset().top + (0.5 * vehicle2.height()) >= section6start && jQuery(vehicle2).offset().top + (0.5 * vehicle2.height()) <= section6start + (0.5*section6Height)) { // vehicle 2 exit, vehicle2blue enter
				jQuery(vehicle2blue).css('transition', 'ease all 0.05s');
				//console.log(-80+getDriveOnOffPos(section6start, section6start + (0.5*section6Height) ));
				jQuery(vehicle2blue).css({transform: 'translateX(' + (-70-getDriveOnOffPos(section6start, section6start + (0.5*section6Height), vehicle2blue )) + 'vw)'});
				jQuery(vehicle2).css({transform: 'translateX(' +Math.abs( (-(80+getDriveOnOffPos(section6start, section6start + (0.5*section6Height), vehicle2)))+60) + 'vw)'});
				//jQuery(vehicle2).scrollTop(Math.min(section6start - jQuery(vehicle2).height(),jQuery(vehicle2).scrollTop()));
				//console.log((((0.5*jQuery(vehicle2).width()) / jQuery(window).width())*100));
			}
			
			if (jQuery(vehicle2blue).offset().top + jQuery(vehicle2blue).height() >= section7start - (0.2* section6Height) && jQuery(vehicle2blue).offset().top + jQuery(vehicle2blue).height() <= section7start + (0.5 * section7Height)) { // vehicle2blue exit
				jQuery(vehicle3).css('visibility', 'visible');
				vehicle2blue.css({transform: 'translateX(' + (Math.abs(getDriveOnOffPos(section7start - (0.2* section6Height), section7start  + (0.5 * section7Height),vehicle2blue))+9 ) + 'vw)'});
				
			}
			
			if (jQuery(vehicle2blue).offset().top + jQuery(vehicle2blue).height() > section7start + (0.5 * section7Height)) { // vehicle2blue full exit
				jQuery(vehicle3).css('visibility', 'visible');
				vehicle2blue.css({transform: 'translateX(-80vw)'});
				
			}
			
			if (jQuery(vehicle3).offset().top + jQuery(vehicle3).height() < section7start ) { //vehicle3 full exit
				vehicle3.css({transform: 'translateX(100vw)'});
			}
			
			if (jQuery(vehicle3).offset().top + jQuery(vehicle3).height() >= section7start && jQuery(vehicle3).offset().top + jQuery(vehicle3).height() <= section7start  + (0.5 * section7Height)) { //vehicle3 enter
				vehicle3.css({transform: 'translateX(' + Math.max(0, Math.abs(getDriveOnOffPosBus(section7start, section7start  + (0.5 * section7Height)))) + 'vw)'});
				//console.log(getDriveOnOffPosBus(section7start, section8start));
			}
			
			if (jQuery(vehicle3).offset().top + jQuery(vehicle3).height() >= section8start && jQuery(vehicle3).offset().top + jQuery(vehicle3).height() <= section8start  + (0.5 * section8Height)) { //vehicle3 exit
				vehicle3.css({transform: 'translateX(' + (-100-(-getDriveOnOffPosBus(section8start , section8start  + (0.5 * section8Height)) )) + 'vw)'});
				//console.log(-getDriveOnOffPosBus(section8start , section8start  + (0.5 * section8Height)));
			}
			
			if (jQuery(vehicle3).offset().top + jQuery(vehicle3).height() > section8start  + (0.5 * section8Height)) { // ensure vehicle3 full exit
				vehicle3.css({transform: 'translateX(-100vw)'});
			}
			
		});
		// console.log(jQuery('#vehicle1').width());
		
	}
});

setFontSize();