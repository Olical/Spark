SparkFn.element = function(method, tag, attributes, styles, callback) {
	// Initialise any variables
	var construct = null,
		insertedElements = null,
		e = null;
	
	// Check if we need to remove the element
	if(method === 'remove') {
		// Loop through all elements
		for(e in this.elements) {
			// Make sure that it is an element
			if(this.elements.hasOwnProperty(e)) {
				// Remove the element
				this.elements[e].parentNode.removeChild(this.elements[e]);
			}
		}
	}
	else {
		// Create the new element and create the new array
		construct = document.createElement(tag);
		insertedElements = [];
		
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
		for(e in this.elements) {
			// Make sure that it is an element
			if(this.elements.hasOwnProperty(e)) {
				// Perform the right action
				if(method === 'prepend') {
					// Prepend the element
					insertedElements.push(this.elements[e].parentNode.insertBefore(construct.cloneNode(true), this.elements[e]));
				}
				else if(method === 'append') {
					// Append the element
					insertedElements.push(this.elements[e].parentNode.insertBefore(construct.cloneNode(true), this.elements[e].nextSibling));
				}
				else if(method === 'insert') {
					// Insert the element
					insertedElements.push(this.elements[e].appendChild(construct.cloneNode(true)));
				}
			}
		}
		
		// Check if a callback was passed
		if(callback) {
			// Pass the inserted elements to the callback
			callback(insertedElements);
		}
	}
	
	// Return the Spark object to allow chaining
	return this;
};