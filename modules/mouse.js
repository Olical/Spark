function(element, action, callback) {
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
	
	if(element.addEventListener)
		element.addEventListener('mouse' + action, function(event) { callback(event); }, false);
	else if(element.attachEvent)
	{
		element['emouse' + action + callback] = callback;
		element['mouse' + action + callback] = function() { element['emouse' + action + callback](window.event); }
		element.attachEvent('onmouse' + action, element['mouse' + action + callback]);
	}
};
