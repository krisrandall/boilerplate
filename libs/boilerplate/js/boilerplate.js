



var boilerplate = function() {

}();



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
					
			/* 
			if ($('#aside').is(':visible')) {
				$('#aside').animate({ 'left': '-'+$('#aside').width() }, 600);
			} else {
				alert('-'+$('#aside').width()+'px');
				$('#aside').css({ 'left': '-'+$('#aside').width()+'px' })
						   .show()
						   .animate({ 'left': '0' }, 600);
			}
			*/
			
		});
	}
	
	
});

