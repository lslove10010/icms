import{W as ge,X as U,Y as G,Z as ne,$ as Q,a0 as W,a1 as le,a2 as oe,a3 as B,a4 as _e,a5 as Ne,s as I,a6 as Ce,a7 as Te,a8 as we,a9 as K,aa as re,ab as Pe,t as Se,ac as $e,ad as te,ae,af as Ee,ag as xe}from"./entry-9cc5c370.js";import{s as ke,x as Be,G as L,z as J,a as P,b as R,n as ee,l as ie,m as ce,Q as ue,u as O,X as Oe,c as H,e as D,d as de,_ as Re,U as v,y as ze,H as be,i as Ae,K as Fe,Z as Me,C as Le,L as Ve,M as De,O as Ie}from"./vue-11eabec3.js";const X=Symbol("tabsRootContextKey"),Ke=(e,s,f)=>ge(e.subTree).filter(t=>{var n;return Be(t)&&((n=t.type)==null?void 0:n.name)===s&&!!t.component}).map(t=>t.component.uid).map(t=>f[t]).filter(t=>!!t),Ue=(e,s)=>{const f={},C=ke([]);return{children:C,addChild:n=>{f[n.uid]=n,C.value=Ke(e,s,f)},removeChild:n=>{delete f[n],C.value=C.value.filter(x=>x.uid!==n)}}},We=U({tabs:{type:G(Array),default:()=>ne([])}}),ve="ElTabBar",He=L({name:ve}),Xe=L({...He,props:We,setup(e,{expose:s}){const f=e,C=H(),i=J(X);i||Q(ve,"<el-tabs><el-tab-bar /></el-tabs>");const t=W("tabs"),n=P(),x=P(),d=()=>{let m=0,r=0;const u=["top","bottom"].includes(i.props.tabPosition)?"width":"height",b=u==="width"?"x":"y";return f.tabs.every(S=>{var $,z,a,_;const p=(z=($=C.parent)==null?void 0:$.refs)==null?void 0:z[`tab-${S.uid}`];if(!p)return!1;if(!S.active)return!0;r=p[`client${B(u)}`];const E=b==="x"?"left":"top";m=p[`offset${B(E)}`]-((_=(a=p.parentElement)==null?void 0:a[`offset${B(E)}`])!=null?_:0);const F=p.closest(".is-scrollable");if(F){const V=window.getComputedStyle(F);m+=Number.parseFloat(V[`padding${B(E)}`])}const M=window.getComputedStyle(p);return u==="width"&&(f.tabs.length>1&&(r-=Number.parseFloat(M.paddingLeft)+Number.parseFloat(M.paddingRight)),m+=Number.parseFloat(M.paddingLeft)),!1}),{[u]:`${r}px`,transform:`translate${B(b)}(${m}px)`}},y=()=>x.value=d();return R(()=>f.tabs,async()=>{await ee(),y()},{immediate:!0}),le(n,()=>y()),s({ref:n,update:y}),(m,r)=>(ie(),ce("div",{ref_key:"barRef",ref:n,class:ue([O(t).e("active-bar"),O(t).is(O(i).props.tabPosition)]),style:Oe(x.value)},null,6))}});var qe=oe(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ye=U({panes:{type:G(Array),default:()=>ne([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ze={tabClick:(e,s,f)=>f instanceof Event,tabRemove:(e,s)=>s instanceof Event},se="ElTabNav",je=L({name:se,props:Ye,emits:Ze,setup(e,{expose:s,emit:f}){const C=H(),i=J(X);i||Q(se,"<el-tabs><tab-nav /></el-tabs>");const t=W("tabs"),n=_e(),x=Ne(),d=P(),y=P(),m=P(),r=P(!1),u=P(0),b=P(!1),S=P(!0),$=D(()=>["top","bottom"].includes(i.props.tabPosition)?"width":"height"),z=D(()=>({transform:`translate${$.value==="width"?"X":"Y"}(-${u.value}px)`})),a=()=>{if(!d.value)return;const l=d.value[`offset${B($.value)}`],c=u.value;if(!c)return;const o=c>l?c-l:0;u.value=o},_=()=>{if(!d.value||!y.value)return;const l=y.value[`offset${B($.value)}`],c=d.value[`offset${B($.value)}`],o=u.value;if(l-o<=c)return;const T=l-o>c*2?o+c:l-c;u.value=T},p=async()=>{const l=y.value;if(!r.value||!m.value||!d.value||!l)return;await ee();const c=m.value.querySelector(".is-active");if(!c)return;const o=d.value,T=["top","bottom"].includes(i.props.tabPosition),N=c.getBoundingClientRect(),g=o.getBoundingClientRect(),k=T?l.offsetWidth-g.width:l.offsetHeight-g.height,w=u.value;let h=w;T?(N.left<g.left&&(h=w-(g.left-N.left)),N.right>g.right&&(h=w+N.right-g.right)):(N.top<g.top&&(h=w-(g.top-N.top)),N.bottom>g.bottom&&(h=w+(N.bottom-g.bottom))),h=Math.max(h,0),u.value=Math.min(h,k)},E=()=>{if(!y.value||!d.value)return;const l=y.value[`offset${B($.value)}`],c=d.value[`offset${B($.value)}`],o=u.value;if(c<l){const T=u.value;r.value=r.value||{},r.value.prev=T,r.value.next=T+c<l,l-T<c&&(u.value=l-c)}else r.value=!1,o>0&&(u.value=0)},F=l=>{const c=l.code,{up:o,down:T,left:N,right:g}=K;if(![o,T,N,g].includes(c))return;const k=Array.from(l.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=k.indexOf(l.target);let h;c===N||c===o?w===0?h=k.length-1:h=w-1:w<k.length-1?h=w+1:h=0,k[h].focus({preventScroll:!0}),k[h].click(),M()},M=()=>{S.value&&(b.value=!0)},V=()=>b.value=!1;return R(n,l=>{l==="hidden"?S.value=!1:l==="visible"&&setTimeout(()=>S.value=!0,50)}),R(x,l=>{l?setTimeout(()=>S.value=!0,50):S.value=!1}),le(m,E),de(()=>setTimeout(()=>p(),0)),Re(()=>E()),s({scrollToActiveTab:p,removeFocus:V}),R(()=>e.panes,()=>C.update(),{flush:"post"}),()=>{const l=r.value?[v("span",{class:[t.e("nav-prev"),t.is("disabled",!r.value.prev)],onClick:a},[v(I,null,{default:()=>[v(Ce,null,null)]})]),v("span",{class:[t.e("nav-next"),t.is("disabled",!r.value.next)],onClick:_},[v(I,null,{default:()=>[v(Te,null,null)]})])]:null,c=e.panes.map((o,T)=>{var N,g,k,w;const h=o.uid,q=o.props.disabled,Y=(g=(N=o.props.name)!=null?N:o.index)!=null?g:`${T}`,Z=!q&&(o.isClosable||e.editable);o.index=`${T}`;const pe=Z?v(I,{class:"is-icon-close",onClick:A=>f("tabRemove",o,A)},{default:()=>[v(we,null,null)]}):null,he=((w=(k=o.slots).label)==null?void 0:w.call(k))||o.props.label,ye=!q&&o.active?0:-1;return v("div",{ref:`tab-${h}`,class:[t.e("item"),t.is(i.props.tabPosition),t.is("active",o.active),t.is("disabled",q),t.is("closable",Z),t.is("focus",b.value)],id:`tab-${Y}`,key:`tab-${h}`,"aria-controls":`pane-${Y}`,role:"tab","aria-selected":o.active,tabindex:ye,onFocus:()=>M(),onBlur:()=>V(),onClick:A=>{V(),f("tabClick",o,Y,A)},onKeydown:A=>{Z&&(A.code===K.delete||A.code===K.backspace)&&f("tabRemove",o,A)}},[he,pe])});return v("div",{ref:m,class:[t.e("nav-wrap"),t.is("scrollable",!!r.value),t.is(i.props.tabPosition)]},[l,v("div",{class:t.e("nav-scroll"),ref:d},[v("div",{class:[t.e("nav"),t.is(i.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(i.props.tabPosition))],ref:y,style:z.value,role:"tablist",onKeydown:F},[e.type?null:v(qe,{tabs:[...e.panes]},null),c])])])}}}),Ge=U({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:G(Function),default:()=>!0},stretch:Boolean}),j=e=>Ae(e)||$e(e),Qe={[re]:e=>j(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>j(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>j(e),tabAdd:()=>!0};var Je=L({name:"ElTabs",props:Ge,emits:Qe,setup(e,{emit:s,slots:f,expose:C}){var i,t;const n=W("tabs"),{children:x,addChild:d,removeChild:y}=Ue(H(),"ElTabPane"),m=P(),r=P((t=(i=e.modelValue)!=null?i:e.activeName)!=null?t:"0"),u=a=>{r.value=a,s(re,a),s("tabChange",a)},b=async a=>{var _,p,E;if(!(r.value===a||te(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,r.value))!==!1&&(u(a),(E=(p=m.value)==null?void 0:p.removeFocus)==null||E.call(p))}catch{}},S=(a,_,p)=>{a.props.disabled||(b(_),s("tabClick",a,p))},$=(a,_)=>{a.props.disabled||te(a.props.name)||(_.stopPropagation(),s("edit",a.props.name,"remove"),s("tabRemove",a.props.name))},z=()=>{s("edit",void 0,"add"),s("tabAdd")};return Pe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),R(()=>e.activeName,a=>b(a)),R(()=>e.modelValue,a=>b(a)),R(r,async()=>{var a;await ee(),(a=m.value)==null||a.scrollToActiveTab()}),ze(X,{props:e,currentName:r,registerPane:d,unregisterPane:y}),C({currentName:r}),()=>{const a=e.editable||e.addable?v("span",{class:n.e("new-tab"),tabindex:"0",onClick:z,onKeydown:E=>{E.code===K.enter&&z()}},[v(I,{class:n.is("icon-plus")},{default:()=>[v(Se,null,null)]})]):null,_=v("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,v(je,{ref:m,currentName:r.value,editable:e.editable,type:e.type,panes:x.value,stretch:e.stretch,onTabClick:S,onTabRemove:$},null)]),p=v("div",{class:n.e("content")},[be(f,"default")]);return v("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:e.type==="card",[n.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,p]:[p,_]])}}});const et=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),tt=["id","aria-hidden","aria-labelledby"],fe="ElTabPane",at=L({name:fe}),st=L({...at,props:et,setup(e){const s=e,f=H(),C=Fe(),i=J(X);i||Q(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=W("tab-pane"),n=P(),x=D(()=>s.closable||i.props.closable),d=ae(()=>{var b;return i.currentName.value===((b=s.name)!=null?b:n.value)}),y=P(d.value),m=D(()=>{var b;return(b=s.name)!=null?b:n.value}),r=ae(()=>!s.lazy||y.value||d.value);R(d,b=>{b&&(y.value=!0)});const u=Me({uid:f.uid,slots:C,props:s,paneName:m,active:d,index:n,isClosable:x});return de(()=>{i.registerPane(u)}),Le(()=>{i.unregisterPane(u.uid)}),(b,S)=>O(r)?Ve((ie(),ce("div",{key:0,id:`pane-${O(m)}`,class:ue(O(t).b()),role:"tabpanel","aria-hidden":!O(d),"aria-labelledby":`tab-${O(m)}`},[be(b.$slots,"default")],10,tt)),[[De,O(d)]]):Ie("v-if",!0)}});var me=oe(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ot=Ee(Je,{TabPane:me}),rt=xe(me);export{rt as E,ot as a};