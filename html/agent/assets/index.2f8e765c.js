import{_ as P,r as $,z as q,af as Z,x as X,L as z,q as L,o as n,g as o,O as p,$ as N,a0 as D,ae as O,h as a,i,ag as Y,C as d,m,ac as T,N as V,w as _,s as ee,ah as te,ad as se,E as ne,K as j,p as G,l as J,u as ae,a as B,e as oe,V as le,W as de,c as ie,a2 as ce,a3 as re,Z as ue,Q as _e,ai as pe,a5 as he,P as fe}from"./entry.e31dd3ae.js";/* empty css                        */import{P as me,a as ye,F as ge,U as ve}from"./agencyCenter.524bd4cd.js";import{h as xe}from"./agencyList.92ad2b93.js";const K=b=>(G("data-v-62a742b6"),b=b(),J(),b),be={key:0,class:"no_message"},ke=["data-mes"],we={key:0,class:"sys-notice"},Ie=K(()=>a("span",{class:"line"},null,-1)),Le=["innerHTML"],Se=K(()=>a("span",{class:"line"},null,-1)),Ce={class:"mes-text"},Ve={class:"time"},$e={key:0,class:"mes-name"},Ee={key:1,class:"mes-name"},Ae=["innerHTML"],Te=["src"],Ne=["src"],Me=["src"],ze=["src"],Re={key:0,style:{"font-size":"14px",padding:"0 16px",width:"347px"}},Ue={style:{color:"#4b82fa"}},Fe=m("\u5143 \u63D0\u73B0\u72B6\u6001\u5DF2\u66F4\u6539\u4E3A "),He={key:0,style:{margin:"8px 0"}},Be={key:0,style:{color:"#52c41a"}},Pe={key:1,style:{color:"#ff4d4f"}},qe={key:1,style:{display:"flex","line-height":"1"}},De={style:{"flex-shrink":"0"}},Oe=m(" \uFF1A "),je=["innerHTML"],Ge={key:1,class:"order"},Je={class:"title"},Ke={class:"num"},Qe={class:"num"},We=m(" \u63D0\u73B0\u72B6\u6001\uFF1A "),Ze={key:0,style:{color:"#f7ad1e"}},Xe={key:1,style:{color:"#4e83f7"}},Ye={key:2,style:{color:"#55c31f"}},et={key:3,style:{color:"#d9d9d9"}},tt={class:"num"},st={class:"num"},nt={class:"order-time"},at={key:2,class:"order"},ot={class:"title"},lt={class:"num"},dt={class:"num"},it={class:"num"},ct={class:"order-time"},rt={key:3,class:"order"},ut={class:"title"},_t={class:"type"},pt={class:"icon"},ht={class:"info"},ft={key:0,style:{color:"#faad14","font-size":"12px","margin-left":"12px"}},mt={key:1,style:{color:"#52c41a","font-size":"12px","margin-left":"12px"}},yt={key:2,style:{color:"#ff4d4f","font-size":"12px","margin-left":"12px"}},gt={class:"num"},vt={class:"order-time"},xt={key:0,class:"read"},bt={key:1,class:"noread"},kt={__name:"mesList",props:{client:{type:Object,default:()=>({})},chatList:{type:Array,default:()=>[]},slaveId:{type:Boolean||String}},setup(b){const y=b,C=$(),w=$(1);let I=$();const g=$(0),l=$(!1);q(()=>{var c;(c=C.value)==null||c.addEventListener("scroll",function(h){v()}),C.value.addEventListener("click",function(h){if(h.target.tagName==="IMG"){let f=document.createElement("div");f.style="position:fixed;width:100vw !important;height:100vh !important;top:0;left:0;z-index:99999999;max-width:none !important;object-fit: contain;background-color:rgb(36 36 36 / 50%);padding:15vh 15vw;box-sizing: border-box;display:flex;flex-direction:column;justify-content:center;text-align:right;align-items: center;",f.onclick=function(r){return r.stopPropagation(),!1};let k=document.createElement("span");k.innerText="\xD7",k.style="color: white;font-size: 32px;position: fixed;top: 32px;right: 32px;cursor: pointer;padding: 8px;",k.addEventListener("click",r=>{f.parentNode.removeChild(f)}),f.appendChild(k);let x=document.createElement("img");x.src=h.target.src,x.style="object-fit: contain;max-width: 70vw !important;max-height: 70vh;",f.appendChild(x),document.body.appendChild(f)}}),Z(()=>y.client.consultId,h=>{I.value=void 0,w.value=1,g.value=0,y.client.mesList=[],l.value=!1,h&&v()},{immediate:!0})});function A({client:c,page:h,chatList:f}){var k,x;return te({page:h||1,limit:20,masterId:c.memberId,queryRole:c.queryRole||2,consultId:(k=f[g.value])!=null&&k.consultId?""+((x=f[g.value])==null?void 0:x.consultId):void 0,slaveId:y.slaveId}).then(({data:r})=>(r.list=r,c.mesList=[...r.list.reduce((e,S)=>(c.mesList.find(M=>M.msgId==S.msgId||S.mid&&M.mid==S.mid)||e.push(S),e),[]).sort((e,S)=>e.sendAt-S.sendAt>0?1:-1).filter(e=>!(e.senderRole===-1&&e.receiverRole===1)),...c.mesList],r.list))}function v(){var c;if(I.value!==void 0||((c=C.value)==null?void 0:c.scrollTop)!==0){console.log(123);return}I.value=A({client:y.client,page:w.value++,chatList:y.chatList}).then(async h=>{var f;if(!h||h.length==0)console.log(111,g.value,y.chatList),g.value===y.chatList.length-1?(console.log("111-1"),l.value=!0,I.value=!0):(console.log("111-2"),I.value=void 0,w.value=1,y.chatList[++g.value]&&v());else{console.log(222);let k=(f=h.find(x=>x.mid))==null?void 0:f.mid;if(k){const x=document.querySelector(`[data-mes="${k}"]`);(x==null?void 0:x.scrollIntoView())-3}I.value=void 0,v()}}).catch(h=>{w.value--,I.value=void 0})}let u=new Map;function t(c){try{u.get(c)||u.set(c,JSON.parse(c))}catch{}return u.get(c)||{}}return(c,h)=>{const f=se,k=X("svg-icon"),x=ne,r=j;return z((n(),o("div",{ref_key:"box",ref:C,class:"mes-box"},[l.value?(n(),o("p",be," \u65E0\u5386\u53F2\u6D88\u606F ")):p("",!0),(n(!0),o(N,null,D(b.client.mesList,e=>(n(),o("div",{key:e.mid,class:O(["mes-item",e.senderRole!==1?"send":"get"]),"data-mes":e.mid},[e.category===7?(n(),o("div",we,[Ie,a("span",{style:{"vertical-align":"middle",color:"#666666","max-width":"60%"},innerHTML:e.content},null,8,Le),Se])):(n(),o(N,{key:1},[i(f,{size:60,icon:L(Y),src:e.senderRole!==1?e.slaveHeadImg:e.masterHeadImg,class:"avatar"},null,8,["icon","src"]),a("div",null,[a("div",Ce,[a("span",Ve,[e.senderRole===1?(n(),o("span",$e,d(e.masterUserName),1)):p("",!0),m(" "+d(L(T)(e.sendAt||e.attach.time))+" ",1),e.senderRole!==1?(n(),o("span",Ee,d(e.slaveUserName),1)):p("",!0)]),e.category===1?(n(),o("div",{key:0,innerHTML:e.content},null,8,Ae)):p("",!0),e.category===2?(n(),o("img",{key:1,src:e.content,alt:"",style:{"max-width":"250px"}},null,8,Te)):p("",!0),e.category===3?(n(),o("video",{key:2,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,Ne)):p("",!0),e.category===4?(n(),o("video",{key:3,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,Me)):p("",!0),e.category===5?(n(),o("video",{key:4,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,ze)):p("",!0),e.category===6?(n(),o(N,{key:5},[t(e.content).type==="withdrawChangeStatus"?(n(),o("div",Re,[a("p",null,[m(" \u4EB2\uFF0C\u60A8\u4E8E"+d(L(T)(t(e.content).statusAt))+"\u53D1\u8D77\u7684 ",1),a("span",Ue,d(t(e.content).amount||0),1),Fe]),t(e.content).status===300||t(e.content).status===400?(n(),o("p",He,[t(e.content).status===300?(n(),o("span",Be,"\u5B8C\u6210")):p("",!0),t(e.content).status===400?(n(),o("span",Pe,"\u5173\u95ED")):p("",!0)])):p("",!0),(t(e.content).status===300||t(e.content).status===400)&&t(e.content).because?(n(),o("div",qe,[a("span",De,d(t(e.content).status===400?"\u5173\u95ED\u539F\u56E0":"\u6458\u8981"),1),Oe,a("p",{innerHTML:t(e.content).because},null,8,je)])):p("",!0)])):t(e.content).type==="withdraw"?(n(),o("div",Ge,[a("p",Je,d(e.senderRole!==1?"\u4EB2\uFF0C\u8BF7\u6838\u5BF9":"")+"\u63D0\u73B0\u4FE1\u606F ",1),a("p",Ke," \u63D0\u73B0\u91D1\u989D\uFF1A"+d(t(e.content).amount),1),a("p",Qe,[We,t(e.content).status===100?(n(),o("span",Ze,"\u5F85\u53D7\u7406")):t(e.content).status===200?(n(),o("span",Xe,"\u5904\u7406\u4E2D")):t(e.content).status===300?(n(),o("span",Ye,"\u5DF2\u5B8C\u6210")):t(e.content).status===400?(n(),o("span",et,"\u5DF2\u5173\u95ED")):p("",!0)]),a("p",tt," \u624B\u7EED\u8D39\uFF1A"+d(t(e.content).handleFee),1),a("p",st," \u63D0\u73B0\u5730\u5740\uFF1A"+d(t(e.content).address),1),a("p",nt," \u521B\u5EFA\u65F6\u95F4\uFF1A"+d(L(T)(t(e.content).statusAt)||"-"),1)])):t(e.content).type==="commission"?(n(),o("div",at,[a("p",ot,d(e.senderRole!==1?"\u4EB2\uFF0C\u8BF7\u6838\u5BF9":"")+"\u4F63\u91D1\u4FE1\u606F ",1),a("p",lt," \u8BA2\u5355\u53F7\uFF1A"+d(t(e.content).orderNo),1),a("p",dt," \u5145\u503C\u8D26\u53F7\uFF1A"+d(t(e.content).rechargeUsername),1),a("p",it," \u83B7\u5F97\u4F63\u91D1\uFF1A"+d(t(e.content).amount),1),a("p",ct," \u63D0\u6210\u65F6\u95F4\uFF1A"+d(L(T)(t(e.content).timeAt)||"-"),1)])):(n(),o("div",rt,[a("p",ut,d(e.senderRole!==1?"\u4EB2\uFF0C\u8BF7\u6838\u5BF9":"")+"\u8BA2\u5355\u4FE1\u606F ",1),a("div",_t,[a("div",pt,[i(k,{color:"#4c83ff",name:"huangguan"})]),a("div",ht,[a("p",null,[m(d(t(e.content).title)+" ",1),t(e.content).payStatus===1?(n(),o("span",ft,"\u5F85\u4ED8\u6B3E")):p("",!0),t(e.content).payStatus===2?(n(),o("span",mt,"\u6210\u529F")):p("",!0),t(e.content).payStatus===3?(n(),o("span",yt,"\u5931\u8D25")):p("",!0)]),a("p",null,"\u5408\u8BA1\uFF1A\uFFE5"+d(t(e.content).amount),1)])]),a("p",gt," \u8BA2\u5355\u53F7\uFF1A"+d(t(e.content).orderNo),1),a("p",vt," \u521B\u5EFA\u65F6\u95F4\uFF1A"+d(L(T)(t(e.content).payAt)||"-"),1)]))],64)):p("",!0)])]),e.sendStatus==="fail"?(n(),V(x,{key:0,class:"err"},{default:_(()=>[i(L(ee))]),_:1})):e.mid?(n(),o(N,{key:1},[e.read===1?(n(),o("span",xt,"\u5DF2\u8BFB")):e.read===0?(n(),o("span",bt,"\u672A\u8BFB")):p("",!0)],64)):p("",!0)],64))],10,ke))),128))])),[[r,L(I)&&L(I)!==!0]])}}},wt=P(kt,[["__scopeId","data-v-62a742b6"]]);const It=b=>(G("data-v-0f2d6ea0"),b=b(),J(),b),Lt={class:"survey flex-x"},St=m(" \u5DF2\u63D0\u73B0\u603B\u91D1\u989D\uFF1A"),Ct=m("\u5143 "),Vt=It(()=>a("span",{class:"line"},null,-1)),$t=m(" \u63D0\u73B0\u7B14\u6570\uFF1A "),Et={style:{"font-size":"12px"}},At={class:"search",style:{margin:"0"}},Tt={class:"flex-y box"},Nt={class:"flex-x-between header"},Mt={class:"search flex",style:{margin:"0"}},zt={key:0},Rt={key:1},Ut={key:1},Ft=["innerHTML"],Ht={__name:"index",props:{id:{type:String,default:""}},setup(b){const y=b,C=ae(),w=$({pageIndex:1,pageSize:20,total:0}),I=$(),g=B({visible:!1,data:[],loading:!1,client:{},chatList:[],get:async v=>{var u;v.consultId=v.customerId,(u=I.value)!=null&&u.page&&(I.value.page=1),v.mesList=[],v.queryRole=1,g.client=v,g.visible=!0}});$();const l=B({loading:!1,data:[],searchVal:{keyword:void 0,agentLevelId:void 0,order:"",status:void 0},selectList:[],load(v){w.value=v||w.value,l.loading=!0;const u={page:w.value.pageIndex,limit:w.value.pageSize,...l.searchVal,status:l.searchVal.status||void 0,keyword:l.searchVal.keyword||void 0,order:l.searchVal.order||void 0};y.id||C.siteObj.siteId&&(u.siteId=C.siteObj.siteId),(y.id?ye({...u,memberId:y.id}):xe(u)).then(t=>{l.data=y.id?{data:t}:t,w.value.total=y.id?t.total:t.data.total,l.data.statistics=l.data.statistics.reduce((c,h)=>(h.status===300&&(c.amount+=h.amount),c[h.status]+=h.quantity,c),{amount:0,100:0,200:0,300:0,400:0})}).finally(()=>{l.loading=!1})},handleSelectionChange(v){this.selectList=v},sortChnage({column:v,prop:u,order:t}){t?l.searchVal.order=`${u} ${t==="ascending"?"asc":"desc"}`:l.searchVal.order="",l.load()}}),A={100:{n:"\u5F85\u53D7\u7406",c:"#FAAD14",k:100},200:{n:"\u5904\u7406\u4E2D",c:"#4B82FA",k:200},300:{n:"\u5DF2\u5B8C\u6210",c:"#67c23a",k:300},400:{n:"\u5DF2\u5173\u95ED",c:"#D9D9D9",k:400}};return q(()=>{l.load()}),(v,u)=>{var U,F,H;const t=oe,c=le,h=de,f=ie,k=he,x=ge,r=fe,e=_e,S=ce,M=re,Q=ue,R=j;return n(),o("div",{class:O(y.id?"compen_box":"fli_f_box")},[y.id?p("",!0):(n(),V(x,{key:0,filtter:!0,onGetList:l.load},{fittleBtn:_(()=>[a("div",Lt,[St,i(t,{type:"primary",link:""},{default:_(()=>{var s;return[m(d(((s=l.data.statistics)==null?void 0:s.amount)||0),1)]}),_:1}),Ct,Vt,$t,i(t,{type:"success",link:""},{default:_(()=>{var s;return[m(" \u6210\u529F\uFF1A"+d(((s=l.data.statistics)==null?void 0:s[300])||0),1)]}),_:1}),i(t,{type:"warning",link:""},{default:_(()=>{var s,E;return[m(" \u51BB\u7ED3\uFF1A"+d((((s=l.data.statistics)==null?void 0:s[100])||0)+(((E=l.data.statistics)==null?void 0:E[200])||0)),1)]}),_:1}),i(t,{type:"danger",link:""},{default:_(()=>{var s;return[m(" \u5176\u4ED6\uFF1A"+d(((s=l.data.statistics)==null?void 0:s[400])||0),1)]}),_:1})])]),fittleItem:_(()=>[a("div",Et,[i(f,{label:"\u63D0\u73B0\u72B6\u6001",style:{margin:"0"}},{default:_(()=>[i(h,{style:{width:"100%"},modelValue:l.searchVal.status,"onUpdate:modelValue":u[0]||(u[0]=s=>l.searchVal.status=s),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u63D0\u73B0\u72B6\u6001",onChange:u[1]||(u[1]=s=>{w.value.pageIndex=1,l.load()})},{default:_(()=>[(n(),V(c,{key:0,label:"\u5168\u90E8",value:0})),(n(),o(N,null,D(A,s=>i(c,{key:s.k,label:s.n,value:s.k},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})])]),fittleSear:_(()=>[a("div",At,[i(k,{modelValue:l.searchVal.keyword,"onUpdate:modelValue":u[2]||(u[2]=s=>l.searchVal.keyword=s),onBlur:u[3]||(u[3]=s=>{w.value.pageIndex=1,l.load()})},null,8,["modelValue"])])]),_:1},8,["onGetList"])),a("div",Tt,[a("div",Nt,[a("div",Mt,[i(f,{style:{margin:"0"},"label-width":"0"})])]),z((n(),V(e,{data:((F=(U=l.data)==null?void 0:U.data)==null?void 0:F.data)||[],class:"auto",stripe:!0,onSortChange:l.sortChnage,onSelectionChange:l.handleSelectionChange},{default:_(()=>[b.id?p("",!0):(n(),V(r,{key:0,"min-width":"80",label:"\u4EE3\u7406\u8D26\u53F7",prop:"memberUsername"},{default:_(({row:s})=>[i(ve,{id:s.memberId,name:s.memberUsername},null,8,["id","name"])]),_:1})),b.id?p("",!0):(n(),V(r,{key:1,prop:"memberLevelName",label:"\u4EE3\u7406\u7B49\u7EA7","min-width":"80"},{default:_(({row:s})=>[m(d(s.memberLevelName||s.levelName),1)]),_:1})),y.id?p("",!0):(n(),V(r,{key:2,label:"\u6240\u5C5E\u7AD9\u70B9","min-width":"95"},{default:_(({row:s})=>{var E;return[s.siteId==0?(n(),o("span",zt,"\u9ED8\u8BA4\u7AD9\u70B9")):(n(),o("span",Rt,d(((E=L(C).siteMap.find(W=>W.id==s.siteId))==null?void 0:E.name)||"-"),1))]}),_:1})),i(r,{width:"100",label:"\u63D0\u73B0\u524D\u91D1\u989D",prop:"amount1"}),i(r,{"min-width":"80",label:"\u63D0\u73B0\u91D1\u989D",prop:"amount2"}),i(r,{"min-width":"80",label:"\u63D0\u73B0\u5730\u5740",prop:"withdrawAddress","show-overflow-tooltip":!0}),i(r,{"min-width":"80",label:"\u624B\u7EED\u8D39",prop:"withdrawFees"},{default:_(({row:s})=>[m(d(s.withdrawFees),1)]),_:1}),i(r,{width:"120",label:"\u5B9E\u9645\u63D0\u73B0\u91D1\u989D",prop:"withdrawAmount"},{default:_(({row:s})=>[m(d(s.withdrawAmount),1)]),_:1}),i(r,{"min-width":"100",label:"\u63D0\u73B0\u540E\u91D1\u989D",prop:"amount3"}),i(r,{width:"80",label:"\u63D0\u73B0\u72B6\u6001",prop:"status"},{default:_(({row:s})=>[a("span",{style:pe([{backgroundColor:A[s.status].c},{display:"inline-block",width:"5px",height:"5px","border-radius":"50%","margin-bottom":"2px"}])},null,4),m(" "+d(A[s.status].n),1)]),_:1}),i(r,{width:"100",label:"\u63D0\u73B0IP",prop:"ip"}),i(r,{label:"\u64CD\u4F5C\u4EBA"},{default:_(({row:s})=>[s.customerUsername||s.customerId?(n(),V(t,{key:0,type:"primary",link:"",onClick:E=>g.get(s)},{default:_(()=>[m(d(s.customerUsername||s.customerId),1)]),_:2},1032,["onClick"])):(n(),o("span",Ut,"-"))]),_:1}),i(r,{"min-width":"80",label:"IP\u6240\u5728\u5730",prop:"ipAddress","show-overflow-tooltip":!0}),i(r,{prop:"withdrawAt",label:"\u63D0\u73B0\u65F6\u95F4",type:"date",sortable:"","min-width":"130"})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[R,l.loading]]),i(me,{pageinfo:w.value,onChange:l.load},null,8,["pageinfo","onChange"]),i(Q,{modelValue:g.visible,"onUpdate:modelValue":u[4]||(u[4]=s=>g.visible=s),title:((H=g.client)==null?void 0:H.memberUsername)+"\u7684\u804A\u5929\u8BB0\u5F55","destroy-on-close":"",width:"880px"},{default:_(()=>[i(M,{type:"border-card",style:{"box-shadow":"3px 4px 6px #3f6ef31a"}},{default:_(()=>[i(S,{label:"\u804A\u5929\u8BB0\u5F55"},{default:_(()=>[z(i(wt,{ref_key:"messageList",ref:I,style:{height:"45vh"},class:"dis-list",client:g.client,"chat-list":g.chatList,"slave-id":!1},null,8,["client","chat-list"]),[[R,g.loading]])]),_:1}),i(S,{label:"\u8BA2\u5355\u5907\u6CE8"},{default:_(()=>[a("div",{innerHTML:g.client.attach},null,8,Ft)]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])],2)}}},Ot=P(Ht,[["__scopeId","data-v-0f2d6ea0"]]);export{Ot as default};