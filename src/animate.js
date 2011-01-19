SparkFn.animate = function(properties, timeframe, callback) {
	// Set a default timeframe
	if(timeframe === undefined) timeframe = 800;
	
	// Fix opacity
	if(properties.opacity) {
		properties.MozOpacity = properties.opacity;
		properties.KhtmlOpacity = properties.opacity;
		properties.filter = properties.opacity * 100;
	}
	
	// Allow the passing of the element so it can be accessed from within the library
	if(properties.elements !== undefined)
		this.elements = properties.elements;
	
	// Stop any previous animations
	this.stop();
	
	// Loop through all the elements
	for(var e in this.elements) {
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			this.elements[e].style[p] = (window.getComputedStyle) ?
				window.getComputedStyle(this.elements[e], null)[p] :
				this.elements[e].currentStyle[p];
			
			// Fix for IE stuff
			if(this.elements[e].style[p] == 'auto') this.elements[e].style[p] = 0;
			this.elements[e].style.zoom = '1';
			
			if(p == 'filter' && !this.elements[e].style[p])
				this.elements[e].style[p] = 'alpha(opacity=100)';
			
			// Get the original
			var original = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(this.elements[e].style[p]) : parseInt(this.elements[e].style[p].replace('alpha(opacity=', '').replace(')', ''));
			
			// Work out the difference
			var difference = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(properties[p]) - original : parseInt(properties[p]) - original;
			
			// Work out how many frames
			var frames = timeframe / (1000 / this.fps);
			
			// Work out how many pixels per frame
			var pixels = difference / frames;
			
			// Work out the unit of measurement
			var unit = (isNaN(properties[p])) ? properties[p].replace(/[0-9]/g, '') : 'px';
			
			// Set up the prefix
			var prefix = '';
			
			// Another opacity fix
			if(p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity')
				unit = '';
			else if(p == 'filter') {
				unit = ')';
				prefix = 'alpha(opacity=';
			}
			
			this.data(this.elements[e], 'Spark.animations', 'START');
			
			// Loop through each frame
			for(var i = 0; i <= frames; i++) {
				this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations') + ',' + setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit, extprefix) {
					return function() {
						extelement.style[extp] = extprefix + (extoriginal + (extpixels * exti)) + extunit;
					}
				})(i, this.elements[e], p, original, pixels, unit, prefix), i * (1000 / this.fps), this.elements[e], p, original, pixels, unit, prefix));
			}
			
			// Correct floating point problem
			this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations') + ',' + setTimeout((function(exti, extelement, extp, extproperties, extunit, extprefix) {
				return function() {
					extelement.style[extp] = extprefix + extproperties[extp] + extunit;
				}
			})(i, this.elements[e], p, properties, unit, prefix), timeframe, this.elements[e], p, properties, unit, prefix));
			
			this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations').replace('START,', ''));
		}
	}
	
	// Set callback timer
	if(callback !== undefined)
		setTimeout(callback, timeframe);
	
	// Return the Spark object
	return this;
};