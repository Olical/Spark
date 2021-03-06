SparkFn.html = function(content, append) {
	// Set up any variables
	var element = null,
		e = null;
	
	// Loop through all of the elements
	for(e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Return content of the selected element if there is no content
			if(typeof content === 'undefined') {
				return element.innerHTML;
			}
			else {
				// Append or replace content depending on the append flag
				if(!append) {
					element.innerHTML = content;
				}
				else {
					element.innerHTML += content;
				}
			}
		}
	}
	
	// Return the Spark object
	return this;
};