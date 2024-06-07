import{h as e,R as a,x as t,aH as l,o as s,c as o,w as r,a as i,e as u,d as n,u as d,Q as p,B as c,g as m,I as g,J as v,aj as f,ak as h,aL as b,K as y,f as _,ad as w,A as V,D as k,al as C,am as x,ao as R,b as S,L as I,a3 as z,af as U,t as O,W as j,i as D,O as E,P}from"./.pnpm-9c274078.js";import{b as J,_ as L,a as N}from"./index-e716b57f.js";import{_ as A}from"./empty-6f66e897.js";const $={class:"content"},q=n("span",{style:{"margin-left":"10px"}},"分",-1),K={__name:"update",props:{visible:{type:Boolean,default:()=>!1}},emits:["update:visible","refreshDataList"],setup(V,{expose:k,emit:C}){const x=c(),{$http:R}=x.appContext.config.globalProperties,S=e({form:{},currObj:"add"}),{form:I,currObj:z}=a(S),U=t(null),O=async e=>{e?await U.value.validate((async(e,a)=>{if(e){let e=JSON.parse(JSON.stringify(S.form));"add"!=S.currObj&&(e.id=S.currObj),4!=e.triggerEvent&&(e.autoReplyInterval=0),e.autoReplyInterval&&(e.autoReplyInterval=Number(e.autoReplyInterval)),await R.post("/api/v1/customer/word",e),m({position:"bottom-right",title:"提示",type:"success",message:"操作成功"}),J.dispatch("updateAutoreply"),C("update:visible",!1),C("refreshDataList")}})):(U.value&&U.value.resetFields(),C("update:visible",!1))};return k({init:(e,a)=>{S.form={sort:a+1,status:1},S.currObj=e,"add"!=e&&R.get(`/api/v1/customer/word/${e}`).then((({data:e})=>{S.form={content:e.content,sort:e.sort,triggerEvent:e.triggerEvent,autoReplyInterval:e.autoReplyInterval,status:e.status}}))}}),(e,a)=>{const t=g,c=v,m=f,k=h,C=l,x=b,R=y,S=_,j=w;return s(),o(j,{"model-value":V.visible,"z-index":30,title:"add"==d(z)?"添加自动回复":"编辑自动回复","close-on-click-modal":!1,onClose:a[7]||(a[7]=e=>O(!1)),top:"20vh",width:"450px"},{footer:r((()=>[i(S,{size:"small",type:"default",onClick:a[5]||(a[5]=e=>O(!1))},{default:r((()=>[u("取消")])),_:1}),i(S,{type:"primary",size:"small",onClick:a[6]||(a[6]=e=>O(!0))},{default:r((()=>[u("保存")])),_:1})])),default:r((()=>[n("div",$,[i(R,{model:d(I),ref_key:"ruleFormRef",ref:U,"label-width":"70px"},{default:r((()=>[i(c,{label:"内容",prop:"content",rules:[{required:!0,whitespace:!0,message:"请输入内容",trigger:"blur"}]},{default:r((()=>[i(t,{modelValue:d(I).content,"onUpdate:modelValue":a[0]||(a[0]=e=>d(I).content=e),type:"textarea",rows:6,placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),i(c,{label:"事件",prop:"triggerEvent",rules:[{required:!0,message:"请选择事件",trigger:"change"}]},{default:r((()=>[i(k,{modelValue:d(I).triggerEvent,"onUpdate:modelValue":a[1]||(a[1]=e=>d(I).triggerEvent=e),placeholder:"请选择事件"},{default:r((()=>[i(m,{label:"初次链接",value:1}),i(m,{label:"转接",value:2}),i(m,{label:"服务结束",value:3}),i(m,{label:"自动回复",value:4})])),_:1},8,["modelValue"])])),_:1}),4==d(I).triggerEvent?(s(),o(c,{key:0,prop:"autoReplyInterval",rules:[{required:!0,message:"请输入超时响应时间",trigger:"blur"}],label:"超时时间"},{default:r((()=>[i(t,{modelValue:d(I).autoReplyInterval,"onUpdate:modelValue":a[2]||(a[2]=e=>d(I).autoReplyInterval=e),style:{width:"120px"},oninput:"value=value.replace(/^\\.+|[^\\d]/g,'')"},null,8,["modelValue"]),q])),_:1})):p("",!0),i(c,{label:"序号",prop:"sort"},{default:r((()=>[i(C,{modelValue:d(I).sort,"onUpdate:modelValue":a[3]||(a[3]=e=>d(I).sort=e),min:1,step:1,"step-strictly":"","controls-position":"right"},null,8,["modelValue"])])),_:1}),i(c,{label:"状态",prop:"status"},{default:r((()=>[i(x,{modelValue:d(I).status,"onUpdate:modelValue":a[4]||(a[4]=e=>d(I).status=e),"active-value":1,"inactive-value":2,size:"small"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])])),_:1},8,["model-value","title"])}}},B={class:"container"},F={class:"filter"},H={class:"right"},Q={class:"custom-input"},W=(e=>(E("data-v-59c1ac8b"),e=e(),P(),e))((()=>n("div",{class:"table-empty"},[n("img",{src:A,alt:"空状态"}),n("p",null,"暂无数据")],-1))),G=L({__name:"index",setup(l){const p=V(),v=c(),{$http:f}=v.appContext.config.globalProperties,h=e({loading:!1,status:"",search:"",isUpdate:!1}),{loading:y,status:w,search:E,isUpdate:P}=a(h),J=t(null),L={changeStatus(e,a){f.post("/api/v1/customer/word/status",{ids:[e],status:a}).then((e=>{let{data:a}=e;m({position:"bottom-right",title:"提示",type:"success",message:a||"操作成功"}),p.dispatch("updateAutoreply")}))},update(e){h.isUpdate=!0;let a=JSON.parse(JSON.stringify(e));j((()=>{J.value.init(a,$.total)}))},clickDel(e){D.confirm("确定删除此条数据吗？","确认").then((async()=>{var{data:a}=await f.delete("/api/v1/customer/word",{data:{ids:[e]}});m({position:"bottom-right",title:"提示",type:"success",message:a||"操作成功"}),p.dispatch("updateAutoreply"),A()})).catch((()=>{}))}};k((()=>{A()}));const A=()=>{h.loading=!0;let e={limit:$.pageSize,page:$.currentPage};""!=h.search&&(e.keywords=h.search),f.get("/api/v1/customer/word",{params:e}).then((e=>{let{data:a}=e;$.tableData=a.list,$.total=a.total,h.loading=!1}))},$=e({tableData:[],currentPage:1,pageSize:p.state.pageSize,total:0,multipleSelection:[],order:"",size(e){$.pageSize=e,$.currentPage=1,A()},current(e){$.currentPage=e,A()}}),{total:q,currentPage:G,pageSize:M,tableData:T}=a($);return(e,a)=>{const t=_,l=N,p=g,c=C,m=b,v=x,f=R;return s(),S("div",B,[n("div",F,[i(t,{type:"primary",onClick:a[0]||(a[0]=e=>L.update("add"))},{default:r((()=>[u("新增自动回复")])),_:1}),n("div",H,[n("div",Q,[i(l,{onClick:A,color:"#999",size:"14 px",name:"search"}),i(p,{class:"seachInput",placeholder:"搜索关键字",onKeyup:I(A,["enter","native"]),modelValue:d(E),"onUpdate:modelValue":a[1]||(a[1]=e=>z(E)?E.value=e:null)},null,8,["onKeyup","modelValue"])])])]),U((s(),o(v,{onSortChange:$.sort,"tooltip-effect":"light",height:"78vh",data:d(T),style:{width:"100%"}},{empty:r((()=>[W])),default:r((()=>[i(c,{prop:"sort",align:"left",label:"顺序"}),i(c,{label:"内容","min-width":"100","show-overflow-tooltip":!0,prop:"content"}),i(c,{label:"事件"},{default:r((({row:e})=>[n("span",null,O(["","初次链接","转接","服务结束","自动回复"][e.triggerEvent]),1)])),_:1}),i(c,{label:"状态"},{default:r((({row:e})=>[i(m,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,onChange:a=>L.changeStatus(e.id,e.status),"active-value":1,"inactive-value":2,size:"small"},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(c,{label:"超时时间(分)",formatter:e.$formatter,prop:"autoReplyInterval"},null,8,["formatter"]),i(c,{label:"操作",align:"right"},{default:r((({row:e})=>[i(t,{type:"primary",onClick:a=>L.update(e.id),link:""},{default:r((()=>[u("编辑")])),_:2},1032,["onClick"]),i(t,{type:"danger",onClick:a=>L.clickDel(e.id),link:""},{default:r((()=>[u("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["onSortChange","data"])),[[f,d(y)]]),i(K,{visible:d(P),"onUpdate:visible":a[2]||(a[2]=e=>z(P)?P.value=e:null),ref_key:"updateRef",ref:J,onRefreshDataList:a[3]||(a[3]=e=>A())},null,8,["visible"])])}}},[["__scopeId","data-v-59c1ac8b"]]);export{G as default};