# Set the source directory
srcdir = src/

# Create the core file path
core = ${srcdir}core.js

# Create the list of dependencies
dependencies =	${srcdir}selector.js\
				${srcdir}json2.js

# Create the initialisation file path
initialisation = ${srcdir}initialise.js

# Create the list of modules paths
modules =	${srcdir}html.js\
			${srcdir}text.js\
			${srcdir}fixEvent.js\
			${srcdir}ready.js\
			${srcdir}event.js\
			${srcdir}attribute.js\
			${srcdir}client.js\
			${srcdir}computed.js\
			${srcdir}cookie.js\
			${srcdir}css.js\
			${srcdir}data.js\
			${srcdir}each.js\
			${srcdir}json.js\
			${srcdir}noConflict.js\
			${srcdir}jsonp.js\
			${srcdir}load.js\
			${srcdir}stop.js\
			${srcdir}transition.js\
			${srcdir}animate.js\
			${srcdir}ajax.js\
			${srcdir}classes.js\
			${srcdir}element.js\
			${srcdir}trigger.js\
			${srcdir}toggle.js

# Build full list of files
files = ${core} ${modules} ${dependencies} ${initialisation}

# Set both to be built
all: spark-dev.js spark.js

# Combine all of the files into spark-dev.js
spark-dev.js: ${files}
	cat > $@ $^

# Compress spark-dev.js into spark.js
spark.js: spark-dev.js
	java -jar compiler.jar --js $^ --js_output_file $@