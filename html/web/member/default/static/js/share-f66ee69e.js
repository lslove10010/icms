import{_ as a}from"./index-b0450432.js";import{_ as s,a as t,b as e}from"./obtainRewards-e35cac04.js";import{_ as i}from"./line-da91b73c.js";import{u as o}from"./vendor-vue-router-5605f985.js";import{u as d}from"./vendor-vuex-61b6ee10.js";import{_ as n}from"./index-886f43d3.js";import{h as c,r,a6 as f,k as v,o as l,ba as b,bh as p,bf as m,l as u,bj as g,u as h,a4 as _,bi as j,bd as x,be as y}from"./vendor-others-96825896.js";import{m as C}from"./vendor-ant-design-vue-7dd2b151.js";import"./vendor-axios-a0dbaeda.js";const D={class:"contain"},$={class:"cu_h5_header"},k={class:"goBack"},T={class:"cont"},w={class:"share-box"},I=["data-clipboard-text"],E=(a=>(x("data-v-9bfac7df"),a=a(),y(),a))((()=>m("i",null,null,-1))),P=j('<div class="act-flow" data-v-9bfac7df><div class="tit-card" data-v-9bfac7df>活动流程</div><section data-v-9bfac7df><div class="icon" data-v-9bfac7df><img src="'+s+'" alt="" data-v-9bfac7df></div><p data-v-9bfac7df>邀请用户</p></section><div class="line" data-v-9bfac7df><img src="'+i+'" alt="" data-v-9bfac7df></div><section data-v-9bfac7df><div class="icon" data-v-9bfac7df><img src="'+t+'" alt="" data-v-9bfac7df></div><p data-v-9bfac7df>用户注册</p></section><div class="line" data-v-9bfac7df><img src="'+i+'" alt="" data-v-9bfac7df></div><section data-v-9bfac7df><div class="icon" data-v-9bfac7df><img src="'+e+'" alt="" data-v-9bfac7df></div><p data-v-9bfac7df>获得奖励</p></section></div>',1),R=n({__name:"share",setup(s){const t=c(),{$http:e}=t.appContext.config.globalProperties,i=d(),n=o(),j=r({info:{inviteCode:null,vipDays:0,teamTotal:0},origin:location.origin,shareDomain:i.state.shareObj.shareDomain}),{info:x,origin:y,shareDomain:R}=f(j),U={copy(){let a=new ClipboardJS(".copyEnv");a.on("success",(s=>{C.success("复制成功"),a.destroy()})),a.on("error",(s=>{a.destroy()}))}};return v((()=>i.getters.userInfo||{})),l((()=>{e.get("/openapi/member/invite_code").then((a=>{j.info.inviteCode=a.data})),e.get("/openapi/member/invite_result").then((a=>{const s=a.data;j.info.teamTotal=s.teamTotal,j.info.vipDays=s.vipDays}))})),(s,t)=>{const e=a;return b(),p("div",D,[m("div",$,[m("div",k,[u(e,{name:"fanhui1",onClick:t[0]||(t[0]=a=>{"/agent/index.html"==n.currentRoute.value.path?n.push("/user"):n.go(-1)})})])]),m("div",T,[m("div",w,[m("section",null,g(`${h(R)?h(R):h(y)}/memberUser/login?r=${h(x).inviteCode}`),1),m("section",{class:"copyEnv","data-clipboard-text":`${h(R)?h(R):h(y)}/memberUser/login?r=${h(x).inviteCode}`,onClick:t[1]||(t[1]=a=>U.copy())}," 复制您的分享链接，邀请好友 ",8,I),m("p",null,[_(" 已成功邀请"),m("span",null,g(h(x).teamTotal),1),_("人"),E,_("获得"),m("span",null,g(h(x).vipDays),1),_("天VIP ")])]),P])])}}},[["__scopeId","data-v-9bfac7df"]]);export{R as default};
