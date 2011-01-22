SparkFn.transition = function(method, timeframe, callback) {
	// Check if we have a callback, if not set it to and empty function
	if(callback === undefined)
		callback = new Function();
	
	// Check if the timeframe is set, if not default it to 800ms
	if(timeframe === undefined)
		timeframe = 800;
	
	// Loop through all elements
	for(var e in this.elements) {
		// Work out what method we need to do
		switch(method)
		{
			case 'slidedown':
				// Set overflow to hidden
				Spark(this.elements[e]).css({overflow: 'hidden', display: 'block'});
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Set height to 0
				Spark(this.elements[e]).css({height: 0});
				
				// Slide height to original
				Spark(this.elements[e]).animate({height: original}, timeframe, callback);
				break;
			
			case 'slideup':
				var selector = this.selector;
				
				var element = this.elements[e];
								
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Slide height to 0
				this.animate({height: 0, elements: {0: element}}, timeframe, function() {
					// Set height to original
					element.style.height = original;
					element.style.display = 'none';
					
					// Run the callback
					callback();
				});
				break;
			
			case 'fadein':
				// Display it
				this.css({display: 'block', opacity: 0, elements: {0: this.elements[e]}});
				
				// Fade opacity to 100
				this.animate({opacity: 1, elements: {0: this.elements[e]}}, timeframe, callback);
				break;
			
			case 'fadeout':
				var selector = this.selector;
				
				var element = this.elements[e];
				
				// Fade opacity to 0
				this.animate({opacity: 0, elements: {0: element}}, timeframe, function() {
					// Set opacity to 100
					Spark(selector).css({opacity: 1, display: 'none', elements: {0: element}});
					
					// Run the callback
					callback();
				});
				break;
			
			case 'sneakin':
				// Set overflow to hidden
				this.css({overflow: 'hidden', display: 'block', opacity: 0, elements: {0: this.elements[e]}});
				
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Set height to 0
				this.css({height: 0, elements: {0: this.elements[e]}});
				
				// Slide height to original
				this.animate({height: original, opacity: 1, elements: {0: this.elements[e]}}, timeframe, callback);
				break;
			
			case 'sneakout':
				var selector = this.selector;
				
				var element = this.elements[e];
								
				// Get original height
				var original = (window.getComputedStyle) ?
					window.getComputedStyle(this.elements[e], null).height :
					this.elements[e].currentStyle.height;
				
				// Slide height to 0
				this.animate({height: 0, opacity: 0, elements: {0: element}}, timeframe, function() {
					// Set height to original
					element.style.height = original;
					element.style.display = 'none';
					
					// Run the callback
					callback();
				});
				break;
		}
	}
	
	// Return the Spark object
	return this;
};