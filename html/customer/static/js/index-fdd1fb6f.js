import{A as a,h as e,R as t,x as l,D as s,al as i,am as o,ao as r,o as n,b as p,d,a as c,w as u,e as f,L as m,u as g,a3 as h,af as b,c as v,t as y,B as _,W as k,i as w,g as S,f as C,I as z,O as D,P}from"./.pnpm-9c274078.js";import{_ as x,a as j}from"./index-e716b57f.js";import{_ as U}from"./empty-6f66e897.js";import{_ as L}from"./update-8ac83b51.js";import"./tiny-d6f4af2f.js";const I={class:"container"},O={class:"filter"},R={class:"right"},V={class:"custom-input"},q=(a=>(D("data-v-bffb8766"),a=a(),P(),a))((()=>d("div",{class:"table-empty"},[d("img",{src:U,alt:"空状态"}),d("p",null,"暂无数据")],-1))),H=["innerHTML"],J=x({__name:"index",setup(D){const P=a(),x=_(),{$http:U}=x.appContext.config.globalProperties,J=e({loading:!1,search:"",isUpdate:!1}),{loading:K,search:M,isUpdate:N}=t(J),T=l(null),$={update(a){J.isUpdate=!0;let e=JSON.parse(JSON.stringify(a));k((()=>{T.value.init(e,B.total)}))},clickDel(a){w.confirm("确定删除此条数据吗？","确认").then((async()=>{var{data:e}=await U.delete("/api/v1/customer/qa",{data:{ids:[a]}});S({position:"bottom-right",title:"提示",type:"success",message:e||"操作成功"}),A()})).catch((()=>{}))}};s((()=>{A()}));const A=()=>{J.loading=!0;let a={limit:B.pageSize,page:B.currentPage};""!=J.search&&(a.keywords=J.search),U.get("/api/v1/customer/qa",{params:a}).then((a=>{let{data:e}=a;B.tableData=e.list,B.total=e.total,J.loading=!1}))},B=e({tableData:[],currentPage:1,pageSize:P.state.pageSize,total:0,multipleSelection:[],order:"",size(a){B.pageSize=a,B.currentPage=1,A()},current(a){B.currentPage=a,A()}}),{total:W,currentPage:E,pageSize:F,tableData:G}=t(B);return(a,e)=>{const t=C,l=j,s=z,_=i,k=o,w=r;return n(),p("div",I,[d("div",O,[c(t,{type:"primary",onClick:e[0]||(e[0]=a=>$.update("add"))},{default:u((()=>[f("新增常见问题 ")])),_:1}),d("div",R,[d("div",V,[c(l,{onClick:A,color:"#999",size:"14 px",name:"search"}),c(s,{class:"seachInput",placeholder:"搜索关键字",onKeyup:m(A,["enter","native"]),modelValue:g(M),"onUpdate:modelValue":e[1]||(e[1]=a=>h(M)?M.value=a:null)},null,8,["onKeyup","modelValue"])])])]),b((n(),v(k,{onSortChange:B.sort,"tooltip-effect":"light",height:"78vh",data:g(G),style:{width:"100%"}},{empty:u((()=>[q])),default:u((()=>[c(_,{prop:"sort","min-width":"100",align:"left",label:"顺序"}),c(_,{label:"类型"},{default:u((({row:a})=>[d("span",null,y(["-","注册","充值","套餐购买","图文","播放"][a.type]),1)])),_:1}),c(_,{prop:"title","min-width":"150","show-overflow-tooltip":!0,formatter:a.$formatter,label:"标题"},null,8,["formatter"]),c(_,{label:"内容","min-width":"150"},{default:u((({row:a})=>[d("div",{innerHTML:a.content},null,8,H)])),_:1}),c(_,{label:"操作",align:"right"},{default:u((({row:a})=>[c(t,{type:"primary",onClick:e=>$.update(a.id),link:""},{default:u((()=>[f("编辑")])),_:2},1032,["onClick"]),c(t,{type:"danger",onClick:e=>$.clickDel(a.id),link:""},{default:u((()=>[f("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["onSortChange","data"])),[[w,g(K)]]),c(L,{visible:g(N),"onUpdate:visible":e[2]||(e[2]=a=>h(N)?N.value=a:null),ref_key:"updateRef",ref:T,onRefreshDataList:e[3]||(e[3]=a=>A())},null,8,["visible"])])}}},[["__scopeId","data-v-bffb8766"]]);export{J as default};