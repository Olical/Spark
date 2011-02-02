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
 */
window.SparkFn=new Object();window.SparkIn=function(){window.Spark=function(d,e){var c=new Object();if(d!==undefined){if(typeof d=="string"){c=(e)?Sizzle(d,e):Sizzle(d)}else{if(typeof HTMLElement==="object"?d instanceof HTMLElement:typeof d==="object"&&d.nodeType===1&&typeof d.nodeName==="string"){c={0:d}}else{c=d}}}for(var g in SparkFn){c[g]=SparkFn[g]}return c};var a=true;if($===undefined){a=false}else{if($.fixEvent!==undefined){a=false}}if(a===false){window.$=Spark()}for(var b in Spark()){Spark[b]=Spark()[b];if(a===false){$[b]=Spark()[b]}}};SparkFn.html=function(c,a){var b=null;for(var d in this.elements){b=this.elements[d];if(c===undefined){return b.innerHTML}else{(!a)?b.innerHTML=c:b.innerHTML+=c}}return this};SparkFn.text=function(c,a){var b=null;for(var d in this.elements){b=this.elements[d];if(c===undefined){return b.innerText}else{(!a)?b.innerText=c:b.innerText+=c}}return this};SparkFn.fixEvent=function(c){if(c.clientX||c.clientY){c.pageX=c.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;c.pageY=c.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(c.target===undefined){c.target=c.srcElement}var a=offsetY=0;var b=c.target;if(b.offsetParent){do{a+=b.offsetLeft;offsetY+=b.offsetTop}while(b=b.offsetParent);c.offsetX=a;c.offsetY=offsetY}return c};(function(){var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,j=0,d=Object.prototype.toString,p=false,i=true;[0,0].sort(function(){i=false;return 0});var b=function(w,e,z,A){z=z||[];e=e||document;var C=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!w||typeof w!=="string"){return z}var t,E,H,s,D,G,F,y,v=true,u=b.isXML(e),x=[],B=w;do{q.exec("");t=q.exec(B);if(t){B=t[3];x.push(t[1]);if(t[2]){s=t[3];break}}}while(t);if(x.length>1&&k.exec(w)){if(x.length===2&&f.relative[x[0]]){E=h(x[0]+x[1],e)}else{E=f.relative[x[0]]?[e]:b(x.shift(),e);while(x.length){w=x.shift();if(f.relative[w]){w+=x.shift()}E=h(w,E)}}}else{if(!A&&x.length>1&&e.nodeType===9&&!u&&f.match.ID.test(x[0])&&!f.match.ID.test(x[x.length-1])){D=b.find(x.shift(),e,u);e=D.expr?b.filter(D.expr,D.set)[0]:D.set[0]}if(e){D=A?{expr:x.pop(),set:a(A)}:b.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&e.parentNode?e.parentNode:e,u);E=D.expr?b.filter(D.expr,D.set):D.set;if(x.length>0){H=a(E)}else{v=false}while(x.length){G=x.pop();F=G;if(!f.relative[G]){G=""}else{F=x.pop()}if(F==null){F=e}f.relative[G](H,F,u)}}else{H=x=[]}}if(!H){H=E}if(!H){b.error(G||w)}if(d.call(H)==="[object Array]"){if(!v){z.push.apply(z,H)}else{if(e&&e.nodeType===1){for(y=0;H[y]!=null;y++){if(H[y]&&(H[y]===true||H[y].nodeType===1&&b.contains(e,H[y]))){z.push(E[y])}}}else{for(y=0;H[y]!=null;y++){if(H[y]&&H[y].nodeType===1){z.push(E[y])}}}}}else{a(H,z)}if(s){b(s,C,z,A);b.uniqueSort(z)}return z};b.uniqueSort=function(s){if(c){p=i;s.sort(c);if(p){for(var e=1;e<s.length;e++){if(s[e]===s[e-1]){s.splice(e--,1)}}}}return s};b.matches=function(e,s){return b(e,null,null,s)};b.matchesSelector=function(e,s){return b(s,null,null,[e]).length>0};b.find=function(y,e,z){var x;if(!y){return[]}for(var u=0,t=f.order.length;u<t;u++){var v,w=f.order[u];if((v=f.leftMatch[w].exec(y))){var s=v[1];v.splice(1,1);if(s.substr(s.length-1)!=="\\"){v[1]=(v[1]||"").replace(/\\/g,"");x=f.find[w](v,e,z);if(x!=null){y=y.replace(f.match[w],"");break}}}}if(!x){x=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:x,expr:y}};b.filter=function(C,B,F,v){var x,e,t=C,H=[],z=B,y=B&&B[0]&&b.isXML(B[0]);while(C&&B.length){for(var A in f.filter){if((x=f.leftMatch[A].exec(C))!=null&&x[2]){var G,E,s=f.filter[A],u=x[1];e=false;x.splice(1,1);if(u.substr(u.length-1)==="\\"){continue}if(z===H){H=[]}if(f.preFilter[A]){x=f.preFilter[A](x,z,F,H,v,y);if(!x){e=G=true}else{if(x===true){continue}}}if(x){for(var w=0;(E=z[w])!=null;w++){if(E){G=s(E,x,w,z);var D=v^!!G;if(F&&G!=null){if(D){e=true}else{z[w]=false}}else{if(D){H.push(E);e=true}}}}}if(G!==undefined){if(!F){z=H}C=C.replace(f.match[A],"");if(!e){return[]}break}}}if(C===t){if(e==null){b.error(C)}else{break}}t=C}return z};b.error=function(e){throw"Syntax error, unrecognized expression: "+e};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(x,s){var u=typeof s==="string",w=u&&!/\W/.test(s),y=u&&!w;if(w){s=s.toLowerCase()}for(var t=0,e=x.length,v;t<e;t++){if((v=x[t])){while((v=v.previousSibling)&&v.nodeType!==1){}x[t]=y||v&&v.nodeName.toLowerCase()===s?v||false:v===s}}if(y){b.filter(s,x,true)}},">":function(x,s){var w,v=typeof s==="string",t=0,e=x.length;if(v&&!/\W/.test(s)){s=s.toLowerCase();for(;t<e;t++){w=x[t];if(w){var u=w.parentNode;x[t]=u.nodeName.toLowerCase()===s?u:false}}}else{for(;t<e;t++){w=x[t];if(w){x[t]=v?w.parentNode:w.parentNode===s}}if(v){b.filter(s,x,true)}}},"":function(u,s,w){var v,t=j++,e=r;if(typeof s==="string"&&!/\W/.test(s)){s=s.toLowerCase();v=s;e=o}e("parentNode",s,t,u,v,w)},"~":function(u,s,w){var v,t=j++,e=r;if(typeof s==="string"&&!/\W/.test(s)){s=s.toLowerCase();v=s;e=o}e("previousSibling",s,t,u,v,w)}},find:{ID:function(s,t,u){if(typeof t.getElementById!=="undefined"&&!u){var e=t.getElementById(s[1]);return e&&e.parentNode?[e]:[]}},NAME:function(t,w){if(typeof w.getElementsByName!=="undefined"){var s=[],v=w.getElementsByName(t[1]);for(var u=0,e=v.length;u<e;u++){if(v[u].getAttribute("name")===t[1]){s.push(v[u])}}return s.length===0?null:s}},TAG:function(e,s){if(typeof s.getElementsByTagName!=="undefined"){return s.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(u,s,t,e,x,y){u=" "+u[1].replace(/\\/g,"")+" ";if(y){return u}for(var v=0,w;(w=s[v])!=null;v++){if(w){if(x^(w.className&&(" "+w.className+" ").replace(/[\t\n\r]/g," ").indexOf(u)>=0)){if(!t){e.push(w)}}else{if(t){s[v]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(s,e){return s[1].toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){b.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var s=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(s[1]+(s[2]||1))-0;e[3]=s[3]-0}else{if(e[2]){b.error(e[0])}}e[0]=j++;return e},ATTR:function(v,s,t,e,w,x){var u=v[1]=v[1].replace(/\\/g,"");if(!x&&f.attrMap[u]){v[1]=f.attrMap[u]}v[4]=(v[4]||v[5]||"").replace(/\\/g,"");if(v[2]==="~="){v[4]=" "+v[4]+" "}return v},PSEUDO:function(v,s,t,e,w){if(v[1]==="not"){if((q.exec(v[3])||"").length>1||/^\w/.test(v[3])){v[3]=b(v[3],null,null,s)}else{var u=b.filter(v[3],s,t,true^w);if(!t){e.push.apply(e,u)}return false}}else{if(f.match.POS.test(v[0])||f.match.CHILD.test(v[0])){return true}}return v},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(t,s,e){return !!b(e[3],t).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)}},setFilters:{first:function(s,e){return e===0},last:function(t,s,e,u){return s===u.length-1},even:function(s,e){return e%2===0},odd:function(s,e){return e%2===1},lt:function(t,s,e){return s<e[3]-0},gt:function(t,s,e){return s>e[3]-0},nth:function(t,s,e){return e[3]-0===s},eq:function(t,s,e){return e[3]-0===s}},filter:{PSEUDO:function(t,y,x,z){var e=y[1],s=f.filters[e];if(s){return s(t,x,y,z)}else{if(e==="contains"){return(t.textContent||t.innerText||b.getText([t])||"").indexOf(y[3])>=0}else{if(e==="not"){var u=y[3];for(var w=0,v=u.length;w<v;w++){if(u[w]===t){return false}}return true}else{b.error(e)}}}},CHILD:function(e,u){var x=u[1],s=e;switch(x){case"only":case"first":while((s=s.previousSibling)){if(s.nodeType===1){return false}}if(x==="first"){return true}s=e;case"last":while((s=s.nextSibling)){if(s.nodeType===1){return false}}return true;case"nth":var t=u[2],A=u[3];if(t===1&&A===0){return true}var w=u[0],z=e.parentNode;if(z&&(z.sizcache!==w||!e.nodeIndex)){var v=0;for(s=z.firstChild;s;s=s.nextSibling){if(s.nodeType===1){s.nodeIndex=++v}}z.sizcache=w}var y=e.nodeIndex-A;if(t===0){return y===0}else{return(y%t===0&&y/t>=0)}}},ID:function(s,e){return s.nodeType===1&&s.getAttribute("id")===e},TAG:function(s,e){return(e==="*"&&s.nodeType===1)||s.nodeName.toLowerCase()===e},CLASS:function(s,e){return(" "+(s.className||s.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(w,u){var t=u[1],e=f.attrHandle[t]?f.attrHandle[t](w):w[t]!=null?w[t]:w.getAttribute(t),x=e+"",v=u[2],s=u[4];return e==null?v==="!=":v==="="?x===s:v==="*="?x.indexOf(s)>=0:v==="~="?(" "+x+" ").indexOf(s)>=0:!s?x&&e!==false:v==="!="?x!==s:v==="^="?x.indexOf(s)===0:v==="$="?x.substr(x.length-s.length)===s:v==="|="?x===s||x.substr(0,s.length+1)===s+"-":false},POS:function(v,s,t,w){var e=s[2],u=f.setFilters[e];if(u){return u(v,t,s,w)}}}};var k=f.match.POS,g=function(s,e){return"\\"+(e-0+1)};for(var n in f.match){f.match[n]=new RegExp(f.match[n].source+(/(?![^\[]*\])(?![^\(]*\))/.source));f.leftMatch[n]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[n].source.replace(/\\(\d+)/g,g))}var a=function(s,e){s=Array.prototype.slice.call(s,0);if(e){e.push.apply(e,s);return e}return s};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(l){a=function(v,u){var t=0,s=u||[];if(d.call(v)==="[object Array]"){Array.prototype.push.apply(s,v)}else{if(typeof v.length==="number"){for(var e=v.length;t<e;t++){s.push(v[t])}}else{for(;v[t];t++){s.push(v[t])}}}return s}}var c,m;if(document.documentElement.compareDocumentPosition){c=function(s,e){if(s===e){p=true;return 0}if(!s.compareDocumentPosition||!e.compareDocumentPosition){return s.compareDocumentPosition?-1:1}return s.compareDocumentPosition(e)&4?-1:1}}else{c=function(z,y){var w,s,t=[],e=[],v=z.parentNode,x=y.parentNode,A=v;if(z===y){p=true;return 0}else{if(v===x){return m(z,y)}else{if(!v){return -1}else{if(!x){return 1}}}}while(A){t.unshift(A);A=A.parentNode}A=x;while(A){e.unshift(A);A=A.parentNode}w=t.length;s=e.length;for(var u=0;u<w&&u<s;u++){if(t[u]!==e[u]){return m(t[u],e[u])}}return u===w?m(z,e[u],-1):m(t[u],y,1)};m=function(s,e,t){if(s===e){return t}var u=s.nextSibling;while(u){if(u===e){return -1}u=u.nextSibling}return 1}}b.getText=function(e){var s="",u;for(var t=0;e[t];t++){u=e[t];if(u.nodeType===3||u.nodeType===4){s+=u.nodeValue}else{if(u.nodeType!==8){s+=b.getText(u.childNodes)}}}return s};(function(){var s=document.createElement("div"),t="script"+(new Date()).getTime(),e=document.documentElement;s.innerHTML="<a name='"+t+"'/>";e.insertBefore(s,e.firstChild);if(document.getElementById(t)){f.find.ID=function(v,w,x){if(typeof w.getElementById!=="undefined"&&!x){var u=w.getElementById(v[1]);return u?u.id===v[1]||typeof u.getAttributeNode!=="undefined"&&u.getAttributeNode("id").nodeValue===v[1]?[u]:undefined:[]}};f.filter.ID=function(w,u){var v=typeof w.getAttributeNode!=="undefined"&&w.getAttributeNode("id");return w.nodeType===1&&v&&v.nodeValue===u}}e.removeChild(s);e=s=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(s,w){var v=w.getElementsByTagName(s[1]);if(s[1]==="*"){var u=[];for(var t=0;v[t];t++){if(v[t].nodeType===1){u.push(v[t])}}v=u}return v}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(s){return s.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=b,u=document.createElement("div"),t="__sizzle__";u.innerHTML="<p class='TEST'></p>";if(u.querySelectorAll&&u.querySelectorAll(".TEST").length===0){return}b=function(E,w,z,D){w=w||document;if(!D&&!b.isXML(w)){var C=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(E);if(C&&(w.nodeType===1||w.nodeType===9)){if(C[1]){return a(w.getElementsByTagName(E),z)}else{if(C[2]&&f.find.CLASS&&w.getElementsByClassName){return a(w.getElementsByClassName(C[2]),z)}}}if(w.nodeType===9){if(E==="body"&&w.body){return a([w.body],z)}else{if(C&&C[3]){var y=w.getElementById(C[3]);if(y&&y.parentNode){if(y.id===C[3]){return a([y],z)}}else{return a([],z)}}}try{return a(w.querySelectorAll(E),z)}catch(A){}}else{if(w.nodeType===1&&w.nodeName.toLowerCase()!=="object"){var x=w.getAttribute("id"),v=x||t,G=w.parentNode,F=/^\s*[+~]/.test(E);if(!x){w.setAttribute("id",v)}else{v=v.replace(/'/g,"\\$&")}if(F&&G){w=w.parentNode}try{if(!F||G){return a(w.querySelectorAll("[id='"+v+"'] "+E),z)}}catch(B){}finally{if(!x){w.removeAttribute("id")}}}}}return e(E,w,z,D)};for(var s in e){b[s]=e[s]}u=null})()}(function(){var e=document.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,s=false;try{t.call(document.documentElement,"[test!='']:sizzle")}catch(u){s=true}if(t){b.matchesSelector=function(v,x){x=x.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!b.isXML(v)){try{if(s||!f.match.PSEUDO.test(x)&&!/!=/.test(x)){return t.call(v,x)}}catch(w){}}return b(x,null,null,[v]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(s,t,u){if(typeof t.getElementsByClassName!=="undefined"&&!u){return t.getElementsByClassName(s[1])}};e=null})();function o(s,x,w,A,y,z){for(var u=0,t=A.length;u<t;u++){var e=A[u];if(e){var v=false;e=e[s];while(e){if(e.sizcache===w){v=A[e.sizset];break}if(e.nodeType===1&&!z){e.sizcache=w;e.sizset=u}if(e.nodeName.toLowerCase()===x){v=e;break}e=e[s]}A[u]=v}}}function r(s,x,w,A,y,z){for(var u=0,t=A.length;u<t;u++){var e=A[u];if(e){var v=false;e=e[s];while(e){if(e.sizcache===w){v=A[e.sizset];break}if(e.nodeType===1){if(!z){e.sizcache=w;e.sizset=u}if(typeof x!=="string"){if(e===x){v=true;break}}else{if(b.filter(x,[e]).length>0){v=e;break}}}e=e[s]}A[u]=v}}}if(document.documentElement.contains){b.contains=function(s,e){return s!==e&&(s.contains?s.contains(e):true)}}else{if(document.documentElement.compareDocumentPosition){b.contains=function(s,e){return !!(s.compareDocumentPosition(e)&16)}}else{b.contains=function(){return false}}}b.isXML=function(e){var s=(e?e.ownerDocument||e:0).documentElement;return s?s.nodeName!=="HTML":false};var h=function(e,y){var w,u=[],v="",t=y.nodeType?[y]:y;while((w=f.match.PSEUDO.exec(e))){v+=w[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var x=0,s=t.length;x<s;x++){b(e,t[x],u)}return b.filter(v,u)};window.Sizzle=b})();