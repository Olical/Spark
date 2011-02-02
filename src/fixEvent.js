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
	
	// Fix the offsetX/Y in Firefox
	var offsetX = offsetY = 0;
	var obj = e.target;
	
	if(obj.offsetParent) {
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