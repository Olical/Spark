function(element) {
	var raw = element;
	if(typeof element == 'string')
		element = document.querySelector(element);
	
	// Set the elements position to relative
	element.style.position = 'relative';
	
	// Set up the element objects
	var topBox = document.createElement('div');
	var bottomBox = document.createElement('div');
	
	// Apply formatting to boxes
	topBox.style.width = '100%';
	topBox.style.height = '5px';
	topBox.style.position = 'absolute';
	topBox.style.top = '-5px';
	topBox.innerHTML = '<div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div>';
	topBox.setAttribute('class', 'spark-corner-top');
	
	bottomBox.style.width = '100%';
	bottomBox.style.height = '5px';
	bottomBox.style.position = 'absolute';
	bottomBox.style.bottom = '-5px';
	bottomBox.innerHTML = '<div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div>';
	bottomBox.setAttribute('class', 'spark-corner-bottom');
	
	// Add them to the parent
	element.appendChild(topBox);
	element.appendChild(bottomBox);
	
	// Set up the individual element objects
	var top = document.querySelectorAll(raw + ' div.spark-corner-top div');
	var bottom = document.querySelectorAll(raw + ' div.spark-corner-bottom div');
	
	// Loop through all lines of the corner applying formatting
	for(var i = 0; i < 5; i++)
	{
		top[i].style.height = '1px';
		top[i].style.width = ((element.offsetWidth - (5 - i)) + i) - 5 + 'px';
		top[i].style.backgroundColor = element.style.backgroundColor;
		top[i].style.marginLeft = (5 - i) + 'px';
		
		bottom[i].style.height = '1px';
		bottom[i].style.width = (element.offsetWidth - i) - (i + 2) + 'px';
		bottom[i].style.backgroundColor = element.style.backgroundColor;
		bottom[i].style.marginLeft = i + 1 + 'px';
	}
};
