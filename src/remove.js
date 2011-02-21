SparkFn.remove = function() {
	// Loop through all elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Remove the element
			this.elements[e].parentNode.removeChild(this.elements[e]);
		}
	}
	
	// Return the Spark object to allow chaining
	return this;
};