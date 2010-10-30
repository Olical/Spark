function(element, content, append) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	
	if(content === undefined)
		return element.innerHTML; // Return content of the selected element
	else
	{
		if(append === undefined || append === false)
			element.innerHTML = content; // Replace content
		else if(append === true)
			element.innerHTML += content; // Append content
	}
};
