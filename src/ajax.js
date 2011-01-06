SparkFn.ajax = function(method, file, data, callback) {
	// If we are in IE <= 6 set a flag
	var browser = Spark.browser();
	if(browser.browser == "Explorer" && browser.version <= 6)
		// OH GOD IE <= 6! Don't panic, we can make it through this.
		var ie = true;
	
	// Set up the request, allow for cross browser.
	var xmlhttp = (ie) ? 
		new ActiveXObject('Microsoft.XMLHTTP') :
		new XMLHttpRequest;
	
	// Convert to upper case.
	method = method.toUpperCase();
	
	// If the method is get then append the data to the file string
	if(method == 'GET' && data)
		file += '?' + data;
	
	// Run the call back if it was a success and the callback is set
	if(callback)
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4) {
				callback(xmlhttp.responseText);
			}
		};
	
	// Open the reader, if callback set then make it async
	xmlhttp.open(method, file, (callback) ? true : false);
	
	// If the method is post then send the headers and the data
	if(method == 'POST')
	{
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		// Only send the data if it is set
		xmlhttp.send((data) ? data : null);
	}
	// Otherwise just send the data
	else
		xmlhttp.send(null);
	
	if(!callback)
		return xmlhttp.responseText;
};
