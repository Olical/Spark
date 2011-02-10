SparkFn.animate = function(properties, timeframe, callback) {
	// Set up any variables
	var element = null;
	var fps = 60;
	var original = null;
	var difference = null;
	var frames = null;
	var pixels = null;
	var unit = null;
	var toSet = null;
	var computed = null;
	
	// Set a default timeframe
	if(!timeframe) {
		timeframe = 800;
	}
	
	// Initiate the offset as 0 if there is none
	if(!this.offset) {
		this.offset = 0;
	}
	
	// Loop through all the elements
	for(var e = 0; e < ((this.elements.length) ? this.elements.length : 1); e++) {
		// Grab the current element
		element = this.elements[e];
		
		// Loop through all of the properties
		for(var p in properties) {
			// Make sure the style is set
			if(element.style[p] === undefined || element.style[p] === '') {
				computed = Spark(element).computed()[p];
				element.style[p] = (computed) ? computed : 1;
			}
			
			// Fix for IE stuff
			if(element.style[p] == 'auto' && p == 'height') element.style[p] = element.offsetHeight;
			else if(element.style[p] == 'auto' && p == 'width') element.style[p] = element.offsetWidth;
			
			// Get the original
			original = (p == 'opacity') ? parseFloat(element.style[p]) : parseInt(element.style[p]);
			
			// Work out the difference
			difference = ((p == 'opacity') ? parseFloat(properties[p]) : parseInt(properties[p])) - original;
			
			// Work out how many frames
			frames = timeframe / (1000 / fps);
			
			// Work out how many pixels per frame
			pixels = difference / frames;
			
			// Work out the unit of measurement
			unit = (isNaN(properties[p])) ? properties[p].replace(/[0-9]/g, '') : 'px';
			
			// Set up variables
			toSet = new Object();
			
			// Another opacity fix
			if(p == 'opacity') {
				unit = '';
			}
			
			this.data(element, 'Spark.animations', 'START');
			
			// Loop through each frame
			for(var i = 0; i <= frames; i++) {
				this.data(element, 'Spark.animations', this.data(element, 'Spark.animations') + ',' + setTimeout((function(exti, extelement, extp, extoriginal, extpixels, extunit) {
					return function() {
						toSet[extp] = (extoriginal + (extpixels * exti)) + extunit;
						Spark(extelement).css(toSet);
					}
				})(i, element, p, original, pixels, unit), i * (1000 / fps) + this.offset, element, p, original, pixels, unit));
			}
			
			// Correct floating point problem
			this.data(element, 'Spark.animations', this.data(element, 'Spark.animations') + ',' + setTimeout((function(extelement, extp, extproperties) {
				return function() {
					toSet[extp] = properties[extp];
					Spark(extelement).css(toSet);
				}
			})(element, p, properties), timeframe + this.offset, element, p, properties));
			
			this.data(element, 'Spark.animations', this.data(element, 'Spark.animations').replace('START,', ''));
		}
	}
	
	// Set callback timer
	if(callback) {
		setTimeout(callback, timeframe + this.offset);
	}
	
	// Set up the offset for chaining
	this.offset += timeframe;
	
	// Return the Spark object
	return this;
};