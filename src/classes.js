SparkFn.classes = function(method, name) {
	// Set up any variables
	var element = null,
		search = null,
		e = null;
	
	// Loop through all of the elements
	for(e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Check what method we need to execute
			if(method === 'has') {
				// Return true if the element has the class and vice versa
				return new RegExp('\\b' + name + '\\b').test(element.className)
			}
			else if(method === 'add') {
				// Check if it does not already has that class
				if(!this.classes('has', name)) {
					// Append the class name with or without a space
					element.className += (element.className) ? ' ' + name : name;
				}
			}
			else if(method === 'remove') {
				// Work out if we need to remove the class with or without a space in front of it
				search = (element.className.match(' ' + name)) ? ' ' + name : name;
				
				// Replace the correct search string
				element.className = element.className.replace(search, '');
			}
		}
	}
	
	// Return the Spark object
	return this;
};