/*!
 * Replace plugin for Spark JavaScript library v1.1.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 */

(function() {
	// Setup the plugin
	SparkFn.replace = function() {
		// Loop through all returned elements
		for(var e in this.elements)
		{
			// On focus, if default value then empty
			$(this.selector).event('focus', function(e) {
				if(e.target.value == e.target.defaultValue)
					e.target.value = '';
			});
			
			// On blur, if empty set value to default
			$(this.selector).event('blur', function(e) {
				if(e.target.value == '')
					e.target.value = e.target.defaultValue;
			});
		}
	};
	
	// Reinitialise Spark
	SparkIn();
})();
