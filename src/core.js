/*!
 * Spark JavaScript library v2.3.7
 * http://sparkjs.co.uk/
 * 
 * Copyright 2011, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Includes json2.js
 * http://www.json.org/json2.js
 */

// Create the function holder
window.SparkFn = {};

// Create the initialise function
window.SparkIn = function() {
	// Initialise any variables
	var s = null,
		i = null;
	
	// Create the Spark object
	window.$ = window.Spark = function(selector, context) {
		// Initialise any variables
		var result = {},
			f = null;
		
		// Check if a selector has been passed
		if(typeof selector !== 'undefined') {
			// If so check if Sizzle needs to be run
			if(typeof selector === 'string') {
				// Run sizzle with or without a context
				result = (context) ? SparkSe(selector, context) : SparkSe(selector);
			}
			else {
				// If it is an element
				if(typeof HTMLElement === 'object' ?
					selector instanceof HTMLElement :
					typeof selector === 'object' && selector.nodeType === 1 && typeof selector.nodeName === 'string') {
					// Place it within the result object
					result = {0: selector};
				}
				else {
					// It is an object, copy it into result
					result = selector;
				}
			}
		}
		
		// Create the built object
		var built = {};
		
		// Add the functions to the built object
		for(f in SparkFn) {
			if(SparkFn.hasOwnProperty(f)) {
				built[f] = SparkFn[f];
			}
		}
		
		// Add the results to the built object
		built.elements = result;
		
		// Return the built object
		return built;
	};
	
	// Check if SparkBk does not exist yet
	if(typeof window.SparkBk === 'undefined') {
		// Back up Spark and $ for use in noConflict mode
		window.SparkBk = window.$;
	}
	
	s = Spark();
	// Take out the need for brackets
	for(i in s) {
		if(s.hasOwnProperty(i)) {
			$[i] = Spark[i] = s[i];
		}
	}
};