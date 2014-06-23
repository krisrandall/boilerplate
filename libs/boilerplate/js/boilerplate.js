

// I am well aware this could be so very much tidier,
// we are going fo basic functionality first.
// will tidy up later.


var boilerplate = function() {
	
	
	
	this.popup = function(html) {
		$('#popup').html(html);	
		// add X
		var close = '<img id="close" src="libs/icons/close.png"></img>';
		$('#popup').append(close);
		$('#close').on('click', function() { $('#magic_positioning_table').hide(); $('#overlay').hide(); });
		
		// add overlay
		$('#overlay').show();
		
		$('#magic_positioning_table').show();
	};
	
	// for ajax popup use:  $('#popup').load(URL, function(html) { popup(html); }); 
	
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
	
	
	
	// add in the modal popup div (and overlay)
	var popup = '<div id="popup" class="white"></div>';
	var overlay = '<div id="overlay"></div>';
	var magic_positioning_table = '<table id="magic_positioning_table">'+
				  '<tr><td colspan="4"></td></tr>' +
				  '<tr><td></td><td class="popupcell"></td><td></td></tr>' +
				  '<tr><td colspan="4"></td></tr>' +
				  '</table>';
	$('body').append(popup);
	$('body').append(overlay);
	$('body').append(magic_positioning_table);
	$('#popup').appendTo('#magic_positioning_table td.popupcell');

	
	
	// apply the landscape-fullscreen class - removal of which 
	// allows turning off the full screen on rotate behaviour
	// HAVE TURNED THIS OFF - CONFUSING AND ALSO CAUSES ISSUE WHEN NO ASSIDE - BUT A NEAT IDEA STILL
	//$('#header, #footer, #main, #aside, #popup').addClass('landscape-fullscreen');
	
	
});

