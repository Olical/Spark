SparkFn.attribute = function(attribute) {
	for(var e in this.elements)
	{
		for(var a in attribute)
		{
			this.elements[e][a] = attribute[a];
		}
	}
	
	return this.elements[0];
};
