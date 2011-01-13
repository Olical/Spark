SparkFn.css = function(css) {
	for(var e in this.elements)
	{
		for(var c in css)
		{
			this.elements[e].style[c] = css[c];
		}
	}
	
	// If they did not set anything, return the first element's style
	if(css === undefined)
		return this.elements[0].style;
	
	// Otherwise return the Spark object
	return this;
};
