/*!
 * Twitter plugin for Spark JavaScript library v1.1.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 */

(function() {
	// Create a necessary variable
	window.twitterPluginData = new Array();
	
	// Setup the plugin
	SparkFn.twitter = function(user) {
		Spark.jsonp('http://search.twitter.com/search.json', 'sparkTwitterPluginLoaded', 'q=from%3A' + user);
		
		// Put the elements in scope
		window.sparkTwitterPluginData['q=from%3A' + user] = this.elements;
		
		window.sparkTwitterPluginLoaded = function(data) {
		   Spark(sparkTwitterPluginData[data.query]).content(data.results[0].text);
		}
	};
	
	// Reinitialise Spark
	SparkIn();
})();
