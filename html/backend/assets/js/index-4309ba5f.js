import{R as g,_ as w,u as T,j as P,d as z,f as N,b as q,v as A,o as R,bV as j,C as y,m as F}from"./entry-9cc5c370.js";/* empty css                        */import{E as H}from"./el-date-picker-4cb808f0.js";import{p as M}from"./plugHeader-c50619f4.js";import{P as O}from"./pagination-db6078c7.js";import{f as W}from"./filter-808d0c52.js";import{a as Z,Z as x,d as G,m as c,U as l,S as o,L as J,R as k,l as i,a6 as h,p as m,P as C,af as K,u as S,W as _,ap as Q,aq as X}from"./vue-11eabec3.js";import"./panel-time-pick-2e9d1eeb.js";import"./arrays-2e03ed1f.js";/* empty css                      */import"./index-971e6ee4.js";/* empty css                                                                   *//* empty css                   *//* empty css                                                               */import"./index-bf5a11eb.js";const Y=(n={page:0})=>g({url:"/tipoffs/page",method:"get",params:n}),ee=n=>g({url:"/tipoffs/"+n,method:"delete"}),te=n=>g({url:"/tipoffs/batch/delete",method:"post",data:{ids:n}});const I=n=>(Q("data-v-ff61aa73"),n=n(),X(),n),ae={class:"flex-y box",style:{"padding-top":"24px"}},le={class:"pop-box"},oe={class:"pop_item"},se=I(()=>m("span",{class:"p"},"\u65F6\u95F4",-1)),ne={class:"pop_item"},ie=I(()=>m("span",{class:"p"},"\u4E3E\u62A5\u7C7B\u578B",-1)),de={key:0},re={key:1},pe=["title"],ce=["href"],me=["title"],ue={key:0},_e={key:1},fe={__name:"index",setup(n){const v=T(),d=Z({pageIndex:1,pageSize:20,total:0}),V=x([["","\u6240\u6709\u7C7B\u578B"],["video","\u89C6\u9891"],["comment","\u8BC4\u8BBA"]]),e=x({loading:!1,data:[],searchVal:{key:"",time:"",type:"",order:""},selectList:[],load(r){d.value=r||d.value,e.loading=!0,console.log(e.searchVal),Y({page:d.value.pageIndex,limit:d.value.pageSize,keywords:e.searchVal.key,startTime:e.searchVal.time&&e.searchVal.time[0]?e.searchVal.time[0]/1e3:void 0,endTime:e.searchVal.time&&e.searchVal.time[1]?e.searchVal.time[1]/1e3+86399:void 0,order:e.searchVal.order,type:e.searchVal.type,siteId:v.siteVal}).then(a=>{e.data=a.list,d.value.total=a.total}).finally(()=>{e.loading=!1})},handleSelectionChange(r){e.selectList=r},sortChnage({column:r,prop:a,order:f}){f?e.searchVal.order=`${a} ${f==="ascending"?"asc":"desc"}`:e.searchVal.order="",e.load()}}),b={mutchDel:r=>y({message:"\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u4E3E\u62A5\u5417\uFF1F",okEms:"\u5220\u9664\u6210\u529F"},()=>te(r).then(a=>(e.load(),a))),tipoffsdel:r=>y({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417? \u5220\u9664\u540E\u4E3E\u62A5\u5C06\u4E0D\u518D\u663E\u793A",okEms:"\u4E3E\u62A5\u5185\u5BB9\u5220\u9664\u6210\u529F"},()=>ee(r.id).then(a=>(e.load(),a)))};return G(()=>{e.load()}),(r,a)=>{const f=P,E=H,L=z,$=N,B=q,p=F,D=R,U=A;return i(),c("div",ae,[l(M,null,{default:o(()=>[h("\u4E3E\u62A5\u7BA1\u7406")]),_:1}),l(W,{popover:"",placement:"bottom-start",onLoad:e.load},{prefix:o(()=>[l(f,{type:"danger",disabled:e.selectList.length<=0,onClick:a[0]||(a[0]=t=>b.mutchDel(e.selectList.map(s=>s.id)))},{default:o(()=>[h(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["disabled"])]),prepend:o(()=>[m("div",le,[m("div",oe,[se,l(E,{modelValue:e.searchVal.time,"onUpdate:modelValue":a[1]||(a[1]=t=>e.searchVal.time=t),type:"daterange",size:"default","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4","value-format":"x",onChange:a[2]||(a[2]=t=>{d.value.pageIndex=1,e.load()})},null,8,["modelValue"])]),m("div",ne,[ie,l($,{modelValue:e.searchVal.type,"onUpdate:modelValue":a[3]||(a[3]=t=>e.searchVal.type=t),class:"m-2",clearable:"",placeholder:"\u6240\u6709\u4E3E\u62A5\u7C7B\u578B",onChange:a[4]||(a[4]=t=>{d.value.pageIndex=1,e.load()})},{default:o(()=>[(i(!0),c(C,null,K(V,(t,s)=>(i(),k(L,{key:s,label:t[1],value:t[0]},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])]),suffix:o(()=>[l(B,{spellcheck:"false",modelValue:e.searchVal.key,"onUpdate:modelValue":a[5]||(a[5]=t=>e.searchVal.key=t),"prefix-icon":S(j),clearable:"",placeholder:"\u641C\u7D22\u5173\u952E\u5B57",class:"mr-4 w-36",onChange:a[6]||(a[6]=t=>{d.value.pageIndex=1,e.load()})},null,8,["modelValue","prefix-icon"])]),_:1},8,["onLoad"]),J((i(),k(D,{data:e.data,class:"auto",stripe:!0,onSortChange:e.sortChnage,onSelectionChange:e.handleSelectionChange},{default:o(()=>[l(p,{type:"selection",width:"30",class:"checkAll"}),l(p,{prop:"member",label:"\u4E3E\u62A5\u7528\u6237","min-width":"150"},{default:o(({row:t})=>{var s,u;return[t.member?(i(),c("span",de,_(((s=t.member)==null?void 0:s.nickname)||((u=t.member)==null?void 0:u.name)),1)):(i(),c("span",re," - "))]}),_:1}),l(p,{prop:"type",label:"\u4E3E\u62A5\u7C7B\u578B","min-width":"140"},{default:o(({row:t})=>{var s;return[h(_(((s=V.find(u=>u[0]===t.type))==null?void 0:s[1])||"-"),1)]}),_:1}),l(p,{prop:"commentsContent",label:"\u88AB\u4E3E\u62A5\u5185\u5BB9","min-width":"280"},{default:o(({row:t})=>[m("div",{class:"index",title:t.commentsContent},[t.resourceUrl?(i(),c("a",{key:0,href:t.resourceUrl,target:"_blank"},_(t.commentsContent),9,ce)):(i(),c(C,{key:1},[h(_(t.commentsContent),1)],64))],8,pe)]),_:1}),l(p,{prop:"content",label:"\u4E3E\u62A5\u539F\u56E0","min-width":"280"},{default:o(({row:t})=>[m("div",{class:"index",title:t.content},_(t.content),9,me)]),_:1}),l(p,{label:"\u6240\u5C5E\u7AD9\u70B9","min-width":"95"},{default:o(({row:t})=>{var s;return[t.siteId==0?(i(),c("span",ue,"\u9ED8\u8BA4\u7AD9\u70B9")):(i(),c("span",_e,_(((s=S(v).list.find(u=>u.id==t.siteId))==null?void 0:s.name)||"-"),1))]}),_:1}),l(p,{prop:"createAt",label:"\u4E3E\u62A5\u65F6\u95F4",width:"150",sortable:"",type:"date"}),l(p,{fixed:"right",label:"\u64CD\u4F5C","min-width":"110",align:"right"},{default:o(({row:t})=>[l(f,{type:"danger",link:"",class:"text-dangerColor",onClick:s=>b.tipoffsdel(t)},{default:o(()=>[h(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[U,e.loading]]),l(O,{pageinfo:d.value,class:"ml-auto",onChange:e.load},null,8,["pageinfo","onChange"])])}}},De=w(fe,[["__scopeId","data-v-ff61aa73"]]);export{De as default};