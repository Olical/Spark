SparkFn.opacity = function(opacity, timeframe, callback) {
	for(var e in this.elements)
	{
		this.elements[e].style.zoom = 1;
		
		// Get origopacity
		if(this.elements[e].currentStyle)
			var origopacity = this.elements[e].currentStyle.opacity;
		else if(window.getComputedStyle)
			var origopacity = document.defaultView.getComputedStyle(this.elements[e], null).getPropertyValue('opacity');
		origopacity = parseInt(origopacity);
		
		if(opacity === undefined)
			return origopacity * 100; // Return the transparency of the element as a percentage
		else
		{
			if(timeframe === undefined)
			{
				// Change transparency instantly
				this.elements[e].style.opacity = opacity / 100;
				this.elements[e].style.MozOpacity = opacity / 100;
				this.elements[e].style.khtmlOpacity = opacity / 100;
				this.elements[e].style.filter = 'alpha(opacity=' + opacity + ')';
			}
			else
			{
				// Change transparency over the timeframe
				// If not already, set the opacity to full
				this.elements[e].style.opacity = origopacity;
				this.elements[e].style.MozOpacity = origopacity;
				this.elements[e].style.khtmlOpacity = origopacity;
				this.elements[e].style.filter = 'alpha(opacity=' + (origopacity * 100) + ')';
				
				// Work out difference
				var opacitydiff = opacity - (origopacity * 100);
				
				// Work out how many frames are needed
				var frames = timeframe / (1000 / this.fps);
				
				// Work out how many it needs to move each frame
				var opacitypps = opacitydiff / frames;
				
				// Set up original opacity
				var origopacity = origopacity * 100;
				
				// Loop through all frames setting a time out opacity change each time
				var timers = [];
				for(var i = 0; i <= frames; i++)
				{
					setTimeout((function(privateEye, elements) {
					return function() {
						var newopacity = origopacity + (opacitypps * privateEye);
						elements[e].style.opacity = newopacity / 100;
						elements[e].style.MozOpacity = newopacity / 100;
						elements[e].style.khtmlOpacity = newopacity / 100;
						elements[e].style.filter = 'alpha(opacity=' + newopacity + ')';
					}})(i, this.elements), i * (1000 / this.fps), this.elements);
				}
				
				// Correct floating point problem
				setTimeout((function(privateEye, elements) {
				return function() {
					var newopacity = origopacity + (opacitypps * privateEye);
					elements[e].style.opacity = opacity / 100;
					elements[e].style.MozOpacity = opacity / 100;
					elements[e].style.khtmlOpacity = opacity / 100;
					elements[e].style.filter = 'alpha(opacity=' + opacity + ')';
				}})(i, this.elements), timeframe, this.elements);
				
				// Set callback timer if a callback is set
				if(callback !== undefined)
					setTimeout(callback, timeframe);
			}
		}
	}
	
	// Return the Spark object
	return this;
};
