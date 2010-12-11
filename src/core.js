/*!
 * Spark JavaScript library v1.0.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
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
	window.Spark = window.$ = function(selector, context) {
		// Create the result object
		var result = new Object();
		
		// Check that they have passed arguments to the class
		if(selector)
		{
			// If context then get result with context, if not just get the element
			// This also checks if querySelectorAll is avaliable, is so it uses it instead of Sizzle
			if(!document.querySelectorAll)
			{
				// Run sizzle with or without a context
				(context) ? result = Sizzle(selector, context) : Sizzle(selector);
			}
			else
			{
				// Run the query selector with or without a context
				var resultb = ((context) ? context : document).querySelectorAll(selector);
				
				// Change the format of the returned elements so it resembles sizzle
				for(var i = 0; i < resultb.length; ++i)
					result[i] = resultb[i];
			}
		}
		
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
	
	// Function for making the pageX/Y values work in IE
	Spark.fixEvents = function(theEvent) {
		if(!theEvent.pageX)
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
	for(var i in Spark())
		Spark[i] = $[i] = Spark()[i];
};
