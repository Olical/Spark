function(theEvent) {
	if(theEvent.pageX == null)
	{
		// Internet Explorer
		var d = (document.documentElement && document.documentElement.scrollLeft != null) ? document.documentElement : document.body;
		docX = theEvent.clientX + d.scrollLeft;
		docY = theEvent.clientY + d.scrollTop;
	}
	else
	{
		// Good browsers
		docX = theEvent.pageX;
		docY = theEvent.pageY;
	}
	
	// Return the calculated positions in an object
	return {x: docX, y: docY};
};
