function(element) {
	if(typeof element == 'string')
		element = Sizzle(element);
	for(var e in element)
	{
		// Set the element[e]s position to relative
		element[e].style.position = 'relative';
	
		// Set up the element[e] objects
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
		element[e].appendChild(topBox);
		element[e].appendChild(bottomBox);
	
		// Set up the individual element[e] objects
		var top = Sizzle('div.spark-corner-top div', element[e]);
		var bottom = Sizzle('div.spark-corner-bottom div', element[e]);
	
		// Loop through all lines of the corner applying formatting
		for(var i = 0; i < 5; i++)
		{
			top[i].style.height = '1px';
			top[i].style.backgroundColor = element[e].style.backgroundColor;
		
			bottom[i].style.height = '1px';
			bottom[i].style.backgroundColor = element[e].style.backgroundColor;
		
			if(i == 1 || i == 3)
			{
				top[i].style.width = (((element[e].offsetWidth - (5 - i)) + i) - 5) + 2 + 'px';
				top[i].style.marginLeft = (4 - i) + 'px';
			
				bottom[i].style.width = ((element[e].offsetWidth - i) - (i + 2)) + 2 + 'px';
				bottom[i].style.marginLeft = i + 'px';
			}
			else
			{
				top[i].style.width = ((element[e].offsetWidth - (5 - i)) + i) - 5 + 'px';
				top[i].style.marginLeft = (5 - i) + 'px';
			
				bottom[i].style.width = (element[e].offsetWidth - i) - (i + 2) + 'px';
				bottom[i].style.marginLeft = i + 1 + 'px';
			}
		}
	}
};
