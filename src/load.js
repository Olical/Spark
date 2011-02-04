SparkFn.load = function(file) {
	// Grab the head element
	var head = document.getElementsByTagName('head')[0];
	
	// Create a script element
	var script = document.createElement('script');
	
	// Set the type
	script.type = 'text/javascript';
	
	// Set the source file
	script.src = file;
	
	// Add the script element to the head
	head.appendChild(script);
};