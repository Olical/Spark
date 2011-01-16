SparkFn.css = function(css) {
	for(var e in this.elements) {
		for(var c in css) {
			this.elements[e].style[c] = css[c];
			
			if(c == 'opacity') {
				this.elements[e].style.MozOpacity = css[c];
				this.elements[e].style.KhtmlOpacity = css[c];
				this.elements[e].style.filter = 'alpha(opacity=' + (css[c] * 100) + ')';
			}
		}
	}
	
	// If they did not set anything, return the first element's style
	if(css === undefined)
		return this.elements[0].style;
	
	// Otherwise return the Spark object
	return this;
};
