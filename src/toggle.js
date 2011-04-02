SparkFn.toggle = function(method, timeframe, easing, callback) {
	// Set up any variables
	var element = null,
		original = null,
		e = null,
		show = null,
		hide = null;
	
	// Check if we have a callback, if not set it to and empty function
	if(typeof callback === 'undefined') {
		callback = function() {};
	}
	
	// Check if the timeframe is set, if not default it to 800ms
	if(typeof timeframe === 'undefined') {
		timeframe = 600;
	}
	
	// Check if the easing is set, if not default it to false
	if(typeof easing === 'undefined') {
		var easing = false;
	}
	
	// Check if the method is set, if not default it to visibility
	if(typeof method === 'undefined') {
		var method = 'visibility';
	}
	
	// Initiate the offset as 0 if there is none
	if(typeof this.offset === 'undefined') {
		this.offset = 0;
	}
	
	// Loop through all of the elements
	for(e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
			
			// Set up the show / hide wording
			if(method === 'fade' || method === 'sneak') {
				show = 'in';
				hide = 'out';
			}
			else if(method === 'slide') {
				show = 'down';
				hide = 'up';
			}
			
			// Check if the method is visibility
			if(method === 'visibility') {
				// Toggle transition with either show or hide
				Spark(element).transition(((element.style.display === 'none') ? 'show' : 'hide'), timeframe, easing);
				
				// Set the timeframe to 0
				timeframe = 0;
			}
			else {
				// Toggle transition with the calculated method
				Spark(element).transition(method + ((element.style.display === 'none') ? show : hide), timeframe, easing);
			}
		}
	}
	
	// Set the callback to be run
	setTimeout(callback, timeframe);
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};