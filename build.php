<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */

// Set up the variables
print('Preparing document');
$header = 'function spark() {' . "\n";
$content = '';
$footer = '} ' . "\n" . 'var spark = new spark();';

if(file_exists('modules.conf'))
{
	// Read the config file and split into an array
	print('Reading and parsing file');
	$modules = explode(';', file_get_contents('modules.conf'));
	
	// Remove last one
	array_pop($modules);
	
	print(count($modules) . ' modules specified.');
	
	foreach($modules as $module)
	{
		
	}
}
else
{
	print('Can not find modules.conf');
}
