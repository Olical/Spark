function(element, content, append) {
	var element = document.querySelectorAll(element)[0];
	
	if(content === undefined)
	{
		// Return content of the selected element
		return element.textContent;
	}
	else
	{
		if(append === undefined || append === false)
		{
			// Replace content
			element.textContent = content;
		}
		else if(append === true)
		{
			// Append content
			element.textContent += content;
		}
	}
};
