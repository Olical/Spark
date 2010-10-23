function(name, content, duration) {
	if(content === undefined)
	{
		// Return cookie's content
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++)
		{
			var c = ca[i];
			while(c.charAt(0)==' ')
			{
				c = c.substring(1,c.length)
			}
			if(c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length, c.length);
		}
	}
	else
	{
		if(time === undefined)
		{
			// Create cookie with preset duration of one year
			var date = new Date();
			date.setTime(date.getTime() + 31536000000);
			var expires = '; expires=' + date.toGMTString();
			document.cookie = name + '=' + value + expires + '; path=/';
		}
		else
		{
			// Create cookie with specified duration
			var date = new Date();
			date.setTime(date.getTime() + duration * 1000);
			var expires = '; expires=' + date.toGMTString();
			document.cookie = name + '=' + value + expires + '; path=/';
		}
	}
	/*
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	*/
}
