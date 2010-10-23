<?php
/*
 * Takes all specified modules and builds them into spark.js
 * 
 * @author Oliver Caldwell
 * @version 0.1
 */

// Include jsmin.php
define('JSMIN_AS_LIB', true); // prevents auto-run on include
include('jsmin.php');

// Set up the variables
print('Preparing document.' . "\n");
$header = <<<_END
/*!
 * \$imple\$elector
 *
 * Selector by id, className or tagName, f.e.:
 * $$( '#wrap' ) or $$( '.special' ) or $$( 'p' )
 *
 * Multiple selectors separated by comma, f.e.:
 * $$( '#id, .cls' )
 *
 * Give context as second param, f.e.:
 * $$( 'a', '#wrap' ) or $$( 'a', wrapNode ) or $$( 'a', [node1, node2] )
 *
 * @version   0.2
 * @author    Victor Villaverde Laan
 * @link      http://www.freelancephp.net/simpleselector-javascript-dom-selector/
 * @license   MIT license
 */
var SimpleSelector = {

	/**
	 * Find elements with the given selector within the context
	 * @param selector [string]
	 * @param context  [string | DOM node | array of DOM nodes]
	 * @return [DOM node | array of DOM nodes | empty array]
	 */
	find: function ( selector, context ) {
		var selectors = selector.split( ',' ),
			elements = [],
			wrappers = [];

		// set wrappers
		if ( typeof context == 'string' ) {
			var wraps = SimpleSelector.find( context );
			// set array to wrappers
			wrappers = ( wraps.constructor == Array ) ? wraps : [ wraps ];
		} else if ( context && context.constructor == Array ) {
			wrappers = context;
		} else {
			// document is default context
			wrappers.push( context || document );
		}

		// find matching elements within the wrappers (context)
		for ( var a = 0, b = wrappers.length; a < b; a++ ) {
			for ( var x = 0, y = selectors.length; x < y; x++ ) {
				// selector: trim spaces
				var s = selectors[x].replace( / /g, '' ),
					// get operator
					operator = s.substr( 0, 1 ),
					// get key
					key = s.substr( 1 ),
					els = [];

				// get matching elements
				if ( operator == '#' ) {
					// get element by id
					els[0] = document.getElementById( key );
					// check if element is part of context
					if ( els[0] && SimpleSelector.isDescendant( els[0], wrappers[ a ] ) )
						elements.push( els[0] );
				} else if ( operator == '.' ) {
					// get element by className
					els = SimpleSelector.getByClass( key, wrappers[ a ] );
					// convert type to array
					els = [].slice.call( els, 0 );
					// add to elements collection
					elements = elements.concat( els );
				} else {
					// get element by tagName
					els = wrappers[ a ].getElementsByTagName( s );
					// add to elements collection
					// in this case [].slice.call( els, 0 ) does not work
					// in IE, says constructor is undefined??
					for ( var i = 0, j = els.length; i < j; i++ )
						elements.push( els[ i ] );
				}
			}
		}

		// return single element or array of elements
		return ( elements.length == 1 ) ? elements[0] : elements;
	},

	/**
	 * Check wether an element is a descendant of the given ancestor
	 * @param descendant [DOM node]
	 * @param ancestor   [DOM node]
	 * @return [boolean]
	 */
	isDescendant: function ( descendant, ancestor ) {
		return ( ( descendant.parentNode == ancestor )
					|| ( descendant.parentNode != document )
				&& arguments.callee( descendant.parentNode, ancestor ) );
	},

	/**
	 * Cross browser function for getting elements by className
	 * @param className [string]
	 * @param context   [DOM node]
	 * @return [array of DOM nodes]
	 */
	getByClass: function ( className, context ) {
		var elements = [],
			expr = new RegExp('\\b' + className + '\\b'),
			wrapper = context || document,
			allElements = wrapper.getElementsByTagName( '*' );

		// filter all elements that contain the given className
		for ( var x = 0, y = allElements.length; x < y; x++ ) {
			if ( expr.test( allElements[ x ].className ) )
				elements.push( allElements[ x ] );
		}

		return elements;
	}

};
function Spark() {
_END;
$content = '';
$footer = '} '. "\n" . 'var s = new Spark()';

if(file_exists('modules.conf'))
{
	// Read the config file and split into an array
	print('Reading and parsing file.' . "\n");
	$modules = explode("\n", file_get_contents('modules.conf'));
	
	// Remove last
	array_pop($modules);
	
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
			$jsMin = new JSMin($spark, false);
// in that case, the modifies string is returned by minify():
			$spark = $jsMin->minify();
			file_put_contents('spark.js', trim($spark));
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
