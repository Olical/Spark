SparkFn.trigger = function(type) {
	// Set up any variables
	var element = null,
		trigger = null;
	
	// Loop through all elements
	for(var e in this.elements) {
		// Make sure that it is a property
		if(this.elements.hasOwnProperty(e)) {
			// Grab the element
			element = this.elements[e];
			
			// Check for createEventObject
			if(document.createEventObject){
				// Trigger for Internet Explorer
				trigger = document.createEventObject();
				element.fireEvent('on' + type, trigger);
			}
			else {
				// Trigger for the good browsers
				trigger = document.createEvent('HTMLEvents');
				trigger.initEvent(type, true, true);
				element.dispatchEvent(trigger);
			}
		}
	}
	
	// Return the Spark object to allow chaining
	return this;
};