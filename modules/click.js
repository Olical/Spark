function(element, callback) {
	element = document.querySelectorAll(element)[0];
	element.addEventListener('click', callback, false);
};
