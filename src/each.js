SparkFn.each = function(callback) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Run the specified function and pass the element to it
			callback(element);
		}
	}
	
	// Return the Spark object
	return this;
};