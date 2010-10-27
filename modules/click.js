function(element, callback) {
	if(isNaN(element))
	{
		element = document.querySelectorAll(element)[0];
	}
	element.addEventListener('click', callback, false);
};
