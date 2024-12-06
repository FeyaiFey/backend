import{d as A,z as N,N as P,a as S,X as R,r as f,S as $,Q as b,y as u,o as B,e as T,w as l,i as y,g as a,C as g,a8 as D,u as V,M as w,a9 as j,_ as q}from"./index-B-6TmoC4.js";const O={class:"func"},Q=A({__name:"LoginForm",props:["registerData"],setup(x){const n=N(),m=P(),{currentRoute:h,addRoute:z,push:E}=S(),t=R({email:"",password:""}),_=f(),p=f(n.rememberMe),c=f(!1);$(()=>{const s=n.getLoginInfo;if(s){const{email:e,password:o}=s;t.email=e,t.password=o}});const M=R({email:[{validator:(s,e,o)=>{if(e)o();else return o(new Error("请输入邮箱账号！"))},trigger:"blur"}],password:[{validator:(s,e,o)=>{if(e)o();else return o(new Error("请输入密码！"))},trigger:"blur"}]}),F=x;b(()=>F.registerData,s=>{s&&(t.email=s.email,t.password=s.password)});const v=f("");b(()=>h.value,s=>{var e;v.value=(e=s==null?void 0:s.query)==null?void 0:e.redirect},{immediate:!0});async function L(){if(!_.value)return;const s=()=>new Promise((e,o)=>{_.value.validate((r,i)=>{r?e(!0):o(i)})});try{if(await s()){c.value=!0;try{const o=await D({email:t.email,password:t.password});o&&(V(p)?(n.setLoginInfo({email:t.email,password:t.password}),n.setRememberMe(V(p)),n.setToken(o.tokeninfo.access_token),n.setUserInfo(o.data)):(n.reset(),n.setToken(o.tokeninfo.access_token)),C(),w.success(`登录成功！欢迎：${o.data.username}`),c.value=!1)}catch(o){c.value=!1,w.error(o.response.data.detail)}}}catch(e){w.error("表单内容有误，请检查输入！");const o=e;Object.keys(o).forEach(r=>{const i=o[r][0].message;w.error(`${i}`),console.log(r)})}}const C=async()=>{const s={email:t.email},e=await j(s);if(e){const r=e.data.map(i=>i.api);n.setRoleRouters(r),await m.generateRoutes("frontEnd",r).catch(()=>{}),m.getAddRouters.forEach(i=>{z(i)}),m.setIsAddRouters(!0),E({path:v.value||m.addRouters[0].path})}};return(s,e)=>{const o=u("el-input"),r=u("el-form-item"),i=u("el-checkbox"),U=u("el-link"),k=u("el-button"),I=u("el-form");return B(),T(I,{model:t,ref_key:"loginFormRef",ref:_,rules:M,class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid w-[100%]"},{default:l(()=>[e[8]||(e[8]=y("h1",{style:{width:"100%","text-align":"center","margin-bottom":"30px","font-size":"2rem","font-weight":"bolder"}},"登录",-1)),a(r,{prop:"email"},{default:l(()=>[a(o,{modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=d=>t.email=d),placeholder:"邮箱账号","prefix-icon":"Message",size:"large"},null,8,["modelValue"])]),_:1}),a(r,{prop:"password"},{default:l(()=>[a(o,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=d=>t.password=d),type:"password",placeholder:"请输入密码","prefix-icon":"Lock","show-password":"",size:"large"},null,8,["modelValue"])]),_:1}),y("div",O,[a(r,null,{default:l(()=>[a(i,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=d=>p.value=d)},{default:l(()=>e[4]||(e[4]=[g("记住我")])),_:1},8,["modelValue"])]),_:1}),a(r,null,{default:l(()=>[a(U,null,{default:l(()=>e[5]||(e[5]=[g("忘记密码")])),_:1})]),_:1})]),a(r,{size:"large"},{default:l(()=>[a(k,{type:"primary",onClick:L,loading:c.value,style:{width:"100%","font-size":"1.2rem"}},{default:l(()=>e[6]||(e[6]=[g("登录")])),_:1},8,["loading"])]),_:1}),a(r,{size:"large"},{default:l(()=>[a(k,{onClick:e[3]||(e[3]=d=>s.$emit("toRegister")),style:{width:"100%","font-size":"1.2rem"}},{default:l(()=>e[7]||(e[7]=[g("注册")])),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),J=q(Q,[["__scopeId","data-v-d308df12"]]);export{J as default};
