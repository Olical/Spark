function(element, action, callback) {
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
	element.addEventListener('mouse' + action, function(event) { callback(event); }, false);
};
