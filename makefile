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

# Combine all modules into spark-dev.js
spark-dev.js: ${modules}

# Compress spark-dev.js into spark.js
spark.js: spark-dev.js
	java -jar yuicompressor.jar -o $@ $^
