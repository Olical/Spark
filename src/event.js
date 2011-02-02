SparkFn.event = function(type, callback) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this) {
		// Grab the current element
		element = this[e];
		
		// Check if the browser supports addEventListener or attachEvent and use it
		(this.elements[e].addEventListener) ? 
			this.elements[e].addEventListener(type, function(e) {callback(this.fixEvent(e))}, false) :
			this.elements[e].attachEvent('on' + type, function(e) {callback(this.fixEvent(e))});
	}
	
	// Return the Spark object
	return this;
};