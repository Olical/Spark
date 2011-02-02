SparkFn.text = function(content, append) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Grab the current element
		element = this.elements[e];
		
		// Return content of the selected element if there is no content
		if(content === undefined) {
			return element.innerText;
		}
		else {
			// Append or replace content depending on the append flag
			(!append) ?
				element.innerText = content :
				element.innerText += content;
		}
	}
	
	// Return the Spark object
	return this;
};