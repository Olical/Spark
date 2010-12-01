/*!
 * Twitter plugin for Spark JavaScript library v1.0.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 */

(function() {
	// Create a necessary variable
	window.twitterPluginData = new Array();
	
	// Setup the plugin
	SparkPlugin.twitter = function(user) {
		// Set up the callback function
		window.twitterPluginDataLoaded = function(data) {
			$(twitterPluginData[data.query]).content(data.results[0].text);
		};
		
		// Grab the head element
		var head = document.getElementsByTagName('head')[0];
		
		// Create a script element
		var script = document.createElement('script');
		
		// Set the type
		script.type = 'text/javascript';
		
		// Set the source file
		script.src = 'http://search.twitter.com/search.json?callback=twitterPluginDataLoaded&q=from%3A' + user;
		
		// Just so we can access it, because we can pass parameters
		twitterPluginData['from%3A' + user] = this.selector;
		
		// Add the script element to the head
		head.appendChild(script);
	};
	
	// Reinitialise Spark
	SparkInit();
})();
