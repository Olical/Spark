SparkFn.cookie = function(name, content, duration) {
	// Set up any variables needed
	var nameEQ = name + '=',
		ca = document.cookie.split(';'),
		date = null,
		c = null,
		i = null,
		expires = null;
	
	// Return the cookies content if content is undefined
	if(typeof content === 'undefined') {
		// Loop through all of the cookies looking for ours
		for(i in ca) {
			// Make sure it is actually a cookie segment
			if(ca.hasOwnProperty(i)) {
				// Grab the current cookie
				c = ca[i];

				// Cut of the whitespace
				while(c.charAt(0) === ' ') {
					c = c.substring(1, c.length);
				}
			
				// If the cookie has the right name, return its contents
				if(c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length, c.length);
				}
			}
		}
		
		// If we didnt find it, return false
		return false;
	}
	else {
		// Get the current time
		date = new Date();
		
		// Check for a passed duration
		if(typeof duration !== 'undefined') {
			// Add on the duration
			date.setTime(date.getTime() + duration);
			expires = '; expires=' + date.toGMTString();
		}
		else {
			// Otherwise set the expires to nothing
			expires = '';
		}
		
		// Set the cookie
		document.cookie = name + '=' + escape(content) + expires + '; path=/';
		console.log(name + '=' + escape(content) + expires + '; path=/');
	}
};