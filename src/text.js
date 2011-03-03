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
			if(content === undefined) {
				if(document.all) {
					return element.innerText;
				}
				else {
					return element.textContent;
				}
			}
			else {
				// Append or replace content depending on the append flag and check for Firefox
				if(document.all){
					if(!append) {
						element.innerText = content;
					}
					else {
						element.innerText += content;
					}
				}
				else {
					if(!append) {
						element.textContent = content;
					}
					else {
						element.textContent += content;
					}
				}
			}
		}
	}
	
	// Return the Spark object
	return this;
};