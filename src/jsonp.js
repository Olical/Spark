SparkFn.jsonp = function(file, callback, parameters) {
	// Add the callback
	file += '?callback=' + callback;
	
	// If we have parameters add them
	if(typeof parameters !== 'undefined') {
		file += '&' + parameters;
	}
	
	// Load the file
	this.load(file);
};