SparkFn.fixEvent = function(e) {
	// Grab browser name
	var browser = this.client().browser;
	
	// Fix the page mouse location for IE
	if(browser == 'Explorer') {
		e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	// If its IE we need to copy srcElement over to target
	if(typeof e.target === 'undefined') {
		e.target = e.srcElement;
	}
	
	// Fix the offsetX/Y in Firefox
	var obj = e.target, offsetX, offsetY;
	if(obj.offsetParent && browser == 'Firefox') {
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