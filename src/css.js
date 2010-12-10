SparkFn.css = function(css) {
	for(var e in this.elements)
	{
		for(var c in css)
		{
			this.elements[e].style[c] = css[c];
		}
	}
	
	return this.elements[0].style;
};
