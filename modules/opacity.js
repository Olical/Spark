function(element, opacity, timeframe) {
	element = document.querySelectorAll(element)[0];
	
	if(opacity === undefined)
	{
		// Return the transparency of the element
		return element.style.opacity * 100;
	}
	else
	{
		if(opacity === undefined)
		{
			// Change transparency instantly
			element.style.opacity = opacity / 100;
		}
		else
		{
			// Change transparency over the timeframe
		}
	}
};
