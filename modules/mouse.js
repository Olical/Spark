function(element, action, callback) {
	var element = document.querySelectorAll(element)[0];
	element.addEventListener('mouse' + action, callback, false);
};