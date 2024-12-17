import{t as e,aR as l,aO as a,v as s,z as t,d as r,b as i,r as o,c as d,M as n,J as m,I as u,e as p,h as c,n as f,g as b,f as v,w as y,C as _,E as g,k as w,i as j,_ as k,q as h,S as V,o as x,ae as P,l as E,aS as z,B as I,aT as C,X as S,D as U,p as A,ax as q}from"./index.CPcfy5fd.js";import{E as M}from"./el-dialog.DxcQ-gYg.js";import"./el-overlay.DftqKqsB.js";import{a as F,E as B}from"./el-form-item.lHJDIO-5.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang.CmmwoLAR.js";import{E as Z}from"./el-input.C_NraZld.js";import{a as L,E as $}from"./el-tab-pane.DP3qJZ_U.js";import{a as N,E as O}from"./el-col.B-JxmVyK.js";import{E as T}from"./el-card.CoAyFuo3.js";import{E as J,a as D}from"./el-descriptions-item.EjCyNdtj.js";import{_ as G}from"./index.BiDxP4gs.js";import{E as K}from"./el-button.DFafuuzN.js";import{F as Q}from"./index.CY-EFrk4.js";import{_ as X}from"vue3_eman_server/js/_plugin-vue_export-helper.BCo6x5W8.js";import"./index.B2Oee_uC.js";import"./refs.-Fdu2DQS.js";import"./index.BzmTEwIo.js";import"./vnode.WdqDFRAO.js";import"./event.CIKxL71l.js";import"./scroll.CE5T6uQg.js";import"./use-form-common-props.BseJruiQ.js";import"./castArray.C6a8QyiS.js";import"vue3_eman_server/js/_Uint8Array.DxW3ztND.js";import"./index.BO5voRhJ.js";import"./el-checkbox.CxwJjOlx.js";import"./isEqual.wucDy0nb.js";import"./el-radio-group.2MAsiBq3.js";/* empty css                 *//* empty css               */import"./el-select.DlbtOjyU.js";import"./el-popper.oQ_1tnM-.js";import"./el-scrollbar.CGy9Vc8U.js";import"./index.C0I96C1I.js";import"./token.DWNpOE8r.js";import"./strings.C3l49zS7.js";import"./index.BCOw_d-n.js";import"./debounce.erloDUjh.js";import"./_baseIteratee.VRSKdGvw.js";import"./index.YbX1I6v9.js";import"./index.CKqnEUPD.js";import"./index.AfNc8ccy.js";const Y=e({size:{type:[Number,String],values:l,default:"",validator:e=>a(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:s},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),H={error:e=>e instanceof Event},W=r({name:"ElAvatar"});const ee=h(k(r({...W,props:Y,emits:H,setup(e,{emit:l}){const s=e,t=i("avatar"),r=o(!1),k=d((()=>{const{size:e,icon:l,shape:a}=s,r=[t.b()];return n(e)&&r.push(t.m(e)),l&&r.push(t.m("icon")),a&&r.push(t.m(a)),r})),h=d((()=>{const{size:e}=s;return a(e)?t.cssVarBlock({size:m(e)||""}):void 0})),V=d((()=>({objectFit:s.fit})));function x(e){r.value=!0,l("error",e)}return u((()=>s.src),(()=>r.value=!1)),(e,l)=>(p(),c("span",{class:j(b(k)),style:f(b(h))},[!e.src&&!e.srcSet||r.value?e.icon?(p(),v(b(g),{key:1},{default:y((()=>[(p(),v(_(e.icon)))])),_:1})):w(e.$slots,"default",{key:2}):(p(),c("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:f(b(V)),onError:x},null,44,["src","alt","srcset"]))],6))}}),[["__file","avatar.vue"]])),le={class:"app-container"},ae={class:"w-full"},se={class:"relative w-100px h-100px flex-center"},te={class:"mt-5"},re={class:"text-14px mt-2"},ie={class:"mt-5"},oe={class:"text-14px mt-2"},de={key:0},ne={key:1},me={class:"mt-5"},ue={class:"text-14px mt-2"},pe={key:0},ce={key:1},fe={class:"dialog-footer"},be=X(r({__name:"index",setup(e){const l=o({}),a=V({visible:!1,title:"",type:""}),s=V({}),t=V({}),r=V({}),i=V({}),d=o(0),n=o(null),m=o(0),u=o(null),f={oldPassword:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"}],confirmPassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"}]},_={mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},w={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,message:"请输入正确的邮箱地址",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},j=e=>{switch(a.type=e,a.visible=!0,e){case"account":a.title="账号资料",s.id=l.value.id,s.nickname=l.value.nickname,s.gender=l.value.gender;break;case"password":a.title="修改密码";break;case"mobile":a.title="绑定手机";break;case"email":a.title="绑定邮箱"}},k=async e=>{if("MOBILE"===e){if(!r.mobile)return void q.error("请输入手机号");if(!/^1[3-9]\d{9}$/.test(r.mobile))return void q.error("手机号格式不正确");d.value=60,n.value=setInterval((()=>{d.value>0?d.value-=1:clearInterval(n.value)}),1e3)}else if("EMAIL"===e){if(!i.email)return void q.error("请输入邮箱");if(!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(i.email))return void q.error("邮箱格式不正确");m.value=60,u.value=setInterval((()=>{m.value>0?m.value-=1:clearInterval(u.value)}),1e3)}},h=async()=>{if("account"===a.type)z.updateProfile(s).then((()=>{q.success("账号资料修改成功"),a.visible=!1,W()}));else if("password"===a.type){if(t.newPassword!==t.confirmPassword)return void q.error("两次输入的密码不一致");z.changePassword(t).then((()=>{q.success("密码修改成功"),a.visible=!1}))}else"mobile"===a.type?z.bindMobile(r).then((()=>{q.success("手机号绑定成功"),a.visible=!1,W()})):"email"===a.type&&z.bindEmail(i).then((()=>{q.success("邮箱绑定成功"),a.visible=!1,W()}))},X=o(null),Y=()=>{var e;null==(e=X.value)||e.click()},H=async e=>{const a=e.target,s=a.files?a.files[0]:null;if(s)try{const e=await Q.upload(s);l.value.avatar=e.url,await z.updateProfile({avatar:e.url})}catch(t){q.error("头像上传失败")}},W=async()=>{const e=await z.getProfile();l.value=e};return x((async()=>{n.value&&clearInterval(n.value),u.value&&clearInterval(u.value),await W()})),(e,o)=>{const n=ee,u=K,V=P("Edit"),x=g,z=P("User"),q=P("Male"),Q=P("Female"),W=J,be=P("Phone"),ve=P("Message"),ye=G,_e=P("Timer"),ge=D,we=T,je=$,ke=N,he=O,Ve=L,xe=Z,Pe=F,Ee=R,ze=B,Ie=M;return p(),c("div",le,[E(Ve,{"tab-position":"left"},{default:y((()=>[E(je,{label:"账号信息"},{default:y((()=>[I("div",ae,[E(we,null,{default:y((()=>[I("div",se,[E(n,{src:b(l).avatar,size:100},null,8,["src"]),E(u,{type:"info",class:"absolute bottom-0 right-0 cursor-pointer",circle:"",icon:b(C),size:"small",onClick:Y},null,8,["icon"]),I("input",{ref_key:"fileInput",ref:X,type:"file",style:{display:"none"},onChange:H},null,544)]),I("div",te,[S(U(b(l).nickname)+" ",1),E(x,{class:"align-middle cursor-pointer",onClick:o[0]||(o[0]=e=>j("account"))},{default:y((()=>[E(V)])),_:1})]),E(ge,{column:1,class:"mt-10"},{default:y((()=>[E(W,null,{label:y((()=>[E(x,{class:"align-middle"},{default:y((()=>[E(z)])),_:1}),o[19]||(o[19]=S(" 用户名 "))])),default:y((()=>[S(" "+U(b(l).username)+" ",1),1===b(l).gender?(p(),v(x,{key:0,class:"align-middle color-blue"},{default:y((()=>[E(q)])),_:1})):(p(),v(x,{key:1,class:"align-middle color-pink"},{default:y((()=>[E(Q)])),_:1}))])),_:1}),E(W,null,{label:y((()=>[E(x,{class:"align-middle"},{default:y((()=>[E(be)])),_:1}),o[20]||(o[20]=S(" 手机号码 "))])),default:y((()=>[S(" "+U(b(l).mobile),1)])),_:1}),E(W,null,{label:y((()=>[E(x,{class:"align-middle"},{default:y((()=>[E(ve)])),_:1}),o[21]||(o[21]=S(" 邮箱 "))])),default:y((()=>[S(" "+U(b(l).email),1)])),_:1}),E(W,null,{label:y((()=>[E(ye,{"icon-class":"tree"}),o[22]||(o[22]=S(" 部门 "))])),default:y((()=>[S(" "+U(b(l).deptName),1)])),_:1}),E(W,null,{label:y((()=>[E(ye,{"icon-class":"role"}),o[23]||(o[23]=S(" 角色 "))])),default:y((()=>[S(" "+U(b(l).roleNames),1)])),_:1}),E(W,null,{label:y((()=>[E(x,{class:"align-middle"},{default:y((()=>[E(_e)])),_:1}),o[24]||(o[24]=S(" 创建日期 "))])),default:y((()=>[S(" "+U(b(l).createTime),1)])),_:1})])),_:1})])),_:1})])])),_:1}),E(je,{label:"安全设置"},{default:y((()=>[E(we,null,{default:y((()=>[E(he,null,{default:y((()=>[E(ke,{span:16},{default:y((()=>[o[27]||(o[27]=I("div",{class:"font-bold"},"账户密码",-1)),I("div",re,[o[26]||(o[26]=S(" 定期修改密码有助于保护账户安全 ")),E(u,{type:"primary",plain:"",size:"small",class:"ml-5",onClick:o[1]||(o[1]=()=>j("password"))},{default:y((()=>o[25]||(o[25]=[S(" 修改 ")]))),_:1})])])),_:1})])),_:1}),I("div",ie,[o[30]||(o[30]=I("div",{class:"font-bold"},"绑定手机",-1)),I("div",oe,[b(l).mobile?(p(),c("span",de,"已绑定手机号："+U(b(l).mobile),1)):(p(),c("span",ne,"未绑定手机")),b(l).mobile?(p(),v(u,{key:2,type:"primary",plain:"",size:"small",class:"ml-5",onClick:o[2]||(o[2]=()=>j("mobile"))},{default:y((()=>o[28]||(o[28]=[S(" 更换 ")]))),_:1})):(p(),v(u,{key:3,type:"primary",plain:"",size:"small",class:"ml-5",onClick:o[3]||(o[3]=()=>j("mobile"))},{default:y((()=>o[29]||(o[29]=[S(" 绑定 ")]))),_:1}))])]),I("div",me,[o[33]||(o[33]=I("div",{class:"font-bold"},"绑定邮箱",-1)),I("div",ue,[b(l).email?(p(),c("span",pe,"已绑定邮箱："+U(b(l).email),1)):(p(),c("span",ce,"未绑定邮箱")),b(l).email?(p(),v(u,{key:2,type:"primary",plain:"",size:"small",class:"ml-5",onClick:o[4]||(o[4]=()=>j("email"))},{default:y((()=>o[31]||(o[31]=[S(" 更换 ")]))),_:1})):(p(),v(u,{key:3,type:"primary",plain:"",size:"small",class:"ml-5",onClick:o[5]||(o[5]=()=>j("email"))},{default:y((()=>o[32]||(o[32]=[S(" 绑定 ")]))),_:1}))])])])),_:1})])),_:1})])),_:1}),E(Ie,{modelValue:b(a).visible,"onUpdate:modelValue":o[18]||(o[18]=e=>b(a).visible=e),title:b(a).title,width:500},{footer:y((()=>[I("span",fe,[E(u,{onClick:o[17]||(o[17]=e=>b(a).visible=!1)},{default:y((()=>o[34]||(o[34]=[S("取消")]))),_:1}),E(u,{type:"primary",onClick:h},{default:y((()=>o[35]||(o[35]=[S("确定")]))),_:1})])])),default:y((()=>["account"===b(a).type?(p(),v(ze,{key:0,ref:"userProfileFormRef",model:b(s),"label-width":100},{default:y((()=>[E(Pe,{label:"昵称"},{default:y((()=>[E(xe,{modelValue:b(s).nickname,"onUpdate:modelValue":o[6]||(o[6]=e=>b(s).nickname=e)},null,8,["modelValue"])])),_:1}),E(Pe,{label:"性别"},{default:y((()=>[E(Ee,{modelValue:b(s).gender,"onUpdate:modelValue":o[7]||(o[7]=e=>b(s).gender=e),code:"gender"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])):A("",!0),"password"===b(a).type?(p(),v(ze,{key:1,ref:"passwordChangeFormRef",model:b(t),rules:f,"label-width":100},{default:y((()=>[E(Pe,{label:"原密码",prop:"oldPassword"},{default:y((()=>[E(xe,{modelValue:b(t).oldPassword,"onUpdate:modelValue":o[8]||(o[8]=e=>b(t).oldPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),E(Pe,{label:"新密码",prop:"newPassword"},{default:y((()=>[E(xe,{modelValue:b(t).newPassword,"onUpdate:modelValue":o[9]||(o[9]=e=>b(t).newPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),E(Pe,{label:"确认密码",prop:"confirmPassword"},{default:y((()=>[E(xe,{modelValue:b(t).confirmPassword,"onUpdate:modelValue":o[10]||(o[10]=e=>b(t).confirmPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])):"mobile"===b(a).type?(p(),v(ze,{key:2,ref:"mobileBindingFormRef",model:b(r),rules:_,"label-width":100},{default:y((()=>[E(Pe,{label:"手机号码",prop:"mobile"},{default:y((()=>[E(xe,{modelValue:b(r).mobile,"onUpdate:modelValue":o[11]||(o[11]=e=>b(r).mobile=e),style:{width:"250px"}},null,8,["modelValue"])])),_:1}),E(Pe,{label:"验证码",prop:"code"},{default:y((()=>[E(xe,{modelValue:b(r).code,"onUpdate:modelValue":o[13]||(o[13]=e=>b(r).code=e),style:{width:"250px"}},{append:y((()=>[E(u,{class:"ml-5",disabled:b(d)>0,onClick:o[12]||(o[12]=e=>k("MOBILE"))},{default:y((()=>[S(U(b(d)>0?`${b(d)}s后重新发送`:"发送验证码"),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])):"email"===b(a).type?(p(),v(ze,{key:3,ref:"emailBindingFormRef",model:b(i),rules:w,"label-width":100},{default:y((()=>[E(Pe,{label:"邮箱",prop:"email"},{default:y((()=>[E(xe,{modelValue:b(i).email,"onUpdate:modelValue":o[14]||(o[14]=e=>b(i).email=e),style:{width:"250px"}},null,8,["modelValue"])])),_:1}),E(Pe,{label:"验证码",prop:"code"},{default:y((()=>[E(xe,{modelValue:b(i).code,"onUpdate:modelValue":o[16]||(o[16]=e=>b(i).code=e),style:{width:"250px"}},{append:y((()=>[E(u,{class:"ml-5",disabled:b(m)>0,onClick:o[15]||(o[15]=e=>k("EMAIL"))},{default:y((()=>[S(U(b(m)>0?`${b(m)}s后重新发送`:"发送验证码"),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])):A("",!0)])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-aa0f9c1f"]]);export{be as default};
