SparkFn.ready = function(callback) {
	// Set up variables
	window.alreadyRunFlag = 0;
	window.SparkRe = callback;
	
	// Check if we can add an event listener
	if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function() { alreadyRunFlag = 1; SparkRe() }, false);
	}
	else if(document.all && !window.opera) {
		document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"></script>');
		
		var contentloadtag = document.getElementById('contentloadtag');
		
		contentloadtag.onreadystatechange = function() {
			if(this.readyState == 'complete') {
				alreadyrunflag = 1;
				SparkRe();
			}
		};
	}
	
	window.onload = function() {
		setTimeout("if(!alreadyRunFlag) SparkRe()", 0);
	};
};
