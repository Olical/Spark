SparkFn.jsonp = function(file, callback, parameters) {
	// Add the callback
	file += '?callback=' + callback;
	
	// If we have parameters add them
	if(parameters !== undefined)
		file += '&' + parameters;
	
	// Load the file
	this.load(file);
};