# Set the source directory
srcdir = src/

# Create the list of modules
modules =	${srcdir}core.js\
			${srcdir}sizzle.js\
			${srcdir}json2.js\
			${srcdir}ajax.js\
			${srcdir}attribute.js\
			${srcdir}content.js\
			${srcdir}cookie.js\
			${srcdir}css.js\
			${srcdir}event.js\
			${srcdir}json.js\
			${srcdir}location.js\
			${srcdir}opacity.js\
			${srcdir}ready.js\
			${srcdir}size.js\
			${srcdir}init.js

# Compress all of the modules into spark.js
spark.js: ${modules}
	java -jar yuicompressor.jar -o $@ $^
