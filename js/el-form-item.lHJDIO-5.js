import{a as e,g as r,f as t,d as n}from"./use-form-common-props.BseJruiQ.js";import{bh as a,ci as i,cj as o,c9 as s,c1 as u,b$ as l,c2 as f,t as c,aR as d,z as p,ac as v,M as y,by as g,r as h,c as m,d as b,b as j,I as w,y as q,S as F,cb as O,e as x,h as A,k as E,i as P,g as S,_ as k,bL as I,A as R,o as $,a5 as B,bw as M,aa as _,l as V,Q as W,U as D,b9 as z,ck as C,J as N,cl as L,w as T,f as U,C as G,n as J,X as Z,D as Q,p as X,B as Y,aG as H,q as K,G as ee}from"./index.CPcfy5fd.js";import{c as re}from"./castArray.C6a8QyiS.js";import{d as te,t as ne}from"./event.CIKxL71l.js";import{i as ae,a as ie,b as oe,o as se,k as ue,g as le,s as fe,c as ce,U as de,d as pe,n as ve,e as ye,f as ge,S as he,h as me}from"vue3_eman_server/js/Uint8Array.DxW3ztND.js";import{a as be}from"./index.BO5voRhJ.js";var je=Object.create,we=function(){function e(){}return function(r){if(!a(r))return{};if(je)return je(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function qe(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Fe(e,r,t,n){var a=!t;t||(t={});for(var s=-1,u=r.length;++s<u;){var l=r[s],f=void 0;void 0===f&&(f=e[l]),a?i(t,l,f):o(t,l,f)}return t}var Oe=Object.prototype.hasOwnProperty;function xe(e){if(!a(e))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(e);var r=ae(e),t=[];for(var n in e)("constructor"!=n||!r&&Oe.call(e,n))&&t.push(n);return t}function Ae(e){return ie(e)?oe(e,!0):xe(e)}var Ee=se(Object.getPrototypeOf,Object);var Pe="object"==typeof exports&&exports&&!exports.nodeType&&exports,Se=Pe&&"object"==typeof module&&module&&!module.nodeType&&module,ke=Se&&Se.exports===Pe?s.Buffer:void 0,Ie=ke?ke.allocUnsafe:void 0;function Re(e,r){if(r)return e.slice();var t=e.length,n=Ie?Ie(t):new e.constructor(t);return e.copy(n),n}var $e=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)be(r,le(e)),e=Ee(e);return r}:fe;function Be(e){return ce(e,Ae,$e)}var Me=Object.prototype.hasOwnProperty;function _e(e){var r=new e.constructor(e.byteLength);return new de(r).set(new de(e)),r}var Ve=/\w*$/;var We=u?u.prototype:void 0,De=We?We.valueOf:void 0;function ze(e,r){var t=r?_e(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function Ce(e,r,t){var n,a,i,o=e.constructor;switch(r){case"[object ArrayBuffer]":return _e(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,r){var t=r?_e(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ze(e,t);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return(i=new(a=e).constructor(a.source,Ve.exec(a))).lastIndex=a.lastIndex,i;case"[object Symbol]":return n=e,De?Object(De.call(n)):{}}}function Ne(e){return"function"!=typeof e.constructor||ae(e)?{}:we(Ee(e))}var Le=ve&&ve.isMap,Te=Le?ye(Le):function(e){return l(e)&&"[object Map]"==pe(e)};var Ue=ve&&ve.isSet,Ge=Ue?ye(Ue):function(e){return l(e)&&"[object Set]"==pe(e)},Je="[object Arguments]",Ze="[object Function]",Qe="[object Object]",Xe={};function Ye(e,r,t,n,i,s){var u,l=1&r,c=2&r,d=4&r;if(void 0!==u)return u;if(!a(e))return e;var p=f(e);if(p){if(u=function(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&Me.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!l)return qe(e,u)}else{var v=pe(e),y=v==Ze||"[object GeneratorFunction]"==v;if(ge(e))return Re(e,l);if(v==Qe||v==Je||y&&!i){if(u=c||y?{}:Ne(e),!l)return c?function(e,r){return Fe(e,$e(e),r)}(e,function(e,r){return e&&Fe(r,Ae(r),e)}(u,e)):function(e,r){return Fe(e,le(e),r)}(e,function(e,r){return e&&Fe(r,ue(r),e)}(u,e))}else{if(!Xe[v])return i?e:{};u=Ce(e,v,l)}}s||(s=new he);var g=s.get(e);if(g)return g;s.set(e,u),Ge(e)?e.forEach((function(n){u.add(Ye(n,r,t,n,e,s))})):Te(e)&&e.forEach((function(n,a){u.set(a,Ye(n,r,t,a,e,s))}));var h=p?void 0:(d?c?Be:me:c?Ae:ue)(e);return function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););}(h||e,(function(n,a){h&&(n=e[a=n]),o(u,a,Ye(n,r,t,a,e,s))})),u}Xe[Je]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object DataView]"]=Xe["[object Boolean]"]=Xe["[object Date]"]=Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe[Qe]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object Symbol]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Error]"]=Xe[Ze]=Xe["[object WeakMap]"]=!1;function He(e){return Ye(e,4)}const Ke=c({size:{type:String,values:d},disabled:Boolean}),er=c({...Ke,model:Object,rules:{type:p(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),rr={validate:(e,r,t)=>(v(e)||y(e))&&g(r)&&y(t)};function tr(){const e=h([]),r=m((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const a=t(n);e.value.splice(a,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const nr=(e,r)=>{const t=re(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},ar=b({name:"ElForm"});var ir=k(b({...ar,props:er,emits:rr,setup(t,{expose:n,emit:a}){const i=t,o=[],s=e(),u=j("form"),l=m((()=>{const{labelPosition:e,inline:r}=i;return[u.b(),u.m(s.value||"default"),{[u.m(`label-${e}`)]:e,[u.m("inline")]:r}]})),f=(e=[])=>{i.model&&nr(o,e).forEach((e=>e.resetField()))},c=(e=[])=>{nr(o,e).forEach((e=>e.clearValidate()))},d=m((()=>!!i.model)),p=async e=>y(void 0,e),v=async(e=[])=>{if(!d.value)return!1;const r=(e=>{if(0===o.length)return[];const r=nr(o,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{await a.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},y=async(e=[],r)=>{const t=!I(r);try{const t=await v(e);return!0===t&&await(null==r?void 0:r(t)),t}catch(n){if(n instanceof Error)throw n;const e=n;return i.scrollToError&&g(Object.keys(e)[0]),await(null==r?void 0:r(!1,e)),t&&Promise.reject(e)}},g=e=>{var r;const t=nr(o,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView(i.scrollIntoViewOptions))};return w((()=>i.rules),(()=>{i.validateOnRuleChange&&p().catch((e=>te()))}),{deep:!0}),q(r,F({...O(i),emit:a,resetFields:f,clearValidate:c,validateField:y,getField:e=>o.find((r=>r.prop===e)),addField:e=>{o.push(e)},removeField:e=>{e.prop&&o.splice(o.indexOf(e),1)},...tr()})),n({validate:p,validateField:y,resetFields:f,clearValidate:c,scrollToField:g,fields:o}),(e,r)=>(x(),A("form",{class:P(S(l))},[E(e.$slots,"default")],2))}}),[["__file","form.vue"]]);function or(){return or=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},or.apply(this,arguments)}function sr(e){return(sr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ur(e,r){return(ur=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function lr(e,r,t){return(lr=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&ur(a,t.prototype),a}).apply(null,arguments)}function fr(e){var r="function"==typeof Map?new Map:void 0;return fr=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return lr(e,arguments,sr(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ur(n,e)},fr(e)}var cr=/%[sdj%]/g,dr=function(){};function pr(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function vr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(cr,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}})):e}function yr(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function gr(e,r,t){var n=0,a=e.length;!function i(o){if(o&&o.length)t(o);else{var s=n;n+=1,s<a?r(e[s],i):t([])}}([])}var hr=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,ur(r,t),n}(fr(Error));function mr(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var o=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);gr(o,t,(function(e){return n(e),e.length?i(new hr(e,pr(e))):r(a)}))}));return i.catch((function(e){return e})),i}var o=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),u=s.length,l=0,f=[],c=new Promise((function(r,i){var c=function(e){if(f.push.apply(f,e),++l===u)return n(f),f.length?i(new hr(f,pr(f))):r(a)};s.length||(n(f),r(a)),s.forEach((function(r){var n=e[r];-1!==o.indexOf(r)?gr(n,t,c):function(e,r,t){var n=[],a=0,i=e.length;function o(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,o)}))}(n,t,c)}))}));return c.catch((function(e){return e})),c}function br(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function jr(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=or({},e[t],n):e[t]=n}return e}var wr,qr=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!yr(r,i||e.type)||n.push(vr(a.messages.required,e.fullField))},Fr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,Or=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,xr={integer:function(e){return xr.number(e)&&parseInt(e,10)===e},float:function(e){return xr.number(e)&&!xr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!xr.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Fr)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(wr)return wr;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),o=new RegExp("^"+t+"$"),s=new RegExp("^"+a+"$"),u=function(e){return e&&e.exact?i:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+a+r(e)+")","g")};u.v4=function(e){return e&&e.exact?o:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+a+r(e),"g")};var l=u.v4().source,f=u.v6().source;return wr=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+l+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(Or)}},Ar="enum",Er={required:qr,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(vr(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)qr(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?xr[i](r)||n.push(vr(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(vr(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,o="number"==typeof e.min,s="number"==typeof e.max,u=r,l=null,f="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(f?l="number":c?l="string":d&&(l="array"),!l)return!1;d&&(u=r.length),c&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?u!==e.len&&n.push(vr(a.messages[l].len,e.fullField,e.len)):o&&!s&&u<e.min?n.push(vr(a.messages[l].min,e.fullField,e.min)):s&&!o&&u>e.max?n.push(vr(a.messages[l].max,e.fullField,e.max)):o&&s&&(u<e.min||u>e.max)&&n.push(vr(a.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e[Ar]=Array.isArray(e[Ar])?e[Ar]:[],-1===e[Ar].indexOf(r)&&n.push(vr(a.messages[Ar],e.fullField,e[Ar].join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(vr(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(vr(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Pr=function(e,r,t,n,a){var i=e.type,o=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r,i)&&!e.required)return t();Er.required(e,r,n,o,a,i),yr(r,i)||Er.type(e,r,n,o,a)}t(o)},Sr={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r,"string")&&!e.required)return t();Er.required(e,r,n,i,a,"string"),yr(r,"string")||(Er.type(e,r,n,i,a),Er.range(e,r,n,i,a),Er.pattern(e,r,n,i,a),!0===e.whitespace&&Er.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&Er.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&(Er.type(e,r,n,i,a),Er.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&Er.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),yr(r)||Er.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&(Er.type(e,r,n,i,a),Er.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&(Er.type(e,r,n,i,a),Er.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Er.required(e,r,n,i,a,"array"),null!=r&&(Er.type(e,r,n,i,a),Er.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&Er.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a),void 0!==r&&Er.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r,"string")&&!e.required)return t();Er.required(e,r,n,i,a),yr(r,"string")||Er.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r,"date")&&!e.required)return t();var o;if(Er.required(e,r,n,i,a),!yr(r,"date"))o=r instanceof Date?r:new Date(r),Er.type(e,o,n,i,a),o&&Er.range(e,o.getTime(),n,i,a)}t(i)},url:Pr,hex:Pr,email:Pr,required:function(e,r,t,n,a){var i=[],o=Array.isArray(r)?"array":typeof r;Er.required(e,r,n,i,a,o),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(yr(r)&&!e.required)return t();Er.required(e,r,n,i,a)}t(i)}};function kr(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Ir=kr(),Rr=function(){function e(e){this.rules=null,this._messages=Ir,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=jr(kr(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,o=t,s=n;if("function"==typeof o&&(s=o,o={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,i),Promise.resolve(i);if(o.messages){var u=this.messages();u===Ir&&(u=kr()),jr(u,o.messages),o.messages=u}else o.messages=this.messages();var l={};(o.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var o=t;"function"==typeof o.transform&&(i===r&&(i=or({},i)),n=i[e]=o.transform(n)),(o="function"==typeof o?{validator:o}:or({},o)).validator=a.getValidationMethod(o),o.validator&&(o.field=e,o.fullField=o.fullField||e,o.type=a.getType(o),l[e]=l[e]||[],l[e].push({rule:o,value:n,source:i,field:e}))}))}));var f={};return mr(l,o,(function(r,t){var n,a=r.rule,s=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function u(e,r){return or({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function l(n){void 0===n&&(n=[]);var l=Array.isArray(n)?n:[n];!o.suppressWarning&&l.length&&e.warning("async-validator:",l),l.length&&void 0!==a.message&&(l=[].concat(a.message));var c=l.map(br(a,i));if(o.first&&c.length)return f[a.field]=1,t(c);if(s){if(a.required&&!r.value)return void 0!==a.message?c=[].concat(a.message).map(br(a,i)):o.error&&(c=[o.error(a,vr(o.messages.required,a.field))]),t(c);var d={};a.defaultField&&Object.keys(r.value).map((function(e){d[e]=a.defaultField})),d=or({},d,r.rule.fields);var p={};Object.keys(d).forEach((function(e){var r=d[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(o.messages),r.rule.options&&(r.rule.options.messages=o.messages,r.rule.options.error=o.error),v.validate(r.value,r.rule.options||o,(function(e){var r=[];c&&c.length&&r.push.apply(r,c),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(c)}if(s=s&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator)n=a.asyncValidator(a,r.value,l,r.source,o);else if(a.validator){try{n=a.validator(a,r.value,l,r.source,o)}catch(c){console.error,o.suppressValidatorError||setTimeout((function(){throw c}),0),l(c.message)}!0===n?l():!1===n?l("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?l(n):n instanceof Error&&l(n.message)}n&&n.then&&n.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},o=0;o<e.length;o++)r=e[o],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=pr(n),s(n,a)):s(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!Sr.hasOwnProperty(e.type))throw new Error(vr("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?Sr.required:Sr[this.getType(e)]||void 0},e}();Rr.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");Sr[e]=r},Rr.warning=dr,Rr.messages=Ir,Rr.validators=Sr;const $r=c({label:String,labelWidth:{type:[String,Number],default:""},labelPosition:{type:String,values:["left","right","top",""],default:""},prop:{type:p([String,Array])},required:{type:Boolean,default:void 0},rules:{type:p([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:d}}),Br="ElLabelWrap";var Mr=b({name:Br,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:n}){const a=R(r,void 0),i=R(t);i||ne(Br,"usage: <el-form-item><label-wrap /></el-form-item>");const o=j("form"),s=h(),u=h(0),l=(r="update")=>{D((()=>{n.default&&e.isAutoWidth&&("update"===r?u.value=(()=>{var e;if(null==(e=s.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===r&&(null==a||a.deregisterLabelWidth(u.value)))}))},f=()=>l("update");return $((()=>{f()})),B((()=>{l("remove")})),M((()=>f())),w(u,((r,t)=>{e.updateAll&&(null==a||a.registerLabelWidth(r,t))})),_(m((()=>{var e,r;return null!=(r=null==(e=s.value)?void 0:e.firstElementChild)?r:null})),f),()=>{var r,t;if(!n)return null;const{isAutoWidth:l}=e;if(l){const e=null==a?void 0:a.autoLabelWidth,t={};if((null==i?void 0:i.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-u.value),n=i.labelPosition||a.labelPosition;r&&(t["left"===n?"marginRight":"marginLeft"]=`${r}px`)}return V("div",{ref:s,class:[o.be("item","label-wrap")],style:t},[null==(r=n.default)?void 0:r.call(n)])}return V(W,{ref:s},[null==(t=n.default)?void 0:t.call(n)])}}});const _r=b({name:"ElFormItem"});var Vr=k(b({..._r,props:$r,setup(a,{expose:i}){const o=a,s=z(),u=R(r,void 0),l=R(t,void 0),f=e(void 0,{formItem:!1}),c=j("form-item"),d=n().value,p=h([]),b=h(""),k=C(b,100),M=h(""),_=h();let W,K=!1;const ee=m((()=>o.labelPosition||(null==u?void 0:u.labelPosition))),te=m((()=>{if("top"===ee.value)return{};const e=N(o.labelWidth||(null==u?void 0:u.labelWidth)||"");return e?{width:e}:{}})),ne=m((()=>{if("top"===ee.value||(null==u?void 0:u.inline))return{};if(!o.label&&!o.labelWidth&&ce)return{};const e=N(o.labelWidth||(null==u?void 0:u.labelWidth)||"");return o.label||s.label?{}:{marginLeft:e}})),ae=m((()=>[c.b(),c.m(f.value),c.is("error","error"===b.value),c.is("validating","validating"===b.value),c.is("success","success"===b.value),c.is("required",ye.value||o.required),c.is("no-asterisk",null==u?void 0:u.hideRequiredAsterisk),"right"===(null==u?void 0:u.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[c.m("feedback")]:null==u?void 0:u.statusIcon,[c.m(`label-${ee.value}`)]:ee.value}])),ie=m((()=>g(o.inlineMessage)?o.inlineMessage:(null==u?void 0:u.inlineMessage)||!1)),oe=m((()=>[c.e("error"),{[c.em("error","inline")]:ie.value}])),se=m((()=>o.prop?y(o.prop)?o.prop:o.prop.join("."):"")),ue=m((()=>!(!o.label&&!s.label))),le=m((()=>o.for||(1===p.value.length?p.value[0]:void 0))),fe=m((()=>!le.value&&ue.value)),ce=!!l,de=m((()=>{const e=null==u?void 0:u.model;if(e&&o.prop)return L(e,o.prop).value})),pe=m((()=>{const{required:e}=o,r=[];o.rules&&r.push(...re(o.rules));const t=null==u?void 0:u.rules;if(t&&o.prop){const e=L(t,o.prop).value;e&&r.push(...re(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,a]of t)n.required!==e&&(r[a]={...n,required:e});else r.push({required:e})}return r})),ve=m((()=>pe.value.length>0)),ye=m((()=>pe.value.some((e=>e.required)))),ge=m((()=>{var e;return"error"===k.value&&o.showMessage&&(null==(e=null==u?void 0:u.showMessage)||e)})),he=m((()=>`${o.label||""}${(null==u?void 0:u.labelSuffix)||""}`)),me=e=>{b.value=e},be=async e=>{const r=se.value;return new Rr({[r]:e}).validate({[r]:de.value},{firstFields:!0}).then((()=>(me("success"),null==u||u.emit("validate",o.prop,!0,""),!0))).catch((e=>((e=>{var r,t;const{errors:n,fields:a}=e;me("error"),M.value=n?null!=(t=null==(r=null==n?void 0:n[0])?void 0:r.message)?t:`${o.prop} is required`:"",null==u||u.emit("validate",o.prop,!1,M.value)})(e),Promise.reject(e))))},je=async(e,r)=>{if(K||!o.prop)return!1;const t=I(r);if(!ve.value)return null==r||r(!1),!1;const n=(e=>pe.value.filter((r=>!r.trigger||!e||(v(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===n.length?(null==r||r(!0),!0):(me("validating"),be(n).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:n}=e;return null==r||r(!1,n),!t&&Promise.reject(n)})))},we=()=>{me(""),M.value="",K=!1},qe=async()=>{const e=null==u?void 0:u.model;if(!e||!o.prop)return;const r=L(e,o.prop);K=!0,r.value=He(W),await D(),we(),K=!1};w((()=>o.error),(e=>{M.value=e||"",me(e?"error":"")}),{immediate:!0}),w((()=>o.validateStatus),(e=>me(e||"")));const Fe=F({...O(o),$el:_,size:f,validateState:b,labelId:d,inputIds:p,isGroup:fe,hasLabel:ue,fieldValue:de,addInputId:e=>{p.value.includes(e)||p.value.push(e)},removeInputId:e=>{p.value=p.value.filter((r=>r!==e))},resetField:qe,clearValidate:we,validate:je});return q(t,Fe),$((()=>{o.prop&&(null==u||u.addField(Fe),W=He(de.value))})),B((()=>{null==u||u.removeField(Fe)})),i({size:f,validateMessage:M,validateState:b,validate:je,clearValidate:we,resetField:qe}),(e,r)=>{var t;return x(),A("div",{ref_key:"formItemRef",ref:_,class:P(S(ae)),role:S(fe)?"group":void 0,"aria-labelledby":S(fe)?S(d):void 0},[V(S(Mr),{"is-auto-width":"auto"===S(te).width,"update-all":"auto"===(null==(t=S(u))?void 0:t.labelWidth)},{default:T((()=>[S(ue)?(x(),U(G(S(le)?"label":"div"),{key:0,id:S(d),for:S(le),class:P(S(c).e("label")),style:J(S(te))},{default:T((()=>[E(e.$slots,"label",{label:S(he)},(()=>[Z(Q(S(he)),1)]))])),_:3},8,["id","for","class","style"])):X("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),Y("div",{class:P(S(c).e("content")),style:J(S(ne))},[E(e.$slots,"default"),V(H,{name:`${S(c).namespace.value}-zoom-in-top`},{default:T((()=>[S(ge)?E(e.$slots,"error",{key:0,error:M.value},(()=>[Y("div",{class:P(S(oe))},Q(M.value),3)])):X("v-if",!0)])),_:3},8,["name"])],6)],10,["role","aria-labelledby"])}}}),[["__file","form-item.vue"]]);const Wr=K(ir,{FormItem:Vr}),Dr=ee(Vr);export{Wr as E,Dr as a,qe as b,Fe as c,Re as d,ze as e,Ye as f,Ee as g,Ne as i,Ae as k};
