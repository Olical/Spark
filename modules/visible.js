function(element, visible) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
	{
		if(visible === true)
			element[e].style.display = 'block'; // Show it
		else if(visible === false)
			element[e].style.display = 'none'; // Hide it
		else if(visible === undefined)
		{
			// Toggle
			if(element[e].style.display != 'none')
				element[e].style.display = 'none'; // Hide it
			else
				element[e].style.display = 'block'; // Show it
		}
	}
};
