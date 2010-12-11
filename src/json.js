SparkFn.json = function(method, data) {
	if(method == 'encode')
		return JSON.stringify(data);
	else
		return JSON.parse(data);
};
