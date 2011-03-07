SparkFn.fixEvent = function(e) {
	// Grab browser name and set up variables
	var browser = this.client().browser,
		obj = null,
		offsetX = null,
		offsetY = null;
	
	// Fix the page mouse location for IE
	if(browser === 'Explorer') {
		e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	// If its IE we need to copy srcElement over to target
	if(e.target === undefined) {
		e.target = e.srcElement;
	}
	
	// Fix the offsetX/Y in Firefox
	obj = e.target;
	if(obj.offsetParent && browser === 'Firefox') {
		offsetX = offsetY = 0;
		
		do {
			offsetX += obj.offsetLeft;
			offsetY += obj.offsetTop;
		} while(obj = obj.offsetParent);
		
		e.offsetX = offsetX;
		e.offsetY = offsetY;
	}
	
	// Return the calculated positions
	return e;
};