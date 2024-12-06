import{z as G,p as L,b as J,s as K,q as Q}from"./zh-cn-BoPpWmbP.js";import{d as W,X as ee,r as p,O as le,Y as te,y as s,Z as ae,o as U,c as R,g as e,w as a,i as u,C as c,$ as oe,e as ne,F as de,a0 as re,t as v}from"./index-DDPUJ7JU.js";const ie={style:{position:"relative"}},se={class:"ml-5 w-500"},pe={class:"mt-3"},me=W({__name:"PackageInfo",setup(ue){function q(){return{backgroundColor:"#ddebf7",textAlign:"center",color:"black",fontSize:"15px"}}const S=({row:o,rowIndex:l})=>o.status==="Y"?"success-row":"",t=ee({item_name:"",package:"",bonding:"",lot_code:"",supply:"",order_date_start:"",order_date_end:""}),_=p(!1),f=p([]),y=p(0),g=p(15),b=p(1),D=p([]),h=p(!1),k=p(!1),x=p(!1),Y=p("zh-cn"),j=le(()=>Y.value==="zh-cn"?G:te),B=async()=>{_.value=!0,h.value=!0;try{const o=await L({item_name:t.item_name,package:t.package,bonding:t.bonding,lot_code:t.lot_code,supply:t.supply,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:1,pagesize:g.value});b.value=1,f.value=o.data,y.value=o.total,_.value=!1,h.value=!1}catch{console.error("数据请求失败！"),_.value=!1,h.value=!1}},E=()=>{window.location.reload()},P=async(o,l)=>{if(o.children===null)try{const r=await J({order_id:o.order_id});o.children=r.data}catch(r){console.error("加载子节点数据失败:",r)}},A=async(o=b.value)=>{_.value=!0;const l=await L({item_name:t.item_name,package:t.package,bonding:t.bonding,lot_code:t.lot_code,supply:t.supply,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:o,page_size:g.value});f.value=l.data,y.value=l.total,b.value=o,_.value=!1},I=async(o=g.value)=>{_.value=!0;const l=await L({item_name:t.item_name,package:t.package,bonding:t.bonding,lot_code:t.lot_code,supply:t.supply,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:1,page_size:o});f.value=l.data,y.value=l.total,g.value=o,b.value=1,_.value=!1},O=o=>{D.value=o},M=async()=>{x.value=!0;try{const o=D.value.map(C=>C.id),l=await K({ids:o.join(",")}),r=window.URL.createObjectURL(new Blob([l.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),i=document.createElement("a");i.href=r,i.setAttribute("download","packageList.xlsx"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r),x.value=!1}catch(o){console.error("Download failed:",o),x.value=!1}},F=async()=>{k.value=!0;try{const o=await Q({item_name:t.item_name,package:t.package,lot_code:t.lot_code,bonding:t.bonding,order_date_start:t.order_date_start,order_date_end:t.order_date_end,supply:t.supply}),l=window.URL.createObjectURL(new Blob([o.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),r=document.createElement("a");r.href=l,r.setAttribute("download","packageList.xlsx"),document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(l),k.value=!1}catch(o){console.error("Download failed:",o),k.value=!1}};return(o,l)=>{const r=s("el-input"),i=s("el-form-item"),C=s("el-date-picker"),V=s("Icon"),z=s("el-button"),N=s("el-form"),w=s("el-descriptions-item"),H=s("el-descriptions"),n=s("el-table-column"),T=s("el-table"),X=s("el-pagination"),Z=s("el-config-provider"),$=ae("loading");return U(),R("div",null,[e(Z,{locale:j.value},{default:a(()=>[u("div",null,[e(N,{inline:!0,model:t,class:"demo-form-inline"},{default:a(()=>[e(i,{label:"芯片名称"},{default:a(()=>[e(r,{modelValue:t.item_name,"onUpdate:modelValue":l[0]||(l[0]=d=>t.item_name=d),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"封装形式"},{default:a(()=>[e(r,{modelValue:t.package,"onUpdate:modelValue":l[1]||(l[1]=d=>t.package=d),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"打印批号"},{default:a(()=>[e(r,{modelValue:t.lot_code,"onUpdate:modelValue":l[2]||(l[2]=d=>t.lot_code=d),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"打线图号"},{default:a(()=>[e(r,{modelValue:t.bonding,"onUpdate:modelValue":l[3]||(l[3]=d=>t.bonding=d),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"订单日期"},{default:a(()=>[e(C,{modelValue:t.order_date_start,"onUpdate:modelValue":l[4]||(l[4]=d=>t.order_date_start=d),type:"date",placeholder:"起始于",style:{width:"150px"},"value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"订单日期"},{default:a(()=>[e(C,{modelValue:t.order_date_end,"onUpdate:modelValue":l[5]||(l[5]=d=>t.order_date_end=d),type:"date",placeholder:"结束于",style:{width:"150px"},"value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{label:"封装厂商"},{default:a(()=>[e(r,{modelValue:t.supply,"onUpdate:modelValue":l[6]||(l[6]=d=>t.supply=d),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),e(i,null,{default:a(()=>[e(z,{type:"primary",onClick:B,style:{width:"100px"},loading:h.value},{icon:a(()=>[e(V,{icon:"material-symbols:search"})]),default:a(()=>[l[9]||(l[9]=c(" 查询 "))]),_:1},8,["loading"])]),_:1}),e(i,null,{default:a(()=>[e(z,{type:"primary",onClick:E,style:{width:"100px"}},{icon:a(()=>[e(V,{icon:"ix:reset"})]),default:a(()=>[l[10]||(l[10]=c(" 重置 "))]),_:1})]),_:1}),e(i,null,{default:a(()=>[e(z,{type:"primary",onClick:F,loading:k.value,style:{width:"100px"}},{icon:a(()=>[e(V,{icon:"vscode-icons:file-type-excel"})]),default:a(()=>[l[11]||(l[11]=c(" 导出excel "))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),u("div",ie,[e(z,{disabled:D.value.length===0,style:{position:"absolute",top:"-35px",right:"0","z-index":"1"},onClick:M,loading:x.value},{icon:a(()=>[e(V,{icon:"material-symbols-light:download",size:28})]),default:a(()=>[l[12]||(l[12]=c(" 下载已选择 "))]),_:1},8,["disabled","loading"]),oe((U(),ne(T,{data:f.value,"header-cell-style":q,"row-class-name":S,onSelectionChange:O,border:"",lazy:"","row-key":"order_id",onExpandChange:P,"highlight-current-row":"",height:"640",style:{width:"100%"}},{default:a(()=>[e(n,{type:"expand"},{default:a(d=>[u("div",se,[(U(!0),R(de,null,re(d.row.children,m=>(U(),R("div",{key:m.id,style:{"margin-bottom":"20px",width:"80%"}},[e(H,{class:"margin-top",title:m.main_chip,column:4,border:""},{default:a(()=>[e(w,{"label-align":"center"},{label:a(()=>l[13]||(l[13]=[u("div",{class:"cell-item"}," 物料编码 ",-1)])),default:a(()=>[c(" "+v(m.bom_code),1)]),_:2},1024),e(w,{"label-align":"center"},{label:a(()=>l[14]||(l[14]=[u("div",{class:"cell-item"}," 物料名称 ",-1)])),default:a(()=>[c(" "+v(m.item_name),1)]),_:2},1024),e(w,{"label-align":"center"},{label:a(()=>l[15]||(l[15]=[u("div",{class:"cell-item"}," 片数 ",-1)])),default:a(()=>[c(" "+v(m.bom_second_qty),1)]),_:2},1024),e(w,{"label-align":"center"},{label:a(()=>l[16]||(l[16]=[u("div",{class:"cell-item"}," Die数 ",-1)])),default:a(()=>[c(" "+v(m.bom_business_qty),1)]),_:2},1024),e(w,{"label-align":"center"},{label:a(()=>l[17]||(l[17]=[u("div",{class:"cell-item"}," 批号 ",-1)])),default:a(()=>[c(" "+v(m.bom_lot),1)]),_:2},1024),e(w,{"label-align":"center",width:"100",span:"2.5"},{label:a(()=>l[18]||(l[18]=[u("div",{class:"cell-item"}," 片号 ",-1)])),default:a(()=>[c(" "+v(m.bom_wafer_id),1)]),_:2},1024)]),_:2},1032,["title"])]))),128))])]),_:1}),e(n,{type:"selection",width:"50",align:"center"}),e(n,{prop:"id",label:"序号",width:"80",align:"center",sortable:""}),e(n,{prop:"order_id",label:"订单号",width:"150",sortable:"",align:"center","show-overflow-tooltip":""}),e(n,{prop:"item_name",label:"芯片名称",width:"250",align:"right","show-overflow-tooltip":""}),e(n,{prop:"package",label:"封装形式",width:"100",align:"right","show-overflow-tooltip":""}),e(n,{prop:"lot_code",label:"打印批号",width:"150",align:"right","show-overflow-tooltip":""}),e(n,{prop:"bonding",label:"打线图号",width:"150","show-overflow-tooltip":""}),e(n,{prop:"business_qty",label:"订单数量",width:"100",align:"right"}),e(n,{prop:"arrive_qty",label:"来料数量",width:"100",align:"right"}),e(n,{prop:"assy_step",label:"加工类型",width:"150","show-overflow-tooltip":"",align:"center"}),e(n,{prop:"pgm_name",label:"成测程序",width:"100","show-overflow-tooltip":"",align:"right"}),e(n,{prop:"remark",label:"备注",width:"100","show-overflow-tooltip":"",align:"left"}),e(n,{prop:"loading_method",label:"装片方式",width:"90","show-overflow-tooltip":""}),e(n,{prop:"wire",label:"线材",width:"100",align:"right","show-overflow-tooltip":""}),e(n,{prop:"package_remark",label:"特殊备注",width:"100","show-overflow-tooltip":""}),e(n,{prop:"complete_date",label:"结束日期",width:"110",sortable:"",align:"center"}),e(n,{prop:"order_date",label:"订单日期",width:"110",fixed:"right",sortable:"",align:"center"}),e(n,{prop:"supply",label:"封装厂","show-overflow-tooltip":"",fixed:"right",width:"100",align:"center"})]),_:1},8,["data"])),[[$,_.value]]),u("div",pe,[e(X,{"current-page":b.value,"onUpdate:currentPage":l[7]||(l[7]=d=>b.value=d),"page-size":g.value,"onUpdate:pageSize":l[8]||(l[8]=d=>g.value=d),"page-sizes":[15,20,30,40,50],size:"default",layout:"total, sizes, prev, pager, next, jumper",total:y.value,background:!0,onSizeChange:I,onCurrentChange:A},null,8,["current-page","page-size","total"])])])]),_:1},8,["locale"])])}}});export{me as default};
