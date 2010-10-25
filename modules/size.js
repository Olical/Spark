function(element, width, height, timeframe) {
	element = document.querySelectorAll(element)[0];
	if(width !== undefined && height !== undefined)
	{
		if(timeframe !== undefined)
		{
			// Resize in timeframe
			// Work out distance
			var widthDiff = width - element.offsetWidth;
			var heightDiff = height - element.offsetHeight;
			
			// Work out pixels per milisecond
			var widthppm = timeframe / widthDiff;
			var heightppm = timeframe / heightDiff;
			
			// Set up times
			var date = new Date();
			var endtime = date.getTime();
			
			// Loop through until done
			while(date.getTime() <= endtime)
			{
				
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
