function(element, content, append) {
	element = document.querySelectorAll(element)[0];
	
	if(content === undefined)
	{
		// Return value of the selected element
		return element.value;
	}
	else
	{
		if(append === undefined || append === false)
		{
			// Replace value
			element.value = content;
		}
		else if(append === true)
		{
			// Append value
			element.value += content;
		}
	}
};
