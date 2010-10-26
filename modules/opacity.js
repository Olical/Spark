function(element, opacity, timeframe, callback) {
	element = document.querySelectorAll(element)[0];
	if(opacity === undefined)
	{
		// Return the transparency of the element
		return element.style.opacity * 100;
	}
	else
	{
		if(timeframe === undefined)
		{
			// Change transparency instantly
			element.style.opacity = opacity / 100;
			element.style.filter = 'alpha(opacity=' + opacity + ')';
		}
		else
		{
			// Change transparency over the timeframe
			// Work out difference
			var opacitydiff = opacity - (element.style.opacity * 100);
			
			// Work out how miliseconds per step (100 in total)
			var steptime = timeframe / 100;
			
			// Work out how many it needs to move each step
			var opacitypps = opacitydiff / 100;
			
			// Set up original opacity
			var origopacity = element.style.opacity * 100;
			
			// Loop through all 100 steps setting a time out opacity change each time
			var timers = [];
			for(var i = 0; i <= 100; i++)
			{
				timers[i] = setTimeout((function(privateEye) {
				return function() {
					var newopacity = (origopacity + (opacitypps * privateEye)) / 100;
					element.style.opacity = newopacity;
					element.style.filter = 'alpha(opacity=' + newopacity + ')';
				}})(i), i * steptime);
			}
			
			if(callback !== undefined)
			{
				// Set callback timer
				var callbackTimer = setTimeout(callback, 100 * steptime);
			}
		}
	}
};