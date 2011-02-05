SparkFn.ajax = function(method, file, data, callback) {
	// Set up the request, allow for cross browser.
	var xmlhttp = (!XMLHttpRequest) ? 
		new ActiveXObject('Microsoft.XMLHTTP') :
		new XMLHttpRequest;
	
	// Convert to upper case.
	method = method.toUpperCase();
	
	// If the method is get then append the data to the file string
	if(method == 'GET' && data) {
		file += '?' + data;
	}
	
	// Run the call back if it was a success and the callback is set
	if(callback) {
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4) {
				callback(xmlhttp.responseText);
			}
		};
	}
	
	// Open the reader, if callback set then make it async
	xmlhttp.open(method, file, (callback) ? true : false);
	
	// If the method is post then send the headers and the data
	if(method == 'POST') {
		// Set the headers
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		// Only send the data if it is set
		xmlhttp.send((data) ? data : null);
	}
	// Otherwise just send the data
	else {
		xmlhttp.send(null);
	}
	
	// If there is no callback
	if(!callback) {
		// Just return the content because it was a syncronous request
		return xmlhttp.responseText;
	}
};