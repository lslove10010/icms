import{x as e,D as t,a9 as s,$ as n,af as a,u as l,o,b as c,Q as i,S as r,T as d,p as u,d as p,a as m,a5 as y,t as v,e as f,c as g,w as h,N as x,B as k,H as L,ao as w,O as b,P as I}from"./.pnpm-9c274078.js";import{_ as R,p as H,b as M,a as S}from"./index-e716b57f.js";const T=e=>(b("data-v-7d2ca948"),e=e(),I(),e),z={key:0,class:"no_message"},A=["data-mes"],N={key:0,class:"sys-notice"},_=T((()=>p("span",{class:"line"},null,-1))),j=["innerHTML"],C=T((()=>p("span",{class:"line"},null,-1))),E={class:"mes-text"},q={class:"time"},O={key:0,class:"mes-name"},P={key:1,class:"mes-name"},U=["innerHTML"],$=["src"],B=["src"],D=["src"],F=["src"],G={key:0,style:{"font-size":"14px",padding:"0 16px",width:"347px"}},J={style:{color:"#4b82fa"}},Q={key:0,style:{margin:"8px 0"}},V={key:0,style:{color:"#52c41a"}},K={key:1,style:{color:"#ff4d4f"}},W={key:1,style:{display:"flex","line-height":"1"}},X={style:{"flex-shrink":"0"}},Y=["innerHTML"],Z={key:1,class:"order"},ee={class:"title"},te={class:"num"},se={class:"num"},ne={key:0,style:{color:"#f7ad1e"}},ae={key:1,style:{color:"#4e83f7"}},le={key:2,style:{color:"#55c31f"}},oe={key:3,style:{color:"#d9d9d9"}},ce={class:"num"},ie={class:"num"},re={class:"order-time"},de={key:2,class:"order"},ue={class:"title"},pe={class:"num"},me={class:"num"},ye={class:"num"},ve={class:"order-time"},fe={key:3,class:"order"},ge={class:"title"},he={class:"type"},xe={class:"icon"},ke={class:"info"},Le={key:0,style:{color:"#faad14","font-size":"12px","margin-left":"12px"}},we={key:1,style:{color:"#52c41a","font-size":"12px","margin-left":"12px"}},be={key:2,style:{color:"#ff4d4f","font-size":"12px","margin-left":"12px"}},Ie={class:"num"},Re={class:"order-time"},He={key:0,class:"read"},Me={key:1,class:"noread"},Se=R({__name:"mesList",props:{client:{type:Object,default:()=>({})},chatList:{type:Array,default:()=>[]},slaveId:{type:Boolean||String}},setup(b){const I=b,R=k(),{$http:T}=R.appContext.config.globalProperties,Se=e(),Te=e(1);let ze=e();const Ae=e(0),Ne=e(!1);function _e(){var e;void 0===ze.value&&0===(null==(e=Se.value)?void 0:e.scrollTop)&&!0!==Ne.value&&(ze.value=function({client:e,page:t,chatList:s}){var n,a;return T.get("/api/v1/customer/customer/online/records",{params:{page:t||1,limit:20,masterId:e.memberId,queryRole:e.queryRole||2,consultId:(null==(n=s[Ae.value])?void 0:n.consultId)?""+(null==(a=s[Ae.value])?void 0:a.consultId):void 0,slaveId:I.slaveId?I.slaveId:!1!==I.slaveId?M.getters.userInfo.uuid+"":void 0}}).then((({data:t})=>{const s=t.list.reduce(((t,s)=>(e.mesList.find((e=>e.msgId==s.msgId||s.mid&&e.mid==s.mid))||t.push(s),t)),[]).sort(((e,t)=>e.sendAt-t.sendAt>0?1:-1)).filter((e=>!(-1===e.senderRole&&1===e.receiverRole)));return e.mesList=[...s,...e.mesList],s}))}({client:I.client,page:Te.value++,chatList:I.chatList}).then((async e=>{var t;if(e&&0!=e.length){let s=null==(t=null==e?void 0:e.at(-1))?void 0:t.mid;if(s){const e=document.querySelector(`[data-mes="${s}"]`);null==e||e.scrollIntoView()}ze.value=void 0,_e()}else Ae.value===I.chatList.length-1?(Ne.value=!0,ze.value=!0):(ze.value=void 0,Te.value=1,I.chatList[++Ae.value]&&_e())})).catch((e=>{Te.value--,ze.value=void 0})))}t((()=>{var e;null==(e=Se.value)||e.addEventListener("scroll",(function(e){_e()})),Se.value.addEventListener("click",(function(e){if("IMG"===e.target.tagName){let t=document.createElement("div");t.style="position:fixed;width:100vw !important;height:100vh !important;top:0;left:0;z-index:99999999;max-width:none !important;object-fit: contain;background-color:rgb(36 36 36 / 50%);padding:15vh 15vw;box-sizing: border-box;display:flex;flex-direction:column;justify-content:center;text-align:right;align-items: center;",t.onclick=function(e){return e.stopPropagation(),!1};let s=document.createElement("span");s.innerText="×",s.style="color: white;font-size: 32px;position: fixed;top: 32px;right: 32px;cursor: pointer;padding: 8px;",s.addEventListener("click",(e=>{t.parentNode.removeChild(t)})),t.appendChild(s);let n=document.createElement("img");n.src=e.target.src,n.style="object-fit: contain;max-width: 70vw !important;max-height: 70vh;",t.appendChild(n),document.body.appendChild(t)}})),s((()=>I.client.consultId),(e=>{ze.value=void 0,Te.value=1,Ae.value=0,I.client.mesList=[],Ne.value=!1,e&&_e()}),{immediate:!0})}));let je=new Map;function Ce(e){try{je.get(e)||je.set(e,JSON.parse(e))}catch{}return je.get(e)||{}}return(e,t)=>{const s=n,k=S,I=L,R=w;return a((o(),c("div",{class:"mes-box",ref_key:"box",ref:Se},[Ne.value||0===b.client.mesList.length?(o(),c("p",z,"无历史消息")):i("",!0),(o(!0),c(r,null,d(b.client.mesList,(e=>(o(),c("div",{class:u(["mes-item",1!==e.senderRole?"send":"get"]),"data-mes":e.mid},[7===e.category?(o(),c("div",N,[_,p("span",{style:{"vertical-align":"middle",color:"#666666","max-width":"60%"},innerHTML:e.content},null,8,j),C])):(o(),c(r,{key:1},[m(s,{size:60,icon:l(y),src:1!==e.senderRole?e.slaveHeadImg:e.masterHeadImg,class:"avatar"},null,8,["icon","src"]),p("div",null,[p("div",E,[p("span",q,[1===e.senderRole?(o(),c("span",O,v(e.masterUserName),1)):i("",!0),f(" "+v(l(H)(e.sendAt||e.attach.time))+" ",1),1!==e.senderRole?(o(),c("span",P,v(e.slaveUserName),1)):i("",!0)]),1===e.category?(o(),c("div",{key:0,innerHTML:e.content},null,8,U)):i("",!0),2===e.category?(o(),c("img",{key:1,src:e.content,alt:"",style:{"max-width":"250px"}},null,8,$)):i("",!0),3===e.category?(o(),c("video",{key:2,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,B)):i("",!0),4===e.category?(o(),c("video",{key:3,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,D)):i("",!0),5===e.category?(o(),c("video",{key:4,src:e.content,alt:"",style:{width:"250px"},controls:""},null,8,F)):i("",!0),6===e.category?(o(),c(r,{key:5},["withdrawChangeStatus"===Ce(e.content).type?(o(),c("div",G,[p("p",null,[f(" 亲，您于"+v(l(H)(Ce(e.content).statusAt))+"发起的 ",1),p("span",J,v(Ce(e.content).amount||0),1),f("元 提现状态已更改为 ")]),300===Ce(e.content).status||400===Ce(e.content).status?(o(),c("p",Q,[300===Ce(e.content).status?(o(),c("span",V,"完成")):i("",!0),400===Ce(e.content).status?(o(),c("span",K,"关闭")):i("",!0)])):i("",!0),300!==Ce(e.content).status&&400!==Ce(e.content).status||!Ce(e.content).because?i("",!0):(o(),c("p",W,[p("span",X,v(400===Ce(e.content).status?"关闭原因":"摘要"),1),f(" ："),p("p",{innerHTML:Ce(e.content).because},null,8,Y)]))])):"withdraw"===Ce(e.content).type?(o(),c("div",Z,[p("p",ee,v(1!==e.senderRole?"亲，请核对":"")+"提现信息",1),p("p",te,"提现金额："+v(Ce(e.content).amount),1),p("p",se,[f("提现状态： "),100===Ce(e.content).status?(o(),c("span",ne,"待受理")):200===Ce(e.content).status?(o(),c("span",ae,"处理中")):300===Ce(e.content).status?(o(),c("span",le,"已完成")):400===Ce(e.content).status?(o(),c("span",oe,"已关闭")):i("",!0)]),p("p",ce,"手续费："+v(Ce(e.content).handleFee),1),p("p",ie,"提现地址："+v(Ce(e.content).address),1),p("p",re," 创建时间："+v(l(H)(Ce(e.content).statusAt)||"-"),1)])):"commission"===Ce(e.content).type?(o(),c("div",de,[p("p",ue,v(1!==e.senderRole?"亲，请核对":"")+"佣金信息",1),p("p",pe,"订单号："+v(Ce(e.content).orderNo),1),p("p",me,"充值账号："+v(Ce(e.content).rechargeUsername),1),p("p",ye,"获得佣金："+v(Ce(e.content).amount),1),p("p",ve," 提成时间："+v(l(H)(Ce(e.content).timeAt)||"-"),1)])):(o(),c("div",fe,[p("p",ge,v(1!==e.senderRole?"亲，请核对":"")+"订单信息",1),p("div",he,[p("div",xe,[m(k,{color:"#4c83ff",name:"huangguan"})]),p("div",ke,[p("p",null,[f(v(Ce(e.content).title)+" ",1),1===Ce(e.content).payStatus?(o(),c("span",Le,"待付款")):i("",!0),2===Ce(e.content).payStatus?(o(),c("span",we,"成功")):i("",!0),3===Ce(e.content).payStatus?(o(),c("span",be,"失败")):i("",!0)]),p("p",null,"合计：￥"+v(Ce(e.content).amount),1)])]),p("p",Ie,"订单号："+v(Ce(e.content).orderNo),1),p("p",Re," 创建时间："+v(l(H)(Ce(e.content).payAt)||"-"),1)]))],64)):i("",!0)])]),"fail"===e.sendStatus?(o(),g(I,{key:0,class:"err"},{default:h((()=>[m(l(x))])),_:1})):e.mid?(o(),c(r,{key:1},[1===e.read?(o(),c("span",He,"已读")):0===e.read?(o(),c("span",Me,"未读")):i("",!0)],64)):i("",!0)],64))],10,A)))),256))])),[[R,l(ze)&&!0!==l(ze)]])}}},[["__scopeId","data-v-7d2ca948"]]);export{Se as M};
