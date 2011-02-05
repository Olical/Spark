SparkFn.animate = function(properties, timeframe, callback) {
	// Set up any variables
	var element = null;
	var fps = 60;
	
	// Set a default timeframe
	if(!timeframe) {
		timeframe = 800;
	}
	
	// Fix opacity
	if(properties.opacity) {
		properties.MozOpacity = properties.opacity;
		properties.KhtmlOpacity = properties.opacity;
		properties.filter = properties.opacity * 100 + 1;
	}
	
	// Initiate the offset as 0 if there is none
	if(!this.offset) {
		this.offset = 0;
	}
	
	// Loop through all the elements
	for(var e in this.elements) {
		// Grab the current element
		element = this.elements[e];
		
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			var computed = (Spark(element).computed()[p]);
			if(!computed) {
				computed = '0';
			}
			element.style[p] = computed;
			
			// Fix for IE stuff
			if(element.style[p] == 'auto') element.style[p] = '0';
			element.style.zoom = '1';
			
			if(p == 'filter' && element.style[p] == '0') {
				element.style[p] = 'alpha(opacity=100)';
			}
			
			// Get the original
			var original = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(element.style[p]) : parseInt(element.style[p].replace('alpha(opacity=', '').replace(')', ''));
			
			// Work out the difference
			var difference = (p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') ? parseFloat(properties[p]) - original : parseInt(properties[p]) - original;
			
			// Work out how many frames
			var frames = timeframe / (1000 / fps);
			
			// Work out how many pixels per frame
			var pixels = difference / frames;
			
			// Work out the unit of measurement
			var unit = (isNaN(properties[p])) ? properties[p].replace(/[0-9]/g, '') : 'px';
			
			// Set up the prefix
			var prefix = '';
			
			// Another opacity fix
			if(p == 'opacity' || p == 'MozOpacity' || p == 'KhtmlOpacity') {
				unit = '';
			}
			else if(p == 'filter') {
				prefix = 'alpha(opacity=';
				unit = ')';
				properties.filter -= 1;
			}
			
			this.data(element, 'Spark.animations', 'START');
			
			// Loop through each frame
			for(var i = 0; i <= frames; i++) {
				this.data(element, 'Spark.animations', this.data(element, 'Spark.animations') + ',' + setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit, extprefix) {
					return function() {
						extelement.style[extp] = extprefix + (extoriginal + (extpixels * exti)) + extunit;
					}
				})(i, element, p, original, pixels, unit, prefix), i * (1000 / fps) + this.offset, element, p, original, pixels, unit, prefix));
			}
			
			// Correct floating point problem
			this.data(element, 'Spark.animations', this.data(element, 'Spark.animations') + ',' + setTimeout((function(extelement, extp, extproperties, extunit, extprefix) {
				return function() {
					extelement.style[extp] = extprefix + ((extp == 'opacity' || extp == 'MozOpacity' || extp == 'KhtmlOpacity') ? parseFloat(extproperties[extp]) : parseInt(extproperties[extp])) + extunit;
				}
			})(element, p, properties, unit, prefix), timeframe + this.offset, element, p, properties, unit, prefix));
			
			this.data(element, 'Spark.animations', this.data(element, 'Spark.animations').replace('START,', ''));
		}
	}
	
	// Set callback timer
	if(callback) {
		setTimeout(callback, timeframe);
	}
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};