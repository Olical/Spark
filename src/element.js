SparkFn.add = function(method, tag, attributes, styles) {
	// Check if we need to remove the element
	if(method == 'remove') {
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
	}
	
	// Create the new element
	var construct = document.createElement(tag);
	
	// Make sure attributes is set
	if(attributes) {
		// Add attributes
		Spark(construct).attribute(attributes);
	}
	
	// Make sure styles is set
	if(styles) {
		// Add styles
		Spark(construct).css(styles);
	}
	
	// Loop through all elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Add the element
			this.elements[e].appendChild(construct);
		}
	}
	
	// Return the Spark object to allow chaining
	return this;
};