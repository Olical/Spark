function(element, content, append) {
	if(content === undefined)
	{
		// Return content of the selected element
		var element = document.querySelectorAll(element);
		return element[0].textContent;
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
