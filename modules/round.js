function(element) {
	var raw = element;
	if(isNaN(element))
		element = document.querySelectorAll(element)[0];
	
	// Set the elements position to relative
	element.style.position = 'relative';
	
	// Add the two containing divs
	element.innerHTML = '<div class=\'spark-corner-top\' style=\'width: 100%; height: 5px;\'><div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div></div>' + element.innerHTML;
	element.innerHTML += '<div class=\'spark-corner-bottom\' style=\'width: 100%; height: 5px;\'><div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div></div>';
	
	// Set up the element objects
	var topBox = document.querySelectorAll(raw + ' div.spark-corner-top')[0];
	var bottomBox = document.querySelectorAll(raw + ' div.spark-corner-bottom')[0];
	var top = document.querySelectorAll(raw + ' div.spark-corner-top div');
	var bottom = document.querySelectorAll(raw + ' div.spark-corner-bottom div');
	
	// Apply formatting to boxes
	topBox.style.width = '100%';
	topBox.style.height = '5px';
	topBox.style.position = 'absolute';
	topBox.style.top = '-5px';
	
	bottomBox.style.width = '100%';
	bottomBox.style.height = '5px';
	bottomBox.style.position = 'absolute';
	bottomBox.style.bottom = '-5px';
	
	// Loop through all lines of the corner applying basic formatting
	for(var i = 0; i < 5; i++)
	{
		top[i].style.height = '1px';
		top[i].style.width = (element.offsetWidth - 5) + (i + 1) + 'px';
		top[i].style.backgroundColor = element.style.backgroundColor;
		
		bottom[i].style.height = '1px';
		bottom[i].style.width = element.offsetWidth - (i + 1) + 'px';
		bottom[i].style.backgroundColor = element.style.backgroundColor;
	}
};