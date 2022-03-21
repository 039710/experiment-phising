/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
function listToArray(e){for(var i=[],a=0,r=e.length;a!=r;i.push(e[a++]));return i}function disableInputWith(e,i){try{var a,r,n=listToArray(e.getElementsByTagName("input"));for(n=n.concat(listToArray(e.getElementsByTagName("button"))),a=0;a<n.length;a++)"submit"!=(r=n[a]).type&&"BUTTON"!=r.tagName||(r.disabled=!0,r.value=i||"Loading...",r.className+=" disabled")}catch(t){window.console&&console.log(t.message,t.stack)}}function setTimezone(){document.getElementById("user_timezone").value=jstz.determine().name()}function mailcheck(e){e.value&&e.value.match(/@.+\..{2,}/)&&(mailcheck.t&&clearTimeout(mailcheck.t),mailcheck.t=setTimeout(function(){Kicksend.mailcheck.run({email:e.value,suggested:function(e){document.getElementsByClassName("mail-suggestion")[0].innerHTML="Did you mean <a onclick='applySuggestedEamil(this)'>"+e.full+"</a> ?"},empty:function(){document.getElementsByClassName("mail-suggestion")[0].innerHTML=""}})},500))}function applyValidation(e,i,a){a&&e.hasAttribute("invalid")&&e.removeAttribute("invalid"),a&&"field_with_errors"==e.parentNode.className&&(e.parentNode.className=""),i&&(a||e.setAttribute("invalid",!0))}function validatePassword(e,i){applyValidation(e,i,e.value.length>=8&&e.value.match(/\d/)&&e.value.match(/[a-z]/)&&e.value.match(/[A-Z]/))}function validatePasswordConf(e,i){var a=document.getElementById("user_password");a&&applyValidation(e,i,a.value==e.value)}function validateTel(e,i){var a=e.value.replace(/[\s\-\.]/g,"");applyValidation(e,i,a.length>=8&&a.length<=16&&a.match(/^\+?\d+$/))}function applySuggestedEamil(e){var i=e.parentNode.parentNode.getElementsByTagName("input")[0],a=e.innerHTML;i.value=a,e.parentNode.innerHTML=""}function clearError(e){$(e).closest(".l-field-holder").removeClass("l-wrong").find(".l-wrong").remove()}function onSubmitSignUp(){document.getElementById("new_user").submit()}function clearAllError(e){$(e).closest("form").find(".l-wrong").removeClass("l-wrong")}!function(e,i){"undefined"!=typeof module&&module.exports?module.exports.browser=i():"function"==typeof define&&define.amd?define(i):this[e]=i()}("bowser",function(){function e(e){function a(i){var a=e.match(i);return a&&a.length>1&&a[1]||""}var r,n=a(/(ipod|iphone|ipad)/i).toLowerCase(),t=!/like android/i.test(e)&&/android/i.test(e),o=a(/version\/(\d+(\.\d+)?)/i),s=/tablet/i.test(e),c=!s&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?r={name:"Opera",opera:i,version:o||a(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?r={name:"Windows Phone",windowsphone:i,msie:i,version:a(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(e)?r={name:"Internet Explorer",msie:i,version:a(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(e)?r={name:"Chrome",chrome:i,version:a(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:n?(r={name:"iphone"==n?"iPhone":"ipad"==n?"iPad":"iPod"},o&&(r.version=o)):/sailfish/i.test(e)?r={name:"Sailfish",sailfish:i,version:a(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?r={name:"SeaMonkey",seamonkey:i,version:a(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(r={name:"Firefox",firefox:i,version:a(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(r.firefoxos=i)):/silk/i.test(e)?r={name:"Amazon Silk",silk:i,version:a(/silk\/(\d+(\.\d+)?)/i)}:t?r={name:"Android",version:o}:/phantom/i.test(e)?r={name:"PhantomJS",phantom:i,version:a(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?r={name:"BlackBerry",blackberry:i,version:o||a(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(r={name:"WebOS",webos:i,version:o||a(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(r.touchpad=i)):r=/bada/i.test(e)?{name:"Bada",bada:i,version:a(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:i,version:a(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||o}:/safari/i.test(e)?{name:"Safari",safari:i,version:o}:{},/(apple)?webkit/i.test(e)?(r.name=r.name||"Webkit",r.webkit=i,!r.version&&o&&(r.version=o)):!r.opera&&/gecko\//i.test(e)&&(r.name=r.name||"Gecko",r.gecko=i,r.version=r.version||a(/gecko\/(\d+(\.\d+)?)/i)),t||r.silk?r.android=i:n&&(r[n]=i,r.ios=i);var l="";n?l=(l=a(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):t?l=a(/android[ \/-](\d+(\.\d+)*)/i):r.windowsphone?l=a(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):r.webos?l=a(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):r.blackberry?l=a(/rim\stablet\sos\s(\d+(\.\d+)*)/i):r.bada?l=a(/bada\/(\d+(\.\d+)*)/i):r.tizen&&(l=a(/tizen[\/\s](\d+(\.\d+)*)/i)),l&&(r.osversion=l);var d=l.split(".")[0];return s||"ipad"==n||t&&(3==d||4==d&&!c)||r.silk?r.tablet=i:(c||"iphone"==n||"ipod"==n||t||r.blackberry||r.webos||r.bada)&&(r.mobile=i),r.msie&&r.version>=10||r.chrome&&r.version>=20||r.firefox&&r.version>=20||r.safari&&r.version>=6||r.opera&&r.version>=10||r.ios&&r.osversion&&r.osversion.split(".")[0]>=6||r.blackberry&&r.version>=10.1?r.a=i:r.msie&&r.version<10||r.chrome&&r.version<20||r.firefox&&r.version<20||r.safari&&r.version<6||r.opera&&r.version<10||r.ios&&r.osversion&&r.osversion.split(".")[0]<6?r.c=i:r.x=i,r}var i=!0,a=e("undefined"!=typeof navigator?navigator.userAgent:"");return a._detect=e,a});var ErrorReporter={userEvents:[],errors:[],ignoredErrors:["Error: Script error.","SyntaxError: Unexpected end of input","Error: Error loading script","SyntaxError: Unexpected token ILLEGAL"],ignoredBrowsers:{firefox:"lt 4.0",msie:"lte 7.0"},init:function(){if(this.startTime=new Date,"function"==typeof window.onerror){var e=window.onerror;window.onerror=function(i,a,r,n,t){throw ErrorReporter.onWindowError(t||i),e(i,a,r,n,t),t}}else window.onerror=function(e,i,a,r,n){try{n==undefined&&((n=new Error(n)).stack=i+":"+a+":"+r+"\n"+n.stack)}catch(t){console.log("Error tracing error",e,i,a,r,n)}ErrorReporter.onWindowError(n||e)};$(document).bind("click",this.recordEvent.bind(this)),$(window).bind("resize",this.recordEvent.bind(this))},recordEvent:function(e){var i;i=e.target==window?{window:!0}:{id:e.target.id,content:(e.target.outerHTML||"").substring(0,60),path:this.getElementPath(e.target)},this.userEvents.push({type:e.type,target:i,position:{x:e.pageX,y:e.pageY}})},getElementPath:function(e){return"//"+$(e).parents().addBack().map(function(){var e=$(this),i=this.nodeName;return e.siblings(i).length>0&&(i+="["+e.prevAll(i).length+"]"),i}).get().join("/").toUpperCase()},getExtraData:function(){return{userAgent:navigator.userAgent,location:window.location.toString(),merchantId:window.MERCHANT_ID,bankUser:window.BANK_USER,clientTime:(new Date).toString(),clientLanguage:navigator.language,window:{width:$(window).width(),height:$(window).height(),pixelRatio:window.devicePixelRatio},timeAfterLoad:(new Date-this.startTime)/1e3}},getErrorDetails:function(e){"string"==typeof e&&(e=new Error(e)),!e.stack&&Error.captureStackTrace&&Error.captureStackTrace(e,arguments.callee);var i=[];try{i=e.stack.split("\n")}catch(a){console.error(a)}return{message:String(e),stacktrace:i}},versionCompare:function(e,i){if(typeof e+typeof i!="stringstring")return!1;for(var a=e.split("."),r=i.split("."),n=0,t=Math.max(a.length,r.length);n<t;n++){if(a[n]&&!r[n]&&parseInt(a[n])>0||parseInt(a[n])>parseInt(r[n]))return 1;if(r[n]&&!a[n]&&parseInt(r[n])>0||parseInt(a[n])<parseInt(r[n]))return-1}return 0},isSpiders:function(){return/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)},allowBrowser:function(){if(this.isSpiders())return!1;for(var e in this.ignoredBrowsers)if(this.ignoredBrowsers.hasOwnProperty(e)){var i=this.ignoredBrowsers[e].split(" "),a=i[0],r=i[1];if(bowser[e]!==undefined){if("lte"==a&&this.versionCompare(bowser.version,r)<=0)return!1;if("lt"==a&&-1==this.versionCompare(bowser.version,r))return!1;if("gte"==a&&this.versionCompare(bowser.version,r)<=0)return!1;if("gt"==a&&1==this.versionCompare(bowser.version,r))return!1;if("eq"==a&&0==this.versionCompare(bowser.version,r))return!1}}return!0},onWindowError:function(e){if(this.errors.push(e),!this.allowBrowser())return console&&console.log("Error report not sent, this browser is ignoring"),!1;var i={js_exception:this.getErrorDetails(e),environment:this.getExtraData(),events:this.userEvents};i.js_exception&&-1!=this.ignoredErrors.indexOf(i.js_exception.message)?console.log("Error report not sent, probably odd user script or extension"):$.ajax({url:"/register_browser_error",type:"POST",data:{error:i},complete:function(){console.log("Error report sent to server")}})}};window.ERROR_HANDLING_DISABLED||ErrorReporter.init(),function(){var e;(e=window.jQuery||window.Zepto||window.$).fn.fancySelect=function(i){var a,r;return null==i&&(i={}),r=e.extend({forceiOS:!1,includeBlank:!1,optionTemplate:function(e){return e.text()},triggerTemplate:function(e){return e.text()}},i),a=!!navigator.userAgent.match(/iP(hone|od|ad)/i),this.each(function(){var i,n,t,o,s,c,l;if(!(o=e(this)).hasClass("fancified")&&"SELECT"===o[0].tagName)return o.addClass("fancified"),o.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0}),o.wrap('<div class="fancy-select">'),l=o.parent(),o.data("class")&&l.addClass(o.data("class")),l.append('<div class="trigger">'),a&&!r.forceiOS||l.append('<ul class="options">'),s=l.find(".trigger"),t=l.find(".options"),(n=o.prop("disabled"))&&l.addClass("disabled"),c=function(){var e;return e=r.triggerTemplate(o.find(":selected")),s.html(e)},o.on("blur.fs",function(){if(s.hasClass("open"))return setTimeout(function(){return s.trigger("close.fs")},120)}),s.on("close.fs",function(){return s.removeClass("open"),t.removeClass("open")}),s.on("click.fs",function(){var i;if(!n)if(s.toggleClass("open"),a&&!r.forceiOS){if(s.hasClass("open"))return o.focus()}else if(s.hasClass("open")&&((i=s.parent()).offsetParent(),i.offset().top,i.outerHeight(),t.outerHeight(),e(window).height(),e(window).scrollTop()),t.toggleClass("open"),!a)return o.focus()}),o.on("enable",function(){return o.prop("disabled",!1),l.removeClass("disabled"),n=!1,i()}),o.on("enable.fs",function(){return o.prop("disabled",!1),l.removeClass("disabled"),n=!1}),o.on("disable",function(){return o.prop("disabled",!0),l.addClass("disabled"),n=!0}),o.on("change.fs",function(e){return e.originalEvent&&e.originalEvent.isTrusted?e.stopPropagation():c()}),o.on("keydown",function(e){var i,a,r;if(r=e.which,(i=t.find(".hover")).removeClass("hover"),t.hasClass("open")){if(38===r?(e.preventDefault(),i.length&&i.index()>0?i.prev().addClass("hover"):t.find("li:last-child").addClass("hover")):40===r?(e.preventDefault(),i.length&&i.index()<t.find("li").length-1?i.next().addClass("hover"):t.find("li:first-child").addClass("hover")):27===r?(e.preventDefault(),s.trigger("click.fs")):13===r||32===r?(e.preventDefault(),i.trigger("click.fs")):9===r&&s.hasClass("open")&&s.trigger("close.fs"),(a=t.find(".hover")).length)return t.scrollTop(0),t.scrollTop(a.position().top-12)}else if(13===r||32===r||38===r||40===r)return e.preventDefault(),s.trigger("click.fs")}),t.on("click.fs","li",function(){var i;return i=e(this),o.val(i.data("raw-value")),a||o.trigger("blur.fs").trigger("focus.fs"),t.find(".selected").removeClass("selected"),i.addClass("selected"),o.val(i.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")}),t.on("mouseenter.fs","li",function(){var i;return i=e(this),t.find(".hover").removeClass("hover"),i.addClass("hover")}),t.on("mouseleave.fs","li",function(){return t.find(".hover").removeClass("hover")}),i=function(){if(c(),!a||r.forceiOS)return o.find("option"),o.find("option").each(function(i,a){var n;if(!(a=e(a)).prop("disabled")&&(a.val()||r.includeBlank))return n=r.optionTemplate(a),a.prop("selected")?t.append('<li data-raw-value="'+a.val()+'" class="selected">'+n+"</li>"):t.append('<li data-raw-value="'+a.val()+'">'+n+"</li>")})},o.on("update.fs",function(){return l.find(".options").empty(),i()}),i()})}}.call(this),
/**
 * This script gives you the zone info key representing your device's time zone setting.
 *
 * @name jsTimezoneDetect
 * @version 1.0.5
 * @author Jon Nylander
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://pellepim.bitbucket.org/jstz/
 *
 * Copyright (c) Jon Nylander
 */
function(e){var i=function(){"use strict";var e="s",a=function(e){var i=-e.getTimezoneOffset();return null!==i?i:0},r=function(e,i,a){var r=new Date;return e!==undefined&&r.setFullYear(e),r.setMonth(i),r.setDate(a),r},n=function(e){return a(r(e,0,2))},t=function(e){return a(r(e,5,2))},o=function(){var i=n(),a=t(),r=i-a;return r<0?i+",1":r>0?a+",1,"+e:i+",0"};return{determine:function(){var e=o();return new i.TimeZone(i.olson.timezones[e])},date_is_dst:function(e){var i=e.getMonth()>7,r=i?t(e.getFullYear()):n(e.getFullYear()),o=r-a(e);return r<0||i?0!==o:o<0},dst_start_for:function(e){var i=new Date(2010,6,15,1,0,0,0);return{"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Europe/Helsinki":new Date(2013,2,31,5,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":i,"Asia/Amman":new Date(2013,2,29,1,0,0,0),"Asia/Beirut":new Date(2013,2,31,2,0,0,0),"Asia/Damascus":new Date(2013,3,6,2,0,0,0),"Asia/Jerusalem":new Date(2013,2,29,5,0,0,0),"Asia/Yekaterinburg":i,"Asia/Omsk":i,"Asia/Krasnoyarsk":i,"Asia/Irkutsk":i,"Asia/Yakutsk":i,"Asia/Vladivostok":i,"Asia/Baku":new Date(2013,2,31,4,0,0),"Asia/Yerevan":new Date(2013,2,31,3,0,0),"Asia/Kamchatka":i,"Asia/Gaza":new Date(2010,2,27,4,0,0),"Africa/Cairo":new Date(2010,4,1,3,0,0),"Europe/Minsk":i,"Pacific/Apia":new Date(2010,10,1,1,0,0,0),"Pacific/Fiji":new Date(2010,11,1,0,0,0),"Australia/Perth":new Date(2008,10,1,1,0,0,0)}[e]}}}();i.TimeZone=function(e){"use strict";var a={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Amman","Asia/Jerusalem","Asia/Beirut","Europe/Helsinki","Asia/Damascus"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka","Pacific/Fiji"],"Pacific/Tongatapu":["Pacific/Apia"],"Asia/Baghdad":["Europe/Minsk"],"Asia/Baku":["Asia/Yerevan","Asia/Baku"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"]},r=e,n=function(){for(var e=a[r],n=e.length,t=0,o=e[0];t<n;t+=1)if(o=e[t],i.date_is_dst(i.dst_start_for(o)))return void(r=o)};return function(){return"undefined"!=typeof a[r]}()&&n(),{name:function(){return r}}},i.olson={},i.olson.timezones={"-720,0":"Pacific/Majuro","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"America/Noronha","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"},"undefined"!=typeof exports?exports.jstz=i:e.jstz=i}(this);
/*
 * Mailcheck https://github.com/Kicksend/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * License
 * Copyright (c) 2012 Receivd, Inc.
 *
 * Licensed under the MIT License.
 *
 * v 1.1
 */
var Kicksend={mailcheck:{threshold:3,defaultDomains:["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","ymail.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com","outlook.com","icloud.com"],defaultTopLevelDomains:["co.id","co.jp","co.uk","com","net","org","info","edu","gov","mil","ca","asia","id"],run:function(e){e.domains=e.domains||Kicksend.mailcheck.defaultDomains,e.topLevelDomains=e.topLevelDomains||Kicksend.mailcheck.defaultTopLevelDomains,e.distanceFunction=e.distanceFunction||Kicksend.sift3Distance;var i=function(e){return e},a=e.suggested||i,r=e.empty||i,n=Kicksend.mailcheck.suggest(encodeURI(e.email),e.domains,e.topLevelDomains,e.distanceFunction);return n?a(n):r()},suggest:function(e,i,a,r){e=e.toLowerCase();var n=this.splitEmail(e),t=this.findClosestDomain(n.domain,i,r);if(t){if(t!=n.domain)return{address:n.address,domain:t,full:n.address+"@"+t}}else{var o=this.findClosestDomain(n.topLevelDomain,a);if(n.domain&&o&&o!=n.topLevelDomain){var s=n.domain;return t=s.substring(0,s.lastIndexOf(n.topLevelDomain))+o,{address:n.address,domain:t,full:n.address+"@"+t}}}return!1},findClosestDomain:function(e,i,a){var r,n=99,t=null;if(!e||!i)return!1;a||(a=this.sift3Distance);for(var o=0;o<i.length;o++){if(e===i[o])return e;(r=a(e,i[o]))<n&&(n=r,t=i[o])}return n<=this.threshold&&null!==t&&t},sift3Distance:function(e,i){if(null==e||0===e.length)return null==i||0===i.length?0:i.length;if(null==i||0===i.length)return e.length;for(var a=0,r=0,n=0,t=0,o=5;a+r<e.length&&a+n<i.length;){if(e.charAt(a+r)==i.charAt(a+n))t++;else{r=0,n=0;for(var s=0;s<o;s++){if(a+s<e.length&&e.charAt(a+s)==i.charAt(a)){r=s;break}if(a+s<i.length&&e.charAt(a)==i.charAt(a+s)){n=s;break}}}a++}return(e.length+i.length)/2-t},splitEmail:function(e){var i=e.split("@");if(i.length<2)return!1;for(var a=0;a<i.length;a++)if(""===i[a])return!1;var r=i.pop(),n=r.split("."),t="";if(0==n.length)return!1;if(1==n.length)t=n[0];else{for(a=1;a<n.length;a++)t+=n[a]+".";n.length>=2&&(t=t.substring(0,t.length-1))}return{topLevelDomain:t,domain:r,address:i.join("@")}}}};if("undefined"!=typeof module&&module.exports&&(module.exports=Kicksend.mailcheck),"undefined"!=typeof window&&window.jQuery&&(jQuery.fn.mailcheck=function(e){var i=this;if(e.suggested){var a=e.suggested;e.suggested=function(e){a(i,e)}}if(e.empty){var r=e.empty;e.empty=function(){r.call(null,i)}}e.email=this.val(),Kicksend.mailcheck.run(e)}),!document.getElementsByClassName){var getElementsByClassName=function(e,i){for(var a=[],r=new RegExp("(^| )"+i+"( |$)"),n=e.getElementsByTagName("*"),t=0,o=n.length;t<o;t++)r.test(n[t].className)&&a.push(n[t]);return a};document.getElementsByClassName=function(e){return getElementsByClassName(document.body,e)}}$(document).ready(function(){var e=document.getElementsByTagName("html")[0].className;e.match(/is\-ie\-7/)||$(".dropdown-search").fancySelect(),e.match(/lt\-ie8/)&&(applyValidation=function(){})});