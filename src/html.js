SparkFn.html = function(content, append) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this) {
		// Grab the current element
		element = this[e];
		
		// Return content of the selected element if there is no content
		if(content === undefined) {
			return element.innerHTML;
		}
		else {
			// Append or replace content depending on the append flag
			(!append) ?
				element.innerHTML = content :
				element.innerHTML += content;
		}
	}
	
	// Return the Spark object
	return this;
};