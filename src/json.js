SparkFn.json = function(method, data) {
	// Decode or encode depending on the method string
	if(method === 'encode') {
		return JSON.stringify(data);
	}
	else if(method === 'decode') {
		return JSON.parse(data);
	}
};