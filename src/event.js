SparkFn.event = function(type, callback) {
	for(var e in this.elements) {
		// Check if the browser supports addEventListener or attachEvent
		(this.elements[e].addEventListener) ? 
			this.elements[e].addEventListener(type, function(event) {callback(Spark.fixEvents(event))}, false) :
			this.elements[e].attachEvent('on' + type, function(event) {callback(Spark.fixEvents(event))});
	}
	
	// Return the Spark object
	return this;
};
