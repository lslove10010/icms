import{F as Z,b as ue,Y as se,i as V,d as oe,h as ie,Z as ce,o as b,c as T,K as L,u as t,P as K,ah as _,T as M,R as j,Q as E,M as q,U as z,j as de}from"./vue-5906fc2c.js";import{n as me,a6 as pe,I as p,N as J,aB as P,av as I,U as h,B as be,q as fe,D as ve,af as S,p as Ne,a8 as Ve,V as he,aC as Ie,t as H,ao as ye,aD as ge,a as we,w as _e,G as Q,x as Ee}from"./entry-5490c999.js";import{v as W}from"./el-table-column-a25f0439.js";const Se=me({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:pe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Pe={[J]:(l,k)=>l!==k,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[P]:l=>p(l)||I(l),[h]:l=>p(l)||I(l)},ke=["aria-label","onKeydown"],Ae=["aria-label","onKeydown"],Fe=Z({name:"ElInputNumber"}),Be=Z({...Fe,props:Se,emits:Pe,setup(l,{expose:k,emit:c}){const r=l,{t:O}=be(),d=fe("input-number"),v=ue(),s=se({currentValue:r.modelValue,userInput:null}),{formItem:f}=ve(),U=V(()=>p(r.modelValue)&&r.modelValue<=r.min),G=V(()=>p(r.modelValue)&&r.modelValue>=r.max),X=V(()=>{const e=Y(r.step);return S(r.precision)?Math.max(Y(r.modelValue),e):(e>r.precision,r.precision)}),A=V(()=>r.controls&&r.controlsPosition==="right"),R=Ne(),N=Ve(),F=V(()=>{if(s.userInput!==null)return s.userInput;let e=s.currentValue;if(I(e))return"";if(p(e)){if(Number.isNaN(e))return"";S(r.precision)||(e=e.toFixed(r.precision))}return e}),B=(e,n)=>{if(S(n)&&(n=X.value),n===0)return Math.round(e);let a=String(e);const o=a.indexOf(".");if(o===-1||!a.replace(".","").split("")[o+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},Y=e=>{if(I(e))return 0;const n=e.toString(),a=n.indexOf(".");let o=0;return a!==-1&&(o=n.length-a-1),o},$=(e,n=1)=>p(e)?B(e+r.step*n):s.currentValue,C=()=>{if(r.readonly||N.value||G.value)return;const e=Number(F.value)||0,n=$(e);y(n),c(P,s.currentValue)},x=()=>{if(r.readonly||N.value||U.value)return;const e=Number(F.value)||0,n=$(e,-1);y(n),c(P,s.currentValue)},D=(e,n)=>{const{max:a,min:o,step:u,precision:m,stepStrictly:g,valueOnClear:w}=r;let i=Number(e);if(I(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=de(w)?{min:o,max:a}[w]:w}return g&&(i=B(Math.round(i/u)*u,m)),S(m)||(i=B(i,m)),(i>a||i<o)&&(i=i>a?a:o,n&&c(h,i)),i},y=(e,n=!0)=>{var a;const o=s.currentValue,u=D(e);if(o!==u){if(!n){c(h,u);return}s.userInput=null,c(h,u),c(J,u,o),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(m=>Q())),s.currentValue=u}},ee=e=>{s.userInput=e;const n=e===""?null:Number(e);c(P,n),y(n,!1)},ne=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&y(n),s.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},re=e=>{c("focus",e)},le=e=>{var n;c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>Q()))};return oe(()=>r.modelValue,e=>{const n=D(s.userInput),a=D(e,!0);(!n||n!==a)&&(s.currentValue=a,s.userInput=null)},{immediate:!0}),ie(()=>{var e;const{min:n,max:a,modelValue:o}=r,u=(e=v.value)==null?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(a)?u.setAttribute("aria-valuemax",String(a)):u.removeAttribute("aria-valuemax"),Number.isFinite(n)?u.setAttribute("aria-valuemin",String(n)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(s.currentValue)),u.setAttribute("aria-disabled",String(N.value)),!p(o)&&o!=null){let m=Number(o);Number.isNaN(m)&&(m=null),c(h,m)}}),ce(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${s.currentValue}`)}),k({focus:te,blur:ae}),(e,n)=>(b(),T("div",{class:K([t(d).b(),t(d).m(t(R)),t(d).is("disabled",t(N)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(A))]),onDragstart:n[0]||(n[0]=z(()=>{},["prevent"]))},[e.controls?L((b(),T("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(d).e("decrease"),t(d).is("disabled",t(U))]),onKeydown:_(x,["enter"])},[M(t(H),null,{default:j(()=>[t(A)?(b(),E(t(he),{key:0})):(b(),E(t(Ie),{key:1}))]),_:1})],42,ke)),[[t(W),x]]):q("v-if",!0),e.controls?L((b(),T("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(d).e("increase"),t(d).is("disabled",t(G))]),onKeydown:_(C,["enter"])},[M(t(H),null,{default:j(()=>[t(A)?(b(),E(t(ye),{key:0})):(b(),E(t(ge),{key:1}))]),_:1})],42,Ae)),[[t(W),C]]):q("v-if",!0),M(t(we),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(F),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(R),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[_(z(C,["prevent"]),["up"]),_(z(x,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ce=_e(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Ke=Ee(Ce);export{Ke as E};