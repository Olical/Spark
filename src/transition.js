SparkFn.transition = function(method, timeframe, callback) {
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined)
		callback = new Function();
	
	// Check if the timeframe is set, if not default it to 800ms
	if(timeframe === undefined)
		timeframe = 800;
	
	// Loop through all elements
	for(var e in this.elements) {
		// Set overflow to hidden
		this.css({overflow: 'hidden'});
		
		// Work out what method we need to do
		switch(method)
		{
			case 'slidedown':
				// Display it
				this.css({display: 'block'});
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Set height to 0
				this.css({height: 0});
				
				// Slide height to original
				this.animate({height: parseInt(original)}, timeframe, callback);
				break;
			
			case 'slideup':
				var selector = this.selector;
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Slide height to 0
				this.animate({height: 0}, timeframe, function() {
					// Set height to original
					$(this.selector).css({height: parseInt(original)});
					
					// Hide it
					$(this.selector).css({display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
			
			case 'fadein':
				// Display it
				this.css({display: 'block'});
				
				// Set opacity to 0
				this.css({opacity: 0});
				
				// Fade opacity to 100
				this.animate({opacity: 1}, timeframe, callback);
				break;
			
			case 'fadeout':
				var selector = this.selector;
				
				// Fade opacity to 0
				this.animate({opacity: 0}, timeframe, function() {
					// Set opacity to 100
					$(this.selector).css({opacity: 1});
					
					// Hide it
					$(this.selector).css({display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
		}
	}
	
	// Return the Spark object
	return this;
};