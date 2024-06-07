import{_ as e}from"./HeaderH5-49d0ad48.js";import{X as a,p as l,a6 as t,Y as s,_ as d}from"./index-886f43d3.js";import{b as n}from"./vendor-vue-router-5605f985.js";import{u as o}from"./vendor-vuex-61b6ee10.js";import{d as r,r as u,o as i,ah as c,a6 as p,ba as m,bh as f,l as v,u as y,bf as h,F as b,bk as w,bc as _,a4 as g,a5 as k,bb as x,bj as C,h as F,bl as I,bd as U,be as P}from"./vendor-others-96825896.js";import{m as K,I as j,B as D,R as E,c as T,D as z,i as N,f as O,F as S}from"./vendor-ant-design-vue-7dd2b151.js";import"./index-b0450432.js";import"./vendor-axios-a0dbaeda.js";const q={class:"content"},Y=(e=>(U("data-v-df80232f"),e=e(),P(),e))((()=>h("div",{class:"cu_txt"},"仅一次修改机会",-1))),$={key:0,class:"nameTip"},A={style:{padding:"1rem 1rem 0rem","text-align":"center"}},J={style:{"text-align":"center"}},Z={class:"chartbtn"},M=["src"],R={class:"chartbtn"},H=["src"],B=d(r({__name:"update",setup(d){var r;const U=o(),P=n(),B=F(),{$http:X}=B.appContext.config.globalProperties,G=["修改用户名","修改昵称","修改性别","修改生日","修改地址","修改签名","修改密码","修改手机号","修改邮箱","修改提现密码"],L=u({myKey:(null==(r=P.query)?void 0:r.id)||0,userInfo:U.getters.userInfo||{},birthday:null,form:{},count:0,countDown:null,codeImg:"",id:0,rules:{newpwd:[{required:!0,trigger:"blur",validator:(e,l,t)=>{(null==l?void 0:l.trim())?a(l.trim())?t():t(new Error("密码由6-20个字符，字母、数字、下划线组成!")):t(new Error("密码不能为空！"))}}],confimpwd:[{required:!0,trigger:"blur",validator:(e,a,l)=>{(null==a?void 0:a.trim())?a!=L.form.newpwd&&L.form.confimpwd?l(new Error("两次密码不一致！")):l():l(new Error("密码不能为空！"))}}],latestFundPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{pattern:/^\d{6}$/,message:"新密码由6位数字组成",trigger:"blur"}],latestFundConfimpwd:[{required:!0,trigger:"blur",validator:(e,a,l)=>{(null==a?void 0:a.trim())?a!=L.form.latestFundPassword?l(new Error("两次密码不一致！")):l():l(new Error("密码不能为空！"))}}]},nameTip:!1}),Q=()=>{let e=JSON.parse(JSON.stringify(L.userInfo)),a={address:e.address,birthday:L.birthday?Math.ceil(JSON.parse(JSON.stringify(L.birthday.valueOf()))/1e3):0,desc:e.desc,nickname:e.nickname,sex:e.sex};X.put("/openapi/member/edit",a).then((e=>{let{data:a}=e;K.success(a.message||"修改成功"),t.go(-1)}))},V=()=>{if(L.nameTip)return!1;X.put("/openapi/member/change_name",{userName:L.userInfo.name}).then((e=>{let{data:a}=e;U.commit("SETUSERINFO",a),t.go(-1)}))};i((()=>{document.title=G[L.myKey],L.birthday=L.userInfo.birthday?c(l(L.userInfo.birthday,"{y}-{m}-{d}"),"YYYY-MM-DD"):null,6!=L.myKey&&9!=L.myKey||ee()}));const W=()=>{/^[a-zA-Z0-9]{3,24}$/.test(L.userInfo.name)?L.nameTip=!1:L.nameTip=!0},ee=()=>{X.get("/openapi/auth/captcha").then((e=>{L.codeImg=e.data.img,L.id=e.data.id}))},ae=e=>{if(7==e){return/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(L.form.account)}if(8==e){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(L.form.account)}},le=async()=>{var e,a;try{let e={code:L.form.code};if(7==L.myKey){e.phone=L.form.account;var l=await X.post("/openapi/member/bind_phone",e)}if(8==L.myKey){e.email=L.form.account;l=await X.post("/openapi/member/bind_email",e)}if(6==L.myKey){let e={password:I.exports(L.form.newpwd),confirmPassword:I.exports(L.form.confimpwd),id:L.id,captcha:L.form.code};l=await X.put("/openapi/member/change_password",e)}if(9==L.myKey){let e={latestFundPassword:I.exports(L.form.latestFundPassword),verifyId:L.id,verifyCode:L.form.code};L.form.originFundPassword&&(e.originFundPassword=I.exports(L.form.originFundPassword));l=await X.post("/openapi/member/fund_password",e)}let{data:a}=l;K.success("修改成功！"),t.go(-1)}catch(s){K.error((null==(a=null==(e=s.response)?void 0:e.data)?void 0:a.message)||"其他错误！")}},te=s((function(){L.countDown&&clearInterval(L.countDown),L.count=60,L.countDown=setInterval((()=>{L.count<1?(L.count=0,clearInterval(L.countDown)):L.count--}),1e3);let e={};7==L.myKey&&(e.phone=L.form.account),8==L.myKey&&(e.email=L.form.account),X.post(7==L.myKey?"openapi/sms/send_sms":"openapi/sms/send_email",e).then((e=>{})).catch((e=>{K.error(e.response.data.message||"发送失败，请重试！"),clearInterval(L.countDown),L.count=0}))}),1e3,!0),{myKey:se,userInfo:de,birthday:ne,form:oe,count:re,codeImg:ue,rules:ie}=p(L);return(a,l)=>{const t=j,s=D,d=E,n=T,o=z,r=N,u=O,i=S;return m(),f("div",null,[v(e,{title:G[y(se)]},null,8,["title"]),h("div",q,[0==y(se)?(m(),f(b,{key:0},[v(t,{value:y(de).name,"onUpdate:value":l[0]||(l[0]=e=>y(de).name=e),placeholder:"请输入用户名",onChange:W,class:"cu_input"},null,8,["value"]),Y,L.nameTip?(m(),f("div",$,"由3~24位数字,字符组成!")):w("",!0),v(s,{class:"cu_btn",onClick:V,disabled:!y(de).name,type:"primary"},{default:_((()=>[g(" 修改 ")])),_:1},8,["disabled"])],64)):w("",!0),1==y(se)?(m(),f(b,{key:1},[v(t,{value:y(de).nickname,"onUpdate:value":l[1]||(l[1]=e=>y(de).nickname=e),placeholder:"请输入昵称",class:"cu_input"},null,8,["value"]),v(s,{class:"cu_btn",onClick:Q,disabled:!y(de).nickname,type:"primary"},{default:_((()=>[g(" 修改 ")])),_:1},8,["disabled"])],64)):w("",!0),2==y(se)?(m(),f(b,{key:2},[h("div",A,[v(n,{value:y(de).sex,"onUpdate:value":l[2]||(l[2]=e=>y(de).sex=e)},{default:_((()=>[v(d,{value:1},{default:_((()=>[g("男")])),_:1}),v(d,{style:{"margin-left":"1rem"},value:2},{default:_((()=>[g("女")])),_:1})])),_:1},8,["value"])]),v(s,{class:"cu_btn",onClick:Q,type:"primary"},{default:_((()=>[g("修改")])),_:1})],64)):w("",!0),3==y(se)?(m(),f(b,{key:3},[h("div",J,[v(o,{value:y(ne),"onUpdate:value":l[3]||(l[3]=e=>k(ne)?ne.value=e:null),placeholder:"请选择生日",style:{width:"calc(100% - 2rem)"}},null,8,["value"])]),v(s,{class:"cu_btn",onClick:Q,type:"primary"},{default:_((()=>[g("修改")])),_:1})],64)):w("",!0),4==y(se)?(m(),f(b,{key:4},[v(t,{value:y(de).address,"onUpdate:value":l[4]||(l[4]=e=>y(de).address=e),placeholder:"请输入地址",class:"cu_input"},null,8,["value"]),v(s,{class:"cu_btn",onClick:Q,disabled:!y(de).address,type:"primary"},{default:_((()=>[g("修改")])),_:1},8,["disabled"])],64)):w("",!0),5==y(se)?(m(),f(b,{key:5},[v(t,{value:y(de).desc,"onUpdate:value":l[5]||(l[5]=e=>y(de).desc=e),placeholder:"请输入签名",class:"cu_input"},null,8,["value"]),v(s,{class:"cu_btn",onClick:Q,disabled:!y(de).desc,type:"primary"},{default:_((()=>[g("修改")])),_:1},8,["disabled"])],64)):w("",!0),7==y(se)||8==y(se)||6==y(se)?(m(),f(b,{key:6},[v(i,{model:y(oe),rules:y(ie),"label-col":{style:{width:"80px"}}},{default:_((()=>[7==y(se)?(m(),x(r,{key:0,label:"新手机号"},{default:_((()=>[v(t,{value:y(oe).account,"onUpdate:value":l[6]||(l[6]=e=>y(oe).account=e),class:"cu_input",placeholder:"请输入新手机号"},null,8,["value"])])),_:1})):w("",!0),8==y(se)?(m(),x(r,{key:1,label:"新邮箱地址"},{default:_((()=>[v(t,{value:y(oe).account,"onUpdate:value":l[7]||(l[7]=e=>y(oe).account=e),class:"cu_input",placeholder:"请输入新邮箱地址"},null,8,["value"])])),_:1})):w("",!0),7==y(se)||8==y(se)?(m(),x(r,{key:2,label:"验证码"},{default:_((()=>[v(t,{value:y(oe).code,"onUpdate:value":l[8]||(l[8]=e=>y(oe).code=e),onkeyup:"this.value= this.value.match(/\\d+(\\.\\d{0,2})?/) ? this.value.match(/\\d+(\\.\\d{0,2})?/)[0] : ''",maxlength:6,class:"cu_input",placeholder:"请输入验证码",style:{width:"60%"}},null,8,["value"]),v(s,{type:"primary",style:{float:"right",height:"40px"},disabled:y(re)>0||!ae(y(se)),onClick:y(te)},{default:_((()=>[g(C(y(re)>0?`${y(re)}s后重新获取`:"发送验证码"),1)])),_:1},8,["disabled","onClick"])])),_:1})):w("",!0),6==y(se)?(m(),f(b,{key:3},[v(r,{label:"新密码",name:"newpwd"},{default:_((()=>[v(u,{autocomplete:"off",value:y(oe).newpwd,"onUpdate:value":l[9]||(l[9]=e=>y(oe).newpwd=e),class:"inputs",placeholder:"请输入新密码"},null,8,["value"])])),_:1}),v(r,{label:"确认新密码",prop:"confimpwd"},{default:_((()=>[v(u,{autocomplete:"off",value:y(oe).confimpwd,"onUpdate:value":l[10]||(l[10]=e=>y(oe).confimpwd=e),class:"inputs",placeholder:"请再次输入新密码"},null,8,["value"])])),_:1}),v(r,{label:"验证码"},{default:_((()=>[v(t,{value:y(oe).code,"onUpdate:value":l[11]||(l[11]=e=>y(oe).code=e),onkeyup:"this.value= this.value.match(/\\d+(\\.\\d{0,2})?/) ? this.value.match(/\\d+(\\.\\d{0,2})?/)[0] : ''",class:"inputs",style:{width:"30%"},maxlength:6,placeholder:"请输入验证码"},null,8,["value"]),h("button",Z,[h("img",{src:y(ue),style:{width:"100%",height:"100%"}},null,8,M)]),h("span",{style:{cursor:"pointer","font-size":"12px"},onClick:ee},"看不清，换一张")])),_:1})],64)):w("",!0)])),_:1},8,["model","rules"]),v(s,{class:"cu_btn",onClick:le,disabled:!y(oe).code,type:"primary",style:{"background-image":"linear-gradient(90deg, #fea875 0%, #ff704c 100%)",color:"#fff"}},{default:_((()=>[g("修改")])),_:1},8,["disabled"])],64)):w("",!0),9==y(se)?(m(),f(b,{key:7},[v(i,{model:y(oe),rules:y(ie),ref:"formRef"},{default:_((()=>[v(r,{label:"旧提现密码",class:"tixian"},{default:_((()=>[v(t,{type:"password","show-password":"",value:y(oe).originFundPassword,"onUpdate:value":l[12]||(l[12]=e=>y(oe).originFundPassword=e),class:"inputs",placeholder:"没有，则不填"},null,8,["value"])])),_:1}),v(r,{label:"新提现密码",class:"tixian",prop:"latestFundPassword"},{default:_((()=>[v(t,{type:"password","show-password":"",value:y(oe).latestFundPassword,"onUpdate:value":l[13]||(l[13]=e=>y(oe).latestFundPassword=e),class:"inputs",placeholder:"请输入新密码"},null,8,["value"])])),_:1}),v(r,{label:"确认新提现密码",class:"tixian",prop:"latestFundConfimpwd"},{default:_((()=>[v(t,{type:"password","show-password":"",value:y(oe).latestFundConfimpwd,"onUpdate:value":l[14]||(l[14]=e=>y(oe).latestFundConfimpwd=e),class:"inputs",placeholder:"请再次输入新密码"},null,8,["value"])])),_:1}),v(r,{label:"验证码",class:"tixian"},{default:_((()=>[v(t,{value:y(oe).code,"onUpdate:value":l[15]||(l[15]=e=>y(oe).code=e),onkeyup:"this.value= this.value.match(/\\d+(\\.\\d{0,2})?/) ? this.value.match(/\\d+(\\.\\d{0,2})?/)[0] : ''",class:"inputs",style:{width:"40%"},maxlength:6,placeholder:"请输入验证码"},null,8,["value"]),h("div",R,[h("img",{src:y(ue),style:{width:"100%",height:"100%"}},null,8,H)]),h("span",{style:{cursor:"pointer","font-size":"12px"},onClick:ee},"看不清，换一张")])),_:1})])),_:1},8,["model","rules"]),v(s,{class:"cu_btn",onClick:le,disabled:!y(oe).code,type:"primary"},{default:_((()=>[g("修改")])),_:1},8,["disabled"])],64)):w("",!0)])])}}}),[["__scopeId","data-v-df80232f"]]);export{B as default};
