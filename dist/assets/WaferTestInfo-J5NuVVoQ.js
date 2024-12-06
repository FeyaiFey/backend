import{z as G,c as L,a as J,d as K,b as Q}from"./zh-cn-BfD5C47i.js";import{d as ee,r as u,O as le,Y as te,X as ae,y as i,Z as oe,o as D,e as R,w as a,i as p,g as l,C as c,$ as ne,c as S,F as re,a0 as de,t as v}from"./index--cZ_FbqS.js";const se={style:{position:"relative"}},ie={class:"ml-5 w-500"},pe={class:"mt-3"},me=ee({__name:"WaferTestInfo",setup(ue){const Y=u("zh-cn"),q=le(()=>Y.value==="zh-cn"?G:te),t=ae({supply:"",wafer_name:"",lot_code:"",program:"",order_date_start:"",order_date_end:""}),_=u(!1),b=u([]),y=u(0),f=u(15),g=u(1),U=u([]),h=u(!1),x=u(!1),C=u(!1);function j(){return{backgroundColor:"#ddebf7",textAlign:"center",color:"black",fontSize:"15px"}}const B=({row:o,rowIndex:e})=>o.status==="Y"?"success-row":"",E=async()=>{_.value=!0,h.value=!0;try{const o=await L({supply:t.supply,wafer_name:t.wafer_name,lot_code:t.lot_code,program:t.program,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:1,pagesize:f.value});g.value=1,b.value=o.data,y.value=o.total,_.value=!1,h.value=!1}catch(o){console.error("查询请求失败！",o),_.value=!1,h.value=!1}},I=()=>{window.location.reload()},A=async(o=g.value)=>{_.value=!0;const e=await L({supply:t.supply,wafer_name:t.wafer_name,lot_code:t.lot_code,program:t.program,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:o,page_size:f.value});b.value=e.data,y.value=e.total,g.value=o,_.value=!1},O=async(o=f.value)=>{_.value=!0;const e=await L({supply:t.supply,wafer_name:t.wafer_name,lot_code:t.lot_code,program:t.program,order_date_start:t.order_date_start,order_date_end:t.order_date_end,page:1,page_size:o});b.value=e.data,y.value=e.total,f.value=o,g.value=1,_.value=!1},M=async()=>{x.value=!0;try{const o=await J({supply:t.supply,wafer_name:t.wafer_name,lot_code:t.lot_code,program:t.program,order_date_start:t.order_date_start,order_date_end:t.order_date_end}),e=window.URL.createObjectURL(new Blob([o.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),n=document.createElement("a");n.href=e,n.setAttribute("download","cpList.xlsx"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(e),x.value=!1}catch(o){console.error("Download failed:",o),x.value=!1}},F=o=>{U.value=o},N=async()=>{C.value=!0;try{const o=U.value.map(k=>k.id);console.log("选中ID列表：",o);const e=await K({ids:o.join(",")}),n=window.URL.createObjectURL(new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),d=document.createElement("a");d.href=n,d.setAttribute("download","cpList.xlsx"),document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(n),C.value=!1}catch(o){console.error("Download failed:",o),C.value=!1}},P=async(o,e)=>{if(o.children===null)try{const n=await Q({order_id:o.order_id});o.children=n.data}catch(n){console.error("加载子节点数据失败:",n)}};return(o,e)=>{const n=i("el-input"),d=i("el-form-item"),k=i("el-date-picker"),V=i("Icon"),z=i("el-button"),H=i("el-form"),w=i("el-descriptions-item"),T=i("el-descriptions"),s=i("el-table-column"),W=i("el-table"),X=i("el-pagination"),Z=i("el-config-provider"),$=oe("loading");return D(),R(Z,{locale:q.value},{default:a(()=>[p("div",null,[l(H,{inline:!0,model:t,class:"demo-form-inline"},{default:a(()=>[l(d,{label:"中测厂商"},{default:a(()=>[l(n,{modelValue:t.supply,"onUpdate:modelValue":e[0]||(e[0]=r=>t.supply=r),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"晶圆名称"},{default:a(()=>[l(n,{modelValue:t.wafer_name,"onUpdate:modelValue":e[1]||(e[1]=r=>t.wafer_name=r),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"晶圆批号"},{default:a(()=>[l(n,{modelValue:t.lot_code,"onUpdate:modelValue":e[2]||(e[2]=r=>t.lot_code=r),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"测试程序"},{default:a(()=>[l(n,{modelValue:t.program,"onUpdate:modelValue":e[3]||(e[3]=r=>t.program=r),style:{width:"150px"},clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"订单日期"},{default:a(()=>[l(k,{modelValue:t.order_date_start,"onUpdate:modelValue":e[4]||(e[4]=r=>t.order_date_start=r),type:"date",placeholder:"起始于",style:{width:"150px"},"value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"订单日期"},{default:a(()=>[l(k,{modelValue:t.order_date_end,"onUpdate:modelValue":e[5]||(e[5]=r=>t.order_date_end=r),type:"date",placeholder:"结束于",style:{width:"150px"},"value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),p("div",null,[l(d,null,{default:a(()=>[l(z,{type:"primary",onClick:E,style:{width:"100px"},loading:h.value},{icon:a(()=>[l(V,{icon:"material-symbols:search"})]),default:a(()=>[e[8]||(e[8]=c(" 查询 "))]),_:1},8,["loading"])]),_:1}),l(d,null,{default:a(()=>[l(z,{type:"primary",onClick:I,style:{width:"100px"}},{icon:a(()=>[l(V,{icon:"ix:reset"})]),default:a(()=>[e[9]||(e[9]=c(" 重置 "))]),_:1})]),_:1}),l(d,null,{default:a(()=>[l(z,{type:"primary",onClick:M,loading:x.value,style:{width:"100px"}},{icon:a(()=>[l(V,{icon:"vscode-icons:file-type-excel"})]),default:a(()=>[e[10]||(e[10]=c(" 导出excel "))]),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"]),p("div",se,[l(z,{disabled:U.value.length===0,style:{position:"absolute",top:"-35px",right:"0","z-index":"1"},onClick:N,loading:C.value},{icon:a(()=>[l(V,{icon:"material-symbols-light:download",size:28})]),default:a(()=>[e[11]||(e[11]=c(" 下载已选择 "))]),_:1},8,["disabled","loading"]),ne((D(),R(W,{data:b.value,"header-cell-style":j,"row-class-name":B,onSelectionChange:F,border:"",lazy:"","row-key":"order_id",onExpandChange:P,"highlight-current-row":"",height:"640",style:{width:"100%"}},{default:a(()=>[l(s,{type:"expand"},{default:a(r=>[p("div",ie,[(D(!0),S(re,null,de(r.row.children,m=>(D(),S("div",{key:m.id,style:{"margin-bottom":"20px",width:"80%"}},[l(T,{class:"margin-top",title:m.main_chip,column:4,border:""},{default:a(()=>[l(w,{"label-align":"center"},{label:a(()=>e[12]||(e[12]=[p("div",{class:"cell-item"}," 物料编码 ",-1)])),default:a(()=>[c(" "+v(m.bom_code),1)]),_:2},1024),l(w,{"label-align":"center"},{label:a(()=>e[13]||(e[13]=[p("div",{class:"cell-item"}," 物料名称 ",-1)])),default:a(()=>[c(" "+v(m.item_name),1)]),_:2},1024),l(w,{"label-align":"center"},{label:a(()=>e[14]||(e[14]=[p("div",{class:"cell-item"}," 片数 ",-1)])),default:a(()=>[c(" "+v(m.bom_second_qty),1)]),_:2},1024),l(w,{"label-align":"center"},{label:a(()=>e[15]||(e[15]=[p("div",{class:"cell-item"}," Die数 ",-1)])),default:a(()=>[c(" "+v(m.bom_business_qty),1)]),_:2},1024),l(w,{"label-align":"center"},{label:a(()=>e[16]||(e[16]=[p("div",{class:"cell-item"}," 批号 ",-1)])),default:a(()=>[c(" "+v(m.bom_lot),1)]),_:2},1024),l(w,{"label-align":"center",width:"100",span:"2.5"},{label:a(()=>e[17]||(e[17]=[p("div",{class:"cell-item"}," 片号 ",-1)])),default:a(()=>[c(" "+v(m.bom_wafer_id),1)]),_:2},1024)]),_:2},1032,["title"])]))),128))])]),_:1}),l(s,{type:"selection",width:"50",align:"center"}),l(s,{prop:"id",label:"序号",width:"80",align:"center",sortable:""}),l(s,{prop:"order_id",label:"订单号",width:"150",sortable:"",align:"center","show-overflow-tooltip":""}),l(s,{prop:"item_name",label:"芯片名称",width:"150",align:"center","show-overflow-tooltip":""}),l(s,{prop:"lot_code",label:"晶圆批号",width:"150",align:"center","show-overflow-tooltip":""}),l(s,{prop:"business_qty",label:"订单数量",width:"100",align:"center"}),l(s,{prop:"arrive_qty",label:"来料数量",width:"100",align:"center"}),l(s,{prop:"cp_step",label:"测试流程",width:"250","show-overflow-tooltip":"",align:"center"}),l(s,{prop:"pgm_name",label:"测试程序",width:"150","show-overflow-tooltip":"",align:"center"}),l(s,{prop:"remark",label:"备注",width:"100","show-overflow-tooltip":"",align:"left"}),l(s,{prop:"complete_date",label:"结束日期",width:"110",sortable:"",align:"center"}),l(s,{prop:"order_date",label:"订单日期",width:"110",fixed:"right",sortable:"",align:"center"}),l(s,{prop:"supply",label:"中测厂","show-overflow-tooltip":"",fixed:"right",width:"150",align:"center"})]),_:1},8,["data"])),[[$,_.value]]),p("div",pe,[l(X,{"current-page":g.value,"onUpdate:currentPage":e[6]||(e[6]=r=>g.value=r),"page-size":f.value,"onUpdate:pageSize":e[7]||(e[7]=r=>f.value=r),"page-sizes":[15,20,30,40,50],size:"default",layout:"total, sizes, prev, pager, next, jumper",total:y.value,background:!0,onSizeChange:O,onCurrentChange:A},null,8,["current-page","page-size","total"])])])])]),_:1},8,["locale"])}}});export{me as default};
