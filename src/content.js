SparkFn.content = function(content, append) {
	for(var e in this.elements)
	{
		// Return content of the selected element if there is no content
		if(!content)
			return this.elements[e].innerHTML;
		else
			// Append or replace content depending on the append flag
			(!append) ?
				this.elements[e].innerHTML = content :
				this.elements[e].innerHTML += content;
	}
	
	return this;
};
