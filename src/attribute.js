SparkFn.attribute = function(attribute) {
	// Set up any variables
	var element = null,
		e = null,
		a = null;
	
	// Loop through all of the elements
	for(e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Check if they provided an attribute object
			if(typeof attribute !== 'undefined') {
				// Loop through all attributes assigning them
				for(a in attribute) {
					if(attribute.hasOwnProperty(a)) {
						element[a] = attribute[a];
					}
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