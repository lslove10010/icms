import{R as h,u as S,j as k,h as N,b as L,g as I,k as U,v as w,o as W,E as C,m as $,_ as j}from"./entry-9cc5c370.js";/* empty css                        */import{G as K,a as M,Z as z,d as T,L as x,m as q,p as u,U as l,S as s,R as J,l as F,a6 as f,u as r,ap as O,aq as R}from"./vue-11eabec3.js";const G=()=>h({url:"/cmtcfg/all",method:"get"}),V=c=>h({url:"/cmtcfg/save",method:"put",data:c}),Z=c=>h({url:"/cmtcfg/batch/save",method:"put",data:c}),p=c=>(O("data-v-f26ade47"),c=c(),R(),c),H={class:"box"},P={class:"flex-x-between"},Q={class:"flex-x-between noticeSet"},X={class:"flex-x examine"},Y=p(()=>u("p",null,"\u8BC4\u8BBA\u5BA1\u6838",-1)),ee={class:"flex-x orders"},te=p(()=>u("p",null,"\u6BCF\u65E5\u8BC4\u8BBA\u6700\u5927\u6570",-1)),le=p(()=>u("p",null,"0\u4E3A\u4E0D\u9650",-1)),ae={class:"flex-x orders"},ne=p(()=>u("p",null,"\u8BC4\u8BBA\u95F4\u9694\u65F6\u957F",-1)),oe=p(()=>u("p",{class:"ts"},"\u79D2",-1)),ue={class:"dialog-footer"},se=K({__name:"index",setup(c){const E=S(),o=M({id:1,createAt:0,interval:0,maxCommentNum:0,needAudit:!0,needLogin:!0,open:!0,sensitiveWords:"",updateAt:0}),e=z({loading:!1,selectList:[],visable:!1,data:[],tabKey:1,load(){e.loading=!0,G().then(i=>{let a=JSON.parse(JSON.stringify(E.list));e.data=a.map(d=>{let n=i==null?void 0:i.find(v=>v.siteId==d.id);return n&&(n.needAudit==null&&(n.needAudit=!0),n.needLogin==null&&(n.needLogin=!0),n.open==null&&(n.open=!0)),{...n,id:d.id,name:d.name,domain:d.domain}}),console.log(e.data,"====")}).finally(()=>{e.loading=!1})},handleSelectionChange(i){e.selectList=i},statusChange(i){let a={...i};delete a.id,V(a).then(()=>{C({position:"bottom-right",type:"success",message:"\u8BC4\u8BBA\u8BBE\u7F6E\u66F4\u65B0\u6210\u529F"}),e.load()}).finally(()=>{e.loading=!1})}}),y=()=>{e.loading=!0,(e.tabKey==1?V(o.value):Z({sensitiveWords:o.value.sensitiveWords,maxCommentNum:o.value.maxCommentNum,interval:o.value.interval,siteIds:e.selectList.map(i=>i.siteId)})).then(()=>{C({position:"bottom-right",type:"success",message:"\u8BC4\u8BBA\u8BBE\u7F6E\u66F4\u65B0\u6210\u529F"}),e.visable=!1,e.load()}).finally(()=>{e.loading=!1})};return T(()=>{e.load()}),(i,a)=>{var b;const d=k,n=$,_=N,v=W,A=L,g=I,D=U,B=w;return x((F(),q("div",H,[u("div",P,[u("div",null,[l(d,{type:"primary",disabled:((b=e.selectList)==null?void 0:b.length)<=0,onClick:a[0]||(a[0]=t=>{e.visable=!0,e.tabKey=2,o.value={sensitiveWords:"",maxCommentNum:0,interval:1}})},{default:s(()=>[f(" \u6279\u91CF\u4FEE\u6539 ")]),_:1},8,["disabled"])])]),x((F(),J(v,{data:e.data,class:"auto",stripe:!0,onSelectionChange:e.handleSelectionChange},{default:s(()=>[l(n,{type:"selection",width:"55",class:"checkAll"}),l(n,{prop:"id",label:"ID",width:"60"}),l(n,{prop:"name",label:"\u7AD9\u70B9\u540D\u79F0","min-width":"110"}),l(n,{prop:"domain",label:"\u7AD9\u70B9\u57DF\u540D","min-width":"180"}),l(n,{label:"\u8BC4\u8BBA\u5F00\u542F","min-width":"85"},{default:s(({row:t})=>[l(_,{modelValue:t.open,"onUpdate:modelValue":m=>t.open=m,"active-value":!0,"inactive-value":!1,onChange:m=>e.statusChange(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(n,{label:"\u8BC4\u8BBA\u767B\u5F55","min-width":"85"},{default:s(({row:t})=>[l(_,{modelValue:t.needLogin,"onUpdate:modelValue":m=>t.needLogin=m,"active-value":!0,"inactive-value":!1,onChange:m=>e.statusChange(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(n,{label:"\u8BC4\u8BBA\u5BA1\u6838","min-width":"85"},{default:s(({row:t})=>[l(_,{modelValue:t.needAudit,"onUpdate:modelValue":m=>t.needAudit=m,"active-value":!0,"inactive-value":!1,onChange:m=>e.statusChange(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l(n,{fixed:"right",label:"\u64CD\u4F5C",width:"100",align:"right"},{default:s(({row:t})=>[l(d,{type:"primary",link:"",onClick:m=>{e.visable=!0,e.tabKey=1,o.value=t}},{default:s(()=>[f(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[B,e.loading]]),l(D,{modelValue:e.visable,"onUpdate:modelValue":a[5]||(a[5]=t=>e.visable=t),title:"\u7F16\u8F91\u914D\u7F6E",width:"485",zIndex:20},{footer:s(()=>[u("span",ue,[l(d,{size:"small",onClick:a[4]||(a[4]=t=>e.visable=!1)},{default:s(()=>[f("\u53D6\u6D88")]),_:1}),l(d,{size:"small",type:"primary",onClick:y},{default:s(()=>[f(" \u4FDD\u5B58 ")]),_:1})])]),default:s(()=>[u("div",Q,[u("div",X,[Y,l(A,{spellcheck:"false",modelValue:r(o).sensitiveWords,"onUpdate:modelValue":a[1]||(a[1]=t=>r(o).sensitiveWords=t),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8BC4\u8BBA\u5173\u952E\u5B57\uFF0C\u4EE5 | \u8FDB\u884C\u5206\u5272"},null,8,["modelValue"])]),u("div",ee,[te,l(g,{spellcheck:"false",modelValue:r(o).maxCommentNum,"onUpdate:modelValue":a[2]||(a[2]=t=>r(o).maxCommentNum=t),modelModifiers:{number:!0},clearable:"",precision:0,min:0,"step-strictly":"","controls-position":"right",class:"input xuhao"},null,8,["modelValue"]),le]),u("div",ae,[ne,l(g,{spellcheck:"false",modelValue:r(o).interval,"onUpdate:modelValue":a[3]||(a[3]=t=>r(o).interval=t),modelModifiers:{number:!0},clearable:"",class:"input xuhao","controls-position":"right",min:0,precision:0,"step-strictly":""},null,8,["modelValue"]),oe])])]),_:1},8,["modelValue"])])),[[B,e.loading]])}}});const ce=j(se,[["__scopeId","data-v-f26ade47"]]);export{ce as default};
