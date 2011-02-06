SparkFn.css = function(css) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Grab the current element
		element = this.elements[e];
		
		// Check if they provided a css object
		if(css !== undefined) {
			// Loop through all css values assigning them
			for(var c in css) {
				element.style[c] = css[c].toString();
				
				// If opacity is being set we need to set all the other values for cross browser opacity
				if(c == 'opacity') {
					element.style.MozOpacity = css[c].toString();
					element.style.KhtmlOpacity = css[c].toString();
					element.style.filter = 'alpha(opacity=' + (css[c] * 100).toString() + ')';
					element.style.zoom = '1';
				}
			}
		}
		else {
			// Return the elements attributes
			return element.style;
		}
	}
	
	// Return the Spark object
	return this;
};