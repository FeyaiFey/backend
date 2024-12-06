import{r as L,u as e,g as o,I as fe,F as q,f as R,ah as Ae,ai as ae,aj as Mt,ak as Rt,d as F,b as N,O as v,a as ce,N as ze,k as ie,al as At,am as xt,_ as te,X as Be,an as Me,ao as zt,S as Ue,Q as pe,$ as Z,Z as be,y as U,o as S,e as D,w as y,ap as Ne,c as E,a0 as He,aq as de,C as Y,t as j,v as Ot,n as P,ar as qe,as as Oe,ae as _t,at as ht,i as g,s as he,au as Ft,av as jt,aw as Dt,p as We,ax as Et,z as Ge,M as Bt,ay as Ut,az as Nt,aA as Ht,aB as qt,ab as ke,aC as Wt,j as bt,aD as Gt,aE as Kt,aF as Jt,aG as Qt,T as Xt,aH as Zt,aI as Yt}from"./index-B-6TmoC4.js";import{_ as el}from"./Logo-DzyLOq7o.js";import{_ as tl}from"./Dialog.vue_vue_type_style_index_0_lang-DJIulT27.js";const ll={id:"id",children:"children",pid:"pid"},Ke=a=>Object.assign({},ll,a),ol=(a,r={})=>{r=Ke(r);const{children:t}=r,l=[...a];for(let s=0;s<l.length;s++)l[s][t]&&l.splice(s+1,0,...l[s][t]);return l},nl=(a,r,t={})=>{t=Ke(t);const l=[],s=[...a],u=new Set,{children:n}=t;for(;s.length;){const c=s[0];if(u.has(c))l.pop(),s.shift();else if(u.add(c),c[n]&&s.unshift(...c[n]),l.push(c),r(c))return l}return null},al=(a,r,t={})=>{t=Ke(t);const l=t.children;function s(u){return u.map(n=>({...n})).filter(n=>(n[l]=n[l]&&s(n[l]),r(n)||n[l]&&n[l].length))}return s(a)},sl=(a,r)=>(nl(a,l=>l.path===r)||[]).map(l=>l.path),rl=(a=[],r)=>{const t=L(),l=a.filter(s=>(s.meta??{}).hidden?!1:(t.value=s,!0));return l.length===1?{oneShowingChild:!0,onlyOneChild:e(t)}:l.length?{oneShowingChild:!1,onlyOneChild:e(t)}:(t.value={...r,path:"",noShowingChildren:!0},{oneShowingChild:!0,onlyOneChild:e(t)})},il=()=>({renderMenuTitle:r=>{const{title:t="Please set title",icon:l}=r;return l?o(q,null,[o(fe,{icon:r.icon},null),o("span",{class:"v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap"},[t])]):o("span",{class:"v-menu__title overflow-hidden overflow-ellipsis whitespace-nowrap"},[t])}}),{getPrefixCls:cl}=R(),ul=cl("submenu"),{renderMenuTitle:vt}=il(),dl=a=>{const r=(t,l="/")=>t.filter(s=>{var u;return!((u=s.meta)!=null&&u.hidden)}).map(s=>{const u=s.meta??{},{oneShowingChild:n,onlyOneChild:c}=rl(s.children,s),h=Ae(s.path)?s.path:ae(l,s.path);return n&&(!(c!=null&&c.children)||c!=null&&c.noShowingChildren)&&!(u!=null&&u.alwaysShow)?o(Mt,{index:c?ae(h,c.path):h},{default:()=>vt(c?c==null?void 0:c.meta:u)}):o(Rt,{index:h,teleported:!0,popperClass:e(a)==="vertical"?`${ul}-popper--vertical`:""},{title:()=>vt(u),default:()=>r(s.children,h)})});return{renderMenuItem:r}};function fl(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!xt(a)}const{getPrefixCls:pl}=R(),we=pl("menu"),hl=F({name:"Menu",props:{menuSelect:{type:Function,default:void 0}},setup(a){const r=N(),t=v(()=>r.getLayout),{push:l,currentRoute:s}=ce(),u=ze(),n=v(()=>["classic","topLeft","cutMenu"].includes(e(t))?"vertical":"horizontal"),c=v(()=>e(t)==="cutMenu"?u.getMenuTabRouters:u.getRouters),h=v(()=>r.getCollapse),f=v(()=>r.getUniqueOpened),m=v(()=>{const{meta:p,path:i}=e(s);return p.activeMenu?p.activeMenu:i}),d=p=>{a.menuSelect&&a.menuSelect(p),Ae(p)?window.open(p):l(p)},$=()=>{if(e(t)==="top")return x();{let p;return o(ie,null,fl(p=x())?p:{default:()=>[p]})}},x=()=>o(At,{defaultActive:e(m),mode:e(n),collapse:e(t)==="top"||e(t)==="cutMenu"?!1:e(h),uniqueOpened:e(t)==="top"?!1:e(f),backgroundColor:"var(--left-menu-bg-color)",textColor:"var(--left-menu-text-color)",activeTextColor:"var(--left-menu-text-active-color)",popperClass:e(n)==="vertical"?`${we}-popper--vertical`:`${we}-popper--horizontal`,onSelect:d},{default:()=>{const{renderMenuItem:p}=dl(n);return p(e(c))}});return()=>o("div",{id:we,class:[`${we} ${we}__${e(n)}`,"h-[100%] overflow-hidden flex-col bg-[var(--left-menu-bg-color)]",{"w-[var(--left-menu-min-width)]":e(h)&&e(t)!=="cutMenu","w-[var(--left-menu-max-width)]":!e(h)&&e(t)!=="cutMenu"}]},[$()])}}),Ve=te(hl,[["__scopeId","data-v-d0221e29"]]),Re=Be({}),vl=a=>{for(const r of a){const t=r.meta??{};t!=null&&t.hidden||(Re[r.path]=[])}},yt=(a,r)=>{const t=[];for(const l of a){let s=null;const u=l.meta??{};if(!u.hidden||u.canTo){const n=sl(r,l.path),c=Ae(l.path)?l.path:n.join("/");s=Me(l),s.path=c,l.children&&s&&(s.children=yt(l.children,r)),s&&t.push(s),n.length&&Reflect.has(Re,n[0])&&Re[n[0]].push(c)}}return t},{getPrefixCls:ml,variables:gl}=R(),Ee=ml("tab-menu"),wl=F({name:"TabMenu",directives:{ClickOutside:zt},setup(){const{push:a,currentRoute:r}=ce(),t=N(),l=v(()=>t.getCollapse),s=v(()=>t.getFixedMenu),u=ze(),n=v(()=>u.getRouters),c=v(()=>e(n).filter(i=>{var _;return!((_=i==null?void 0:i.meta)!=null&&_.hidden)})),h=()=>{t.setCollapse(!e(l))};Ue(()=>{var i;if(e(s)){const _=`/${e(r).path.split("/")[1]}`,A=(i=e(c).find(C=>{var B,z,K;return(((B=C.meta)==null?void 0:B.alwaysShow)||((z=C==null?void 0:C.children)==null?void 0:z.length)&&((K=C==null?void 0:C.children)==null?void 0:K.length)>1)&&C.path===_}))==null?void 0:i.children;d.value=_,A&&u.setMenuTabRouters(Me(A).map(C=>(C.path=ae(e(d),C.path),C)))}}),pe(()=>n.value,i=>{vl(i),yt(i,i)},{immediate:!0,deep:!0});const f=L(!0);pe(()=>l.value,i=>{i?f.value=!i:setTimeout(()=>{f.value=!i},200)},{immediate:!0});const m=L(!!e(s)),d=L(""),$=i=>{if(Ae(i.path)){window.open(i.path);return}const _=i.children?i.path:i.path.split("/")[0],A=e(d);d.value=i.children?i.path:i.path.split("/")[0],i.children?((_===A||!e(m))&&(m.value=!e(m)),e(m)&&u.setMenuTabRouters(Me(i.children).map(C=>(C.path=ae(e(d),C.path),C)))):(a(i.path),u.setMenuTabRouters([]),m.value=!1)},x=i=>{const{path:_}=e(r);return!!Re[i].includes(_)},p=()=>{e(s)||(m.value=!1)};return()=>Z(o("div",{id:`${gl.namespace}-menu`,class:[Ee,"relative bg-[var(--left-menu-bg-color)] top-1px layout-border__right",{"w-[var(--tab-menu-max-width)]":!e(l),"w-[var(--tab-menu-min-width)]":e(l)}]},[o(ie,{class:"!h-[calc(100%-var(--tab-menu-collapse-height)-1px)]"},{default:()=>[o("div",null,{default:()=>e(c).map(i=>{var A,C,B,z,K,J;const _=(A=i.meta)!=null&&A.alwaysShow||(C=i==null?void 0:i.children)!=null&&C.length&&((B=i==null?void 0:i.children)==null?void 0:B.length)>1?i:{...(i==null?void 0:i.children)&&(i==null?void 0:i.children[0]),path:ae(i.path,(z=(i==null?void 0:i.children)&&(i==null?void 0:i.children[0]))==null?void 0:z.path)};return o("div",{class:[`${Ee}__item`,"text-center text-12px relative py-12px cursor-pointer",{"is-active":x(i.path)}],onClick:()=>{$(_)}},[o("div",null,[o(fe,{icon:(K=_==null?void 0:_.meta)==null?void 0:K.icon},null)]),e(f)?o("p",{class:"break-words mt-5px px-2px"},[((J=_.meta)==null?void 0:J.title)||""]):void 0])})})]}),o("div",{class:[`${Ee}--collapse`,"text-center h-[var(--tab-menu-collapse-height)] leading-[var(--tab-menu-collapse-height)] cursor-pointer"],onClick:h},[o(fe,{icon:e(l)?"ep:d-arrow-right":"ep:d-arrow-left"},null)]),o(Ve,{class:["!absolute top-0 z-3000",{"!left-[var(--tab-menu-min-width)]":e(l),"!left-[var(--tab-menu-max-width)]":!e(l),"!w-[var(--left-menu-max-width)] border-r-1 border-r-solid border-[var(--el-border-color)]":e(m)||e(s),"!w-0":!e(m)&&!e(s)}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null)]),[[be("click-outside"),p]])}}),xl=te(wl,[["__scopeId","data-v-00fc41ca"]]),Ct=(a,r="")=>{let t=[];return a.forEach(l=>{const s=l.meta??{},u=ae(r,l.path);if(s!=null&&s.affix&&t.push({...l,path:u,fullPath:u}),l.children){const n=Ct(l.children,u);n.length>=1&&(t=[...t,...n])}}),t},mt=F({__name:"ContextMenu",props:{schema:{type:Array,default:()=>[]},trigger:{type:String,default:"contextmenu"},tagItem:{type:Object,default:()=>({})}},emits:["visibleChange"],setup(a,{expose:r,emit:t}){const{getPrefixCls:l}=R(),s=l("context-menu"),u=t,n=a,c=m=>{m.command&&m.command(m)},h=m=>{u("visibleChange",m,n.tagItem)},f=L();return r({elDropdownMenuRef:f,tagItem:n.tagItem}),(m,d)=>{const $=U("Icon");return S(),D(e(qe),{ref_key:"elDropdownMenuRef",ref:f,class:P(e(s)),trigger:a.trigger,placement:"bottom-start",onCommand:c,onVisibleChange:h,"popper-class":"v-context-menu-popper"},{dropdown:y(()=>[o(e(Ne),null,{default:y(()=>[(S(!0),E(q,null,He(a.schema,(x,p)=>(S(),D(e(de),{key:`dropdown${p}`,divided:x.divided,disabled:x.disabled,command:x},{default:y(()=>[o($,{icon:x.icon},null,8,["icon"]),Y(" "+j(x.label),1)]),_:2},1032,["divided","disabled","command"]))),128))]),_:1})]),default:y(()=>[Ot(m.$slots,"default")]),_:3},8,["class","trigger"])}}}),_l=(a,r,t,l)=>(a/=l/2,a<1?t/2*a*a+r:(a--,-t/2*(a*(a-2)-1)+r)),bl=(a,r,t)=>{a[r]=t};function xe({el:a,position:r="scrollLeft",to:t,duration:l=500,callback:s}){const u=L(!1),n=a[r],c=t-n,h=20;let f=0;function m(){if(!e(u))return;f+=h;const x=_l(f,n,c,l);bl(a,r,x),f<l&&e(u)?requestAnimationFrame(m):s&&s()}function d(){u.value=!0,m()}function $(){u.value=!1}return{start:d,stop:$}}const yl=()=>{const a=Oe(),{replace:r,currentRoute:t}=ce(),l=v(()=>a.getSelectedTag);return{closeAll:d=>{a.delAllViews(),d==null||d()},closeLeft:d=>{a.delLeftViews(e(l)),d==null||d()},closeRight:d=>{a.delRightViews(e(l)),d==null||d()},closeOther:d=>{a.delOthersViews(e(l)),d==null||d()},closeCurrent:(d,$)=>{var x;(x=d==null?void 0:d.meta)!=null&&x.affix||(a.delView(d||e(t)),$==null||$())},refreshPage:async(d,$)=>{a.delCachedView();const{path:x,query:p}=d||e(t);await _t(),r({path:"/redirect"+x,query:p}),$==null||$()},setTitle:(d,$)=>{a.setTitle(d,$)}}},Cl=["id"],$l={class:"overflow-hidden flex-1"},kl={class:"flex h-full"},Sl=["onClick"],Pl=F({__name:"TagsView",setup(a){const{getPrefixCls:r}=R(),t=r("tags-view"),{currentRoute:l,push:s}=ce(),{closeAll:u,closeLeft:n,closeRight:c,closeOther:h,closeCurrent:f,refreshPage:m}=yl(),d=ze(),$=v(()=>d.getRouters),x=Oe(),p=v(()=>x.getVisitedViews),i=L([]),_=v(()=>x.getSelectedTag),A=x.setSelectedTag,C=N(),B=v(()=>C.getTagsViewIcon),z=v(()=>C.getIsDark),K=()=>{i.value=Ct(e($));for(const w of e(i))w.name&&x.addVisitedView(Me(w))},J=()=>{const{name:w}=e(l);w&&(A(e(l)),x.addView(e(l)))},Q=w=>{f(w,()=>{Ye(w)&&T()})},T=()=>{const k=x.getVisitedViews.slice(-1)[0];if(k)s(k);else{if(e(l).path===d.getAddRouters[0].path||e(l).path===d.getAddRouters[0].redirect){J();return}s(d.getAddRouters[0].path)}},ue=()=>{u(()=>{T()})},se=()=>{h()},je=async w=>{m(w)},Qe=()=>{n()},Xe=()=>{c()},St=async()=>{await _t();for(const w of e(p))if(w.fullPath===e(l).path){Pt(w),w.fullPath!==e(l).fullPath&&x.updateVisitedView(e(l));break}},Ze=ht(),Pt=w=>{var le;const k=(le=e(De))==null?void 0:le.wrapRef;let V=null,O=null;const H=e(Ze);if(H.length>0&&(V=H[0],O=H[H.length-1]),(V==null?void 0:V.to).fullPath===w.fullPath){const{start:X}=xe({el:k,position:"scrollLeft",to:0,duration:500});X()}else if((O==null?void 0:O.to).fullPath===w.fullPath){const{start:X}=xe({el:k,position:"scrollLeft",to:k.scrollWidth-k.offsetWidth,duration:500});X()}else{const X=H.findIndex(W=>(W==null?void 0:W.to).fullPath===w.fullPath),ve=document.getElementsByClassName(`${t}__item`),$e=ve[X-1],me=ve[X+1],b=me.offsetLeft+me.offsetWidth+4,ge=$e.offsetLeft-4;if(b>e(Ce)+k.offsetWidth){const{start:W}=xe({el:k,position:"scrollLeft",to:b-k.offsetWidth,duration:500});W()}else if(ge<e(Ce)){const{start:W}=xe({el:k,position:"scrollLeft",to:ge,duration:500});W()}}},Ye=w=>w.path===e(l).path,et=ht(),Tt=(w,k)=>{if(w)for(const V of e(et)){const O=V.elDropdownMenuRef;k.fullPath!==V.tagItem.fullPath&&(O==null||O.handleClose(),A(k))}},De=L(),Ce=L(0),Lt=({scrollLeft:w})=>{Ce.value=w},tt=w=>{var O;const k=(O=e(De))==null?void 0:O.wrapRef,{start:V}=xe({el:k,position:"scrollLeft",to:e(Ce)+w,duration:500});V()},It=w=>{var k,V,O,H,le;return!!((O=(V=(k=w==null?void 0:w.matched)==null?void 0:k[1])==null?void 0:V.meta)!=null&&O.icon&&e(B)||(H=w==null?void 0:w.meta)!=null&&H.affix&&e(B)&&((le=w==null?void 0:w.meta)!=null&&le.icon))};return Ue(()=>{K(),J()}),pe(()=>l.value,()=>{J(),St()}),(w,k)=>{var H,le,X,ve,$e,me;const V=U("Icon"),O=U("router-link");return S(),E("div",{id:e(t),class:P([e(t),"flex w-full relative bg-[#fff] dark:bg-[var(--el-bg-color)]"])},[g("span",{class:P([`${e(t)}__tool ${e(t)}__tool--first`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:k[0]||(k[0]=b=>tt(-200))},[o(V,{icon:"vi-ep:d-arrow-left",color:"var(--el-text-color-placeholder)","hover-color":z.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),g("div",$l,[o(e(ie),{ref_key:"scrollbarRef",ref:De,class:"h-full",onScroll:Lt},{default:y(()=>[g("div",kl,[(S(!0),E(q,null,He(p.value,b=>{var ge,W,lt,ot,nt,at,st,rt,it;return S(),D(e(mt),{ref_for:!0,ref:e(et).set,schema:[{icon:"vi-ant-design:sync-outlined",label:"重新加载",disabled:((ge=_.value)==null?void 0:ge.fullPath)!==b.fullPath,command:()=>{je(b)}},{icon:"vi-ant-design:close-outlined",label:"关闭标签页",disabled:!!((W=p.value)!=null&&W.length)&&((lt=_.value)==null?void 0:lt.meta.affix),command:()=>{Q(b)}},{divided:!0,icon:"vi-ant-design:vertical-right-outlined",label:"关闭左侧标签页",disabled:!!((ot=p.value)!=null&&ot.length)&&(b.fullPath===p.value[0].fullPath||((nt=_.value)==null?void 0:nt.fullPath)!==b.fullPath),command:()=>{Qe()}},{icon:"vi-ant-design:vertical-left-outlined",label:"关闭右侧标签页",disabled:!!((at=p.value)!=null&&at.length)&&(b.fullPath===p.value[p.value.length-1].fullPath||((st=_.value)==null?void 0:st.fullPath)!==b.fullPath),command:()=>{Xe()}},{divided:!0,icon:"vi-ant-design:tag-outlined",label:"关闭其他标签页",disabled:((rt=_.value)==null?void 0:rt.fullPath)!==b.fullPath,command:()=>{se()}},{icon:"vi-ant-design:line-outlined",label:"关闭全部标签页",command:()=>{ue()}}],key:b.fullPath,"tag-item":b,class:P([`${e(t)}__item`,(it=b==null?void 0:b.meta)!=null&&it.affix?`${e(t)}__item--affix`:"",{"is-active":Ye(b)}]),onVisibleChange:Tt},{default:y(()=>[g("div",null,[o(O,{ref_for:!0,ref:e(Ze).set,to:{...b},custom:""},{default:y(({navigate:Vt})=>{var ct,ut,dt,ft,pt;return[g("div",{onClick:Vt,class:"h-full flex justify-center items-center whitespace-nowrap pl-15px"},[It(b)?(S(),D(V,{key:0,icon:((dt=(ut=(ct=b==null?void 0:b.matched)==null?void 0:ct[1])==null?void 0:ut.meta)==null?void 0:dt.icon)||((ft=b==null?void 0:b.meta)==null?void 0:ft.icon),size:12,class:"mr-5px"},null,8,["icon"])):he("",!0),Y(" "+j((pt=b==null?void 0:b.meta)==null?void 0:pt.title)+" ",1),o(V,{class:P(`${e(t)}__item--close`),color:"#333",icon:"vi-ant-design:close-outlined",size:12,onClick:Ft($o=>Q(b),["prevent","stop"])},null,8,["class","onClick"])],8,Sl)]}),_:2},1032,["to"])])]),_:2},1032,["schema","tag-item","class"])}),128))])]),_:1},512)]),g("span",{class:P([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:k[1]||(k[1]=b=>tt(200))},[o(V,{icon:"vi-ep:d-arrow-right",color:"var(--el-text-color-placeholder)","hover-color":z.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),g("span",{class:P([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer"]),onClick:k[2]||(k[2]=b=>je(_.value))},[o(V,{icon:"vi-ant-design:reload-outlined",color:"var(--el-text-color-placeholder)","hover-color":z.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2),o(e(mt),{trigger:"click",schema:[{icon:"vi-ant-design:sync-outlined",label:"重新加载",command:()=>{je(_.value)}},{icon:"vi-ant-design:close-outlined",label:"关闭标签页",disabled:!!((H=p.value)!=null&&H.length)&&((le=_.value)==null?void 0:le.meta.affix),command:()=>{Q(_.value)}},{divided:!0,icon:"vi-ant-design:vertical-right-outlined",label:"关闭左侧标签页",disabled:!!((X=p.value)!=null&&X.length)&&((ve=_.value)==null?void 0:ve.fullPath)===p.value[0].fullPath,command:()=>{Qe()}},{icon:"vi-ant-design:vertical-left-outlined",label:"关闭右侧标签页",disabled:!!(($e=p.value)!=null&&$e.length)&&((me=_.value)==null?void 0:me.fullPath)===p.value[p.value.length-1].fullPath,command:()=>{Xe()}},{divided:!0,icon:"vi-ant-design:tag-outlined",label:"关闭其他标签页",command:()=>{se()}},{icon:"vi-ant-design:line-outlined",label:"关闭全部标签页",command:()=>{ue()}}]},{default:y(()=>[g("span",{class:P([`${e(t)}__tool`,"w-[var(--tags-view-height)] h-[var(--tags-view-height)] flex items-center justify-center cursor-pointer block"])},[o(V,{icon:"vi-ant-design:setting-outlined",color:"var(--el-text-color-placeholder)","hover-color":z.value?"#fff":"var(--el-color-black)"},null,8,["hover-color"])],2)]),_:1},8,["schema"])],10,Cl)}}}),Se=te(Pl,[["__scopeId","data-v-34337511"]]),Pe=F({__name:"Logo",setup(a){const{getPrefixCls:r}=R(),t=r("logo"),l=N(),s=L(!0),u=v(()=>l.getTitle),n=v(()=>l.getLayout),c=v(()=>l.getCollapse);return Ue(()=>{e(c)&&(s.value=!1)}),pe(()=>c.value,h=>{if(e(n)==="topLeft"||e(n)==="cutMenu"){s.value=!0;return}s.value=!h}),pe(()=>n.value,h=>{h==="top"||h==="cutMenu"?s.value=!0:e(c)?s.value=!1:s.value=!0}),(h,f)=>{const m=U("router-link");return S(),E("div",null,[o(m,{class:P([e(t),n.value!=="classic"?`${e(t)}__Top`:"","flex !h-[var(--logo-height)] items-center cursor-pointer pl-8px relative decoration-none overflow-hidden"]),to:"/"},{default:y(()=>[f[0]||(f[0]=g("img",{src:el,class:"w-[calc(var(--logo-height)-10px)] h-[calc(var(--logo-height)-10px)]"},null,-1)),s.value?(S(),E("div",{key:0,class:P(["ml-10px text-16px font-700",{"text-[var(--logo-title-text-color)]":n.value==="classic","text-[var(--top-header-text-color)]":n.value==="topLeft"||n.value==="top"||n.value==="cutMenu"}])},j(u.value),3)):he("",!0)]),_:1},8,["class"])])}}}),Tl=F({__name:"Footer",setup(a){const{getPrefixCls:r}=R(),t=r("footer"),l=N();return v(()=>l.getTitle),(s,u)=>(S(),E("div",{class:P([e(t),"text-center text-[var(--el-text-color-placeholder)] bg-[var(--app-content-bg-color)] h-[var(--app-footer-height)] leading-[var(--app-footer-height)] dark:bg-[var(--el-bg-color)] overflow-hidden"])}," Copyright ©2024-present FeyFey ",2))}}),Te=F({__name:"AppView",setup(a){const r=N(),t=v(()=>r.getFooter),l=Oe(),s=v(()=>l.getCachedViews);return(u,n)=>{const c=U("router-view");return S(),E(q,null,[g("section",{class:P(["box-border p-[var(--app-content-padding)] w-full bg-[var(--app-content-bg-color)] dark:bg-[var(--el-bg-color)]",{"!min-h-[calc(100vh-var(--top-tool-height)-var(--tags-view-height)-var(--app-footer-height))] pb-0":t.value}])},[o(c,null,{default:y(({Component:h,route:f})=>[(S(),D(jt,{include:s.value},[(S(),D(Dt(h),{key:f.fullPath}))],1032,["include"]))]),_:1})],2),t.value?(S(),D(e(Tl),{key:0})):he("",!0)],64)}}}),Ll=F({__name:"Collapse",props:{color:We.string.def("")},setup(a){const{getPrefixCls:r}=R(),t=r("collapse"),l=N(),s=v(()=>l.getCollapse),u=()=>{const n=e(s);l.setCollapse(!n)};return(n,c)=>{const h=U("Icon");return S(),E("div",{class:P(e(t)),onClick:u},[o(h,{size:18,icon:s.value?"vi-ant-design:menu-unfold-outlined":"vi-ant-design:menu-fold-outlined",color:a.color,class:"cursor-pointer"},null,8,["icon","color"])],2)}}}),Il=F({__name:"SizeDropdown",props:{color:We.string.def("")},setup(a){const{getPrefixCls:r}=R(),t=r("size-dropdown"),l=N(),s=v(()=>l.sizeMap),u=n=>{l.setCurrentSize(n)};return(n,c)=>{const h=U("Icon");return S(),D(e(qe),{class:P(e(t)),trigger:"click",onCommand:u},{dropdown:y(()=>[o(e(Ne),null,{default:y(()=>[(S(!0),E(q,null,He(s.value,f=>(S(),D(e(de),{key:f,command:f},{default:y(()=>[Y(j(f),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:y(()=>[o(h,{size:18,icon:"vi-mdi:format-size",color:a.color,class:"cursor-pointer"},null,8,["color"])]),_:1},8,["class"])}}}),Je=Et("lock",{state:()=>({lockInfo:{}}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(a){this.lockInfo=a},resetLockInfo(){this.lockInfo={}},unLock(a){var r;return((r=this.lockInfo)==null?void 0:r.password)===a?(this.resetLockInfo(),!0):!1}},persist:!0}),Vl={class:"flex flex-col items-center"},Ml=["src"],Rl=F({__name:"LockDialog",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(a,{emit:r}){const t=Ge(),{getPrefixCls:l}=R(),s=l("lock-dialog"),u=Je(),n=a,c=L(t.getAvatarUrl),h=L(),f=Be({password:""}),m=r,d=v({get:()=>n.modelValue,set:p=>{console.log("set: ",p),m("update:modelValue",p)}}),$=L("锁定屏幕"),x=async()=>{if(!h.value)return;const p=()=>new Promise((i,_)=>{h.value.validate((A,C)=>{A?i(!0):_(C)})});try{await p()&&(d.value=!1,u.setLockInfo({isLock:!0,password:f.password}))}catch{Bt.error("密码错误！")}};return(p,i)=>{const _=U("el-input"),A=U("el-form-item"),C=U("el-form"),B=U("el-button");return S(),D(e(tl),{modelValue:d.value,"onUpdate:modelValue":i[1]||(i[1]=z=>d.value=z),width:"500px","max-height":"170px",class:P(e(s)),title:$.value},{footer:y(()=>[o(B,{type:"primary",onClick:x},{default:y(()=>i[3]||(i[3]=[Y("锁定")])),_:1})]),default:y(()=>[g("div",Vl,[g("img",{src:c.value,alt:"Avatar",class:"w-70px h-70px rounded-[50%]"},null,8,Ml),i[2]||(i[2]=g("span",{class:"text-14px my-10px text-[var(--top-header-text-color)]"},"Archer",-1))]),o(C,{model:f,ref_key:"lockFormRef",ref:h},{default:y(()=>[o(A,{prop:"password",rules:[{required:!0,message:"请输入密码",trigger:["blur","change"]}]},{default:y(()=>[o(_,{modelValue:f.password,"onUpdate:modelValue":i[0]||(i[0]=z=>f.password=z),type:"password",placeholder:"请输入密码","prefix-icon":"Lock","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","class","title"])}}}),Al=te(Rl,[["__scopeId","data-v-8ab13726"]]),zl=a=>Object.prototype.toString.call(a).slice(8,-1),Ol=(a="sessionStorage")=>({setStorage:(u,n)=>{const c=zl(n);window[a].setItem(u,JSON.stringify({type:c,value:n}))},getStorage:u=>{const n=window[a].getItem(u);if(n){const{value:c}=JSON.parse(n);return c}else return n},removeStorage:u=>{window[a].removeItem(u)},clear:u=>{const n=Object.keys(window[a]),c=["dynamicRouter","serverDynamicRouter"],h=u?[...u,...c]:c;(h?n.filter(m=>!h.includes(m)):n).forEach(m=>{window[a].removeItem(m)})}}),Fl=Ut,jl=(a=!0)=>{let r;const t=Be({year:0,month:0,week:"",day:0,hour:"",minute:"",second:0,meridiem:""}),l=()=>{const n=Fl(),c=n.format("HH"),h=n.format("mm"),f=n.get("s");t.year=n.get("y"),t.month=n.get("M")+1,t.week="星期"+["日","一","二","三","四","五","六"][n.day()],t.day=n.get("date"),t.hour=c,t.minute=h,t.second=f,t.meridiem=n.format("A")};function s(){l(),clearInterval(r),r=setInterval(()=>l(),1e3)}function u(){clearInterval(r)}return Nt(()=>{a&&s()}),Ht(()=>{u()}),{...qt(t),start:s,stop:u}},Dl={class:"flex w-screen h-screen justify-center items-center"},El={class:"flex flex-col items-center"},Bl=["src"],Ul={class:"absolute bottom-5 w-full text-gray-300 xl:text-xl 2xl:text-3xl text-center enter-y"},Nl={class:"text-5xl mb-4 enter-x"},Hl={class:"text-3xl"},ql={class:"text-2xl"},Wl=F({__name:"LockPage",setup(a){const r=Ge(),t=L(r.getAvatarUrl),l=Oe(),{clear:s}=Ol(),{replace:u}=ce(),n=L(""),c=L(!1),h=L(!1),f=L(!0),{getPrefixCls:m}=R(),d=m("lock-page"),$=Je(),{hour:x,month:p,minute:i,meridiem:_,year:A,day:C,week:B}=jl(!0);async function z(){if(!n.value)return;const Q=n.value;try{c.value=!0;const T=await $.unLock(Q);h.value=!T}finally{c.value=!1}}async function K(){await Gt().catch(()=>{})&&(s(),l.delAllViews(),Kt(),$.resetLockInfo(),u("/login"))}function J(Q=!1){f.value=Q}return(Q,T)=>{const ue=U("el-button");return S(),E("div",{class:P([e(d),"fixed inset-0 flex h-screen w-screen bg-black items-center justify-center"])},[Z(g("div",{class:P([`${e(d)}__unlock`,"absolute top-0 left-1/2 flex pt-5 h-16 items-center justify-center sm:text-md xl:text-xl text-white flex-col cursor-pointer transform translate-x-1/2"]),onClick:T[0]||(T[0]=se=>J(!1))},[o(e(fe),{icon:"vi-ep:lock"}),T[4]||(T[4]=g("span",null,"点击解锁",-1))],2),[[ke,f.value]]),g("div",Dl,[g("div",{class:P([`${e(d)}__hour`,"relative mr-5 md:mr-20 w-2/5 h-2/5 md:h-4/5"])},[g("span",null,j(e(x)),1),Z(g("span",{class:"meridiem absolute left-5 top-5 text-md xl:text-xl"},j(e(_)),513),[[ke,f.value]])],2),g("div",{class:P(`${e(d)}__minute w-2/5 h-2/5 md:h-4/5 `)},[g("span",null,j(e(i)),1)],2)]),o(bt,{name:"fade-slide"},{default:y(()=>[Z(g("div",{class:P(`${e(d)}-entry`)},[g("div",{class:P(`${e(d)}-entry-content`)},[g("div",El,[g("img",{src:t.value,alt:"",class:"w-70px h-70px rounded-[50%]"},null,8,Bl),T[5]||(T[5]=g("span",{class:"text-14px my-10px text-[var(--logo-title-text-color)]"},"Archer",-1))]),o(e(Wt),{type:"password",placeholder:"输入锁屏密码",class:"enter-x",modelValue:n.value,"onUpdate:modelValue":T[1]||(T[1]=se=>n.value=se)},null,8,["modelValue"]),h.value?(S(),E("span",{key:0,class:P(`text-14px ${e(d)}-entry__err-msg enter-x`)}," 锁屏密码错误 ",2)):he("",!0),g("div",{class:P(`${e(d)}-entry__footer enter-x`)},[o(ue,{type:"primary",size:"small",class:"mt-2 mr-2 enter-x",link:"",disabled:c.value,onClick:T[2]||(T[2]=se=>J(!0))},{default:y(()=>T[6]||(T[6]=[Y(" 返回 ")])),_:1},8,["disabled"]),o(ue,{type:"primary",size:"small",class:"mt-2 mr-2 enter-x",link:"",disabled:c.value,onClick:K},{default:y(()=>T[7]||(T[7]=[Y(" 返回登录 ")])),_:1},8,["disabled"]),o(ue,{type:"primary",class:"mt-2",size:"small",link:"",onClick:T[3]||(T[3]=se=>z()),disabled:c.value},{default:y(()=>T[8]||(T[8]=[Y(" 进入系统 ")])),_:1},8,["disabled"])],2)],2)],2),[[ke,!f.value]])]),_:1}),g("div",Ul,[Z(g("div",Nl,[Y(j(e(x))+":"+j(e(i))+" ",1),g("span",Hl,j(e(_)),1)],512),[[ke,!f.value]]),g("div",ql,j(e(A))+"/"+j(e(p))+"/"+j(e(C))+" "+j(e(B)),1)])],2)}}}),Gl=te(Wl,[["__scopeId","data-v-b610644e"]]),Kl={class:"flex items-center"},Jl=["src"],Ql={class:"<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]"},Xl=F({__name:"UserInfo",setup(a){const{push:r}=ce(),t=Ge(),l=Je(),s=v(()=>{var x;return((x=l.getLockInfo)==null?void 0:x.isLock)??!1}),{getPrefixCls:u}=R(),n=u("user-info"),c=L(t.getAvatarUrl),h=()=>{t.logoutConfirm()},f=L(!1),m=()=>{f.value=!0},d=()=>{window.open("https://github.com/FeyaiFey/frontend.git")},$=x=>{r(x)};return(x,p)=>(S(),E(q,null,[o(e(qe),{class:P(["custom-hover",e(n)]),trigger:"click"},{dropdown:y(()=>[o(e(Ne),null,{default:y(()=>[o(e(de),null,{default:y(()=>[g("div",{onClick:p[0]||(p[0]=i=>$("/personal/personal-center"))},"个人中心")]),_:1}),o(e(de),null,{default:y(()=>[g("div",{onClick:d},"项目文档")]),_:1}),o(e(de),{divided:""},{default:y(()=>[g("div",{onClick:m},"锁定屏幕")]),_:1}),o(e(de),null,{default:y(()=>[g("div",{onClick:h},"退出登录")]),_:1})]),_:1})]),default:y(()=>{var i;return[g("div",Kl,[g("img",{src:c.value,alt:"Avatar",class:"w-[calc(var(--logo-height)-25px)] rounded-[50%]"},null,8,Jl),g("span",Ql,j((i=e(t).getUserInfo)==null?void 0:i.username),1)])]}),_:1},8,["class"]),f.value?(S(),D(Al,{key:0,modelValue:f.value,"onUpdate:modelValue":p[1]||(p[1]=i=>f.value=i)},null,8,["modelValue"])):he("",!0),(S(),D(Jt,{to:"body"},[o(bt,{name:"fade-bottom",mode:"out-in"},{default:y(()=>[s.value?(S(),D(Gl,{key:0})):he("",!0)]),_:1})]))],64))}}),Zl=te(Xl,[["__scopeId","data-v-3e56e867"]]),Yl=F({__name:"Screenfull",props:{color:We.string.def("")},setup(a){const{getPrefixCls:r}=R(),t=r("screenfull"),{toggle:l,isFullscreen:s}=Qt(),u=()=>{l()};return(n,c)=>(S(),E("div",{class:P(e(t)),onClick:u},[o(e(fe),{size:18,icon:e(s)?"vi-zmdi:fullscreen-exit":"vi-zmdi:fullscreen",color:a.color},null,8,["icon","color"])],2))}}),$t=(a,r="")=>{var l;const t=[];for(const s of a){const u=s==null?void 0:s.meta;if(u.hidden&&!u.canTo)continue;const n=!u.alwaysShow&&((l=s.children)==null?void 0:l.length)===1?{...s.children[0],path:ae(s.path,s.children[0].path)}:{...s};n.path=ae(r,n.path),n.children&&(n.children=$t(n.children,n.path)),n&&t.push(n)}return t};function eo(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!xt(a)}const{getPrefixCls:to}=R(),lo=to("breadcrumb"),oo=N(),no=v(()=>oo.getBreadcrumbIcon),ao=F({name:"Breadcrumb",setup(){const{currentRoute:a}=ce(),r=L([]),t=ze(),l=v(()=>{const n=t.getRouters;return $t(n)}),s=()=>{const n=a.value.matched.slice(-1)[0].path;r.value=al(e(l),c=>c.path===n)},u=()=>ol(e(r)).map(c=>{const h=!c.redirect||c.redirect==="noredirect",f=c.meta;return o(Yt,{to:{path:h?"":c.path},key:c.name},{default:()=>{var m,d;return[f!=null&&f.icon&&no.value?o(q,null,[o(fe,{icon:f.icon,class:"mr-[5px]"},null),Y(" "),((m=c==null?void 0:c.meta)==null?void 0:m.title)||""]):((d=c==null?void 0:c.meta)==null?void 0:d.title)||""]}})});return pe(()=>a.value,n=>{n.path.startsWith("/redirect/")||s()},{immediate:!0}),()=>{let n;return o(Zt,{separator:"/",class:`${lo} flex items-center h-full ml-[10px]`},{default:()=>[o(Xt,{appear:!0,"enter-active-class":"animate__animated animate__fadeInRight"},eo(n=u())?n:{default:()=>[n]})]})}}}),so=te(ao,[["__scopeId","data-v-3f303867"]]),{getPrefixCls:ro,variables:io}=R(),co=ro("tool-header"),ye=N(),uo=v(()=>ye.getBreadcrumb),fo=v(()=>ye.getHamburger),po=v(()=>ye.getScreenfull),ho=v(()=>ye.getSize),gt=v(()=>ye.getLayout),vo=F({name:"ToolHeader",setup(){return()=>o("div",{id:`${io.namespace}-tool-header`,class:[co,"h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between"]},[gt.value!=="top"?o("div",{class:"h-full flex items-center"},[fo.value&&gt.value!=="cutMenu"?o(Ll,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,uo.value?o(so,{class:"<md:hidden"},null):void 0]):void 0,o("div",{class:"h-full flex items-center"},[po.value?o(Yl,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,ho.value?o(Il,{class:"custom-hover",color:"var(--top-header-text-color)"},null):void 0,o(Zl,null,null)])])}}),Le=te(vo,[["__scopeId","data-v-862c576c"]]),{getPrefixCls:mo}=R(),oe=mo("layout"),ee=N(),Ie=v(()=>ee.getPageLoading),ne=v(()=>ee.getTagsView),M=v(()=>ee.getCollapse),_e=v(()=>ee.logo),I=v(()=>ee.getFixedHeader),G=v(()=>ee.getMobile),re=v(()=>ee.getFixedMenu),go=()=>({renderClassic:()=>o(q,null,[o("div",{class:["absolute top-0 left-0 h-full layout-border__right",{"!fixed z-3000":G.value}]},[_e.value?o(Pe,{class:["bg-[var(--left-menu-bg-color)] relative",{"!pl-0":G.value&&M.value,"w-[var(--left-menu-min-width)]":ee.getCollapse,"w-[var(--left-menu-max-width)]":!ee.getCollapse}],style:"transition: all var(--transition-time-02);"},null):void 0,o(Ve,{class:[{"!h-[calc(100%-var(--logo-height))]":_e.value}]},null)]),o("div",{class:[`${oe}-content`,"absolute top-0 h-[100%]",{"w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]":M.value&&!G.value&&!G.value,"w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]":!M.value&&!G.value&&!G.value,"fixed !w-full !left-0":G.value}],style:"transition: all var(--transition-time-02);"},[Z(o(ie,{class:[`${oe}-content-scrollbar`,{"!h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]":I.value}]},{default:()=>[o("div",{class:[{"fixed top-0 left-0 z-10":I.value,"w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)]":M.value&&I.value&&!G.value,"w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)]":!M.value&&I.value&&!G.value,"!w-full !left-0":G.value}],style:"transition: all var(--transition-time-02);"},[o(Le,{class:["bg-[var(--top-header-bg-color)]",{"layout-border__bottom":!ne.value}]},null),ne.value?o(Se,{class:"layout-border__bottom layout-border__top"},null):void 0]),o(Te,null,null)]}),[[be("loading"),Ie.value]])])]),renderTopLeft:()=>o(q,null,[o("div",{class:"flex items-center bg-[var(--top-header-bg-color)] relative layout-border__bottom dark:bg-[var(--el-bg-color)]"},[_e.value?o(Pe,{class:"custom-hover"},null):void 0,o(Le,{class:"flex-1"},null)]),o("div",{class:"absolute top-[var(--logo-height)+1px] left-0 w-full h-[calc(100%-1px-var(--logo-height))] flex"},[o(Ve,{class:"!h-full relative layout-border__right"},null),o("div",{class:[`${oe}-content`,"h-[100%]",{"w-[calc(100%-var(--left-menu-min-width))] left-[var(--left-menu-min-width)]":M.value,"w-[calc(100%-var(--left-menu-max-width))] left-[var(--left-menu-max-width)]":!M.value}],style:"transition: all var(--transition-time-02);"},[Z(o(ie,{class:[`${oe}-content-scrollbar`,{"!h-[calc(100%-var(--tags-view-height))] mt-[calc(var(--tags-view-height))]":I.value&&ne.value}]},{default:()=>[ne.value?o(Se,{class:["layout-border__bottom absolute",{"!fixed top-0 left-0 z-10":I.value,"w-[calc(100%-var(--left-menu-min-width))] !left-[var(--left-menu-min-width)] mt-[calc(var(--logo-height)+1px)]":M.value&&I.value,"w-[calc(100%-var(--left-menu-max-width))] !left-[var(--left-menu-max-width)] mt-[calc(var(--logo-height)+1px)]":!M.value&&I.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,o(Te,null,null)]}),[[be("loading"),Ie.value]])])])]),renderTop:()=>o(q,null,[o("div",{class:["flex items-center justify-between bg-[var(--top-header-bg-color)] relative",{"layout-border__bottom":!ne.value}]},[_e.value?o(Pe,{class:"custom-hover"},null):void 0,o(Ve,{class:"flex-1 px-10px h-[var(--top-tool-height)]"},null),o(Le,null,null)]),o("div",{class:[`${oe}-content`,"w-full",{"h-[calc(100%-var(--top-tool-height))]":!I.value,"h-[calc(100%-var(--tags-view-height)-var(--top-tool-height))]":I.value}]},[Z(o(ie,{class:[`${oe}-content-scrollbar`,{"mt-[var(--tags-view-height)] !pb-[calc(var(--tags-view-height)+var(--app-footer-height))]":I.value,"pb-[var(--app-footer-height)]":!I.value}]},{default:()=>[ne.value?o(Se,{class:["layout-border__bottom layout-border__top relative",{"!fixed w-full top-[calc(var(--top-tool-height)+1px)] left-0":I.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,o(Te,null,null)]}),[[be("loading"),Ie.value]])])]),renderCutMenu:()=>o(q,null,[o("div",{class:"flex items-center bg-[var(--top-header-bg-color)] relative layout-border__bottom"},[_e.value?o(Pe,{class:"custom-hover !pr-15px"},null):void 0,o(Le,{class:"flex-1"},null)]),o("div",{class:"absolute top-[var(--logo-height)] left-0 w-[calc(100%-2px)] h-[calc(100%-var(--logo-height))] flex"},[o(xl,null,null),o("div",{class:[`${oe}-content`,"h-[100%]",{"w-[calc(100%-var(--tab-menu-min-width))] left-[var(--tab-menu-min-width)]":M.value&&!re.value,"w-[calc(100%-var(--tab-menu-max-width))] left-[var(--tab-menu-max-width)]":!M.value&&!re.value,"w-[calc(100%-var(--tab-menu-min-width)-var(--left-menu-max-width))] ml-[var(--left-menu-max-width)]":M.value&&re.value,"w-[calc(100%-var(--tab-menu-max-width)-var(--left-menu-max-width))] ml-[var(--left-menu-max-width)]":!M.value&&re.value}],style:"transition: all var(--transition-time-02);"},[Z(o(ie,{class:[`${oe}-content-scrollbar`,{"!h-[calc(100%-var(--tags-view-height))] mt-[calc(var(--tags-view-height))]":I.value&&ne.value}]},{default:()=>[ne.value?o(Se,{class:["relative layout-border__bottom layout-border__top",{"!fixed top-0 left-0 z-10":I.value,"w-[calc(100%-var(--tab-menu-min-width))] !left-[var(--tab-menu-min-width)] mt-[var(--logo-height)]":M.value&&I.value,"w-[calc(100%-var(--tab-menu-max-width))] !left-[var(--tab-menu-max-width)] mt-[var(--logo-height)]":!M.value&&I.value,"!fixed top-0 !left-[var(--tab-menu-min-width)+var(--left-menu-max-width)] z-10":I.value&&re.value,"w-[calc(100%-var(--tab-menu-min-width)-var(--left-menu-max-width))] !left-[var(--tab-menu-min-width)+var(--left-menu-max-width)] mt-[var(--logo-height)]":M.value&&I.value&&re.value,"w-[calc(100%-var(--tab-menu-max-width)-var(--left-menu-max-width))] !left-[var(--tab-menu-max-width)+var(--left-menu-max-width)] mt-[var(--logo-height)]":!M.value&&I.value&&re.value}],style:"transition: width var(--transition-time-02), left var(--transition-time-02);"},null):void 0,o(Te,null,null)]}),[[be("loading"),Ie.value]])])])])}),{getPrefixCls:wo}=R(),wt=wo("layout"),Fe=N(),xo=v(()=>Fe.getMobile),_o=v(()=>Fe.getCollapse),kt=v(()=>Fe.getLayout);v(()=>!1);const bo=()=>{Fe.setCollapse(!0)},yo=()=>{const{renderClassic:a,renderTopLeft:r,renderTop:t,renderCutMenu:l}=go();switch(e(kt)){case"classic":return a();case"topLeft":return r();case"top":return t();case"cutMenu":return l()}},Co=F({name:"Layout",setup(){return()=>o("section",{class:[wt,`${wt}__${kt.value}`,"w-[100%] h-[100%] relative"]},[xo.value&&!_o.value?o("div",{class:"absolute top-0 left-0 w-full h-full opacity-30 z-99 bg-[var(--el-color-black)]",onClick:bo},null):void 0,yo()])}}),To=te(Co,[["__scopeId","data-v-8eb44aa5"]]);export{To as default};