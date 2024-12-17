import{d as e,r as l,S as a,I as t,o,ae as i,e as s,h as r,B as n,l as d,w as u,g as m,W as p,X as c,V as f,f as v,aj as g,p as b,D as j,ax as y,aZ as _,E as h}from"./index.CPcfy5fd.js";import{v as k}from"./el-loading.DUc5yYfm.js";import{E as x}from"./el-drawer.r4NjfdP6.js";import"./el-overlay.DftqKqsB.js";import{E as V}from"./el-tree.Bpu2x_8u.js";import{E as w}from"./el-checkbox.CxwJjOlx.js";import"./el-tooltip.l0sNRNKZ.js";import{E as C}from"./el-popper.oQ_1tnM-.js";import{E}from"./el-dialog.DxcQ-gYg.js";import{E as U}from"./el-input.C_NraZld.js";import{E as S}from"./el-input-number.CCAs2zTn.js";import{b as z,a as R}from"./el-radio-group.2MAsiBq3.js";/* empty css                 *//* empty css               */import{E as F,a as q}from"./el-select.DlbtOjyU.js";import"./el-scrollbar.CGy9Vc8U.js";import{E as N}from"./el-card.CoAyFuo3.js";import{_ as B}from"./index.DEl2m0NJ.js";import{E as I,a as A}from"./el-table-column.BrLwSw0l.js";import{E as M,a as O}from"./el-form-item.lHJDIO-5.js";import{E as T}from"./el-button.DFafuuzN.js";import{R as D}from"./role.B1RkAfGu.js";import{E as P}from"./el-message-box.CIvl2Gml.js";import{E as G}from"./index.C0I96C1I.js";import"./index.B2Oee_uC.js";import"./index.BzmTEwIo.js";import"./vnode.WdqDFRAO.js";import"./event.CIKxL71l.js";import"./scroll.CE5T6uQg.js";import"./use-form-common-props.BseJruiQ.js";import"./token.DWNpOE8r.js";import"./index.C-5mtHV7.js";import"./index.BO5voRhJ.js";import"./isEqual.wucDy0nb.js";import"vue3_eman_server/js/_Uint8Array.DxW3ztND.js";import"./refs.-Fdu2DQS.js";import"./index.CKqnEUPD.js";import"./index.BCOw_d-n.js";import"./index.CFbp2rmx.js";import"./strings.C3l49zS7.js";import"./castArray.C6a8QyiS.js";import"./debounce.erloDUjh.js";import"./_baseIteratee.VRSKdGvw.js";import"./index.YbX1I6v9.js";import"./el-pagination.B6JBNGZe.js";import"vue3_eman_server/js/_plugin-vue_export-helper.BCo6x5W8.js";import"./validator.Dd25HNXD.js";const K={class:"app-container"},L={class:"search-bar"},Q={class:"mb-10px"},X={class:"dialog-footer"},H={class:"flex-x-between"},J={class:"flex-center ml-5"},W={class:"dialog-footer"},Y=e({name:"Role",inheritAttrs:!1,__name:"index",setup(e){const Y=l(M),Z=l(M),$=l(),ee=l(!1),le=l([]),ae=l(0),te=a({pageNum:1,pageSize:10}),oe=l(),ie=l([]),se=a({title:"",visible:!1}),re=a({sort:1,status:1}),ne=a({name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],code:[{required:!0,message:"请输入角色编码",trigger:"blur"}],dataScope:[{required:!0,message:"请选择数据权限",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}),de=l({}),ue=l(!1),me=l(""),pe=l(!0),ce=l(!0);function fe(){ee.value=!0,D.getPage(te).then((e=>{oe.value=e.list,ae.value=e.total})).finally((()=>{ee.value=!1}))}function ve(){Y.value.resetFields(),te.pageNum=1,fe()}function ge(e){le.value=e.map((e=>e.id))}function be(e){se.visible=!0,e?(se.title="修改角色",D.getFormData(e).then((e=>{Object.assign(re,e)}))):se.title="新增角色"}function je(){Z.value.validate((e=>{if(e){ee.value=!0;const e=re.id;e?D.update(e,re).then((()=>{y.success("修改成功"),ye(),ve()})).finally((()=>ee.value=!1)):D.add(re).then((()=>{y.success("新增成功"),ye(),ve()})).finally((()=>ee.value=!1))}}))}function ye(){se.visible=!1,Z.value.resetFields(),Z.value.clearValidate(),re.id=void 0,re.sort=1,re.status=1}function _e(e){const l=[e||le.value].join(",");l?P.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{ee.value=!0,D.deleteByIds(l).then((()=>{y.success("删除成功"),ve()})).finally((()=>ee.value=!1))}),(()=>{y.info("已取消删除")})):y.warning("请勾选删除项")}function he(){const e=de.value.id;if(e){const l=$.value.getCheckedNodes(!1,!0).map((e=>e.value));ee.value=!0,D.updateRoleMenus(e,l).then((()=>{y.success("分配权限成功"),ue.value=!1,ve()})).finally((()=>{ee.value=!1}))}}function ke(){pe.value=!pe.value,$.value&&Object.values($.value.store.nodesMap).forEach((e=>{pe.value?e.expand():e.collapse()}))}function xe(e,l){return!e||l.label.includes(e)}function Ve(e){ce.value=e}return t(me,(e=>{$.value.filter(e)})),o((()=>{fe()})),(e,l)=>{const a=U,t=O,o=T,y=M,P=I,we=G,Ce=A,Ee=B,Ue=N,Se=F,ze=q,Re=z,Fe=R,qe=S,Ne=E,Be=i("Search"),Ie=i("Switch"),Ae=w,Me=i("QuestionFilled"),Oe=h,Te=C,De=V,Pe=x,Ge=k;return s(),r("div",K,[n("div",L,[d(y,{ref_key:"queryFormRef",ref:Y,model:m(te),inline:!0},{default:u((()=>[d(t,{prop:"keywords",label:"关键字"},{default:u((()=>[d(a,{modelValue:m(te).keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>m(te).keywords=e),placeholder:"角色名称",clearable:"",onKeyup:p(fe,["enter"])},null,8,["modelValue"])])),_:1}),d(t,null,{default:u((()=>[d(o,{type:"primary",icon:"search",onClick:fe},{default:u((()=>l[16]||(l[16]=[c("搜索")]))),_:1}),d(o,{icon:"refresh",onClick:ve},{default:u((()=>l[17]||(l[17]=[c("重置")]))),_:1})])),_:1})])),_:1},8,["model"])]),d(Ue,{shadow:"never"},{default:u((()=>[n("div",Q,[d(o,{type:"success",icon:"plus",onClick:l[1]||(l[1]=e=>be())},{default:u((()=>l[18]||(l[18]=[c("新增")]))),_:1}),d(o,{type:"danger",disabled:0===m(le).length,icon:"delete",onClick:l[2]||(l[2]=e=>_e())},{default:u((()=>l[19]||(l[19]=[c(" 删除 ")]))),_:1},8,["disabled"])]),f((s(),v(Ce,{ref:"dataTableRef",data:m(oe),"highlight-current-row":"",border:"",onSelectionChange:ge},{default:u((()=>[d(P,{type:"selection",width:"55",align:"center"}),d(P,{label:"角色名称",prop:"name","min-width":"100"}),d(P,{label:"角色编码",prop:"code",width:"150"}),d(P,{label:"状态",align:"center",width:"100"},{default:u((e=>[1===e.row.status?(s(),v(we,{key:0,type:"success"},{default:u((()=>l[20]||(l[20]=[c("正常")]))),_:1})):(s(),v(we,{key:1,type:"info"},{default:u((()=>l[21]||(l[21]=[c("禁用")]))),_:1}))])),_:1}),d(P,{label:"排序",align:"center",width:"80",prop:"sort"}),d(P,{fixed:"right",label:"操作",width:"220"},{default:u((e=>[d(o,{type:"primary",size:"small",link:"",icon:"position",onClick:l=>async function(e){const l=e.id;l&&(ue.value=!0,ee.value=!0,de.value.id=l,de.value.name=e.name,ie.value=await _.getOptions(),D.getRoleMenuIds(l).then((e=>{e.forEach((e=>$.value.setChecked(e,!0,!1)))})).finally((()=>{ee.value=!1})))}(e.row)},{default:u((()=>l[22]||(l[22]=[c(" 分配权限 ")]))),_:2},1032,["onClick"]),d(o,{type:"primary",size:"small",link:"",icon:"edit",onClick:l=>be(e.row.id)},{default:u((()=>l[23]||(l[23]=[c(" 编辑 ")]))),_:2},1032,["onClick"]),d(o,{type:"danger",size:"small",link:"",icon:"delete",onClick:l=>_e(e.row.id)},{default:u((()=>l[24]||(l[24]=[c(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[Ge,m(ee)]]),m(ae)>0?(s(),v(Ee,{key:0,total:m(ae),"onUpdate:total":l[3]||(l[3]=e=>g(ae)?ae.value=e:null),page:m(te).pageNum,"onUpdate:page":l[4]||(l[4]=e=>m(te).pageNum=e),limit:m(te).pageSize,"onUpdate:limit":l[5]||(l[5]=e=>m(te).pageSize=e),onPagination:fe},null,8,["total","page","limit"])):b("",!0)])),_:1}),d(Ne,{modelValue:m(se).visible,"onUpdate:modelValue":l[11]||(l[11]=e=>m(se).visible=e),title:m(se).title,width:"500px",onClose:ye},{footer:u((()=>[n("div",X,[d(o,{type:"primary",onClick:je},{default:u((()=>l[27]||(l[27]=[c("确 定")]))),_:1}),d(o,{onClick:ye},{default:u((()=>l[28]||(l[28]=[c("取 消")]))),_:1})])])),default:u((()=>[d(y,{ref_key:"roleFormRef",ref:Z,model:m(re),rules:m(ne),"label-width":"100px"},{default:u((()=>[d(t,{label:"角色名称",prop:"name"},{default:u((()=>[d(a,{modelValue:m(re).name,"onUpdate:modelValue":l[6]||(l[6]=e=>m(re).name=e),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),d(t,{label:"角色编码",prop:"code"},{default:u((()=>[d(a,{modelValue:m(re).code,"onUpdate:modelValue":l[7]||(l[7]=e=>m(re).code=e),placeholder:"请输入角色编码"},null,8,["modelValue"])])),_:1}),d(t,{label:"数据权限",prop:"dataScope"},{default:u((()=>[d(ze,{modelValue:m(re).dataScope,"onUpdate:modelValue":l[8]||(l[8]=e=>m(re).dataScope=e)},{default:u((()=>[(s(),v(Se,{key:0,label:"全部数据",value:0})),(s(),v(Se,{key:1,label:"部门及子部门数据",value:1})),(s(),v(Se,{key:2,label:"本部门数据",value:2})),(s(),v(Se,{key:3,label:"本人数据",value:3}))])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"状态",prop:"status"},{default:u((()=>[d(Fe,{modelValue:m(re).status,"onUpdate:modelValue":l[9]||(l[9]=e=>m(re).status=e)},{default:u((()=>[d(Re,{label:1},{default:u((()=>l[25]||(l[25]=[c("正常")]))),_:1}),d(Re,{label:0},{default:u((()=>l[26]||(l[26]=[c("停用")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"排序",prop:"sort"},{default:u((()=>[d(qe,{modelValue:m(re).sort,"onUpdate:modelValue":l[10]||(l[10]=e=>m(re).sort=e),"controls-position":"right",min:0,style:{width:"100px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),d(Pe,{modelValue:m(ue),"onUpdate:modelValue":l[15]||(l[15]=e=>g(ue)?ue.value=e:null),title:"【"+m(de).name+"】权限分配",size:"500"},{footer:u((()=>[n("div",W,[d(o,{type:"primary",onClick:he},{default:u((()=>l[31]||(l[31]=[c("确 定")]))),_:1}),d(o,{onClick:l[14]||(l[14]=e=>ue.value=!1)},{default:u((()=>l[32]||(l[32]=[c("取 消")]))),_:1})])])),default:u((()=>[n("div",H,[d(a,{modelValue:m(me),"onUpdate:modelValue":l[12]||(l[12]=e=>g(me)?me.value=e:null),clearable:"",class:"w-[150px]",placeholder:"菜单权限名称"},{prefix:u((()=>[d(Be)])),_:1},8,["modelValue"]),n("div",J,[d(o,{type:"primary",size:"small",plain:"",onClick:ke},{icon:u((()=>[d(Ie)])),default:u((()=>[c(" "+j(m(pe)?"收缩":"展开"),1)])),_:1}),d(Ae,{modelValue:m(ce),"onUpdate:modelValue":l[13]||(l[13]=e=>g(ce)?ce.value=e:null),class:"ml-5",onChange:Ve},{default:u((()=>l[29]||(l[29]=[c(" 父子联动 ")]))),_:1},8,["modelValue"]),d(Te,{placement:"bottom"},{content:u((()=>l[30]||(l[30]=[c(" 如果只需勾选菜单权限，不需要勾选子菜单或者按钮权限，请关闭父子联动 ")]))),default:u((()=>[d(Oe,{class:"ml-1 color-[--el-color-primary] inline-block cursor-pointer"},{default:u((()=>[d(Me)])),_:1})])),_:1})])]),d(De,{ref_key:"permTreeRef",ref:$,"node-key":"value","show-checkbox":"",data:m(ie),"filter-node-method":xe,"default-expand-all":!0,"check-strictly":!m(ce),class:"mt-5"},{default:u((({data:e})=>[c(j(e.label),1)])),_:1},8,["data","check-strictly"])])),_:1},8,["modelValue","title"])])}}});export{Y as default};
