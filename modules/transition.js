function(element, transition, timeframe, callback) {
	if(typeof element == 'string')
		element = document.querySelector(element);
	
	// Initialise Spark
	var s = new Spark();
	
	// If callback is not set then set it as a blank function
	if(callback === undefined)
		callback = function(){};
	
	// Check what type of transition it is and execute it
	if(transition == 'fadeout')
		s.opacity(element, 0, timeframe, function() { s.visible(element, false); callback(); });
	else if(transition == 'fadein')
	{
		s.opacity(element, 0);
		s.visible(element, true);
		s.opacity(element, 100, timeframe, callback);
	}
	else if(transition == 'slideup')
	{
		element.style.overflow = 'hidden';
		s.size(element, element.offsetWidth, 0, timeframe, function() { s.visible(element, false); callback(); });
	}
	else if(transition == 'slidedown')
	{
		element.style.overflow = 'hidden';
		var origheight = element.offsetHeight;
		s.size(element, element.offsetWidth, 0);
		s.visible(element, true);
		s.size(element, element.offsetWidth, origheight, timeframe, callback);
	}
};
