import{o as a,r as l,R as e,ba as s,bb as t,bc as o,l as d,a4 as n,Q as i,bh as r,F as p,bf as u,bj as c,u as b,bk as v,a1 as m,h as g,bd as f,be as y}from"./vendor-others-96825896.js";import{_ as k,p as h}from"./index-886f43d3.js";import{u as w}from"./vendor-vuex-61b6ee10.js";import{m as x,B as _,a as C,M as j}from"./vendor-ant-design-vue-7dd2b151.js";const A=a=>(f("data-v-50f79e21"),a=a(),y(),a),U={class:"detail-dia"},V=A((()=>u("span",{class:"label"},"订单号：",-1))),F={class:"label"},I=A((()=>u("span",{class:"label"},"获得佣金：",-1))),M=A((()=>u("span",{class:"label"},"提成时间：",-1))),N=A((()=>u("span",{class:"label"},"到账金额：",-1))),O=A((()=>u("span",{class:"label"},"提现状态：",-1))),q={key:0,class:"wait"},z={key:1,class:"doing"},B={key:2,class:"ok"},H={key:3,class:"err"},L=A((()=>u("span",{class:"label"},"手续费：",-1))),P=A((()=>u("span",{class:"label"},"提现地址：",-1))),Q=A((()=>u("span",{class:"label"},"提现时间：",-1))),R={class:"feedback",style:{display:"flex","align-items":"center"}},S=A((()=>u("span",{class:"label"},"交易反馈：",-1))),T=k({__name:"feedbackH5",props:{data:{type:Object},type:{type:Number,required:!0}},emits:["close"],setup(f,{emit:y}){const k=f;w();const A=g(),{$http:T}=A.appContext.config.globalProperties;a((()=>{T.get("/openapi/template/customer",{}).then((()=>{}))}));const $=l({visible:!1,value:"",loading:!1,close(){$.visible=!1,$.value="",y("close")},submit(){var a;$.visible&&$.value?($.loading=!0,T.post("/openapi/feedbacks",{feedbackContent:$.value,feedbackType:k.type,resourcesId:String(null==(a=k.data)?void 0:a.id)}).then((()=>{x.success("反馈提交成功"),$.loading=!1,$.close()})).catch((a=>{x.error("系统错误"),$.loading=!1}))):$.close()}});return(a,l)=>{const g=_,y=C,k=j,w=e("loading");return s(),t(k,{visible:!!f.data,"onUpdate:modelValue":l[4]||(l[4]=a=>f.data=!1===a?void 0:f.data),onCancel:l[5]||(l[5]=a=>$.close()),title:4===f.type?"分佣记录详情":"提现记录详情",width:480,centered:"",destroyOnClose:!0},{footer:o((()=>[d(g,{class:"ml-auto",loading:$.loading,onClick:l[2]||(l[2]=a=>$.close())},{default:o((()=>[n(" 取消 ")])),_:1},8,["loading"]),d(g,{type:"primary",disabled:!$.value,loading:$.loading,style:{"background-color":"#007aff",color:"#fff"},class:"border-0 bg-orange group-hover:bg-orangeLight",onClick:l[3]||(l[3]=a=>$.submit())},{default:o((()=>[n(" 确定 ")])),_:1},8,["disabled","loading"])])),default:o((()=>{var a,e,t,k,x,_,C,j,A,T,D,E,G;return[i((s(),r("div",U,[4===f.type?(s(),r(p,{key:0},[u("p",null,[V,n(c(null==(a=f.data)?void 0:a.orderNo),1)]),u("p",null,[u("span",F,"充值账号："+c(null==(e=f.data)?void 0:e.rechargeMemberUsername),1)]),u("p",null,[I,n("￥"+c(null==(t=f.data)?void 0:t.amount2),1)]),u("p",null,[M,n(c((null==(k=f.data)?void 0:k.brokerageAt)?b(h)(null==(x=f.data)?void 0:x.brokerageAt):"-"),1)])],64)):3===f.type?(s(),r(p,{key:1},[u("p",null,[N,n(c(null==(_=f.data)?void 0:_.withdrawAmount)+" U",1)]),u("p",null,[O,100==(null==(C=f.data)?void 0:C.status)?(s(),r("span",q,"待受理")):200==(null==(j=f.data)?void 0:j.status)?(s(),r("span",z,"处理中")):300==(null==(A=f.data)?void 0:A.status)?(s(),r("span",B,"已完成")):(s(),r("span",H,"已关闭:此订单无效"))]),u("p",null,[L,n("￥"+c(null==(T=f.data)?void 0:T.withdrawFees),1)]),u("p",null,[P,n(c(null==(D=f.data)?void 0:D.withdrawAddress),1)]),u("p",null,[Q,n(c((null==(E=f.data)?void 0:E.withdrawAt)?b(h)(null==(G=f.data)?void 0:G.withdrawAt):"-"),1)])],64)):v("",!0),u("p",R,[S,d(g,{type:"link",style:{color:"#007aff !important","margin-bottom":"2px"},onClick:l[0]||(l[0]=a=>$.visible=!0)},{default:o((()=>[n("点击反馈")])),_:1})]),i(d(y,{modelValue:$.value,"onUpdate:modelValue":l[1]||(l[1]=a=>$.value=a),maxlength:"100",rows:6,style:{"font-size":"14px"},placeholder:"请输入反馈内容","show-word-limit":"",type:"textarea"},null,8,["modelValue"]),[[m,$.visible]])])),[[w,$.loading]])]})),_:1},8,["visible","title"])}}},[["__scopeId","data-v-50f79e21"]]);export{T as f};
