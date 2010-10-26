function(element, opacity, timeframe) {
	element = document.querySelectorAll(element)[0];
	
	if(opacity === undefined)
	{
		// Return the transparency of the element
		return element.style.opacity;
	}
	else
	{
		if(opacity === undefined)
		{
			// Change transparency instantly
		}
		else
		{
			// Change transparency over the timeframe
		}
	}
};
