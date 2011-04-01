SparkFn.toggle = function(method, timeframe, easing, callback) {
	// Set up any variables
	var element = null,
		original = null,
		e = null;
	
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined) {
		callback = function() {};
	}
	
	// Check if the timeframe is set, if not default it to 800ms
	if(timeframe === undefined) {
		timeframe = 600;
	}
	
	// Check if the easing is set, if not default it to false
	if(easing === undefined) {
		var easing = false;
	}
	
	// Initiate the offset as 0 if there is none
	if(!this.offset) {
		this.offset = 0;
	}
	
	// Loop through all of the elements
	for(e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		}
	}
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};