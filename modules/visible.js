function(element, visible) {
	element = document.querySelectorAll(element)[0];
	
	if(visible === true)
	{
		// Show it
		element.style.display = 'block';
	}
	else if(visible === false)
	{
		// Hide it
		element.style.display = 'none';
	}
	else if(visible === undefined)
	{
		// Toggle
		if(element.style != 'none')
		{
			// Hide it
			element.style.display = 'none';
		}
		else
		{
			// Show it
			element.style.display = 'block';
		}
	}
};
