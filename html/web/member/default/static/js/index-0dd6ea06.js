import{_ as s}from"./index-b0450432.js";import{_ as e,a,b as t}from"./obtainRewards-e35cac04.js";import{_ as i}from"./line-da91b73c.js";import{B as g}from"./back-53f8f195.js";import{u as c}from"./vendor-vue-router-5605f985.js";import{u as n}from"./vendor-vuex-61b6ee10.js";import{_ as v,Z as r}from"./index-886f43d3.js";import{h as o,r as m,a6 as l,o as b,k as d,ba as u,bh as p,bf as U,l as f,u as h,bj as x,bo as y,bk as k,a4 as w,F as j,bm as _,bi as z,bd as C,be as $}from"./vendor-others-96825896.js";import{m as G}from"./vendor-ant-design-vue-7dd2b151.js";import"./vendor-axios-a0dbaeda.js";const N=s=>(C("data-v-304b287a"),s=s(),$(),s),F={class:"content-bg"},R={class:"agent-top"},q={class:"user"},I={class:"user-avator"},M={class:"avator"},L=["src"],P={class:"desc"},A={class:"user-acc"},O={class:"acc-sign"},D=["src"],T={key:0,style:{color:"#7f5a30"}},E={key:0},K={key:1,style:{"font-size":"12px",color:"#825830"}},S={class:"age-opt"},V={class:"ex-cash"},W={class:"left"},B=N((()=>U("p",null,"可提现佣金",-1))),H=N((()=>U("span",null,"元",-1))),J=[N((()=>U("span",null,"提现",-1)))],Z={class:"tongji",style:{"list-style":"none"}},Q=N((()=>U("p",null,"总佣金",-1))),X=N((()=>U("i",null,null,-1))),Y=N((()=>U("p",null,"总业绩",-1))),ss=N((()=>U("i",null,null,-1))),es=N((()=>U("p",null,"已提现",-1))),as=N((()=>U("i",null,null,-1))),ts=N((()=>U("p",null,"团队成员",-1))),is={class:"layout"},gs={class:"menu",style:{"list-style":"none"}},cs=["onClick"],ns={class:"tag"},vs=N((()=>U("h3",null,[w(" 专属推广邀请链接 "),U("i")],-1))),rs={class:"share-box"},os=["data-clipboard-text"],ms=z('<div class="act-flow" data-v-304b287a><div class="tit-card" data-v-304b287a>活动流程</div><section data-v-304b287a><div class="icon" data-v-304b287a><img src="'+e+'" alt="" data-v-304b287a></div><p data-v-304b287a>邀请用户</p></section><div class="line" data-v-304b287a><img src="'+i+'" alt="" data-v-304b287a></div><section data-v-304b287a><div class="icon" data-v-304b287a><img src="'+a+'" alt="" data-v-304b287a></div><p data-v-304b287a>用户充值</p></section><div class="line" data-v-304b287a><img src="'+i+'" alt="" data-v-304b287a></div><section data-v-304b287a><div class="icon" data-v-304b287a><img src="'+t+'" alt="" data-v-304b287a></div><p data-v-304b287a>获得奖励</p></section></div>',1),ls=v({__name:"index",setup(e){var a;const t=o(),{$http:i}=t.appContext.config.globalProperties,v=n(),z=c(),C=m({menu:[],myMenuKey:"1",info:{},origin:location.origin,shareDomain:null==(a=v.state.shareObj)?void 0:a.shareDomain,agentlist:[],idx:0,agentstyle:[]}),{myMenuKey:$,menu:N,info:ls,origin:bs,shareDomain:ds}=l(C),us={Output(){},copy(){let s=new ClipboardJS(".copyEnv");s.on("success",(e=>{G.success("复制成功"),s.destroy()})),s.on("error",(e=>{s.destroy()}))},getMenu(){let s=z.currentRoute.value||{};if(s.matched.length&&s.matched.length>1){let e=s.matched[0]||{};return C.groupName=e.name,e.children||[]}return[]}};b((()=>{C.menu=us.getMenu()}));const ps=d((()=>v.getters.userInfo||{}));(async()=>{await i.get("/openapi/member/agent/info/pc",{params:{}}).then((async s=>{C.info=s.data,i.get("/openapi/member/agent/level/pc",{params:{}}).then((s=>{C.agentlist=s.data,C.idx=s.data.filter((s=>s.id==C.info.level))[0].levelSerial}))}))})();return(e,a)=>{const t=s;return u(),p("div",F,[U("div",R,[f(g),U("div",q,[U("div",I,[U("div",M,[U("img",{src:h(r)(h(ps).headImg),name:"avator",class:"cover",onerror:"errorImg(this)"},null,8,L)]),U("div",P,[U("div",A,[U("p",null,x(h(ps).name),1),U("div",O,[U("img",{src:(i="agent"+Number(C.idx<7?C.idx:1)+".svg",new URL(Object.assign({"../../../../assets/icons/VIP.svg":"/memberUser/static/svg/VIP-e6249a79.svg","../../../../assets/icons/WarningFilled.svg":"/memberUser/static/svg/WarningFilled-eb0db997.svg","../../../../assets/icons/ag1.svg":"/memberUser/static/svg/ag1-0c83b3ff.svg","../../../../assets/icons/ag2.svg":"/memberUser/static/svg/ag2-c0afae41.svg","../../../../assets/icons/ag3.svg":"/memberUser/static/svg/ag3-54d3b83e.svg","../../../../assets/icons/ag4.svg":"/memberUser/static/svg/ag4-1386bfc3.svg","../../../../assets/icons/ag5.svg":"/memberUser/static/svg/ag5-147bc631.svg","../../../../assets/icons/ag6.svg":"/memberUser/static/svg/ag6-c55ba21b.svg","../../../../assets/icons/agent1.svg":"/memberUser/static/svg/ag1-0c83b3ff.svg","../../../../assets/icons/agent2.svg":"/memberUser/static/svg/ag2-c0afae41.svg","../../../../assets/icons/agent3.svg":"/memberUser/static/svg/ag3-54d3b83e.svg","../../../../assets/icons/agent4.svg":"/memberUser/static/svg/ag4-1386bfc3.svg","../../../../assets/icons/agent5.svg":"/memberUser/static/svg/ag5-147bc631.svg","../../../../assets/icons/agent6.svg":"/memberUser/static/svg/ag6-c55ba21b.svg","../../../../assets/icons/apk.svg":"/memberUser/static/svg/apk-360733dc.svg","../../../../assets/icons/arrowRight.svg":"/memberUser/static/svg/arrowRight-90c676a8.svg","../../../../assets/icons/buyGold.svg":"/memberUser/static/svg/buyGold-1651b1a2.svg","../../../../assets/icons/camiactive.svg":"/memberUser/static/svg/camiactive-01eeb883.svg","../../../../assets/icons/changeGold.svg":"/memberUser/static/svg/changeGold-d5f60414.svg","../../../../assets/icons/close.svg":"/memberUser/static/svg/close-c2c51cdf.svg","../../../../assets/icons/crown.svg":"/memberUser/static/svg/crown-6e1956a2.svg","../../../../assets/icons/daoqi.svg":"/memberUser/static/svg/daoqi-a6e6725e.svg","../../../../assets/icons/delete.svg":"/memberUser/static/svg/delete-c4bbae25.svg","../../../../assets/icons/dianbo.svg":"/memberUser/static/svg/dianbo-6c3a1456.svg","../../../../assets/icons/dianshiji.svg":"/memberUser/static/svg/dianshiji-adc8a740.svg","../../../../assets/icons/disanfang.svg":"/memberUser/static/svg/disanfang-3973b9f1.svg","../../../../assets/icons/ext_cash.svg":"/memberUser/static/svg/ext_cash-58cfee52.svg","../../../../assets/icons/ext_per.svg":"/memberUser/static/svg/ext_per-c78d7371.svg","../../../../assets/icons/fanhui.svg":"/memberUser/static/svg/fanhui-7a57de3a.svg","../../../../assets/icons/gold.svg":"/memberUser/static/svg/gold-b1f7c72b.svg","../../../../assets/icons/gonggao.svg":"/memberUser/static/svg/gonggao-9a8bf784.svg","../../../../assets/icons/guankanjilu.svg":"/memberUser/static/svg/guankanjilu-04dd1aeb.svg","../../../../assets/icons/guankanlishi.svg":"/memberUser/static/svg/guankanlishi-aebdb0c6.svg","../../../../assets/icons/huangguan.svg":"/memberUser/static/svg/huangguan-7525d05a.svg","../../../../assets/icons/ios.svg":"/memberUser/static/svg/ios-188a6a98.svg","../../../../assets/icons/jubao.svg":"/memberUser/static/svg/jubao-ac465c37.svg","../../../../assets/icons/kamijihuobeifen.svg":"/memberUser/static/svg/kamijihuobeifen-d83ba618.svg","../../../../assets/icons/kefu.svg":"/memberUser/static/svg/kefu-c0ce7ee3.svg","../../../../assets/icons/line.svg":"/memberUser/static/svg/line-a99fa6cc.svg","../../../../assets/icons/loading.svg":"/memberUser/static/svg/loading-04b43768.svg","../../../../assets/icons/loading_two.svg":"/memberUser/static/svg/loading_two-19833fad.svg","../../../../assets/icons/makeGold.svg":"/memberUser/static/svg/makeGold-67bfc8ec.svg","../../../../assets/icons/mima.svg":"/memberUser/static/svg/mima-789e1d32.svg","../../../../assets/icons/mulu.svg":"/memberUser/static/svg/mulu-8898f9ea.svg","../../../../assets/icons/pay_error.svg":"/memberUser/static/svg/pay_error-f67cad84.svg","../../../../assets/icons/pay_success.svg":"/memberUser/static/svg/pay_success-5c942f1a.svg","../../../../assets/icons/paymentFeedbacksm.svg":"/memberUser/static/svg/paymentFeedbacksm-9241d30b.svg","../../../../assets/icons/paymentFeedbackts.svg":"/memberUser/static/svg/paymentFeedbackts-df28a5c8.svg","../../../../assets/icons/pinglun.svg":"/memberUser/static/svg/pinglun-60d96e70.svg","../../../../assets/icons/plus.svg":"/memberUser/static/svg/plus-aeb5cdf1.svg","../../../../assets/icons/qianjin.svg":"/memberUser/static/svg/qianjin-45208a35.svg","../../../../assets/icons/quxiao.svg":"/memberUser/static/svg/quxiao-4c587121.svg","../../../../assets/icons/receGold.svg":"/memberUser/static/svg/receGold-76c2f30d.svg","../../../../assets/icons/search.svg":"/memberUser/static/svg/search-d3d8e4f8.svg","../../../../assets/icons/sha_cash.svg":"/memberUser/static/svg/sha_cash-a76dc91d.svg","../../../../assets/icons/shouji.svg":"/memberUser/static/svg/shouji-675422ed.svg","../../../../assets/icons/team.svg":"/memberUser/static/svg/team-7867404e.svg","../../../../assets/icons/toLeft.svg":"/memberUser/static/svg/toLeft-1c173da8.svg","../../../../assets/icons/toRight.svg":"/memberUser/static/svg/toRight-3f21fde4.svg","../../../../assets/icons/tobuycami.svg":"/memberUser/static/svg/tobuycami-c7f76863.svg","../../../../assets/icons/top.svg":"/memberUser/static/svg/top-4e51cb90.svg","../../../../assets/icons/touxiang.svg":"/memberUser/static/svg/touxiang-927e3b42.svg","../../../../assets/icons/vip.svg":"/memberUser/static/svg/vip-8d6bb6d8.svg","../../../../assets/icons/vue.svg":"/memberUser/static/svg/vue-5532db34.svg","../../../../assets/icons/weixin.svg":"/memberUser/static/svg/weixin-2b55983b.svg","../../../../assets/icons/withdrawalbank.svg":"/memberUser/static/svg/withdrawalbank-c1b9b504.svg","../../../../assets/icons/withdrawalwx.svg":"/memberUser/static/svg/withdrawalwx-8df8dcd1.svg","../../../../assets/icons/withdrawalzfb.svg":"/memberUser/static/svg/withdrawalzfb-cb9843e5.svg","../../../../assets/icons/wodedingdan.svg":"/memberUser/static/svg/wodedingdan-d35c40eb.svg","../../../../assets/icons/wodejinbi.svg":"/memberUser/static/svg/wodejinbi-07615811.svg","../../../../assets/icons/wodexiaoxi.svg":"/memberUser/static/svg/wodexiaoxi-956402f1.svg","../../../../assets/icons/wodexiaoxi1.svg":"/memberUser/static/svg/wodexiaoxi1-f46ea8d6.svg","../../../../assets/icons/xiangshang.svg":"/memberUser/static/svg/xiangshang-73a32751.svg","../../../../assets/icons/xiangxia.svg":"/memberUser/static/svg/xiangxia-9d94d55e.svg","../../../../assets/icons/xuanzhong.svg":"/memberUser/static/svg/xuanzhong-633c92f4.svg","../../../../assets/icons/yanzhengma.svg":"/memberUser/static/svg/yanzhengma-5e2cecce.svg","../../../../assets/icons/youxiang.svg":"/memberUser/static/svg/youxiang-3a5cb6d4.svg","../../../../assets/icons/zengjia.svg":"/memberUser/static/svg/zengjia-484f568f.svg","../../../../assets/icons/zhanghao.svg":"/memberUser/static/svg/zhanghao-bd1d1534.svg","../../../../assets/icons/zhanghaoshezhi.svg":"/memberUser/static/svg/zhanghaoshezhi-70d24fb8.svg","../../../../assets/icons/zhifubao.svg":"/memberUser/static/svg/zhifubao-4108f292.svg"})[`../../../../assets/icons/${i}`],self.location).href),class:"agentico"},null,8,D),U("span",{class:y("le"+C.idx)},x(h(ls).levelName),3)])]),1!=C.info.lockLevel?(u(),p("div",T,[-1==h(ls).upgradeNextPerformance?(u(),p("div",E," 已经升级到最高等级 ")):(u(),p("div",K," 距升级到"+x(h(ls).upgradeNextLevelName)+"所需要的业绩为："+x(h(ls).upgradeNextPerformance),1))])):k("",!0)])])]),U("div",S,[U("div",V,[U("div",W,[B,U("p",null,[w(x(h(ls).brokerageUsable),1),H])]),U("div",{class:"btn",onClick:a[0]||(a[0]=s=>e.$router.push({name:"AgentMake"}))},J)]),U("ul",Z,[U("li",{class:"link",onClick:a[1]||(a[1]=s=>e.$router.push({name:"AgentGet"}))},[U("div",null,[Q,U("span",null,x(Number(h(ls).brokerageTotalHistory))+"元",1)]),X]),U("li",null,[U("div",null,[Y,U("span",null,x(h(ls).performanceTotal)+"元",1)]),ss]),U("li",{class:"link",onClick:a[2]||(a[2]=s=>e.$router.push({name:"AgentOutput"}))},[U("div",null,[es,U("span",null,"￥"+x(h(ls).brokerageCashed),1)]),as]),U("li",{class:"link",onClick:a[3]||(a[3]=s=>e.$router.push({name:"AgentTeam"}))},[U("div",null,[ts,U("span",null,x(h(ls).teamMember)+"人",1)])])])])]),U("div",is,[U("ul",gs,[(u(!0),p(j,null,_(h(N),((s,a)=>(u(),p(j,null,[s.meta.menu?(u(),p("li",{key:a,onClick:a=>e.$router.push({name:s.name})},[U("div",null,[f(t,{name:s.meta.icon},null,8,["name"])]),U("span",null,x(s.meta.title),1)],8,cs)):k("",!0)],64)))),256))]),U("div",ns,[vs,U("div",rs,[U("section",null,x(`${h(ds)?h(ds):h(bs)}/memberUser/login?r=${h(ls).inviteCode}`),1),U("section",{class:"copyEnv","data-clipboard-text":`${h(ds)?h(ds):h(bs)}/memberUser/login?r=${h(ls).inviteCode}`,onClick:a[4]||(a[4]=s=>us.copy())}," 复制您的分享链接，邀请好友 ",8,os)]),ms])])]);var i}}},[["__scopeId","data-v-304b287a"]]);export{ls as default};
