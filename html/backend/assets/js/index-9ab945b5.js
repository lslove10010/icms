import{R as N,_ as se,u as ne,E as B,t as Ve,b as ie,c as ke,d as de,f as re,F as xe,G as Te,s as Ce,N as we,g as Ue,bX as Se,h as ue,i as Ie,j as pe,k as D,v as J,m as me,o as ce,C as Ae}from"./entry-9cc5c370.js";/* empty css                        */import{f as Ee}from"./filter-808d0c52.js";import{p as $e}from"./plugHeader-c50619f4.js";import Ne from"./index-0316dcce.js";import{a as $,e as O,Z as E,z as Pe,b as qe,l as n,m as f,U as l,S as o,a6 as v,u as w,L as q,p as V,P as L,af as R,R as g,O as b,M as ae,d as ze,W as M,at as Me,ac as Be,ap as Le,aq as Re}from"./vue-11eabec3.js";/* empty css                          */import{E as je}from"./el-date-picker-4cb808f0.js";import{E as Fe}from"./el-upload-e1a152a0.js";import"./wangEditor.vue_vue_type_style_index_0_scoped_ecc7ed11_lang-d1f96ae7.js";import{w as Ge}from"./wangEditor-4ddf8920.js";import{P as Oe}from"./pagination-db6078c7.js";import{a as De}from"./manager-7e190972.js";/* empty css                   *//* empty css                                                               */import"./index-bf5a11eb.js";import"./panel-time-pick-2e9d1eeb.js";import"./arrays-2e03ed1f.js";/* empty css                      */import"./index-971e6ee4.js";/* empty css                                                                   */const Je=h=>N({url:"/ads/all",method:"get",params:h}),He=(h={page:0})=>N({url:"/ads/position",method:"get",params:h}),We=h=>N({url:`/ads/${h}`,method:"delete"}),Xe=h=>N({url:"/ads",method:"post",data:h}),Ke=h=>N({url:"/ads/"+h.id,method:"put",data:h}),Ze=(h,I)=>N({url:`/ads/${h}/status/${I}`,method:"get"}),Qe=(h,I)=>N({url:`/ads/${h}/close/${I}`,method:"get"});const Ye={class:"flex-x",style:{gap:"32px","min-height":"350px"}},el={style:{"line-height":"32px",width:"100%"}},ll=["src"],tl={style:{width:"18px",height:"18px","background-image":`linear-gradient(
                        180deg,
                        #f8f8fa 0%,
                        #eeeff2 100%
                      )`,border:"1px solid rgba(255, 255, 255, 0.6)","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center"}},ol={key:0,class:"txttip"},al={key:1,class:"txttip"},sl={class:"flex",style:{gap:"16px",width:"100%"}},nl={__name:"editor",emits:["load"],setup(h,{expose:I,emit:S}){const d=ne();$();const k=O(()=>i.value.find(m=>m.englishName===e.position)),x=$(),e=E({adsType:"",close:2,content:"",createAt:0,duration:1,id:0,link:"",name:"",custom:"",position:"",sort:1,state:0,updateAt:0,offlineAt:void 0,onlineAt:void 0,target:"_self",isAllSite:1,adTimer:3,videoName:"",terminals:[1,2,4]}),u=E({loading:!1,visible:!1,other:void 0});$([]);const P=Pe("debounce")(m=>{!m||m.validate(s=>{s&&(e.adsType==="text"&&(e.close=2),u.loading=!0,(e.id?Ke(e):Xe(e)).then(()=>{var T;B.success({message:(T=u.other)!=null&&T.id?"\u5E7F\u544A\u66F4\u65B0\u6210\u529F":"\u5E7F\u544A\u65B0\u589E\u6210\u529F",showClose:!0,position:"bottom-right"}),S("load"),p()}).finally(()=>{u.loading=!1}))})},300),p=()=>{u.other=void 0,u.visible=!1},i=E({value:[],get(){He({page:1,limit:999,order:"sort asc"}).then(m=>{i.value=m.list})}});i.get();function C(){var m,s,T,_,t,r;Object.keys(e).forEach(c=>{e[c]=u.other?u.other[c]:e[c]}),e.id=(m=u.other)==null?void 0:m.id,e.state=((s=u.other)==null?void 0:s.state)||1,e.close=((T=u.other)==null?void 0:T.close)||2,e.adsType=((_=u.other)==null?void 0:_.adsType)||"image",e.sort==null&&(e.sort=1),e.id||(e.adsType=="image"||e.adsType==="video")&&(e.target="_blank"),(t=u.other)!=null&&t.id?(e.terminals=(r=u.other)==null?void 0:r.terminals,console.log(u.other)):(e.isAllSite=1,e.terminals=[1,2,4]),e.id?e.siteIds=u.other.sites.map(c=>c.id)||"":d.siteVal>0&&(e.siteIds=[d.siteVal])}const U=()=>{e.sort==null&&(e.sort=1)};I({open(m){var s;(s=x.value)==null||s.resetFields(),u.visible=!0,u.other=m},position:i});function z(m){if(m.size>1048576)return B({position:"bottom-right",type:"error",message:"\u56FE\u7247\u6700\u5927\u4E3A1M"}),!1}const y=m=>{e.content=m.path},F=E({adsType:{required:!0,message:"\u8BF7\u9009\u62E9\u5E7F\u544A\u7C7B\u578B",trigger:"change"},position:{required:!0,message:"\u8BF7\u9009\u62E9\u5E7F\u544A\u4F4D\u7F6E",trigger:"blur"},custom:{required:!0,message:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9",trigger:"blur"},sort:{required:!0,message:"\u8BF7\u8F93\u5165\u5E7F\u544A\u5E8F\u53F7",trigger:"blur"},offlineAt:{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u67B6\u65E5\u671F",trigger:"blur"},duration:{required:!1,message:"\u8BF7\u8F93\u5165\u663E\u793A\u65F6\u957F",trigger:"blur"},close:{required:!1,message:"\u8BF7\u8F93\u5165\u5141\u8BB8\u5173\u95ED",trigger:"blur"},state:{required:!1,message:"\u8BF7\u8F93\u5165\u72B6\u6001",trigger:"blur"},siteIds:{required:!0,message:"\u8BF7\u9009\u62E9\u7AD9\u70B9",trigger:"change"}}),G=O(()=>{var m;return(m=u.other)!=null&&m.id?"\u7F16\u8F91\u5E7F\u544A":"\u65B0\u589E\u5E7F\u544A"});return qe(()=>e.position,m=>{m==="slogan"&&(e.terminals=[4])}),(m,s)=>{const T=ie,_=ke,t=de,r=re,c=xe,A=Te,ge=Ce,fe=Fe,j=we,_e=je,W=Ue,he=Se,X=ue,be=Ie,K=pe,ye=D,ve=J;return n(),f("div",null,[l(ye,{"model-value":u.visible,"show-close":!u.loading,"close-on-press-escape":!1,title:w(G),width:900,"z-index":20,top:"15vh","close-on-click-modal":!1,onClose:p,onOpened:C},{footer:o(()=>[l(K,{class:"ml-auto",size:"small",loading:u.loading,onClick:p},{default:o(()=>[v(" \u53D6\u6D88 ")]),_:1},8,["loading"]),l(K,{size:"small",loading:u.loading,type:"primary",class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:s[21]||(s[21]=a=>w(P)(x.value))},{default:o(()=>[v(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[q((n(),f("div",null,[l(be,{ref_key:"ruleFormRef",ref:x,"label-width":"95px",model:e,rules:F,style:{"max-width":"460px"},"hide-required-asterisk":!1},{default:o(()=>[V("div",Ye,[V("div",null,[l(_,{label:"\u5E7F\u544A\u540D\u79F0",prop:"name",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5E7F\u544A\u540D\u79F0",trigger:"blur"}},{default:o(()=>[l(T,{spellcheck:"false",modelValue:e.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.name=a),modelModifiers:{trim:!0},clearable:"",maxlength:"64",placeholder:"\u8BF7\u8F93\u5165\u5E7F\u544A\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(_,{label:"\u5E7F\u544A\u4F4D\u7F6E",prop:"position"},{default:o(()=>[l(r,{modelValue:e.position,"onUpdate:modelValue":s[1]||(s[1]=a=>e.position=a),clearable:"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5E7F\u544A\u4F4D\u7F6E",onChange:s[2]||(s[2]=a=>e.adsType=w(k).adsType[0])},{default:o(()=>[(n(!0),f(L,null,R(i.value,a=>(n(),g(t,{key:a.key,label:a.name,value:a.englishName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),q(l(_,{label:"\u5E7F\u544A\u7C7B\u578B",prop:"adsType"},{default:o(()=>[l(A,{modelValue:e.adsType,"onUpdate:modelValue":s[3]||(s[3]=a=>e.adsType=a),size:"small",onChange:s[4]||(s[4]=()=>{e.adsType==="image"||e.adsType==="video"?e.target="_blank":e.target="_self",e.content=""})},{default:o(()=>{var a,Z,Q,Y,ee,le,te,oe;return[(Z=(a=w(k))==null?void 0:a.adsType)!=null&&Z.includes("image")?(n(),g(c,{key:0,label:"image"},{default:o(()=>[v(" \u56FE\u7247 ")]),_:1})):b("",!0),(Y=(Q=w(k))==null?void 0:Q.adsType)!=null&&Y.includes("text")?(n(),g(c,{key:1,label:"text"},{default:o(()=>[v(" \u6587\u5B57 ")]),_:1})):b("",!0),(le=(ee=w(k))==null?void 0:ee.adsType)!=null&&le.includes("custom")?(n(),g(c,{key:2,label:"custom"},{default:o(()=>[v(" \u81EA\u5B9A\u4E49 ")]),_:1})):b("",!0),(oe=(te=w(k))==null?void 0:te.adsType)!=null&&oe.includes("video")?(n(),g(c,{key:3,label:"video"},{default:o(()=>[v(" \u89C6\u9891 ")]),_:1})):b("",!0)]}),_:1},8,["modelValue"])]),_:1},512),[[ae,w(k)]]),e.adsType==="text"?(n(),g(_,{key:0,label:"\u5E7F\u544A\u5185\u5BB9",prop:"content",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5E7F\u544A\u5185\u5BB9",trigger:"blur"}},{default:o(()=>[V("div",el,[l(Ge,{"model-value":e.content,height:"150px",config:{pasteIgnoreImg:!0},type:"text",style:{"z-index":"1"},"toolbar-cfg":{toolbarKeys:["bold","color","italic","fontSize","underline"],modalAppendToBody:!0},"onUpdate:modelValue":s[5]||(s[5]=a=>e.content=a==="<p><br></p>"?"":a)},null,8,["model-value"])])]),_:1})):b("",!0),e.adsType==="video"?(n(),g(_,{key:1,label:"\u89C6\u9891\u5730\u5740",prop:"content",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u89C6\u9891\u5730\u5740",trigger:"blur"}},{default:o(()=>[l(T,{spellcheck:"false",modelValue:e.content,"onUpdate:modelValue":s[6]||(s[6]=a=>e.content=a),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u89C6\u9891\u5730\u5740"},null,8,["modelValue"])]),_:1})):b("",!0),e.adsType==="image"?(n(),g(_,{key:2,label:"\u56FE\u7247",prop:"content",class:"iconBox"},{default:o(()=>[l(fe,{class:"avatar-uploader",action:"/api/v1/upload","show-file-list":!1,"auto-upload":!0,"before-upload":z,data:{exts:"jpg,jpeg,png,gif",rename:!0},accept:"image/jpg,image/jpeg,image/png,image/gif","on-success":y,"on-error":a=>w(B)({position:"bottom-right",type:"error",message:JSON.parse(a.message).message})},{default:o(()=>[e.content?(n(),f("img",{key:0,src:e.content,class:"avatar"},null,8,ll)):b("",!0),V("span",tl,[e.content==""||e.content==null?(n(),g(ge,{key:0,color:"#B3B4B8",size:12},{default:o(()=>[l(w(Ve))]),_:1})):b("",!0)])]),_:1},8,["on-error"]),e.position=="topBanner"||e.position=="playerUp"?(n(),f("div",ol,"\u652F\u6301GIF\uFF0CJPG\uFF0CPNG\u683C\u5F0F\u4E0D\u8D85\u8FC71M,APP\u5E7F\u544A\u5EFA\u8BAE\u5BBD\u9AD8720*70")):(n(),f("div",al,"\u652F\u6301GIF\uFF0CJPG\uFF0CPNG\u683C\u5F0F\u4E0D\u8D85\u8FC71M"))]),_:1})):b("",!0),e.adsType==="image"?(n(),g(_,{key:3,label:"\u56FE\u7247\u5730\u5740",prop:"content",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740",trigger:"blur"}},{default:o(()=>[l(T,{spellcheck:"false",modelValue:e.content,"onUpdate:modelValue":s[7]||(s[7]=a=>e.content=a),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u56FE\u7247\u5730\u5740"},null,8,["modelValue"])]),_:1})):b("",!0),e.adsType==="custom"?(n(),g(_,{key:4,label:"\u81EA\u5B9A\u4E49\u5185\u5BB9",prop:"custom"},{default:o(()=>[l(T,{spellcheck:"false",modelValue:e.custom,"onUpdate:modelValue":s[8]||(s[8]=a=>e.custom=a),type:"textarea",rows:15,clearable:"",resize:"none",style:{"font-size":"12px"},placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9"},null,8,["modelValue"])]),_:1})):b("",!0),e.adsType!=="custom"?(n(),g(_,{key:5,label:"\u5E7F\u544A\u94FE\u63A5",prop:"link",rules:{required:e.position!="slogan",message:"\u8BF7\u8F93\u5165\u5E7F\u544A\u94FE\u63A5",trigger:"blur"}},{default:o(()=>[V("div",sl,[l(T,{spellcheck:"false",modelValue:e.link,"onUpdate:modelValue":s[9]||(s[9]=a=>e.link=a),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5E7F\u544A\u94FE\u63A5",style:{flex:"1"},onBlur:s[10]||(s[10]=a=>e.link=e.link.substring(0,4)!=="http"&&e.link?"http://"+e.link:e.link)},null,8,["modelValue"]),q(l(j,{modelValue:e.target,"onUpdate:modelValue":s[11]||(s[11]=a=>e.target=a),label:"\u65B0\u7A97\u53E3\u6253\u5F00","true-label":"_blank","false-label":"_self"},null,8,["modelValue"]),[[ae,e.adsType==="text"||e.adsType==="image"||e.adsType==="video"]])])]),_:1},8,["rules"])):b("",!0)]),V("div",null,[l(_,{label:"\u4E0A\u67B6\u65E5\u671F",prop:"offlineAt"},{default:o(()=>[l(_e,{"model-value":[e.onlineAt,e.offlineAt],type:"daterange","range-separator":"-",style:{"font-size":"12px"},"start-placeholder":"\u4E0A\u67B6\u65E5\u671F","end-placeholder":"\u4E0B\u67B6\u65E5\u671F","value-format":"X","onUpdate:modelValue":s[12]||(s[12]=a=>{e.onlineAt=a&&a[0]?Number(a[0]):void 0,e.offlineAt=a&&a[1]?Number(a[1])+86399:void 0})},null,8,["model-value"])]),_:1}),e.adsType==="image"?(n(),g(_,{key:0,label:"\u5141\u8BB8\u5173\u95ED",prop:"close"},{default:o(()=>[l(A,{modelValue:e.close,"onUpdate:modelValue":s[13]||(s[13]=a=>e.close=a),size:"small"},{default:o(()=>[l(c,{label:2},{default:o(()=>[v(" \u4E0D\u5141\u8BB8 ")]),_:1}),l(c,{label:1},{default:o(()=>[v(" \u5141\u8BB8 ")]),_:1})]),_:1},8,["modelValue"])]),_:1})):b("",!0),l(_,{label:"\u663E\u793A\u987A\u5E8F",prop:"duration"},{default:o(()=>[l(W,{spellcheck:"false",modelValue:e.sort,"onUpdate:modelValue":s[14]||(s[14]=a=>e.sort=a),modelModifiers:{number:!0},clearable:"",precision:0,"step-strictly":"",min:1,style:{width:"146px"},"value-on-clear":1,"controls-position":"right",placeholder:"\u9ED8\u8BA41",onBlur:s[15]||(s[15]=a=>U())},null,8,["modelValue"])]),_:1}),e.position=="beforePlay"&&e.adsType!=="video"?(n(),g(_,{key:1,label:"\u5E7F\u544A\u65F6\u957F(s)",prop:"adTimer"},{default:o(()=>[l(W,{spellcheck:"false",modelValue:e.adTimer,"onUpdate:modelValue":s[16]||(s[16]=a=>e.adTimer=a),modelModifiers:{number:!0},clearable:"",precision:0,"step-strictly":"",min:0,style:{width:"146px"},"value-on-clear":1,"controls-position":"right",placeholder:"\u4E3A0\u4E0D\u8BBE\u7F6E"},null,8,["modelValue"])]),_:1})):b("",!0),l(_,{label:"\u591A\u7AEF\u6295\u653E",prop:"state"},{default:o(()=>[l(he,{modelValue:e.terminals,"onUpdate:modelValue":s[17]||(s[17]=a=>e.terminals=a)},{default:o(()=>[l(j,{label:1,disabled:e.position=="slogan"},{default:o(()=>[v("WEB")]),_:1},8,["disabled"]),l(j,{label:2,disabled:e.position=="slogan"},{default:o(()=>[v("H5")]),_:1},8,["disabled"]),l(j,{label:4},{default:o(()=>[v("APP")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(_,{label:"\u72B6\u6001",prop:"state"},{default:o(()=>[l(X,{modelValue:e.state,"onUpdate:modelValue":s[18]||(s[18]=a=>e.state=a),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1}),l(_,{label:"\u5E94\u7528\u5168\u7AD9",prop:"isAllSite"},{default:o(()=>[l(X,{modelValue:e.isAllSite,"onUpdate:modelValue":s[19]||(s[19]=a=>e.isAllSite=a),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1}),e.isAllSite==2?(n(),g(_,{key:2,label:"\u7AD9\u70B9\u540D\u79F0",prop:"siteIds"},{default:o(()=>[l(r,{modelValue:e.siteIds,"onUpdate:modelValue":s[20]||(s[20]=a=>e.siteIds=a),class:"input",multiple:"",placeholder:"\u9009\u62E9\u7AD9\u70B9"},{default:o(()=>[(n(!0),f(L,null,R(w(d).list,a=>(n(),g(t,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):b("",!0)])])]),_:1},8,["model","rules"])])),[[ve,u.loading]])]),_:1},8,["model-value","show-close","title"])])}}},il=se(nl,[["__scopeId","data-v-608665fe"]]),dl={class:"flex-x-end dia-footer"},rl={__name:"history",setup(h,{expose:I}){const S=$({pageIndex:1,pageSize:20,total:0}),d=E({loading:!1,data:[],load(u){S.value=u||S.value,d.loading=!0,De().then(P=>{d.data=P.data}).finally(()=>{d.loading=!1})}}),k=E({visible:!1,other:{}}),x=()=>{k.visible=!1,S.value.pageIndex=1};I({open(u){k.other=u,k.visible=!0}});const e=O(()=>{var u;return((u=k.other)==null?void 0:u.name)+"\u7684\u767B\u5F55\u8BB0\u5F55"});return(u,P)=>{const p=me,i=ce,C=D,U=J;return n(),g(C,{"model-value":k.visible,"show-close":!0,"close-on-press-escape":!1,"before-close":x,title:w(e),width:1100,"z-index":20,class:"not_pb","close-on-click-modal":!1,onClose:x},{default:o(()=>[q((n(),f("div",null,[q((n(),g(i,{data:d.data,class:"auto",stripe:!0},{default:o(()=>[l(p,{prop:"id",label:"\u767B\u5F55\u8BBE\u5907","min-width":"70"}),l(p,{prop:"id",label:"\u767B\u5F55IP","min-width":"100"}),l(p,{prop:"id",label:"IP\u6240\u5728\u5730","min-width":"200"}),l(p,{prop:"id",label:"\u7CFB\u7EDF\u7248\u672C","min-width":"70"}),l(p,{prop:"id",label:"\u6D4F\u89C8\u5668","min-width":"50"}),l(p,{prop:"name",label:"\u6D4F\u89C8\u5668\u7248\u672C","min-width":"70"}),l(p,{prop:"areaIdName",label:"\u5206\u8FA8\u7387","min-width":"70"}),l(p,{prop:"countriesIdName",label:"\u767B\u5F55\u65F6\u95F4","min-width":"145"})]),_:1},8,["data"])),[[U,d.loading]]),V("div",dl,[l(Oe,{pageinfo:S.value,class:"ml-auto",onChange:d.load},null,8,["pageinfo","onChange"])])])),[[U,d.loading]])]),_:1},8,["model-value","title"])}}};const H=h=>(Le("data-v-9e02984b"),h=h(),Re(),h),ul={class:"flex-y box",style:{"padding-top":"24px"}},pl={style:{display:"flex"}},ml={class:"pop_item"},cl=H(()=>V("span",{class:"p"},"\u5E7F\u544A\u72B6\u6001",-1)),gl={class:"pop_item"},fl=H(()=>V("span",{class:"p"},"\u5E7F\u544A\u7C7B\u578B",-1)),_l={class:"pop_item"},hl=H(()=>V("span",{class:"p"},"\u5E7F\u544A\u4F4D\u7F6E",-1)),bl={key:0},yl={key:1},vl={key:2},Vl={key:3},kl={key:0,class:"index"},xl=["onClick"],Tl={key:4},Cl=["title"],wl={key:0},Ul={key:1},Sl={key:2},Il={key:1},Al={style:{height:"70vh"}},El={__name:"index",setup(h){const I=ne();Me();const S=$(!1),d=E({loading:!1,data:[],searchVal:{keywords:"",order:""},selectList:[],load(){d.loading=!0,Je({siteId:I.siteVal,...d.searchVal}).then(p=>{d.data=p}).finally(()=>{d.loading=!1})},handleSelectionChange(p){this.selectList=p},sortChnage({column:p,prop:i,order:C}){C?d.searchVal.order=`${i} ${C==="ascending"?"asc":"desc"}`:d.searchVal.order="",d.load()}}),k=p=>{window.open(p)},x=$(),e=$(),u={del:p=>Ae({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F\u5220\u9664\u540E\u5E7F\u544A\u5C06\u4E0D\u518D\u663E\u793A",okEms:"\u5E7F\u544A\u5220\u9664\u6210\u529F"},()=>We(p.id).then(i=>(d.load(),i))),statusChange(p,i){i.loading=!0,Ze(i.id,p).then(()=>{B({position:"bottom-right",type:"success",message:"\u72B6\u6001\u66F4\u65B0\u6210\u529F"})}).catch(()=>{i.state=p===1?2:1}).finally(()=>{i.loading=!1})},closeChange(p,i){i.loading=!0,Qe(i.id,p).then(()=>{B({position:"bottom-right",type:"success",message:"\u66F4\u65B0\u6210\u529F"})}).catch(()=>{i.close=p===1?2:1}).finally(()=>{i.loading=!1})}},P=({row:p,column:i,rowIndex:C,columnIndex:U})=>{if(p.adsType=="custom"){if(U===3)return[1,2];if(U===4)return[0,0]}};return ze(()=>{d.load()}),(p,i)=>{const C=pe,U=de,z=re,y=me,F=ie,G=Be("MyImage"),m=ue,s=ce,T=D,_=J;return n(),f("div",ul,[l($e,null,{default:o(()=>[v(" \u5E7F\u544A\u7BA1\u7406 ")]),_:1}),l(Ee,{placement:"bottom-start",onLoad:d.load},{prefix:o(()=>[l(C,{type:"primary",onClick:i[0]||(i[0]=t=>{var r;return(r=x.value)==null?void 0:r.open({})})},{default:o(()=>[v(" \u65B0\u589E\u5E7F\u544A ")]),_:1}),l(C,{type:"primary",onClick:i[1]||(i[1]=t=>S.value=!0)},{default:o(()=>[v(" \u5E7F\u544A\u4F4D\u7BA1\u7406 ")]),_:1})]),prepend:o(()=>[]),suffix:o(()=>[V("div",pl,[V("div",ml,[cl,l(z,{modelValue:d.searchVal.state,"onUpdate:modelValue":i[2]||(i[2]=t=>d.searchVal.state=t),clearable:"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5E7F\u544A\u72B6\u6001",onChange:i[3]||(i[3]=t=>{d.searchVal.state=d.searchVal.state?d.searchVal.state:void 0,d.load()})},{default:o(()=>[(n(),f(L,null,R([{k:1,n:"\u5F00\u542F"},{k:2,n:"\u5173\u95ED"}],(t,r)=>l(U,{key:r,label:t.n,value:t.k},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),V("div",gl,[fl,l(z,{modelValue:d.searchVal.adsType,"onUpdate:modelValue":i[4]||(i[4]=t=>d.searchVal.adsType=t),clearable:"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5E7F\u544A\u7C7B\u578B",onChange:i[5]||(i[5]=t=>d.load())},{default:o(()=>[(n(),f(L,null,R([{k:"image",n:"\u56FE\u7247"},{k:"text",n:"\u6587\u5B57"},{k:"custom",n:"\u81EA\u5B9A\u4E49"}],(t,r)=>l(U,{key:r,label:t.n,value:t.k},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),V("div",_l,[hl,l(z,{modelValue:d.searchVal.position,"onUpdate:modelValue":i[6]||(i[6]=t=>d.searchVal.position=t),clearable:"",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5E7F\u544A\u4F4D\u7F6E",onChange:i[7]||(i[7]=t=>d.load())},{default:o(()=>{var t,r;return[(n(!0),f(L,null,R((r=(t=x.value)==null?void 0:t.position)==null?void 0:r.value,(c,A)=>(n(),g(U,{key:A,label:c.name,value:c.englishName},null,8,["label","value"]))),128))]}),_:1},8,["modelValue"])])])]),_:1},8,["onLoad"]),q((n(),g(s,{data:d.data,class:"auto",stripe:!0,onSelectionChange:d.handleSelectionChange,"span-method":P},{default:o(()=>[l(y,{label:"\u5E8F\u53F7",type:"index",width:"80"}),l(y,{label:"\u5E7F\u544A\u540D\u79F0",prop:"name",width:"120","show-overflow-tooltip":!0}),l(y,{prop:"adsType",label:"\u5E7F\u544A\u7C7B\u578B",width:"80"},{default:o(({row:t})=>[t.adsType==="text"?(n(),f("span",bl,"\u6587\u5B57")):b("",!0),t.adsType==="image"?(n(),f("span",yl,"\u56FE\u7247")):b("",!0),t.adsType==="custom"?(n(),f("span",vl,"\u81EA\u5B9A\u4E49")):b("",!0),t.adsType==="video"?(n(),f("span",Vl,"\u89C6\u9891")):b("",!0)]),_:1}),l(y,{label:"\u5185\u5BB9","min-width":"90","show-overflow-tooltip":!0},{default:o(({row:t})=>[t.adsType==="text"?(n(),f("p",kl,M(t.content.replace(/<.*?>/ig,"")||""),1)):t.adsType==="video"?(n(),f("a",{key:1,onClick:r=>k(t.content),style:{color:"#4b82fa"}},M(t.content||""),9,xl)):t.adsType==="custom"?(n(),g(F,{key:2,readonly:"",modelValue:t.custom,"onUpdate:modelValue":r=>t.custom=r,placeholder:""},null,8,["modelValue","onUpdate:modelValue"])):t.adsType==="image"?(n(),g(G,{key:3,src:t.content,style:{width:"60px",height:"32px"}},null,8,["src"])):(n(),f("span",Tl,"-"))]),_:1}),l(y,{prop:"link",label:"\u94FE\u63A5","min-width":"120","show-overflow-tooltip":!0},{default:o(({row:t})=>[V("div",{class:"index",title:t.link},M(t.link||"-"),9,Cl)]),_:1}),l(y,{prop:"position",label:"\u4F4D\u7F6E",width:"120"},{default:o(({row:t})=>{var r,c;return[v(M(((c=(r=x.value)==null?void 0:r.position.value.find(A=>A.englishName===t.position))==null?void 0:c.name)||"-"),1)]}),_:1}),l(y,{prop:"state",label:"\u72B6\u6001",width:"80px"},{default:o(({row:t})=>[l(m,{modelValue:t.state,"onUpdate:modelValue":r=>t.state=r,"active-value":1,loading:t.loading,"inactive-value":2,onChange:r=>u.statusChange(r,t)},null,8,["modelValue","onUpdate:modelValue","loading","onChange"])]),_:1}),l(y,{label:"\u6240\u5C5E\u7AD9\u70B9","min-width":"95"},{default:o(({row:t})=>{var r,c;return[t.isAllSite==1?(n(),f("span",wl,"\u6240\u6709\u7AD9\u70B9")):((r=t.sites)==null?void 0:r.length)==0?(n(),f("span",Ul,"\u9ED8\u8BA4\u7AD9\u70B9")):(n(),f("span",Sl,M(((c=t.sites)==null?void 0:c.map(A=>A.name).join("\uFF0C"))||"-"),1))]}),_:1}),l(y,{prop:"sort",label:"\u663E\u793A\u987A\u5E8F",width:"80px"}),l(y,{prop:"onlineAt",label:"\u4E0A\u67B6\u65E5\u671F",type:"day",sortable:"",width:"100"}),l(y,{prop:"offlineAt",label:"\u4E0B\u67B6\u65E5\u671F",type:"day",sortable:"",width:"100"}),l(y,{prop:"createAt",label:"\u6DFB\u52A0\u65F6\u95F4",type:"date",sortable:"",width:"150"}),l(y,{prop:"close",label:"\u5141\u8BB8\u5173\u95ED",width:"80"},{default:o(({row:t})=>[t.adsType==="image"?(n(),g(m,{key:0,modelValue:t.close,"onUpdate:modelValue":r=>t.close=r,"active-value":1,loading:t.loading,"inactive-value":2,onChange:r=>u.closeChange(r,t)},null,8,["modelValue","onUpdate:modelValue","loading","onChange"])):(n(),f("span",Il,"-"))]),_:1}),l(y,{prop:"updateAt",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",sortable:"",width:"150"}),l(y,{fixed:"right",label:"\u64CD\u4F5C",width:"100",align:"right"},{default:o(({row:t})=>[l(C,{type:"primary",link:"",onClick:r=>{var c;return(c=x.value)==null?void 0:c.open(t)}},{default:o(()=>[v(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),l(C,{type:"danger",link:"",onClick:r=>u.del(t)},{default:o(()=>[v(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[_,d.loading]]),l(il,{ref_key:"editorRef",ref:x,onLoad:d.load},null,8,["onLoad"]),l(rl,{ref_key:"historyRef",ref:e,onLoad:d.load},null,8,["onLoad"]),l(T,{modelValue:S.value,"onUpdate:modelValue":i[8]||(i[8]=t=>S.value=t),title:"\u5E7F\u544A\u4F4D\u7BA1\u7406",width:"1200",top:"10vh",zIndex:20,onClosed:i[9]||(i[9]=t=>{var r;return(r=x.value)==null?void 0:r.position.get()})},{default:o(()=>[V("div",Al,[l(Ne)])]),_:1},8,["modelValue"])])}}},Yl=se(El,[["__scopeId","data-v-9e02984b"]]);export{Yl as default};