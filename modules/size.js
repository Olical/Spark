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
			var widthppm = widthDiff / timeframe;
			var heightppm = heightDiff / timeframe;
			
			// Set up times
			var d = new Date();
			var endtime = d.getTime() + timeframe;
			
			// Get the original width and height
			var oldwidth = element.offsetWidth;
			var oldheight = element.offsetHeight;
			
			var iteration;
			
			// Loop through until done
			while(d.getTime() <= endtime)
			{
				iteration = timeframe - (endtime - d.getTime());
				element.style.width = oldwidth + (iteration * widthppm) + 'px';
				element.style.height = oldheight + (iteration * heightppm) + 'px';
				d = new Date();
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
