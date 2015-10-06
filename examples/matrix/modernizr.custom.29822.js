/*
 * Note: The top part of this file is a custom build of modernizr.  The bottom part is a JPEG-2000 sniffing
 * script that will eventually be folded into Modernizr.  If you replace this script, please ensure the
 * JPEG-2000 script is *not* removed.
 */


/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-apng-cssanimations-jpegxr-svg-svgasimg-svgfilters-webp-webpalpha-webpanimation-webplossless_webp_lossless !*/
!function(A,e,n){function t(A,e){return typeof A===e}function a(){var A,e,n,a,o,i,r;for(var s in v){if(A=[],e=v[s],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)A.push(e.options.aliases[n].toLowerCase());for(a=t(e.fn,"function")?e.fn():e.fn,o=0;o<A.length;o++)i=A[o],r=i.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),h.push((a?"":"no-")+r.join("-"))}}function o(A){var e=y.className,n=Modernizr._config.classPrefix||"";if(Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(t,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e+=" "+n+A.join(" "+n),y.className=e)}function i(A,e){if("object"==typeof A)for(var n in A)b(A,n)&&i(n,A[n]);else{A=A.toLowerCase();var t=A.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;e="function"==typeof e?e():e,1==t.length?Modernizr[t[0]]=e:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=e),o([(e&&0!=e?"":"no-")+t.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function r(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,n){return e+n.toUpperCase()}).replace(/^-/,"")}function s(A,e){return!!~(""+A).indexOf(e)}function l(A,e){return function(){return A.apply(e,arguments)}}function f(A,e,n){var a;for(var o in A)if(A[o]in e)return n===!1?A[o]:(a=e[A[o]],t(a,"function")?l(a,n||e):a);return!1}function u(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var A=e.body;return A||(A=Q("body"),A.fake=!0),A}function d(A,e,n,t){var a,o,i,r,s="modernizr",l=Q("div"),f=c();if(parseInt(n,10))for(;n--;)i=Q("div"),i.id=t?t[n]:s+(n+1),l.appendChild(i);return a=["&#173;",'<style id="s',s,'">',A,"</style>"].join(""),l.id=s,(f.fake?f:l).innerHTML+=a,f.appendChild(l),f.fake&&(f.style.background="",f.style.overflow="hidden",r=y.style.overflow,y.style.overflow="hidden",y.appendChild(f)),o=e(l,A),f.fake?(f.parentNode.removeChild(f),y.style.overflow=r,y.offsetHeight):l.parentNode.removeChild(l),!!o}function p(e,t){var a=e.length;if("CSS"in A&&"supports"in A.CSS){for(;a--;)if(A.CSS.supports(u(e[a]),t))return!0;return!1}if("CSSSupportsRule"in A){for(var o=[];a--;)o.push("("+u(e[a])+":"+t+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(A){return"absolute"==getComputedStyle(A,null).position})}return n}function g(A,e,a,o){function i(){f&&(delete T.style,delete T.modElem)}if(o=t(o,"undefined")?!1:o,!t(a,"undefined")){var l=p(A,a);if(!t(l,"undefined"))return l}var f,u,c,d,g;for(T.style||(f=!0,T.modElem=Q("modernizr"),T.style=T.modElem.style),c=A.length,u=0;c>u;u++)if(d=A[u],g=T.style[d],s(d,"-")&&(d=r(d)),T.style[d]!==n){if(o||t(a,"undefined"))return i(),"pfx"==e?d:!0;try{T.style[d]=a}catch(m){}if(T.style[d]!=g)return i(),"pfx"==e?d:!0}return i(),!1}function m(A,e,n,a,o){var i=A.charAt(0).toUpperCase()+A.slice(1),r=(A+" "+C.join(i+" ")+i).split(" ");return t(e,"string")||t(e,"undefined")?g(r,e,a,o):(r=(A+" "+R.join(i+" ")+i).split(" "),f(r,e,n))}function w(A,e,t){return m(A,n,n,e,t)}var h=[],v=[],B={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var n=this;setTimeout(function(){e(n[A])},0)},addTest:function(A,e,n){v.push({name:A,fn:e,options:n})},addAsyncTest:function(A){v.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=B,Modernizr=new Modernizr;var Q=function(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):e.createElement.apply(e,arguments)};Modernizr.addTest("canvas",function(){var A=Q("canvas");return!(!A.getContext||!A.getContext("2d"))});var b,y=e.documentElement;!function(){var A={}.hasOwnProperty;b=t(A,"undefined")||t(A.call,"undefined")?function(A,e){return e in A&&t(A.constructor.prototype[e],"undefined")}:function(e,n){return A.call(e,n)}}(),B._l={},B.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},B._trigger=function(A,e){if(this._l[A]){var n=this._l[A];setTimeout(function(){var A,t;for(A=0;A<n.length;A++)(t=n[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){B.addTest=i}),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var A=new Image,e=Q("canvas"),n=e.getContext("2d");A.onload=function(){i("apng",function(){return"undefined"==typeof e.getContext?!1:(n.drawImage(A,0,0),0===n.getImageData(0,0,1,1).data[3])})},A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addAsyncTest(function(){function A(A,e,n){function t(e){var t=e&&"load"===e.type?1==a.width:!1,o="webp"===A;i(A,o?new Boolean(t):t),n&&n(e)}var a=new Image;a.onerror=t,a.onload=t,a.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();A(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var t=0;t<e.length;t++)A(e[t].name,e[t].uri)})}),Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){i("jpegxr",1==A.width,{aliases:["jpeg-xr"]})},A.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){i("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){i("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){i("webpanimation",!1,{aliases:["webp-animation"]})},A.onload=function(){i("webpanimation",1==A.width,{aliases:["webp-animation"]})},A.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"});var E="Moz O ms Webkit",C=B._config.usePrefixes?E.split(" "):[];B._cssomPrefixes=C;var R=B._config.usePrefixes?E.toLowerCase().split(" "):[];B._domPrefixes=R;var S={elem:Q("modernizr")};Modernizr._q.push(function(){delete S.elem});var T={style:S.elem.style};Modernizr._q.unshift(function(){delete T.style}),B.testAllProps=m,B.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("svg",!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgasimg",e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in A&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return e}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){i("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){i("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),a(),o(h),delete B.addTest,delete B.addAsyncTest;for(var U=0;U<Modernizr._q.length;U++)Modernizr._q[U]();A.Modernizr=Modernizr}(window,document);

/* JPEG 2000 supprort, based on Andreyka Lechev's imgsupport.js 
 * script available at https://github.com/leechy/imgsupport.  This
 * needs to be folded into Modernizr 
 */
(function(document) {
    
    function setHTMLClass(height, className) {
        if (height == 2) {
            document.documentElement.className += ' ' + className;
        } else {
            document.documentElement.className += ' no-' + className;
        }
    }

    var JP2 = new Image();
    JP2.onload = JP2.onerror = function() {
        setHTMLClass(JP2.height, 'jpeg2000');
    };
    JP2.src = 'data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=';
})(window.sandboxApi && window.sandboxApi.parentWindow && window.sandboxApi.parentWindow.document || document);