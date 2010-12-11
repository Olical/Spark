SparkFn.location = function(x, y, timeframe, callback) {
	for(var e in this.elements)
	{
		if(x && y)
		{
			if(timeframe)
			{
				// Resize in timeframe
				// Work out distance
				var xdiff = x - parseInt(this.elements[e].offsetLeft);
				var ydiff = y - parseInt(this.elements[e].offsetTop);
				
				// Work out how many frames are required
				var frames = timeframe / (1000 / this.fps);
				
				// Work out how many pixels it needs to move each frame
				var xpps = xdiff / frames;
				var ypps = ydiff / frames;
				
				// Set up original positions
				var origx = parseInt(this.elements[e].offsetLeft);
				var origy = parseInt(this.elements[e].offsetTop);
				
				// Loop through all frames setting a time out reposition each time
				var timers = [];
				for(var i = 0; i <= frames; i++)
				{
					setTimeout((function(privateEye, elements) {
					return function() {
						elements[e].style.left = origx + (xpps * privateEye) + 'px';
						elements[e].style.top = origy + (ypps * privateEye) + 'px';
					}})(i, this.elements), i * (1000 / this.fps), this.elements);
				}
				
				// Correct floating point problem
				setTimeout((function(privateEye, elements) {
				return function() {
					elements[e].style.left = x + 'px';
					elements[e].style.top = y + 'px';
				}})(i, this.elements), timeframe, this.elements);
				
				// Set callback timer
				if(callback)
					setTimeout(callback, timeframe);
			}
			else
			{
				// Resize instantly
				this.elements[e].style.left = x + 'px';
				this.elements[e].style.top = y + 'px';
			}
		}
		else
			return {x: this.elements[0].offsetLeft, y: this.elements[0].offsetTop}; // Return the location as an object
	}
};
