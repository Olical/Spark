SparkFn.data =  function (el, key, value) {
	// Set up the variables
	var storage = {};
	var counter = 1;
	
	var uid = el.uniqueID || (el.uniqueID = counter++);
	storage[uid] || (storage[uid] = {});
	
	if(value !== undefined) {
		storage[uid][key] = value;
	}
	else {
		return storage[uid][key];
	}
};