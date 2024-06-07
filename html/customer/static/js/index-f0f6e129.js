import{A as e,h as a,x as l,R as t,$ as s,o,c as i,w as r,a as d,e as n,d as u,u as p,a5 as c,Q as m,b as g,S as f,T as h,B as v,g as b,G as y,J as _,I as k,aj as w,ak as V,aL as C,K as z,f as S,ad as x,y as L,D as I,af as U,t as N,i as P,al as D,am as $,an as j,ao as O,a3 as q,L as A,q as F,W as R,O as J,P as K}from"./.pnpm-9c274078.js";import{_ as M,d as B,p as E,a as G}from"./index-e716b57f.js";import{_ as Q}from"./empty-6f66e897.js";import{M as T}from"./mesList-6e63e858.js";const W={class:"content"},Z=M({__name:"update",props:{visible:{type:Boolean,default:()=>!1}},emits:["update:visible","refreshDataList"],setup(L,{expose:I,emit:U}){const N=e(),P=v(),{$http:D}=P.appContext.config.globalProperties,$=a({form:{},siteList:[],currObj:"add",options:[],rules:{confirmPassword:[{trigger:"blur",validator:(e,a,l)=>a&&a!=$.form.password?l(new Error("两次密码不一致")):l()}]}}),j=l(null),O={open(){j.value.click()},click(e){const a=e.target.files[0];if(!a)return;let l=new FormData;l.append("file",a),j.value=null,D.post("/api/v1/customer/upload/img",l).then((({data:e})=>{let a=B.getSession("csApi")||N.getters.api;$.form.headImg=a+e})).catch((e=>{b({position:"bottom-right",title:"提示",type:"error",message:"上传失败"})}))}},{form:q,currObj:A,options:F,rules:R}=t($),J=l(null),K=async e=>{e?await J.value.validate((async(e,a)=>{if(e){let e=JSON.parse(JSON.stringify($.form));"add"!=$.currObj&&(e.id=$.currObj),e.password&&(e.password=y.exports(e.password)),e.confirmPassword&&(e.confirmPassword=y.exports(e.confirmPassword)),1===$.form.role&&$.form.customSite?e.site_ids=e.site_ids.join(","):e.site_ids="",delete e.customSite,e.headImg=e.headImg||void 0,e.nickName=e.nickName||void 0,await D.post("/api/v1/customer/user",e),b({position:"bottom-right",title:"提示",type:"success",message:"操作成功"}),U("update:visible",!1),U("refreshDataList")}})):(J.value&&J.value.resetFields(),U("update:visible",!1))};return I({init:e=>{$.form={status:1,labels:[]},$.currObj=e,D.get("/api/v1/customer/site",{params:{limit:9999}}).then((e=>{$.siteList=e.data.list})),D.get("/api/v1/customer/labels",{params:{limit:500,page:1}}).then((({data:e})=>{$.options=e.list})),"add"!=e&&D.get(`/api/v1/customer/user/${e}`).then((({data:e})=>{$.form={headImg:e.headImg,sort:e.sort,nickName:e.nickName,status:e.status,userName:e.userName,labels:e.labels,role:e.role,site_ids:e.site_ids?e.site_ids.split(","):[],customSite:!!e.site_ids}}))}}),(e,a)=>{const l=s,t=_,v=k,b=w,y=V,I=C,U=z,N=S,P=x;return o(),i(P,{"model-value":L.visible,"z-index":30,title:"add"==p(A)?"添加客服":"编辑客服","close-on-click-modal":!1,onClose:a[14]||(a[14]=e=>K(!1)),top:"20vh",width:"450px"},{footer:r((()=>[d(N,{size:"small",type:"default",onClick:a[12]||(a[12]=e=>K(!1))},{default:r((()=>[n("取消")])),_:1}),d(N,{type:"primary",size:"small",onClick:a[13]||(a[13]=e=>K(!0))},{default:r((()=>[n("保存")])),_:1})])),default:r((()=>[u("div",W,[d(U,{model:p(q),ref_key:"ruleFormRef",ref:J,rules:p(R),"label-width":"74px"},{default:r((()=>[d(t,{style:{"align-items":"center"},label:"头像"},{default:r((()=>[d(l,{icon:p(c),style:{cursor:"pointer"},size:45,onClick:a[0]||(a[0]=e=>O.open()),src:p(q).headImg},null,8,["icon","src"]),u("input",{ref_key:"uploadInput",ref:j,style:{display:"none"},type:"file",accept:".jpg, .jpeg, .png",onChange:a[1]||(a[1]=(...e)=>O.click&&O.click(...e))},null,544)])),_:1}),d(t,{label:"头像地址"},{default:r((()=>[d(v,{modelValue:p(q).headImg,"onUpdate:modelValue":a[2]||(a[2]=e=>p(q).headImg=e),placeholder:"请输入头像地址"},null,8,["modelValue"])])),_:1}),d(t,{label:"用户名",prop:"userName",rules:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度为3～15个字符",trigger:"change"},{pattern:/[0-9|A-Z|a-z]{3,15}$/,message:"仅支持数字、字母组合",trigger:"change"}]},{default:r((()=>[d(v,{modelValue:p(q).userName,"onUpdate:modelValue":a[3]||(a[3]=e=>p(q).userName=e),disabled:"add"!=p(A),placeholder:"请输入用户名"},null,8,["modelValue","disabled"])])),_:1}),d(t,{label:"昵称"},{default:r((()=>[d(v,{modelValue:p(q).nickName,"onUpdate:modelValue":a[4]||(a[4]=e=>p(q).nickName=e),placeholder:"请输入昵称"},null,8,["modelValue"])])),_:1}),d(t,{label:"密码",prop:"password",rules:[{required:"add"==p(A),whitespace:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度为6～20个字符",trigger:"blur"}]},{default:r((()=>[d(v,{modelValue:p(q).password,"onUpdate:modelValue":a[5]||(a[5]=e=>p(q).password=e),type:"password","show-password":"",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1},8,["rules"]),d(t,{label:"确认密码",prop:"confirmPassword",rules:{required:"add"==p(A)||!!p(q).password,message:"请输入确认密码"}},{default:r((()=>[d(v,{modelValue:p(q).confirmPassword,"onUpdate:modelValue":a[6]||(a[6]=e=>p(q).confirmPassword=e),type:"password","show-password":"",placeholder:"请输入确认密码"},null,8,["modelValue"])])),_:1},8,["rules"]),d(t,{label:"角色",prop:"role",rules:[{required:!0,message:"请选择角色",trigger:"change"}]},{default:r((()=>[d(y,{modelValue:p(q).role,"onUpdate:modelValue":a[7]||(a[7]=e=>p(q).role=e),disabled:"add"!=p(A),placeholder:"请选择角色",style:{width:"100%"}},{default:r((()=>[d(b,{label:"客服",value:1}),d(b,{label:"审查",value:3})])),_:1},8,["modelValue","disabled"])])),_:1}),1===p(q).role?(o(),i(t,{key:0,label:"自定义站点"},{default:r((()=>[d(I,{modelValue:p(q).customSite,"onUpdate:modelValue":a[8]||(a[8]=e=>p(q).customSite=e)},null,8,["modelValue"])])),_:1})):m("",!0),1===p(q).role&&p(q).customSite?(o(),i(t,{key:1,label:"所属站点",prop:"site_ids",rules:[{required:!0,message:"请选择站点",trigger:"change"}]},{default:r((()=>[d(y,{modelValue:p(q).site_ids,"onUpdate:modelValue":a[9]||(a[9]=e=>p(q).site_ids=e),multiple:"",placeholder:"选择站点",style:{width:"100%"}},{default:r((()=>[(o(!0),g(f,null,h($.siteList,(e=>(o(),i(b,{key:e.id,label:e.name,value:e.id+""},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):m("",!0),d(t,{label:"标签"},{default:r((()=>[d(y,{modelValue:p(q).labels,"onUpdate:modelValue":a[10]||(a[10]=e=>p(q).labels=e),teleported:!1,style:{width:"100%"},multiple:"",filterable:"","allow-create":"","default-first-option":"","reserve-keyword":!1,placeholder:"输入可多选"},{default:r((()=>[(o(!0),g(f,null,h(p(F),(e=>(o(),i(b,{key:e.id,label:e.title,value:e.title},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"状态"},{default:r((()=>[d(I,{modelValue:p(q).status,"onUpdate:modelValue":a[11]||(a[11]=e=>p(q).status=e),"active-value":1,"inactive-value":2,size:"small"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["model-value","title"])}}},[["__scopeId","data-v-6bd84e2a"]]),H={class:"container",style:{height:"100%",padding:"0"}},X=u("div",{class:"table-empty"},[u("img",{src:Q,alt:"空状态"}),u("p",null,"暂无数据")],-1),Y={class:"pagination"},ee={__name:"index",setup(s){const c=L().meta.exam,f=e(),h=v(),{$http:y}=h.appContext.config.globalProperties,w=l(),V=a({form:{},visible:!1,loading:!1,open(e={}){var a;V.form={...e},V.visible=!0,null==(a=w.value)||a.resetFields()},formValidate(){w.value.validate((async e=>{var a,l,t;if(e){V.loading=!0;const e={title:null==(a=V.form)?void 0:a.title,id:null==(l=V.form)?void 0:l.id};var{data:s}=await y[(null==(t=V.form)?void 0:t.id)?"put":"post"]("/api/v1/customer/labels",e);b({position:"bottom-right",title:"提示",type:"success",message:s||"操作成功"}),V.visible=!1,R()}}))}}),C=a({loading:!1,search:"",status:""}),{loading:q,status:A,search:F}=t(C);I((()=>{R()}));const R=()=>{C.loading=!0;let e={limit:J.pageSize,page:J.currentPage};if(""!=C.search&&(e.keywords=C.search),J.order){let a=J.order.split(",");e.orderName=a[0],e.orderSerial=a[1]}y.get("/api/v1/customer/labels",{params:e}).then((e=>{let{data:a}=e;J.tableData=a.list,J.total=a.total,C.loading=!1}))},J=a({tableData:[],currentPage:1,pageSize:f.state.pageSize,total:0,multipleSelection:[],order:"",size(e){J.pageSize=e,J.currentPage=1,R()},current(e){J.currentPage=e,R()},sort(e){const{prop:a,order:l}=e;J.order=a&&l?`${a},${"descending"==l?"desc":"asc"}`:"",R()}}),{total:K,currentPage:M,pageSize:B,tableData:G}=t(J);return(e,a)=>{var l;const t=S,s=D,h=$,v=j,L=k,I=_,A=z,F=x,Q=O;return o(),g("div",H,[p(c)?m("",!0):(o(),i(t,{key:0,type:"primary",style:{"margin-bottom":"16px"},onClick:a[0]||(a[0]=e=>V.open())},{default:r((()=>[n("新增标签")])),_:1})),U((o(),i(h,{onSortChange:J.sort,"tooltip-effect":"light",height:"45vh",data:p(G),style:{width:"100%"}},{empty:r((()=>[X])),default:r((()=>[d(s,{prop:"id",sortable:"","min-width":"100",align:"left",label:"ID"}),d(s,{label:"客服标签 ",prop:"title",formatter:e.$formatter},null,8,["formatter"]),d(s,{label:"标签人数 ",prop:"userCount",formatter:e.$formatter},null,8,["formatter"]),d(s,{label:"添加时间",sortable:"",prop:"createAt"},{default:r((({row:e})=>[u("span",null,N(p(E)(e.createAt)||"-"),1)])),_:1}),p(c)?m("",!0):(o(),i(s,{key:0,prop:"location",label:"操作",align:"right"},{default:r((({row:e})=>[d(t,{type:"primary",onClick:a=>V.open(e),link:""},{default:r((()=>[n("编辑")])),_:2},1032,["onClick"]),d(t,{type:"danger",onClick:a=>{return l=e.id,void P.confirm("确定删除此标签吗？","确认").then((async()=>{var{data:e}=await y.delete("/api/v1/customer/labels",{data:{ids:[l]}});b({position:"bottom-right",title:"提示",type:"success",message:e||"操作成功"}),R()})).catch((()=>{}));var l},link:""},{default:r((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1}))])),_:1},8,["onSortChange","data"])),[[Q,p(q)]]),u("div",Y,[d(v,{onSizeChange:J.size,small:"",onCurrentChange:J.current,"current-page":p(M),"page-sizes":p(f).state.pageSizes,"page-size":p(B),layout:"total, prev, pager, next,sizes, jumper",total:p(K)},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])]),d(F,{modelValue:V.visible,"onUpdate:modelValue":a[3]||(a[3]=e=>V.visible=e),"z-index":30,title:(null==(l=V.form)?void 0:l.id)?"编辑标签":"新增标签","close-on-click-modal":!1,top:"25vh",width:"450px"},{footer:r((()=>[d(t,{class:"ml-auto",size:"small",loading:C.loading,onClick:a[2]||(a[2]=e=>V.visible=!1)},{default:r((()=>[n(" 取消 ")])),_:1},8,["loading"]),d(t,{size:"small",loading:C.loading,type:"primary",class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:V.formValidate},{default:r((()=>[n(" 保存 ")])),_:1},8,["loading","onClick"])])),default:r((()=>[d(A,{ref_key:"ruleFormRef",ref:w,"label-width":"80px",model:V.form,rules:e.rules,"hide-required-asterisk":!1,class:"flex-x-between"},{default:r((()=>[d(I,{label:"标签名称",prop:"title",rules:{required:!0,message:"请输入标签名称"}},{default:r((()=>[d(L,{modelValue:V.form.title,"onUpdate:modelValue":a[1]||(a[1]=e=>V.form.title=e),modelModifiers:{trim:!0},clearable:"",placeholder:"请输入标签名称,示例:注册"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}},ae=e=>(J("data-v-56207156"),e=e(),K(),e),le={class:"container"},te={class:"filter",style:{height:"auto"}},se={class:"right",style:{"margin-left":"auto"}},oe={class:"search-item"},ie=ae((()=>u("span",null,"启用状态",-1))),re={class:"custom-input"},de=ae((()=>u("div",{class:"table-empty"},[u("img",{src:Q,alt:"空状态"}),u("p",null,"暂无数据")],-1))),ne={key:0},ue={key:1},pe={class:"label"},ce={key:0},me={key:0},ge={class:"statusMap"},fe={key:1},he={class:"pagination"},ve=M({__name:"index",setup(s){const c=L().meta.exam,y=e(),_=v(),{$http:z}=_.appContext.config.globalProperties,J=l(!1),K=a({loading:!1,status:"",search:"",isUpdate:!1}),{loading:M,status:B,search:Q,isUpdate:W}=t(K),H=l(null),X={changeStatus(e,a,l){z.post("/api/v1/customer/user/status",{ids:[e],status:a}).then((e=>{let{data:a}=e;b({position:"bottom-right",title:"提示",type:"success",message:a||"操作成功"}),ve()})).catch((()=>{l.status=1===a?2:1}))},update(e){K.isUpdate=!0;let a=JSON.parse(JSON.stringify(e));R((()=>{H.value.init(a)}))},clickDel(e){P.confirm("确定删除此条数据吗？","确认").then((async()=>{var{data:a}=await z.delete("/api/v1/customer/user",{data:{ids:[e]}});b({position:"bottom-right",title:"提示",type:"success",message:a||"操作成功"}),ve()})).catch((()=>{}))}},Y=l(),ae=a({visible:!1,data:[],loading:!1,client:{},chatList:[],consultId:[],consultIdLoading:!1,consultListVisi:!1,cus:{},getConsultId(e){ae.cus=e,ae.consultIdLoading=!0,ae.consultListVisi=!0,z.get("/api/v1/customer/customer/online/slave_consult_latest",{params:{slaveId:e.uuid}}).then((({data:e})=>{ae.consultId=e,ae.consultListVisi=!0})).catch((()=>{ae.consultListVisi=!1})).finally((()=>{ae.consultIdLoading=!1}))},get:async e=>{var a;(null==(a=Y.value)?void 0:a.page)&&(Y.value.page=1),e.mesList=[],e.queryRole=1,ae.chatList=e.consultId.map((a=>({...e,consultId:a}))),ae.client=e,ae.visible=!0}});I((()=>{ve()}));const ve=()=>{K.loading=!0;let e={limit:be.pageSize,page:be.currentPage};if(K.status&&(e.status=K.status),""!=K.search&&(e.keywords=K.search),be.order){let a=be.order.split(",");e.orderName=a[0],e.orderSerial=a[1]}z.get("/api/v1/customer/user/list",{params:e}).then((({data:e})=>{be.tableData=e.list,be.total=e.total,K.loading=!1}))},be=a({tableData:[],currentPage:1,pageSize:y.state.pageSize,total:0,multipleSelection:[],order:"",size(e){be.pageSize=e,be.currentPage=1,ve()},current(e){be.currentPage=e,ve()},sort(e){const{prop:a,order:l}=e;be.order=a&&l?`${a},${"descending"==l?"desc":"asc"}`:"",ve()}}),{total:ye,currentPage:_e,pageSize:ke,tableData:we}=t(be);return(e,a)=>{const l=S,t=w,s=V,v=G,b=k,_=D,z=C,L=$,I=j,P=x,R=O;return o(),g("div",le,[u("div",te,[p(c)?m("",!0):(o(),i(l,{key:0,type:"primary",onClick:a[0]||(a[0]=e=>X.update("add"))},{default:r((()=>[n("新增客服")])),_:1})),p(c)?m("",!0):(o(),i(l,{key:1,type:"primary",style:{"margin-right":"auto"},onClick:a[1]||(a[1]=e=>J.value=!0)},{default:r((()=>[n("标签管理")])),_:1})),u("div",se,[u("div",oe,[ie,d(s,{modelValue:p(B),"onUpdate:modelValue":a[2]||(a[2]=e=>q(B)?B.value=e:null),onChange:ve,clearable:"",placeholder:"选择启用状态"},{default:r((()=>[d(t,{label:"开启",value:1}),d(t,{label:"关闭",value:2})])),_:1},8,["modelValue"])]),u("div",re,[d(v,{onClick:ve,color:"#999",size:"14 px",name:"search"}),d(b,{class:"seachInput",placeholder:"搜索关键字",onKeyup:A(ve,["enter","native"]),modelValue:p(Q),"onUpdate:modelValue":a[3]||(a[3]=e=>q(Q)?Q.value=e:null)},null,8,["onKeyup","modelValue"])])])]),U((o(),i(L,{onSortChange:be.sort,"tooltip-effect":"light",height:p(c)?"calc(100vh - 590px)":"77vh",data:p(we),style:{width:"100%"}},{empty:r((()=>[de])),default:r((()=>[d(_,{prop:"id",sortable:"",align:"left",label:"ID"}),d(_,{label:"用户名",prop:"userName",formatter:e.$formatter,"show-overflow-tooltip":!0},null,8,["formatter"]),d(_,{label:"昵称",prop:"nickName",formatter:e.$formatter},null,8,["formatter"]),d(_,{label:"角色"},{default:r((({row:e})=>[u("span",null,N(["","客服","超管","审查"][e.role]),1)])),_:1}),d(_,{label:"标签","show-overflow-tooltip":!0},{default:r((({row:e})=>[e.labels&&0!==e.labels.length?(o(),g("p",ue,[(o(!0),g(f,null,h(e.labels.map((e=>e.title)),((e,a)=>(o(),g("span",pe,[a>0?(o(),g("span",ce,"  |   ")):m("",!0),n(N(e),1)])))),256))])):(o(),g("span",ne,"-"))])),_:1}),d(_,{label:"状态",prop:"webName",width:"70px"},{default:r((({row:e})=>[p(c)?(o(),g("span",me,N(1===e.status?"开启":"关闭"),1)):(o(),i(z,{key:1,modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,onChange:a=>X.changeStatus(e.id,e.status,e),"active-value":1,"inactive-value":2,size:"small"},null,8,["modelValue","onUpdate:modelValue","onChange"]))])),_:1}),d(_,{label:"登录IP",prop:"lastLoginIp",formatter:e.$formatter,width:"120px"},null,8,["formatter"]),d(_,{label:"所在地",prop:"location",formatter:e.$formatter},null,8,["formatter"]),d(_,{label:"登录时间",prop:"lastLoginAt",width:"150",sortable:""},{default:r((({row:e})=>[u("span",null,N(e.lastLoginAt?p(E)(e.lastLoginAt):"-"),1)])),_:1}),d(_,{label:"当前状态"},{default:r((({row:e})=>[u("div",ge,[u("span",{class:"tags",style:F({"background-color":e.chatStatus?"#1890FF":"#D9D9D9"})},null,4),u("span",{style:F({color:e.chatStatus?"":"#999"})},N(e.chatStatus?"在线":"不在线"),5)])])),_:1}),d(_,{label:"操作",align:"right",width:p(c)?"80":"210"},{default:r((({row:e})=>[3!=e.role?(o(),i(l,{key:0,type:"primary",onClick:a=>ae.getConsultId(e),link:""},{default:r((()=>[n(" 聊天记录")])),_:2},1032,["onClick"])):p(c)?(o(),g("span",fe,"-")):m("",!0),p(c)?m("",!0):(o(),i(l,{key:2,type:"primary",onClick:a=>X.update(e.id),link:""},{default:r((()=>[n("编辑")])),_:2},1032,["onClick"])),p(c)?m("",!0):(o(),i(l,{key:3,type:"danger",onClick:a=>X.clickDel(e.id),link:""},{default:r((()=>[n("删除")])),_:2},1032,["onClick"]))])),_:1},8,["width"])])),_:1},8,["onSortChange","height","data"])),[[R,p(M)]]),u("div",he,[d(I,{onSizeChange:be.size,small:"",onCurrentChange:be.current,"current-page":p(_e),"page-sizes":p(y).state.pageSizes,"page-size":p(ke),layout:"total, prev, pager, next,sizes, jumper",total:p(ye)},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])]),d(Z,{visible:p(W),"onUpdate:visible":a[4]||(a[4]=e=>q(W)?W.value=e:null),ref_key:"updateRef",ref:H,onRefreshDataList:a[5]||(a[5]=e=>ve())},null,8,["visible"]),d(P,{modelValue:J.value,"onUpdate:modelValue":a[6]||(a[6]=e=>J.value=e),"z-index":30,title:"标签管理","close-on-click-modal":!1,top:"10vh",width:"65vw",onClose:a[7]||(a[7]=e=>ve())},{default:r((()=>[d(ee)])),_:1},8,["modelValue"]),d(P,{modelValue:ae.consultListVisi,"onUpdate:modelValue":a[9]||(a[9]=e=>ae.consultListVisi=e),title:ae.cus.userName+"的聊天列表",width:"880px","append-to-body":!0,"close-on-click-modal":!1},{default:r((()=>{var e,t;return[U((o(),i(L,{"tooltip-effect":"light",height:"55vh",data:ae.consultId,style:{width:"100%"}},{default:r((()=>[d(_,{prop:"masterUsername",label:"用户"}),d(_,{prop:"username",label:"操作",align:"right"},{default:r((({row:e})=>[d(l,{type:"primary",onClick:a=>ae.get(e),link:""},{default:r((()=>[n(" 查看")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[R,ae.consultIdLoading]]),d(P,{modelValue:ae.visible,"onUpdate:modelValue":a[8]||(a[8]=e=>ae.visible=e),title:((null==(e=ae.client)?void 0:e.masterNickname)||(null==(t=ae.client)?void 0:t.masterUsername))+"的聊天记录","destroy-on-close":"",width:"880px","close-on-click-modal":!1},{default:r((()=>[U(d(T,{ref_key:"messageList",ref:Y,style:{height:"45vh"},class:"dis-list",client:ae.client,chatList:ae.chatList,slaveId:!1},null,8,["client","chatList"]),[[R,ae.loading]])])),_:1},8,["modelValue","title"])]})),_:1},8,["modelValue","title"])])}}},[["__scopeId","data-v-56207156"]]);export{ve as default};
