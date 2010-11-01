<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */
// Set up the variables
print('Preparing document.' . "\n");
$header = 'function Spark() {' . "\n";
$content = '';
$footer = '} '. "\n" . 'var s = new Spark()';

if(file_exists('modules.conf'))
{
	// Read the config file and split into an array
	print('Reading and parsing file.' . "\n");
	$modules = explode("\n", trim(file_get_contents('modules.conf')));
	
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
				// Check file exists, again
				if(file_exists('modules/' . $module . '.js'))
				{
					print('Reading ' . $module . '.' . "\n");
					$content .= 'this.' . $module . ' = ' . file_get_contents('modules/' . $module . '.js');
				}
			}
			$spark = $header . $content . $footer;
			print('Writing.' . "\n");
			file_put_contents('spark.js', trim($spark));
			print('Compressing.' . "\n");
			exec('java -jar yuicompressor.jar -o spark.js spark.js');
			print('Done.' . "\n");
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
