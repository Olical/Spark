# Set the source directory
srcdir = src/

# Create the core file path
core = ${srcdir}core.js

# Create the list of dependencies
dependencies =	${srcdir}sizzle.js

# Create the initialisation file path
initialisation = ${srcdir}initialise.js

# Create the list of modules paths
modules =	${srcdir}html.js\
			${srcdir}text.js\
			${srcdir}fixEvent.js

#modules =	${srcdir}ajax.js\
			${srcdir}attribute.js\
			${srcdir}content.js\
			${srcdir}cookie.js\
			${srcdir}css.js\
			${srcdir}event.js\
			${srcdir}json.js\
			${srcdir}ready.js\
			${srcdir}browser.js\
			${srcdir}animate.js\
			${srcdir}jsonp.js\
			${srcdir}transition.js\
			${srcdir}load.js\
			${srcdir}each.js\
			${srcdir}data.js\
			${srcdir}stop.js\
			${srcdir}computed.js

# Build full list of files
files = ${core} ${modules} ${dependencies} ${initialisation}

# Set both to be built
all: spark-dev.js spark.js

# Combine all of the files into spark-dev.js
spark-dev.js: ${files}
	cat > $@ $^

# Compress spark-dev.js into spark.js
spark.js: spark-dev.js
	java -jar yuicompressor.jar -o $@ $^
