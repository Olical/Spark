function(element, visible) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	if(visible === true)
		element.style.display = 'block'; // Show it
	else if(visible === false)
		element.style.display = 'none'; // Hide it
	else if(visible === undefined)
	{
		// Toggle
		if(element.style.display != 'none')
			element.style.display = 'none'; // Hide it
		else
			element.style.display = 'block'; // Show it
	}
};
