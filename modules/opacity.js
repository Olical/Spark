function(element, opacity, timeframe, callback) {
	if(typeof element == 'string')
		element = Sizzle(element);
	for(var e in element)
	{
		element[e].style.width = element[e].currentStyle.width;
		element[e].style.height = element[e].currentStyle.height;
		
		if(opacity === undefined)
			return element[e].style.opacity * 100; // Return the transparency of the element
		else
		{
			if(timeframe === undefined)
			{
				// Change transparency instantly
				element[e].style.opacity = opacity / 100;
				element[e].style.filter = 'alpha(opacity=' + opacity + ')';
			}
			else
			{
				// Change transparency over the timeframe
				// If not already, set the opacity to full
				var styleProp = 'opacity';
				if(element[e].currentStyle)
					var isSet = element[e].currentStyle[styleProp];
				else if(window.getComputedStyle)
					var isSet = document.defaultView.getComputedStyle(element[e], null).getPropertyValue(styleProp);
				if(isSet == 1)
				{
					element[e].style.opacity = 1;
					element[e].style.filter = 'alpha(opacity=' + opacity + ')';
				}
			
				// Work out difference
				var opacitydiff = opacity - (element[e].style.opacity * 100);
			
				// Work out how miliseconds per step (100 in total)
				var steptime = timeframe / 100;
			
				// Work out how many it needs to move each step
				var opacitypps = opacitydiff / 100;
			
				// Set up original opacity
				var origopacity = element[e].style.opacity * 100;
			
				// Loop through all 100 steps setting a time out opacity change each time
				var timers = [];
				for(var i = 0; i <= 100; i++)
				{
					timers[i] = setTimeout((function(privateEye) {
					return function() {
						var newopacity = origopacity + (opacitypps * privateEye);
						element[e].style.opacity = newopacity / 100;
						element[e].style.filter = 'alpha(opacity=' + newopacity + ')';
					}})(i), i * steptime);
				}
				if(callback !== undefined)
					var callbackTimer = setTimeout(callback, 100 * steptime); // Set callback timer
			}
		}
	}
};
