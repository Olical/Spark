var SimpleSelector={find:function(selector,context){var selectors=selector.split(','),elements=[],wrappers=[];if(typeof context=='string'){var wraps=SimpleSelector.find(context);wrappers=(wraps.constructor==Array)?wraps:[wraps];}else if(context&&context.constructor==Array){wrappers=context;}else{wrappers.push(context||document);}
for(var a=0,b=wrappers.length;a<b;a++){for(var x=0,y=selectors.length;x<y;x++){var s=selectors[x].replace(/ /g,''),operator=s.substr(0,1),key=s.substr(1),els=[];if(operator=='#'){els[0]=document.getElementById(key);if(els[0]&&SimpleSelector.isDescendant(els[0],wrappers[a]))
elements.push(els[0]);}else if(operator=='.'){els=SimpleSelector.getByClass(key,wrappers[a]);els=[].slice.call(els,0);elements=elements.concat(els);}else{els=wrappers[a].getElementsByTagName(s);for(var i=0,j=els.length;i<j;i++)
elements.push(els[i]);}}}
return(elements.length==1)?elements[0]:elements;},isDescendant:function(descendant,ancestor){return((descendant.parentNode==ancestor)||(descendant.parentNode!=document)&&arguments.callee(descendant.parentNode,ancestor));},getByClass:function(className,context){var elements=[],expr=new RegExp('\b'+className+'\b'),wrapper=context||document,allElements=wrapper.getElementsByTagName('*');for(var x=0,y=allElements.length;x<y;x++){if(expr.test(allElements[x].className))
elements.push(allElements[x]);}
return elements;}};function Spark(){this.content=function(element,content,append){if(content===undefined)
{var elements=SimpleSelector.find(element);for(var i in elements)
{document.write(elements[i]);}}
else
{if(append===undefined||append===false)
{}
else if(append===true)
{}}};}
var s=new Spark()