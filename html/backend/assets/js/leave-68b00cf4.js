import{_ as q,u as J,a as H,cn as O,E as S,j as W,d as Z,f as G,b as K,c as Q,i as X,k as Y,bT as ee,v as le,co as te,C as ae,ck as oe,b3 as se,o as ne,m as ie,cp as de}from"./entry-9cc5c370.js";/* empty css                        */import{_ as re}from"./plugin9-aaf2a574.js";import{p as ce}from"./plugHeader-c50619f4.js";import{l as pe}from"./agencyConfig-609310af.js";import{P as ue}from"./pagination-db6078c7.js";import{a as h,z as me,Z as D,m as v,L,u as a,U as o,S as s,p as n,W as g,D as M,R as T,l as m,a6 as p,P as fe,af as _e,ap as ge,aq as he}from"./vue-11eabec3.js";/* empty css                      */import"./index-971e6ee4.js";/* empty css                                                                   */const f=y=>(ge("data-v-246ce6cc"),y=y(),he(),y),ve={style:{height:"calc(100vh - 50px)",display:"flex","flex-direction":"column"}},ye={class:"card",style:{overflow:"hidden"}},be={class:"flex-x-between"},xe={class:"left"},Ce=f(()=>n("img",{src:re,alt:"",style:{width:"80px",height:"80px"}},null,-1)),we={class:"flex-y"},ke={class:"name"},Ve={class:"business"},Se={class:"right flex-x-center"},Ee={class:"flex-y card",style:{"margin-top":"24px",flex:"1"}},Ie={class:"flex-x-between search",style:{width:"100%","margin-bottom":"24px"}},ze=f(()=>n("div",null,null,-1)),je=f(()=>n("span",{style:{"margin-right":"12px"}},"\u7AD9\u70B9",-1)),Be=f(()=>n("span",{style:{margin:"0 12px"}},"\u72B6\u6001",-1)),De={key:0},Le={key:1},Me={style:{display:"flex","align-items":"center"}},Te=["onClick"],$e=f(()=>n("i",{class:"iconfont icon-fuzhi point",style:{"font-size":"16px","margin-left":"8px",color:"#3f7df9"}},null,-1)),Re=f(()=>n("h3",{style:{margin:"12px 0"}},"\u4F7F\u7528\u8BF4\u660E",-1)),Ae=f(()=>n("p",{style:{color:"#999","font-size":"14px","line-height":"24px"}},[n("pre",{style:{color:"#fffl","font-size":"12px","line-height":"20px","background-color":"rgba(0,0,0,0.8)",padding:"10px 5px"}},[p(`  1.\u4F7F\u7528\u793A\u4F8B\u4E00\uFF0C\u9875\u9762\u6CE8\u5165\u65B9\u5F0F
            `),n("code",null,`
              1.1\u3001HTML\u4EE3\u7801
              <div style="width:800px;margin:0 auto;" id="aaaa"></div>

              1.2\u3001JS\u4EE3\u7801
              <script src="***js/leaveMsg.js?v=1694089432"><\/script>
              <script>leaveMag.open('#aaaa','red')<\/script>
            `),p(`
            ---------------------------
            ---------------------------

  2.\u4F7F\u7528\u793A\u4F8B\u4E8C\uFF0C\u6D6E\u7A97\u65B9\u5F0F
            `),n("code",null,`
              2.1\u3001JS\u4EE3\u7801
              <script src="***js/leaveMsg.js?v=1694089432"><\/script>
              <script>leaveMag.open('','red')<\/script>
            `),p(`
        `)])],-1)),Fe={__name:"leave",setup(y){const E=J(),C=H(),_=h({pageIndex:1,pageSize:20,total:0}),b=h(!1),I=h({}),w=h(),x=h(""),$=me("debounce")(i=>{!i||i.validate(l=>{l&&(e.loading=!0,O(e.form).then(()=>{S({position:"bottom-right",type:"success",message:"\u56DE\u590D\u6210\u529F"}),C.unRefresh(1),e.load(),e.close()}).finally(()=>{e.loading=!1}))})},300),e=D({loading:!1,data:[],visible:!1,form:{},selectList:[],searchVal:{},load(i){_.value=i||_.value,e.loading=!0,te({page:_.value.pageIndex,limit:_.value.pageSize,...e.searchVal,siteId:x.value}).then(l=>{_.value.total=l.total,e.data=l.list,console.log(l,"====")}).finally(()=>{e.loading=!1})},handleSelectionChange(i){e.selectList=i},close(){var i;(i=w.value)==null||i.resetFields(),e.form={},e.visible=!1},del:i=>ae({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F\u5220\u9664\u540E\u5C06\u4E0D\u518D\u663E\u793A",okEms:"\u7559\u8A00\u5220\u9664\u6210\u529F"},()=>de({ids:i}).then(l=>(C.unRefresh(1),e.load(),l)))});e.load();const d=D({info:{},loading:!1,loading2:!1,check(){d.loading||(d.loading=!0,oe({hash:d.info.hash,status:d.info.status}).then(i=>{S({position:"bottom-right",type:"success",message:"\u72B6\u6001\u66F4\u65B0\u6210\u529F"})}).catch(()=>{d.info.status=d.info.status===0?1:0}).finally(i=>{setTimeout(()=>{d.loading=!1},2e3)}))},load(){d.loading=!0,se().then(i=>{i=i.filter(l=>l.hash=="4E5A04110455C178C5963EDD22C56B9B"),d.info=i[0]}).finally(()=>{d.loading=!1})}});d.load(),C.unRefresh(1),pe.get().then(i=>{I.value=i});const R=(i,l)=>{const r=document.createElement("input");r.setAttribute("readonly","readonly"),r.setAttribute("value",l.js),document.body.appendChild(r),r.select(),document.execCommand("copy")&&(document.execCommand("copy"),S({position:"bottom-right",type:"success",message:"\u590D\u5236\u6210\u529F"})),document.body.removeChild(r)};return(i,l)=>{const r=W,k=Z,z=G,c=ie,j=ne,A=K,F=Q,U=X,N=Y,P=ee,B=le;return m(),v("div",ve,[L((m(),v("div",ye,[o(ce,{style:{"margin-bottom":"0","margin-top":"-4px"}},{default:s(()=>[p("\u7559\u8A00\u7CFB\u7EDF")]),_:1}),n("div",be,[n("div",xe,[Ce,n("div",we,[n("p",ke,g(a(d).info.name),1),n("p",Ve,g(a(d).info.businessDesc),1)])]),n("div",Se,[o(r,{type:"primary",onClick:l[0]||(l[0]=t=>b.value=!0)},{default:s(()=>[p(" \u63A5\u5165\u6559\u7A0B ")]),_:1})])])])),[[B,a(d).loading]]),n("div",Ee,[n("div",Ie,[ze,n("div",null,[je,o(z,{modelValue:a(x),"onUpdate:modelValue":l[1]||(l[1]=t=>M(x)?x.value=t:null),class:"m-2",onChange:a(e).load,placeholder:"\u5168\u90E8\u7AD9\u70B9"},{default:s(()=>[(m(!0),v(fe,null,_e(a(E).list,t=>(m(),T(k,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),Be,o(z,{modelValue:a(e).searchVal.state,"onUpdate:modelValue":l[2]||(l[2]=t=>a(e).searchVal.state=t),class:"m-2",placeholder:"\u6240\u6709\u72B6\u6001",clearable:"",onChange:l[3]||(l[3]=t=>a(e).load())},{default:s(()=>[o(k,{label:"\u5DF2\u56DE\u590D",value:1}),o(k,{label:"\u672A\u56DE\u590D",value:2})]),_:1},8,["modelValue"])])]),L((m(),T(j,{data:a(e).data,class:"auto",stripe:!0,onSelectionChange:a(e).handleSelectionChange},{default:s(()=>[o(c,{prop:"id",label:"ID",width:"80"}),o(c,{prop:"username",label:"\u7528\u6237\u540D","min-width":"80"}),o(c,{prop:"content",label:"\u7559\u8A00\u5185\u5BB9","show-overflow-tooltip":!0,"min-width":"80"}),o(c,{prop:"createAt",label:"\u7559\u8A00\u65F6\u95F4",type:"date"}),o(c,{label:"\u72B6\u6001"},{default:s(({row:t})=>[p(g(["","\u5DF2\u56DE\u590D","\u672A\u56DE\u590D"][t.state]),1)]),_:1}),o(c,{prop:"reply",label:"\u56DE\u590D\u5185\u5BB9","show-overflow-tooltip":!0}),o(c,{label:"\u6240\u5C5E\u7AD9\u70B9","min-width":"95"},{default:s(({row:t})=>{var u;return[t.siteId==0?(m(),v("span",De,"\u9ED8\u8BA4\u7AD9\u70B9")):(m(),v("span",Le,g(((u=a(E).list.find(V=>V.id==t.siteId))==null?void 0:u.name)||"-"),1))]}),_:1}),o(c,{prop:"replyTime",label:"\u56DE\u590D\u65F6\u95F4",type:"date"}),o(c,{fixed:"right",label:"\u64CD\u4F5C",width:"190",align:"right",class:"vipinfo"},{default:s(({row:t})=>[o(r,{type:"primary",link:"",class:"ml-auto mr-5",disabled:t.replyTime>0,onClick:u=>{a(e).visible=!0,a(e).form.id=t.id}},{default:s(()=>[p(" \u56DE\u590D ")]),_:2},1032,["disabled","onClick"]),o(r,{type:"danger",link:"",class:"text-dangerColor",onClick:u=>a(e).del([t.id])},{default:s(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[B,a(e).loading]]),o(ue,{pageinfo:a(_),class:"ml-auto",style:{"margin-top":"24px"},onChange:a(e).load},null,8,["pageinfo","onChange"]),o(N,{modelValue:a(e).visible,"onUpdate:modelValue":l[7]||(l[7]=t=>a(e).visible=t),title:"\u56DE\u590D","show-close":!0,width:"450px",onClose:l[8]||(l[8]=t=>a(e).close()),"close-on-click-modal":!1},{footer:s(()=>[o(r,{class:"ml-auto",size:"small",onClick:l[5]||(l[5]=t=>a(e).close())},{default:s(()=>[p(" \u53D6\u6D88 ")]),_:1}),o(r,{size:"small",loading:a(e).loading,type:"primary",class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:l[6]||(l[6]=t=>a($)(a(w)))},{default:s(()=>[p(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:s(()=>[o(U,{ref_key:"ruleFormRef",ref:w,"label-width":"95px",model:a(e).form,"hide-required-asterisk":!1},{default:s(()=>[o(F,{rules:{required:!0,message:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"},prop:"reply",class:"reply",label:"\u56DE\u590D\u5185\u5BB9"},{default:s(()=>[o(A,{modelValue:a(e).form.reply,"onUpdate:modelValue":l[4]||(l[4]=t=>a(e).form.reply=t),type:"textarea",rows:6,maxlength:200,"show-word-limit":"",class:"input emailIpt",placeholder:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),o(P,{modelValue:a(b),"onUpdate:modelValue":l[9]||(l[9]=t=>M(b)?b.value=t:null),title:"\u63A5\u5165\u6559\u7A0B",size:"60%"},{default:s(()=>{var t;return[o(j,{data:(t=a(I))==null?void 0:t.local.scripts,style:{width:"100%"},height:"400px",class:"jh_table",border:""},{default:s(()=>[o(c,{label:"\u5730\u5740",width:"150"},{default:s(({row:u})=>[n("div",Me,[n("span",null,g(u.address),1)])]),_:1}),o(c,{label:"JS\u4EE3\u7801","show-overflow-tooltip":!0},{default:s(({row:u})=>[p(g(u.js),1)]),_:1}),o(c,{label:"\u64CD\u4F5C",width:"90",align:"right"},{default:s(({$index:u,row:V})=>[n("div",{style:{display:"flex",cursor:"pointer","justify-content":"flex-end"},onClick:Ue=>R(u,V)},[$e,o(r,{size:"small",link:""},{default:s(()=>[p("\u590D\u5236")]),_:1})],8,Te)]),_:1})]),_:1},8,["data"]),Re,Ae]}),_:1},8,["modelValue"])])}}},Qe=q(Fe,[["__scopeId","data-v-246ce6cc"]]);export{Qe as default};