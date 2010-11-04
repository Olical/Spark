function(element, transition, timeframe, callback) {
	if(typeof element == 'string')
		element = Sizzle(element);
		
	// Initialise Spark
	var s = new Spark();
	
	for(var e in element)
	{
		// If callback is not set then set it as a blank function
		if(callback === undefined)
			callback = function(){};
	
		// Check what type of transition it is and execute it
		if(transition == 'fadeout')
		{
			s.opacity(element, 100);
			s.opacity(element, 0, timeframe, function() { s.visible(element, false); callback(); });
		}
		else if(transition == 'fadein')
		{
			s.opacity(element, 0);
			s.visible(element, true);
			s.opacity(element, 100, timeframe, callback);
		}
		else if(transition == 'slideup')
		{
			element[e].style.overflow = 'hidden';
			s.size(element, element[e].offsetWidth, 0, timeframe, function() { s.visible(element, false); callback(); });
		}
		else if(transition == 'slidedown')
		{
			element.style.overflow = 'hidden';
			var origheight = element[e].offsetHeight;
			s.size(element, element[e].offsetWidth, 0);
			s.visible(element, true);
			s.size(element, element[e].offsetWidth, origheight, timeframe, callback);
		}
	}
};
