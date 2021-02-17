jQuery(function ($) {
	
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
	
	$(setFontSize());
	
	function setFontSize () {
		let winWidth = $(window).width();
		waitForFinalEvent(function () {
			if (winWidth <= 1124) { /* ... */
				//base font size at 375px is 16.
				let baseFontSizeSmall = 16;
				let winPercentSmall = (375 - winWidth);
				let winFractionSmall = (winPercentSmall * 0.011458333333333);
				let fontSizeSmallFinal = (baseFontSizeSmall - winFractionSmall);
				console.log('handheld detected, font size is: ' + fontSizeSmallFinal);
				$('html').css("font-size", fontSizeSmallFinal);
			} else if (winWidth > 1124) { /* ... */
				//base font size at 1920px is 22.
				let baseFontSizeLarge = 16;
				let winPercentLarge = (1920 - winWidth);
				let winFractionLarge = (winPercentLarge * 0.011458333333333);
				let fontSizeLargeFinal = (baseFontSizeLarge - winFractionLarge);
				console.log('desktop detected, font size is: ' + fontSizeLargeFinal);
				$('html').css("font-size", fontSizeLargeFinal);
			}
		}, 100, 'resize' + winWidth);
	}
	
	$(document).ready(setFontSize);
	$(window).resize(setFontSize);
	$(window).on('load', function () {
		console.log('footer scripts finished');
	});
	
});

