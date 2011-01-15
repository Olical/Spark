SparkFn.jsonp = function(file, callback, parameters) {
	// Grab the head element
	var head = document.getElementsByTagName('head')[0];
	
	// Create a script element
	var script = document.createElement('script');
	
	// Set the type
	script.type = 'text/javascript';
	
	// Set the source file
	script.src = file + '?callback=' + callback;
	
	// Loop through the parameters
	for(p in parameters) {
		// And an ampersand and the specified parameter
		script.src += '&' + parameters[p];
	}
	
	// Add the script element to the head
	head.appendChild(script);
};