import{d as e,r as t,o,e as n,h as a,B as s,l as r,w as l,X as c,j as i,g as u,p as d,ax as h}from"./index.CPcfy5fd.js";import{E as p}from"./el-button.DFafuuzN.js";import{F as f}from"./index.CY-EFrk4.js";import{_ as m}from"vue3_eman_server/js/plugin-vue_export-helper.BCo6x5W8.js";import"./index.BzmTEwIo.js";import"./use-form-common-props.BseJruiQ.js";const v={class:"canvas-dom"},g=["src"],w=m(e({__name:"signature",setup(e){const m=t(""),w=t();let _,y=!1;const k=e=>{let t;if(e.offsetX){const{offsetX:o,offsetY:n}=e;t=[o,n]}else{const{top:o,left:n}=w.value.getBoundingClientRect();t=[e.touches[0].clientX-n,e.touches[0].clientY-o]}return t};let j=0,x=0;const C=e=>{[j,x]=k(e),y=!0},R=e=>{if(y){const[t,o]=k(e);!function(e,t,o,n,a){a.beginPath(),a.globalAlpha=1,a.lineWidth=2,a.strokeStyle="#000",a.moveTo(e,t),a.lineTo(o,n),a.closePath(),a.stroke()}(j,x,t,o,_),j=t,x=o}},E=()=>{y&&(y=!1)};o((()=>{_=w.value.getContext("2d")}));const L=async()=>{if(U(w.value))return void h({type:"warning",message:"当前签名文件为空"});const e=D(w.value.toDataURL(),"签名.png");if(!e)return;const t=await f.upload(e);T(),m.value=t.url},T=()=>{_.clearRect(0,0,w.value.width,w.value.height)},U=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},b=()=>{if(U(w.value))return void h({type:"warning",message:"当前签名文件为空"});const e=document.createElement("a");e.href=w.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},D=(e,t)=>{const o=e.split(",");if(!o.length)return;const n=o[0].match(/:(.*?);/);if(n){const e=atob(o[1]);let a=e.length;const s=new Uint8Array(a);for(;a--;)s[a]=e.charCodeAt(a);return new File([s],t,{type:n[1]})}};return(e,t)=>{const o=p;return n(),a("div",v,[t[3]||(t[3]=s("h3",null,"基于canvas实现的签名组件",-1)),s("header",null,[r(o,{type:"primary",onClick:b},{default:l((()=>t[0]||(t[0]=[c("保存为图片")]))),_:1}),r(o,{onClick:L},{default:l((()=>t[1]||(t[1]=[c("保存到后端")]))),_:1}),r(o,{onClick:T},{default:l((()=>t[2]||(t[2]=[c("清空签名")]))),_:1})]),s("canvas",{ref_key:"canvas",ref:w,height:"200",width:"500",onMousedown:C,onMousemove:i(R,["stop","prevent"]),onMouseup:E,onTouchstart:C,onTouchmove:i(R,["stop","prevent"]),onTouchend:E},null,544),u(m)?(n(),a("img",{key:0,src:u(m),alt:"签名"},null,8,g)):d("",!0)])}}}),[["__scopeId","data-v-18a13f8a"]]);export{w as default};