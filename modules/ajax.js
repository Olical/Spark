function(method, file, data) {
	// Set up the request, allow for cross browser.
	if(window.XMLHttpRequest)
		xmlhttp=new XMLHttpRequest(); // For IE7+, Firefox, Chrome, Opera, Safari
	else
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); // For IE6, IE5
	
	// Convert to upper case.
	method = method.toUppercase();
	
	// If the method is get then append the data to the file string
	if(method == 'GET')
		file += '?' + data;
	
	xmlhttp.open(method, file, false);
	
	// If the method is post then send the headers and the data
	if(method == 'POST')
	{
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xmlhttp.send(data);
	}
	else
		xmlhttp.send(); // Otherwise just send the data
	
	return xmlhttp.responseText;
};
