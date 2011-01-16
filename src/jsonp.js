SparkFn.jsonp = function(file, callback, parameters) {
	// Add the callback
	file += '?callback=' + callback;
	
	// If we have parameters
	if(parameters !== undefined) {
		// Loop through the parameters
		for(p in parameters) {
			// And an ampersand and the specified parameter
			file += '&' + parameters[p];
		}
	}
	
	// Load the file
	this.load(file);
};