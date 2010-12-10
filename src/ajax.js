SparkFn.ajax = function(method, file, data, callback) {
	// Set up the request, allow for cross browser.
	var xmlhttp;
	if(window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest(); // For IE7+, Firefox, Chrome, Opera, Safari
	else
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP'); // For IE6, IE5

	// Convert to upper case.
	method = method.toUpperCase();

	// If the method is get then append the data to the file string
	if(method == 'GET' && data !== undefined && data !== false)
		file += '?' + data;

	// Run the call back if it was a success and the callback is set
	if(callback != undefined)
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4) {
				callback(xmlhttp.responseText);
			}
		};

	// Open the reader, if callback set then make it async
	xmlhttp.open(method, file, (callback != undefined) ? true : false);

	// If the method is post then send the headers and the data
	if(method == 'POST')
	{
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		if(data !== undefined && data !== false)
			xmlhttp.send(data);
		else
			xmlhttp.send(null);
	}
	else
		xmlhttp.send(null); // Otherwise just send the data

	if(callback == undefined)
		return xmlhttp.responseText;
};
