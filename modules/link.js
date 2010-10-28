function(element, find, link) {
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
	element.innerHTML = element.innerHTML.replace(new RegExp('(' + find + ')', 'gi'), "<a href='" + link + "'>$1</a>");
};