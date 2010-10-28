function(element, content, append) {
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
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
