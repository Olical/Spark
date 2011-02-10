SparkFn.attribute = function(attribute) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e = 0; e < ((this.elements.length) ? this.elements.length : 1); e++) {
		// Grab the current element
		element = this.elements[e];
		
		// Check if they provided an attribute object
		if(attribute !== undefined) {
			// Loop through all attributes assigning them
			for(var a in attribute) {
				element[a] = attribute[a];
			}
		}
		else {
			// Return the elements attributes
			return element;
		}
	}
	
	// Return the Spark object
	return this;
};