SparkFn.text = function(content, append) {
	// Set up any variables
	var element = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Return content of the selected element if there is no content and check for Firefox
			if(typeof content === 'undefined') {
				if(document.all){
					return element.innerText;
				}
				else {
					return element.textContent;
				}
			}
			else {
				// Append or replace content depending on the append flag and check for Firefox
				if(document.all){
					(!append) ?
						element.innerText = content :
						element.innerText += content;
				}
				else {
					(!append) ?
						element.textContent = content :
						element.textContent += content;
				}
			}
		}
	}
	
	// Return the Spark object
	return this;
};