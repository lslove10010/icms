import{_ as m,h as g,j as v,v as x,bc as y,a as b,ck as w,E as B,b3 as k}from"./entry-9cc5c370.js";import{Z as S,m as l,L as V,u as s,p as a,W as c,a6 as d,U as r,S as E,l as p,ap as A,aq as D}from"./vue-11eabec3.js";const I=""+new URL("../png/plugin4-e257fb1e.png",import.meta.url).href;const L=n=>(A("data-v-b130f93c"),n=n(),D(),n),N={class:"flex card",style:{overflow:"hidden"}},U={class:"left"},C=L(()=>a("img",{src:I,alt:"",style:{width:"80px",height:"80px"}},null,-1)),F={class:"flex-y"},T={class:"name"},$={class:"business"},j={class:"right flex-x-center"},q={class:"flex-x-center static flex-y-center"},P={__name:"stat",setup(n){function _(e){y().then(()=>{window.open(e)}).catch(()=>{b().logout(),router.push("/login")})}const t=S({info:{},loading:!1,loading2:!1,check(){t.loading||(t.loading=!0,w({hash:t.info.hash,status:t.info.status}).then(e=>{B({position:"bottom-right",type:"success",message:"\u72B6\u6001\u66F4\u65B0\u6210\u529F"})}).catch(()=>{t.info.status=t.info.status===0?1:0}).finally(e=>{setTimeout(()=>{t.loading=!1},2e3)}))},load(){t.loading=!0,k().then(e=>{e=e.filter(o=>o.hash=="53753F2A7D834F08918B0BB24AE28B84"),t.info=e[0]}).finally(()=>{t.loading=!1})}});return t.load(),(e,o)=>{const f=g,u=v,h=x;return p(),l("div",null,[V((p(),l("div",N,[a("div",U,[C,a("div",F,[a("p",T,c(s(t).info.name),1),a("p",$,c(s(t).info.businessDesc),1)])]),a("div",j,[a("p",q,[d(" \u529F\u80FD\u72B6\u6001 "),r(f,{style:{"margin-left":"6px"},onChange:o[0]||(o[0]=i=>s(t).check(s(t).info)),modelValue:s(t).info.status,"onUpdate:modelValue":o[1]||(o[1]=i=>s(t).info.status=i),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),r(u,{disabled:!s(t).info.status,type:"primary",onClick:o[2]||(o[2]=i=>_(s(t).info.adminUrl))},{default:E(()=>[d("\u8FDB\u5165\u7CFB\u7EDF")]),_:1},8,["disabled"])])])),[[h,s(t).loading]])])}}},Z=m(P,[["__scopeId","data-v-b130f93c"]]);export{Z as default};