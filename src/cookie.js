SparkFn.cookie = function(name, content, duration) {
	// Return the cookies content if content is undefined
	if(content === undefined) {
		// Set up any variables needed
		var nameEQ = name + '=';
		
		// Split the cookie string
		var ca = document.cookie.split(';');
		
		// Loop through all of the cookies looking for ours
		for(var i in ca) {
			var c = ca[i];

			// Cut of the whitespace
			while(c.charAt(0) == ' ') {
				c = c.substring(1, c.length);
			}
			
			// If the cookie has the right name, return its contents
			if(c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		
		// If we didnt find it, return false
		return false;
	}
	else {
		// Get the current time
		var date = new Date();
		
		// Push the time on by either a month or the user defined duration
		date.setTime(date.getTime() + ((duration) ? duration : 2628000000));
		
		// Set the cookie
		document.cookie = name + '=' + content + '; expires=' + date.toGMTString() + '; path=/';
	}
};
