import{d as e,bc as a,r as l,I as t,ae as s,e as o,h as u,l as i,aL as d,w as r,B as n,D as p,j as m,p as c,f,g as y,X as g,aj as h,i as v,n as b,ax as _,bd as j,E as w,Q as N,be as S,bf as x,bg as B,a6 as V}from"./index.CPcfy5fd.js";import{a as z,E as k}from"./el-form-item.lHJDIO-5.js";import{E as U,a as C}from"./el-progress.ByQKWNI-.js";import{E as I}from"./el-button.DFafuuzN.js";import{F as E}from"./index.CY-EFrk4.js";import{_ as M}from"vue3_eman_server/js/plugin-vue_export-helper.BCo6x5W8.js";import{a as O,E as A}from"./el-image-viewer.9Rc423-w.js";import{E as F,a as L}from"./el-table-column.BrLwSw0l.js";import"./el-checkbox.CxwJjOlx.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.oQ_1tnM-.js";import"./el-scrollbar.CGy9Vc8U.js";/* empty css               */import{E as D}from"./el-link.x1avvZ9N.js";import"./use-form-common-props.BseJruiQ.js";import"./castArray.C6a8QyiS.js";import"./event.CIKxL71l.js";import"vue3_eman_server/js/Uint8Array.DxW3ztND.js";import"./index.BO5voRhJ.js";import"./isEqual.wucDy0nb.js";import"./index.BzmTEwIo.js";import"./index.B2Oee_uC.js";import"./debounce.erloDUjh.js";import"./position.CAucU-pB.js";import"./index.CKqnEUPD.js";import"./scroll.CE5T6uQg.js";import"./_baseIteratee.VRSKdGvw.js";import"./index.YbX1I6v9.js";const P={class:"el-upload__tip"},q={class:"el-upload-list__item-info"},H=["onClick"],K={class:"el-upload-list__item-file-name"},T=["onClick"],Q=M(e({__name:"FileUpload",props:{modelValue:{type:Array,default:()=>[]},action:{type:String,default:E.uploadUrl},limit:{type:Number,default:10},showDelBtn:{type:Boolean,default:!0},showUploadBtn:{type:Boolean,default:!0},maxSize:{type:Number,default:2097152},accept:{type:String,default:"*"},uploadBtnText:{type:String,default:"上传文件"},showTip:{type:Boolean,default:!1},tip:{type:String,default:""},headers:{type:Object,default:()=>({Authorization:a()})},data:{type:Object,default:()=>({})},name:{type:String,default:"file"},style:{type:Object,default:()=>({width:"300px"})}},emits:["update:modelValue"],setup(e,{emit:a}){const N=a,S=e,x=l([]),B=l([]),V=l(!1),z=l(0);function k(e){return e.size>S.maxSize?(_.warning("上传文件不能大于"+S.maxSize+"M"),!1):(z.value=0,V.value=!0,!0)}t((()=>S.modelValue),(e=>{const a=x.value.map((e=>e.url)),l=x.value.map((e=>e.name));if(!(a.length>0&&a.length===e.length&&a.every((a=>e.some((e=>e.url===a))))&&e.every((e=>a.some((a=>a===e.url))))&&l.every((a=>e.some((e=>e.name===a))))&&e.every((e=>l.some((a=>a===e.name)))))){if(e.length<=0)return x.value=[],void(B.value=[]);x.value=e.map((e=>({name:e.name,url:e.url}))),B.value=e.map((e=>({name:e.name,url:e.url})))}}),{immediate:!0});const M=(e,a)=>{if(V.value=!1,z.value=0,e.code===j.SUCCESS)return _.success("上传成功"),B.value.push({name:a.name,url:e.data.url}),void N("update:modelValue",B.value);_.error(e.msg||"上传失败")},O=e=>{V.value=!1,z.value=0,_.error("上传失败")},A=e=>e<30?"#909399":e<70?"#375ee8":"#67c23a",F=e=>{z.value=e.percent};function L(e){const a=e.url;a&&E.deleteByPath(a).then((()=>{B.value=B.value.filter((e=>e.url!==a)),N("update:modelValue",B.value)}))}return(e,a)=>{const l=I,t=s("Document"),_=w,j=s("Close"),N=U,B=C;return o(),u("div",null,[i(N,{"file-list":y(x),"onUpdate:fileList":a[0]||(a[0]=e=>h(x)?x.value=e:null),class:v(S.showUploadBtn?"show-upload-btn":"hide-upload-btn"),style:b(S.style),multiple:"",headers:S.headers,data:S.data,name:S.name,"before-upload":k,"on-remove":L,"on-progress":F,"on-success":M,"on-error":O,action:S.action,accept:S.accept,limit:S.limit},d({file:r((({file:e})=>[n("div",q,[n("a",{class:"el-upload-list__item-name",onClick:a=>function(e){const a=e.url;a&&E.downloadFile(a,e.name)}(e)},[i(_,null,{default:r((()=>[i(t)])),_:1}),n("span",K,p(e.name),1),S.showDelBtn?(o(),u("span",{key:0,class:"el-icon--close",onClick:m((a=>L(e)),["stop"])},[i(_,null,{default:r((()=>[i(j)])),_:1})],8,T)):c("",!0)],8,H)])])),default:r((()=>[S.showUploadBtn?(o(),f(l,{key:0,type:"primary",disabled:y(x).length>=S.limit},{default:r((()=>[g(p(S.uploadBtnText),1)])),_:1},8,["disabled"])):c("",!0)])),_:2},[S.showTip?{name:"tip",fn:r((()=>[n("div",P,p(S.tip),1)])),key:"0"}:void 0]),1032,["file-list","class","style","headers","data","name","action","accept","limit"]),y(V)?(o(),f(B,{key:0,style:b({display:y(V)?"inline-flex":"none",width:"100%"}),percentage:y(z),color:A},null,8,["style","percentage"])):c("",!0)])}}}),[["__scopeId","data-v-a2571a04"]]),Z={style:{width:"100%"}},R=["src"],G={class:"el-upload-list__item-actions"},W=["onClick"],Y=["onClick"],J=M(e({__name:"MultiImageUpload",props:{modelValue:{type:Array,default:()=>[]},action:{type:String,default:E.uploadUrl},headers:{type:Object,default:()=>({Authorization:a()})},data:{type:Object,default:()=>({})},name:{type:String,default:"file"},limit:{type:Number,default:10},showDelBtn:{type:Boolean,default:!0},showUploadBtn:{type:Boolean,default:!0},maxSize:{type:Number,default:10},accept:{type:String,default:"image/*"}},emits:["update:modelValue"],setup(e,{emit:a}){const d=a,p=e,m=l(!1),g=l(0),b=l([]),S=l([]),x=l([]);t((()=>p.modelValue),(e=>{const a=b.value.map((e=>e.url));if(!(a.length>0&&a.length===e.length&&a.every((a=>e.some((e=>e===a))))&&e.every((e=>a.some((a=>a===e)))))){if(e.length<=0)return b.value=[],x.value=[],void(S.value=[]);b.value=e.map((e=>({url:e}))),S.value=e.map((e=>e))}}),{immediate:!0});const B=(e,a)=>{if(e.code===j.SUCCESS)return _.success("上传成功"),S.value.push(e.data.url),void d("update:modelValue",S.value);_.error(e.msg||"上传失败")},V=e=>{_.error("上传失败")};function z(e){return!(e.size>1024*p.maxSize*1024)||(_.warning("上传图片不能大于"+p.maxSize+"M"),!1)}const k=()=>{m.value=!1};return(e,a)=>{const l=s("Plus"),t=w,_=s("zoom-in"),j=s("Delete"),C=U,I=O;return o(),u(N,null,[i(C,{"file-list":y(b),"onUpdate:fileList":a[0]||(a[0]=e=>h(b)?b.value=e:null),"list-type":"picture-card",class:v(y(b).length>=p.limit||!p.showUploadBtn?"hide":"show"),"before-upload":z,action:p.action,headers:p.headers,data:p.data,name:p.name,"on-success":B,"on-error":V,accept:p.accept,limit:p.limit},{file:r((({file:e})=>[n("div",Z,[n("img",{class:"el-upload-list__item-thumbnail",src:e.url,alt:""},null,8,R),n("span",G,[n("span",{class:"el-upload-list__item-preview",onClick:a=>{return l=e,x.value=b.value.map((e=>e.url)),g.value=b.value.findIndex((e=>e.url===l.url)),void(m.value=!0);var l}},[i(t,null,{default:r((()=>[i(_)])),_:1})],8,W),p.showDelBtn?(o(),u("span",{key:0,class:"el-upload-list__item-delete",onClick:a=>function(e){const a=e.url;a&&E.deleteByPath(a).then((()=>{S.value=S.value.filter((e=>e!==a)),d("update:modelValue",S.value)}))}(e)},[i(t,null,{default:r((()=>[i(j)])),_:1})],8,Y)):c("",!0)])])])),default:r((()=>[i(t,null,{default:r((()=>[i(l)])),_:1})])),_:1},8,["file-list","class","action","headers","data","name","accept","limit"]),y(m)?(o(),f(I,{key:0,"zoom-rate":1.2,initialIndex:y(g),"url-list":y(x),onClose:k},null,8,["initialIndex","url-list"])):c("",!0)],64)}}}),[["__scopeId","data-v-51247031"]]),X={key:1,class:"img-upload__overlay"},$=M(e({__name:"SingleImageUpload",props:S({modelValue:{type:String,default:""},maxSize:{type:Number,default:10},accept:{type:String,default:""},size:{type:String,default:"150px"}},{modelValue:{type:String,required:!0,default:""},modelModifiers:{}}),emits:S(["update:modelValue"],["update:modelValue"]),setup(e,{emit:a}){const l=e,t=x(e,"modelValue");async function d(e){const a=await E.upload(e.file);t.value=a.url}function n(e){return!(e.size>1024*l.maxSize*1024)||(_.warning(`上传图片不能大于${l.maxSize}MB`),!1)}function p(){if(t.value){const e=B({setup:()=>()=>V(O,{urlList:[t.value],initialIndex:0,onClose:()=>{e.unmount(),document.body.removeChild(a)}})}),a=document.createElement("div");document.body.appendChild(a),e.mount(a)}}function y(){t.value=""}return(e,a)=>{const g=A,h=s("ZoomIn"),v=w,_=s("Delete"),j=s("Plus"),N=U;return o(),f(N,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:"img-upload","show-file-list":!1,"list-type":"picture-card","before-upload":n,"http-request":d,style:b({width:l.size,height:l.size}),accept:l.accept},{default:r((()=>[t.value?(o(),f(g,{key:0,src:t.value},null,8,["src"])):c("",!0),t.value?(o(),u("div",X,[i(v,{class:"img-upload__preview-icon",onClick:m(p,["stop"])},{default:r((()=>[i(h)])),_:1}),i(v,{class:"img-upload__delete-icon",onClick:m(y,["stop"])},{default:r((()=>[i(_)])),_:1})])):(o(),f(v,{key:2,class:"img-upload__add-icon"},{default:r((()=>[i(j)])),_:1}))])),_:1},8,["modelValue","style","accept"])}}}),[["__scopeId","data-v-33437166"]]),ee={class:"app-container"},ae=e({__name:"upload",setup(e){const a=l("https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg"),t=[{argsName:"v-model",type:"String",default:"",desc:"已经上传的图片URL"},{argsName:"size",type:"String",default:"150px",desc:"图片上传组件的尺寸大小"},{argsName:"max-size",type:"Number",default:"10",desc:"单个图片上传大小限制(单位M)"},{argsName:"accept",type:"String",default:"",desc:"上传文件类型"}];l();const s=l(["https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg","https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg","https://s2.loli.net/2023/05/24/ZPiGbcpR91WqInB.jpg","https://s2.loli.net/2023/05/24/e1bcnEq3MFdmlNL.jpg","https://s2.loli.net/2023/05/24/wZTSPj1yDQNcuhU.jpg"]),d=[{argsName:"v-model",type:"Array",default:"[]",desc:"已经上传的图片数组"},{argsName:"action",type:"String",default:"FileAPI.uploadUrl",desc:"文件上传地址"},{argsName:"headers",type:"Object",default:"{Authorization: localStorage.getItem(TOKEN_KEY),}",desc:"提示文本类型"},{argsName:"data",type:"Object",default:"{}",desc:"请求携带的额外参数"},{argsName:"name",type:"String",default:"file",desc:"上传文件的参数名"},{argsName:"limit",type:"Number",default:10,desc:"上传最大的图片数量"},{argsName:"show-del-btn",type:"Boolean",default:!0,desc:"是否显示删除按钮"},{argsName:"show-upload-btn",type:"Boolean",default:!0,desc:"是否显示上传按钮"},{argsName:"max-size",type:"Number",default:"10",desc:"单个图片上传大小限制(单位MB)"},{argsName:"accept",type:"String",default:"image/*",desc:"上传文件类型"}],n=l([{name:"file one.jpg",url:"https://s2.loli.net/2023/05/24/yNsxFC8rLHMZQcK.jpg"},{name:"file two.jpg",url:"https://s2.loli.net/2023/05/24/RuHFMwW4rG5lIqs.jpg"}]),p=[{argsName:"v-model",type:"Arrays",default:"[]",desc:"已经上传的文件数组"},{argsName:"action",type:"String",default:"FileAPI.uploadUrl",desc:"文件上传地址"},{argsName:"limit",type:"Number",default:10,desc:"上传最大的文件数量"},{argsName:"show-del-btn",type:"Boolean",default:!0,desc:"是否显示删除按钮"},{argsName:"show-upload-btn",type:"Boolean",default:!0,desc:"是否显示上传按钮"},{argsName:"max-size",type:"Number",default:"10",desc:"单个文件上传大小限制(单位MB)"},{argsName:"accept",type:"String",default:"*",desc:"上传文件类型"},{argsName:"upload-btn-text",type:"String",default:"上传文件",desc:"上传按钮文本"},{argsName:"show-tip",type:"Boolean",default:!1,desc:"是否显示提示"},{argsName:"tip",type:"String",default:'""',desc:"提示文本"},{argsName:"headers",type:"Object",default:"{Authorization: localStorage.getItem(TOKEN_KEY),}",desc:"提示文本类型"},{argsName:"data",type:"Object",default:"{}",desc:"请求携带的额外参数"},{argsName:"name",type:"String",default:"file",desc:"上传文件的参数名"},{argsName:"style",type:"Object",default:"{width:'300px'}",desc:"上传组件的样式"}];return(e,l)=>{const m=D,c=$,f=z,v=F,b=L,_=J,j=Q,w=k;return o(),u("div",ee,[i(m,{href:"https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/upload.vue",type:"primary",target:"_blank",class:"mb-10"},{default:r((()=>l[3]||(l[3]=[g(" 示例源码 请点击>>>> ")]))),_:1}),i(w,null,{default:r((()=>[i(f,{label:"单图上传"},{default:r((()=>[i(c,{modelValue:y(a),"onUpdate:modelValue":l[0]||(l[0]=e=>h(a)?a.value=e:null)},null,8,["modelValue"])])),_:1}),i(f,{label:"参数说明"},{default:r((()=>[i(b,{data:t,border:""},{default:r((()=>[i(v,{prop:"argsName",label:"参数名称",width:"300"}),i(v,{prop:"type",label:"参数类型",width:"200"}),i(v,{prop:"default",label:"默认值",width:"400"}),i(v,{prop:"desc",label:"描述",width:"300"})])),_:1})])),_:1}),i(f,{label:"多图上传"},{default:r((()=>[i(_,{modelValue:y(s),"onUpdate:modelValue":l[1]||(l[1]=e=>h(s)?s.value=e:null)},null,8,["modelValue"])])),_:1}),i(f,{label:"参数说明"},{default:r((()=>[i(b,{data:d,border:""},{default:r((()=>[i(v,{prop:"argsName",label:"参数名称",width:"300"}),i(v,{prop:"type",label:"参数类型",width:"200"}),i(v,{prop:"default",label:"默认值",width:"400"}),i(v,{prop:"desc",label:"描述",width:"300"})])),_:1})])),_:1}),i(f,{label:"文件上传"},{default:r((()=>[i(j,{modelValue:y(n),"onUpdate:modelValue":l[2]||(l[2]=e=>h(n)?n.value=e:null)},null,8,["modelValue"])])),_:1}),i(f,{label:"参数说明"},{default:r((()=>[i(b,{data:p,border:""},{default:r((()=>[i(v,{prop:"argsName",label:"参数名称",width:"300"}),i(v,{prop:"type",label:"参数类型",width:"200"}),i(v,{prop:"default",label:"默认值",width:"400"}),i(v,{prop:"desc",label:"描述",width:"300"})])),_:1})])),_:1})])),_:1})])}}});export{ae as default};