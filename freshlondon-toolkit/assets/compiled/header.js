function setFontSize (size = 1) {
	let winWidth = jQuery(window).width();
	if (winWidth <= 991) {
		//base font size at 750px is 22px.
		let baseFontSizeSmall = 16;
		let winPercentSmall = winWidth / 991;
		let fontSizeSmallFinal = window.finalFont = (baseFontSizeSmall * winPercentSmall);
		// console.log('handheld detected, font size is: ' + fontSizeSmallFinal);
		jQuery('html').css("font-size", fontSizeSmallFinal + 'px');
		return size / fontSizeSmallFinal;
	} else {
		if (winWidth >= 992 && winWidth <= 1920) {
			//base font size at 1920px is 16px.
			let baseFontSizeLarge = 16;
			let winPercent = winWidth / 1920;
			let fontSizeLargeFinal = window.finalFont = (baseFontSizeLarge * winPercent);
			// console.log('desktop detected, font size is: ' + fontSizeLargeFinal);
			jQuery('html').css("font-size", fontSizeLargeFinal + 'px');
			return size / fontSizeLargeFinal;
		} else {
			jQuery('html').css("font-size", '16px');
		}
	}
}

setFontSize();
// console.log(setFontSize(1000));
jQuery(window).resize(setFontSize);