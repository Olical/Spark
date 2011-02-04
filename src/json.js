SparkFn.json = function(method, data) {
	// Check what we need to do
	if(method == 'encode') {
		return JSON.stringify(data);
	}
	else if(method == 'decode') {
		return JSON.parse(data);
	}
};