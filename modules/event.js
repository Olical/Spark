function(element, type, callback) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	
	if(element.addEventListener)
		element.addEventListener(type, function(event) { callback(event); }, false);
	else if(element.attachEvent)
	{
		element['e' + type + callback] = callback;
		element[type + callback] = function() { element['e' + type + callback](window.event); }
		element.attachEvent('on' + type, element[type + callback]);
	}
};
