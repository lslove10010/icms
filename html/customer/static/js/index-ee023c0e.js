import{A as e,h as a,D as t,R as l,ai as s,a7 as n,ao as i,o,b as r,d,a as c,w as p,af as u,u as m,t as v,S as g,T as f,e as x,a3 as y,B as h,H as b,f as _,c as D,O as j,P as z}from"./.pnpm-9c274078.js";import{_ as I}from"./empty-6f66e897.js";import{c as w}from"./cprogress-89103bb1.js";import{c as F}from"./bar-9b969fb5.js";import{_ as P,p as $}from"./index-e716b57f.js";/* empty css                                                 */import k from"./index-f0f6e129.js";import"./mesList-6e63e858.js";const S=e=>(j("data-v-ece778c0"),e=e(),z(),e),C={class:"exam-box"},E={class:"exam-header"},L=S((()=>d("div",{class:"exam-title"},"会话数据走势",-1))),V={style:{display:"flex",gap:"16px"},class:"panel"},A={class:"exam-content",style:{width:"350px"}},B=S((()=>d("div",{class:"exam-title"},"客服概况",-1))),N={class:"content-table"},O={class:"container"},T={class:"chart-box"},H={class:"pieBox",style:{"justify-content":"flex-start",gap:"24px 0","padding-right":"0"}},R=S((()=>d("p",null,"处理会话总数",-1))),U={class:"number",style:{"font-size":"36px"}},q={key:0,class:"fyInfo",style:{gap:"24px 0","padding-right":"16px"}},G={key:1,class:"table-empty",style:{padding:"16px 0 0",width:"100%"}},J=[S((()=>d("img",{src:I,alt:"空状态",style:{width:"120px"}},null,-1))),S((()=>d("p",{style:{"font-size":"12px"}},"暂无数据",-1)))],K={class:"pagination",style:{"font-size":"12px",padding:"0 16px","line-height":"5vh"}},M={class:"filter",style:{margin:"0"}},Q={class:"right"},W={class:"search-item"},X=S((()=>d("span",null,"时间范围",-1))),Y={class:"exam-content"},Z=S((()=>d("div",{class:"exam-title"},"客服详情",-1))),ee={class:"content-table"},ae={class:"container",style:{padding:"0"}},te=P({__name:"index",setup(j){const z=h(),{$http:I}=z.appContext.config.globalProperties;e();const P=a({fy:{},search:"",options:[],agentLevelId:"",value_time:[],channelId:"",refresh:!0});t((()=>{S()}));const S=async()=>{var e;te.loading=!0;let a={};(null==(e=P.value_time)?void 0:e.length)>0&&(a.timeStart=P.value_time[0]/1e3,a.timeEnd=Number(P.value_time[1]/1e3+86399)),""!==P.channelId&&(a.channelId=P.channelId);var{data:t}=await I.get("/api/v1/customer/user/statistic2",{params:a});te.tableData=null!=t?t:[],te.total=t?t.reduce(((e,a)=>e+a.total),0):0,te.loading=!1},te=a({tableData:[],currentPage:1,pageSize:20,total:0,order:"",loading:!1,current(e){te.currentPage=e,S()},size(e){te.pageSize=e,te.currentPage=1,S()},sort(e){const{prop:a,order:t}=e;te.order=a&&t?`${a},${"descending"==t?"desc":"asc"}`:"",S()}}),{fy:le,search:se,options:ne,agentLevelId:ie,value_time:oe,channelId:re,refresh:de}=l(P);return l(te),(e,a)=>{const t=b,l=_,h=s,j=n,z=i;return o(),r("div",C,[d("div",E,[c(F,null,{default:p((()=>[L])),_:1})]),d("div",V,[d("div",A,[B,d("div",N,[d("div",O,[d("div",T,[u((o(),r("div",H,[R,d("p",null,[d("span",U,v(te.total),1)]),te.tableData.length>0&&m(de)?(o(),r("div",q,[(o(!0),r(g,null,f(new Array(10),((e,a)=>{var t,l,s,n,i,r,d,c,p,u,m;return o(),D(w,{type:5,size:"24px",color:a<=(null==(t=te.tableData)?void 0:t.length)-1?["#FF5E09","#FFC071","#FFE680"][a]||"eaebc5":"#ebeef5",title:"TOP"+(a+1),text:`${(null==(s=null==(l=te.tableData)?void 0:l[a])?void 0:s.username)?null==(i=null==(n=te.tableData)?void 0:n[a])?void 0:i.username:""}   ${(null==(d=null==(r=te.tableData)?void 0:r[a])?void 0:d.total)||0}例`,percentage:100*Number((null==(p=null==(c=te.tableData)?void 0:c[a])?void 0:p.total)/(null==(m=null==(u=te.tableData)?void 0:u[0])?void 0:m.total))||0},null,8,["color","title","text","percentage"])})),256))])):(o(),r("div",G,J))])),[[z,!m(de)]])]),d("div",K,[x(v(m(oe)&&m(oe)[0]?m($)(m(oe)[0],"{y}-{m}-{d}")+"~":"")+" "+v(m(oe)&&m(oe)[1]?m($)(m(oe)[1],"{y}-{m}-{d}")+"":"")+" ",1),c(j,{placement:"bottom",width:350,trigger:"click",teleported:!1},{reference:p((()=>[c(l,{class:"m-2",type:"primary",style:{"margin-left":"auto",padding:"0"},link:""},{default:p((()=>[c(t,null,{default:p((()=>[x("筛选")])),_:1})])),_:1})])),default:p((()=>[d("div",M,[d("div",Q,[d("div",W,[X,c(h,{class:"item",teleported:!1,placement:"top",modelValue:m(oe),"onUpdate:modelValue":a[0]||(a[0]=e=>y(oe)?oe.value=e:null),"value-format":"x",onChange:a[1]||(a[1]=e=>{S()}),style:{width:"240px","--el-font-size-base":"12px"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"default"},null,8,["modelValue"])])])])])),_:1})])])])]),d("div",Y,[Z,d("div",ee,[d("div",ae,[c(k)])])])])])}}},[["__scopeId","data-v-ece778c0"]]);export{te as default};
