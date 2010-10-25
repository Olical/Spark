function Spark(){this.content=function(element,content,append){element=document.querySelectorAll(element)[0];if(content===undefined)
{return element.textContent;}
else
{if(append===undefined||append===false)
{element.textContent=content;}
else if(append===true)
{element.textContent+=content;}}};this.cookie=function(name,content,duration){if(content===undefined)
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
{var date=new Date();date.setTime(date.getTime()+duration);var expires='; expires='+date.toGMTString();document.cookie=name+'='+content+expires+'; path=/';}}};this.click=function(element,callback){element=document.querySelectorAll(element)[0];element.addEventListener('click',callback,false);};this.mouse=function(element,action,callback){element=document.querySelectorAll(element)[0];element.addEventListener('mouse'+action,callback,false);};this.hide=function(element){element=document.querySelectorAll(element)[0];element.style.display='none';};this.show=function(element){element=document.querySelectorAll(element)[0];element.style.display='block';};this.size=function(element,width,height,timeframe){element=document.querySelectorAll(element)[0];if(width!==undefined&&height!==undefined)
{if(timeframe!==undefined)
{}
else
{}}
else
{function size(){var width;var height;};size.width=element.offsetWidth;size.height=element.offsetHeight;return size;}};this.value=function(element,content,append){element=document.querySelectorAll(element)[0];if(content===undefined)
{return element.value;}
else
{if(append===undefined||append===false)
{element.value=content;}
else if(append===true)
{element.value+=content;}}};}
var s=new Spark()