import{d as F,z as C,X as g,r as c,y as u,o as L,e as $,w as n,i as h,g as s,C as w,aa as B,M as m,_ as M}from"./index-xe_QeIBq.js";const R=F({__name:"RegisterForm",setup(I,{emit:_}){const p=C(),o=g({username:"",email:"",pass:"",word:"",role_number:""}),f=c(),d=c(!1),v=(t,r,e)=>{if(r)e();else return e(new Error("请输入用户名！"))},V=(t,r,e)=>{if(r)e();else return e(new Error("请输入邮箱账号！"))},b=(t,r,e)=>{if(r)e();else return e(new Error("请输入密码！"))},k=(t,r,e)=>{r===""?e(new Error("请再次输入确认密码！")):r!==o.pass?e(new Error("两次输入的密码不一致！")):e()};function y(t){return t===68241373||t==="68241373"?68241373:1}const z=_,x=g({username:[{validator:v,trigger:"blur"}],email:[{validator:V,trigger:"blur"}],pass:[{validator:b,trigger:"blur"}],word:[{validator:k,trigger:"blur"}]});async function E(){if(!f.value)return;const t=()=>new Promise((r,e)=>{f.value.validate((l,i)=>{l?r(!0):e(i)})});try{if(await t()){d.value=!0;try{const e=await B({username:o.username,email:o.email,password:o.pass,code:y(o.role_number)});e&&(m.success("注册成功！"),d.value=!1,p.setToken(e.tokeninfo.access_token),p.setUserInfo(e.data),p.setLoginInfo({email:o.email,password:o.pass}),setTimeout(()=>{z("toLogin")}))}catch(e){console.log(e),e.response&&e.response.status===422?e.response.data.detail.forEach(i=>{m.error(`${i.loc.join(". ")}: ${i.msg}`)}):(m.error(e.response.data.detail),d.value=!1)}}}catch(r){const e=r;console.log(e),Object.keys(e).forEach(l=>{const i=e[l][0].message;m.error(`${i}`)})}}return(t,r)=>{const e=u("el-input"),l=u("el-form-item"),i=u("el-button"),U=u("el-form");return L(),$(U,{model:o,ref_key:"registerFormRef",ref:f,rules:x,size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid w-[100%]"},{default:n(()=>[r[8]||(r[8]=h("h1",{style:{width:"100%","text-align":"center","margin-bottom":"30px","font-size":"2rem","font-weight":"bolder"}},"账号注册",-1)),s(l,{prop:"username"},{default:n(()=>[s(e,{modelValue:o.username,"onUpdate:modelValue":r[0]||(r[0]=a=>o.username=a),placeholder:"用户名(昵称)","prefix-icon":"User",size:"large"},null,8,["modelValue"])]),_:1}),s(l,{prop:"email"},{default:n(()=>[s(e,{modelValue:o.email,"onUpdate:modelValue":r[1]||(r[1]=a=>o.email=a),placeholder:"邮箱账号","prefix-icon":"Message",size:"large"},null,8,["modelValue"])]),_:1}),s(l,{prop:"pass"},{default:n(()=>[s(e,{modelValue:o.pass,"onUpdate:modelValue":r[2]||(r[2]=a=>o.pass=a),type:"password",placeholder:"输入密码","prefix-icon":"Lock","show-password":"",size:"large"},null,8,["modelValue"])]),_:1}),s(l,{prop:"word"},{default:n(()=>[s(e,{modelValue:o.word,"onUpdate:modelValue":r[3]||(r[3]=a=>o.word=a),type:"password",placeholder:"确认密码","prefix-icon":"Lock","show-password":"",size:"large"},null,8,["modelValue"])]),_:1}),s(l,{prop:"role_number"},{default:n(()=>[s(e,{modelValue:o.role_number,"onUpdate:modelValue":r[4]||(r[4]=a=>o.role_number=a),placeholder:"权限码(非必填)","prefix-icon":"Bell",size:"large"},null,8,["modelValue"])]),_:1}),s(l,{size:"large"},{default:n(()=>[s(i,{type:"primary",onClick:E,loading:d.value,style:{width:"100%","font-size":"1.2rem"}},{default:n(()=>r[6]||(r[6]=[w("注册")])),_:1},8,["loading"])]),_:1}),s(l,{size:"large"},{default:n(()=>[s(i,{onClick:r[5]||(r[5]=a=>t.$emit("toLogin")),style:{width:"100%","font-size":"1.2rem"}},{default:n(()=>r[7]||(r[7]=[w("已有账号?去注册")])),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),T=M(R,[["__scopeId","data-v-5a432f3b"]]);export{T as default};
