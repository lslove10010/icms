"use strict";(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[885],{90885:(e,t,a)=>{a.d(t,{LW:()=>se});var l=a(26440),s=a(92811);const n=Symbol("uploadContextKey");var o=a(71254),i=a(81040),r=a(89888),u=a(48127),d=a(84365),c=a(63193),p=a(22820);class f extends Error{constructor(e,t,a,l){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=l}}function v(e,t,a){let l;return l=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new f(l,a.status,t.method,e)}var m=a(50885),y=a(40258);const g=["text","picture","picture-card"];let S=1;const h=()=>Date.now()+S++,U=(0,m.o8)({action:{type:String,default:"#"},headers:{type:(0,m.Cq)(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>(0,y.N)({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:(0,m.Cq)(Array),default:()=>(0,y.N)([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:g,default:"text"},httpRequest:{type:(0,m.Cq)(Function),default:e=>{"undefined"==typeof XMLHttpRequest&&(0,p._)("ElUpload","XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",(t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)}));const l=new FormData;if(e.data)for(const[t,a]of Object.entries(e.data))Array.isArray(a)?l.append(t,...a):l.append(t,a);l.append(e.filename,e.file,e.file.name),t.addEventListener("error",(()=>{e.onError(v(a,e,t))})),t.addEventListener("load",(()=>{if(t.status<200||t.status>=300)return e.onError(v(a,e,t));e.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}(t))})),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const s=e.headers||{};if(s instanceof Headers)s.forEach(((e,a)=>t.setRequestHeader(a,e)));else for(const[e,a]of Object.entries(s))(0,c.Z)(a)||t.setRequestHeader(e,String(a));return t.send(l),t}},disabled:Boolean,limit:Number}),w=(0,m.o8)({...U,beforeUpload:{type:(0,m.Cq)(Function),default:i.dG},beforeRemove:{type:(0,m.Cq)(Function)},onRemove:{type:(0,m.Cq)(Function),default:i.dG},onChange:{type:(0,m.Cq)(Function),default:i.dG},onPreview:{type:(0,m.Cq)(Function),default:i.dG},onSuccess:{type:(0,m.Cq)(Function),default:i.dG},onProgress:{type:(0,m.Cq)(Function),default:i.dG},onError:{type:(0,m.Cq)(Function),default:i.dG},onExceed:{type:(0,m.Cq)(Function),default:i.dG}}),k=(0,m.o8)({files:{type:(0,m.Cq)(Array),default:()=>(0,y.N)([])},disabled:{type:Boolean,default:!1},handlePreview:{type:(0,m.Cq)(Function),default:i.dG},listType:{type:String,values:g,default:"text"}});var b=a(63582),C=a(80135),_=a(58533),q=a(81559);const F=["onKeydown"],R=["src"],x=["onClick"],E=["title"],T=["onClick"],W=["onClick"],D=(0,l.aZ)({name:"ElUploadList"}),$=(0,l.aZ)({...D,props:k,emits:{remove:e=>!!e},setup(e,{emit:t}){const{t:a}=(0,C.bU)(),n=(0,_.s3)("upload"),c=(0,_.s3)("icon"),p=(0,_.s3)("list"),f=(0,q.DT)(),v=(0,s.iH)(!1),m=e=>{t("remove",e)};return(e,t)=>((0,l.wg)(),(0,l.j4)(o.W3,{tag:"ul",class:(0,i.C_)([(0,s.SU)(n).b("list"),(0,s.SU)(n).bm("list",e.listType),(0,s.SU)(n).is("disabled",(0,s.SU)(f))]),name:(0,s.SU)(p).b()},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.files,(p=>((0,l.wg)(),(0,l.iD)("li",{key:p.uid||p.name,class:(0,i.C_)([(0,s.SU)(n).be("list","item"),(0,s.SU)(n).is(p.status),{focusing:v.value}]),tabindex:"0",onKeydown:(0,o.D2)((e=>!(0,s.SU)(f)&&m(p)),["delete"]),onFocus:t[0]||(t[0]=e=>v.value=!0),onBlur:t[1]||(t[1]=e=>v.value=!1),onClick:t[2]||(t[2]=e=>v.value=!1)},[(0,l.WI)(e.$slots,"default",{file:p},(()=>["picture"===e.listType||"uploading"!==p.status&&"picture-card"===e.listType?((0,l.wg)(),(0,l.iD)("img",{key:0,class:(0,i.C_)((0,s.SU)(n).be("list","item-thumbnail")),src:p.url,alt:""},null,10,R)):(0,l.kq)("v-if",!0),"uploading"===p.status||"picture-card"!==e.listType?((0,l.wg)(),(0,l.iD)("div",{key:1,class:(0,i.C_)((0,s.SU)(n).be("list","item-info"))},[(0,l._)("a",{class:(0,i.C_)((0,s.SU)(n).be("list","item-name")),onClick:(0,o.iM)((t=>e.handlePreview(p)),["prevent"])},[(0,l.Wm)((0,s.SU)(r.gn),{class:(0,i.C_)((0,s.SU)(c).m("document"))},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.BBB))])),_:1},8,["class"]),(0,l._)("span",{class:(0,i.C_)((0,s.SU)(n).be("list","item-file-name")),title:p.name},(0,i.zw)(p.name),11,E)],10,x),"uploading"===p.status?((0,l.wg)(),(0,l.j4)((0,s.SU)(d.Xh),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(p.percentage),style:(0,i.j5)("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):(0,l.kq)("v-if",!0)],2)):(0,l.kq)("v-if",!0),(0,l._)("label",{class:(0,i.C_)((0,s.SU)(n).be("list","item-status-label"))},["text"===e.listType?((0,l.wg)(),(0,l.j4)((0,s.SU)(r.gn),{key:0,class:(0,i.C_)([(0,s.SU)(c).m("upload-success"),(0,s.SU)(c).m("circle-check")])},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.yGk))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?((0,l.wg)(),(0,l.j4)((0,s.SU)(r.gn),{key:1,class:(0,i.C_)([(0,s.SU)(c).m("upload-success"),(0,s.SU)(c).m("check")])},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.JrY))])),_:1},8,["class"])):(0,l.kq)("v-if",!0)],2),(0,s.SU)(f)?(0,l.kq)("v-if",!0):((0,l.wg)(),(0,l.j4)((0,s.SU)(r.gn),{key:2,class:(0,i.C_)((0,s.SU)(c).m("close")),onClick:e=>m(p)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.x8P))])),_:2},1032,["class","onClick"])),(0,l.kq)(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),(0,l.kq)(" This is a bug which needs to be fixed "),(0,l.kq)(" TODO: Fix the incorrect navigation interaction "),(0,s.SU)(f)?(0,l.kq)("v-if",!0):((0,l.wg)(),(0,l.iD)("i",{key:3,class:(0,i.C_)((0,s.SU)(c).m("close-tip"))},(0,i.zw)((0,s.SU)(a)("el.upload.deleteTip")),3)),"picture-card"===e.listType?((0,l.wg)(),(0,l.iD)("span",{key:4,class:(0,i.C_)((0,s.SU)(n).be("list","item-actions"))},[(0,l._)("span",{class:(0,i.C_)((0,s.SU)(n).be("list","item-preview")),onClick:t=>e.handlePreview(p)},[(0,l.Wm)((0,s.SU)(r.gn),{class:(0,i.C_)((0,s.SU)(c).m("zoom-in"))},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.DYM))])),_:1},8,["class"])],10,T),(0,s.SU)(f)?(0,l.kq)("v-if",!0):((0,l.wg)(),(0,l.iD)("span",{key:0,class:(0,i.C_)((0,s.SU)(n).be("list","item-delete")),onClick:e=>m(p)},[(0,l.Wm)((0,s.SU)(r.gn),{class:(0,i.C_)((0,s.SU)(c).m("delete"))},{default:(0,l.w5)((()=>[(0,l.Wm)((0,s.SU)(u.HG3))])),_:1},8,["class"])],10,W))],2)):(0,l.kq)("v-if",!0)]))],42,F)))),128)),(0,l.WI)(e.$slots,"append")])),_:3},8,["class","name"]))}});var L=(0,b.Z)($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]),j=a(54834),G=a(50279);const P=(0,m.o8)({disabled:{type:Boolean,default:!1}}),Z={file:e=>(0,i.kJ)(e)},I=["onDrop","onDragover"],O="ElUploadDrag",B=(0,l.aZ)({name:O}),M=(0,l.aZ)({...B,props:P,emits:Z,setup(e,{emit:t}){const a=(0,l.f3)(n);a||(0,p._)(O,"usage: <el-upload><el-upload-dragger /></el-upload>");const r=(0,_.s3)("upload"),u=(0,s.iH)(!1),d=(0,q.DT)(),c=e=>{if(d.value)return;u.value=!1,e.stopPropagation();const l=Array.from(e.dataTransfer.files),s=a.accept.value;if(!s)return void t("file",l);const n=l.filter((e=>{const{type:t,name:a}=e,l=a.includes(".")?`.${a.split(".").pop()}`:"",n=t.replace(/\/.*$/,"");return s.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?l===e:/\/\*$/.test(e)?n===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));t("file",n)},f=()=>{d.value||(u.value=!0)};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)([(0,s.SU)(r).b("dragger"),(0,s.SU)(r).is("dragover",u.value)]),onDrop:(0,o.iM)(c,["prevent"]),onDragover:(0,o.iM)(f,["prevent"]),onDragleave:t[0]||(t[0]=(0,o.iM)((e=>u.value=!1),["prevent"]))},[(0,l.WI)(e.$slots,"default")],42,I))}});var H=(0,b.Z)(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const N=(0,m.o8)({...U,beforeUpload:{type:(0,m.Cq)(Function),default:i.dG},onRemove:{type:(0,m.Cq)(Function),default:i.dG},onStart:{type:(0,m.Cq)(Function),default:i.dG},onSuccess:{type:(0,m.Cq)(Function),default:i.dG},onProgress:{type:(0,m.Cq)(Function),default:i.dG},onError:{type:(0,m.Cq)(Function),default:i.dG},onExceed:{type:(0,m.Cq)(Function),default:i.dG}});var A=a(45721);const K=["onKeydown"],X=["name","multiple","accept"],z=(0,l.aZ)({name:"ElUploadContent",inheritAttrs:!1}),J=(0,l.aZ)({...z,props:N,setup(e,{expose:t}){const a=e,n=(0,_.s3)("upload"),r=(0,q.DT)(),u=(0,s.XI)({}),d=(0,s.XI)(),c=e=>{if(0===e.length)return;const{autoUpload:t,limit:l,fileList:s,multiple:n,onStart:o,onExceed:i}=a;if(l&&s.length+e.length>l)i(e,s);else{n||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=h(),o(e),t&&p(e)}}},p=async e=>{if(d.value.value="",!a.beforeUpload)return f(e);let t,l={};try{const s=a.data,n=a.beforeUpload(e);l=(0,i.Kn)(a.data)?(0,j.Z)(a.data):a.data,t=await n,(0,i.Kn)(a.data)&&(0,G.Z)(s,l)&&(l=(0,j.Z)(a.data))}catch(e){t=!1}if(!1===t)return void a.onRemove(e);let s=e;t instanceof Blob&&(s=t instanceof File?t:new File([t],e.name,{type:e.type})),f(Object.assign(s,{uid:e.uid}),l)},f=(e,t)=>{const{headers:l,data:s,method:n,withCredentials:o,name:i,action:r,onProgress:d,onSuccess:c,onError:p,httpRequest:f}=a,{uid:v}=e,m={headers:l||{},withCredentials:o,file:e,data:null!=t?t:s,method:n,filename:i,action:r,onProgress:t=>{d(t,e)},onSuccess:t=>{c(t,e),delete u.value[v]},onError:t=>{p(t,e),delete u.value[v]}},y=f(m);u.value[v]=y,y instanceof Promise&&y.then(m.onSuccess,m.onError)},v=e=>{const t=e.target.files;t&&c(Array.from(t))},m=()=>{r.value||(d.value.value="",d.value.click())},y=()=>{m()};return t({abort:e=>{(0,A.vu)(u.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete u.value[e]}))},upload:p}),(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,i.C_)([(0,s.SU)(n).b(),(0,s.SU)(n).m(e.listType),(0,s.SU)(n).is("drag",e.drag)]),tabindex:"0",onClick:m,onKeydown:(0,o.D2)((0,o.iM)(y,["self"]),["enter","space"])},[e.drag?((0,l.wg)(),(0,l.j4)(H,{key:0,disabled:(0,s.SU)(r),onFile:c},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},8,["disabled"])):(0,l.WI)(e.$slots,"default",{key:1}),(0,l._)("input",{ref_key:"inputRef",ref:d,class:(0,i.C_)((0,s.SU)(n).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:v,onClick:t[0]||(t[0]=(0,o.iM)((()=>{}),["stop"]))},null,42,X)],42,K))}});var Y=(0,b.Z)(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]),V=a(7187);const Q="ElUpload",ee=(e,t)=>{const a=(0,V.NCN)(e,"fileList",void 0,{passive:!0}),s=e=>a.value.find((t=>t.uid===e.uid));function n(e){var a;null==(a=t.value)||a.abort(e)}return(0,l.YP)((()=>e.listType),(t=>{"picture-card"!==t&&"picture"!==t||(a.value=a.value.map((t=>{const{raw:l,url:s}=t;if(!s&&l)try{t.url=URL.createObjectURL(l)}catch(l){e.onError(l,t,a.value)}return t})))})),(0,l.YP)(a,(e=>{for(const t of e)t.uid||(t.uid=h()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:a,abort:n,clearFiles:function(e=["ready","uploading","success","fail"]){a.value=a.value.filter((t=>!e.includes(t.status)))},handleError:(t,l)=>{const n=s(l);n&&(n.status="fail",a.value.splice(a.value.indexOf(n),1),e.onError(t,n,a.value),e.onChange(n,a.value))},handleProgress:(t,l)=>{const n=s(l);n&&(e.onProgress(t,n,a.value),n.status="uploading",n.percentage=Math.round(t.percent))},handleStart:t=>{(0,c.Z)(t.uid)&&(t.uid=h());const l={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if("picture-card"===e.listType||"picture"===e.listType)try{l.url=URL.createObjectURL(t)}catch(t){(0,p.N)(Q,t.message),e.onError(t,l,a.value)}a.value=[...a.value,l],e.onChange(l,a.value)},handleSuccess:(t,l)=>{const n=s(l);n&&(n.status="success",n.response=t,e.onSuccess(t,n,a.value),e.onChange(n,a.value))},handleRemove:async t=>{const l=t instanceof File?s(t):t;l||(0,p._)(Q,"file to be removed not found");const o=t=>{n(t);const l=a.value;l.splice(l.indexOf(t),1),e.onRemove(t,l),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(t)};if(e.beforeRemove){!1!==await e.beforeRemove(l,a.value)&&o(l)}else o(l)},submit:function(){a.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var a;return e&&(null==(a=t.value)?void 0:a.upload(e))}))}}},te=(0,l.aZ)({name:"ElUpload"}),ae=(0,l.aZ)({...te,props:w,setup(e,{expose:t}){const a=e,o=(0,l.Rr)(),i=(0,q.DT)(),r=(0,s.XI)(),{abort:u,submit:d,clearFiles:c,uploadFiles:p,handleStart:f,handleError:v,handleRemove:m,handleSuccess:y,handleProgress:g}=ee(a,r),S=(0,l.Fl)((()=>"picture-card"===a.listType)),h=(0,l.Fl)((()=>({...a,fileList:p.value,onStart:f,onProgress:g,onSuccess:y,onError:v,onRemove:m})));return(0,l.Jd)((()=>{p.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),(0,l.JJ)(n,{accept:(0,s.Vh)(a,"accept")}),t({abort:u,submit:d,clearFiles:c,handleStart:f,handleRemove:m}),(e,t)=>((0,l.wg)(),(0,l.iD)("div",null,[(0,s.SU)(S)&&e.showFileList?((0,l.wg)(),(0,l.j4)(L,{key:0,disabled:(0,s.SU)(i),"list-type":e.listType,files:(0,s.SU)(p),"handle-preview":e.onPreview,onRemove:(0,s.SU)(m)},(0,l.Nv)({append:(0,l.w5)((()=>[(0,l.Wm)(Y,(0,l.dG)({ref_key:"uploadRef",ref:r},(0,s.SU)(h)),{default:(0,l.w5)((()=>[(0,s.SU)(o).trigger?(0,l.WI)(e.$slots,"trigger",{key:0}):(0,l.kq)("v-if",!0),!(0,s.SU)(o).trigger&&(0,s.SU)(o).default?(0,l.WI)(e.$slots,"default",{key:1}):(0,l.kq)("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:(0,l.w5)((({file:t})=>[(0,l.WI)(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):(0,l.kq)("v-if",!0),!(0,s.SU)(S)||(0,s.SU)(S)&&!e.showFileList?((0,l.wg)(),(0,l.j4)(Y,(0,l.dG)({key:1,ref_key:"uploadRef",ref:r},(0,s.SU)(h)),{default:(0,l.w5)((()=>[(0,s.SU)(o).trigger?(0,l.WI)(e.$slots,"trigger",{key:0}):(0,l.kq)("v-if",!0),!(0,s.SU)(o).trigger&&(0,s.SU)(o).default?(0,l.WI)(e.$slots,"default",{key:1}):(0,l.kq)("v-if",!0)])),_:3},16)):(0,l.kq)("v-if",!0),e.$slots.trigger?(0,l.WI)(e.$slots,"default",{key:2}):(0,l.kq)("v-if",!0),(0,l.WI)(e.$slots,"tip"),!(0,s.SU)(S)&&e.showFileList?((0,l.wg)(),(0,l.j4)(L,{key:3,disabled:(0,s.SU)(i),"list-type":e.listType,files:(0,s.SU)(p),"handle-preview":e.onPreview,onRemove:(0,s.SU)(m)},(0,l.Nv)({_:2},[e.$slots.file?{name:"default",fn:(0,l.w5)((({file:t})=>[(0,l.WI)(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):(0,l.kq)("v-if",!0)]))}});var le=(0,b.Z)(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const se=(0,a(18569).nz)(le)}}]);
//# sourceMappingURL=885.js.map