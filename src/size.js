SparkFn.size = function(width, height, timeframe, callback) {
	for(var e in this.elements)
	{
		if(width !== undefined && height !== undefined)
		{
			if(timeframe !== undefined)
			{
				// Resize in timeframe
				// Work out distance
				var widthdiff = width - parseInt(this.elements[e].offsetWidth);
				var heightdiff = height - parseInt(this.elements[e].offsetHeight);
				
				// Work out how many frames are required
				var frames = timeframe / (1000 / this.fps);
				
				// Work out how many pixels it needs to move each frame
				var widthpps = widthdiff / frames;
				var heightpps = heightdiff / frames;
				
				// Set up original sizes
				var origwidth = parseInt(this.elements[e].offsetWidth);
				var origheight = parseInt(this.elements[e].offsetHeight);
				
				// Loop through all frames setting a time out resize each time
				var timers = [];
				for(var i = 0; i <= frames; i++)
				{
					setTimeout((function(privateEye, elements) {
					return function() {
						elements[e].style.width = origwidth + (widthpps * privateEye) + 'px';
						elements[e].style.height = origheight + (heightpps * privateEye) + 'px';
					}})(i, this.elements), i * (1000 / this.fps), this.elements);
				}
				
				// Correct floating point problem
				setTimeout((function(privateEye, elements) {
				return function() {
					elements[e].style.width = width + 'px';
					elements[e].style.height = height + 'px';
				}})(i, this.elements), timeframe, this.elements);
				
				// Set callback timer
				if(callback !== undefined)
					setTimeout(callback, timeframe);
			}
			else
			{
				// Resize instantly
				this.elements[e].style.width = width + 'px';
				this.elements[e].style.height = height + 'px';
			}
		}
		else
			return {width: this.elements[e].offsetWidth, height: this.elements[e].offsetHeight}; // Give size as an object.
	}
};
