import{d as e,aI as a,r as s,o as t,I as l,g as o,e as n,f as r,w as i,X as u,D as d,h as p}from"./index.CPcfy5fd.js";/* empty css               */import{E as c}from"./index.C0I96C1I.js";const m={key:1},g=e({__name:"DictLabel",props:{code:String,modelValue:[String,Number],size:{type:String,default:"default"}},setup(e){const g=a(),y=e,f=s(""),b=s(),v=s(y.size),z=async()=>{const e=await(async(e,a)=>{const s=g.getDictionary(e).find((e=>e.value==a));return{label:s?s.label:"",tag:s?s.tagType:void 0}})(y.code,y.modelValue);f.value=e.label,b.value=e.tag};return t(z),l((()=>y.modelValue),z),(e,a)=>{const s=c;return o(b)?(n(),r(s,{key:0,type:o(b),size:o(v)},{default:i((()=>[u(d(o(f)),1)])),_:1},8,["type","size"])):(n(),p("span",m,d(o(f)),1))}}});export{g as _};