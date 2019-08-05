(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+Cau":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiverMap=t.createMessageBucket=void 0
var r=n(a("MVZn")),l=n(a("zkrS")),s=a("upRB")
t.createMessageBucket=function(i){var o=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"*"
return e&&window.parent.postMessage(JSON.stringify({event:e,payload:t}),a)},e=function(t){if(t.source!==window&&!t.origin.includes("qiyukf")&&t.data&&"string"==typeof t.data)try{var e=JSON.parse(t.data),a=e.event,n=e.payload,r=void 0===n?{}:n
i[a]&&i[a](o,{type:a,payload:r,event:t})}catch(e){console.warn("[receive] error message data",e,t)}}
return window.addEventListener("message",e),{send:o,clear:function(){return window.removeEventListener("message",e)}}}
var i={"message:get:preview-state":function(e){var t=u(),a=t.state,n=t.isHighlight
e("message:data:preview-state",(0,r.default)({},a.model.current,{isHighlight:n}))},"message:set:preview-state":function(e,t){var a=t.payload,n=a.isHighlight,r=a.screenCid,i=u(),o=i.state.model,l=o.current,s=o.screens,c=i.dispatch
if(void 0!==n&&c({type:"reducer:preview-toolbar:update:highlight",payload:{isHighlight:n}}),l.screenCid&&void 0!==r&&r!==l.screenCid){if(!s.find(function(e){return e.cid===r}))return console.warn("[message:set:preview-state] invalid screenCid")
c({type:"entry:sync-runner:set-screen",payload:{cid:r}})}},"message:get:screen-list":function(e){var t=l.default.MB.webpackInterface.store.getState().model,a=t.current
e("message:data:screen-list",t.screens.filter(function(e){return e.project_cid===a.projectCid}).map(function(e){return{cid:e.cid,name:e.name,position:e.position,parent_cid:e.parent_cid,project_cid:e.project_cid}}))},"message:get:notification-state":function(e){var t=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-state",{unreadCount:t?t.notifications.unreadNum:0})},"message:get:notification-list":function(e){var t=(l.default.MB.notification&&l.default.MB.notification.store&&l.default.MB.notification.store.getState()||{}).notifications
e("message:data:notification-list",t?t.notifications.notifications:[])}}
t.receiverMap=i
var u=function(){var e=l.default.MB.webpackInterface.store,t=e.getState,a=e.dispatch,n=t(),r=(0,s.getIsHighlight)(n),i=n.model.current.projectCid,o=i&&n.model.projects.find(function(e){return e.cid===i})
return{getState:t,dispatch:a,state:n,project:o,isHighlight:r}}},"+IKJ":function(e,t,a){"use strict"
a.r(t)
var m=a("wx14")
function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}a.d(t,"adjustHue",function(){return ge}),a.d(t,"animation",function(){return Je}),a.d(t,"backgroundImages",function(){return Ze}),a.d(t,"backgrounds",function(){return Ke}),a.d(t,"between",function(){return v}),a.d(t,"border",function(){return Qe}),a.d(t,"borderColor",function(){return j}),a.d(t,"borderRadius",function(){return $e}),a.d(t,"borderStyle",function(){return et}),a.d(t,"borderWidth",function(){return tt}),a.d(t,"buttons",function(){
return ot}),a.d(t,"clearFix",function(){return y}),a.d(t,"complement",function(){return ye}),a.d(t,"cover",function(){return b}),a.d(t,"darken",function(){return we}),a.d(t,"desaturate",function(){return ke}),a.d(t,"directionalProperty",function(){return r}),a.d(t,"ellipsis",function(){return S}),a.d(t,"em",function(){return s}),a.d(t,"fluidRange",function(){return w}),a.d(t,"fontFace",function(){return E}),a.d(t,"getLuminance",function(){return Ce}),a.d(t,"getValueAndUnit",function(){return g}),a.d(t,
"grayscale",function(){return Te}),a.d(t,"invert",function(){return xe}),a.d(t,"hideText",function(){return k}),a.d(t,"hideVisually",function(){return C}),a.d(t,"hiDPI",function(){return T}),a.d(t,"hsl",function(){return ie}),a.d(t,"hsla",function(){return oe}),a.d(t,"lighten",function(){return Me}),a.d(t,"margin",function(){return lt}),a.d(t,"mix",function(){return Ie}),a.d(t,"modularScale",function(){return p}),a.d(t,"normalize",function(){return x}),a.d(t,"opacify",function(){return Re}),a.d(t,"padding",
function(){return st}),a.d(t,"parseToHsl",function(){return $}),a.d(t,"parseToRgb",function(){return Q}),a.d(t,"placeholder",function(){return _}),a.d(t,"position",function(){return ut}),a.d(t,"radialGradient",function(){return P}),a.d(t,"readableColor",function(){return Le}),a.d(t,"rem",function(){return h}),a.d(t,"retinaImage",function(){return I}),a.d(t,"rgb",function(){return le}),a.d(t,"rgba",function(){return se}),a.d(t,"saturate",function(){return Ae}),a.d(t,"selection",function(){return N}),a.d(t,
"setHue",function(){return Be}),a.d(t,"setLightness",function(){return Fe}),a.d(t,"setSaturation",function(){return We}),a.d(t,"shade",function(){return ze}),a.d(t,"size",function(){return dt}),a.d(t,"stripUnit",function(){return l}),a.d(t,"textInputs",function(){return ht}),a.d(t,"timingFunctions",function(){return L}),a.d(t,"tint",function(){return He}),a.d(t,"toColorString",function(){return he}),a.d(t,"transitions",function(){return mt}),a.d(t,"transparentize",function(){return Xe}),a.d(t,"triangle",
function(){return D}),a.d(t,"wordWrap",function(){return F})
var u=["Top","Right","Bottom","Left"]
function d(e,t){if(!e)return t.toLowerCase()
var a=e.split("-")
if(1<a.length)return a.splice(1,0,t),a.reduce(function(e,t){return""+e+i(t)})
var n=e.replace(/([a-z])([A-Z])/g,"$1"+t+"$2")
return e===n?""+e+t:n}function r(e){for(var t=arguments.length,a=new Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n]
var r=a[0],i=a[1],o=void 0===i?r:i,l=a[2],s=void 0===l?r:l,c=a[3]
return function(e,t){for(var a={},n=0;n<t.length;n+=1)(t[n]||0===t[n])&&(a[d(e,u[n])]=t[n])
return a}(e,[r,o,s,void 0===c?o:c])}function o(e,t){return e.substr(-t.length)===t}function l(e){var t=parseFloat(e)
return isNaN(t)?e:t}var n=function(r){return function(e,t){void 0===t&&(t="16px")
var a=e,n=t
if("string"==typeof e){if(!o(e,"px"))throw new Error('Expected a string ending in "px" or a number passed as the first argument to '+r+'(), got "'+e+'" instead.')
a=l(e)}if("string"==typeof t){if(!o(t,"px"))throw new Error('Expected a string ending in "px" or a number passed as the second argument to '+r+'(), got "'+t+'" instead.')
n=l(t)}if("string"==typeof a)throw new Error('Passed invalid pixel value ("'+e+'") to '+r+'(), please pass a value like "12px" or 12.')
if("string"==typeof n)throw new Error('Passed invalid base value ("'+t+'") to '+r+'(), please pass a value like "12px" or 12.')
return""+a/n+r}},s=n("em"),c=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
function g(e){if("string"!=typeof e)return[e,""]
var t=e.match(c)
return t?[parseFloat(e),t[2]]:[e,void 0]}var f={minorSecond:1.067,majorSecond:1.125,minorThird:1.2,majorThird:1.25,perfectFourth:1.333,augFourth:1.414,perfectFifth:1.5,minorSixth:1.6,goldenSection:1.618,majorSixth:1.667,minorSeventh:1.778,majorSeventh:1.875,octave:2,majorTenth:2.5,majorEleventh:2.667,majorTwelfth:3,doubleOctave:4}
function p(e,t,a){if(void 0===t&&(t="1em"),void 0===a&&(a="perfectFourth"),"number"!=typeof e)throw new Error("Please provide a number of steps to the modularScale helper.")
if("string"==typeof a&&!f[a])throw new Error("Please pass a number or one of the predefined scales to the modularScale helper as the ratio.")
var n="string"==typeof t?l(t):t,r="string"==typeof a?f[a]:a
if("string"==typeof n)throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "'+t+'"')
return n*Math.pow(r,e)+"em"}var h=n("rem")
function v(e,t,a,n){void 0===a&&(a="320px"),void 0===n&&(n="1200px")
var r=g(e),i=r[0],o=r[1],l=g(t),s=l[0],c=l[1],u=g(a),d=u[0],f=u[1],p=g(n),h=p[0],m=p[1]
if("number"!=typeof d||"number"!=typeof h||!f||!m||f!==m)throw new Error("minScreen and maxScreen must be provided as stringified numbers with the same units.")
if("number"!=typeof i||"number"!=typeof s||!o||!c||o!==c)throw new Error("fromSize and toSize must be provided as stringified numbers with the same units.")
var v=(i-s)/(d-h)
return"calc("+(s-v*h).toFixed(2)+o+" + "+(100*v).toFixed(2)+"vw)"}function y(e){var t
return void 0===e&&(e="&"),(t={})[e+"::after"]={clear:"both",content:'""',display:"table"},t}function b(e){return void 0===e&&(e=0),{position:"absolute",top:e,right:e,bottom:e,left:e}}function S(e){return void 0===e&&(e="100%"),{display:"inline-block",maxWidth:e,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"}}function w(e,t,a){if(void 0===t&&(t="320px"),void 0===a&&(a="1200px"),!Array.isArray(e)&&"object"!=typeof e||null===e)throw new Error(
"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.")
if(Array.isArray(e)){var n={},r={},i=e,o=Array.isArray(i),l=0
for(i=o?i:i[Symbol.iterator]();;){var s,c,u
if(o){if(l>=i.length)break
u=i[l++]}else{if((l=i.next()).done)break
u=l.value}var d=u
if(!d.prop||!d.fromSize||!d.toSize)throw new Error("expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.")
r[d.prop]=d.fromSize,n["@media (min-width: "+t+")"]=Object(m.a)({},n["@media (min-width: "+t+")"],((s={})[d.prop]=v(d.fromSize,d.toSize,t,a),s)),n["@media (min-width: "+a+")"]=Object(m.a)({},n["@media (min-width: "+a+")"],((c={})[d.prop]=d.toSize,c))}return Object(m.a)({},r,n)}var f,p,h
if(!e.prop||!e.fromSize||!e.toSize)throw new Error("expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.")
return(h={})[e.prop]=e.fromSize,h["@media (min-width: "+t+")"]=((f={})[e.prop]=v(e.fromSize,e.toSize,t,a),f),h["@media (min-width: "+a+")"]=((p={})[e.prop]=e.toSize,p),h}function E(e){var t=e.fontFamily,a=e.fontFilePath,n=e.fontStretch,r=e.fontStyle,i=e.fontVariant,o=e.fontWeight,l=e.fileFormats,s=void 0===l?["eot","woff2","woff","ttf","svg"]:l,c=e.localFonts,u=e.unicodeRange,d=e.fontDisplay,f=e.fontVariationSettings,p=e.fontFeatureSettings
if(!t)throw new Error("fontFace expects a name of a font-family.")
if(!a&&!c)throw new Error("fontFace expects either the path to the font file(s) or a name of a local copy.")
if(c&&!Array.isArray(c))throw new Error("fontFace expects localFonts to be an array.")
if(!Array.isArray(s))throw new Error("fontFace expects fileFormats to be an array.")
var h,m,v,g,y,b={"@font-face":{fontFamily:t,src:(h=a,m=c,v=s,y=[],m&&y.push(m.map(function(e){return'local("'+e+'")'}).join(", ")),h&&y.push((g=h,v.map(function(e){return'url("'+g+"."+e+'")'}).join(", "))),y.join(", ")),unicodeRange:u,fontStretch:n,fontStyle:r,fontVariant:i,fontWeight:o,fontDisplay:d,fontVariationSettings:f,fontFeatureSettings:p}}
return JSON.parse(JSON.stringify(b))}function k(){return{textIndent:"101%",overflow:"hidden",whiteSpace:"nowrap"}}function C(){return{border:"0",clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}}function T(e){return void 0===e&&(e=1.3),
"\n    @media only screen and (-webkit-min-device-pixel-ratio: "+e+"),\n    only screen and (min--moz-device-pixel-ratio: "+e+"),\n    only screen and (-o-min-device-pixel-ratio: "+e+"/1),\n    only screen and (min-resolution: "+Math.round(96*e)+"dpi),\n    only screen and (min-resolution: "+e+"dppx)\n  "}function x(){var e
return[(e={html:{lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:"0"},h1:{fontSize:"2em",margin:"0.67em 0"},hr:{boxSizing:"content-box",height:"0",overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{backgroundColor:"transparent"},"abbr[title]":{borderBottom:"none",textDecoration:"underline"}},e["b,\n    strong"]={fontWeight:"bolder"},e["code,\n    kbd,\n    samp"]={fontFamily:"monospace, monospace",fontSize:"1em"},e.small={fontSize:"80%"},e["sub,\n    sup"]={fontSize:"75%",
lineHeight:"0",position:"relative",verticalAlign:"baseline"},e.sub={bottom:"-0.25em"},e.sup={top:"-0.5em"},e.img={borderStyle:"none"},e["button,\n    input,\n    optgroup,\n    select,\n    textarea"]={fontFamily:"inherit",fontSize:"100%",lineHeight:"1.15",margin:"0"},e["button,\n    input"]={overflow:"visible"},e["button,\n    select"]={textTransform:"none"},e['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]']={WebkitAppearance:"button"},
e['button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner']={borderStyle:"none",padding:"0"},e['button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring']={outline:"1px dotted ButtonText"},e.fieldset={padding:"0.35em 0.625em 0.75em"},e.legend={boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:"0",whiteSpace:"normal"},
e.progress={verticalAlign:"baseline"},e.textarea={overflow:"auto"},e['[type="checkbox"],\n    [type="radio"]']={boxSizing:"border-box",padding:"0"},e['[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button']={height:"auto"},e['[type="search"]']={WebkitAppearance:"textfield",outlineOffset:"-2px"},e['[type="search"]::-webkit-search-decoration']={WebkitAppearance:"none"},e["::-webkit-file-upload-button"]={WebkitAppearance:"button",font:"inherit"},e.details={display:"block"}
,e.summary={display:"list-item"},e.template={display:"none"},e["[hidden]"]={display:"none"},e),{"abbr[title]":{textDecoration:"underline dotted"}}]}function _(e,t){var a
return void 0===t&&(t="&"),(a={})[t+"::-webkit-input-placeholder"]=Object(m.a)({},e),a[t+":-moz-placeholder"]=Object(m.a)({},e),a[t+"::-moz-placeholder"]=Object(m.a)({},e),a[t+":-ms-input-placeholder"]=Object(m.a)({},e),a}function M(){var e,t,a=(e=["radial-gradient(","","","",")"],t||(t=e.slice(0)),e.raw=t,e)
return M=function(){return a},a}function P(e){var t,a=e.colorStops,n=e.extent,r=e.fallback,i=e.position,o=e.shape
if(!a||a.length<2)throw new Error("radialGradient requries at least 2 color-stops to properly render.")
return{backgroundColor:r||(t=a,t[0].split(" ")[0]),backgroundImage:function(e){for(var t="",a=0;a<e.length;a+=1)t+=e[a],3===a&&(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])&&((arguments.length<=1?void 0:arguments[1])||(arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3]))?(t=t.slice(0,-1),t+=", "+(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])):3!==a||a+1<1||arguments.length<=a+1||!arguments[a+1]||(arguments.length<=1?void 0:arguments[1])||(
arguments.length<=2?void 0:arguments[2])||(arguments.length<=3?void 0:arguments[3])?(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])&&(t+=(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])+" "):t+=""+(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])
return t.trim()}(M(),i,o,n,a.join(", "))}}function I(e,t,a,n,r){var i
if(void 0===a&&(a="png"),void 0===r&&(r="_2x"),!e)throw new Error("Please supply a filename to retinaImage() as the first argument.")
var o=a.replace(/^\./,""),l=n?n+"."+o:""+e+r+"."+o
return(i={backgroundImage:"url("+e+"."+o+")"})[T()]=Object(m.a)({backgroundImage:"url("+l+")"},t?{backgroundSize:t}:{}),i}function N(e,t){var a
return void 0===t&&(t=""),(a={})[t+"::-moz-selection"]=Object(m.a)({},e),a[t+"::selection"]=Object(m.a)({},e),a}var R={easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInCirc:"cubic-bezier(0.600,  0.040, 0.980, 0.335)",easeInCubic:"cubic-bezier(0.550,  0.055, 0.675, 0.190)",easeInExpo:"cubic-bezier(0.950,  0.050, 0.795, 0.035)",easeInQuad:"cubic-bezier(0.550,  0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895,  0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755,  0.050, 0.855, 0.060)",
easeInSine:"cubic-bezier(0.470,  0.000, 0.745, 0.715)",easeOutBack:"cubic-bezier(0.175,  0.885, 0.320, 1.275)",easeOutCubic:"cubic-bezier(0.215,  0.610, 0.355, 1.000)",easeOutCirc:"cubic-bezier(0.075,  0.820, 0.165, 1.000)",easeOutExpo:"cubic-bezier(0.190,  1.000, 0.220, 1.000)",easeOutQuad:"cubic-bezier(0.250,  0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165,  0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230,  1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390,  0.575, 0.565, 1.000)",
easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOutCirc:"cubic-bezier(0.785,  0.135, 0.150, 0.860)",easeInOutCubic:"cubic-bezier(0.645,  0.045, 0.355, 1.000)",easeInOutExpo:"cubic-bezier(1.000,  0.000, 0.000, 1.000)",easeInOutQuad:"cubic-bezier(0.455,  0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770,  0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860,  0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445,  0.050, 0.550, 0.950)"}
function L(e){return R[e]}function j(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return r.apply(void 0,["borderColor"].concat(t))}var A=function(e,t,a){switch(e){case"top":return"0 "+a[0]/2+a[1]+" "+t[0]+t[1]+" "+a[0]/2+a[1]
case"left":return""+t[0]/2+t[1]+" "+a[0]+a[1]+" "+t[0]/2+t[1]+" 0"
case"bottom":return""+t[0]+t[1]+" "+a[0]/2+a[1]+" 0 "+a[0]/2+a[1]
case"right":return""+t[0]/2+t[1]+" 0 "+t[0]/2+t[1]+" "+a[0]+a[1]
default:throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.")}},O=["bottom","left","top","right"],B=/(\d*\.?\d*)/
function D(e){var t=e.pointingDirection,a=e.height,n=e.width,r=e.foregroundColor,i=e.backgroundColor,o=void 0===i?"transparent":i,l=[parseFloat(n),String(n).replace(B,"")||"px"],s=[parseFloat(a),String(a).replace(B,"")||"px"]
if(isNaN(s[0])||isNaN(l[0]))throw new Error("Passed an invalid value to `height` or `width`. Please provide a pixel based unit")
var c=O.indexOf(t)
return Object(m.a)({width:"0",height:"0",borderWidth:A(t,s,l),borderStyle:"solid"},j.apply(void 0,Array.from({length:4}).map(function(e,t){return t===c?r:o})))}function F(e){return void 0===e&&(e="break-word"),{overflowWrap:e,wordWrap:e,wordBreak:"break-word"===e?"break-all":e}}function q(e){return Math.round(255*e)}function W(e,t,a){return q(e)+","+q(t)+","+q(a)}function U(e,t,a,n){if(void 0===n&&(n=W),0===t)return n(a,a,a)
var r=e%360/60,i=(1-Math.abs(2*a-1))*t,o=i*(1-Math.abs(r%2-1)),l=0,s=0,c=0
0<=r&&r<1?(l=i,s=o):1<=r&&r<2?(l=o,s=i):2<=r&&r<3?(s=i,c=o):3<=r&&r<4?(s=o,c=i):4<=r&&r<5?(l=o,c=i):5<=r&&r<6&&(l=i,c=o)
var u=a-i/2
return n(l+u,s+u,c+u)}var z={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",
darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",
gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",
lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",
olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",
slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}
var Y=/^#[a-fA-F0-9]{6}$/,H=/^#[a-fA-F0-9]{8}$/,V=/^#[a-fA-F0-9]{3}$/,X=/^#[a-fA-F0-9]{4}$/,J=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,Z=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,K=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,G=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/
function Q(e){if("string"!=typeof e)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.")
var t=function(e){if("string"!=typeof e)return e
var t=e.toLowerCase()
return z[t]?"#"+z[t]:e}(e)
if(t.match(Y))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)}
if(t.match(H)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2))
return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(V))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)}
if(t.match(X)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2))
return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var r=J.exec(t)
if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)}
var i=Z.exec(t)
if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])}
var o=K.exec(t)
if(o){var l="rgb("+U(parseInt(""+o[1],10),parseInt(""+o[2],10)/100,parseInt(""+o[3],10)/100)+")",s=J.exec(l)
if(!s)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+l+".")
return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10)}}var c=G.exec(t)
if(c){var u="rgb("+U(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",d=J.exec(u)
if(!d)throw new Error("Couldn't generate valid rgb string from "+t+", it returned "+u+".")
return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+c[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}function $(e){return function(e){var t,a=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(a,n,r),o=Math.min(a,n,r),l=(i+o)/2
if(i===o)return void 0!==e.alpha?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l}
var s=i-o,c=.5<l?s/(2-i-o):s/(i+o)
switch(i){case a:t=(n-r)/s+(n<r?6:0)
break
case n:t=(r-a)/s+2
break
default:t=(a-n)/s+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:l,alpha:e.alpha}:{hue:t,saturation:c,lightness:l}}(Q(e))}var ee=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e}
function te(e){var t=e.toString(16)
return 1===t.length?"0"+t:t}function ae(e){return te(Math.round(255*e))}function ne(e,t,a){return ee("#"+ae(e)+ae(t)+ae(a))}function re(e,t,a){return U(e,t,a,ne)}function ie(e,t,a){if("number"==typeof e&&"number"==typeof t&&"number"==typeof a)return re(e,t,a)
if("object"==typeof e&&void 0===t&&void 0===a)return re(e.hue,e.saturation,e.lightness)
throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")}function oe(e,t,a,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof a&&"number"==typeof n)return 1<=n?re(e,t,a):"rgba("+U(e,t,a)+","+n+")"
if("object"==typeof e&&void 0===t&&void 0===a&&void 0===n)return 1<=e.alpha?re(e.hue,e.saturation,e.lightness):"rgba("+U(e.hue,e.saturation,e.lightness)+","+e.alpha+")"
throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")}function le(e,t,a){if("number"==typeof e&&"number"==typeof t&&"number"==typeof a)return ee("#"+te(e)+te(t)+te(a))
if("object"==typeof e&&void 0===t&&void 0===a)return ee("#"+te(e.red)+te(e.green)+te(e.blue))
throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function se(e,t,a,n){if("string"==typeof e&&"number"==typeof t){var r=Q(e)
return"rgba("+r.red+","+r.green+","+r.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof a&&"number"==typeof n)return 1<=n?le(e,t,a):"rgba("+e+","+t+","+a+","+n+")"
if("object"==typeof e&&void 0===t&&void 0===a&&void 0===n)return 1<=e.alpha?le(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"
throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}var ce=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},ue=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},de=function(e){
return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},fe=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha},pe="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object."
function he(e){if("object"!=typeof e)throw new Error(pe)
if(ue(e))return se(e)
if(ce(e))return le(e)
if(fe(e))return oe(e)
if(de(e))return ie(e)
throw new Error(pe)}function me(e){return function t(a,n,r){return function(){var e=r.concat(Array.prototype.slice.call(arguments))
return e.length>=n?a.apply(this,e):t(a,n,e)}}(e,e.length,[])}function ve(e,t){var a=$(t)
return he(Object(m.a)({},a,{hue:(a.hue+parseFloat(e))%360}))}var ge=me(ve)
function ye(e){var t=$(e)
return he(Object(m.a)({},t,{hue:(t.hue+180)%360}))}function be(e,t,a){return Math.max(e,Math.min(t,a))}function Se(e,t){var a=$(t)
return he(Object(m.a)({},a,{lightness:be(0,1,a.lightness-parseFloat(e))}))}var we=me(Se)
function Ee(e,t){var a=$(t)
return he(Object(m.a)({},a,{saturation:be(0,1,a.saturation-parseFloat(e))}))}var ke=me(Ee)
function Ce(e){var a=Q(e),t=Object.keys(a).map(function(e){var t=a[e]/255
return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}),n=t[0],r=t[1],i=t[2]
return parseFloat((.2126*n+.7152*r+.0722*i).toFixed(3))}function Te(e){return he(Object(m.a)({},$(e),{saturation:0}))}function xe(e){var t=Q(e)
return he(Object(m.a)({},t,{red:255-t.red,green:255-t.green,blue:255-t.blue}))}function _e(e,t){var a=$(t)
return he(Object(m.a)({},a,{lightness:be(0,1,a.lightness+parseFloat(e))}))}var Me=me(_e)
function Pe(e,t,a){var n=Q(t),r=Object(m.a)({},n,{alpha:"number"==typeof n.alpha?n.alpha:1}),i=Q(a),o=Object(m.a)({},i,{alpha:"number"==typeof i.alpha?i.alpha:1}),l=r.alpha-o.alpha,s=2*parseFloat(e)-1,c=((s*l==-1?s:s+l)/(1+s*l)+1)/2,u=1-c
return se({red:Math.floor(r.red*c+o.red*u),green:Math.floor(r.green*c+o.green*u),blue:Math.floor(r.blue*c+o.blue*u),alpha:r.alpha+(o.alpha-r.alpha)*(parseFloat(e)/1)})}var Ie=me(Pe)
function Ne(e,t){var a=Q(t),n="number"==typeof a.alpha?a.alpha:1
return se(Object(m.a)({},a,{alpha:be(0,1,(100*n+100*parseFloat(e))/100)}))}var Re=me(Ne)
function Le(e){return.179<Ce(e)?"#000":"#fff"}function je(e,t){var a=$(t)
return he(Object(m.a)({},a,{saturation:be(0,1,a.saturation+parseFloat(e))}))}var Ae=me(je)
function Oe(e,t){return he(Object(m.a)({},$(t),{hue:parseFloat(e)}))}var Be=me(Oe)
function De(e,t){return he(Object(m.a)({},$(t),{lightness:parseFloat(e)}))}var Fe=me(De)
function qe(e,t){return he(Object(m.a)({},$(t),{saturation:parseFloat(e)}))}var We=me(qe)
function Ue(e,t){return Ie(parseFloat(e),"rgb(0, 0, 0)",t)}var ze=me(Ue)
function Ye(e,t){return Ie(parseFloat(e),"rgb(255, 255, 255)",t)}var He=me(Ye)
function Ve(e,t){var a=Q(t),n="number"==typeof a.alpha?a.alpha:1
return se(Object(m.a)({},a,{alpha:be(0,1,(100*n-100*parseFloat(e))/100)}))}var Xe=me(Ve)
function Je(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
var n=Array.isArray(t[0])
if(!n&&8<t.length)throw new Error("The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation")
return{animation:t.map(function(e){if(n&&!Array.isArray(e)||!n&&Array.isArray(e))throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')")
if(Array.isArray(e)&&8<e.length)throw new Error("The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation")
return Array.isArray(e)?e.join(" "):e}).join(", ")}}function Ze(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return{backgroundImage:t.join(", ")}}function Ke(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return{background:t.join(", ")}}var Ge=["top","right","bottom","left"]
function Qe(e){for(var t=arguments.length,a=new Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n]
var r
return"string"==typeof e&&0<=Ge.indexOf(e)?((r={})["border"+i(e)+"Width"]=a[0],r["border"+i(e)+"Style"]=a[1],r["border"+i(e)+"Color"]=a[2],r):(a.unshift(e),{borderWidth:a[0],borderStyle:a[1],borderColor:a[2]})}function $e(e,t){var a,n,r=i(e)
if(!t&&0!==t)throw new Error("borderRadius expects a radius value as a string or number as the second argument.")
if("Top"===r||"Bottom"===r)return(a={})["border"+r+"RightRadius"]=t,a["border"+r+"LeftRadius"]=t,a
if("Left"!==r&&"Right"!==r)throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.')
return(n={})["borderTop"+r+"Radius"]=t,n["borderBottom"+r+"Radius"]=t,n}function et(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return r.apply(void 0,["borderStyle"].concat(t))}function tt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return r.apply(void 0,["borderWidth"].concat(t))}function at(e,t){return e(t?":"+t:"")}function nt(e,t,a){if(!t)throw new Error("You must provide a template to this method.")
if(0===e.length)return at(t,null)
for(var n=[],r=0;r<e.length;r+=1){if(a&&a.indexOf(e[r])<0)throw new Error("You passed an unsupported selector state to this method.")
n.push(at(t,e[r]))}return n=n.join(",")}var rt=[void 0,null,"active","focus","hover"]
function it(e){return"button"+e+',\n  input[type="button"]'+e+',\n  input[type="reset"]'+e+',\n  input[type="submit"]'+e}function ot(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return nt(t,it,rt)}function lt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return r.apply(void 0,["margin"].concat(t))}function st(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return r.apply(void 0,["padding"].concat(t))}var ct=["absolute","fixed","relative","static","sticky"]
function ut(e){for(var t=arguments.length,a=new Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n]
return 0<=ct.indexOf(e)?Object(m.a)({position:e},r.apply(void 0,[""].concat(a))):r.apply(void 0,["",e].concat(a))}function dt(e,t){return void 0===t&&(t=e),{height:e,width:t}}var ft=[void 0,null,"active","focus","hover"]
function pt(e){return'input[type="color"]'+e+',\n    input[type="date"]'+e+',\n    input[type="datetime"]'+e+',\n    input[type="datetime-local"]'+e+',\n    input[type="email"]'+e+',\n    input[type="month"]'+e+',\n    input[type="number"]'+e+',\n    input[type="password"]'+e+',\n    input[type="search"]'+e+',\n    input[type="tel"]'+e+',\n    input[type="text"]'+e+',\n    input[type="time"]'+e+',\n    input[type="url"]'+e+',\n    input[type="week"]'+e+",\n    input:not([type])"+e+",\n    textarea"+e}
function ht(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return nt(t,pt,ft)}function mt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
if(Array.isArray(t[0])&&2===t.length){var n=t[1]
if("string"!=typeof n)throw new Error("Property must be a string value.")
return{transition:t[0].map(function(e){return e+" "+n}).join(", ")}}return{transition:t.join(", ")}}},"/Mon":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRightPane=void 0
var r=n(a("vOnD")).default.div.withConfig({displayName:"styles__StyledRightPane",componentId:"hqgthc-0"})(["position:relative;height:100%;transition:all 0.3s ease-in-out;z-index:100;.preview-panel-wrapper{position:absolute;top:0;left:0;height:100%;}"])
t.StyledRightPane=r},"/cyv":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"container:modal:open":return(0,r.default)({},n,{isOpen:!0})
case"container:modal:close":return(0,r.default)({},e,{isOpen:!1})}return e}
var r=n(a("MVZn")),i={isOpen:!1,type:"alert",alertType:"alert",title:"",desc:"",onClose:function(){return null},onCancel:null,onConfirm:null,cancelText:void 0,confirmText:void 0,canCancel:!0,canConfirm:!0,canClose:!0}},"/rSK":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarker=void 0
var c=r(a("pVnL")),o=r(a("MVZn")),l=r(a("lwsE")),i=r(a("W8MJ")),u=r(a("a1gu")),d=r(a("Nsbk")),s=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),h=r(a("17x9")),m=r(a("vOnD")),v=a("fiFu"),g=function(e){function n(e){var s;(0,l.default)(this,n),s=(0,u.default)(this,(0,d.default)(n).call(this,e))
var r={isDragging:!1,position:{left:0,top:0}},t=(0,o.default)({},b,{mousemove:(0,v.muteEvent)(function(e){var t,a,n,r,i=s.props,o=i.commentThread,l=i.markerOperations.getMarkerPosition(e);(s.state.isDragging||(a=l,n=(t=o).left-a.left,r=t.top-a.top,S<=n*n+r*r))&&s.setState({isDragging:!0,position:l})}),mouseup:(0,v.muteEvent)(function(e){if(i(),s.state.isDragging){var t=s.props,a=t.commentThread,n=t.markerOperations
n.doUpdateCommentThread((0,o.default)({cid:a.cid},n.getMarkerPosition(e)))}else setTimeout(function(){var e=s.props,t=e.isFocus,a=e.commentThread
e.markerOperations.setFocusCommentThreadCid(t?null:a.cid)},0)
s.setState(r)}),mouseleave:function(){i(),s.props.markerOperations.setHoverFocusCommentThreadCid(null),s.setState(r)}}),a=(0,o.default)({},b,{mouseup:t.mouseup}),i=function(){return s.props.markerOperations.removeContainerEventListener(s.props.isEditable?t:a)}
return s.markerListenerMap={onMouseDown:(0,v.muteEvent)(function(){return s.props.markerOperations.addContainerEventListener(s.props.isEditable?t:a)}),onMouseEnter:(0,v.muteEvent)(function(){return!s.props.isFocus&&s.props.markerOperations.setHoverFocusCommentThreadCid(s.props.commentThread.cid)}),onMouseLeave:(0,v.muteEvent)(function(){return s.props.isFocus&&s.props.markerOperations.setHoverFocusCommentThreadCid(null)}),onMouseUp:v.MUTE_EVENT,onDoubleClick:v.MUTE_EVENT,onClick:v.MUTE_EVENT},s.state=r,s}
return(0,s.default)(n,e),(0,i.default)(n,[{key:"render",value:function(){var e=this.props,t=e.commentThread,a=e.scale,n=e.isFocus,r=e.isFade,i=e.commentMarkerIndex,o=this.state,l=o.isDragging,s=o.position
return p.default.createElement(y,{className:n?"focus":!n&&r?"fade":"",style:{left:"".concat((l?s.left:t.left)*a,"px"),top:"".concat((l?s.top:t.top)*a,"px")}},p.default.createElement("span",(0,c.default)({tabIndex:i},this.markerListenerMap),i))}}]),n}(p.PureComponent)
t.CommentMarker=g,(0,f.default)(g,"propTypes",{commentMarkerIndex:h.default.number.isRequired,commentThread:h.default.object.isRequired,scale:h.default.number.isRequired,isEditable:h.default.bool,isFocus:h.default.bool,isFade:h.default.bool,markerOperations:h.default.object.isRequired})
var y=m.default.div.withConfig({displayName:"CommentMarkerPanelMarker__CommentMarkerDiv",componentId:"kuapf2-0"})(["position:absolute;width:","px;height:","px;overflow:visible;& > span{display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;margin-left:","px;margin-top:","px;width:","px;height:","px;font-size:14px;line-height:",
"px;box-shadow:0 2px 10px rgba(108,0,0,0.22);border:2px solid #fff;border-radius:100%;background:#ff7100;color:#fbfbfc;transition:all 0.1s ease-in;transform:scale(1);}&.focus > span{transform:scale(1.21);}&.fade > span{opacity:0.5;}"],0,0,-14,-14,28,28,28),b={mouseup:v.MUTE_EVENT,mousedown:v.MUTE_EVENT,mousemove:v.MUTE_EVENT,mouseleave:v.MUTE_EVENT,mouseout:v.MUTE_EVENT,click:v.MUTE_EVENT,dblclick:v.MUTE_EVENT},S=225},"0uCA":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(a("lwsE")),r=n(a("W8MJ")),l=n(a("a1gu")),s=n(a("Nsbk")),c=n(a("PJYZ")),u=n(a("7W2i")),d=n(a("lSNA")),f=n(a("q1tI")),i=n(a("17x9")),p=a("1qiG"),h=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return r=(0,l.default)(this,(e=(0,s.default)(i)).call.apply(e,[this].concat(a))),(0,d.default)((0,c.default)(r),"genLines",function(e,t){var a=r.props.style,n=[]
return 0<e.top&&n.push(f.default.createElement("div",{key:"top",className:"line top",style:{borderTopStyle:"".concat(a.dashed?"dashed":"solid"),borderTopColor:a.colorForLines,top:(0,p.toPercentage)(e.top/t.height)}})),e.left+e.width<t.width&&n.push(f.default.createElement("div",{key:"right",className:"line right",style:{borderLeftStyle:"".concat(a.dashed?"dashed":"solid"),borderLeftColor:a.colorForLines,left:(0,p.toPercentage)((e.left+e.width)/t.width)}})),e.top+e.height<t.height&&n.push(
f.default.createElement("div",{key:"bottom",className:"line bottom",style:{borderTopStyle:"".concat(a.dashed?"dashed":"solid"),borderTopColor:a.colorForLines,top:(0,p.toPercentage)((e.top+e.height)/t.height)}})),0<e.left&&n.push(f.default.createElement("div",{key:"left",className:"line left",style:{borderLeftStyle:"".concat(a.dashed?"dashed":"solid"),borderLeftColor:a.colorForLines,left:(0,p.toPercentage)(e.left/t.width)}})),n}),r}return(0,u.default)(i,e),(0,r.default)(i,[{key:"render",value:function(){
var e=this.props,t=e.refRect,a=e.screen
return f.default.createElement("div",{className:"verbose-auxiliary-lines"},this.genLines(t,a))}}]),i}(f.default.Component);(t.default=h).propTypes={refRect:i.default.object,screen:i.default.object,style:i.default.object}},"18l9":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=a("G4qV"),o=a("upRB"),l=a("1iCU"),s=a("pVAx"),c=n(a("tRkt")),u=(0,i.createSelector)([o.getPreference,o.getCurrentMode,o.getIsMultiScreenProject],function(e,t,a){return{toolbarActiveItem:t,isScreenPanelShow:e.layout===s.CLASSIC&&a,isLayerPanelShow:e.layout!==s.CLASSIC&&t===l.INSPECT,isCommentPanelShow:e.layout!==s.CLASSIC&&t==l.COMMENT}}),d=(0,r.connect)(function(e){return u(e)})(c.default)
t.default=d},"1gVK":function(e,t,a){"use strict"
var n,r=a("TqRt")(a("cDf5"));(n="undefined"!=typeof window?window:void 0).Shake=function(i,a){function e(e){if(this.hasDeviceMotion="ondevicemotion"in i,this.options={threshold:15,timeout:1e3},"object"===(0,r.default)(e))for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t])
if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof a.CustomEvent)this.event=new a.CustomEvent("shake",{bubbles:!0,cancelable:!0})
else{if("function"!=typeof a.createEvent)return!1
this.event=a.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return e.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},e.prototype.start=function(){this.reset(),this.hasDeviceMotion&&i.addEventListener("devicemotion",this,!1)},e.prototype.stop=function(){this.hasDeviceMotion&&i.removeEventListener("devicemotion",this,!1),this.reset()},e.prototype.devicemotion=function(e){var t=e.accelerationIncludingGravity
if(t){var a,n,r
if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=t.x,this.lastY=t.y,void(this.lastZ=t.z)
a=Math.abs(this.lastX-t.x),n=Math.abs(this.lastY-t.y),r=Math.abs(this.lastZ-t.z),(a>this.options.threshold&&n>this.options.threshold||a>this.options.threshold&&r>this.options.threshold||n>this.options.threshold&&r>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&(i.dispatchEvent(this.event),this.lastTime=new Date),this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z}},e.prototype.handleEvent=function(e){if("function"==typeof this[e.type])return this[e.type](e)},e}(n,
n.document)},"1qiG":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.toPercentage=t.getDistancesForDirections=void 0
var s=a("ZXhj")
t.getDistancesForDirections=function(e,t){if((0,s.checkIfTwoRectsOverlap)(e,t))return{top:e.top-t.top,right:t.left+t.width-(e.left+e.width),bottom:t.top+t.height-(e.top+e.height),left:e.left-t.left}
var a={},n=function(e,t){var a=[],n=(0,s.getMinContainingRect)(e,t)
if(n.width<e.width+t.width)a[0]=null
else{var r=n.width-(e.width+t.width),i=t.left>e.left
a[0]=i?r:-r}if(n.height<e.height+t.height)a[1]=null
else{var o=n.height-(e.height+t.height),l=t.top>e.top
a[1]=l?o:-o}return a}(e,t)
return 0<n[0]?a.right=n[0]:n[0]<0&&(a.left=Math.abs(n[0])),0<n[1]?a.bottom=n[1]:n[1]<0&&(a.top=Math.abs(n[1])),a}
t.toPercentage=function(e){return"".concat(100*e,"%")}},"20hc":function(e,t,a){"use strict"
var n=a("TqRt"),m=n(a("o0o1")),r=n(a("yXPU")),v=n(a("q1tI")),g=n(a("i8i4")),o=a("XkTy"),i=a("tajm"),l=a("tQ2B"),s=a("t3Un"),y=n(a("NkXT")),c=n(a("udLg")),u=window,b=u.$,S=u.MB,d=u.md5
S.f.inSharing=!0
var w=function(){return window.MBData}
S.load=function(){var t=(0,r.default)(m.default.mark(function e(a){var n,r,i,o,l,s,c,u,d,f,p,h
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.projectAccessToken,r=a.projectEncryptedPassword,i=a.projectName,o=a.projectIconUrl,l=a.projectUpdatedAt,s=a.isPasswordRequired,c=a.isProjectExportable,u=a.urlClientIOS,d=a.urlClientAndroid,S.webpackInterface.renderPreviewAlert(),S.supportedBrowser()){e.next=6
break}return b("#splash").hide(),b("#loading").hide(),e.abrupt("return")
case 6:return f=S.isMac()?"mac":S.isWindows()?"windows":"other-os",b("html").addClass(f),(S.isStandAlone()||S.isIOSClient())&&b("html").addClass("is-full-screen"),p=void 0,r=r||new URLSearchParams(location.search).get("password")||(t=n,S.localStorageDelegate.getItem("".concat(t,"_pwd"))),e.next=13,E(s,n,r)
case 13:if(e.t0=e.sent,e.t0){e.next=16
break}e.t0=[]
case 16:if(h=e.t0,p=h[0],r=h[1],p){e.next=21
break}return e.abrupt("return")
case 21:if(!S.isMobile()||S.isInApp||S.isStandAlone()||w()||/\/embed\b/.test(location.pathname)){e.next=24
break}return e.next=24,new Promise(function(e){b("#loading").hide(),g.default.render(v.default.createElement(y.default,{projectAccessToken:n,projectEncryptedPassword:r,projectName:i,projectIconUrl:o,projectUpdatedAt:l,isProjectExportable:c,urlClientIOS:u,urlClientAndroid:d,loadProject:e}),document.getElementById("workspace"))})
case 24:b(".indicator").css("height","100%"),setTimeout(function(){return k(p)},300)
case 26:case"end":return e.stop()}var t},e)}))
return function(e){return t.apply(this,arguments)}}()
var E=function(){var n=(0,r.default)(m.default.mark(function e(t,a,n){var r,i
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(a,n)
case 2:if((r=e.sent)||t){e.next=6
break}return(0,o.alertAsync)({desc:I18N.no_permission_to_app}),e.abrupt("return")
case 6:i=1/0
case 7:if(!r&&i)return i--,e.t0=d,e.next=12,(0,o.promptGetPasswordAsync)()
e.next=19
break
case 12:return e.t1=e.sent,n=(0,e.t0)(e.t1),e.next=16,f(a,n)
case 16:r=e.sent,e.next=7
break
case 19:if(r){e.next=23
break}return console.log("Failed prompt password, again"),setTimeout(function(){return(0,o.alertAsync)({desc:t?I18N.invalid_credential:"Failed to load this app."})},320),e.abrupt("return")
case 23:return e.abrupt("return",[r,n])
case 24:case"end":return e.stop()}},e)}))
return function(e,t,a){return n.apply(this,arguments)}}(),f=function(){var a=(0,r.default)(m.default.mark(function e(r,i){var o
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w()){e.next=5
break}e.t0=p(i),e.next=8
break
case 5:return e.next=7,(0,s.requestJSON)("/app/".concat(r,".json").concat(i?"?password=".concat(i):""))
case 7:e.t0=e.sent
case 8:return o=e.t0,a=r,n=i,S.localStorageDelegate.setItem("".concat(a,"_pwd"),n),e.abrupt("return",o)
case 13:e.prev=13,e.t1=e.catch(0),console.log("[getProjectFullData] failed: ".concat(e.t1)),t=r,S.localStorageDelegate.removeItem("".concat(t,"_pwd"))
case 17:case"end":return e.stop()}var t,a,n},e,null,[[0,13]])}))
return function(e,t){return a.apply(this,arguments)}}(),p=function(e){var t=w(),a=t.project.password
if(a&&a!==e)throw new Error("[offline] password mismatch")
return t},k=function(e){var t=e.org,a=e.team,n=(0,l.refreshProjectFullData)(e)
S.isEmbedded()||(0,l.refreshMessagePreferenceData)(S.preferenceData),S.currentOrg=t,S.currentTeam=a,S.currentProject=n,S.isMobile()||S.isEmbedded()||(0,i.patchGlobalAutoSaverPusher)(),b("title").html(n.name),b("#loading").hide(),!n.validated&&S.isMobile()&&(0,o.alertAsync)({title:I18N.reminder,desc:I18N.fraud_warning,confirmText:I18N.fraud_confirm,isHTML:!0}),S.checkFA(function(){S.webpackInterface.init(),S.Pusher&&S.user.id&&"guest"!==S.webpackInterface.store.getState(
).model.current.userRole&&S.Pusher.enableSocketChannel(n.cid)
var e=location.hash||"",t=e&&e.startsWith("#screen=")&&e.substr("#screen=".length),a=Screen.find(t)||n.homeScreen()
b("body").data("scale",100),(S.isMobile()||S.isEmbedded())&&(n.scale=100,n.lsave(!1)),S.currentProject=n,S.currentScreen=a,S.runner=new c.default,S.webpackInterface.renderPreview(document.querySelector("#workspace")),setTimeout(function(){b("#workspace").show(),S.runner.init(n,a)},100)})}},"2AqR":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("H27A")),l=a("upRB"),o=(0,r.connect)(function(e){var t=e.container,a=t.common.scale,n=t.previewSetting,r=n.toolbarActiveItem,i=n.loadSliceUrl,o=(0,l.getPreference)(e).show_toolbar_text
return{scale:a,project:(0,l.getCurrentProject)(e),toolbarActiveItem:r,loadSliceUrl:i,isScrollable:(0,l.getIsScrollable)(e),isHighlight:(0,l.getIsHighlight)(e),isStickyShow:(0,l.getIsStickyShow)(e),shellType:(0,l.getShellType)(e),showToolBarText:o}})(i.default)
t.default=o},"2M3O":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZip=t.requestSnapshot=t.requestThumbnail=void 0
var n=a("SVae"),r=a("3ceZ")
t.requestThumbnail=function(e){return((0,r.isPublicAvailable)(e)?r.requestThumbnailPublic:n.requestThumbnailLocalhost)(e)}
t.requestSnapshot=function(e){return((0,r.isPublicAvailable)(e)?r.requestSnapshotPublic:n.requestSnapshotLocalhost)(e)}
t.requestSnapshotZip=function(e){return((0,r.isPublicAvailable)(e)?r.requestSnapshotZipPublic:n.requestSnapshotZipLocalhost)(e)}},"2b0G":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),f=n(a("q1tI")),p=a("6XO9")
a("mxnB")
var h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement("span",{className:"last-screen","data-action":"last",onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"left-arrow",name:"angle_bracket_left"})),f.default.createElement("span",{className:"next-screen","data-action":"next",
onClick:this.props.onClick},f.default.createElement(p.SVG,{className:"right-arrow",name:"angle_bracket_right"})))}}]),t}(f.PureComponent)
t.default=h,(0,u.default)(h,"propTypes",{onClick:d.default.func})},"2eJi":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var y=n(a("J4zp")),r=n(a("MVZn")),o=n(a("zkrS")),b=a("upRB"),i=a("6UMJ"),l=a("CWx7"),s=a("4daP"),S=a("Gbs1"),c=a("1iCU"),u=a("oose"),d=(0,r.default)({},i.keyEntry,l.runnerEntry,s.playSettingEntry,{"entry:init:preview:related:data":function(e){var t=e.dispatch
t({type:"preview:update:state",payload:{preference:MB.preference()}}),t({type:"entry:refresh:project-related"})},"entry:preview:select":function(e,t){var a=e.dispatch,n=e.getState,r=t.payload.toolbarActiveItem
if(r!=n().container.previewSetting.toolbarActiveItem){if(r===c.INSPECT)a({type:"SET_VISIBILITY_SCREEN",payload:{screenID:o.default.MB.currentScreen?o.default.MB.currentScreen.cid:-1}})
else if(r===c.COMMENT){var i=(0,u.getProjectAllowCommentStatus)(o.default.MB.currentProject)
"deny_limitation"===i&&MB.promptRenew("comment_".concat(i),{action:"comment_".concat(i),renewRedirectParams:o.default.MB.currentProject.team_cid||o.default.MB.currentProject.owner_id===o.default.MB.user.id?{access_token:o.default.MB.currentProject.access_token}:null})}a({type:"reducer:preview-toolbar:update",payload:{toolbarActiveItem:r}}),setTimeout(function(){(0,b.getRunnerActiveScreenCid)(n())&&o.default.MB.runner.reload()})}},"entry:init:preview:scale":function(e){var t=e.getState,a=e.dispatch,n=t(),r=(
0,b.getCurrentProject)(n)
if(MB.isUIChina()&&"car_play"===r.model)a({type:"preview:set:scale",payload:{scale:40}})
else{var i,o=r.cid,l=(i=o,Number(MB.localStorageDelegate.getItem("preview_scale_".concat(i))))
l&&!MB.isForum()?a({type:"preview:set:scale",payload:{scale:l}}):a({type:"entry:auto-fit:preview:scale"})}},"entry:auto-fit:preview:scale":function(e){var t=e.getState,a=e.dispatch,n=t(),r=n.container.previewSetting.isFullScreenMode,i=(0,b.getCurrentProject)(n),o=(0,b.getCurrentScreen)(n),l=(0,b.getShellType)(n),s=(0,S.getProjectShell)(i,l),c="landscape"===o.orientation?[s.height,s.width]:[s.width,s.height],u=(0,y.default)(c,2),d=u[0],f=u[1],p=i.template?.8:1,h=r||MB.isForum()?0:500,m=window.innerWidth*p-h,
v=window.innerHeight*p-56,g=100*Math.min((v-40)/f,(m-40)/d)
a({type:"preview:set:scale",payload:{scale:Math.min(Math.max(g,20),100)}})},"entry:preview:set:scale":function(e,t){var a,n,r=e.dispatch,i=e.getState,o=t.payload.scale,l=i(),s=l.model.current.projectCid
!l.container.previewSetting.isFullScreenMode&&(a=s,n=o,MB.localStorageDelegate.setItem("preview_scale_".concat(a),n)),r({type:"preview:set:scale",payload:{scale:o}})},"entry:preview:set:canvas:offset":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload.offset,i=a(),o=(0,b.getCurrentScreen)(i),l=(0,b.getCurrentScale)(i),s=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),c=s.width,u=s.height,d=Math.max(3.5*c,o.width*l/100*2),f=Math.max(3.5*u,o.height*l/100*2),p=r.x,h=r.y
n({type:"preview:set:canvas:offset",payload:{offset:{x:p=-Math.max(Math.min(-p,d/2),-d/2),y:h=-Math.max(Math.min(-h,f/2),-f/2)}}})},"entry:enter:full-screen-mode":function(e){var t=e.dispatch
MB.event("preview","工具栏: 全屏模式开启"),t({type:"entry:preview:select",payload:{toolbarActiveItem:"preview"}}),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!0}}),t({type:"entry:auto-fit:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:-28}}})},"entry:exit:fill-screen-mode":function(e){var t=e.dispatch
MB.event("preview","工具栏: 全屏模式关闭"),t({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),t({type:"entry:init:preview:scale"}),t({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}})
t.entryMap=d},"2s0x":function(e,t,a){e.exports={"slice-container":"_2FLjTBOWTdJe3M3sw-VdYI","slice-load-wrap":"_3KRRSNQeMq8ecSlOMYMVeF","slice-item":"_33HowBUzwgAHj2ZrVfoG3D",active:"oKXaiboaXdf8OtZ5FC5BI",download:"_1fom5UBbirvQ9gHFIkoaaz","icon-download":"_1bkbkk-E2IExD0mLX66FYn","no-slice":"_2lJKTFDIEz2pCYIaVad38l",spinner:"_3_b065M_IA1bQOZX-cJx3-","rotate-infinite":"pHICLqPtUNQ0NhVXRboiI","download-slice-load":"_2VjpVdYeSW_HDEeGZ3M2DG"}},"3caq":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.createWorkspacePusher=void 0
var S=n(a("o0o1")),s=n(a("yXPU")),c=n(a("MVZn")),u=a("Clcl"),d=a("LPEl"),f=a("RrAf"),p=a("qYFl"),h=window.MB
t.createWorkspacePusher=function(e){var a=e.filterStaleData,t=(0,c.default)({},f.initialSocketState,{projectCidList:[]}),r=(0,f.createSocketStore)(t)
r.openSocket({userId:h.user.id})
var l=r.getState().userSocket
l.on("broadcast:user:data",function(e){return r.dispatchEvent({type:"socket:broadcast:user:data",payload:e})}),l.on("broadcast:project:data",function(e){return r.dispatchEvent({type:"socket:broadcast:project:data",payload:e})}),l.on("broadcast:project:batch-save",function(e){return r.dispatchEvent({type:"socket:broadcast:project:batch-save",payload:e})}),l.on("broadcast:upgrade-notice:new",function(e){var t=-1!==location.hostname.indexOf("pro")||-1!==location.hostname.indexOf("mockingbot.com"
)||-1!==location.hostname.indexOf("mockingbot.in")?2:1
"free"===e.target_users&&2===t||"pro"===e.target_users&&1===t||r.dispatchEvent({type:"socket:broadcast:upgrade-notice:new",payload:e.data})})
var n=(o=(0,s.default)(S.default.mark(function e(t){var a,n
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getState(),n=a.projectCidList,e.abrupt("return",!n.includes(t)&&l.emitAsync("join:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket joined project",e),r.setState({projectCidList:(0,d.arrayMatchPush)(n,t)})},u.REPORT_ERROR))
case 2:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)}),i=function(){var e=r.getState().projectCidList
return l.emitAsync("leave:projects",{projectCidList:e}).then(function(e){console.log("userSocket left all project",e),r.setState({projectCidList:[]})},u.REPORT_ERROR)},b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],o=r.getServerTimestamp(),t=e.reduce(function(e,t){var a=t.object,n=a.cid,r=a.mtime,i=void 0===r?o:r
return e[n]=i,e},{})
return a(t)}
var o
return r.addEventListener("socket:open",(0,s.default)(S.default.mark(function e(){var t,a,n
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.getState(),a=t.userSocket,n=t.projectCidList,e.t0=n.length,e.t0)return e.next=5,a.emitAsync("join:projects",{projectCidList:n}).catch(u.REPORT_ERROR)
e.next=5
break
case 5:case"end":return e.stop()}},e)}))),r.addEventListener("socket:broadcast:user:data",function(e){var t=e.type,a=e.payload
console.log("[SocketBroadcastData]",t,a)
var n=b(a).remoteStaleCidSet,r=!0,i=!1,o=void 0
try{for(var l,s=a[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value,u=c.action,d=c.className,f=c.object
m(n,d,u,f)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}),r.addEventListener("socket:broadcast:project:data",function(e){var p=e.type,h=e.payload
return r.queueAsync((0,s.default)(S.default.mark(function e(){var t,a,n,r,i,o,l,s,c,u,d,f
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",p,h),t=b(h),a=t.remoteStaleCidSet,r=!(n=!0),i=void 0,e.prev=5,o=h[Symbol.iterator]()
case 7:if(n=(l=o.next()).done){e.next=14
break}return s=l.value,c=s.action,u=s.className,d=s.object,f=s.extraInfo,e.next=11,w(a,u,c,d,f)
case 11:n=!0,e.next=7
break
case 14:e.next=20
break
case 16:e.prev=16,e.t0=e.catch(5),r=!0,i=e.t0
case 20:e.prev=20,e.prev=21,n||null==o.return||o.return()
case 23:if(e.prev=23,r)throw i
e.next=26
break
case 26:return e.finish(23)
case 27:return e.finish(20)
case 28:case"end":return e.stop()}},e,null,[[5,16,20,28],[21,,23,27]])})))}),r.addEventListener("socket:broadcast:project:batch-save",function(e){var g=e.type,y=e.payload
return r.queueAsync((0,s.default)(S.default.mark(function e(){var t,a,n,r,i,o,l,s,c,u,d,f,p,h,m,v
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[SocketBroadcastData]",g,y),t=y.fromUser,a=y.rootProjectCid,n=y.batchSaveQueue,r=(void 0===n?[]:n).map(function(e){var t=e.method,a=e.body,n=e.extraInfo
return{className:n.className,action:"PUT"===t?"update":"DELETE"===t?"destroy":"POST"===t?"create":"",object:a?JSON.parse(a):{cid:n.cid},extraInfo:n}}),i=b(r),o=i.remoteStaleCidSet,s=!(l=!0),c=void 0,e.prev=7,u=r[Symbol.iterator]()
case 9:if(l=(d=u.next()).done){e.next=16
break}return f=d.value,p=f.className,h=f.action,m=f.object,v=f.extraInfo,e.next=13,w(o,p,h,m,v,a,t)
case 13:l=!0,e.next=9
break
case 16:e.next=22
break
case 18:e.prev=18,e.t0=e.catch(7),s=!0,c=e.t0
case 22:e.prev=22,e.prev=23,l||null==u.return||u.return()
case 25:if(e.prev=25,s)throw c
e.next=28
break
case 28:return e.finish(25)
case 29:return e.finish(22)
case 30:case"end":return e.stop()}},e,null,[[7,18,22,30],[23,,25,29]])})))}),r.addEventListener("socket:broadcast:upgrade-notice:new",function(e){return e.type,e.payload,r.queueAsync((0,s.default)(S.default.mark(function e(){return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h.action("entry:update:upgrade-notice-indicator-status",{status:"TWINKLE"})
case 1:case"end":return e.stop()}},e)})))}),(0,c.default)({},r,{requestBatchSave:function(e){var t=e.batchSaveQueue,a=void 0===t?[]:t,n=e.rootProjectCid,r=void 0===n?"":n,i=e.fromUser,o=void 0===i?{}:i
return l.emitAsync("request:project:batch-save",{batchSaveQueue:a,rootProjectCid:r,fromUser:o})},joinProject:n,leaveProject:function(t){var a=r.getState().projectCidList
return a.includes(t)&&l.emitAsync("leave:projects",{projectCidList:[t]}).then(function(e){console.log("userSocket left project",e),r.setState({projectCidList:(0,d.arrayMatchDelete)(a,t)})},u.REPORT_ERROR)},leaveAllProject:i,enableSocketChannel:n,resetSocketChannel:i})}
var m=function(e,t,a,n){e.has(n.cid)||(0,p.isRemoteMtimeStale)(t,n.cid,n.mtime)||("Team"===t?(0,p.updateTeam)(a,n):"Project"===t?(0,p.updateProject)(a,n):"Collaborator"===t&&(0,p.updateCollaborator)(a,n))},w=function(){var o=(0,s.default)(S.default.mark(function e(t,a,n,r,i,o){var l,s,c,u,d=arguments
return S.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l=6<d.length&&void 0!==d[6]?d[6]:{},t.has(r.cid)||(0,p.isRemoteMtimeStale)(a,r.cid,r.mtime))return e.abrupt("return")
e.next=3
break
case 3:if("Asset"===a)return e.abrupt("return",(0,p.updateAsset)(n,r))
e.next=5
break
case 5:if("PointComments::Comment"===a||"Comment"===a)return e.abrupt("return",h.webpackInterface&&h.webpackInterface.pushData("comments",n,r))
e.next=7
break
case 7:if("PointComments::Thread"===a||"CommentThread"===a)return e.abrupt("return",h.webpackInterface&&h.webpackInterface.pushData("comment-threads",n,r))
e.next=9
break
case 9:if(h.f.inSharing||!h.currentProject)return e.abrupt("return")
e.next=11
break
case 11:if(e.t0=p.updateWorkspaceMap[a],e.t0)return e.next=15,p.updateWorkspaceMap[a](n,r,i)
e.next=15
break
case 15:l.id&&(!(s="Screen"===a?r.cid:r.screen_cid)&&r.screenstate_cid&&(c=Screenstate.find(r.screenstate_cid))&&(s=c.screen_cid),(u=CoWorker.find(l.id)||new CoWorker({cid:l.id,name:l.name,avatar:l.avatar})).screen_cid=s,u.last_seen=new Date,u.save(),h.renderCoWorkers&&h.renderCoWorkers())
case 16:case"end":return e.stop()}},e)}))
return function(e,t,a,n,r,i){return o.apply(this,arguments)}}()},"3ceZ":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZipPublic=t.requestSnapshotPublic=t.requestThumbnailPublic=t.isPublicAvailable=void 0
var f=n(a("MVZn")),p=n(a("J4zp")),m=n(a("o0o1")),r=n(a("yXPU")),v=n(a("zkrS")),i=a("qhQL"),g=a("/N2d"),h=a("CpT9"),o=window.location,y="".concat(o.origin,"/api/v2/snapshots/public"),b=function(){return window.MB_DESKTOP_SNAPSHOT||window.parent.MB_DESKTOP_SNAPSHOT}
t.isPublicAvailable=function(e){return"function"==typeof b()&&(!e.projectAccessToken||v.default.SpineModel.Project.findAllByAttribute("access_token",e.projectAccessToken))&&(!e.screenCid||v.default.SpineModel.Screen.find(e.screenCid))}
var S=(0,i.createCacheMap)({valueSizeSumMax:8388608,valueSizeSingleMax:1048576}),l=function(){var t=(0,r.default)(m.default.mark(function e(t){var a,n,r,i,o,l,s,c,u,d,f,p,h
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.imageElement,t.projectAccessToken,n=t.screenCid,r=t.screenStateCid,i=void 0===r?"default":r,o=t.mode,void 0===o?"thumbnail":o,l=t.version,s=void 0===l?"":l,e.prev=1,u=v.default.SpineModel.Screen.find(n),d=128/Math.max(u.width,u.height),f="".concat(n,"|").concat(i,"|").concat(d),void 0===(c=S.get("".concat(f,"|").concat(s))))return e.next=9,b()({snapshotMode:"png-base64",snapshotUrl:y,taskList:[(0,g.doRenderScreenToHTMLString)({
screenCid:n,screenStateCid:i,canvasZoom:d})]})
e.next=13
break
case 9:p=e.sent,h=p.imageBase64PNGMap,c=h[f],S.set("".concat(f,"|").concat(s),c,c.length,Date.now()+6e4)
case 13:e.next=18
break
case 15:e.prev=15,e.t0=e.catch(1)
case 18:return a.src=c||"/images/preview/image-load.png",e.abrupt("return",a)
case 20:case"end":return e.stop()}},e,null,[[1,15]])}))
return function(e){return t.apply(this,arguments)}}()
t.requestThumbnailPublic=l
var s=function(){var t=(0,r.default)(m.default.mark(function e(t){var a,n,r,i,o,l
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.projectAccessToken,a=t.screenCid,n=t.canvasZoom,r=void 0===n?1:n,i=v.default.SpineModel.Screen.find(a),e.next=5,b()({snapshotMode:"png-file",snapshotUrl:y,snapshotOutputFile:"".concat((0,h.getScreenFileName)(i),".png"),taskList:[(0,g.doRenderScreenToHTMLString)({screenCid:a,screenStateCid:"default",canvasZoom:r})]})
case 5:return o=e.sent,l=o.fileOutput,e.abrupt("return",{fileOutput:l,path:"#"})
case 8:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotPublic=s
var c=function(){var t=(0,r.default)(m.default.mark(function e(t){var a,n,r,i,o,l,s,c,u,d
return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.projectAccessToken,n=t.canvasZoom,r=void 0===n?1:n,i=t.onProgress,o=v.default.SpineModel.Project.findAllByAttribute("access_token",a),l=(0,p.default)(o,1),s=l[0],c=v.default.SpineModel.Screen.findAllByAttribute("project_cid",s.cid),e.next=5,b()({snapshotMode:"png-zip-file",snapshotUrl:y,snapshotOutputFile:"".concat(s.name,".zip"),taskList:c.map(function(e){return(0,f.default)({},(0,g.doRenderScreenToHTMLString)({
screenCid:e.cid,screenStateCid:"default",canvasZoom:r}),{zipPath:"".concat(s.name,"_").concat(s.timestamp,"/").concat((0,h.getScreenFileName)(e),".png")})}),onProgress:i})
case 5:return u=e.sent,d=u.fileOutput,e.abrupt("return",{fileOutput:d,path:"#"})
case 8:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotZipPublic=c},"3xeE":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentLayer=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=n(a("q1tI")),p=r(a("17x9")),h=r(a("vOnD")),m=a("+IKJ"),v=a("6XO9"),g=r(a("zkrS")),y=a("FC/4"),b=a("3xoc"),S=a("U9kS"),w=a("fiFu"),E=g.default.MB,k=g.default.I18N,C=function(e){function t(e){var r;(0,i.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(r),"renderContentReply",function(){var e=r.props.permissionPack.userAuthStatus,t=r.state.isValidReply
return f.default.createElement("div",{className:"reply-footer"},e===w.USER_AUTH_STATUS_MEMBER&&f.default.createElement(y.TextEditComponent,{textEditStore:r.replyStore,placeholder:k.preview.comment.comment_placeholder,minHeight:20,autoHeight:!0,multiline:!0}),e===w.USER_AUTH_STATUS_MEMBER&&(0,b.getDarkerButton)(k.preview.comment.thread_create,r.replyStore.endEdit,!t),e===w.USER_AUTH_STATUS_NOT_SIGN_IN&&f.default.createElement(v.CoreButton,{onClick:x},k.preview.comment.tip_signin),
e===w.USER_AUTH_STATUS_NOT_MEMBER&&f.default.createElement("span",null,k.preview.comment.tip_not_collaborator))})
return r.commentOperations={getPermission:function(e){return r.props.permissionPack.getPermission(e)},getUserProfile:function(e){return r.props.getUserProfile(e)},setHoverFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return!r.props.tempCommentThreadMarker&&function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return r.props.focusCommentThreadCid!==e&&r.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:e,focusSource:"panel"}})}(e)},doDeleteCommentThread:function(e){return r.props.dispatch({type:"entry:comment-threads:delete",payload:{cid:e}})},doDeleteComment:function(e){return r.props.dispatch({type:"comments:delete",payload:e})},doUpdateComment:function(e){return r.props.dispatch({type:"entry:comments:update",payload:e})},doCreateComment:function(e,t){return e&&r.props.dispatch({
type:"entry:comments:add",payload:{thread_cid:t,message:e}})}},r.doCreateCommentThread=function(e){var t=r.props.tempCommentThreadMarker||{top:0,left:0},a=t.left,n=t.top
e&&r.props.dispatch({type:"entry:comment-threads:add",payload:{top:n,left:a,message:e}}),setTimeout(function(){r.scrollRef&&(r.scrollRef.scrollTop=r.scrollRef.scrollHeight-r.scrollRef.offsetHeight)},0)},r.replyStore=(0,y.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return r.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value,a=void 0===t?"":t
r.doCreateCommentThread(a.trim()),r.resetReply()}}),r.resetReply=function(){r.replyStore.startEdit(),r.replyStore.setValue(""),r.setState({isValidReply:!1})},r.focusReply=function(){r.replyStore.endEdit(),r.replyStore.startEdit()},r.setScrollRef=function(e){r.scrollRef=e},r.scrollRef=null,r.state={isValidReply:!1},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){!this.props.isLoaded&&this.props.dispatch({type:"entry:comment:init-project-data"}),E.AutoSaver&&(
this.prevAutoSaverDelay=E.AutoSaver.getDelay(),E.AutoSaver.setDelay(500))}},{key:"componentDidUpdate",value:function(e){this.props.tempCommentThreadMarker&&!e.tempCommentThreadMarker&&this.focusReply()}},{key:"componentWillUnmount",value:function(){E.AutoSaver&&E.AutoSaver.setDelay(this.prevAutoSaverDelay)}},{key:"render",value:function(){var o=this,e=this.props,t=e.screenName,a=e.commentThreadList,l=e.commentListMap,n=e.permissionPack,r=e.isLoaded,i=e.focusCommentThreadCid,s=e.focusSource,
c=e.tempCommentThreadMarker
if(!r)return f.default.createElement(T,null)
var u=i||c&&c.cid,d=0!==a.length
return f.default.createElement(T,null,d&&f.default.createElement("div",{className:"comment-title"},"".concat(t," (").concat(a.length,")")),d&&f.default.createElement("div",{ref:this.setScrollRef,className:"comment-thread"},a.map(function(e,t){var a=l[e.cid]||[],n=t+1,r="marker"===s&&u===e.cid,i="marker"===s&&null!==u&&!r
return f.default.createElement(S.CommentThread,{key:e.cid,commentThreadCid:e.cid,commentMarkerIndex:n,isScrollFocus:r,isBlur:i,commentList:a,permission:o.commentOperations.getPermission(e.user_id),commentOperations:o.commentOperations})})),!d&&f.default.createElement("div",{className:"comment-thread-empty"},f.default.createElement("img",{src:_}),f.default.createElement("h3",null,k.preview.comment.add_comment),f.default.createElement("span",null,n.permissionDenyMessage||(
n.userAuthStatus===w.USER_AUTH_STATUS_NOT_SIGN_IN?k.preview.comment.thread_none_tip_signin:k.preview.comment.thread_none_tip))),n.isProjectAllowComment?this.renderContentReply():d?f.default.createElement("div",{className:"reply-footer"},f.default.createElement("span",null,k.renew_prompt.comment_deny_permission)):null,f.default.createElement(S.CommentHeaderGlobalStyle,null))}}]),t}(f.PureComponent)
t.CommentLayer=C,(0,d.default)(C,"propTypes",{isLoaded:p.default.bool,permissionPack:p.default.object,getUserProfile:p.default.func,screenName:p.default.string,commentThreadList:p.default.array,commentListMap:p.default.object,focusCommentThreadCid:p.default.string,focusSource:p.default.string,tempCommentThreadMarker:p.default.object,dispatch:p.default.func})
var T=h.default.div.withConfig({displayName:"CommentLayer__CommentPanelDiv",componentId:"wnjiq4-0"})([
"position:relative;display:flex;flex-flow:column;width:260px;height:100%;font-size:12px;background-color:#fff;box-shadow:0 -2px 30px rgba(39,54,78,0.11);z-index:1;& > .comment-title{display:flex;align-items:center;height:50px;margin:0 20px;border-bottom:1px solid #d9d9d9;}& > .comment-thread{flex:1;overflow-y:auto;padding:0 20px;}& > .comment-thread-empty{flex:1;display:flex;flex-flow:column;align-items:center;justify-content:center;& > img{width:90px;margin:0 10px;}& > h3{padding:10px;}& > span{padding:0 10px;text-align:center;}}& > .reply-footer{display:flex;align-items:flex-end;background:#fff;border-top:1px solid #eaebed;padding:10px 14px;box-shadow:0 -2px 10px rgba(26,58,109,0.12);& > div{margin:0 8px -4px 0;width:174px;max-height:120px;> label{"
,";& > textarea{padding:3px 8px;min-height:28px;}}}& > button{flex:1;height:28px;font-size:12px;}}"],(0,m.placeholder)({color:"#a9afb8"})),x=function(){window.location.href="/signin?next=".concat(window.location.pathname)},_="/images/preview/no-comment@2x.png"},"3xoc":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getDarkerButton=void 0
var r=n(a("q1tI")),i=a("6XO9"),o={backgroundColor:"#5b6b73"},l={opacity:.6}
t.getDarkerButton=function(e,t,a){return r.default.createElement(i.Button,{type:"primary",style:a?l:o,onClick:t,disabled:a},e)}},"43RC":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("TSYQ")),m=r(a("i6OX")),v=a("5hhZ"),g=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(a),"handleClick",function(){var e=a.props,t=e.isMinimized;(0,e.onClick)(!t)}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.placement,a=e.isMinimized,n="left"===t?"angle-right":"angle-left"
return p.default.createElement(v.StyledToggleButton,{className:(0,h.default)(t,{"is-minimized":a}),onClick:this.handleClick},p.default.createElement(m.default,{type:"fa",name:n,className:"toggle-icon"}))}}]),i}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{placement:i.default.oneOf(["left","right"]),isMinimized:i.default.bool,onClick:i.default.func})},"4QcC":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),i=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=n(a("q1tI")),p=r(a("DKAG")),h=r(a("17x9")),m=a("i6OX"),v=r(a("Lyer")),g=r(a("EDI8")),y=r(a("UbMB")).default.bind(g.default),b=MB.config.SCALES,S=function(e){function t(){var i
return(0,o.default)(this,t),i=(0,l.default)(this,(0,s.default)(t).call(this)),(0,d.default)((0,c.default)(i),"handleZoomIn",function(){var e=i.props,t=e.scale,a=e.dispatch,n=e.fromFullScreen
MB.event("preview","工具栏 :点击缩放"),n&&MB.event("preview","工具栏 :全屏模式缩放")
var r=b.findIndex(function(e){return t<e})
a({type:"entry:preview:set:scale",payload:{scale:b[r]||b[b.length-1]}})}),(0,d.default)((0,c.default)(i),"handleZoomOut",function(){var e=i.props,t=e.scale,a=e.dispatch,n=e.fromFullScreen
MB.event("preview","工具栏 :点击缩放"),n&&MB.event("preview","工具栏 :全屏模式缩放")
var r=b.findIndex(function(e){return t<=e})
a({type:"entry:preview:set:scale",payload:{scale:b[r-1]||b[0]}})}),(0,d.default)((0,c.default)(i),"handleResetScale",function(){(0,i.props.dispatch)({type:"entry:preview:set:scale",payload:{scale:100}})}),(0,d.default)((0,c.default)(i),"handleKeyDown",function(e){w(e,i.handleZoomIn,i.handleZoomOut,i.handleResetScale)}),i.state={isGuideShow:!1},i}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this
this.props.fromFullScreen||(this.openGuideTimer=setTimeout(function(){e.setState({isGuideShow:!0})},600))}},{key:"componentWillUnmout",value:function(){clearTimeout(this.openGuideTimer)}},{key:"render",value:function(){var e=this.props.scale,t=this.state.isGuideShow,a=e<400,n=20<e
return f.default.createElement(v.default,{id:"preview-zoom",localeKey:"zoom",X:"left",isOpen:t,gotItBtn:!0,noCloseBtn:!0},f.default.createElement("div",{className:y("zoom-count","preview-zoom-btn")},f.default.createElement("a",{id:"zoomout",disabled:!n,title:I18N.zoomout,onClick:this.handleZoomOut,className:"scale-icon"},f.default.createElement(m.SVGIcon,{name:"design/scale_reduce"})),f.default.createElement("span",null,"".concat(Math.round(e),"%")),f.default.createElement("a",{id:"zoomin",disabled:!a,
title:I18N.zoomin,onClick:this.handleZoomIn,className:"scale-icon"},f.default.createElement(m.SVGIcon,{name:"design/scale_enlarge"})),f.default.createElement(p.default,{target:document,onKeyDown:this.handleKeyDown})))}}]),t}(f.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{scale:h.default.number,fromFullScreen:h.default.bool,dispatch:h.default.func}),(0,d.default)(S,"defaultProps",{fromFullScreen:!1})
var w=function(e,t,a,n){(e.ctrlKey||e.metaKey)&&(187==e.keyCode&&(e.preventDefault(),t()),189==e.keyCode&&(e.preventDefault(),a()),48==e.keyCode&&(e.preventDefault(),n()))}},"4WDG":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var R=r(a("J4zp")),i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),L=n(a("q1tI")),j=r(a("DKAG")),A=r(a("foKU")),O=r(a("tBsX")),B=a("oose"),D=r(a("dYO+")),F=r(a("DdUa")),q=r(a("kJQk")),W=r(a("9ZUU")),U=r(a("TSYQ"))
a("fSKh")
var p=function(e){function t(){var n
return(0,i.default)(this,t),n=(0,l.default)(this,(0,s.default)(t).call(this)),(0,d.default)((0,c.default)(n),"handleKeyDown",function(e){var t=n.props.dispatch,a=e.target.matches("input")||e.target.matches("textarea")
32===e.keyCode&&!a&&(e.preventDefault(),t({type:"preview:set:key:flags",payload:{isSpaceDown:!0}}))}),(0,d.default)((0,c.default)(n),"handleKeyUp",function(e){n.props.dispatch({type:"preview:reset:key:flags"})}),(0,d.default)((0,c.default)(n),"handleMouseDown",function(e){var t=n.props.isSpaceDown;(1===e.button||t)&&n.initDraggingCanvas(e)}),(0,d.default)((0,c.default)(n),"handleScaleChange",function(e){n.props.dispatch({type:"entry:preview:set:scale",payload:{scale:e}})}),(0,d.default)((0,c.default)(n),
"handleOffsetChange",function(e,t){n.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:{x:e,y:t}}})}),n.state={isDraggingCanvas:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"initDraggingCanvas",value:function(e){var a=this,n=e.clientX,r=e.clientY,t=this.props.canvasOffset,i=t.x,o=t.y
this.setState({isDraggingCanvas:!0})
var l=function(e){var t={x:i+(e.clientX-n),y:o+(e.clientY-r)}
a.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:t}})}
document.addEventListener("mousemove",l),document.addEventListener("mouseup",function e(t){a.setState({isDraggingCanvas:!1}),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)})}},{key:"render",value:function(){var e=this.props,t=e.scale,a=e.canvasOffset,n=e.project,r=e.screen,i=e.isSpaceDown,o=e.isStickyShow,l=e.isScrollable,s=e.shellType,c=e.isLayerActive,u=e.isCommentActive,d=e.isColorPickerActive,f=e.isFullScreenMode,p=e.isLayerPreview,h=this.state.isDraggingCanvas,
m=a.x,v=a.y,g="landscape"===r.orientation,y=c||u,b=y||!l?"none":s,S=n.width,w=n.height,E=g?[w,S]:[S,w],k=(0,R.default)(E,2),C=k[0],T=k[1],x={width:C,height:T,minWidth:C,minHeight:T,transform:"matrix(1, 0, 0, 1, ".concat(m,", ").concat(v,")")},_={transform:"scale(".concat(t/100,")")},M={width:"".concat(t,"%"),height:"".concat(t,"%")},P={width:r.width*t/100,height:r.height*t/100},I=(0,U.default)({"wait-drag":i||h,"is-immersive":y,"is-layer-active":c,"is-screen-expanded":y||!l}),N=(0,U.default)("ui-layers",{
"is-shadow":!("default"===b&&p),"is-active":c})
return L.default.createElement(A.default,{x:m,y:v,scale:t,id:"simulator-container",className:I,isDisabled:h,onMouseDown:this.handleMouseDown,onScaleChange:this.handleScaleChange,onOffsetChange:this.handleOffsetChange},function(e,t,a){return L.default.createElement("div",{key:"1",className:(0,U.default)("screen-viewport",{"is-fullscreen":f,"is-geely":"car_play"===n.model}),style:x},L.default.createElement("div",{className:"zoom-area",style:_},L.default.createElement(F.default,null),
!y&&L.default.createElement(D.default,{project:n,shellType:b,isLandscape:g}),o&&L.default.createElement(W.default,null)),L.default.createElement("div",{className:"no-zoom-area-wrapper",style:M},L.default.createElement("div",{className:"no-zoom-area",style:P},L.default.createElement("div",{id:"ui-layers",className:N},d&&L.default.createElement(q.default,null),c&&!d&&L.default.createElement(O.default,null)),L.default.createElement("div",{id:"ui-comment-marker-panel"},L.default.createElement(
B.CommentMarkerPanelContainer,{isActive:u,scale:a/100})))))},L.default.createElement(j.default,{target:document,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}))}}]),t}(L.PureComponent);(t.default=p).propTypes={scale:f.default.number,canvasOffset:f.default.object,screen:f.default.object,project:f.default.object,shellType:f.default.string,isStickyShow:f.default.bool,isScrollable:f.default.bool,isLayerPreview:f.default.bool,isSpaceDown:f.default.bool,isLayerActive:f.default.bool,
isCommentActive:f.default.bool,isColorPickerActive:f.default.bool,dispatch:f.default.func,isFullScreenMode:f.default.bool}},"4YeV":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.ProjectAlike,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:projects:update",payload:i(e,r,o)})})},u={entryMap:{"projects:refresh":c(r.refreshStateList,!1),"projects:add":c(r.addState,!1),"projects:add-local":c(r.addState,!0),"projects:update":c(r.updateState,!1),"projects:update-local":c(r.updateState,!0),"projects:delete":c(r.deleteState,!1),"projects:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},"4daP":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.playSettingEntry=void 0
var o=a("upRB"),l=a("7Qib"),s="preview-is-scrollable",c="preview-is-stickyshow",u="preview-is-highlight",d="preview-shell-type",n={"entry:init:preview-setting":function(e){var t=e.getState,a=e.dispatch,n=t(),r=(0,o.getCurrentProject)(n),i=(0,l.localStorageGetItem)(d)?(0,l.localStorageGetItem)(d):r.shell_type
a({type:"reducer:preview-toolbar:update",payload:{isScrollable:"false"!==(0,l.localStorageGetItem)(s),isStickyShow:"false"!==(0,l.localStorageGetItem)(c),isHighlight:(0,l.localStorageGetItem)(u)?"false"!==(0,l.localStorageGetItem)(u):r.highlight,shellType:i}})},"entry:preview-setting:update:is-highlight":function(e,t){var a=e.dispatch,n=t.payload.isHighlight;(0,l.localStorageSetItem)(u,n),a({type:"reducer:preview-toolbar:update",payload:{isHighlight:n}})},"entry:preview-setting:update:shell-type":function(e
,t){var a=e.dispatch,n=t.payload.shellType;(0,l.localStorageSetItem)(d,n),a({type:"reducer:preview-toolbar:update",payload:{shellType:n}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-scrollable":function(e,t){var a=e.dispatch,n=t.payload.isScrollable;(0,l.localStorageSetItem)(s,n),a({type:"reducer:preview-toolbar:update",payload:{isScrollable:n}}),setTimeout(function(){MB.runner.reload()})},"entry:preview-setting:update:is-sticky-show":function(e,t){var a=e.dispatch,
n=t.payload.isStickyShow;(0,l.localStorageSetItem)(c,n),a({type:"reducer:preview-toolbar:update",payload:{isStickyShow:n}})}}
t.playSettingEntry=n},"4dyd":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("UJpD")),m=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleResize",function(){var e=t.elem.getBoundingClientRect()
t.props.onResize(e)}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.elem.contentWindow.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){var e=this.elem.contentWindow
e&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var t=this
return p.default.createElement("iframe",{ref:function(e){return t.elem=e},className:h.default.detector})}}]),i}(p.PureComponent);(t.default=m).propTypes={onResize:i.default.func.isRequired}},"4sCl":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),m=n(a("q1tI")),v=r(a("TSYQ")),g=r(a("SFPg")),p=a("/5+U"),y=a("veUc")
a("oKLx")
var h=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"state",{ifHideLayer:!1}),(0,f.default)((0,u.default)(t),"onMouseLeave",function(){"number"==typeof t.props.activeLayerID?t.props.enterLayer("artboard-base"):t.props.enterLayer(t.props.currentScreen.cid)}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentWillReceiveProps",value:function(e){var t=e.currentScreen,a=e.activeLayerID,n=this.props,r=n.currentScreen,i=n.enterLayer
t!=r&&i(-1),-1!==a&&a?this.setState({ifHideLayer:!1}):this.setState({ifHideLayer:!0})}},{key:"render",value:function(){var e=this.props,t=e.isShowLayerList,a=e.layers,n=e.currentScreen,r=e.unit,i=e.ratio,o=e.activeLayerID,l=e.enteredLayerID,s=e.enterLayer,c=e.requestSelectLayer,u=e.handleShowlayerInfo,d=this.state.ifHideLayer,f=(0,y.transformLayersFormat)(a),p=b(r,i,s,o,l,c,u),h={top:0,left:0,width:n.width,height:n.height}
return m.default.createElement("div",{className:(0,v.default)("LayerList",{hiddenLayer:d&&t}),onMouseLeave:this.onMouseLeave},f.map(function(e){return m.default.createElement(g.default,{key:e.id,layer:e,parentRect:h,treeProps:p})}))}}]),i}(m.Component)
t.default=h,(0,f.default)(h,"propTypes",{isSpaceDown:i.default.bool,layers:i.default.array,requestSelectLayer:i.default.func,resetLayer:i.default.func,artboard:i.default.object,enterLayer:i.default.func,handleShowlayerInfo:i.default.func,currentScreen:i.default.object,activeLayerID:i.default.oneOfType([i.default.number,i.default.string]),enteredLayerID:i.default.oneOfType([i.default.number,i.default.string]),isShowLayerList:i.default.bool,unit:i.default.string,ratio:i.default.number,dispatch:i.default.func}
)
var b=(0,p.immutableTransformCache)(function(e,t,a,n,r,i,o){return{unit:e,ratio:t,enterLayer:a,activeLayerID:n,enteredLayerID:r,requestSelectLayer:i,handleShowlayerInfo:o}})},"4vJh":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"reducer:preview-panel:search":return(0,r.default)({},e,n)
case"reducer:preview-panel:reset":return i
default:return e}}
var r=n(a("MVZn")),i={screenSearch:""}},"4x8W":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case"event-sign-up:close:modal":return(0,r.default)({open:!1},e)
case"event-sign-up:set:event":return t.payload
default:return e}}
var r=n(a("MVZn")),i={open:!1,event:{}}},"5Mi5":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("a1gu")),l=n(a("Nsbk")),s=n(a("7W2i")),c=n(a("lSNA")),u=n(a("17x9")),d=a("q1tI"),f=a("2EV6"),p=window.key,h="preview",m=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch
p.setScope(h),p("command+enter, ctrl+enter",h,function(){e({type:"entry:enter:full-screen-mode"})}),p("command+p, ctrl+p",h,function(){return!1}),p("esc",h,function(){if("project"===(0,f.getProjectType)(MB.currentProject))return e({type:"entry:preview:escape:key"}),!1})}},{key:"componentWillUnmount",value:function(){p.deleteScope(h),p.setScope("design")}},{key:"render",value:function(){return null}}]),t}(d.PureComponent)
t.default=m,(0,c.default)(m,"propTypes",{dispatch:u.default.func})},"5hhZ":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledToggleButton=void 0
var r=n(a("vOnD")).default.div.withConfig({displayName:"styles__StyledToggleButton",componentId:"sc-1g67xqq-0"})([
"position:absolute;z-index:1;cursor:pointer;display:flex;align-items:center;justify-content:center;top:50%;margin-top:-46px;width:14px;height:93px;background:#fff;&.left{right:100%;border-top-left-radius:35px;border-bottom-left-radius:35px;}&.right{left:100%;border-top-right-radius:35px;border-bottom-right-radius:35px;}.toggle-icon{width:10px;font-size:18px;color:#8d9ea7;text-align:center;transform:rotate(0);transition:transform 0.5s ease;}&.is-minimized{.toggle-icon{transform:rotate(180deg);}}"])
t.StyledToggleButton=r},6:function(e,t,a){a("55Il"),e.exports=a("Z3xQ")},"6PGs":function(e,t,a){e.exports={"screen-info":"_1AJNH2RNIDeT2zJnKkRP2E"}},"6UMJ":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.keyEntry=void 0
var r=a("upRB"),n={"entry:preview:escape:key":function(e){var t=e.getState,a=e.dispatch,n=t();(0,r.getIsFullScreenMode)(n)?(a({type:"reducer:preview-toolbar:fullscreen",payload:{isFullScreenMode:!1}}),a({type:"entry:init:preview:scale"}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})):MB.designer&&MB.designer.backDesign()}}
t.keyEntry=n},"6Y1W":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("x3zb")),m=r(a("ibfc")),v=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(r),"handleHomeScreenLoad",function(e){console.log("HomeScreenLoad",e),MB.runner.doneTransition(e)}),(0,d.default)((0,c.default)(r),"handleTransitionEnd",function(e){var t=r.props.transition,a=t.name,n=t.callback;/(menu|drawer)-reverse/.test(a)&&(console.log("menu - closed"),MB.runner.currentMenu=MB.runner.currentScreen=null),console.log("transition - end"),MB.runner.doneTransition(e),n&&n()}),
r.state={prevScreenCid:"",currentScreenCid:e.activeCid},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){console.log("mb runner did mount",{props:this.props.activeCid,state:this.state.currentScreenCid})}},{key:"componentWillUnmount",value:function(){console.log("mb runner will unmount")}},{key:"render",value:function(){var e=this.props,t=e.screenInfoMap,a=e.transition,o=e.widgetQueryMap,n=this.state,l=n.prevScreenCid,s=n.currentScreenCid
return s?p.default.createElement(h.default,{activeCid:s,transition:a,onHomeScreenLoad:this.handleHomeScreenLoad,onTransitionEnd:this.handleTransitionEnd},function(r,i){return Object.values(t).map(function(e){var t=e.cid===l,a=e.cid===s,n=t?r:a?i:null
return p.default.createElement(m.default,{key:e.cid,isShow:t||a,screen:e,style:n,isActive:s===e.cid,widgetQueryMap:o})})}):null}}]),t}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{widgetQueryMap:f.default.object,screenInfoMap:f.default.object,activeCid:f.default.string,transition:f.default.object}),(0,d.default)(v,"getDerivedStateFromProps",function(e,t){return e.activeCid!==t.currentScreenCid?{prevScreenCid:t.currentScreenCid,currentScreenCid:e.activeCid}:null})},"6ZRU":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("MVZn")),i=a("/MKj"),o=n(a("/cyv")),l=n(a("HfeQ")),s={Alert:(0,i.connect)(function(e){return(0,r.default)({},e.container.alert)})(l.default)},c={reducers:o.default,containers:s}
t.default=c},"6gQ3":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("rESR")),o=a("/5+U"),l=(0,r.connect)(function(e){var t=e.model,a=t.user,n=t.current.projectCid,r=t.projects,i=t.screens,o=e.container,l=o.common.offset,s=o.previewSetting.toolbarActiveItem,c=!!a.id,u=Boolean(l.x||l.y),d=h(r,n),f=p.has(d.access_token)
return{isLoggedIn:c,isDisplaced:u,screensCount:i.reduce(function(e,t){return t.project_cid===n?e+1:e},0),project:d,isDemo:f,toolbarActiveItem:s}})(i.default)
t.default=l
var p=new Set(["demo","cS1AXKF5jtrJePbEKiYcdcHosQPdzrk","workout","sI3GY2tDz76RrZ4MGFiIcZTZpAHyluC","UMQzYmknxWeHNvvVyeyJDuSkgyvi6Xw","9Py1L5RdC8ZPRSmnWEt4uuUUSDUAxkM"]),h=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})})},"6iHT":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentHeaderGlobalStyle=t.ContentHeader=t.ContentMessage=t.commonContentFooter=void 0
var i=r(a("VkAN")),l=r(a("q1tI")),o=r(a("17x9")),s=n(a("vOnD")),c=a("6XO9"),u=r(a("zkrS")),d=r(a("i6OX")),f=a("wYtL"),p=a("FC/4"),h=a("3xoc")
function m(){var e=(0,i.default)(["\n  .comment-header-edit li:hover { color: #1e98ea; }\n  .comment-header-delete li:hover { color: #eb5648; }\n"])
return m=function(){return e},e}var v=u.default.I18N,g=u.default.L10N
t.commonContentFooter=function(e,t,a,n,r){return[l.default.createElement(y,{key:"footer"},g.parseTimeAgo(1e3*e.updated_at),n&&l.default.createElement(b,{onClick:t?r:n},l.default.createElement(d.default,{type:"dora",name:"reply"}),t?v.preview.comment.cancel_reply:v.preview.comment.comment_create)),t&&l.default.createElement(S,{key:"reply"},l.default.createElement(p.TextEditComponent,{textEditStore:t,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),(0,
h.getDarkerButton)(v.preview.comment.comment_create,t.endEdit,!a))]}
var y=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentFooterDiv",componentId:"sc-1lkzl71-0"})(["display:flex;align-items:center;justify-content:space-between;padding:0 10px 10px;line-height:20px;color:#8d9ea7;opacity:0.75;"]),b=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ReplyToggleDiv",componentId:"sc-1lkzl71-1"})(["cursor:pointer;&:hover,&:active{color:#525e71;}> span{margin-right:6px;opacity:0.5;}"]),S=s.default.div.withConfig({
displayName:"CommentLayerThreadContent__ReplyDropdownDiv",componentId:"sc-1lkzl71-2"})(["padding:10px 0;background:#fff;> button{width:100%;height:24px;font-size:12px;}"]),w=function(e){var t=e.sub,a=e.comment,n=e.textEditStore,r=e.cancelEdit
return l.default.createElement(E,{className:t?"sub":""},n?l.default.createElement(C,null,l.default.createElement(p.TextEditComponent,{textEditStore:n,placeholder:v.preview.comment.comment_placeholder,minHeight:60,autoHeight:!0,multiline:!0}),l.default.createElement(T,null,l.default.createElement(c.Button,{onClick:r},v.preview.comment.cancelEdit),l.default.createElement(c.Button,{type:"primary",onClick:n.endEdit},v.preview.comment.updateEdit))):l.default.createElement(k,null,a.message))};(t.ContentMessage=w
).propTypes={sub:o.default.bool,comment:o.default.object,textEditStore:o.default.object,cancelEdit:o.default.func}
var E=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentMessageDiv",componentId:"sc-1lkzl71-3"})(["display:flex;flex-flow:column;width:100%;height:auto;color:#5b6b73;white-space:nowrap;text-overflow:ellipsis;span{padding:10px;}&.sub span{padding:0 10px 10px;}"]),k=s.default.span.withConfig({displayName:"CommentLayerThreadContent__EditableSpanSpan",componentId:"sc-1lkzl71-4"})(["user-select:text;word-break:break-all;white-space:pre-line;text-overflow:ellipsis;"]),
C=s.default.div.withConfig({displayName:"CommentLayerThreadContent__EditableSpanDiv",componentId:"sc-1lkzl71-5"})(["background:#fff;> textarea{margin-bottom:5px;padding:10px;border:1px solid #d3dce6;}"]),T=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ButtonPanelDiv",componentId:"sc-1lkzl71-6"})(["display:flex;justify-content:flex-end;width:100%;> button{width:60px;height:24px;font-size:12px;margin-left:10px;}"]),x=function(e){var t=e.sub,a=e.avatar,n=e.name,r=e.markIndex,i=e.startEdit,
o=e.doDelete
return l.default.createElement(_,{className:t?"sub":""},l.default.createElement(I,null,l.default.createElement("img",{src:a,width:24,height:24}),l.default.createElement("div",null,r&&l.default.createElement("span",{className:"index"},"#".concat(r)),l.default.createElement("span",{className:"name"},n))),l.default.createElement(M,null,i&&l.default.createElement(N,{onSelect:i,menuClassName:"comment-header-edit",iconName:"cog",text:v.preview.comment.modify_edit}),o&&l.default.createElement(N,{onSelect:o,
menuClassName:"comment-header-delete",iconName:"trash",text:v.preview.comment.modify_delete})))};(t.ContentHeader=x).propTypes={avatar:o.default.string,name:o.default.string,markIndex:o.default.number,startEdit:o.default.func,doDelete:o.default.func,sub:o.default.bool}
var _=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderDiv",componentId:"sc-1lkzl71-7"})(["display:flex;justify-content:space-between;padding-bottom:10px;width:100%;&.sub{padding:10px;}"]),M=s.default.div.withConfig({displayName:"CommentLayerThreadContent__ContentHeaderEditDiv",componentId:"sc-1lkzl71-8"})(["display:flex;align-items:center;.icon{color:#c8cdd0;margin-left:5px;&:hover,&:active{color:#8d9ea7;}}"]),P=(0,s.createGlobalStyle)(m())
t.CommentHeaderGlobalStyle=P
var I=s.default.div.withConfig({displayName:"CommentLayerThreadContent__UserInfoDiv",componentId:"sc-1lkzl71-9"})(["display:flex;height:24px;> img{margin-right:10px;border-radius:100%;}> div{display:flex;flex-flow:column;justify-content:center;max-height:24px;font-weight:bold;line-height:12px;.index{vertical-align:middle;color:#f55d54;}.name{max-width:140px;color:#5b6b73;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}"]),N=function(e){var t=e.onSelect,a=e.text,n=e.iconName,r=e.menuClassName
return l.default.createElement(f.Tooltip,{content:{hover:a},duration:1e3},l.default.createElement(c.Dropdown,{opener:l.default.createElement(d.default,{type:"dora",name:n}),onSelect:t,menuClassName:r,menuList:[a],menuX:"left",arrowed:!0}))}
N.propTypes={onSelect:o.default.func.isRequired,text:o.default.string.isRequired,iconName:o.default.string.isRequired,menuClassName:o.default.string.isRequired}},"7Rdd":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(a("q1tI")),r=n(a("17x9")),l=a("1qiG"),i=function(e){var t=e.refRect,a=e.screen,n=e.style,r=n.dashed,i=n.colorForLines
return o.default.createElement("div",{style:{position:"absolute",pointerEvents:"none",width:(0,l.toPercentage)(t.width/a.width),height:(0,l.toPercentage)(t.height/a.height),left:(0,l.toPercentage)(t.left/a.width),top:(0,l.toPercentage)(t.top/a.height),border:"1px ".concat(r?"dashed":"solid"," ").concat(i)}})}
i.propTypes={refRect:r.default.object,screen:r.default.object,style:r.default.object}
var s=i
t.default=s},"7bR1":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.setVisibilityScreen=v,t.default=C
var c=n(a("o0o1")),y=n(a("MVZn")),r=n(a("J2m7")),u=a("oZtI"),d=a("upRB"),f=a("JfQ8"),s=a("Kkl0"),b=a("jvRN"),p=a("7q5O"),h=c.default.mark(v),i=c.default.mark(g),m=c.default.mark(w),o=c.default.mark(E),l=c.default.mark(C),S=[]
function v(e){var t,a,n,r,i,v,g,o,l,s
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.select)()
case 2:if(t=e.sent,a=t.container.layers,n=a.resourceByScreen,r=a.visibilityScreenID,i=t.model.widgets,v=(0,d.getCurrentScreen)(t),n[r]&&!n[r].error){e.next=26
break}if(S.includes(r)){e.next=26
break}return S.push(r),e.prev=8,e.next=11,(0,u.call)(p.getLayerData,v,i)
case 11:return g=e.sent,o=(0,b.getMockingBotWidgets)(t),l=[{type:"screen",id:v.cid,name:v.name,top:0,left:0,width:v.width,height:v.height,src_left:0,src_top:0,src_width:g.artboard.width,src_height:g.artboard.height,bg_colors:[{value:(0,b.checkColor)(v.bgcolor)}]}].concat(g.layers).concat(o).reduce(function(e,t){var a=t.id,n=t.top,r=t.left,i=t.width,o=t.height
if("group"===t.name)return e.push(t),e
var l=(0,b.isSketchLayer)(a)?g.artboard.widgetWidth/g.artboard.width:1,s=n*l,c=r*l,u=i*l,d=o*l,f=Math.min(Math.max(c,0),v.width),p=Math.min(Math.max(c+u,0),v.width),h=Math.min(Math.max(s,0),v.height),m=Math.min(Math.max(s+d,0),v.height)
return p-f!=0&&m-h!=0&&e.push((0,y.default)({},t,{left:f,top:h,width:p-f,height:m-h,src_top:Number(parseFloat(Math.max(n,0)).toFixed(2)),src_left:Number(parseFloat(Math.max(r,0)).toFixed(2)),src_width:Number(parseFloat(Math.min(r+i,g.artboard.width)-Math.max(r,0)).toFixed(2)),src_height:Number(parseFloat(Math.min(n+o,g.artboard.height)-Math.max(n,0)).toFixed(2))})),e},[]),s=(0,y.default)({},g,{layers:l}),S.splice(S.indexOf(r),1),e.next=18,(0,u.put)((0,f.receiveResourceSuccess)(r,s))
case 18:e.next=26
break
case 20:return e.prev=20,e.t0=e.catch(8),console.log(e.t0.stack),S.splice(S.indexOf(r),1),e.next=26,(0,u.put)((0,f.receiveResourceError)(r,e.t0.message))
case 26:case"end":return e.stop()}},h,null,[[8,20]])}function g(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)(f.SET_VISIBILITY_SCREEN,v)
case 2:case"end":return e.stop()}},i)}function w(t){var a,n,r,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.layerID,e.next=3,(0,u.select)()
case 3:return n=e.sent,r=n.container.layers,i=r.resourceByScreen,o=r.visibilityScreenID,l=k(i[o].layers,a),e.next=9,(0,u.put)((0,s.selectLayer)(l))
case 9:return e.next=11,(0,u.put)((0,s.activateLayer)(l))
case 11:case"end":return e.stop()}},m)}function E(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)(s.REQUEST_SELECT_LAYER,w)
case 2:case"end":return e.stop()}},o)}var k=function(e,t){var a=(0,r.default)(e,{id:t})
if(!a||!a.parent||a.image_set_zip)return t
for(;a;){var n=(0,r.default)(e,{id:a.parent})
if(!n||!n.image_set_zip||!n.parent)return t
if(n.image_set_zip)return a.parent
a=n.parent}}
function C(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[g(),E()]
case 2:case"end":return e.stop()}},l)}},"7eYF":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=n(a("RIqP")),c=n(a("MVZn")),d=n(a("o0o1")),f=a("ANjH"),p=a("WVP6"),h=n(a("sINF")),m=n(a("7bO/")),r=a("/TnQ"),u=a("IV71"),v=a("mreW"),g=a("nU12"),y=(0,r.composeWithDevTools)({})
t.default=function(e){var t=e.viewMap,a=e.containerReducerMap,n=e.sagaMap,r=e.extendCallback,i=new u.WebpackInterface
if(t)for(var o in t)i.setView(o,t[o])
var l=function(e){var a,t=e.entryMap,n=e.reducerMap,r=e.sagaMap,i=(0,p.createReduxEntry)(),o=i.middleware;(0,i.setEntryMap)(t)
var l=[o]
r&&(a=(0,m.default)(),l.push(a))
var s=(0,f.createStore)((0,f.combineReducers)(n),y(f.applyMiddleware.apply(void 0,l.concat([h.default]))))
if(r){var c=function(t){a.run(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r[t]()
case 3:e.next=0
break
case 5:case"end":return e.stop()}},e)}))}
for(var u in r)c(u)}return{store:s}}({initialState:{model:{},container:{}},entryMap:(0,c.default)({},g.entryMap,v.entryMap,{"entry:webpack-interface:view:call":function(e,t){var a=t.payload
setTimeout(function(){return i.callViewMethod.apply(i,[a.name,a.method].concat((0,s.default)(a.args||{})))},0)}}),reducerMap:{model:(0,f.combineReducers)(g.reducerMap),container:(0,f.combineReducers)(a)},sagaMap:n}).store
return i.setStore(l),r&&r(i),i}},"7q5O":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getLayerData=void 0
var l=n(a("o0o1")),r=n(a("yXPU")),s=a("t3Un"),i=function(){var a=(0,r.default)(l.default.mark(function e(n,r){var i,o
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=n.artboard_id&&r.find(function(e){return e.screen_cid===n.cid&&"image_view"===e.name&&e.image&&-1!==e.image.indexOf(String("/artboard_"))}))){e.next=13
break}if(!window.MBArtboards){e.next=6
break}a=n.cid,o=window.MBArtboards[a],e.next=9
break
case 6:return e.next=8,t=n.artboard_id,(0,s.requestJSON)("".concat("/api/v2/sketch","/artboards/").concat(t,".json"))
case 8:o=e.sent
case 9:u(o,i),c(o),e.next=14
break
case 13:o={artboard:{top:0,left:0,width:n.width,height:n.height},layers:[],document:{document_colors:[],text_styles:[],global_colors:[]}}
case 14:return e.abrupt("return",o)
case 15:case"end":return e.stop()}var t,a},e)}))
return function(e,t){return a.apply(this,arguments)}}()
t.getLayerData=i
var c=function(e){e.layers.some(function(e){return e.z})?e.layers.sort(function(e,t){return e.z-t.z}):e.layers.sort(function(e,t){return parseInt(t.width)*parseInt(t.height)-parseInt(e.width)*parseInt(e.height)})},u=function(e,t){Object.assign(e.artboard,{widgetZ:t.z,widgetTop:t.top,widgetLeft:t.left,widgetWidth:t.width,widgetHeight:t.height}),e.layers.push({id:"artboard-base",name:e.artboard.name,type:"screen",top:0,left:0,z:t.z,width:e.artboard.width,height:e.artboard.height,bg_colors:[{value:t.bg}],
timestamp:t.timestamp+1})}},"80la":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"reducer:slice:success":return(0,r.default)({},e,n,{loading:!1})
case"reducer:slice:fail":return(0,r.default)({},e,n,{error:!0})
default:return e}}
var r=n(a("MVZn")),i={slices:[],loading:!0,error:!1}},"81q6":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("i6OX")),m=a("iLpg"),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"setInputRef",function(e){return t.$input=e}),(0,f.default)((0,u.default)(t),"focus",function(){return t.$input.focus()}),(0,f.default)((0,u.default)(t),"handleChange",function(e){t.props.onChange(e.target.value)}),(0,f.default)((0,u.default)(t),"handleClear",function(){t.props.onChange("")}),(0,f.default)((0,u.default)(t),"handleMouseDown",function(e){e.preventDefault()}),(0,f.default)((0,
u.default)(t),"handleKeyDown",function(e){"Escape"===e.key&&t.props.onExit&&t.props.onExit()}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.placeholder,n=e.className,r=e.inputStyle
return p.default.createElement(m.StyledSearchBar,{type:"search",className:n},p.default.createElement(h.default,{type:"dora",name:"scale",className:"search-icon"}),p.default.createElement("input",{ref:this.setInputRef,style:r,type:"text",value:t,placeholder:a,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),0<t.length&&p.default.createElement(h.default,{type:"dora",name:"times_fc",className:"clear-icon",onMouseDown:this.handleMouseDown,onClick:this.handleClear}))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{value:i.default.string,inputStyle:i.default.object,placeholder:i.default.string,className:i.default.string,onChange:i.default.func,onExit:i.default.func})},"8CMD":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("o0o1")),l=r(a("yXPU")),i=r(a("lwsE")),s=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),f=r(a("7W2i")),p=r(a("lSNA")),h=r(a("17x9")),m=n(a("q1tI")),v=a("qhQL"),g=a("2M3O"),y=(0,v.createAsyncTaskQueue)().pushTask,b=function(e){function a(e){var t
return(0,i.default)(this,a),t=(0,c.default)(this,(0,u.default)(a).call(this,e)),(0,p.default)((0,d.default)(t),"setElementRef",function(e){return t.$elem=e}),t.isUnmounted=!1,t.retryTimer=null,t}return(0,f.default)(a,e),(0,s.default)(a,[{key:"componentDidMount",value:function(){this.props.isVisible&&this.generateSnapshotTask()}},{key:"componentDidUpdate",value:function(e,t){this.props.isVisible&&(clearTimeout(this.retryTimer),this.generateSnapshotTask())}},{key:"componentWillUnmount",value:function(){
this.isUnmounted=!0,clearTimeout(this.retryTimer)}},{key:"generateSnapshotTask",value:function(){var i=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5
y((0,l.default)(o.default.mark(function e(){var t,a,n,r
return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.props,a=t.projectToken,n=t.screenCid,r=t.version,t.isVisible){e.next=3
break}return e.abrupt("return")
case 3:if(i.isUnmounted)return e.abrupt("return")
e.next=5
break
case 5:return e.next=7,(0,g.requestThumbnail)({imageElement:i.$elem,projectAccessToken:a,screenCid:n,version:r})
case 7:case"end":return e.stop()}},e)}))).catch(function(e){i.retryTimer=setTimeout(function(){i.generateSnapshotTask(2*t)},1e3*t)})}},{key:"render",value:function(){return m.default.createElement("img",{ref:this.setElementRef,src:"/images/preview/image-load.png"})}}]),a}(m.PureComponent)
t.default=b,(0,p.default)(b,"propTypes",{projectToken:h.default.string.isRequired,screenCid:h.default.string.isRequired,version:h.default.string,isVisible:h.default.bool.isRequired})},"8Fba":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=r(a("J4zp")),i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),c=r(a("Nsbk")),d=r(a("PJYZ")),u=r(a("7W2i")),f=r(a("lSNA")),h=n(a("q1tI")),m=r(a("DKAG")),p=r(a("17x9")),v=a("/5+U")
a("v8PR")
var g="hidden",y=function(e){function a(e){var u;(0,i.default)(this,a),u=(0,l.default)(this,(0,c.default)(a).call(this,e)),(0,f.default)((0,d.default)(u),"cancelColorPicker",function(e){u.imageCanvas.contains(e.target)||u.cancelPickerMode()}),(0,f.default)((0,d.default)(u),"cancelPickerMode",function(){return u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1}})}),(0,f.default)((0,d.default)(u),"renderImageCanvas",function(){var e=u.imageCanvas.getBoundingClientRect(),
t=e.width,a=e.height
u.lastCanvasRect={width:t,height:a},u.imageCanvas.width=t,u.imageCanvas.height=a,u.imageCtx.drawImage(u.image,0,0,t,a)}),(0,f.default)((0,d.default)(u),"calculateCenterPoint",function(e){var t=u.image.getBoundingClientRect(),a=t.left,n=t.top
u.centerPoint={centerX:Math.floor(e.clientX-a),centerY:Math.floor(e.clientY-n)}}),(0,f.default)((0,d.default)(u),"handleMove",function(e){u.image.complete&&u.state.visibility===g&&u.setState({visibility:"visible"}),u.calculateCenterPoint(e)
var t=u.props,a=t.glassHeight,n=t.glassWidth,r=t.scale,i=u.centerPoint,o=i.centerX,l=i.centerY,s=Math.floor(o-n/2),c=Math.floor(l-a/2)
u.setState({glassLeft:s,glassTop:c}),l<0&&u.clearGlassRect(),u.glassCtx.clearRect(0,0,n,a),r<1&&console.warn("Can't make the galss scale less than 1, It will make bed invision"),C(u.glassCtx,!1),u.glassCtx.drawImage(u.imageCanvas,Math.floor(o-n/2/u.finallyScale),Math.floor(l-a/2/u.finallyScale),Math.floor(n/u.finallyScale),Math.floor(a/u.finallyScale),-5,-5,n,a),k(u.glassCtx,"lightgray",10,10),T(u.glassCtx),x(u.glassCtx,"black",Math.floor((n-10)/2),Math.floor((a-10)/2),10,10),u.getColor()}),(0,f.default)((0
,d.default)(u),"getColor",function(){var e=u.centerPoint,t=e.centerX,a=e.centerY,n=u.imageCtx.getImageData(t,a,1,1).data,r=b(n),i=r.rgba,o=r.R,l=r.G,s=r.B
u.setState({color:i,R:o,G:l,B:s}),u.color=i}),(0,f.default)((0,d.default)(u),"handleClick",function(){u.getColor()
var e=u.color,t=(0,v.saveRecentColor)(e),a=t.history,n=t.focusColor
clearTimeout(u.timeoutToken),u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:a,focusColor:n}}),u.timeoutToken=setTimeout(function(){u.props.dispatch({type:"reducer:preview-toolbar:update",payload:{userPickColor:a,focusColor:null}})},1e3)}),(0,f.default)((0,d.default)(u),"clearGlassRect",function(){var e=u.props,t=e.glassHeight,a=e.glassWidth
u.glassCtx.clearRect(0,0,a,t),u.setState({visibility:g})}),(0,f.default)((0,d.default)(u),"handleMouseLeave",function(){u.clearGlassRect()}),(0,f.default)((0,d.default)(u),"handleKeyDown",function(e){"escape"===e.key.toLowerCase()&&(u.clearGlassRect(),u.cancelPickerMode())}),(0,f.default)((0,d.default)(u),"handleLoad",function(){u.renderImageCanvas()}),(0,f.default)((0,d.default)(u),"handleError",function(){u.cancelPickerMode()})
var t=u.props.scale
return u.iamgeContainerRef=function(e){return u.image=e},u.getImageCanvasRef=function(e){return u.imageCanvas=e},u.glassCanvasRef=function(e){return u.glassCanvas=e},u.finallyScale=10*(t<1?1:t),u.state={visibility:g,glassLeft:0,glassTop:0,color:"#fff",R:0,G:0,B:0},u}return(0,u.default)(a,e),(0,o.default)(a,[{key:"componentDidMount",value:function(){this.imageCtx=this.imageCanvas.getContext("2d"),this.glassCtx=this.glassCanvas.getContext("2d")}},{key:"componentDidCatch",value:function(e){console.log(e),
this.cancelPickerMode()}},{key:"componentDidUpdate",value:function(){if(this.imageCanvas){var e=this.imageCanvas.getBoundingClientRect(),t=e.width,a=e.height,n=this.lastCanvasRect||{width:0,height:0},r=n.width,i=n.height
r==t&&i==a||(this.clearGlassRect(),this.renderImageCanvas())}else this.handleError()}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.glassWidth,r=e.glassHeight,i=e.src,o=this.state,l=o.visibility,s=o.glassLeft,c=o.glassTop,u=o.color,d=o.R,f=o.G,p=o.B
return h.default.createElement("div",{className:"mb-picker-container"},h.default.createElement("img",{ref:this.iamgeContainerRef,className:"mb-picker-image",width:t,height:a,src:i,onLoad:this.handleLoad,onError:this.handleError}),h.default.createElement("canvas",{ref:this.getImageCanvasRef,onMouseMove:this.handleMove,onMouseLeave:this.handleMouseLeave,onClick:this.handleClick,style:{width:t,height:a,opacity:0}}),h.default.createElement("div",{className:"mb-glass",style:{width:n,height:r,visibility:l,left:s,
top:c}},h.default.createElement("div",{className:"shadow"}),h.default.createElement("canvas",{ref:this.glassCanvasRef,width:n,height:r,style:{width:n,height:r}}),h.default.createElement("div",{style:{top:r/2+15},className:"mb-glass-text"},h.default.createElement("div",{className:"mb-rgba-color"},"R:".concat(d," G:").concat(f," B:").concat(p," ").concat(String(w(u).hex).toUpperCase())))),h.default.createElement(m.default,{target:document,onKeyDown:this.handleKeyDown,onClick:this.cancelColorPicker}))}}]),a}(
h.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{src:p.default.string,width:p.default.oneOfType([p.default.string,p.default.number]),height:p.default.oneOfType([p.default.string,p.default.number]),glassHeight:p.default.number,glassWidth:p.default.number,scale:p.default.number,dispatch:p.default.func}),(0,f.default)(y,"defaultProps",{src:"/sec3.png",width:1300,height:769,glassWidth:200,glassHeight:200,scale:1,pickColor:function(e){return console.log(e)}})
var b=function(e){return e[3]=parseFloat(e[3]/255),{rgba:"rgba(".concat(e.join(", "),")"),R:e[0],G:e[1],B:e[2]}},S=/rgba?\((\d+),(\d+),(\d+),?(\d+)?/,w=function(e){var t=S.exec(e.replace(/ /g,"").toLowerCase())
if(!t||!t[3])return e
var a=(0,s.default)(t,5),n=a[1],r=a[2],i=a[3],o=a[4],l=void 0===o?"1":o
return{hex:"#".concat(E(n)).concat(E(r)).concat(E(i)),o:Number(l)}},E=function(e){var t=parseInt(e,10).toString(16)
return 1===t.length?"0".concat(t):t},k=function(e,t,a,n){e.strokeStyle=t,e.lineWidth=.5
for(var r=a+5.5;r<e.canvas.width-a;r+=a)e.beginPath(),e.moveTo(r,0),e.lineTo(r,e.canvas.height),e.stroke()
for(var i=n+5.5;i<e.canvas.height-a;i+=n)e.beginPath(),e.moveTo(0,i),e.lineTo(e.canvas.width,i),e.stroke()},C=function(e,t){e.mozImageSmoothingEnabled=t,e.webkitImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t,e.imageSmoothingEnabled=t},T=function(e){e.beginPath(),e.strokeStyle="#8D9EA7",e.lineWidth=8,e.arc(100,100,96,0,2*Math.PI),e.stroke(),e.strokeStyle="#D4D7DC",e.lineWidth=5,e.arc(100,100,96,0,2*Math.PI),e.stroke()},x=function(e,t,a,n,r,i){e.beginPath(),a+=.5,n+=.5,e.strokeStyle=t,e.lineWidth=1,
e.moveTo(a,n),e.lineTo(a+r,n),e.lineTo(a+r,n+i),e.lineTo(a,n+i),e.lineTo(a,n),e.stroke(),e.beginPath(),e.lineWidth=1,e.strokeStyle="white",e.moveTo(a-1,n-1),e.lineTo(a+r+1,n-1),e.lineTo(a+r+1,n+1+i),e.lineTo(a-1,n+i+1),e.lineTo(a-1,n-1),e.stroke()}},"8jgF":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("MVZn")),l=r(a("lwsE")),i=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),h=r(a("17x9")),m=a("6XO9"),v=r(a("i6OX")),g=a("zAG7"),y=a("7Qib")
a("oSKl")
var b=function(e){function r(){var e,i;(0,l.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return i=(0,s.default)(this,(e=(0,c.default)(r)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(i),"state",{formData:{name:"",email:"",pwd:""},submitErrMsg:"",submitted:!1}),(0,f.default)((0,u.default)(i),"handleFormDataChange",function(t){return function(e){return i.setState({formData:(0,o.default)({},i.state.formData,(0,f.default)({},t,e))})}}),(0,f.default)((0,u.default)(i),"handleEmailChange",function(e){return i.setState({formData:(0,o.default)({},i.state.formData,{email:e})})}),(0,
f.default)((0,u.default)(i),"resetSubmitErrMsg",function(){return i.setState({submitErrMsg:""})}),(0,f.default)((0,u.default)(i),"verifyEmail",function(e){return g.EMAIL_REG.test(e)}),(0,f.default)((0,u.default)(i),"handleSignUp",function(){var e=i.props.event,t=i.state.formData,a=t.name,n=t.email,r=t.pwd
if(i.resetSubmitErrMsg(),!i.verifyEmail(n))return i.setState({submitErrMsg:I18N.design.verify_email_address});(0,y.post)("/events/sign_up.json",{username:a,email:n,password:r,locale:"zh-CN",event:e.name}).then(function(){return(0,y.post)("/sessions.json",{email:n,password:r}).then(function(){return i.setState({submitted:!0})})},function(e){return i.setState({submitErrMsg:e.detail})})}),i}return(0,d.default)(r,e),(0,i.default)(r,[{key:"render",value:function(){var e=this.props,t=e.inMobile,a=e.isOpen,
n=e.event,r=this.state,i=r.formData,o=i.name,l=i.email,s=i.pwd,c=r.submitErrMsg,u=r.submitted,d=!!o&&!!l&&!!s
return p.default.createElement(m.Modal,{className:"sign-up-modal ".concat(t?"modal-in-mobile":""),maskClassName:"modal-mask",title:I18N.design.register_account,isOpen:a},u?p.default.createElement("div",{className:"award-view"},p.default.createElement("img",{className:"award",src:"/images/event/award.png"}),p.default.createElement("p",{className:"success-tip"},n.successTip)):p.default.createElement("div",{className:"sign-up-view"},p.default.createElement("p",{className:"event-desc"},n.desc),
p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"user"}),p.default.createElement(m.Input,{className:"input",placeholder:I18N.design.user_name,defaultValue:o,onChange:this.handleFormDataChange("name")})),p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"mail"}),p.default.createElement(m.InputEmail,{className:"input",placeholder:I18N.design.user_email,
defaultValue:l,onChange:this.handleEmailChange})),p.default.createElement("div",{className:"input-entry"},p.default.createElement(v.default,{className:"icon",type:"mb",name:"lock"}),p.default.createElement(m.Input,{className:"input",placeholder:I18N.design.user_password,type:"password",defaultValue:s,onChange:this.handleFormDataChange("pwd")})),!!c&&p.default.createElement("p",{className:"error-msg"},"* ".concat(c)),p.default.createElement(m.Button,{className:"primary-button",type:"primary",isDisabled:!d,
onClick:this.handleSignUp},I18N.design.sign_up),p.default.createElement("p",{className:"agree-terms"},I18N.design.click_register_meant_agree,p.default.createElement("a",{href:"/tos",target:"_blank"},I18N.design.terms_of_service))))}}]),r}(p.PureComponent);(t.default=b).propTypes={event:h.default.object,isOpen:h.default.bool,inMobile:h.default.bool}},"94Et":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.CommentMarkerPanel=void 0
var c=r(a("pVnL")),i=r(a("J4zp")),l=r(a("MVZn")),s=r(a("lwsE")),o=r(a("W8MJ")),u=r(a("a1gu")),d=r(a("Nsbk")),f=r(a("7W2i")),p=r(a("lSNA")),h=n(a("q1tI")),m=r(a("17x9")),v=a("/rSK"),g=a("fiFu"),y="TEMP_MARKER_CID",b=function(e){function a(e){var o;(0,s.default)(this,a),(o=(0,u.default)(this,(0,d.default)(a).call(this,e))).addTempCommentThreadListener=(0,g.muteEvent)(function(e){var t=o.props,a=t.isActive,n=t.permissionPack,r=t.markerDomPack,i=t.dispatch
a&&n.getPermission().create&&S(e,r.getSimulatorContainerElement().getBoundingClientRect())&&i({type:"container:comment:focus-temp-marker",payload:(0,l.default)({},o.markerOperations.getMarkerPosition(e),{cid:y})})})
var t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return o.props.dispatch({type:"container:comment:focus",payload:{focusCommentThreadCid:e,focusSource:"marker"}})}
return o.markerOperations={addContainerEventListener:function(e){var r=o.props.markerDomPack.getSimulatorContainerElement()
r&&Object.entries(e).forEach(function(e){var t=(0,i.default)(e,2),a=t[0],n=t[1]
return r.addEventListener(a,n)})},removeContainerEventListener:function(e){var r=o.props.markerDomPack.getSimulatorContainerElement()
r&&Object.entries(e).forEach(function(e){var t=(0,i.default)(e,2),a=t[0],n=t[1]
return r.removeEventListener(a,n)})},setFocusCommentThreadCid:t,setHoverFocusCommentThreadCid:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null
return!o.props.tempCommentThreadMarker&&t(e)},doUpdateCommentThread:function(e){var t=e.cid,a=e.top,n=e.left
return o.props.dispatch({type:t!==y?"entry:comment-threads:update":"container:comment:focus-temp-marker",payload:{cid:t,top:a,left:n}})},getMarkerPosition:function(e){var t=o.props,a=t.scale,n=t.markerDomPack,r=n.getScreenContainerElement().getBoundingClientRect(),i=n.getSimulatorContainerElement().getBoundingClientRect()
return{left:((0,g.clamp)(e.clientX,i.left+20,i.right-20)-r.left)/a,top:((0,g.clamp)(e.clientY,i.top+20,i.bottom-20)-r.top)/a}}},o}return(0,f.default)(a,e),(0,o.default)(a,[{key:"componentDidMount",value:function(){this.props.isActive&&this.toggleEventListener(!0)}},{key:"componentDidUpdate",value:function(e){var t=this.props.isActive
t!==e.isActive&&this.toggleEventListener(t)}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch
this.toggleEventListener(!1),e({type:"container:comment:focus-temp-marker",payload:null})}},{key:"toggleEventListener",value:function(e){var t=this.props.markerDomPack.getSimulatorContainerElement()
t&&(e?t.addEventListener("dblclick",this.addTempCommentThreadListener):t.removeEventListener("dblclick",this.addTempCommentThreadListener))}},{key:"render",value:function(){var r=this,e=this.props,t=e.isActive,i=e.scale,o=e.permissionPack,a=e.commentThreadList,n=e.isLoaded,l=e.focusCommentThreadCid,s=e.tempCommentThreadMarker
return t&&n?h.default.createElement("div",null,a.map(function(e,t){var a=Boolean(!s&&l===e.cid),n=Boolean(s||l&&!a)
return h.default.createElement(v.CommentMarker,(0,c.default)({key:e.cid},{commentMarkerIndex:t+1,commentThread:e,scale:i,isEditable:o.getPermission(e.user_id).update,isFocus:a,isFade:n,markerOperations:r.markerOperations}))}),s&&h.default.createElement(v.CommentMarker,{commentMarkerIndex:a.length+1,commentThread:s,scale:i,isEditable:!0,isFocus:!0,isFade:!1,markerOperations:this.markerOperations})):null}}]),a}(h.PureComponent)
t.CommentMarkerPanel=b,(0,p.default)(b,"propTypes",{scale:m.default.number,isActive:m.default.bool,isLoaded:m.default.bool,permissionPack:m.default.object,markerDomPack:m.default.object,commentThreadList:m.default.array,focusCommentThreadCid:m.default.string,tempCommentThreadMarker:m.default.object,dispatch:m.default.func})
var S=function(e,t){var a=t.left,n=t.top,r=t.width,i=t.height
return a<=e.clientX&&n<=e.clientY&&a+r>=e.clientX&&n+i>=e.clientY}},"9ZUU":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("Hrzm")),o=a("upRB"),l=(0,r.connect)(function(e){var t=(0,o.getRunnerState)(e),a=t.activeCid,n=t.screenInfoMap
return{screenCid:a,stateCid:n[a]&&n[a].stateCid}})(i.default)
t.default=l},Aa0X:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=a("G4qV"),o=a("upRB"),l=a("1iCU"),s=a("pVAx"),c=n(a("dhJN")),u=(0,i.createSelector)([o.getPreference,o.getCurrentMode,o.getIsMultiScreenProject],function(e,t,a){return{toolbarActiveItem:t,isScreenPanelShow:e.layout!==s.CLASSIC&&a,isLayerPanelShow:e.layout===s.CLASSIC&&t===l.INSPECT,isCommentPanelShow:e.layout===s.CLASSIC&&t==l.COMMENT}}),d=(0,r.connect)(function(e){return u(e)})(c.default)
t.default=d},An9T:function(e,t,a){e.exports={shell:"_38-tXAYs8SyeFiNeAicHOH"}},Aq2W:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=function(){return(new Date).getTime()},l=function(){function e(){(0,r.default)(this,e),this.coolDownTime=o(),this.coolDownInterval=200}return(0,i.default)(e,[{key:"isCoolDown",value:function(){var e=o()-this.coolDownTime
return this.coolDownTime+=e,e>this.coolDownInterval}},{key:"resetCoolDown",value:function(){this.coolDownTime-=this.coolDownInterval}}]),e}()
t.default=l},BVfv:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("MVZn")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),h=r(a("17x9")),m=a("6XO9"),v=a("wYtL"),g=r(a("m48X")),y=r(a("i6OX")),b=r(a("UbMB")),S=r(a("rj4U")),w=b.default.bind(S.default),E=function(e){function t(e){var n
return(0,o.default)(this,t),n=(0,s.default)(this,(0,c.default)(t).call(this,e)),(0,f.default)((0,u.default)(n),"updateSubToolbar",function(e){n.props.dispatch({type:"reducer:preview-toolbar:update",payload:(0,i.default)({},e)})}),(0,f.default)((0,u.default)(n),"pickColor",function(e){e.nativeEvent.stopImmediatePropagation(),MB.event("preview","在标注模式中使用了自定义取色"),n.updateSubToolbar({isShowColorPicker:!0,showLayerList:!1,isSelectLayer:!1})}),(0,f.default)((0,u.default)(n),"updateDeviceUnit",function(e){
var t=n.props.emPixel,a=N(e,t)
n.updateSubToolbar(a?{unit:e,ratio:a}:{unit:e}),MB.event("preview","在".concat(e,"下切换倍率为").concat(a))}),(0,f.default)((0,u.default)(n),"updateLanguage",function(e){MB.event("preview","代码切换".concat(e)),n.updateSubToolbar({language:e})}),(0,f.default)((0,u.default)(n),"updateColorUnit",function(e){n.updateSubToolbar({colorUnit:e})}),(0,f.default)((0,u.default)(n),"updateEmPixel",function(e){var t=Number(e)
n.updateSubToolbar({emPixel:t,ratio:t}),n.setState({customEmPixel:""})
var a=n.props.unit
MB.event("preview","在".concat(a,"下切换倍率为").concat(t))}),(0,f.default)((0,u.default)(n),"onTypingEmPixel",function(e){if(e){n.setState({customEmPixel:e}),n.updateSubToolbar({emPixel:e,ratio:e})
var t=n.props.unit
MB.event("preview","在".concat(t,"在设置自定义倍率").concat(e))}}),(0,f.default)((0,u.default)(n),"handleMobileChange",function(e){var t=n.props.unit
n.updateSubToolbar({ratio:Number(e)}),MB.event("preview","在".concat(t,"下切换倍率为").concat(e))}),n.state={showLogin:!1,customEmPixel:""},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.unit
this.props.unit!==t&&t===k&&this.updateSubToolbar({ratio:1})}},{key:"render",value:function(){var e=this.props,t=e.unit,a=e.emPixel,n=e.ratio,r=e.language,i=e.isShowColorPicker,o=e.colorUnit,l=e.isLogin,s=this.state.customEmPixel,c=t===T||t===C,u=t===k,d=t===T?I:P,f=[{value:10,label:"10px"},{value:12,label:"12px"},{value:14,label:"14px"},{value:16,label:"16px"},{value:a,label:"".concat(a,"px")},p.default.createElement("div",{onClick:function(e){return e.stopPropagation()}},p.default.createElement(
m.InputNumber,{size:"small",min:1,max:99,precision:0,value:s,placeholder:I18N.custom,onChange:this.onTypingEmPixel}))]
return p.default.createElement("div",{className:w("sub-toolbar","preview-sub-toolbar")},p.default.createElement("div",{className:"mode"},p.default.createElement(y.default,{name:"cursor",type:"dora",className:(0,m.trimList)(["cursor",!i&&"is-active"])}),p.default.createElement(v.Tooltip,{arrowed:!0,position:"bottom",duration:1500,className:(0,m.trimList)(["picker",i&&"is-active"]),tipClassName:"marign-top-20",content:{click:l?null:I18N.preview.guide_login,hover:I18N.preview.color_picker}},
p.default.createElement(y.default,{name:"tube",type:"dora",onClick:this.pickColor}))),p.default.createElement("div",{className:"param"},p.default.createElement(g.default,{className:"color-unit",menuClassName:"PreviewSubToolbarSelectMenu",value:o,optionList:M,onChange:this.updateColorUnit}),p.default.createElement(g.default,{menuClassName:"PreviewSubToolbarSelectMenu",placeholder:" ",optionList:_,value:r,onChange:this.updateLanguage}),p.default.createElement(g.default,{className:"device-unit",
menuClassName:"PreviewSubToolbarSelectMenu",optionList:x,value:t,onChange:this.updateDeviceUnit}),c?p.default.createElement(g.default,{menuClassName:"PreviewSubToolbarSelectMenu",optionList:d,value:n,onChange:this.handleMobileChange}):u?p.default.createElement("span",{className:"px-ratio"},"@1x"):p.default.createElement(g.default,{className:"em-pixel",menuClassName:"PreviewSubToolbarSelectMenu scale-select-menu",optionList:f,value:a,onChange:this.updateEmPixel})))}}]),t}(p.PureComponent)
t.default=E,(0,f.default)(E,"propTypes",{unit:h.default.string,language:h.default.string,ratio:h.default.number,colorUnit:h.default.string,isShowColorPicker:h.default.bool,emPixel:h.default.number,isLogin:h.default.bool,dispatch:h.default.func})
var k="px",C="pt",T="dp",x=[k,"em","rem",T,C],_=[{value:"swift",label:"Swift"},{value:"android",label:"Android"},{value:"css",label:"CSS"},{value:"less",label:"Less"},{value:"sass",label:"Sass"},{value:"stylus",label:"Stylus"}],M=[{value:"hex",label:"Hex"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"argb",label:"ARGB"}],P=[1,2,3].map(function(e){return{value:e,label:"@".concat(e,"x")}}),I=[.75,1,1.5,2,3,4].map(function(e){return{value:e,label:"@".concat(e,"x")}}),N=function(e,t){
return"em"===e||"rem"===e?t:1}},CWx7:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.runnerEntry=void 0
var d=n(a("QILm")),y=n(a("MVZn")),g=n(a("RIqP")),b=n(a("lSNA")),S=a("upRB"),w=a("RKRO"),E=function(t){var a={},n={}
return Panel.all().forEach(function(e){e.screen_cid===t&&(e.multi_states?n[e.cid]=C(e):a[e.cid]=k(e))}),Screen.find(t).setState("default",!0),{cid:t,stateCid:"default",panelInfoMap:a,chameleonInfoMap:n}},k=function(e){var t=e.mainState().cid
return{cid:e.cid,activeScreenCid:t,panelScreens:[t]}},C=function(e,t){var a=e.ct().homeScreen(),n=e.mainState().cid
return a.setState(n,!0),{cid:e.cid,stateCid:e.mainState().cid,transition:t}},r={"entry:runner:init:home-screen":function(e,t){var a=e.dispatch,n=t.payload.activeCid
a({type:"runner:update:state",payload:{transition:{name:"none",delay:0,duration:0,offset:100},screenInfoMap:(0,b.default)({},n,E(n)),history:[]}})},"entry:runner:reload:screen":function(e,t){var a=e.dispatch,n=t.payload.activeCid
a({type:"entry:runner:init:home-screen",payload:{activeCid:n}}),a({type:"entry:runner:activate:screen",payload:{screenCid:n}})},"entry:runner:activate:screen":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=r.screenCid,o=r.transition,l=r.resetTargetScreen,s=void 0===l||l,c=a(),u=(0,S.getRunnerState)(c),d=u.activeCid,f=u.screenInfoMap,p=u.history;/drawer|menu/.test((o=o||{name:"none",delay:0,duration:0,offset:100}).name)?(MB.runner.currentScreen=d,MB.runner.currentMenu=i
):MB.runner.currentScreen=MB.runner.currentMenu=null
var h=[i].concat((0,g.default)(p.filter(function(e){return e!==i}))),m=f[i],v=m&&!s?m:E(i)
s&&MB.runner.runnerUtil.resetScreenScrollState(i),n({type:"runner:update:state",payload:{transition:o,screenInfoMap:(0,y.default)({},f,(0,b.default)({},i,v)),activeCid:i,history:h}})},"entry:runner:activate:screen-state":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=r.screenCid,o=r.stateCid,l=r.transition,s=a(),c=(0,S.getRunnerState)(s),u=c.activeCid,d=c.screenInfoMap
if(u===i&&d[u].stateCid!==o){var f=Screen.find(u),p=f.height-(f.headerHeight()+f.footerHeight())
f.setState(o,!0)
var h=f.height-(f.headerHeight()+f.footerHeight()),m=(0,y.default)({},l,{callback:function(){console.log("状态切换完成"),p!==h&&MB.runner.runnerUtil.renderScrollbar(u),MB.runner.timerHandler.setupPageTimers(f,o)}}),v={},g={}
f.cpanels().forEach(function(e){var t=Panelstate.find(o+e.cid)||e
t.cid=e.cid,t.screen_cid=f.cid,t.multi_states=e.multi_states,t.template_cid=e.template_cid,t.multi_states?g[e.cid]=C(t,l):v[e.cid]=k(t)}),n({type:"entry:runner:update:screen",payload:{screenCid:i,stateCid:o,panelInfoMap:v,chameleonInfoMap:g,transition:m}})}},"entry:runner:back-to-prev-page":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=void 0===r?{}:r,o=a(),l=(0,S.getRunnerState)(o),s=l.history,c=l.transition,u=c.name,d=c.duration,f=c.offset
if(1!==s.length){var p,h=Screen.find(s[0]),m=Screen.find(s[1])
p=h.orient()!==m.orient()?{name:"none",delay:0,duration:0,offset:100}:i.transition?i.transition:{name:(0,w.getReverseTransitionName)(u),delay:0,duration:d,offset:f,callback:i.callback}
var v=s.slice(1)
n({type:"runner:update:state",payload:{activeCid:v[0],transition:p,history:v}})}},"entry:runner:update:screen":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=r.screenCid,o=(0,d.default)(r,["screenCid"])
console.log("entry:runner:update:screen",i,o)
var l=a(),s=(0,S.getRunnerState)(l).screenInfoMap,c=s[i]
if(!c)throw new Error("更新了尚未加载的页面!!")
var u=(0,y.default)({},c,o)
n({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},s,(0,b.default)({},i,u))}})},"entry:runner:activate:panel-screen":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=r.panelCid,o=r.panelScreenCid,l=r.transition,s=a(),c=(0,S.getRunnerState)(s).screenInfoMap,u=Panel.find(i).screen_cid,d=c[u],f=d.panelInfoMap[i],p=new Set(f.panelScreens)
p.add(o)
var h=(0,y.default)({},f,{transition:l,activeScreenCid:o,panelScreens:Array.from(p)}),m=(0,y.default)({},d,{panelInfoMap:(0,y.default)({},d.panelInfoMap,(0,b.default)({},i,h))})
n({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},c,(0,b.default)({},u,m))}})},"entry:runner:preload:screens":function(e){var t=e.getState,a=e.dispatch,n=t(),r=(0,S.getCurrentProject)(n),i=(0,S.getRunnerState)(n),o=i.activeCid,l=i.screenInfoMap,s=i.history.slice(0,2)
Link.all().forEach(function(e){if(e.target_cid&&e.screen_cid===o&&"none"!==e.transition&&"prev"!==e.target_cid){var t=Screen.find(e.target_cid)
t&&t.project_cid===r.cid&&s.push(e.target_cid)}})
var c={}
s.forEach(function(e){c[e]=l[e]||E(e)}),a({type:"runner:update:state",payload:{screenInfoMap:c}})},"entry:runner:update:chameleon":function(e,t){var a=e.getState,n=e.dispatch,r=t.payload,i=r.chameleonCid,o=r.stateCid,l=r.transition,s=a(),c=(0,S.getRunnerState)(s).screenInfoMap,u=Panel.find(i),d=u.screen_cid,f=c[d],p=f.chameleonInfoMap[i],h=(0,y.default)({},p,{stateCid:o,transition:(0,y.default)({},l,{callback:function(){MB.runner.timerHandler.setupPanelTimers(u,o)}})}),m=(0,y.default)({},f,{
chameleonInfoMap:(0,y.default)({},f.chameleonInfoMap,(0,b.default)({},i,h))})
n({type:"runner:update:state",payload:{screenInfoMap:(0,y.default)({},c,(0,b.default)({},d,m))}})}}
t.runnerEntry=r},DJvY:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("4WDG")),c=a("upRB"),o=(0,r.connect)(function(e){var t=e.container,a=t.common,n=a.offset,r=a.keyFlags.isSpaceDown,i=t.previewSetting,o=i.toolbarActiveItem,l=i.isShowColorPicker,s=i.isFullScreenMode
return{scale:(0,c.getCurrentScale)(e),canvasOffset:n,screen:(0,c.getCurrentScreen)(e),project:(0,c.getCurrentProject)(e),shellType:(0,c.getShellType)(e),isSpaceDown:r,isStickyShow:(0,c.getIsStickyShow)(e),isScrollable:(0,c.getIsScrollable)(e),isLayerPreview:"preview"==o,isLayerActive:"inspect"==o,isCommentActive:"comment"==o,isFullScreenMode:s,isColorPickerActive:l}})(i.default)
t.default=o},DdUa:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=n(a("J4zp")),r=a("/MKj"),p=a("upRB"),i=n(a("m/Xg")),o=(0,r.connect)(function(e){var t=(0,p.getCurrentScreen)(e),a=(0,p.getCurrentProject)(e),n=(0,p.getIsImmersive)(e),r=(0,p.getIsScrollable)(e),i=n||!r,o=MB.isMobile(),l=MB.isEmbedded(),s=o||l,c=l&&"landscape"===Project.find(a.cid).homeScreen().orientation?[a.height,a.width]:[a.width,a.height],u=l?c:[window.innerWidth,window.innerHeight],d=(0,f.default)(u,2)
return{screen:t,project:a,isLite:s,isImmersive:n,isScreenExpanded:i,viewportWidth:d[0],viewportHeight:d[1]}})(i.default)
t.default=o},DqDi:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationBar=t.NavItem=t.default=void 0
var o=r(a("PJYZ")),l=r(a("lwsE")),s=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("i6OX")),m=r(a("UbMB")),v=r(a("G916")),g=m.default.bind(v.default)
var y=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e,t,a,n,r,i=this.props,o=i.activeIndex,l=i.hideBorder,s=i.className,c=i.children,u=i.onTabChange,d=(e=o,t=p.Children.count(c),a=l,n=0===e,r=e===t-1,{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:a&&n?"transparent":"",borderRightColor:a&&r?"transparent":""})
return p.default.createElement("ol",{type:"slide-nav",className:g("nav",s)},p.Children.map(c,function(e,t){var a={index:t,active:t===o,BgStyle:0===t?d:null,onClick:u}
return p.default.cloneElement(e,a)}))}}]),t}(p.PureComponent)
t.default=y,(0,f.default)(y,"propTypes",{className:i.default.string,activeIndex:i.default.number,hideBorder:i.default.bool,children:i.default.array,onTabChange:i.default.func}),(0,f.default)(y,"defaultProps",{hideBorder:!1,activeIndex:0})
var b=function(e){function i(){var e,n;(0,l.default)(this,i)
for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r]
return n=(0,c.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(a))),(0,f.default)((0,o.default)(n),"handleClick",function(e){var t=n.props,a=t.index;(0,t.onClick)(a)}),n}return(0,d.default)(i,e),(0,s.default)(i,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.active,n=e.icon,r=e.label,i=e.title,o=e.BgStyle
return p.default.createElement("li",{className:g("nav-item",{active:a}),title:i,onClick:this.handleClick},0===t&&p.default.createElement("div",{className:"background-cube",style:o}),n&&p.default.createElement("div",{className:"nav-icon"},"string"==typeof n?p.default.createElement(h.default,{type:"dora",name:n}):n),r&&p.default.createElement("span",{className:"nav-label"},r))}}]),i}(p.PureComponent)
t.NavItem=b,(0,f.default)(b,"propTypes",{index:i.default.number,icon:i.default.oneOfType([i.default.string,i.default.object]),title:i.default.string,label:i.default.string,active:i.default.bool,BgStyle:i.default.object,onClick:i.default.func})
var S=function(e){var t=e.tabs,a=e.activeIndex,n=e.onChange,r=e.className,i=e.hideBorder,o=e.BgStyle
return p.default.createElement(y,{activeIndex:a,hideBorder:i,onTabChange:n,className:r},t.map(function(e){var t=e.label,a=e.icon
return p.default.createElement(b,{key:t,icon:a,label:t,BgStyle:o})}))};(t.NavigationBar=S).propTypes={tabs:i.default.array,activeIndex:i.default.number,onChange:i.default.func,className:i.default.string,hideBorder:i.default.bool,BgStyle:i.default.object}},EDI8:function(e,t,a){e.exports={"zoom-count":"_3bJjkHIbbJ3_hpAgUkjNFN"}},ER7e:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),f=n(a("q1tI")),p=a("i6OX")
a("peLG")
var h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"top-right-action"},f.default.createElement("div",{className:"mode"},f.default.createElement(p.SVGIcon,{name:"design/preview/daynight"}),f.default.createElement("span",{className:"light","data-mode":"light",onClick:this.props.onClickMode}),f.default.createElement("span",{
className:"dark","data-mode":"dark",onClick:this.props.onClickMode})),f.default.createElement("div",{className:"exit-full-screen",onClick:this.props.onClickExit},f.default.createElement(p.SVGIcon,{name:"design/preview/exit"})))}}]),t}(f.PureComponent)
t.default=h,(0,u.default)(h,"propTypes",{onClickMode:d.default.func,onClickExit:d.default.func})},EWR0:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("NcbO")),m=r(a("GWLA")),v=r(a("YCqe")),g=r(a("UbMB")).default.bind(v.default),y=function(e){function t(){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this)),(0,d.default)((0,c.default)(a),"handleTabClick",function(e){var t=Number(e.target.dataset.index)
a.setState({tabIndex:t})}),a.state={isShow:!1,tabIndex:1},MB.debugRunner=function(){return a.setState({isShow:!a.state.isShow})},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.runnerState,a=e.dispatch,n=this.state,r=n.isShow,i=n.tabIndex
return r?p.default.createElement("div",{className:g("debug-panel")},p.default.createElement("ul",{className:"tab"},p.default.createElement("li",{"data-index":"0",className:g({active:0===i}),onClick:this.handleTabClick},"状态"),p.default.createElement("li",{"data-index":"1",className:g({active:1===i}),onClick:this.handleTabClick},"控制")),p.default.createElement("div",{className:"content"},0===i&&p.default.createElement(h.default,{runnerState:t,dispatch:a}),1===i&&p.default.createElement(m.default,{dispatch:a}))
):null}}]),t}(p.PureComponent)
t.default=y,(0,d.default)(y,"propTypes",{runnerState:f.default.object,dispatch:f.default.func})},Ehhz:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.MODEL_OPERATION_MAP=void 0
var u=n(a("MVZn")),i=n(a("RIqP")),d=n(a("zkrS")),o=d.default.SpineModel,r={Team:"t",Project:"p",Combo:"c",Template:"t",UserTemplate:"ut",Screen:"s",Collaborator:"co",Comment:"cm",CommentThread:"cmth",Widget:"w"},l=Object.keys(r),f=l.reduce(function(e,t){return e[t]=o[t].attributes,e},{})
f.Widget=[].concat((0,i.default)(f.Widget),["id"])
var s=l.reduce(function(e,t){var s=o[t],n=f[t],c=r[t],l=function(e,t){return{dataState:e.find(function(e){return e.cid===t}),dataModel:s.findByAttribute("cid",t)}}
return e[t]={refreshStateList:function(e){return s.all().map(function(e){return function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
return n.forEach(function(e){return a[e]=t[e]}),a}(e,{})})},saveState:function(e,t,a){var n=t.cid,r=l(e,n),i=r.dataState,o=r.dataModel
return i&&o&&(o.lsave(!a),!a&&d.default.SpineModel.queueSave()),e},addState:function(e,t,a){var n,r,i,o=t.cid||d.default.SpineModel.requestCid(c)
n=o,r=e.find(function(e){return e.cid===n}),i=s.findByAttribute("cid",n),Boolean(r||i)&&(o=d.default.SpineModel.requestCid(c))
var l=(0,u.default)({},t,{cid:o})
return new s(l).lsave(!a),!a&&d.default.SpineModel.queueSave(),p(e,l)},updateState:function(e,t,a){var n=t.cid,r=l(e,n),i=r.dataState,o=r.dataModel
return i&&o?(i=(0,u.default)({},i,t),Object.assign(o,i),o.lsave(!a),!a&&d.default.SpineModel.queueSave(),m(e,function(e){return e.cid===n},i)):e},deleteState:function(e,t,a){var n=t.cid,r=l(e,n),i=r.dataState,o=r.dataModel
return i&&o?(o.ldestroy(!a),!a&&d.default.SpineModel.queueSave(),h(e,function(e){return e.cid===n})):e}},e},{}),c=function(i){return function(e,t,a){var n=t.cid,r=o.Project.findByAttribute("cid",n)?"Project":o.Template.findByAttribute("cid",n)?"Template":o.Combo.findByAttribute("cid",n)?"Combo":null
return s[r][i](e,t,a)}};(t.MODEL_OPERATION_MAP=s).ProjectAlike={refreshStateList:function(e){return[].concat((0,i.default)(s.Combo.refreshStateList()),(0,i.default)(s.Project.refreshStateList()),(0,i.default)(s.Template.refreshStateList()),(0,i.default)(s.UserTemplate.refreshStateList()))},saveState:c("saveState"),addState:c("addState"),updateState:c("updateState"),deleteState:c("deleteState")}
var p=function(e,t){return[].concat((0,i.default)(e),[t])},h=function(e,t){var a=e.findIndex(t)
return~a?[].concat((0,i.default)(e.slice(0,a)),(0,i.default)(e.slice(a+1))):e},m=function(e,t,a){var n=e.findIndex(t)
if(!~n||e[n]===a)return e
var r=(0,i.default)(e)
return r[n]=a,r}},Emwt:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.Screen,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:screens:update",payload:i(e,r,o)})})},u={entryMap:{"screens:refresh":c(r.refreshStateList,!1),"screens:add":c(r.addState,!1),"screens:add-local":c(r.addState,!0),"screens:update":c(r.updateState,!1),"screens:update-local":c(r.updateState,!0),"screens:delete":c(r.deleteState,!1),"screens:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},"FC/4":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.TextEditComponent=t.createTextEditStore=t.INITIAL_STATE=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("MVZn")),f=n(a("q1tI")),p=r(a("17x9")),h=r(a("vOnD")),m=a("6XO9"),v=a("LPEl"),g={value:"",startValue:"",isEditing:!1}
t.INITIAL_STATE=g
t.createTextEditStore=function(e,t){var a=t.onStart,n=t.onChange,r=t.onEnd;(e=(0,d.default)({},g,e)).startValue=e.value
var i=(0,v.createStateStore)(e),o=i.subscribe,l=i.unsubscribe,s=i.getState,c=i.setState
return{subscribe:o,unsubscribe:l,getState:s,startEdit:function(){c({isEditing:!0}),a&&a(s()),c({startValue:s().value})},endEdit:function(){c({isEditing:!1}),r&&r(s())},setValue:function(e){s().isEditing&&(c({value:e}),n&&n(s()))}}}
var y=function(e){function r(e){var a;(0,i.default)(this,r),a=(0,l.default)(this,(0,s.default)(r).call(this,e))
var t=function(e,t){a.setState(e),!t.isEditing&&e.isEditing&&setTimeout(a.focusTextarea,0)}
a.bindEditStore=function(e){a.setState(e.getState()),e.subscribe(t)},a.unbindEditStore=function(e){e.unsubscribe(t)},a.onChange=function(e){return a.props.textEditStore.setValue(e)},a.onKeyDown=function(e){("Enter"===e.key||13===e.which)&&(!a.props.multiline||!e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),a.props.textEditStore.endEdit())}
var n=null
return a.setRef=function(e){n=e&&e.querySelector("textarea")},a.focusTextarea=function(){if(n){n.focus&&n.focus()
var e=n.value.length
n.setSelectionRange(e,e)}},a.autoHeightTextarea=function(){a.props.autoHeight&&n&&(n.style.height="auto",n.style.height="".concat(Math.max(n.scrollHeight+2,n.offsetHeight,a.props.minHeight),"px"))},a}return(0,c.default)(r,e),(0,o.default)(r,[{key:"componentDidMount",value:function(){this.bindEditStore(this.props.textEditStore),this.focusTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.textEditStore!==e.textEditStore&&(this.unbindEditStore(e.textEditStore),this.bindEditStore(
this.props.textEditStore)),this.autoHeightTextarea()}},{key:"render",value:function(){var e=this.props,t=e.placeholder,a=void 0===t?"":t,n=e.textEditStore.getState().value
return f.default.createElement(b,{ref:this.setRef},f.default.createElement(m.Textarea,{value:n,placeholder:a,rows:1,onChange:this.onChange,onKeyDown:this.onKeyDown}))}}]),r}(f.PureComponent)
t.TextEditComponent=y,(0,u.default)(y,"propTypes",{textEditStore:p.default.object.isRequired,placeholder:p.default.string,multiline:p.default.bool,autoHeight:p.default.bool,minHeight:p.default.number})
var b=h.default.div.withConfig({displayName:"TextEditComponent__HackStyleDiv",componentId:"sc-1wltfay-0"})(["&&& label{width:100%;}&&& textarea{font-size:12px;resize:none;}"])},FJlG:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"reducer:preview-toolbar:update":return(0,r.default)({},e,n)
case"reducer:preview-toolbar:active-item:init":return(0,r.default)({},e,{toolbarActiveItem:i.PREVIEW})
case"reducer:preview-toolbar:fullscreen":return(0,r.default)({},e,{isFullScreenMode:n.isFullScreenMode})
case"reducer:preview-toolbar:update:highlight":return(0,r.default)({},e,{isHighlight:n.isHighlight})
default:return e}}
var r=n(a("MVZn")),i=a("1iCU"),o=a("/5+U"),l={ratio:1,emPixel:16,unit:"px",colorUnit:"hex",language:"css",toolbarActiveItem:i.PREVIEW,isShowColorPicker:!1,isSelectLayer:!1,userPickColor:(0,o.getHistoryColor)(),focusColor:null,loadSliceUrl:"",isFullScreenMode:!1,isScrollable:!0,isStickyShow:!0,isHighlight:!0,shellType:"device"}},FTTL:function(e,t,a){"use strict"
var c=a("TqRt")(a("cDf5"))
!function(i,o,f){var h=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame||function(e){i.setTimeout(e,1e3/60)},m=function(){var n={},r=o.createElement("div").style,t=function(){for(var e=["t","webkitT","MozT","msT","OT"],t=0,a=e.length;t<a;t++)if(e[t]+"ransform"in r)return e[t].substr(0,e[t].length-1)
return!1}()
function e(e){return!1!==t&&(""===t?e:t+e.charAt(0).toUpperCase()+e.substr(1))}n.getTime=Date.now||function(){return(new Date).getTime()},n.extend=function(e,t){for(var a in t)e[a]=t[a]},n.addEvent=function(e,t,a,n){e.addEventListener(t,a,!!n)},n.removeEvent=function(e,t,a,n){e.removeEventListener(t,a,!!n)},n.prefixPointerEvent=function(e){return i.MSPointerEvent?"MSPointer"+e.charAt(7).toUpperCase()+e.substr(8):e},n.momentum=function(e,t,a,n,r,i){var o,l,s=e-t,c=f.abs(s)/a
return l=c/(i=void 0===i?6e-4:i),(o=e+c*c/(2*i)*(s<0?-1:1))<n?(o=r?n-r/2.5*(c/8):n,l=(s=f.abs(o-e))/c):0<o&&(o=r?r/2.5*(c/8):0,l=(s=f.abs(e)+o)/c),{destination:f.round(o),duration:l}}
var a=e("transform")
return n.extend(n,{hasTransform:!1!==a,hasPerspective:e("perspective")in r,hasTouch:"ontouchstart"in i,hasPointer:!(!i.PointerEvent&&!i.MSPointerEvent),hasTransition:e("transition")in r}),n.isBadAndroid=function(){var e=i.navigator.appVersion
if(!/Android/.test(e)||/Chrome\/\d/.test(e))return!1
var t=e.match(/Safari\/(\d+.\d)/)
return!(t&&"object"===(0,c.default)(t)&&2<=t.length)||parseFloat(t[1])<535.19}(),n.extend(n.style={},{transform:a,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin"),touchAction:e("touchAction")}),n.hasClass=function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},n.addClass=function(e,t){if(!n.hasClass(e,t)){var a=e.className.split(" ")
a.push(t),e.className=a.join(" ")}},n.removeClass=function(e,t){if(n.hasClass(e,t)){var a=new RegExp("(^|\\s)"+t+"(\\s|$)","g")
e.className=e.className.replace(a," ")}},n.offset=function(e){for(var t=-e.offsetLeft,a=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,a-=e.offsetTop
return{left:t,top:a}},n.preventDefaultException=function(e,t){for(var a in t)if(t[a].test(e[a]))return!0
return!1},n.extend(n.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),n.extend(n.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return f.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){return(e-=1)*e*(5*e+4)+1}},bounce:{style:"",
fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){return 0===e?0:1==e?1:.4*f.pow(2,-10*e)*f.sin((e-.055)*(2*f.PI)/.22)+1}}}),n.tap=function(e,t){var a=o.createEvent("Event")
a.initEvent(t,!0,!0),a.pageX=e.pageX,a.pageY=e.pageY,e.target.dispatchEvent(a)},n.click=function(e){var t,a=e.target;/(SELECT|INPUT|TEXTAREA)/i.test(a.tagName)||((t=o.createEvent(i.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),t.view=e.view||i,t.detail=1,t.screenX=a.screenX||0,t.screenY=a.screenY||0,t.clientX=a.clientX||0,t.clientY=a.clientY||0,t.ctrlKey=!!e.ctrlKey,t.altKey=!!e.altKey,t.shiftKey=!!e.shiftKey,t.metaKey=!!e.metaKey,t.button=0,t.relatedTarget=null,t._constructed=!0,
a.dispatchEvent(t))},n.getTouchAction=function(e,t){var a="none"
return"vertical"===e?a="pan-y":"horizontal"===e&&(a="pan-x"),t&&"none"!=a&&(a+=" pinch-zoom"),a},n.getRect=function(e){if(e instanceof SVGElement){var t=e.getBoundingClientRect()
return{top:t.top,left:t.left,width:t.width,height:t.height}}return{top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}},n}()
function e(e,t){for(var a in this.wrapper="string"==typeof e?o.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{
tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===i.onmousedown},t)this.options[a]=t[a]
this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,
this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,
!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),
this.scrollTo(this.options.startX,this.options.startY),this.enable()}function l(e,t,a){var n=o.createElement("div"),r=o.createElement("div")
return!0===a&&(n.style.cssText="position:absolute;z-index:9999",r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),r.className="iScrollIndicator",n.className="h"==e?(!0===a&&(n.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",r.style.height="100%"),"iScrollHorizontalScrollbar"):(!0===a&&(n.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",
r.style.width="100%"),"iScrollVerticalScrollbar"),n.style.cssText+=";overflow:hidden",t||(n.style.pointerEvents="none"),n.appendChild(r),n}function s(e,t){for(var a in this.wrapper="string"==typeof t.el?o.querySelector(t.el):t.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=e,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},t
)this.options[a]=t[a]
if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(i,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(i,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(i,"mouseup",this))),this.options.fade){
this.wrapperStyle[m.style.transform]=this.scroller.translateZ
var n=m.style.transitionDuration
if(!n)return
this.wrapperStyle[n]=m.isBadAndroid?"0.0001ms":"0ms"
var r=this
m.isBadAndroid&&h(function(){"0.0001ms"===r.wrapperStyle[n]&&(r.wrapperStyle[n]="0s")}),this.wrapperStyle.opacity="0"}}e.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent(
"destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(e){if(1!=m.eventType[e.type]&&0!==(e.which?e.button:e.button<2?0:4==e.button?1:2))return
if(this.enabled&&(!this.initiated||m.eventType[e.type]===this.initiated)&&(!this.options.ignoreEventException||!this.options.ignoreEventException(e))){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault()
var t,a=e.touches?e.touches[0]:e
this.initiated=m.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,t=this.getComputedPosition(),this._translate(f.round(t.x),f.round(t.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,
this.absStartX=this.x,this.absStartY=this.y,this.pointX=a.pageX,this.pointY=a.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&m.eventType[e.type]===this.initiated&&(!this.options.ignoreEventException||!this.options.ignoreEventException(e))){this.options.preventDefault&&e.preventDefault()
var t,a,n,r,i=e.touches?e.touches[0]:e,o=i.pageX-this.pointX,l=i.pageY-this.pointY,s=m.getTime()
if(this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=o,this.distY+=l,n=f.abs(this.distX),r=f.abs(this.distY),!(300<s-this.endTime&&n<10&&r<10)){if(this.directionLocked||this.options.freeScroll||(n>r+this.options.directionLockThreshold?this.directionLocked="h":r>=n+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault()
else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1)
l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault()
else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1)
o=0}o=this.hasHorizontalScroll?o:0,l=this.hasVerticalScroll?l:0,t=this.x+o,a=this.y+l,(0<t||t<this.maxScrollX)&&(t=this.options.bounce?this.x+o/3:0<t?0:this.maxScrollX),(0<a||a<this.maxScrollY)&&(a=this.options.bounce?this.y+l/3:0<a?0:this.maxScrollY),this.directionX=0<o?-1:o<0?1:0,this.directionY=0<l?-1:l<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(t,a),300<s-this.startTime&&(this.startTime=s,this.startX=this.x,this.startY=this.y,
1==this.options.probeType&&this._execEvent("scroll")),1<this.options.probeType&&this._execEvent("scroll")}}},_end:function(e){if(this.enabled&&m.eventType[e.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault()
e.changedTouches&&e.changedTouches[0]
var t,a,n=m.getTime()-this.startTime,r=f.round(this.x),i=f.round(this.y),o=f.abs(r-this.startX),l=f.abs(i-this.startY),s=0,c=""
if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(r,i),!this.moved)return this.options.tap&&m.tap(e,this.options.tap),this.options.click&&m.click(e),void this._execEvent("scrollCancel")
if(this._events.flick&&n<200&&o<100&&l<100)this._execEvent("flick")
else{if(this.options.momentum&&n<300&&(t=this.hasHorizontalScroll?m.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:r,duration:0},a=this.hasVerticalScroll?m.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:i,duration:0},r=t.destination,i=a.destination,s=f.max(t.duration,a.duration),this.isInTransition=1),this.options.snap){var u=this._nearestSnap(r,i)
this.currentPage=u,s=this.options.snapSpeed||f.max(f.max(f.min(f.abs(r-u.x),1e3),f.min(f.abs(i-u.y),1e3)),300),r=u.x,i=u.y,this.directionX=0,this.directionY=0,c=this.options.bounceEasing}if(r!=this.x||i!=this.y)return(0<r||r<this.maxScrollX||0<i||i<this.maxScrollY)&&(c=m.ease.quadratic),void this.scrollTo(r,i,s,c)
this._execEvent("scrollEnd")}}}},_resize:function(){var e=this
clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,a=this.y
return e=e||0,!this.hasHorizontalScroll||0<this.x?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||0<this.y?a=0:this.y<this.maxScrollY&&(a=this.maxScrollY),(t!=this.x||a!=this.y)&&(this.scrollTo(t,a,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){m.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight
var e=m.getRect(this.scroller)
this.scrollerWidth=e.width,this.scrollerHeight=e.height,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,
m.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[m.style.touchAction]=m.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[m.style.touchAction]||(this.wrapper.style[m.style.touchAction]=m.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(this._events[e]){var a=this._events[e].indexOf(t)
;-1<a&&this._events[e].splice(a,1)}},_execEvent:function(e){if(this._events[e]){var t=0,a=this._events[e].length
if(a)for(;t<a;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,a,n){e=this.x+e,t=this.y+t,a=a||0,this.scrollTo(e,t,a,n)},scrollTo:function(e,t,a,n){n=n||m.ease.circular,this.isInTransition=this.options.useTransition&&0<a
var r=this.options.useTransition&&n.style
!a||r?(r&&(this._transitionTimingFunction(n.style),this._transitionTime(a)),this._translate(e,t)):this._animate(e,t,a,n.fn)},scrollToElement:function(e,t,a,n,r){if(e=e.nodeType?e:this.scroller.querySelector(e)){var i=m.offset(e)
i.left-=this.wrapperOffset.left,i.top-=this.wrapperOffset.top
var o=m.getRect(e),l=m.getRect(this.wrapper)
!0===a&&(a=f.round(o.width/2-l.width/2)),!0===n&&(n=f.round(o.height/2-l.height/2)),i.left-=a||0,i.top-=n||0,i.left=0<i.left?0:i.left<this.maxScrollX?this.maxScrollX:i.left,i.top=0<i.top?0:i.top<this.maxScrollY?this.maxScrollY:i.top,t=null==t||"auto"===t?f.max(f.abs(this.x-i.left),f.abs(this.y-i.top)):t,this.scrollTo(i.left,i.top,t,r)}},_transitionTime:function(e){if(this.options.useTransition){e=e||0
var t=m.style.transitionDuration
if(t){if(this.scrollerStyle[t]=e+"ms",!e&&m.isBadAndroid){this.scrollerStyle[t]="0.0001ms"
var a=this
h(function(){"0.0001ms"===a.scrollerStyle[t]&&(a.scrollerStyle[t]="0s")})}if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(e)}}},_transitionTimingFunction:function(e){if(this.scrollerStyle[m.style.transitionTimingFunction]=e,this.indicators)for(var t=this.indicators.length;t--;)this.indicators[t].transitionTimingFunction(e)},_translate:function(e,t){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(
e=f.round(e),t=f.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t,this.indicators)for(var a=this.indicators.length;a--;)this.indicators[a].updatePosition()},_initEvents:function(e){var t=e?m.removeEvent:m.addEvent,a=this.options.bindToWrapper?this.wrapper:i
t(i,"orientationchange",this),t(i,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(a,"mousemove",this),t(a,"mousecancel",this),t(a,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(t(this.wrapper,m.prefixPointerEvent("pointerdown"),this),t(a,m.prefixPointerEvent("pointermove"),this),t(a,m.prefixPointerEvent("pointercancel"),this),t(a,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(
t(this.wrapper,"touchstart",this),t(a,"touchmove",this),t(a,"touchcancel",this),t(a,"touchend",this)),t(this.scroller,"transitionend",this),t(this.scroller,"webkitTransitionEnd",this),t(this.scroller,"oTransitionEnd",this),t(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,t,a=i.getComputedStyle(this.scroller,null)
return t=this.options.useTransform?(e=+((a=a[m.style.transform].split(")")[0].split(", "))[12]||a[4]),+(a[13]||a[5])):(e=+a.left.replace(/[^-\d.]/g,""),+a.top.replace(/[^-\d.]/g,"")),{x:e,y:t}},_initIndicators:function(){var e,t=this.options.interactiveScrollbars,a="string"!=typeof this.options.scrollbars,n=[],r=this
this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(e={el:l("v",t,this.options.scrollbars),interactive:t,defaultScrollbars:!0,customStyle:a,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(e.el),n.push(e)),this.options.scrollX&&(e={el:l("h",t,this.options.scrollbars),interactive:t,defaultScrollbars:!0,customStyle:a,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,
fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(e.el),n.push(e))),this.options.indicators&&(n=n.concat(this.options.indicators))
for(var i=n.length;i--;)this.indicators.push(new s(this,n[i]))
function o(e){if(r.indicators)for(var t=r.indicators.length;t--;)e.call(r.indicators[t])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){o(function(){this.fade()})}),this.on("scrollCancel",function(){o(function(){this.fade()})}),this.on("scrollStart",function(){o(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){o(function(){this.fade(1,!0)})})),this.on("refresh",function(){o(function(){this.refresh()})}),this.on("destroy",function(){o(function(){this.destroy()}),
delete this.indicators})},_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(this.enabled){e.preventDefault()
var t,a,n,r,i=this
if(void 0===this.wheelTimeout&&i._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){i.options.snap||i._execEvent("scrollEnd"),i.wheelTimeout=void 0},400),"deltaX"in e)a=1===e.deltaMode?(t=-e.deltaX*this.options.mouseWheelSpeed,-e.deltaY*this.options.mouseWheelSpeed):(t=-e.deltaX,-e.deltaY)
else if("wheelDeltaX"in e)t=e.wheelDeltaX/120*this.options.mouseWheelSpeed,a=e.wheelDeltaY/120*this.options.mouseWheelSpeed
else if("wheelDelta"in e)t=a=e.wheelDelta/120*this.options.mouseWheelSpeed
else{if(!("detail"in e))return
t=a=-e.detail/3*this.options.mouseWheelSpeed}if(t*=this.options.invertWheelDirection,a*=this.options.invertWheelDirection,this.hasVerticalScroll||(t=a,a=0),this.options.snap)return n=this.currentPage.pageX,r=this.currentPage.pageY,0<t?n--:t<0&&n++,0<a?r--:a<0&&r++,void this.goToPage(n,r)
n=this.x+f.round(this.hasHorizontalScroll?t:0),r=this.y+f.round(this.hasVerticalScroll?a:0),this.directionX=0<t?-1:t<0?1:0,this.directionY=0<a?-1:a<0?1:0,0<n?n=0:n<this.maxScrollX&&(n=this.maxScrollX),0<r?r=0:r<this.maxScrollY&&(r=this.maxScrollY),this.scrollTo(n,r,0),1<this.options.probeType&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e,t,a,n,r
,i,o,l=0,s=0,c=0,u=this.options.snapStepX||this.wrapperWidth,d=this.options.snapStepY||this.wrapperHeight
if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(a=f.round(u/2),n=f.round(d/2);c>-this.scrollerWidth;){for(this.pages[l]=[],r=e=0;r>-this.scrollerHeight;)this.pages[l][e]={x:f.max(c,this.maxScrollX),y:f.max(r,this.maxScrollY),width:u,height:d,cx:c-a,cy:r-n},r-=d,e++
c-=u,l++}else for(e=(i=this.options.snap).length,t=-1;l<e;l++)o=m.getRect(i[l]),(0===l||o.left<=m.getRect(i[l-1]).left)&&(s=0,t++),this.pages[s]||(this.pages[s]=[]),c=f.max(-o.left,this.maxScrollX),r=f.max(-o.top,this.maxScrollY),a=c-f.round(o.width/2),n=r-f.round(o.height/2),this.pages[s][t]={x:c,y:r,width:o.width,height:o.height,cx:a,cy:n},c>this.maxScrollX&&s++
this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var e=this.options.snapSpeed||f.max(
f.max(f.min(f.abs(this.x-this.startX),1e3),f.min(f.abs(this.y-this.startY),1e3)),300)
this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0}
var a=0,n=this.pages.length,r=0
if(f.abs(e-this.absStartX)<this.snapThresholdX&&f.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage
for(0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<t?t=0:t<this.maxScrollY&&(t=this.maxScrollY);a<n;a++)if(e>=this.pages[a][0].cx){e=this.pages[a][0].x
break}for(n=this.pages[a].length;r<n;r++)if(t>=this.pages[0][r].cy){t=this.pages[0][r].y
break}return a==this.currentPage.pageX&&((a+=this.directionX)<0?a=0:a>=this.pages.length&&(a=this.pages.length-1),e=this.pages[a][0].x),r==this.currentPage.pageY&&((r+=this.directionY)<0?r=0:r>=this.pages[0].length&&(r=this.pages[0].length-1),t=this.pages[0][r].y),{x:e,y:t,pageX:a,pageY:r}},goToPage:function(e,t,a,n){n=n||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[e].length?t=this.pages[e].length-1:t<0&&(t=0)
var r=this.pages[e][t].x,i=this.pages[e][t].y
a=void 0===a?this.options.snapSpeed||f.max(f.max(f.min(f.abs(r-this.x),1e3),f.min(f.abs(i-this.y),1e3)),300):a,this.currentPage={x:r,y:i,pageX:e,pageY:t},this.scrollTo(r,i,a,n)},next:function(e,t){var a=this.currentPage.pageX,n=this.currentPage.pageY;++a>=this.pages.length&&this.hasVerticalScroll&&(a=0,n++),this.goToPage(a,n,e,t)},prev:function(e,t){var a=this.currentPage.pageX,n=this.currentPage.pageY;--a<0&&this.hasVerticalScroll&&(a=0,n--),this.goToPage(a,n,e,t)},_initKeys:function(e){var t,a={pageUp:33,
pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40}
if("object"==(0,c.default)(this.options.keyBindings))for(t in this.options.keyBindings)"string"==typeof this.options.keyBindings[t]&&(this.options.keyBindings[t]=this.options.keyBindings[t].toUpperCase().charCodeAt(0))
else this.options.keyBindings={}
for(t in a)this.options.keyBindings[t]=this.options.keyBindings[t]||a[t]
m.addEvent(i,"keydown",this),this.on("destroy",function(){m.removeEvent(i,"keydown",this)})},_key:function(e){if(this.enabled){var t,a=this.options.snap,n=a?this.currentPage.pageX:this.x,r=a?this.currentPage.pageY:this.y,i=m.getTime(),o=this.keyTime||0
switch(this.options.useTransition&&this.isInTransition&&(t=this.getComputedPosition(),this._translate(f.round(t.x),f.round(t.y)),this.isInTransition=!1),this.keyAcceleration=i-o<200?f.min(this.keyAcceleration+.25,50):0,e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?n+=a?1:this.wrapperWidth:r+=a?1:this.wrapperHeight
break
case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?n-=a?1:this.wrapperWidth:r-=a?1:this.wrapperHeight
break
case this.options.keyBindings.end:n=a?this.pages.length-1:this.maxScrollX,r=a?this.pages[0].length-1:this.maxScrollY
break
case this.options.keyBindings.home:r=n=0
break
case this.options.keyBindings.left:n+=a?-1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.up:r+=a?1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.right:n-=a?-1:5+this.keyAcceleration>>0
break
case this.options.keyBindings.down:r-=a?1:5+this.keyAcceleration>>0
break
default:return}a?this.goToPage(n,r):(0<n?(n=0,this.keyAcceleration=0):n<this.maxScrollX&&(n=this.maxScrollX,this.keyAcceleration=0),0<r?(r=0,this.keyAcceleration=0):r<this.maxScrollY&&(r=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(n,r,0),this.keyTime=i)}},_animate:function(i,o,l,s){var c=this,u=this.x,d=this.y,f=m.getTime(),p=f+l
this.isAnimating=!0,function e(){var t,a,n,r=m.getTime()
if(p<=r)return c.isAnimating=!1,c._translate(i,o),void(c.resetPosition(c.options.bounceTime)||c._execEvent("scrollEnd"))
n=s(r=(r-f)/l),t=(i-u)*n+u,a=(o-d)*n+d,c._translate(t,a),c.isAnimating&&h(e),3==c.options.probeType&&c._execEvent("scroll")}()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e)
break
case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e)
break
case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)
break
case"orientationchange":case"resize":this._resize()
break
case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e)
break
case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e)
break
case"keydown":this._key(e)
break
case"click":this.enabled&&!e._constructed&&(e.preventDefault(),e.stopPropagation())}}},s.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e)
break
case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e)
break
case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(i,"touchmove",this),m.removeEvent(i,
m.prefixPointerEvent("pointermove"),this),m.removeEvent(i,"mousemove",this),m.removeEvent(i,"touchend",this),m.removeEvent(i,m.prefixPointerEvent("pointerup"),this),m.removeEvent(i,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var t=e.touches?e.touches[0]:e
e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=t.pageX,this.lastPointY=t.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(i,"touchmove",this),this.options.disablePointer||m.addEvent(i,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(i,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t,a,n,r,i=e.touches?e.touches[0]:e,o=m.getTime()
this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,t=i.pageX-this.lastPointX,this.lastPointX=i.pageX,a=i.pageY-this.lastPointY,this.lastPointY=i.pageY,n=this.x+t,r=this.y+a,this._pos(n,r),1==this.scroller.options.probeType&&300<o-this.startTime?(this.startTime=o,this.scroller._execEvent("scroll")):1<this.scroller.options.probeType&&this.scroller._execEvent("scroll"),e.preventDefault(),e.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),
e.stopPropagation(),m.removeEvent(i,"touchmove",this),m.removeEvent(i,m.prefixPointerEvent("pointermove"),this),m.removeEvent(i,"mousemove",this),this.scroller.options.snap){var t=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),a=this.options.snapSpeed||f.max(f.max(f.min(f.abs(this.scroller.x-t.x),1e3),f.min(f.abs(this.scroller.y-t.y),1e3)),300)
this.scroller.x==t.x&&this.scroller.y==t.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=t,this.scroller.scrollTo(t.x,t.y,a,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0
var t=m.style.transitionDuration
if(t&&(this.indicatorStyle[t]=e+"ms",!e&&m.isBadAndroid)){this.indicatorStyle[t]="0.0001ms"
var a=this
h(function(){"0.0001ms"===a.indicatorStyle[t]&&(a.indicatorStyle[t]="0s")})}},transitionTimingFunction:function(e){this.indicatorStyle[m.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime(),
this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,
"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),m.getRect(this.wrapper),this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,
this.options.resize?(this.indicatorWidth=f.max(f.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),
this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=f.max(f.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(
this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&f.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&f.round(this.sizeRatioY*this.scroller.y)||0
this.options.ignoreBoundaries||(e<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=f.max(this.indicatorWidth+e,8),this.indicatorStyle.width=this.width+"px"),e=this.minBoundaryX):e>this.maxBoundaryX?e="scale"==this.options.shrink?(this.width=f.max(this.indicatorWidth-(e-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,
this.indicatorStyle.width=this.width+"px"),t<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=f.max(this.indicatorHeight+3*t,8),this.indicatorStyle.height=this.height+"px"),t=this.minBoundaryY):t>this.maxBoundaryY?t="scale"==this.options.shrink?(this.height=f.max(this.indicatorHeight-3*(t-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(
this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=e,this.y=t,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=e+"px",this.indicatorStyle.top=t+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?f.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?f.round(t/this.sizeRatioY
):this.scroller.y,this.scroller.scrollTo(e,t)},fade:function(e,t){if(!t||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null
var a=e?250:500,n=e?0:300
e=e?"1":"0",this.wrapperStyle[m.style.transitionDuration]=a+"ms",this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e,this.visible=+e}.bind(this,e),n)}}},e.utils=m,i.IScroll=e}(window,document,Math)},FYsW:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"runner:generate:widgets-query-map":return(0,r.default)({},e,{widgetQueryMap:(0,i.getScreenWidgetsMap)(Widget.irecords)})
case"runner:update:state":return(0,r.default)({},e,n)
case"runner:reset:state":return o
default:return e}}
var r=n(a("MVZn")),i=a("IB8Z"),o={widgetQueryMap:{},activeCid:"",transition:{name:"slideleft",delay:0,duration:2e3,offset:100,callback:function(){}},history:[],screenInfoMap:{}}},FkXu:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getFontWeightStrDepandOnBoldType=t.getFontWeightNumDepandOnBoldType=t.getFontWeightStr=t.getFontFamilyAndWeightText=t.getTypeWeightList=t.WESTERN_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMON_FONT_FAMILY_LIST=t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=void 0
var r=n(a("RIqP")),i=n(a("yl0K")),o=i.default.HOSTED_COMMERCIAL_FANGZHENG_LIST,l=i.default.HOSTED_COMMON_LIST,s=i.default.WESTERN_COMMON_LIST,c=[].concat((0,r.default)(o),(0,r.default)(l),(0,r.default)(s)),u=function(e){return{label:e.label,value:e.family,limitedDevices:e.limitedDevices}},d=o.map(u)
t.HOSTED_COMMERCIAL_FANGZHENG_FONT_FAMILY_LIST=d
var f=l.map(u)
t.HOSTED_COMMON_FONT_FAMILY_LIST=f
var p=s.map(u)
t.WESTERN_COMMON_FONT_FAMILY_LIST=p
var h={regular:400,light:300,bold:700},m={regular:I18N.rich_text_settings.weight.regular,light:I18N.rich_text_settings.weight.light,bold:I18N.rich_text_settings.weight.bold}
t.getTypeWeightList=function(t){var e=c.find(function(e){return e.family===t})
return e?e.typeList.map(function(e){return{label:m[e],value:e}}):[]}
t.getFontFamilyAndWeightText=function(t,e){var a=o.find(function(e){return e.family===t})
return a?"".concat(a.label,"-").concat(m[e]):"".concat(t,"-").concat(e)}
var v=function(t){return h[t]?t:Object.keys(h).find(function(e){return String(h[e])===String(t)})||"regular"}
t.getFontWeightStr=v
t.getFontWeightNumDepandOnBoldType=function(e,t){var a=h[e]
return Number(t)?700:a}
t.getFontWeightStrDepandOnBoldType=function(e,t,a){var n=v(e)
return Number(a)?t:n}},G916:function(e,t,a){e.exports={nav:"Hiz6yu3fLMLU-8yBEpNTi","nav-item":"_10LJDTQtIaisEickywA9Y6"}},GWLA:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("MVZn")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=r(a("17x9")),h=n(a("q1tI")),m=a("6XO9"),v=a("wYtL"),g=(r(a("JSCU")),a("h0FN")),y=r(a("zy85")),b=r(a("UbMB")).default.bind(y.default),S={type:0,name:"自定义链接",target_cid:"screen-cid-1",transition:{name:"slide-left",duration:2e3}},w=[{value:1,label:"screen-link"},{value:2,label:"state-link"},{value:3,label:"panel-link"},{value:4,label:"widget-link"}],E=Link.TYPE,k=E.screen_link,
C=E.state_link,T=E.panel_link,x=E.widget_link,_=function(e){function a(){var t
return(0,o.default)(this,a),t=(0,s.default)(this,(0,c.default)(a).call(this)),(0,f.default)((0,u.default)(t),"handleLinkType",function(e){t.updateLinkAttr({type:Number(e)})}),(0,f.default)((0,u.default)(t),"handleLinkTarget",function(e){return t.updateLinkAttr({targetCid:e})}),(0,f.default)((0,u.default)(t),"updateLinkAttr",function(e){t.setState({currentLink:(0,i.default)({},t.state.currentLink,e)})}),(0,f.default)((0,u.default)(t),"handleSubmit",function(){var e=t.state.currentLink
t.props.dispatch,console.log(e)}),t.state={currentLink:S},t}return(0,d.default)(a,e),(0,l.default)(a,[{key:"render",value:function(){var e=this.state.currentLink
return h.default.createElement("div",{className:b("runner-control-panel")},h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"链接类型"),h.default.createElement(v.Select,{value:e.type,optionList:w,onChange:this.handleLinkType})),M(e),h.default.createElement("button",{className:"submit",onClick:this.handleSubmit},"执行"))}}]),a}(h.PureComponent)
t.default=_,(0,f.default)(_,"propTypes",{dispatch:p.default.func})
var M=function(e){switch(e.type){case k:return h.default.createElement(P,{link:e})
case C:return h.default.createElement(I,{link:e})
case T:return h.default.createElement(N,{link:e})
case x:return h.default.createElement(R,{link:e})
default:return null}},P=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[]
return MB.currentProject.cscreens().forEach(function(e){e.cid!==MB.currentScreen.cid&&t.push({value:e.cid,label:e.name})}),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标页面"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"动画名称"),h.default.createElement(v.Select,{value:e.transition,
optionList:g.TRANSITIONS,onChange:this.handleLinkTarget})))}}]),t}(h.PureComponent),I=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=[{cid:"default",name:"默认状态"}]
return MB.currentScreen.cscreenstates().forEach(function(e){e.cid!==MB.currentScreen.state_cid&&t.push({value:e.cid,label:e.name})}),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(
m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent),N=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cpanels().map(function(e){return{value:e.cid,label:e.display_name}})
return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent),R=function(e){
function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.link,t=MB.currentScreen.cwidgets().map(function(e){return{value:e.cid,label:e.display_name}})
return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"line"},h.default.createElement("span",null,"目标状态"),h.default.createElement(v.Select,{value:e.targetCid,optionList:t,onChange:this.handleLinkTarget})),h.default.createElement("div",{className:"detail"},h.default.createElement("div",{className:"desc"},"神奇移动"),h.default.createElement(m.Switch,{size:"small",isChecked:"none"===e.transition,onChange:this.handleLinkChange})))}}]),t}(h.PureComponent)},Gbs1:function(e,t,
a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getProjectShell=t.getProjectShellSizeWithOrientation=t.canSetDeviceShell=void 0
var r=n(a("MVZn")),d=n(a("J4zp")),i=n(a("6FGi")),l=a("2EV6")
t.canSetDeviceShell=function(e){return!!i.default[e.model]}
t.getProjectShellSizeWithOrientation=function(e,t,a){var n,r,i=f(e,t),o="landscape"===a
if("device"===t&&i.bg){var l=o?[i.height,i.width]:[i.width,i.height],s=(0,d.default)(l,2)
n=s[0],r=s[1]}else{var c=o?[e.height,e.width]:[e.width,e.height],u=(0,d.default)(c,2)
n=u[0],r=u[1]}return{width:n,height:r}}
var f=function(e,t){return o(e,t)||s(e,t)}
t.getProjectShell=f
var o=function(e,t){e.device
var a=e.model
return"device"!==t?null:i.default[a]?(0,r.default)({},i.default[a]):null},s=function(e,t){var a="none"===t?0:12,n=e.width+2*a,r=e.height+2*a,i=(0,l.canProjectSetOrientation)(e)?[Math.min(n,r),Math.max(n,r)]:[n,r],o=(0,d.default)(i,2)
return{device:"default",top:a,left:a,width:o[0],height:o[1]}}},H27A:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=r(a("o0o1")),i=r(a("yXPU")),o=r(a("lwsE")),l=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),f=r(a("7W2i")),p=r(a("lSNA")),m=n(a("q1tI")),h=r(a("17x9")),v=a("6XO9"),g=a("DqDi"),y=a("i6OX"),b=r(a("4QcC")),S=r(a("Ur7v")),w=r(a("lCKy")),E=r(a("iX79")),k=a("/5+U"),C=a("1iCU"),T=a("t3Un"),x=a("2EV6"),_=a("Gbs1"),M=a("6x+O"),P=r(a("rtgd")),I=r(a("UbMB")).default.bind(P.default),N=[{label:I18N.preview.preview,icon:m.default.createElement(y.SVGIcon,{name:"design/preview"})},{
label:I18N.preview_panel.developer_mode,icon:m.default.createElement(y.SVGIcon,{name:"design/inspect"})},{label:I18N.preview_panel.comment,icon:m.default.createElement(y.SVGIcon,{name:"design/comment"})}],R=N.slice(0,2),L=function(e){function i(){var e,n;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r]
return n=(0,c.default)(this,(e=(0,u.default)(i)).call.apply(e,[this].concat(a))),(0,p.default)((0,d.default)(n),"handleTabChange",function(e){var t=n.props.dispatch,a=C.PREVIEW_CONFIG[e]
t({type:"entry:preview:select",payload:{toolbarActiveItem:C.PREVIEW_CONFIG[e]}}),MB.event("preview","".concat(C.TOOLBAR_TRAKING_CONFIG[a]))}),n}return(0,f.default)(i,e),(0,l.default)(i,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.toolbarActiveItem,a=e.loadSliceUrl
t!=this.props.toolbarActiveItem&&this.props.dispatch({type:"reducer:preview-toolbar:update",payload:{isShowColorPicker:!1,isSelectLayer:!1}}),a!=this.props.loadSliceUrl&&O(a)}},{key:"render",value:function(){var e=this.props,t=e.scale,a=e.project,n=e.dispatch,r=e.toolbarActiveItem,i=e.isScrollable,o=e.isHighlight,l=e.isStickyShow,s=e.shellType,c=e.showToolBarText,u=C.PREVIEW_CONFIG.indexOf(r)||0,d=r!=C.PREVIEW,f=a.name||"",p=MB.isHTMLZip()?R:N,h=m.default.createElement(b.default,{scale:t,dispatch:n})
return"project"!==(0,x.getProjectType)(a)?h:m.default.createElement("header",{className:I("preview-toolbar",{"hide-text":!c})},m.default.createElement("div",{className:"toolbar-left"},A()&&m.default.createElement("a",{title:I18N.back,onClick:j,className:"back-icon"},m.default.createElement(y.SVGIcon,{name:"angle_bracket_left"})),m.default.createElement(v.AppName,{name:(0,M.getTextOfHTML)(f)})),m.default.createElement("div",{className:"toolbar-main"},h,m.default.createElement("div",{
className:"toolbar-main-wrapper"},m.default.createElement(g.NavigationBar,{tabs:p,activeIndex:u,onChange:this.handleTabChange,className:"preview-toolbar-nav",hideBorder:!0}))),m.default.createElement("div",{className:"toolbar-right"},m.default.createElement(w.default,{canSetDeviceShell:(0,_.canSetDeviceShell)(a),disabled:d,isScrollable:i,isHighlight:o,isStickyShow:l,shellType:s,dispatch:n}),m.default.createElement("span",{className:"line"}),m.default.createElement(S.default,{dispatch:n}),
m.default.createElement("span",{className:"line"}),m.default.createElement(E.default,{dispatch:n})))}}]),i}(m.PureComponent)
t.default=L,(0,p.default)(L,"propTypes",{scale:h.default.number,project:h.default.object,toolbarActiveItem:h.default.string,loadSliceUrl:h.default.string,showToolBarText:h.default.bool,isScrollable:h.default.bool,isHighlight:h.default.bool,isStickyShow:h.default.bool,shellType:h.default.string,dispatch:h.default.func})
var j=function(){A()&&MB.designer.backDesign()},A=function(){return(window.parent===window||/^\/app\/(design|preview)/.test(window.parent.location.pathname))&&(MB.isDashboard||!MB.f.inSharing&&"file:"!==window.location.protocol)},O=function(){var t=(0,i.default)(s.default.mark(function e(a){var n,r,i,o,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=1
case 2:if(n)return e.next=5,(0,k.setTimeoutAsync)(Math.min(2e3*i++,1e4))
e.next=16
break
case 5:return e.next=7,t=a,(0,T.requestJSON)(t,null,{method:"POST"})
case 7:if(o=e.sent,l=o.url,"ok"===o.status&&(n=!1,r=l),20<i)return(0,k.downloadFail)(),e.abrupt("return",!1)
e.next=14
break
case 14:e.next=2
break
case 16:return(0,k.downloadWithATag)({url:"/".concat(r),type:"zip"}),e.abrupt("return",!0)
case 18:case"end":return e.stop()}var t},e)}))
return function(e){return t.apply(this,arguments)}}()},HFhh:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=n(a("MVZn")),s=n(a("J4zp")),r=a("WVP6"),i={id:null,name:"",email:"",avatar:"",plan:{state:"",type:"free",rawType:"free",daysLeft:""}},o=(0,r.createStateStore)(i),c=o.getState,u=o.setState,d=o.wrapEntry,f={"user:set":d(function(e,t,a){var n,r,i,o,l=t.dispatch,s=a.payload,c=void 0===s?{}:s,u=c.id,d=void 0===u?null:u,f=c.name,p=void 0===f?"":f,h=c.email,m=void 0===h?"":h,v=c.avatar
l({type:"reducer:user:update",payload:g(e,{id:d,name:p,email:m,avatar:void 0===v?"":v,plan:(n=c,r=n.plan,i=n.state,n.limitation,o=n.days_left,{state:i||"",type:"active"===i&&r||"free",rawType:r||"free",daysLeft:o||""})})})}),"user:clear":d(function(e,t,a){(0,t.dispatch)({type:"reducer:user:update",payload:i})})}
var g=function(e,t){for(var a=Object.entries(t),n=0;n<a.length;n++){var r=(0,s.default)(a[n],2),i=r[0],o=r[1]
if(e[i]!==o)return(0,l.default)({},e,t)}return e},p={entryMap:f,getState:c,setState:u}
t.default=p},HNPj:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("a1gu")),l=n(a("Nsbk")),s=n(a("7W2i")),c=n(a("q1tI")),u=n(a("17x9")),d=n(a("Y69h")),f=n(a("7Rdd")),p=n(a("0uCA")),h=n(a("mCdf")),m=a("ZXhj"),v=a("IdPL"),g=n(a("TjoA")),y=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e){return!((0,m.checkSameRect)(e.baseRect,this.props.baseRect)&&(0,m.checkSameRect)(e.refRect,
this.props.refRect)&&(0,m.checkSameRect)(e.screen,this.props.screen)&&e.theme===this.props.theme)}},{key:"render",value:function(){var e=this.props,t=e.baseRect,a=e.refRect,n=e.screen,r=e.theme,i=e.renderValue,o=v.STYLE_MAP[r].verboseAuxiliaryLines
return c.default.createElement("div",{className:g.default["distance-measurement-container"]},c.default.createElement(d.default,{baseRect:t,refRect:a,screen:n,style:v.STYLE_MAP[r].distanceMarks,renderValue:i}),o?c.default.createElement(p.default,{refRect:a,screen:n,style:v.STYLE_MAP[r].auxiliaryLines}):c.default.createElement(h.default,{baseRect:t,refRect:a,screen:n,style:v.STYLE_MAP[r].auxiliaryLines}),c.default.createElement(f.default,{refRect:a,screen:n,style:v.STYLE_MAP[r].refRectBorder}))}}]),t}(
c.default.Component);(t.default=y).propTypes={baseRect:u.default.object,refRect:u.default.object,screen:u.default.object,theme:u.default.string,renderValue:u.default.func}},HfeQ:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),w=n(a("q1tI")),E=a("6XO9")
a("wfO3")
var f=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.isOpen,n=e.type,r=e.alertType,i=e.title,o=e.desc,l=void 0===o?i:o,s=e.isHTML,c=e.onClose,u=void 0===c?function(){return t({type:"container:modal:close"})}:c,d=e.onCancel,f=void 0===d?function(){return null}:d,p=e.onConfirm,h=e.canClose,m=e.canCancel,v=e.canConfirm,g=e.cancelText,
y=e.confirmText,b=m?function(){f&&f(),u&&u()}:void 0,S=v?function(){p&&p(),u&&u()}:void 0
return w.default.createElement(E.Modal,{isOpen:a,type:n,portalClassName:"global-alert-portal",title:i!==l&&i?i:I18N.reminder,onClose:function(){"function"==typeof f&&f(),u()},canClose:h,onCancel:b,onConfirm:S,cancelText:g,confirmText:y},s?w.default.createElement("p",{className:"desc",dangerouslySetInnerHTML:{__html:l}}):w.default.createElement("div",{className:"desc"},l),"prompt"===r&&w.default.createElement(E.FormLabel,{name:I18N.password},w.default.createElement(E.Input,{type:"password",
className:"prompt-pwd"})))}}]),t}(w.PureComponent)
t.default=f,(0,u.default)(f,"propTypes",{dispatch:d.default.func,isOpen:d.default.bool,type:d.default.string,alertType:d.default.oneOf(["confirm","alert","prompt"]),onClose:d.default.func,onCancel:d.default.func,onConfirm:d.default.func,canClose:d.default.bool,canCancel:d.default.bool,canConfirm:d.default.bool,confirmText:d.default.string,cancelText:d.default.string,title:d.default.string,desc:d.default.any,isHTML:d.default.bool}),(0,u.default)(f,"defaultProps",{type:"alert"})},Hlt7:function(e,t,a){
"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.scrollParent=t.checkInvision=t.checkOverflowVisbile=t.filterSearch=void 0
var u=n(a("MVZn")),d=n(a("J4zp")),p=n(a("i8i4"))
t.filterSearch=function(e,t,a){for(var n=[],r=0,i=Object.entries(e),o=0;o<i.length;o++){var l=(0,d.default)(i[o],2),s=l[0],c=l[1]
t&&0<t.length&&c.toLowerCase().includes(t)&&n.push((0,u.default)({},a[s],{index:r++}))}return n}
var r=function(e){if(!e)return document.documentElement
for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement
var r=window.getComputedStyle(n),i=r.position,o=r.overflow,l=r["overflow-x"],s=r["overflow-y"]
if("static"===i&&t&&(n=n.parentNode),a.test(o)&&a.test(l)&&a.test(s))return n
n=n.parentNode}return e.ownerDocument||e.documentElement||document.documentElement}
t.scrollParent=r
var h=0,m=0,i=function(e,t){var a,n,r=p.default.findDOMNode(e)
try{var i=t.getBoundingClientRect()
a=i.top,n=i.height}catch(e){a=h,n=m}var o,l,s=window.innerHeight||document.documentElement.clientHeight,c=Math.max(a,0),u=Math.min(s,a+n)-c
try{var d=r.getBoundingClientRect()
o=d.top,l=d.height}catch(e){o=h,l=m}var f=o-c
return f<=u&&0<=f+l}
t.checkOverflowVisbile=i
t.checkInvision=function(e){var t=p.default.findDOMNode(e),a=r(t)
return!!i(e,a)}},Hrzm:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=a("uavl"),m=a("zQyp")
a("dAiO")
var v=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return r=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(r),"renderStickies",function(){var e=r.props,t=e.screenCid,a=e.stateCid
if(!t||!a)return null
var n=[]
return Widget.all().forEach(function(e){"sticky"===e.name&&e.screen_cid===t&&n.push(Widgetstate.find(a+e.cid)||e)}),n.map(function(e){return p.default.createElement(g,{key:e.cid,sticky:e})})}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){return p.default.createElement("div",{id:"sticky-container",onClick:this.handleClick},p.default.createElement("div",{id:"stickies"},this.renderStickies()))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{screenCid:i.default.string,stateCid:i.default.string})
var g=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(a),"handleClick",function(e){var t=a.props.sticky
Link.find(t.link_cids)&&MB.runner.eventHandler.prepareJump(e,["tap","click"])}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.sticky,t=(0,m.getWidgetClassName)(e,"p"),a=(0,m.getWidgetStyle)(e,"p"),n=Link.find(e.link_cids)?e.link_cids:""
return p.default.createElement("div",{key:e.cid,"data-cid":e.cid,"data-link_cid":n,id:"widget".concat(e.cid,"p"),className:t,style:a,onClick:this.handleClick},(0,h.getWidgetContent)(e))}}]),i}(p.PureComponent);(0,f.default)(g,"propTypes",{sticky:i.default.object})},IV71:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"WebpackInterface",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"mixConfig",{enumerable:!0,get:function(){return i.default}}),t.default=void 0
var r=n(a("jeLk")),i=n(a("JPxj")),o=r.default
t.default=o},Ibie:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.patchWidgetSize=void 0
t.patchWidgetSize=function(e,t){var a,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:20
switch(e.name){case"status_bar":a=0
break
case"keyboard":case"tab_bar":a=t.height-e.height
break
case"navigation_bar":a=n
break
default:a=e.top}return e.top=a,r(e.name)&&(e.width=t.width),e}
var r=function(e){return["status_bar","keyboard","tab_bar"].includes(e)}},IdPL:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.STYLE_MAP=void 0
t.STYLE_MAP={design:{distanceMarks:{showStartAndEndBoundary:!1,dashed:!1,colorForLines:"#eb5648",colorForText:"#eb5648"},refRectBorder:{dashed:!1,colorForLines:"#eb5648"},verboseAuxiliaryLines:!1,auxiliaryLines:{dashed:!0,colorForLines:"#eb5648"}},preview:{distanceMarks:{showStartAndEndBoundary:!0,dashed:!0,colorForLines:"#ff7100"},refRectBorder:{dashed:!0,colorForLines:"#1e98ea"},verboseAuxiliaryLines:!0,auxiliaryLines:{dashed:!0,colorForLines:"#1e98ea"}}}},J2m7:function(e,t,a){var n=a("XKAG")(a("UfWW"))
e.exports=n},JPxj:function(e,t,a){"use strict"
function n(e,t,a){return a?t?e(t,a):a:t}function r(e,t){var a={}
function n(e,t){a[e]=t}for(var r in e)n(r,e[r])
for(var i in t)n(i,t[i])
return a}function i(e,t){return function(){return e.apply(void 0,arguments),t.apply(void 0,arguments)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={containerReducerMap:{},viewMap:{},sagaMap:{},extendCallback:null}
return e.forEach(function(e){t.containerReducerMap=n(r,t.containerReducerMap,e.containerReducerMap),t.viewMap=n(r,t.viewMap,e.viewMap),t.extendCallback=n(i,t.extendCallback,e.extendCallback),t.sagaMap=n(r,t.sagaMap,e.sagaMap)}),t}},JSCU:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("TSYQ")),m=r(a("ctY3")),v=function(e){function a(e){var t
return(0,i.default)(this,a),t=(0,l.default)(this,(0,s.default)(a).call(this,e)),(0,d.default)((0,c.default)(t),"handleChange",function(e){return t.setState({value:e})}),(0,d.default)((0,c.default)(t),"handleBlur",function(){""===t.state.value&&t.setState({value:t.initialValue}),t.props.onConfirm(t.state.value)}),t.state={value:e.value},t.initialValue=e.value,t}return(0,u.default)(a,e),(0,o.default)(a,[{key:"render",value:function(){var e=this.props,t=e.isEditing,a=e.className,n=this.state.value
return p.default.createElement(m.default,{value:n,className:(0,h.default)("editable-span",a),editing:t,onBlur:this.handleBlur,onChange:this.handleChange})}}]),a}(p.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{value:f.default.string,className:f.default.string,isEditing:f.default.bool,onConfirm:f.default.func})},JXIg:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=(0,a("WVP6").createStateStore)({teamCid:null,projectCid:null,screenCid:null,userRole:"guest"}),r=n.getState,i=n.setState,o={"current:set":(0,n.wrapEntry)(function(e,t,a){var n,r=t.dispatch,i=a.payload,o=i.project,l=i.screen,s=i.userCollaborator
r({type:"reducer:current:update",payload:{teamCid:o&&o.team_cid||null,projectCid:o&&o.cid||null,screenCid:l&&l.cid||null,userRole:(n=s&&s.role,c.has(n)?n:"guest")}})})},c=new Set(["owner","admin","editor","viewer"])
var l={entryMap:o,getState:r,setState:i}
t.default=l},JfQ8:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.receiveResourceError=t.RECEIVE_RESOURCE_ERROR=t.receiveResourceSuccess=t.RECEIVE_RESOURCE_SUCCESS=t.SET_VISIBILITY_SCREEN=void 0
var i=n(a("MVZn"))
t.SET_VISIBILITY_SCREEN="SET_VISIBILITY_SCREEN"
var o="RECEIVE_RESOURCE_SUCCESS"
t.RECEIVE_RESOURCE_SUCCESS=o
t.receiveResourceSuccess=function(e,t){var a=t.document,n=t.layers,r=t.artboard
return{type:o,payload:(0,i.default)({screenID:e},a,{layers:n,artboard:r})}}
var r="RECEIVE_RESOURCE_ERROR"
t.RECEIVE_RESOURCE_ERROR=r
t.receiveResourceError=function(e,t){return{type:r,payload:{screenID:e,error:t}}}},K7IS:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("TSYQ")),m=r(a("4dyd")),v=r(a("mesP")),g=r(a("mMVB")),y=a("mC/1"),b=function(e){function i(){var e,n;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r]
return n=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(n),"handleResize",function(){var e=document.querySelector("#preview_scrollBar_viewport").getBoundingClientRect(),t=e.width,a=e.height
n.props.dispatch({type:"preview:scrollbar:viewport",payload:{width:t,height:a}})}),(0,f.default)((0,u.default)(n),"handleBackToOrigin",function(){n.props.dispatch({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}})}),n}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.handleResize()}},{key:"render",value:function(){var e=this.props,t=e.isLayerActive,a=e.isDisplaced
return p.default.createElement(y.StyledMainContent,{id:"preview_scrollBar_viewport"},t&&p.default.createElement(v.default,null),p.default.createElement(y.StyledResetButton,{className:(0,h.default)({"is-show":a}),onClick:this.handleBackToOrigin},I18N.click_to_origin),p.default.createElement(g.default,null),p.default.createElement(m.default,{onResize:this.handleResize}))}}]),i}(p.PureComponent)
t.default=b,(0,f.default)(b,"propTypes",{isLayerActive:i.default.bool,isDisplaced:i.default.bool,dispatch:i.default.func})},KHYK:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(a("pVnL")),l=n(a("lwsE")),i=n(a("W8MJ")),s=n(a("a1gu")),c=n(a("Nsbk")),u=n(a("PJYZ")),d=n(a("7W2i")),f=n(a("lSNA")),r=n(a("MVZn")),p=n(a("J4zp")),h=n(a("17x9")),m=n(a("q1tI")),v=n(a("HNPj")),g=a("/5+U"),y=n(a("dZ9F")),b=function(e){var t=e.kind?0:e.rotation,a=(0,g.getMinBoundingRect)((0,r.default)({},e,{rotate:t})),n=(0,p.default)(a,4)
return{top:n[0],left:n[1],width:n[2],height:n[3]}},S=function(e){function r(){var e,i;(0,l.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return i=(0,s.default)(this,(e=(0,c.default)(r)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(i),"renderValue",function(e){var t=i.props,a=t.ratio,n=t.distanceUnit,r=i.getValueRatio()
return m.default.createElement(y.default,(0,o.default)({ratio:a,unit:n,valueRatio:r},e))}),(0,f.default)((0,u.default)(i),"getValueRatio",function(){var e=i.props.selectedLayer,t=e.src_width,a=e.width
return t?t/a:1}),i}return(0,d.default)(r,e),(0,i.default)(r,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.selectedLayer,n=e.hoveringLayer,r=e.screen
if(!t)return null
var i=b(a),o=n?b(n):{top:0,left:0,width:r.width,height:r.height}
return m.default.createElement(v.default,{baseRect:i,refRect:o,screen:r,renderValue:this.renderValue,theme:"preview"})}}]),r}(m.default.Component)
S.propTypes={show:h.default.bool,selectedLayer:h.default.object,hoveringLayer:h.default.object,screen:h.default.object}
var w=S
t.default=w},KKmY:function(e,t,a){},KUpD:function(e,t,a){e.exports={"install-page-wrapper":"_3INFrWQbU2BBH5IPDv0aSv","install-page":"SSwFfJxlXtECHTgNLr7PZ"}},Kgn6:function(e,t,a){"use strict"
var o=void 0
!function(t){var l,s={},c={16:!1,18:!1,17:!1,91:!1},a="all",u={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},n={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},d=function(e){return n[e]||e.toUpperCase().charCodeAt(0)},f=[]
for(l=1;l<20;l++)n["f"+l]=111+l
function p(e,t){for(var a=e.length;a--;)if(e[a]===t)return a
return-1}function h(e,t){if(e.length!=t.length)return!1
for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1
return!0}var m={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"}
function r(e){var t,a,n,r,i,o
if(t=e.keyCode,-1==p(f,t)&&f.push(t),93!=t&&224!=t||(t=91),t in c)for(n in c[t]=!0,u)u[n]==t&&(v[n]=!0)
else if(function(e){for(l in c)c[l]=e[m[l]]}(e),v.filter.call(this,e)&&t in s)for(o=g(),r=0;r<s[t].length;r++)if((a=s[t][r]).scope==o||"all"==a.scope){for(n in i=0<a.mods.length,c)(!c[n]&&-1<p(a.mods,+n)||c[n]&&-1==p(a.mods,+n))&&(i=!1);(0!=a.mods.length||c[16]||c[18]||c[17]||c[91])&&!i||!1===a.method(e,a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function v(e,t,a){var n,r
n=y(e),void 0===a&&(a=t,t="all")
for(var i=0;i<n.length;i++)r=[],1<(e=n[i].split("+")).length&&(r=b(e),e=[e[e.length-1]]),e=e[0],(e=d(e))in s||(s[e]=[]),s[e].push({shortcut:n[i],scope:t,method:a,key:n[i],mods:r})}for(l in u)v[l]=!1
function g(){return a||"all"}function y(e){var t
return""==(t=(e=e.replace(/\s/g,"")).split(","))[t.length-1]&&(t[t.length-2]+=","),t}function b(e){for(var t=e.slice(0,e.length-1),a=0;a<t.length;a++)t[a]=u[t[a]]
return t}function e(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,function(){a(window.event)})}e(document,"keydown",function(e){r(e)}),e(document,"keyup",function(e){var t,a=e.keyCode,n=p(f,a)
if(0<=n&&f.splice(n,1),93!=a&&224!=a||(a=91),a in c)for(t in c[a]=!1,u)u[t]==a&&(v[t]=!1)}),e(window,"focus",function(){for(l in c)c[l]=!1
for(l in u)v[l]=!1})
var i=t.key
t.key=v,t.key.setScope=function(e){a=e||"all"},t.key.getScope=g,t.key.deleteScope=function(e){var t,a,n
for(t in s)for(a=s[t],n=0;n<a.length;)a[n].scope===e?a.splice(n,1):n++},t.key.filter=function(e){var t=(e.target||e.srcElement).tagName
return!("INPUT"==t||"SELECT"==t||"TEXTAREA"==t)},t.key.isPressed=function(e){return"string"==typeof e&&(e=d(e)),-1!=p(f,e)},t.key.getPressedKeyCodes=function(){return f.slice(0)},t.key.noConflict=function(){var e=t.key
return t.key=i,e},t.key.unbind=function(e,t){var a,n,r,i,o,l=[]
for(a=y(e),i=0;i<a.length;i++){if(1<(n=a[i].split("+")).length&&(l=b(n)),e=n[n.length-1],e=d(e),void 0===t&&(t=g()),!s[e])return
for(r=0;r<s[e].length;r++)(o=s[e][r]).scope===t&&h(o.mods,l)&&(s[e][r]={})}},void 0!==o&&(o.exports=v)}(window)},Kkl0:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.enterLayer=t.ENTER_LAYER=t.activateLayer=t.ACTIVATE_LAYER=t.selectLayer=t.SELECT_LAYER=t.requestSelectLayer=t.REQUEST_SELECT_LAYER=void 0
var n="REQUEST_SELECT_LAYER"
t.REQUEST_SELECT_LAYER=n
t.requestSelectLayer=function(e){!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
return{type:n,payload:{layerID:e}}}
var r="SELECT_LAYER"
t.SELECT_LAYER=r
t.selectLayer=function(e){return{type:r,payload:{layerID:e}}}
var i="ACTIVATE_LAYER"
t.ACTIVATE_LAYER=i
t.activateLayer=function(e){return MB.event("preview","点击了 Layer 元素"),{type:i,payload:{layerID:e}}}
var o="ENTER_LAYER"
t.ENTER_LAYER=o
t.enterLayer=function(e){return{type:o,payload:{layerID:e}}}},Kurm:function(e,t,a){e.exports={"full-screen-actions":"_2lLtO5YYxmdjnpavi3vbxH"}},KwMD:function(e,t){e.exports=function(e,t,a,n){for(var r=e.length,i=a+(n?1:-1);n?i--:++i<r;)if(t(e[i],i,e))return i
return-1}},L0cU:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("4dyd")),m=r(a("xtk/")),v=a("/N2d"),g=a("MURh"),y=function(e){function t(e){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(a),"setContainerRef",function(e){return a.$container=e}),(0,d.default)((0,c.default)(a),"updateContainerRect",function(){return a.setState({containerRect:a.$container.getBoundingClientRect()})}),(0,d.default)((0,c.default)(a),"handleScroll",function(){return a.updateContainerRect()}),(0,d.default)((0,c.default)(a),"handleResize",function(){return a.updateContainerRect()}),(0,d.default)((0,c.default)(a
),"handleScrollIntoView",function(e){var t=a.state.containerRect
a.$container.scrollTop+=e.top-t.top}),a.state={containerRect:null},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.updateContainerRect()}},{key:"render",value:function(){var a=this,e=this.props,t=e.screenList,n=e.projectToken,r=e.activeScreenCid,i=e.className,o=e.screenTimestampMap,l=e.onClickScreenItem,s=e.treeProps,c=e.editingCid,u=e.hoverCid,d=this.state.containerRect
return p.default.createElement(g.StyledThumbnailList,{ref:this.setContainerRef,className:i,onScroll:this.handleScroll},p.default.createElement("ol",{className:"thumbnail-list"},0===t.length&&p.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match),t.map(function(e,t){return p.default.createElement(m.default,{key:e.cid,screen:e,isEditing:e.cid===c,isHover:e.cid===u,projectToken:n,version:o[e.cid],canvasZoom:(0,v.getScreenThumbnailZoom)(e.width,e.height),isActive:e.cid===r,
containerRect:d,onActivate:l,scrollIntoView:a.handleScrollIntoView,treeProps:s})})),p.default.createElement(h.default,{onResize:this.handleResize}))}}]),t}(p.PureComponent);(t.default=y).propTypes={className:f.default.string,screenList:f.default.array,projectToken:f.default.string,editingCid:f.default.string,hoverCid:f.default.string,activeScreenCid:f.default.string,screenTimestampMap:f.default.object,onClickScreenItem:f.default.func,treeProps:f.default.object},y.defaultProps={screenTimestampMap:{}}},
Lyer:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=r(a("pVnL")),p=r(a("QILm")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),h=r(a("lSNA")),i=r(a("17x9")),m=n(a("q1tI")),v=a("6XO9"),g=r(a("rwIS")),y=function(e){return MB.localStorageDelegate.setItem("guide_closed_".concat(e),!0)},b=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return r=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(a))),(0,h.default)((0,u.default)(r),"setGuideRef",function(e){return r.guide=e}),(0,h.default)((0,u.default)(r),"handleCloseGuideManually",function(){y(r.props.id)}),(0,h.default)((0,u.default)(r),"autoClose",function(){var e=r.props,t=e.duration,a=e.autoClose,n=e.id
e.isOpen&&t&&(r.timer=setTimeout(function(){a(),y(n)},t))}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidUpdate",value:function(e){e.isOpen!==this.props.isOpen&&this.autoClose()}},{key:"componentWillUnmout",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,a=t.id,n=t.isOpen,r=t.children,i=t.localeKey,o=t.position,l=t.className,s=(0,p.default)(t,["id","isOpen","children","localeKey","position","className"])
if(e=a,"true"===MB.localStorageDelegate.getItem("guide_closed_".concat(e)))return r
var c=I18N.guide_base[i||a],u=c.header,d=c.content
return m.default.createElement(v.Guide,(0,f.default)({ref:this.setGuideRef,isOpen:n,position:o,onClose:this.handleCloseGuideManually,className:"".concat(g.default["guide-button"]," ").concat(l),header:u,guide:m.default.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),X:"right"},s),r)}}]),i}(m.PureComponent);(t.default=b).propTypes={id:i.default.string.isRequired,isOpen:i.default.bool,duration:i.default.number,localeKey:i.default.string,children:i.default.element,autoClose:i.default.func,
className:i.default.string,position:i.default.string},b.defaultProps={gotItText:I18N.guide_base.got_it}},MGhH:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.footerFilter=t.headerFilter=void 0
var r=n(a("MVZn")),i=a("0k54")
t.headerFilter=function(e,t){var a=e.children.filter(function(e){return 0===e.widget.primary_fixed&&("group"!==e.type?e.widget.t()<t:(0,i.getTreeBoundingRect)(e).minY<t)})
return(0,r.default)({},e,{children:a})}
t.footerFilter=function(e,a,n){var t=e.children.filter(function(e){if(0!==e.widget.primary_fixed)return!1
var t=a-e.widget.b()
return"group"!==e.type?t<n:a-(0,i.getTreeBoundingRect)(e).maxY<n})
return(0,r.default)({},e,{children:t})}},MURh:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledThumbnailList=void 0
var r=n(a("vOnD")),i=a("mggN"),o=r.default.div.withConfig({displayName:"styles__StyledThumbnailList",componentId:"sc-8dwe2g-0"})([
"width:100%;height:100%;overflow-x:hidden;overflow-y:auto;.thumbnail-list{display:flex;flex-wrap:wrap;width:calc(100% + 15px);color:#415058;.thumbnail-item{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:85px;position:relative;margin-right:10px;margin-bottom:10px;cursor:pointer;.Tooltip{width:100%;}.image-wrapper{width:100%;height:93px;padding:2px;background-color:",";border:1px solid ",
";border-radius:2px;display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-out;img{max-width:100%;max-height:100%;pointer-events:none;}.toggle-comment{position:absolute;right:0;top:0;line-height:10px;transform:none;}.actions{display:none;position:absolute;z-index:1;top:4px;right:4px;height:24px;justify-content:space-around;align-items:center;&.is-hover{display:flex;}}&:hover,&.hover{border-width:2px;border-color:#79baff;padding:1px;.actions{display:flex;}}}.screen-name{height:26px;max-width:100%;line-height:26px;"
,";}&.active .image-wrapper{border-width:1px;border-color:#1e98ea;padding:2px;box-shadow:0 0 1px 0 rgba(34,162,237,0.66);}}}.not-match{width:100%;text-align:center;}"],function(e){return e.theme.thumbnail.bg},function(e){return e.theme.thumbnail.border_color},i.textEllipsis)
t.StyledThumbnailList=o},Mn07:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("RIqP")),p=r(a("17x9")),h=n(a("q1tI")),m=r(a("L0cU")),v=function(e){function t(e){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(r),"handleActivateScreen",function(e){var t=r.props,a=t.activeCid,n=t.dispatch
e!==a&&n({type:"entry:sync-runner:set-screen",payload:{cid:e}})}),r.treeProps={renderItem:e.renderCommentIcon},r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCid,a=function n(e,r,i){var o=i[e]?[i[e]]:[]
return r[e]&&r[e].forEach(function(e){var t=e.cid,a=n(t,r,i)
o.push.apply(o,(0,f.default)(a))}),o}("root",e.screenTreeMap,e.screenDataMap)
return h.default.createElement(m.default,{screenList:a,projectToken:MB.currentProject.access_token,activeScreenCid:t,onClickScreenItem:this.handleActivateScreen,treeProps:this.treeProps})}}]),t}(h.PureComponent)
t.default=v,(0,d.default)(v,"propTypes",{activeCid:p.default.string,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},NcbO:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("ibhU")),m=r(a("UbMB")).default.bind(h.default),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleBack",function(){return t.props.dispatch({type:"entry:runner:back-to-prev-page"})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.runnerState,o=e.activeCid,t=e.transition,a=e.history,n=e.screenInfoMap
if(!o)return null
var r=Screen.find(o)
return p.default.createElement("div",{className:m("runner-state-panel")},p.default.createElement("div",{className:"debug-title"},p.default.createElement("button",{onClick:this.handleBack},"上一页"),p.default.createElement("span",null,"当前页面: ".concat(r.name))),p.default.createElement("div",{className:"debug-info"},p.default.createElement("div",null,"访问历史:"),a.map(function(e){return p.default.createElement("span",{key:e},Screen.find(e).name)})),p.default.createElement("div",{className:"debug-info"},
p.default.createElement("div",null,"页面切换动画:"),p.default.createElement("span",null,"name: ".concat(t.name)),p.default.createElement("span",null,"duration: ".concat(t.duration)),p.default.createElement("span",null,"delay: ".concat(t.delay))),p.default.createElement("ul",null,Object.values(n).map(function(e){var t=e.cid,a=e.stateCid,n=e.transition,r=e.panelInfoMap,i=e.chameleonInfoMap
return p.default.createElement("li",{key:t,className:m({highlight:t===o})},p.default.createElement("span",null,Screen.find(t).name),p.default.createElement("span",null,"当前状态: ".concat(a)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))),p.default.createElement(g,{panelInfoMap:r}),p.default.createElement(y,{chameleonInfoMap:i}))})))}}]),i}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{runnerState:i.default.object,dispatch:i.default.func})
var g=function(e){var t=e.panelInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"green",marginTop:10}},"页面母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,a=e.activeScreenCid,n=e.transition,r=e.panelScreens
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版页面: ".concat(a)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))),p.default.createElement("span",null,"已加载页面"),p.default.createElement("ul",null,r.map(function(e){return p.default.createElement("li",{key:e,className:m({active:e===a})},e)})))})))},y=function(e){var t=e.chameleonInfoMap
return 0<Object.keys(t).length&&p.default.createElement("div",{style:{paddingLeft:10}},p.default.createElement("span",{style:{color:"blue",marginTop:10}},"状态母版:"),p.default.createElement("ul",null,Object.values(t).map(function(e){var t=e.cid,a=e.stateCid,n=e.transition
return console.log({cid:t}),p.default.createElement("li",{key:t},p.default.createElement("span",null,Panel.find(t).display_name),p.default.createElement("span",null,"当前母版状态: ".concat(a)),p.default.createElement("span",null,"动画: ".concat(JSON.stringify(n))))})))}},NkXT:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=r(a("pVnL")),i=r(a("lwsE")),o=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),l=r(a("7W2i")),f=r(a("lSNA")),p=r(a("o0o1")),h=r(a("yXPU")),m=a("17x9"),v=n(a("q1tI")),g=r(a("PeD6")),y=r(a("KUpD")),b=r(a("UbMB")),S=a("t3Un"),w=b.default.bind(y.default),E=function(){var t=(0,h.default)(p.default.mark(function e(t){var a,n,r
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return MB.event("preview","移动端: 点击下载 APK"),e.next=3,(0,S.requestJSON)("/app/".concat(t,"/build/apk.json"),null,{method:"PUT"})
case 3:return e.next=6,k(5e3)
case 6:return e.next=8,(0,S.requestJSON)("/app/".concat(t,"/status/apk.json"))
case 8:if(a=e.sent,n=a.progress,r=a.link,100!==n)return e.abrupt("continue",3)
e.next=13
break
case 13:return window.location=r,e.abrupt("return")
case 17:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),k=function(t){return new Promise(function(e){return setTimeout(e,t)})},C=function(e){function t(){var l
return(0,i.default)(this,t),l=(0,c.default)(this,(0,u.default)(t).call(this)),(0,f.default)((0,d.default)(l),"handleView",function(e){e.preventDefault(),l.props.loadProject()}),(0,f.default)((0,d.default)(l),"handleInstall",function(e){e.preventDefault()
var t=l.props,a=t.projectAccessToken,n=t.isProjectExportable
MB.isWechat()?l.setState({isCoverShow:!0}):MB.isiPad()||MB.isIOS()?l.setState({isCoverShow:!0}):n?(l.setState({isCoverShow:!0}),E(a).then(function(){return l.setState({isCoverShow:!1})},function(e){})):MB.promptRenew("apk_exportable_on_mobile",{action:null})}),(0,f.default)((0,d.default)(l),"handleOpenCover",function(){l.setState({isCoverShow:!0})}),(0,f.default)((0,d.default)(l),"handleCloseCover",function(){l.setState({isCoverShow:!1})}),(0,f.default)((0,d.default)(l),"handleClickViewInClient",function(e,
t){MB.event("preview","移动端: 点击下载".concat(t,"客户端")),setTimeout(function(){window.location=e},200)}),(0,f.default)((0,d.default)(l),"renderViewInClient",function(){var e={}
MB.isWechat()&&(e={onClick:l.handleOpenCover})
var t=window.location,a=t.hostname,n=t.pathname,r=l.props.projectEncryptedPassword,i=window.location.href,o=window.location.href
return MB.isIOS()&&(e={href:"modao://".concat(a).concat(n,"?password=").concat(r),onClick:function(){l.handleClickViewInClient(o,"iOS")}}),MB.isAndroid()&&(e={href:"intent://".concat(a).concat(n,"?password=").concat(r,"#Intent;package=com.mockingbot;scheme=mockingbot;S.browser_fallback_url=").concat(encodeURIComponent(i),";end"),onClick:function(){l.handleClickViewInClient(i,"Android")}}),v.default.createElement("a",(0,s.default)({className:"install-btn primary"},e),I18N.open_in_client)}),l.state={
isCoverShow:!1},l}return(0,l.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){$("#splash").hide(),$("#workspace").show(),$.timeago.settings.lang=window.MBLocale,$(".timeago").timeago()}},{key:"render",value:function(){var e=this.props,t=e.projectName,a=e.projectIconUrl,n=e.projectUpdatedAt,r=this.state.isCoverShow
return v.default.createElement("div",{className:w("install-page-wrapper")},v.default.createElement("div",{className:w("install-page",{"is-wechat":MB.isWechat()})},v.default.createElement("div",{className:"app-inner"},v.default.createElement("img",{className:"app-icon",src:a}),v.default.createElement("h1",{className:"app-name"},t),v.default.createElement("div",{className:"app-update-time"},v.default.createElement("time",{className:"timeago",dateTime:n}),I18N.update),v.default.createElement("div",{
className:"install-btns"},this.renderViewInClient(),v.default.createElement("a",{className:"install-btn",onClick:this.handleView},I18N.view_app)),v.default.createElement("a",{className:"download-btn",onClick:this.handleInstall},v.default.createElement("span",null,MB.isAndroid()?I18N.download_android_apk:I18N.add_to_home_screen),v.default.createElement("i",{className:"fa fa-angle-right"}))),v.default.createElement(g.default,{show:r,onClose:this.handleCloseCover})))}}]),t}(v.PureComponent)
t.default=C,(0,f.default)(C,"propTypes",{projectAccessToken:m.PropTypes.string,projectEncryptedPassword:m.PropTypes.string,projectName:m.PropTypes.string,projectIconUrl:m.PropTypes.string,projectUpdatedAt:m.PropTypes.string,isProjectExportable:m.PropTypes.bool,urlClientIOS:m.PropTypes.string,urlClientAndroid:m.PropTypes.string,loadProject:m.PropTypes.func})},Nu6V:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchSliceZip=t.default=void 0
var n=a("t3Un")
t.default=function(e){return(0,n.requestJSON)("".concat("/api/v2","/sketch/slices.json?project_cid=").concat(e))}
t.fetchSliceZip=function(e){return(0,n.requestJSON)("".concat("/api/v2","/sketch/slices/build_zip.json?project_cid=").concat(e),null,{method:"POST"})}},NyBV:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return MB.localStorageDelegate.getItem(m)?null:p.default.createElement(i,e)}
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),h=a("6XO9")
a("bTYh")
var i=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"state",{isOpen:!0}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.setState({isOpen:!1}),MB.localStorageDelegate.setItem(m,!0)},4e3)}},{key:"render",value:function(){var e=this.state.isOpen
return p.default.createElement(h.Guide,{className:"commercial-font-tip",isOpen:e,noCloseBtn:!0,guide:I18N.commercial_font_tip_preview,X:"center",Y:"top"})}}]),i}(p.Component)
var m="commercialFontTipShownInPreview"},OVdA:function(e,t,a){e.exports={"text-wrapper":"_2Q7780091rmwUdJheR5GPh","text-no-editing":"_1KyFLtyjq2MMPQk1NN80C7"}},P3rE:function(e,t,a){},PeD6:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=a("17x9"),p=n(a("q1tI")),h=r(a("ldhK")),m="/images/sharing/wechat_".concat(window.MBLocale,".png"),v="/images/sharing/ios_".concat(window.MBLocale,".png"),g=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleClick",function(){t.props.onClose()}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props.show,t=MB.isWechat(),a=!t&&MB.isIOS(),n=MB.isiPad(),r=!(t||a),i={display:e?"":"none"}
return p.default.createElement("div",{className:h.default.covers,style:i,onClick:this.handleClick},t&&p.default.createElement("div",{className:"cover wechat"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),p.default.createElement("img",{className:"tips",src:m}),"s",p.default.createElement("div",{className:"arrow"})),a&&!n&&p.default.createElement("div",{className:"cover ios"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),
p.default.createElement("img",{className:"tips",src:v}),p.default.createElement("div",{className:"arrow"})),n&&p.default.createElement("div",{className:"cover ipad"},p.default.createElement("img",{className:"robot",src:"/images/sharing/robot.png"}),p.default.createElement("img",{className:"tips",src:v}),p.default.createElement("div",{className:"arrow"})),r&&p.default.createElement("div",{className:"cover building"},p.default.createElement("div",{className:"tip-wrapper"},p.default.createElement("p",{
className:"tip"},I18N.building_apk),p.default.createElement("div",{className:"spinner"}))))}}]),i}(p.PureComponent);(t.default=g).propTypes={show:i.PropTypes.bool,onClose:i.PropTypes.func}},PqLM:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.lineIsParallelWithAxis=t.getLineAttrsAfterRotate=t.getLineAttrsAsWidget=t.getLineAttrsAfterUngroup=t.getVectorInOtherSystem=t.degreeToRadians=t.getLength=t.getAngle=t.getLineAngle=t.getLineGeneralInfo=void 0
var P=n(a("J4zp")),C=function(e){e.top,e.left
var t=e.width,a=e.height,n=e.bs,r=e.points,i=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=Math.sqrt(t*t+a*a),l=n,s=JSON.parse(r).map(function(e){return e.point}),c=u(t,a,s)
return{length:i?Math.round(o):o,angle:i?Math.round(c)%360:c,thickness:l}}
t.getLineGeneralInfo=C
var u=function(e,t,a){var n=(0,P.default)(a,2),r=n[0],i=n[1],o=(i[0]-r[0])*e,l=(i[1]-r[1])*t
return s(o,l)}
t.getLineAngle=u
var s=function(e,t){var a=r(e,t)
return 0===a?0:0<=e?(360+i(Math.asin(t/a)))%360:180-i(Math.asin(t/a))}
t.getAngle=s
var r=function(e,t){return Math.sqrt(e*e+t*t)}
t.getLength=r
var i=function(e){return 180*e/Math.PI},T=function(e){return e/180*Math.PI}
t.degreeToRadians=T
var I=function(e,t){var a=(0,P.default)(e,2),n=a[0],r=a[1],i=T(t)
return[Math.cos(i)*n+Math.sin(i)*r,-Math.sin(i)*n+Math.cos(i)*r]}
t.getVectorInOtherSystem=I
t.getLineAttrsAfterUngroup=function(e,t,a,n){var r=(0,P.default)(e,2),i=r[0],o=r[1],l=(0,P.default)(t,2),s=l[0],c=l[1],u=n.top,d=n.left,f=n.width,p=n.height,h=n.points,m=JSON.parse(h).map(function(e){return e.point}),v=(0,P.default)(m,2),g=(0,P.default)(v[0],2),y=g[0],b=g[1],S=(0,P.default)(v[1],2),w=S[0],E=S[1],k=[d-s,u-c],C=[k[0]+w*f,k[1]+E*p],T=I([k[0]+y*f,k[1]+b*p],-a),x=I(C,-a),_=[i+T[0],o+T[1]],M=[i+x[0],o+x[1]]
return N(_,M)}
var N=function(e,t){var a=(0,P.default)(e,2),n=a[0],r=a[1],i=(0,P.default)(t,2),o=i[0],l=i[1],s=Math.min(r,l),c=Math.min(n,o),u=Math.abs(o-n),d=Math.abs(l-r),f=[[0===u?.5:(n-c)/u,0===d?.5:(r-s)/d],[0===u?.5:(o-c)/u,0===d?.5:(l-s)/d]].map(function(e){return{point:e}})
return{top:Math.round(s),left:Math.round(c),width:Math.max(Math.round(u),1),height:Math.max(Math.round(d),1),points:JSON.stringify(f)}}
t.getLineAttrsAsWidget=N
t.getLineAttrsAfterRotate=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,n=T(t),r=e.top,i=e.left,o=e.width,l=e.height,s=e.points,c=JSON.parse(s).map(function(e){return e.point}),u=(0,P.default)(c,2),d=(0,P.default)(u[0],2),f=d[0],p=d[1],h=(0,P.default)(u[1],2),m=h[0],v=h[1],g=C(e).length,y=[i+o*f,r+l*p],b=[i+o*m,r+l*v],S=[y[0]+(b[0]-y[0])*a,y[1]+(b[1]-y[1])*a],w=[y[0]+g*Math.cos(n),y[1]+g*Math.sin(n)],E=[y[0]+(w[0]-y[0])*a,y[1]+(w[1]-y[1])*a],k=[S[0]-E[0],S[1]-E[1]]
return N([y[0]+k[0],y[1]+k[1]],[w[0]+k[0],w[1]+k[1]])}
t.lineIsParallelWithAxis=function(e){var t=(0,P.default)(e,2),a=(0,P.default)(t[0],2),n=a[0],r=a[1],i=(0,P.default)(t[1],2),o=i[0],l=i[1]
return.5===n&&.5===o||.5===r&&.5===l}},QdB0:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=o.find(function(e){var t=e.checker
return t()})
return e?e.info:null}
var r=n(a("ThAd")),i={info:{name:"lisankebook",desc:"李三科送给你的专属福利，现在注册墨刀即可享受一个月个人版会员",successTip:"注册成功，恭喜你获得墨刀一个月个人版会员"},checker:function(){return(0,r.default)().utm_source===i.info.name}},o=[i]},Ro3d:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transfromProptype=void 0
var B=n(a("lSNA")),r=a("XrEr"),D=a("qOCw")
t.transfromProptype=function(e){var t=e.attr,a=e.language,n=e.unit,r=(0,D.selectWithlanguageUnit)(a),i=t.width,o=t.height,l=t.lineHeight,s=t.opacity,c=t.borderRadius,u=t.borderWidth,d=t.borderColor,f=t.backgroundColor,p=t.color,h=t.fontSize,m=t.fontFamily,v=t.fontStyle,g=t.boxShadow,y=t.textAlign,b=t.x,S=t.y,w=b&&(0,B.default)({},q[r].x,F(b,n,r)),E=S&&(0,B.default)({},q[r].y,F(S,n,r)),k=i&&(0,B.default)({},q[r].width,F(i,n,r)),C=o&&(0,B.default)({},q[r].height,F(o,n,r)),T=l&&(0,B.default)({},q[r].lineHeight
,F(l,n,r)),x=s&&(0,B.default)({},q[r].opacity,F(s,n,r)),_=c&&(0,B.default)({},q[r].borderRadius,F(c,n,r)),M=f&&(0,B.default)({},q[r].backgroundColor,F(f,n,r,!0)),P=p&&(0,B.default)({},q[r].color,F(p,n,r,!0)),I=h&&(0,B.default)({},q[r].fontSize,F(h,n,r)),N=m&&(0,B.default)({},q[r].fontFamily,F(m,n,r)),R=v&&(0,B.default)({},q[r].fontStyle,F(v,n,r)),L=g&&(0,B.default)({},q[r].shadows,g),j=u&&(0,B.default)({},q[r].borderWidth,F(u,n,r)),A=d&&(0,B.default)({},q[r].borderColor,F(d,n,r,!0)),O=y&&(0,B.default)({},
q[r].textAlign,y)
return Object.assign({},w,E,k,C,T,x,_,j,A,M,P,I,R,O,L,N)}
var F=function(e,t,a){var n=3<arguments.length&&void 0!==arguments[3]&&arguments[3]
return e=e.toString(),"pt"!==a?e.replace(t,a):n?(0,r.getUIColor)(e):e.replace(t,"")},q={px:{x:"left",y:"top",width:"width",height:"height",lineHeight:"line-height",opacity:"opacity",border:"border",borderRadius:"border-radius",borderColor:"border-color",borderWidth:"border-width",backgroundColor:"background-color",color:"color",fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",textAlign:"text-align",shadows:"box-shadow",innerShadows:"inner-shadow"},dp:{x:"left",y:"top",
width:"layout_width",height:"layout_height",border:"border",opacity:"opacity",color:"textColor",fontSize:"textSize",fontFamily:"font-family",fontStyle:"font-style",textAlign:"gravity",backgroundColor:"background",borderRadius:"radius",borderColor:"border-color",lineHeight:"line-height",borderWidth:"border-width",shadows:"box-shadow",innerShadows:"inner-shadow"},pt:{x:"x",y:"y",width:"width",height:"height",opacity:"opacity",border:"border",backgroundColor:"backgroundColor",color:"text-color",
textAlign:"alignment",fontSize:"fontSize",fontFamily:"fontFamily",fontStyle:"font-style",borderRadius:"cornerRadius",borderColor:"borderColor",borderWidth:"border-width",lineHeight:"lineSpacing"}}},RtVw:function(e,t,a){e.exports={fullscreen:"_1yqBFlDRjPD3syHb3ZboIK"}},S7Zs:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchArtboardsByProjectCid=void 0
var n=a("t3Un")
t.fetchArtboardsByProjectCid=function(e){return window.MBArtboards?{artboards:Object.values(window.MBArtboards).map(function(e){return e.artboard})}:(0,n.requestJSON)("".concat("/api/v2/sketch","/artboards.json?project_cid=").concat(e))}},S9rr:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScrollBar=void 0
var r=n(a("vOnD")).default.div.withConfig({displayName:"styles__StyledScrollBar",componentId:"sc-1i763xb-0"})(["position:absolute;top:",";left:",";right:0;bottom:0;z-index:4;pointer-events:none;.track{position:absolute;background:",
";pointer-events:auto;.handler{position:absolute;cursor:pointer;.thumb{position:absolute;pointer-events:none;border-radius:4px;transition:background 0.2s ease-in-out;}}}.x-track{left:0;right:11px;bottom:0;height:12px;.handler{bottom:2px;height:10px;.thumb{bottom:0;width:100%;height:6px;background:",";}}}.y-track{top:0;bottom:11px;right:0;width:12px;.handler{right:2px;width:10px;.thumb{right:0;height:100%;width:6px;background:",";}}}.x-track .handler:hover .thumb{background:",
";}.y-track .handler:hover .thumb{background:",";}"],"17px","17px",function(e){return e.theme.scrollbar.track.bg},function(e){return e.theme.scrollbar.thumb.x_bg},function(e){return e.theme.scrollbar.thumb.y_bg},function(e){return e.theme.scrollbar.thumb.x_hover_bg},function(e){return e.theme.scrollbar.thumb.y_hover_bg})
t.StyledScrollBar=r},SFPg:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var k=r(a("pVnL")),C=r(a("J4zp")),i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),T=n(a("q1tI")),x=r(a("vmbo")),_=a("/5+U"),f=function(e){function E(){return(0,i.default)(this,E),(0,l.default)(this,(0,s.default)(E).apply(this,arguments))}return(0,c.default)(E,e),(0,o.default)(E,[{key:"render",value:function(){var e=this.props,t=e.layer,a=e.parentRect,n=e.treeProps,r=t.width,i=t.height,o=t.top,l=t.left,s=t.z,c=t.childrenLayers
if(!1===t.v)return null
var u="layer"===t.kind?0:t.rotation||0,d=(0,_.getMinBoundingRect)({width:r,height:i,rotate:u,top:o,left:l}),f=(0,C.default)(d,4),p=f[0],h=f[1],m=f[2],v=f[3],g={top:o,left:l,width:r,height:i},y=h,b=m,S=v,w={top:(p-a.top)/a.height*100+"%",left:(y-a.left)/a.width*100+"%",width:b/a.width*100+"%",height:S/a.height*100+"%",zIndex:s||0}
return T.default.createElement("div",{"data-id":t.id,className:"layer-tree-node",style:w},T.default.createElement(x.default,(0,k.default)({layer:t},n)),c&&0<c.length&&c.map(function(e){return T.default.createElement(E,{key:e.id,layer:e,parentRect:g,treeProps:n})}))}}]),E}(T.Component)
t.default=f,(0,u.default)(f,"propTypes",{layer:d.default.object,parentRect:d.default.object,treeProps:d.default.object})},SVae:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.requestSnapshotZipLocalhost=t.requestSnapshotLocalhost=t.requestThumbnailLocalhost=void 0
var d=n(a("QILm")),f=n(a("o0o1")),p=n(a("yXPU")),h=a("os03"),m=window.URLSearchParams,v=function(){var t=(0,p.default)(f.default.mark(function e(t){var a,n,r,i,o,l=arguments
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=1<l.length&&void 0!==l[1]?l[1]:250,2<l.length&&void 0!==l[2]?l[2]:5e3,n=3<l.length&&void 0!==l[3]?l[3]:1/0,r=a,i=0
case 5:if(i<n)return e.next=8,(0,h.setTimeoutAsync)(r)
e.next=17
break
case 8:return e.next=10,t()
case 10:if(o=e.sent)return e.abrupt("return",o)
e.next=13
break
case 13:i+=r,r+=a,e.next=5
break
case 17:throw new Error("reach retry limit: ".concat(n))
case 18:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestThumbnailLocalhost=function(e){var a=e.imageElement,n=e.projectAccessToken,r=e.screenCid,t=e.screenStateCid,i=void 0===t?"default":t,o=e.mode,l=void 0===o?"thumbnail":o
return new Promise(function(e,t){a.onerror=function(){a.src="/images/preview/image-load.png",t()},a.onload=function(){return e(a)},a.src="".concat("/snapshot.png","?").concat(new m({"access-token":n,"screen-cid":r,"screen-state-cid":i,mode:l}))})}
var r=function(){var t=(0,p.default)(f.default.mark(function e(t){var a,n,r,i,o,l,s,c,u
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.projectAccessToken,n=t.screenCid,r=t.canvasZoom,i=void 0===r?1:r,o="/app/".concat(a,"/build/png.json?").concat(new m({cid:n,scale:100*i})),e.next=4,(0,h.fetchLikeRequest)(o,{method:"PUT"})
case 4:return e.next=6,e.sent.json()
case 6:if(l=e.sent,s=l.taskId,100!==(c=(0,d.default)(l,["taskId"])).progress)return u="/app/".concat(a,"/status/png.json?").concat(new m({task_id:s,cid:n,scale:100*i})),e.next=13,v((0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.fetchLikeRequest)(u)
case 2:return e.next=4,e.sent.json()
case 4:return c=e.sent,e.abrupt("return",100===c.progress&&c)
case 6:case"end":return e.stop()}},e)})),250,1e3,3e4)
e.next=14
break
case 13:c=e.sent
case 14:return e.abrupt("return",c)
case 15:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotLocalhost=r
var i=function(){var t=(0,p.default)(f.default.mark(function e(t){var a,n,r,i,o,l,s,c,u
return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.projectAccessToken,n=t.canvasZoom,r=void 0===n?1:n,i=t.onProgress,o="/app/".concat(a,"/build/pngs.json?").concat(new m({scale:100*r})),e.next=4,(0,h.fetchLikeRequest)(o,{method:"PUT"})
case 4:return e.next=6,e.sent.json()
case 6:if(l=e.sent,s=l.taskId,100!==(c=(0,d.default)(l,["taskId"])).progress)return u="/app/".concat(a,"/status/pngs.json?").concat(new m({task_id:s,scale:100*r})),e.next=13,v((0,p.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.fetchLikeRequest)(u)
case 2:return e.next=4,e.sent.json()
case 4:return c=e.sent,i&&i(c.progress),e.abrupt("return",100===c.progress&&c)
case 7:case"end":return e.stop()}},e)})),250,5e3,6e5)
e.next=14
break
case 13:c=e.sent
case 14:return e.abrupt("return",c)
case 15:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.requestSnapshotZipLocalhost=i},TZdj:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.Comment,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:comments:update",payload:i(e,r,o)})})},u={entryMap:{"comments:refresh":c(r.refreshStateList,!1),"comments:add":c(r.addState,!1),"comments:add-local":c(r.addState,!0),"comments:update":c(r.updateState,!1),"comments:update-local":c(r.updateState,!0),"comments:delete":c(r.deleteState,!1),"comments:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},ThAd:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=location.search
0===e.indexOf("?")&&(e=e.substr(1))
var i={}
return e.split("&").forEach(function(e){var t=e.split("="),a=(0,o.default)(t,2),n=a[0],r=a[1]
n&&(i[n]=!r||decodeURIComponent(r))}),i}
var o=n(a("J4zp"))},TjoA:function(e,t,a){e.exports={"distance-measurement-container":"ofVDlkqpF9Yunky2QkBPn"}},U9kS:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentHeaderGlobalStyle",{enumerable:!0,get:function(){return g.CommentHeaderGlobalStyle}}),t.CommentThread=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),v=n(a("q1tI")),d=r(a("17x9")),f=r(a("vOnD")),p=r(a("zkrS")),h=a("l0oT"),m=a("FC/4"),g=a("6iHT"),y=p.default.MB,b=p.default.I18N,S=function(e){function a(e){var t
return(0,i.default)(this,a),(t=(0,l.default)(this,(0,s.default)(a).call(this,e))).focusThread=function(){return!t.props.isScrollFocus&&t.props.commentOperations.setHoverFocusCommentThreadCid(t.props.commentThreadCid)},t.blurThread=function(){return t.props.isBlur&&t.props.commentOperations.setHoverFocusCommentThreadCid(null)},t.setRef=function(e){t.mainRef=e},t.mainRef=null,t.toggleUnfoldComment=function(){t.setState({isUnfold:!t.state.isUnfold}),y.event("preview","展开评论")},t.state={isUnfold:!1},t}return(0,
c.default)(a,e),(0,o.default)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.commentList.length>e.commentList.length&&this.setState({isUnfold:!0}),this.props.isScrollFocus&&this.props.isScrollFocus!==e.isScrollFocus&&this.mainRef){var t=this.mainRef.parentElement,a=t.getBoundingClientRect().top,n=t.scrollTop+this.mainRef.getBoundingClientRect().top-a;(0,h.scrollTo)(t,n,20)}}},{key:"render",value:function(){var e=this.props,t=e.commentList,a=e.permission,n=e.commentMarkerIndex,
r=e.commentOperations,i=e.isBlur
if(!t.length)return null
var o=this.state.isUnfold,l=t[0],s=3<t.length,c=o||!s?t.slice(1):t.slice(1,3)
return v.default.createElement(w,{ref:this.setRef,className:i?"comment-blur":"",onMouseEnter:this.focusThread,onMouseLeave:this.blurThread},v.default.createElement(k,{markIndex:n,comment:l,permission:a,commentOperations:r}),c.map(function(e){return v.default.createElement(k,{sub:!0,key:e.cid,comment:e,permission:r.getPermission(e.user_id),commentOperations:r})}),s&&v.default.createElement("div",{className:"unfold",onClick:this.toggleUnfoldComment},o?b.preview.comment.fold:b.preview.comment.unfold))}}]),a}(
v.PureComponent)
t.CommentThread=S,(0,u.default)(S,"propTypes",{permission:d.default.object,isScrollFocus:d.default.bool,isBlur:d.default.bool,commentList:d.default.array,commentMarkerIndex:d.default.number,commentThreadCid:d.default.string,commentOperations:d.default.object})
var w=f.default.div.withConfig({displayName:"CommentLayerThread__CommentThreadDiv",componentId:"sc-18dqjl1-0"})(["width:220px;padding:20px 0;&.comment-blur{opacity:0.4;}& > .unfold{cursor:pointer;display:flex;justify-content:flex-end;}"]),E=f.default.div.withConfig({displayName:"CommentLayerThread__EntryMainBgDiv",componentId:"sc-18dqjl1-1"})(["width:100%;margin-bottom:10px;border-radius:4px;background:#f7f7fa;"]),k=function(e){function t(e){var a
return(0,i.default)(this,t),(a=(0,l.default)(this,(0,s.default)(t).call(this,e))).operationPack={getCommentValue:function(){return a.props.comment.message},doCreateComment:function(e){return e&&a.props.commentOperations.doCreateComment(e,a.props.comment.thread_cid)},doUpdateComment:function(e){return a.props.commentOperations.doUpdateComment({cid:a.props.comment.cid,message:e})},doDeleteCard:function(){return a.props.sub?a.props.commentOperations.doDeleteComment(a.props.comment
):a.props.commentOperations.doDeleteCommentThread(a.props.comment.thread_cid)}},a.startEdit=function(){a.setState({editStore:(0,m.createTextEditStore)({value:a.operationPack.getCommentValue(),isEditing:!0},{onEnd:function(e){var t=e.value
t=(t||"").trim(),a.operationPack.doUpdateComment(t),a.closeEdit()}})}),y.event("preview","二次编辑")},a.closeEdit=function(){return a.setState({editStore:null})},a.startReply=function(){return a.setState({replyStore:(0,m.createTextEditStore)({isEditing:!0},{onChange:function(e){var t=e.value
return a.setState({isValidReply:Boolean(t)})},onEnd:function(e){var t=e.value;(t=(t||"").trim())&&a.operationPack.doCreateComment(t),a.closeReply()}})})},a.closeReply=function(){return a.setState({replyStore:null,isValidReply:!1})},a.state={editStore:null,replyStore:null,isValidReply:!1},a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.sub,a=e.markIndex,n=e.comment,r=e.permission,i=e.commentOperations,o=this.state,l=o.editStore,s=o.replyStore,c=o.isValidReply,
u=i.getUserProfile(n.user_id),d=u.avatar,f=u.name,p=v.default.createElement(g.ContentMessage,{sub:t,comment:n,textEditStore:l,cancelEdit:this.closeEdit}),h=!l&&(0,g.commonContentFooter)(n,s,c,r.create&&this.startReply,this.closeReply),m=t?l?"sub remove-background":"sub":""
return v.default.createElement(C,{className:m},v.default.createElement(g.ContentHeader,{sub:t,avatar:d,name:f,markIndex:a,startEdit:!l&&r.update?this.startEdit:null,doDelete:!l&&r.delete?this.operationPack.doDeleteCard:null}),!t&&v.default.createElement(E,null,p,h),t&&p,t&&h)}}]),t}(v.PureComponent);(0,u.default)(k,"propTypes",{sub:d.default.bool,markIndex:d.default.number,comment:d.default.object.isRequired,permission:d.default.object.isRequired,commentOperations:d.default.object.isRequired})
var C=f.default.div.withConfig({displayName:"CommentLayerThread__CommentCardDiv",componentId:"sc-18dqjl1-2"})(["display:flex;flex-flow:column;border-radius:4px;&.sub{margin:0 0 10px 20px;width:200px;background:#f7f7fa;}&.remove-background{background:#fff;}"])},UJpD:function(e,t,a){e.exports={detector:"_2Wbc2EU813xLnapfNPnrUi"}},ULaQ:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=a("G4qV"),o=a("upRB"),l=n(a("EWR0")),s=(0,i.createSelector)([o.getRunnerState],function(e){return{runnerState:e}}),c=(0,r.connect)(function(e){return s(e)})(l.default)
t.default=c},UUBB:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),i=r(a("17x9")),h=a("vbsp"),m=r(a("TSYQ")),v=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(a),"handleChange",function(e){if(!a.props.disabled&&!e.currentTarget.classList.contains("disabled")){var t=e.currentTarget.dataset.value
a.props.handleChange(t)}}),(0,f.default)((0,u.default)(a),"getBgStyle",function(e,t){var a=0===e,n=e===t-1
if(0<=e)return{transform:"translateX(".concat(100*e,"%)"),borderLeftColor:a?"transparent":"",borderRightColor:n?"transparent":""}}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var l=this,e=this.props,t=e.options,s=e.value,a=e.disabled,n=e.className,c=t.findIndex(function(e){return e.value===s}),u=this.getBgStyle(c,t.length)
return p.default.createElement(h.StyledRadioLine,{className:(0,m.default)("radio-line",n,{disabled:a})},t.map(function(e,t){var a=e.label,n=e.value,r=e.compatibleValues,i=e.disabled,o=!i&&(r?r.includes(s):s===n)
return p.default.createElement("li",{className:(0,m.default)("radio-option",{active:o},{disabled:i}),key:n,"data-value":n,onClick:l.handleChange},0===t&&p.default.createElement("div",{className:(0,m.default)("move-cube",{active:0<=c}),style:u}),p.default.createElement("div",{className:"radio-content"},a))}))}}]),i}(p.PureComponent);(t.default=v).propTypes={options:i.default.arrayOf(i.default.shape({label:i.default.node,value:i.default.any})),className:i.default.string,value:i.default.any,
disabled:i.default.bool,handleChange:i.default.func}},UfWW:function(e,t,a){var i=a("KwMD"),o=a("ut/Y"),l=a("Sxd8"),s=Math.max
e.exports=function(e,t,a){var n=null==e?0:e.length
if(!n)return-1
var r=null==a?0:l(a)
return r<0&&(r=s(n+r,0)),i(e,o(t,3),r)}},Ur7v:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("pVnL")),o=r(a("MVZn")),l=r(a("o0o1")),s=r(a("yXPU")),c=r(a("lwsE")),u=r(a("W8MJ")),d=r(a("a1gu")),f=r(a("Nsbk")),p=r(a("PJYZ")),h=r(a("7W2i")),m=r(a("lSNA")),v=r(a("Znm+")),g=r(a("mwIZ")),y=n(a("q1tI")),b=r(a("17x9")),S=a("/MKj"),w=a("7Qib"),E=a("wYtL"),k=r(a("i6OX")),C=a("5vJs"),T=a("9kHA"),x=r(a("ztWx")),_=function(e){function t(){var a
return(0,c.default)(this,t),a=(0,d.default)(this,(0,f.default)(t).call(this)),(0,m.default)((0,p.default)(a),"handleShare",(0,s.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:MB.isDashboard?MB.askDashboardToShare():a.setState({isSharingOverlayOpen:!0}),MB.event("preview","工具栏: 点击分享按钮")
case 2:case"end":return e.stop()}},e)}))),(0,m.default)((0,p.default)(a),"onToggleSharingOverlay",function(e){var t=(0,v.default)(e)?e:!a.state.isOpen
t||MB.event("zhuge","运行页-预览-分享弹窗",{"边框类型":MB.project().shell_type,"链接高亮":MB.project().highlight?"开启":"关闭"}),a.setState({isSharingOverlayOpen:t})}),(0,m.default)((0,p.default)(a),"updateTeam",function(e){MB.currentTeam=(0,w.snakizeKeys)((0,o.default)({},MB.currentTeam,e)),a.forceUpdate()}),(0,m.default)((0,p.default)(a),"updateApp",function(e){MB.currentProject=(0,w.snakizeKeys)((0,o.default)({},MB.currentProject,e)),a.forceUpdate()}),a.state={isSharingOverlayOpen:!1},a}return(0,h.default)(t,e),(0,u.default
)(t,[{key:"render",value:function(){var e=this.sharingOverlay
return y.default.createElement(y.Fragment,null,y.default.createElement(E.Tooltip,{position:"bottom",duration:1e3,content:{hover:I18N.preview.share},tipClassName:"marign-top-20"},y.default.createElement(k.default,{type:"dora",name:"share",className:"share-icon",onClick:this.handleShare})),e)}},{key:"data",get:function(){var e=(0,w.camelizeKeys)(MB.currentOrg),t=(0,w.camelizeKeys)(MB.currentTeam),a=(0,w.camelizeKeys)(MB.currentProject),n=MB.user,r=n.id,i=(0,g.default)(e,"cid","me"),o=a.expired
return e&&Object.assign(e,{policyPermissionMap:C.POLICY_PERMISSION_MAP}),{workspace:i,isExpired:o,org:e,team:t,app:a,me:n,meId:r}}},{key:"sharingOverlay",get:function(){var e=this.state.isSharingOverlayOpen,t=this.data
return!MB.isDashboard&&y.default.createElement(x.default,(0,i.default)({isOpen:e,onToggle:this.onToggleSharingOverlay,updateTeamFromProps:this.updateTeam,updateAppFromProps:this.updateApp},t,{withStore:!1}))}}]),t}(y.PureComponent);(0,m.default)(_,"propTypes",{checkPermissionStorelessly:b.default.func})
var M=(0,S.connect)(void 0,{checkPermissionStorelessly:T.checkPermissionStorelessly})(_)
t.default=M},"Uu/L":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledScreenItem=t.StyledScreenList=void 0
var r=n(a("vOnD")),i=a("mggN"),o=r.default.ul.withConfig({displayName:"styles__StyledScreenList",componentId:"sc-1v51q5m-0"})(["&,ol,li{list-style:none;}.not-match{width:100%;text-align:center;}"])
t.StyledScreenList=o
var l=r.default.div.withConfig({displayName:"styles__StyledScreenItem",componentId:"sc-1v51q5m-1"})([""," .screen-name{display:flex;align-items:center;width:100%;padding-right:5px;.icon{flex-shrink:0;margin-right:4px;}span{",";}}.actions{padding:0 10px;.actions-ellipsis{font-size:14px;pointer-events:none;}&:hover{.actions-ellipsis{color:#298df8;}}}.child-screens{position:relative;}&.wait-hover *{pointer-events:none;}&.linking{color:",";background:#bbd8fe;.actions{display:none;}}"],i.listItem,i.textEllipsis,
function(e){return e.theme.listItem.tc})
t.StyledScreenItem=l},VQzC:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.fetchProjectComment=void 0
var s=n(a("o0o1")),r=n(a("yXPU")),i=n(a("zkrS")),c=a("os03"),u=i.default.MB,o=function(){var t=(0,r.default)(s.default.mark(function e(t){var a,n,r,i,o,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.projectCid,n=t.projectAccessToken,e.next=3,(0,c.fetchLikeRequest)("/api/v2/sharing/".concat(a,"/comments?password=").concat(u.localStorageDelegate.getItem("".concat(n,"_pwd"))||""))
case 3:if(r=e.sent,i=r.ok,o=r.status,l=r.json,i){e.next=9
break}throw new Error("[fetchProjectComment] invalid status: ".concat(o))
case 9:return e.next=11,l()
case 11:return e.abrupt("return",e.sent)
case 12:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.fetchProjectComment=o},Vk5q:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.onFallbackError=t.doFallbackSaveItem=t.onSocketError=t.doSocketBatchSave=t.getSaveItemInfo=t.processSaveQueue=void 0
var u=n(a("o0o1")),r=n(a("yXPU")),s=a("t77w"),d=a("os03"),f=a("ycqN"),p=window.MB
t.processSaveQueue=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n={},r=[]
e.forEach(function(e){var t=e.record,a="".concat(t.constructor.className,"-").concat(t.cid)
void 0===n[a]&&(n[a]=r.length),r[n[a]]=e})
var a=new Set
return r.forEach(function(e){var t=e.record
return e.isDelete&&["Widget","Panel"].includes(t.constructor.className)&&a.add(t.cid)}),r.filter(function(e){var t=e.record
return!("Widgetstate"===t.constructor.className&&a.has(t.widget_cid)||"Panelstate"===t.constructor.className&&a.has(t.panel_cid))}).map(function(e){var t=e.record,a=e.isDelete,n=t.constructor.className,r=a?"DELETE":"Asset"===n?"POST":"PUT",i="POST"===r?"/".concat(n.toLowerCase(),"s"):"/".concat(n.toLowerCase(),"s/").concat(encodeURIComponent(t.id)),o=JSON.stringify("DELETE"===r?{cid:t.cid,mtime:t.mtime}:(0,s.compressRichText)(t.toJSON())),l={className:n,cid:t.cid}
return"Panel"===n&&Template.find(t.template_cid),{url:i,method:r,body:o,extraInfo:l}})}
t.getSaveItemInfo=function(e){var t=e.url,a=e.method,n=e.body
return JSON.stringify({url:t,method:a,bodyLength:n?n.length:0})}
var i=function(){var t=(0,r.default)(u.default.mark(function e(t){var a,n,r
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.saveChunk,t.attempt,t.timeout,n=p.project()?p.project().template?p.project().project_cid:p.project().cid:"",r={id:p.user.id,name:p.user.name,avatar:p.user.avatar},e.next=5,p.Pusher.requestBatchSave({batchSaveQueue:a,rootProjectCid:n,fromUser:r})
case 5:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doSocketBatchSave=i
var o=function(){var a=(0,r.default)(u.default.mark(function e(t,a){var n,r
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.saveChunk,a.attempt,r=a.timeout,t.message&&t.message.toLowerCase().includes("timeout"))return p.event("ga-0","send","event","batch-saving","batch saving timeout","(".concat(n.length,")(").concat(r,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=7,(0,d.setTimeoutAsync)(5e3)
e.next=9
break
case 7:e.next=12
break
case 9:return p.event("ga-0","send","event","batch-saving","batch saving error: ".concat(t.status),"[".concat(t.status,"] ").concat(t.message||t,": (").concat(n.length,"item|").concat(r,"ms)(").concat(p.user.email,")")),e.next=12,(0,f.SAVE_NUKE_SEQUENCE)(t,t.status)
case 12:case"end":return e.stop()}},e)}))
return function(e,t){return a.apply(this,arguments)}}()
t.onSocketError=o
var l=function(){var t=(0,r.default)(u.default.mark(function e(t){var a,n,r,i,o,l,s,c
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.saveItem,n=a.url,r=a.method,i=a.body,o=t.attempt,l=t.timeout,e.next=3,(0,d.fetchLikeRequest)(n,{headers:{"Content-Type":"application/json"},method:r,body:i,timeout:l})
case 3:if(s=e.sent,200!==(c=s.status))return p.event("ga-0","send","event","saving","saving error: ".concat(c),"".concat(c,": ").concat(n,"(").concat(r,"|x").concat(o,"|").concat(l,"ms)(").concat(p.user.email,")")),e.next=9,(0,f.SAVE_NUKE_SEQUENCE)(new Error("fallback saving error: ".concat(c)),c)
e.next=9
break
case 9:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doFallbackSaveItem=l
var c=function(){var a=(0,r.default)(u.default.mark(function e(t,a){var n,r,i,o,l
return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.saveItem,r=n.url,i=n.method,o=a.attempt,l=a.timeout,p.event("ga-0","send","event","saving","fallback saving error: ".concat(t.message||t),"".concat(t.message||t,": ").concat(r,"(").concat(i,"|x").concat(o,"|").concat(l,"ms)(").concat(p.user.email,")")),p.alertAsync({title:I18N.error_happened,desc:I18N.network_error,isHTML:!0}),e.next=6,(0,d.setTimeoutAsync)(5e3)
case 6:case"end":return e.stop()}},e)}))
return function(e,t){return a.apply(this,arguments)}}()
t.onFallbackError=c},WcC0:function(e,t,a){},XKAG:function(e,t,a){var l=a("ut/Y"),s=a("MMmD"),c=a("7GkX")
e.exports=function(o){return function(e,t,a){var n=Object(e)
if(!s(e)){var r=l(t,3)
e=c(e),t=function(e){return r(n[e],e,n)}}var i=o(e,t,a)
return-1<i?n[r?e[i]:i]:void 0}}},XpKX:function(e,t,a){e.exports={"mb-preview-page":"HpPhB83xskCxzhv6pRWDy","is-offline-mode":"_28_YiE-2ulr1BboXRcKxWW","is-uichina":"pxVKuNMBIglIQCw1n6NBA"}},Y69h:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var g=n(a("MVZn")),y=n(a("J4zp")),i=n(a("lwsE")),o=n(a("W8MJ")),l=n(a("a1gu")),s=n(a("Nsbk")),c=n(a("PJYZ")),u=n(a("7W2i")),b=n(a("lSNA")),S=n(a("q1tI")),r=n(a("17x9")),d=a("1qiG"),f=function(e){function r(){var e,v;(0,i.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return v=(0,l.default)(this,(e=(0,s.default)(r)).call.apply(e,[this].concat(a))),(0,b.default)((0,c.default)(v),"getDistanceMarksStyle",function(e,t){return{top:(0,d.toPercentage)(e.top/t.height),left:(0,d.toPercentage)(e.left/t.width),width:(0,d.toPercentage)(e.width/t.width),height:(0,d.toPercentage)(e.height/t.height)}}),(0,b.default)((0,c.default)(v),"mapDistanceMarks",function(e,t){var a,n=(0,y.default)(e,2),r=n[0],i=n[1],o=v.props,l=o.style,s=o.renderValue,c=l.showStartAndEndBoundary,u=l.colorForLines
,d=l.colorForText,f=l.backgroundColorForText,p=l.dashed,h=v.getMarkStyle(r,i),m=Math.abs(i)
return S.default.createElement("div",{key:"".concat(t,"-").concat(i)},S.default.createElement("div",{className:"distance-line ".concat(r),style:(0,g.default)({},h.line,(a={},(0,b.default)(a,["top","bottom"].includes(r)?"borderLeftStyle":"borderTopStyle",p?"dashed":"solid"),(0,b.default)(a,"borderColor",u),a))}),s?s({value:m,style:h.value,customClassName:"distance-value ".concat(r)}):S.default.createElement("span",{className:"distance-value ".concat(r),style:(0,g.default)({},h.value,{color:d,
backgroundColor:f})},m),c&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"distance-mark-start-boundary ".concat(r),style:{borderColor:u}}),S.default.createElement("div",{className:"distance-mark-end-boundary ".concat(r),style:(0,g.default)({},h.endBoundary,{borderColor:u})})))}),(0,b.default)((0,c.default)(v),"getMarkStyle",function(e,t){var a,n=v.props.baseRect,r={line:{},value:{},endBoundary:{}},i=["right","left"],o=i.includes(e)?t/n.width:t/n.height
return r.line=(a={},(0,b.default)(a,e,t<0?0:(0,d.toPercentage)(-o)),(0,b.default)(a,i.includes(e)?"width":"height",(0,d.toPercentage)(Math.abs(o))),a),r.endBoundary=(0,b.default)({},e,(0,d.toPercentage)(-o)),r.value=(0,b.default)({},i.includes(e)?"left":"top",["right","bottom"].includes(e)?(0,d.toPercentage)(1+o/2):(0,d.toPercentage)(-o/2)),r}),v}return(0,u.default)(r,e),(0,o.default)(r,[{key:"render",value:function(){var e=this.props,t=e.baseRect,a=e.refRect,n=e.screen,r=(0,d.getDistancesForDirections)(t,a
),i=this.getDistanceMarksStyle(t,n)
return S.default.createElement("div",{className:"distance-marks",style:i},Object.entries(r).map(this.mapDistanceMarks))}}]),r}(S.default.Component);(t.default=f).propTypes={baseRect:r.default.object,refRect:r.default.object,screen:r.default.object,style:r.default.object,renderValue:r.default.func}},YCqe:function(e,t,a){e.exports={"debug-panel":"_2FC9CioQVPnHdqZbgEIKH7"}},YwNm:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("MVZn")),l=a("upRB"),s={useTransform:!1,disableTouch:!1,disablePointer:!0,preventDefault:!0,ignoreEventException:function(e){var t=$(e.target).closest(".widget")
if(t.length){if(t.hasClass("webpage"))return!0
if(t.hasClass("map_view"))return!0
if(t.find("input").length)return!0}var a=$(e.target).closest(".ppanel")
if(a.length){var n=Panel.find(a.data("cid")),r=n.getState(MB.currentScreen.state_cid),i=n.ct()
if(i.height>r.height||i.width>r.width)return!0}return!1}},c=(0,o.default)({},s,{probeType:3,scrollbars:!0,mouseWheel:!0,disableMouse:!1,interactiveScrollbars:!0,shrinkScrollbars:"scale",fadeScrollbars:!0,HWCompositing:!1}),u=function(){function e(){(0,r.default)(this,e),this.iScrollMap={}}return(0,i.default)(e,[{key:"clear",value:function(){this.destroyScrollBar()}},{key:"setObjectUrl",value:function(e,t){e&&(e.contentWindow?e.contentWindow.location.replace(t):e.setAttribute("src",t))}},{key:"deviceOrient",
value:function(){return $(window).width()>$(window).height()?"landscape":"portrait"}},{key:"toggleScrollBar",value:function(t){Object.values(this.iScrollMap).forEach(function(e){t?e.enable():e.disable()})}},{key:"renderScrollbar",value:function(e){this.iScrollMap[e]?this._refreshScrollBar(e):this._initScrollBar(e)}},{key:"_initScrollBar",value:function(e){if(!this.iScrollMap[e]){var a=document.querySelector("#pscreen".concat(e," .screen-content"))
if(!a)throw new Error("初始化滚动条失败, 找不到对应的DOM元素"+e)
var t=MB.isMobile()?s:c,n=new window.IScroll(a,t),r=document.querySelector("#sticky-container")
r&&n.on("scroll",function(e){var t=a.querySelector(".widgets")
r.querySelector("#stickies").style.marginTop=t.style.top}),MB.isMobile()||$(a).on("wheel",function(e){a.offsetHeight!==a.scrollHeight&&e.stopPropagation()}),this.iScrollMap[e]=n}}},{key:"_refreshScrollBar",value:function(e){this.iScrollMap[e]&&this.iScrollMap[e].refresh()}},{key:"resetScreenScrollState",value:function(e){var t=this.iScrollMap[e]
t&&t.scrollTo(0,0)
var a=document.querySelector("#stickies")
a&&(a.style.marginTop=0)}},{key:"destroyScrollBar",value:function(){Object.values(this.iScrollMap).forEach(function(e){$(e.wrapper).off("wheel"),e.destroy()}),this.iScrollMap={}}},{key:"destroyScrollBarByCid",value:function(e){var t=this.iScrollMap[e]
t&&($(t.wrapper).off("wheel"),t.destroy(),delete this.iScrollMap[e])}},{key:"resetScrollState",value:function(){Object.values(this.iScrollMap).forEach(function(e){return e.scrollTo(0,0)})
var e=document.querySelector("#stickies")
e&&(e.style.marginTop=0)}},{key:"setupStatusBar",value:function(e){var t=$(".pcanvas.active .status_bar").removeClass("standalone light")
if(window.innerHeight>window.innerWidth){t.addClass("standalone")
var a=e.sb()
!a||a.th&&"light"!=a.th||t.addClass("light")}if(MB.isIOS9()&&this.deviceOrient()===e.orient()){var n=MB.COMPONENTS.status_bar.height
$("#app").css({top:0-n,height:window.innerHeight+n})}}},{key:"hideScreen",value:function(e){$(e).hide(),$(e).find(".iframe").each(function(e,t){MB.runner.runnerUtil.setObjectUrl(t,"about:blank")})}},{key:"getIsImmersive",value:function(){return(0,l.getIsImmersive)(MB.webpackInterface.store.getState())}},{key:"getIsHighlight",value:function(){return(0,l.getIsHighlight)(MB.webpackInterface.store.getState())}},{key:"getIsScreenExpanded",value:function(){return(0,l.getIsScreenExpanded)(
MB.webpackInterface.store.getState())}},{key:"getCurrentScreen",value:function(){var e=(0,l.getRunnerActiveScreenCid)(MB.webpackInterface.store.getState())
return Screen.find(e)}}]),e}()
t.default=u},Z3xQ:function(e,t,a){"use strict"
var n=a("TqRt")
a("p/ml"),a("83sM"),a("tTzg"),a("Kgn6"),a("3y7X"),a("hQvp"),a("1gVK"),a("FTTL"),a("Tbyd"),a("r2ef"),a("ypWq"),a("DhCz"),a("ZjFo"),a("NlNL"),a("7xwf")
var r=n(a("zkrS"))
a("KKmY"),a("P3rE"),a("dppN"),a("T7iu")
var i=n(a("7eYF")),o=n(a("aqSL")),l=a("+Cau"),s=a("rbsZ"),c=a("abHt")
a("RJdT"),a("20hc"),MB.COMPONENTS=c.componentMap
try{r.default.MB.webpackInterface=(0,i.default)(o.default),r.default.MB.renewMsg=s.getRenewMessage,r.default.MB.promptRenew=s.openRenewModal,r.default.MB.messageBucket=(0,l.createMessageBucket)(l.receiverMap)}catch(e){console.warn("[UI:Preview] Failed to init:",e.stack||e)}},ZS4k:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("4sCl")),o=a("Kkl0"),l=(0,r.connect)(function(e){var t=e.container,a=t.common.keyFlags.isSpaceDown,n=t.layers,r=n.resourceByScreen,i=n.visibilityScreenID,o=n.activeLayerID,l=n.enteredLayerID,s=t.previewSetting,c=s.unit,u=s.ratio,d=s.isShowColorPicker,f=e.model,p=f.current.screenCid,h=f.screens.find(function(e){return e.cid===p})
return{isSpaceDown:a,layers:r[i]&&r[i].layers||[],artboard:r[i]&&r[i].artboard,currentScreen:h,activeLayerID:o,enteredLayerID:l,isShowLayerList:!d,unit:c,ratio:u}},function(t){return{requestSelectLayer:function(e){t((0,o.requestSelectLayer)(e))},enterLayer:function(e){t((0,o.enterLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(i.default)
t.default=l},ZY2Q:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"container:comment:loaded-project":return(0,r.default)({},e,{loadedProjectCid:n.projectCid||null,loadedProjectCommentData:n.projectCommentData||null})
case"container:comment:focus":return(0,r.default)({},e,{focusCommentThreadCid:n.focusCommentThreadCid,focusSource:n.focusSource||null,tempCommentThreadMarker:e.tempCommentThreadMarker&&e.tempCommentThreadMarker.cid===n.focusCommentThreadCid?e.tempCommentThreadMarker:null})
case"container:comment:focus-temp-marker":return(0,r.default)({},e,{focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:n})}return e}
var r=n(a("MVZn")),i={loadedProjectCid:null,loadedProjectCommentData:null,focusCommentThreadCid:null,focusSource:null,tempCommentThreadMarker:null}},"Zu+4":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("PJYZ")),o=r(a("lSNA")),l=r(a("lwsE")),s=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("7W2i")),y=n(a("q1tI")),f=r(a("17x9")),p=a("vOnD"),h=r(a("i6OX")),b=a("wYtL"),m=r(a("QdB0")),S=r(a("5Mi5")),w=r(a("ULaQ")),E=r(a("Aa0X")),k=r(a("18l9")),C=r(a("jZq5")),T=r(a("DJvY")),x=r(a("DdUa")),_=r(a("2AqR")),M=r(a("nQhf")),P=r(a("xUDz")),I=r(a("NyBV")),N=r(a("ewu5")),R=r(a("mdx/")),v=r(a("gY5R")),L=a("1iCU"),g=r(a("XpKX")),j=r(a("UbMB")).default.bind(g.default),A=window,O=A.MB,B=A.I18N,D=new Set([
"ai@mockingbot.com","ethantw@me.com"]),F=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return y.default.createElement(p.ThemeProvider,{theme:v.default.light},y.default.createElement(q,this.props))}}]),t}(y.PureComponent)
t.default=F
var q=function(e){function r(e){var t;(0,l.default)(this,r),t=(0,c.default)(this,(0,u.default)(r).call(this,e)),(0,o.default)((0,i.default)(t),"handleClick",function(){Y(),t.setState({showLoadtip:!1})})
var a=e.dispatch
a({type:"entry:init:preview:scale"}),a({type:"reducer:artboards:init"}),a({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),a({type:"entry:init:preview-setting"}),t.state={showLoadtip:!0}
var n=new URLSearchParams(location.search)
return n.has("inspect")?e.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:L.INSPECT}}):n.has("comment")?e.dispatch({type:"entry:preview:select",payload:{toolbarActiveItem:L.COMMENT}}):e.dispatch({type:"reducer:preview-toolbar:active-item:init"}),t}return(0,d.default)(r,e),(0,s.default)(r,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"entry:preview:clear"})}},{key:"componentDidMount",value:function(){var e=(0,m.default)()
if(e){var t={open:!0,event:e}
this.props.dispatch({type:"event-sign-up:set:event",payload:t})}}},{key:"render",value:function(){var e=this.props,t=e.isLite,a=e.project,n=e.previewSetting,r=e.isProjectFromOtherFreeUser,i=e.toastList,o=e.popupList,l=e.dispatch,s=this.state.showLoadtip
if(t)return y.default.createElement(y.default.Fragment,null,y.default.createElement(x.default,null),y.default.createElement(M.default,null))
var c=a.owner_email,u=a.master,d=n.toolbarActiveItem,f=n.isFullScreenMode,p=d==L.PREVIEW,h=d==L.INSPECT,m=!O.isElectron()&&!O.isHTMLZip()&&h&&s&&z(),v=!u&&p&&(D.has(c)||r),g=j("mb-preview-page",{"is-offline-mode":O.isHTMLZip(),"is-uichina":O.isUIChina()||O.isForum(),"full-screen":f})
return y.default.createElement("div",{className:g},y.default.createElement(_.default,null),f&&y.default.createElement(P.default,null),y.default.createElement("div",{id:"preview-content-container",className:"preview-content-container"},y.default.createElement(E.default,null),y.default.createElement(T.default,null),y.default.createElement(C.default,null),y.default.createElement(k.default,null)),v||O.isUIChina()&&y.default.createElement("a",{className:"powered-by",href:"/",target:"_blank"},
y.default.createElement("img",{className:"zh",src:"/images/preview/watermark_zh.svg",alt:B.preview.powered_by_modao}),y.default.createElement("img",{className:"en",src:"/images/preview/watermark_en.svg",alt:B.preview.powered_by_modao})),y.default.createElement(W,{isActive:m,onClick:this.handleClick}),p&&y.default.createElement(I.default,null),y.default.createElement(M.default,null),y.default.createElement(w.default,null),y.default.createElement(S.default,{dispatch:l}),y.default.createElement(
b.TooltipGlobalStyle,null),y.default.createElement(N.default,{toastList:i}),y.default.createElement(R.default,{popupList:o}))}}]),r}(y.Component);(0,o.default)(q,"propTypes",{isLite:f.default.bool,project:f.default.object,previewSetting:f.default.object,isProjectFromOtherFreeUser:f.default.bool,toastList:f.default.array,popupList:f.default.array,dispatch:f.default.func})
var W=function(e){var t=e.isActive,a=e.onClick
return t?y.default.createElement("div",{className:"download-client-tip"},y.default.createElement(h.default,{type:"fa",name:"info-circle",className:"download-client-tip-icon"}),y.default.createElement("span",{className:"download-text"},y.default.createElement("a",{href:"/downloads",rel:"noopener noreferrer",target:"_blank"},B.preview.client_load_a)," ",B.preview.client_load_tip),y.default.createElement(h.default,{type:"dora",name:"times_fc",className:"download-client-close-icon",onClick:a})):null}
W.propTypes={isActive:f.default.bool.isRequired,onClick:f.default.func.isRequired}
var U="close_client_load_tip",z=function(){return!O.localStorageDelegate.getItem(U)},Y=function(){return O.localStorageDelegate.setItem(U,"true")}},aYzi:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),d=a("1iCU"),i=a("/5+U"),o=n(a("Zu+4")),f=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),l=(0,r.connect)(function(e){var t=e.model,a=t.current,n=t.projects,r=e.container,i=r.previewSetting,o=r.toastList,l=r.popupList,s=i.toolbarActiveItem,c=f(n,a.projectCid),u=MB.isMobile()||MB.isEmbedded()
return{isLayerActive:s===d.INSPECT,isCommentActive:s===d.COMMENT,previewSetting:i,isProjectFromOtherFreeUser:a.userId!==c.owner_id&&c.expired,isLite:u,project:c,toastList:o,popupList:l}})(o.default)
t.default=l},aqSL:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("q1tI")),i=n(a("i8i4")),l=a("/MKj"),s=a("q3nj"),c=a("6x+O"),u=n(a("6ZRU")),o={containerReducerMap:s.reducerMap,sagaMap:s.sagaMap,extendCallback:function(o){o.renderPreview=function(e){var t=o.store
t.dispatch({type:"entry:init:preview:related:data"}),i.default.render(r.default.createElement(l.Provider,{store:t},r.default.createElement(s.PreviewContainer,null)),e)},o.renderPreviewAlert=function(){i.default.render(r.default.createElement(u.default.containers.Alert,{store:o.store}),(0,c.getModalElement)())},o.pushData=function(e,t,a){o.store.dispatch({type:"entry:state:push-data",payload:{pushType:e,action:t,data:a}})},o.checkLocationHash=function(){var e=window.location.hash||"",t=o.store,a=t.getState,
n=t.dispatch
if(e.startsWith("#thread=")){var r=e.substr("#thread=".length),i=a().model.commentThreads.find(function(e){return e.cid===r})
if(!i)return console.warn("[checkLocationHash] missing commentThread: ".concat(r))
n({type:"entry:sync-runner:set-screen",payload:{cid:i.screen_cid}}),n({type:"entry:comment:set:active",payload:{isActive:!0}}),n({type:"container:comment:focus",payload:{focusCommentThreadCid:i.cid}})}},o.updateCurrentScreenRunner=function(e){if(!e)return console.warn("[updateCurrentScreenRunner] missing currentScreen")
o.store.dispatch({type:"entry:current:set-screen",payload:e}),window.location.hash="#screen=".concat(e.cid)}}}
t.default=o},aw2M:function(e,t,a){},bNtH:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),v=n(a("q1tI")),g=a("S9rr"),p=function(e){function t(){var y
return(0,i.default)(this,t),y=(0,l.default)(this,(0,s.default)(t).call(this)),(0,d.default)((0,c.default)(y),"handleScroll",function(e){e.stopPropagation()
var r=e.target.dataset.axis,i=e.clientX,o=e.clientY,t=y.props,a=t.canvasOffset,l=a.x,s=a.y,n=t.viewportHeight,c=t.viewportWidth,u=t.canvasRange,d=t.onScroll,f="x"===r?c:n,p=function(e){var t=e.clientY,a=e.clientX,n="x"===r?a-i:t-o
n=n/(f-f/u[r]*f)*u[r],d("x"===r?{x:l-n,y:s}:{x:l,y:s-n})}
document.addEventListener("mousemove",p),document.addEventListener("mouseup",function e(t){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",e)})}),(0,d.default)((0,c.default)(y),"handleClickTrack",function(e){var d=e.target.dataset.axis,f=e.clientX,p=e.clientY,t=y.props,h=t.onScroll,m=t.canvasRange,a=t.viewportHeight,n=t.viewportWidth,r=y.scrollbarX.getBoundingClientRect(),i=r.top,o=r.bottom,l=r.left,s=r.right,v="x"===d?y.scrollbarX:y.scrollbarY,g="x"===d?n:a,c=function(){
var e=v.getBoundingClientRect(),t=e.top,a=e.bottom,n=e.left,r=e.right,i=y.props.canvasOffset,o=i.x,l=i.y,s="x"===d?r<f:a<p,c="x"===d?f<n:p<t,u=(c?-1:s?1:0)*Math.min(m[d]/10,g);(s||c)&&h("x"===d?{x:o-u,y:l}:{x:o,y:l-u})};(("x"===d?s<f:o<p)||("x"===d?f<l:p<i))&&(v.style.transition="all 0.1s linear",c(),y.timer=setTimeout(function(){return y.timeInterval=setInterval(c,100)},500))
document.addEventListener("mouseup",function e(t){v.style.transition="",clearTimeout(y.timer),clearInterval(y.timeInterval),document.removeEventListener("mouseup",e)})}),y.setRefY=function(e){return y.scrollbarY=e},y.setRefX=function(e){return y.scrollbarX=e},y}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,a=t.x,n=t.y,r=e.canvasRange,i=e.viewportWidth,o=e.viewportHeight,l=e.showRuler,s=i/r.x,c=(r.x/2-a)*(r.x-i)/(r.x*r.x)
c=Math.min(Math.max(c,0),(r.x-i)/r.x)
var u=o/r.y,d=(r.y/2-n)*(r.y-o)/(r.y*r.y)
d=Math.min(Math.max(d,0),(r.y-o)/r.y)
var f={width:"".concat(100*s,"%"),left:"".concat(100*c,"%")},p={height:"".concat(100*u,"%"),top:"".concat(100*d,"%")},h=l?null:{left:0},m=l?null:{top:0}
return v.default.createElement(g.StyledScrollBar,null,v.default.createElement("div",{"data-axis":"x",className:"track x-track",style:h,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefX,className:"handler","data-axis":"x",onMouseDown:this.handleScroll,style:f},v.default.createElement("div",{className:"thumb"}))),v.default.createElement("div",{"data-axis":"y",className:"track y-track",style:m,onMouseDown:this.handleClickTrack},v.default.createElement("div",{ref:this.setRefY,
className:"handler y-handler","data-axis":"y",onMouseDown:this.handleScroll,style:p},v.default.createElement("div",{className:"thumb"}))))}}]),t}(v.PureComponent)
t.default=p,(0,d.default)(p,"propTypes",{canvasOffset:f.default.object,canvasRange:f.default.object,viewportWidth:f.default.number,viewportHeight:f.default.number,showRuler:f.default.bool,onScroll:f.default.func}),(0,d.default)(p,"defaultProps",{showRuler:!1})},bTYh:function(e,t,a){},cQH5:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("MVZn")),i=n(a("4vJh")),o=n(a("FJlG")),l=n(a("vRqJ")),s=n(a("FYsW")),c=a("80la"),u=a("oose"),d=a("tBsX"),f=n(a("4x8W")),p=n(a("qTnY")),h=n(a("G1Xk")),m=n(a("6ZRU")),v={isSpaceDown:!1},g={offset:{x:0,y:0},scale:100,keyFlags:v,viewport:{width:0,height:0},preference:{}}
var y={toastList:p.default,popupList:h.default,alert:m.default.reducers,common:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:g,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"preview:update:state":return(0,r.default)({},e,n)
case"preview:set:canvas:offset":return(0,r.default)({},e,{offset:n.offset})
case"preview:set:scale":return(0,r.default)({},e,{scale:n.scale})
case"preview:set:key:flags":return(0,r.default)({},e,{keyFlags:(0,r.default)({},v,n)})
case"preview:reset:key:flags":return(0,r.default)({},e,{keyFlags:v})
case"preview:scrollbar:viewport":return(0,r.default)({},e,{viewport:n})
default:return e}},comment:u.reducer,layers:d.reducers,slices:c.reducer,screens:i.default,artboards:l.default,previewSetting:o.default,eventSignUpModal:f.default,runner:s.default}
t.default=y},ctY3:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=r(a("OVdA")),m=r(a("UbMB")).default.bind(h.default),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"setElementRef",function(e){return t.textarea=e}),(0,f.default)((0,u.default)(t),"handleFocus",function(){t.props.onFocus()}),(0,f.default)((0,u.default)(t),"handleChange",function(e){(0,t.props.onChange)(e.target.value)}),(0,f.default)((0,u.default)(t),"handleBlur",function(){t.props.onBlur()}),(0,f.default)((0,u.default)(t),"handleKeyDown",function(e){"Enter"===e.key?(e.preventDefault(),
t.handleBlur()):"Escape"===e.key&&(t.props.onChange(t.cacheValue),t.cacheValue=null,t.handleBlur())}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentDidMount",value:function(){this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"componentDidUpdate",value:function(e,t){!e.editing&&this.props.editing&&(this.cacheValue=this.props.value,this.textarea.select())}},{key:"handleStopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){
var e=this.props,t=e.editing,a=e.value,n=e.className
return t?p.default.createElement("div",{className:m("text-wrapper",n),onClick:this.handleStopPropagation},p.default.createElement("textarea",{ref:this.setElementRef,value:a,onFocus:this.handleFocus,onChange:this.handleChange,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown})):p.default.createElement("span",{className:m("text-no-editing",n)},a)}}]),i}(p.PureComponent);(t.default=v).propTypes={editing:i.default.bool,value:i.default.string,className:i.default.string,onFocus:i.default.func,
onBlur:i.default.func,onChange:i.default.func},v.defaultProps={onFocus:function(){},onChange:function(){}}},d89S:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var S=n(a("MVZn")),r=a("/MKj"),w=n(a("J2m7")),i=n(a("KHYK")),o=(0,r.connect)(function(e){return(0,S.default)({},(i=(t=e).container,o=i.layers,l=o.resourceByScreen,s=o.visibilityScreenID,c=o.activeLayerID,u=o.enteredLayerID,d=i.previewSetting,f=d.ratio,p=d.unit,h=t.model,m=h.current.screenCid,v=h.screens,g=l[s],y=!1,b=p,g&&(a=(0,w.default)(g.layers,function(e){return e.id===c}),n=(0,w.default)(g.layers,function(e){return e.id===u}),a&&n&&n.id!==a.id&&(y=!0,r=v.find(function(e){return e.cid===m}))),{show:y,
ratio:f,distanceUnit:b,selectedLayer:a,hoveringLayer:n,screen:r}))
var t,a,n,r,i,o,l,s,c,u,d,f,p,h,m,v,g,y,b})(i.default)
t.default=o},dAiO:function(e,t,a){},"dYO+":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var d=r(a("J4zp")),i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("17x9")),f=n(a("q1tI")),p=a("Gbs1"),h=r(a("An9T")),m=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,a=e.shellType,n=function(e,t,a){switch(e){case"device":var n=(0,p.getProjectShell)(t,e)
if(!n.bg)return null
var r=a?"".concat(n.bg,"_land"):n.bg,i=a?[-n.left,-n.top,n.height,n.width]:[-n.top,-n.left,n.width,n.height],o=(0,d.default)(i,4),l=o[0],s=o[1],c=o[2],u=o[3]
return{top:l,left:s,width:c,height:u,backgroundImage:"url(".concat(MB.isHTMLZip()?".":"","/images/devices/").concat(r,".png)")}
case"default":case"none":return null}}(a,t,e.isLandscape),r="device"===a&&null===n?"none":a
return f.default.createElement("div",{className:"".concat(h.default.shell," ").concat(r),style:n})}}]),t}(f.PureComponent);(t.default=m).propTypes={project:u.default.object,shellType:u.default.string,isLandscape:u.default.bool}},dZ9F:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=n(a("q1tI")),r=n(a("17x9")),i=n(a("vOnD")),u=a("/5+U"),o=function(e){var t=e.value,a=e.ratio,n=e.valueRatio,r=e.unit,i=e.style,o=e.className,l=e.customClassName,s=(0,u.adapterScreen)(t,a)
return c.default.createElement("div",{style:i,className:"".concat(o," ").concat(l)},"".concat(Math.round(s*n)).concat(r))},l=(0,i.default)(o).withConfig({displayName:"MarkLabel__StyledMarkValue",componentId:"sc-1b6nimd-0"})(["padding:0 5px;color:#fff;background-color:#ff7100;border-radius:2px;"])
o.propTypes={value:r.default.oneOfType([r.default.string,r.default.number]),ratio:r.default.number,valueRatio:r.default.number,unit:r.default.string,style:r.default.object,className:r.default.string,customClassName:r.default.string}
var s=l
t.default=s},dhJN:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("43RC")),m=r(a("6gQ3")),v=r(a("zgSj")),g=a("oose"),y=a("1iCU"),b=a("fcSx"),S=function(e){function t(e){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(a),"toggleMinimized",function(e){var t=a.props.toolbarActiveItem
a.setState({isMinimized:e}),MB.event("preview","".concat(y.TOOLBAR_TRAKING_CONFIG[t],",点击了").concat(e?"收起":"展开","列表"))}),a.state={isMinimized:MB.isUIChina()||MB.isForum()},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isLayerPanelShow,a=e.isCommentPanelShow,n=e.isScreenPanelShow,r=this.state.isMinimized
if(!(t||a||n))return null
var i=n?240:260
return p.default.createElement(b.StyledLeftPane,{id:"mb-preview-leftpane",style:{width:r?0:i}},n&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"preview-panel-wrapper"},p.default.createElement(m.default,null)),p.default.createElement(h.default,{placement:"right",isMinimized:r,onClick:this.toggleMinimized})),t&&p.default.createElement(v.default,null),a&&p.default.createElement(g.CommentContainer,null))}}]),t}(p.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{toolbarActiveItem:f.default.string,isScreenPanelShow:f.default.bool,isLayerPanelShow:f.default.bool,isCommentPanelShow:f.default.bool})},dppN:function(e,t,a){},eNKG:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityScreenID=o,t.resourceByScreen=s,t.default=void 0
var r=n(a("lSNA")),i=a("JfQ8")
function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"-1",t=1<arguments.length?arguments[1]:void 0
switch(t.type){case i.SET_VISIBILITY_SCREEN:return t.payload.screenID
default:return e}}var l={"-1":{isFetching:!1,layers:[],error:""}}
function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:l,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case i.RECEIVE_RESOURCE_SUCCESS:case i.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,(0,r.default)({},t.payload.screenID,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,layers:[],error:""},t=1<arguments.length?arguments[1]:void 0
switch(t.type){case i.RECEIVE_RESOURCE_SUCCESS:return Object.assign({},e,{isFetching:!1,layers:t.payload.layers,error:void 0,artboard:t.payload.artboard,documentColor:t.payload.document_colors,globalColor:t.payload.global_colors,globalText:t.payload.text_styles})
case i.RECEIVE_RESOURCE_ERROR:return Object.assign({},e,{isFetching:!1,layers:[],error:t.payload.error})
default:return e}}(e[t.payload],t)))
case"container:layers:clear":return l
default:return e}}var c={visibilityScreenID:o,resourceByScreen:s}
t.default=c},ee4a:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("Kkl0"),r=a("JfQ8")
var i={selectedLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.SELECT_LAYER:return t.payload.layerID===e?-1:t.payload.layerID
case r.SET_VISIBILITY_SCREEN:return-1
default:return e}},activeLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.ACTIVATE_LAYER:return t.payload.layerID
case r.SET_VISIBILITY_SCREEN:return-1
default:return e}},enteredLayerID:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,t=1<arguments.length?arguments[1]:void 0
switch(t.type){case n.ENTER_LAYER:return t.payload.layerID
default:return e}}}
t.default=i},f7BV:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=function(){function e(){(0,r.default)(this,e),this.timeoutMap=new Map}return(0,i.default)(e,[{key:"setTimeout",value:function(n){function e(e,t,a){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(e,t,a){var n=this,r=setTimeout(function(){t(),n.clearTimeout(e,t)},a)
return this.setToken(e,t,r),r})},{key:"clearTimeout",value:function(a){function e(e,t){return a.apply(this,arguments)}return e.toString=function(){return a.toString()},e}(function(e,t){var a=this.getToken(e,t)
void 0!==a&&(clearTimeout(a),this.clearToken(e,t))})},{key:"clearTimeoutByKey",value:function(a){var n=this,e=this.timeoutMap.get(a)
void 0!==e&&(e.forEach(function(e,t){return n.clearTimeout(a,t)}),this.timeoutMap.delete(a))}},{key:"clear",value:function(){var a=this
this.timeoutMap.forEach(function(e,t){return a.clearTimeoutByKey(t)})}},{key:"setToken",value:function(e,t,a){var n=this.timeoutMap.get(e)
void 0===n&&(n=new Map,this.timeoutMap.set(e,n)),n.set(t,a)}},{key:"getToken",value:function(e,t){var a=this.timeoutMap.get(e)
if(a)return a.get(t)}},{key:"clearToken",value:function(e,t){var a=this.timeoutMap.get(e)
a&&a.delete(t)}}]),e}()
t.default=o},fSKh:function(e,t,a){},fcSx:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledLeftPane=void 0
var r=n(a("vOnD")).default.div.withConfig({displayName:"styles__StyledLeftPane",componentId:"uzp97l-0"})(["position:relative;height:100%;transition:all 0.3s ease-in-out;z-index:100;.preview-panel-wrapper{position:absolute;top:0;right:0;height:100%;}"])
t.StyledLeftPane=r},fiFu:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getUserAuthStatus=t.USER_AUTH_STATUS_MEMBER=t.USER_AUTH_STATUS_NOT_MEMBER=t.USER_AUTH_STATUS_NOT_SIGN_IN=t.getCommentPermission=t.clamp=t.muteEvent=t.MUTE_EVENT=void 0
var n=function(e){e&&e.preventDefault(),e&&e.stopPropagation()}
t.MUTE_EVENT=n
t.muteEvent=function(t){return function(e){return n(e),t&&t(e)}}
t.clamp=function(e,t,a){return Math.min(Math.max(e,t),a)}
var i=[0,1,2,3,4,5,6,7].map(function(e){return{create:!!(1&e),update:!!(2&e),delete:!!(4&e)}})
t.getCommentPermission=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"INVALID_ID_0",n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"INVALID_ID_1",r=e&&n===a
return i[(e?1:0)+(r?2:0)+(r||t?4:0)]}
var r="NOT_SIGN_IN"
t.USER_AUTH_STATUS_NOT_SIGN_IN=r
var o="NOT_MEMBER"
t.USER_AUTH_STATUS_NOT_MEMBER=o
t.USER_AUTH_STATUS_MEMBER="MEMBER"
t.getUserAuthStatus=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[]
return(t=t&&String(t))?e.some(function(e){return e.user_id===t})?"MEMBER":o:r}},flWF:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.Widget,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:widgets:update",payload:i(e,r,o)})})},u={entryMap:{"widgets:refresh":c(r.refreshStateList,!1),"widgets:add":c(r.addState,!1),"widgets:add-local":c(r.addState,!0),"widgets:update":c(r.updateState,!1),"widgets:update-local":c(r.updateState,!0),"widgets:delete":c(r.deleteState,!1),"widgets:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},foKU:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=r(a("pVnL")),s=r(a("QILm")),i=r(a("lwsE")),o=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),f=r(a("7W2i")),p=r(a("lSNA")),h=r(a("17x9")),m=n(a("q1tI")),v=MB.config.SCALES[0],g=MB.config.SCALES[MB.config.SCALES.length-1],y=function(e){function r(){var e,m;(0,i.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return m=(0,c.default)(this,(e=(0,u.default)(r)).call.apply(e,[this].concat(a))),(0,p.default)((0,d.default)(m),"setElementRef",function(e){return m.$elem=e}),(0,p.default)((0,d.default)(m),"handleWheel",function(e){e.preventDefault()
var t=m.props,a=t.x,n=t.y,r=t.scale,i=t.isDisabled,o=t.onOffsetChange
if(!i){var l=Math.max(-1,Math.min(e.deltaY,1))
if(e.ctrlKey||e.metaKey){var s=m.$elem.getBoundingClientRect(),c=s.top,u=(s.left+s.right)/2,d=(c+s.bottom)/2,f=r<=100?r-5*l:r-r*l*.05,p=e.pageX-u,h=e.pageY-d
m.handleZoom(f,p,h)}else o(a-e.deltaX,n-e.deltaY)}}),m}return(0,f.default)(r,e),(0,o.default)(r,[{key:"handleZoom",value:function(e,t,a){var n=this.props,r=n.x,i=n.y,o=n.scale,l=n.onOffsetChange,s=n.onScaleChange,c=(e=Math.min(Math.max(e,v),g))/o
1!==c&&(l(t+c*(r-t),a+c*(i-a)),s(e))}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.scale,r=e.children,i=(e.onOffsetChange,e.onScaleChange,e.isDisabled),o=(0,s.default)(e,["x","y","scale","children","onOffsetChange","onScaleChange","isDisabled"])
return m.default.createElement("div",(0,l.default)({},o,{ref:this.setElementRef,onWheel:this.handleWheel}),r.map(function(e){return"function"==typeof e?e(t,a,n,i):e}))}}]),r}(m.PureComponent)
t.default=y,(0,p.default)(y,"propTypes",{x:h.default.number,y:h.default.number,isDisabled:h.default.bool,scale:h.default.number,children:h.default.array,onScaleChange:h.default.func,onOffsetChange:h.default.func})},gSgL:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.SliceContainer=void 0
var s=r(a("o0o1")),i=r(a("yXPU")),l=r(a("lwsE")),o=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),f=r(a("7W2i")),p=r(a("lSNA")),h=r(a("17x9")),m=n(a("q1tI")),v=a("/MKj"),g=r(a("sEfC")),y=a("wYtL"),b=r(a("i6OX")),S=r(a("prTy")),w=r(a("UbMB")),E=r(a("2s0x")),k=a("/5+U"),C=a("Nu6V"),T=w.default.bind(E.default),x=!1,_=function(e){function r(e){var o;(0,l.default)(this,r),o=(0,c.default)(this,(0,u.default)(r).call(this,e)),(0,p.default)((0,d.default)(o),"handleActiveLayer",function(e){o.setState({
activeLayerId:e})}),(0,p.default)((0,d.default)(o),"downloadSlice",(0,i.default)(s.default.mark(function e(){var t,a,n,r,i
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.props,a=t.projectCid,n=t.projectName,r=t.isLogin,MB&&MB.currentProject&&!MB.currentProject.limitation.inspectable)return MB.promptRenew("inspectable"),e.abrupt("return")
e.next=4
break
case 4:if(!0!==o.state.download&&r){e.next=6
break}return e.abrupt("return")
case 6:return o.startLoadSlice(),e.next=9,j(a,n)
case 9:i=e.sent,o.endLoadSlice(i)
case 11:case"end":return e.stop()}},e)}))),(0,p.default)((0,d.default)(o),"startLoadSlice",function(){o.startTime=Date.now(),o.setState({download:!0}),MB.event("preview","点击下载全部切图")}),(0,p.default)((0,d.default)(o),"endLoadSlice",function(e){e&&(MB.event("preview","下载全部切图时长".concat(Date.now()-o.startTime)),o.setState({download:!1}))}),(0,p.default)((0,d.default)(o),"requestLayer",function(e){var t=o.props.dispatch
t({type:"REQUEST_SELECT_LAYER",payload:{layerID:e}}),t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:!0}})}),x=!1,o.state={download:!1,activeLayerId:null}
var t=o.props,a=t.loading,n=t.dispatch
return a&&n({type:"reducer:slice:init"}),o}return(0,f.default)(r,e),(0,o.default)(r,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.projectCid,a=e.dispatch,n=this.state.download,r="/api/v2/projects/".concat(t,"/build/slices_zips.json")
n&&(x=!0,a({type:"reducer:preview-toolbar:update",payload:{loadSliceUrl:r}}))}},{key:"render",value:function(){var o=this,e=this.state,t=e.download,l=e.activeLayerId,a=this.props,n=a.slicesMap,r=a.loading,i=a.error,s=a.currentScreenCid,c=a.isLogin
return i||r?m.default.createElement(R,null):0===n.length?m.default.createElement(L,null):m.default.createElement("div",{className:T("slice-container")},n.map(function(e){var t=e.name,a=e.id,n=e.screen_cid,r=e.image,i=e.image_set
return m.default.createElement(M,{key:a,src:r,name:t,currentScreenCid:s,id:a,imageSet:i,screenCid:n,requestLayer:o.requestLayer,activeLayer:o.handleActiveLayer,activeLayerId:l})}),m.default.createElement(P,{onClick:this.downloadSlice,isLoading:t,isLogin:c}))}}]),r}(m.PureComponent)
_.propTypes={slicesMap:h.default.array.isRequired,loading:h.default.bool,error:h.default.bool,currentScreenCid:h.default.string,isLogin:h.default.bool,projectCid:h.default.string,projectName:h.default.string,dispatch:h.default.func}
var M=function(e){function t(){var n
return(0,l.default)(this,t),n=(0,c.default)(this,(0,u.default)(t).call(this)),(0,p.default)((0,d.default)(n),"isIncurrentScreen",function(){return n.props.screenCid===n.props.currentScreenCid}),(0,p.default)((0,d.default)(n),"handleClick",function(){var e=n.props,t=e.id,a=e.requestLayer;(0,e.activeLayer)(t),n.isIncurrentScreen()?a(t):console.warn("Not in current Screen")}),(0,p.default)((0,d.default)(n),"handleOnload",function(){n.setState({imageLoad:!0})}),(0,p.default)((0,d.default)(n),"handleError",
function(){throw new Error("image load fail")}),(0,p.default)((0,d.default)(n),"handleMouseEnter",function(){n.setState({loadSingleSlice:!0})}),(0,p.default)((0,d.default)(n),"handleMouseLeave",function(){n.setState({loadSingleSlice:!1})}),(0,p.default)((0,d.default)(n),"handleSingleDownload",function(e){e.persist(),e.stopPropagation(),MB&&MB.currentProject&&!MB.currentProject.limitation.inspectable?MB.promptRenew("inspectable"):n.delaySingleDownload()}),n.state={imageLoad:!1,loadSingleSlice:!1},
n.imageRef=function(e){return n.$image=e},n.delaySingleDownload=(0,g.default)(function(){var e=n.props,t=e.imageSet,a=e.name;(0,k.downloadWithATag)({url:t,name:a,type:"zip"}),MB.event("preview","在切图列表中下载单张切图")},500,{leading:!0}),n}return(0,f.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.src,n=e.activeLayerId,r=e.id,i=this.state,o=i.imageLoad,l=i.loadSingleSlice,s=o?"opacity-1":"opacity-0",c={display:o?"block":"none"},u=T("slice-item",{active:n===r})
return m.default.createElement(y.Tooltip,{type:"block",content:{click:this.isIncurrentScreen()?null:I18N.preview_panel.not_incurrent_screen}},m.default.createElement("div",{className:u,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},m.default.createElement("div",{className:"slice-item-wrap",style:{background:"url(/images/preview/slice-bg.png) left top",backgroundSize:"cover"}},!o&&m.default.createElement("img",{src:"/images/preview/image-load-gif.gif",
alt:"Loading..."}),m.default.createElement(S.default,{style:c,src:a,alt:t,adjustImage:38,className:"".concat(s),onLoad:this.handleOnload,onError:this.handleError})),m.default.createElement("div",{className:"slice-item-content"},m.default.createElement("span",{className:"slice-item-name textEllipsis"},t),l&&m.default.createElement(b.default,{name:"export",type:"dora",onClick:this.handleSingleDownload}))))}}]),t}(m.PureComponent)
M.propTypes={name:h.default.string,src:h.default.string.isRequired,id:h.default.number.isRequired,imageSet:h.default.string.isRequired,screenCid:h.default.string.isRequired,requestLayer:h.default.func.isRequired,activeLayer:h.default.func,activeLayerId:h.default.number,currentScreenCid:h.default.string.isRequired}
var P=function(e){var t=e.onClick,a=e.isLoading,n=e.isLogin?null:I18N.preview.guide_login
return m.default.createElement(y.Tooltip,{content:{click:n},type:"block",position:"top",arrowed:!1,className:T("download"),onClick:t},I18N.preview_panel.download,a?m.default.createElement(N,null):m.default.createElement(b.default,{type:"dora",name:"export",className:T("icon-download")}))}
P.propTypes={onClick:h.default.func,isLoading:h.default.bool,isLogin:h.default.bool}
var I=function(){return m.default.createElement("div",{className:T("layer-load")},m.default.createElement("span",{className:T("spinner")}))},N=function(){return m.default.createElement("div",{className:T("download-slice-load")},m.default.createElement(I,null))},R=function(){return m.default.createElement("div",{className:T("slice-load-wrap")},m.default.createElement(I,null))},L=function(){return m.default.createElement("div",{className:T("no-slice")},m.default.createElement("img",{
src:"/images/preview/no-slice@2x.png"}),m.default.createElement("span",null,I18N.preview_panel.no_slice),m.default.createElement("span",null,I18N.preview_panel.slice_in_sketch),m.default.createElement("a",{href:"https://s3.cn-north-1.amazonaws.com.cn/modao/sketch/MockingBot.sketchplugin.zip"},m.default.createElement("img",{src:"/images/preview/ic_sketch@2x.png",alt:"sketch"}),I18N.preview_panel.download_sketch))},j=function(){var a=(0,i.default)(s.default.mark(function e(t,a){var n,r,i,o,l
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=1
case 2:if(!n){e.next=22
break}if(x)return e.abrupt("return")
e.next=5
break
case 5:return e.next=7,(0,C.fetchSliceZip)(t)
case 7:if(o=e.sent,l=o.url,"ok"!==o.status){e.next=15
break}n=!1,r=l,e.next=17
break
case 15:return e.next=17,(0,k.setTimeoutAsync)(Math.min(2e3*i++,1e4))
case 17:if(20<i)return(0,k.downloadFail)(),e.abrupt("return",!1)
e.next=20
break
case 20:e.next=2
break
case 22:return(0,k.downloadWithATag)({url:"/".concat(r),name:a,type:"zip"}),e.abrupt("return",!0)
case 24:case"end":return e.stop()}},e)}))
return function(e,t){return a.apply(this,arguments)}}(),A=(0,v.connect)(function(e){var t=e.model,a=t.current,n=a.screenCid,r=a.projectCid,i=t.user,o=e.container.slices
return{slicesMap:o.slices,loading:o.loading,error:o.error,isLogin:!!i.id,projectCid:r,currentScreenCid:n}})(_)
t.SliceContainer=A},gX9a:function(e,t,a){e.exports={"play-setting-menu":"W0ROskokXK_S7WUlDo7D5"}},gXld:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),h=n(a("q1tI")),m=r(a("TSYQ")),v=a("i6OX"),g=r(a("ctY3")),p=a("6x+O"),y=a("Uu/L"),b=function(e){function t(){var r
return(0,i.default)(this,t),r=(0,l.default)(this,(0,s.default)(t).call(this)),(0,d.default)((0,c.default)(r),"setElementRef",function(e){return r.$elem=e}),(0,d.default)((0,c.default)(r),"handleExpand",function(e){r.props.handleScreenItemActions.handleExpand(e,r.props.screen)}),(0,d.default)((0,c.default)(r),"handleActivate",function(e){r.props.handleScreenItemActions.handleActivate(e,r.props.screen)}),(0,d.default)((0,c.default)(r),"handleDown",function(e){if(0===e.button){var t=r.props,a=t.screen,
n=t.handleScreenItemActions.handleDown
n&&n(e,a,r.$elem)}}),(0,d.default)((0,c.default)(r),"handleNameChange",function(e){var t=r.props,a=t.screen,n=t.handleScreenItemActions.handleNameChange
n&&n(e,a)}),(0,d.default)((0,c.default)(r),"handleEdit",function(){var e=r.props,t=e.screen,a=e.handleScreenItemActions.handleEdit
a&&a(t)}),(0,d.default)((0,c.default)(r),"handleBlur",function(){r.props.handleScreenItemActions.handleBlur(r.props.screen,r.isNewScreen),r.isNewScreen=!1}),r.isNewScreen=!1,r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){if(this.props.isActive&&!(0,p.isVisible)(this.$elem)){var e=document.querySelector(".rn-content-body")
if(!e)return
var t=e.getBoundingClientRect(),a=this.$elem.getBoundingClientRect().bottom
e.scrollTop+=a-t.bottom+20}this.props.isEditing&&(this.isNewScreen=!0)}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.screen,a=e.depth,n=e.isActive,r=e.isEditing,i=e.showExpander,o=e.renderItem,l=e.collapseKeySet,s=e.isLinked,c=e.hoverCid,u=14*(a+1),d=!l.has(t.cid),f=t.cid===c,p=d?"caret-down":"caret-right"
return h.default.createElement(y.StyledScreenItem,{type:"linkable",ref:this.setElementRef,"data-cid":t.cid,"data-link-target-cid":t.cid,onClick:this.handleActivate,onMouseDown:this.handleDown,onDoubleClick:this.handleEdit,style:{paddingLeft:u},className:(0,m.default)("rn-list-item",{active:n,linked:s,hover:f})},i&&h.default.createElement("a",{className:"expander",onClick:this.handleExpand,onDoubleClick:this.stopPropagation},h.default.createElement("i",{className:"fa fa-"+p})),h.default.createElement("div",{
className:"screen-name"},n?h.default.createElement(v.SVGIcon,{name:"design/screen_file"}):h.default.createElement(v.SVGIcon,{name:"design/file_o"}),h.default.createElement(g.default,{editing:r,className:"editable-span",value:MB.unescape(t.name),onChange:this.handleNameChange,onBlur:this.handleBlur})),!r&&o&&o(t))}}]),t}(h.PureComponent);(t.default=b).propTypes={depth:f.default.number,screen:f.default.object,isActive:f.default.bool,isEditing:f.default.bool,isLinked:f.default.bool,showExpander:f.default.bool,
hoverCid:f.default.string,renderItem:f.default.func,handleScreenItemActions:f.default.shape({handleEdit:f.default.func,handleExpand:f.default.func,handleActivate:f.default.func,handleBlur:f.default.func,handleDown:f.default.func,handleNameChange:f.default.func,setAttr:f.default.func}),collapseKeySet:f.default.object}},gY5R:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=n(a("cDf5")),s=n(a("J4zp")),r=["#FF6161","#FF6161"],i=["#FFF","#F2F2F2","#000"],o=["#DEDEE4","#D9D9D9"],c=["#F2F2F2","#fff"],u=["#E8E8E8","#DBDBDB"],d={radioLine:{border:["2px solid #F2F2F2","1px solid #C8CDD0"],bg:["#F2F2F2","#F2F2F2"],border_color:["#F2F2F2","#C8CDD0"],active_bg:["#FFFFFF","#FCFCFC"]},shortCutBoder:{border:["1px solid #c8cdd0","1px solid transparent"]},fixedSlider:{bg:["#d9d9d9","#dbdbdb"]},slider:{bg:["#e7e9ea","#C8CDD0"]},linkback:{color:["#101010","#5B6B73"],border:[
"1px solid transparent","1px solid #d9d9d9"]},palette:{active_color:r,high_light_color:["#298DF8","#298DF8"],hr_color:o,panel_bg:i},toolbar:{height:56,shadow:["1px 0 6px 0 rgba(39, 54, 78, 0.12)","0 0 10px 0 rgba(0, 0, 0, 0.25)"],bg:["#FFF","#EDEDED","#000"],icon_disable_color:["#C8CDD0","#C8CDD0"],project_title_color:["#5B6B73","#5B6B73"],icon_color:["#7d8694","#5B6B73"],hover_icon_color:["#415058","#1F292E"],active_icon_color:["#FF6161","#FF6161"],active_icon_bg:["#F2F2F2","#E8E8E8"],active_icon_border:[
"#E8E8E8","#DBDBDB"]},popups:{bg:i,bc:["#DBDBDB","#DEDEE4","#FFF"],header:{bg:["#F2F3F4","#DBDBDB"],tc:["#415058","#415058","#FFF"],icon_color:["#8D9EA7","#8D9EA7"],line_color:["#EDEDED","#E8E8E8"]},line:{label_color:["#1F292E","#1F292E","#1F292E"]},nav:{bg:i,border_color:o,active_border_color:r,label_color:["#415058","#415058"],label_active_color:["#525E71","#525E71"]},footer:{background:["#fff","#fff"],icon_active_color:r}},panel:{bg:i,export_bar:{bg:["#F5F5F5","#EDEDED"],laber_color_bg:["#fff","#f2f2f2"
],disabled_bg:["#fff","#f7f7f7"],disabled_border_color:["#f7f7f7","#f2f2f2"]},header:{bg:["#F2F3F4","#DBDBDB"]},nav:{active_bg:i,icon_color:["#5B6B73","#5B6B73"],icon_active_color:r}},draggablePanel:{bg:i,header:{bg:["#F2F3F4","#DBDBDB"]},layerItem:{bg:["#DBDBDB","#F2F2F2"]},input:{bg:c,border_color:u,border:["1px solid transparent","1px solid #DBDBDB"]},BorderRadius:{border_color:["#f2f2f3","#c8cdd1"]},CheckBorder:{border_color:["#8d9ea6","#bacdd6"]},NumberInput:{bg:c,border_color:u,disabled_bg:["#F7F7F7",
"#fff"],disabled_border_color:["#F2F2F2","#e8e8e8"]},Select:{bg:c,border_color:u}},viewMode:{bg:["#E1E1E1","#E8E8E8"]},leftpane:{shadow:["0 2px 30px 0 rgba(213, 213, 213, 0.5)"],border_right:["","1px solid #C8CDD0"]},rightpane:{shadow:["0 -2px 30px 0 rgba(39,54,78,0.11)"]},subpanel:{border_top_color:["#dbdbdb","#D9D9D9"]},textarea:{bg:c,border_color:u},sidebar:{bg:i,divider_color:["#C8CDD0","#C8CDD0"],icon_color:["#5B6B73","#5B6B73"],icon_hover_color:["#415058","#415058"],icon_active_color:r,
icon_active_bg:["#F4F5F6","#F4F5F6"],icon_hover_bgcolor:["#f2f2f2","#E8E8E8"],icon_hover_border_color:["#E8E8E8","#DBDBDB"],border_right:["1px solid #DEDEE4","1px solid #C8CDD0"],border_left:["","1px solid #C8CDD0"]},leftnav:{bg:i,nav_icon_hover:["#FCFCFC","#EBEBEB"]},basicWidgets:{bg:i,border_color:["#DEDEE4","#c8cdd0"],icon_color:["#6C6D6E","#6C6D6E"],icon_hover_color:["#f2f2f2","#E8E8E8"],icon_hover_border_color:["#E8E8E8","#DBDBDB"]},ruler:{bgColor:["transparent","transparent"],longfgColor:["#BABBBC",
"#BABBBC"],shortfgColor:["#C8CDD0","#C8CDD0"],fontColor:["#8D9EA7","#8D9EA7"],shadowColor:["#E8E8E8","#E8E8E8"],lineColor:["#EB5648","#EB5648"],borderColor:["#DADADC","#DEDEE4"],cornerActiveColor:["rgb(235, 86, 72, 0.6)","rgb(235, 86, 72, 0.6)"]},screenContainer:{bg:["#F5F5F5","#f9f9f9","#000"]},scrollbar:{track:{bg:["transparent","transparent"]},thumb:{x_bg:["#D2D2D8","#BCBCBC"],y_bg:["#DEDEE4","#BCBCBC"],x_hover_bg:["#BEC3C5"],y_hover_bg:["#C8CDD0"]}},listItem:{tc:["#5B6B73","#415058"],hover:{tc:[
"#298DF8","#298DF8"],bc:["#E8E8E8","#D9D9D9"],bg:["#F7F7F7","#E8E8E8"]},expander_color:["#C8CDD0","#8D9EA7"],action_color:["#8D9EA7","#8D9EA7"],action_hover_color:["#5B6B73","#1F292E"],active:{bg:["#F2F2F2","#FFF"],tc:["#298DF8","#298DF8"],bc:["#EBEBEB","#EBEBEB"]}},thumbnail:{bg:["#F2F2F2","#EBEBEB"],border_color:["#EDEDED","#DBDBDB"]},preferenceBar:{bg:["#F5F5F5","#F9F9F9"],bc:["#E7E9EA","#DBDBDB"]},colorButton:{bg:["#F6F7F8","#FCFCFC"],border_color:["#F2F2F3","#DBDBDB"]},searchBar:{bg:c,border_color:u},
interation:{hover:{border_color:["#1E98EA","#1E98EA"]},active:{border_color:["#1E98EA","#1E98EA"],box_shadow:["0 0 4px 0 rgba(34, 162, 237, 0.66)","0 0 4px 0 rgba(34, 162, 237, 0.66)"]}},noComponentImage:["url('/images/workspace/design/no_component_list_light.png')","url('/images/workspace/design/no_component_list_grey.png')"],carouselSettings:{assetBoxBg:["#f7f7f7","#ebebeb"],addAssetIconFill:["#c8cdd0","#8d9ea7"]},linkSettings:{linkView:{detail_bg:["#f7f7f7","#fff"]},gesture:{bg:["#EBEBEB","#FFF"],
border_color:["#EBEBEB","#FFF"],hover:{border_color:["#298DF8","#298DF8"]},active:{border_color:["#298DF8","#298DF8"]}},linkPanel:{bg:["#f7f7f7","#FFF"],divider:["#FFF","#f7f7f7"]}}},f=function r(e,i){var o={}
return Object.entries(e).forEach(function(e){var t=(0,s.default)(e,2),a=t[0],n=t[1]
Array.isArray(n)?o[a]=n[i]:"object"===(0,l.default)(n)?o[a]=r(n,i):o[a]=n}),o},p={light:f(d,0),grey:f(d,1),dark:f(d,2)}
t.default=p},h0FN:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TIMER_DURATION_LIST=t.ANI_DURATION_LIST=t.TEMPLATE_TRANSITIONS=t.TRANSITIONS=void 0
var n=["leftmenu","rightmenu","leftdrawer","rightdrawer","slideright","slideleft","slidetop","slidebottom","slideleft2","slideright2","topin","popin","leftout","rightout","topout","popout"].map(function(e){return{value:e,label:I18N.tr[e]}}),r=(t.TRANSITIONS=n).filter(function(e){var t=e.value
return!/drawer|menu/.test(t)})
t.TEMPLATE_TRANSITIONS=r
t.ANI_DURATION_LIST=[{label:"0ms",value:"0ms"},"100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]
t.TIMER_DURATION_LIST=["100ms","200ms","300ms","400ms","500ms","750ms","1000ms","2000ms","3000ms","4000ms","5000ms","6000ms","7000ms","8000ms","9000ms","10000ms"]},h2Vm:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=r(a("lwsE")),i=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),o=r(a("17x9")),h=r(a("TSYQ")),m=n(a("i6OX")),v=r(a("81q6")),g=r(a("UUBB")),y=r(a("tfo6")),b=r(a("Mn07")),S=r(a("sEfC")),w=a("Hlt7"),E=a("1iCU"),k=r(a("naIL")),C=[{label:p.default.createElement(m.SVGIcon,{name:"design/list"}),value:"literal"},{label:p.default.createElement(m.SVGIcon,{name:"design/thumbnail"}),value:"thumbnail"}],T=function(e){function o(e){var a;(0,l.default)(this,o),
a=(0,s.default)(this,(0,c.default)(o).call(this,e)),(0,f.default)((0,u.default)(a),"setElementRef",function(e){return a.$elem=e}),(0,f.default)((0,u.default)(a),"handTooltip",function(){$(a.$elem).tooltip({container:"body",selector:".rn-list-item, .thumbnail-item",placement:function(){return"literal"===a.state.viewMode?"left":"bottom"},trigger:"hover",title:function(){var e=this.querySelector(".editable-span"),t=e.offsetWidth,a=e.scrollWidth,n=e.textContent
return t<a&&[n]}})}),(0,f.default)((0,u.default)(a),"handleSearch",function(e){a.debounceSearch(e.toLowerCase()),a.setState({keyword:e})}),(0,f.default)((0,u.default)(a),"debounceSearch",(0,S.default)(function(e){MB.event("preview","使用了页面搜索"),a.props.dispatch({type:"reducer:preview-panel:search",payload:{screenSearch:e}})},300)),(0,f.default)((0,u.default)(a),"handleViewChange",function(e){"literal"===e?a.handleListView():a.handleThumbnail()}),(0,f.default)((0,u.default)(a),"handleListView",function(){
var e=a.props.toolbarActiveItem
MB.event("preview","在".concat(E.TOOLBAR_TRAKING_CONFIG[e],",点击了列表")),a.setState({viewMode:"literal"})}),(0,f.default)((0,u.default)(a),"handleThumbnail",function(){var e=a.props.toolbarActiveItem
MB.event("preview","在".concat(E.TOOLBAR_TRAKING_CONFIG[e],",点击了缩略图")),a.setState({viewMode:"thumbnail"})}),(0,f.default)((0,u.default)(a),"renderCommentIcon",function(e){var t=a.props.screenCommentThreadCountMap
if(1<=(t&&t[e.cid]||0)&&!MB.isHTMLZip())return p.default.createElement("span",{className:"toggle-comment"},p.default.createElement(m.default,{type:"dora",name:"comment"}))})
var t=e.screenTreeData,n=t.nodeMap,r=t.screenNameCidMap,i=e.screenSearch
return a.state={keyword:"",viewMode:e.isDemo?"thumbnail":"literal",searchScreenKeyMap:(0,w.filterSearch)(r,i,n)||[]},a}return(0,d.default)(o,e),(0,i.default)(o,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.screenSearch,a=this.props,n=a.screenTreeData,r=n.nodeMap,i=n.screenNameCidMap
if(t!=a.screenSearch){var o=(0,w.filterSearch)(i,t,r)||[]
this.setState({searchScreenKeyMap:o})}}},{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"render",value:function(){var e=this.props,t=e.screenTreeData,a=e.currentScreenCid,n=e.screenSearch,r=e.dispatch,i=this.state,o=i.viewMode,l=i.keyword,s=i.searchScreenKeyMap,c=0<n.length,u=c?{root:s}:t.childListMap
return p.default.createElement("div",{className:k.default["screen-panel"]},p.default.createElement("div",{className:"screen-actions"},p.default.createElement(v.default,{value:l,placeholder:I18N.preview.search,onChange:this.handleSearch}),p.default.createElement(g.default,{className:"viewmode",options:C,value:o,handleChange:this.handleViewChange})),p.default.createElement("div",{className:(0,h.default)("screen-list-container",o),ref:this.setElementRef},"literal"===o?p.default.createElement(y.default,{
activeCid:a,isSearching:c,screenTreeData:t,screenTreeMap:u,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:r}):p.default.createElement(b.default,{activeCid:a,screenTreeMap:u,screenDataMap:t.nodeMap,renderCommentIcon:this.renderCommentIcon,dispatch:r})))}}]),o}(p.PureComponent)
t.default=T,(0,f.default)(T,"propTypes",{screenTreeData:o.default.object,screenCommentThreadCountMap:o.default.object,currentScreenCid:o.default.string,screenSearch:o.default.string,toolbarActiveItem:o.default.string,isDemo:o.default.bool,dispatch:o.default.func})},iKZC:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.doSaveWithSocketAndFallback=t.createAutoSaveQueue=void 0
var b=n(a("o0o1")),S=n(a("MVZn")),w=n(a("yXPU")),E=a("os03"),k=a("Clcl")
t.createAutoSaveQueue=function(e){var t=e.doSave,a=e.onError,n=e.delay,r=(0,E.createEventTarget)(),i=r.clear,o=r.addEventListener,l=r.removeEventListener,s=r.dispatchEvent,c=(0,E.createSaveQueue)({beforeSave:function(){return s({type:"beforesave"})},afterSave:function(){return s({type:"aftersave"})},doSave:t,onError:a}),u=c.clear,d=c.add,f=c.save,p=c.filter,h=c.getLength,m=c.getIsSaving,v=c.getSavingState,g=(0,E.createTimer)({func:f,delay:n}),y=g.start,b=g.stop,S=g.getDelay,w=g.setDelay
return{reset:function(){b(),i(),u()},add:function(e){d(e),y()},getState:function(){return{pendingLength:h(),isSaving:m(),delay:S(),savingState:v()}},getIsEmpty:function(){return!m()&&!h()},getIsSaving:m,getDelay:S,setDelay:w,filterSaveQueue:p,triggerSave:f,afterCurrentSave:function(t){if(!m())return t()
o("aftersave",function e(){l("aftersave",e),t()})},addEventListener:o,removeEventListener:l}}
var r=function(){var t=(0,w.default)(b.default.mark(function e(t){var c,u,a,d,f,p,h,m,v,g,y,n,r,i
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c=t.setSavingState,u=t.getAutoSaveQueueState,a=t.saveChunkList,d=t.saveQueueLength,f=t.getSaveItemInfo,p=t.isSocketAvailable,h=t.doSocketBatchSave,m=t.onSocketError,v=t.doFallbackSaveItem,g=t.onFallbackError,y=0,n=b.default.mark(function e(r,i){var s,o,t
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=a[r],o=0,t=b.default.mark(function e(){var l,t,a,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l={chunkIndex:r,chunkIndexMax:i,saveChunkFirstInfo:f(s[0]),saveChunkLength:s.length,chunkAttempt:o,saveQueueIndex:y,saveQueueLength:d},e.prev=1,p())return e.next=5,(0,E.withTimeoutRetry)({retry:2,timeout:6e4,task:function(){var t=(0,w.default)(b.default.mark(function e(t){var a,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.attempt,n=t.timeout,c((0,S.default)({type:"socket-batch-save",attempt:a,timeout:n},l)),e.next=4,h({saveChunk:s,attempt:a,timeout:n})
case 4:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var a=(0,w.default)(b.default.mark(function e(t,a){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.attempt,r=a.timeout,c((0,S.default)({type:"socket-batch-save-retry",error:t.toString(),attempt:n,timeout:r},l)),e.next=4,m(t,{saveChunk:s,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e)}))
return function(e,t){return a.apply(this,arguments)}}()})
e.next=6
break
case 5:return e.abrupt("return","break")
case 6:e.next=11
break
case 8:e.prev=8,e.t0=e.catch(1),(0,k.REPORT_ERROR)(e.t0,"[AutoSaveQueue][doSave] failed to save with socket",u())
case 11:e.prev=11,t=b.default.mark(function e(t,a){var i,o
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=s[t],o=(0,S.default)({index:t,indexMax:a,saveItem:f(i)},l,{saveQueueIndex:y+t}),e.next=4,(0,E.withTimeoutRetry)({retry:4,timeout:1e5,task:function(){var t=(0,w.default)(b.default.mark(function e(t){var a,n
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.attempt,n=t.timeout,c((0,S.default)({type:"fallback-save-item",attempt:a,timeout:n},o)),e.next=4,v({saveItem:i,attempt:a,timeout:n})
case 4:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}(),onError:function(){var a=(0,w.default)(b.default.mark(function e(t,a){var n,r
return b.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.attempt,r=a.timeout,c((0,S.default)({type:"fallback-save-item-retry",error:t.toString(),attempt:n,timeout:r},o)),e.next=4,g(t,{saveItem:i,attempt:n,timeout:r})
case 4:case"end":return e.stop()}},e)}))
return function(e,t){return a.apply(this,arguments)}}()})
case 4:case"end":return e.stop()}},e)}),a=0,n=s.length
case 14:if(a<n)return e.delegateYield(t(a,n),"t1",16)
e.next=19
break
case 16:a++,e.next=14
break
case 19:return e.abrupt("return","break")
case 22:e.prev=22,e.t2=e.catch(11),(0,k.REPORT_ERROR)(e.t2,"[AutoSaveQueue][doSave] failed to save with fetch fallback",u())
case 25:o++
case 26:case"end":return e.stop()}},e,null,[[1,8],[11,22]])})
case 3:return e.delegateYield(t(),"t0",5)
case 5:if("break"===e.t0)return e.abrupt("break",10)
e.next=8
break
case 8:e.next=3
break
case 10:y+=s.length
case 11:case"end":return e.stop()}},e)}),r=0,i=a.length
case 4:if(r<i)return e.delegateYield(n(r,i),"t0",6)
e.next=9
break
case 6:r++,e.next=4
break
case 9:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.doSaveWithSocketAndFallback=r},iLpg:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledSearchBar=void 0
var r=n(a("vOnD")),i=a("+IKJ"),o=r.default.div.withConfig({displayName:"styles__StyledSearchBar",componentId:"jsl19y-0"})(["position:relative;height:24px;display:flex;justify-content:space-between;align-items:center;.search-icon{position:absolute;left:0;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;color:#8d9ea7;pointer-events:none;}input{width:100%;height:100%;padding-right:22px;background:",";border:1px solid ",";border-radius:2px;transition:all 0.2s ease-out;",
";text-indent:24px;&:hover{border-color:",";}&:focus{background:#fff;border-color:",";box-shadow:",";}}.clear-icon{position:absolute;right:0;width:24px;line-height:24px;text-align:center;color:#bec2c9;transition:all 0.15s ease-in-out;cursor:pointer;&:hover{color:#7d8695;}}"],function(e){return e.theme.searchBar.bg},function(e){return e.theme.searchBar.border_color},(0,i.placeholder)({color:"#8d9ea7"}),function(e){return e.theme.interation.hover.border_color},function(e){
return e.theme.interation.active.border_color},function(e){return e.theme.interation.active.box_shadow})
t.StyledSearchBar=o},iScx:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),i=a("Ehhz").MODEL_OPERATION_MAP.Collaborator,r=(0,n.createStateStore)([]),o=r.getState,l=r.setState,s=r.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:collaborators:update",payload:i(e,r,o)})})},u={entryMap:{"collaborators:refresh":s(function(e,t,a){var n=t.dispatch,r=a&&a.payload;(e=i.refreshStateList(e,r,!1)).forEach(function(e){e.avatar||(e.avatar="/images/avatar.png")}),n({type:"reducer:collaborators:update",payload:e})}),"collaborators:add":c(i.addState,!1),"collaborators:add-local":c(i.addState,!0),"collaborators:update":c(i.updateState,!1),"collaborators:update-local":c(i.updateState,!0),"collaborators:delete":c(i.deleteState,!1),
"collaborators:delete-local":c(i.deleteState,!0)},getState:o,setState:l}
t.default=u},iX79:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=a("i6OX"),m=a("wYtL"),v=r(a("RtVw")),g=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleFullScreen",function(){return t.props.dispatch({type:"entry:enter:full-screen-mode"})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){return p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"margin-top-20",duration:1e3,content:I18N.preview.fullscreen,style:{lineHeight:0,cursor:"pointer"}},p.default.createElement("div",{
className:v.default.fullscreen,onClick:this.handleFullScreen},p.default.createElement(h.SVGIcon,{name:"design/fullscreen"})))}}]),i}(p.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{dispatch:i.default.func})},ibfc:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var f=r(a("MVZn")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),p=r(a("lSNA")),i=r(a("17x9")),h=n(a("q1tI")),m=r(a("9DAG")),v=a("MGhH"),g=r(a("WtCM")),y=r(a("TSYQ"))
a("aw2M")
var b=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,p.default)((0,u.default)(t),"setScreenRef",function(e){return t.$screen=e}),(0,p.default)((0,u.default)(t),"getScreenElement",function(){return t.$screen}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"componentWillUnmount",value:function(){var e=this.props.screen
MB.runner.runnerUtil.destroyScrollBarByCid(e.cid)}},{key:"render",value:function(){var e=this.props,t=e.isShow,a=e.screen,n=e.isActive,r=e.style,i=e.widgetQueryMap,o=a.cid,l=a.stateCid,s=a.transition,c=Screen.find(a.cid),u=(0,f.default)({display:t?"":"none",backgroundColor:c.bg(),backgroundImage:c.bgimage?"url(".concat(c.bgimage,")"):""},r),d=(0,y.default)("pcanvas",c.orient(),{active:n})
return h.default.createElement("div",{ref:this.setScreenRef,id:"pscreen".concat(c.cid),"data-cid":c.cid,"data-orientation":c.orient(),className:d,style:u},h.default.createElement(S,{screenCid:o,stateCid:l,transition:s,widgetQueryMap:i,getScreenElement:this.getScreenElement}))}}]),i}(h.PureComponent)
t.default=b,(0,p.default)(b,"propTypes",{isShow:i.default.bool,screen:i.default.object,isActive:i.default.bool,style:i.default.object,widgetQueryMap:i.default.object})
var S=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.screenCid,a=e.stateCid,n=e.transition,r=e.widgetQueryMap,i=e.getScreenElement,o=Screen.find(t),l=o.headerHeight(),s=o.footerHeight(),c={height:o.height-(l+s)},u={height:o.height,marginTop:-l}
return h.default.createElement(g.default,{screenCid:t,stateCid:a,transition:n,widgetQueryMap:r,getScreenElement:i},function(e){return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"screen-header",style:{height:l}},0<l&&h.default.createElement(w,{treeData:e,headerHeight:l})),h.default.createElement("div",{className:"screen-content"},h.default.createElement("div",{className:"widgets",style:c},h.default.createElement("div",{className:"scontainer",style:u},
h.default.createElement(m.default,{widgetTreeData:e})))),h.default.createElement("div",{className:"screen-footer",style:{height:s}},0<s&&h.default.createElement(E,{treeData:e,footerHeight:s,screenHeight:o.height})))})}}]),t}(h.PureComponent);(0,p.default)(S,"propTypes",{screenCid:i.default.string,stateCid:i.default.string,transition:i.default.object,widgetQueryMap:i.default.object,getScreenElement:i.default.func})
var w=function(e){var t=e.treeData,a=e.headerHeight,n=(0,v.headerFilter)(t,a)
return h.default.createElement(m.default,{widgetTreeData:n})}
w.propTypes={treeData:i.default.object,headerHeight:i.default.number}
var E=function(e){var t=e.treeData,a=e.footerHeight,n=e.screenHeight,r=(0,v.footerFilter)(t,n,a)
return h.default.createElement("div",{className:"footer-widgets",style:{marginTop:a-n}},h.default.createElement(m.default,{widgetTreeData:r}))}
E.propTypes={treeData:i.default.object,footerHeight:i.default.number,screenHeight:i.default.number}},ibhU:function(e,t,a){e.exports={"runner-state-panel":"_2fELsPyTr6Bvb5x4zc4dSg"}},inTe:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var Re=n(a("MVZn")),r=n(a("17x9")),Le=n(a("q1tI")),je=a("qOCw"),Ae=a("Ro3d"),Oe=a("PqLM"),Be=a("RUem"),i=function(e){var t=e.layer,a=e.unit,n=e.ratio,r=e.showGlobal,i=e.userPickColor,o=void 0===i?[]:i,l=e.globalColor,s=void 0===l?[]:l,c=e.globalText,u=void 0===c?[]:c,d=e.documentColor,f=void 0===d?[]:d,p=e.screenColor,h=void 0===p?[]:p,m=e.language,v=e.colorUnit,g=e.dispatch,y=t.src_left,b=t.src_top,S=t.src_width,w=t.src_height,E=t.origin_width,k=t.origin_height,C=t.bd_radius,T=t.line_height,x=t.bg_colors,
_=void 0===x?[]:x,M=t.borders,P=void 0===M?[]:M,I=t.i,N=t.display_name,R=t.padding,L=void 0===R?0:R,j=t.hiddSpacing,A=void 0!==j&&j,O=t.text_styles,B=void 0===O?[]:O,D=t.alignment,F=t.vertical_alignment,q=t.image,W=t.text,U=t.letter_spacing,z=t.image_set_zip,Y=t.shadows,H=void 0===Y?[]:Y,V=t.inner_shadows,X=void 0===V?[]:V,J=t.rotation,Z=t.textShadows,K=void 0===Z?[]:Z,G=t.image_set,Q=void 0===G?[]:G,$=t.name,ee=0<P.length,te=0<_.length,ae=!!q,ne=0<B.length&&W&&(0,je.getTextContent)(t).length,
re=0<H.length||0<K.length,ie=0<X.length,oe=z,le={left:y,top:b,width:E||S,height:k||w,borderRadius:C,opacity:t.o,rotation:J,ratio:n,unit:a}
if("line"===$){var se=(0,Oe.getLineGeneralInfo)(t,!0),ce=se.length,ue=se.thickness,de=se.angle
le.width=ce,le.height=ue,le.rotation=de}var fe=(0,je.getBaseAttributes)(le),pe=fe.adapterTop,he=fe.adapterLeft,me=fe.adapterWidth,ve=fe.adapterHeight,ge=fe.radius,ye=fe.opacity,be=fe.rotate,Se={lineHeight:T,letterSpacing:U,unit:a,ratio:n},we=(0,je.getTextAttributes)(Se),Ee=we.lineHeight,ke=we.letterSpacing,Ce="number"==typeof I?I?"italic":"normal":void 0,Te={textStyles:B,background:_,borders:P,shadows:H,innerShadows:X,colorUnit:v,ratio:n,unit:a},xe=(0,je.getCodeAttributes)(Te),_e=t.o&&100!=t.o?t.o/100:null,
Me=(0,Ae.transfromProptype)({attr:(0,Re.default)({x:he,y:pe,width:me,height:ve,lineHeight:Ee,textAlign:D,opacity:_e,borderRadius:ge},xe),language:m,unit:a}),Pe=ae?"ImageView":ne?"TextView":"View",Ie="screen"===t.type||t.kind?t.name:N,Ne="line"===t.name
return r?Le.default.createElement(Le.default.Fragment,null,Le.default.createElement(Be.LayerName,{title:I18N.preview_panel.screen_name,value:Ie}),Le.default.createElement(Be.GlobalAttributes,{adapterWidth:me,adapterHeight:ve,documentColor:f,globalText:u,globalColor:s,screenColor:h,userPickColor:o,colorUnit:v,dispatch:g})):Le.default.createElement("div",null,Le.default.createElement(Be.LayerName,{value:Ie}),Le.default.createElement(Be.BasicAttributes,{adapterTop:pe,adapterLeft:he,adapterWidth:me,
adapterHeight:ve,rotate:be,radius:ge,opacity:ye,unit:a,colorUnit:v}),ne&&Le.default.createElement(Be.TextLayerInfo,{textStyles:B,alignment:D,vertical_alignment:F,lineHeight:Ee,letterSpacing:ke,ratio:n,unit:a,o:t.o,padding:L,fontStyle:Ce,colorUnit:v,hiddSpacing:A,text:(0,je.getTextContent)(t)}),te&&Le.default.createElement(Be.Fills,{backgroundColorSort:_,colorUnit:v}),ee&&Le.default.createElement(Be.BorderInfo,{isStroke:Ne,borderSort:P,ratio:n,unit:a,colorUnit:v}),re&&Le.default.createElement(Be.Shadows,{
shadows:H,textShadows:K,colorUnit:v,unit:a,ratio:n}),ie&&Le.default.createElement(Be.Shadows,{shadows:X,colorUnit:v,unit:a,ratio:n,isInnerShaow:!0}),oe&&Le.default.createElement(Be.ImageInfo,{imageSetZip:z,name:t.display_name,imageSet:Q}),Le.default.createElement(Be.CodeBox,{code:Me,whichAndView:Pe,language:m,text:(0,je.getTextContent)(t)||""}))}
i.propTypes={userPickColor:r.default.array,screenColor:r.default.array,documentColor:r.default.array,globalText:r.default.array,globalColor:r.default.array,colorUnit:r.default.string,layer:r.default.object,getLayerRef:r.default.func,showGlobal:r.default.bool,unit:r.default.string,ratio:r.default.number,language:r.default.string,dispatch:r.default.func}
var o=i
t.default=o},j1JO:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,t.watchFetchSlices=f,t.fetchSliceData=p
var o=n(a("MVZn")),l=n(a("o0o1")),s=a("oZtI"),c=n(a("Nu6V")),r=l.default.mark(d),i=l.default.mark(f),u=l.default.mark(p)
function d(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([f()])
case 2:case"end":return e.stop()}},r)}function f(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)("reducer:slice:init",p)
case 2:case"end":return e.stop()}},i)}function p(e){var t,a,n,r,i
return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.select)()
case 2:if(t=e.sent,a=t.model.current.projectCid,e.prev=4,a)return e.next=8,(0,s.call)(c.default,a)
e.next=14
break
case 8:n=e.sent,r=n.slices,i=r.filter(h),n.slices=i,e.next=15
break
case 14:n={slices:[{id:1,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",src:"ssss",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:2,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"},{id:3,name:"test",screen_cid:"sssss1232",image:"/uploads/images/14/149316/artboard_1506665060.png",image_set:[{size:1,src:"src"}],image_set_zip:"src"}]}
case 15:return e.next=17,(0,s.put)({type:"reducer:slice:success",payload:(0,o.default)({},n)})
case 17:e.next=24
break
case 19:return e.prev=19,e.t0=e.catch(4),console.log(e.t0.stack),e.next=24,(0,s.put)({type:"reducer:slice:fail"})
case 24:case"end":return e.stop()}},u,null,[[4,19]])}var h=function(e){var t=e.width,a=void 0===t?1:t,n=e.height
return 0<a&&0<(void 0===n?1:n)}},jZq5:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=a("G4qV"),o=a("upRB"),l=a("1iCU"),s=n(a("K7IS")),c=(0,i.createSelector)([o.getCurrentMode,function(e){return e.container.common.offset}],function(e,t){var a=Boolean(t.x||t.y)
return{isLayerActive:e===l.INSPECT,isDisplaced:a}}),u=(0,r.connect)(function(e){return c(e)})(s.default)
t.default=u},jeLk:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=function(){function e(){(0,r.default)(this,e),this.store=null,this.viewMap={},this.observerMap={}}return(0,i.default)(e,[{key:"setStore",value:function(e){this.store=e}},{key:"callObserver",value:function(e){for(var t,a=arguments.length,n=new Array(1<a?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r]
return this.observerMap[e]&&(t=this.observerMap)[e].apply(t,[e].concat(n))}},{key:"setObserver",value:function(e,t){this.observerMap[e]=t}},{key:"setView",value:function(e,t){this.viewMap[e]=t}},{key:"callViewMethod",value:function(e,t){for(var a,n=this.viewMap[e],r=arguments.length,i=new Array(2<r?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o]
return n&&n[t]?(this.callObserver("view:".concat(e,":").concat(t)),n[t].apply(n,[this.store].concat(i))):(a=console).warn.apply(a,["[WebpackInterface][callViewMethod] missed",e,t].concat(i))}},{key:"init",value:function(){this.callObserver("init"),this.store&&this.store.dispatch({type:"entry:state:init"})}},{key:"clear",value:function(){this.store&&this.store.dispatch({type:"entry:state:clear"}),this.callObserver("clear")}}]),e}()
t.default=o},jvRN:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getMockingBotWidgets=t.isSketchLayer=t.checkColor=void 0
var m=n(a("MVZn")),u=a("G3NE"),o=n(a("cl8F")),l=a("Ibie"),d=a("FkXu"),y=a("LbTH"),i=a("2EV6"),s=a("/5+U"),c=a("upRB"),b=/\\\w+/gi,S=function(e){return e?e.replace(b,"").trim():o.default}
t.checkColor=S
t.isSketchLayer=function(e){return Number.isInteger(e)||"artboard-base"===e}
t.getMockingBotWidgets=function(e){var t=e.model.widgets,a=(0,c.getCurrentProject)(e).device,n=(0,c.getCurrentScreen)(e),r=f(n.cid),i=t.concat(r),o=0
return i.filter(function(e){return o||e.screen_cid!==n.cid||"status_bar"!==e.name||(o=e.height),!(e.screen_cid!==n.cid||["pg","lr","sticky"].includes(e.name)||"image_view"===e.name&&e.width===n.width&&e.height===n.height)}).map(function(e){return(0,l.patchWidgetSize)(e,n,o)}).map(function(e){return p(e,a)}).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})}
var f=function(p){var e=window.Screen
if(!e)return[]
var t=e.find(p).cpanels(),h=[]
return t.forEach(function(c){h.push(c.__proto__)
var u=c.cid,d=c.top,f=c.left;(c.multi_states?c.ct().homeScreen().cwidgets().map(function(e){return Widgetstate.find(c.main_state_cid+e.cid)||Widgetstate.find("default"+e.cid)||e}):c.mainState().cwidgets()).forEach(function(e){var t=e.top,a=e.left,n=e.width,r=e.height,i=f+Math.min(Math.max(a,0),c.width),o=f+Math.min(Math.max(a+n,0),c.width),l=d+Math.min(Math.max(t,0),c.height),s=d+Math.min(Math.max(t+r,0),c.height)
h.push((0,m.default)({},e.__proto__,{id:"".concat(c.cid,"-").concat(e.id),panel_cid:u,screen_cid:p,top:l,left:i,width:o-i,height:s-l}))})}),h},p=function(e,t){var a,n={},r=e.name,i=e.ro,o=e.border_radius,l=e.bs,s=e.ha,c=e.va,u=e.lh,d=e.box_shadow,f=e.text_shadow,p=e.sc,h=e.ds,m=e.text
if(m&&(a=w(m.replace(/<p>/g,"").replace(/<\/p>/g,"\n")),n.text_styles=(0,y.checkIfItemTextIsNewVersion)(e)?[k(JSON.parse(e.text))]:[{font_size:e.fs,color:S(e.tc||E(r,"tc",t)),length:a.length,font_face:C(m,t)}],n.text=a),s&&(n.alignment=s),c&&(n.vertical_alignment=c),u&&(n.line_height=u),o&&(n.bd_radius=o),i&&(n.rotation=i),n.bc=S(e.bc||E(r,"bc",t)),l&&(n.borders=[{thickness:l,color:S(n.bc)}]),e.bg&&(n.bg_colors=[{value:S(e.bg)}]),"triangleb"!==r&&"triangletl"!==r&&"icon_button"!==r||(n.bg_colors=[{value:S(
e.tc||E(r,"tc"))}]),d){var v=JSON.parse(d)[0]
n.shadows=[{offset_x:v[1],offset_y:v[2],blur_radius:v[3],spread:v[4],color:S(v[5].replace(b,""))}]}else p&&h&&(n.shadows=[{color:S(p.replace(b,"")),blur_radius:h}])
if(f){var g=JSON.parse(f)[0]
n.textShadows=[{offset_x:g[0],offset_y:g[1],blur_radius:g[2],color:S(g[3].replace(b,""))}]}else e.ts&&(n.textShadows=[{color:S(e.tsc.replace(b,"")),blur_radius:e.ts}])
return"label"!==r&&"text_view"!==r||(n.hiddSpacing=!0),Object.assign({},e,n)},r=/<[^>]+>/gi,w=function(e){return!!e&&e.replace(r,"")},E=function(e,t,a){var n="".concat(e,"_").concat(a),r=e,i=o.default[n]||o.default[r]
return i&&i[t]?i[t]:o.default[t]},k=function(e){var t=(0,u.getRichTextAttr)(e),a=t.fontFamily,n=t.fontWeight,r=t.fontSize,i=t.color,o=t.fontStyle,l=t.letterSpacing,s=t.lineHeight,c=t.paraSpacing
return{font_face:"".concat((0,d.getFontFamilyAndWeightText)(a,n)),font_size:r,color:i,fontStyle:o,letterSpacing:l,lineHeight:s,paraSpacing:c}},C=function(e,t){var a=(0,s.isChinese)(e)?"chinese":"english",n=h()?"mac":"windows",r=(0,i.getProjectPlatformByDevice)(t)
return v[n][r][a]},h=function(){return/Mac|iPod|iPhone|iPad/.test(navigator.platform)},v={mac:{ios:{chinese:"PingFang SC",english:"-apple-system"},android:{chinese:"PingFang SC",english:"Roboto"},others:{chinese:"PingFang SC",english:"Roboto"}},windows:{ios:{chinese:"Microsoft Yahei",english:"Arial"},android:{chinese:"Microsoft Yahei",english:"Roboto"},others:{chinese:"Microsoft Yahei",english:"Roboto"}}}},kJQk:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("8Fba")),o=(0,a("/5+U").immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),l=(0,r.connect)(function(e){var t=e.model,a=t.current,n=t.projects,r=o(n,a.projectCid),i=s(r.access_token,a.screenCid)
return{scale:1,width:"100%",height:"100%",src:"".concat(i,"&").concat(Date.now())}})(i.default)
t.default=l
var s=function(e,t){return"".concat("/snapshot.png","?access-token=").concat(e,"&screen-cid=").concat(t,"&mode=zoom-1.00")}},lCKy:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),i=r(a("17x9")),h=a("6XO9"),m=a("wYtL"),v=r(a("i6OX")),g=a("1iCU"),y=r(a("UbMB")),b=r(a("gX9a")),S=y.default.bind(b.default),w=function(e){function r(){var e,i;(0,o.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return i=(0,s.default)(this,(e=(0,c.default)(r)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(i),"handleClose",function(){var e=i.props,t=e.isScrollable,a=e.isHighlight,n=e.isStickyShow,r=e.shellType
MB.event("zhuge","运行页-预览-收起设置面板",{"内容区滚动":t?"开":"关","链接高亮":a?"开":"关","批注显示":n?"开":"关","边框类型":r})}),i}return(0,d.default)(r,e),(0,l.default)(r,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,a=e.isScrollable,n=e.isHighlight,r=e.isStickyShow,i=e.shellType,o=e.disabled,l=e.dispatch,s=p.default.createElement(m.Tooltip,{position:"bottom",tipClassName:"marign-top-20",duration:1e3,content:{hover:o?null:I18N.preview.setting}},p.default.createElement(v.default,{name:"cog",type:"dora"}))
return p.default.createElement(h.Dropdown,{disabled:o,menuClassName:S("play-setting-menu"),opener:s,menuX:"right",onClose:this.handleClose,menu:p.default.createElement(E,{canSetDeviceShell:t,isScrollable:a,isHighlight:n,isStickyShow:r,shellType:i,dispatch:l})})}}]),r}(p.PureComponent)
t.default=w,(0,f.default)(w,"propTypes",{canSetDeviceShell:i.default.bool,isScrollable:i.default.bool,isHighlight:i.default.bool,isStickyShow:i.default.bool,shellType:i.default.string,disabled:i.default.bool,dispatch:i.default.func})
var E=function(e){function i(){var e,a;(0,o.default)(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(a),"handleToggleScrollable",function(e){a.props.dispatch({type:"entry:preview-setting:update:is-scrollable",payload:{isScrollable:e}})}),(0,f.default)((0,u.default)(a),"handleToggleHighlight",function(e){a.props.dispatch({type:"entry:preview-setting:update:is-highlight",payload:{isHighlight:e}})}),(0,f.default)((0,u.default)(a),"handleToggleSticky",function(e){a.props.dispatch({
type:"entry:preview-setting:update:is-sticky-show",payload:{isStickyShow:e}})}),(0,f.default)((0,u.default)(a),"handleUpdateShellType",function(e){var t=e.value
a.props.dispatch({type:"entry:preview-setting:update:shell-type",payload:{shellType:t}})}),a}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.canSetDeviceShell,a=e.isScrollable,n=e.isHighlight,r=e.isStickyShow,i=e.shellType,o=t?g.SHELL_TYPE_LIST:g.SHELL_TYPE_LIST_WITHOUT_DEVICE,l=a?i:"none"
return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.content_scrollable),p.default.createElement(h.Switch,{isChecked:a,onChange:this.handleToggleScrollable})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.highlight_clickable),p.default.createElement(h.Switch,{isChecked:n,onChange:this.handleToggleHighlight})),p.default.createElement("div",{className:"line"},
p.default.createElement("label",null,I18N.sticky_visible),p.default.createElement(h.Switch,{isChecked:r,onChange:this.handleToggleSticky})),p.default.createElement("div",{className:"line"},p.default.createElement("label",null,I18N.shell_type),p.default.createElement(h.RadioGroup,{size:"small",isDisabled:!a,value:l,optionList:o,onChange:this.handleUpdateShellType})))}}]),i}(p.PureComponent);(0,f.default)(E,"propTypes",{canSetDeviceShell:i.default.bool,isScrollable:i.default.bool,isHighlight:i.default.bool,
isStickyShow:i.default.bool,shellType:i.default.oneOf(["device","default","none"]),dispatch:i.default.func})},ldhK:function(e,t,a){e.exports={covers:"_34w6V_VwmKGjpRAt-ipxe_"}},lwmc:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),E=n(a("q1tI")),k=r(a("gXld")),f=a("Uu/L"),p=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,a=e.treeProps,n=e.isSearching,r=e.editingCid,i=e.activeCid,o=e.screenTreeMap,l=e.screenDataMap,s=e.collapseKeySet,c=e.targetlinkCid,u=e.hoverCid
return E.default.createElement(f.StyledScreenList,null,0===o.root.length?E.default.createElement("div",{className:"not-match"},I18N.preview_panel.not_match):o.root.map(function(e){var t=e.cid
return E.default.createElement(h,{key:t,cid:t,depth:0,collapseKeySet:s,isSearching:n,editingCid:r,hoverCid:u,targetlinkCid:c,activeCid:i,screenDataMap:l,screenTreeMap:o,treeProps:a})}))}}]),t}(E.PureComponent)
t.default=p,(0,u.default)(p,"propTypes",{treeProps:d.default.object,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,activeCid:d.default.string,targetlinkCid:d.default.string,screenTreeMap:d.default.object,screenDataMap:d.default.object,collapseKeySet:d.default.object})
var h=function(e){function w(){return(0,i.default)(this,w),(0,l.default)(this,(0,s.default)(w).apply(this,arguments))}return(0,c.default)(w,e),(0,o.default)(w,[{key:"render",value:function(){var e=this.props,t=e.cid,a=e.treeProps,n=e.depth,r=e.activeCid,i=e.editingCid,o=e.isSearching,l=e.screenTreeMap,s=e.screenDataMap,c=e.collapseKeySet,u=e.targetlinkCid,d=e.hoverCid,f=a.renderItem,p=a.handleScreenItemActions,h=s[t],m=!c.has(t),v=l[t],g=h.cid===r,y=t===u,b=h.cid===i,S=Boolean(!o&&v)
return E.default.createElement("li",{"data-cid":t,className:"rn-content-item"},E.default.createElement(k.default,{depth:n,screen:h,isLinked:y,isActive:g,isEditing:b,hoverCid:d,showExpander:S,renderItem:f,collapseKeySet:c,handleScreenItemActions:p}),v&&m&&E.default.createElement("ol",{type:"screen-list",className:"child-screens"},v.map(function(e){var t=e.cid
return E.default.createElement(w,{key:t,cid:t,targetlinkCid:u,depth:n+1,collapseKeySet:c,isSearching:o,editingCid:i,hoverCid:d,activeCid:r,screenDataMap:s,screenTreeMap:l,treeProps:a})})))}}]),w}(E.PureComponent);(0,u.default)(h,"propTypes",{cid:d.default.string,treeProps:d.default.object,depth:d.default.number,isSearching:d.default.bool,editingCid:d.default.string,hoverCid:d.default.string,targetlinkCid:d.default.string,activeCid:d.default.string,screenTreeMap:d.default.object,
screenDataMap:d.default.object,collapseKeySet:d.default.object})},"m/Xg":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=a("xQM3"),m=a("CpT9"),v=r(a("p6mf")),g=function(e){function t(e){var u
return(0,i.default)(this,t),u=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(u),"handleMouseDown",function(e){if(!MB.isMobile()&&!u.props.isImmersive){var t=$(e.target).closest(".map_view .image"),a=$(e.target).closest(".ppanel"),n=t[0]||a[0]
if(n&&(n.clientWidth!==n.scrollWidth||n.clientHeight!==n.scrollHeight)){var r=e.clientX,i=e.clientY,o=n.scrollTop,l=n.scrollLeft,s=0,c=function(e){e.preventDefault(),s++,n.scrollTop=o-(e.clientY-i),n.scrollLeft=l-(e.clientX-r)}
document.addEventListener("mousemove",c),document.addEventListener("mouseup",function e(t){5<s&&MB.runner.eventBucket.isCoolDown(),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",e)})}}}),u.state={homeScreen:Screen.find(e.screen.cid)},u}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,a=e.screen,n=e.isLite,r=e.isScreenExpanded,i=e.viewportWidth,o=e.viewportHeight,l=t.splash,s=void 0===l?"":l,c=this.state.homeScreen,u={
width:i,height:o},d=(0,h.getScreenContainerStyle)(a,t,u,n,r),f=(0,m.getScreenClassName)(a,t)
return p.default.createElement("div",{id:"simulator",className:f,style:d,onMouseDown:this.handleMouseDown},p.default.createElement("div",{id:"app"},p.default.createElement(v.default,null)),p.default.createElement(y,{homeScreen:c,url:s}))}}]),t}(p.PureComponent)
t.default=g,(0,d.default)(g,"propTypes",{screen:f.default.object.isRequired,project:f.default.object.isRequired,isLite:f.default.bool,isImmersive:f.default.bool,isScreenExpanded:f.default.bool,viewportWidth:f.default.number,viewportHeight:f.default.number})
var y=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.homeScreen,n=t.url
return e=a.w()>a.dH()?{top:0-a.dW(),width:a.dH(),height:a.dW()}:{top:0,width:a.dW(),height:"101%"},p.default.createElement("div",{className:"splash",style:{backgroundColor:a.bg()}},n&&p.default.createElement("img",{src:n,style:e}),p.default.createElement("div",{className:"loading"},p.default.createElement("div",{className:"spinner"})))}}]),t}(p.PureComponent);(0,d.default)(y,"propTypes",{homeScreen:f.default.object,url:f.default.string})},m48X:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("pVnL")),o=r(a("QILm")),l=r(a("lwsE")),s=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("7W2i")),f=r(a("lSNA")),p=n(a("q1tI")),h=r(a("17x9")),m=a("6XO9")
a("WcC0")
var v=function(e){function t(){return(0,l.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.menuClassName,n=(0,o.default)(e,["className","menuClassName"])
return p.default.createElement(m.Select,(0,i.default)({className:(0,m.trimList)(["ToolbarSelect",t]),menuClassName:(0,m.trimList)(["ToolbarSelectMenu",a])},n,{placeholder:" ",unstyled:!0,size:"small",menuX:"center"}))}}]),t}(p.PureComponent)
t.default=v,(0,f.default)(v,"propTypes",{className:h.default.string,menuClassName:h.default.string})},"mC/1":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledResetButton=t.StyledMainContent=void 0
var r=n(a("vOnD")),i=r.default.div.withConfig({displayName:"styles__StyledMainContent",componentId:"t5mjug-0"})(["flex:1;position:relative;width:100%;height:100%;pointer-events:none;"])
t.StyledMainContent=i
var o=r.default.div.withConfig({displayName:"styles__StyledResetButton",componentId:"t5mjug-1"})([
"position:absolute;top:38px;right:0;min-width:92px;padding:0 8px;height:28px;margin-right:27px;font-size:12px;white-space:nowrap;background:white;border-radius:2px;cursor:pointer;box-shadow:0 2px 5px 0 rgba(39,54,78,0.08);display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;transition:opacity 0.2s ease-in-out;&:hover{background:#f5f5f5;color:#5b6b73;}&.is-show{pointer-events:auto;opacity:1;}"])
t.StyledResetButton=o},mCdf:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var c=n(a("MVZn")),i=n(a("lwsE")),o=n(a("W8MJ")),l=n(a("a1gu")),s=n(a("Nsbk")),u=n(a("PJYZ")),d=n(a("7W2i")),p=n(a("lSNA")),f=n(a("q1tI")),r=n(a("17x9")),h=a("ZXhj"),m=a("1qiG"),v=function(e){function r(){var e,f;(0,i.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return f=(0,l.default)(this,(e=(0,s.default)(r)).call.apply(e,[this].concat(a))),(0,p.default)((0,u.default)(f),"getAuxiliaryLinesStyle",function(e,t){return{top:(0,m.toPercentage)(e.top/t.height),left:(0,m.toPercentage)(e.left/t.width),width:(0,m.toPercentage)(e.width/t.width),height:(0,m.toPercentage)(e.height/t.height)}}),(0,p.default)((0,u.default)(f),"getAuxiliaryLinesLength",function(){var e={},t=f.props,a=t.baseRect,n=t.refRect,r=(0,h.getMinContainingRect)(a,n),i=r.width-n.width
0<r.height-(a.height+n.height)&&i>a.width/2&&(e.horizontal=i)
var o=r.height-n.height
return 0<r.width-(a.width+n.width)&&o>a.height/2&&(e.vertical=o),e}),(0,p.default)((0,u.default)(f),"getLineStyle",function(e,t){var a=f.props,n=a.baseRect,r=a.refRect,i=n.left>r.left,o=n.top>r.top,l={}
if(e){var s,c=e/r.width
l.horizontal=(s={},(0,p.default)(s,o?"bottom":"top",0),(0,p.default)(s,i?"right":"left",(0,m.toPercentage)(-c)),(0,p.default)(s,"width",(0,m.toPercentage)(c)),s)}if(t){var u,d=t/r.height
l.vertical=(u={},(0,p.default)(u,i?"right":"left",0),(0,p.default)(u,o?"bottom":"top",(0,m.toPercentage)(-d)),(0,p.default)(u,"height",(0,m.toPercentage)(d)),u)}return l}),f}return(0,d.default)(r,e),(0,o.default)(r,[{key:"render",value:function(){var e=this.props,t=e.refRect,a=e.screen,n=e.style,r=this.getAuxiliaryLinesLength(),i=r.horizontal,o=r.vertical
if(!i&&!o)return null
var l=this.getAuxiliaryLinesStyle(t,a),s=this.getLineStyle(i,o)
return f.default.createElement("div",{className:"smart-auxiliary-lines",style:l},i&&f.default.createElement("div",{className:"line horizontal",style:(0,c.default)({},s.horizontal,{borderTopStyle:"".concat(n.dashed?"dashed":"solid"),borderTopColor:n.colorForLines})}),o&&f.default.createElement("div",{className:"line vertical",style:(0,c.default)({},s.vertical,{borderLeftStyle:"".concat(n.dashed?"dashed":"solid"),borderLeftColor:n.colorForLines})}))}}]),r}(f.default.Component);(t.default=v).propTypes={
baseRect:r.default.object,refRect:r.default.object,screen:r.default.object,style:r.default.object}},mMVB:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),p=n(a("q1tI")),h=a("/MKj"),m=r(a("bNtH")),v=function(e){function i(){var e,t;(0,o.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(n))),(0,f.default)((0,u.default)(t),"handleScroll",function(e){return t.props.dispatch({type:"entry:preview:set:canvas:offset",payload:{offset:e}})}),t}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.canvasOffset,a=e.screen,n=e.scale,r=e.viewport,i=r.width,o=r.height,l={x:Math.max(3.5*i,a.width*n/100*2),y:Math.max(3.5*o,a.height*n/100*2)}
return p.default.createElement(m.default,{canvasOffset:t,viewportWidth:i,viewportHeight:o,canvasRange:l,onScroll:this.handleScroll})}}]),i}(p.PureComponent);(0,f.default)(v,"propTypes",{canvasOffset:i.default.object,dispatch:i.default.func,scale:i.default.number,screen:i.default.object,viewport:i.default.object})
var g=(0,h.connect)(function(e){var t=e.container.common,a=t.offset,n=t.scale,r=t.viewport,i=e.model,o=i.current.screenCid
return{canvasOffset:a,scale:n,screen:i.screens.find(function(e){return e.cid===o}),viewport:r}})(v)
t.default=g},mesP:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=n(a("BVfv")),o=(0,r.connect)(function(e){var t=e.model.user,a=e.container.previewSetting
return{isLogin:Boolean(t.id),unit:a.unit,emPixel:a.emPixel,ratio:a.ratio,language:a.language,isShowColorPicker:a.isShowColorPicker,colorUnit:a.colorUnit}})(i.default)
t.default=o},mggN:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.listItem=t.disabled=t.textEllipsis=void 0
var n=a("vOnD"),r=(0,n.css)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"])
t.textEllipsis=r
var i=(0,n.css)(["position:relative;pointer-events:none;&::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;cursor:not-allowed;pointer-events:auto;}"])
t.disabled=i
var o=(0,n.css)(["position:relative;height:32px;padding-left:14px;display:flex;align-items:center;border:1px solid transparent;color:",";cursor:pointer;.expander{width:12px;margin-top:1px;margin-left:-12px;text-align:center;color:",
";}.editable-span{margin-right:14px;width:100%;height:24px;line-height:22px;overflow:hidden;}.actions{display:none;position:absolute;top:0;right:0;height:100%;padding-left:6px;background:inherit;.Dropdown > button{display:flex;padding:8px 10px;padding-left:0;}.action{margin-right:6px;font-size:12px;color:",";&:hover{color:",";}}&.is-active{display:flex;align-items:center;color:#298df8;}}&:hover{.actions{display:flex;align-items:center;color:#8d9ea7;}}&:hover,&.hover{color:",";background:",
";}&.active{color:",";background:",";}"],function(e){return e.theme.listItem.tc},function(e){return e.theme.listItem.expander_color},function(e){return e.theme.listItem.action_color},function(e){return e.theme.listItem.action_hover_color},function(e){return e.theme.listItem.hover.tc},function(e){return e.theme.listItem.hover.bg},function(e){return e.theme.listItem.active.tc},function(e){return e.theme.listItem.active.bg})
t.listItem=o},mreW:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.entryMap=void 0
var r=n(a("MVZn")),o=n(a("zkrS")),i=a("2eJi"),l=a("upRB"),s=(0,r.default)({},i.entryMap,{"entry:state:init":function(e){var t=e.dispatch
t({type:"user:set",payload:o.default.MB.user||void 0}),t({type:"teams:refresh"}),t({type:"widgets:refresh"}),t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:state:clear":function(e){e.dispatch},"entry:sync-runner:set-screen":function(e,t){var a=e.dispatch,n=e.getState,r=t.payload.cid
a({type:"entry:current:set-screen",payload:{cid:r}})
var i=n()
r!==(0,l.getRunnerState)(i).activeCid&&("inspect"===(0,l.getCurrentMode)(i)&&a({type:"SET_VISIBILITY_SCREEN",payload:{screenID:r}}),o.default.MB.runner.timerHandler.clear(),a({type:"entry:runner:activate:screen",payload:{screenCid:r,transition:void 0}}))},"entry:refresh:team-related":function(e){var t=e.dispatch
t({type:"teams:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:refresh:project-related":function(e){var t=e.dispatch
t({type:"projects:refresh"}),t({type:"screens:refresh"}),t({type:"widgets:refresh"}),t({type:"collaborators:refresh"}),t({type:"entry:add-mock-collaborator"}),t({type:"entry:current:set",payload:{project:o.default.MB.currentProject,screen:o.default.MB.currentScreen}})},"entry:preview:clear":function(e,t){var a=e.dispatch
a({type:"reducer:preview-panel:reset"}),a({type:"container:layers:clear"})}})
t.entryMap=s},mxnB:function(e,t,a){},nQhf:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("MVZn")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("7W2i")),d=n(a("q1tI")),f=r(a("17x9")),p=a("/MKj"),h=r(a("8jgF")),m=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.event,n=e.loggedIn,r=e.inMobile,i=e.dispatch
return d.default.createElement("div",null,t&&!n&&d.default.createElement(h.default,{inMobile:r,event:a,isOpen:t,onClose:function(){return i("event-sign-up:close:modal")}}))}}]),t}(d.PureComponent)
m.propTypes={open:f.default.bool,inMobile:f.default.bool,event:f.default.object,loggedIn:f.default.bool,dispatch:f.default.func}
var v=(0,p.connect)(function(e){return(0,i.default)({},e.container.eventSignUpModal,{loggedIn:!!e.model.user.id,inMobile:MB.isMobile()})})(m)
t.default=v},nU12:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.reducerMap=t.entryMap=void 0
var u=n(a("lSNA")),r=n(a("MVZn")),i=a("WVP6"),f=n(a("iScx")),c=n(a("TZdj")),d=n(a("uW4e")),p=n(a("4YeV")),h=n(a("Emwt")),l=n(a("ni9f")),o=n(a("flWF")),m=n(a("HFhh")),v=n(a("JXIg")),g=n(a("zkrS")),y=a("oose"),b=a("tQ2B"),s=(0,r.default)({},f.default.entryMap,c.default.entryMap,d.default.entryMap,p.default.entryMap,h.default.entryMap,l.default.entryMap,o.default.entryMap,m.default.entryMap,v.default.entryMap,{"entry:add-mock-collaborator":function(e){var n=e.dispatch,t=l.default.getState(),
a=p.default.getState(),r=f.default.getState(),i=new Set(r.map(function(e){return e.cid})),o=function(e,t){var a="co_MOCK_".concat(e.cid)
i.has(a)||(n({type:"collaborators:add-local",payload:{cid:a,role:"owner",user_id:e.owner_id,name:e.owner_name,email:e.owner_email||"email_MOCK_".concat(e.owner_id),avatar:e.owner_avatar,team_cid:t?e.cid:null,project_cid:t?null:e.cid}}),0)}
t.forEach(function(e){return o(e,!0)}),a.forEach(function(e){return o(e,!1)})},"entry:current:set":function(e,t){var a,n,r,i=e.dispatch,o=t.payload,l=o.project,s=o.screen,c=v.default.getState(),u=l&&l.cid||c.projectCid,d=s&&s.cid||c.screenCid
i({type:"current:set",payload:{project:l=p.default.getState().find(function(e){return e.cid===u}),screen:s=h.default.getState().find(function(e){return e.cid===d}),userCollaborator:l&&(a=l.cid,n=l.team_cid,(r=m.default.getState())&&f.default.getState().find(function(e){return e.user_id===r.id&&(e.project_cid===a||e.team_cid===n)}))}})},"entry:current:set-screen":function(e,t){var a=e.dispatch,n=t.payload.cid,r=h.default.getState().find(function(e){return e.cid===n})
if(!r)return console.warn("[entry:current:set-screen] non exist screen with cid: ".concat(n))
a({type:"entry:current:set",payload:{screen:r}})},"entry:comment:init-project-data":function(e){var l=e.dispatch,s=v.default.getState().projectCid,c=p.default.getState().find(function(e){return e.cid===s});(0,y.fetchProjectComment)({projectCid:s,projectAccessToken:c.access_token}).then(function(e){var t=e.org,a=e.team,n=e.members,r=e.threads,i=e.comments;(0,b.refreshCommentData)({comments:i,threads:r}),l({type:"comment-threads:refresh"}),l({type:"comments:refresh"}),l({type:"screens:refresh"})
var o={isProjectAllowComment:"allow"===(0,y.getProjectAllowCommentStatus)(c),projectAccessMap:(0,u.default)({},c.owner_id,"project_owner"),teamAccessMap:t&&t.accesses||{},orgAccessMap:a&&a.accesses||{},memberList:n||[]}
l({type:"container:comment:loaded-project",payload:{projectCid:s,projectCommentData:o}})})},"entry:comment-threads:add":function(e,t){e.getState
var a=e.dispatch,n=t.payload,r=n.top,i=n.left,o=n.message,l=m.default.getState(),s=v.default.getState().screenCid,c=.001*Date.now(),u=g.default.SpineModel.requestCid("cmth")
a({type:o?"comment-threads:add":"comment-threads:add-local",payload:{cid:u,top:r,left:i,screen_cid:s,user_id:l.id,created_at:c,updated_at:c}}),o&&a({type:"comments:add",payload:{thread_cid:u,message:o,user_id:l.id,created_at:c,updated_at:c}}),a({type:"container:comment:focus",payload:{focusCommentThreadCid:u}})},"entry:comment-threads:update":function(e,t){var a=e.dispatch,n=(e.getState,t.payload),r=n.cid,i=n.top,o=n.left,l=void 0===c.default.getState().find(function(e){return e.thread_cid===r}),
s=.001*Date.now()
a({type:l?"comment-threads:update-local":"comment-threads:update",payload:{cid:r,top:i,left:o,updated_at:s}})},"entry:comment-threads:delete":function(e,t){var a=e.dispatch,n=t.payload.cid
a({type:"comment-threads:delete",payload:{cid:n}}),c.default.getState().forEach(function(e){return e.thread_cid===n&&a({type:"comments:delete-local",payload:e})})},"entry:comments:add":function(e,t){var a=e.dispatch,n=t.payload,r=n.thread_cid,i=n.message,o=m.default.getState(),l=.001*Date.now()
a({type:"comment-threads:save",payload:{cid:r}}),a({type:"comments:add",payload:{thread_cid:r,message:i,user_id:o.id,created_at:l,updated_at:l}}),a({type:"container:comment:focus",payload:{focusCommentThreadCid:null}})},"entry:comments:update":function(e,t){var a=e.dispatch,n=t.payload
a({type:"comments:update",payload:{cid:n.cid,message:n.message,updated_at:.001*Date.now()}})},"entry:state:push-data":function(e,t){var a=e.dispatch,n=t.payload,r=n.pushType,i=n.action,o=n.data
switch(r){case"comment-threads":var l=d.default.getState().find(function(e){return e.cid===o.cid})
"update"!==i||l?"update"===i&&l?a({type:"comment-threads:update-local",payload:o}):"destroy"===i&&l&&(a({type:"comment-threads:delete-local",payload:o}),c.default.getState().forEach(function(e){return e.thread_cid===o.cid&&a({type:"comments:delete-local",payload:e})})):a({type:"comment-threads:add-local",payload:o})
break
case"comments":var s=c.default.getState().find(function(e){return e.cid===o.cid})
"update"!==i||s?"update"===i&&s?a({type:"comments:update-local",payload:o}):"destroy"===i&&s&&a({type:"comments:delete-local",payload:o}):a({type:"comments:add-local",payload:o})}}})
function S(a,e){var n=e.getState,r=e.setState,i=n()
return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0
return t.type!==a?e:(r(t.payload||e),n())}}t.entryMap=s
var w={collaborators:S("reducer:collaborators:update",f.default),comments:S("reducer:comments:update",c.default),commentThreads:S("reducer:comment-threads:update",d.default),projects:S("reducer:projects:update",p.default),screens:S("reducer:screens:update",h.default),teams:S("reducer:teams:update",l.default),widgets:S("reducer:widgets:update",o.default),user:(0,i.createStateStoreReducer)("reducer:user:update",m.default),current:(0,i.createStateStoreReducer)("reducer:current:update",v.default)}
t.reducerMap=w},naIL:function(e,t,a){e.exports={"screen-panel":"xcKB8zcEhkyUcti-3naYu"}},ni9f:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.Team,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:teams:update",payload:i(e,r,o)})})},u={entryMap:{"teams:refresh":c(r.refreshStateList,!1),"teams:add":c(r.addState,!1),"teams:add-local":c(r.addState,!0),"teams:update":c(r.updateState,!1),"teams:update-local":c(r.updateState,!0),"teams:delete":c(r.deleteState,!1),"teams:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},"o/90":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),l=r(a("7W2i")),d=r(a("lSNA")),f=r(a("RIqP")),p=r(a("17x9")),h=n(a("q1tI")),m=r(a("DKAG")),v=r(a("p2ZH")),g=r(a("2b0G")),y=r(a("4QcC")),b=r(a("ER7e")),S=r(a("Kurm")),w=r(a("TSYQ")),E=function(e){var t=document.querySelector(".full-screen header"),a=document.querySelector(".full-screen #mb-preview-leftpane"),n=document.querySelector(".full-screen #mb-preview-rightpane"),r=document.querySelector("#preview_scrollBar_viewport"),
i=Array.from(r.querySelectorAll(".track, .handler")),o=document.querySelector("#simulator-container"),l=[t,a,n].concat((0,f.default)(i)).filter(function(e){return e})
"hide"===e?(o.style.overflow="visible",l.forEach(function(e){return e.style.opacity=0}),setTimeout(function(){return l.forEach(function(e){return e.style.pointerEvents="none"})},300)):"show"===e&&(o.style.overflow="hidden ",l.forEach(function(e){return e.style.pointerEvents="auto"}),setTimeout(function(){return l.forEach(function(e){return e.style.opacity=1})},300))},k=function(e){function t(e){var l
return(0,i.default)(this,t),l=(0,s.default)(this,(0,c.default)(t).call(this,e)),(0,d.default)((0,u.default)(l),"setMode",function(e){var t=l.state.isDarkMode,a=e.target.dataset.mode
"light"===a&&t&&l.setState({isDarkMode:!1}),"dark"!==a||t||(MB.event("preview","工具栏: 全屏模式暗色背景"),l.setState({isDarkMode:!0}))}),(0,d.default)((0,u.default)(l),"handleKeyDown",function(e){37===e.keyCode&&l.goToScreenByStep(-1),39===e.keyCode&&l.goToScreenByStep(1)}),(0,d.default)((0,u.default)(l),"handleNavigate",function(e){var t=e.currentTarget.dataset.action
"last"===t?(MB.event("*","运行页-预览-全屏模式-点击上一页"),l.goToScreenByStep(-1)):"next"===t&&(MB.event("*","运行页-预览-全屏模式-点击下一页"),l.goToScreenByStep(1))}),(0,d.default)((0,u.default)(l),"handleExitFullScreen",function(){l.props.dispatch({type:"entry:exit:fill-screen-mode"})}),(0,d.default)((0,u.default)(l),"goToScreenByStep",function(e){var t=l.props,a=t.screen,n=t.screenInOrder,r=t.dispatch,i=a.cid,o=n.findIndex(function(e){return e===i})+e
if(o<0)l.setState({shouldTextShow:!0,reachFirstScreen:!0})
else if(o>n.length-1)l.setState({shouldTextShow:!0,reachLastScreen:!0})
else{r({type:"entry:sync-runner:set-screen",payload:{cid:n[o]}}),r({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}),l.setState({shouldTextShow:!0,reachFirstScreen:!1,reachLastScreen:!1})}}),l.state={isDarkMode:!1,shouldTextShow:!1,reachFirstScreen:!1,reachLastScreen:!1},l}return(0,l.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){E("hide")}},{key:"componentWillUnmount",value:function(){E("show")}},{key:"componentDidUpdate",value:function(e){var t=this
if(this.state.shouldTextShow&&(clearTimeout(this.timer),this.timer=setTimeout(function(){return t.setState({shouldTextShow:!1})},1500)),this.props.screen!==e.screen){var a=this.props,n=a.screen,r=a.screenInOrder,i=n.cid,o=r.findIndex(function(e){return e===i})
0!==o&&this.setState({reachFirstScreen:!1}),o!==r.length-1&&this.setState({reachLastScreen:!1})}}},{key:"render",value:function(){var e=this.state,t=e.isDarkMode,a=e.shouldTextShow,n=e.reachFirstScreen,r=e.reachLastScreen,i=this.props,o=i.screen,l=i.screenInOrder,s=i.dispatch,c=i.scale
return h.default.createElement("div",{className:(0,w.default)(S.default["full-screen-actions"],{"dark-mode":t})},h.default.createElement("div",{className:(0,w.default)("zoom-wrapper",{"is-Iniframe":MB.isUIChina()||MB.isForum()})},h.default.createElement(y.default,{fromFullScreen:!0,scale:c,dispatch:s})),h.default.createElement(b.default,{onClickMode:this.setMode,onClickExit:this.handleExitFullScreen}),h.default.createElement(v.default,{screen:o,screenInOrder:l,shouldTextShow:a,reachFirstScreen:n,
reachLastScreen:r}),h.default.createElement(g.default,{onClick:this.handleNavigate}),h.default.createElement(m.default,{target:document,onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=k,(0,d.default)(k,"propTypes",{dispatch:p.default.func,screen:p.default.object,screenInOrder:p.default.array,scale:p.default.number})},oKLx:function(e,t,a){},oSKl:function(e,t,a){},oose:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return c.reducer}}),Object.defineProperty(t,"fetchProjectComment",{enumerable:!0,get:function(){return u.fetchProjectComment}}),t.getProjectAllowCommentStatus=t.CommentContainer=t.CommentMarkerPanelContainer=void 0
var r=a("/MKj"),i=n(a("zkrS")),o=a("/5+U"),l=a("3xeE"),s=a("94Et"),c=a("ZY2Q"),m=a("fiFu"),u=a("VQzC"),v=i.default.MB,d=i.default.I18N,f=(0,r.connect)(function(e){var t=e.model,a=t.user.id,n=t.current,r=(n.userRole,n.screenCid),i=n.projectCid,o=(n.teamCid,t.projects),l=t.screens,s=(t.collaborators,t.commentThreads),c=t.comments,u=e.container.comment,d=u.loadedProjectCid,f=u.loadedProjectCommentData,p=u.focusCommentThreadCid,h=u.focusSource,m=u.tempCommentThreadMarker
return{isLoaded:d===i,permissionPack:S(o,i,a,f),getUserProfile:w(f),screenName:b(l,r),commentThreadList:g(s,r),commentListMap:y(c),focusCommentThreadCid:p,focusSource:h,tempCommentThreadMarker:m}})(l.CommentLayer)
t.CommentContainer=f
var p=(0,r.connect)(function(e){var t=e.model,a=t.user.id,n=t.current,r=(n.userRole,n.screenCid),i=n.projectCid,o=(n.teamCid,t.projects),l=(t.collaborators,t.commentThreads),s=e.container.comment,c=s.loadedProjectCid,u=s.loadedProjectCommentData,d=s.focusCommentThreadCid,f=(s.focusSource,s.tempCommentThreadMarker)
return{isLoaded:c===i,permissionPack:S(o,i,a,u),markerDomPack:E(r),commentThreadList:g(l,r),focusCommentThreadCid:d,tempCommentThreadMarker:f}})(s.CommentMarkerPanel)
t.CommentMarkerPanelContainer=p
var g=(0,o.immutableTransformCache)(function(e,t){return e.filter(function(e){return e.screen_cid===t})}),y=(0,o.immutableTransformCache)(function(e){return e.reduce(function(e,t){return void 0===e[t.thread_cid]?e[t.thread_cid]=[t]:e[t.thread_cid].push(t),e},{})}),b=(0,o.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t}).name}),S=(0,o.immutableTransformCache)(function(e,t,a,n){if(!n)return{isProjectAllowComment:!1,getPermission:function(){return!1},permissionDenyMessage:"",
userAuthStatus:(0,m.getUserAuthStatus)(a,[])}
var r=n.isProjectAllowComment,i=n.projectAccessMap,o=n.teamAccessMap,l=n.orgAccessMap,s=n.memberList,c=[i[a],o[a],l[a]].filter(Boolean).join("|")
console.log("userTitleString")
var u,d,f=Boolean(c),p=c.includes("admin")||c.includes("owner"),h=(0,m.getCommentPermission)()
return{isProjectAllowComment:r,getPermission:r?function(e){return(0,m.getCommentPermission)(f,p,a,e)}:function(){return h},permissionDenyMessage:r?"":(u=e.find(function(e){return e.cid===t}),d=k(u),v.renewMsg("comment_".concat(d),{action:"comment_".concat(d)})),userAuthStatus:(0,m.getUserAuthStatus)(a,s)}}),w=(0,o.immutableTransformCache)(function(e){var t=e&&e.memberList.reduce(function(e,t){var a=t.user_id,n=t.avatar,r=t.name
return e[a]={avatar:n,name:r},e},{})||{}
return function(e){return t[e]||h}}),h={name:d.preview.comment.user_name_ghost,avatar:"/images/avatar.png"},E=(0,o.immutableTransformCache)(function(e){return{getScreenContainerElement:function(){return document.querySelector("#pscreen".concat(e," .scontainer"))},getSimulatorContainerElement:function(){return document.querySelector("#simulator-container")}}}),k=function(e){
return!e||e.combo||e.template?"deny":e.limitation.commentable?"org_member"!==e.comment_permission?"deny_permission":"allow":"deny_limitation"}
t.getProjectAllowCommentStatus=k},p2ZH:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("7W2i")),u=r(a("lSNA")),d=r(a("17x9")),f=n(a("q1tI")),p=r(a("6PGs")),h=r(a("TSYQ")),m=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.screen,n=t.screenInOrder,r=t.shouldTextShow,i=t.reachFirstScreen,o=t.reachLastScreen,l=n.findIndex(function(e){return e===a.cid})
return e=i?I18N.preview.firstScreen:o?I18N.preview.lastScreen:"".concat(l+1," / ").concat(n.length),f.default.createElement("div",{className:(0,h.default)(p.default["screen-info"],{show:r})},f.default.createElement("div",null,e),f.default.createElement("span",{className:"dot"}),f.default.createElement("div",{className:"screen-name"},a.name))}}]),t}(f.PureComponent)
t.default=m,(0,u.default)(m,"propTypes",{screen:d.default.object,screenInOrder:d.default.array,shouldTextShow:d.default.bool,reachFirstScreen:d.default.bool,reachLastScreen:d.default.bool})},p6mf:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a("/MKj"),i=a("upRB"),o=n(a("6Y1W")),l=(0,r.connect)(function(e){return(0,i.getRunnerState)(e)})(o.default)
t.default=l},pVAx:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.RECOMMEND_LIBRARY_BASIC_WIDGETS=t.LIBRARY_BASIC_WIDGETS=t.LAYOUT_BG_COLOR=t.LAYOUT=t.LAYOUT_PADDING=t.BASIC_WIDGET_NAMES=t.RECOMMEND=t.CLASSIC=t.BETA=void 0
var n=a("abHt")
t.BETA="beta"
t.CLASSIC="classic"
t.RECOMMEND="recommend"
var r=["rich_text","rounded_rect","circle_rect","line","image_view","lr"]
t.BASIC_WIDGET_NAMES=r
t.LAYOUT_PADDING={h:20,v:10}
t.LAYOUT={row:{count:0,gutter:20,size:144},col:{count:4,gutter:20,size:0}}
t.LAYOUT_BG_COLOR="rgba(41, 141, 248, 0.24)"
var i=n.visibleComponentList.filter(function(e){return!r.includes(e.name)})
t.LIBRARY_BASIC_WIDGETS=i
var o=r.map(function(e){return n.componentMap[e]}).concat(i)
t.RECOMMEND_LIBRARY_BASIC_WIDGETS=o},peLG:function(e,t,a){},prTy:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("pVnL")),l=r(a("QILm")),s=r(a("o0o1")),c=r(a("yXPU")),u=r(a("lwsE")),d=r(a("W8MJ")),f=r(a("a1gu")),p=r(a("Nsbk")),h=r(a("PJYZ")),m=r(a("7W2i")),v=r(a("lSNA")),g=n(a("q1tI")),i=r(a("17x9")),y=a("qhQL"),b=a("/5+U"),S=(0,y.createAsyncTaskQueue)().pushTask,w=function(t,a){return new Promise(function(e){t.src=a,t.onload=function(){return e(t)},t.onerror=function(){return e()}})},E=function(e){function i(){var e,t;(0,u.default)(this,i)
for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return t=(0,f.default)(this,(e=(0,p.default)(i)).call.apply(e,[this].concat(n))),(0,v.default)((0,h.default)(t),"getElementRef",function(e){return t.imageRef=e}),t}return(0,m.default)(i,e),(0,d.default)(i,[{key:"componentDidMount",value:function(){var i=this
S((0,c.default)(s.default.mark(function e(){var t,a,n,r
return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.props,a=t.src,n=t.adjustImage,e.next=3,w(i.imageRef,a)
case 3:r=e.sent,n&&r&&(0,b.adjustImageRect)({image:r,adjust:n})
case 5:case"end":return e.stop()}},e)}))).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.props,t=(e.src,e.adjustImage,(0,l.default)(e,["src","adjustImage"]))
return g.default.createElement("img",(0,o.default)({alt:"",ref:this.getElementRef},t))}}]),i}(g.PureComponent);(t.default=E).propTypes={src:i.default.string,adjustImage:i.default.number}},q3nj:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"reducerMap",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"PreviewContainer",{enumerable:!0,get:function(){return s.default}}),t.sagaMap=void 0
var r=n(a("j1JO")),i=n(a("yOnP")),o=a("tBsX"),l=n(a("cQH5")),s=n(a("aYzi")),c={layerSaga:o.saga,sliceSaga:r.default,artboardsSaga:i.default}
t.sagaMap=c},qYFl:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.isRemoteMtimeStale=t.updateWorkspaceMap=t.updateProject=t.updateTeam=t.updateCollaborator=t.updateAsset=void 0
var c=n(a("o0o1")),r=n(a("yXPU")),u=a("t3Un"),i=a("t77w"),d=a("tQ2B"),o=window,l=o.$,f=o.MB,s=o.Screen,p=o.Screenstate,h=o.Panel,m=o.Panelstate,v=o.Widget,g=o.Widgetstate,y=o.Link
t.updateAsset=function(e,t){if(!f.f.inSharing&&"create"===e){var a=new Asset
a.load(t),a.lsave(!1)}}
t.updateCollaborator=function(e,t){if(f.f.inSharing){if("update"===e){var a=Collaborator.find(t.cid)
a?a.refresh(t):((a=new Collaborator).load(t),a.lsave(!1)),f.webpackInterface.store.dispatch({type:"entry:state:init"})}if("destroy"===e){var n=Collaborator.find(t.cid)
if(!n)return
if(n.ldestroy(!1),n.user_id===f.user.id)return window.location.reload()}}else{if("update"===e){var r=Collaborator.find(t.cid)
r?r.refresh(t):((r=new Collaborator).load(t),r.lsave(!1)),f.webpackInterface.refreshAll()}if("destroy"===e){var i=Collaborator.find(t.cid)
if(!i)return
if(i.ldestroy(!1),i.user_id===f.user.id){var o=i.project_cid&&Project.find(i.project_cid),l=i.team_cid&&Team.find(i.team_cid)
o&&f.webpackInterface.deleteProjectByCid(o.cid),l&&f.webpackInterface.deleteTeamByCid(l.cid)}}}}
t.updateTeam=function(e,t){if(!f.f.inSharing){if("update"===e){var a=Team.find(t.cid)
a?a.refresh(t):((a=new Team).load(t),a.lsave(!1)),f.webpackInterface.refreshAll()}if("destroy"===e){var n=Team.find(t.cid)
n&&f.webpackInterface.deleteTeamByCid(n.cid)}}}
t.updateProject=function(e,t){if(!f.f.inSharing){if("update"===e){var a=Project.find(t.cid)
if(a){if(a.duplicating){var n=a.screens_count
a.refresh(t),a.screens_count=n}}else(a=new Project).load(t),a.screens_count||(a.screens_count=2),a.lsave(!1)
f.webpackInterface.refreshAll(),a.duplicating||l("#notification").removeClass("active"),f.f.isDuplicatingDemo&&!a.duplicating&&(f.f.isDuplicatingDemo=!1,f.webpackInterface.navigateTo("/workspace/apps/".concat(a.cid)))}if("destroy"===e){var r=Project.find(t.cid)
if(r)f.webpackInterface.deleteProjectByCid(r.cid)
else{var i=Template.find(t.cid)
i&&(i.ldestroy(!1),f.renderTemplateList())}}l(".timeago").timeago()}}
var b={Screen:function(e,t){if("update"===e){var a=s.find(t.cid)
a?(a.refresh(t),f.currentScreen.cid===a.cid&&f.updateCurrentScreen()):((a=new s).load(t),a.lsave(!1)),f.currentProject&&f.currentProject.cid===a.project_cid&&f.action("update:screens:all",{screens:f.currentProject.cscreens()})}else if("destroy"===e){var n=s.find(t.cid)
if(!n)return
n.ldestroy(!1),f.currentProject&&f.currentProject.cid===n.project_cid&&f.action("entry:remove:from:screen-history",{cids:[n.cid]})}},Screenstate:function(e,t){var a=s.find(f.currentScreen.cid)
if("update"===e){var n=p.find(t.cid)
n?n.refresh(t):((n=new p).load(t),n.lsave(!1)),a&&a.cid===n.screen_cid&&f.updateCurrentScreen()}else if("destroy"===e){var r=p.find(t.cid)
if(!r)return
r.ldestroy(!1),a&&a.cid===r.screen_cid&&(a.state_cid===r.cid&&(a.setState("default",!0),f.action("set:current:screen",{screen:a}),ScreenManager.updateWidgetList()),f.updateCurrentScreen())}},Panel:function(){var n=(0,r.default)(c.default.mark(function e(t,a,n){var r,i,o,l,s
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.getCurrentScreen(),"update"!==t){e.next=30
break}if(i=h.find(a.cid)){e.next=25
break}if(e.prev=4,Template.find(a.template_cid)){e.next=12
break}return e.next=9,(0,u.requestJSON)("/templates/".concat(a.template_cid,".json"))
case 9:o=e.sent,(0,d.refreshTemplateData)(o),f.Pusher.enableSocketChannel(o.template.cid)
case 12:if((l=new h).load(a),l.lsave(!1),f.renderTemplateList(),r===l.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=18
break
case 18:e.next=23
break
case 20:e.prev=20,e.t0=e.catch(4),console.warn(e.t0)
case 23:e.next=28
break
case 25:if(i.refresh(a),r===i.screen_cid)return e.abrupt("return",ScreenManager.updateWidgetList())
e.next=28
break
case 28:e.next=41
break
case 30:if("destroy"!==t){e.next=41
break}if(s=h.find(a.cid)){e.next=34
break}return e.abrupt("return")
case 34:if(r===s.screen_cid)return s.ldestroy(!1),f.action("selection:unselect:items",{cids:[s.cid]}),e.abrupt("return",ScreenManager.updateWidgetList())
e.next=40
break
case 40:return e.abrupt("return",s.ldestroy(!1))
case 41:case"end":return e.stop()}},e,null,[[4,20]])}))
return function(e,t,a){return n.apply(this,arguments)}}(),Panelstate:function(e,t){var a=s.find(f.currentScreen.cid)
if("update"===e){var n=m.find(t.cid)
if(n?n.refresh(t):((n=new m).load(t),n.lsave(!1)),a&&a.state_cid===n.screenstate_cid){var r=h.find(n.panel_cid)
r.screenstate_cid===n.screenstate_cid&&(r.restore(n),r.lsave(!1),ScreenManager.updateWidgetList())}}},Widget:function(e,t){return function(e,t){var a=f.getCurrentScreen()
if("update"===e){var n=v.find(t.cid)
n?n.refresh(t):((n=new v).load(t),n.lsave(!1)),a===n.screen_cid&&ScreenManager.updateWidgetList()}else if("destroy"===e){var r=v.find(t.cid)
if(!r)return
r.ldestroy(!1),a===r.screen_cid&&(f.action("selection:unselect:items",{cids:[r.cid]}),ScreenManager.updateWidgetList())}}(e,(0,i.decompressRichText)(t))},Widgetstate:function(e,t){return function(e,t){var a=s.find(f.currentScreen.cid)
if("update"===e){var n=g.find(t.cid)
if(n?n.refresh(t):((n=new g).load(t),n.lsave(!1)),a&&a.state_cid===n.screenstate_cid){var r=v.find(n.widget_cid)
r.screenstate_cid===n.screenstate_cid&&(r.restore(n),r.lsave(!1),ScreenManager.updateWidgetList())}}}(e,(0,i.decompressRichText)(t))},Link:function(e,t){var a,n=f.getCurrentScreen()
if("update"===e)(a=y.find(t.cid))?a.refresh(t):((a=new y).load(t),a.lsave(!1))
else if("destroy"===e){if(!(a=y.find(t.cid)))return
a.ldestroy(!1)}a&&n===a.screen_cid&&f.renderLinks()}}
t.updateWorkspaceMap=b
var S={Asset:Asset,Collaborator:Collaborator,Team:Team,Project:Project,Screen:s,Screenstate:p,Panel:h,Panelstate:m,Widget:v,Widgetstate:g,Link:y}
t.isRemoteMtimeStale=function(e,t,a){var n=S[e]&&S[e].findByAttribute("cid",t)
return n&&n.mtime>a}},qc8Y:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledPreviewPanel=void 0
var r=n(a("vOnD")).default.div.withConfig({displayName:"styles__StyledPreviewPanel",componentId:"snkhg3-0"})([
"position:relative;width:240px;height:100%;font-size:12px;color:#525e71;background-color:#fff;box-shadow:0 -2px 30px rgba(39,54,78,0.11);header{height:32px;padding-left:10px;padding-right:12px;display:flex;justify-content:flex-end;background:#f2f3f4;overflow:hidden;.preview-panel-nav{height:26px;align-self:flex-end;background:transparent;& > li{width:60px;border-radius:4px 4px 0 0;transition:all 0.2s ease-out;.nav-icon{color:#5b6b73;.icon{font-size:14px;width:14px;height:14px;}.screen-icon{position:relative;margin-left:-17px;&::after{content:"
,";position:absolute;bottom:-5px;left:6px;font-size:20px;padding:0 5px 0 7px;min-width:36px;height:24px;border-radius:12px;background-color:#ededed;color:#415058;text-align:center;line-height:24px;transform:scale(0.5);}}}&.active .nav-icon{color:#ff6161;}:not(.active):hover{background:#fcfcfc;.nav-icon{.svg-icon{color:#5b6b73;.fore{fill:#8d9ea7;}}}}}.background-cube{background:#fff;box-shadow:0 -2px 7px 0 rgba(0,0,0,0.06);border-radius:4px 4px 0 0;}}}&.is-uichina{box-shadow:none;}"],function(e){
return"'".concat(e.screensCount,"'")})
t.StyledPreviewPanel=r},rESR:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=r(a("pVnL")),s=r(a("QILm")),i=r(a("lwsE")),o=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),d=r(a("PJYZ")),f=r(a("7W2i")),p=r(a("lSNA")),h=n(a("q1tI")),m=r(a("17x9")),v=n(a("DqDi")),g=n(a("i6OX")),y=r(a("xo+i")),b=a("gSgL"),S=a("qc8Y"),w=r(a("TSYQ")),E=[{key:"screen",icon:h.default.createElement(g.default,{type:"dora",className:"screen-icon",name:"file_text"}),title:I18N.preview.pages},{key:"images",icon:h.default.createElement(g.SVGIcon,{name:"design/slice_image"}),title:I18N.preview.images}],k=function(
e){function a(e){var t
return(0,i.default)(this,a),t=(0,c.default)(this,(0,u.default)(a).call(this,e)),(0,p.default)((0,d.default)(t),"setElementRef",function(e){return t.$elem=e}),(0,p.default)((0,d.default)(t),"handTooltip",function(){$(t.$elem).tooltip({selector:".preview-panel-nav li",container:"body",placement:"bottom",trigger:"hover"})}),(0,p.default)((0,d.default)(t),"handleTabChange",function(e){t.setState({activeIndex:e})}),t.state={activeIndex:0},t}return(0,f.default)(a,e),(0,o.default)(a,[{
key:"UNSAFE_componentWillReceiveProps",value:function(e){"inspect"!==e.toolbarActiveItem&&this.setState({activeIndex:0})}},{key:"componentDidMount",value:function(){this.handTooltip()}},{key:"render",value:function(){var e=this.props,t=e.isDemo,a=e.project,n=e.screensCount,r=e.toolbarActiveItem,i=this.state.activeIndex,o="inspect"==r&&!MB.isHTMLZip()?E:E.slice(0,1)
return h.default.createElement(S.StyledPreviewPanel,{className:(0,w.default)("preview-panel",{"is-uichina":MB.isUIChina()||MB.isForum()}),ref:this.setElementRef,screensCount:n},h.default.createElement("header",null,h.default.createElement(v.default,{className:"preview-panel-nav",activeIndex:i,onTabChange:this.handleTabChange},o.map(function(e){var t=e.key,a=(0,s.default)(e,["key"])
return h.default.createElement(v.NavItem,(0,l.default)({key:t},a))}))),0==i?h.default.createElement(y.default,{toolbarActiveItem:r,isDemo:t}):h.default.createElement(b.SliceContainer,{projectName:a.name}))}}]),a}(h.PureComponent)
t.default=k,(0,p.default)(k,"propTypes",{project:m.default.object.isRequired,screensCount:m.default.number.isRequired,toolbarActiveItem:m.default.string.isRequired,isDemo:m.default.bool})},rj4U:function(e,t,a){e.exports={"sub-toolbar":"_1lHJrguhCEQomzI0fKyRuD","select-input":"_3UQjksfyW2n5lPbsPnEgJv"}},rtgd:function(e,t,a){e.exports={"preview-toolbar":"_2GvcxT6MMVgPVqZ4pTagSW"}},rwIS:function(e,t,a){e.exports={"guide-button":"_30xMHfnBUgdhrZI7AsHGRs"}},tBsX:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"saga",{enumerable:!0,get:function(){return s.default}}),t.reducers=t.default=void 0
var r=n(a("MVZn")),i=a("ANjH"),o=a("/MKj"),l=n(a("xx4x")),s=n(a("7bR1")),c=n(a("eNKG")),u=n(a("ee4a")),d=a("Kkl0"),f=(0,i.combineReducers)((0,r.default)({},c.default,u.default))
t.reducers=f
var p=(0,o.connect)(function(e){var t=e.container,a=t.layers,n=t.common.keyFlags.isSpaceDown,r=t.previewSetting,i=r.toolbarActiveItem,o=r.isSelectLayer,l=r.isShowColorPicker,s=a.activeLayerID,c=a.resourceByScreen[a.visibilityScreenID]||{},u=c.isFetching,d=void 0===u||u,f=c.error
return{isActive:"inspect"==i,isSpaceDown:n,isSelectLayer:o,isShowColorPicker:l,isFetching:d,activeLayerID:s,error:void 0===f?"":f}},function(t){return{requestSelectLayer:function(e){t((0,d.requestSelectLayer)(e))},handleShowlayerInfo:function(e){t({type:"reducer:preview-toolbar:update",payload:{isSelectLayer:e}})}}})(l.default)
t.default=p},tRkt:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("43RC")),m=r(a("6gQ3")),v=a("oose"),g=r(a("zgSj")),y=a("1iCU"),b=a("/Mon"),S=function(e){function t(e){var a
return(0,i.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(a),"toggleMinimized",function(e){var t=a.props.toolbarActiveItem
a.setState({isMinimized:e}),MB.event("preview","".concat(y.TOOLBAR_TRAKING_CONFIG[t],",点击了").concat(e?"收起":"展开","列表"))}),a.state={isMinimized:MB.isUIChina()||MB.isForum()},a}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isLayerPanelShow,a=e.isCommentPanelShow,n=e.isScreenPanelShow,r=this.state.isMinimized
if(!(t||a||n))return null
var i=n?240:260
return p.default.createElement(b.StyledRightPane,{id:"mb-preview-rightpane",style:{width:r?0:i}},n&&p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"preview-panel-wrapper"},p.default.createElement(m.default,null)),p.default.createElement(h.default,{placement:"left",isMinimized:r,onClick:this.toggleMinimized})),t&&p.default.createElement(g.default,null),a&&p.default.createElement(v.CommentContainer,null))}}]),t}(p.PureComponent)
t.default=S,(0,d.default)(S,"propTypes",{toolbarActiveItem:f.default.string,isScreenPanelShow:f.default.bool,isLayerPanelShow:f.default.bool,isCommentPanelShow:f.default.bool})},tajm:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.patchGlobalAutoSaverPusher=void 0
var p=n(a("o0o1")),h=n(a("yXPU")),m=a("Vk5q"),v=a("iKZC"),g=a("os03"),y=a("ycqN"),b=a("3caq"),S=a("Clcl"),w=window.MB
t.patchGlobalAutoSaverPusher=function(){var a,t,e=(0,v.createAutoSaveQueue)({delay:2e4,onError:(t=(0,h.default)(p.default.mark(function e(t){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,S.REPORT_ERROR)(t,"[AutoSaveQueue] unhandled error",r()),e.next=3,(0,y.SAVE_NUKE_SEQUENCE)(t,t.status)
case 3:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),doSave:(a=(0,h.default)(p.default.mark(function e(t,a){var n
return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,m.processSaveQueue)(t),e.next=3,(0,v.doSaveWithSocketAndFallback)({setSavingState:a,getAutoSaveQueueState:r,saveChunkList:(0,g.arraySplitChunk)(n,64),saveQueueLength:n.length,getSaveItemInfo:m.getSaveItemInfo,isSocketAvailable:function(){return w.Pusher.getIsOpen()},doSocketBatchSave:m.doSocketBatchSave,onSocketError:m.onSocketError,doFallbackSaveItem:m.doFallbackSaveItem,onFallbackError:m.onFallbackError})
case 3:case"end":return e.stop()}},e)})),function(e,t){return a.apply(this,arguments)})}),r=e.getState,n=e.getIsEmpty,i=e.getIsSaving,o=e.getDelay,l=e.setDelay,s=e.add,c=e.addEventListener,u=e.filterSaveQueue,d=e.triggerSave,f=e.afterCurrentSave
c("beforesave",function(){w.setSaving&&w.setSaving(!0)}),c("aftersave",function(){w.currentProject&&(w.currentProject.timestamp=String(.001*Date.now()),w.currentProject.updated_at=(new Date).toISOString(),w.currentProject.lsave(!1)),w.setSaving&&w.setSaving(!1),w.renderCoWorkers&&w.renderCoWorkers()}),w.Pusher=(0,b.createWorkspacePusher)({filterStaleData:function(o){var l=new Set,s=[]
return u(function(e){var t=e.record,a=t.cid,n=t.mtime,r=o[a],i=!r||r<n
return i?l.add(a):s.push(e),i}),{remoteStaleCidSet:l,localStaleDataList:s}}}),w.AutoSaver={getState:r,getIsEmpty:n,getIsSaving:i,getDelay:o,setDelay:l,triggerSave:d,afterCurrentSave:f,add:function(e){var t=e.record,a=e.isDelete,n=void 0!==a&&a
t.mtime=w.Pusher.getServerTimestamp(),s({record:t,isDelete:n})}},(0,y.PATCH_AUTO_SAVE_RELATED)()}},tfo6:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("J4zp")),l=r(a("lwsE")),i=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),p=r(a("17x9")),h=n(a("q1tI")),m=r(a("DKAG")),v=r(a("lwmc")),g=function(e){function t(e){var i
return(0,l.default)(this,t),i=(0,s.default)(this,(0,c.default)(t).call(this,e)),(0,f.default)((0,u.default)(i),"handleExpand",function(e,t){e.stopPropagation()
var a=i.state.collapseKeySet,n=t.cid,r=new Set(a)
a.has(n)?r.delete(n):r.add(n),i.setState({collapseKeySet:r})}),(0,f.default)((0,u.default)(i),"handleActivate",function(e,t){var a=i.props,n=a.activeCid,r=a.dispatch
e.stopPropagation(),n===t.cid?i.handleExpand(e,t):(r({type:"entry:sync-runner:set-screen",payload:{cid:t.cid}}),r({type:"preview:set:canvas:offset",payload:{offset:{x:0,y:0}}}))}),(0,f.default)((0,u.default)(i),"handleKeyDown",function(e){(e.ctrlKey||e.metaKey)&&(186==e.keyCode&&(e.preventDefault(),i.resetExpandAll()),222==e.keyCode&&(e.preventDefault(),i.closeExpanedAll()))}),(0,f.default)((0,u.default)(i),"resetExpandAll",function(){i.setState({collapseKeySet:new Set})}),(0,f.default)((0,u.default)(i),
"closeExpanedAll",function(){var e=(i.props.screenTreeData||{}).childListMap,r=new Set
Object.entries(e).map(function(e){var t=(0,o.default)(e,2),a=t[0],n=t[1]
Array.isArray(n)&&n.length&&r.add(a)}),i.setState({collapseKeySet:r})}),i.state={collapseKeySet:new Set},i.treeProps={renderItem:e.renderCommentIcon,handleScreenItemActions:{handleExpand:i.handleExpand,handleActivate:i.handleActivate}},i}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidUpdate",value:function(e){if(e.activeCid!==this.props.activeCid){var t=Screen.find(this.props.activeCid)
if(t.parent_cid){var a=this.state.collapseKeySet,n=new Set(a)
a.has(t.parent_cid)&&n.delete(t.parent_cid),this.setState({collapseKeySet:n})}}}},{key:"render",value:function(){var e=this.props,t=e.activeCid,a=e.isSearching,n=e.screenTreeMap,r=e.screenDataMap
return h.default.createElement(h.default.Fragment,null,h.default.createElement(v.default,{collapseKeySet:this.state.collapseKeySet,activeCid:t,isSearching:a,screenTreeMap:n,screenDataMap:r,treeProps:this.treeProps}),h.default.createElement(m.default,{target:document,onKeyDown:this.handleKeyDown}))}}]),t}(h.PureComponent)
t.default=g,(0,f.default)(g,"propTypes",{activeCid:p.default.string,isSearching:p.default.bool,screenTreeData:p.default.object,screenTreeMap:p.default.object,screenDataMap:p.default.object,renderCommentIcon:p.default.func,dispatch:p.default.func})},tjcH:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("yLV6")),l=window.Shake,s=function(){function e(){(0,r.default)(this,e),this.hightTimer=null}return(0,i.default)(e,[{key:"init",value:function(e){var t=this,a=new o.default(e,{touchAction:"auto",inputClass:MB.isMobile()?o.default.TouchInput:null})
a.get("swipe").set({direction:o.default.DIRECTION_ALL,velocity:.05,threshold:50}),a.on("swipeleft",function(e){t.prepareJump(e,"left")}),a.on("swiperight",function(e){t.prepareJump(e,"right")}),a.on("swipeup",function(e){t.prepareJump(e,"up")}),a.on("swipedown",function(e){t.prepareJump(e,"down")}),a.on("press",function(e){t.prepareJump(e,["hold","longpress"])}),a.on("tap",function(e){1===e.tapCount&&t.prepareJump(e,["tap","click"]),2===e.tapCount&&(MB.runner.eventBucket.resetCoolDown(),t.prepareJump(e,[
"dtap","dbclick"]))}),new l({threshold:15}).start(),window.addEventListener("shake",function(e){t.prepareJump(e,"shake")},!1),this.hammertime=a}},{key:"prepareJump",value:function(e,t){var a=MB.runner,n=a.eventBucket,r=a.runnerUtil,i=a.timerHandler,o=a.currentMenu
if(!r.getIsImmersive()){var l=i.getIsPageTimerFired()
if(n.isCoolDown()&&!l){var s,c=$(e.target).closest(".clickable"),u=$(e.target).closest(".ppanel")
if(s=t.includes("shake")?o?$("#pscreen".concat(o)):$(".pcanvas.active"):$(e.target).closest(".pcanvas"),o&&s.data("cid")!==o)return MB.runner.closeMenu()
if(u.length){if(this.panelEventHandler(e,t))return}else if(c.length){var d=Link.find(c.attr("data-link_cid"))
if(d&&t.includes(d.gesture))return MB.runner.j(d)}var f=s.data("cid"),p=Screen.find(f)
if(p){var h=[]
Link.records.forEach(function(e){e.widget_cids===p.cid&&e.sourcestate_cid===p.state_cid&&t.includes(e.gesture)&&h.push(e)})
var m=p.globalLinks(p.state_cid).filter(function(e){return t.includes(e.gesture)})
m.length?MB.runner.j(m[0]):t.includes("hold")&&MB.messageBucket&&!window.parent.webkit?MB.messageBucket.send("settings"):MB.runner.runnerUtil.getIsHighlight()&&this.highlightClickables()}}}}},{key:"panelEventHandler",value:function(e,n){var t=$(e.target).closest(".clickable"),a=$(e.target).closest(".ppanel"),r=a.find(".pstate.active"),i=a.data("cid"),o=Panel.find(i)
if(t.length){var l=Link.find(t.attr("data-link_cid"))
if(!l)return!1
if("prev"===l.target_cid)return MB.runner.j(l),!0
if(n.includes(l.gesture)){if(a[0]===t[0])MB.runner.j(l)
else{var s=Screen.find(l.target_cid)
if(s&&s.project_cid!==o.template_cid)MB.runner.j(l)
else{if(MB.runner.timerHandler.getIsPanelTimerFired(o.cid))return!1
l.targetstate_cid?MB.runner.chameleonTransition(i,l):MB.runner.panelScreenTransition(o.cid,l)}}return!0}}if(MB.runner.timerHandler.getIsPanelTimerFired(o.cid))return!1
var c=Screen.find(r.data("cid"))
if(!c)return!1
var u=null
return c.cwidgets().forEach(function(e){if(!u&&"pg"===e.name){var t=Widgetstate.find(c.state_cid+e.cid)||e,a=Link.find(t.link_cids)
a&&n.includes(a.gesture)&&(a.targetstate_cid?MB.runner.chameleonTransition(i,a):MB.runner.panelScreenTransition(o.cid,a),u=!0)}}),!!u}},{key:"highlightClickables",value:function(){var e=$(".pcanvas.active .region")
e.show(),$(".pcanvas.active .pg").css({display:"flex",opacity:.8}),this.hightTimer=setTimeout(function(){e.hide(),$(".pcanvas.active .pg").css("opacity","0").hide()},400)}},{key:"setupPageGesture",value:function(e){var t=[]
e.clinks().forEach(function(e){"left"!==e.gesture&&"right"!==e.gesture||-1===t.indexOf("pan-y")&&t.push("pan-y"),"up"!==e.gesture&&"down"!==e.gesture||-1===t.indexOf("pan-x")&&t.push("pan-x")})
var a=t.length?t.join(" "):"auto"
this.hammertime.touchAction.actions=a,$(".pcanvas.active .widgets").css("touch-action",a)}}]),e}()
t.default=s},uW4e:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=a("WVP6"),r=a("Ehhz").MODEL_OPERATION_MAP.CommentThread,i=(0,n.createStateStore)([]),o=i.getState,l=i.setState,s=i.wrapEntry,c=function(i,o){return s(function(e,t,a){var n=t.dispatch,r=a&&a.payload
n({type:"reducer:comment-threads:update",payload:i(e,r,o)})})},u={entryMap:{"comment-threads:refresh":c(r.refreshStateList,!1),"comment-threads:save":c(r.saveState,!1),"comment-threads:add":c(r.addState,!1),"comment-threads:add-local":c(r.addState,!0),"comment-threads:update":c(r.updateState,!1),"comment-threads:update-local":c(r.updateState,!0),"comment-threads:delete":c(r.deleteState,!1),"comment-threads:delete-local":c(r.deleteState,!0)},getState:o,setState:l}
t.default=u},udLg:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("Aq2W")),l=n(a("YwNm")),s=n(a("tjcH")),c=n(a("wmEP")),u=function(){function e(){(0,r.default)(this,e),this.eventBucket=new o.default,this.runnerUtil=new l.default,this.eventHandler=new s.default,this.timerHandler=new c.default,this.clearCallbackBucket={},this._bindWindowEvent()}return(0,i.default)(e,[{key:"_bindWindowEvent",value:function(){var e=this
MB.isMobile()&&window.addEventListener("message",function(e){try{if("back"===JSON.parse(e.data).event)1===MB.webpackInterface.store.getState().container.runner.history.length&&MB.messageBucket?MB.messageBucket.send("exit"):MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{transition:{name:"none",delay:0,duration:0}}})}catch(e){}},!1),MB.isMobile()&&(window.onorientationchange&&window.addEventListener("orientationchange",function(){e.reload()}),window.addEventListener(
"resize",function(){"INPUT"!==document.activeElement.tagName&&e.reload()}))}},{key:"init",value:function(e,t){var a=this
MB.event("ga-0","send","pageview",{page:"/workspace/app/preview"}),console.log("runner - init: ",e,t),$("#app").show(),e.setup(),this.eventHandler.init(document.querySelector("#app")),this.currentScreen=this.currentMenu=null,MB.webpackInterface.store.dispatch({type:"runner:generate:widgets-query-map"}),MB.webpackInterface.store.dispatch({type:"entry:runner:init:home-screen",payload:{activeCid:t.cid}})
var n=setTimeout(function(){if(MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen",payload:{screenCid:t.cid}}),$("#simulator .splash").hide(),$("#splash").hide(),MB.webpackInterface.checkLocationHash(),MB.messageBucket){MB.messageBucket.send("ready",JSON.stringify(MB.currentProject.cscreens()))
var e=setTimeout(function(){MB.messageBucket.send("ready",JSON.stringify(MB.currentProject.cscreens()))},5e3)
a.clearCallbackBucket.redundantReady=function(){return clearTimeout(e)}}},1e3)
this.clearCallbackBucket.init=function(){return clearTimeout(n)}}},{key:"clear",value:function(){Object.values(this.clearCallbackBucket).forEach(function(e){return e()}),this.runnerUtil.clear(),this.timerHandler.clear(),MB.webpackInterface.store.dispatch({type:"runner:reset:state"})}},{key:"closeMenu",value:function(e){MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{callback:e}})}},{key:"j",value:function(e){if(e&&e.target_cid!==this.runnerUtil.getCurrentScreen().cid){
this.timerHandler.clear()
var t,a=e.target_cid
if(this.currentMenu)a===this.currentScreen?this.closeMenu():e.targetstate_cid?this.stateTransition(e):this.closeMenu((t=this,function(){return t.j(e)}))
else switch(e.link_type){case Link.TYPE.screen_link:this.screenTransition(e)
break
case Link.TYPE.state_link:this.stateTransition(e)
break
case Link.TYPE.panel_link:var n=Panel.find(e.target_cid)
n.multi_states?this.chameleonTransition(n.cid,e):this.panelScreenTransition(n.cid,e)
break
default:console.error("Unknown Link Type",e)}}}},{key:"screenTransition",value:function(e){var t={name:e.transition,delay:1e3*parseFloat(e.ani_delay),duration:1e3*parseFloat(e.ani_duration),offset:/drawer|menu/.test(e.transition)?e.menu_offset:100},a=e.target_cid
"prev"===a?(console.log("runner - screenTransition: 跳转到上一页"),MB.webpackInterface.store.dispatch({type:"entry:runner:back-to-prev-page",payload:{transition:t}})):(console.log("runner - screenTransition: 跳转到页面: ",Screen.find(a).name),Screen.find(a).orient()!==this.runnerUtil.getCurrentScreen().orient()?MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen",payload:{screenCid:a,resetTargetScreen:e.reset,transition:void 0}}):MB.webpackInterface.store.dispatch({
type:"entry:runner:activate:screen",payload:{screenCid:a,resetTargetScreen:e.reset,transition:t}}))}},{key:"stateTransition",value:function(e){console.log("runner - stateTransition",e)
var t={delay:1e3*parseFloat(e.ani_delay),duration:1e3*parseFloat(e.ani_duration)}
MB.webpackInterface.store.dispatch({type:"entry:runner:activate:screen-state",payload:{screenCid:e.screen_cid,stateCid:e.targetstate_cid,transition:t}})}},{key:"panelScreenTransition",value:function(e,t){console.log("runner - panelScreenTransition: ",e,t)
var a={name:["leftmenu","rightmenu","leftdrawer","rightdrawer"].includes(t.transition)?"none":t.transition,delay:1e3*parseFloat(t.ani_delay),duration:1e3*parseFloat(t.ani_duration),offset:/drawer|menu/.test(t.transition)?t.menu_offset:100}
MB.webpackInterface.store.dispatch({type:"entry:runner:activate:panel-screen",payload:{panelCid:e,panelScreenCid:t.target_cid,transition:a}})}},{key:"chameleonTransition",value:function(e,t){var a=t.targetstate_cid,n=Panel.find(e).ct().homeScreen()
if(n.state_cid!==a){console.log("runner - chameleonTransition: ",a),this.timerHandler.resetPanelTimerFlag(e),n.setState(a,!0)
var r={delay:1e3*parseFloat(t.ani_delay),duration:1e3*parseFloat(t.ani_duration)}
MB.webpackInterface.store.dispatch({type:"entry:runner:update:chameleon",payload:{chameleonCid:e,stateCid:a,transition:r}})}}},{key:"donePanelScreenTransition",value:function(e,t){console.log("runner - donePanelScreenTransition: ",e,t)
var a=document.querySelector("#state"+e+t+"p"),n=Panel.find(e)
this.timerHandler.resetPanelTimerFlag(n.cid),a.offsetParent&&(this.setupPanelWebPage($(a)),this.timerHandler.setupPanelTimers(n,t))}},{key:"doneTransition",value:function(e){console.log("runner - doneTransition: ",e)
var t=Screen.find(e)
this.timerHandler.setupPageTimers(t),this.setupWebpage(t),MB.isStandAlone()&&this.runnerUtil.setupStatusBar(t),MB.isAndroid()&&this.eventHandler.setupPageGesture(t),this.timerHandler.resetPageTimerFlag(),MB.currentScreen=t,MB.webpackInterface.updateCurrentScreenRunner(t),this.runnerUtil.renderScrollbar(t.cid)
var a=MB.isMobile()||MB.isEmbedded()||!this.runnerUtil.getIsScreenExpanded()
this.runnerUtil.toggleScrollBar(a),setTimeout(function(){MB.webpackInterface.store.dispatch({type:"entry:runner:preload:screens"})},10)}},{key:"reload",value:function(){console.log("runner - reload")
var e=this.runnerUtil.getCurrentScreen()
MB.webpackInterface.store.dispatch({type:"entry:runner:reload:screen",payload:{activeCid:e.cid}}),this.runnerUtil.renderScrollbar(e.cid),this.runnerUtil.resetScrollState()}},{key:"setupWebpage",value:function(e){var i=this
e.cpanels().forEach(function(e){$(".pcanvas [data-cid="+e.cid+"]").each(function(e,t){var a=$(t).find(".state.active")
i.setupPanelWebPage(a)})}),e.cwidgets().forEach(function(r){"webpage"===r.name&&$(".pcanvas [data-cid="+r.cid+"]").each(function(e,t){var a=$(t).find(".iframe")[0],n=r.text?r.text.replace(/&amp;/g,"&"):"about:blank"
i.runnerUtil.setObjectUrl(a,n)})})}},{key:"setupPanelWebPage",value:function(a){var n=this
Screen.find(a.data("cid")).cwidgets().forEach(function(e){if("webpage"===e.name&&e.text){var t=a.find("[data-cid="+e.cid+"]")
n.runnerUtil.setObjectUrl(t.find(".iframe")[0],e.text.replace(/&amp;/g,"&"))}})}}]),e}()
t.default=u},v8PR:function(e,t,a){},vRqJ:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=1<arguments.length?arguments[1]:void 0,a=t.type,n=t.payload
switch(a){case"reducer:artboards:success":return(0,r.default)({},e,n)
case"reducer:artboards:fail":return(0,r.default)({},e,n,{error:!0})
default:return e}}
var r=n(a("MVZn")),i={artboards:[],error:!1}},vbsp:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.StyledRadioLine=void 0
var r=n(a("vOnD")).default.ol.withConfig({displayName:"style__StyledRadioLine",componentId:"sc-15893ui-0"})(["display:flex;justify-content:center;height:100%;align-items:center;background:",";color:#7d8694;border-radius:2px;overflow:hidden;text-align:center;border:",";&.radio-line{height:22px;margin-bottom:14px;}.check-line{&.active{background:",";}}&.quick-radius{margin-bottom:0;li:first-child{border-right:",
";}}.radio-option{flex:1;display:flex;width:100%;height:100%;justify-content:center;align-items:center;position:relative;cursor:pointer;.radio-content{display:flex;justify-content:center;align-items:center;position:relative;}.move-cube{&.active{position:absolute;left:0;top:0;width:100%;height:100%;border-left:1px solid ",";border-right:1px solid ",";background:",
";transition:transform 0.2s ease-in-out;}}.main{fill:#7d8694;}.secondary{fill:#c8cdd0;}&.active{color:#298df8;cursor:default;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}&.disabled{color:#c8cdd0;background-color:#f7f7f7;cursor:not-allowed;}&:hover:not(.disabled){color:#298df8;.main{fill:#298df8;}.svg-icon{.secondary{fill:rgba(41,141,248,0.4);}}}}&.disabled{.radio-option{color:#c8cdd0;cursor:not-allowed;svg:only-child,.main{fill:#c8cdd0;}&:hover{color:#c8cdd0;}}.move-cube{&.active{background:"
,";border-left:transparent;border-right:transparent;}}}"],function(e){return e.theme.radioLine.bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.border},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.border_color},function(e){return e.theme.radioLine.active_bg},function(e){return e.theme.radioLine.bg})
t.StyledRadioLine=r},veUc:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.transformLayersFormat=void 0
var d=n(a("MVZn")),u=n(a("RIqP")),f=n(a("SA+Z")),p=a("0k54"),r=a("QDPf")
t.transformLayersFormat=function(e){var t=(0,f.default)(e),a=t[0],n=t.slice(1),r={childrenLayers:[]},i={},o=[],l=[]
n.forEach(function(e){var t=e.id,a=e.panel_cid
"artboard-base"===t?Object.assign(r,e):"number"==typeof t?r.childrenLayers.push(e):a?i[a]?i[a].push(e):i[a]=[e]:"panel"===e.name?o.push(e):l.push(e)}),o.forEach(function(e){return e.childrenLayers=i[e.cid]})
var s=r.childrenLayers.length?[r]:[],c=[].concat(s,o,(0,u.default)(h(l))).sort(function(e,t){return e.z-t.z||e.timestamp-t.timestamp})
return[a].concat((0,u.default)(c))}
var h=function(e){if(0===e.length)return[]
var t=e[0].screen_cid
return(0,r.generateTreeData)(e.map(function(e){return new Widget(e)}),t).widgetTreeData.children.map(function(e){return i(e)})},i=function t(e){var a=e.cid,n=e.type,r=e.widget,i=e.children
if("widget"===n)return r
if("group"===n){var o=(0,p.getTreeBoundingRect)(e),l=o.minX,s=o.minY,c=o.maxX,u=o.maxY
return(0,d.default)({},r,{id:a,width:c-l,height:u-s,top:s,left:l,childrenLayers:i.map(function(e){return t(e)})})}}},vmbo:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("7W2i")),f=r(a("lSNA")),i=r(a("17x9")),b=n(a("q1tI")),S=r(a("TSYQ")),w=a("/5+U"),E=a("l0oT")
a("zZYZ")
var p=function(e){function i(){var e,r;(0,o.default)(this,i)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return r=(0,s.default)(this,(e=(0,c.default)(i)).call.apply(e,[this].concat(a))),(0,f.default)((0,u.default)(r),"onMouseEnter",function(e){-1!==r.props.activeLayerID&&r.props.enterLayer(r.props.layer.id)}),(0,f.default)((0,u.default)(r),"onMouseLeave",function(e){-1!==r.props.activeLayerID&&r.props.enterLayer(-1)}),(0,f.default)((0,u.default)(r),"handleClick",function(){var e=r.props,t=e.requestSelectLayer,a=e.layer.id,n=e.handleShowlayerInfo
t(a),n(!0)}),r}return(0,d.default)(i,e),(0,l.default)(i,[{key:"render",value:function(){var e=this.props,t=e.layer,a=e.activeLayerID,n=e.enteredLayerID,r=e.unit,i=e.ratio,o=t.id,l=t.src_width,s=t.src_height,c=t.rotation||0,u=o===a,d=o===n||-1===n,f=(0,S.default)("Layer",{"is-active":u,"is-focus":d}),p=t.kind?l:l*(0,E.cos)(c)+s*(0,E.sin)(c),h=t.kind?s:l*(0,E.sin)(c)+s*(0,E.cos)(c),m=(0,w.adapterScreen)(p,i),v=(0,w.adapterScreen)(h,i),g=t.kind?(0,w.adapterScreen)(t.origin_width||l,i):(0,w.adapterScreen)(l,i),
y=t.kind?(0,w.adapterScreen)(t.origin_height||s,i):(0,w.adapterScreen)(s,i)
return b.default.createElement("div",{className:f,"data-width":"".concat(m).concat(r),"data-height":"".concat(v).concat(r),"data-lid":o,onClick:this.handleClick,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},u&&b.default.createElement("span",{className:"LayerCorner left top"}),u&&b.default.createElement("span",{className:"LayerCorner left bottom"}),u&&b.default.createElement("span",{className:"LayerCorner right top"}),u&&b.default.createElement("span",{className:"LayerCorner right bottom"}),
u&&0!==c&&b.default.createElement("span",{className:"rect_info"},"".concat(g," x ").concat(y),"  ","".concat(c,"°")))}}]),i}(b.Component)
t.default=p,(0,f.default)(p,"propTypes",{layer:i.default.object,requestSelectLayer:i.default.func,enterLayer:i.default.func,handleShowlayerInfo:i.default.func,activeLayerID:i.default.oneOfType([i.default.number,i.default.string]),enteredLayerID:i.default.oneOfType([i.default.number,i.default.string]),unit:i.default.string,ratio:i.default.number})},wfO3:function(e,t,a){},wmEP:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=n(a("lwsE")),i=n(a("W8MJ")),o=n(a("f7BV")),l=function(){function e(){(0,r.default)(this,e),this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket=new o.default}return(0,i.default)(e,[{key:"resetPageTimerFlag",value:function(){this.timerFired=!1}},{key:"getIsPageTimerFired",value:function(){return this.timerFired}},{key:"getIsPanelTimerFired",value:function(e){return this.panelTimerMap[e]}},{key:"resetPanelTimerFlag",value:function(e){this.panelTimerMap[e]=!1}},{key:"clear",value:function(){
this.timerFired=!1,this.panelTimerMap={},this.timeoutBucket.clear()}},{key:"setupPageTimers",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default"
if(!MB.runner.runnerUtil.getIsImmersive()){this.timeoutBucket.clear()
var r=e.globalLinks(n)
e.citems().forEach(function(e){if("pg"!==e.name){var t="panel"===e.name?Panelstate.find(n+e.cid)||e:Widgetstate.find(n+e.cid)||e,a=Link.find(t.link_cids)
a&&r.push(a)}}),r.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===n)&&t.pageTimer(e)}),e.cpanels().forEach(function(e){t.setupPanelTimers(e,e.mainState().cid)})}}},{key:"setupPanelTimers",value:function(t,n){var a=this
if(this.timeoutBucket.clearTimeoutByKey(t.cid),this.panelTimerMap[t.cid]=!1,t.multi_states){var e=t.ct().homeScreen(),r=e.globalLinks(n)
e.cwidgets().forEach(function(e){if("pg"!==e.name){var t=Widgetstate.find(n+e.cid)||e,a=Link.find(t.link_cids)
a&&r.push(a)}}),r.forEach(function(e){0<parseFloat(e.timer)&&(!e.targetstate_cid||e.sourcestate_cid===n)&&(e.state_cid?a.pageTimer(e):a.panelTimer(e,t))})}else{var i=Screen.find(n)
i.clinks().forEach(function(e){0<parseFloat(e.timer)&&a.panelTimer(e,t)}),Link.findAllByAttribute("state_cid",i.cid).forEach(function(e){0<parseFloat(e.timer)&&a.pageTimer(e)})}}},{key:"pageTimer",value:function(e){var t=this
this.timeoutBucket.setTimeout(e.cid,function(){t.timerFired||(t.timerFired=!0,MB.runner.runnerUtil.getIsImmersive()||MB.runner.j(e))},1e3*parseFloat(e.timer))}},{key:"panelTimer",value:function(e,t){var a=this
this.timeoutBucket.setTimeout(t.cid,function(){a.timerFired||a.panelTimerMap[t.cid]||(a.panelTimerMap[t.cid]=!0,MB.runner.runnerUtil.getIsImmersive()||(e.targetstate_cid?MB.runner.chameleonTransition(t.cid,e):MB.runner.panelScreenTransition(t.cid,e)))},1e3*parseFloat(e.timer))}}]),e}()
t.default=l},xQM3:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.getScreenContainerStyle=function(e,t,a,n,r){var i
if(n){var o,l=Math.min(a.width,a.height),s=Math.max(a.width,a.height),c=Math.min(t.width,t.height),u=Math.max(t.width,t.height),d=e.width!==c,f=a.width>a.height,p=d!==f
i=d?(o=s/u,{width:u,height:Math.min(c,l/o),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(o,")"),transformOrigin:p?"top right":"top left"}):(o=l/c,{width:c,height:Math.min(u,s/o),transform:"".concat(p?"translate(-100%) rotate(-90deg)":""," scale(").concat(o,")"),transformOrigin:p?"top right":"top left"})}else if(r)i={width:e.width,height:e.height}
else{var h="landscape"===e.orientation,m=t.width,v=t.height,g=h?[v,m]:[m,v],y=(0,w.default)(g,2),b=y[0],S=y[1]
i={width:b,height:S}}return i}
var w=n(a("J4zp"))},xUDz:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=n(a("RIqP")),l=n(a("lSNA")),r=a("/MKj"),i=a("/5+U"),s=n(a("o/90")),c=(0,r.connect)(function(e){var t=e.model,a=t.current,n=t.screens,r=e.container,i=r.previewSetting.isFullScreenMode,o=r.common.scale,l=a.screenCid,s=u(n,l),c=d(n,a.projectCid).childListMap
return{screen:s,isFullScreenMode:i,screenInOrder:f(c,"root"),scale:o}})(s.default)
t.default=c
var u=(0,i.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),d=(0,i.immutableTransformCache)(function(e,r){var i={},o=(0,l.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===r){var t=e.cid,a=e.position,n=e.parent_cid||"root"
i[t]=e,void 0===o[n]&&(o[n]=[]),o[n].push({cid:t,position:a})}}),Object.values(o).forEach(function(e){return e.sort(function(e,t){return i[e.cid].position-i[t.cid].position})}),{rootCid:"root",nodeMap:i,childListMap:o}}),f=function n(r,e){var i=[]
return r[e].forEach(function(e){var t=e.cid
if(i.push(t),r[t]){var a=n(r,t)
i.push.apply(i,(0,o.default)(a))}}),i}},xn7q:function(e,t,a){e.exports={previewPanelLayer:"McoEqJKUUcz4r7-DS9tH",layerInfo:"CjM2RPzWdeKb7pXpcipsf"}},"xo+i":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var s=n(a("lSNA")),r=a("/MKj"),i=n(a("h2Vm")),o=a("/5+U"),l=(0,r.connect)(function(e){return{screenTreeData:u(e.model.screens,e.model.current.projectCid),screenCommentThreadCountMap:c(e.model.commentThreads),currentScreenCid:e.model.current.screenCid,screenSearch:e.container.screens.screenSearch}})(i.default)
t.default=l
var c=(0,o.immutableTransformCache)(function(e){return e.reduce(function(e,t){return e[t.screen_cid]=(e[t.screen_cid]||0)+1,e},{})}),u=(0,o.immutableTransformCache)(function(e,r){var i={},o={},l=(0,s.default)({},"root",[])
return e.forEach(function(e){if(e.project_cid===r){var t=e.cid,a=e.position,n=e.parent_cid||"root"
i[t]=e,o[t]=String(e.name).toLowerCase(),void 0===l[n]&&(l[n]=[]),l[n].push({cid:t,position:a})}}),Object.values(l).forEach(function(e){return e.sort(function(e,t){return i[e.cid].position-i[t.cid].position})}),{rootCid:"root",nodeMap:i,childListMap:l,screenNameCidMap:o}})},"xtk/":function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=r(a("lwsE")),o=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("TSYQ")),m=r(a("8CMD")),v=function(e){function t(e){var n
return(0,i.default)(this,t),n=(0,l.default)(this,(0,s.default)(t).call(this,e)),(0,d.default)((0,c.default)(n),"setElementRef",function(e){return n.$elem=e}),(0,d.default)((0,c.default)(n),"updateIsVisible",function(){n.setState({isVisible:n.isInBoundingClientRect()})}),(0,d.default)((0,c.default)(n),"handleClick",function(e){e.stopPropagation()
var t=n.props,a=t.screen;(0,t.onActivate)(a.cid)}),n.state={isVisible:!1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.containerRect&&this.updateIsVisible()}},{key:"componentDidUpdate",value:function(e,t){var a=this.isInBoundingClientRect()
if(!e.containerRect&&this.props.isActive&&!a){var n=this.$elem.getBoundingClientRect()
this.props.scrollIntoView(n)}this.updateIsVisible()}},{key:"isInBoundingClientRect",value:function(){var e=this.props.containerRect
if(!e||!this.$elem)return!1
var t=this.$elem.getBoundingClientRect()
return t.bottom>e.top&&t.top<e.bottom}},{key:"render",value:function(){var e=this.props,t=e.projectToken,a=e.screen,n=e.isEditing,r=e.isHover,i=e.version,o=e.isActive,l=e.treeProps,s=l.renderItem,c=l.renderSpan,u=void 0===c?g:c,d=a.cid,f=this.state.isVisible
return p.default.createElement("li",{className:(0,h.default)("thumbnail-item",{active:o}),onClick:this.handleClick},p.default.createElement("div",{ref:this.setElementRef,className:(0,h.default)("image-wrapper",{hover:r})},s&&s(a),p.default.createElement(m.default,{projectToken:t,screenCid:d,version:i,isVisible:f})),u(a,n))}}]),t}(p.PureComponent);(t.default=v).propTypes={screen:f.default.object,version:f.default.string,isEditing:f.default.bool,isHover:f.default.bool,projectToken:f.default.string,
containerRect:f.default.object,isActive:f.default.bool,onActivate:f.default.func,scrollIntoView:f.default.func,treeProps:f.default.object},v.defaultProps={treeProps:{}}
var g=function(e){return p.default.createElement("span",{className:"screen-name editable-span"},e.name)}},xx4x:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(a("lwsE")),i=r(a("W8MJ")),l=r(a("a1gu")),s=r(a("Nsbk")),c=r(a("PJYZ")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=r(a("DKAG")),m=r(a("ZS4k")),v=r(a("d89S")),g=function(e){function r(){var e,i;(0,o.default)(this,r)
for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
return i=(0,l.default)(this,(e=(0,s.default)(r)).call.apply(e,[this].concat(a))),(0,d.default)((0,c.default)(i),"checkIfNeedHideLayer",function(e){var t=i.props,a=t.isSpaceDown,n=t.requestSelectLayer,r=t.handleShowlayerInfo
!a&&e.target.contains(document.getElementById("simulator-container"))&&(n(-1),r(!1))}),i}return(0,u.default)(r,e),(0,i.default)(r,[{key:"render",value:function(){var e=this.props,t=e.isFetching,a=e.error,n=e.isActive,r=e.isSelectLayer,i=e.isShowColorPicker,o=e.activeLayerID
if(!n)return null
if(t)return null
if(a)return null
var l=-1!==o&&!i
return p.default.createElement("div",null,p.default.createElement(m.default,null),l&&p.default.createElement(v.default,null),r&&p.default.createElement(h.default,{target:document,onClick:this.checkIfNeedHideLayer}))}}]),r}(p.PureComponent);(t.default=g).propTypes={isActive:f.default.bool,isFetching:f.default.bool,isSpaceDown:f.default.bool,isSelectLayer:f.default.bool,isShowColorPicker:f.default.bool,activeLayerID:f.default.oneOfType([f.default.number,f.default.string]),requestSelectLayer:f.default.func,
handleShowlayerInfo:f.default.func,error:f.default.string}},yOnP:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=o
var s=n(a("MVZn")),c=n(a("o0o1")),u=a("oZtI"),d=a("S7Zs"),r=c.default.mark(o),i=c.default.mark(l),f=c.default.mark(p)
function o(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.all)([l()])
case 2:case"end":return e.stop()}},r)}function l(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeEvery)("reducer:artboards:init",p)
case 2:case"end":return e.stop()}},i)}function p(e){var t,a,n,r,i,o,l
return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.select)()
case 2:if(t=e.sent,a=t.model,n=a.current.projectCid,r=a.screens,e.prev=4,i={},r.forEach(function(e){var t=e.width,a=e.height,n=e.cid
i[n]={width:t,height:a}}),n)return e.next=10,(0,u.call)(d.fetchArtboardsByProjectCid,n)
e.next=13
break
case 10:o=e.sent,0<(l=o.artboards).length&&l.forEach(function(e){var t=e.width,a=e.height,n=e.screen_cid
i[n]={width:t,height:a}})
case 13:return i={artboards:i},e.next=16,(0,u.put)({type:"reducer:artboards:success",payload:(0,s.default)({},i)})
case 16:e.next=23
break
case 18:return e.prev=18,e.t0=e.catch(4),console.log(e.t0.stack),e.next=23,(0,u.put)({type:"reducer:artboards:fail"})
case 23:case"end":return e.stop()}},f,null,[[4,18]])}},ycqN:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.PATCH_AUTO_SAVE_RELATED=t.SAVE_NUKE_SEQUENCE=void 0
var r=n(a("o0o1")),i=n(a("yXPU")),o=a("os03"),l=a("XkTy"),s=a("Clcl"),c=window,u=c.$,d=c.MB,f=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
return new Promise(function(e,t){(0,l.alertAsyncBlocked)(a).then(e),setTimeout(t,6e4)}).catch(function(){return setTimeout(function(){return(0,s.POST_REPORT)({type:"Error:alertAsyncBlocked:timeout",option:a})},0)})},p=function(){var t=(0,i.default)(r.default.mark(function e(t){var a,n=arguments
return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=1<n.length&&void 0!==n[1]?n[1]:-255,e.next=3,f({desc:I18N.unknown_error.replace(/%s/i,a),isHTML:!0})
case 3:return window.parent.location.reload(),(0,s.NUKE)(t),e.next=7,(0,o.setTimeoutAsync)(36e5)
case 7:case"end":return e.stop()}},e)}))
return function(e){return t.apply(this,arguments)}}()
t.SAVE_NUKE_SEQUENCE=p
t.PATCH_AUTO_SAVE_RELATED=function(){(0,s.SETUP_REPORT_INTERVAL)({type:"AutoSaver:Socket",getReportObject:function(){return d.AutoSaver.getState()}}),window.onbeforeunload=function(){return d.AutoSaver.getIsEmpty()?void 0:d.isLegacyElectron()?!d.confirmAsync({title:I18N.warning,desc:I18N.data_lost_warning})||void 0:I18N.data_lost_warning},d.myXhr=u.ajaxSettings.xhr(),u.ajaxSettings.xhr=function(){return d.myXhr},u.ajaxSetup({timeout:6e4})}},yl0K:function(e){e.exports={
"// HOSTED_COMMERCIAL_FANGZHENG_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMERCIAL_FANGZHENG_LIST:[{family:"FZLanTingHei",label:"方正兰亭黑",typeList:["regular","light","bold"]},{family:"FZYuan",label:"方正圆体",typeList:["regular","light","bold"]},{family:"FZXinSong",label:"方正新书宋",typeList:["regular"]},{family:"FZKai",label:"方正楷体",typeList:["regular"]},{family:"FZGongYeHei",label:"方正工业黑",typeList:["regular"]},{family:"FZHanZhenGuangBiao",
label:"方正汉真广标",typeList:["regular"]},{family:"FZZongYi",label:"方正综艺体",typeList:["regular"]}],"// HOSTED_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",HOSTED_COMMON_LIST:[{family:"PingFangSC",label:"PingFang SC",limitedDevices:["iphone","ipad","apple_watch"],typeList:["regular","bold"]},{family:"SourceHanSansSC",label:"思源黑体",typeList:["regular","bold"]},{family:"SFUIText",label:"SF UI Text",limitedDevices:["iphone","ipad","apple_watch"],
typeList:["regular","bold"]},{family:"Roboto",label:"Roboto",typeList:["regular","bold"]}],"// WESTERN_COMMON_LIST":"NOTE: this file is script generated, change should be made at 'fe/scripts/generateFontResource.js'",WESTERN_COMMON_LIST:[{family:"Arial",label:"Arial",typeList:["regular","bold"]},{family:"Courier New",label:"Courier New",typeList:["regular","bold"]},{family:"Helvetica",label:"Helvetica",typeList:["regular","light","bold"]},{family:"Times New Roman",label:"Times New Roman",typeList:["regular"
,"bold"]}]}},zZYZ:function(e,t,a){},zgSj:function(e,t,a){"use strict"
var n=a("284h"),r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var v=r(a("MVZn")),i=r(a("pVnL")),o=r(a("lwsE")),l=r(a("W8MJ")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("7W2i")),d=r(a("lSNA")),f=r(a("17x9")),p=n(a("q1tI")),h=a("/MKj"),m=r(a("J2m7")),g=r(a("sxGJ")),y=a("RUem"),b=a("qOCw"),S=a("/5+U"),w=r(a("inTe")),E=r(a("xn7q")),k=function(e){function r(){var t
return(0,o.default)(this,r),(t=(0,s.default)(this,(0,c.default)(r).call(this))).getScrollLayerRef=function(e){return t.layerRef=e},t.state={error:!1},t}return(0,u.default)(r,e),(0,l.default)(r,[{key:"componentDidMount",value:function(){this.clipBoard=new g.default('[data-type="copy"]')}},{key:"componentWillUnmount",value:function(){this.clipBoard.destroy()}},{key:"componentWillReceiveProps",value:function(e){e.screenCid!=this.props.screenCid&&this.props.dispatch({type:"reducer:preview-toolbar:update",
payload:{isSelectLayer:!1}})}},{key:"componentDidUpdate",value:function(e){e.layer&&this.props.layer&&e.layer.id!=this.props.layer.id&&this.layerRef&&(this.layerRef.scrollTop=0)}},{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.error(e)}},{key:"render",value:function(){var e=this.props,t=e.isSelectLayer,a=e.layer,n=this.state.error
return p.default.createElement("div",{className:E.default.previewPanelLayer},a?p.default.createElement("div",{className:E.default.layerInfo,ref:this.getScrollLayerRef},n?p.default.createElement(r.Error,null):p.default.createElement(w.default,(0,i.default)({},this.props,{showGlobal:!t}))):p.default.createElement(y.Loading,null))}}]),r}(p.PureComponent);(0,d.default)(k,"Error",function(){return p.default.createElement("div",null,"Sorry!Error happend, Please refresh it")}),(0,d.default)(k,"propTypes",{
colorUnit:f.default.string.isRequired,isSelectLayer:f.default.bool.isRequired,unit:f.default.string.isRequired,ratio:f.default.number.isRequired,layer:f.default.object,screenCid:f.default.string,dispatch:f.default.func.isRequired})
var C=(0,h.connect)(function(e){var t=e.container,a=t.layers,n=a.activeLayerID,r=a.visibilityScreenID,i=a.resourceByScreen,o=t.previewSetting,l=e.model,s=l.current,c=s.screenCid,u=s.projectCid,d=l.projects,f=o.isSelectLayer,p=x(d,u).device,h=_(f,i,r,n),m=T(i,r,p)
return(0,v.default)({},o,{layer:h},m,{screenCid:c})})(k)
t.default=C
var T=(0,S.immutableTransformCache)(function(e,t,a){var n=[],r=[],i=[],o=[],l=e[t]
if(l){var s=l.layers,c=(0,b.sortScreenLayers)(s)
n=c.screenColor,o=c.globalText,r=l.documentColor,i=l.globalColor}return{screenColor:n,documentColor:r,globalColor:i,globalText:o}}),x=(0,S.immutableTransformCache)(function(e,t){return e.find(function(e){return e.cid===t})}),_=(0,S.immutableTransformCache)(function(e,t,a,n){var r=t[a]
if(!r||r.layers&&0==r.layers.length)return null
var i=r.layers
return e?(0,m.default)(i,function(e){return e.id===n}):(0,v.default)({},i[0])})},zy85:function(e,t,a){e.exports={"runner-control-panel":"_1X_2UmrkGlhWCjY4oDmJxO"}}},[[6,1,0]]])
