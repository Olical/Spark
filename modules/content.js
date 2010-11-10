function(element, content, append) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
	{
		if(content === undefined)
			return element[e].innerHTML; // Return content of the selected element
		else
		{
			if(append === undefined || append === false)
				element[e].innerHTML = content; // Replace content
			else if(append === true)
				element[e].innerHTML += content; // Append content
		}
	}
};
