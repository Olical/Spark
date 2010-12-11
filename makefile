# Set the source directory
srcdir = src/

# Create the core file path
core = ${srcdir}core.js

# Create the list of dependencies
dependencies =	${srcdir}sizzle.js\
				${srcdir}json2.js

# Create the initialisation file path
initialisation = ${srcdir}init.js

# Create the list of modules paths
modules =	${srcdir}ajax.js\
			${srcdir}attribute.js\
			${srcdir}content.js\
			${srcdir}cookie.js\
			${srcdir}css.js\
			${srcdir}event.js\
			${srcdir}json.js\
			${srcdir}location.js\
			${srcdir}opacity.js\
			${srcdir}ready.js\
			${srcdir}size.js

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
