import{s as M,b as O,c as P,i as R,j as q,v as G,E as S,C as H,cJ as E,p as b,w as J,cK as Q,_ as W}from"./entry-9cc5c370.js";/* empty css                   */import{p as Z}from"./plugHeader-c50619f4.js";import{s as X,a as Y,u as ee,g as te,p as ue,b as ae}from"./accelerate-53668355.js";import{E as se}from"./index-bf5a11eb.js";import{G as le,Z as U,d as ne,m,p as l,U as s,S as t,W as D,a6 as r,L as oe,u as d,O as k,R as i,Q as f,ap as ie,aq as re,l as u,P as N,af as $,a as ce}from"./vue-11eabec3.js";const de=""+new URL("../svg/penetrate_v3-5e3f5630.svg",import.meta.url).href,x=h=>(ie("data-v-5225905e"),h=h(),re(),h),_e={style:{height:"100%"}},pe={class:"card",style:{overflow:"hidden"}},me={class:"flex-x-between"},ge={class:"left"},Fe=x(()=>l("img",{src:de,alt:"",style:{width:"80px",height:"80px"}},null,-1)),fe={class:"flex-y"},he={class:"name"},ve={class:"business"},ye=x(()=>l("span",{style:{color:"#db4646"}},"\u672C\u7A7F\u900F\u529F\u80FD\u4EC5\u652F\u6301CMS\u7CFB\u7EDF\u76D1\u542C\u7AEF\u53E3\u7684\u57DF\u540D\u7A7F\u900F\u3002(\u672C\u529F\u80FD\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\u540E\u65E0\u6548\uFF0C\u4E0D\u652F\u6301\u53CD\u5411\u4EE3\u7406\u7A7F\u900F)",-1)),Ce=["element-loading-text"],Ee={key:0,style:{width:"100%",height:"14px",color:"#db4646","line-height":"40px"}},be=["src"],De={key:1,style:{"font-size":"12px",color:"#7EDE67","text-align":"center"}},ke={class:"flex-x-center btns",style:{"margin-top":"32px"}},xe=x(()=>l("div",{class:"ubuntulist"},[l("span",{class:"ubuntulist_title"},"\u5185\u6838\u652F\u6301\u5217\u8868")],-1)),Ae={class:"version_list"},Be={class:"ubuntulist"},Ve=x(()=>l("span",{class:"ubuntulist_title"},"\u5185\u6838\u652F\u6301\u5217\u8868",-1)),Se={class:"ubuntulist_content"},we={class:"version_list"},Te=le({__name:"index",setup(h){const e=U({loading:!1,name:"\u79FB\u52A8\u7A7F\u900F\u7BA1\u7406",businessDesc:"\u7A7F\u900F\u79FB\u52A8\u5C01\u7981\uFF0C\u6700\u5927\u5316\u7684\u4FDD\u6301\u7528\u6237\u7559\u5B58\u3002",status:0,kernel_version:"",KernelStatus:0,penetrate_status:1,percentagenum:0,data:{matching:0,reserve_core:[]},update:()=>{}}),o=U({type:2,system:"",system_version:"",kernel_version:"",architecture:""}),A=()=>{e.loading=!0,e.percentagenum=0;let c={type:o.type};te(c).then(a=>{e.loading=!1,Object.keys(o).forEach(F=>{o[F]=a[F]}),o.type=2,e.data=a.data,e.penetrate_status=a.penetrate_status}).finally(()=>{e.loading=!1})};var g;const L=c=>{clearTimeout(g);let a=ce(500);g=setInterval(()=>{e.percentagenum>=50&&e.percentagenum<=80&&(a.value=800),e.percentagenum>=80&&e.percentagenum<=99&&(a.value=1e3),e.percentagenum>=99?clearInterval(g):e.percentagenum++},a.value),ae({kernel_version:c}).then(F=>{e.percentagenum=100,clearTimeout(g),S({position:"bottom-right",type:"success",message:F}),V()}).catch(()=>{e.percentagenum=0,clearTimeout(g)}).finally(()=>{e.percentagenum=0,clearTimeout(g)})},v=c=>{if(c==3){S({position:"bottom-right",type:"warning",message:"\u5185\u6838\u7248\u672C\u4E0D\u652F\u6301\u5F00\u542F\u7A7F\u900F\uFF0C\u8BF7\u5347\u7EA7\u5185\u6838\u7248\u672C"});return}e.loading=!0,(c==2?X(o):Y(o)).then(()=>{A(),S({position:"bottom-right",type:"success",message:"\u64CD\u4F5C\u6210\u529F"})}).catch(()=>{e.loading=!1})};var B;const V=()=>{clearTimeout(B),ee().then(c=>{c==1?(e.loading=!0,e.status=1,B=setTimeout(()=>{V()},2e3)):c==2?(e.KernelStatus=2,w(),A(),clearTimeout(B)):A()})},w=()=>{H({message:"\u5185\u6838\u5347\u7EA7\u5B8C\u6210\uFF0C\u662F\u5426\u7ACB\u5373\u91CD\u542F\u670D\u52A1\u5668\uFF1F",okText:"\u91CD\u542F",cancleText:"\u6682\u4E0D\u91CD\u542F",size:"default"},()=>Q())};return ne(()=>{V()}),(c,a)=>{var I,K;const F=Z,_=M,y=O,C=P,j=R,p=q,T=se,z=G;return u(),m("div",_e,[l("div",pe,[s(F,{style:{"margin-bottom":"0","margin-top":"-4px"}},{default:t(()=>[r("\u79FB\u52A8\u7A7F\u900F\u7BA1\u7406")]),_:1}),l("div",me,[l("div",ge,[Fe,l("div",fe,[l("p",he,D(e.name),1),l("p",ve,[r(D(e.businessDesc)+" ",1),ye])])])])]),l("div",{class:f({cfg:!0,cfg2:e.penetrate_status==2}),style:{"margin-top":"120px"}},[oe((u(),m("div",{class:"accelerate_item","element-loading-text":e.status==1?"\u5185\u6838\u5347\u7EA7\u4E2D...":""},[s(j,{"label-position":"top","label-width":"100px",model:o},{default:t(()=>[s(C,{label:"\u7CFB\u7EDF\u7C7B\u578B",class:f(e.data.matching==5||e.data.matching==0?"colo4":"colo3")},{default:t(()=>[s(y,{modelValue:o.system,"onUpdate:modelValue":a[0]||(a[0]=n=>o.system=n),disabled:""},{suffix:t(()=>[e.data.matching==5||e.data.matching==0?(u(),i(_,{key:0},{default:t(()=>[s(d(E),{class:"colo4"})]),_:1})):(u(),i(_,{key:1},{default:t(()=>[s(d(b),{class:"colo3"})]),_:1}))]),_:1},8,["modelValue"])]),_:1},8,["class"]),s(C,{label:"\u7CFB\u7EDF\u7248\u672C",class:f(e.data.matching>=4||e.data.matching==0?"colo4":"colo3")},{default:t(()=>[s(y,{modelValue:o.system_version,"onUpdate:modelValue":a[1]||(a[1]=n=>o.system_version=n),disabled:""},{suffix:t(()=>[e.data.matching>=4||e.data.matching==0?(u(),i(_,{key:0},{default:t(()=>[s(d(E),{class:"colo4"})]),_:1})):(u(),i(_,{key:1},{default:t(()=>[s(d(b),{class:"colo3"})]),_:1}))]),_:1},8,["modelValue"])]),_:1},8,["class"]),s(C,{label:"\u7CFB\u7EDF\u67B6\u6784",class:f(e.data.matching>=3||e.data.matching==0?"colo4":"colo3")},{default:t(()=>[s(y,{modelValue:o.architecture,"onUpdate:modelValue":a[2]||(a[2]=n=>o.architecture=n),disabled:""},{suffix:t(()=>[e.data.matching>=3||e.data.matching==0?(u(),i(_,{key:0},{default:t(()=>[s(d(E),{class:"colo4"})]),_:1})):(u(),i(_,{key:1},{default:t(()=>[s(d(b),{class:"colo3"})]),_:1}))]),_:1},8,["modelValue"])]),_:1},8,["class"]),s(C,{label:"\u5185\u6838\u7248\u672C",class:f(e.data.matching>=2||e.data.matching==0?"colo4":"colo3")},{default:t(()=>[s(y,{modelValue:o.kernel_version,"onUpdate:modelValue":a[3]||(a[3]=n=>o.kernel_version=n),disabled:""},{suffix:t(()=>[e.data.matching>=2||e.data.matching==0?(u(),i(_,{key:0},{default:t(()=>[s(d(E),{class:"colo4"})]),_:1})):(u(),i(_,{key:1},{default:t(()=>[s(d(b),{class:"colo3"})]),_:1}))]),_:1},8,["modelValue"]),e.KernelStatus==2?(u(),m("div",Ee," \u5185\u6838\u5347\u7EA7\u6210\u529F\uFF0C\u91CD\u542F\u670D\u52A1\u5668\u751F\u6548 ")):k("",!0)]),_:1},8,["class"])]),_:1},8,["model"]),e.penetrate_status==2?(u(),m("img",{key:0,src:d(ue),alt:""},null,8,be)):k("",!0),e.penetrate_status==2?(u(),m("div",De,"\u6B63\u5728\u7A7F\u900F\u4E2D\u2026 ")):k("",!0),l("div",ke,[e.penetrate_status==2?(u(),i(p,{key:0,type:"danger",onClick:a[4]||(a[4]=n=>v(e.penetrate_status))},{default:t(()=>[r("\u5173\u95ED\u7A7F\u900F")]),_:1})):e.KernelStatus==2?(u(),i(p,{key:1,type:"primary",onClick:w},{default:t(()=>[r("\u91CD\u542F\u670D\u52A1\u5668")]),_:1})):e.data.matching==2&&o.system!="Ubuntu"?(u(),i(T,{key:2,ref:"popover",placement:"right",width:400,trigger:"hover",disabled:e.data.reserve_core==null||((I=e.data.reserve_core)==null?void 0:I.length)==0},{reference:t(()=>[s(p,{type:"primary",onClick:a[5]||(a[5]=n=>v(3)),loading:e.percentagenum>0&&e.percentagenum<100},{default:t(()=>[r("\u5347\u7EA7\u5185\u6838")]),_:1},8,["loading"])]),default:t(()=>[xe,l("ul",Ae,[(u(!0),m(N,null,$(e.data.reserve_core,n=>(u(),m("li",{key:n},[l("div",null,[l("p",null,D(n.version),1),s(p,{type:"primary",onClick:Ie=>L(n.version),link:"",disabled:e.percentagenum!=0},{default:t(()=>[r("\u5347\u7EA7")]),_:2},1032,["onClick","disabled"])])]))),128))])]),_:1},8,["disabled"])):e.data.matching==2&&o.system=="Ubuntu"?(u(),i(T,{key:3,ref:"popover",placement:"right",width:420,trigger:"hover",disabled:e.data.reserve_core==null||((K=e.data.reserve_core)==null?void 0:K.length)==0},{reference:t(()=>[s(p,{type:"primary",onClick:a[6]||(a[6]=n=>v(3)),loading:e.percentagenum>0&&e.percentagenum<100},{default:t(()=>[r("\u5347\u7EA7\u5185\u6838")]),_:1},8,["loading"])]),default:t(()=>[l("div",Be,[Ve,l("span",Se,[s(_,{style:{"margin-right":"6px"}},{default:t(()=>[s(d(J))]),_:1}),r(" ubuntu\u7CFB\u7EDF\u9700\u624B\u52A8\u5347\u7EA7\u5230\u5BF9\u5E94\u5185\u6838\u7248\u672C")])]),l("ul",we,[(u(!0),m(N,null,$(e.data.reserve_core,n=>(u(),m("li",{key:n},[l("div",null,[l("p",null,D(n.version),1)])]))),128))])]),_:1},8,["disabled"])):e.penetrate_status==1&&e.data.matching==1?(u(),i(p,{key:4,type:"primary",onClick:a[7]||(a[7]=n=>v(e.penetrate_status))},{default:t(()=>[r("\u5F00\u542F\u7A7F\u900F")]),_:1})):e.data.matching==5||e.data.matching==0?(u(),i(p,{key:5,type:"danger"},{default:t(()=>[r("\u7CFB\u7EDF\u4E0D\u652F\u6301")]),_:1})):e.data.matching==4?(u(),i(p,{key:6,type:"danger"},{default:t(()=>[r("\u7CFB\u7EDF\u7248\u672C\u4E0D\u652F\u6301")]),_:1})):e.data.matching==3?(u(),i(p,{key:7,type:"danger"},{default:t(()=>[r("\u7CFB\u7EDF\u67B6\u6784\u4E0D\u652F\u6301")]),_:1})):k("",!0)])],8,Ce)),[[z,e.loading]])],2)])}}});const ze=W(Te,[["__scopeId","data-v-5225905e"]]);export{ze as default};
