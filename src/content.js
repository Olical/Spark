SparkFn.content = function(content, append) {
	for(var e in this.elements)
	{
		// Return content of the selected element
		if(content === undefined)
			return this.elements[e].innerHTML;
		else
		{
			// Replace content
			if(append === undefined || append === false)
				this.elements[e].innerHTML = content;
			 // Append content
			else if(append === true)
				this.elements[e].innerHTML += content;
		}
	}
};
