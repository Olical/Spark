SparkFn.stop = function() {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Grab the current element
		element = this.elements[e];
		
		// Make sure it is set
		if(this.data(element, 'Spark.animations') === undefined) {
			this.data(element, 'Spark.animations', '');
		}
		
		// Get the animations
		var animations = this.data(element, 'Spark.animations').split(',');
		
		// Loop through them all, canceling them all
		for(var a in animations) {
			clearTimeout(animations[a]);
		}
	}
	
	// Return the Spark object
	return this;
};