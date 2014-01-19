

// I am well aware this could be so very much tidier,
// we are going fo basic functionality first.
// will tidy up later.


var boilerplate = function() {
	
	
	this.popup = function(html) {
		$('#popup').html(html)
				   .center();	
		// add X
		var close = '<img id="close" src="libs/icons/close.png"></img>';
		$('#popup').append(close);
		$('#close').on('click', function() { $('#popup').hide(); });
		
		$('#popup').show();
	};
		
	
	this.modal = function(html) {
		$('#popup').html(html)
				   .center();	
		// add X
		var close = '<img id="close" src="libs/icons/close.png"></img>';
		$('#popup').append(close);
		$('#close').on('click', function() { $('#popup').hide(); $('#overlay').hide(); });
		
		// add overlay
		$('#overlay').show();
		
		$('#popup').show();
	};
	
	// for ajax popup use:  $('#popup').load(URL, function(html) { popup(html); }); 
	
};



$.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
	                                            $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
	                                            $(window).scrollLeft()) + "px");
	return this;
};




$(document).ready(function() {
	
	// add in hamburger menu to open aside if aside is present
	if ($('#aside').length>0) {
		var hamburger = '<img id="hamburger" src="libs/icons/hamburger.png"></img>';
		$('#header').append(hamburger);	
		$('#hamburger').on('click', function() {
			
			if (!$('#aside').is(':visible')) {
				$('#aside').show();
				$('#header, #footer, #main').transition({ 'left': $('#aside').width() }, 300); 
			} else {
				$('#header, #footer, #main').transition({ 'left': '0' }, 300, function() {
					$('#aside').hide(); // in case there is no BG color on the main area's
				});
			}	

			
		});
		
		// also swipe right to open
		$$('#main').swipeRight(function(){
			if (!$('#aside').is(':visible')) {
				$('#aside').show();
				$('#header, #footer, #main').transition({ 'left': $('#aside').width() }, 300);
			}
		});
		$$('#main, #aside').swipeLeft(function() {
			if ($('#aside').is(':visible')) {
				$('#header, #footer, #main').transition({ 'left': '0' }, 300, function() {
					$('#aside').hide(); // in case there is no BG color on the main area's
				});
			}
		});
	}
	
	
	
	// add overlay div for use by modal popups
	if ($('#popup').length>0) {
		var overlay = '<div id="overlay"></div>';
		$('body').append(overlay);
	}
	
	
});
