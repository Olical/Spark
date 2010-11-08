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
/*@cc_on(function(m,c){var z="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";function n(d){for(var a=-1;++a<o;)d.createElement(i[a])}function p(d,a){for(var e=-1,b=d.length,j,q=[];++e<b;){j=d[e];if((a=j.media||a)!="screen")q.push(p(j.imports,a),j.cssText)}return q.join("")}var g=c.createElement("div");g.innerHTML="<z>i</z>";if(g.childNodes.length!==1){var i=z.split("|"),o=i.length,s=RegExp("(^|\\s)("+z+")",
"gi"),t=RegExp("<(/*)("+z+")","gi"),u=RegExp("(^|[^\\n]*?\\s)("+z+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),r=c.createDocumentFragment(),k=c.documentElement;g=k.firstChild;var h=c.createElement("body"),l=c.createElement("style"),f;n(c);n(r);g.insertBefore(l,
g.firstChild);l.media="print";m.attachEvent("onbeforeprint",function(){var d=-1,a=p(c.styleSheets,"all"),e=[],b;for(f=f||c.body;(b=u.exec(a))!=null;)e.push((b[1]+b[2]+b[3]).replace(s,"$1.iepp_$2")+b[4]);for(l.styleSheet.cssText=e.join("\n");++d<o;){a=c.getElementsByTagName(i[d]);e=a.length;for(b=-1;++b<e;)if(a[b].className.indexOf("iepp_")<0)a[b].className+=" iepp_"+i[d]}r.appendChild(f);k.appendChild(h);h.className=f.className;h.innerHTML=f.innerHTML.replace(t,"<$1font")});m.attachEvent("onafterprint",
function(){h.innerHTML="";k.removeChild(h);k.appendChild(f);l.styleSheet.cssText=""})}})(this,document);@*/
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
