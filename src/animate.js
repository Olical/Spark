SparkFn.animate = function(properties, timeframe, callback) {
	// Loop through all the elements
	for(var e in this.elements) {
		// Set a default timeframe
		if(timeframe === undefined) timeframe = 800;
		
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			this.elements[e].style[p] = (window.getComputedStyle) ?
				window.getComputedStyle(this.elements[e], null)[p] :
				this.elements[e].currentStyle[p];
				
				// Fix for IE stuff
				if(this.elements[e].style[p] == 'auto') this.elements[e].style[p] = 0;
				
				// Get the original
				var original = parseInt(this.elements[e].style[p]);
				
				// Work out the difference
				var difference = parseInt(properties[p]) - original;
				
				// Work out how many frames
				var frames = timeframe / (1000 / 60);
				
				// Work out how many pixels per frame
				var pixels = difference / frames;
				
				// Work out the unit of measurement
				var unit = (isNaN(properties[p])) ? properties[p].replace(/[0-9]/g, '') : 'px';
				
				// Loop through each frame
				for(var i = 0; i <= frames; i++) {
					setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit) {
						return function() {
							extelement.style[extp] = extoriginal + (extpixels * exti) + extunit;
						}
					})(i, this.elements[e], p, original, pixels, unit), i * (1000 / 60), this.elements[e], p, original, pixels, unit);
				}
				
				// Correct floating point problem
				setTimeout((function(exti, extelement, extp, extproperties, extunit) {
					return function() {
						extelement.style[extp] = extproperties[extp] + extunit;
					}
				})(i, this.elements[e], p, properties, unit), timeframe, this.elements[e], p, properties, unit);
		}
	}
	
	// Set callback timer
	if(callback !== undefined)
		setTimeout(callback, timeframe);
	
	// Return the Spark object
	return this;
};