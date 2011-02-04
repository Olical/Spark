SparkFn.data = (function () {
	// Set up the variables
	var storage = {};
	var counter = 1;
	
	// Return the function to manage saving data
	return function (el, key, value) {
		// Get the unique id
		var uid = el.uniqueID || (el.uniqueID = counter++);
		
		// Set up a place to store the data
		storage[uid] || (storage[uid] = {});
		
		// Check if a value has been passed
		if(typeof value != 'undefined') {
			// Set the value
			storage[uid][key] = value;
			
			// Return the Spark object
			return this;
		}
		else {
			// Return the value
			return storage[uid][key];
		}
	};
})();