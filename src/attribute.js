SparkFn.attribute = function(attribute) {
	for(var e in this.elements)
	{
		for(var a in attribute)
		{
			this.elements[e][a] = attribute[a];
		}
	}
	
	// If they did not set anything, return the first element
	if(attribute === undefined)
		return this.elements[0];
	
	// Otherwise return the Spark object
	return this;
};
