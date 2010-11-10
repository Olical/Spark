function(element, find, link) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
		element[e].innerHTML = element[e].innerHTML.replace(new RegExp('(' + find + ')', 'gi'), "<a href='" + link + "'>$1</a>");
};
