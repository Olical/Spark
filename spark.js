/*
 * Spark JavaScript library v1.0.0
 * http://flowdev.co.uk/
 * 
 * Copyright 2010, Oliver Caldwell
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://github.com/Wolfy87/Spark
 * 
 * Includes sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 * 
 * Includes json2.js
 * http://www.json.org/json2.js
 */
window.SparkFn=new Object();window.SparkIn=function(){window.Spark=window.$=function(c,f){var b=new Object();if(c!=undefined){if(document.querySelectorAll==undefined){if(f!=undefined){b=Sizzle(c,f)}else{b=Sizzle(c)}}else{if(f!=undefined){var h=f.querySelectorAll(c)}else{var h=document.querySelectorAll(c)}for(var e=0;e<h.length;++e){b[e]=h[e]}}}var d={fps:60,selector:c,elements:b};for(var g in SparkFn){d[g]=SparkFn[g]}return d};Spark.fixEvents=function(c){if(c.pageX==null){var b=(document.documentElement&&document.documentElement.scrollLeft!=null)?document.documentElement:document.body;docX=c.clientX+b.scrollLeft;docY=c.clientY+b.scrollTop;c.pageX=docX;c.pageY=docY}if(!c.target){c.target==c.srcElement}return c};for(var a in Spark()){Spark[a]=$[a]=Spark()[a]}};