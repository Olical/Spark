function(element, content, append) {
	if(content === undefined)
	{
		// Return content
		var elements = SimpleSelector.find(element);
		
		for(var i in elements)
		{
			document.write(elements[i]);
		}
	}
	else
	{
		if(append === undefined || append === false)
		{
			// Replace content
		}
		else if(append === true)
		{
			// Append content
		}
	}
};
