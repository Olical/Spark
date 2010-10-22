<?php
/*
 * Takes all modules files and builds spark.js out of them.
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */
if($handle = opendir('modules'))
{
	while(false !== ($module = readdir($handle)))
	{
		
	}
	closedir($handle);
}
