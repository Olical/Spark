function(element, width, height, timeframe, callback) {
	var rawelement = element;
	element = document.querySelectorAll(element)[0];
	if(width !== undefined && height !== undefined)
	{
		if(timeframe !== undefined)
		{
			// Resize in timeframe
			// Work out distance
			var widthdiff = width - parseInt(element.style.width);
			var heightdiff = height - parseInt(element.style.height);
			
			// Work out how miliseconds per step (100 in total)
			var steptime = timeframe / 100;
			
			// Work out how many pixels it needs to move each step
			var widthpps = widthdiff / 100;
			var heightpps = heightdiff / 100;
			
			// Set up original sizes
			var origwidth = parseInt(element.style.width);
			var origheight = parseInt(element.style.height);
			
			// Loop through all 100 steps setting a time out resize each time
			var timers = [];
			for(var i = 0; i <= 100; i++)
			{
				timers[i] = setTimeout((function(privateEye) {
				return function() {
					element.style.width = origwidth + (widthpps * privateEye) + 'px';
					element.style.height = origheight + (heightpps * privateEye) + 'px';
				}})(i), i * steptime);
			}
			
			if(callback !== undefined)
			{
				// Set callback timer
				var callbackTimer = setTimeout(callback, 100 * steptime);
			}
		}
		else
		{
			// Resize instantly
			element.style.width = width;
			element.style.height = height;
		}
	}
	else
	{
		// Give size as an object.
		function size() {
			var width;
			var height;
		};
		size.width = element.offsetWidth;
		size.height = element.offsetHeight;
		return size;
	}
};
