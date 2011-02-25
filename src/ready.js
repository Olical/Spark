SparkFn.ready = function(callback) {
	// Set up variables
	window.alreadyRunFlag = false;
	
	// Check if we can add an event listener
	if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function() { alreadyRunFlag = true; callback() }, false);
	}
	else if(document.all && !window.opera) {
		document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"></script>');
		
		var contentloadtag = document.getElementById('contentloadtag');
		
		contentloadtag.onreadystatechange = function() {
			if(this.readyState == 'complete') {
				alreadyRunflag = true;
				callback();
			}
		};
	}
	
	window.onload = function() {
		setTimeout(function() {
			if(alreadyRunFlag === false) {
				callback();
			}
		}, 0);
	};
};