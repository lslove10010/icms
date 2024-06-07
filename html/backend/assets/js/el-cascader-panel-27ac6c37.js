import{G as ce,aa as tn,z as Oe,e as N,ac as T,l as h,m as H,O as Y,R as A,V as re,S as z,U as X,Q as V,P as se,p as ne,a as S,af as de,a6 as on,W as x,c as rn,v as Me,N as dn,y as un,Z as cn,b as ee,aF as pn,d as Ke,n as ae,al as hn,aj as fn,L as pe,X as vn,ag as gn,ak as mn,M as Ie,H as bn}from"./vue-11eabec3.js";import{c6 as kn,aq as Cn,a0 as le,N as yn,F as Nn,s as $e,ax as qe,c7 as Re,a7 as wn,a2 as be,aZ as Ue,ar as We,aP as we,ad as En,a3 as ze,aT as ue,c8 as $n,aa as ge,c9 as me,bD as Ze,ca as Sn,a9 as q,cb as he,cc as je,b as Vn,n as Tn,cd as Pn,aQ as Dn,b0 as Ln,aG as Mn,ce as In,aK as zn,cf as Hn,aS as Fn,aW as Bn,aB as An,aY as On,cg as Kn,a1 as qn,ch as Rn}from"./entry-9cc5c370.js";import{u as He,c as Fe}from"./arrays-2e03ed1f.js";var Un=1,Wn=4;function Ge(e){return kn(e,Un|Wn)}var Zn=1/0;function jn(e){var n=e==null?0:e.length;return n?Cn(e,Zn):[]}const Gn=()=>Math.floor(Math.random()*1e4);var Yn=ce({name:"NodeContent",setup(){return{ns:le("cascader-node")}},render(){const{ns:e}=this,{node:n,panel:a}=this.$parent,{data:l,label:t}=n,{renderLabelFn:u}=a;return tn("span",{class:e.e("label")},u?u({node:n,data:l}):t)}});const Se=Symbol(),Xn=ce({name:"ElCascaderNode",components:{ElCheckbox:yn,ElRadio:Nn,NodeContent:Yn,ElIcon:$e,Check:qe,Loading:Re,ArrowRight:wn},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:n}){const a=Oe(Se),l=le("cascader-node"),t=N(()=>a.isHoverMenu),u=N(()=>a.config.multiple),d=N(()=>a.config.checkStrictly),c=N(()=>{var b;return(b=a.checkedNodes[0])==null?void 0:b.uid}),f=N(()=>e.node.isDisabled),v=N(()=>e.node.isLeaf),m=N(()=>d.value&&!v.value||!f.value),$=N(()=>D(a.expandingNode)),y=N(()=>d.value&&a.checkedNodes.some(D)),D=b=>{var M;const{level:Z,uid:oe}=e.node;return((M=b==null?void 0:b.pathNodes[Z-1])==null?void 0:M.uid)===oe},L=()=>{$.value||a.expandNode(e.node)},U=b=>{const{node:M}=e;b!==M.checked&&a.handleCheckChange(M,b)},o=()=>{a.lazyLoad(e.node,()=>{v.value||L()})},P=b=>{!t.value||(F(),!v.value&&n("expand",b))},F=()=>{const{node:b}=e;!m.value||b.loading||(b.loaded?L():o())},B=()=>{t.value&&!v.value||(v.value&&!f.value&&!d.value&&!u.value?W(!0):F())},Q=b=>{d.value?(U(b),e.node.loaded&&L()):W(b)},W=b=>{e.node.loaded?(U(b),!d.value&&L()):o()};return{panel:a,isHoverMenu:t,multiple:u,checkStrictly:d,checkedNodeId:c,isDisabled:f,isLeaf:v,expandable:m,inExpandingPath:$,inCheckedPath:y,ns:l,handleHoverExpand:P,handleExpand:F,handleClick:B,handleCheck:W,handleSelectCheck:Q}}}),Qn=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],Jn=ne("span",null,null,-1);function _n(e,n,a,l,t,u){const d=T("el-checkbox"),c=T("el-radio"),f=T("check"),v=T("el-icon"),m=T("node-content"),$=T("loading"),y=T("arrow-right");return h(),H("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:V([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:n[2]||(n[2]=(...D)=>e.handleHoverExpand&&e.handleHoverExpand(...D)),onFocus:n[3]||(n[3]=(...D)=>e.handleHoverExpand&&e.handleHoverExpand(...D)),onClick:n[4]||(n[4]=(...D)=>e.handleClick&&e.handleClick(...D))},[Y(" prefix "),e.multiple?(h(),A(d,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:n[0]||(n[0]=re(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(h(),A(c,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:n[1]||(n[1]=re(()=>{},["stop"]))},{default:z(()=>[Y(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),Jn]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(h(),A(v,{key:2,class:V(e.ns.e("prefix"))},{default:z(()=>[X(f)]),_:1},8,["class"])):Y("v-if",!0),Y(" content "),X(m),Y(" postfix "),e.isLeaf?Y("v-if",!0):(h(),H(se,{key:3},[e.node.loading?(h(),A(v,{key:0,class:V([e.ns.is("loading"),e.ns.e("postfix")])},{default:z(()=>[X($)]),_:1},8,["class"])):(h(),A(v,{key:1,class:V(["arrow-right",e.ns.e("postfix")])},{default:z(()=>[X(y)]),_:1},8,["class"]))],64))],42,Qn)}var xn=be(Xn,[["render",_n],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);const ea=ce({name:"ElCascaderMenu",components:{Loading:Re,ElIcon:$e,ElScrollbar:Ue,ElCascaderNode:xn},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const n=rn(),a=le("cascader-menu"),{t:l}=We(),t=Gn();let u=null,d=null;const c=Oe(Se),f=S(null),v=N(()=>!e.nodes.length),m=N(()=>!c.initialLoaded),$=N(()=>`cascader-menu-${t}-${e.index}`),y=o=>{u=o.target},D=o=>{if(!(!c.isHoverMenu||!u||!f.value))if(u.contains(o.target)){L();const P=n.vnode.el,{left:F}=P.getBoundingClientRect(),{offsetWidth:B,offsetHeight:Q}=P,W=o.clientX-F,b=u.offsetTop,M=b+u.offsetHeight;f.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${W} ${b} L${B} 0 V${b} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${W} ${M} L${B} ${Q} V${M} Z" />
        `}else d||(d=window.setTimeout(U,c.config.hoverThreshold))},L=()=>{!d||(clearTimeout(d),d=null)},U=()=>{!f.value||(f.value.innerHTML="",L())};return{ns:a,panel:c,hoverZone:f,isEmpty:v,isLoading:m,menuId:$,t:l,handleExpand:y,handleMouseMove:D,clearHoverZone:U}}});function na(e,n,a,l,t,u){const d=T("el-cascader-node"),c=T("loading"),f=T("el-icon"),v=T("el-scrollbar");return h(),A(v,{key:e.menuId,tag:"ul",role:"menu",class:V(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:z(()=>{var m;return[(h(!0),H(se,null,de(e.nodes,$=>(h(),A(d,{key:$.uid,node:$,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(h(),H("div",{key:0,class:V(e.ns.e("empty-text"))},[X(f,{size:"14",class:V(e.ns.is("loading"))},{default:z(()=>[X(c)]),_:1},8,["class"]),on(" "+x(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(h(),H("div",{key:1,class:V(e.ns.e("empty-text"))},x(e.t("el.cascader.noData")),3)):(m=e.panel)!=null&&m.isHoverMenu?(h(),H("svg",{key:2,ref:"hoverZone",class:V(e.ns.e("hover-zone"))},null,2)):Y("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var aa=be(ea,[["render",na],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);let sa=0;const la=e=>{const n=[e];let{parent:a}=e;for(;a;)n.unshift(a),a=a.parent;return n};class te{constructor(n,a,l,t=!1){this.data=n,this.config=a,this.parent=l,this.root=t,this.uid=sa++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:u,label:d,children:c}=a,f=n[c],v=la(this);this.level=t?0:l?l.level+1:1,this.value=n[u],this.label=n[d],this.pathNodes=v,this.pathValues=v.map(m=>m.value),this.pathLabels=v.map(m=>m.label),this.childrenData=f,this.children=(f||[]).map(m=>new te(m,a,this)),this.loaded=!a.lazy||this.isLeaf||!we(f)}get isDisabled(){const{data:n,parent:a,config:l}=this,{disabled:t,checkStrictly:u}=l;return(Me(t)?t(n,this):!!n[t])||!u&&(a==null?void 0:a.isDisabled)}get isLeaf(){const{data:n,config:a,childrenData:l,loaded:t}=this,{lazy:u,leaf:d}=a,c=Me(d)?d(n,this):n[d];return En(c)?u&&!t?!1:!(Array.isArray(l)&&l.length):!!c}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(n){const{childrenData:a,children:l}=this,t=new te(n,this.config,this);return Array.isArray(a)?a.push(n):this.childrenData=[n],l.push(t),t}calcText(n,a){const l=n?this.pathLabels.join(a):this.label;return this.text=l,l}broadcast(n,...a){const l=`onParent${ze(n)}`;this.children.forEach(t=>{t&&(t.broadcast(n,...a),t[l]&&t[l](...a))})}emit(n,...a){const{parent:l}=this,t=`onChild${ze(n)}`;l&&(l[t]&&l[t](...a),l.emit(n,...a))}onParentCheck(n){this.isDisabled||this.setCheckState(n)}onChildCheck(){const{children:n}=this,a=n.filter(t=>!t.isDisabled),l=a.length?a.every(t=>t.checked):!1;this.setCheckState(l)}setCheckState(n){const a=this.children.length,l=this.children.reduce((t,u)=>{const d=u.checked?1:u.indeterminate?.5:0;return t+d},0);this.checked=this.loaded&&this.children.filter(t=>!t.isDisabled).every(t=>t.loaded&&t.checked)&&n,this.indeterminate=this.loaded&&l!==a&&l>0}doCheck(n){if(this.checked===n)return;const{checkStrictly:a,multiple:l}=this.config;a||!l?this.checked=n:(this.broadcast("check",n),this.setCheckState(n),this.emit("check"))}}const Ee=(e,n)=>e.reduce((a,l)=>(l.isLeaf?a.push(l):(!n&&a.push(l),a=a.concat(Ee(l.children,n))),a),[]);class Be{constructor(n,a){this.config=a;const l=(n||[]).map(t=>new te(t,this.config));this.nodes=l,this.allNodes=Ee(l,!1),this.leafNodes=Ee(l,!0)}getNodes(){return this.nodes}getFlattedNodes(n){return n?this.leafNodes:this.allNodes}appendNode(n,a){const l=a?a.appendChild(n):new te(n,this.config);a||this.nodes.push(l),this.allNodes.push(l),l.isLeaf&&this.leafNodes.push(l)}appendNodes(n,a){n.forEach(l=>this.appendNode(l,a))}getNodeByValue(n,a=!1){return!n&&n!==0?null:this.getFlattedNodes(a).find(t=>ue(t.value,n)||ue(t.pathValues,n))||null}getSameNode(n){return n&&this.getFlattedNodes(!1).find(({value:l,level:t})=>ue(n.value,l)&&n.level===t)||null}}const Ye={modelValue:[Number,String,Array],options:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})}},ta={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:dn,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},oa=e=>N(()=>({...ta,...e.props})),Ae=e=>{if(!e)return 0;const n=e.id.split("-");return Number(n[n.length-2])},ia=e=>{if(!e)return;const n=e.querySelector("input");n?n.click():$n(e)&&e.click()},ra=(e,n)=>{const a=n.slice(0),l=a.map(u=>u.uid),t=e.reduce((u,d)=>{const c=l.indexOf(d.uid);return c>-1&&(u.push(d),a.splice(c,1),l.splice(c,1)),u},[]);return t.push(...a),t},da=ce({name:"ElCascaderPanel",components:{ElCascaderMenu:aa},props:{...Ye,border:{type:Boolean,default:!0},renderLabel:Function},emits:[ge,me,"close","expand-change"],setup(e,{emit:n,slots:a}){let l=!1;const t=le("cascader"),u=oa(e);let d=null;const c=S(!0),f=S([]),v=S(null),m=S([]),$=S(null),y=S([]),D=N(()=>u.value.expandTrigger==="hover"),L=N(()=>e.renderLabel||a.default),U=()=>{const{options:i}=e,p=u.value;l=!1,d=new Be(i,p),m.value=[d.getNodes()],p.lazy&&we(e.options)?(c.value=!1,o(void 0,g=>{g&&(d=new Be(g,p),m.value=[d.getNodes()]),c.value=!0,Z(!1,!0)})):Z(!1,!0)},o=(i,p)=>{const g=u.value;i=i||new te({},g,void 0,!0),i.loading=!0;const C=E=>{const w=i,j=w.root?null:w;E&&(d==null||d.appendNodes(E,j)),w.loading=!1,w.loaded=!0,w.childrenData=w.childrenData||[],p&&p(E)};g.lazyLoad(i,C)},P=(i,p)=>{var g;const{level:C}=i,E=m.value.slice(0,C);let w;i.isLeaf?w=i.pathNodes[C-2]:(w=i,E.push(i.children)),((g=$.value)==null?void 0:g.uid)!==(w==null?void 0:w.uid)&&($.value=i,m.value=E,!p&&n("expand-change",(i==null?void 0:i.pathValues)||[]))},F=(i,p,g=!0)=>{const{checkStrictly:C,multiple:E}=u.value,w=y.value[0];l=!0,!E&&(w==null||w.doCheck(!1)),i.doCheck(p),M(),g&&!E&&!C&&n("close"),!g&&!E&&!C&&B(i)},B=i=>{!i||(i=i.parent,B(i),i&&P(i))},Q=i=>d==null?void 0:d.getFlattedNodes(i),W=i=>{var p;return(p=Q(i))==null?void 0:p.filter(g=>g.checked!==!1)},b=()=>{y.value.forEach(i=>i.doCheck(!1)),M()},M=()=>{var i;const{checkStrictly:p,multiple:g}=u.value,C=y.value,E=W(!p),w=ra(C,E),j=w.map(O=>O.valueByOption);y.value=w,v.value=g?j:(i=j[0])!=null?i:null},Z=(i=!1,p=!1)=>{const{modelValue:g}=e,{lazy:C,multiple:E,checkStrictly:w}=u.value,j=!w;if(!(!c.value||l||!p&&ue(g,v.value)))if(C&&!i){const R=He(jn(Fe(g))).map(K=>d==null?void 0:d.getNodeByValue(K)).filter(K=>!!K&&!K.loaded&&!K.loading);R.length?R.forEach(K=>{o(K,()=>Z(!1,p))}):Z(!0,p)}else{const O=E?Fe(g):[g],R=He(O.map(K=>d==null?void 0:d.getNodeByValue(K,j)));oe(R,p),v.value=Ge(g)}},oe=(i,p=!0)=>{const{checkStrictly:g}=u.value,C=y.value,E=i.filter(O=>!!O&&(g||O.isLeaf)),w=d==null?void 0:d.getSameNode($.value),j=p&&w||E[0];j?j.pathNodes.forEach(O=>P(O,!0)):$.value=null,C.forEach(O=>O.doCheck(!1)),E.forEach(O=>O.doCheck(!0)),y.value=E,ae(ie)},ie=()=>{!Ze||f.value.forEach(i=>{const p=i==null?void 0:i.$el;if(p){const g=p.querySelector(`.${t.namespace.value}-scrollbar__wrap`),C=p.querySelector(`.${t.b("node")}.${t.is("active")}`)||p.querySelector(`.${t.b("node")}.in-active-path`);Sn(g,C)}})},ke=i=>{const p=i.target,{code:g}=i;switch(g){case q.up:case q.down:{i.preventDefault();const C=g===q.up?-1:1;he(je(p,C,`.${t.b("node")}[tabindex="-1"]`));break}case q.left:{i.preventDefault();const C=f.value[Ae(p)-1],E=C==null?void 0:C.$el.querySelector(`.${t.b("node")}[aria-expanded="true"]`);he(E);break}case q.right:{i.preventDefault();const C=f.value[Ae(p)+1],E=C==null?void 0:C.$el.querySelector(`.${t.b("node")}[tabindex="-1"]`);he(E);break}case q.enter:ia(p);break}};return un(Se,cn({config:u,expandingNode:$,checkedNodes:y,isHoverMenu:D,initialLoaded:c,renderLabelFn:L,lazyLoad:o,expandNode:P,handleCheckChange:F})),ee([u,()=>e.options],U,{deep:!0,immediate:!0}),ee(()=>e.modelValue,()=>{l=!1,Z()},{deep:!0}),ee(()=>v.value,i=>{ue(i,e.modelValue)||(n(ge,i),n(me,i))}),pn(()=>f.value=[]),Ke(()=>!we(e.modelValue)&&Z()),{ns:t,menuList:f,menus:m,checkedNodes:y,handleKeyDown:ke,handleCheckChange:F,getFlattedNodes:Q,getCheckedNodes:W,clearCheckedNodes:b,calculateCheckedValue:M,scrollToExpandingNode:ie}}});function ua(e,n,a,l,t,u){const d=T("el-cascader-menu");return h(),H("div",{class:V([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:n[0]||(n[0]=(...c)=>e.handleKeyDown&&e.handleKeyDown(...c))},[(h(!0),H(se,null,de(e.menus,(c,f)=>(h(),A(d,{key:f,ref_for:!0,ref:v=>e.menuList[f]=v,index:f,nodes:[...c]},null,8,["index","nodes"]))),128))],34)}var fe=be(da,[["render",ua],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);fe.install=e=>{e.component(fe.name,fe)};const ca=fe,pa={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:e})=>{const{modifiersData:n,placement:a}=e;["right","left","bottom","top"].includes(a)||(n.arrow.x=35)},requires:["arrow"]}]},ha="ElCascader",fa=ce({name:ha,components:{ElCascaderPanel:ca,ElInput:Vn,ElTooltip:Tn,ElScrollbar:Ue,ElTag:Pn,ElIcon:$e,CircleClose:Dn,Check:qe,ArrowDown:Ln},directives:{Clickoutside:Mn},props:{...Ye,size:{type:String,validator:In},placeholder:{type:String},disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:Function,default:(e,n)=>e.text.includes(n)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:Function,default:()=>!0},popperClass:{type:String,default:""},teleported:zn.teleported,tagType:{...Hn.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[ge,me,"focus","blur","visible-change","expand-change","remove-tag"],setup(e,{emit:n}){let a=0,l=0;const t=le("cascader"),u=le("input"),{t:d}=We(),{form:c,formItem:f}=Fn(),v=S(null),m=S(null),$=S(null),y=S(null),D=S(null),L=S(!1),U=S(!1),o=S(!1),P=S(""),F=S(""),B=S([]),Q=S([]),W=S([]),b=S(!1),M=N(()=>e.disabled||(c==null?void 0:c.disabled)),Z=N(()=>e.placeholder||d("el.cascader.placeholder")),oe=N(()=>F.value||B.value.length>0?"":Z.value),ie=Bn(),ke=N(()=>["small"].includes(ie.value)?"small":"default"),i=N(()=>!!e.props.multiple),p=N(()=>!e.filterable||i.value),g=N(()=>i.value?F.value:P.value),C=N(()=>{var s;return((s=y.value)==null?void 0:s.checkedNodes)||[]}),E=N(()=>!e.clearable||M.value||o.value||!U.value?!1:!!C.value.length),w=N(()=>{const{showAllLevels:s,separator:r}=e,k=C.value;return k.length?i.value?"":k[0].calcText(s,r):""}),j=N({get(){return Ge(e.modelValue)},set(s){n(ge,s),n(me,s),e.validateEvent&&(f==null||f.validate("change").catch(r=>An()))}}),O=N(()=>{var s,r;return(r=(s=v.value)==null?void 0:s.popperRef)==null?void 0:r.contentRef}),R=s=>{var r,k,I;M.value||(s=s!=null?s:!L.value,s!==L.value&&(L.value=s,(k=(r=m.value)==null?void 0:r.input)==null||k.setAttribute("aria-expanded",`${s}`),s?(K(),ae((I=y.value)==null?void 0:I.scrollToExpandingNode)):e.filterable&&Ne(),n("visible-change",s)))},K=()=>{ae(()=>{var s;(s=v.value)==null||s.updatePopper()})},Ce=()=>{o.value=!1},ye=s=>{const{showAllLevels:r,separator:k}=e;return{node:s,key:s.uid,text:s.calcText(r,k),hitState:!1,closable:!M.value&&!s.isDisabled,isCollapseTag:!1}},Ve=s=>{var r;const k=s.node;k.doCheck(!1),(r=y.value)==null||r.calculateCheckedValue(),n("remove-tag",k.valueByOption)},Xe=()=>{if(!i.value)return;const s=C.value,r=[],k=[];if(s.forEach(I=>k.push(ye(I))),Q.value=k,s.length){const[I,..._]=s,J=_.length;r.push(ye(I)),J&&(e.collapseTags?r.push({key:-1,text:`+ ${J}`,closable:!1,isCollapseTag:!0}):_.forEach(G=>r.push(ye(G))))}B.value=r},Te=()=>{var s,r;const{filterMethod:k,showAllLevels:I,separator:_}=e,J=(r=(s=y.value)==null?void 0:s.getFlattedNodes(!e.props.checkStrictly))==null?void 0:r.filter(G=>G.isDisabled?!1:(G.calcText(I,_),k(G,g.value)));i.value&&(B.value.forEach(G=>{G.hitState=!1}),Q.value.forEach(G=>{G.hitState=!1})),o.value=!0,W.value=J,K()},Pe=()=>{var s;let r;o.value&&D.value?r=D.value.$el.querySelector(`.${t.e("suggestion-item")}`):r=(s=y.value)==null?void 0:s.$el.querySelector(`.${t.b("node")}[tabindex="-1"]`),r&&(r.focus(),!o.value&&r.click())},De=()=>{var s,r;const k=(s=m.value)==null?void 0:s.input,I=$.value,_=(r=D.value)==null?void 0:r.$el;if(!(!Ze||!k)){if(_){const J=_.querySelector(`.${t.e("suggestion-list")}`);J.style.minWidth=`${k.offsetWidth}px`}if(I){const{offsetHeight:J}=I,G=B.value.length>0?`${Math.max(J+6,a)}px`:`${a}px`;k.style.height=G,K()}}},Qe=s=>{var r;return(r=y.value)==null?void 0:r.getCheckedNodes(s)},Je=s=>{K(),n("expand-change",s)},_e=s=>{var r;const k=(r=s.target)==null?void 0:r.value;if(s.type==="compositionend")b.value=!1,ae(()=>Le(k));else{const I=k[k.length-1]||"";b.value=!Rn(I)}},xe=s=>{if(!b.value)switch(s.code){case q.enter:R();break;case q.down:R(!0),ae(Pe),s.preventDefault();break;case q.esc:L.value===!0&&(s.preventDefault(),s.stopPropagation(),R(!1));break;case q.tab:R(!1);break}},en=()=>{var s;(s=y.value)==null||s.clearCheckedNodes(),!L.value&&e.filterable&&Ne(),R(!1)},Ne=()=>{const{value:s}=w;P.value=s,F.value=s},nn=s=>{var r,k;const{checked:I}=s;i.value?(r=y.value)==null||r.handleCheckChange(s,!I,!1):(!I&&((k=y.value)==null||k.handleCheckChange(s,!0,!1)),R(!1))},an=s=>{const r=s.target,{code:k}=s;switch(k){case q.up:case q.down:{const I=k===q.up?-1:1;he(je(r,I,`.${t.e("suggestion-item")}[tabindex="-1"]`));break}case q.enter:r.click();break}},sn=()=>{const s=B.value,r=s[s.length-1];l=F.value?0:l+1,!(!r||!l||e.collapseTags&&s.length>1)&&(r.hitState?Ve(r):r.hitState=!0)},ln=On(()=>{const{value:s}=g;if(!s)return;const r=e.beforeFilter(s);hn(r)?r.then(Te).catch(()=>{}):r!==!1?Te():Ce()},e.debounce),Le=(s,r)=>{!L.value&&R(!0),!(r!=null&&r.isComposing)&&(s?ln():Ce())};return ee(o,K),ee([C,M],Xe),ee(B,()=>{ae(()=>De())}),ee(w,Ne,{immediate:!0}),Ke(()=>{const s=m.value.input,r=Number.parseFloat(Kn(u.cssVarName("input-height"),s).value)-2;a=s.offsetHeight||r,qn(s,De)}),{popperOptions:pa,tooltipRef:v,popperPaneRef:O,input:m,tagWrapper:$,panel:y,suggestionPanel:D,popperVisible:L,inputHover:U,inputPlaceholder:Z,currentPlaceholder:oe,filtering:o,presentText:w,checkedValue:j,inputValue:P,searchInputValue:F,presentTags:B,allPresentTags:Q,suggestions:W,isDisabled:M,isOnComposition:b,realSize:ie,tagSize:ke,multiple:i,readonly:p,clearBtnVisible:E,nsCascader:t,nsInput:u,t:d,togglePopperVisible:R,hideSuggestionPanel:Ce,deleteTag:Ve,focusFirstNode:Pe,getCheckedNodes:Qe,handleExpandChange:Je,handleKeyDown:xe,handleComposition:_e,handleClear:en,handleSuggestionClick:nn,handleSuggestionKeyDown:an,handleDelete:sn,handleInput:Le}}}),va={key:0},ga=["placeholder"],ma=["onClick"];function ba(e,n,a,l,t,u){const d=T("circle-close"),c=T("el-icon"),f=T("arrow-down"),v=T("el-input"),m=T("el-tag"),$=T("el-tooltip"),y=T("el-cascader-panel"),D=T("check"),L=T("el-scrollbar"),U=fn("clickoutside");return h(),A($,{ref:"tooltipRef",visible:e.popperVisible,teleported:e.teleported,"popper-class":[e.nsCascader.e("dropdown"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${e.nsCascader.namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:e.hideSuggestionPanel},{default:z(()=>[pe((h(),H("div",{class:V([e.nsCascader.b(),e.nsCascader.m(e.realSize),e.nsCascader.is("disabled",e.isDisabled),e.$attrs.class]),style:vn(e.$attrs.style),onClick:n[11]||(n[11]=()=>e.togglePopperVisible(e.readonly?void 0:!0)),onKeydown:n[12]||(n[12]=(...o)=>e.handleKeyDown&&e.handleKeyDown(...o)),onMouseenter:n[13]||(n[13]=o=>e.inputHover=!0),onMouseleave:n[14]||(n[14]=o=>e.inputHover=!1)},[X(v,{ref:"input",modelValue:e.inputValue,"onUpdate:modelValue":n[1]||(n[1]=o=>e.inputValue=o),placeholder:e.currentPlaceholder,readonly:e.readonly,disabled:e.isDisabled,"validate-event":!1,size:e.realSize,class:V(e.nsCascader.is("focus",e.popperVisible)),onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onFocus:n[2]||(n[2]=o=>e.$emit("focus",o)),onBlur:n[3]||(n[3]=o=>e.$emit("blur",o)),onInput:e.handleInput},{suffix:z(()=>[e.clearBtnVisible?(h(),A(c,{key:"clear",class:V([e.nsInput.e("icon"),"icon-circle-close"]),onClick:re(e.handleClear,["stop"])},{default:z(()=>[X(d)]),_:1},8,["class","onClick"])):(h(),A(c,{key:"arrow-down",class:V([e.nsInput.e("icon"),"icon-arrow-down",e.nsCascader.is("reverse",e.popperVisible)]),onClick:n[0]||(n[0]=re(o=>e.togglePopperVisible(),["stop"]))},{default:z(()=>[X(f)]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","onCompositionstart","onCompositionupdate","onCompositionend","onInput"]),e.multiple?(h(),H("div",{key:0,ref:"tagWrapper",class:V(e.nsCascader.e("tags"))},[(h(!0),H(se,null,de(e.presentTags,o=>(h(),A(m,{key:o.key,type:e.tagType,size:e.tagSize,hit:o.hitState,closable:o.closable,"disable-transitions":"",onClose:P=>e.deleteTag(o)},{default:z(()=>[o.isCollapseTag===!1?(h(),H("span",va,x(o.text),1)):(h(),A($,{key:1,disabled:e.popperVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:z(()=>[ne("span",null,x(o.text),1)]),content:z(()=>[ne("div",{class:V(e.nsCascader.e("collapse-tags"))},[(h(!0),H(se,null,de(e.allPresentTags.slice(1),(P,F)=>(h(),H("div",{key:F,class:V(e.nsCascader.e("collapse-tag"))},[(h(),A(m,{key:P.key,class:"in-tooltip",type:e.tagType,size:e.tagSize,hit:P.hitState,closable:P.closable,"disable-transitions":"",onClose:B=>e.deleteTag(P)},{default:z(()=>[ne("span",null,x(P.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))],2))),128))],2)]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),e.filterable&&!e.isDisabled?pe((h(),H("input",{key:0,"onUpdate:modelValue":n[4]||(n[4]=o=>e.searchInputValue=o),type:"text",class:V(e.nsCascader.e("search-input")),placeholder:e.presentText?"":e.inputPlaceholder,onInput:n[5]||(n[5]=o=>e.handleInput(e.searchInputValue,o)),onClick:n[6]||(n[6]=re(o=>e.togglePopperVisible(!0),["stop"])),onKeydown:n[7]||(n[7]=gn((...o)=>e.handleDelete&&e.handleDelete(...o),["delete"])),onCompositionstart:n[8]||(n[8]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionupdate:n[9]||(n[9]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionend:n[10]||(n[10]=(...o)=>e.handleComposition&&e.handleComposition(...o))},null,42,ga)),[[mn,e.searchInputValue]]):Y("v-if",!0)],2)):Y("v-if",!0)],38)),[[U,()=>e.togglePopperVisible(!1),e.popperPaneRef]])]),content:z(()=>[pe(X(y,{ref:"panel",modelValue:e.checkedValue,"onUpdate:modelValue":n[15]||(n[15]=o=>e.checkedValue=o),options:e.options,props:e.props,border:!1,"render-label":e.$slots.default,onExpandChange:e.handleExpandChange,onClose:n[16]||(n[16]=o=>e.$nextTick(()=>e.togglePopperVisible(!1)))},null,8,["modelValue","options","props","render-label","onExpandChange"]),[[Ie,!e.filtering]]),e.filterable?pe((h(),A(L,{key:0,ref:"suggestionPanel",tag:"ul",class:V(e.nsCascader.e("suggestion-panel")),"view-class":e.nsCascader.e("suggestion-list"),onKeydown:e.handleSuggestionKeyDown},{default:z(()=>[e.suggestions.length?(h(!0),H(se,{key:0},de(e.suggestions,o=>(h(),H("li",{key:o.uid,class:V([e.nsCascader.e("suggestion-item"),e.nsCascader.is("checked",o.checked)]),tabindex:-1,onClick:P=>e.handleSuggestionClick(o)},[ne("span",null,x(o.text),1),o.checked?(h(),A(c,{key:0},{default:z(()=>[X(D)]),_:1})):Y("v-if",!0)],10,ma))),128)):bn(e.$slots,"empty",{key:1},()=>[ne("li",{class:V(e.nsCascader.e("empty-text"))},x(e.t("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class","onKeydown"])),[[Ie,e.filtering]]):Y("v-if",!0)]),_:3},8,["visible","teleported","popper-class","popper-options","transition","onHide"])}var ve=be(fa,[["render",ba],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/index.vue"]]);ve.install=e=>{e.component(ve.name,ve)};const ka=ve,wa=ka;export{wa as E};
