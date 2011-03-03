SparkFn.stop = function() {
	// Set up any variables
	var element = null,
		animations = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
			
			// Make sure it is set
			if(this.data(element, 'Spark.animations') === undefined) {
				this.data(element, 'Spark.animations', '');
			}
			
			// Get the animations
			animations = this.data(element, 'Spark.animations').split(',');
			
			// Loop through them all, canceling them all
			for(var a in animations) {
				clearTimeout(animations[a]);
			}
		}
	}
	
	// Return the Spark object
	return this;
};