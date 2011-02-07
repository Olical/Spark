SparkFn.ready = function(callback) {
	// Set up variables
	window.alreadyRunFlag = 0;
	
	// Check if we can add an event listener
	if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded", function() { alreadyRunFlag = 1; callback() }, false);
	}
	else if(document.all && !window.opera) {
		document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"></script>');
		
		var contentloadtag = document.getElementById('contentloadtag');
		
		contentloadtag.onreadystatechange = function() {
			if(this.readyState == 'complete') {
				alreadyrunflag = 1;
				callback();
			}
		};
	}
	
	window.onload = function() {
		setTimeout("if(!alreadyRunFlag) callback()", 0);
	};
};
