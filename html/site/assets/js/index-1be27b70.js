import{h as N,a as K,b as Z,d as ee,c as W,aC as te,v as Y,_ as M,O as le,a1 as ae,j as ne,l as se,aQ as ie}from"./entry-38cf4eb3.js";import{e as J,a as oe,E as de,m as ue,d as re,b as ce,c as he}from"./message-0cfdae09.js";import{E as me}from"./el-switch-9501e564.js";import{F as X,b as D,Y as R,y as O,i as A,c as x,T as c,R as i,u as b,o as d,a5 as B,K as P,a as g,W as w,Q as $,M as _,G as pe,V as q,a1 as fe,am as ge,an as ye,x as Q,h as ve,O as G,ac as Ce,P as _e}from"./vue-e9f47459.js";const be=X({__name:"editor",emits:["load"],setup(t,{expose:I,emit:C}){const V=O("type");O("allType");const h=D(),o=R({id:0,name:"",parentId:void 0,sort:1,categories:[]}),a=R({loading:!1,visible:!1,other:void 0}),k=O("debounce")(n=>{!n||n.validate((e,s)=>{var p;e&&(a.loading=!0,(o.id?J(V.value,o):oe(V.value,{categories:o.categories,parentId:((p=a.other)==null?void 0:p.parentId)||0})).then(()=>{var F,S,E;const v=(F=a.other)!=null&&F.parentId?"\u5206\u7C7B":"\u7C7B\u578B";N({position:"bottom-right",type:"success",message:(S=a.other)!=null&&S.id?v+"\u66F4\u65B0\u6210\u529F":v+"\u65B0\u589E\u6210\u529F"}),C("load",(E=a.other)==null?void 0:E.id),f()}).finally(()=>{a.loading=!1}))})},300),f=()=>{a.other=void 0,a.visible=!1},m={categories:{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B",trigger:"blur"}};function u(){var n;Object.keys(o).forEach(e=>{var s;o[e]=((s=a.other)==null?void 0:s[e])||o[e]}),o.id=(n=a.other)==null?void 0:n.id,o.sort=a.other.sort||1}I({open(n){var e;(e=h.value)==null||e.resetFields(),a.visible=!0,a.other=n}});const y=A(()=>{var e,s;let n=(e=a.other)!=null&&e.parentId?"\u5206\u7C7B":"\u7C7B\u578B";return(s=a.other)!=null&&s.id?"\u7F16\u8F91"+n:"\u65B0\u589E"+n});return(n,e)=>{const s=K,p=Z,v=ee,F=W,S=te,E=Y;return d(),x("div",null,[c(S,{"model-value":a.visible,"show-close":!a.loading,"close-on-press-escape":!1,title:b(y),width:450,"z-index":20,"close-on-click-modal":!1,onClose:f,class:"not_pb",onOpened:u},{footer:i(()=>[c(F,{class:"ml-auto",size:"small",loading:a.loading,onClick:f},{default:i(()=>[B(" \u53D6\u6D88 ")]),_:1},8,["loading"]),c(F,{size:"small",loading:a.loading,type:"primary",class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:e[2]||(e[2]=U=>b(k)(h.value))},{default:i(()=>[B(" \u4FDD\u5B58 ")]),_:1},8,["loading"])]),default:i(()=>[P((d(),x("div",null,[c(v,{ref_key:"ruleFormRef",ref:h,"label-width":"70px",model:o,rules:m,"hide-required-asterisk":!1},{default:i(()=>{var U;return[c(p,{label:(U=a.other)!=null&&U.parentId?"\u5206\u7C7B\u540D\u79F0":"\u7C7B\u578B\u540D\u79F0",prop:"categories"},{default:i(()=>{var z,j;return[c(s,{spellcheck:"false",clearable:"",class:"input",type:"textarea",rows:10,"model-value":(z=o.categories)==null?void 0:z.join(`
`),"onUpdate:modelValue":e[0]||(e[0]=L=>o.categories=L.split(`
`)),onBlur:e[1]||(e[1]=L=>o.categories=o.categories.filter(l=>l)),placeholder:`\u8BF7\u8F93\u5165${(j=a.other)!=null&&j.parentId?"\u5206\u7C7B":"\u7C7B\u578B"}\u540D\u79F0\uFF0C\u4E00\u884C\u4E00\u4E2A`},null,8,["model-value","placeholder"])]}),_:1},8,["label"])]}),_:1},8,["model"])])),[[E,a.loading]])]),_:1},8,["model-value","show-close","title"])])}}});const xe=M(be,[["__scopeId","data-v-5ee113b4"]]);const ke=t=>(ge("data-v-24067e00"),t=t(),ye(),t),Be={class:"flex-y box"},Ve={class:"flex-x-between"},$e={key:0,style:{"flex-shrink":"0","margin-right":"12px"}},Fe={class:"flex-x",style:{"align-items":"center"}},Ee={key:0,style:{"flex-shrink":"0","margin-right":"12px"}},Ie={class:"flex-x",style:{"align-items":"center"}},Se={key:0,style:{"flex-shrink":"0","margin-right":"12px"}},we={class:"flex-x",style:{"align-items":"center"}},De=ke(()=>g("div",{style:{width:"80px",cursor:"pointer"}},[g("i",{class:"iconfont icon-tishi2",style:{"font-size":"12px",color:"#999","margin-left":"6px"}})],-1)),Re={class:"flex-x",style:{"align-items":"center"}},Ue={class:"flex-x",style:{"align-items":"center","justify-content":"center"}},Le={key:0,style:{"flex-shrink":"0","margin-right":"12px"}},Te=["onClick"],ze={key:0,style:{"flex-shrink":"0","margin-right":"12px","text-align":"left"}},je={__name:"table",props:{isChild:{type:Boolean,default:!1},parent:{type:Object,default:()=>({})},list:{type:Array,default:()=>[]}},emits:["currentChange","load","refresh"],setup(t,{expose:I,emit:C}){const V=t,h=O("type"),o=D(),a=D(),k=D([]);function f(e){k.value=e}const m=()=>{[...V.list].sort((s,p)=>s.sort-p.sort>0?0:-1).forEach((s,p)=>{V.list[p]=s})},u=D(0);function y(){setTimeout(()=>{u.value=document.querySelector("#shrinking_bt").getBoundingClientRect().top-7},0)}const n={saveChange(e,s=!1){if(!e.name){N({position:"bottom-right",type:"error",message:"\u540D\u79F0\u5FC5\u586B"}),e.sort=e.old.sort,e.name=e.old.name;return}J(h.value,e).then(()=>{const p=V.isChild?"\u5206\u7C7B":"\u7C7B\u578B";N({position:"bottom-right",type:"success",message:p+"\u66F4\u65B0\u6210\u529F"}),m(),s&&C("refresh",V.parent.id)}).catch(()=>{e.sort=e.old.sort,e.name=e.old.name})},del:(e,s="single")=>ue({message:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"},()=>(s=="all"?re(h.value,{ids:e}):ce(h.value,e.id)).then(p=>(N({position:"bottom-right",type:"success",message:p}),C("load",V.parent.id),p)))};return I({tableRef:o,setCurrentRow(e){o==null||o.value.setCurrentRow(e)}}),(e,s)=>{var L;const p=W,v=se,F=de,S=K,E=le,U=ae,z=me,j=ne;return d(),x("div",Be,[g("div",Ve,[g("div",null,[c(p,{type:"primary",style:w({marginBottom:t.isChild?"16px":""}),disabled:t.isChild&&!t.parent.id,onClick:s[0]||(s[0]=l=>{var r,T;return(T=a.value)==null?void 0:T.open({parentId:t.isChild?t.parent.id:0,sort:(((r=t.list[t.list.length-1])==null?void 0:r.sort)||0)+1})})},{default:i(()=>[pe(e.$slots,"default",{},()=>[B("\u65B0\u589E\u5206\u7C7B")],!0)]),_:3},8,["style","disabled"]),t.isChild?(d(),$(p,{key:0,type:"danger",style:w({marginBottom:t.isChild?"16px":""}),onClick:s[1]||(s[1]=l=>n.del(k.value.map(r=>r.id),"all")),disabled:((L=k.value)==null?void 0:L.length)<=0},{default:i(()=>[B(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["style","disabled"])):_("",!0)])]),c(j,{ref_key:"tableRef",ref:o,key:"id",data:t.list,stripe:!0,style:w({width:"100%",height:"calc(100vh - 212px)"}),"row-class-name":({row:l})=>t.parent===l?"current-row":"",onSelectionChange:f},{default:i(()=>[t.isChild?(d(),$(v,{key:0,type:"selection",width:"25"})):_("",!0),c(v,{label:"ID",prop:"sort",align:"center",width:t.isChild?"":120},{default:i(({row:l})=>[g("div",{class:"flex-x",style:w({"align-items":"center","justify-content":t.isChild?"center":""})},[t.isChild?_("",!0):(d(),x("span",$e,"ID:")),B(" "+q(l.id),1)],4)]),_:1},8,["width"]),c(v,{label:"\u5E8F\u53F7",prop:"sort",align:"center"},{default:i(({row:l})=>[g("div",Fe,[t.isChild?_("",!0):(d(),x("span",Ee,"\u5E8F\u53F7")),c(F,{spellcheck:"false",style:{width:"320px"},modelValue:l.sort,"onUpdate:modelValue":r=>l.sort=r,clearable:"",precision:0,class:"w-full","step-strictly":"",min:1,"value-on-clear":1,controls:!1,onChange:r=>n.saveChange(l)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1}),c(v,{label:"\u540D\u79F0",prop:"name"},{default:i(({row:l})=>[g("div",Ie,[t.isChild?_("",!0):(d(),x("span",Se,"\u540D\u79F0")),c(S,{spellcheck:"false",style:{width:"320px"},modelValue:l.name,"onUpdate:modelValue":r=>l.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",onChange:r=>n.saveChange(l)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1}),b(h)==1?(d(),$(v,{key:1,label:"\u89C6\u9891\u683C\u5F0F",width:t.isChild?100:120},{default:i(({row:l})=>[g("div",we,[c(E,{modelValue:l.isVertical,"onUpdate:modelValue":r=>l.isVertical=r,onChange:r=>n.saveChange(l,!t.isChild),"true-label":1,"false-label":0,size:"small",label:"\u7AD6\u7248\u89C6\u9891"},null,8,["modelValue","onUpdate:modelValue","onChange"]),t.isChild?_("",!0):(d(),$(U,{key:0,effect:"light",content:"\u7AD6\u7248\u89C6\u9891\u4EC5\u9488\u5BF9APP\u751F\u6548",placement:"top"},{default:i(()=>[De]),_:1}))])]),_:1},8,["width"])):_("",!0),b(h)==3?(d(),$(v,{key:2,label:"\u5185\u5BB9\u683C\u5F0F",width:t.isChild?100:120},{default:i(({row:l})=>[g("div",Re,[c(E,{modelValue:l.isFont,"onUpdate:modelValue":r=>l.isFont=r,onChange:r=>n.saveChange(l,!t.isChild),"true-label":1,"false-label":0,size:"small",label:"\u7EAF\u6587\u5B57"},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1},8,["width"])):_("",!0),c(v,{label:"\u72B6\u6001",align:"center",width:t.isChild?80:130},{default:i(({row:l})=>[g("div",Ue,[t.isChild?_("",!0):(d(),x("span",Le,"\u72B6\u6001")),c(z,{modelValue:l.status,"onUpdate:modelValue":r=>l.status=r,"active-value":1,"inactive-value":2,onChange:r=>n.saveChange(l)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1},8,["width"]),c(v,{width:t.isChild?80:150,label:b(h)===1?"\u89C6\u9891\u6570\u91CF":b(h)===2?"\u5F71\u4EBA\u6570\u91CF":b(h)===3?"\u56FE\u6587\u6570\u91CF":b(h)===4?"\u5C0F\u8BF4\u6570\u91CF":"",prop:"referCount"},{default:i(({row:l})=>[g("span",{class:"w-full typeclass",style:{"align-items":"center"},onClick:r=>t.isChild?"":e.$emit("currentChange",t.parent!==l?l:{})},[t.isChild?_("",!0):(d(),x("span",ze,q(b(h)===1?"\u89C6\u9891\u6570\u91CF":b(h)===2?"\u5F71\u4EBA\u6570\u91CF":b(h)===3?"\u56FE\u6587\u6570\u91CF":b(h)===4?"\u5C0F\u8BF4\u6570\u91CF":"")+":",1)),B(" "+q(l.referCount),1)],8,Te)]),_:1},8,["width","label"]),c(v,{fixed:"right",label:"\u64CD\u4F5C",align:"right",width:t.isChild?80:120},{default:i(({row:l,$index:r})=>[!t.isChild&&t.parent!==l?(d(),$(p,{key:0,type:"primary",link:"",onClick:T=>{e.$emit("currentChange",l),y()}},{default:i(()=>[B(" \u5C55\u5F00 ")]),_:2},1032,["onClick"])):_("",!0),!t.isChild&&t.parent===l?(d(),$(p,{key:1,type:"primary",link:"",onClick:s[2]||(s[2]=T=>e.$emit("currentChange",{})),class:"shrinking",id:"shrinking_bt"},{default:i(()=>[B(" \u6536\u8D77 "),(d(),$(fe,{to:"body"},[g("span",{class:"jiantou",style:w({top:u.value+"px",display:u.value?"block":"none"})},null,4)]))]),_:1})):_("",!0),c(p,{type:"danger",link:"",onClick:T=>n.del(l)},{default:i(()=>[B(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1},8,["width"])]),_:1},8,["data","style","row-class-name"]),c(xe,{ref_key:"editorRef",ref:a,onLoad:s[3]||(s[3]=l=>e.$emit("load",t.parent.id))},null,512)])}}},H=M(je,[["__scopeId","data-v-24067e00"]]),Ne={class:"content"},Oe={class:"common_secondary_tabs_box"},qe={class:"secondary_tabs"},Ae=["onClick"],Pe={class:"boxs"},Me={class:"flex-x-between video-album"},Qe=X({__name:"index",props:{type:{type:String,required:!0}},setup(t){const I=ie(),C=R({type:1,prop:"",tabs:[{title:"\u89C6\u9891\u5206\u7C7B",num:1,type:1},{title:"\u5F71\u4EBA\u5206\u7C7B",num:2,type:1},{title:"\u56FE\u6587\u5206\u7C7B",num:3,type:1},{title:"\u5C0F\u8BF4\u5206\u7C7B",num:4,type:2}]}),V=m=>{C.type=m,m==7&&(C.prop="wx"),m==8&&(C.prop="zfb"),a.load(),f.value={}};Q("type",A(()=>C.type));const h=function(){return{loading:!1,data:[],searchVal:{key:"",order:""},selectList:[],load(m){this.loading=!0,he(C.type,m).then(u=>{u.forEach(y=>y.old={...y}),this.data=u,console.log(this),!m&&!u.find(y=>y.id===f.value.id)&&(f.value={})}).finally(()=>{this.loading=!1})},handleSelectionChange(m){this.selectList=m},sortChnage({column:m,prop:u,order:y}){y?this.searchVal.order=`${u} ${y==="ascending"?"asc":"desc"}`:this.searchVal.order="",this.load()}}},o=D(),a=R(h()),k=R(h()),f=R({value:{},set(m){var u;if(!m){f.value=a.data.find(y=>{var n;return y.id===((n=f.value)==null?void 0:n.id)})||a.data[0],(u=o.value)==null||u.setCurrentRow(f.value);return}f.value!==m&&(f.value=m,k.load(m.id))}});return Q("allType",A(()=>a.data)),ve(async()=>{I.siteInfo.type==2&&(C.type=4),a.load()}),(m,u)=>{const y=Y;return d(),x("div",Ne,[g("div",Oe,[g("div",qe,[(d(!0),x(G,null,Ce(C.tabs,(n,e)=>(d(),x(G,null,[n.type==b(I).siteInfo.type?(d(),x("section",{key:e,class:_e(C.type==n.num?"secondary_tabs_item active":"secondary_tabs_item")},[g("span",{onClick:s=>V(n.num)},q(n.title),9,Ae)],2)):_("",!0)],64))),256))])]),g("div",Pe,[g("div",Me,[P((d(),$(H,{ref_key:"listRef",ref:o,list:a.data,style:{flex:"1"},class:"parent car",parent:f.value,onCurrentChange:f.set,onLoad:u[0]||(u[0]=()=>a.load()),onRefresh:u[1]||(u[1]=n=>k.load(n))},{default:i(()=>[B(" \u65B0\u589E\u7C7B\u578B ")]),_:1},8,["list","parent","onCurrentChange"])),[[y,a.loading]]),g("div",{class:"car",style:w({width:f.value.id?"34vw":"0",transition:"all 0.2s",overflow:"hidden"})},[P((d(),$(H,{parent:f.value,list:k.data,"is-child":!0,onLoad:u[2]||(u[2]=n=>k.load(n))},{default:i(()=>[B(" \u65B0\u589E\u5206\u7C7B ")]),_:1},8,["parent","list"])),[[y,k.loading]])],4)])])])}}});const Ye=M(Qe,[["__scopeId","data-v-f9487ec0"]]);export{Ye as default};
