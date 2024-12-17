import{d as e,r as l,S as t,o as a,b3 as o,e as s,h as r,B as i,l as d,w as n,g as p,W as u,X as m,V as c,f,j,ax as b}from"./index.CPcfy5fd.js";import{v as h}from"./el-loading.DUc5yYfm.js";import{E as y}from"./el-dialog.DxcQ-gYg.js";import"./el-overlay.DftqKqsB.js";import{b as v,a as _}from"./el-radio-group.2MAsiBq3.js";/* empty css                 */import{E as g}from"./el-input.C_NraZld.js";import{E as V}from"./el-input-number.CCAs2zTn.js";/* empty css               */import{E as k,a as x}from"./el-select.DlbtOjyU.js";import"./el-scrollbar.CGy9Vc8U.js";import"./el-popper.oQ_1tnM-.js";import"./el-tree.Bpu2x_8u.js";import"./el-checkbox.CxwJjOlx.js";import{E as w}from"./el-tree-select.BvQ0LvDh.js";import{E as C}from"./el-card.CoAyFuo3.js";import{E,a as I}from"./el-table-column.BrLwSw0l.js";import"./el-tooltip.l0sNRNKZ.js";import{E as U,a as q}from"./el-form-item.lHJDIO-5.js";import{E as B}from"./el-button.DFafuuzN.js";import{D as F}from"./dept.Cxehj4q3.js";import{E as z}from"./el-message-box.CIvl2Gml.js";import{E as D}from"./index.C0I96C1I.js";import"./index.B2Oee_uC.js";import"./refs.-Fdu2DQS.js";import"./index.BzmTEwIo.js";import"./vnode.WdqDFRAO.js";import"./event.CIKxL71l.js";import"./scroll.CE5T6uQg.js";import"./use-form-common-props.BseJruiQ.js";import"./index.BO5voRhJ.js";import"./index.CKqnEUPD.js";import"./index.BCOw_d-n.js";import"./index.CFbp2rmx.js";import"./token.DWNpOE8r.js";import"./strings.C3l49zS7.js";import"./castArray.C6a8QyiS.js";import"./isEqual.wucDy0nb.js";import"vue3_eman_server/js/Uint8Array.DxW3ztND.js";import"./debounce.erloDUjh.js";import"./_baseIteratee.VRSKdGvw.js";import"./index.YbX1I6v9.js";import"./index.C-5mtHV7.js";import"./validator.Dd25HNXD.js";const A={class:"app-container"},K={class:"search-bar"},O={class:"mb-10px"},R={class:"dialog-footer"},S=e({name:"Dept",inheritAttrs:!1,__name:"index",setup(e){const S=l(U),G=l(U),L=l(!1),P=l([]),T=t({}),X=t({title:"",visible:!1}),H=l(),M=l(),N=t({status:1,parentId:"0",sort:1}),Q=t({parentId:[{required:!0,message:"上级部门不能为空",trigger:"change"}],name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],code:[{required:!0,message:"部门编号不能为空",trigger:"blur"}],sort:[{required:!0,message:"显示排序不能为空",trigger:"blur"}]});function W(){L.value=!0,F.getList(T).then((e=>{H.value=e,L.value=!1}))}function Y(){S.value.resetFields(),W()}function $(e){P.value=e.map((e=>e.id))}async function J(e,l){const t=await F.getOptions();M.value=[{value:"0",label:"顶级部门",children:t}],X.visible=!0,l?(X.title="修改部门",F.getFormData(l).then((e=>{Object.assign(N,e)}))):(X.title="新增部门",N.parentId=e||"0")}function Z(){G.value.validate((e=>{if(e){L.value=!0;const e=N.id;e?F.update(e,N).then((()=>{b.success("修改成功"),le(),W()})).finally((()=>L.value=!1)):F.add(N).then((()=>{b.success("新增成功"),le(),W()})).finally((()=>L.value=!1))}}))}function ee(e){const l=[e||P.value].join(",");l?z.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{L.value=!0,F.deleteByIds(l).then((()=>{b.success("删除成功"),Y()})).finally((()=>L.value=!1))}),(()=>{b.info("已取消删除")})):b.warning("请勾选删除项")}function le(){X.visible=!1,G.value.resetFields(),G.value.clearValidate(),N.id=void 0,N.parentId="0",N.status=1,N.sort=1}return a((()=>{W()})),(e,l)=>{const t=g,a=q,b=k,F=x,z=B,te=U,ae=E,oe=D,se=I,re=C,ie=w,de=V,ne=v,pe=_,ue=y,me=o("hasPerm"),ce=h;return s(),r("div",A,[i("div",K,[d(te,{ref_key:"queryFormRef",ref:S,model:p(T),inline:!0},{default:n((()=>[d(a,{label:"关键字",prop:"keywords"},{default:n((()=>[d(t,{modelValue:p(T).keywords,"onUpdate:modelValue":l[0]||(l[0]=e=>p(T).keywords=e),placeholder:"部门名称",onKeyup:u(W,["enter"])},null,8,["modelValue"])])),_:1}),d(a,{label:"部门状态",prop:"status"},{default:n((()=>[d(F,{modelValue:p(T).status,"onUpdate:modelValue":l[1]||(l[1]=e=>p(T).status=e),placeholder:"全部",clearable:"",class:"!w-[100px]"},{default:n((()=>[d(b,{value:1,label:"正常"}),d(b,{value:0,label:"禁用"})])),_:1},8,["modelValue"])])),_:1}),d(a,null,{default:n((()=>[d(z,{class:"filter-item",type:"primary",icon:"search",onClick:W},{default:n((()=>l[10]||(l[10]=[m(" 搜索 ")]))),_:1}),d(z,{icon:"refresh",onClick:Y},{default:n((()=>l[11]||(l[11]=[m("重置")]))),_:1})])),_:1})])),_:1},8,["model"])]),d(re,{shadow:"never"},{default:n((()=>[i("div",O,[c((s(),f(z,{type:"success",icon:"plus",onClick:l[2]||(l[2]=e=>J())},{default:n((()=>l[12]||(l[12]=[m(" 新增 ")]))),_:1})),[[me,["sys:dept:add"]]]),c((s(),f(z,{type:"danger",disabled:0===p(P).length,icon:"delete",onClick:l[3]||(l[3]=e=>ee())},{default:n((()=>l[13]||(l[13]=[m(" 删除 ")]))),_:1},8,["disabled"])),[[me,["sys:dept:delete"]]])]),c((s(),f(se,{data:p(H),"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:$},{default:n((()=>[d(ae,{type:"selection",width:"55",align:"center"}),d(ae,{prop:"name",label:"部门名称","min-width":"200"}),d(ae,{prop:"code",label:"部门编号",width:"200"}),d(ae,{prop:"status",label:"状态",width:"100"},{default:n((e=>[1==e.row.status?(s(),f(oe,{key:0,type:"success"},{default:n((()=>l[14]||(l[14]=[m("正常")]))),_:1})):(s(),f(oe,{key:1,type:"info"},{default:n((()=>l[15]||(l[15]=[m("禁用")]))),_:1}))])),_:1}),d(ae,{prop:"sort",label:"排序",width:"100"}),d(ae,{label:"操作",fixed:"right",align:"left",width:"200"},{default:n((e=>[c((s(),f(z,{type:"primary",link:"",size:"small",icon:"plus",onClick:j((l=>J(e.row.id,void 0)),["stop"])},{default:n((()=>l[16]||(l[16]=[m(" 新增 ")]))),_:2},1032,["onClick"])),[[me,["sys:dept:add"]]]),c((s(),f(z,{type:"primary",link:"",size:"small",icon:"edit",onClick:j((l=>J(e.row.parentId,e.row.id)),["stop"])},{default:n((()=>l[17]||(l[17]=[m(" 编辑 ")]))),_:2},1032,["onClick"])),[[me,["sys:dept:edit"]]]),c((s(),f(z,{type:"danger",link:"",size:"small",icon:"delete",onClick:j((l=>ee(e.row.id)),["stop"])},{default:n((()=>l[18]||(l[18]=[m(" 删除 ")]))),_:2},1032,["onClick"])),[[me,["sys:dept:delete"]]])])),_:1})])),_:1},8,["data"])),[[ce,p(L)]])])),_:1}),d(ue,{modelValue:p(X).visible,"onUpdate:modelValue":l[9]||(l[9]=e=>p(X).visible=e),title:p(X).title,width:"600px",onClosed:le},{footer:n((()=>[i("div",R,[d(z,{type:"primary",onClick:Z},{default:n((()=>l[21]||(l[21]=[m("确 定")]))),_:1}),d(z,{onClick:le},{default:n((()=>l[22]||(l[22]=[m("取 消")]))),_:1})])])),default:n((()=>[d(te,{ref_key:"deptFormRef",ref:G,model:p(N),rules:p(Q),"label-width":"80px"},{default:n((()=>[d(a,{label:"上级部门",prop:"parentId"},{default:n((()=>[d(ie,{modelValue:p(N).parentId,"onUpdate:modelValue":l[4]||(l[4]=e=>p(N).parentId=e),placeholder:"选择上级部门",data:p(M),filterable:"","check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"])])),_:1}),d(a,{label:"部门名称",prop:"name"},{default:n((()=>[d(t,{modelValue:p(N).name,"onUpdate:modelValue":l[5]||(l[5]=e=>p(N).name=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1}),d(a,{label:"部门编号",prop:"code"},{default:n((()=>[d(t,{modelValue:p(N).code,"onUpdate:modelValue":l[6]||(l[6]=e=>p(N).code=e),placeholder:"请输入部门编号"},null,8,["modelValue"])])),_:1}),d(a,{label:"显示排序",prop:"sort"},{default:n((()=>[d(de,{modelValue:p(N).sort,"onUpdate:modelValue":l[7]||(l[7]=e=>p(N).sort=e),"controls-position":"right",style:{width:"100px"},min:0},null,8,["modelValue"])])),_:1}),d(a,{label:"部门状态"},{default:n((()=>[d(pe,{modelValue:p(N).status,"onUpdate:modelValue":l[8]||(l[8]=e=>p(N).status=e)},{default:n((()=>[d(ne,{value:1},{default:n((()=>l[19]||(l[19]=[m("正常")]))),_:1}),d(ne,{value:0},{default:n((()=>l[20]||(l[20]=[m("禁用")]))),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{S as default};