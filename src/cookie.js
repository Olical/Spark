SparkFn.cookie = function(name, content, duration) {
	// Check if content is set
	if(!content)
	{
		// If not, return its content
		
		// Set up any variables needed
		var nameEQ = name + '=';
		
		// Split the cookie string
		var ca = document.cookie.split(';');
		
		// Loop through all of the cookies looking for ours
		for(var i = 0; i < ca.length; i++)
		{
			var c = ca[i];
			
			// Cut of the whitespace
			while(c.charAt(0) == ' ')
			{
				c = c.substring(1, c.length);
			}
			
			// If the cookie has the right name, return its contents
			if(c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length, c.length);
		}
		
		// If we didnt find it, return false
		return false;
	}
	else
	{
		// Check if a duration is set
		if(!duration)
		{
			// Set it to a year if not
			var date = new Date();
			date.setTime(date.getTime() + 31536000000);
			var expires = '; expires=' + date.toGMTString();
			document.cookie = name + '=' + content + expires + '; path=/';
		}
		else
		{
			// Create cookie with specified duration
			var date = new Date();
			date.setTime(date.getTime() + duration);
			var expires = '; expires=' + date.toGMTString();
			document.cookie = name + '=' + content + expires + '; path=/';
		}
	}
};
