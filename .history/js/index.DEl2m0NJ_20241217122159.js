import{d as e,be as a,bf as t,e as i,f as o,w as p,B as r,i as l,l as n}from"./index.CPcfy5fd.js";import{E as u}from"./el-scrollbar.CGy9Vc8U.js";import{E as s}from"./el-pagination.B6JBNGZe.js";/* empty css               */import"./el-select.DlbtOjyU.js";import"./el-popper.oQ_1tnM-.js";import"./el-input.C_NraZld.js";import{_ as d}from"vue3_eman_server/js/plugin-vue_export-helper.BCo6x5W8.js";const g=d(e({__name:"index",props:a({total:{required:!0,type:Number,default:0},pageSizes:{type:Array,default:()=>[10,20,30,50]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},{page:{type:Number,required:!0,default:1},pageModifiers:{},limit:{type:Number,required:!0,default:10},limitModifiers:{}}),emits:a(["pagination"],["update:page","update:limit"]),setup(e,{emit:a}){const d=a,g=t(e,"page"),m=t(e,"limit");function f(e){d("pagination",{page:g.value,limit:e})}function c(e){d("pagination",{page:e,limit:m.value})}return(a,t)=>{const d=s,y=u;return i(),o(y,null,{default:p((()=>[r("div",{class:l([{hidden:e.hidden},"pagination"])},[n(d,{"current-page":g.value,"onUpdate:currentPage":t[0]||(t[0]=e=>g.value=e),"page-size":m.value,"onUpdate:pageSize":t[1]||(t[1]=e=>m.value=e),background:e.background,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,onSizeChange:f,onCurrentChange:c},null,8,["current-page","page-size","background","layout","page-sizes","total"])],2)])),_:1})}}}),[["__scopeId","data-v-8c038003"]]);export{g as _};
