/*!
 * jQuery Migrate - v3.3.2 - 2020-11-17T23:22Z
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t,window)}):"object"==typeof module&&module.exports?module.exports=e(require("jquery"),window):e(jQuery,window)}(function(e,t){"use strict";function r(e,t){var r,n=/^(\d+)\.(\d+)\.(\d+)/,o=n.exec(e)||[],i=n.exec(t)||[];for(r=1;r<=3;r++){if(+o[r]>+i[r])return 1;if(+o[r]<+i[r])return-1}return 0}function n(t){return r(e.fn.jquery,t)>=0}function o(r){var n=t.console;e.migrateDeduplicateWarnings&&c[r]||(c[r]=!0,e.migrateWarnings.push(r),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+r),e.migrateTrace&&n.trace&&n.trace()))}function i(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return o(n),r},set:function(e){o(n),r=e}})}function a(e,t,r,n){e[t]=function(){return o(n),r.apply(this,arguments)}}function s(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}function u(e){return A.test(e)&&k.test(e[0].toUpperCase()+e.slice(1))}e.migrateVersion="3.3.2",t.console&&t.console.log&&(e&&n("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion));var c={};e.migrateDeduplicateWarnings=!0,e.migrateWarnings=[],e.migrateTrace===undefined&&(e.migrateTrace=!0),e.migrateReset=function(){c={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&o("jQuery is not compatible with Quirks Mode");var l,d={},p=e.fn.init,f=e.find,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,m=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,g=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(l in e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(o("jQuery( '#' ) is not a valid selector"),t[0]=[]),p.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var r=Array.prototype.slice.call(arguments);if("string"==typeof e&&y.test(e))try{t.document.querySelector(e)}catch(n){e=e.replace(m,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{t.document.querySelector(e),o("Attribute selector with '#' must be quoted: "+r[0]),r[0]=e}catch(i){o("Attribute selector with '#' was not fixed: "+r[0])}}return f.apply(this,r)},f)Object.prototype.hasOwnProperty.call(f,l)&&(e.find[l]=f[l]);if(a(e.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),a(e,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),a(e,"holdReady",e.holdReady,"jQuery.holdReady is deprecated"),a(e,"unique",e.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),i(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),i(e.expr,":",e.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),n("3.1.1")&&a(e,"trim",function(e){return null==e?"":(e+"").replace(g,"")},"jQuery.trim is deprecated; use String.prototype.trim"),n("3.2.0")&&(a(e,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),a(e,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),n("3.3.0")&&(a(e,"isNumeric",function(e){var t=typeof e;return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),a(e,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),a(e,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),a(e,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),e.ajax){var h=e.ajax,v=/(=)\?(?=&|$)|\?\?/;e.ajax=function(){var e=h.apply(this,arguments);return e.promise&&(a(e,"success",e.done,"jQXHR.success is deprecated and removed"),a(e,"error",e.fail,"jQXHR.error is deprecated and removed"),a(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},n("4.0.0")||e.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(v.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&v.test(e.data))&&o("JSON-to-JSONP auto-promotion is deprecated")})}var j=e.fn.removeAttr,b=e.fn.toggleClass,Q=/\S+/g;e.fn.removeAttr=function(t){var r=this;return e.each(t.match(Q),function(t,n){e.expr.match.bool.test(n)&&(o("jQuery.fn.removeAttr no longer sets boolean properties: "+n),r.prop(n,!1))}),j.apply(this,arguments)},e.fn.toggleClass=function(t){return t!==undefined&&"boolean"!=typeof t?b.apply(this,arguments):(o("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var r=this.getAttribute&&this.getAttribute("class")||"";r&&e.data(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":e.data(this,"__className__")||"")}))};var w,x=!1,A=/^[a-z]/,k=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return x=!0,e=n.apply(this,arguments),x=!1,e})}),e.swap=function(e,t,r,n){var i,a,s={};for(a in x||o("jQuery.swap() is undocumented and deprecated"),t)s[a]=e.style[a],e.style[a]=t[a];for(a in i=r.apply(e,n||[]),t)e.style[a]=s[a];return i},n("3.4.0")&&"undefined"!=typeof Proxy&&(e.cssProps=new Proxy(e.cssProps||{},{set:function(){return o("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e.cssNumber||(e.cssNumber={}),w=e.fn.css,e.fn.css=function(t,r){var n,i=this;return t&&"object"==typeof t&&!Array.isArray(t)?(e.each(t,function(t,r){e.fn.css.call(i,t,r)}),this):("number"==typeof r&&(u(n=s(t))||e.cssNumber[n]||o('Number-typed values are deprecated for jQuery.fn.css( "'+t+'", value )')),w.apply(this,arguments))};var S=e.data;if(e.data=function(t,r,n){var i,a,u;if(r&&"object"==typeof r&&2===arguments.length){for(u in i=e.hasData(t)&&S.call(this,t),a={},r)u!==s(u)?(o("jQuery.data() always sets/gets camelCased names: "+u),i[u]=r[u]):a[u]=r[u];return S.call(this,t,a),r}return r&&"string"==typeof r&&r!==s(r)&&(i=e.hasData(t)&&S.call(this,t))&&r in i?(o("jQuery.data() always sets/gets camelCased names: "+r),arguments.length>2&&(i[r]=n),i[r]):S.apply(this,arguments)},e.event.mouseHooks={props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var r,n,o,i=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(n=e.target.ownerDocument||document).documentElement,r=n.body,e.pageX=t.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||i===undefined||(e.which=1&i?1:2&i?3:4&i?2:0),e}},e.fx){var T,N,H=e.Tween.prototype.run,M=function(e){return e};e.Tween.prototype.run=function(){e.easing[this.easing].length>1&&(o("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=M),H.apply(this,arguments)},T=e.fx.interval||13,N="jQuery.fx.interval is deprecated",t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return t.document.hidden||o(N),T},set:function(e){o(N),T=e}})}var R=e.fn.load,C=e.event.add,E=e.event.fix;e.event.props=[],e.event.fixHooks={},i(e.event.props,"concat",e.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),e.event.fix=function(t){var r,n=t.type,i=this.fixHooks[n],a=e.event.props;if(a.length)for(o("jQuery.event.props are deprecated and removed: "+a.join());a.length;)e.event.addProp(a.pop());if(i&&!i._migrated_&&(i._migrated_=!0,o("jQuery.event.fixHooks are deprecated and removed: "+n),(a=i.props)&&a.length))for(;a.length;)e.event.addProp(a.pop());return r=E.call(this,t),i&&i.filter?i.filter(r,t):r},e.event.add=function(e,r){return e===t&&"load"===r&&"complete"===t.document.readyState&&o("jQuery(window).on('load'...) called after load event occurred"),C.apply(this,arguments)},e.each(["load","unload","error"],function(t,r){e.fn[r]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===r&&"string"==typeof e[0]?R.apply(this,e):(o("jQuery.fn."+r+"() is deprecated"),e.splice(0,0,r),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,r){e.fn[r]=function(e,t){return o("jQuery.fn."+r+"() event shorthand is deprecated"),arguments.length>0?this.on(r,null,e,t):this.trigger(r)}}),e(function(){e(t.document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===t.document&&o("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,r){return o("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return o("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return o("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return o("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return o("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,D=e.htmlPrefilter,L=function(e){var r=t.document.implementation.createHTMLDocument("");return r.body.innerHTML=e,r.body&&r.body.innerHTML},O=function(e){var t=e.replace(P,"<$1></$2>");t!==e&&L(e)!==L(t)&&o("HTML tags must be properly nested and closed: "+e)};e.UNSAFE_restoreLegacyHtmlPrefilter=function(){e.htmlPrefilter=function(e){return O(e),e.replace(P,"<$1></$2>")}},e.htmlPrefilter=function(e){return O(e),D(e)};var q=e.fn.offset;if(e.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?q.apply(this,arguments):(o("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:undefined)},e.ajax){var _=e.param;e.param=function(t,r){var n=e.ajaxSettings&&e.ajaxSettings.traditional;return r===undefined&&n&&(o("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),r=n),_.call(this,t,r)}}var F=e.fn.andSelf||e.fn.addBack;if(e.fn.andSelf=function(){return o("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),F.apply(this,arguments)},e.Deferred){var J=e.Deferred,W=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];e.Deferred=function(t){var r=J(),n=r.promise();return r.pipe=n.pipe=function(){var t=arguments;return o("deferred.pipe() is deprecated"),e.Deferred(function(o){e.each(W,function(e,i){var a="function"==typeof t[e]&&t[e];r[i[1]](function(){var e=a&&a.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(o.resolve).fail(o.reject).progress(o.notify):o[i[0]+"With"](this===n?o.promise():this,a?[e]:arguments)})}),t=null}).promise()},t&&t.call(r,r),r},e.Deferred.exceptionHook=J.exceptionHook}return e});