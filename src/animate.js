SparkFn.animate = function(properties, timeframe, callback) {
	// Loop through all the elements
	for(var e in this.elements) {
		// Set a default timeframe
		if(timeframe === undefined) timeframe = 800;
		
		// Fix opacity
		if(properties.opacity) {
			properties.opacity = properties.opacity;
			properties.MozOpacity = properties.opacity;
			properties.KhtmlOpacity = properties.opacity;
			properties.filter = properties.opacity * 100;
		}
		
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			this.elements[e].style[p] = (window.getComputedStyle) ?
				window.getComputedStyle(this.elements[e], null)[p] :
				this.elements[e].currentStyle[p];
			
			// Fix for IE stuff
			if(this.elements[e].style[p] == 'auto') this.elements[e].style[p] = 0;
			
			if(p == 'filter')
				this.elements[e].style[p] = 'alpha(opacity=100)';
			
			// Get the original
			var original = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(this.elements[e].style[p]) : parseInt(this.elements[e].style[p].replace('alpha(opacity=', '').replace(')', ''));
			
			// Work out the difference
			var difference = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(properties[p]) - original : parseInt(properties[p]) - original;
			
			// Work out how many frames
			var frames = timeframe / (1000 / 60);
			
			// Work out how many pixels per frame
			var pixels = difference / frames;
			
			// Work out the unit of measurement
			var unit = (isNaN(properties[p])) ? properties[p].replace(/[0-9]/g, '') : 'px';
			
			// Another opacity fix
			if(p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity')
				unit = false;
			else if(p == 'filter') {
				unit = ')';
				var prefix = 'alpha(opacity=';
			}
			else
				var prefix = false;
			
			// Loop through each frame
			for(var i = 0; i <= frames; i++) {
				setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit, extprefix) {
					return function() {
						extelement.style[extp] = extprefix + (extoriginal + (extpixels * exti)) + extunit;
					}
				})(i, this.elements[e], p, original, pixels, unit, prefix), i * (1000 / 60), this.elements[e], p, original, pixels, unit, prefix);
			}
			
			// Correct floating point problem
			setTimeout((function(exti, extelement, extp, extproperties, extunit, extprefix) {
				return function() {
					extelement.style[extp] = extprefix + extproperties[extp] + extunit;
				}
			})(i, this.elements[e], p, properties, unit, prefix), timeframe, this.elements[e], p, properties, unit, prefix);
		}
	}
	
	// Set callback timer
	if(callback !== undefined)
		setTimeout(callback, timeframe);
	
	// Return the Spark object
	return this;
};