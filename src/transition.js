SparkFn.transition = function(method, timeframe, callback) {
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined)
	callback = new Function();
	
	// Loop through all elements
	for(var e in this.elements)
	{
		// Set overflow to hidden
		$(this.selector).css({overflow: 'hidden'});
		
		// Work out what method we need to do
		switch(method)
		{
			case 'slidedown':
				// Display it
				$(this.selector).css({display: 'block'});
				
				// Get original height
				var original = $(this.selector).size().height;
				
				// Set height to 0
				$(this.selector).size($(this.selector).size().width, 0);
				
				// Slide height to original
				$(this.selector).size($(this.selector).size().width, original, timeframe, callback);
				break;
			
			case 'slideup':
				// Get original height
				var original = $(this.selector).size().height;
				
				// Se the selector so it is in scope
				var selector = this.selector;
				
				// Slide height to 0
				$(this.selector).size($(this.selector).size().width, 0, timeframe, function() {
					// Set height to original
					$(selector).size($(selector).size().width, original);
					
					// Hide it
					$(selector).css({display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
			
			case 'fadein':
				// Display it
				$(this.selector).css({display: 'block'});
				
				// Set opacity to 0
				$(this.selector).opacity(0);
				
				// Fade opacity to 100
				$(this.selector).opacity(100, timeframe, callback);
				break;
			
			case 'fadeout':
				// Make the in scope global
				var selector = this.selector;
				
				// Fade opacity to 0
				$(this.selector).opacity(0, timeframe, function() {
					// Set opacity to 100
					$(this.selector).opacity(100);
					
					// Hide it
					$(selector).css({display: 'none'});
					
					// Run the callback
					callback();
				});
				break;
		}
	}
};