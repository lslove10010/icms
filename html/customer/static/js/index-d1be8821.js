import{A as e,h as a,D as l,R as t,aj as s,ak as n,ar as r,ai as o,a7 as d,al as i,am as u,an as c,ao as p,o as m,b as v,d as g,a as h,w as f,u as b,a3 as y,S as _,T as I,af as x,c as S,Q as R,e as z,t as C,L as V,q as w,B as T,f as k,I as j,O as P,P as D}from"./.pnpm-9c274078.js";import{_ as U,p as E,a as L}from"./index-e716b57f.js";import{_ as $}from"./empty-6f66e897.js";import{_ as N}from"./pie-ea325c1c.js";import{l as A}from"./line2-83ec5b8b.js";import{U as F}from"./userinfo-2d757c21.js";/* empty css                                                 */const B=e=>(P("data-v-405fa477"),e=e(),D(),e),O={class:"exam-box"},q={class:"exam-header"},J={class:"exam-title"},K=B((()=>g("p",null,"充值数据走势",-1))),M={class:"exam-searh-box"},Q={class:"search-item"},G=B((()=>g("span",null,"用户身份",-1))),H={class:"search-item"},W=B((()=>g("span",null,"推广渠道",-1))),X={class:"search-item"},Y=B((()=>g("span",null,"充值内容",-1))),Z={class:"panel"},ee={class:"exam-content",style:{width:"350px"}},ae=B((()=>g("div",{class:"exam-title"},"充值概况",-1))),le={class:"content-table"},te={class:"container",style:{padding:"0"}},se={class:"chart-box"},ne={class:"pieBox"},re=B((()=>g("span",{class:"circle"},"?",-1))),oe={class:"number",style:{"font-size":"36px"}},de={class:"pieInfo"},ie={class:"infoItem"},ue=B((()=>g("div",{class:"infoStatus"},[g("span",{style:{background:"#6c9eff"},class:"tag"}),g("span",null,"已完成")],-1))),ce={class:"countSpend"},pe={class:"infoItem"},me=B((()=>g("div",{class:"infoStatus"},[g("span",{style:{background:"#fdc343"},class:"tag"}),g("span",null,"待付款")],-1))),ve={class:"countSpend"},ge={class:"infoItem"},he=B((()=>g("div",{class:"infoStatus"},[g("span",{style:{background:"#ec6836"},class:"tag"}),g("span",null,"已关闭")],-1))),fe={class:"countSpend"},be={class:"pagination",style:{"font-size":"12px",padding:"0 46px 0 60px","line-height":"5vh"}},ye={class:"filter",style:{margin:"0"}},_e={class:"right"},Ie={class:"search-item"},xe=B((()=>g("span",null,"时间范围",-1))),Se={class:"exam-content"},Re=B((()=>g("div",{class:"exam-title"},"充值详情",-1))),ze={class:"content-table"},Ce={class:"container",style:{padding:"0"}},Ve={class:"filter"},we=B((()=>g("div",{class:"right"},null,-1))),Te={class:"right"},ke={class:"search-item"},je=B((()=>g("span",null,"支付状态",-1))),Pe={class:"custom-input"},De={class:"chart-box"},Ue=B((()=>g("div",{class:"table-empty"},[g("img",{src:$,alt:"空状态"}),g("p",null,"暂无数据")],-1))),Ee={class:"statusMap"},Le={class:"pagination"},$e=U({__name:"index",setup(P){const D=T(),{$http:U}=D.appContext.config.globalProperties,$=e(),B=a({cz:{},search:"",value_time:[],options:[],agentLevelId:"",rechargeType:"",channelId:"",refresh:!0,payStatus:"",memberRole:""}),$e=()=>{var e;B.value_time||(B.value_time=[]),B.refresh=!1;let a={};(null==(e=B.value_time)?void 0:e.length)>0&&(a={timeStart:B.value_time&&B.value_time[0]?B.value_time[0]/1e3:"",timeEnd:B.value_time[1]?Number(B.value_time[1]/1e3+86399):""}),a.channelId="number"==typeof B.channelId?B.channelId:void 0,a.memberRole="number"==typeof B.memberRole?B.memberRole:void 0,a.rechargeType="number"==typeof B.rechargeType?B.rechargeType:void 0,U.get("/api/v1/customer/censor/agent_member/recharge/statistics",{params:a}).then((({data:e})=>{B.cz=e})).finally((()=>{B.refresh=!0}))},Ne=a({data:[]});l((()=>{Ae(),$e(),U.get("/api/v1/customer/filter/member_channel").then((e=>{Ne.data=e.data})).finally((()=>{}))}));const Ae=async()=>{var e,a,l,t,s;Fe.loading=!0;let n={limit:Fe.pageSize,page:Fe.currentPage};if(""!=B.search&&(n.keyword=B.search),B.agentLevelId&&(n.agentLevelId=B.agentLevelId),B.payStatus&&(n.status=B.payStatus),B.memberRole&&(n.memberRole=B.memberRole),Fe.order){let e=Fe.order.split(",");n.orderName=e[0],n.orderSerial=e[1]}(null==(e=B.value_time)?void 0:e.length)>0&&(n.timeStart=B.value_time[0]/1e3,n.timeEnd=Number(B.value_time[1]/1e3+86399)),B.rechargeType&&(n.rechargeType=B.rechargeType),""!==B.channelId&&(n.channelId=B.channelId);var{data:r}=await U.get("/api/v1/customer/censor/agent_member/recharge",{params:n});null==(l=null==(a=r.list)?void 0:a.data)||l.forEach((e=>{try{e.parameter=JSON.parse(e.parameter)}catch{}})),Fe.tableData=null!=(s=null==(t=r.list)?void 0:t.data)?s:[],Fe.total=(null==r?void 0:r.total)||0,Fe.loading=!1},Fe=a({tableData:[],currentPage:1,pageSize:20,total:0,order:"",loading:!1,current(e){Fe.currentPage=e,Ae()},size(e){Fe.pageSize=e,Fe.currentPage=1,Ae()},sort(e){const{prop:a,order:l}=e;Fe.order=a&&l?`${a},${"descending"==l?"desc":"asc"}`:"",Ae()}}),Be=a({loading:!1,data:[],load:()=>(Be.loading=!0,U.get("/api/v1/customer/censor/agent_member/recharge/statistics",{params:{channelId:"number"==typeof B.channelId?B.channelId:void 0,memberRole:"number"==typeof B.memberRole?B.memberRole:void 0,rechargeType:"number"==typeof B.rechargeType?B.rechargeType:void 0}}).then((({data:e})=>{Be.data=e})).finally((()=>{Be.loading=!1})))}),{cz:Oe,search:qe,value_time:Je,rechargeType:Ke,channelId:Me,refresh:Qe,payStatus:Ge,memberRole:He}=t(B),{total:We,currentPage:Xe,pageSize:Ye,tableData:Ze,loading:ea}=t(Fe);return(e,a)=>{var l,t,T,P,D,U,B,aa,la,ta,sa,na,ra;const oa=s,da=n,ia=r,ua=k,ca=o,pa=d,ma=L,va=j,ga=i,ha=u,fa=c,ba=p;return m(),v("div",O,[g("div",q,[g("div",J,[K,g("div",M,[g("div",Q,[G,h(da,{modelValue:b(He),"onUpdate:modelValue":a[0]||(a[0]=e=>y(He)?He.value=e:null),onChange:a[1]||(a[1]=e=>{Ae(),Be.load(),$e()}),clearable:"",placeholder:"所有用户身份"},{default:f((()=>[h(oa,{label:"会员",value:1}),h(oa,{label:"代理商",value:2})])),_:1},8,["modelValue"])]),g("div",H,[W,h(da,{modelValue:b(Me),"onUpdate:modelValue":a[2]||(a[2]=e=>y(Me)?Me.value=e:null),onChange:a[3]||(a[3]=e=>{Ae(),Be.load(),$e()}),clearable:"",filterable:"",placeholder:"所有渠道"},{default:f((()=>[h(oa,{label:"默认渠道",value:0}),(m(!0),v(_,null,I(Ne.data,(e=>(m(),S(oa,{label:e.name,value:e.id},null,8,["label","value"])))),256))])),_:1},8,["modelValue"])]),g("div",X,[Y,h(da,{modelValue:b(Ke),"onUpdate:modelValue":a[4]||(a[4]=e=>y(Ke)?Ke.value=e:null),onChange:a[5]||(a[5]=e=>{Ae(),Be.load(),$e()}),clearable:"",placeholder:"所有充值内容"},{default:f((()=>[h(oa,{label:"充值VIP",value:1}),h(oa,{label:"充值金币",value:2})])),_:1},8,["modelValue"])])])]),b(Oe).totalRechargeContinued?x((m(),S(A,{key:0,type:1,load:Be.load,list:b(Oe).totalRechargeContinued},null,8,["load","list"])),[[ba,Be.loading]]):R("",!0)]),g("div",Z,[g("div",ee,[ae,g("div",le,[g("div",te,[g("div",se,[x((m(),v("div",ne,[g("p",null,[z(" 累计充值（元） "),h(ia,{effect:"light",content:"累计充值总金额",placement:"top-start","popper-class":"auto"},{default:f((()=>[re])),_:1})]),g("p",null,[g("span",oe,C((null==(t=null==(l=b(Oe).totalRecharge)?void 0:l.whole)?void 0:t.total)||0),1)]),(null==(T=b(Oe).totalRecharge)?void 0:T.status)&&b(Qe)?(m(),S(N,{key:0,list:null==(P=b(Oe).totalRecharge)?void 0:P.status},null,8,["list"])):R("",!0),g("div",de,[g("div",ie,[ue,g("div",ce,[g("span",null,"¥"+C(null==(U=null==(D=b(Oe).totalRecharge)?void 0:D.status)?void 0:U.status2.total),1),g("span",null,C(null==(B=b(Oe).totalRecharge)?void 0:B.status.status2.count)+"笔",1)])]),g("div",pe,[me,g("div",ve,[g("span",null,"¥"+C(null==(la=null==(aa=b(Oe).totalRecharge)?void 0:aa.status)?void 0:la.status1.total),1),g("span",null,C(null==(ta=b(Oe).totalRecharge)?void 0:ta.status.status1.count)+"笔",1)])]),g("div",ge,[he,g("div",fe,[g("span",null,"¥"+C(null==(na=null==(sa=b(Oe).totalRecharge)?void 0:sa.status)?void 0:na.status3.total),1),g("span",null,C(null==(ra=b(Oe).totalRecharge)?void 0:ra.status.status3.count)+"笔",1)])])])])),[[ba,!b(Qe)]])]),g("div",be,[z(C(b(Je)&&b(Je)[0]?b(E)(b(Je)[0],"{y}-{m}-{d}")+"~":"")+" "+C(b(Je)&&b(Je)[1]?b(E)(b(Je)[1],"{y}-{m}-{d}")+"":"")+" ",1),h(pa,{placement:"top",width:350,trigger:"click",teleported:!1},{reference:f((()=>[h(ua,{class:"m-2",type:"primary",style:{"margin-left":"auto"},link:""},{default:f((()=>[z(" 筛选 ")])),_:1})])),default:f((()=>[g("div",ye,[g("div",_e,[g("div",Ie,[xe,h(ca,{class:"item",placement:"top",modelValue:b(Je),"onUpdate:modelValue":a[6]||(a[6]=e=>y(Je)?Je.value=e:null),"value-format":"x",onChange:a[7]||(a[7]=e=>{$e(),Ae()}),style:{width:"240px","--el-font-size-base":"12px"},type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",teleported:!1,size:"default"},null,8,["modelValue"])])])])])),_:1})])])])]),g("div",Se,[Re,g("div",ze,[g("div",Ce,[g("div",Ve,[we,g("div",Te,[g("div",ke,[je,h(da,{modelValue:b(Ge),"onUpdate:modelValue":a[8]||(a[8]=e=>y(Ge)?Ge.value=e:null),onChange:a[9]||(a[9]=e=>Ae()),clearable:"",placeholder:"所有支付状态"},{default:f((()=>[h(oa,{label:"待付款",value:1}),h(oa,{label:"完成支付",value:2}),h(oa,{label:"失败",value:3})])),_:1},8,["modelValue"])]),g("div",Pe,[h(ma,{color:"#999",size:"14px",onClick:a[10]||(a[10]=e=>Ae()),name:"search"}),h(va,{class:"seachInput",onKeyup:a[11]||(a[11]=V((e=>Ae()),["enter","native"])),placeholder:"搜索关键字",modelValue:b(qe),"onUpdate:modelValue":a[12]||(a[12]=e=>y(qe)?qe.value=e:null)},null,8,["modelValue"])])])]),g("div",De,[x((m(),S(ha,{onSortChange:Fe.sort,"tooltip-effect":"light",data:b(Ze)},{empty:f((()=>[Ue])),default:f((()=>[h(ga,{prop:"username",align:"left",label:"用户名"},{default:f((({row:e})=>[h(F,{name:e.username,id:e.memberId},null,8,["name","id"])])),_:1}),h(ga,{prop:"agentId",align:"left",label:"用户身份"},{default:f((({row:e})=>[z(C(null===e.agentId?"会员":"代理商"),1)])),_:1}),h(ga,{label:"推广渠道"},{default:f((({row:e})=>[g("span",null,C(e.channel?e.channel:e.channelId?e.channelId:"默认渠道"),1)])),_:1}),h(ga,{label:"站内订单号","min-width":"150",prop:"orderId",formatter:e.$formatter},null,8,["formatter"]),h(ga,{label:"充值内容"},{default:f((({row:e})=>[h(pa,{trigger:"hover",disabled:!e.parameter,content:e.parameter.name,placement:"right",teleported:!0},{reference:f((()=>[g("span",null,C(["-","充值VIP","充值金币"][e.rechargeType]),1)])),_:2},1032,["disabled","content"])])),_:1}),h(ga,{label:"支付状态"},{default:f((({row:e})=>[g("div",Ee,[g("span",{class:"tags",style:w({"background-color":["#D9D9D9","#FDC343","#6C9EFF","#EC6836"][e.payStatus]})},null,4),g("span",null,C(["-","待付款","完成支付","失败"][e.payStatus]),1)])])),_:1}),h(ga,{label:"金额",prop:"amount",sortable:"",formatter:e.$formatter},null,8,["formatter"]),h(ga,{label:"下单时间",width:"150",prop:"placeAt",sortable:""},{default:f((({row:e})=>[g("span",null,C(b(E)(e.placeAt)||"-"),1)])),_:1})])),_:1},8,["onSortChange","data"])),[[ba,b(ea)]])]),g("div",Le,[h(fa,{onSizeChange:Fe.size,small:"",onCurrentChange:Fe.current,"current-page":b(Xe),"page-sizes":b($).state.pageSizes,"page-size":b(Ye),layout:"total, prev, pager, next, sizes, jumper",total:b(We)},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])])])])])])}}},[["__scopeId","data-v-405fa477"]]);export{$e as default};
