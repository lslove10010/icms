(self.webpackChunkxxxxx=self.webpackChunkxxxxx||[]).push([[3626],{2931:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>d});var t=o(59171),n=o.n(t),u=o(26143),i=o.n(u)()(n());i.push([e.id,".block[data-v-3efdab28]{width:50%}.color-title[data-v-3efdab28]{font-size:12px;color:#333;font-weight:400;margin-right:8px}","",{version:3,sources:["webpack://./src/tongji/pages/apply/info/videoPlay/videoContentInfo.vue"],names:[],mappings:"AACA,wBACE,SAAA,CAIF,8BACE,cAAA,CACA,UAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:["\n.block {\n  width: 50%;\n}\n\n\n.color-title {\n  font-size: 12px;\n  color: #333333;\n  font-weight: 400;\n  margin-right: 8px;\n}\n"],sourceRoot:""}]);const d=i},61150:(e,l,o)=>{var t=o(2931);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);(0,o(80950).Z)("93b429e8",t,!1,{})},93626:(e,l,o)=>{"use strict";o.d(l,{Z:()=>w});var t=o(74366),n=(o(47465),o(80036),o(9217)),u=(o(23721),o(59182),o(49663),o(26440)),i=o(71254),d=o(92811),a=o(53821),_=o(79760),v=o(83190),r=o(27936),c={key:0},m={key:0},f={key:0},s={key:0},b={key:0},p={key:0},V={key:0},y={key:0},k={key:0},W={key:0};const C={__name:"videoContentInfo",props:["modelValue","activeName"],emits:["update:modelValue"],setup:function(e,l){var o=l.emit,C=e,w=(0,d.iH)(["1","2"]),z=(0,d.iH)(["1-1"]),g=(0,d.iH)(["2-1"]),U=(0,u.Fl)({get:function(){return C.modelValue},set:function(e){o("update:modelValue",e)}}),Z=(0,u.Fl)((function(){return"videoContent"===C.activeName})),h=((0,u.Fl)({get:function(){return"none"===C.modelValue.video_heat_show?"":C.modelValue.video_heat},set:function(e){""===e?C.modelValue.video_heat_show="none":(C.modelValue.video_heat_show="block",C.modelValue.video_heat=e)}}),{content_brief_font:[{key:"moren",title:"默认",defa:!0},{key:"yinc",title:"隐藏",defa:!1,value:""},{key:"zidiyi",title:"自定义",defa:!1,value:"#333333",customize:!0}],videocontent_defa_FontColor:[{key:"moren",title:"默认",defa:!0},{key:"zidiyi",title:"自定义",defa:!1,value:"#333333",customize:!0}],videocontent_title_font:[{key:"moren",title:"默认",defa:["video_title_bold","video_title_size","video_title"]},{key:"zidiyi",title:"自定义",defa:["video_title_bold","video_title_size","video_title"],noDefa:!0}],videocontent_hot_icon_font:[{key:"moren",title:"默认",defa:["video_popularity","video_popularity_size","video_popularity_bold"]},{key:"zidiyi",title:"自定义",defa:["video_popularity","video_popularity_size","video_popularity_bold"],noDefa:!0}],videocontent_label_font:[{key:"moren",title:"默认",defa:["video_label","video_label_bold","video_label_size"]},{key:"zidiyi",title:"自定义",defa:["video_label","video_label_bold","video_label_size"],noDefa:!0}],videocontent_score_font:[{key:"moren",title:"默认",defa:["video_score","video_score_size","video_score_bold"]},{key:"zidiyi",title:"自定义",defa:["video_score","video_score_size","video_score_bold"],noDefa:!0}],videocontent_douban_score_font:[{key:"moren",title:"默认",defa:["video_douban_score","video_douban_score_size","video_douban_score_bold"]},{key:"zidiyi",title:"自定义",defa:["video_douban_score","video_douban_score_size","video_douban_score_bold"],noDefa:!0}],videocontent_select_line_font:[{key:"moren",title:"默认",defa:["video_select_line","video_select_line_size","video_select_line_bold"]},{key:"zidiyi",title:"自定义",defa:["video_select_line","video_select_line_size","video_select_line_bold"],noDefa:!0}],videocontent_select_number_font:[{key:"moren",title:"默认",defa:["video_select_number_size","video_select_number","video_select_number_bold"]},{key:"zidiyi",title:"自定义",defa:["video_select_number_size","video_select_number","video_select_number_bold"],noDefa:!0}],videocontent_un_select_line_font:[{key:"moren",title:"默认",defa:["video_un_select_line","video_un_select_line_size","video_un_select_line_bold"]},{key:"zidiyi",title:"自定义",defa:["video_un_select_line","video_un_select_line_size","video_un_select_line_bold"],noDefa:!0}],videocontent_un_select_number_font:[{key:"moren",title:"默认",defa:["video_un_select_number","video_un_select_number_size","video_un_select_number_bold"]},{key:"zidiyi",title:"自定义",defa:["video_un_select_number","video_un_select_number_size","video_un_select_number_bold"],noDefa:!0}],videocontent_un_select_button:[{key:"moren",title:"默认",defa:["video_un_select_button","video_un_select_button_background"]},{key:"zidiyi",title:"自定义",defa:["video_un_select_button","video_un_select_button_background"],noDefa:!0}],videocontent_select_button:[{key:"moren",title:"默认",defa:["video_select_button","video_select_button_background"]},{key:"zidiyi",title:"自定义",defa:["video_select_button","video_select_button_background"],noDefa:!0}]});return function(e,l){var o=t.nH,d=n.aE,C=n.PH,A=t.ly;return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(A,{onSubmit:l[43]||(l[43]=(0,i.iM)((function(){}),["prevent"])),ref:"ruleFormRef","label-width":"76px","hide-required-asterisk":!1},{default:(0,u.w5)((function(){return[(0,u.Wm)(C,{class:"coll-title",modelValue:w.value,"onUpdate:modelValue":l[42]||(l[42]=function(e){return w.value=e})},{default:(0,u.w5)((function(){return[(0,u.Wm)(d,{title:"影片说明设置",name:"1"},{default:(0,u.w5)((function(){return[(0,u.Wm)(C,{modelValue:z.value,"onUpdate:modelValue":l[18]||(l[18]=function(e){return z.value=e})},{default:(0,u.w5)((function(){return[(0,u.Wm)(d,{title:"标题设置",name:"1-1"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[3]||(l[3]=function(e){return U.value=e}),label:"标题文字",prop:"videoContent",value:h.videocontent_title_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",c,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_title_size,"onUpdate:modelValue":l[0]||(l[0]=function(e){return U.value.video_title_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_title,"onUpdate:modelValue":l[1]||(l[1]=function(e){return U.value.video_title=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_title"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_title_bold,"onUpdate:modelValue":l[2]||(l[2]=function(e){return U.value.video_title_bold=e}),value:"video_title_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1}),(0,u.kq)(' <el-collapse-item title="“热度”设置" name="1-2">\n              <myRadioGroup :key-flag="isUpdataRadio" v-model="videoContentStyle" label="文字" prop="videoContent"\n                :value="myRadioArrays.videocontent_hot_icon_font">\n                <template #default="{ action }">\n                  <div v-if="action.key === \'zidiyi\'">\n                    <el-form-item label="" prop="">\n                      <inputFontZise v-model="videoContentStyle.video_popularity_size" title="文字"></inputFontZise>\n                    </el-form-item>\n                    <checkColor title="颜色" v-model="videoContentStyle.video_popularity"\n                      :value="myRadioArrays.videocontent_defa_FontColor" :prop="[\'videoContent\', \'video_popularity\']">\n                    </checkColor>\n                    <el-form-item label="" prop="">\n                      <checkbox v-model="videoContentStyle.video_popularity_bold" value="video_popularity_bold">\n                      </checkbox>\n                    </el-form-item>\n                  </div>\n                </template>\n              </myRadioGroup>\n              <el-form-item label="图标">\n                <checkColor v-model="hotIcon" :value="myRadioArrays.content_brief_font"\n                  :prop="[\'videoContent\', \'video_heat\']">\n                </checkColor>\n              </el-form-item>\n\n\n            </el-collapse-item> '),(0,u.Wm)(d,{title:"标签项设置",name:"1-3"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[7]||(l[7]=function(e){return U.value=e}),label:"标签文字",prop:"videoContent",value:h.videocontent_label_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",m,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_label_size,"onUpdate:modelValue":l[4]||(l[4]=function(e){return U.value.video_label_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_label,"onUpdate:modelValue":l[5]||(l[5]=function(e){return U.value.video_label=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_label"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_label_bold,"onUpdate:modelValue":l[6]||(l[6]=function(e){return U.value.video_label_bold=e}),value:"video_label_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1}),(0,u.Wm)(d,{title:"评分设置",name:"1-4"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[11]||(l[11]=function(e){return U.value=e}),label:"文字",prop:"videoContent",value:h.videocontent_score_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",f,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_score_size,"onUpdate:modelValue":l[8]||(l[8]=function(e){return U.value.video_score_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_score,"onUpdate:modelValue":l[9]||(l[9]=function(e){return U.value.video_score=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_score"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_score_bold,"onUpdate:modelValue":l[10]||(l[10]=function(e){return U.value.video_score_bold=e}),value:"video_score_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"]),(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[15]||(l[15]=function(e){return U.value=e}),label:"数字",prop:"videoContent",value:h.videocontent_douban_score_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",s,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_douban_score_size,"onUpdate:modelValue":l[12]||(l[12]=function(e){return U.value.video_douban_score_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_douban_score,"onUpdate:modelValue":l[13]||(l[13]=function(e){return U.value.video_douban_score=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_douban_score"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_douban_score_bold,"onUpdate:modelValue":l[14]||(l[14]=function(e){return U.value.video_douban_score_bold=e}),value:"video_douban_score_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1}),(0,u.Wm)(d,{title:"功能图标设置",name:"1-5"},{default:(0,u.w5)((function(){return[(0,u.Wm)(o,{label:"默认颜色"},{default:(0,u.w5)((function(){return[(0,u.Wm)(a.Z,{modelValue:U.value.video_collect,"onUpdate:modelValue":l[16]||(l[16]=function(e){return U.value.video_collect=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_collect"]},null,8,["modelValue","value"])]})),_:1}),(0,u.Wm)(o,{label:"收藏颜色"},{default:(0,u.w5)((function(){return[(0,u.Wm)(a.Z,{modelValue:U.value.video_has_collect,"onUpdate:modelValue":l[17]||(l[17]=function(e){return U.value.video_has_collect=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_has_collect"]},null,8,["modelValue","value"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,u.Wm)(d,{title:"选集设置",name:"2"},{default:(0,u.w5)((function(){return[(0,u.Wm)(C,{modelValue:g.value,"onUpdate:modelValue":l[41]||(l[41]=function(e){return g.value=e})},{default:(0,u.w5)((function(){return[(0,u.Wm)(d,{title:"播放路线选中项设置",name:"2-1"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[22]||(l[22]=function(e){return U.value=e}),label:"线路文字",prop:"videoContent",value:h.videocontent_select_line_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",b,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_select_line_size,"onUpdate:modelValue":l[19]||(l[19]=function(e){return U.value.video_select_line_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_select_line,"onUpdate:modelValue":l[20]||(l[20]=function(e){return U.value.video_select_line=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_select_line"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_select_line_bold,"onUpdate:modelValue":l[21]||(l[21]=function(e){return U.value.video_select_line_bold=e}),value:"video_select_line_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"]),(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[26]||(l[26]=function(e){return U.value=e}),label:"集数文字",prop:"videoContent",value:h.videocontent_select_number_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",p,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_select_number_size,"onUpdate:modelValue":l[23]||(l[23]=function(e){return U.value.video_select_number_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_select_number,"onUpdate:modelValue":l[24]||(l[24]=function(e){return U.value.video_select_number=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_select_number"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_select_number_bold,"onUpdate:modelValue":l[25]||(l[25]=function(e){return U.value.video_select_number_bold=e}),value:"video_select_number_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1}),(0,u.Wm)(d,{title:"播放路线默认项设置",name:"2-2"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[30]||(l[30]=function(e){return U.value=e}),label:"线路文字",prop:"videoContent",value:h.videocontent_un_select_line_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",V,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_un_select_line_size,"onUpdate:modelValue":l[27]||(l[27]=function(e){return U.value.video_un_select_line_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_un_select_line,"onUpdate:modelValue":l[28]||(l[28]=function(e){return U.value.video_un_select_line=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_un_select_line"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_un_select_line_bold,"onUpdate:modelValue":l[29]||(l[29]=function(e){return U.value.video_un_select_line_bold=e}),value:"video_un_select_line_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"]),(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[34]||(l[34]=function(e){return U.value=e}),label:"集数文字",prop:"videoContent",value:h.videocontent_un_select_number_font},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",y,[(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(v.Z,{modelValue:U.value.video_un_select_number_size,"onUpdate:modelValue":l[31]||(l[31]=function(e){return U.value.video_un_select_number_size=e}),title:"文字"},null,8,["modelValue"])]})),_:1}),(0,u.Wm)(a.Z,{title:"颜色",modelValue:U.value.video_un_select_number,"onUpdate:modelValue":l[32]||(l[32]=function(e){return U.value.video_un_select_number=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_un_select_number"]},null,8,["modelValue","value"]),(0,u.Wm)(o,{label:"",prop:""},{default:(0,u.w5)((function(){return[(0,u.Wm)(_.Z,{modelValue:U.value.video_un_select_number_bold,"onUpdate:modelValue":l[33]||(l[33]=function(e){return U.value.video_un_select_number_bold=e}),value:"video_un_select_number_bold"},null,8,["modelValue"])]})),_:1})])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1}),(0,u.Wm)(d,{title:"选集按钮",name:"2-3"},{default:(0,u.w5)((function(){return[(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[37]||(l[37]=function(e){return U.value=e}),label:"选中设置",prop:"videoContent",value:h.videocontent_select_button},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",k,[(0,u.Wm)(a.Z,{title:"背景",modelValue:U.value.video_select_button_background,"onUpdate:modelValue":l[35]||(l[35]=function(e){return U.value.video_select_button_background=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_select_button_background"]},null,8,["modelValue","value"]),(0,u.Wm)(a.Z,{title:"文字",modelValue:U.value.video_select_button,"onUpdate:modelValue":l[36]||(l[36]=function(e){return U.value.video_select_button=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_select_button"]},null,8,["modelValue","value"])])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"]),(0,u.Wm)(r.Z,{"key-flag":Z.value,modelValue:U.value,"onUpdate:modelValue":l[40]||(l[40]=function(e){return U.value=e}),label:"默认设置",prop:"videoContent",value:h.videocontent_un_select_button},{default:(0,u.w5)((function(e){return["zidiyi"===e.action.key?((0,u.wg)(),(0,u.iD)("div",W,[(0,u.Wm)(a.Z,{title:"背景",modelValue:U.value.video_un_select_button_background,"onUpdate:modelValue":l[38]||(l[38]=function(e){return U.value.video_un_select_button_background=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_un_select_button_background"]},null,8,["modelValue","value"]),(0,u.Wm)(a.Z,{title:"文字",modelValue:U.value.video_un_select_button,"onUpdate:modelValue":l[39]||(l[39]=function(e){return U.value.video_un_select_button=e}),value:h.videocontent_defa_FontColor,prop:["videoContent","video_un_select_button"]},null,8,["modelValue","value"])])):(0,u.kq)("v-if",!0)]})),_:1},8,["key-flag","modelValue","value"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},512)])}}};o(61150);const w=(0,o(40001).Z)(C,[["__scopeId","data-v-3efdab28"]])}}]);
//# sourceMappingURL=3626.js.map