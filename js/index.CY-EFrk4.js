import{aW as e}from"./index.CPcfy5fd.js";const t={uploadUrl:"/dev-api/api/v1/files",upload(t){const a=new FormData;return a.append("file",t),e({url:"/api/v1/files",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}})},deleteByPath:t=>e({url:"/api/v1/files",method:"delete",params:{filePath:t}}),downloadFile:(t,a)=>e({url:t,method:"get",responseType:"blob"}).then((e=>{const t=new Blob([e.data]),o=document.createElement("a"),d=window.URL.createObjectURL(t);o.href=d,o.download=a||"下载文件",o.click(),window.URL.revokeObjectURL(d)}))};export{t as F};
