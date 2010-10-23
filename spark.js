function Spark(){this.content=function(element,content,append){var element=document.querySelectorAll(element)[0];if(content===undefined)
{return element.textContent;}
else
{if(append===undefined||append===false)
{element.textContent=content;}
else if(append===true)
{element.textContent+=content;}}};this.cookie=function(name,content,duration){if(content===undefined)
{var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i];while(c.charAt(0)==' ')
{c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}}
else
{if(time===undefined)
{var date=new Date();date.setTime(date.getTime()+31536000000);var expires='; expires='+date.toGMTString();document.cookie=name+'='+value+expires+'; path=/';}
else
{var date=new Date();date.setTime(date.getTime()+duration*1000);var expires='; expires='+date.toGMTString();document.cookie=name+'='+value+expires+'; path=/';}}}}
var s=new Spark()