import{_ as a}from"./index-886f43d3.js";import{ba as e,bh as t,bi as d}from"./vendor-others-96825896.js";import"./vendor-ant-design-vue-7dd2b151.js";import"./vendor-vue-router-5605f985.js";import"./vendor-vuex-61b6ee10.js";import"./vendor-axios-a0dbaeda.js";const s={class:"conent"},o=[d('<p class="conent_title" data-v-2bf2bf64>抱歉，您的登录已失效，请重新登录</p><div class="goback" data-v-2bf2bf64><a href="/" data-v-2bf2bf64><div class="goback_btn" data-v-2bf2bf64><span data-v-2bf2bf64>返回首页</span></div></a><p data-v-2bf2bf64><span id="back_time" data-v-2bf2bf64>5</span>秒后自动返回</p></div>',2)],n=a({__name:"failure",setup(a){var d=5;function n(a){if(d<=1)return void location.replace("/");d--;document.getElementById("back_time").innerText=d,setTimeout((()=>{n()}),1e3)}return setTimeout((()=>{n()}),1e3),(a,d)=>(e(),t("div",s,o))}},[["__scopeId","data-v-2bf2bf64"]]);export{n as default};
