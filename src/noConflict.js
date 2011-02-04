SparkFn.noConflict = function(both) {
	// Grab the original Spark object
	var SparkOr = Spark;
	
	// Reload $
	window.$ = SparkBk.$;
	
	// If both is true
	if(both === true) {
		// Reload Spark
		window.Spark = SparkBk.Spark;
	}
	
	// Return the original Spark object
	return SparkOr;
};