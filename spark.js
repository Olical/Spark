function Spark(){this.content=function(element,content,append){if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
if(content===undefined)
{return element.innerHTML;}
else
{if(append===undefined||append===false)
{element.innerHTML=content;}
else if(append===true)
{element.innerHTML+=content;}}};this.cookie=function(name,content,duration){if(content===undefined)
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
{element=document.querySelectorAll(element)[0];}
element.addEventListener('click',callback,false);};this.mouse=function(element,action,callback){if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
element.addEventListener('mouse'+action,callback,false);};this.size=function(element,width,height,timeframe,callback){var rawelement=element;if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
if(width!==undefined&&height!==undefined)
{if(timeframe!==undefined)
{var widthdiff=width-parseInt(element.style.width);var heightdiff=height-parseInt(element.style.height);var steptime=timeframe/100;var widthpps=widthdiff/100;var heightpps=heightdiff/100;var origwidth=parseInt(element.style.width);var origheight=parseInt(element.style.height);var timers=[];for(var i=0;i<=100;i++)
{timers[i]=setTimeout((function(privateEye){return function(){element.style.width=origwidth+(widthpps*privateEye)+'px';element.style.height=origheight+(heightpps*privateEye)+'px';}})(i),i*steptime);}
if(callback!==undefined)
{var callbackTimer=setTimeout(callback,100*steptime);}}
else
{element.style.width=width;element.style.height=height;}}
else
{function size(){var width;var height;};size.width=element.offsetWidth;size.height=element.offsetHeight;return size;}};this.value=function(element,content,append){if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
if(content===undefined)
{return element.value;}
else
{if(append===undefined||append===false)
{element.value=content;}
else if(append===true)
{element.value+=content;}}};this.visible=function(element,visible){if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
if(visible===true)
{element.style.display='block';}
else if(visible===false)
{element.style.display='none';}
else if(visible===undefined)
{if(element.style!='none')
{element.style.display='none';}
else
{element.style.display='block';}}};this.opacity=function(element,opacity,timeframe,callback){if(isNaN(element))
{element=document.querySelectorAll(element)[0];}
if(opacity===undefined)
{return element.style.opacity*100;}
else
{if(timeframe===undefined)
{element.style.opacity=opacity/100;element.style.filter='alpha(opacity='+opacity+')';}
else
{var opacitydiff=opacity-(element.style.opacity*100);var steptime=timeframe/100;var opacitypps=opacitydiff/100;var origopacity=element.style.opacity*100;var timers=[];for(var i=0;i<=100;i++)
{timers[i]=setTimeout((function(privateEye){return function(){var newopacity=(origopacity+(opacitypps*privateEye))/100;element.style.opacity=newopacity;element.style.filter='alpha(opacity='+newopacity+')';}})(i),i*steptime);}
if(callback!==undefined)
{var callbackTimer=setTimeout(callback,100*steptime);}}}};}
var s=new Spark()