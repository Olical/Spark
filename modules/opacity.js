function(element, opacity, timeframe, callback) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	if(opacity === undefined)
		return element.style.opacity * 100; // Return the transparency of the element
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
			// If not already, set the opacity to full
			var styleProp = 'opacity';
			if(element.currentStyle)
				var isSet = element.currentStyle[styleProp];
			else if(window.getComputedStyle)
				var isSet = document.defaultView.getComputedStyle(element,null).getPropertyValue(styleProp);
			if(isSet == 1)
				element.style.opacity = 1;
			
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
					var newopacity = (origopacity + (opacitypps * privateEye));
					element.style.opacity = newopacity / 100;
					element.style.filter = 'alpha(opacity=' + newopacity + ')';
				}})(i), i * steptime);
			}
			if(callback !== undefined)
				var callbackTimer = setTimeout(callback, 100 * steptime); // Set callback timer
		}
	}
};
