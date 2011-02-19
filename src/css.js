SparkFn.css = function(css) {
	// Set up any variables
	var element = null;
	var calSin = null;
	var calCos = null;
	var radians = null;
	var parentNode = null;
	
	// Loop through all of the elements
	for(var e in this.elements) {
		// Make sure that it is an element
		if(this.elements.hasOwnProperty(e)) {
			// Grab the current element
			element = this.elements[e];
		
			// Check if they provided a css object
			if(css !== undefined) {
				// Loop through all css values assigning them
				for(var c in css) {
					// If the selector contains dashes then convert it to the JavaScript version
					if(c.indexOf('-') !== -1) {
						element.style[c.replace(/-([a-z])/gi, function(s, g1) { return g1.toUpperCase() })] = css[c];
					}
					else {
						element.style[c] = css[c];
					}
				
					// If opacity is being set we need to set all the other values for cross browser opacity
					if(c == 'opacity') {
						element.style.MozOpacity = css[c];
						element.style.KhtmlOpacity = css[c];
						element.style.filter = 'alpha(opacity=' + (css[c] * 100) + ')';
						element.style.zoom = '1';
					}
					
					// If rotation is being set we need to make it cross browser
					if(c == 'rotation') {
						if(Spark.client().browser == 'Explorer') {
							radians = parseInt(css[c]) * (Math.PI * 2 / 360);
							calSin = Math.sin(radians);
							calCos = Math.cos(radians);
							element.style.filter = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + calCos + ', M12=-' + calSin + ',M21=' + calSin + ', M22=' + calCos + ', sizingMethod="auto expand")';
						
							if(!Spark(element).classes('has', 'IETransformContainer')) {
								parentNode = element.parentNode;
								var filter;
							
								// This is the container to offset the strange rotation behavior
								var container = document.createElement('div');
								Spark(element).classes('add', 'IETransformContainer');
							
								container.style.width = element.offsetWidth + 'px';
								container.style.height = element.offsetHeight + 'px';
							
								container.xOriginalWidth = element.offsetWidth;
								container.xOriginalHeight = element.offsetHeight;
								container.style.position = 'absolute'
								container.style.zIndex = element.currentStyle.zIndex;
							
							
								var horizPaddingFactor = 0;
								var vertPaddingFactor = 0;
								if (obj.currentStyle.display == 'block') {
									container.style.left = element.offsetLeft + 13 - horizPaddingFactor + "px";
									container.style.top = element.offsetTop + 13 +- vertPaddingFactor + 'px';
								}
								else {
									container.style.left = element.offsetLeft + "px";
									container.style.top = element.offsetTop + 'px';
								}
							
							
								element.style.top = "auto";
								element.style.left = "auto"
								element.style.bottom = "auto";
								element.style.right = "auto";
								// This is what we need in order to insert to keep the document
								// flow ok
								var replacement = element.cloneNode(true);
								replacement.style.visibility = 'hidden';
							
								element.replaceNode(replacement);
							
								// now, wrap container around the original node ... 
								element.style.position = 'absolute';
								container.appendChild(element);
								parentNode.insertBefore(container, replacement);
								container.style.backgroundColor = 'transparent';

								container.style.padding = '0';
							}
						}
						
						element.style.WebkitTransform = 'rotate(' + css[c] + ')';
						element.style.MozTransform = 'rotate(' + css[c] + ')';
						element.style.OTransform = 'rotate(' + css[c] + ')';
						element.style.transform = 'rotate(' + css[c] + ')';
						element.style.zoom = '1';
					}
				}
			}
			else {
				// Return the elements attributes
				return element.style;
			}
		}
	}
	
	// Return the Spark object
	return this;
};