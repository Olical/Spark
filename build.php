<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */

// Set up the variables
print('Preparing document.' . "\n");
$header = 'function spark() {' . "\n";
$content = '';
$footer = '} ' . "\n" . 'var spark = new spark();';

if(file_exists('modules.conf'))
{
	// Read the config file and split into an array
	print('Reading and parsing file.' . "\n");
	$modules = explode("\n", file_get_contents('modules.conf'));
	
	// Count modules
	print(count($modules) . ' modules specified.' . "\n");
	
	if(count($modules) > 0)
	{
		$actual = 0;
		foreach($modules as $module)
		{
			// Check if the modules exist
			if(file_exists('modules/' . $module . '.js'))
				$actual += 1;
		}
		
		// Let the user know
		print($actual . ' actually exist.' . "\n");
		
		if($actual > 0)
		{
			foreach($modules as $module)
			{
				
			}
		}
		else
		{
			print('No modules actually exist, stopping.' . "\n"); 
		}
	}
	else
	{
		print('No modules specified, stopping.' . "\n");
	}
}
else
{
	print('Can not find modules.conf' . "\n");
}
