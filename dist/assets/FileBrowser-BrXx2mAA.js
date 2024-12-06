import{a1 as h,d as N,r as u,S as A,Q as E,y as r,o as P,c as V,g as l,w as s,i as U,t as I,C as _,a2 as z,h as $}from"./index-CulczvjY.js";import D from"./ExcelPreview-DuHdUyuC.js";import S from"./WordPreview-C2VyUeKv.js";import"./vue.runtime.esm-bundler-pCwfCwiI.js";const q=()=>h.get({url:"files/folder"}),H=m=>h.get({url:"files/filelists",params:m}),M=m=>h.get({url:"files/preview",params:m,responseType:"blob"}),Q=m=>h.get({url:"files/download",params:m,responseType:"blob"}),G={class:"common-layout"},J={class:"w-100% my-2"},ee=N({__name:"FileBrowser",setup(m){const L=u([]),R=u([]),v=u([]),x=u([]),b=u(""),f=u(""),j={label:"name"};A(async()=>{const o=await q();L.value=o.data,x.value=k(L.value)});const W=async o=>{if(!o.children||o.children.length===0){const e=o.path;b.value=e;const p=await H({path:e});R.value=p.data,v.value=p.data}},k=o=>o.filter(e=>e.type==="folder").map(e=>({...e,children:k(e.children||[])}));E(f,async()=>{v.value=R.value.filter(o=>!f.value||o.name.toLowerCase().includes(f.value.toLowerCase()))});const O=async o=>{const e=o.name,p=b.value+"\\"+o.name;try{const i=await M({path:p,file_name:e});if(e.endsWith(".pdf")){const a=window.URL.createObjectURL(new Blob([i.data],{type:"application/pdf"})),t=window.open(a,e);t?t.onload=()=>{window.URL.revokeObjectURL(a)}:(console.error("Failed to open PDF window."),window.URL.revokeObjectURL(a))}else if(e.endsWith(".jpg")||e.endsWith(".png")){const a=e.endsWith(".jpg")?"image/jpeg":"image/png",t=new Blob([i.data],{type:a}),c=window.URL.createObjectURL(t),n=window.open();if(n){n.document.title=e;const d=new Image;d.src=c,d.alt="Image Preview",d.style.width="100%",d.onload=()=>{n.document.body.appendChild(d),window.URL.revokeObjectURL(c)},d.onerror=()=>{n.document.write("Failed to load image."),window.URL.revokeObjectURL(c)}}}else if(e.endsWith(".txt")){const a=new Blob([i.data],{type:"text/plain"}),t=window.URL.createObjectURL(a),c=window.open();c&&fetch(t).then(n=>n.text()).then(n=>{c.document.write(`<pre>${n}</pre>`),window.URL.revokeObjectURL(t)})}else if(e.endsWith(".docx")||e.endsWith(".xlsx")){const a=e.endsWith(".docx")?"application/vnd.openxmlformats-officedocument.wordprocessingml.document":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",t=new Blob([i.data],{type:a}),c=window.URL.createObjectURL(t),n=window.open("","_blank");if(!n){console.error("Failed to open Office viewer window.");return}n.document.write('<div id="appoffice"></div>');const d=e.endsWith(".docx")?S:D;setTimeout(()=>{z({render:()=>$(d,{fileUrl:c})}).mount(n.document.getElementById("appoffice"))},1e3)}else console.warn("Unsupported file type for preview.")}catch{alert("fail")}},F=async o=>{const e=o.name,p=b.value+"\\"+o.name;try{const i=await Q({path:p,file_name:e}),a=window.URL.createObjectURL(new Blob([i.data])),t=document.createElement("a");t.href=a,t.setAttribute("download",e),document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)}catch(i){console.error("Download failed:",i)}};return(o,e)=>{const p=r("Icon"),i=r("el-tree"),a=r("ElCard"),t=r("el-aside"),c=r("el-header"),n=r("el-table-column"),d=r("el-input"),y=r("el-button"),B=r("el-table"),T=r("el-main"),C=r("el-container");return P(),V("div",G,[l(C,{class:"w-100% h-780px"},{default:s(()=>[l(t,null,{default:s(()=>[l(a,{class:"h-100%"},{default:s(()=>[U("div",J,[l(p,{icon:"simple-icons:files",class:"mr-2"}),e[1]||(e[1]=U("span",{class:"w-100% my-2"},"全部文件",-1))]),l(i,{data:x.value,props:j,"node-key":"name",onNodeClick:W,"highlight-current":""},{default:s(({node:w,data:g})=>[l(p,{icon:"simple-icons:files",class:"mr-2"}),U("span",null,I(g.name),1)]),_:1},8,["data"])]),_:1})]),_:1}),l(C,null,{default:s(()=>[l(c,{height:"50px"},{default:s(()=>e[2]||(e[2]=[_(" Header ")])),_:1}),l(T,{height:"670px"},{default:s(()=>[l(B,{data:v.value,border:"",height:"100%"},{default:s(()=>[l(n,{prop:"name",label:"文件名"}),e[5]||(e[5]=_(" <> ")),l(n,null,{header:s(()=>[l(d,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=w=>f.value=w),size:"small",placeholder:"搜索文件名",style:{width:"200px"}},null,8,["modelValue"])]),default:s(w=>[l(y,{onClick:g=>O(w.row),type:"primary",size:"small"},{default:s(()=>e[3]||(e[3]=[_("预览")])),_:2},1032,["onClick"]),l(y,{onClick:g=>F(w.row),type:"success",size:"small"},{default:s(()=>e[4]||(e[4]=[_("下载")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})])}}});export{ee as default};
