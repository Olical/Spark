function(element, content, append) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
	{
		if(content === undefined)
			return element[e].value; // Return value of the selected element
		else
		{
			if(append === undefined || append === false)
				element[e].value = content; // Replace value
			else if(append === true)
				element[e].value += content; // Append value
		}
	}
};
