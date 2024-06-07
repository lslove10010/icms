"use strict";(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[4368],{29194:(e,t,l)=>{l.d(t,{Z:()=>E});var r=l(26440),o=l(81040),a=l(71254),s=l(9441),n=l(86170),i=l(86741),u=l(1834),c=l(66207),d=l(74510),h=l(46977);var f=l(92811),p=l(7187),m=l(81559);function y(e,t,l,o){const a=(0,f.iH)(!1),s=(0,f.iH)(null),n=(0,f.iH)(!1),i=(0,f.iH)({width:null,height:null,headerHeight:null}),u=(0,f.iH)(!1),c=(0,f.iH)(),d=(0,f.iH)(0),h=(0,f.iH)(0),y=(0,f.iH)(0),g=(0,f.iH)(0),b=(0,f.iH)(0);(0,r.m0)((()=>{t.setHeight(e.height)})),(0,r.m0)((()=>{t.setMaxHeight(e.maxHeight)})),(0,r.YP)((()=>[e.currentRowKey,l.states.rowKey]),(([e,t])=>{(0,f.SU)(t)&&(0,f.SU)(e)&&l.setCurrentRowKey(`${e}`)}),{immediate:!0}),(0,r.YP)((()=>e.data),(e=>{o.store.commit("setData",e)}),{immediate:!0,deep:!0}),(0,r.m0)((()=>{e.expandRowKeys&&l.setExpandRowKeysAdapter(e.expandRowKeys)}));const v=(0,r.Fl)((()=>e.height||e.maxHeight||l.states.fixedColumns.value.length>0||l.states.rightFixedColumns.value.length>0)),w=(0,r.Fl)((()=>({width:t.bodyWidth.value?`${t.bodyWidth.value}px`:""}))),x=()=>{v.value&&t.updateElsHeight(),t.updateColumnsWidth(),requestAnimationFrame(H)};(0,r.bv)((async()=>{await(0,r.Y3)(),l.updateColumns(),L(),requestAnimationFrame(x);const t=o.vnode.el,a=o.refs.headerWrapper;e.flexible&&t&&t.parentElement&&(t.parentElement.style.minWidth="0"),i.value={width:c.value=t.offsetWidth,height:t.offsetHeight,headerHeight:e.showHeader&&a?a.offsetHeight:null},l.states.columns.value.forEach((e=>{e.filteredValue&&e.filteredValue.length&&o.store.commit("filterChange",{column:e,values:e.filteredValue,silent:!0})})),o.$ready=!0}));const S=e=>{const{tableWrapper:l}=o.refs;((e,l)=>{if(!e)return;const r=Array.from(e.classList).filter((e=>!e.startsWith("is-scrolling-")));r.push(t.scrollX.value?l:"is-scrolling-none"),e.className=r.join(" ")})(l,e)},H=function(){if(!o.refs.scrollBarRef)return;if(!t.scrollX.value){const e="is-scrolling-none";return void((e=>{const{tableWrapper:t}=o.refs;return!(!t||!t.classList.contains(e))})(e)||S(e))}const e=o.refs.scrollBarRef.wrapRef;if(!e)return;const{scrollLeft:l,offsetWidth:r,scrollWidth:a}=e,{headerWrapper:s,footerWrapper:n}=o.refs;s&&(s.scrollLeft=l),n&&(n.scrollLeft=l);S(l>=a-r-1?"is-scrolling-right":0===l?"is-scrolling-left":"is-scrolling-middle")},L=()=>{o.refs.scrollBarRef&&(o.refs.scrollBarRef.wrapRef&&(0,p.ORN)(o.refs.scrollBarRef.wrapRef,"scroll",H,{passive:!0}),e.fit?(0,p.yU7)(o.vnode.el,C):(0,p.ORN)(window,"resize",C),(0,p.yU7)(o.refs.bodyWrapper,(()=>{var e,t;C(),null==(t=null==(e=o.refs)?void 0:e.scrollBarRef)||t.update()})))},C=()=>{var t,l,r,a;const s=o.vnode.el;if(!o.$ready||!s)return;let n=!1;const{width:u,height:f,headerHeight:p}=i.value,m=c.value=s.offsetWidth;u!==m&&(n=!0);const w=s.offsetHeight;(e.height||v.value)&&f!==w&&(n=!0);const S="fixed"===e.tableLayout?o.refs.headerWrapper:null==(t=o.refs.tableHeaderRef)?void 0:t.$el;e.showHeader&&(null==S?void 0:S.offsetHeight)!==p&&(n=!0),d.value=(null==(l=o.refs.tableWrapper)?void 0:l.scrollHeight)||0,y.value=(null==S?void 0:S.scrollHeight)||0,g.value=(null==(r=o.refs.footerWrapper)?void 0:r.offsetHeight)||0,b.value=(null==(a=o.refs.appendWrapper)?void 0:a.offsetHeight)||0,h.value=d.value-y.value-g.value-b.value,n&&(i.value={width:m,height:w,headerHeight:e.showHeader&&(null==S?void 0:S.offsetHeight)||0},x())},R=(0,m.Cd)(),N=(0,r.Fl)((()=>{const{bodyWidth:e,scrollY:l,gutterWidth:r}=t;return e.value?e.value-(l.value?r:0)+"px":""})),F=(0,r.Fl)((()=>e.maxHeight?"fixed":e.tableLayout)),k=(0,r.Fl)((()=>{if(e.data&&e.data.length)return null;let t="100%";e.height&&h.value&&(t=`${h.value}px`);const l=c.value;return{width:l?`${l}px`:"",height:t}})),W=(0,r.Fl)((()=>e.height?{height:Number.isNaN(Number(e.height))?e.height:`${e.height}px`}:e.maxHeight?{maxHeight:Number.isNaN(Number(e.maxHeight))?e.maxHeight:`${e.maxHeight}px`}:{})),E=(0,r.Fl)((()=>e.height?{height:"100%"}:e.maxHeight?Number.isNaN(Number(e.maxHeight))?{maxHeight:`calc(${e.maxHeight} - ${y.value+g.value}px)`}:{maxHeight:e.maxHeight-y.value-g.value+"px"}:{}));return{isHidden:a,renderExpanded:s,setDragVisible:e=>{n.value=e},isGroup:u,handleMouseLeave:()=>{o.store.commit("setHoverRow",null),o.hoverState&&(o.hoverState=null)},handleHeaderFooterMousewheel:(e,t)=>{const{pixelX:l,pixelY:r}=t;Math.abs(l)>=Math.abs(r)&&(o.refs.bodyWrapper.scrollLeft+=t.pixelX/5)},tableSize:R,emptyBlockStyle:k,handleFixedMousewheel:(e,t)=>{const l=o.refs.bodyWrapper;if(Math.abs(t.spinY)>0){const r=l.scrollTop;t.pixelY<0&&0!==r&&e.preventDefault(),t.pixelY>0&&l.scrollHeight-l.clientHeight>r&&e.preventDefault(),l.scrollTop+=Math.ceil(t.pixelY/5)}else l.scrollLeft+=Math.ceil(t.pixelX/5)},resizeProxyVisible:n,bodyWidth:N,resizeState:i,doLayout:x,tableBodyStyles:w,tableLayout:F,scrollbarViewStyle:{display:"inline-block",verticalAlign:"middle"},tableInnerStyle:W,scrollbarStyle:E}}function g(e){const t=(0,f.iH)();(0,r.bv)((()=>{(()=>{const l=e.vnode.el.querySelector(".hidden-columns"),r=e.store.states.updateOrderFns;t.value=new MutationObserver((()=>{r.forEach((e=>e()))})),t.value.observe(l,{childList:!0,subtree:!0})})()})),(0,r.Ah)((()=>{var e;null==(e=t.value)||e.disconnect()}))}var b=l(71699),v={data:{type:Array,default:()=>[]},size:b.Pp,width:[String,Number],height:[String,Number],maxHeight:[String,Number],fit:{type:Boolean,default:!0},stripe:Boolean,border:Boolean,rowKey:[String,Function],showHeader:{type:Boolean,default:!0},showSummary:Boolean,sumText:String,summaryMethod:Function,rowClassName:[String,Function],rowStyle:[Object,Function],cellClassName:[String,Function],cellStyle:[Object,Function],headerRowClassName:[String,Function],headerRowStyle:[Object,Function],headerCellClassName:[String,Function],headerCellStyle:[Object,Function],highlightCurrentRow:Boolean,currentRowKey:[String,Number],emptyText:String,expandRowKeys:Array,defaultExpandAll:Boolean,defaultSort:Object,tooltipEffect:String,tooltipOptions:Object,spanMethod:Function,selectOnIndeterminate:{type:Boolean,default:!0},indent:{type:Number,default:16},treeProps:{type:Object,default:()=>({hasChildren:"hasChildren",children:"children"})},lazy:Boolean,load:Function,style:{type:Object,default:()=>({})},className:{type:String,default:""},tableLayout:{type:String,default:"fixed"},scrollbarAlwaysOn:{type:Boolean,default:!1},flexible:Boolean,showOverflowTooltip:[Boolean,Object]},w=l(90647),x=l(68831),S=l(32817),H=l(63582),L=l(87563),C=l(80135),R=l(58533);let N=1;const F=(0,r.aZ)({name:"ElTable",directives:{Mousewheel:L.Z},components:{TableHeader:c.Z,TableBody:d.Z,TableFooter:h.Z,ElScrollbar:n.Mr,hColgroup:x.e},props:v,emits:["select","select-all","selection-change","cell-mouse-enter","cell-mouse-leave","cell-contextmenu","cell-click","cell-dblclick","row-click","row-contextmenu","row-dblclick","header-click","header-contextmenu","sort-change","filter-change","current-change","header-dragend","expand-change"],setup(e){const{t}=(0,C.bU)(),l=(0,R.s3)("table"),o=(0,r.FN)();(0,r.JJ)(w.m,o);const a=(0,i.M)(o,e);o.store=a;const n=new u.Z({store:o.store,table:o,fit:e.fit,showHeader:e.showHeader});o.layout=n;const c=(0,r.Fl)((()=>0===(a.states.data.value||[]).length)),{setCurrentRow:d,getSelectionRows:h,toggleRowSelection:f,clearSelection:p,clearFilter:m,toggleAllSelection:b,toggleRowExpansion:v,clearSort:x,sort:H}=function(e){return{setCurrentRow:t=>{e.commit("setCurrentRow",t)},getSelectionRows:()=>e.getSelectionRows(),toggleRowSelection:(t,l)=>{e.toggleRowSelection(t,l,!1),e.updateAllSelected()},clearSelection:()=>{e.clearSelection()},clearFilter:t=>{e.clearFilter(t)},toggleAllSelection:()=>{e.commit("toggleAllSelection")},toggleRowExpansion:(t,l)=>{e.toggleRowExpansionAdapter(t,l)},clearSort:()=>{e.clearSort()},sort:(t,l)=>{e.commit("sort",{prop:t,order:l})}}}(a),{isHidden:L,renderExpanded:F,setDragVisible:k,isGroup:W,handleMouseLeave:E,handleHeaderFooterMousewheel:B,tableSize:$,emptyBlockStyle:_,handleFixedMousewheel:A,resizeProxyVisible:M,bodyWidth:O,resizeState:T,doLayout:V,tableBodyStyles:j,tableLayout:z,scrollbarViewStyle:D,tableInnerStyle:I,scrollbarStyle:Z}=y(e,n,a,o),{scrollBarRef:q,scrollTo:K,setScrollLeft:U,setScrollTop:Y}=(0,S.u)(),P=(0,s.Z)(V,50),G=`${l.namespace.value}-table_${N++}`;o.tableId=G,o.state={isGroup:W,resizeState:T,doLayout:V,debouncedUpdateLayout:P};const X=(0,r.Fl)((()=>e.sumText||t("el.table.sumText"))),J=(0,r.Fl)((()=>e.emptyText||t("el.table.emptyText")));return g(o),{ns:l,layout:n,store:a,handleHeaderFooterMousewheel:B,handleMouseLeave:E,tableId:G,tableSize:$,isHidden:L,isEmpty:c,renderExpanded:F,resizeProxyVisible:M,resizeState:T,isGroup:W,bodyWidth:O,tableBodyStyles:j,emptyBlockStyle:_,debouncedUpdateLayout:P,handleFixedMousewheel:A,setCurrentRow:d,getSelectionRows:h,toggleRowSelection:f,clearSelection:p,clearFilter:m,toggleAllSelection:b,toggleRowExpansion:v,clearSort:x,doLayout:V,sort:H,t,setDragVisible:k,context:o,computedSumText:X,computedEmptyText:J,tableLayout:z,scrollbarViewStyle:D,tableInnerStyle:I,scrollbarStyle:Z,scrollBarRef:q,scrollTo:K,setScrollLeft:U,setScrollTop:Y}}}),k=["data-prefix"],W={ref:"hiddenColumns",class:"hidden-columns"};var E=(0,H.Z)(F,[["render",function(e,t,l,s,n,i){const u=(0,r.up)("hColgroup"),c=(0,r.up)("table-header"),d=(0,r.up)("table-body"),h=(0,r.up)("el-scrollbar"),f=(0,r.up)("table-footer"),p=(0,r.Q2)("mousewheel");return(0,r.wg)(),(0,r.iD)("div",{ref:"tableWrapper",class:(0,o.C_)([{[e.ns.m("fit")]:e.fit,[e.ns.m("striped")]:e.stripe,[e.ns.m("border")]:e.border||e.isGroup,[e.ns.m("hidden")]:e.isHidden,[e.ns.m("group")]:e.isGroup,[e.ns.m("fluid-height")]:e.maxHeight,[e.ns.m("scrollable-x")]:e.layout.scrollX.value,[e.ns.m("scrollable-y")]:e.layout.scrollY.value,[e.ns.m("enable-row-hover")]:!e.store.states.isComplex.value,[e.ns.m("enable-row-transition")]:0!==(e.store.states.data.value||[]).length&&(e.store.states.data.value||[]).length<100,"has-footer":e.showSummary},e.ns.m(e.tableSize),e.className,e.ns.b(),e.ns.m(`layout-${e.tableLayout}`)]),style:(0,o.j5)(e.style),"data-prefix":e.ns.namespace.value,onMouseleave:t[0]||(t[0]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t))},[(0,r._)("div",{class:(0,o.C_)(e.ns.e("inner-wrapper")),style:(0,o.j5)(e.tableInnerStyle)},[(0,r._)("div",W,[(0,r.WI)(e.$slots,"default")],512),e.showHeader&&"fixed"===e.tableLayout?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{key:0,ref:"headerWrapper",class:(0,o.C_)(e.ns.e("header-wrapper"))},[(0,r._)("table",{ref:"tableHeader",class:(0,o.C_)(e.ns.e("header")),style:(0,o.j5)(e.tableBodyStyles),border:"0",cellpadding:"0",cellspacing:"0"},[(0,r.Wm)(u,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),(0,r.Wm)(c,{ref:"tableHeaderRef",border:e.border,"default-sort":e.defaultSort,store:e.store,onSetDragVisible:e.setDragVisible},null,8,["border","default-sort","store","onSetDragVisible"])],6)],2)),[[p,e.handleHeaderFooterMousewheel]]):(0,r.kq)("v-if",!0),(0,r._)("div",{ref:"bodyWrapper",class:(0,o.C_)(e.ns.e("body-wrapper"))},[(0,r.Wm)(h,{ref:"scrollBarRef","view-style":e.scrollbarViewStyle,"wrap-style":e.scrollbarStyle,always:e.scrollbarAlwaysOn},{default:(0,r.w5)((()=>[(0,r._)("table",{ref:"tableBody",class:(0,o.C_)(e.ns.e("body")),cellspacing:"0",cellpadding:"0",border:"0",style:(0,o.j5)({width:e.bodyWidth,tableLayout:e.tableLayout})},[(0,r.Wm)(u,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),e.showHeader&&"auto"===e.tableLayout?((0,r.wg)(),(0,r.j4)(c,{key:0,ref:"tableHeaderRef",border:e.border,"default-sort":e.defaultSort,store:e.store,onSetDragVisible:e.setDragVisible},null,8,["border","default-sort","store","onSetDragVisible"])):(0,r.kq)("v-if",!0),(0,r.Wm)(d,{context:e.context,highlight:e.highlightCurrentRow,"row-class-name":e.rowClassName,"tooltip-effect":e.tooltipEffect,"tooltip-options":e.tooltipOptions,"row-style":e.rowStyle,store:e.store,stripe:e.stripe},null,8,["context","highlight","row-class-name","tooltip-effect","tooltip-options","row-style","store","stripe"])],6),e.isEmpty?((0,r.wg)(),(0,r.iD)("div",{key:0,ref:"emptyBlock",style:(0,o.j5)(e.emptyBlockStyle),class:(0,o.C_)(e.ns.e("empty-block"))},[(0,r._)("span",{class:(0,o.C_)(e.ns.e("empty-text"))},[(0,r.WI)(e.$slots,"empty",{},(()=>[(0,r.Uk)((0,o.zw)(e.computedEmptyText),1)]))],2)],6)):(0,r.kq)("v-if",!0),e.$slots.append?((0,r.wg)(),(0,r.iD)("div",{key:1,ref:"appendWrapper",class:(0,o.C_)(e.ns.e("append-wrapper"))},[(0,r.WI)(e.$slots,"append")],2)):(0,r.kq)("v-if",!0)])),_:3},8,["view-style","wrap-style","always"])],2),e.showSummary?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{key:1,ref:"footerWrapper",class:(0,o.C_)(e.ns.e("footer-wrapper"))},[(0,r.Wm)(f,{border:e.border,"default-sort":e.defaultSort,store:e.store,style:(0,o.j5)(e.tableBodyStyles),"sum-text":e.computedSumText,"summary-method":e.summaryMethod},null,8,["border","default-sort","store","style","sum-text","summary-method"])],2)),[[a.F8,!e.isEmpty],[p,e.handleHeaderFooterMousewheel]]):(0,r.kq)("v-if",!0),e.border||e.isGroup?((0,r.wg)(),(0,r.iD)("div",{key:2,class:(0,o.C_)(e.ns.e("border-left-patch"))},null,2)):(0,r.kq)("v-if",!0)],6),(0,r.wy)((0,r._)("div",{ref:"resizeProxy",class:(0,o.C_)(e.ns.e("column-resize-proxy"))},null,2),[[a.F8,e.resizeProxyVisible]])],46,k)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]])},90647:(e,t,l)=>{l.d(t,{m:()=>r});const r=Symbol("ElTable")},23324:(e,t,l)=>{l.d(t,{$S:()=>f,CT:()=>x,EJ:()=>H,Gt:()=>_,JH:()=>w,L$:()=>R,UM:()=>m,Vl:()=>g,WO:()=>b,Xo:()=>p,_D:()=>F,_m:()=>S,fL:()=>A,iB:()=>C,iO:()=>y,kr:()=>v,mU:()=>N,qC:()=>L,ty:()=>B});var r=l(84479),o=l(54029),a=l(98034),s=l(9134),n=l(83675),i=l.n(n),u=l(81040),c=l(22820),d=l(95592),h=l(98257);const f=function(e){var t;return null==(t=e.target)?void 0:t.closest("td")},p=function(e,t,l,r,a){if(!t&&!r&&(!a||Array.isArray(a)&&!a.length))return e;l="string"==typeof l?"descending"===l?-1:1:l&&l<0?-1:1;const s=r?null:function(l,r){return a?(Array.isArray(a)||(a=[a]),a.map((t=>"string"==typeof t?(0,o.Z)(l,t):t(l,r,e)))):("$key"!==t&&(0,u.Kn)(l)&&"$value"in l&&(l=l.$value),[(0,u.Kn)(l)?(0,o.Z)(l,t):l])};return e.map(((e,t)=>({value:e,index:t,key:s?s(e,t):null}))).sort(((e,t)=>{let o=function(e,t){if(r)return r(e.value,t.value);for(let l=0,r=e.key.length;l<r;l++){if(e.key[l]<t.key[l])return-1;if(e.key[l]>t.key[l])return 1}return 0}(e,t);return o||(o=e.index-t.index),o*+l})).map((e=>e.value))},m=function(e,t){let l=null;return e.columns.forEach((e=>{e.id===t&&(l=e)})),l},y=function(e,t){let l=null;for(let r=0;r<e.columns.length;r++){const o=e.columns[r];if(o.columnKey===t){l=o;break}}return l||(0,c._)("ElTable",`No column matching with column-key: ${t}`),l},g=function(e,t,l){const r=(t.className||"").match(new RegExp(`${l}-table_[^\\s]+`,"gm"));return r?m(e,r[0]):null},b=(e,t)=>{if(!e)throw new Error("Row is required when get row identity");if("string"==typeof t){if(!t.includes("."))return`${e[t]}`;const l=t.split(".");let r=e;for(const e of l)r=r[e];return`${r}`}if("function"==typeof t)return t.call(null,e)},v=function(e,t){const l={};return(e||[]).forEach(((e,r)=>{l[b(e,t)]={row:e,index:r}})),l};function w(e,t){const l={};let r;for(r in e)l[r]=e[r];for(r in t)if((0,u.RI)(t,r)){const e=t[r];void 0!==e&&(l[r]=e)}return l}function x(e){return""===e||void 0!==e&&(e=Number.parseInt(e,10),Number.isNaN(e)&&(e="")),e}function S(e){return""===e||void 0!==e&&(e=x(e),Number.isNaN(e)&&(e=80)),e}function H(e){return"number"==typeof e?e:"string"==typeof e?/^\d+(?:px)?$/.test(e)?Number.parseInt(e,10):e:null}function L(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...l)=>e(t(...l))))}function C(e,t,l){let r=!1;const o=e.indexOf(t),a=-1!==o,s=s=>{"add"===s?e.push(t):e.splice(o,1),r=!0,(0,u.kJ)(t.children)&&t.children.forEach((t=>{C(e,t,null!=l?l:!a)}))};return(0,d.jn)(l)?l&&!a?s("add"):!l&&a&&s("remove"):s(a?"remove":"add"),r}function R(e,t,l="children",r="hasChildren"){const o=e=>!(Array.isArray(e)&&e.length);function a(e,s,n){t(e,s,n),s.forEach((e=>{if(e[r])return void t(e,null,n+1);const s=e[l];o(s)||a(e,s,n+1)}))}e.forEach((e=>{if(e[r])return void t(e,null,0);const s=e[l];o(s)||a(e,s,0)}))}let N;function F(e,t,l,o,s){s=(0,a.Z)({enterable:!0,showArrow:!0},s);const n=null==e?void 0:e.dataset.prefix,u=null==e?void 0:e.querySelector(`.${n}-scrollbar__wrap`);function c(){d&&d.update()}null==N||N(),N=()=>{try{d&&d.destroy(),m&&(null==e||e.removeChild(m)),t.removeEventListener("mouseenter",f),t.removeEventListener("mouseleave",p),null==u||u.removeEventListener("scroll",N),N=void 0}catch(e){}};let d=null,f=c,p=N;s.enterable&&({onOpen:f,onClose:p}=(0,h.F)({showAfter:s.showAfter,hideAfter:s.hideAfter,open:c,close:N}));const m=function(){const t="light"===s.effect,r=document.createElement("div");return r.className=[`${n}-popper`,t?"is-light":"is-dark",s.popperClass||""].join(" "),l=i()(l),r.innerHTML=l,r.style.zIndex=String(o()),null==e||e.appendChild(r),r}();m.onmouseenter=f,m.onmouseleave=p;const y=[];if(s.offset&&y.push({name:"offset",options:{offset:[0,s.offset]}}),s.showArrow){const e=m.appendChild(function(){const e=document.createElement("div");return e.className=`${n}-popper__arrow`,e}());y.push({name:"arrow",options:{element:e,padding:10}})}const g=s.popperOptions||{};return d=(0,r.fi)(t,m,{placement:s.placement||"top",strategy:"fixed",...g,modifiers:g.modifiers?y.concat(g.modifiers):y}),t.addEventListener("mouseenter",f),t.addEventListener("mouseleave",p),null==u||u.addEventListener("scroll",N),d}function k(e){return e.children?(0,s.Z)(e.children,k):[e]}function W(e,t){return e+t.colSpan}const E=(e,t,l,r)=>{let o=0,a=e;const s=l.states.columns.value;if(r){const t=k(r[e]);o=s.slice(0,s.indexOf(t[0])).reduce(W,0),a=o+t.reduce(W,0)-1}else o=e;let n;switch(t){case"left":a<l.states.fixedLeafColumnsLength.value&&(n="left");break;case"right":o>=s.length-l.states.rightFixedLeafColumnsLength.value&&(n="right");break;default:a<l.states.fixedLeafColumnsLength.value?n="left":o>=s.length-l.states.rightFixedLeafColumnsLength.value&&(n="right")}return n?{direction:n,start:o,after:a}:{}},B=(e,t,l,r,o,a=0)=>{const s=[],{direction:n,start:i,after:u}=E(t,l,r,o);if(n){const t="left"===n;s.push(`${e}-fixed-column--${n}`),t&&u+a===r.states.fixedLeafColumnsLength.value-1?s.push("is-last-column"):t||i-a!=r.states.columns.value.length-r.states.rightFixedLeafColumnsLength.value||s.push("is-first-column")}return s};function $(e,t){return e+(null===t.realWidth||Number.isNaN(t.realWidth)?Number(t.width):t.realWidth)}const _=(e,t,l,r)=>{const{direction:o,start:a=0,after:s=0}=E(e,t,l,r);if(!o)return;const n={},i="left"===o,u=l.states.columns.value;return i?n.left=u.slice(0,a).reduce($,0):n.right=u.slice(s+1).reverse().reduce($,0),n},A=(e,t)=>{e&&(Number.isNaN(e[t])||(e[t]=`${e[t]}px`))}}}]);
//# sourceMappingURL=4368.js.map