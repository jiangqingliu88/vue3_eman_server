import{S as n,k as r}from"./Uint8Array.DxW3ztND.js";import{b as t}from"./isEqual.wucDy0nb.js";import{bh as u,cG as i,c4 as o,cy as e,c6 as f,c2 as a}from"./index.CPcfy5fd.js";import{h as c,c as s}from"./index.BO5voRhJ.js";function l(n){return n==n&&!u(n)}function v(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function m(u){var i=function(n){for(var t=r(n),u=t.length;u--;){var i=t[u],o=n[i];t[u]=[i,o,l(o)]}return t}(u);return 1==i.length&&i[0][2]?v(i[0][0],i[0][1]):function(r){return r===u||function(r,u,i,o){var e=i.length,f=e;if(null==r)return!f;for(r=Object(r);e--;){var a=i[e];if(a[2]?a[1]!==r[a[0]]:!(a[0]in r))return!1}for(;++e<f;){var c=(a=i[e])[0],s=r[c],l=a[1];if(a[2]){if(void 0===s&&!(c in r))return!1}else{var v=new n;if(!t(l,s,3,o,v))return!1}}return!0}(r,0,i)}}function j(n){return i(n)?(r=o(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return f(r,n)}}(n);var r}function p(n){return"function"==typeof n?n:null==n?s:"object"==typeof n?a(n)?(r=n[0],u=n[1],i(r)&&l(u)?v(o(r),u):function(n){var i=e(n,r);return void 0===i&&i===u?c(n,r):t(u,i,3)}):m(n):j(n);var r,u}export{p as b};
