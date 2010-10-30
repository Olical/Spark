function(element, find, link) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	element.innerHTML = element.innerHTML.replace(new RegExp('(' + find + ')', 'gi'), "<a href='" + link + "'>$1</a>");
};
