SparkFn.data = (function () {
	// Set up the variables
	var storage = {};
	var counter = 1;
	
	return function (el, key, value) {
		var uid = el.uniqueID || (el.uniqueID = counter++);
		storage[uid] || (storage[uid] = {});
		
		if(typeof value != "undefined") {
			storage[uid][key] = value;
		}
		else {
			return storage[uid][key];
		}
	};
})();