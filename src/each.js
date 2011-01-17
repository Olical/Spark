SparkFn.each = function(callback) {
	// Loop through all of the elements
	for(var e in this.elements) {
		// Run the specified function and pass the element to it
		callback(this.elements[e]);
	}
	
	// Return the Spark object
	return this;
};