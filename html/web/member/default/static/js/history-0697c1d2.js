import{_ as e}from"./empty-ec21309c.js";import{_ as a}from"./HeaderH5-49d0ad48.js";import{a4 as t,a6 as s,_ as o}from"./index-886f43d3.js";import{d as i,o as l,r,a6 as d,ba as n,bh as p,l as u,bf as v,bc as c,a4 as f,u as m,a5 as g,F as b,bm as y,bk as h,bj as j,bb as I,h as _,bd as x,be as k}from"./vendor-others-96825896.js";import{b as w,c as z,B as C}from"./vendor-ant-design-vue-7dd2b151.js";import"./index-b0450432.js";import"./vendor-vue-router-5605f985.js";import"./vendor-vuex-61b6ee10.js";import"./vendor-axios-a0dbaeda.js";const L=e=>(x("data-v-24f80c14"),e=e(),k(),e),P={class:"content"},S={class:"box-filter"},M={class:"h-items"},U=["onClick"],q={class:"img-box"},H=["src"],V={key:0,style:{"background-color":"#feaf79"},class:"tags"},B={key:1,class:"tags"},F={class:"item-info"},N={class:"info-tit"},$={style:{color:"#999999","font-size":"12px"}},A={key:0,style:{padding:"80px 0",width:"100%"},class:"query-empty"},D=[L((()=>v("img",{src:e,alt:"空状态"},null,-1))),L((()=>v("p",null,"暂无观看记录",-1)))],E=o(i({__name:"history",setup(e){const o=_(),{$http:i}=o.appContext.config.globalProperties,x=(e=!1)=>{let a={limit:6,offset:e?0:6*(L.pageSize-1)};e&&(L.pageSize=1,L.historyList=[],a.chargingMode=L.filter),i.get("/openapi/browse/mobile/page",{params:a}).then((e=>{let{data:a}=e;L.total=a.total,L.historyList.push(...a.list)}))},k=()=>{L.pageSize+=1,x()};l((()=>{document.title="观看历史",x()}));const L=r({pageSize:1,total:0,filter:0,historyList:[]}),{filter:E,historyList:G,total:J}=d(L);return(e,o)=>{const i=w,l=z,r=C;return n(),p("div",null,[u(a,{title:"观看历史"}),v("div",P,[v("div",S,[u(l,{value:m(E),"onUpdate:value":o[0]||(o[0]=e=>g(E)?E.value=e:null),onChange:o[1]||(o[1]=e=>x(!0)),"button-style":"solid"},{default:c((()=>[u(i,{value:0},{default:c((()=>[f("全部")])),_:1}),u(i,{value:2},{default:c((()=>[f("VIP")])),_:1}),u(i,{value:3},{default:c((()=>[f("点播")])),_:1})])),_:1},8,["value"])]),v("div",M,[(n(!0),p(b,null,y(m(G),((e,a)=>{var o,i,l;return n(),p("div",{class:"item-box",onClick:a=>((e,a=!1)=>{var t;if(!e)return!1;let o={id:e.videoInfo.id,cateId:e.videoInfo.categoryPid};e.progress>0&&a&&(o.playId=null==(t=e.playLine)?void 0:t.id),e.jumpUrl?window.open(e.jumpUrl,"_self"):s.push({path:a?"/play":"/details",query:o})})(e,!0),key:a},[v("div",q,[v("img",{src:null==(o=e.videoInfo)?void 0:o.surfacePlot,style:{"object-fit":"cover"}},null,8,H),2==(null==(i=e.videoInfo)?void 0:i.chargingMode)?(n(),p("div",V," VIP ")):h("",!0),3==(null==(l=e.videoInfo)?void 0:l.chargingMode)?(n(),p("div",B," 金币点播 ")):h("",!0)]),v("div",F,[v("span",N,j(e.videoInfo.title),1),v("span",$,j(m(t)(Number(e.videoInfo.duration*e.progress/100)))+" / "+j(m(t)(e.videoInfo.duration)),1)])],8,U)})),128)),0==m(G).length?(n(),p("div",A,D)):h("",!0),m(J)>m(G).length?(n(),I(r,{key:1,style:{width:"120px",margin:"0 auto"},onClick:k,type:"primary"},{default:c((()=>[f(" 查看更多")])),_:1})):h("",!0)])])])}}}),[["__scopeId","data-v-24f80c14"]]);export{E as default};