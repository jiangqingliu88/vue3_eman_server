import{d as e,x as o,A as s,c as a,e as l,h as t,B as r,k as n,i,g as d,D as c,l as f,w as u,f as p,C as v,E as g,p as b,n as m,_ as y,cd as h,b9 as C,b as k,r as R,y as w,T as $,V as A,Y as _,aL as x,$ as F,q as E}from"./index.CPcfy5fd.js";import{f as I,g as L,b as M,d as P,a as T,u as j,E as q,e as B}from"./el-overlay.DftqKqsB.js";import{F as D,E as z,a as S}from"./index.B2Oee_uC.js";import{c as G}from"./refs.-Fdu2DQS.js";import{u as K}from"./index.BzmTEwIo.js";const O=Symbol("dialogInjectionKey"),U=e({name:"ElDialogContent"});var V=y(e({...U,props:I,emits:L,setup(e,{expose:y}){const C=e,{t:k}=o(),{Close:R}=h,{dialogRef:w,headerRef:$,bodyId:A,ns:_,style:x}=s(O),{focusTrapRef:F}=s(D),E=a((()=>[_.b(),_.is("fullscreen",C.fullscreen),_.is("draggable",C.draggable),_.is("align-center",C.alignCenter),{[_.m("center")]:C.center}])),I=G(F,w),L=a((()=>C.draggable)),P=a((()=>C.overflow)),{resetPosition:T}=M(w,$,L,P);return y({resetPosition:T}),(e,o)=>(l(),t("div",{ref:d(I),class:i(d(E)),style:m(d(x)),tabindex:"-1"},[r("header",{ref_key:"headerRef",ref:$,class:i([d(_).e("header"),{"show-close":e.showClose}])},[n(e.$slots,"header",{},(()=>[r("span",{role:"heading","aria-level":e.ariaLevel,class:i(d(_).e("title"))},c(e.title),11,["aria-level"])])),e.showClose?(l(),t("button",{key:0,"aria-label":d(k)("el.dialog.close"),class:i(d(_).e("headerbtn")),type:"button",onClick:o=>e.$emit("close")},[f(d(g),{class:i(d(_).e("close"))},{default:u((()=>[(l(),p(v(e.closeIcon||d(R))))])),_:1},8,["class"])],10,["aria-label","onClick"])):b("v-if",!0)],2),r("div",{id:d(A),class:i(d(_).e("body"))},[n(e.$slots,"default")],10,["id"]),e.$slots.footer?(l(),t("footer",{key:0,class:i(d(_).e("footer"))},[n(e.$slots,"footer")],2)):b("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const Y=e({name:"ElDialog",inheritAttrs:!1});const H=E(y(e({...Y,props:P,emits:T,setup(e,{expose:o}){const s=e,t=C();K({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},a((()=>!!t.title)));const c=k("dialog"),v=R(),g=R(),y=R(),{visible:h,titleId:E,bodyId:I,style:L,overlayDialogStyle:M,rendered:P,zIndex:T,afterEnter:D,afterLeave:G,beforeLeave:U,handleClose:Y,onModalClick:H,onOpenAutoFocus:J,onCloseAutoFocus:N,onCloseRequested:Q,onFocusoutPrevented:W}=j(s,v);w(O,{dialogRef:v,headerRef:g,bodyId:I,ns:c,rendered:P,style:L});const X=B(H),Z=a((()=>s.draggable&&!s.fullscreen));return o({visible:h,dialogContentRef:y,resetPosition:()=>{var e;null==(e=y.value)||e.resetPosition()}}),(e,o)=>(l(),p(d(S),{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},{default:u((()=>[f($,{name:"dialog-fade",onAfterEnter:d(D),onAfterLeave:d(G),onBeforeLeave:d(U),persisted:""},{default:u((()=>[A(f(d(q),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":d(T)},{default:u((()=>[r("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:d(E),"aria-describedby":d(I),class:i(`${d(c).namespace.value}-overlay-dialog`),style:m(d(M)),onClick:d(X).onClick,onMousedown:d(X).onMousedown,onMouseup:d(X).onMouseup},[f(d(z),{loop:"",trapped:d(h),"focus-start-el":"container",onFocusAfterTrapped:d(J),onFocusAfterReleased:d(N),onFocusoutPrevented:d(W),onReleaseRequested:d(Q)},{default:u((()=>[d(P)?(l(),p(V,_({key:0,ref_key:"dialogContentRef",ref:y},e.$attrs,{center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:d(Z),overflow:e.overflow,fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:d(Y)}),x({header:u((()=>[e.$slots.title?n(e.$slots,"title",{key:1}):n(e.$slots,"header",{key:0,close:d(Y),titleId:d(E),titleClass:d(c).e("title")})])),default:u((()=>[n(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:u((()=>[n(e.$slots,"footer")]))}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):b("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])])),_:3},8,["mask","overlay-class","z-index"]),[[F,d(h)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])])),_:3},8,["to","disabled"]))}}),[["__file","dialog.vue"]]));export{H as E};