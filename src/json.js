SparkFn.json = function(method, data) {
	if(method == 'encode')
		return JSON.stringify(data);
	else if('decode')
		return JSON.parse(data);
};
