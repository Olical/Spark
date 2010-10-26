function(element, action, callback) {
	element = document.querySelectorAll(element)[0];
	element.addEventListener('mouse' + action, callback, false);
};
