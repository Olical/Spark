SparkFn.css = function(css) {
	// Allow the passing of the element so it can be accessed from within the library
	if(css.elements !== undefined) {
		this.customElements = this.elements;
		this.elements = css.elements;
		delete css.elements;
	}
	
	for(var e in this.elements) {
		for(var c in css) {
			this.elements[e].style[c] = css[c];
			
			if(c == 'opacity') {
				this.elements[e].style.MozOpacity = css[c];
				this.elements[e].style.KhtmlOpacity = css[c];
				this.elements[e].style.filter = 'alpha(opacity=' + (css[c] * 100) + ')';
				this.elements[e].style.zoom = '1';
			}
		}
	}
	
	if(this.customElements !== undefined) {
		this.elements = this.customElements;
		delete this.customElements;
	}
	
	// If they did not set anything, return the first element's style
	if(css === undefined)
		return this.elements[0].style;
	
	// Otherwise return the Spark object
	return this;
};
