jQuery(window).on('load',function(){
	
	redcircles = jQuery('#section1redcircle');
	
	redcircles.html('                  <svg id="animated" width="100%" viewBox="0 0 100 100">    <path id="outerBar" fill="none" stroke-linecap="square" stroke-width="1.6694490818%" stroke="#ff0000" stroke-dasharray="251.2,0" d="M0.8 50    A49.2 50 0 0 1  50 0.4 "></path><path id="outerBar2" fill="none" stroke-linecap="square" stroke-width="1.6694490818%" stroke="#ff0000" stroke-dasharray="0,100" d="M50 0.4    A48.33055 50 0 0 1  99.2 50  ">    <animate attributeName="stroke-dasharray" to="100" from="30" dur="1s" begin="2.3s" fill="freeze"></animate>   </path><path id="innerBar" fill="none" stroke-linecap="square" stroke-width="1.6694490818%" stroke="#ff0000" stroke-dasharray="251.2,0" d="M7.5 50            A42.5 42.5 0 0 1  50 7.2    42.3 42.3 0 1 1  10.5 65      ">        <animate attributeName="stroke-dasharray" from="251.2,251.2" to="95,251.2" dur="2.2s" begin="2.3s" fill="freeze"></animate>           </path> </svg> <div class = "text1wrapper" >     <div class="text1content">            <div class="text1dynamic">12%</div>            <div class="text1static">CAPACITY</div>      </div> </div><div class="text2wrapper">      <div class="text2content">  	        <div class="text2dynamic">703K</div >         <div class="text2static">COST</div>     </div></div >                  ');
	
	
	
	jQuery('#outerBar2').attr('stroke-dasharray','30,100');
	
	setTimeout(function(){
		
		jQuery('#animated').html(jQuery('#animated').html() + '<path id="outerBar3" fill="none" stroke-linecap="square" stroke-width="1.6694490818%" stroke="#ff0000" stroke-dasharray="251.2,0" d="M99.2 50    A50 50 0 0 1  50 98.6 ">    <animate attributeName="stroke-dasharray" from="0,251.2" to="251.2,0" dur="2.6s" begin="3s" fill="freeze"></animate>   </path>');
		jQuery('#outerBar3').attr('stroke-dasharray','0,251.2');
		jQuery('#outerBar2').attr('stroke-dasharray','100');
		
	},3000);
	
	setTimeout(function(){
		
		jQuery('#animated').html(jQuery('#animated').html() + '<path id="outerBar4" fill="none" stroke-linecap="square" stroke-width="1.6694490818%" stroke="#ff0000" stroke-dasharray="251.2,0" d="M50 98.6    A50 50 0 0 1  5 69          ">    <animate attributeName="stroke-dasharray" from="0,251.2" to="251.2,0" dur="2.6s" begin="3.8s" fill="freeze"></animate>   </path>');
		jQuery('#outerBar4').attr('stroke-dasharray','0,251.2');
		jQuery('#outerBar2').attr('stroke-dasharray','100');
		
	},3800);
	
	
	
	
	
	label1originX = (0.2 * redcircles.width()) + (0.5 * jQuery(jQuery('.text1wrapper')[0]).width());
	label1originY = (0.5 * redcircles.height());
	
	label2originX = (-0.4 * redcircles.width()) + (0.5 * jQuery(jQuery('.text2wrapper')[0]).width());
	label2originY = (-0.1 * redcircles.height());
	
	jQuery(jQuery('.text1wrapper')[0]).css('transition', 'linear transform 2.1s');
	jQuery(jQuery('.text1content')[0]).css('transition', 'linear transform 2.1s');
	jQuery(jQuery('.text2wrapper')[0]).css('transition', 'linear transform 2.2s');
	jQuery(jQuery('.text2content')[0]).css('transition', 'linear transform 2.2s');
	//jQuery(jQuery('.text1static')[0]).css('transition', 'ease transform 1.3s');
	
	jQuery(jQuery('.text1wrapper')[0]).css({
		'transform-origin': -label1originX + 'px ' + -label1originY + 'px 0px',
		'-webkit-transform-origin': -label1originX + 'px ' + label1originY + 'px 0px'
	});
	
	jQuery(jQuery('.text2wrapper')[0]).css({
		'transform-origin': -label2originX + 'px ' + -label2originY + 'px 0px',
		'-webkit-transform-origin': -label2originX + 'px ' + label2originY + 'px 0px'
	});
	
	
	
	
	setTimeout(function(){
		jQuery(jQuery('.text1content')[0]).css({transform: 'rotate(-210deg)'});
		jQuery(jQuery('.text1wrapper')[0]).css({transform: 'rotate(210deg)'});
		jQuery(jQuery('.text2content')[0]).css({transform: 'rotate(200deg)'});
		jQuery(jQuery('.text2wrapper')[0]).css({transform: 'rotate(-200deg)'});
		
		var count = jQuery(jQuery('.text1dynamic')[0]);
		jQuery({ Counter: 12 }).animate({ Counter: 95 }, {
			duration: 2000,
			easing: 'linear',
			step: function () {
				count.text(Math.ceil(this.Counter)+ "%");
			}
		});
		
		var count2 = jQuery(jQuery('.text2dynamic')[0]);
		jQuery({ Counter: 703 }).animate({ Counter: 20 }, {
			duration: 2000,
			easing: 'linear',
			step: function () {
				count2.text(Math.ceil(this.Counter)+ "K");
			},
			complete: function(){
				count2.text("20K")
			}
		});
		
	},2300);
});