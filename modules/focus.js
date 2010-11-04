function(element) {
	if(typeof element == 'string')
		element = Sizzle(element);
	for(var e in element)
	{
		element[e].focus();
	}
};
