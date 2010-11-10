function(element, width, height, timeframe, callback) {
	if(typeof element == 'string')
		element = Sizzle(element);
	else if(element.constructor != Array)
		element = new Array(element);
	
	for(var e in element)
	{
		if(width !== undefined && height !== undefined)
		{
			if(timeframe !== undefined)
			{
				// Resize in timeframe
				// Work out distance
				var widthdiff = width - parseInt(element[e].style.width);
				var heightdiff = height - parseInt(element[e].style.height);
			
				// Work out how miliseconds per step (100 in total)
				var steptime = timeframe / 100;
			
				// Work out how many pixels it needs to move each step
				var widthpps = widthdiff / 100;
				var heightpps = heightdiff / 100;
			
				// Set up original sizes
				var origwidth = parseInt(element[e].style.width);
				var origheight = parseInt(element[e].style.height);
			
				// Loop through all 100 steps setting a time out resize each time
				var timers = [];
				for(var i = 0; i <= 100; i++)
				{
					timers[i] = setTimeout((function(privateEye) {
					return function() {
						element[e].style.width = origwidth + (widthpps * privateEye) + 'px';
						element[e].style.height = origheight + (heightpps * privateEye) + 'px';
					}})(i), i * steptime);
				}
			
				if(callback !== undefined)
					var callbackTimer = setTimeout(callback, 100 * steptime); // Set callback timer
			}
			else
			{
				// Resize instantly
				element[e].style.width = width;
				element[e].style.height = height;
			}
		}
		else
		{
			// Give size as an object.
			return {width: element[e].offsetWidth, height: size.height = element[e].offsetHeight};
		}
	}
};
