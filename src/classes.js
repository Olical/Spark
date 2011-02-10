SparkFn.classes = function(method, name) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e = 0; e < ((this.elements.length) ? this.elements.length : 1); e++) {
		// Grab the current element
		element = this.elements[e];
		
		// Check what method we need to execute
		switch(method) {
			case 'has':
				// Return true if the element has the class and vice versa
				return new RegExp('\\b' + name + '\\b').test(element.className)
				break;
			case 'add':
				// Check if it does not already has that class
				if(!this.classes('has', name)) {
					// Append the class name with or without a space
					element.className += (element.className) ? ' ' + name : name;
				}
				break;
			case 'remove':
				// Work out if we need to remove the class with or without a space in front of it
				var search = (element.className.match(' ' + name)) ? ' ' + name : name;
				
				// Replace the correct search string
				element.className = element.className.replace(search, '');
				break;
		}
	}
	
	// Return the Spark object
	return this;
};