function(element, type, callback) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
	{
		if(element[e].addEventListener)
			element[e].addEventListener(type, function(event) { callback(event); }, false);
		else if(element[e].attachEvent)
		{
			element['e' + type + callback] = callback;
			element[type + callback] = function() { element['e' + type + callback](window.event); }
			element[e].attachEvent('on' + type, element[type + callback]);
		}
	}
};
