import{D as e,ap as t,ac as a,h as l,R as s,x as i,o,b as n,d as r,q as d,p as c,u,t as v,O as p,P as y,aO as g,a as h,w as f,a3 as m,S as x,ag as b,ah as w,aP as k,aQ as _,aR as C,aS as F,c as K,aT as $,Q as z,aU as R,B as S,e as A,M as B,m as T,aq as D,A as M,n as N,W as H,ao as O,af as P,aV as L,H as I,f as j}from"./.pnpm-9c274078.js";import{_ as E,a as W,p as G,d as V}from"./index-e716b57f.js";/* empty css                                                             */import{l as U}from"./line3-2ad34cba.js";import{c as q}from"./bar-9b969fb5.js";const Q=e=>(p("data-v-c1237894"),e=e(),y(),e),Y={class:"line-box"},J={class:"top-right"},X={class:"legend"},Z={class:"currDate"},ee=Q((()=>r("span",{class:"tag",style:{background:"#899BFF"}},null,-1))),te={key:0},ae={key:1},le={class:"lastDate"},se=Q((()=>r("span",{class:"tag",style:{background:"#F0866A"}},null,-1))),ie={key:0},oe={key:1},ne=E({__name:"line",props:{list:{type:Object,default:()=>{}},type:{type:Number,default:1},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},emits:["update:active"],setup(p,{emit:y}){const g=p;e((()=>{_.chart=t(k.value),h()}));const h=()=>{let e=a(g.list);if(1==f.activeKey){let a=(null==e?void 0:e.hour)||[];var t=a.slice(0,24).reverse(),l=a.slice(24).reverse()}else{let a=(null==e?void 0:e.day)||[];t=a.slice(0,f.activeKey).reverse(),l=a.slice(f.activeKey,Number(f.activeKey+f.activeKey)).reverse()}let s=t.map((e=>1==f.activeKey?e.datetime:e.day)),i=t.map((e=>e.amount)),o=l.map((e=>e.amount));f.currMap=t,f.lastMap=l,F(s,i,o)},f=l({activeKey:7,currMap:[],lastMap:[]}),m=e=>{if(e==f.activeKey)return!1;y("update:active",e),f.activeKey=e,h()},{activeKey:x,currMap:b,lastMap:w}=s(f),k=i(null),_={chart:null};function C(e,t){const a=e=>{var t=e;return 1==e.toString().length&&(t="0"+e),t};var l=t?new Date(t):new Date,s=l.getTime()+864e5*e;l.setTime(s);var i=l.getFullYear(),o=l.getMonth(),n=l.getDate();return i+"-"+(o=a(o+1))+"-"+(n=a(n))}const F=(e,t,a)=>{let l=[1==f.activeKey?"今天":`近${f.activeKey}天`,1==f.activeKey?"昨天":`上${f.activeKey}天`];_.chart.setOption({tooltip:{trigger:"axis",formatter:function(e){return(e=>{let t=`<div style='display:flex;align-items:center;'><span style="\n      background: #899BFF;width: 14px;\n        height: 10px; border-radius: 2px; margin: 0 4px 2px 0;"></span>\n      <span style='font-size:12px;color:#C2C3C8;'>${e[0].name}</span></div>`,a=1==f.activeKey?C(-1,e[0].name)+e[0].name.substring(10):C(-f.activeKey,e[0].name),l=`<div style='display:flex;align-items:center;'><span style="\n      background: #F0866A;width: 14px;\n        height: 10px; border-radius: 2px; margin: 0 4px 2px 0;"></span>\n        <span style='font-size:12px;color:#C2C3C8;'>${a}</span></div>`;var s=f.currMap.filter((t=>1==f.activeKey?t.datetime==e[0].name:t.day==e[0].name))[0],i=f.lastMap.filter((e=>1==f.activeKey?e.datetime==a:e.day==a))[0];if(1==g.type)var o="<div style='padding:0 6px;'>"+t+`<div style='font-size:12px;color:#666666;'>已完成: ${(null==s?void 0:s.completed)||0}元</div><div style='font-size:12px;color:#666666;'>待付款: ${(null==s?void 0:s.valid)||0}元</div><div style='font-size:12px;color:#666666;'>已关闭: ${(null==s?void 0:s.closed)||0}元</div>`+l+`<div style='font-size:12px;color:#666666;'>已完成: ${(null==i?void 0:i.completed)||0}元</div><div style='font-size:12px;color:#666666;'>待付款: ${(null==i?void 0:i.valid)||0}元</div><div style='font-size:12px;color:#666666;'>已关闭: ${(null==i?void 0:i.closed)||0}元</div></div>`;2==g.type&&(o="<div style='padding:0 6px;'>"+t+`<div style='font-size:12px;color:#666666;'>已完成: ${(null==s?void 0:s.completed)||0}元</div><div style='font-size:12px;color:#666666;'>待处理: ${(null==s?void 0:s.frozen)||0}元</div><div style='font-size:12px;color:#666666;'>已关闭: ${(null==s?void 0:s.closed)||0}元</div>`+l+`<div style='font-size:12px;color:#666666;'>已完成: ${(null==i?void 0:i.completed)||0}元</div><div style='font-size:12px;color:#666666;'>待处理: ${(null==i?void 0:i.frozen)||0}元</div><div style='font-size:12px;color:#666666;'>已关闭: ${(null==i?void 0:i.closed)||0}元</div></div>`);3==g.type&&(o="<div style='padding:0 6px;'>"+t+`<div style='font-size:12px;color:#666666;'>累计分佣: ${(null==s?void 0:s.amount)||0}元</div>`+l+`<div style='font-size:12px;color:#666666;'>累计分佣: ${(null==i?void 0:i.amount)||0}元</div></div>`);return o})(e)}},grid:{top:"20%",left:"2%",right:"5%",bottom:"2%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisLabel:{color:"#C2C3C8"},data:(null==e?void 0:e.length)?e:["1","2","3","4","5","6","7"],axisLabel:{color:"#999999",formatter:function(e,t){let a=1==f.activeKey?e.indexOf(" "):e.indexOf("-");return 1==f.activeKey?e.substring(a+1,a+6):e.substring(a+1)}},axisTick:{show:!1}},yAxis:{type:"value",axisLabel:{color:"#999999"},splitLine:{show:!1}},series:[{name:l[0]||"近7天",type:"line",data:(null==t?void 0:t.length)?t:[14,19,15,8,30,20,14],itemStyle:{color:"#899BFF"},symbol:"none",areaStyle:{color:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(137, 155, 255, 0.4)"},{offset:.7,color:"rgba(137, 155, 255, 0)"}]}},smooth:!0},{name:l[1]||"上7天",type:"line",data:(null==a?void 0:a.length)?a:[25,18,6,19,8,35,14],itemStyle:{color:"#F0866A"},symbol:"none",areaStyle:{color:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(240, 134, 106, 0.4)"},{offset:.7,color:"rgba(240, 134, 106, 0)"}]}},smooth:!0}]},!0),window.onresize=function(){_.chart.resize()}};return(e,t)=>{var a,l,s,i;return o(),n("div",Y,[r("div",{ref_key:"classChart",ref:k,style:d({width:p.width,height:p.height})},null,4),r("div",J,[r("span",{onClick:t[0]||(t[0]=e=>m(1)),class:c({active:1==u(x)})},"今天",2),r("span",{onClick:t[1]||(t[1]=e=>m(7)),class:c({active:7==u(x)})},"7天",2),r("span",{onClick:t[2]||(t[2]=e=>m(15)),class:c({active:15==u(x)})},"15天",2),r("span",{onClick:t[3]||(t[3]=e=>m(30)),class:c({active:30==u(x)})},"1月",2)]),r("div",X,[r("div",Z,[ee,1==u(x)?(o(),n("span",te,"今天")):(o(),n("span",ae,v(null==(a=u(b)[0])?void 0:a.day)+" 至 "+v(null==(l=u(b)[u(b).length-1||0])?void 0:l.day),1))]),r("div",le,[se,1==u(x)?(o(),n("span",ie,"昨天")):(o(),n("span",oe,v(null==(s=u(w)[0])?void 0:s.day)+" 至 "+v(null==(i=u(w)[u(w).length-1||0])?void 0:i.day),1))])])])}}},[["__scopeId","data-v-c1237894"]]),re={class:"line-box"},de={class:"top-right"},ce=E({__name:"chartBar",props:{list:{type:Object,default:()=>{}},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},emits:["update:active"],setup(v,{emit:p}){const y=v,h=l({activeKey:7}),f=e=>{if(e==h.activeKey)return!1;h.activeKey=e,w()},{activeKey:m}=s(h),x=i(null),b={chart:null},w=()=>{let e=a(y.list);if(1==h.activeKey)var t=(null==e?void 0:e.today)||[];else if(7==h.activeKey)t=(null==e?void 0:e.sevenDays)||[];else if(15==h.activeKey)t=(null==e?void 0:e.fifteenDays)||[];else if(30==h.activeKey)t=(null==e?void 0:e.thisMonth)||[];let l=t.map((e=>e.agentLevelName)),s=t.map((e=>e.performance));k(l,s)};e((()=>{b.chart=t(x.value),w()}));const k=(e,t)=>{b.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"20%",left:"2%",right:"5%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:(null==e?void 0:e.length)?e:["普通代理","高级代理","超级代理","至尊代理","特约代理","金牌代理"],axisLabel:{color:"#999999",formatter:function(t,a){return(null==e?void 0:e.length)>5?t.substring(0,2):t}}},yAxis:{type:"value"},series:[{name:"代理业绩",data:(null==t?void 0:t.length)?t:[12,45,56,45,12,23],barWidth:20,itemStyle:{borderRadius:[10,10,0,0],color:new g(0,1,0,0,[{offset:0,color:"#FFB192"},{offset:1,color:"#FA5B50"}])},type:"bar"}]},!0),window.onresize=function(){b.chart.resize()}};return(e,t)=>(o(),n("div",re,[r("div",{ref_key:"classChart",ref:x,style:d({width:v.width,height:v.height})},null,4),r("div",de,[r("span",{onClick:t[0]||(t[0]=e=>f(1)),class:c({active:1==u(m)})},"今天",2),r("span",{onClick:t[1]||(t[1]=e=>f(7)),class:c({active:7==u(m)})},"近7天",2),r("span",{onClick:t[2]||(t[2]=e=>f(15)),class:c({active:15==u(m)})},"近15天",2),r("span",{onClick:t[3]||(t[3]=e=>f(30)),class:c({active:30==u(m)})},"近一个月",2)])]))}},[["__scopeId","data-v-c6528bc6"]]),ue=e=>(p("data-v-60cc6843"),e=e(),y(),e),ve={class:"line-box"},pe={class:"top-right"},ye={class:"legend"},ge={class:"currDate"},he=ue((()=>r("span",{class:"tag",style:{background:"#899BFF"}},null,-1))),fe={key:0},me={key:1},xe={key:2},be={class:"lastDate"},we=ue((()=>r("span",{class:"tag",style:{background:"#F0866A"}},null,-1))),ke={key:0},_e={key:1},Ce={key:2},Fe=E({__name:"chartBar2",props:{list:{type:Object,default:()=>{}},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},emits:["update:active"],setup(p,{emit:y}){const k=p,_=l({activeKey:7,activeName:1,currMap:[],lastMap:[]}),C=e=>{if(e==_.activeKey)return!1;_.activeKey=e,A()},{activeKey:F,activeName:K,currMap:$,lastMap:z}=s(_),R=i(null),S={chart:null};e((()=>{S.chart=t(R.value),A()}));const A=()=>{let e=a(k.list);if(1==_.activeName)if(1==_.activeKey){let a=(null==e?void 0:e.newHour)||[];var t=a.slice(0,24).reverse(),l=a.slice(24).reverse()}else{let a=(null==e?void 0:e.newDay)||[];t=a.slice(0,_.activeKey).reverse(),l=a.slice(_.activeKey,Number(_.activeKey+_.activeKey)).reverse()}else if(1==_.activeKey){let a=(null==e?void 0:e.activeHour)||[];t=a.slice(0,24).reverse(),l=a.slice(24).reverse()}else{let a=(null==e?void 0:e.activeDay)||[];t=a.slice(0,_.activeKey).reverse(),l=a.slice(_.activeKey,Number(_.activeKey+_.activeKey)).reverse()}let s=t.map((e=>1==_.activeKey?e.datetime:e.day)),i=t.map((e=>e.total)),o=l.map((e=>e.total));_.currMap=t,_.lastMap=l,B(s,i,o)},B=(e,t,a)=>{1==_.activeKey||_.activeKey,1==_.activeKey||_.activeKey,S.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return(e=>{let t=`<div style='display:flex;align-items:center;'><span style="\n      background: #899BFF;width: 14px;\n        height: 10px; border-radius: 2px; margin: 0 4px 2px 0;"></span>\n      <span style='font-size:12px;color:#C2C3C8;'>${e[0].name}</span></div>`,a=1==_.activeKey?T(-1,e[0].name)+e[0].name.substring(10):T(-_.activeKey,e[0].name),l=`<div style='display:flex;align-items:center;'><span style="\n      background: #F0866A;width: 14px;\n        height: 10px; border-radius: 2px; margin: 0 4px 2px 0;"></span>\n        <span style='font-size:12px;color:#C2C3C8;'>${a}</span></div>`;var s=_.currMap.filter((t=>1==_.activeKey?t.datetime==e[0].name:t.day==e[0].name))[0],i=_.lastMap.filter((e=>1==_.activeKey?e.datetime==a:e.day==a))[0];return"<div style='padding:0 6px;'>"+t+`<div style='font-size:12px;color:#666;'>${1==_.activeName?"新增用户":"活跃用户"}: ${s.total}人</div><div style='font-size:12px;color:#666;'>${1==_.activeName?"新增游客":"活跃游客"}: ${s.tourists}人</div>`+l+`<div style='font-size:12px;color:#666;'>${1==_.activeName?"新增用户":"活跃用户"}: ${i.total}人</div><div style='font-size:12px;color:#666;'>${1==_.activeName?"新增游客":"活跃游客"}: ${i.tourists}人</div></div>`})(e)}},grid:{top:"20%",left:"2%",right:"5%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:(null==e?void 0:e.length)?e:["1","2","3","4","5","6","7"],axisLabel:{color:"#999999",formatter:function(e,t){let a=1==_.activeKey?e.indexOf(" "):e.indexOf("-");return 1==_.activeKey?e.substring(a+1,a+6):e.substring(a+1)}}},yAxis:{type:"value"},series:[{data:(null==t?void 0:t.length)?t:[0],itemStyle:{borderRadius:[10,10,0,0],color:new g(0,1,0,0,[{offset:0,color:"#C1CAFF"},{offset:1,color:"#8D9FFF"}])},type:"bar"},{data:(null==a?void 0:a.length)?a:[0],itemStyle:{borderRadius:[10,10,0,0],color:new g(0,1,0,0,[{offset:0,color:"#FFB192"},{offset:1,color:"#FA5B50"}])},type:"bar"}]},!0),window.onresize=function(){S.chart.resize()}};function T(e,t){const a=e=>{var t=e;return 1==e.toString().length&&(t="0"+e),t};var l=t?new Date(t):new Date,s=l.getTime()+864e5*e;l.setTime(s);var i=l.getFullYear(),o=l.getMonth(),n=l.getDate();return i+"-"+(o=a(o+1))+"-"+(n=a(n))}return(e,t)=>{var a,l,s,i,y,g,k,_,S,B;const T=b,D=w;return o(),n(x,null,[h(D,{modelValue:u(K),"onUpdate:modelValue":t[0]||(t[0]=e=>m(K)?K.value=e:null),style:{"--el-font-size-base":"14px"},onTabChange:t[1]||(t[1]=e=>A())},{default:f((()=>[h(T,{label:"新增用户",name:1}),h(T,{label:"活跃用户",name:2})])),_:1},8,["modelValue"]),r("div",ve,[r("div",{ref_key:"classChart",ref:R,style:d({width:p.width,height:p.height})},null,4),r("div",pe,[r("span",{onClick:t[2]||(t[2]=e=>C(1)),class:c({active:1==u(F)})},"今天",2),r("span",{onClick:t[3]||(t[3]=e=>C(7)),class:c({active:7==u(F)})},"7天",2),r("span",{onClick:t[4]||(t[4]=e=>C(15)),class:c({active:15==u(F)})},"15天",2),r("span",{onClick:t[5]||(t[5]=e=>C(30)),class:c({active:30==u(F)})},"1月",2)]),r("div",ye,[r("div",ge,[he,1==u(F)?(o(),n("span",fe,"今天")):(null==(a=u($)[0])?void 0:a.day)===(null==(l=u($)[u($).length-1||0])?void 0:l.day)?(o(),n("span",me,v(null==(s=u($)[u($).length-1||0])?void 0:s.day),1)):(o(),n("span",xe,v(null==(i=u($)[0])?void 0:i.day)+" 至 "+v(null==(y=u($)[u($).length-1||0])?void 0:y.day),1))]),r("div",be,[we,1==u(F)?(o(),n("span",ke,"昨天")):(null==(g=u(z)[0])?void 0:g.day)===(null==(k=u(z)[u(z).length-1||0])?void 0:k.day)?(o(),n("span",_e,v(null==(_=u(z)[0])?void 0:_.day),1)):(o(),n("span",Ce,v(null==(S=u(z)[0])?void 0:S.day)+" 至 "+v(null==(B=u(z)[u(z).length-1||0])?void 0:B.day),1))])])])],64)}}},[["__scopeId","data-v-60cc6843"]]),Ke=e=>(p("data-v-9970e0b0"),e=e(),y(),e),$e=Ke((()=>r("div",{class:"title"},"充值数据",-1))),ze=Ke((()=>r("div",{class:"title"},"提现数据",-1))),Re=Ke((()=>r("div",{class:"title"},"分佣数据",-1))),Se={style:{height:"100%",display:"flex","flex-direction":"column"}},Ae=Ke((()=>r("div",{class:"title"},"会话数据",-1))),Be=Ke((()=>r("div",{class:"title"},"各级代理数据",-1))),Te=E({__name:"wait",props:{swiperHeight:{type:String,default:()=>"450px"},list:{type:Object,default:()=>{}}},setup(e){const t=e;k.use([_,C,F]);const a=i(1),s=S(),{$http:n}=s.appContext.config.globalProperties,{cz:d,tx:c,fy:v,yh:p,dl:y,gd:g}=t.list,m=l({loading:!1,data:[],load:()=>(m.loading=!0,n.get("/api/v1/customer/censor/agent_member/gold/statistics",{}).then((({data:e})=>{m.data=e})).finally((()=>{m.loading=!1})))});return(t,l)=>(o(),K(u(R),{slidesPerView:"auto",noSwiping:!1,speed:500,pagination:!0,loop:!0,onSlideChange:l[0]||(l[0]=e=>a.value=e),navigation:!0,class:"mySwiper swiper-no-swiping"},{default:f((()=>[(o(),K(u($),{class:"swiper-survey",key:1},{default:f((()=>[$e,u(d).totalRechargeContinued?(o(),K(ne,{key:0,height:e.swiperHeight,type:1,list:u(d).totalRechargeContinued},null,8,["height","list"])):z("",!0)])),_:1})),(o(),K(u($),{class:"swiper-survey",key:2},{default:f((()=>[ze,u(c).totalWithdrawContinued?(o(),K(ne,{key:0,height:e.swiperHeight,type:2,list:u(c).totalWithdrawContinued},null,8,["height","list"])):z("",!0)])),_:1})),(o(),K(u($),{class:"swiper-survey",key:3},{default:f((()=>[Re,u(v).totalBrokerageContinued?(o(),K(ne,{key:0,height:e.swiperHeight,type:3,list:u(v).totalBrokerageContinued},null,8,["height","list"])):z("",!0)])),_:1})),(o(),K(u($),{class:"swiper-survey",key:6},{default:f((()=>[r("div",Se,[Ae,3===a.value.realIndex?(o(),K(q,{key:0,height:"80%"})):z("",!0)])])),_:1})),(o(),K(u($),{class:"swiper-survey",key:4},{default:f((()=>[h(Fe,{height:e.swiperHeight,list:u(p).totalMemberContinued||{activeDay:[],activeHour:[],newDay:[],newHour:[]}},null,8,["height","list"])])),_:1})),(o(),K(u($),{class:"swiper-survey",key:5},{default:f((()=>{var t,a;return[Be,(null==(t=u(y))?void 0:t.totalAgentMemberContinued)?(o(),K(ce,{key:0,height:e.swiperHeight,list:null==(a=u(y))?void 0:a.totalAgentMemberContinued},null,8,["height","list"])):z("",!0)]})),_:1})),(o(),K(u($),{class:"swiper-survey",key:6},{default:f((()=>[u(g).totalGoldContinued?(o(),K(U,{key:0,height:e.swiperHeight,type:3,custom:!1,list:u(g).totalGoldContinued,load:m.load},null,8,["height","list","load"])):z("",!0)])),_:1}))])),_:1}))}},[["__scopeId","data-v-9970e0b0"]]),De={class:"pie-box"},Me={style:{"font-family":"sans-serif","font-weight":"600","font-size":"20px"}},Ne={class:"new-pie"},He=B('<div class="leftTag" data-v-59eed0f3><div class="tagbox" data-v-59eed0f3><span style="background:#A3E1EF;" class="tag" data-v-59eed0f3></span> APP注册 </div><div class="tagbox" data-v-59eed0f3><span style="background:#8694FB;" class="tag" data-v-59eed0f3></span> Web注册 </div><div class="tagbox" data-v-59eed0f3><span style="background:#FF9C39;" class="tag" data-v-59eed0f3></span> H5注册 </div></div>',1),Oe=B('<div class="leftTag" style="margin-left:16px;" data-v-59eed0f3><div class="tagbox" data-v-59eed0f3><span style="background:#86B0FB;" class="tag" data-v-59eed0f3></span> 注册用户 </div><div class="tagbox" data-v-59eed0f3><span style="background:#A3EFD7;" class="tag" data-v-59eed0f3></span> 游客 </div></div>',1),Pe=E({__name:"newPie",props:{list:{type:Object,default:()=>{}}},setup(a){const l=a,s=i(null),d=i(null),c={chart:null,chart2:null},u=i(0);e((()=>{c.chart=t(s.value),c.chart2=t(d.value),u.value=l.list.right[0].value+l.list.right[1].value,p(l.list)}));const p=e=>{c.chart.setOption({tooltip:{trigger:"item",formatter:"{b}: {c}"},series:[{name:"用户",type:"pie",radius:["45%","80%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:6,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},data:e.left}]},!0),c.chart2.setOption({tooltip:{trigger:"item",formatter:"{b}: {c}"},series:[{name:"用户",type:"pie",radius:["45%","80%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:6,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},data:e.right}]},!0),window.onresize=function(){c.chart.resize(),charts2.chart.resize()}};return(e,t)=>(o(),n("div",De,[r("div",null,[A("总人数："),r("span",Me,v(u.value),1)]),r("div",Ne,[He,r("div",{ref_key:"chartRef1",ref:s,style:{width:"180px",height:"180px","margin-left":"-24px"}},null,512),Oe,r("div",{ref_key:"chartRef2",ref:d,style:{width:"180px",height:"180px","margin-left":"-24px"}},null,512)])]))}},[["__scopeId","data-v-59eed0f3"]]),Le={class:"cprogress"},Ie={class:"cp-box"},je={class:"cp-desc"},Ee={style:{color:"#666"}},We=E(T({__name:"cprogress",props:{color:{type:String},title:{type:String,default:"默认"},percentage:{type:Number,default:0},text:{type:String,default:"ahfjka 12"},type:{type:Number,default:0}},setup:e=>(t,a)=>{const l=W,s=D;return o(),n("div",Le,[h(l,{size:"20px",color:e.color,name:["yiwancheng","geren","tuandui"][e.type]},null,8,["color","name"]),r("div",Ie,[r("div",je,[r("span",Ee,v(e.title),1),r("span",null,v(e.text),1)]),h(s,{"stroke-width":10,color:e.color,percentage:e.percentage||0},null,8,["color","percentage"])])])}}),[["__scopeId","data-v-20d4736b"]]),Ge={class:"rprogress"},Ve={class:"dismantle el-progress round"},Ue={class:"blue el-progress roundbig"},qe=B('<svg width="100%" height="100%" data-v-47dda4a7><defs data-v-47dda4a7><linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%" data-v-47dda4a7><stop offset="0%" style="stop-color:#73C0FF;stop-opacity:1;" data-v-47dda4a7></stop><stop offset="100%" style="stop-color:#1082FF;stop-opacity:1;" data-v-47dda4a7></stop></linearGradient></defs><defs data-v-47dda4a7><linearGradient id="dismantle" x1="0%" y1="0%" x2="100%" y2="0%" data-v-47dda4a7><stop offset="0%" style="stop-color:#F7E283;stop-opacity:1;" data-v-47dda4a7></stop><stop offset="100%" style="stop-color:#FFAB8B;stop-opacity:1;" data-v-47dda4a7></stop></linearGradient></defs></svg>',1),Qe=E({__name:"rprogress",props:{list:{type:Array,default:()=>[0,0]}},setup:e=>(t,a)=>{const l=D;return o(),n("div",Ge,[r("div",Ve,[h(l,{type:"circle",percentage:Math.round(100*e.list[0])>100?100:Math.round(100*e.list[0])||0,width:90,"stroke-width":12},null,8,["percentage"])]),r("div",Ue,[h(l,{type:"circle",percentage:Math.round(100*e.list[1])>100?100:Math.round(100*e.list[1])||0,width:120,"stroke-width":12},null,8,["percentage"])]),qe])}},[["__scopeId","data-v-47dda4a7"]]),Ye=e=>(p("data-v-1cca7fd5"),e=e(),y(),e),Je={class:"home-box"},Xe={class:"home-left-box"},Ze={class:"l-welcome"},et={class:"lw-txt"},tt={class:"last"},at={class:"home-right-box"},lt={class:"r-box-row"},st={class:"r-half"},it={class:"rhalf-top"},ot=Ye((()=>r("span",null,"充值",-1))),nt={class:"rhalf-content"},rt={class:"rhalf-ctotal"},dt=Ye((()=>r("p",null,"总笔数",-1))),ct=Ye((()=>r("p",{style:{"font-size":"12px",color:"#333333"}},"(累计充值总笔数)",-1))),ut={class:"rhalf-number"},vt=Ye((()=>r("p",null,"总金额",-1))),pt=Ye((()=>r("p",{style:{"font-size":"12px",color:"#333333"}},"(累计充值总金额)",-1))),yt={class:"rhalf-number"},gt={key:0,class:"rhalf-cprogress"},ht={class:"r-half"},ft={class:"rhalf-top"},mt=Ye((()=>r("span",null,"提现",-1))),xt={class:"rhalf-content"},bt={class:"rhalf-ctotal"},wt=Ye((()=>r("p",null,"总笔数",-1))),kt=Ye((()=>r("p",{style:{"font-size":"12px",color:"#333333"}},"(累计申请提现总笔数)",-1))),_t={class:"rhalf-number"},Ct=Ye((()=>r("p",null,"总金额",-1))),Ft=Ye((()=>r("p",{style:{"font-size":"12px",color:"#333333"}},"(累计申请提现总金额)",-1))),Kt={class:"rhalf-number"},$t={key:0,class:"rhalf-cprogress"},zt={class:"r-box-row"},Rt={class:"r-half"},St={class:"rhalf-top"},At=Ye((()=>r("span",null,"分佣",-1))),Bt={class:"rhalf-content"},Tt={class:"rhalf-ctotal"},Dt=Ye((()=>r("p",null,"分佣总笔数",-1))),Mt={class:"rhalf-number"},Nt=Ye((()=>r("p",null,"分佣总金额",-1))),Ht={class:"rhalf-number"},Ot={key:0,class:"rhalf-cprogress"},Pt={class:"r-half"},Lt={class:"rhalf-top"},It=Ye((()=>r("span",null,"用户",-1))),jt={class:"rhalf-content"},Et={class:"r-box-row"},Wt={class:"r-other",style:{width:"50%",padding:"24px 4vw"}},Gt={class:"rother-info"},Vt={class:"rhalf-ctotal",style:{width:"auto",padding:"0px"}},Ut=Ye((()=>r("p",null,"累计处理对话",-1))),qt={class:"rhalf-number",style:{margin:"8px 0 20px","font-size":"28px"}},Qt={class:"userTags",style:{gap:"0 32px"}},Yt={class:"itemTags"},Jt=Ye((()=>r("div",{class:"head other"},[r("span",{style:{"background-color":"#FACC86"},class:"tag"}),A("昨日处理 ")],-1))),Xt={class:"rhalf-number"},Zt={class:"itemTags"},ea=Ye((()=>r("div",{class:"head other"},[r("span",{style:{"background-color":"#4DA8FF"},class:"tag"}),A("今日处理")],-1))),ta={class:"rhalf-number"},aa={key:0,class:"number-trend"},la={key:1,style:{color:"#52C41A"},class:"number-trend"},sa={class:"r-other",style:{width:"50%",padding:"24px 4vw"}},ia={class:"rother-info"},oa={class:"rhalf-ctotal",style:{width:"auto",padding:"0px"}},na=Ye((()=>r("p",null,"累计处理留言",-1))),ra={class:"rhalf-number",style:{margin:"8px 0 20px","font-size":"28px"}},da={class:"userTags",style:{gap:"0 32px"}},ca={class:"itemTags"},ua=Ye((()=>r("div",{class:"head other"},[r("span",{style:{"background-color":"#FACC86"},class:"tag"}),A("昨日处理 ")],-1))),va={class:"rhalf-number"},pa={class:"itemTags"},ya=Ye((()=>r("div",{class:"head other"},[r("span",{style:{"background-color":"#4DA8FF"},class:"tag"}),A("今日处理")],-1))),ga={class:"rhalf-number"},ha={key:0,class:"number-trend"},fa={key:1,style:{color:"#52C41A"},class:"number-trend"},ma=E({__name:"index",setup(t){const a=S(),{$http:d}=a.appContext.config.globalProperties,c=M(),p=l({userInfo:N((()=>c.getters.userInfo))||{},timer:null,currentDate:{},statRally:{},swiperHeight:"",cz:{},tx:{},fy:{},yh:{},yhPie:{},stat:{},loading:!1}),y=()=>{let e=(new Date).getHours(),t="";return e>=0&&e<=10?t="早上好":e>10&&e<=14?t="中午好":e>14&&e<=18?t="下午好":e>18&&e<=24&&(t="晚上好"),t},g=i(null),{userInfo:m,currentDate:x,cz:b,tx:w,fy:k,yh:_,statRally:C,swiperHeight:F,yhPie:$,stat:R,loading:B}=s(p);return e((()=>{p.currentDate={day:G((new Date).toLocaleString(),"{y}-{m}-{d}"),week:"日一二三四五六".charAt((new Date).getDay())},(async()=>{let{data:e}=await d.get("/api/v1/customer/customer/chats/statistic");p.statRally=e;let t=await d.get("/api/v1/customer/censor/agent_member/member/statistics"),a=t.data.member,l={left:[{value:a.registerApp,name:"APP注册",itemStyle:{color:"#A3E1EF"}},{value:a.registerWeb,name:"Web注册",itemStyle:{color:"#8694FB"}},{value:a.registerMobile,name:"H5注册",itemStyle:{color:"#FF9C39"}}],right:[{value:a.registerUser,name:"注册用户",itemStyle:{color:"#86B0FB"}},{value:a.tourists,name:"游客",itemStyle:{color:"#A3EFD7"}}]};p.yhPie=l,p.yh=t.data})(),(async()=>{if(1==V.getSession("csUserInfo").role)return!1;let{data:e}=await d.get("/api/v1/customer/administrator/index");p.cz=e.recharge,p.tx=e.withdraw,p.fy=e.brokerage,p.yh=e.user})(),(async()=>{p.loading=!0;let e=await d.get("/api/v1/customer/censor/agent_member/recharge/statistics"),t=await d.get("/api/v1/customer/censor/agent_member/withdraw/statistics"),a=await d.get("/api/v1/customer/censor/agent_member/brokerage/statistics"),l=await d.get("/api/v1/customer/censor/agent_member/agent/statistics"),s=await d.get("/api/v1/customer/censor/agent_member/gold/statistics");p.stat={cz:e.data,tx:t.data,fy:a.data,yh:p.yh,dl:l.data,gd:s.data},p.loading=!1})(),H((()=>{let e=(g.value.clientHeight||658)-200;p.swiperHeight=e+"px"}))})),(e,t)=>{var a,l,s,i,d,c,p,_,S,T,D,M,N,H,E,V,U,q,Q,Y,J,X,Z,ee,te,ae,le,se,ie,oe,ne,re,de,ce,ue,ve,pe,ye,ge,he,fe,me,xe,be,we,ke,_e,Ce,Fe,Ke,$e,ze,Re,Se,Ae,Be,De,Me,Ne,He,Oe,Le,Ie,je,Ee,Ge,Ve,Ue,qe,Ye,ma,xa,ba,wa,ka,_a,Ca,Fa,Ka,$a,za,Ra,Sa,Aa,Ba,Ta,Da,Ma,Na,Ha,Oa,Pa,La,Ia,ja,Ea,Wa,Ga,Va,Ua,qa,Qa,Ya,Ja,Xa,Za,el,tl,al;const ll=W,sl=I,il=j,ol=O;return o(),n("div",Je,[r("div",Xe,[r("div",Ze,[r("div",et,[r("p",null,[h(ll,{size:"18px",name:"shangwuhao"}),r("span",null,v(y())+"～"+v(u(m).nickName||u(m).userName||"管理员1号")+"，欢迎登录本系统",1)]),r("p",tt,"上次登录时间："+v(u(G)(u(m).lastLoginAt)),1),r("p",null,v(u(x).day)+" 星期"+v(u(x).week),1)])]),P((o(),n("div",{ref_key:"swiperWait",ref:g,class:"l-wait"},[u(R).tx?(o(),K(Te,{key:0,swiperHeight:u(F),list:u(R)},null,8,["swiperHeight","list"])):z("",!0)])),[[ol,u(B)]])]),r("div",at,[r("div",lt,[r("div",st,[r("div",it,[ot,h(il,{link:"",type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push("/recharge"))},{default:f((()=>[h(sl,null,{default:f((()=>[h(u(L))])),_:1})])),_:1})]),r("div",nt,[r("div",rt,[dt,ct,r("p",ut,v(null==(a=u(b).whole)?void 0:a.count),1),vt,pt,r("p",yt,"¥"+v(null==(l=u(b).whole)?void 0:l.total),1)]),u(b).whole?(o(),n("div",gt,[h(We,{color:"#86B0FB",title:"已完成",percentage:100*Number((null==(i=null==(s=u(b).status)?void 0:s.status2)?void 0:i.total)/(null==(d=u(b).whole)?void 0:d.total)),text:`¥${null==(p=null==(c=u(b).status)?void 0:c.status2)?void 0:p.total} ${null==(S=null==(_=u(b).status)?void 0:_.status2)?void 0:S.count}笔`},null,8,["percentage","text"]),h(We,{color:"#FFC25B",title:"待付款",percentage:100*Number((null==(D=null==(T=u(b).status)?void 0:T.status1)?void 0:D.total)/(null==(M=u(b).whole)?void 0:M.total)),text:`¥${null==(H=null==(N=u(b).status)?void 0:N.status1)?void 0:H.total} ${null==(V=null==(E=u(b).status)?void 0:E.status1)?void 0:V.count}笔`},null,8,["percentage","text"]),h(We,{color:"#F6825E",title:"失败",percentage:100*Number((null==(q=null==(U=u(b).status)?void 0:U.status3)?void 0:q.total)/(null==(Q=u(b).whole)?void 0:Q.total)),text:`¥${null==(J=null==(Y=u(b).status)?void 0:Y.status3)?void 0:J.total} ${null==(Z=null==(X=u(b).status)?void 0:X.status3)?void 0:Z.count}笔`},null,8,["percentage","text"])])):z("",!0)])]),r("div",ht,[r("div",ft,[mt,h(il,{link:"",type:"primary",onClick:t[1]||(t[1]=t=>e.$router.push("/withdraw"))},{default:f((()=>[h(sl,null,{default:f((()=>[h(u(L))])),_:1})])),_:1})]),r("div",xt,[r("div",bt,[wt,kt,r("p",_t,v(null==(ee=u(w).whole)?void 0:ee.count),1),Ct,Ft,r("p",Kt,"¥"+v(null==(te=u(w).whole)?void 0:te.total),1)]),u(w).whole?(o(),n("div",$t,[h(We,{color:"#86B0FB",title:"已完成",percentage:100*Number((null==(le=null==(ae=u(w).status)?void 0:ae.status300)?void 0:le.total)/(null==(se=u(w).whole)?void 0:se.total)),text:`¥${null==(oe=null==(ie=u(w).status)?void 0:ie.status300)?void 0:oe.total} ${null==(re=null==(ne=u(w).status)?void 0:ne.status300)?void 0:re.count}笔`},null,8,["percentage","text"]),h(We,{color:"#FFC25B",title:"待处理",percentage:100*Number(((null==(ce=null==(de=u(w).status)?void 0:de.status100)?void 0:ce.total)+(null==(ve=null==(ue=u(w).status)?void 0:ue.status200)?void 0:ve.total))/(null==(pe=u(w).whole)?void 0:pe.total)),text:`¥${(null==(ge=null==(ye=u(w).status)?void 0:ye.status100)?void 0:ge.total)+(null==(fe=null==(he=u(w).status)?void 0:he.status200)?void 0:fe.total)} \n                ${(null==(xe=null==(me=u(w).status)?void 0:me.status100)?void 0:xe.count)+(null==(we=null==(be=u(w).status)?void 0:be.status200)?void 0:we.count)}笔`},null,8,["percentage","text"]),h(We,{color:"#F6825E",title:"失败",percentage:100*Number((null==(_e=null==(ke=u(w).status)?void 0:ke.status400)?void 0:_e.total)/(null==(Ce=u(w).whole)?void 0:Ce.total)),text:`¥${null==(Ke=null==(Fe=u(w).status)?void 0:Fe.status400)?void 0:Ke.total} ${null==(ze=null==($e=u(w).status)?void 0:$e.status400)?void 0:ze.count}笔`},null,8,["percentage","text"])])):z("",!0)])])]),r("div",zt,[r("div",Rt,[r("div",St,[At,h(il,{link:"",type:"primary",onClick:t[2]||(t[2]=t=>e.$router.push("/brokerage"))},{default:f((()=>[h(sl,null,{default:f((()=>[h(u(L))])),_:1})])),_:1})]),r("div",Bt,[r("div",Tt,[Dt,r("p",Mt,v(null==(Re=u(k).whole)?void 0:Re.count),1),Nt,r("p",Ht,"¥"+v(null==(Se=u(k).whole)?void 0:Se.total),1)]),u(k).whole?(o(),n("div",Ot,[h(We,{color:"#86B0FB",title:"最高分佣个人",type:1,percentage:100*Number((null==(Ae=u(k).topPerson3[0])?void 0:Ae.total)/(null==(Be=u(k).whole)?void 0:Be.total)),text:`¥${(null==(De=u(k).topPerson3[0])?void 0:De.total)||0} ${(null==(Me=u(k).topPerson3[0])?void 0:Me.count)||0}笔`},null,8,["percentage","text"]),h(We,{style:{"margin-top":"16px"},type:2,color:"#C1F4E4",title:"最高分佣团队",percentage:100*Number((null==(Ne=u(k).topTeam)?void 0:Ne.total)/(null==(He=u(k).whole)?void 0:He.total)),text:`¥${(null==(Oe=u(k).topTeam)?void 0:Oe.total)||0} ${(null==(Le=u(k).topTeam)?void 0:Le.count)||0}笔`},null,8,["percentage","text"])])):z("",!0)])]),r("div",Pt,[r("div",Lt,[It,h(il,{link:"",type:"primary",onClick:t[3]||(t[3]=t=>e.$router.push("/member"))},{default:f((()=>[h(sl,null,{default:f((()=>[h(u(L))])),_:1})])),_:1})]),r("div",jt,[(null==(Ie=u($))?void 0:Ie.left)?(o(),K(Pe,{key:0,list:u($)},null,8,["list"])):z("",!0)])])]),r("div",Et,[r("div",Wt,[r("div",Gt,[r("div",Vt,[Ut,r("p",qt,v(null==(Ee=null==(je=u(C))?void 0:je.chatRecord)?void 0:Ee.total),1),r("div",Qt,[r("div",Yt,[Jt,r("span",Xt,v(null==(Ve=null==(Ge=u(C))?void 0:Ge.chatRecord)?void 0:Ve.yesterdayTotal),1)]),r("div",Zt,[ea,r("span",ta,[A(v(null==(qe=null==(Ue=u(C))?void 0:Ue.chatRecord)?void 0:qe.todayTotal)+" ",1),1==(null==(ma=null==(Ye=u(C))?void 0:Ye.chatRecord)?void 0:ma.trend)?(o(),n("span",aa," ↗"+v(null==(ba=null==(xa=u(C))?void 0:xa.chatRecord)?void 0:ba.diffTotal),1)):z("",!0),-1==(null==(ka=null==(wa=u(C))?void 0:wa.chatRecord)?void 0:ka.trend)?(o(),n("span",la," ↘"+v(null==(Ca=null==(_a=u(C))?void 0:_a.chatRecord)?void 0:Ca.diffTotal),1)):z("",!0)])])])])]),(null==(Fa=u(C))?void 0:Fa.chatRecord)?(o(),K(Qe,{key:0,list:[(null==($a=null==(Ka=u(C))?void 0:Ka.chatRecord)?void 0:$a.yesterdayTotal)/(null==(Ra=null==(za=u(C))?void 0:za.chatRecord)?void 0:Ra.total),(null==(Aa=null==(Sa=u(C))?void 0:Sa.chatRecord)?void 0:Aa.todayTotal)/(null==(Ta=null==(Ba=u(C))?void 0:Ba.chatRecord)?void 0:Ta.total)]},null,8,["list"])):z("",!0)]),r("div",sa,[r("div",ia,[r("div",oa,[na,r("p",ra,v(null==(Ma=null==(Da=u(C))?void 0:Da.messageRecord)?void 0:Ma.total),1),r("div",da,[r("div",ca,[ua,r("span",va,v(null==(Ha=null==(Na=u(C))?void 0:Na.messageRecord)?void 0:Ha.yesterdayTotal),1)]),r("div",pa,[ya,r("span",ga,[A(v(null==(Pa=null==(Oa=u(C))?void 0:Oa.messageRecord)?void 0:Pa.todayTotal)+" ",1),1==(null==(Ia=null==(La=u(C))?void 0:La.messageRecord)?void 0:Ia.trend)?(o(),n("span",ha," ↗"+v(null==(Ea=null==(ja=u(C))?void 0:ja.messageRecord)?void 0:Ea.diffTotal),1)):z("",!0),-1==(null==(Ga=null==(Wa=u(C))?void 0:Wa.messageRecord)?void 0:Ga.trend)?(o(),n("span",fa," ↘"+v(null==(Ua=null==(Va=u(C))?void 0:Va.messageRecord)?void 0:Ua.diffTotal),1)):z("",!0)])])])])]),(null==(qa=u(C))?void 0:qa.messageRecord)?(o(),K(Qe,{key:0,list:[(null==(Ya=null==(Qa=u(C))?void 0:Qa.messageRecord)?void 0:Ya.yesterdayTotal)/(null==(Xa=null==(Ja=u(C))?void 0:Ja.messageRecord)?void 0:Xa.total),(null==(el=null==(Za=u(C))?void 0:Za.messageRecord)?void 0:el.todayTotal)/(null==(al=null==(tl=u(C))?void 0:tl.messageRecord)?void 0:al.total)]},null,8,["list"])):z("",!0)])])])])}}},[["__scopeId","data-v-1cca7fd5"]]);export{ma as default};