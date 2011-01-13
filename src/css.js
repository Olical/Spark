SparkFn.css = function(css) {
	for(var e in this.elements)
	{
		for(var c in css)
		{
			this.elements[e].style[c] = css[c];
		}
	}
	
	if(css === undefined)
		return this.elements[0].style;
	
	return this;
};
