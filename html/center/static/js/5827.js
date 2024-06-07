"use strict";(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[5827],{85827:(t,e,r)=>{r.d(e,{Z:()=>m});var n,o=r(26440),i=r(92811),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};!function(t){var e=function(){function e(t,r,n,i){if(this.version=t,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*t+17;for(var a=[],s=0;s<this.size;s++)a.push(!1);for(s=0;s<this.size;s++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(n);if(this.drawCodewords(u),-1==i){var h=1e9;for(s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);var c=this.getPenaltyScore();c<h&&(i=s,h=c),this.applyMask(s)}}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return e.encodeText=function(r,n){var o=t.QrSegment.makeSegments(r);return e.encodeSegments(o,n)},e.encodeBinary=function(r,n){var o=t.QrSegment.makeBytes(r);return e.encodeSegments([o],n)},e.encodeSegments=function(t,n,a,s,u,h){if(void 0===a&&(a=1),void 0===s&&(s=40),void 0===u&&(u=-1),void 0===h&&(h=!0),!(e.MIN_VERSION<=a&&a<=s&&s<=e.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");var c,l;for(c=a;;c++){var f=8*e.getNumDataCodewords(c,n),d=i.getTotalBits(t,c);if(d<=f){l=d;break}if(c>=s)throw new RangeError("Data too long")}for(var v=0,g=[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH];v<g.length;v++){var m=g[v];h&&l<=8*e.getNumDataCodewords(c,m)&&(n=m)}for(var p=[],E=0,w=t;E<w.length;E++){var M=w[E];r(M.mode.modeBits,4,p),r(M.numChars,M.mode.numCharCountBits(c),p);for(var C=0,R=M.getData();C<R.length;C++){var N=R[C];p.push(N)}}o(p.length==l);var A=8*e.getNumDataCodewords(c,n);o(p.length<=A),r(0,Math.min(4,A-p.length),p),r(0,(8-p.length%8)%8,p),o(p.length%8==0);for(var y=236;p.length<A;y^=253)r(y,8,p);for(var P=[];8*P.length<p.length;)P.push(0);return p.forEach((function(t,e){return P[e>>>3]|=t<<7-(7&e)})),new e(c,n,P,u)},e.prototype.getModule=function(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]},e.prototype.getModules=function(){return this.modules},e.prototype.drawFunctionPatterns=function(){for(var t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);var e=this.getAlignmentPatternPositions(),r=e.length;for(t=0;t<r;t++)for(var n=0;n<r;n++)0==t&&0==n||0==t&&n==r-1||t==r-1&&0==n||this.drawAlignmentPattern(e[t],e[n]);this.drawFormatBits(0),this.drawVersion()},e.prototype.drawFormatBits=function(t){for(var e=this.errorCorrectionLevel.formatBits<<3|t,r=e,i=0;i<10;i++)r=r<<1^1335*(r>>>9);var a=21522^(e<<10|r);o(a>>>15==0);for(i=0;i<=5;i++)this.setFunctionModule(8,i,n(a,i));this.setFunctionModule(8,7,n(a,6)),this.setFunctionModule(8,8,n(a,7)),this.setFunctionModule(7,8,n(a,8));for(i=9;i<15;i++)this.setFunctionModule(14-i,8,n(a,i));for(i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,n(a,i));for(i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,n(a,i));this.setFunctionModule(8,this.size-8,!0)},e.prototype.drawVersion=function(){if(!(this.version<7)){for(var t=this.version,e=0;e<12;e++)t=t<<1^7973*(t>>>11);var r=this.version<<12|t;o(r>>>18==0);for(e=0;e<18;e++){var i=n(r,e),a=this.size-11+e%3,s=Math.floor(e/3);this.setFunctionModule(a,s,i),this.setFunctionModule(s,a,i)}}},e.prototype.drawFinderPattern=function(t,e){for(var r=-4;r<=4;r++)for(var n=-4;n<=4;n++){var o=Math.max(Math.abs(n),Math.abs(r)),i=t+n,a=e+r;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}},e.prototype.drawAlignmentPattern=function(t,e){for(var r=-2;r<=2;r++)for(var n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,1!=Math.max(Math.abs(n),Math.abs(r)))},e.prototype.setFunctionModule=function(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0},e.prototype.addEccAndInterleave=function(t){var r=this.version,n=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(r,n))throw new RangeError("Invalid argument");for(var i=e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],a=e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(e.getNumRawDataModules(r)/8),u=i-s%i,h=Math.floor(s/i),c=[],l=e.reedSolomonComputeDivisor(a),f=0,d=0;f<i;f++){var v=t.slice(d,d+h-a+(f<u?0:1));d+=v.length;var g=e.reedSolomonComputeRemainder(v,l);f<u&&v.push(0),c.push(v.concat(g))}var m=[],p=function(t){c.forEach((function(e,r){(t!=h-a||r>=u)&&m.push(e[t])}))};for(f=0;f<c[0].length;f++)p(f);return o(m.length==s),m},e.prototype.drawCodewords=function(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var r=0,i=this.size-1;i>=1;i-=2){6==i&&(i=5);for(var a=0;a<this.size;a++)for(var s=0;s<2;s++){var u=i-s,h=0==(i+1&2)?this.size-1-a:a;!this.isFunction[h][u]&&r<8*t.length&&(this.modules[h][u]=n(t[r>>>3],7-(7&r)),r++)}}o(r==8*t.length)},e.prototype.applyMask=function(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(var e=0;e<this.size;e++)for(var r=0;r<this.size;r++){var n=void 0;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}},e.prototype.getPenaltyScore=function(){for(var t=0,r=0;r<this.size;r++){for(var n=!1,i=0,a=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[r][s]==n?5==++i?t+=e.PENALTY_N1:i>5&&t++:(this.finderPenaltyAddHistory(i,a),n||(t+=this.finderPenaltyCountPatterns(a)*e.PENALTY_N3),n=this.modules[r][s],i=1);t+=this.finderPenaltyTerminateAndCount(n,i,a)*e.PENALTY_N3}for(s=0;s<this.size;s++){n=!1;var u=0;for(a=[0,0,0,0,0,0,0],r=0;r<this.size;r++)this.modules[r][s]==n?5==++u?t+=e.PENALTY_N1:u>5&&t++:(this.finderPenaltyAddHistory(u,a),n||(t+=this.finderPenaltyCountPatterns(a)*e.PENALTY_N3),n=this.modules[r][s],u=1);t+=this.finderPenaltyTerminateAndCount(n,u,a)*e.PENALTY_N3}for(r=0;r<this.size-1;r++)for(s=0;s<this.size-1;s++){var h=this.modules[r][s];h==this.modules[r][s+1]&&h==this.modules[r+1][s]&&h==this.modules[r+1][s+1]&&(t+=e.PENALTY_N2)}for(var c=0,l=0,f=this.modules;l<f.length;l++){c=f[l].reduce((function(t,e){return t+(e?1:0)}),c)}var d=this.size*this.size,v=Math.ceil(Math.abs(20*c-10*d)/d)-1;return o(0<=v&&v<=9),o(0<=(t+=v*e.PENALTY_N4)&&t<=2568888),t},e.prototype.getAlignmentPatternPositions=function(){if(1==this.version)return[];for(var t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2)),r=[6],n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r},e.getNumRawDataModules=function(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");var r=(16*t+128)*t+64;if(t>=2){var n=Math.floor(t/7)+2;r-=(25*n-10)*n-55,t>=7&&(r-=36)}return o(208<=r&&r<=29648),r},e.getNumDataCodewords=function(t,r){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t]},e.reedSolomonComputeDivisor=function(t){if(t<1||t>255)throw new RangeError("Degree out of range");for(var r=[],n=0;n<t-1;n++)r.push(0);r.push(1);var o=1;for(n=0;n<t;n++){for(var i=0;i<r.length;i++)r[i]=e.reedSolomonMultiply(r[i],o),i+1<r.length&&(r[i]^=r[i+1]);o=e.reedSolomonMultiply(o,2)}return r},e.reedSolomonComputeRemainder=function(t,r){for(var n=r.map((function(t){return 0})),o=function(t){var o=t^n.shift();n.push(0),r.forEach((function(t,r){return n[r]^=e.reedSolomonMultiply(t,o)}))},i=0,a=t;i<a.length;i++){o(a[i])}return n},e.reedSolomonMultiply=function(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");for(var r=0,n=7;n>=0;n--)r=r<<1^285*(r>>>7),r^=(e>>>n&1)*t;return o(r>>>8==0),r},e.prototype.finderPenaltyCountPatterns=function(t){var e=t[1];o(e<=3*this.size);var r=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(r&&t[0]>=4*e&&t[6]>=e?1:0)+(r&&t[6]>=4*e&&t[0]>=e?1:0)},e.prototype.finderPenaltyTerminateAndCount=function(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)},e.prototype.finderPenaltyAddHistory=function(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)},e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e}();function r(t,e,r){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(var n=e-1;n>=0;n--)r.push(t>>>n&1)}function n(t,e){return 0!=(t>>>e&1)}function o(t){if(!t)throw new Error("Assertion error")}t.QrCode=e;var i=function(){function t(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return t.makeBytes=function(e){for(var n=[],o=0,i=e;o<i.length;o++){r(i[o],8,n)}return new t(t.Mode.BYTE,e.length,n)},t.makeNumeric=function(e){if(!t.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var n=[],o=0;o<e.length;){var i=Math.min(e.length-o,3);r(parseInt(e.substring(o,o+i),10),3*i+1,n),o+=i}return new t(t.Mode.NUMERIC,e.length,n)},t.makeAlphanumeric=function(e){if(!t.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var n,o=[];for(n=0;n+2<=e.length;n+=2){var i=45*t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n));r(i+=t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),11,o)}return n<e.length&&r(t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,o),new t(t.Mode.ALPHANUMERIC,e.length,o)},t.makeSegments=function(e){return""==e?[]:t.isNumeric(e)?[t.makeNumeric(e)]:t.isAlphanumeric(e)?[t.makeAlphanumeric(e)]:[t.makeBytes(t.toUtf8ByteArray(e))]},t.makeEci=function(e){var n=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)r(e,8,n);else if(e<16384)r(2,2,n),r(e,14,n);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(e,21,n)}return new t(t.Mode.ECI,0,n)},t.isNumeric=function(e){return t.NUMERIC_REGEX.test(e)},t.isAlphanumeric=function(e){return t.ALPHANUMERIC_REGEX.test(e)},t.prototype.getData=function(){return this.bitData.slice()},t.getTotalBits=function(t,e){for(var r=0,n=0,o=t;n<o.length;n++){var i=o[n],a=i.mode.numCharCountBits(e);if(i.numChars>=1<<a)return 1/0;r+=4+a+i.bitData.length}return r},t.toUtf8ByteArray=function(t){t=encodeURI(t);for(var e=[],r=0;r<t.length;r++)"%"!=t.charAt(r)?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substring(r+1,r+3),16)),r+=2);return e},t.NUMERIC_REGEX=/^[0-9]*$/,t.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,t.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t}();t.QrSegment=i}(n||(n={})),function(t){var e,r;e=t.QrCode||(t.QrCode={}),r=function(){function t(t,e){this.ordinal=t,this.formatBits=e}return t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),t}(),e.Ecc=r}(n||(n={})),function(t){var e,r;e=t.QrSegment||(t.QrSegment={}),r=function(){function t(t,e){this.modeBits=t,this.numBitsCharCount=e}return t.prototype.numCharCountBits=function(t){return this.numBitsCharCount[Math.floor((t+7)/17)]},t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),t}(),e.Mode=r}(n||(n={}));var s=n,u={L:s.QrCode.Ecc.LOW,M:s.QrCode.Ecc.MEDIUM,Q:s.QrCode.Ecc.QUARTILE,H:s.QrCode.Ecc.HIGH},h=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function c(t){return t in u}function l(t,e){void 0===e&&(e=0);var r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return r.push("M".concat(o+e," ").concat(n+e,"h").concat(a-o,"v1H").concat(o+e,"z")),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M".concat(a+e,",").concat(n+e," h1v1H").concat(a+e,"z")):r.push("M".concat(o+e,",").concat(n+e," h").concat(a+1-o,"v1H").concat(o+e,"z"))}}))})),r.join("")}var f={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(t){return c(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},d=a(a({},f),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),v=(0,o.aZ)({name:"QRCodeSvg",props:f,setup:function(t){var e=(0,i.iH)(0),r=(0,i.iH)(""),n=function(){var n=t.value,o=t.level,i=t.margin,a=s.QrCode.encodeText(n,u[o]).getModules();e.value=a.length+2*i,r.value=l(a,i)};return n(),(0,o.ic)(n),function(){return(0,o.h)("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(e.value," ").concat(e.value)},[(0,o.h)("path",{fill:t.background,d:"M0,0 h".concat(e.value,"v").concat(e.value,"H0z")}),(0,o.h)("path",{fill:t.foreground,d:r.value})])}}}),g=(0,o.aZ)({name:"QRCodeCanvas",props:f,setup:function(t){var e=(0,i.iH)(null),r=function(){var r=t.value,n=t.level,o=t.size,i=t.margin,a=t.background,c=t.foreground,f=e.value;if(f){var d=f.getContext("2d");if(d){var v=s.QrCode.encodeText(r,u[n]).getModules(),g=v.length+2*i,m=window.devicePixelRatio||1,p=o/g*m;f.height=f.width=o*m,d.scale(p,p),d.fillStyle=a,d.fillRect(0,0,g,g),d.fillStyle=c,h?d.fill(new Path2D(l(v,i))):v.forEach((function(t,e){t.forEach((function(t,r){t&&d.fillRect(r+i,e+i,1,1)}))}))}}};return(0,o.bv)(r),(0,o.ic)(r),function(){return(0,o.h)("canvas",{ref:e,style:{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")}})}}}),m=(0,o.aZ)({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,r=t.value,n=t.size,i=t.margin,a=t.level,s=t.background,u=t.foreground,h=n>>>0,l=i>>>0,f=c(a)?a:"H";return(0,o.h)("svg"===e?v:g,{value:r,size:h,margin:l,level:f,background:s,foreground:u})},props:d})}}]);
//# sourceMappingURL=5827.js.map