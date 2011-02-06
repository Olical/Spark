/*
 * Spark JavaScript library v2.0.0
 * http://sparkjs.co.uk/
 * 
 * Copyright 2011, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Includes json2.js
 * http://www.json.org/json2.js
 */
window.SparkFn=new Object();window.SparkIn=function(){if(window.SparkBk===undefined){window.SparkBk={$:window.$,Spark:window.Spark}}window.$=window.Spark=function(c,e){var b=new Object();if(c!==undefined){if(typeof c=="string"){b=(e)?Sizzle(c,e):Sizzle(c)}else{if(typeof HTMLElement==="object"?c instanceof HTMLElement:typeof c==="object"&&c.nodeType===1&&typeof c.nodeName==="string"){b={0:c}}else{b=c}}}var d=new Object();for(var g in SparkFn){d[g]=SparkFn[g]}d.elements=b;return d};for(var a in Spark()){$=Spark[a]=Spark()[a]}};SparkFn.html=function(c,a){var b=null;for(var d in this.elements){b=this.elements[d];if(c===undefined){return b.innerHTML}else{(!a)?b.innerHTML=c:b.innerHTML+=c}}return this};SparkFn.text=function(c,a){var b=null;for(var d in this.elements){b=this.elements[d];if(c===undefined){if(document.all){return b.innerText}else{return b.textContent}}else{if(document.all){(!a)?b.innerText=c:b.innerText+=c}else{(!a)?b.textContent=c:b.textContent+=c}}}return this};SparkFn.fixEvent=function(c){if(this.client().browser=="Explorer"){c.pageX=c.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;c.pageY=c.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(c.target===undefined){c.target=c.srcElement}var a=offsetY=0;var b=c.target;if(b.offsetParent&&this.client().browser=="Firefox"){do{a+=b.offsetLeft;offsetY+=b.offsetTop}while(b=b.offsetParent);c.offsetX=a;c.offsetY=offsetY}return c};SparkFn.ready=function(b){window.alreadyRunFlag=0;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){alreadyRunFlag=1;b()},false)}else{if(document.all&&!window.opera){document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');var a=document.getElementById("contentloadtag");a.onreadystatechange=function(){if(this.readyState=="complete"){alreadyrunflag=1;b()}}}}window.onload=function(){setTimeout("if(!alreadyRunFlag) callback()",0)}};SparkFn.event=function(b,d){var a=null;for(var c in this.elements){a=this.elements[c];(a.addEventListener)?a.addEventListener(b,function(f){d(Spark.fixEvent(f))},false):a.attachEvent("on"+b,function(f){d(Spark.fixEvent(f))})}return this};SparkFn.attribute=function(d){var c=null;for(var f in this.elements){c=this.elements[f];if(d!==undefined){for(var b in d){c[b]=d[b]}}else{return c}}return this};SparkFn.client=function(){var a={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.os=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var b=0;b<e.length;b++){var c=e[b].string;var d=e[b].prop;this.versionSearchString=e[b].versionSearch||e[b].identity;if(c){if(c.indexOf(e[b].subString)!=-1){return e[b].identity}}else{if(d){return e[b].identity}}}},searchVersion:function(c){var b=c.indexOf(this.versionSearchString);if(b==-1){return}return parseFloat(c.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};a.init();return a};SparkFn.computed=function(){if(window.getComputedStyle){return window.getComputedStyle(this.elements[0],null)}return this.elements[0].currentStyle};SparkFn.cookie=function(d,f,h){if(f===undefined){var g=d+"=";var a=document.cookie.split(";");for(var e in a){var j=a[e];while(j.charAt(0)==" "){j=j.substring(1,j.length)}if(j.indexOf(g)==0){return j.substring(g.length,j.length)}}return false}else{var b=new Date();b.setTime(b.getTime()+((h!==undefined)?h:2628000000));document.cookie=d+"="+f+"; expires="+b.toGMTString()+"; path=/"}};SparkFn.css=function(b){var a=null;for(var d in this.elements){a=this.elements[d];if(b!==undefined){for(var f in b){a.style[f]=b[f];if(f=="opacity"){a.style.MozOpacity=b[f];a.style.KhtmlOpacity=b[f];a.style.filter="alpha(opacity="+(b[f]*100)+")";a.style.zoom="1"}}}else{return a.style}}return this};SparkFn.data=(function(){var b={};var a=1;return function(e,d,f){var c=e.uniqueID||(e.uniqueID=a++);b[c]||(b[c]={});if(typeof f!="undefined"){b[c][d]=f}else{return b[c][d]}}})();SparkFn.each=function(c){var a=null;for(var b in this.elements){a=this.elements[b];c(a)}return this};SparkFn.json=function(b,a){if(b=="encode"){return JSON.stringify(a)}else{if(b=="decode"){return JSON.parse(a)}}};SparkFn.noConflict=function(b){var a=Spark;window.$=SparkBk.$;if(b===true){window.Spark=SparkBk.Spark}return a};SparkFn.jsonp=function(a,c,b){a+="?callback="+c;if(b!==undefined){a+="&"+b}this.load(a)};SparkFn.load=function(c){var b=document.getElementsByTagName("head")[0];var a=document.createElement("script");a.type="text/javascript";a.src=c;b.appendChild(a)};SparkFn.stop=function(){var c=null;for(var d in this.elements){c=this.elements[d];if(this.data(c,"Spark.animations")===undefined){this.data(c,"Spark.animations","")}var f=this.data(c,"Spark.animations").split(",");for(var b in f){clearTimeout(f[b])}}return this};SparkFn.transition=function(g,a,f){var c=null;if(f===undefined){f=new Function()}if(a===undefined){a=800}if(!this.offset){this.offset=0}for(var d in this.elements){c=this.elements[d];switch(g){case"slidedown":Spark(c).css({overflow:"hidden",display:"block"});var b=Spark(c).attribute().offsetHeight;Spark(c).css({height:0});Spark(c).animate({height:b},a+this.offset,f);break;case"slideup":var b=Spark(c).attribute().offsetHeight;Spark(c).css({overflow:"hidden",height:b});Spark(c).animate({height:0},a+this.offset,function(){Spark(c).css({height:b,display:"none"});f()});break;case"fadein":Spark(c).css({display:"block",opacity:0});Spark(c).animate({opacity:1},a+this.offset,f);break;case"fadeout":Spark(c).animate({opacity:0},a+this.offset,function(){Spark(c).css({opacity:1,display:"none"});f()});break;case"sneakin":Spark(c).css({overflow:"hidden",display:"block",opacity:0});var b=Spark(c).attribute().offsetHeight;Spark(c).css({height:0});Spark(c).animate({height:b,opacity:1},a+this.offset,f);break;case"sneakout":var b=Spark(c).attribute().offsetHeight;Spark(c).css({overflow:"hidden",height:b});Spark(c).animate({height:0,opacity:0},a+this.offset,function(){Spark(c).css({height:b,display:"none"});f()});break}}this.offset+=a;return this};SparkFn.animate=function(m,n,r){var j=null;var c=60;if(!n){n=800}if(!this.offset){this.offset=0}for(var k in this.elements){j=this.elements[k];for(var a in m){if(!j.style[a]){var g=Spark(j).computed()[a];j.style[a]=(g)?g:1}if(j.style[a]=="auto"&&a=="height"){j.style[a]=j.offsetHeight}else{if(j.style[a]=="auto"&&a=="width"){j.style[a]=j.offsetWidth}}var b=(a=="opacity")?parseFloat(j.style[a]):parseInt(j.style[a]);var d=((a=="opacity")?parseFloat(m[a]):parseInt(m[a]))-b;var l=n/(1000/c);var f=d/l;var q=(isNaN(m[a]))?m[a].replace(/[0-9]/g,""):"px";var o=new Object();if(a=="opacity"){q=""}this.data(j,"Spark.animations","START");for(var h=0;h<=l;h++){this.data(j,"Spark.animations",this.data(j,"Spark.animations")+","+setTimeout((function(p,s,u,t,i,e){return function(){o[u]=(t+(i*p))+e;Spark(s).css(o)}})(h,j,a,b,f,q),h*(1000/c)+this.offset,j,a,b,f,q))}this.data(j,"Spark.animations",this.data(j,"Spark.animations")+","+setTimeout((function(i,p,e){return function(){o[p]=m[p];Spark(i).css(o)}})(j,a,m),n+this.offset,j,a,m));this.data(j,"Spark.animations",this.data(j,"Spark.animations").replace("START,",""))}}if(r){setTimeout(r,n)}this.offset+=n;return this};SparkFn.ajax=function(e,b,c,d){var a=(!XMLHttpRequest)?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;e=e.toUpperCase();if(e=="GET"&&c){b+="?"+c}if(d){a.onreadystatechange=function(){if(a.readyState==4){d(a.responseText)}}}a.open(e,b,(d)?true:false);if(e=="POST"){a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.send((c)?c:null)}else{a.send(null)}if(!d){return a.responseText}};SparkFn.classes=function(f,a){var c=null;for(var d in this.elements){c=this.elements[d];switch(f){case"has":return new RegExp("\\b"+a+"\\b").test(c.className);break;case"add":if(!this.classes("has",a)){c.className+=(c.className)?" "+a:a}break;case"remove":var b=(c.className.match(" "+a))?" "+a:a;c.className=c.className.replace(b,"");break}}return this};(function(){var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,j=0,d=Object.prototype.toString,p=false,i=true;[0,0].sort(function(){i=false;return 0});var b=function(w,e,z,A){z=z||[];e=e||document;var C=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!w||typeof w!=="string"){return z}var t,E,H,s,D,G,F,y,v=true,u=b.isXML(e),x=[],B=w;do{q.exec("");t=q.exec(B);if(t){B=t[3];x.push(t[1]);if(t[2]){s=t[3];break}}}while(t);if(x.length>1&&k.exec(w)){if(x.length===2&&f.relative[x[0]]){E=h(x[0]+x[1],e)}else{E=f.relative[x[0]]?[e]:b(x.shift(),e);while(x.length){w=x.shift();if(f.relative[w]){w+=x.shift()}E=h(w,E)}}}else{if(!A&&x.length>1&&e.nodeType===9&&!u&&f.match.ID.test(x[0])&&!f.match.ID.test(x[x.length-1])){D=b.find(x.shift(),e,u);e=D.expr?b.filter(D.expr,D.set)[0]:D.set[0]}if(e){D=A?{expr:x.pop(),set:a(A)}:b.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&e.parentNode?e.parentNode:e,u);E=D.expr?b.filter(D.expr,D.set):D.set;if(x.length>0){H=a(E)}else{v=false}while(x.length){G=x.pop();F=G;if(!f.relative[G]){G=""}else{F=x.pop()}if(F==null){F=e}f.relative[G](H,F,u)}}else{H=x=[]}}if(!H){H=E}if(!H){b.error(G||w)}if(d.call(H)==="[object Array]"){if(!v){z.push.apply(z,H)}else{if(e&&e.nodeType===1){for(y=0;H[y]!=null;y++){if(H[y]&&(H[y]===true||H[y].nodeType===1&&b.contains(e,H[y]))){z.push(E[y])}}}else{for(y=0;H[y]!=null;y++){if(H[y]&&H[y].nodeType===1){z.push(E[y])}}}}}else{a(H,z)}if(s){b(s,C,z,A);b.uniqueSort(z)}return z};b.uniqueSort=function(s){if(c){p=i;s.sort(c);if(p){for(var e=1;e<s.length;e++){if(s[e]===s[e-1]){s.splice(e--,1)}}}}return s};b.matches=function(e,s){return b(e,null,null,s)};b.matchesSelector=function(e,s){return b(s,null,null,[e]).length>0};b.find=function(y,e,z){var x;if(!y){return[]}for(var u=0,t=f.order.length;u<t;u++){var v,w=f.order[u];if((v=f.leftMatch[w].exec(y))){var s=v[1];v.splice(1,1);if(s.substr(s.length-1)!=="\\"){v[1]=(v[1]||"").replace(/\\/g,"");x=f.find[w](v,e,z);if(x!=null){y=y.replace(f.match[w],"");break}}}}if(!x){x=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:x,expr:y}};b.filter=function(C,B,F,v){var x,e,t=C,H=[],z=B,y=B&&B[0]&&b.isXML(B[0]);while(C&&B.length){for(var A in f.filter){if((x=f.leftMatch[A].exec(C))!=null&&x[2]){var G,E,s=f.filter[A],u=x[1];e=false;x.splice(1,1);if(u.substr(u.length-1)==="\\"){continue}if(z===H){H=[]}if(f.preFilter[A]){x=f.preFilter[A](x,z,F,H,v,y);if(!x){e=G=true}else{if(x===true){continue}}}if(x){for(var w=0;(E=z[w])!=null;w++){if(E){G=s(E,x,w,z);var D=v^!!G;if(F&&G!=null){if(D){e=true}else{z[w]=false}}else{if(D){H.push(E);e=true}}}}}if(G!==undefined){if(!F){z=H}C=C.replace(f.match[A],"");if(!e){return[]}break}}}if(C===t){if(e==null){b.error(C)}else{break}}t=C}return z};b.error=function(e){throw"Syntax error, unrecognized expression: "+e};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(x,s){var u=typeof s==="string",w=u&&!/\W/.test(s),y=u&&!w;if(w){s=s.toLowerCase()}for(var t=0,e=x.length,v;t<e;t++){if((v=x[t])){while((v=v.previousSibling)&&v.nodeType!==1){}x[t]=y||v&&v.nodeName.toLowerCase()===s?v||false:v===s}}if(y){b.filter(s,x,true)}},">":function(x,s){var w,v=typeof s==="string",t=0,e=x.length;if(v&&!/\W/.test(s)){s=s.toLowerCase();for(;t<e;t++){w=x[t];if(w){var u=w.parentNode;x[t]=u.nodeName.toLowerCase()===s?u:false}}}else{for(;t<e;t++){w=x[t];if(w){x[t]=v?w.parentNode:w.parentNode===s}}if(v){b.filter(s,x,true)}}},"":function(u,s,w){var v,t=j++,e=r;if(typeof s==="string"&&!/\W/.test(s)){s=s.toLowerCase();v=s;e=o}e("parentNode",s,t,u,v,w)},"~":function(u,s,w){var v,t=j++,e=r;if(typeof s==="string"&&!/\W/.test(s)){s=s.toLowerCase();v=s;e=o}e("previousSibling",s,t,u,v,w)}},find:{ID:function(s,t,u){if(typeof t.getElementById!=="undefined"&&!u){var e=t.getElementById(s[1]);return e&&e.parentNode?[e]:[]}},NAME:function(t,w){if(typeof w.getElementsByName!=="undefined"){var s=[],v=w.getElementsByName(t[1]);for(var u=0,e=v.length;u<e;u++){if(v[u].getAttribute("name")===t[1]){s.push(v[u])}}return s.length===0?null:s}},TAG:function(e,s){if(typeof s.getElementsByTagName!=="undefined"){return s.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(u,s,t,e,x,y){u=" "+u[1].replace(/\\/g,"")+" ";if(y){return u}for(var v=0,w;(w=s[v])!=null;v++){if(w){if(x^(w.className&&(" "+w.className+" ").replace(/[\t\n\r]/g," ").indexOf(u)>=0)){if(!t){e.push(w)}}else{if(t){s[v]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(s,e){return s[1].toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){b.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var s=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(s[1]+(s[2]||1))-0;e[3]=s[3]-0}else{if(e[2]){b.error(e[0])}}e[0]=j++;return e},ATTR:function(v,s,t,e,w,x){var u=v[1]=v[1].replace(/\\/g,"");if(!x&&f.attrMap[u]){v[1]=f.attrMap[u]}v[4]=(v[4]||v[5]||"").replace(/\\/g,"");if(v[2]==="~="){v[4]=" "+v[4]+" "}return v},PSEUDO:function(v,s,t,e,w){if(v[1]==="not"){if((q.exec(v[3])||"").length>1||/^\w/.test(v[3])){v[3]=b(v[3],null,null,s)}else{var u=b.filter(v[3],s,t,true^w);if(!t){e.push.apply(e,u)}return false}}else{if(f.match.POS.test(v[0])||f.match.CHILD.test(v[0])){return true}}return v},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(t,s,e){return !!b(e[3],t).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)}},setFilters:{first:function(s,e){return e===0},last:function(t,s,e,u){return s===u.length-1},even:function(s,e){return e%2===0},odd:function(s,e){return e%2===1},lt:function(t,s,e){return s<e[3]-0},gt:function(t,s,e){return s>e[3]-0},nth:function(t,s,e){return e[3]-0===s},eq:function(t,s,e){return e[3]-0===s}},filter:{PSEUDO:function(t,y,x,z){var e=y[1],s=f.filters[e];if(s){return s(t,x,y,z)}else{if(e==="contains"){return(t.textContent||t.innerText||b.getText([t])||"").indexOf(y[3])>=0}else{if(e==="not"){var u=y[3];for(var w=0,v=u.length;w<v;w++){if(u[w]===t){return false}}return true}else{b.error(e)}}}},CHILD:function(e,u){var x=u[1],s=e;switch(x){case"only":case"first":while((s=s.previousSibling)){if(s.nodeType===1){return false}}if(x==="first"){return true}s=e;case"last":while((s=s.nextSibling)){if(s.nodeType===1){return false}}return true;case"nth":var t=u[2],A=u[3];if(t===1&&A===0){return true}var w=u[0],z=e.parentNode;if(z&&(z.sizcache!==w||!e.nodeIndex)){var v=0;for(s=z.firstChild;s;s=s.nextSibling){if(s.nodeType===1){s.nodeIndex=++v}}z.sizcache=w}var y=e.nodeIndex-A;if(t===0){return y===0}else{return(y%t===0&&y/t>=0)}}},ID:function(s,e){return s.nodeType===1&&s.getAttribute("id")===e},TAG:function(s,e){return(e==="*"&&s.nodeType===1)||s.nodeName.toLowerCase()===e},CLASS:function(s,e){return(" "+(s.className||s.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(w,u){var t=u[1],e=f.attrHandle[t]?f.attrHandle[t](w):w[t]!=null?w[t]:w.getAttribute(t),x=e+"",v=u[2],s=u[4];return e==null?v==="!=":v==="="?x===s:v==="*="?x.indexOf(s)>=0:v==="~="?(" "+x+" ").indexOf(s)>=0:!s?x&&e!==false:v==="!="?x!==s:v==="^="?x.indexOf(s)===0:v==="$="?x.substr(x.length-s.length)===s:v==="|="?x===s||x.substr(0,s.length+1)===s+"-":false},POS:function(v,s,t,w){var e=s[2],u=f.setFilters[e];if(u){return u(v,t,s,w)}}}};var k=f.match.POS,g=function(s,e){return"\\"+(e-0+1)};for(var n in f.match){f.match[n]=new RegExp(f.match[n].source+(/(?![^\[]*\])(?![^\(]*\))/.source));f.leftMatch[n]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[n].source.replace(/\\(\d+)/g,g))}var a=function(s,e){s=Array.prototype.slice.call(s,0);if(e){e.push.apply(e,s);return e}return s};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(l){a=function(v,u){var t=0,s=u||[];if(d.call(v)==="[object Array]"){Array.prototype.push.apply(s,v)}else{if(typeof v.length==="number"){for(var e=v.length;t<e;t++){s.push(v[t])}}else{for(;v[t];t++){s.push(v[t])}}}return s}}var c,m;if(document.documentElement.compareDocumentPosition){c=function(s,e){if(s===e){p=true;return 0}if(!s.compareDocumentPosition||!e.compareDocumentPosition){return s.compareDocumentPosition?-1:1}return s.compareDocumentPosition(e)&4?-1:1}}else{c=function(z,y){var w,s,t=[],e=[],v=z.parentNode,x=y.parentNode,A=v;if(z===y){p=true;return 0}else{if(v===x){return m(z,y)}else{if(!v){return -1}else{if(!x){return 1}}}}while(A){t.unshift(A);A=A.parentNode}A=x;while(A){e.unshift(A);A=A.parentNode}w=t.length;s=e.length;for(var u=0;u<w&&u<s;u++){if(t[u]!==e[u]){return m(t[u],e[u])}}return u===w?m(z,e[u],-1):m(t[u],y,1)};m=function(s,e,t){if(s===e){return t}var u=s.nextSibling;while(u){if(u===e){return -1}u=u.nextSibling}return 1}}b.getText=function(e){var s="",u;for(var t=0;e[t];t++){u=e[t];if(u.nodeType===3||u.nodeType===4){s+=u.nodeValue}else{if(u.nodeType!==8){s+=b.getText(u.childNodes)}}}return s};(function(){var s=document.createElement("div"),t="script"+(new Date()).getTime(),e=document.documentElement;s.innerHTML="<a name='"+t+"'/>";e.insertBefore(s,e.firstChild);if(document.getElementById(t)){f.find.ID=function(v,w,x){if(typeof w.getElementById!=="undefined"&&!x){var u=w.getElementById(v[1]);return u?u.id===v[1]||typeof u.getAttributeNode!=="undefined"&&u.getAttributeNode("id").nodeValue===v[1]?[u]:undefined:[]}};f.filter.ID=function(w,u){var v=typeof w.getAttributeNode!=="undefined"&&w.getAttributeNode("id");return w.nodeType===1&&v&&v.nodeValue===u}}e.removeChild(s);e=s=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(s,w){var v=w.getElementsByTagName(s[1]);if(s[1]==="*"){var u=[];for(var t=0;v[t];t++){if(v[t].nodeType===1){u.push(v[t])}}v=u}return v}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(s){return s.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=b,u=document.createElement("div"),t="__sizzle__";u.innerHTML="<p class='TEST'></p>";if(u.querySelectorAll&&u.querySelectorAll(".TEST").length===0){return}b=function(E,w,z,D){w=w||document;if(!D&&!b.isXML(w)){var C=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(E);if(C&&(w.nodeType===1||w.nodeType===9)){if(C[1]){return a(w.getElementsByTagName(E),z)}else{if(C[2]&&f.find.CLASS&&w.getElementsByClassName){return a(w.getElementsByClassName(C[2]),z)}}}if(w.nodeType===9){if(E==="body"&&w.body){return a([w.body],z)}else{if(C&&C[3]){var y=w.getElementById(C[3]);if(y&&y.parentNode){if(y.id===C[3]){return a([y],z)}}else{return a([],z)}}}try{return a(w.querySelectorAll(E),z)}catch(A){}}else{if(w.nodeType===1&&w.nodeName.toLowerCase()!=="object"){var x=w.getAttribute("id"),v=x||t,G=w.parentNode,F=/^\s*[+~]/.test(E);if(!x){w.setAttribute("id",v)}else{v=v.replace(/'/g,"\\$&")}if(F&&G){w=w.parentNode}try{if(!F||G){return a(w.querySelectorAll("[id='"+v+"'] "+E),z)}}catch(B){}finally{if(!x){w.removeAttribute("id")}}}}}return e(E,w,z,D)};for(var s in e){b[s]=e[s]}u=null})()}(function(){var e=document.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,s=false;try{t.call(document.documentElement,"[test!='']:sizzle")}catch(u){s=true}if(t){b.matchesSelector=function(v,x){x=x.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!b.isXML(v)){try{if(s||!f.match.PSEUDO.test(x)&&!/!=/.test(x)){return t.call(v,x)}}catch(w){}}return b(x,null,null,[v]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(s,t,u){if(typeof t.getElementsByClassName!=="undefined"&&!u){return t.getElementsByClassName(s[1])}};e=null})();function o(s,x,w,A,y,z){for(var u=0,t=A.length;u<t;u++){var e=A[u];if(e){var v=false;e=e[s];while(e){if(e.sizcache===w){v=A[e.sizset];break}if(e.nodeType===1&&!z){e.sizcache=w;e.sizset=u}if(e.nodeName.toLowerCase()===x){v=e;break}e=e[s]}A[u]=v}}}function r(s,x,w,A,y,z){for(var u=0,t=A.length;u<t;u++){var e=A[u];if(e){var v=false;e=e[s];while(e){if(e.sizcache===w){v=A[e.sizset];break}if(e.nodeType===1){if(!z){e.sizcache=w;e.sizset=u}if(typeof x!=="string"){if(e===x){v=true;break}}else{if(b.filter(x,[e]).length>0){v=e;break}}}e=e[s]}A[u]=v}}}if(document.documentElement.contains){b.contains=function(s,e){return s!==e&&(s.contains?s.contains(e):true)}}else{if(document.documentElement.compareDocumentPosition){b.contains=function(s,e){return !!(s.compareDocumentPosition(e)&16)}}else{b.contains=function(){return false}}}b.isXML=function(e){var s=(e?e.ownerDocument||e:0).documentElement;return s?s.nodeName!=="HTML":false};var h=function(e,y){var w,u=[],v="",t=y.nodeType?[y]:y;while((w=f.match.PSEUDO.exec(e))){v+=w[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var x=0,s=t.length;x<s;x++){b(e,t[x],u)}return b.filter(v,u)};window.Sizzle=b})();var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());SparkIn();