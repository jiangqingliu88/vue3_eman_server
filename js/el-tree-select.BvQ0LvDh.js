import{a as e,E as t}from"./el-select.DlbtOjyU.js";import{E as l}from"./el-tree.Bpu2x_8u.js";import{b as a,I as s,U as o,cb as d,c as n,d as r,F as c,ac as i,bL as u,N as p,cO as h,A as v,H as f,r as k,S as m,o as y,a6 as C,_ as b,q as N}from"./index.CPcfy5fd.js";import{U as g}from"./event.CIKxL71l.js";import{p as x}from"./index.BO5voRhJ.js";import{e as K}from"./strings.C3l49zS7.js";import{i as O}from"./isEqual.wucDy0nb.js";import{s as E}from"./token.DWNpOE8r.js";const j=r({extends:t,setup(e,l){const a=t.setup(e,l);delete a.selectOptionClick;const d=c().proxy;return o((()=>{a.select.states.cachedOptions.get(d.value)||a.select.onOptionCreate(d)})),s((()=>l.attrs.visible),(e=>{a.states.visible=e}),{immediate:!0}),a},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function V(e){return e||0===e}function S(e){return i(e)&&e.length}function A(e){return i(e)?e:V(e)?[e]:[]}function M(e,t,l,a,s){for(let o=0;o<e.length;o++){const d=e[o];if(t(d,o,e,s))return a?a(d,o,e,s):d;{const e=l(d);if(S(e)){const s=M(e,t,l,a,d);if(s)return s}}}}function w(e,t,l,a){for(let s=0;s<e.length;s++){const o=e[s];t(o,s,e,a);const d=l(o);S(d)&&w(d,t,l,o)}}var L=r({props:{data:{type:Array,default:()=>[]}},setup(e){const t=v(E);return s((()=>e.data),(()=>{var l;e.data.forEach((e=>{t.states.cachedOptions.has(e.value)||t.states.cachedOptions.set(e.value,e)}));const a=(null==(l=t.selectRef)?void 0:l.querySelectorAll("input"))||[];f&&!Array.from(a).includes(document.activeElement)&&t.setSelected()}),{flush:"post",immediate:!0}),()=>{}}});const H=N(b(r({name:"ElTreeSelect",inheritAttrs:!1,props:{...e.props,...l.props,cacheData:{type:Array,default:()=>[]}},setup(t,r){const{slots:c,expose:i}=r,v=k(),f=k(),b=n((()=>t.nodeKey||t.valueKey||"value")),N=((t,{attrs:l,emit:r},{select:c,tree:i,key:u})=>{const p=a("tree-select");return s((()=>t.data),(()=>{t.filterable&&o((()=>{var e,t;null==(t=i.value)||t.filter(null==(e=c.value)?void 0:e.states.inputValue)}))}),{flush:"post"}),{...x(d(t),Object.keys(e.props)),...l,"onUpdate:modelValue":e=>r(g,e),valueKey:u,popperClass:n((()=>{const e=[p.e("popper")];return t.popperClass&&e.push(t.popperClass),e.join(" ")})),filterMethod:(e="")=>{var l;t.filterMethod?t.filterMethod(e):t.remoteMethod?t.remoteMethod(e):null==(l=i.value)||l.filter(e)}}})(t,r,{select:v,tree:f,key:b}),{cacheOptions:E,...H}=((e,{attrs:t,slots:a,emit:r},{select:c,tree:i,key:v})=>{s((()=>e.modelValue),(()=>{e.showCheckbox&&o((()=>{const t=i.value;t&&!O(t.getCheckedKeys(),A(e.modelValue))&&t.setCheckedKeys(A(e.modelValue))}))}),{immediate:!0,deep:!0});const f=n((()=>({value:v.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props}))),k=(e,t)=>{var l;const a=f.value[e];return u(a)?a(t,null==(l=i.value)?void 0:l.getNode(k("value",t))):t[a]},m=A(e.modelValue).map((t=>M(e.data||[],(e=>k("value",e)===t),(e=>k("children",e)),((e,t,l,a)=>a&&k("value",a))))).filter((e=>V(e))),y=n((()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const t=[];return w(e.data.concat(e.cacheData),(e=>{const l=k("value",e);t.push({value:l,currentLabel:k("label",e),isDisabled:k("disabled",e)})}),(e=>k("children",e))),t})),C=()=>{var e;return null==(e=i.value)?void 0:e.getCheckedKeys().filter((e=>{var t;const l=null==(t=i.value)?void 0:t.getNode(e);return!p(l)&&h(l.childNodes)}))};return{...x(d(e),Object.keys(l.props)),...t,nodeKey:v,expandOnClickNode:n((()=>!e.checkStrictly&&e.expandOnClickNode)),defaultExpandedKeys:n((()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(m):m)),renderContent:(t,{node:l,data:s,store:o})=>t(j,{value:k("value",s),label:k("label",s),disabled:k("disabled",s),visible:l.visible},e.renderContent?()=>e.renderContent(t,{node:l,data:s,store:o}):a.default?()=>a.default({node:l,data:s,store:o}):void 0),filterNodeMethod:(t,l,a)=>e.filterNodeMethod?e.filterNodeMethod(t,l,a):!t||new RegExp(K(t),"i").test(k("label",l)||""),onNodeClick:(l,a,s)=>{var o,d,n,r;if(null==(o=t.onNodeClick)||o.call(t,l,a,s),!e.showCheckbox||!e.checkOnClickNode){if(e.showCheckbox||!e.checkStrictly&&!a.isLeaf)e.expandOnClickNode&&s.proxy.handleExpandIconClick();else if(!k("disabled",l)){const e=null==(d=c.value)?void 0:d.states.options.get(k("value",l));null==(n=c.value)||n.handleOptionSelect(e)}null==(r=c.value)||r.focus()}},onCheck:(l,a)=>{var s;if(!e.showCheckbox)return;const d=k("value",l),n={};w([i.value.store.root],(e=>n[e.key]=e),(e=>e.childNodes));const u=a.checkedKeys,p=e.multiple?A(e.modelValue).filter((e=>!(e in n)&&!u.includes(e))):[],h=p.concat(u);if(e.checkStrictly)r(g,e.multiple?h:h.includes(d)?d:void 0);else if(e.multiple){const e=C();r(g,p.concat(e))}else{const t=M([l],(e=>!S(k("children",e))&&!k("disabled",e)),(e=>k("children",e))),a=t?k("value",t):void 0,s=V(e.modelValue)&&!!M([l],(t=>k("value",t)===e.modelValue),(e=>k("children",e)));r(g,a===e.modelValue||s?void 0:a)}o((()=>{var a;const s=A(e.modelValue);i.value.setCheckedKeys(s),null==(a=t.onCheck)||a.call(t,l,{checkedKeys:i.value.getCheckedKeys(),checkedNodes:i.value.getCheckedNodes(),halfCheckedKeys:i.value.getHalfCheckedKeys(),halfCheckedNodes:i.value.getHalfCheckedNodes()})})),null==(s=c.value)||s.focus()},onNodeExpand:(l,a,s)=>{var d;null==(d=t.onNodeExpand)||d.call(t,l,a,s),o((()=>{if(!e.checkStrictly&&e.lazy&&e.multiple&&a.checked){const t={},l=i.value.getCheckedKeys();w([i.value.store.root],(e=>t[e.key]=e),(e=>e.childNodes));const a=A(e.modelValue).filter((e=>!(e in t)&&!l.includes(e))),s=C();r(g,a.concat(s))}}))},cacheOptions:y}})(t,r,{select:v,tree:f,key:b}),D=m({});return i(D),y((()=>{Object.assign(D,{...x(f.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...x(v.value,["focus","blur","selectedLabel"])})})),()=>C(e,m({...N,ref:e=>v.value=e}),{...c,default:()=>[C(L,{data:E.value}),C(l,m({...H,ref:e=>f.value=e}))]})}}),[["__file","tree-select.vue"]]));export{H as E};