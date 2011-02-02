SparkFn.event = function(type, callback) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Grab the current element
		element = this.elements[e];
		
		// Check if the browser supports addEventListener or attachEvent and use it
		(element.addEventListener) ? 
			element.addEventListener(type, function(e) {callback(Spark.fixEvent(e))}, false) :
			element.attachEvent('on' + type, function(e) {callback(Spark.fixEvent(e))});
	}
	
	// Return the Spark object
	return this;
};