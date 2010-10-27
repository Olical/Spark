function(element, content, append) {
	if(isNaN(element))
	{
		element = document.querySelectorAll(element)[0];
	}
	
	if(content === undefined)
	{
		// Return content of the selected element
		return element.innerHTML;
	}
	else
	{
		if(append === undefined || append === false)
		{
			// Replace content
			element.innerHTML = content;
		}
		else if(append === true)
		{
			// Append content
			element.innerHTML += content;
		}
	}
};
