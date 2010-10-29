function Spark(){this.content=function(element,content,append){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(content===undefined)
return element.innerHTML;else
{if(append===undefined||append===false)
element.innerHTML=content;else if(append===true)
element.innerHTML+=content;}};this.cookie=function(name,content,duration){if(content===undefined)
{var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
{c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}
return false;}
else
{if(duration===undefined)
{var date=new Date();date.setTime(date.getTime()+31536000000);var expires='; expires='+date.toGMTString();document.cookie=name+'='+content+expires+'; path=/';}
else
{var date=new Date();date.setTime(date.getTime()+duration);var expires='; expires='+date.toGMTString();document.cookie=name+'='+content+expires+'; path=/';}}};this.click=function(element,callback){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(element.addEventListener)
element.addEventListener('click',function(event){callback(event);},false);else if(element.attachEvent)
{element['e'+'click'+callback]=callback;element['click'+callback]=function(){element['e'+'click'+callback](window.event);}
element.attachEvent('onclick',element['click'+callback]);}};this.mouse=function(element,action,callback){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(element.addEventListener)
element.addEventListener('mouse'+action,function(event){callback(event);},false);else if(element.attachEvent)
{element['emouse'+action+callback]=callback;element['mouse'+action+callback]=function(){element['emouse'+action+callback](window.event);}
element.attachEvent('onmouse'+action,element['mouse'+action+callback]);}};this.size=function(element,width,height,timeframe,callback){var rawelement=element;if(isNaN(element))
element=document.querySelectorAll(element)[0];if(width!==undefined&&height!==undefined)
{if(timeframe!==undefined)
{var widthdiff=width-parseInt(element.style.width);var heightdiff=height-parseInt(element.style.height);var steptime=timeframe/100;var widthpps=widthdiff/100;var heightpps=heightdiff/100;var origwidth=parseInt(element.style.width);var origheight=parseInt(element.style.height);var timers=[];for(var i=0;i<=100;i++)
{timers[i]=setTimeout((function(privateEye){return function(){element.style.width=origwidth+(widthpps*privateEye)+'px';element.style.height=origheight+(heightpps*privateEye)+'px';}})(i),i*steptime);}
if(callback!==undefined)
var callbackTimer=setTimeout(callback,100*steptime);}
else
{element.style.width=width;element.style.height=height;}}
else
{function size(){var width;var height;};size.width=element.offsetWidth;size.height=element.offsetHeight;return size;}};this.value=function(element,content,append){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(content===undefined)
return element.value;else
{if(append===undefined||append===false)
element.value=content;else if(append===true)
element.value+=content;}};this.visible=function(element,visible){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(visible===true)
element.style.display='block';else if(visible===false)
element.style.display='none';else if(visible===undefined)
{if(element.style.display!='none')
element.style.display='none';else
element.style.display='block';}};this.opacity=function(element,opacity,timeframe,callback){if(isNaN(element))
element=document.querySelectorAll(element)[0];if(opacity===undefined)
return element.style.opacity*100;else
{if(timeframe===undefined)
{element.style.opacity=opacity/100;element.style.filter='alpha(opacity='+opacity+')';}
else
{var styleProp='opacity';if(element.currentStyle)
var isSet=element.currentStyle[styleProp];else if(window.getComputedStyle)
var isSet=document.defaultView.getComputedStyle(element,null).getPropertyValue(styleProp);if(isSet==1)
element.style.opacity=1;var opacitydiff=opacity-(element.style.opacity*100);var steptime=timeframe/100;var opacitypps=opacitydiff/100;var origopacity=element.style.opacity*100;var timers=[];for(var i=0;i<=100;i++)
{timers[i]=setTimeout((function(privateEye){return function(){var newopacity=(origopacity+(opacitypps*privateEye))/100;element.style.opacity=newopacity;element.style.filter='alpha(opacity='+newopacity+')';}})(i),i*steptime);}
if(callback!==undefined)
var callbackTimer=setTimeout(callback,100*steptime);}}};this.object=function(element){return document.querySelectorAll(element)[0];};this.link=function(element,find,link){if(isNaN(element))
element=document.querySelectorAll(element)[0];element.innerHTML=element.innerHTML.replace(new RegExp('('+find+')','gi'),"<a href='"+link+"'>$1</a>");};this.ajax=function(method,file,data){if(window.XMLHttpRequest)
xmlhttp=new XMLHttpRequest();else
xmlhttp=new ActiveXObject('Microsoft.XMLHTT');method=method.toUpperCase();if(method=='GET'&&data!==undefined)
file+='?'+data;xmlhttp.open(method,file,false);if(method=='POST')
{xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');if(data!==undefined)
xmlhttp.send(data);else
xmlhttp.send(null);}
else
xmlhttp.send(null);return xmlhttp.responseText;};this.round=function(element){var raw=element;if(isNaN(element))
element=document.querySelectorAll(element)[0];element.style.position='relative';element.innerHTML='<div class=\'spark-corner-top\' style=\'width: 100%; height: 5px;\'><div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div></div>'+element.innerHTML;element.innerHTML+='<div class=\'spark-corner-bottom\' style=\'width: 100%; height: 5px;\'><div class=\'corner1\'></div><div class=\'corner2\'></div><div class=\'corner3\'></div><div class=\'corner4\'></div><div class=\'corner5\'></div></div>';var topBox=document.querySelectorAll(raw+' div.spark-corner-top')[0];var bottomBox=document.querySelectorAll(raw+' div.spark-corner-bottom')[0];var top=document.querySelectorAll(raw+' div.spark-corner-top div');var bottom=document.querySelectorAll(raw+' div.spark-corner-bottom div');topBox.style.width='100%';topBox.style.height='5px';topBox.style.position='absolute';topBox.style.top='-5px';bottomBox.style.width='100%';bottomBox.style.height='5px';bottomBox.style.position='absolute';bottomBox.style.bottom='-5px';for(var i=0;i<5;i++)
{top[i].style.height='1px';top[i].style.width=(element.offsetWidth-5)+(i+1)+'px';top[i].style.backgroundColor=element.style.backgroundColor;bottom[i].style.height='1px';bottom[i].style.width=element.offsetWidth-(i+1)+'px';bottom[i].style.backgroundColor=element.style.backgroundColor;}};}
var s=new Spark()