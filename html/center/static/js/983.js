"use strict";(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[983],{40983:(e,t,n)=>{n.d(t,{y:()=>F,Z:()=>z});var d=n(26440),o=n(92811),r=n(81040),a=n(71254);const s="$treeNodeId",i=function(e,t){t&&!t[s]&&Object.defineProperty(t,s,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},l=function(e,t){return e?t[e]:t[s]},c=(e,t,n)=>{const d=e.value.currentNode;n();const o=e.value.currentNode;d!==o&&t("current-change",o?o.data:null,o)},h=e=>{let t=!0,n=!0,d=!0;for(let o=0,r=e.length;o<r;o++){const r=e[o];(!0!==r.checked||r.indeterminate)&&(t=!1,r.disabled||(d=!1)),(!1!==r.checked||r.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:d,half:!t&&!n}},u=function(e){if(0===e.childNodes.length||e.loading)return;const{all:t,none:n,half:d}=h(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):d?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const o=e.parent;o&&0!==o.level&&(e.store.checkStrictly||u(o))},p=function(e,t){const n=e.store.props,d=e.data||{},o=n[t];if("function"==typeof o)return o(d,e);if("string"==typeof o)return d[o];if(void 0===o){const e=d[t];return void 0===e?"":e}};let f=0;class g{constructor(e){this.id=f++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const t in e)(0,r.RI)(e,t)&&(this[t]=e[t]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&void 0!==t.isLeaf){const e=p(this,"isLeaf");"boolean"==typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||i(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,d=e.key;d&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),d&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||i(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:p(this,"children")||[];for(let e=0,n=t.length;e<n;e++)this.insertChild({data:t[e]})}get label(){return p(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return p(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,n){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof g)){if(!n){const n=this.getChildren(!0);n.includes(e.data)||(void 0===t||t<0?n.push(e.data):n.splice(t,0,e.data))}Object.assign(e,{parent:this,store:this.store}),(e=(0,o.qj)(new g(e)))instanceof g&&e.initialize()}e.level=this.level+1,void 0===t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const d=this.childNodes.indexOf(e);d>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(d,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;for(;e.level>0;)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||u(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&void 0!==this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,d){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:o}=h(this.childNodes);this.isLeaf||n||!o||(this.checked=!1,e=!1);const r=()=>{if(t){const n=this.childNodes;for(let o=0,r=n.length;o<r;o++){const r=n[o];d=d||!1!==e;const a=r.disabled?r.checked:d;r.setChecked(a,t,!0,d)}const{half:o,all:r}=h(n);r||(this.checked=r,this.indeterminate=o)}};if(this.shouldLoadData())return void this.loadData((()=>{r(),u(this)}),{checked:!1!==e});r()}const o=this.parent;o&&0!==o.level&&(n||u(o))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let d="children";return n&&(d=n.children||"children"),void 0===t[d]&&(t[d]=null),e&&!t[d]&&(t[d]=[]),t[d]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},d=[];e.forEach(((e,o)=>{const r=e[s];!!r&&t.findIndex((e=>e[s]===r))>=0?n[r]={index:o,data:e}:d.push({index:o,data:e})})),this.store.lazy||t.forEach((e=>{n[e[s]]||this.removeChildByData(e)})),d.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.childNodes=[],this.doCreateChildren(n,t),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}class y{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const t in e)(0,r.RI)(e,t)&&(this[t]=e[t]);this.nodesMap={}}initialize(){if(this.root=new g({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){(0,this.load)(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,d=function(o){const r=o.root?o.root.childNodes:o.childNodes;if(r.forEach((n=>{n.visible=t.call(n,e,n.data,n),d(n)})),!o.visible&&r.length){let e=!0;e=!r.some((e=>e.visible)),o.root?o.root.visible=!1===e:o.visible=!1===e}e&&(!o.visible||o.isLeaf||n||o.expand())};d(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof g)return e;const t=(0,r.Kn)(e)?l(this.key,e):e;return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){void 0!==e.key&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){this.key&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],d=function(o){(o.root?o.root.childNodes:o.childNodes).forEach((o=>{(o.checked||t&&o.indeterminate)&&(!e||e&&o.isLeaf)&&n.push(o.data),d(o)}))};return d(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){(n.root?n.root.childNodes:n.childNodes).forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const e=[],t=this.nodesMap;for(const n in t)(0,r.RI)(t,n)&&e.push(t[n]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const d=n.childNodes;for(let e=d.length-1;e>=0;e--){const t=d[e];this.remove(t.data)}for(let e=0,d=t.length;e<d;e++){const d=t[e];this.append(d,n.data)}}_setCheckedKeys(e,t=!1,n){const d=this._getAllNodes().sort(((e,t)=>t.level-e.level)),o=Object.create(null),r=Object.keys(n);d.forEach((e=>e.setChecked(!1,!1)));for(let n=0,a=d.length;n<a;n++){const a=d[n],s=a.data[e].toString();if(!r.includes(s)){a.checked&&!o[s]&&a.setChecked(!1,!1);continue}let i=a.parent;for(;i&&i.level>0;)o[i.data[e]]=!0,i=i.parent;if(a.isLeaf||this.checkStrictly)a.setChecked(!0,!1);else if(a.setChecked(!0,!0),t){a.setChecked(!1,!1);const e=function(t){t.childNodes.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(a)}}}setCheckedNodes(e,t=!1){const n=this.key,d={};e.forEach((e=>{d[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,d)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,d={};e.forEach((e=>{d[e]=!0})),this._setCheckedKeys(n,t,d)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const d=this.getNode(e);d&&d.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],d=this.nodesMap[n];this.setCurrentNode(d),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var k=n(84979),N=n(50240),C=n(89888),v=n(48127),x=n(63582),b=n(58533);const m=(0,d.aZ)({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=(0,b.s3)("tree"),n=(0,d.f3)("NodeInstance"),o=(0,d.f3)("RootTree");return()=>{const r=e.node,{data:a,store:s}=r;return e.renderContent?e.renderContent(d.h,{_self:n,node:r,data:a,store:s}):o.ctx.slots.default?o.ctx.slots.default({node:r,data:a}):(0,d.h)("span",{class:t.be("node","label")},[r.label])}}});var E=(0,x.Z)(m,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function D(e){const t=(0,d.f3)("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),(0,d.JJ)("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}var K=n(39240);const w=Symbol("dragEvents");var S=n(22820);const A=(0,d.aZ)({name:"ElTreeNode",components:{ElCollapseTransition:k.Z,ElCheckbox:N.ElCheckbox,NodeContent:E,ElIcon:C.gn,Loading:v.gbz},props:{node:{type:g,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=(0,b.s3)("tree"),{broadcastExpanded:a}=D(e),s=(0,d.f3)("RootTree"),i=(0,o.iH)(!1),h=(0,o.iH)(!1),u=(0,o.iH)(null),p=(0,o.iH)(null),f=(0,o.iH)(null),g=(0,d.f3)(w),y=(0,d.FN)();(0,d.JJ)("NodeInstance",y),s||(0,S.N)("Tree","Can not find node's tree."),e.node.expanded&&(i.value=!0,h.value=!0);const k=s.props.children||"children";(0,d.YP)((()=>{const t=e.node.data[k];return t&&[...t]}),(()=>{e.node.updateChildren()})),(0,d.YP)((()=>e.node.indeterminate),(t=>{N(e.node.checked,t)})),(0,d.YP)((()=>e.node.checked),(t=>{N(t,e.node.indeterminate)})),(0,d.YP)((()=>e.node.expanded),(e=>{(0,d.Y3)((()=>i.value=e)),e&&(h.value=!0)}));const N=(t,n)=>{u.value===t&&p.value===n||s.ctx.emit("check-change",e.node.data,t,n),u.value=t,p.value=n},C=()=>{e.node.isLeaf||(i.value?(s.ctx.emit("node-collapse",e.node.data,e.node,y),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,y)))},x=(t,n)=>{e.node.setChecked(n.target.checked,!s.props.checkStrictly),(0,d.Y3)((()=>{const t=s.store.value;s.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))};return{ns:n,node$:f,tree:s,expanded:i,childNodeRendered:h,oldChecked:u,oldIndeterminate:p,getNodeKey:e=>l(s.props.nodeKey,e.data),getNodeClass:t=>{const n=e.props.class;if(!n)return{};let d;if((0,r.mf)(n)){const{data:e}=t;d=n(e,t)}else d=n;return(0,r.HD)(d)?{[d]:!0}:d},handleSelectChange:N,handleClick:t=>{c(s.store,s.ctx.emit,(()=>s.store.value.setCurrentNode(e.node))),s.currentNode.value=e.node,s.props.expandOnClickNode&&C(),s.props.checkOnClickNode&&!e.node.disabled&&x(null,{target:{checked:!e.node.checked}}),s.ctx.emit("node-click",e.node.data,e.node,y,t)},handleContextMenu:t=>{s.instance.vnode.props.onNodeContextmenu&&(t.stopPropagation(),t.preventDefault()),s.ctx.emit("node-contextmenu",t,e.node.data,e.node,y)},handleExpandIconClick:C,handleCheckChange:x,handleChildNodeExpand:(e,t,n)=>{a(t),s.ctx.emit("node-expand",e,t,n)},handleDragStart:t=>{s.props.draggable&&g.treeNodeDragStart({event:t,treeNode:e})},handleDragOver:t=>{t.preventDefault(),s.props.draggable&&g.treeNodeDragOver({event:t,treeNode:{$el:f.value,node:e.node}})},handleDrop:e=>{e.preventDefault()},handleDragEnd:e=>{s.props.draggable&&g.treeNodeDragEnd(e)},CaretRight:v.TZ}}}),_=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],T=["aria-expanded"];var O=(0,x.Z)(A,[["render",function(e,t,n,o,s,i){const l=(0,d.up)("el-icon"),c=(0,d.up)("el-checkbox"),h=(0,d.up)("loading"),u=(0,d.up)("node-content"),p=(0,d.up)("el-tree-node"),f=(0,d.up)("el-collapse-transition");return(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{ref:"node$",class:(0,r.C_)([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=(0,a.iM)(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=(0,a.iM)(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=(0,a.iM)(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=(0,a.iM)(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=(0,a.iM)(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[(0,d._)("div",{class:(0,r.C_)(e.ns.be("node","content")),style:(0,r.j5)({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?((0,d.wg)(),(0,d.j4)(l,{key:0,class:(0,r.C_)([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:(0,a.iM)(e.handleExpandIconClick,["stop"])},{default:(0,d.w5)((()=>[((0,d.wg)(),(0,d.j4)((0,d.LL)(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):(0,d.kq)("v-if",!0),e.showCheckbox?((0,d.wg)(),(0,d.j4)(c,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=(0,a.iM)((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):(0,d.kq)("v-if",!0),e.node.loading?((0,d.wg)(),(0,d.j4)(l,{key:2,class:(0,r.C_)([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:(0,d.w5)((()=>[(0,d.Wm)(h)])),_:1},8,["class"])):(0,d.kq)("v-if",!0),(0,d.Wm)(u,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),(0,d.Wm)(f,null,{default:(0,d.w5)((()=>[!e.renderAfterExpand||e.childNodeRendered?(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,r.C_)(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.node.childNodes,(t=>((0,d.wg)(),(0,d.j4)(p,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,T)),[[a.F8,e.expanded]]):(0,d.kq)("v-if",!0)])),_:1})],42,_)),[[a.F8,e.node.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]),L=n(7187),B=n(84484);var I=n(44864),M=n(80135),$=n(77234);const q=(0,d.aZ)({name:"ElTree",components:{ElTreeNode:O},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:I.AA}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=(0,M.bU)(),r=(0,b.s3)("tree"),a=(0,o.iH)(new y({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));a.value.initialize();const s=(0,o.iH)(a.value.root),i=(0,o.iH)(null),h=(0,o.iH)(null),u=(0,o.iH)(null),{broadcastExpanded:p}=D(e),{dragState:f}=function({props:e,ctx:t,el$:n,dropIndicator$:r,store:a}){const s=(0,b.s3)("tree"),i=(0,o.iH)({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return(0,d.JJ)(w,{treeNodeDragStart:({event:n,treeNode:d})=>{if("function"==typeof e.allowDrag&&!e.allowDrag(d.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(e){}i.value.draggingNode=d,t.emit("node-drag-start",d.node,n)},treeNodeDragOver:({event:d,treeNode:o})=>{const a=o,l=i.value.dropNode;l&&l.node.id!==a.node.id&&(0,K.IV)(l.$el,s.is("drop-inner"));const c=i.value.draggingNode;if(!c||!a)return;let h=!0,u=!0,p=!0,f=!0;"function"==typeof e.allowDrop&&(h=e.allowDrop(c.node,a.node,"prev"),f=u=e.allowDrop(c.node,a.node,"inner"),p=e.allowDrop(c.node,a.node,"next")),d.dataTransfer.dropEffect=u||h||p?"move":"none",(h||u||p)&&(null==l?void 0:l.node.id)!==a.node.id&&(l&&t.emit("node-drag-leave",c.node,l.node,d),t.emit("node-drag-enter",c.node,a.node,d)),(h||u||p)&&(i.value.dropNode=a),a.node.nextSibling===c.node&&(p=!1),a.node.previousSibling===c.node&&(h=!1),a.node.contains(c.node,!1)&&(u=!1),(c.node===a.node||c.node.contains(a.node))&&(h=!1,u=!1,p=!1);const g=a.$el.getBoundingClientRect(),y=n.value.getBoundingClientRect();let k;const N=h?u?.25:p?.45:1:-1,C=p?u?.75:h?.55:0:1;let v=-9999;const x=d.clientY-g.top;k=x<g.height*N?"before":x>g.height*C?"after":u?"inner":"none";const b=a.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=r.value;"before"===k?v=b.top-y.top:"after"===k&&(v=b.bottom-y.top),m.style.top=`${v}px`,m.style.left=b.right-y.left+"px","inner"===k?(0,K.cn)(a.$el,s.is("drop-inner")):(0,K.IV)(a.$el,s.is("drop-inner")),i.value.showDropIndicator="before"===k||"after"===k,i.value.allowDrop=i.value.showDropIndicator||f,i.value.dropType=k,t.emit("node-drag-over",c.node,a.node,d)},treeNodeDragEnd:e=>{const{draggingNode:n,dropType:d,dropNode:o}=i.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&o){const r={data:n.node.data};"none"!==d&&n.node.remove(),"before"===d?o.node.parent.insertBefore(r,o.node):"after"===d?o.node.parent.insertAfter(r,o.node):"inner"===d&&o.node.insertChild(r),"none"!==d&&a.value.registerNode(r),(0,K.IV)(o.$el,s.is("drop-inner")),t.emit("node-drag-end",n.node,o.node,d,e),"none"!==d&&t.emit("node-drop",n.node,o.node,d,e)}n&&!o&&t.emit("node-drag-end",n.node,null,d,e),i.value.showDropIndicator=!1,i.value.draggingNode=null,i.value.dropNode=null,i.value.allowDrop=!0}}),{dragState:i}}({props:e,ctx:t,el$:h,dropIndicator$:u,store:a});!function({el$:e},t){const n=(0,b.s3)("tree"),r=(0,o.XI)([]),a=(0,o.XI)([]);(0,d.bv)((()=>{s()})),(0,d.ic)((()=>{r.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),(0,d.YP)(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))})),(0,L.ORN)(e,"keydown",(d=>{const o=d.target;if(!o.className.includes(n.b("node")))return;const a=d.code;r.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const s=r.value.indexOf(o);let i;if([B.EVENT_CODE.up,B.EVENT_CODE.down].includes(a)){if(d.preventDefault(),a===B.EVENT_CODE.up){i=-1===s?0:0!==s?s-1:r.value.length-1;const e=i;for(;!t.value.getNode(r.value[i].dataset.key).canFocus;){if(i--,i===e){i=-1;break}i<0&&(i=r.value.length-1)}}else{i=-1===s?0:s<r.value.length-1?s+1:0;const e=i;for(;!t.value.getNode(r.value[i].dataset.key).canFocus;){if(i++,i===e){i=-1;break}i>=r.value.length&&(i=0)}}-1!==i&&r.value[i].focus()}[B.EVENT_CODE.left,B.EVENT_CODE.right].includes(a)&&(d.preventDefault(),o.click());const l=o.querySelector('[type="checkbox"]');[B.EVENT_CODE.enter,B.EVENT_CODE.space].includes(a)&&l&&(d.preventDefault(),l.click())}));const s=()=>{var t;r.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const d=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);d.length?d[0].setAttribute("tabindex","0"):null==(t=r.value[0])||t.setAttribute("tabindex","0")}}({el$:h},a);const g=(0,d.Fl)((()=>{const{childNodes:e}=s.value;return!e||0===e.length||e.every((({visible:e})=>!e))}));(0,d.YP)((()=>e.currentNodeKey),(e=>{a.value.setCurrentNodeKey(e)})),(0,d.YP)((()=>e.defaultCheckedKeys),(e=>{a.value.setDefaultCheckedKey(e)})),(0,d.YP)((()=>e.defaultExpandedKeys),(e=>{a.value.setDefaultExpandedKeys(e)})),(0,d.YP)((()=>e.data),(e=>{a.value.setData(e)}),{deep:!0}),(0,d.YP)((()=>e.checkStrictly),(e=>{a.value.checkStrictly=e}));const k=()=>{const e=a.value.getCurrentNode();return e?e.data:null};return(0,d.JJ)("RootTree",{ctx:t,props:e,store:a,root:s,currentNode:i,instance:(0,d.FN)()}),(0,d.JJ)($.K,void 0),{ns:r,store:a,root:s,currentNode:i,dragState:f,el$:h,dropIndicator$:u,isEmpty:g,filter:t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");a.value.filter(t)},getNodeKey:t=>l(e.nodeKey,t.data),getNodePath:t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=a.value.getNode(t);if(!n)return[];const d=[n.data];let o=n.parent;for(;o&&o!==s.value;)d.push(o.data),o=o.parent;return d.reverse()},getCheckedNodes:(e,t)=>a.value.getCheckedNodes(e,t),getCheckedKeys:e=>a.value.getCheckedKeys(e),getCurrentNode:k,getCurrentKey:()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=k();return t?t[e.nodeKey]:null},setCheckedNodes:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");a.value.setCheckedNodes(t,n)},setCheckedKeys:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");a.value.setCheckedKeys(t,n)},setChecked:(e,t,n)=>{a.value.setChecked(e,t,n)},getHalfCheckedNodes:()=>a.value.getHalfCheckedNodes(),getHalfCheckedKeys:()=>a.value.getHalfCheckedKeys(),setCurrentNode:(n,d=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");c(a,t.emit,(()=>a.value.setUserCurrentNode(n,d)))},setCurrentKey:(n,d=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");c(a,t.emit,(()=>a.value.setCurrentNodeKey(n,d)))},t:n,getNode:e=>a.value.getNode(e),remove:e=>{a.value.remove(e)},append:(e,t)=>{a.value.append(e,t)},insertBefore:(e,t)=>{a.value.insertBefore(e,t)},insertAfter:(e,t)=>{a.value.insertAfter(e,t)},handleNodeExpand:(e,n,d)=>{p(n),t.emit("node-expand",e,n,d)},updateKeyChildren:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");a.value.updateChildren(t,n)}}}});var H=(0,x.Z)(q,[["render",function(e,t,n,o,s,i){const l=(0,d.up)("el-tree-node");return(0,d.wg)(),(0,d.iD)("div",{ref:"el$",class:(0,r.C_)([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.root.childNodes,(t=>((0,d.wg)(),(0,d.j4)(l,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?((0,d.wg)(),(0,d.iD)("div",{key:0,class:(0,r.C_)(e.ns.e("empty-block"))},[(0,d.WI)(e.$slots,"empty",{},(()=>{var t;return[(0,d._)("span",{class:(0,r.C_)(e.ns.e("empty-text"))},(0,r.zw)(null!=(t=e.emptyText)?t:e.t("el.tree.emptyText")),3)]}))],2)):(0,d.kq)("v-if",!0),(0,d.wy)((0,d._)("div",{ref:"dropIndicator$",class:(0,r.C_)(e.ns.e("drop-indicator"))},null,2),[[a.F8,e.dragState.showDropIndicator]])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);H.install=e=>{e.component(H.name,H)};const z=H,F=H}}]);
//# sourceMappingURL=983.js.map