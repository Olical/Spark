SparkFn.stop = function() {
	// Loop through each of the elements
	for(var e in this.elements) {
		// Make sure it is set
		if(this.data(this.elements[e], 'Spark.animations') === undefined)
			this.data(this.elements[e], 'Spark.animations', '');
		
		// Get the animations
		var animations = this.data(this.elements[e], 'Spark.animations').split(',');
		
		// Loop through them all, canceling them all
		for(var a in animations) {
			clearTimeout(animations[a]);
		}
	}
};