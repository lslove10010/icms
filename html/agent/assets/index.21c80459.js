import{d as $,u as M,r as V,a as C,z as T,e as O,X as Q,c as j,V as G,W as X,J as q,K as J,g as h,N as g,w as o,O as k,h as c,L as K,i as a,ae as W,Q as H,o as r,m as n,C as p,$ as R,a0 as Y,q as Z,a5 as ee,P as te,x as ae,p as le,l as oe,_ as ne}from"./entry.e31dd3ae.js";/* empty css                        */import{P as se,F as ie,c as de,U as ue}from"./agencyCenter.524bd4cd.js";import{f as re,l as ce}from"./agencyList.92ad2b93.js";const B=_=>(le("data-v-3d108d75"),_=_(),oe(),_),me={class:"survey flex-x"},pe=n(" \u603B\u4F63\u91D1\uFF1A"),_e=n("\u5143 "),he=B(()=>c("span",{class:"line"},null,-1)),ge=n(" \u51BB\u7ED3\u4F63\u91D1\uFF1A"),ve=n("\u5143 "),fe=B(()=>c("span",{class:"line"},null,-1)),be=n(" \u53EF\u7528\u4F63\u91D1\uFF1A"),Fe=n("\u5143 "),Ee={style:{"font-size":"12px"}},ye={class:"search",style:{margin:"0"}},xe={class:"flex-y box"},Ve={key:0},Ce={key:1},ke={style:{display:"flex","align-items":"center",gap:"8px"}},Be=n(" \u5145\u503C\u4F1A\u5458 "),Ie={style:{"line-height":"1"}},De=$({__name:"index",props:{id:{type:String,default:""}},setup(_){const u=_,v=M(),d=V({pageIndex:1,pageSize:20,total:0}),b=V(),e=C({loading:!1,data:[],searchVal:{keyword:void 0,agentLevelId:void 0,order:"",timeEnd:void 0,timeStart:void 0},selectList:[],load(m){d.value=m||d.value,e.loading=!0;const l={page:d.value.pageIndex,limit:d.value.pageSize,...e.searchVal,agentLevelId:e.searchVal.agentLevelId||void 0,keyword:e.searchVal.keyword||void 0,order:e.searchVal.order||void 0};u.id||v.siteObj.siteId&&(l.siteId=v.siteObj.siteId),(u.id?de({...l,memberId:u.id}):re(l)).then(s=>{e.data=u.id?{data:s}:s,d.value.total=u.id?s.total:s.data.total}).finally(()=>{e.loading=!1})},handleSelectionChange(m){this.selectList=m},sortChnage({column:m,prop:l,order:s}){s?e.searchVal.order=`${l} ${s==="ascending"?"asc":"desc"}`:e.searchVal.order="",e.load()}}),f=C({value:[],get(){ce().then(m=>{f.value=m})}});return f.get(),T(()=>{e.load()}),(m,l)=>{var E,y;const s=O,I=Q,F=j,D=G,S=X,w=ee,L=ie,i=te,A=ae("QuestionFilled"),U=q,N=H,z=J;return r(),h("div",{class:W(u.id?"compen_box":"fli_f_box")},[u.id?k("",!0):(r(),g(L,{key:0,filtter:!0,onGetList:e.load},{fittleBtn:o(()=>[c("div",me,[pe,a(s,{type:"primary",link:""},{default:o(()=>[n(p(e.data.brokerageTotal),1)]),_:1}),_e,he,ge,a(s,{type:"primary",link:""},{default:o(()=>[n(p(e.data.brokerageFreeze),1)]),_:1}),ve,fe,be,a(s,{type:"primary",link:""},{default:o(()=>[n(p(e.data.brokerageUsable),1)]),_:1}),Fe])]),fittleItem:o(()=>[c("div",Ee,[a(F,{"label-width":"70px",label:"\u65E5\u671F",style:{margin:"0"}},{default:o(()=>[a(I,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=t=>b.value=t),type:"daterange",size:"default",class:"fli_filtitem",style:{width:"100%","margin-bottom":"8px"},"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F","value-format":"X",onChange:l[1]||(l[1]=t=>{[e.searchVal.timeStart,e.searchVal.timeEnd]=t||[],e.searchVal.timeEnd=e.searchVal.timeEnd?Number(e.searchVal.timeEnd)+86399:void 0,d.value.pageIndex=1,e.load()})},null,8,["modelValue"])]),_:1}),a(F,{"label-width":"70px",label:"\u4EE3\u7406\u7B49\u7EA7",style:{margin:"0"}},{default:o(()=>[a(S,{style:{width:"100%"},modelValue:e.searchVal.agentLevelId,"onUpdate:modelValue":l[2]||(l[2]=t=>e.searchVal.agentLevelId=t),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u4EE3\u7406\u7B49\u7EA7",onChange:l[3]||(l[3]=t=>{d.value.pageIndex=1,e.load()})},{default:o(()=>[(r(!0),h(R,null,Y(f.value,t=>(r(),g(D,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),fittleSear:o(()=>[c("div",ye,[a(w,{modelValue:e.searchVal.keyword,"onUpdate:modelValue":l[4]||(l[4]=t=>e.searchVal.keyword=t),onBlur:l[5]||(l[5]=t=>{d.value.pageIndex=1,e.load()})},null,8,["modelValue"])])]),_:1},8,["onGetList"])),c("div",xe,[K((r(),g(N,{data:((y=(E=e.data)==null?void 0:E.data)==null?void 0:y.data)||[],class:"auto",stripe:!0,onSortChange:e.sortChnage,onSelectionChange:e.handleSelectionChange},{default:o(()=>[a(i,{"min-width":"80",label:"\u4EE3\u7406\u8D26\u53F7",prop:"memberUsername"},{default:o(({row:t})=>[a(ue,{id:t.memberId,name:t.memberUsername||t.username},null,8,["id","name"])]),_:1}),a(i,{prop:"type",label:"\u6211\u7684\u7B49\u7EA7","min-width":"80"},{default:o(({row:t})=>[n(p(t.memberLevelName||t.agentLevelName),1)]),_:1}),u.id?k("",!0):(r(),g(i,{key:0,label:"\u6240\u5C5E\u7AD9\u70B9","min-width":"95"},{default:o(({row:t})=>{var x;return[t.siteId==0?(r(),h("span",Ve,"\u9ED8\u8BA4\u7AD9\u70B9")):(r(),h("span",Ce,p(((x=Z(v).siteMap.find(P=>P.id==t.siteId))==null?void 0:x.name)||"-"),1))]}),_:1})),a(i,{"min-width":"80",label:"\u5145\u503C\u4F1A\u5458",prop:"rechargeMemberUsername"},{header:o(()=>[c("p",ke,[Be,a(U,{class:"box-item",effect:"light",content:"\u6211\u7684\u76F4\u5C5E\u4EE3\u7406\u6216\u8005\u56E2\u961F\u6210\u5458",placement:"top"},{default:o(()=>[c("span",Ie,[a(A,{style:{color:"#d3d3d3","vertical-align":"text-top","text-align":"center",width:"13px","pointer-events":"none"}})])]),_:1})])]),default:o(({row:t})=>[n(p(t.rechargeMemberUsername||t.rechargeMemberName),1)]),_:1}),a(i,{"min-width":"80",label:"\u5145\u503C\u8BF4\u660E",prop:"rechargeAttach"}),a(i,{"min-width":"80",label:"\u5145\u503C\u91D1\u989D",prop:"rechargeAmount"}),a(i,{"min-width":"80",label:"\u4F63\u91D1\u6BD4\u4F8B",prop:"brokerageScale"}),a(i,{"min-width":"80",label:"\u83B7\u5F97\u4F63\u91D1",prop:"amount2"}),a(i,{"min-width":"80",label:"\u83B7\u5F97\u524D\u4F63\u91D1",prop:"amount1"}),a(i,{"min-width":"80",label:"\u83B7\u5F97\u540E\u4F63\u91D1",prop:"amount3"}),a(i,{prop:"brokerageAt",label:"\u63D0\u6210\u65F6\u95F4",type:"date",sortable:"","min-width":"110"})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[z,e.loading]]),a(se,{pageinfo:d.value,onChange:e.load},null,8,["pageinfo","onChange"])])],2)}}});const Ue=ne(De,[["__scopeId","data-v-3d108d75"]]);export{Ue as default};