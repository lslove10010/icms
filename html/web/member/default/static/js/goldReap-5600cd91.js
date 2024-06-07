import{_ as e}from"./index-b0450432.js";import{_ as a,p as t,T as s,a6 as l}from"./index-886f43d3.js";import{s as n,L as i,F as o,W as r,A as d}from"./lunarFestival-711a6435.js";import{v as u,o as c,w as p,Z as v,ba as g,bh as m,bf as h,a4 as f,bj as b,F as y,bm as D,bo as w,bb as x,bk as C,h as k,bd as _,be as j,d as M,r as F,k as S,a6 as Y,l as I,bc as z,u as A}from"./vendor-others-96825896.js";import{_ as L}from"./HeaderH5-49d0ad48.js";import{u as R}from"./vendor-vuex-61b6ee10.js";import{m as T,B as W}from"./vendor-ant-design-vue-7dd2b151.js";import"./vendor-vue-router-5605f985.js";import"./vendor-axios-a0dbaeda.js";const B={class:"calendar-container"},U={class:"select-box",style:{visibility:"visible"}},H=(e=>(_("data-v-b406b5dc"),e=e(),j(),e))((()=>h("h3",{style:{"font-size":"16px",margin:"0"}},"签到赚金币",-1))),N={style:{"font-size":"14px"}},O={style:{color:"#ffb858",margin:"0 4px"}},P={style:{color:"#ffb858",margin:"0 4px"}},$={class:"table-box"},E={key:"item.date"},Z={class:"calendar-relative"},q=["date"],G={class:"item-box"},J={key:0},K={class:"item-dayTime"},Q=a({__name:"h5",props:{date:String,range:{type:Array,default:[2010,2030]}},emits:["change"],setup(a,{expose:s,emit:l}){const _=a,j=k(),{$http:M}=j.appContext.config.globalProperties;function F(e=new Date){return e=+(e=new Date(e))-864e5,(e=new Date(e)).getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()}function S(e=new Date){return e=+(e=new Date(e))+864e5,(e=new Date(e)).getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()}const Y=u(""),I=u([""]),z=u([]),A=u(""),L=u(""),R=u("2021");let T=u({}),W=new Date;T.value=n.solar2lunar(W.getFullYear(),W.getMonth()+1,W.getDate());for(let e=_.range[0];e<_.range[1];e++);const Q=(new Date).getFullYear()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getDate();const V=async()=>{te(),_.date&&(Y.value=_.date),ae(R.value,L.value)},X=u(0),ee=u(0),ae=(e,a)=>{M.get("/openapi/sign/list").then((e=>{if(e.data.length<1)return z.value=[],!1;let a=e.data.list;X.value=e.data.accumulate,ee.value=e.data.continuous;let s=a.map((e=>t(e.signDate,"{y}-{m}-{d}")));z.value=s,se()}))},te=()=>{let e=new Date,a=e.getFullYear(),t=e.getMonth()+1,s=e.getDate();A.value=e,R.value=a,L.value=t,Y.value=[a,t,s].join("/")},se=()=>{let e=R.value,a=L.value,s=1,l=[];let u=new Date([e,a,s].join("/")),c=[e,a,s].join("/"),p=u.getDay();p=0==p?7:p;for(let v=1;v<p;v++){c=F(new Date(c));let e,a,{term:s,dayCn:u,monthCn:p,cDay:v,cMonth:g,cYear:m}=n.solar2lunar(...c.split("/"));if(o[g]&&o[g][v]&&(s=o[g][v]),i[p]&&i[p][u]&&(s=i[p][u]),r[m]&&r[m][g]&&r[m][g][v]&&(e=!0),d[m]&&d[m][g]){let e=d[m][g];v>=e[0]&&v<=e[1]&&(a=!0)}l.push({day:c.split("/")[2],date:c,d_day:s||u,isLast:new Date(c)<new Date(Q),ishover:Y.value==c,isSelectClass:z.value.indexOf(t(c,"{y}-{m}-{d}"))>=0,otherMonth:!0,hasTerm:s,isWeekend:(6==new Date(c).getDay()||0==new Date(c).getDay())&&!e,isWorkDay:e,isRestDay:a})}c=[e,a,s].join("/"),l=l.reverse();for(let v=0;v<=42-p;v++){let e,s,{term:u,dayCn:p,monthCn:v,cMonth:g,cDay:m,cYear:h}=n.solar2lunar(...c.split("/"));if(o[g]&&o[g][m]&&(u=o[g][m]),i[v]&&i[v][p]&&(u=i[v][p]),r[h]&&r[h][g]&&r[h][g][m]&&(e=!0),d[h]&&d[h][g]){let e=d[h][g];m>=e[0]&&m<=e[1]&&(s=!0)}l.push({date:c,day:c.split("/")[2],d_day:u||p,isLast:new Date(c)<new Date(Q),ishover:Y.value==c,isSelectClass:z.value.indexOf(t(c,"{y}-{m}-{d}"))>=0,otherMonth:c.split("/")[1]!=a,hasTerm:u,isWeekend:(6==new Date(c).getDay()||0==new Date(c).getDay())&&!e,isWorkDay:e,isRestDay:s}),c=S(new Date(c))}I.value=[];for(let t=0;t<=5;t++)I.value.push(l.splice(0,7))};s({init:V}),c((()=>{V()})),p(Y,(e=>{R.value=e.split("/")[0],L.value=e.split("/")[1];let a=n.solar2lunar(...e.split("/"));T.value={lunarFestival:i[a.monthCn]?i[a.monthCn][a.dayCn]:void 0,festival:o[a.cMonth]?o[a.cMonth][a.cDay]:void 0,...a},l("change",{date:e,...T.value}),v(se)}));const le=e=>{e.target.parentNode.getAttribute("date")?e.target.parentNode.getAttribute("date"):e.target.getAttribute("date")};return(a,s)=>{const l=e;return g(),m("div",B,[h("div",U,[H,h("span",N,[f(" 您已连续签到 "),h("label",O,b(ee.value),1),f("天  累计签到 "),h("label",P,b(X.value),1),f("天")])]),h("table",$,[h("tbody",null,[(g(!0),m(y,null,D(I.value,(e=>(g(),m("tr",null,[(g(!0),m(y,null,D(e,(e=>{return g(),m("td",E,[h("div",Z,[h("a",{href:"javascript:void(0);",class:w({"item-selected":e.isSelectClass,"item-hover":e.ishover,"item-other-month":e.otherMonth,"item-last-nosign":e.isLast&&!e.isSelectClass}),date:e.date,onClick:le},[h("span",G,[e.isLast&&!e.isSelectClass?(g(),m("span",J,"已过")):e.isSelectClass?(g(),x(l,{key:1,name:"xuanzhong",color:e.isSelectClass&&e.ishover?"#fff":"#FFBD68",size:"16px"},null,8,["color"])):C("",!0),h("span",K,b((a=e.date,a?Q==a?"今天":t(a,"{m}-{d}"):"")),1)])],10,q)])]);var a})),128))])))),256))])])])}}},[["__scopeId","data-v-b406b5dc"]]),V={class:"main-bg"},X={class:"content"},ee={class:"gold-num"},ae={class:"num"},te={class:"text"},se=(e=>(_("data-v-39d83780"),e=e(),j(),e))((()=>h("div",{class:"box-surplus"},null,-1))),le=a(M({__name:"goldReap",setup(a){const t=R(),n=k(),{$http:i}=n.appContext.config.globalProperties,o=e=>("/"!=e||!s("h5"))&&(!!e&&void l.push({path:e})),r=u(null),d=()=>{if(s("h5"))return!1;i.post("/openapi/sign").then((e=>{T.success(e.data.message||"签到成功！"),t.dispatch("refreshInfo"),r.value.init()}))};c((()=>{document.title="赚金币",i.get("/openapi/task/list").then((e=>{p.taskMap=e.data}))}));const p=F({pageSize:1,total:0,filter:0,userInfo:S((()=>t.getters.userInfo))||{},taskMap:[]});setTimeout((()=>{}),2e3);const{filter:v,taskMap:y,total:D,userInfo:w}=Y(p);return(a,t)=>{const s=e,l=W;return g(),m("div",V,[I(L,{title:"签到领金币"},{right:z((()=>[h("div",{class:"rule-tags",onClick:t[0]||(t[0]=e=>o("/memberUser/goldRules"))}," 规则 ")])),_:1}),h("div",X,[h("div",ee,[h("div",ae,b(A(w).goldCoin),1),h("div",te,[f(" 金币 "),I(s,{name:"xiangyouhuadong",onClick:t[1]||(t[1]=e=>o("/memberUser/deal"))})])]),I(l,{class:"toExchange",onClick:t[2]||(t[2]=e=>o("/memberUser/gold")),type:"primary"},{default:z((()=>[f(" 马上去兑换 ")])),_:1}),h("div",null,[se,I(Q,{ref_key:"calendarsRef",ref:r},null,512)]),I(l,{class:"caleBtn",disabled:A(w).isSign,onClick:d,type:"primary"},{default:z((()=>[f(b(A(w).isSign?"今日已签到，明天再来":"立即签到"),1)])),_:1},8,["disabled"])])])}}}),[["__scopeId","data-v-39d83780"]]);export{le as default};