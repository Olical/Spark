function(element, content, append) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	if(content === undefined)
		return element.value; // Return value of the selected element
	else
	{
		if(append === undefined || append === false)
			element.value = content; // Replace value
		else if(append === true)
			element.value += content; // Append value
	}
};
