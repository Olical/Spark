/*!
 * Spark JavaScript library v1.4.3
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
window.SparkFn = new Object();

// Create the initialise function
window.SparkIn = function()
{
	// Create the Spark instances also under the alias of $
	window.Spark = function(selector, context) {
		// Create the result object
		var result = new Object();
		
		// Check that they have passed arguments to the class
		if(selector !== undefined)
			// Run sizzle with or without a context
			result = (context) ? Sizzle(selector, context) : Sizzle(selector);
		
		// Assign data to the built object
		var built = {
			fps: 60,
			selector: selector,
			elements: result
		};
		
		// Add in the functions
		for(var p in SparkFn)
			built[p] = SparkFn[p];
		
		// Return the functions
		return built;
	};
	
	if(!SparkCo) window.$ = Spark;
	
	// Function for making the pageX/Y values work in IE
	Spark.fixEvents = function(theEvent) {
		if(theEvent.pageX === undefined)
		{
			var d = (document.documentElement && document.documentElement.scrollLeft != null) ? document.documentElement : document.body;
			docX = theEvent.clientX + d.scrollLeft;
			docY = theEvent.clientY + d.scrollTop;
			theEvent.pageX = docX;
			theEvent.pageY = docY;
		}
		
		if(!theEvent.target)
			theEvent.target = theEvent.srcElement;
		
		// Return the calculated positions in an object
		return theEvent;
	};
	
	// Take out the need for brackets
	for(var i in Spark()) {
		Spark[i] = Spark()[i];
		
		if(SparkCo !== undefined) $[i] = Spark()[i];
	}
};