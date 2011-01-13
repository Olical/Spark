SparkFn.json = function(method, data) {
	if(method == 'encode')
		return JSON.stringify(data);
	
	return JSON.parse(data);
};
