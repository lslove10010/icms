import{_ as z,e as le,h as P,b as oe,a as ae,d as te,c as N,aC as j,aU as J,O as ke,S as Ve,aR as Ce,v as q,k as xe,f as we,i as ne,l as se,j as ie}from"./entry-38cf4eb3.js";import{E as Le,m as G}from"./message-0cfdae09.js";import{g as $e,e as Ie,v as Re,_ as Se,c as Ee,d as Fe,f as De,h as Te,i as Ae,j as ze,E as Be,a as Ue,b as Ne}from"./setFees-e1d48c7a.js";import{_ as de,f as H,h as Q,g as Me,d as Pe,c as Oe,s as Ke}from"./videoAlbum-44205902.js";import{r as ce,c as W,a as je,b as Ge}from"./detection-355b80b0.js";import{P as re,E as qe,a as He}from"./pagination-a0666c64.js";/* empty css                       */import{Y as E,b as C,o as V,Q as A,R as o,T as e,u as n,a5 as c,M as Qe,am as O,an as K,a as i,c as D,K as M,V as $,O as X,ac as Z,h as Y,ad as ue,F as pe,P as ee}from"./vue-e9f47459.js";/* empty css                          */import{g as Ye,d as Je}from"./wangEditor-c8f3feae.js";import{e as We,_ as Xe,a as Ze}from"./videoList.vue_vue_type_script_setup_true_lang-0c6716f5.js";import"./el-tab-pane-79c9a846.js";import"./el-date-picker-3925286c.js";/* empty css                   */import"./index-98703581.js";const el=v=>(O("data-v-92d2d26b"),v=v(),K(),v),ll=el(()=>i("div",{class:"tips"},[i("h4",null,"\u529F\u80FD\u8BF4\u660E\uFF1A"),i("p",null,"1.\u9009\u62E9\u5B8C\u5168\u5339\u914D\uFF0C\u5219\u540D\u79F0\u4E00\u6837\u7684\u89C6\u9891\u90FD\u4F1A\u8FDB\u884C\u5408\u5E76"),i("p",null,"2.\u6A21\u7CCA\u5339\u914D\u5219\u9700\u8981\u8F93\u5165\u5173\u952E\u5B57\uFF0C\u540D\u79F0\u5305\u542B\u5173\u952E\u5B57\u7684\u89C6\u9891\u90FD\u4F1A\u8FDB\u884C\u5408\u5E76"),i("p",null,"3.\u5206\u7C7B\u662F\u6307\u5B9A\u67D0\u4E2A\u5206\u7C7B\u4E0B\u7684\u89C6\u9891\u8FDB\u884C\u5408\u5E76\uFF0C\u4E0D\u9009\u62E9\u5219\u9ED8\u8BA4\u6240\u6709"),i("p",null,"4.\u8BE5\u64CD\u4F5C\u8017\u8D39\u670D\u52A1\u5668\u8D44\u6E90\u8F83\u5927\uFF0C\u8BF7\u5728\u670D\u52A1\u5668\u7A7A\u95F2\u64CD\u4F5C"),i("p",null,[c("5.\u4E00\u952E\u5408\u5E76\u4EFB\u52A1\u63D0\u4EA4\u540E\uFF0C\u540E\u53F0\u5C06\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C"),i("span",null,"\u8BF7\u52FF\u91CD\u590D\u63D0\u4EA4")])],-1)),ol={__name:"remRepeat",emits:["load"],setup(v,{expose:g,emit:r}){const l=E({loading:!1,visible:!1}),a=C(),f=E({keepType:2,matchType:0,categoryId:void 0,keyword:"",oneKey:!0}),I=le(()=>{a.value.validate((u,d)=>{if(u){l.loading=!0;const x={...f};f.matchType===0&&(x.keyword=""),ce(x).then(b=>{P({position:"bottom-right",type:"success",message:"\u63D0\u4EA4\u5408\u5E76\u6210\u529F"}),r("load"),l.visible=!1}).finally(()=>{l.loading=!1})}})}),F=()=>{var u;l.visible=!1,(u=a.value)==null||u.resetFields()},w=()=>{};return g({open(u){l.visible=!0}}),(u,d)=>{const x=oe,b=H,_=Q,h=ae,L=te,y=N,T=j;return V(),A(T,{"model-value":n(l).visible,"show-close":!n(l).loading,"close-on-press-escape":!1,title:"\u4E00\u952E\u5408\u5E76",width:450,"z-index":20,"close-on-click-modal":!1,onClose:F,onOpened:w},{footer:o(()=>[e(y,{class:"ml-auto",size:"small",loading:n(l).loading,onClick:F},{default:o(()=>[c(" \u53D6\u6D88 ")]),_:1},8,["loading"]),e(y,{class:"ml-auto",size:"small",type:"primary",loading:n(l).loading,onClick:d[4]||(d[4]=t=>n(I)())},{default:o(()=>[c(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[e(L,{ref_key:"ruleFormRef",ref:a,"label-width":"80px",model:n(f),"hide-required-asterisk":!1},{default:o(()=>[e(x,{label:"\u5206\u7C7B",prop:"categoryId"},{default:o(()=>{var t;return[e(de,{class:"w-full","model-value":(t=n(f).categoryId)==null?void 0:t.map(s=>s.childId?[s.parentId,s.childId]:[s.parentId]),placeholder:"\u8BF7\u9009\u62E9\u89C6\u9891\u5206\u7C7B\uFF0C\u4E0D\u9009\u62E9\u5219\u9ED8\u8BA4\u6240\u6709\u5206\u7C7B",type:"videoType",props:{checkStrictly:!0,multiple:!0,emitPath:!0},"onUpdate:modelValue":d[0]||(d[0]=s=>n(f).categoryId=s.map(p=>({childId:p[1]||0,parentId:p[0]})))},null,8,["model-value"])]}),_:1}),e(x,{label:"\u4FDD\u7559ID",prop:"keepType"},{default:o(()=>[e(_,{modelValue:n(f).keepType,"onUpdate:modelValue":d[1]||(d[1]=t=>n(f).keepType=t)},{default:o(()=>[e(b,{label:2},{default:o(()=>[c(" \u4FDD\u7559\u5927ID ")]),_:1}),e(b,{label:1},{default:o(()=>[c(" \u4FDD\u7559\u5C0FID ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(x,{label:"\u5339\u914D\u6A21\u5F0F",prop:"matchType"},{default:o(()=>[e(_,{modelValue:n(f).matchType,"onUpdate:modelValue":d[2]||(d[2]=t=>n(f).matchType=t)},{default:o(()=>[e(b,{label:0},{default:o(()=>[c(" \u5B8C\u5168\u5339\u914D ")]),_:1}),e(b,{label:1},{default:o(()=>[c(" \u6A21\u7CCA\u5339\u914D ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(f).matchType===1?(V(),A(x,{key:0,label:"\u5173\u952E\u5B57",prop:"keyword"},{default:o(()=>[e(h,{modelValue:n(f).keyword,"onUpdate:modelValue":d[3]||(d[3]=t=>n(f).keyword=t),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57",clearable:""},null,8,["modelValue"])]),_:1})):Qe("",!0),ll]),_:1},8,["model"])]),_:1},8,["model-value","show-close"])}}},al=z(ol,[["__scopeId","data-v-92d2d26b"]]);const me=v=>(O("data-v-dbd0de4c"),v=v(),K(),v),tl={class:"merge-dialog-content"},nl={class:"merge-dialog-content-header"},sl=me(()=>i("div",null,"\u4E3B\u5F71\u7247\uFF08\u5355\u9009\uFF09",-1)),il={class:"merge-dialog-content-body"},dl={class:"merge-dialog-content-right"},cl={class:"merge-dialog-content-header"},rl=me(()=>i("div",null," \u5408\u5E76\u5F71\u7247\uFF08\u591A\u9009\uFF09 ",-1)),ul={class:"merge-dialog-content-body"},pl={class:"dialog-footer"},ml={__name:"merge",emits:["load"],setup(v,{expose:g,emit:r}){const l=E({data:[],dialogVisible:!1,loading:!1,mainloading:!1,mergeloading:!1,mainkeyword:"",mergekeyword:"",checkAll:!1,isIndeterminate:!1,maincheckList:[],mergecheckList:[],mainfilmlist:[],mergemovies:[],maintotal:0,mergetotal:0,typevalue:{type:""}}),a=()=>{l.maincheckList.length>1&&l.maincheckList.splice(0,1)},f=(b="all")=>{l.mainfilmlist=l.data,l.mergemovies=l.data,l.maintotal=l.data.length,l.mergetotal=l.data.length};function I(b,_){let h;return function(){const L=this,y=arguments;clearTimeout(h),h=setTimeout(()=>{b.apply(L,y)},_)}}const w=I(b=>{b=="main"?l.mainfilmlist=l.data.filter(_=>_.title.includes(l.mainkeyword)):l.mergemovies=l.data.filter(_=>_.title.includes(l.mergekeyword))},300),u=()=>{l.maincheckList=[],l.mergecheckList=[],l.checkAll=!1,l.isIndeterminate=!1,l.mainkeyword="",l.mergekeyword="",l.mainfilmlist=[],l.mergemovies=[],l.loading=!1,l.mainloading=!1,l.mergeloading=!1,l.dialogVisible=!1},d=()=>{l.mergecheckList.length>0?l.isIndeterminate=!0:l.isIndeterminate=!1,l.mergecheckList.length===l.mergemovies.length?l.checkAll=!0:l.checkAll=!1},x=()=>{if(l.mergecheckList.length<=0||l.maincheckList.length<=0){P({position:"bottom-right",type:"error",message:"\u8BF7\u9009\u62E9\u9700\u8981\u5408\u5E76\u7684\u5F71\u7247"});return}l.loading=!0;let b={oneKey:!1,videoIds:[...l.maincheckList,...l.mergecheckList]};ce(b).then(_=>{P({position:"bottom-right",type:"success",message:"\u63D0\u4EA4\u5408\u5E76\u6210\u529F"}),r("load"),u()}).finally(()=>{l.loading=!1}),console.log(b)};return g({open:b=>{l.data=b,l.dialogVisible=!0}}),(b,_)=>{const h=ae,L=ke,y=Ve,T=Ce,t=N,s=j,p=q;return V(),D("div",null,[e(s,{modelValue:n(l).dialogVisible,"onUpdate:modelValue":_[6]||(_[6]=k=>n(l).dialogVisible=k),title:"\u5408\u5E76",width:"609","before-close":u,onOpen:f},{footer:o(()=>[i("div",pl,[e(t,{onClick:u,loading:n(l).loading,size:"small"},{default:o(()=>[c("\u53D6\u6D88")]),_:1},8,["loading"]),e(t,{type:"primary",onClick:x,loading:n(l).loading,size:"small"},{default:o(()=>[c(" \u786E\u8BA4 ")]),_:1},8,["loading"])])]),default:o(()=>[M((V(),D("div",tl,[M((V(),D("div",null,[i("div",nl,[sl,i("div",null,$(n(l).maincheckList.length)+"/"+$(n(l).maintotal),1)]),i("div",il,[e(h,{modelValue:n(l).mainkeyword,"onUpdate:modelValue":_[0]||(_[0]=k=>n(l).mainkeyword=k),class:"w-240 m-02",style:{height:"32px",width:"240px","background-image":"none"},placeholder:"\u641C\u7D22\u5173\u952E\u5B57",onInput:_[1]||(_[1]=k=>n(w)("main")),"prefix-icon":n(J)},null,8,["modelValue","prefix-icon"]),e(T,{modelValue:n(l).maincheckList,"onUpdate:modelValue":_[2]||(_[2]=k=>n(l).maincheckList=k),onChange:a},{default:o(()=>[e(y,{height:"400px"},{default:o(()=>[(V(!0),D(X,null,Z(n(l).mainfilmlist,k=>(V(),A(L,{label:k.id,disabled:n(l).mergecheckList.includes(k.id)},{default:o(()=>[c($(k.title),1)]),_:2},1032,["label","disabled"]))),256))]),_:1})]),_:1},8,["modelValue"])])])),[[p,n(l).mainloading]]),M((V(),D("div",dl,[i("div",cl,[rl,i("div",null,$(n(l).mergecheckList.length)+"/"+$(n(l).mergetotal),1)]),i("div",ul,[e(h,{modelValue:n(l).mergekeyword,"onUpdate:modelValue":_[3]||(_[3]=k=>n(l).mergekeyword=k),class:"w-240 m-02",style:{height:"32px",width:"240px","background-image":"none"},placeholder:"\u641C\u7D22\u5173\u952E\u5B57","prefix-icon":n(J),onInput:_[4]||(_[4]=k=>n(w)("merge"))},null,8,["modelValue","prefix-icon"]),e(T,{modelValue:n(l).mergecheckList,"onUpdate:modelValue":_[5]||(_[5]=k=>n(l).mergecheckList=k)},{default:o(()=>[e(y,{height:"400px"},{default:o(()=>[(V(!0),D(X,null,Z(n(l).mergemovies,k=>(V(),A(L,{onChange:d,label:k.id,disabled:k.id==n(l).maincheckList[0]},{default:o(()=>[c($(k.title),1)]),_:2},1032,["label","disabled"]))),256))]),_:1})]),_:1},8,["modelValue"])])])),[[p,n(l).mergeloading]])])),[[p,n(l).loading]])]),_:1},8,["modelValue"])])}}},_l=z(ml,[["__scopeId","data-v-dbd0de4c"]]);const _e=v=>(O("data-v-3130b379"),v=v(),K(),v),gl={class:"fli_box"},fl={class:"che_len"},hl=_e(()=>i("span",null,"\u68C0\u6D4B\u957F\u5EA6",-1)),yl=_e(()=>i("div",{class:"tips"},[i("h4",null,"\u529F\u80FD\u8BF4\u660E\uFF1A"),i("p",null,"1.\u68C0\u6D4B\u540D\u79F0\u5B8C\u5168\u91CD\u590D\u7684\u89C6\u9891"),i("p",null,"2.\u68C0\u6D4B\u5206\u7C7B\u4E00\u81F4\u5E76\u4E14\u540D\u79F0\u91CD\u590D\u7684\u89C6\u9891"),i("p",null,"3.\u68C0\u6D4B\u540D\u79F0\u957F\u5EA6\u5B8C\u5168\u91CD\u590D\u7684")],-1)),vl={__name:"samename",emits:["getCheckList"],setup(v,{expose:g,emit:r}){const l=E({dialogVisible:!1,loading:!1}),a=E({duplicationType:0,duplicationLen:1}),f=()=>{},I=()=>{l.dialogVisible=!1},F=()=>{a.duplicationLen||(a.duplicationLen=1)},w=()=>{l.loading=!0,r("getCheckList",a)};return g({open:()=>{l.dialogVisible=!0},close:u=>{u?(l.loading=!1,l.dialogVisible=!1):l.loading=!1}}),(u,d)=>{const x=H,b=Q,_=Le,h=N,L=j;return V(),D("div",null,[e(L,{modelValue:n(l).dialogVisible,"onUpdate:modelValue":d[4]||(d[4]=y=>n(l).dialogVisible=y),"show-close":!n(l).loading,title:"\u540C\u540D\u6570\u636E\u68C0\u6D4B",width:"565","before-close":I,onOpened:f},{footer:o(()=>[e(h,{class:"ml-auto",size:"small",loading:n(l).loading,onClick:I},{default:o(()=>[c(" \u53D6\u6D88 ")]),_:1},8,["loading"]),e(h,{class:"ml-auto",size:"small",type:"primary",loading:n(l).loading,onClick:d[3]||(d[3]=y=>w())},{default:o(()=>[c(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[i("div",gl,[e(b,{modelValue:n(a).duplicationType,"onUpdate:modelValue":d[0]||(d[0]=y=>n(a).duplicationType=y)},{default:o(()=>[e(x,{label:0},{default:o(()=>[c("\u540D\u79F0\u91CD\u590D\u68C0\u6D4B")]),_:1}),e(x,{label:1},{default:o(()=>[c("\u5206\u7C7B+\u540D\u79F0\u91CD\u590D\u68C0\u6D4B")]),_:1})]),_:1},8,["modelValue"]),i("div",fl,[hl,e(_,{min:1,controls:!1,modelValue:n(a).duplicationLen,"onUpdate:modelValue":d[1]||(d[1]=y=>n(a).duplicationLen=y),onBlur:d[2]||(d[2]=y=>F())},null,8,["modelValue"])])]),yl]),_:1},8,["modelValue","show-close"])])}}},bl=z(vl,[["__scopeId","data-v-3130b379"]]);const kl={class:"flex-y box cont",style:{width:"100%"}},Vl={class:"flex-x-between"},Cl={class:"flex-x-center",style:{"align-items":"center",gap:"16px","font-size":"12px"}},xl=["onClick"],wl={key:1},Ll={__name:"video",setup(v){const g=C({pageIndex:1,pageSize:20,total:0}),r=E({value:[],get(){Me().then(t=>{r.value=t})}});r.get();const l=C([]);$e({limit:998}).then(t=>{l.value=t.list}),E([[1,"\u662F"],[2,"\u5426"]]),E([[1,"\u662F"],[2,"\u5426"]]),E([[1,"\u514D\u8D39"],[2,"VIP\u514D\u8D39"],[3,"\u91D1\u5E01\u70B9\u64AD"]]);const a=E({loading:!1,data:[],searchVal:{keywords:"",type:"duplication"},selectList:[],load(t){g.value=t||g.value,a.loading=!0;const s={page:g.value.pageIndex,limit:g.value.pageSize,...a.searchVal};W(s).then(p=>{a.data=p.list,g.value.total=p.total}).finally(()=>{a.loading=!1})},handleSelectionChange(t){a.selectList=t},sortChnage({column:t,prop:s,order:p}){p?a.searchVal.order=`${s} ${p==="ascending"?"asc":"desc"}`:a.searchVal.order="",a.load()}}),f=C(),I=C();C();const F=C(),w=C(),u=C(),d=C(),x=C(),b=C(),_=C(),h=C(),L=C(),y={del:t=>G({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",okEms:"\u5F71\u89C6\u5220\u9664\u6210\u529F"},()=>Pe(t).then(s=>(a.load(),s))),search(){g.value.pageIndex=1,a.load()},batch:(t,s,p,k)=>G({message:`\u786E\u5B9A\u8981${k}\u5417\uFF1F`,okEms:`\u5F71\u89C6${k}\u6210\u529F`},()=>Oe(t,s,p).then(B=>(a.load(),B))),syncImg:t=>{Ke({ids:t}).then(s=>{P({position:"bottom-right",type:"success",message:s||"\u540C\u6B65\u6210\u529F"})})},checkVod:t=>{a.searchVal.type=t,delete a.searchVal.duplicationType,delete a.searchVal.duplicationLen,a.load()}},T=t=>{a.loading=!0,g.value={pageIndex:1,pageSize:20,total:0},a.searchVal.duplicationType=t.duplicationType,a.searchVal.duplicationLen=t.duplicationLen,a.searchVal.type="duplication";const s={page:g.value.pageIndex,limit:g.value.pageSize,type:"duplication",...a.searchVal};W(s).then(p=>{a.data=p.list,g.value.total=p.total,L.value.close(!0)}).finally(()=>{a.loading=!1,L.value.close()})};return Y(()=>{T({duplicationType:"0",duplicationLen:"1"})}),(t,s)=>{const p=N,k=we,B=Be,ge=Ue,fe=Ne,he=ne,S=se,ye=ue("MyImage"),ve=ie,be=q;return V(),D("div",kl,[i("div",Vl,[i("div",null,[e(p,{type:"primary",style:{"margin-left":"16px"},disabled:a.selectList.length<=0,onClick:s[0]||(s[0]=m=>{var R;return(R=h.value)==null?void 0:R.open(a.selectList)})},{default:o(()=>[c(" \u5408\u5E76 ")]),_:1},8,["disabled"]),e(p,{type:"danger",onClick:s[1]||(s[1]=m=>y.del(a.selectList.map(R=>R.id))),disabled:a.selectList.length<=0},{default:o(()=>[c(" \u5220\u9664\u6240\u9009 ")]),_:1},8,["disabled"]),e(fe,{trigger:"hover","hide-on-click":!0,style:{"margin-left":"16px"},"popper-class":"video-top-menu"},{dropdown:o(()=>[e(ge,{style:{width:"120px"}},{default:o(()=>[e(B,{onClick:s[2]||(s[2]=m=>{var R;return(R=L.value)==null?void 0:R.open()})},{default:o(()=>[c(" \u540C\u540D\u6570\u636E ")]),_:1}),e(B,{onClick:s[3]||(s[3]=m=>y.checkVod("line"))},{default:o(()=>[c(" \u65E0\u7EBF\u8DEF\u89C6\u9891 ")]),_:1}),e(B,{onClick:s[4]||(s[4]=m=>y.checkVod("playline"))},{default:o(()=>[c(" \u65E0\u64AD\u653E\u5730\u5740 ")]),_:1}),e(B,{onClick:s[5]||(s[5]=m=>y.checkVod("cover"))},{default:o(()=>[c(" \u65E0\u5C01\u9762\u5730\u5740 ")]),_:1})]),_:1})]),default:o(()=>[e(p,{type:"primary"},{default:o(()=>[c(" \u8D44\u6E90\u68C0\u6D4B "),e(k,{style:{"padding-left":"5px","margin-top":"-3px"}},{default:o(()=>[e(n(xe))]),_:1})]),_:1})]),_:1}),e(p,{type:"primary",style:{"margin-left":"16px"},onClick:s[6]||(s[6]=m=>{var R;return(R=d.value)==null?void 0:R.open()}),disabled:a.searchVal.type!="duplication"},{default:o(()=>[c(" \u4E00\u952E\u5408\u5E76 ")]),_:1},8,["disabled"])]),i("div",Cl,[e(he,{modelValue:a.searchVal.keywords,"onUpdate:modelValue":s[7]||(s[7]=m=>a.searchVal.keywords=m),onChange:y.search},null,8,["modelValue","onChange"])])]),M((V(),A(ve,{data:a.data,class:"auto",stripe:!0,onSortChange:a.sortChnage,onSelectionChange:a.handleSelectionChange},{default:o(()=>[e(S,{type:"selection",width:"25"}),e(S,{prop:"id",label:"ID",width:"80",sortable:""},{default:o(({row:m,store:R})=>[i("div",{onClick:U=>R.toggleRowSelection(m,void 0)},$(m.id),9,xl)]),_:1}),e(S,{label:"\u7F29\u7565\u56FE","min-width":"60"},{default:o(({row:m})=>[m.surfacePlot?(V(),A(ye,{key:0,src:m.surfacePlot,style:{width:"50px",height:"30px"}},null,8,["src"])):(V(),D("span",wl,"-"))]),_:1}),e(S,{prop:"title",label:"\u540D\u79F0","min-width":"150","show-overflow-tooltip":!0}),e(S,{label:"\u5206\u7C7B","min-width":"120"},{default:o(({row:m})=>[c($(m.categoryName)+$(m.childCategoryName?"/"+m.childCategoryName:""),1)]),_:1}),e(S,{prop:"actors",label:"\u4E3B\u6F14",width:"100","show-overflow-tooltip":!0}),e(S,{prop:"doubanScore",label:"\u8BC4\u5206","min-width":"80",sortable:""},{default:o(({row:m})=>[c($(m.doubanScore?m.doubanScore/10:"-"),1)]),_:1}),e(S,{prop:"popularitySum",label:"\u4EBA\u6C14","min-width":"80",sortable:""}),e(S,{prop:"cycle",label:"\u8F6E\u64AD","min-width":"80",sortable:""},{default:o(({row:m})=>[c($(m.cycle===1?"\u662F":"\u5426"),1)]),_:1}),e(S,{prop:"recommend",label:"\u63A8\u8350","min-width":"80",sortable:""},{default:o(({row:m})=>[c($(m.recommend===1?"\u662F":"\u5426"),1)]),_:1}),e(S,{prop:"chargingMode",label:"\u6536\u8D39","min-width":"120",sortable:""},{default:o(({row:m})=>[c($(m.buyMode===1?m.chargingMode===1?"\u6309\u90E8-\u514D\u8D39":m.chargingMode===2?"\u6309\u90E8-VIP\u514D\u8D39":m.chargingMode===3?"\u6309\u90E8-\u91D1\u5E01\u70B9\u64AD":"-":m.buyMode===2?"\u6309\u96C6":"-"),1)]),_:1}),e(S,{prop:"releaseAt",label:"\u4E0A\u6620\u65E5\u671F",type:"day",width:"150",sortable:""}),e(S,{prop:"shelfAt",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",width:"150",sortable:""}),e(S,{fixed:"right",label:"\u64CD\u4F5C",align:"right","min-width":"180"},{default:o(({row:m})=>[e(p,{type:"primary",link:"",onClick:R=>{var U;return(U=I.value)==null?void 0:U.open(m,r.value)}},{default:o(()=>[c(" \u7EBF\u8DEF\u7BA1\u7406 ")]),_:2},1032,["onClick"]),e(p,{type:"primary",link:"",onClick:R=>{var U;return(U=f.value)==null?void 0:U.open(m,r.value)}},{default:o(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(p,{type:"danger",link:"",onClick:R=>y.del([m.id])},{default:o(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[be,a.loading]]),e(re,{pageinfo:g.value,onChange:a.load},null,8,["pageinfo","onChange"]),e(Ie,{ref_key:"editorRef",ref:f,onLoad:a.load},null,8,["onLoad"]),e(Re,{ref_key:"vodLineRef",ref:I,onLoad:a.load},null,8,["onLoad"]),e(Se,{ref_key:"replaceRef",ref:b,onLoad:a.load},null,8,["onLoad"]),e(Ee,{ref_key:"lineRef",ref:w,onLoad:a.load},null,8,["onLoad"]),e(Fe,{ref_key:"setAlbumRef",ref:u,onLoad:a.load},null,8,["onLoad"]),e(De,{ref:"setFeesRef",onLoad:a.load},null,8,["onLoad"]),e(Te,{ref_key:"allDelVueRef",ref:x,onLoad:a.load},null,8,["onLoad"]),e(Ae,{ref_key:"classVueRef",ref:_,onLoad:a.load},null,8,["onLoad"]),e(ze,{ref_key:"batchVueRef",ref:F,onLoad:a.load},null,8,["onLoad"]),e(al,{ref_key:"remRepRef",ref:d,onLoad:a.load},null,8,["onLoad"]),e(_l,{ref_key:"mergeRef",ref:h,onLoad:a.load},null,8,["onLoad"]),e(bl,{ref_key:"samenameRef",ref:L,onGetCheckList:T},null,512)])}}},$l=z(Ll,[["__scopeId","data-v-b6f0dba1"]]);const Il=v=>(O("data-v-68b25c3e"),v=v(),K(),v),Rl=Il(()=>i("div",{class:"tips"},[i("h4",null,"\u529F\u80FD\u8BF4\u660E\uFF1A"),i("p",null,"1.\u9009\u62E9\u5B8C\u5168\u5339\u914D\uFF0C\u5219\u4E2D\u6587\u540D\u4E00\u6837\u7684\u5F71\u4EBA\u90FD\u4F1A\u8FDB\u884C\u5408\u5E76"),i("p",null,"2.\u5206\u7C7B\u662F\u6307\u5B9A\u67D0\u4E2A\u5206\u7C7B\u4E0B\u7684\u5F71\u4EBA\u8FDB\u884C\u5408\u5E76\uFF0C\u4E0D\u9009\u62E9\u5219\u9ED8\u8BA4\u6240\u6709"),i("p",null,"3.\u8BE5\u64CD\u4F5C\u8017\u8D39\u670D\u52A1\u5668\u8D44\u6E90\u8F83\u5927\uFF0C\u8BF7\u5728\u670D\u52A1\u5668\u7A7A\u95F2\u64CD\u4F5C"),i("p",null,[c("4.\u4E00\u952E\u5408\u5E76\u4EFB\u52A1\u63D0\u4EA4\u540E\uFF0C\u540E\u53F0\u5C06\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C"),i("span",null,"\u8BF7\u52FF\u91CD\u590D\u63D0\u4EA4")])],-1)),Sl={__name:"remStarRepeat",emits:["load"],setup(v,{expose:g,emit:r}){const l=E({loading:!1,visible:!1}),a=C(),f=E({keepType:2,categoryId:void 0,oneKey:!0}),I=le(()=>{a.value.validate((u,d)=>{if(u){l.loading=!0;const x={...f};je(x).then(b=>{P({position:"bottom-right",type:"success",message:"\u63D0\u4EA4\u5408\u5E76\u6210\u529F"}),r("load"),l.visible=!1}).finally(()=>{l.loading=!1})}})}),F=()=>{var u;l.visible=!1,(u=a.value)==null||u.resetFields()},w=()=>{};return g({open(u){l.visible=!0}}),(u,d)=>{const x=de,b=oe,_=H,h=Q,L=te,y=N,T=j;return V(),A(T,{"model-value":n(l).visible,"show-close":!n(l).loading,"close-on-press-escape":!1,title:"\u4E00\u952E\u5408\u5E76",width:450,"z-index":20,"close-on-click-modal":!1,onClose:F,onOpened:w},{footer:o(()=>[e(y,{class:"ml-auto",size:"small",loading:n(l).loading,onClick:F},{default:o(()=>[c(" \u53D6\u6D88 ")]),_:1},8,["loading"]),e(y,{class:"ml-auto",size:"small",type:"primary",loading:n(l).loading,onClick:d[2]||(d[2]=t=>n(I)())},{default:o(()=>[c(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:o(()=>[e(L,{ref_key:"ruleFormRef",ref:a,"label-width":"80px",model:n(f),"hide-required-asterisk":!1},{default:o(()=>[e(b,{label:"\u5206\u7C7B",prop:"categoryId"},{default:o(()=>{var t;return[e(x,{class:"w-full","model-value":(t=n(f).categoryId)==null?void 0:t.map(s=>s.childId?[s.parentId,s.childId]:[s.parentId]),placeholder:"\u8BF7\u9009\u62E9\u5F71\u4EBA\u5206\u7C7B\uFF0C\u4E0D\u9009\u62E9\u5219\u9ED8\u8BA4\u6240\u6709\u5206\u7C7B",type:"starType",props:{checkStrictly:!0,multiple:!0,emitPath:!0},"onUpdate:modelValue":d[0]||(d[0]=s=>n(f).categoryId=s.map(p=>({childId:p[1]||0,parentId:p[0]})))},null,8,["model-value"])]}),_:1}),e(b,{label:"\u4FDD\u7559ID",prop:"keepType"},{default:o(()=>[e(h,{modelValue:n(f).keepType,"onUpdate:modelValue":d[1]||(d[1]=t=>n(f).keepType=t)},{default:o(()=>[e(_,{label:2},{default:o(()=>[c(" \u4FDD\u7559\u5927ID ")]),_:1}),e(_,{label:1},{default:o(()=>[c(" \u4FDD\u7559\u5C0FID ")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),Rl]),_:1},8,["model-value","show-close"])}}},El=z(Sl,[["__scopeId","data-v-68b25c3e"]]),Fl=v=>(O("data-v-789b2eea"),v=v(),K(),v),Dl={class:"flex-y box cont"},Tl={class:"flex-x-between"},Al={class:"flex-x-center",style:{"align-items":"center",gap:"16px","font-size":"12px"}},zl=["onClick"],Bl={class:"flex-x-center"},Ul={key:1,class:"icon svg-icon","aria-hidden":"true",style:{width:"50px",height:"38px"}},Nl=Fl(()=>i("use",{"xlink:href":"#icon-morentouxiang1"},null,-1)),Ml=[Nl],Pl=pe({__name:"star",setup(v){const g=C({pageIndex:1,pageSize:20,total:0}),r=E({loading:!1,data:[],searchVal:{keywords:"",order:"updateAt desc",categoryId:void 0,sex:void 0,recommend:void 0,type:"duplication"},selectList:[],load(w){g.value=w||g.value,r.loading=!0;const u={page:g.value.pageIndex,limit:g.value.pageSize,...r.searchVal};(r.searchVal.type?Ge(u):Ye(u)).then(d=>{r.data=d.list,g.value.total=d.total}).finally(()=>{r.loading=!1})},handleSelectionChange(w){r.selectList=w},sortChnage({column:w,prop:u,order:d}){d?r.searchVal.order=`${u} ${d==="ascending"?"asc":"desc"}`:r.searchVal.order="",r.load()}}),l=C(),a=C(),f=C(),I={del:w=>G({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",okEms:"\u5F71\u4EBA\u5220\u9664\u6210\u529F"},()=>Je(w).then(u=>(r.load(),u))),search:()=>{g.value.pageIndex=1,r.load()}},F=C();return Y(()=>{r.load()}),(w,u)=>{const d=N,x=qe,b=He,_=ne,h=se,L=ue("MyImage"),y=ie,T=q;return V(),D("div",Dl,[i("div",Tl,[i("div",null,[e(d,{type:"primary",style:{"margin-left":"16px"},onClick:u[0]||(u[0]=t=>{var s;return(s=f.value)==null?void 0:s.open()})},{default:o(()=>[c(" \u4E00\u952E\u5408\u5E76 ")]),_:1}),e(d,{type:"danger",disabled:r.selectList.length<=0,onClick:u[1]||(u[1]=t=>I.del(r.selectList.map(s=>s.id)))},{default:o(()=>[c(" \u5220\u9664\u6240\u9009 ")]),_:1},8,["disabled"])]),i("div",Al,[e(b,{modelValue:r.searchVal.type,"onUpdate:modelValue":u[2]||(u[2]=t=>r.searchVal.type=t),class:"m-2",placeholder:"\u9009\u62E9\u68C0\u6D4B\u7C7B\u578B",clearable:"",onChange:I.search},{default:o(()=>[e(x,{label:"\u91CD\u590D\u5F71\u4EBA",value:"duplication"}),e(x,{label:"\u65E0\u5934\u50CF",value:"headimg"})]),_:1},8,["modelValue","onChange"]),e(_,{modelValue:r.searchVal.keywords,"onUpdate:modelValue":u[3]||(u[3]=t=>r.searchVal.keywords=t),onChange:I.search},null,8,["modelValue","onChange"])])]),M((V(),A(y,{data:r.data,class:"auto",stripe:!0,onSortChange:r.sortChnage,onSelectionChange:r.handleSelectionChange},{default:o(()=>[e(h,{type:"selection",width:"30"}),e(h,{prop:"id",label:"ID"},{default:o(({row:t,store:s})=>[i("div",{onClick:p=>s.toggleRowSelection(t,void 0)},$(t.id),9,zl)]),_:1}),e(h,{label:"\u5934\u50CF","min-width":"80",align:"center"},{default:o(({row:t})=>[i("div",Bl,[t.headImg?(V(),A(L,{key:0,src:t.headImg,style:{width:"50px",height:"38px"}},null,8,["src"])):(V(),D("svg",Ul,Ml))])]),_:1}),e(h,{prop:"chineseName",label:"\u4E2D\u6587\u540D","min-width":"150","show-overflow-tooltip":!0}),e(h,{label:"\u5206\u7C7B",prop:"categoryName","min-width":"150"},{default:o(({row:t})=>[c($(t.categoryName&&t.categoryName.length>0?t.categoryName.join(","):"-"),1)]),_:1}),e(h,{prop:"englishName",label:"\u82F1\u6587\u540D","min-width":"150","show-overflow-tooltip":!0}),e(h,{prop:"nickName",label:"\u522B\u540D","min-width":"150","show-overflow-tooltip":!0}),e(h,{prop:"video_num",label:"\u4EE3\u8868\u4F5C\u6570\u91CF","min-width":"150"}),e(h,{prop:"popularity",label:"\u4EBA\u6C14","min-width":"100"}),e(h,{prop:"nationality",label:"\u56FD\u7C4D","min-width":"100"}),e(h,{prop:"recommend",label:"\u63A8\u8350","min-width":"80"},{default:o(({row:t})=>[c($(t.recommend===1?"\u662F":"\u5426"),1)]),_:1}),e(h,{prop:"userName",label:"\u6027\u522B","min-width":"50"},{default:o(({row:t})=>[c($(t.sex===1?"\u7537":t.sex===2?"\u5973":"\u672A\u77E5"),1)]),_:1}),e(h,{prop:"updateAt",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",width:"150",sortable:""}),e(h,{fixed:"right",label:"\u64CD\u4F5C",align:"right","min-width":"170"},{default:o(({row:t})=>[e(d,{type:"primary",link:"",onClick:s=>{var p;return(p=F.value)==null?void 0:p.open(t)}},{default:o(()=>[c(" \u89C6\u9891\u7BA1\u7406 ")]),_:2},1032,["onClick"]),e(d,{type:"primary",link:"",onClick:s=>{var p;return(p=a.value)==null?void 0:p.open(t)}},{default:o(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(d,{type:"danger",link:"",onClick:s=>I.del([t.id])},{default:o(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSortChange","onSelectionChange"])),[[T,r.loading]]),e(re,{pageinfo:g.value,onChange:r.load},null,8,["pageinfo","onChange"]),e(We,{ref_key:"editorRef",ref:a,onLoad:r.load},null,8,["onLoad"]),e(Xe,{ref_key:"videoListRef",ref:F,onLoad:r.load},null,8,["onLoad"]),e(Ze,{ref_key:"allDelVueRef",ref:l,onLoad:r.load},null,8,["onLoad"]),e(El,{ref_key:"remStarRepRef",ref:f,onLoad:r.load},null,8,["onLoad"])])}}});const Ol=z(Pl,[["__scopeId","data-v-789b2eea"]]),Kl={class:"content"},jl={class:"common_secondary_tabs_box"},Gl={class:"secondary_tabs"},ql={class:"boxs"},Hl={class:"flex-x-between video-album"},Ql=pe({__name:"index",setup(v){const g=E({type:1}),r=l=>{g.type=l};return C(),Y(()=>{}),(l,a)=>(V(),D("div",Kl,[i("div",jl,[i("div",Gl,[i("section",{class:ee(g.type==1?"secondary_tabs_item active":"secondary_tabs_item")},[i("span",{onClick:a[0]||(a[0]=f=>r(1))},"\u89C6\u9891")],2),i("section",{class:ee(g.type==2?"secondary_tabs_item active":"secondary_tabs_item")},[i("span",{onClick:a[1]||(a[1]=f=>r(2))},"\u5F71\u4EBA")],2)])]),i("div",ql,[i("div",Hl,[g.type===1?(V(),A($l,{key:0})):(V(),A(Ol,{key:1}))])])]))}});const uo=z(Ql,[["__scopeId","data-v-1f5793b9"]]);export{uo as default};
