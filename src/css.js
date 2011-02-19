SparkFn.css = function(css) {
	// Set up any variables
	var element = null;
	var calSin = null;
	var calCos = null;
	var radians = null;
	var parentNode = null;
	var browser = Spark.client().browser;
	var crossBrowser = {
		opacity: function(element, style) {
			if(browser == 'Explorer') {
				element.style.filter = 'alpha(opacity=' + (css[c] * 100) + ')';
				element.style.zoom = '1';
			}
			
			element.style.MozOpacity = css[c];
			element.style.KhtmlOpacity = css[c];
		}
	};
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Check if they provided a css object
			if(css !== undefined) {
				// Loop through all css values assigning them
				for(var c in css) {
					// If the selector contains dashes then convert it to the JavaScript version
					if(c.indexOf('-') !== -1) {
						element.style[c.replace(/-([a-z])/gi, function(s, g1) { return g1.toUpperCase() })] = css[c];
					}
					else {
						element.style[c] = css[c];
					}
					
					if(crossBrowser.hasOwnProperty(c)) {
						crossBrowser[c](element, css[c]);
					}
				}
			}
			else {
				// Return the elements attributes
				return element.style;
			}
		}
	}
	
	// Return the Spark object
	return this;
};