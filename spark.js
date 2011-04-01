window.SparkFn={};
window.SparkIn=function(){var a=null,e=null;window.$=window.Spark=function(a,e){var d={},j=null;typeof a!=="undefined"&&(d=typeof a==="string"?e?SparkSe(a,e):SparkSe(a):(typeof HTMLElement==="object"?a instanceof HTMLElement:typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string")?{0:a}:a);var i={};for(j in SparkFn)SparkFn.hasOwnProperty(j)&&(i[j]=SparkFn[j]);i.elements=d;return i};if(typeof window.SparkBk==="undefined")window.SparkBk=window.$;a=Spark();for(e in a)a.hasOwnProperty(e)&&($[e]=
Spark[e]=a[e])};SparkFn.html=function(a,e){var c=null,g=null;for(g in this.elements)if(this.elements.hasOwnProperty(g))if(c=this.elements[g],typeof a==="undefined")return c.innerHTML;else e?c.innerHTML+=a:c.innerHTML=a;return this};
SparkFn.text=function(a,e){var c=null,g=null;for(g in this.elements)if(this.elements.hasOwnProperty(g))if(c=this.elements[g],typeof a==="undefined")return document.all?c.innerText:c.textContent;else document.all?e?c.innerText+=a:c.innerText=a:e?c.textContent+=a:c.textContent=a;return this};
SparkFn.fixEvent=function(a){var e=this.client().browser,c=null,g=null,d=null;if(e==="Explorer")a.pageX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a.pageY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;if(typeof a.target==="undefined")a.target=a.srcElement;c=a.target;if(c.offsetParent&&e==="Firefox"){g=d=0;do g+=c.offsetLeft,d+=c.offsetTop;while(c=c.offsetParent);a.offsetX=g;a.offsetY=d}return a};
SparkFn.ready=function(a){window.alreadyRunFlag=!1;if(document.addEventListener)document.addEventListener("DOMContentLoaded",function(){alreadyRunFlag=!0;a()},!1);else if(document.all&&!window.opera)Spark("head").element("add","script",{type:"text/javascript",id:"contentloadtag",defer:"defer"}),Spark("#contentloadtag").attribute().onreadystatechange=function(){this.readyState==="complete"&&(alreadyRunflag=!0,a())};window.onload=function(){setTimeout(function(){alreadyRunFlag===!1&&a()},0)}};
SparkFn.event=function(a,e){var c=null,g=null,d=null,j=null;for(j in this.elements)this.elements.hasOwnProperty(j)&&(c=this.elements[j],g=function(a){if(e(Spark.fixEvent(a))===!1)a.preventDefault?a.preventDefault():a.returnValue=!1},d=this.data(c,"Spark.event."+a),this.data(c,"Spark.event."+a,g),c.addEventListener?(d&&c.removeEventListener(a,d,!1),c.addEventListener(a,g,!1)):(d&&c.detachEvent(a,d),c.attachEvent("on"+a,g)));return this};
SparkFn.attribute=function(a){var e=null,c=null,g=null;for(c in this.elements)if(this.elements.hasOwnProperty(c))if(e=this.elements[c],typeof a!=="undefined")for(g in a)a.hasOwnProperty(g)&&(e[g]=a[g]);else return e;return this};
SparkFn.client=function(){var a=null,e={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.os=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(c){a=0;for(l=c.length;a<l;a++){var e=c[a].string,d=c[a].prop;this.versionSearchString=c[a].versionSearch||c[a].identity;if(e&&e.indexOf(c[a].subString)!==-1)return c[a].identity;
else if(d)return c[a].identity}},searchVersion:function(a){var e=a.indexOf(this.versionSearchString);if(e!==-1)return parseFloat(a.substring(e+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",
identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",
identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};e.init();return e};SparkFn.computed=function(){if(window.getComputedStyle)return window.getComputedStyle(this.elements[0],null);return this.elements[0].currentStyle};
SparkFn.cookie=function(a,e,c){var g=a+"=",d=document.cookie.split(";"),j=null,i=null;i=j=null;if(typeof e==="undefined"){for(j in d)if(d.hasOwnProperty(j)){for(i=d[j];i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(g)===0)return i.substring(g.length,i.length)}return!1}else j=new Date,typeof c!=="undefined"?(j.setTime(j.getTime()+c),i="; expires="+j.toGMTString()):i="",document.cookie=a+"="+escape(e)+i+"; path=/"};
SparkFn.css=function(a){var e=null,c=Spark.client().browser,g=null,d=null;for(g in this.elements)if(this.elements.hasOwnProperty(g))if(e=this.elements[g],a!==void 0)for(d in a){if(a.hasOwnProperty(d)&&(d.indexOf("-")!==-1?e.style[d.replace(/-([a-z])/gi,function(a,c){return c.toUpperCase()})]=a[d]:e.style[d]=a[d],d==="opacity")){if(c==="Explorer")e.style.filter="alpha(opacity="+a[d]*100+")",e.style.zoom="1";e.style.MozOpacity=a[d];e.style.KhtmlOpacity=a[d]}}else return e.style;return this};
SparkFn.data=function(){var a={},e=1,c=null;return function(g,d,j){c=g.uniqueID||(g.uniqueID=e++);a[c]||(a[c]={});if(typeof j!=="undefined")a[c][d]=j;else return a[c][d]}}();SparkFn.each=function(a){var e=null,c=null;for(c in this.elements)this.elements.hasOwnProperty(c)&&(e=this.elements[c],a(e));return this};SparkFn.json=function(a,e){if(a==="encode")return JSON.stringify(e);else if(a==="decode")return JSON.parse(e)};SparkFn.noConflict=function(){var a;window.$=SparkBk;return Spark};
SparkFn.jsonp=function(a,e,c){a+="?callback="+e;typeof c!=="undefined"&&(a+="&"+c);this.load(a)};SparkFn.load=function(a){Spark("head").element("insert","script",{type:"text/javascript",src:a})};SparkFn.stop=function(){var a=null,e=a=null,c=null;for(e in this.elements)if(this.elements.hasOwnProperty(e))for(c in a=this.elements[e],this.data(a,"Spark.animations")===void 0&&this.data(a,"Spark.animations",""),a=this.data(a,"Spark.animations").split(","),a)a.hasOwnProperty(c)&&clearTimeout(a[c]);return this};
SparkFn.transition=function(a,e,c,g){var d=null,j=null,i=null;g===void 0&&(g=function(){});e===void 0&&(e=600);c===void 0&&(c=!1);if(!this.offset)this.offset=0;for(i in this.elements)if(this.elements.hasOwnProperty(i))if(d=this.elements[i],a==="slidedown")Spark(d).css({overflow:"hidden",display:"block"}),j=Spark(d).attribute().offsetHeight,Spark(d).css({height:0}),Spark(d).animate({height:j},e,c,g);else if(a==="slideup")j=Spark(d).attribute().offsetHeight,Spark(d).css({overflow:"hidden",height:j}),
Spark(d).animate({height:0},e,c,function(){Spark(d).css({height:j+"px",display:"none"});g()});else if(a==="fadein")Spark(d).css({display:"block",opacity:0}),Spark(d).animate({opacity:1},e,c,g);else if(a==="fadeout")Spark(d).animate({opacity:0},e,c,function(){Spark(d).css({opacity:1,display:"none"});g()});else if(a==="sneakin")Spark(d).css({overflow:"hidden",display:"block",opacity:0}),j=Spark(d).attribute().offsetHeight,Spark(d).css({height:0}),Spark(d).animate({height:j,opacity:1},e,c,g);else if(a===
"sneakout")j=Spark(d).attribute().offsetHeight,Spark(d).css({overflow:"hidden",height:j}),Spark(d).animate({height:0,opacity:0},e,c,function(){Spark(d).css({height:j+"px",display:"none"});g()});this.offset+=e;return this};
SparkFn.animate=function(a,e,c,g){var d={inQuad:function(f,a,b,h){return b*(f/=h)*f+a},outQuad:function(f,a,b,h){return-b*(f/=h)*(f-2)+a},inOutQuad:function(f,a,b,h){if((f/=h/2)<1)return b/2*f*f+a;return-b/2*(--f*(f-2)-1)+a},inCubic:function(f,a,b,h){return b*(f/=h)*f*f+a},outCubic:function(f,a,b,h){return b*((f=f/h-1)*f*f+1)+a},inOutCubic:function(f,a,b,h){if((f/=h/2)<1)return b/2*f*f*f+a;return b/2*((f-=2)*f*f+2)+a},inQuart:function(f,a,b,h){return b*(f/=h)*f*f*f+a},outQuart:function(f,a,b,h){return-b*
((f=f/h-1)*f*f*f-1)+a},inOutQuart:function(f,a,b,h){if((f/=h/2)<1)return b/2*f*f*f*f+a;return-b/2*((f-=2)*f*f*f-2)+a},inQuint:function(f,a,b,h){return b*(f/=h)*f*f*f*f+a},outQuint:function(a,c,b,h){return b*((a=a/h-1)*a*a*a*a+1)+c},inOutQuint:function(a,c,b,h){if((a/=h/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},inSine:function(a,c,b,h){return-b*Math.cos(a/h*(Math.PI/2))+b+c},outSine:function(a,c,b,h){return b*Math.sin(a/h*(Math.PI/2))+c},inOutSine:function(a,c,b,h){return-b/2*(Math.cos(Math.PI*
a/h)-1)+c},inExpo:function(a,c,b,h){return a===0?c:b*Math.pow(2,10*(a/h-1))+c},outExpo:function(a,c,b,h){return a===h?c+b:b*(-Math.pow(2,-10*a/h)+1)+c},inOutExpo:function(a,c,b,h){if(a===0)return c;else if(a===h)return c+b;else if((a/=h/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},inCirc:function(a,c,b,h){return-b*(Math.sqrt(1-(a/=h)*a)-1)+c},outCirc:function(a,c,b,h){return b*Math.sqrt(1-(a=a/h-1)*a)+c},inOutCirc:function(a,c,b,h){if((a/=h/2)<1)return-b/2*(Math.sqrt(1-
a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},inElastic:function(a,c,b,h,p,n){var k=null;if(a===0)return c;else if((a/=h)===1)return c+b;n||(n=h*0.3);p<Math.abs(b)?(p=b,k=n/4):(p=Math.abs(b),k=n/(2*Math.PI)*Math.asin(b/p));return-(p*Math.pow(2,10*(a-=1))*Math.sin((a*h-k)*2*Math.PI/n))+c},outElastic:function(a,c,b,h,p,n){var k=null;if(a===0)return c;else if((a/=h)===1)return c+b;else n||(n=h*0.3);p<Math.abs(b)?(p=b,k=n/4):(p=Math.abs(b),k=n/(2*Math.PI)*Math.asin(b/p));return p*Math.pow(2,-10*a)*
Math.sin((a*h-k)*2*Math.PI/n)+b+c},inOutElastic:function(a,c,b,h,p,n){var k=null;if(a===0)return c;else if((a/=h/2)===2)return c+b;else n||(n=h*0.3*1.5);p<Math.abs(b)?(p=b,k=n/4):(p=Math.abs(b),k=n/(2*Math.PI)*Math.asin(b/p));if(a<1)return-0.5*p*Math.pow(2,10*(a-=1))*Math.sin((a*h-k)*2*Math.PI/n)+c;return p*Math.pow(2,-10*(a-=1))*Math.sin((a*h-k)*2*Math.PI/n)*0.5+b+c},inBack:function(a,c,b,h,p){typeof p==="undefined"&&(p=1.70158);return b*(a/=h)*a*((p+1)*a-p)+c},outBack:function(a,c,b,h,p){typeof p===
"undefined"&&(p=1.70158);return b*((a=a/h-1)*a*((p+1)*a+p)+1)+c},inOutBack:function(a,c,b,h,p){typeof p==="undefined"&&(p=1.70158);if((a/=h/2)<1)return b/2*a*a*(((p*=1.525)+1)*a-p)+c;return b/2*((a-=2)*a*(((p*=1.525)+1)*a+p)+2)+c},inBounce:function(a,c,b,h){return b-this.outBounce(h-a,0,b,h)+c},outBounce:function(a,c,b,h){return(a/=h)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},inOutBounce:function(a,
c,b,h){if(a<h/2)return this.inBounce(a*2,0,b,h)*0.5+c;return this.outBounce(a*2-h,0,b,h)*0.5+b*0.5+c}};e||(e=600);c||(c="outQuad");if(!this.offset)this.offset=0;var j=null,i=j=null,m=null,o=null,x=null,w=null,r=null,t=null,q=null,u=null;for(t in this.elements)if(this.elements.hasOwnProperty(t))for(q in r=this.elements[t],a)if(a.hasOwnProperty(q)){if(r.style[q]===void 0||r.style[q]==="")j=Spark(r).computed()[q],r.style[q]=j?j:1;if(r.style[q]==="auto"&&q==="height")r.style[q]=r.offsetHeight;else if(r.style[q]===
"auto"&&q==="width")r.style[q]=r.offsetWidth;j=q==="opacity"?parseFloat(r.style[q]):parseInt(r.style[q],10);i=(q==="opacity"?parseFloat(a[q]):parseInt(a[q],10))-j;m=e/(1E3/60);o=isNaN(a[q])?a[q].replace(/[0-9]/g,""):"px";q==="opacity"&&(o="");this.data(r,"Spark.animations","START");w={};for(u=0;u<=m;u++)x=d[c](u,j,i,m)+o,this.data(r,"Spark.animations",this.data(r,"Spark.animations")+","+setTimeout(function(a,c,b,h){return function(){w[b]=h;Spark(c).css(w)}}(u,r,q,x),u*(1E3/60)+this.offset,r,q,x));
this.data(r,"Spark.animations",this.data(r,"Spark.animations")+","+setTimeout(function(c,e){return function(){w[e]=a[e];Spark(c).css(w)}}(r,q,a,o),e+this.offset,r,q,a,o));this.data(r,"Spark.animations",this.data(r,"Spark.animations").replace("START,",""))}g&&setTimeout(g,e+this.offset);this.offset+=e;return this};
SparkFn.ajax=function(a,e,c,g){var d=typeof XMLHttpRequest==="undefined"?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;a=a.toUpperCase();a==="GET"&&c&&(e+="?"+c);if(g)d.onreadystatechange=function(){d.readyState===4&&(d.status===200?g(d.responseText):g(!1))};d.open(a,e,g?!0:!1);a==="POST"?(d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.send(c?c:null)):d.send(null);if(!g)return d.status===200?d.responseText:!1};
SparkFn.classes=function(a,e){var c=null,g=null,d=null;for(d in this.elements)if(this.elements.hasOwnProperty(d))if(c=this.elements[d],a==="has")return RegExp("\\b"+e+"\\b").test(c.className);else if(a==="add")this.classes("has",e)||(c.className+=c.className?" "+e:e);else if(a==="remove")g=c.className.match(" "+e)?" "+e:e,c.className=c.className.replace(g,"");return this};
SparkFn.element=function(a,e,c,g,d){var j=null,i=null,m=null;if(a==="remove")for(m in this.elements)this.elements.hasOwnProperty(m)&&this.elements[m].parentNode.removeChild(this.elements[m]);else{j=document.createElement(e);i=[];c&&Spark(j).attribute(c);g&&Spark(j).css(g);for(m in this.elements)this.elements.hasOwnProperty(m)&&(a==="prepend"?i.push(this.elements[m].parentNode.insertBefore(j.cloneNode(!0),this.elements[m])):a==="append"?i.push(this.elements[m].parentNode.insertBefore(j.cloneNode(!0),
this.elements[m].nextSibling)):a==="insert"&&i.push(this.elements[m].appendChild(j.cloneNode(!0))));d&&d(i)}return this};SparkFn.trigger=function(a){var e=null,c=null,g=null;for(g in this.elements)this.elements.hasOwnProperty(g)&&(e=this.elements[g],document.createEventObject?(c=document.createEventObject(),e.fireEvent("on"+a,c)):(c=document.createEvent("HTMLEvents"),c.initEvent(a,!0,!0),e.dispatchEvent(c)));return this};
(function(){function a(b,a,p,c,k,s){k=0;for(var e=c.length;k<e;k++){var d=c[k];if(d){var f=!1;for(d=d[b];d;){if(d.sizcache===p){f=c[d.sizset];break}if(d.nodeType===1&&!s)d.sizcache=p,d.sizset=k;if(d.nodeName.toLowerCase()===a){f=d;break}d=d[b]}c[k]=f}}}function e(b,a,c,n,k,s){k=0;for(var e=n.length;k<e;k++){var d=n[k];if(d){var f=!1;for(d=d[b];d;){if(d.sizcache===c){f=n[d.sizset];break}if(d.nodeType===1){if(!s)d.sizcache=c,d.sizset=k;if(typeof a!=="string"){if(d===a){f=!0;break}}else if(m.filter(a,
[d]).length>0){f=d;break}}d=d[b]}n[k]=f}}}var c=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,g=0,d=Object.prototype.toString,j=!1,i=!0;[0,0].sort(function(){i=!1;return 0});var m=function(b,a,p,n){p=p||[];var k=a=a||document;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!b||typeof b!=="string")return p;var s,e,f,g,j,r=!0,q=m.isXML(a),i=[],w=b;do if(c.exec(""),s=c.exec(w))if(w=s[3],i.push(s[1]),s[2]){g=s[3];break}while(s);
if(i.length>1&&x.exec(b))if(i.length===2&&o.relative[i[0]])e=v(i[0]+i[1],a);else for(e=o.relative[i[0]]?[a]:m(i.shift(),a);i.length;)b=i.shift(),o.relative[b]&&(b+=i.shift()),e=v(b,e);else if(!n&&i.length>1&&a.nodeType===9&&!q&&o.match.ID.test(i[0])&&!o.match.ID.test(i[i.length-1])&&(s=m.find(i.shift(),a,q),a=s.expr?m.filter(s.expr,s.set)[0]:s.set[0]),a){s=n?{expr:i.pop(),set:t(n)}:m.find(i.pop(),i.length===1&&(i[0]==="~"||i[0]==="+")&&a.parentNode?a.parentNode:a,q);e=s.expr?m.filter(s.expr,s.set):
s.set;for(i.length>0?f=t(e):r=!1;i.length;)s=j=i.pop(),o.relative[j]?s=i.pop():j="",s==null&&(s=a),o.relative[j](f,s,q)}else f=[];f||(f=e);f||m.error(j||b);if(d.call(f)==="[object Array]")if(r)if(a&&a.nodeType===1)for(b=0;f[b]!=null;b++)f[b]&&(f[b]===!0||f[b].nodeType===1&&m.contains(a,f[b]))&&p.push(e[b]);else for(b=0;f[b]!=null;b++)f[b]&&f[b].nodeType===1&&p.push(e[b]);else p.push.apply(p,f);else t(f,p);g&&(m(g,k,p,n),m.uniqueSort(p));return p};m.uniqueSort=function(b){if(u&&(j=i,b.sort(u),j))for(var a=
1;a<b.length;a++)b[a]===b[a-1]&&b.splice(a--,1);return b};m.matches=function(b,a){return m(b,null,null,a)};m.matchesSelector=function(b,a){return m(a,null,null,[b]).length>0};m.find=function(b,a,c){var n;if(!b)return[];for(var k=0,e=o.order.length;k<e;k++){var d,f=o.order[k];if(d=o.leftMatch[f].exec(b)){var g=d[1];d.splice(1,1);if(g.substr(g.length-1)!=="\\"&&(d[1]=(d[1]||"").replace(/\\/g,""),n=o.find[f](d,a,c),n!=null)){b=b.replace(o.match[f],"");break}}}n||(n=typeof a.getElementsByTagName!=="undefined"?
a.getElementsByTagName("*"):[]);return{set:n,expr:b}};m.filter=function(b,a,c,n){for(var k,d,e=b,f=[],g=a,j=a&&a[0]&&m.isXML(a[0]);b&&a.length;){for(var i in o.filter)if((k=o.leftMatch[i].exec(b))!=null&&k[2]){var r,q,t=o.filter[i];q=k[1];d=!1;k.splice(1,1);if(q.substr(q.length-1)!=="\\"){g===f&&(f=[]);if(o.preFilter[i])if(k=o.preFilter[i](k,g,c,f,n,j)){if(k===!0)continue}else d=r=!0;if(k)for(var x=0;(q=g[x])!=null;x++)if(q){r=t(q,k,x,g);var w=n^!!r;c&&r!=null?w?d=!0:g[x]=!1:w&&(f.push(q),d=!0)}if(r!==
void 0){c||(g=f);b=b.replace(o.match[i],"");if(!d)return[];break}}}if(b===e)if(d==null)m.error(b);else break;e=b}return g};m.error=function(b){throw"Syntax error, unrecognized expression: "+b;};var o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(b){return b.getAttribute("href")}},relative:{"+":function(b,a){var c=typeof a==="string",n=c&&!/\W/.test(a);c=c&&!n;n&&(a=a.toLowerCase());n=0;for(var k=
b.length,d;n<k;n++)if(d=b[n]){for(;(d=d.previousSibling)&&d.nodeType!==1;);b[n]=c||d&&d.nodeName.toLowerCase()===a?d||!1:d===a}c&&m.filter(a,b,!0)},">":function(b,a){var c,n=typeof a==="string",k=0,d=b.length;if(n&&!/\W/.test(a))for(a=a.toLowerCase();k<d;k++){if(c=b[k])c=c.parentNode,b[k]=c.nodeName.toLowerCase()===a?c:!1}else{for(;k<d;k++)(c=b[k])&&(b[k]=n?c.parentNode:c.parentNode===a);n&&m.filter(a,b,!0)}},"":function(b,h,c){var n,k=g++,d=e;typeof h==="string"&&!/\W/.test(h)&&(n=h=h.toLowerCase(),
d=a);d("parentNode",h,k,b,n,c)},"~":function(b,h,c){var n,d=g++,f=e;typeof h==="string"&&!/\W/.test(h)&&(n=h=h.toLowerCase(),f=a);f("previousSibling",h,d,b,n,c)}},find:{ID:function(b,a,c){if(typeof a.getElementById!=="undefined"&&!c)return(b=a.getElementById(b[1]))&&b.parentNode?[b]:[]},NAME:function(b,a){if(typeof a.getElementsByName!=="undefined"){for(var c=[],n=a.getElementsByName(b[1]),d=0,e=n.length;d<e;d++)n[d].getAttribute("name")===b[1]&&c.push(n[d]);return c.length===0?null:c}},TAG:function(b,
a){if(typeof a.getElementsByTagName!=="undefined")return a.getElementsByTagName(b[1])}},preFilter:{CLASS:function(b,a,c,d,k,e){b=" "+b[1].replace(/\\/g,"")+" ";if(e)return b;e=0;for(var f;(f=a[e])!=null;e++)f&&(k^(f.className&&(" "+f.className+" ").replace(/[\t\n\r]/g," ").indexOf(b)>=0)?c||d.push(f):c&&(a[e]=!1));return!1},ID:function(b){return b[1].replace(/\\/g,"")},TAG:function(b){return b[1].toLowerCase()},CHILD:function(b){if(b[1]==="nth"){b[2]||m.error(b[0]);b[2]=b[2].replace(/^\+|\s*/g,"");
var a=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2]==="even"&&"2n"||b[2]==="odd"&&"2n+1"||!/\D/.test(b[2])&&"0n+"+b[2]||b[2]);b[2]=a[1]+(a[2]||1)-0;b[3]=a[3]-0}else b[2]&&m.error(b[0]);b[0]=g++;return b},ATTR:function(b,a,c,d,k,e){a=b[1]=b[1].replace(/\\/g,"");!e&&o.attrMap[a]&&(b[1]=o.attrMap[a]);b[4]=(b[4]||b[5]||"").replace(/\\/g,"");b[2]==="~="&&(b[4]=" "+b[4]+" ");return b},PSEUDO:function(b,a,d,n,k){if(b[1]==="not")if((c.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,a);else return b=
m.filter(b[3],a,d,1^k),d||n.push.apply(n,b),!1;else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(b){b.unshift(!0);return b}},filters:{enabled:function(b){return b.disabled===!1&&b.type!=="hidden"},disabled:function(b){return b.disabled===!0},checked:function(b){return b.checked===!0},selected:function(b){return b.selected===!0},parent:function(b){return!!b.firstChild},empty:function(b){return!b.firstChild},has:function(b,a,c){return!!m(c[3],b).length},header:function(b){return/h\d/i.test(b.nodeName)},
text:function(b){return"text"===b.type},radio:function(b){return"radio"===b.type},checkbox:function(b){return"checkbox"===b.type},file:function(b){return"file"===b.type},password:function(b){return"password"===b.type},submit:function(b){return"submit"===b.type},image:function(b){return"image"===b.type},reset:function(b){return"reset"===b.type},button:function(b){return"button"===b.type||b.nodeName.toLowerCase()==="button"},input:function(b){return/input|select|textarea|button/i.test(b.nodeName)}},
setFilters:{first:function(b,a){return a===0},last:function(b,a,c,d){return a===d.length-1},even:function(b,a){return a%2===0},odd:function(b,a){return a%2===1},lt:function(b,a,c){return a<c[3]-0},gt:function(b,a,c){return a>c[3]-0},nth:function(b,a,c){return c[3]-0===a},eq:function(b,a,c){return c[3]-0===a}},filter:{PSEUDO:function(b,a,c,d){var k=a[1],e=o.filters[k];if(e)return e(b,c,a,d);else if(k==="contains")return(b.textContent||b.innerText||m.getText([b])||"").indexOf(a[3])>=0;else if(k==="not"){a=
a[3];c=0;for(d=a.length;c<d;c++)if(a[c]===b)return!1;return!0}else m.error(k)},CHILD:function(b,a){var c=a[1],d=b;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=b;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":c=a[2];var e=a[3];if(c===1&&e===0)return!0;var f=a[0],g=b.parentNode;if(g&&(g.sizcache!==f||!b.nodeIndex)){var j=0;for(d=g.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++j;g.sizcache=
f}d=b.nodeIndex-e;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(b,a){return b.nodeType===1&&b.getAttribute("id")===a},TAG:function(b,a){return a==="*"&&b.nodeType===1||b.nodeName.toLowerCase()===a},CLASS:function(b,a){return(" "+(b.className||b.getAttribute("class"))+" ").indexOf(a)>-1},ATTR:function(b,a){var c=a[1];c=o.attrHandle[c]?o.attrHandle[c](b):b[c]!=null?b[c]:b.getAttribute(c);var d=c+"",e=a[2],f=a[4];return c==null?e==="!=":e==="="?d===f:e==="*="?d.indexOf(f)>=0:e==="~="?(" "+d+" ").indexOf(f)>=
0:!f?d&&c!==!1:e==="!="?d!==f:e==="^="?d.indexOf(f)===0:e==="$="?d.substr(d.length-f.length)===f:e==="|="?d===f||d.substr(0,f.length+1)===f+"-":!1},POS:function(b,a,c,d){var e=o.setFilters[a[2]];if(e)return e(b,c,a,d)}}},x=o.match.POS,w=function(b,a){return"\\"+(a-0+1)},r;for(r in o.match)o.match[r]=RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,w));var t=function(b,a){b=Array.prototype.slice.call(b,
0);if(a)return a.push.apply(a,b),a;return b};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(q){t=function(a,c){var e=0,f=c||[];if(d.call(a)==="[object Array]")Array.prototype.push.apply(f,a);else if(typeof a.length==="number")for(var k=a.length;e<k;e++)f.push(a[e]);else for(;a[e];e++)f.push(a[e]);return f}}var u,f;document.documentElement.compareDocumentPosition?u=function(a,c){if(a===c)return j=!0,0;if(!a.compareDocumentPosition||!c.compareDocumentPosition)return a.compareDocumentPosition?
-1:1;return a.compareDocumentPosition(c)&4?-1:1}:(u=function(a,c){var d,e,k=[],g=[];d=a.parentNode;e=c.parentNode;var i=d;if(a===c)return j=!0,0;else if(d===e)return f(a,c);else if(d){if(!e)return 1}else return-1;for(;i;)k.unshift(i),i=i.parentNode;for(i=e;i;)g.unshift(i),i=i.parentNode;d=k.length;e=g.length;for(i=0;i<d&&i<e;i++)if(k[i]!==g[i])return f(k[i],g[i]);return i===d?f(a,g[i],-1):f(k[i],c,1)},f=function(a,c,d){if(a===c)return d;for(a=a.nextSibling;a;){if(a===c)return-1;a=a.nextSibling}return 1});
m.getText=function(a){for(var c="",d,e=0;a[e];e++)d=a[e],d.nodeType===3||d.nodeType===4?c+=d.nodeValue:d.nodeType!==8&&(c+=m.getText(d.childNodes));return c};(function(){var a=document.createElement("div"),c="script"+(new Date).getTime(),d=document.documentElement;a.innerHTML="<a name='"+c+"'/>";d.insertBefore(a,d.firstChild);if(document.getElementById(c))o.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!==
"undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};d.removeChild(a);d=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0)o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var d=[],e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);
c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();document.querySelectorAll&&function(){var a=m,c=document.createElement("div");c.innerHTML="<p class='TEST'></p>";if(!(c.querySelectorAll&&c.querySelectorAll(".TEST").length===0)){m=function(c,d,e,f){d=d||document;if(!f&&!m.isXML(d)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
if(h&&(d.nodeType===1||d.nodeType===9))if(h[1])return t(d.getElementsByTagName(c),e);else if(h[2]&&o.find.CLASS&&d.getElementsByClassName)return t(d.getElementsByClassName(h[2]),e);if(d.nodeType===9){if(c==="body"&&d.body)return t([d.body],e);else if(h&&h[3]){var g=d.getElementById(h[3]);if(g&&g.parentNode){if(g.id===h[3])return t([g],e)}else return t([],e)}try{return t(d.querySelectorAll(c),e)}catch(i){}}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){g=(h=d.getAttribute("id"))||"__sizzle__";
var j=d.parentNode,p=/^\s*[+~]/.test(c);h?g=g.replace(/'/g,"\\$&"):d.setAttribute("id",g);if(p&&j)d=d.parentNode;try{if(!p||j)return t(d.querySelectorAll("[id='"+g+"'] "+c),e)}catch(r){}finally{h||d.removeAttribute("id")}}}return a(c,d,e,f)};for(var d in a)m[d]=a[d];c=null}}();(function(){var a=document.documentElement,c=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{c.call(document.documentElement,"[test!='']:sizzle")}catch(e){d=!0}if(c)m.matchesSelector=
function(a,b){b=b.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(d||!o.match.PSEUDO.test(b)&&!/!=/.test(b))return c.call(a,b)}catch(e){}return m(b,null,null,[a]).length>0}})();(function(){var a=document.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==
"undefined"&&!c)return b.getElementsByClassName(a[1])},a=null})();m.contains=document.documentElement.contains?function(a,c){return a!==c&&(a.contains?a.contains(c):!0)}:document.documentElement.compareDocumentPosition?function(a,c){return!!(a.compareDocumentPosition(c)&16)}:function(){return!1};m.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var v=function(a,c){for(var d,e=[],f="",g=c.nodeType?[c]:c;d=o.match.PSEUDO.exec(a);)f+=d[0],a=a.replace(o.match.PSEUDO,
"");a=o.relative[a]?a+"*":a;d=0;for(var i=g.length;d<i;d++)m(a,g[d],e);return m.filter(f,e)};window.SparkSe=m})();var JSON;JSON||(JSON={});
(function(){function a(a){return a<10?"0"+a:a}function e(a){d.lastIndex=0;return d.test(a)?'"'+a.replace(d,function(a){var c=m[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var g,m,q,u,f=j,v,b=d[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof o==="function"&&(b=o.call(d,a,b));switch(typeof b){case "string":return e(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);
case "object":if(!b)return"null";j+=i;v=[];if(Object.prototype.toString.apply(b)==="[object Array]"){u=b.length;for(g=0;g<u;g+=1)v[g]=c(g,b)||"null";q=v.length===0?"[]":j?"[\n"+j+v.join(",\n"+j)+"\n"+f+"]":"["+v.join(",")+"]";j=f;return q}if(o&&typeof o==="object"){u=o.length;for(g=0;g<u;g+=1)m=o[g],typeof m==="string"&&(q=c(m,b))&&v.push(e(m)+(j?": ":":")+q)}else for(m in b)Object.hasOwnProperty.call(b,m)&&(q=c(m,b))&&v.push(e(m)+(j?": ":":")+q);q=v.length===0?"{}":j?"{\n"+j+v.join(",\n"+j)+"\n"+
f+"}":"{"+v.join(",")+"}";j=f;return q}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var g=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j,i,m={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},o;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,d,e){var g;i=j="";if(typeof e==="number")for(g=0;g<e;g+=1)i+=" ";else typeof e==="string"&&(i=e);if((o=d)&&typeof d!=="function"&&(typeof d!=="object"||typeof d.length!=="number"))throw Error("JSON.stringify");return c("",
{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,c){function d(a,e){var f,g,b=a[e];if(b&&typeof b==="object")for(f in b)Object.hasOwnProperty.call(b,f)&&(g=d(b,f),g!==void 0?b[f]=g:delete b[f]);return c.call(a,e,b)}var e;a=String(a);g.lastIndex=0;g.test(a)&&(a=a.replace(g,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),typeof c==="function"?d({"":e},""):e;throw new SyntaxError("JSON.parse");}})();SparkIn();
