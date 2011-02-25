SparkFn.ready = function(callback) {
	// Set up variables
	window.alreadyRunFlag = false;
	
	// Check if we can add an event listener
	if(document.addEventListener) {
		// Add an event listener for for DOMContent loaded
		Spark(document).event('DOMContentLoaded', function() {
			// Set the flag to true
			alreadyRunFlag = true;
			
			// Run the callback
			callback();
		});
	}
	else if(document.all && !window.opera) {
		// Create the script element
		Spark('head').element('add', 'script', {
			type: 'text/javascript',
			id: 'contentloadtag',
			defer: 'defer',
			src: 'javascript:void(0)'
		});
		
		// Grab the element
		var contentloadtag = Spark('#contentloadtag').attribute();
		
		// Add a listener for onReadyStateChange
		contentloadtag.onreadystatechange = function() {
			// If it is complete
			if(this.readyState == 'complete') {
				// Set the flag to true
				alreadyRunflag = true;
				
				// Run the callback
				callback();
			}
		};
	}
	
	// Add a listener for onLoad
	window.onload = function() {
		// Set a timeout, this method is just the fallback
		setTimeout(function() {
			// Aslong as the flag is still false
			if(alreadyRunFlag === false) {
				// Run the callback
				callback();
			}
		}, 0);
	};
};