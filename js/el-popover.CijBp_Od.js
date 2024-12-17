import{a as e,u as t,E as o}from"./el-popper.oQ_1tnM-.js";import{d as r}from"./dropdown.D3z6ZJ_U.js";import{t as a,by as p,d as s,c as i,b as l,r as n,g as f,J as d,e as b,f as c,w as u,h as v,i as m,D as h,p as g,k as w,X as y,Y as x,_ as S,cZ as A,q as C}from"./index.CPcfy5fd.js";const N=a({trigger:e.trigger,placement:r.placement,disabled:e.disabled,visible:t.visible,transition:t.transition,popperOptions:r.popperOptions,tabindex:r.tabindex,content:t.content,popperStyle:t.popperStyle,popperClass:t.popperClass,enterable:{...t.enterable,default:!0},effect:{...t.effect,default:"light"},teleported:t.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),R={"update:visible":e=>p(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},$=s({name:"ElPopover"}),_=s({...$,props:N,emits:R,setup(e,{expose:t,emit:r}){const a=e,p=i((()=>a["onUpdate:visible"])),s=l("popover"),S=n(),A=i((()=>{var e;return null==(e=f(S))?void 0:e.popperRef})),C=i((()=>[{width:d(a.width)},a.popperStyle])),N=i((()=>[s.b(),a.popperClass,{[s.m("plain")]:!!a.content}])),R=i((()=>a.transition===`${s.namespace.value}-fade-in-linear`)),$=()=>{r("before-enter")},_=()=>{r("before-leave")},k=()=>{r("after-enter")},B=()=>{r("update:visible",!1),r("after-leave")};return t({popperRef:A,hide:()=>{var e;null==(e=S.value)||e.hide()}}),(e,t)=>(b(),c(f(o),x({ref_key:"tooltipRef",ref:S},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":f(N),"popper-style":f(C),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":f(R),"onUpdate:visible":f(p),onBeforeShow:$,onBeforeHide:_,onShow:k,onHide:B}),{content:u((()=>[e.title?(b(),v("div",{key:0,class:m(f(s).e("title")),role:"title"},h(e.title),3)):g("v-if",!0),w(e.$slots,"default",{},(()=>[y(h(e.content),1)]))])),default:u((()=>[e.$slots.reference?w(e.$slots,"reference",{key:0}):g("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const k=(e,t)=>{const o=t.arg||t.value,r=null==o?void 0:o.popperRef;r&&(r.triggerRef=e)};const B=C(S(_,[["__file","popover.vue"]]),{directive:A({mounted(e,t){k(e,t)},updated(e,t){k(e,t)}},"popover")});export{B as E};