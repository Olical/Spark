function Spark(){this.content=function(element,content,append){var element=document.querySelectorAll(element)[0];if(content===undefined)
{return element.textContent;}
else
{if(append===undefined||append===false)
{element.textContent=content;}
else if(append===true)
{element.textContent+=content;}}};}
var s=new Spark()