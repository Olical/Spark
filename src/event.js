SparkFn.event = function(type, callback) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this) {
		// Grab the current element
		element = this[e];
		
		// Check if the browser supports addEventListener or attachEvent and use it
		(element.addEventListener) ? 
			element.addEventListener(type, function(e) {callback(this.fixEvent(e))}, false) :
			element.attachEvent('on' + type, function(e) {callback(this.fixEvent(e))});
	}
	
	// Return the Spark object
	return this;
};