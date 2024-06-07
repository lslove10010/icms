"use strict";(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[7346],{77346:(e,t,a)=>{a.d(t,{Z:()=>Xe});var o=a(26440),n=a(92811),l=a(81040),r=a(71254),i=a(14609),s=a(38088),c=a(20680),u=a(4710),d=a(12248),g=a(72197),h=a(48394),p=a(98034),v=Object.defineProperty,C=(e,t,a)=>(((e,t,a)=>{t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);const b=e=>Math.round(100*e)/100;class f{constructor(e){C(this,"instance"),C(this,"alphaValue",0),C(this,"redValue",0),C(this,"greenValue",0),C(this,"blueValue",0),C(this,"hueValue",0),C(this,"saturationValue",0),C(this,"brightnessValue",0),C(this,"hslSaturationValue",0),C(this,"lightnessValue",0),C(this,"initAlpha",(()=>{const e=this.instance.getAlpha();this.alphaValue=100*Math.min(1,e)})),C(this,"initLightness",(()=>{const{s:e,l:t}=this.instance.toHsl();this.hslSaturationValue=b(e),this.lightnessValue=b(t)})),C(this,"initRgb",(()=>{const{r:e,g:t,b:a}=this.instance.toRgb();this.redValue=b(e),this.greenValue=b(t),this.blueValue=b(a)})),C(this,"initHsb",(()=>{const{h:e,s:t,v:a}=this.instance.toHsv();this.hueValue=Math.min(360,Math.ceil(e)),this.saturationValue=b(t),this.brightnessValue=b(a)})),C(this,"toHexString",(()=>this.instance.toHexString())),C(this,"toRgbString",(()=>this.instance.toRgbString())),this.instance=(0,c.Z)(e),this.initRgb(),this.initHsb(),this.initLightness(),this.initAlpha()}toString(e){return this.instance.toString(e)}get hex(){return this.instance.toHex()}set hex(e){this.instance=(0,c.Z)(e),this.initHsb(),this.initRgb(),this.initAlpha(),this.initLightness()}set hue(e){0===this.saturation&&0===this.brightness&&(this.saturationValue=1,this.brightnessValue=1),this.instance=(0,c.Z)({h:b(e),s:this.saturation,v:this.brightness,a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.hueValue=b(e)}get hue(){return this.hueValue}set saturation(e){this.instance=(0,c.Z)({h:this.hue,s:b(e),v:this.brightness,a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.saturationValue=b(e)}get saturation(){return this.saturationValue}set brightness(e){this.instance=(0,c.Z)({h:this.hue,s:this.saturation,v:b(e),a:this.alphaValue/100}),this.initRgb(),this.initLightness(),this.brightnessValue=b(e)}get brightness(){return this.brightnessValue}set lightness(e){this.instance=(0,c.Z)({h:this.hue,s:this.hslSaturationValue,l:b(e),a:this.alphaValue/100}),this.initRgb(),this.initHsb(),this.lightnessValue=b(e)}get lightness(){return this.lightnessValue}set red(e){const t=this.instance.toRgb();this.instance=(0,c.Z)({...t,r:b(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.redValue=b(e)}get red(){return this.redValue}set green(e){const t=this.instance.toRgb();this.instance=(0,c.Z)({...t,g:b(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.greenValue=b(e)}get green(){return this.greenValue}set blue(e){const t=this.instance.toRgb();this.instance=(0,c.Z)({...t,b:b(e),a:this.alphaValue/100}),this.initHsb(),this.initLightness(),this.blueValue=b(e)}get blue(){return this.blueValue}set alpha(e){this.instance.setAlpha(e/100),this.alphaValue=e}get alpha(){return this.alphaValue}get RGB(){return[this.red,this.green,this.blue,this.alpha/100]}get HSB(){return[this.hue,this.saturation,this.brightness,this.alpha/100]}get HSL(){return[this.hue,this.hslSaturationValue,this.lightness,this.alpha/100]}}function y(e,t,a,o){return`rgba(${[e,t,a,o/100].join(",")})`}const m=(e,t,a)=>t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e,_="color-history",k=(e,t)=>{const a=e.__vccOpts||e;for(const[e,o]of t)a[e]=o;return a},S=(0,o.aZ)({name:"Alpha",props:{color:g.ZP.instanceOf(f),size:g.ZP.oneOf(["small","default"]).def("default")},emits:["change"],setup(e,{emit:t}){const a=(0,n.iH)(null),l=(0,n.iH)(null);let r=e.color||new f;const s=(0,n.qj)({red:r.red,green:r.green,blue:r.blue,alpha:r.alpha});(0,o.YP)((()=>e.color),(e=>{e&&(r=e,(0,p.Z)(s,{red:e.red,green:e.green,blue:e.blue,alpha:e.alpha}))}),{deep:!0});const c=(0,o.Fl)((()=>({background:`linear-gradient(to right, ${y(s.red,s.green,s.blue,0)} , ${y(s.red,s.green,s.blue,100)})`}))),u=()=>{if(a.value&&l.value){const e=s.alpha/100,t=a.value.getBoundingClientRect(),o=l.value.offsetWidth;return Math.round(e*(t.width-o)+o/2)}return 0},d=(0,o.Fl)((()=>({left:u()+"px",top:0}))),g=e=>{if(e.stopPropagation(),a.value&&l.value){const o=a.value.getBoundingClientRect(),n=l.value.offsetWidth;let i=e.clientX-o.left;i=Math.max(n/2,i),i=Math.min(i,o.width-n/2);const c=Math.round((i-n/2)/(o.width-n)*100);r.alpha=c,s.alpha=c,t("change",c)}};return(0,i.u7)((()=>{const e={drag:e=>{g(e)},end:e=>{g(e)}};a.value&&l.value&&h.lP.triggerDragEvent(a.value,e)})),{barElement:a,cursorElement:l,getCursorStyle:d,getBackgroundStyle:c,onClickSider:e=>{e.target!==a.value&&g(e)}}}}),w=[(e=>((0,o.dD)("data-v-18925ba6"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"vc-alpha-slider__bar-handle"},null,-1)))];const P=k(S,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["vc-alpha-slider","transparent",{"small-slider":"small"===e.size}])},[(0,o._)("div",{ref:"barElement",class:"vc-alpha-slider__bar",style:(0,l.j5)(e.getBackgroundStyle),onClick:t[0]||(t[0]=(...t)=>e.onClickSider&&e.onClickSider(...t))},[(0,o._)("div",{class:(0,l.C_)(["vc-alpha-slider__bar-pointer",{"small-bar":"small"===e.size}]),ref:"cursorElement",style:(0,l.j5)(e.getCursorStyle)},w,6)],4)],2)}],["__scopeId","data-v-18925ba6"]]),H=[["#fcc02e","#f67c01","#e64a19","#d81b43","#8e24aa","#512da7","#1f87e8","#008781","#05a045"],["#fed835","#fb8c00","#f5511e","#eb1d4e","#9c28b1","#5d35b0","#2097f3","#029688","#4cb050"],["#ffeb3c","#ffa727","#fe5722","#eb4165","#aa47bc","#673bb7","#42a5f6","#26a59a","#83c683"],["#fff176","#ffb74e","#ff8a66","#f1627e","#b968c7","#7986cc","#64b5f6","#80cbc4","#a5d6a7"],["#fff59c","#ffcc80","#ffab91","#fb879e","#cf93d9","#9ea8db","#90caf8","#b2dfdc","#c8e6ca"],["transparent","#ffffff","#dedede","#a9a9a9","#4b4b4b","#353535","#212121","#000000","advance"]],Z=(0,o.aZ)({name:"Palette",emits:["change"],setup:(e,{emit:t})=>({palettes:H,computedBgStyle:e=>"transparent"===e?e:"advance"===e?{}:{background:(0,c.Z)(e).toRgbString()},onColorChange:e=>{t("change",e)}})}),R={class:"vc-compact"},x=["onClick"];const B=k(Z,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.palettes,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a,class:"vc-compact__row"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a,class:"vc-compact__color-cube--wrap",onClick:a=>e.onColorChange(t)},[(0,o._)("div",{class:(0,l.C_)(["vc-compact__color_cube",{advance:"advance"===t,transparent:"transparent"===t}]),style:(0,l.j5)(e.computedBgStyle(t))},null,6)],8,x)))),128))])))),128))])}],["__scopeId","data-v-b969fd48"]]),A=(0,o.aZ)({name:"Board",props:{color:g.ZP.instanceOf(f),round:g.ZP.bool.def(!1),hide:g.ZP.bool.def(!0)},emits:["change"],setup(e,{emit:t}){var a,l,r;const s=(0,o.FN)(),c={h:(null==(a=e.color)?void 0:a.hue)||0,s:1,v:1},u=new f(c).toHexString(),d=(0,n.qj)({hueColor:u,saturation:(null==(l=e.color)?void 0:l.saturation)||0,brightness:(null==(r=e.color)?void 0:r.brightness)||0}),g=(0,n.iH)(0),v=(0,n.iH)(0),C=(0,n.iH)(),b=(0,n.iH)(),y=(0,o.Fl)((()=>({top:g.value+"px",left:v.value+"px"}))),_=()=>{if(s){const e=s.vnode.el;v.value=d.saturation*(null==e?void 0:e.clientWidth),g.value=(1-d.brightness)*(null==e?void 0:e.clientHeight)}},k=e=>{if(s){const a=s.vnode.el,o=null==a?void 0:a.getBoundingClientRect();let n=e.clientX-o.left,l=e.clientY-o.top;n=m(n,0,o.width),l=m(l,0,o.height);const r=n/o.width,i=m(-l/o.height+1,0,1);v.value=n,g.value=l,d.saturation=r,d.brightness=i,t("change",r,i)}};return(0,i.u7)((()=>{s&&s.vnode.el&&C.value&&(h.lP.triggerDragEvent(C.value,{drag:e=>{k(e)},end:e=>{k(e)}}),(0,o.Y3)((()=>{_()})))})),(0,i.$M)((()=>e.color),(e=>{(0,p.Z)(d,{hueColor:new f({h:e.hue,s:1,v:1}).toHexString(),saturation:e.saturation,brightness:e.brightness}),_()}),{deep:!0}),{state:d,cursorElement:C,getCursorStyle:y,onClickBoard:e=>{e.target!==b.value&&k(e)}}}}),D=e=>((0,o.dD)("data-v-058e5db2"),e=e(),(0,o.Cn)(),e),M=D((()=>(0,o._)("div",{class:"vc-saturation__white"},null,-1))),j=D((()=>(0,o._)("div",{class:"vc-saturation__black"},null,-1))),V=[D((()=>(0,o._)("div",null,null,-1)))];const $=k(A,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{ref:"boardElement",class:(0,l.C_)(["vc-saturation",{"vc-saturation__chrome":e.round,"vc-saturation__hidden":e.hide}]),style:(0,l.j5)({backgroundColor:e.state.hueColor}),onClick:t[0]||(t[0]=(...t)=>e.onClickBoard&&e.onClickBoard(...t))},[M,j,(0,o._)("div",{class:"vc-saturation__cursor",ref:"cursorElement",style:(0,l.j5)(e.getCursorStyle)},V,4)],6)}],["__scopeId","data-v-058e5db2"]]),K=(0,o.aZ)({name:"Hue",props:{color:g.ZP.instanceOf(f),size:g.ZP.oneOf(["small","default"]).def("default")},emits:["change"],setup(e,{emit:t}){const a=(0,n.iH)(null),l=(0,n.iH)(null);let r=e.color||new f;const s=(0,n.qj)({hue:r.hue||0});(0,o.YP)((()=>e.color),(e=>{e&&(r=e,(0,p.Z)(s,{hue:r.hue}))}),{deep:!0});const c=()=>{if(a.value&&l.value){const e=a.value.getBoundingClientRect(),t=l.value.offsetWidth;return 360===s.hue?e.width-t/2:s.hue%360*(e.width-t)/360+t/2}return 0},u=(0,o.Fl)((()=>({left:c()+"px",top:0}))),d=e=>{if(e.stopPropagation(),a.value&&l.value){const o=a.value.getBoundingClientRect(),n=l.value.offsetWidth;let i=e.clientX-o.left;i=Math.min(i,o.width-n/2),i=Math.max(n/2,i);const c=Math.round((i-n/2)/(o.width-n)*360);r.hue=c,s.hue=c,t("change",c)}};return(0,i.u7)((()=>{const e={drag:e=>{d(e)},end:e=>{d(e)}};a.value&&l.value&&h.lP.triggerDragEvent(a.value,e)})),{barElement:a,cursorElement:l,getCursorStyle:u,onClickSider:e=>{e.target!==a.value&&d(e)}}}}),q=[(e=>((0,o.dD)("data-v-e1a08576"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"vc-hue-slider__bar-handle"},null,-1)))];const I=k(K,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["vc-hue-slider",{"small-slider":"small"===e.size}])},[(0,o._)("div",{ref:"barElement",class:"vc-hue-slider__bar",onClick:t[0]||(t[0]=(...t)=>e.onClickSider&&e.onClickSider(...t))},[(0,o._)("div",{class:(0,l.C_)(["vc-hue-slider__bar-pointer",{"small-bar":"small"===e.size}]),ref:"cursorElement",style:(0,l.j5)(e.getCursorStyle)},q,6)],512)],2)}],["__scopeId","data-v-e1a08576"]]),L=(0,o.aZ)({name:"Lightness",props:{color:g.ZP.instanceOf(f),size:g.ZP.oneOf(["small","default"]).def("default")},emits:["change"],setup(e,{emit:t}){const a=(0,n.iH)(null),l=(0,n.iH)(null);let r=e.color||new f;const[s,u,d]=r.HSL,g=(0,n.qj)({hue:s,saturation:u,lightness:d});(0,o.YP)((()=>e.color),(e=>{if(e){r=e;const[t,a,o]=r.HSL;(0,p.Z)(g,{hue:t,saturation:a,lightness:o})}}),{deep:!0});const v=(0,o.Fl)((()=>{const e=(0,c.Z)({h:g.hue,s:g.saturation,l:.8}).toPercentageRgbString(),t=(0,c.Z)({h:g.hue,s:g.saturation,l:.6}).toPercentageRgbString(),a=(0,c.Z)({h:g.hue,s:g.saturation,l:.4}).toPercentageRgbString(),o=(0,c.Z)({h:g.hue,s:g.saturation,l:.2}).toPercentageRgbString();return{background:[`linear-gradient(to right, rgb(255, 255, 255), ${e}, ${t}, ${a}, ${o}, rgb(0, 0, 0))`,`-webkit-linear-gradient(left, rgb(255, 255, 255), ${e}, ${t}, ${a}, ${o}, rgb(0, 0, 0))`,`-moz-linear-gradient(left, rgb(255, 255, 255), ${e}, ${t}, ${a}, ${o}, rgb(0, 0, 0))`,`-ms-linear-gradient(left, rgb(255, 255, 255), ${e}, ${t}, ${a}, ${o}, rgb(0, 0, 0))`]}})),C=()=>{if(a.value&&l.value){const e=g.lightness,t=a.value.getBoundingClientRect(),o=l.value.offsetWidth;return(1-e)*(t.width-o)+o/2}return 0},b=(0,o.Fl)((()=>({left:C()+"px",top:0}))),y=e=>{if(e.stopPropagation(),a.value&&l.value){const o=a.value.getBoundingClientRect(),n=l.value.offsetWidth;let i=e.clientX-o.left;i=Math.max(n/2,i),i=Math.min(i,o.width-n/2);const s=1-(i-n/2)/(o.width-n);r.lightness=s,t("change",s)}};return(0,i.u7)((()=>{const e={drag:e=>{y(e)},end:e=>{y(e)}};a.value&&l.value&&h.lP.triggerDragEvent(a.value,e)})),{barElement:a,cursorElement:l,getCursorStyle:b,getBackgroundStyle:v,onClickSider:e=>{e.target!==a.value&&y(e)}}}}),W=[(e=>((0,o.dD)("data-v-94a50a9e"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"vc-lightness-slider__bar-handle"},null,-1)))];const E=k(L,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["vc-lightness-slider",{"small-slider":"small"===e.size}])},[(0,o._)("div",{ref:"barElement",class:"vc-lightness-slider__bar",style:(0,l.j5)(e.getBackgroundStyle),onClick:t[0]||(t[0]=(...t)=>e.onClickSider&&e.onClickSider(...t))},[(0,o._)("div",{class:(0,l.C_)(["vc-lightness-slider__bar-pointer",{"small-bar":"small"===e.size}]),ref:"cursorElement",style:(0,l.j5)(e.getCursorStyle)},W,6)],4)],2)}],["__scopeId","data-v-94a50a9e"]]),N=(0,o.aZ)({name:"History",props:{colors:g.ZP.arrayOf(String).def((()=>[])),round:g.ZP.bool.def(!1)},emits:["change"],setup:(e,{emit:t})=>({onColorSelect:e=>{t("change",e)}})}),z={key:0,class:"vc-colorPicker__record"},O={class:"color-list"},T=["onClick"];const F=k(N,[["render",function(e,t,a,n,r,i){return e.colors&&e.colors.length>0?((0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.colors,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a,class:(0,l.C_)(["color-item","transparent",{"color-item__round":e.round}]),onClick:a=>e.onColorSelect(t)},[(0,o._)("div",{class:"color-item__display",style:(0,l.j5)({backgroundColor:t})},null,4)],10,T)))),128))])])):(0,o.kq)("",!0)}],["__scopeId","data-v-0f657238"]]),Y=(0,o.aZ)({name:"Display",props:{color:g.ZP.instanceOf(f),disableAlpha:g.ZP.bool.def(!1)},emits:["update:color","change"],setup(e,{emit:t}){var a,l,r,s;const u=(0,n.iH)("hex"),d=(0,n.qj)({color:e.color,hex:null==(a=e.color)?void 0:a.hex,alpha:(null==(l=e.color)?void 0:l.alpha)+"%",rgba:null==(r=e.color)?void 0:r.RGB,previewBgColor:null==(s=e.color)?void 0:s.toRgbString()}),g=(0,o.Fl)((()=>({background:d.previewBgColor}))),h=(0,i.DI)((e=>{if(!e.target.value)return;let a=parseInt(e.target.value.replace("%",""));a>100&&(e.target.value="100%",a=100),a<0&&(e.target.value="0%",a=0),isNaN(a)&&(e.target.value="100%",a=100),!isNaN(a)&&d.color&&(d.color.alpha=a),t("update:color",d.color),t("change",d.color)}),300),p=(0,i.DI)(((e,a)=>{if(e.target.value){if("hex"===u.value){const t=e.target.value.replace("#","");(0,c.Z)(t).isValid()&&d.color&&(d.color.hex=t)}else if(void 0!==a&&d.rgba&&d.color){e.target.value<0&&(e.target.value=0),3===a&&e.target.value>1&&(e.target.value=1),a<3&&e.target.value>255&&(e.target.value=255),d.rgba[a]=Number(e.target.value);const[t,o,n,l]=d.rgba;d.color.hex=(0,c.Z)({r:t,g:o,b:n}).toHex(),d.color.alpha=Math.floor(100*l)}t("update:color",d.color),t("change",d.color)}}),300);return(0,i.$M)((()=>e.color),(e=>{e&&(d.color=e,d.alpha=Math.floor(d.color.alpha)+"%",d.hex=d.color.hex,d.rgba=d.color.RGB)}),{deep:!0}),(0,i.$M)((()=>d.color),(()=>{d.color&&(d.previewBgColor=d.color.toRgbString())}),{deep:!0}),{state:d,getBgColorStyle:g,inputType:u,onInputTypeChange:()=>{u.value="rgba"===u.value?"hex":"rgba"},onAlphaBlur:h,onInputChange:p}}}),G={class:"vc-display"},X={class:"vc-current-color vc-transparent"},U={key:0,style:{display:"flex",flex:"1",gap:"4px",height:"100%"}},J={class:"vc-color-input"},Q=["value"],ee={key:0,class:"vc-alpha-input"},te=["value"],ae={key:1,style:{display:"flex",flex:"1",gap:"4px",height:"100%"}},oe=["value","onInput"];const ne=k(Y,[["render",function(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("div",X,[(0,o._)("div",{class:"color-cube",style:(0,l.j5)(e.getBgColorStyle)},null,4)]),"hex"===e.inputType?((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",J,[(0,o._)("input",{value:e.state.hex,onInput:t[0]||(t[0]=(...t)=>e.onInputChange&&e.onInputChange(...t))},null,40,Q)]),e.disableAlpha?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ee,[(0,o._)("input",{class:"vc-alpha-input__inner",value:e.state.alpha,onInput:t[1]||(t[1]=(...t)=>e.onAlphaBlur&&e.onAlphaBlur(...t))},null,40,te)]))])):e.state.rgba?((0,o.wg)(),(0,o.iD)("div",ae,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.state.rgba,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{class:"vc-rgb-input",key:a},[(0,o._)("div",null,[(0,o._)("input",{value:t,onInput:t=>e.onInputChange(t,a)},null,40,oe)]),(0,o._)("div",null,(0,l.zw)(["R","G","B","A"][a]),1)])))),128))])):(0,o.kq)("",!0),(0,o._)("div",{class:"vc-input-toggle",onClick:t[2]||(t[2]=(...t)=>e.onInputTypeChange&&e.onInputTypeChange(...t))})])}],["__scopeId","data-v-f6f511ec"]]),le=(0,o.aZ)({name:"FkColorPicker",components:{Display:ne,Alpha:P,Palette:B,Board:$,Hue:I,Lightness:E,History:F},props:{color:g.ZP.instanceOf(f),disableHistory:g.ZP.bool.def(!1),roundHistory:g.ZP.bool.def(!1),disableAlpha:g.ZP.bool.def(!1)},emits:["update:color","change","advanceChange"],setup(e,{emit:t}){const a=e.color||new f,l=(0,n.qj)({color:a,hex:a.toHexString(),rgb:a.toRgbString()}),r=(0,n.iH)(!1),u=(0,o.Fl)((()=>({background:l.rgb}))),d=(0,s._aR)(_,[],{}),g=(0,i.DI)((()=>{if(e.disableHistory)return;const t=l.color.toRgbString();if(d.value=d.value.filter((e=>!c.Z.equals(e,t))),!d.value.includes(t)){for(;d.value.length>8;)d.value.pop();d.value.unshift(t)}}),500);return(0,i.$M)((()=>e.color),(e=>{e&&(l.color=e)}),{deep:!0}),(0,i.$M)((()=>l.color),(()=>{l.hex=l.color.hex,l.rgb=l.color.toRgbString(),g(),t("update:color",l.color),t("change",l.color)}),{deep:!0}),{state:l,advancePanelShow:r,onBack:()=>{r.value=!1,t("advanceChange",!1)},onCompactChange:e=>{"advance"===e?(r.value=!0,t("advanceChange",!0)):(l.color.hex=e,t("advanceChange",!1))},onAlphaChange:e=>{l.color.alpha=e},onHueChange:e=>{l.color.hue=e},onBoardChange:(e,t)=>{l.color.saturation=e,l.color.brightness=t},onLightChange:e=>{l.color.lightness=e},onInputChange:e=>{const t=e.target.value.replace("#","");(0,c.Z)(t).isValid()&&(l.color.hex=t)},previewStyle:u,historyColors:d}}}),re={class:"vc-fk-colorPicker"},ie={class:"vc-fk-colorPicker__inner"},se={class:"vc-fk-colorPicker__header"},ce=[(e=>((0,o.dD)("data-v-0d5bef46"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"back"},null,-1)))];const ue=k(le,[["render",function(e,t,a,n,l,r){const i=(0,o.up)("Palette"),s=(0,o.up)("Board"),c=(0,o.up)("Hue"),u=(0,o.up)("Lightness"),d=(0,o.up)("Alpha"),g=(0,o.up)("Display"),h=(0,o.up)("History");return(0,o.wg)(),(0,o.iD)("div",re,[(0,o._)("div",ie,[(0,o._)("div",se,[e.advancePanelShow?((0,o.wg)(),(0,o.iD)("span",{key:0,style:{cursor:"pointer"},onClick:t[0]||(t[0]=(...t)=>e.onBack&&e.onBack(...t))},ce)):(0,o.kq)("",!0)]),e.advancePanelShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(i,{key:0,onChange:e.onCompactChange},null,8,["onChange"])),e.advancePanelShow?((0,o.wg)(),(0,o.j4)(s,{key:1,color:e.state.color,onChange:e.onBoardChange},null,8,["color","onChange"])):(0,o.kq)("",!0),e.advancePanelShow?((0,o.wg)(),(0,o.j4)(c,{key:2,color:e.state.color,onChange:e.onHueChange},null,8,["color","onChange"])):(0,o.kq)("",!0),e.advancePanelShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:3,color:e.state.color,onChange:e.onLightChange},null,8,["color","onChange"])),e.disableAlpha?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:4,color:e.state.color,onChange:e.onAlphaChange},null,8,["color","onChange"])),(0,o.Wm)(g,{color:e.state.color,"disable-alpha":e.disableAlpha},null,8,["color","disable-alpha"]),e.disableHistory?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(h,{key:5,round:e.roundHistory,colors:e.historyColors,onChange:e.onCompactChange},null,8,["round","colors","onChange"]))])])}],["__scopeId","data-v-0d5bef46"]]),de=(0,o.aZ)({name:"ChromeColorPicker",components:{Display:ne,Alpha:P,Board:$,Hue:I,History:F},props:{color:g.ZP.instanceOf(f),disableHistory:g.ZP.bool.def(!1),roundHistory:g.ZP.bool.def(!1),disableAlpha:g.ZP.bool.def(!1)},emits:["update:color","change"],setup(e,{emit:t}){const a=e.color||new f,l=(0,n.qj)({color:a,hex:a.toHexString(),rgb:a.toRgbString()}),r=(0,o.Fl)((()=>({background:l.rgb}))),u=(0,s._aR)(_,[],{}),d=(0,i.DI)((()=>{if(e.disableHistory)return;const t=l.color.toRgbString();if(u.value=u.value.filter((e=>!c.Z.equals(e,t))),!u.value.includes(t)){for(;u.value.length>8;)u.value.pop();u.value.unshift(t)}}),500);return(0,i.$M)((()=>e.color),(e=>{e&&(l.color=e)}),{deep:!0}),(0,i.$M)((()=>l.color),(()=>{l.hex=l.color.hex,l.rgb=l.color.toRgbString(),d(),t("update:color",l.color),t("change",l.color)}),{deep:!0}),{state:l,previewStyle:r,historyColors:u,onAlphaChange:e=>{l.color.alpha=e},onHueChange:e=>{l.color.hue=e},onBoardChange:(e,t)=>{l.color.saturation=e,l.color.brightness=t},onCompactChange:e=>{"advance"!==e&&(l.color.hex=e)}}}}),ge={class:"vc-chrome-colorPicker"},he={class:"vc-chrome-colorPicker-body"},pe={class:"chrome-controls"},ve={class:"chrome-sliders"};const Ce=k(de,[["render",function(e,t,a,n,l,r){const i=(0,o.up)("Board"),s=(0,o.up)("Hue"),c=(0,o.up)("Alpha"),u=(0,o.up)("Display"),d=(0,o.up)("History");return(0,o.wg)(),(0,o.iD)("div",ge,[(0,o.Wm)(i,{round:!0,hide:!1,color:e.state.color,onChange:e.onBoardChange},null,8,["color","onChange"]),(0,o._)("div",he,[(0,o._)("div",pe,[(0,o._)("div",ve,[(0,o.Wm)(s,{size:"small",color:e.state.color,onChange:e.onHueChange},null,8,["color","onChange"]),e.disableAlpha?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(c,{key:0,size:"small",color:e.state.color,onChange:e.onAlphaChange},null,8,["color","onChange"]))])]),(0,o.Wm)(u,{color:e.state.color,"disable-alpha":e.disableAlpha},null,8,["color","disable-alpha"]),e.disableHistory?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,round:e.roundHistory,colors:e.historyColors,onChange:e.onCompactChange},null,8,["round","colors","onChange"]))])])}],["__scopeId","data-v-33636434"]]),be="Vue3ColorPickerProvider";let fe=!1;const ye={angle:{type:Number,default:0},size:{type:Number,default:16,validator:e=>e>=16},borderWidth:{type:Number,default:1,validator:e=>e>=1},borderColor:{type:String,default:"#666"}},me=(0,o.aZ)({name:"Angle",props:ye,emits:["update:angle","change"],setup(e,{emit:t}){const a=(0,n.iH)(null),l=(0,n.iH)(0);(0,o.YP)((()=>e.angle),(e=>{l.value=e}));const r=(0,o.Fl)((()=>({width:e.size+"px",height:e.size+"px",borderWidth:e.borderWidth+"px",borderColor:e.borderColor,transform:`rotate(${l.value}deg)`}))),i=o=>{a.value&&(l.value=((e,t)=>{const a=e.getBoundingClientRect(),o=a.left+a.width/2,n=a.top+a.height/2,l=Math.abs(o-t.clientX),r=Math.abs(n-t.clientY),i=r/Math.sqrt(Math.pow(l,2)+Math.pow(r,2)),s=Math.acos(i);let c=Math.floor(180/(Math.PI/s));return t.clientX>o&&t.clientY>n&&(c=180-c),t.clientX==o&&t.clientY>n&&(c=180),t.clientX>o&&t.clientY==n&&(c=90),t.clientX<o&&t.clientY>n&&(c=180+c),t.clientX<o&&t.clientY==n&&(c=270),t.clientX<o&&t.clientY<n&&(c=360-c),c})(a.value,o)%360,(()=>{let a=Number(l.value);isNaN(a)||(a=a>360||a<0?e.angle:a,l.value=360===a?0:a,t("update:angle",l.value),t("change",l.value))})())};return(0,o.bv)((()=>{const e={drag:e=>{i(e)},end:e=>{i(e)}};a.value&&((e,t)=>{const a=function(e){var a;null==(a=t.drag)||a.call(t,e)},o=function(e){var n;document.removeEventListener("mousemove",a,!1),document.removeEventListener("mouseup",o,!1),document.onselectstart=null,document.ondragstart=null,fe=!1,null==(n=t.end)||n.call(t,e)};e&&e.addEventListener("mousedown",(e=>{var n;fe||(document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",o,!1),fe=!0,null==(n=t.start)||n.call(t,e))}))})(a.value,e)})),()=>(0,o.Wm)("div",{class:"bee-angle"},[(0,o.Wm)("div",{class:"bee-angle__round",ref:a,style:r.value},null)])}}),_e=(0,o.aZ)({name:"GradientColorPicker",components:{Angle:me,Display:ne,Alpha:P,Palette:B,Board:$,Hue:I,Lightness:E,History:F},props:{startColor:g.ZP.instanceOf(f).isRequired,endColor:g.ZP.instanceOf(f).isRequired,startColorStop:g.ZP.number.def(0),endColorStop:g.ZP.number.def(100),angle:g.ZP.number.def(0),type:g.ZP.oneOf(["linear","radial"]).def("linear"),disableHistory:g.ZP.bool.def(!1),roundHistory:g.ZP.bool.def(!1),disableAlpha:g.ZP.bool.def(!1),pickerType:g.ZP.oneOf(["fk","chrome"]).def("fk")},emits:["update:startColor","update:endColor","update:angle","update:startColorStop","update:endColorStop","startColorChange","endColorChange","advanceChange","angleChange","startColorStopChange","endColorStopChange","typeChange"],setup(e,{emit:t}){const a=(0,n.qj)({startActive:!0,startColor:e.startColor,endColor:e.endColor,startColorStop:e.startColorStop,endColorStop:e.endColorStop,angle:e.angle,type:e.type,startColorRgba:e.startColor.toRgbString(),endColorRgba:e.endColor.toRgbString()}),l=(0,o.f3)(be),r=(0,n.iH)("chrome"===e.pickerType),u=(0,n.iH)(),d=(0,n.iH)(),g=(0,n.iH)();(0,o.YP)((()=>[e.startColor,e.endColor,e.angle]),(e=>{a.startColor=e[0],a.endColor=e[1],a.angle=e[2]})),(0,o.YP)((()=>e.type),(e=>{a.type=e}));const p=(0,o.Fl)({get:()=>a.startActive?a.startColor:a.endColor,set:e=>{a.startActive?a.startColor=e:a.endColor=e}}),v=(0,o.Fl)((()=>{if(g.value&&u.value){const e=a.startColorStop/100,t=g.value.getBoundingClientRect(),o=u.value.offsetWidth;return Math.round(e*(t.width-o)+o/2)}return 0})),C=(0,o.Fl)((()=>{if(g.value&&d.value){const e=a.endColorStop/100,t=g.value.getBoundingClientRect(),o=d.value.offsetWidth;return Math.round(e*(t.width-o)+o/2)}return 0})),b=(0,o.Fl)((()=>{let e=`background: linear-gradient(${a.angle}deg, ${a.startColorRgba} ${a.startColorStop}%, ${a.endColorRgba} ${a.endColorStop}%)`;return"radial"===a.type&&(e=`background: radial-gradient(circle, ${a.startColorRgba} ${a.startColorStop}%, ${a.endColorRgba} ${a.endColorStop}%)`),e})),f=e=>{var o;if(a.startActive=!0,g.value&&u.value){const n=null==(o=g.value)?void 0:o.getBoundingClientRect();let l=e.clientX-n.left;l=Math.max(u.value.offsetWidth/2,l),l=Math.min(l,n.width-u.value.offsetWidth/2),a.startColorStop=Math.round((l-u.value.offsetWidth/2)/(n.width-u.value.offsetWidth)*100),t("update:startColorStop",a.startColorStop),t("startColorStopChange",a.startColorStop)}},y=e=>{var o;if(a.startActive=!1,g.value&&d.value){const n=null==(o=g.value)?void 0:o.getBoundingClientRect();let l=e.clientX-n.left;l=Math.max(d.value.offsetWidth/2,l),l=Math.min(l,n.width-d.value.offsetWidth/2),a.endColorStop=Math.round((l-d.value.offsetWidth/2)/(n.width-d.value.offsetWidth)*100),t("update:endColorStop",a.endColorStop),t("endColorStopChange",a.endColorStop)}},m=()=>{a.startActive?(t("update:startColor",a.startColor),t("startColorChange",a.startColor)):(t("update:endColor",a.endColor),t("endColorChange",a.endColor))},k=(0,s._aR)(_,[],{}),S=(0,i.DI)((()=>{if(e.disableHistory)return;const t=p.value.toRgbString();if(k.value=k.value.filter((e=>!c.Z.equals(e,t))),!k.value.includes(t)){for(;k.value.length>8;)k.value.pop();k.value.unshift(t)}}),500);return(0,i.u7)((()=>{d.value&&u.value&&(h.lP.triggerDragEvent(d.value,{drag:e=>{y(e)},end:e=>{y(e)}}),h.lP.triggerDragEvent(u.value,{drag:e=>{f(e)},end:e=>{f(e)}}))})),(0,i.$M)((()=>a.startColor),(e=>{a.startColorRgba=e.toRgbString()}),{deep:!0}),(0,i.$M)((()=>a.endColor),(e=>{a.endColorRgba=e.toRgbString()}),{deep:!0}),(0,i.$M)((()=>p.value),(()=>{S()}),{deep:!0}),{startGradientRef:u,stopGradientRef:d,colorRangeRef:g,state:a,currentColor:p,getStartColorLeft:v,getEndColorLeft:C,gradientBg:b,advancePanelShow:r,onDegreeBlur:e=>{const o=e.target,n=parseInt(o.value.replace("°",""));isNaN(n)||(a.angle=n%360),t("update:angle",a.angle),t("angleChange",a.angle)},onCompactChange:e=>{"advance"===e?(r.value=!0,t("advanceChange",!0)):(p.value.hex=e,t("advanceChange",!1)),m()},onAlphaChange:e=>{p.value.alpha=e,m()},onHueChange:e=>{p.value.hue=e,m()},onBoardChange:(e,t)=>{p.value.saturation=e,p.value.brightness=t,m()},onLightChange:e=>{p.value.lightness=e,m()},historyColors:k,onBack:()=>{r.value=!1,t("advanceChange",!1)},onDegreeChange:e=>{a.angle=e,t("update:angle",a.angle),t("angleChange",a.angle)},onDisplayChange:()=>{m()},onTypeChange:()=>{a.type="linear"===a.type?"radial":"linear",t("typeChange",a.type)},lang:null==l?void 0:l.lang}}}),ke=e=>((0,o.dD)("data-v-1e7e32e5"),e=e(),(0,o.Cn)(),e),Se={class:"vc-gradient-picker"},we={class:"vc-gradient-picker__header"},Pe={class:"vc-gradient__types"},He={class:"vc-gradient-picker__body"},Ze={class:"vc-color-range",ref:"colorRangeRef"},Re={class:"vc-color-range__container"},xe={class:"vc-gradient__stop__container"},Be=["title"],Ae=[ke((()=>(0,o._)("span",{class:"vc-gradient__stop--inner"},null,-1)))],De=["title"],Me=[ke((()=>(0,o._)("span",{class:"vc-gradient__stop--inner"},null,-1)))],je={class:"vc-picker-degree-input vc-degree-input"},Ve={class:"vc-degree-input__control"},$e=["value"],Ke={class:"vc-degree-input__panel"},qe={class:"vc-degree-input__disk"};const Ie=k(_e,[["render",function(e,t,a,n,i,s){var c,u;const d=(0,o.up)("Angle"),g=(0,o.up)("Board"),h=(0,o.up)("Hue"),p=(0,o.up)("Palette"),v=(0,o.up)("Lightness"),C=(0,o.up)("Alpha"),b=(0,o.up)("Display"),f=(0,o.up)("History");return(0,o.wg)(),(0,o.iD)("div",Se,[(0,o._)("div",we,[(0,o._)("div",null,[(0,o.wy)((0,o._)("div",{class:"back",style:{cursor:"pointer"},onClick:t[0]||(t[0]=(...t)=>e.onBack&&e.onBack(...t))},null,512),[[r.F8,"fk"===e.pickerType&&e.advancePanelShow]])]),(0,o._)("div",Pe,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(["linear","radial"],(a=>(0,o._)("div",{class:(0,l.C_)(["vc-gradient__type",{active:e.state.type===a}]),key:a,onClick:t[1]||(t[1]=(...t)=>e.onTypeChange&&e.onTypeChange(...t))},(0,l.zw)(e.lang?e.lang[a]:a),3))),64))])]),(0,o._)("div",He,[(0,o._)("div",Ze,[(0,o._)("div",Re,[(0,o._)("div",{class:"vc-background",style:(0,l.j5)(e.gradientBg)},null,4),(0,o._)("div",xe,[(0,o._)("div",{class:(0,l.C_)(["vc-gradient__stop",{"vc-gradient__stop--current":e.state.startActive}]),ref:"startGradientRef",title:null==(c=e.lang)?void 0:c.start,style:(0,l.j5)({left:e.getStartColorLeft+"px"})},Ae,14,Be),(0,o._)("div",{class:(0,l.C_)(["vc-gradient__stop",{"vc-gradient__stop--current":!e.state.startActive}]),ref:"stopGradientRef",title:null==(u=e.lang)?void 0:u.end,style:(0,l.j5)({left:e.getEndColorLeft+"px"})},Me,14,De)])])],512),(0,o._)("div",je,[(0,o._)("div",Ve,[(0,o._)("input",{value:e.state.angle,onBlur:t[2]||(t[2]=(...t)=>e.onDegreeBlur&&e.onDegreeBlur(...t))},null,40,$e),(0,o.Uk)("deg ")]),(0,o._)("div",Ke,[(0,o._)("div",qe,[(0,o.Wm)(d,{angle:e.state.angle,"onUpdate:angle":t[3]||(t[3]=t=>e.state.angle=t),size:40,onChange:e.onDegreeChange},null,8,["angle","onChange"])])])])]),e.advancePanelShow?((0,o.wg)(),(0,o.j4)(g,{key:0,color:e.currentColor,onChange:e.onBoardChange},null,8,["color","onChange"])):(0,o.kq)("",!0),e.advancePanelShow?((0,o.wg)(),(0,o.j4)(h,{key:1,color:e.currentColor,onChange:e.onHueChange},null,8,["color","onChange"])):(0,o.kq)("",!0),e.advancePanelShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:2,onChange:e.onCompactChange},null,8,["onChange"])),e.advancePanelShow?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(v,{key:3,color:e.currentColor,onChange:e.onLightChange},null,8,["color","onChange"])),e.disableAlpha?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(C,{key:4,color:e.currentColor,onChange:e.onAlphaChange},null,8,["color","onChange"])),(0,o.Wm)(b,{color:e.currentColor,"disable-alpha":e.disableAlpha,onChange:e.onDisplayChange},null,8,["color","disable-alpha","onChange"]),e.disableHistory?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:5,round:e.roundHistory,colors:e.historyColors,onChange:e.onCompactChange},null,8,["round","colors","onChange"]))])}],["__scopeId","data-v-1e7e32e5"]]),Le=(0,o.aZ)({name:"WrapContainer",props:{theme:g.ZP.oneOf(["white","black"]).def("white"),showTab:g.ZP.bool.def(!1),activeKey:g.ZP.oneOf(["pure","gradient"]).def("pure")},emits:["update:activeKey","change"],setup(e,{emit:t}){const a=(0,n.qj)({activeKey:e.activeKey}),l=(0,o.f3)(be);return(0,i.$M)((()=>e.activeKey),(e=>{a.activeKey=e})),{state:a,onActiveKeyChange:e=>{a.activeKey=e,t("update:activeKey",e),t("change",e)},lang:null==l?void 0:l.lang}}}),We={class:"vc-colorpicker--container"},Ee={key:0,class:"vc-colorpicker--tabs"},Ne={class:"vc-colorpicker--tabs__inner"},ze={class:"vc-btn__content"},Oe={class:"vc-btn__content"};const Te=k(Le,[["render",function(e,t,a,n,r,i){var s,c;return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)(["vc-colorpicker",e.theme])},[(0,o._)("div",We,[e.showTab?((0,o.wg)(),(0,o.iD)("div",Ee,[(0,o._)("div",Ne,[(0,o._)("div",{class:(0,l.C_)(["vc-colorpicker--tabs__btn",{"vc-btn-active":"pure"===e.state.activeKey}]),onClick:t[0]||(t[0]=t=>e.onActiveKeyChange("pure"))},[(0,o._)("button",null,[(0,o._)("div",ze,(0,l.zw)(null==(s=e.lang)?void 0:s.pure),1)])],2),(0,o._)("div",{class:(0,l.C_)(["vc-colorpicker--tabs__btn",{"vc-btn-active":"gradient"===e.state.activeKey}]),onClick:t[1]||(t[1]=t=>e.onActiveKeyChange("gradient"))},[(0,o._)("button",null,[(0,o._)("div",Oe,(0,l.zw)(null==(c=e.lang)?void 0:c.gradient),1)])],2),(0,o._)("div",{class:"vc-colorpicker--tabs__bg",style:(0,l.j5)({width:"50%",left:`calc(${"gradient"===e.state.activeKey?50:0}%)`})},null,4)])])):(0,o.kq)("",!0),(0,o.WI)(e.$slots,"default",{},void 0,!0)])],2)}],["__scopeId","data-v-0492277d"]]),Fe={En:{start:"Start",end:"End",pure:"Pure",gradient:"Gradient",linear:"linear",radial:"radial"},"ZH-cn":{start:"开始",end:"结束",pure:"纯色",gradient:"渐变",linear:"线性",radial:"径向"}},Ye={isWidget:g.ZP.bool.def(!1),pickerType:g.ZP.oneOf(["fk","chrome"]).def("fk"),shape:g.ZP.oneOf(["circle","square"]).def("square"),pureColor:{type:[String,Object],default:"#000000"},gradientColor:g.ZP.string.def("linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"),format:{type:String,default:"rgb"},disableAlpha:g.ZP.bool.def(!1),disableHistory:g.ZP.bool.def(!1),roundHistory:g.ZP.bool.def(!1),useType:g.ZP.oneOf(["pure","gradient","both"]).def("pure"),activeKey:g.ZP.oneOf(["pure","gradient"]).def("pure"),lang:{type:String,default:"ZH-cn"},zIndex:g.ZP.number.def(9999),pickerContainer:{type:String||HTMLElement,default:"body"},debounce:g.ZP.number.def(100),theme:g.ZP.oneOf(["white","black"]).def("white")};const Ge=k((0,o.aZ)({name:"ColorPicker",components:{FkColorPicker:ue,ChromeColorPicker:Ce,GradientColorPicker:Ie,WrapContainer:Te},inheritAttrs:!1,props:Ye,emits:["update:pureColor","pureColorChange","update:gradientColor","gradientColorChange","update:activeKey","activeKeyChange"],setup(e,{emit:t}){(0,o.JJ)(be,{lang:(0,o.Fl)((()=>Fe[e.lang||"ZH-cn"]))});const a=(0,n.qj)({pureColor:e.pureColor||"",activeKey:"gradient"===e.useType?"gradient":e.activeKey,isAdvanceMode:!1}),l=new f("#000"),r=new f("#000"),g=new f(a.pureColor),h=(0,n.qj)({startColor:l,endColor:r,startColorStop:0,endColorStop:100,angle:0,type:"linear",gradientColor:e.gradientColor}),p=(0,n.iH)(g),v=(0,n.iH)(!1),C=(0,n.iH)(null),b=(0,n.iH)(null);let y=null;const m=(0,o.Fl)((()=>({background:"gradient"!==a.activeKey?(0,c.Z)(a.pureColor).toRgbString():h.gradientColor}))),_=(0,o.Fl)((()=>"gradient"===a.activeKey?Ie.name:"fk"===e.pickerType?ue.name:Ce.name)),k=e=>{a.isAdvanceMode=e},S=(0,o.Fl)((()=>{const t={disableAlpha:e.disableAlpha,disableHistory:e.disableHistory,roundHistory:e.roundHistory,pickerType:e.pickerType};return"gradient"===a.activeKey?{...t,startColor:h.startColor,endColor:h.endColor,angle:h.angle,type:h.type,startColorStop:h.startColorStop,endColorStop:h.endColorStop,onStartColorChange:e=>{h.startColor=e,P()},onEndColorChange:e=>{h.endColor=e,P()},onStartColorStopChange:e=>{h.startColorStop=e,P()},onEndColorStopChange:e=>{h.endColorStop=e,P()},onAngleChange:e=>{h.angle=e,P()},onTypeChange:e=>{h.type=e,P()},onAdvanceChange:k}:{...t,disableAlpha:e.disableAlpha,disableHistory:e.disableHistory,roundHistory:e.roundHistory,color:p.value,onChange:R,onAdvanceChange:k}})),w=()=>{var e,t,a,o;try{const[n]=(0,u.Q)(h.gradientColor);if(n&&n.type.includes("gradient")&&n.colorStops.length>=2){const l=n.colorStops[0],r=n.colorStops[1];h.startColorStop=Number(null==(e=l.length)?void 0:e.value)||0,h.endColorStop=Number(null==(t=r.length)?void 0:t.value)||0,"linear-gradient"===n.type&&"angular"===(null==(a=n.orientation)?void 0:a.type)&&(h.angle=Number(null==(o=n.orientation)?void 0:o.value)||0),h.type=n.type.split("-")[0];const[i,s,c,u]=l.value,[d,g,p,v]=r.value;h.startColor=new f({r:Number(i),g:Number(s),b:Number(c),a:Number(u)}),h.endColor=new f({r:Number(d),g:Number(g),b:Number(p),a:Number(v)})}}catch(e){}},P=(0,i.DI)((()=>{const e=H();try{h.gradientColor=(0,u.P)(e),t("update:gradientColor",h.gradientColor),t("gradientColorChange",h.gradientColor)}catch(e){}}),e.debounce),H=()=>{const e=[],t=h.startColor.RGB.map((e=>e.toString())),a=h.endColor.RGB.map((e=>e.toString())),o=[{type:"rgba",value:[t[0],t[1],t[2],t[3]],length:{value:h.startColorStop+"",type:"%"}},{type:"rgba",value:[a[0],a[1],a[2],a[3]],length:{value:h.endColorStop+"",type:"%"}}];return"linear"===h.type?e.push({type:"linear-gradient",orientation:{type:"angular",value:h.angle+""},colorStops:o}):"radial"===h.type&&e.push({type:"radial-gradient",orientation:[{type:"shape",value:"circle"}],colorStops:o}),e},Z=()=>{C.value&&b.value&&(y=(0,d.fi)(C.value,b.value,{placement:"auto",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"flip",options:{allowedAutoPlacements:["top","bottom","left","right"],rootBoundary:"viewport"}}]}))},R=t=>{p.value=t,a.pureColor=t.toString(e.format),x()},x=(0,i.DI)((()=>{t("update:pureColor",a.pureColor),t("pureColorChange",a.pureColor)}),e.debounce);(0,s.i9H)(b,(()=>{v.value=!1}));return(0,i.u7)((()=>{w()})),(0,i.$M)((()=>e.gradientColor),(e=>{e!=h.gradientColor&&(h.gradientColor=e)})),(0,i.$M)((()=>h.gradientColor),(()=>{w()})),(0,i.$M)((()=>e.activeKey),(e=>{a.activeKey=e})),(0,i.$M)((()=>e.useType),(e=>{"gradient"!==a.activeKey&&"gradient"===e?a.activeKey="gradient":a.activeKey="pure"})),(0,i.$M)((()=>e.pureColor),(e=>{c.Z.equals(e,a.pureColor)||(a.pureColor=e,p.value=new f(e))}),{deep:!0}),{colorCubeRef:C,pickerRef:b,showPicker:v,colorInstance:p,getBgColorStyle:m,onColorChange:R,onShowPicker:()=>{v.value=!0,y?y.update():Z()},onActiveKeyChange:e=>{a.activeKey=e,t("update:activeKey",e),t("activeKeyChange",e)},getComponentName:_,getBindArgs:S,state:a}}}),[["render",function(e,t,a,n,i,s){const c=(0,o.up)("WrapContainer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.isWidget?((0,o.wg)(),(0,o.j4)(c,{key:0,"active-key":e.state.activeKey,"onUpdate:activeKey":t[0]||(t[0]=t=>e.state.activeKey=t),"show-tab":"both"===e.useType,onChange:e.onActiveKeyChange,style:(0,l.j5)({zIndex:e.zIndex}),theme:e.theme},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.getComponentName),(0,o.dG)({key:e.getComponentName},e.getBindArgs),null,16))])),_:1},8,["active-key","show-tab","onChange","style","theme"])):(0,o.kq)("",!0),e.isWidget?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o._)("div",{class:(0,l.C_)(["vc-color-wrap transparent",{round:"circle"===e.shape}]),ref:"colorCubeRef"},[(0,o._)("div",{class:"current-color",style:(0,l.j5)(e.getBgColorStyle),onClick:t[1]||(t[1]=(...t)=>e.onShowPicker&&e.onShowPicker(...t))},null,4)],2),((0,o.wg)(),(0,o.j4)(o.lR,{to:e.pickerContainer},[(0,o.wy)((0,o._)("div",{ref:"pickerRef",style:(0,l.j5)({zIndex:e.zIndex})},[e.showPicker?((0,o.wg)(),(0,o.j4)(c,{key:0,"show-tab":"both"===e.useType&&!e.state.isAdvanceMode,"active-key":e.state.activeKey,"onUpdate:activeKey":t[2]||(t[2]=t=>e.state.activeKey=t),onChange:e.onActiveKeyChange,theme:e.theme},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.getComponentName),(0,o.dG)({key:e.getComponentName},e.getBindArgs),null,16))])),_:1},8,["show-tab","active-key","onChange","theme"])):(0,o.kq)("",!0)],4),[[r.F8,e.showPicker]])],8,["to"]))],64))],64)}],["__scopeId","data-v-11de56b7"]]),Xe={install:e=>{e.component(Ge.name,Ge),e.component("Vue3"+Ge.name,Ge)}}}}]);
//# sourceMappingURL=7346.js.map