SparkFn.load = function(file) {
	// Create the script tag with the specified file as its src
	Spark('head').element('insert', 'script', {
		type: 'text/javascript',
		src: file
	});
};