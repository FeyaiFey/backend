import{d as l,p,o as d,c as m,i as e,t as o,g as u,w as _,C as x,y as g}from"./index--cZ_FbqS.js";const y="/assets/404-B3JyPfEa.svg",f="/assets/500-BGu8fdSB.svg",v="/assets/403-RqeqO19C.svg",C={class:"flex justify-center"},h={class:"text-center"},b=["src"],k={class:"text-14px text-[var(--el-color-info)]"},B={class:"mt-20px"},N=l({__name:"Error",props:{type:p.string.validate(t=>["404","500","403"].includes(t)).def("404")},emits:["errorClick"],setup(t,{emit:r}){const s={404:{url:y,message:"抱歉,您访问的页面不存在!",buttonText:"返回首页"},500:{url:f,message:"抱歉,服务器错误!",buttonText:"返回首页"},403:{url:v,message:"抱歉,您无权访问此页面!",buttonText:"返回首页"}},n=t,a=r,c=()=>{a("errorClick",n.type)};return(T,E)=>{const i=g("el-button");return d(),m("div",C,[e("div",h,[e("img",{width:"350",src:s[t.type].url,alt:""},null,8,b),e("div",k,o(s[t.type].message),1),e("div",B,[u(i,{type:"primary",onClick:c},{default:_(()=>[x(o(s[t.type].buttonText),1)]),_:1})])])])}}});export{N as _};
