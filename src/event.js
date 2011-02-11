SparkFn.event = function(type, callback) {
	// Set up any variables
	var element = null;
	var runCallback = null;
	var previousReference = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Set up the callback
			runCallback = function(e) {
				callback(Spark.fixEvent(e));
			};
		
			// Grab the previous reference
			previousReference = this.data(element, 'Spark.event.' + type);
		
			// Save the callback's reference for unsetting
			this.data(element, 'Spark.event.' + type, runCallback);
		
			// Check if the browser supports addEventListener or attachEvent and use it
			if(element.addEventListener) {
				// Removed the old event
				if(previousReference) {
					element.removeEventListener(type, previousReference, false);
				}
			
				// Assign event
				element.addEventListener(type, runCallback, false);
			}
			else {
				// Removed the old event
				if(previousReference) {
					element.detachEvent(type, previousReference);
				}
			
				// Assign event
				element.attachEvent('on' + type, runCallback);
			}
		}
	}
	
	// Return the Spark object
	return this;
};