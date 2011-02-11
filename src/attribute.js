SparkFn.attribute = function(attribute) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
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
	}
	
	// Return the Spark object
	return this;
};