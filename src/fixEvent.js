SparkFn.fixEvent = function(e) {
	// Fix the page mouse location for IE
	if(e.clientX || e.clientY) {
		e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	// If its IE we need to copy srcElement over to target
	if(e.target === undefined) {
		e.target = e.srcElement;
	}
	
	// Return the calculated positions
	return e;
};