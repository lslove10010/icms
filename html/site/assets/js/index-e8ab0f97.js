import{b as L,d as M,c as P,aC as U,h as D,a as K,v as z,_ as R,i as Q,j as G,l as W}from"./entry-38cf4eb3.js";import{m as Y,E as X}from"./message-0cfdae09.js";import{f as Z,h as ee,i as le,g as te,w as ae,j as oe,k as ne,l as se}from"./wangEditor-c8f3feae.js";import{E as de,a as ue,P as ie}from"./pagination-a0666c64.js";import{E as re}from"./el-date-picker-3925286c.js";import{_ as $,I as ce,F as pe,n as me}from"./videoAlbum-44205902.js";import{Y as x,b as E,Q as I,R as o,u as t,o as C,T as a,a5 as h,a as v,F as j,y as ge,i as fe,c as B,K as N,O as _e,ac as he,M as ye,h as be,am as ve,an as Ce,V as S,ad as Fe}from"./vue-e9f47459.js";const Ee={style:{display:"flex","align-items":"center",gap:"8px",width:"100%"}},ke={__name:"allDel",emits:["load"],setup(k,{expose:y,emit:d}){const c=x({loading:!1,visible:!1,other:void 0}),b=E(),e=x({categoryId:[],collectionId:[],updateAtEnd:"",updateAtStart:"",tags:[]});E([]),E([]);const n=g=>{if(e.updateAtEnd)return g.getTime()>e.updateAtEnd.getTime()},u=g=>g.getTime()<new Date(e.updateAtStart).getTime(),m=()=>Y({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",okEms:"\u56FE\u6587\u6570\u636E\u5220\u9664\u6210\u529F"},()=>b.value.validate((g,f)=>{var r;g&&(c.loading=!0,ce({collectionId:e.collectionId,updateAtStart:e.updateAtStart||void 0,updateAtEnd:e.updateAtEnd||void 0,categoryId:(r=e.categoryId)==null?void 0:r.map(l=>l.at(-1)),tags:e.tags||[]}).then(l=>{c.visible=!1}).finally(()=>{c.loading=!1}))})),V=()=>{var g;c.visible=!1,(g=b.value)==null||g.resetFields(),e.updateAtStart="",e.updateAtEnd="",e.tags=[],d("load")},_=()=>{};return y({open(g){c.visible=!0}}),(g,f)=>{const r=L,l=re,s=M,p=P,w=U;return C(),I(w,{"model-value":t(c).visible,"show-close":!t(c).loading,"close-on-press-escape":!1,title:"\u4E00\u952E\u5220\u9664",width:550,"z-index":20,top:"25vh","close-on-click-modal":!1,onClose:V,onOpened:_},{footer:o(()=>[a(p,{class:"ml-auto",size:"small",loading:t(c).loading,onClick:V},{default:o(()=>[h(" \u53D6\u6D88 ")]),_:1},8,["loading"]),a(p,{class:"ml-auto",size:"small",type:"primary",loading:t(c).loading,onClick:f[3]||(f[3]=F=>m())},{default:o(()=>[h(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[a(s,{ref_key:"ruleFormRef",ref:b,"label-width":"80px",model:t(e),rules:{},"hide-required-asterisk":!1},{default:o(()=>[a(r,{label:"\u56FE\u6587\u5206\u7C7B",prop:"categoryId"},{default:o(()=>[a($,{modelValue:t(e).categoryId,"onUpdate:modelValue":f[0]||(f[0]=F=>t(e).categoryId=F),style:{width:"100%"},type:"article",placeholder:"\u9ED8\u8BA4\u5168\u90E8\u5206\u7C7B",checkStrictly:!0,props:{checkStrictly:!1,multiple:!0,emitPath:!0}},null,8,["modelValue"])]),_:1}),a(r,{label:"\u66F4\u65B0\u65F6\u95F4",prop:["updateAtStart","updateAtEnd"]},{default:o(()=>[v("div",Ee,[a(l,{modelValue:t(e).updateAtStart,"onUpdate:modelValue":f[1]||(f[1]=F=>t(e).updateAtStart=F),type:"datetime",placeholder:"\u5F00\u59CB\u65E5\u671F",style:{flex:"1 1"},"disabled-date":n,format:"YYYY/MM/DD HH:mm:ss",clearable:!1},null,8,["modelValue"]),h(" ~ "),a(l,{modelValue:t(e).updateAtEnd,"onUpdate:modelValue":f[2]||(f[2]=F=>t(e).updateAtEnd=F),type:"datetime",style:{flex:"1 1"},"disabled-date":u,placeholder:"\u7ED3\u675F\u65E5\u671F",format:"YYYY/MM/DD HH:mm:ss",clearable:!1},null,8,["modelValue"])])]),_:1})]),_:1},8,["model"])]),_:1},8,["model-value","show-close"])}}},Ve=ke,xe={class:"hhhh"},Be={class:"flex-x-between"},Ie={class:"block"},we={class:"block"},Ae={style:{display:"flex","align-items":"center",width:"100%",gap:"12px"}},Se={style:{"line-height":"32px"}},De=j({__name:"editor",emits:["load"],setup(k,{expose:y,emit:d}){const c=x({loading:!1,list:[],fn(r){c.loading=!0,te({keywords:r}).then(l=>{console.log(l,"===="),c.list=l.list}).finally(()=>{c.loading=!1})}}),b=E(),e=x({name:"",content:"",categoryPid:0,categoryChildId:0,surfacePlot:"",id:0,status:1,celebrityIds:[],introduce:"",popularity:0}),n=x({loading:!1,visible:!1,other:void 0}),u=ge("debounce")(r=>{console.log(e.content==="<p><br></p>"),r&&r.validate(l=>{l&&(n.loading=!0,(e.id?Z(e):ee(e)).then(()=>{var s;D({position:"bottom-right",type:"success",message:(s=n.other)!=null&&s.id?"\u56FE\u6587\u66F4\u65B0\u6210\u529F":"\u56FE\u6587\u65B0\u589E\u6210\u529F"}),d("load"),m()}).finally(()=>{n.loading=!1}))})},300),m=()=>{n.other=void 0,n.visible=!1,e.categoryPid=0,e.categoryChildId=0,c.list=[],e.celebrityIds=[],e.introduce="",e.popularity=0},V={name:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},categoryPid:{required:!0,validator:(r,l,s)=>e.categoryPid||e.categoryChildId?s():s(new Error("\u8BF7\u9009\u62E9\u7C7B\u578B")),trigger:"blur"},surfacePlot:{required:!1,message:"\u8BF7\u8F93\u5165\u5C01\u9762\u5730\u5740",trigger:"blur"},content:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:"blur"}},_=E([]);pe({limit:9999}).then(r=>{_.value=r.list});function g(){var r,l;(r=n.other)!=null&&r.id?(n.loading=!0,le((l=n.other)==null?void 0:l.id).then(s=>{Object.keys(e).forEach(p=>{e[p]=(s==null?void 0:s[p])||e[p]}),c.list=s.Celebrities,e.celebrityIds=s.Celebrities.map(p=>p.id),e.content=e.content.replace(/<([/]?)(article)((:?s*)(:?[^>]*)(:?s*))>/g,"<$1p$3>"),console.log(e,"===")}).finally(()=>{n.loading=!1})):e.id=0}y({open(r){var l;(l=b.value)==null||l.resetFields(),n.visible=!0,n.other=r}});const f=fe(()=>{var r;return(r=n.other)!=null&&r.id?"\u7F16\u8F91\u56FE\u6587":"\u65B0\u589E\u56FE\u6587"});return(r,l)=>{const s=K,p=L,w=de,F=ue,A=P,T=me,q=X,O=M,H=U,J=z;return C(),B("div",xe,[a(H,{"model-value":t(n).visible,"show-close":!t(n).loading,"close-on-press-escape":!1,title:t(f),width:960,"z-index":20,"close-on-click-modal":!1,onClose:m,onOpened:g},{footer:o(()=>[a(A,{class:"ml-auto",size:"small",loading:t(n).loading,onClick:m},{default:o(()=>[h(" \u53D6\u6D88 ")]),_:1},8,["loading"]),a(A,{size:"small",loading:t(n).loading,type:"primary",class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:l[7]||(l[7]=i=>t(u)(t(b)))},{default:o(()=>[h(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[N((C(),B("div",null,[a(O,{ref_key:"ruleFormRef",ref:b,"label-width":"80px",model:t(e),rules:V,"hide-required-asterisk":!1},{default:o(()=>[v("div",Be,[v("div",Ie,[a(p,{label:"\u6807\u9898",prop:"name"},{default:o(()=>[a(s,{spellcheck:"false",modelValue:t(e).name,"onUpdate:modelValue":l[0]||(l[0]=i=>t(e).name=i),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u5206\u7C7B",prop:"categoryPid"},{default:o(()=>[a($,{class:"w-full","model-value":t(e).categoryChildId?[t(e).categoryPid,t(e).categoryChildId]:[t(e).categoryPid],placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B",type:"article",checkStrictly:!0,onChange:l[1]||(l[1]=i=>{t(e).categoryPid=i?i[0]:void 0,t(e).categoryChildId=i?i[1]:0})},null,8,["model-value"])]),_:1}),a(p,{label:"\u4EBA\u7269"},{default:o(()=>[a(F,{modelValue:t(e).celebrityIds,"onUpdate:modelValue":l[2]||(l[2]=i=>t(e).celebrityIds=i),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"\u8BF7\u8F93\u5165\u5F71\u4EBA",class:"w-full","remote-method":t(c).fn,loading:t(c).loading},{default:o(()=>[(C(!0),B(_e,null,he(t(c).list,i=>(C(),I(w,{key:i.id,label:i.chineseName,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])]),_:1})]),v("div",we,[a(p,{label:"\u5C01\u9762",prop:"surfacePlot"},{default:o(()=>[v("div",Ae,[a(s,{spellcheck:"false",modelValue:t(e).surfacePlot,"onUpdate:modelValue":l[3]||(l[3]=i=>t(e).surfacePlot=i),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5C01\u9762\u5730\u5740"},null,8,["modelValue"]),a(T,{class:"avatar-uploader mr-27",action:"/api/v1/upload",title:"\u70B9\u51FB\u4E0A\u4F20\u5C01\u9762\u56FE","show-file-list":!1,data:{exts:"jpg,jpeg,png,gif"},"auto-upload":!0,accept:"image/jpg,image/jpeg,image/png,image/gif","on-success":i=>t(e).surfacePlot=i.path,"on-error":i=>t(D)({position:"bottom-right",type:"error",message:JSON.parse(i.message).message})},{default:o(()=>[a(A,{type:"primary",link:"",disabled:t(e).cycle===2},{default:o(()=>[h("\u4E0A\u4F20")]),_:1},8,["disabled"])]),_:1},8,["on-success","on-error"])])]),_:1}),a(p,{label:"\u6458\u8981"},{default:o(()=>[a(s,{spellcheck:"false",modelValue:t(e).introduce,"onUpdate:modelValue":l[4]||(l[4]=i=>t(e).introduce=i),modelModifiers:{trim:!0},clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6458\u8981"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u4EBA\u6C14"},{default:o(()=>[a(q,{spellcheck:"false",modelValue:t(e).popularity,"onUpdate:modelValue":l[5]||(l[5]=i=>t(e).popularity=i),modelModifiers:{number:!0},clearable:"",precision:0,"step-strictly":"",min:0,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u4EBA\u6C14"},null,8,["modelValue"])]),_:1})])]),a(p,{label:"\u5185\u5BB9",prop:"content"},{default:o(()=>[v("div",Se,[t(n).visible?(C(),I(ae,{key:0,"model-value":t(e).content,"onUpdate:modelValue":l[6]||(l[6]=i=>t(e).content=i==="<p><br></p>"?"":i),height:"400px",style:{"z-index":"9"}},null,8,["model-value"])):ye("",!0)])]),_:1})]),_:1},8,["model"])])),[[J,t(n).loading]])]),_:1},8,["model-value","show-close","title"])])}}});const Pe=R(De,[["__scopeId","data-v-dd43480b"]]),$e=k=>(ve("data-v-ee6d1308"),k=k(),Ce(),k),Le={class:"flex-y box"},Me={class:"flex-x-between search"},Ue={class:"flex-center",style:{gap:"16px","font-size":"12px"}},ze=$e(()=>v("span",{style:{flexShrink:0}},"\u5206\u7C7B",-1)),Re=["onClick"],Ye={key:1},je=j({__name:"index",setup(k){const y=E({pageIndex:1,pageSize:20,total:0}),d=x({loading:!1,data:[],searchVal:{keywords:"",categoryId:0,order:"updateAt desc"},selectList:[],load(n){y.value=n||y.value,d.loading=!0,ne({page:y.value.pageIndex,limit:y.value.pageSize,...d.searchVal}).then(u=>{d.data=u.list,y.value.total=u.total}).finally(()=>{d.loading=!1})},handleSelectionChange(n){d.selectList=n},sortChnage({column:n,prop:u,order:m}){m?d.searchVal.order=`${u} ${m==="ascending"?"asc":"desc"}`:d.searchVal.order="",d.load()}}),c=E(),b=E(),e={del:n=>Y({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",okEms:"\u56FE\u6587\u5220\u9664\u6210\u529F"},()=>se(n).then(u=>(d.load(),u))),search:()=>{y.value.pageIndex=1,d.load()},statusChange(n,u){d.loading||(u.loading=!0,oe(u.id,n).then(()=>{D({position:"bottom-right",type:"success",message:"\u72B6\u6001\u66F4\u65B0\u6210\u529F"})}).catch(()=>{u.status=n===1?2:1}).finally(()=>{u.loading=!1}))}};return be(()=>{d.load()}),(n,u)=>{const m=P,V=Q,_=W,g=Fe("MyImage"),f=G,r=z;return C(),B("div",Le,[v("div",Me,[v("div",null,[a(m,{type:"primary",onClick:u[0]||(u[0]=l=>{var s;return(s=b.value)==null?void 0:s.open({})})},{default:o(()=>[h(" \u65B0\u589E\u56FE\u6587 ")]),_:1}),a(m,{onClick:u[1]||(u[1]=l=>{var s;return(s=c.value)==null?void 0:s.open({})})},{default:o(()=>[h(" \u4E00\u952E\u5220\u9664 ")]),_:1}),a(m,{type:"danger",disabled:d.selectList.length<=0,onClick:u[2]||(u[2]=l=>e.del(d.selectList.map(s=>s.id)))},{default:o(()=>[h(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["disabled"])]),v("div",Ue,[ze,a($,{type:"article",placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B",checkStrictly:!0,onChange:u[3]||(u[3]=l=>{d.searchVal.categoryId=l?l[l.length-1]:void 0,e.search()})}),a(V,{modelValue:d.searchVal.keywords,"onUpdate:modelValue":u[4]||(u[4]=l=>d.searchVal.keywords=l),onChange:e.search},null,8,["modelValue","onChange"])])]),N((C(),I(f,{data:d.data,class:"auto",stripe:!0,onSortChange:d.sortChnage,onSelectionChange:d.handleSelectionChange},{default:o(()=>[a(_,{type:"selection",width:"55"}),a(_,{type:"index",label:"\u5E8F\u53F7"},{default:o(({row:l,store:s,$index:p})=>[v("div",{onClick:w=>s.toggleRowSelection(l,void 0)},S(p+1),9,Re)]),_:1}),a(_,{prop:"name",label:"\u540D\u79F0","min-width":"250","show-overflow-tooltip":!0}),a(_,{label:"\u5C01\u9762","min-width":"150"},{default:o(({row:l})=>[l.surfacePlot?(C(),I(g,{key:0,src:l.surfacePlot,style:{width:"50px",height:"30px"}},null,8,["src"])):(C(),B("span",Ye,"-"))]),_:1}),a(_,{label:"\u5206\u7C7B","min-width":"150"},{default:o(({row:l})=>[h(S(l.category?l.category.name:"-")+" "+S(l.categoryChild?"/"+l.categoryChild.name:""),1)]),_:1}),a(_,{prop:"popularity","min-width":"130",label:"\u4EBA\u6C14"}),a(_,{prop:"updateAt",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",width:"150",sortable:""}),a(_,{fixed:"right",label:"\u64CD\u4F5C",align:"right","min-width":"110"},{default:o(({row:l})=>[a(m,{type:"primary",link:"",onClick:s=>{var p;return(p=b.value)==null?void 0:p.open(l)}},{default:o(()=>[h(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),a(m,{type:"danger",link:"",onClick:s=>e.del([l.id])},{default:o(()=>[h(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[r,d.loading]]),a(ie,{pageinfo:y.value,onChange:d.load},null,8,["pageinfo","onChange"]),a(Pe,{ref_key:"editorRef",ref:b,onLoad:d.load},null,8,["onLoad"]),a(Ve,{ref_key:"allDelVueRef",ref:c,onLoad:d.load},null,8,["onLoad"])])}}});const Qe=R(je,[["__scopeId","data-v-ee6d1308"]]);export{Qe as default};
