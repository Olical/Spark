SparkFn.transition = function(method, timeframe, callback) {
	// Set up any variables
	var element = null;
	var original = null;
	
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined) {
		callback = new Function();
	}
	
	// Check if the timeframe is set, if not default it to 800ms
	if(timeframe === undefined) {
		timeframe = 600;
	}
	
	// Initiate the offset as 0 if there is none
	if(!this.offset) {
		this.offset = 0;
	}
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Work out what method we need to do
			switch(method) {
				case 'slidedown':
					// Set overflow to hidden
					Spark(element).css({overflow: 'hidden', display: 'block'});
				
					// Get original height
					original = Spark(element).attribute().offsetHeight;
				
					// Set height to 0
					Spark(element).css({height: 0});
				
					// Slide height to original
					Spark(element).animate({height: original}, timeframe, false, callback);
					break;
			
				case 'slideup':				
					// Get original height
					original = Spark(element).attribute().offsetHeight;
				
					// Set overflow to hidden
					Spark(element).css({overflow: 'hidden', height: original});
				
					// Slide height to 0
					Spark(element).animate({height: 0}, timeframe, false, function() {
						// Set height to original
						Spark(element).css({height: original + 'px', display: 'none'});
					
						// Run the callback
						callback();
					});
					break;
			
				case 'fadein':
					// Display it
					Spark(element).css({display: 'block', opacity: 0});
				
					// Fade opacity to 100
					Spark(element).animate({opacity: 1}, timeframe, false, callback);
					break;
			
				case 'fadeout':
					// Fade opacity to 0
					Spark(element).animate({opacity: 0}, timeframe, false, function() {
						// Set opacity to 100
						Spark(element).css({opacity: 1, display: 'none'});
					
						// Run the callback
						callback();
					});
					break;
			
				case 'sneakin':
					// Set overflow to hidden
					Spark(element).css({overflow: 'hidden', display: 'block', opacity: 0});
				
					// Get original height
					original = Spark(element).attribute().offsetHeight;
				
					// Set height to 0
					Spark(element).css({height: 0});
				
					// Slide height to original
					Spark(element).animate({height: original, opacity: 1}, timeframe, false, callback);
					break;
			
				case 'sneakout':
					// Get original height
					original = Spark(element).attribute().offsetHeight;
				
					// Set overflow to hidden
					Spark(element).css({overflow: 'hidden', height: original});
				
					// Slide height to 0
					Spark(element).animate({height: 0, opacity: 0}, timeframe, false, function() {
						// Set height to original
						Spark(element).css({height: original + 'px', display: 'none'});
					
						// Run the callback
						callback();
					});
					break;
			}
		}
	}
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};