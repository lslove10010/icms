import{R as j,S as L,E as M,cl as Y,j as q,ax as ee,a8 as ue,av as te,cm as se,C as le,b as ae,c as oe,s as re,i as ne,d as de,f as ie,N as ce,bX as pe,v as me,_ as G}from"./entry-9cc5c370.js";import{E as Fe,a as _e}from"./el-tab-pane-8ec9369b.js";import{p as fe}from"./plugHeader-c50619f4.js";/* empty css                          */import{G as be,Z as V,a as B,e as T,n as ge,b as ve,C as Ee,l as n,m,L as R,R as H,S as l,U as u,u as c,a6 as b,W as _,O as D,P as k,af as $,p as v,aa as p,D as Ce,aA as ye}from"./vue-11eabec3.js";const De=""+new URL("../svg/dataConversion_v3-5d63b1a0.svg",import.meta.url).href,Be=E=>j({url:"/toData",method:"post",data:E}),w=()=>j({url:"/toData/tips",method:"get",timeout:0}),he={key:0,style:{color:"#5ad8a6"},class:"testInfo"},xe={key:1,style:{color:"#db4646"},class:"testInfo"},Ie={class:"label-tips"},Ae={key:0,class:"testInfo"},Ve={key:0,style:{display:"flex","align-items":"center"}},ke={class:"progressInfo"},we={class:"progressInfo"},Se={key:1,style:{width:"8px",height:"8px"}},Pe=be({__name:"cms10",props:{type:{type:String,default:""}},setup(E){const g=E,t=V({testLoading:!1,activeName:"appleCMS",testSuccess:null,testMessge:"",siteList:[],tipsInster:null}),r=B({msg:"",total:0,current:0,level:""}),f=T(()=>t.testSuccess!==!0||t.tipsInster!==null);L().then(a=>{const e=a.list||[];t.siteList=e.filter(i=>i.parentId<=0)}),w().then(a=>{a.data.runIng===!0&&(C(),Object.keys(o).forEach(e=>{o[e]=a.params.dbConfig[e]}),o.dbType=2,d.siteId=a.params.siteId,d.conversion=a.params.conversion)});const h=[{key:"vod",label:"\u89C6\u9891"},{key:"article",label:"\u6587\u7AE0"},{key:"member",label:"\u4F1A\u5458",tips:g.type==="ocean"?"\u4F1A\u5458\u9ED8\u8BA4\u5BC6\u7801123456":null}],x=T(()=>(r.value.current/r.value.total*100).toFixed(2)||0),I=B(),A=B(),o=V({dbHost:"",dbName:"",dbPassword:"",dbPort:3306,dbUser:"",dbType:2}),d=V({siteId:"",conversion:[]}),C=()=>{let a=setTimeout(()=>{w().then(e=>{e.data.level==="error"?(M({position:"bottom-right",type:"error",message:e.data.msg}),y()):e.data.runIng===!1?(r.value=e.data,M({position:"bottom-right",type:"success",message:"\u8F6C\u6362\u5B8C\u6210"}),Y("\u6570\u636E\u8F6C\u6362\u5B8C\u6210\uFF0C\u9700\u8981\u91CD\u542F\u7A0B\u5E8F\u8FDB\u884C\u6570\u636E\u4F18\u5316\uFF0C\u662F\u5426\u91CD\u542F\uFF1F"),ge(()=>{y()})):(C(),r.value=e.data)}),t.tipsInster=a},500)},y=()=>{t.tipsInster!==null&&clearInterval(t.tipsInster),t.tipsInster=null};L().then(a=>{const e=a.list||[];t.siteList=e.filter(i=>i.parentId<=0)}),w().then(a=>{a.data.runIng===!0&&(C(),Object.keys(o).forEach(e=>{o[e]=a.params.dbConfig[e]}),o.dbType=2,d.siteId=a.params.siteId,d.conversion=a.params.conversion)});const O=()=>{t.testSuccess=null,t.testMessge="",I.value&&I.value.validate(a=>{a&&(t.testLoading=!0,se(o).then(e=>{t.testSuccess=!0,t.testMessge="\u6D4B\u8BD5\u8FDE\u63A5\u6210\u529F"}).catch(e=>{t.testSuccess=!1,t.testMessge="\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25"}).finally(()=>{t.testLoading=!1,y()}))})},z=()=>{!A.value||A.value.validate(a=>{a&&le({title:"\u63D0\u793A",okText:"\u786E\u5B9A",cancleText:"\u53D6\u6D88",message:p("ul",{style:{"padding-left":"8px"},class:"el-message-box-ul"},[p("li",null,"\u8F6C\u6362\u6570\u636E\u524D\u8BF7\u505A\u597D\u6570\u636E\u5E93\u5907\u4EFD"),p("li",null,"\u8F6C\u6362\u65F6\u95F4\u6839\u636E\u8F6C\u6362\u7684\u6570\u636E\u91CF\u7565\u6709\u4E0D\u540C"),p("li",null,[p("span",null,"\u8F6C\u6362\u6570\u636E\u65F6\uFF0C"),p("span",{style:{color:"#FF4D4F"}},"\u4F1A\u5220\u9664\u7AD9\u70B9\u4E2D\u76F8\u5E94\u7684\u6570\u636E\uFF0C"),p("span",null,"\u5220\u9664\u65F6\u957F\u6839\u636E\u9700\u8981\u5220\u9664\u7684\u91CF\u6709\u6240\u4E0D\u540C")]),p("li",null,"\u6570\u636E\u8F6C\u6362\u65F6\uFF0C\u5360\u7528\u7684\u7CFB\u7EDF\u8D44\u6E90\u4F1A\u76F8\u5BF9\u8F83\u9AD8\uFF0C\u8BF7\u5728\u7A7A\u95F2\u65F6\u95F4\u8FDB\u884C\u64CD\u4F5C"),p("li",null,"\u53EA\u8981\u7A0B\u5E8F\u672A\u63D0\u793A\u9519\u8BEF\u4FE1\u606F\uFF0C\u8010\u5FC3\u7B49\u5F85\u7A0B\u5E8F\u5B8C\u6210\u64CD\u4F5C\u5373\u53EF")])},()=>Be({...d,cmsType:g.type,dbConfig:o}).then(e=>{C()}).catch(e=>{}).finally(()=>{}))})};ve(()=>o,()=>{t.testMessge="",t.testSuccess=null},{deep:!0}),Ee(()=>{y()});const W={siteId:{required:!0,message:"\u8BF7\u9009\u62E9\u7AD9\u70B9",trigger:"blur"},conversion:{required:!0,message:"\u8BF7\u9009\u62E9\u8F6C\u6362\u5185\u5BB9",trigger:"blur"}},X={dbHost:{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u5E93\u5730\u5740",trigger:"blur"},dbName:{required:!0,trigger:"blur",validator:(a,e)=>e!=null&&e.trim()?/^[a-z_][a-z0-9_]*$/.test(e)?Promise.resolve():Promise.reject("\u53EA\u80FD\u8F93\u5165\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\uFF0C\u4E14\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934"):Promise.reject("\u6570\u636E\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01")},dbUser:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"},dbPassword:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},dbPort:{required:!0,message:"\u8BF7\u8F93\u5165\u7AEF\u53E3",trigger:"blur"}};return(a,e)=>{const i=ae,F=oe,P=re,U=ne,Z=de,J=ie,K=ce,Q=pe,N=me;return n(),m(k,null,[R((n(),H(U,{ref_key:"testDataFormRef",ref:I,"hide-required-asterisk":!0,rules:X,model:o,"label-width":"96px"},{default:l(()=>[u(F,{prop:"dbHost",label:"\u6E90\u6570\u636E\u5E93IP"},{default:l(()=>[u(i,{modelValue:o.dbHost,"onUpdate:modelValue":e[0]||(e[0]=s=>o.dbHost=s)},null,8,["modelValue"])]),_:1}),u(F,{prop:"dbUser",label:"\u6E90\u6570\u636E\u5E93\u7528\u6237\u540D"},{default:l(()=>[u(i,{modelValue:o.dbUser,"onUpdate:modelValue":e[1]||(e[1]=s=>o.dbUser=s)},null,8,["modelValue"])]),_:1}),u(F,{prop:"dbPassword",label:"\u6E90\u6570\u636E\u5E93\u5BC6\u7801"},{default:l(()=>[u(i,{modelValue:o.dbPassword,"onUpdate:modelValue":e[2]||(e[2]=s=>o.dbPassword=s)},null,8,["modelValue"])]),_:1}),u(F,{prop:"dbPort",label:"\u6E90\u6570\u636E\u5E93\u7AEF\u53E3"},{default:l(()=>[u(i,{modelValue:o.dbPort,"onUpdate:modelValue":e[3]||(e[3]=s=>o.dbPort=s),modelModifiers:{trim:!0,number:!0}},null,8,["modelValue"])]),_:1}),u(F,{prop:"dbName",label:"\u6E90\u6570\u636E\u5E93\u540D\u79F0"},{default:l(()=>[u(i,{modelValue:o.dbName,"onUpdate:modelValue":e[4]||(e[4]=s=>o.dbName=s)},null,8,["modelValue"]),u(c(q),{style:{"margin-left":"16px"},onClick:O,type:"primary"},{default:l(()=>[b("\u6D4B\u8BD5\u8FDE\u63A5")]),_:1}),t.testSuccess===!0?(n(),m("div",he,[b(_(t.testMessge)+" ",1),u(P,null,{default:l(()=>[u(c(ee))]),_:1})])):t.testSuccess===!1?(n(),m("div",xe,[b(_(t.testMessge)+" ",1),u(P,null,{default:l(()=>[u(c(ue))]),_:1})])):D("",!0)]),_:1})]),_:1},8,["model"])),[[N,t.testLoading]]),u(U,{model:d,ref_key:"convertFormRef",ref:A,"hide-required-asterisk":!0,rules:W,"label-width":"60px"},{default:l(()=>[u(F,{prop:"siteId",label:"\u9009\u62E9\u7AD9\u70B9"},{default:l(()=>[u(J,{disabled:c(f),modelValue:d.siteId,"onUpdate:modelValue":e[5]||(e[5]=s=>d.siteId=s),class:"m-2",placeholder:"\u9009\u62E9\u7AD9\u70B9",style:{width:"160px !important"}},{default:l(()=>[(n(!0),m(k,null,$(t.siteList,s=>(n(),H(Z,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["disabled","modelValue"])]),_:1}),u(F,{"label-width":"0px",prop:"conversion",label:""},{default:l(()=>[u(Q,{disabled:c(f),modelValue:d.conversion,"onUpdate:modelValue":e[6]||(e[6]=s=>d.conversion=s)},{default:l(()=>[(n(),m(k,null,$(h,s=>u(K,{key:s.key,label:s.key},{default:l(()=>[b(_(s.label)+" ",1),v("span",Ie,_(s.tips),1)]),_:2},1032,["label"])),64))]),_:1},8,["disabled","modelValue"])]),_:1}),u(F,{"label-width":"0px",label:""},{default:l(()=>[u(c(q),{disabled:c(f),style:{"margin-right":"32px"},onClick:z,type:"primary"},{default:l(()=>[b("\u5F00\u59CB\u8F6C\u6362 ")]),_:1},8,["disabled"]),t.tipsInster?(n(),m("div",Ae,[b(" \u3010"+_(r.value.msg)+"\u3011 ",1),r.value.level==="progress"?(n(),m("div",Ve,[u(c(te),{style:{width:"320px"},"stroke-width":8,percentage:c(x)},null,8,["percentage"]),v("div",ke,_(r.value.current)+" / "+_(r.value.total)+"\u6761",1),v("div",we,"\u5FFD\u7565\uFF1A"+_(r.value.skip)+"\u6761",1)])):D("",!0),r.value.level==="wait"?R((n(),m("div",Se,null,512)),[[N,!0]]):D("",!0)])):D("",!0)]),_:1})]),_:1},8,["model"])],64)}}});const S=G(Pe,[["__scopeId","data-v-7b4ed596"]]);const Ue={style:{height:"calc(100vh - 50px)",display:"flex","flex-direction":"column"}},Ne={class:"card",style:{overflow:"hidden"}},Le=ye('<div class="flex-x-between" data-v-c8462ef5><div class="left" data-v-c8462ef5><img src="'+De+'" alt="" style="width:80px;height:80px;" data-v-c8462ef5><div class="flex-y" data-v-c8462ef5><p class="name" data-v-c8462ef5>\u6570\u636E\u8F6C\u6362</p><p class="business" data-v-c8462ef5>\u5C06\u5176\u4ED6CMS\u7684\u6570\u636E\u8F6C\u6362\u5230\u672C\u7CFB\u7EDF\uFF0C\u4FDD\u6301\u539F\u6709\u7AD9\u70B9\u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u5FEB\u901F\u5EFA\u7AD9</p></div></div><div class="right" data-v-c8462ef5></div></div>',1),Me={class:"card card_table",style:{"margin-top":"15px",padding:"24px"}},qe={__name:"index",setup(E){const g=B("mac10");return(t,r)=>{const f=Fe,h=_e;return n(),m("div",Ue,[v("div",Ne,[u(fe,{style:{"margin-bottom":"0","margin-top":"-4px"}},{default:l(()=>[b("\u6570\u636E\u8F6C\u6362")]),_:1}),Le]),v("div",Me,[u(h,{modelValue:c(g),"onUpdate:modelValue":r[0]||(r[0]=x=>Ce(g)?g.value=x:null),class:"demo-tabs"},{default:l(()=>[u(f,{label:"\u82F9\u679CCMS V10",name:"mac10"},{default:l(()=>[u(S,{type:"mac10"})]),_:1}),u(f,{label:"\u6D77\u6D0BCMS",name:"ocean"},{default:l(()=>[u(S,{type:"ocean"})]),_:1}),u(f,{label:"\u98DE\u98DE\u5F71\u89C6",name:"feifei"},{default:l(()=>[u(S,{type:"feifei"})]),_:1})]),_:1},8,["modelValue"])])])}}},Ge=G(qe,[["__scopeId","data-v-c8462ef5"]]);export{Ge as default};