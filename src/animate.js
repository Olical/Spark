SparkFn.animate = function(properties, timeframe, callback) {
	// Set a default timeframe
	if(timeframe === undefined) timeframe = 800;
	
	// Fix opacity
	if(properties.opacity !== undefined) {
		properties.MozOpacity = properties.opacity;
		properties.KhtmlOpacity = properties.opacity;
		properties.filter = properties.opacity * 100;
	}
	
	// Initiate the offset as 0 if there is none
	if(this.offset === undefined) {
		this.offset = 0;
	}
	
	// Loop through all the elements
	for(var e in this.elements) {
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			this.elements[e].style[p] = (window.getComputedStyle) ?
				((window.getComputedStyle(this.elements[e], null)[p]) ? window.getComputedStyle(this.elements[e], null)[p] : '0') :
				((this.elements[e].currentStyle[p]) ? this.elements[e].currentStyle[p] : '0');
			
			// Fix for IE stuff
			if(this.elements[e].style[p] == 'auto') this.elements[e].style[p] = '0';
			this.elements[e].style.zoom = '1';
			
			if(p == 'filter' && this.elements[e].style[p] == '0')
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
				prefix = 'alpha(opacity=';
				unit = ')';
			}
			
			this.data(this.elements[e], 'Spark.animations', 'START');
			
			// Loop through each frame
			for(var i = 0; i <= frames; i++) {
				this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations') + ',' + setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit, extprefix) {
					return function() {
						extelement.style[extp] = extprefix + (extoriginal + (extpixels * exti)) + extunit;
					}
				})(i, this.elements[e], p, original, pixels, unit, prefix), i * (1000 / this.fps) + this.offset, this.elements[e], p, original, pixels, unit, prefix));
			}
			
			// Correct floating point problem
			this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations') + ',' + setTimeout((function(extelement, extp, extproperties, extunit, extprefix) {
				return function() {
					extelement.style[extp] = extprefix + ((extp == 'opacity' || extp == 'MozOpacity' || extp == 'KhtmlOpacity') ? parseFloat(extproperties[extp]) : parseInt(extproperties[extp])) + extunit;
				}
			})(this.elements[e], p, properties, unit, prefix), timeframe + this.offset, this.elements[e], p, properties, unit, prefix));
			
			this.data(this.elements[e], 'Spark.animations', this.data(this.elements[e], 'Spark.animations').replace('START,', ''));
		}
	}
	
	// Set callback timer
	if(callback !== undefined)
		setTimeout(callback, timeframe);
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};