SparkFn.computed = function() {
	// If we can use getComputedStyle
	if(window.getComputedStyle) {
		// Return getComputedStyle
		return window.getComputedStyle(this.elements[0], null);
	}
	
	// Otherwise return currentStyle
	return this.elements[0].currentStyle;
};