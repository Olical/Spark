/*!
 * Replace plugin for Spark JavaScript library v1.1.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 */

(function() {
	// Setup the plugin
	SparkFn.replace = function() {
		// On focus, if default value then empty
		Spark(this.elements).event('focus', function(e) {
			if(e.target.value == e.target.defaultValue)
				e.target.value = '';
		});
		
		// On blur, if empty set value to default
		Spark(this.elements).event('blur', function(e) {
			if(e.target.value == '')
				e.target.value = e.target.defaultValue;
		});
	};
	
	// Reinitialise Spark
	SparkIn();
})();
