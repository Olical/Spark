<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 1.0.0
 */
// Set up the variables
print('Preparing document.' . "\n");
$H5ES = <<<_END
eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0.1("2");0.1("3");0.1("4");0.1("5");0.1("6");0.1("7");0.1("8");0.1("9");',10,10,'document|createElement|article|aside|figure|footer|header|hgroup|nav|section'.split('|'),0,{}))
_END;
$header = 'function Spark() {' . "\n";
$content = '';
$footer = '} '. "\n" . 'var s = new Spark();';

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
			print('Reading sizzle.' . "\n");
			$sizzle = file_get_contents('sizzle.js') . "\n";
			print('Building with HTML5 enabling script.' . "\n");
			$spark = $H5ES . $sizzle . $header . $content . $footer;
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
