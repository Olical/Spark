SparkFn.noConflict = function() {
	// Grab the original Spark object
	var SparkOr = Spark;
	
	// Reload $
	window.$ = SparkBk;
	
	// Return the original Spark object
	return SparkOr;
};