import{t as s,z as e,d as a,b as t,e as o,h as r,i as d,g as l,k as y,p as i,B as f,n,X as h,D as c,_ as p,q as v}from"./index.CPcfy5fd.js";const u=s({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:e([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=a({name:"ElCard"});const S=v(p(a({...b,props:u,setup(s){const e=t("card");return(s,a)=>(o(),r("div",{class:d([l(e).b(),l(e).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(o(),r("div",{key:0,class:d(l(e).e("header"))},[y(s.$slots,"header",{},(()=>[h(c(s.header),1)]))],2)):i("v-if",!0),f("div",{class:d([l(e).e("body"),s.bodyClass]),style:n(s.bodyStyle)},[y(s.$slots,"default")],6),s.$slots.footer||s.footer?(o(),r("div",{key:1,class:d(l(e).e("footer"))},[y(s.$slots,"footer",{},(()=>[h(c(s.footer),1)]))],2)):i("v-if",!0)],2))}}),[["__file","card.vue"]]));export{S as E};