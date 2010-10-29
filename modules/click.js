function(element, callback) {
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
		
	if(element.addEventListener)
		element.addEventListener('click', function(event) { callback(event); }, false);
	else if(element.attachEvent)
	{
		element['e' + 'click' + callback] = callback;
		element['click' + callback] = function() { element['e' + 'click' + callback](window.event); }
		element.attachEvent('onclick', element['click' + callback]);
	}
};