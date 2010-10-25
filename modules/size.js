function(element, width, height, timeframe) {
	element = document.querySelectorAll(element)[0];
	if(width !== undefined && height !== undefined)
	{
		if(timeframe !== undefined)
		{
			// Resize in timeframe
		}
		else
		{
			// Resize
		}
	}
	else
	{
		// Give size as an object.
		var size;
		size.width = element.offsetWidth;
		size.height = element.offsetHeight;
		return size;
	}
};