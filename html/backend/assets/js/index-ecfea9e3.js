import{a as ee,cN as ae,j as O,c as W,av as te,i as Y,k as se,v as Z,bY as oe,E as C,_ as H,cO as le,s as ne,b as ie,T as de,o as re,w as ue,m as pe,C as L}from"./entry-9cc5c370.js";/* empty css                        */import{a as me,s as ce,b as _e,E as fe,c as be,g as ge,_ as ye,o as G,r as he}from"./databaseInfo-fa5b31e0.js";import{G as ve,Z as R,a as h,R as A,S as n,u as e,l as b,p as i,U as s,a6 as _,L as T,m as E,W as B,ap as Q,aq as X,z as ke,A as we,O as Ee,ag as Fe,X as Ce,at as xe}from"./vue-11eabec3.js";import{i as Be,r as De}from"./databaseSql-300e3b23.js";import{p as Ve}from"./plugHeader-c50619f4.js";import{b as Ne,_ as $e,u as Ae}from"./user-8d183462.js";import{E as qe}from"./el-upload-e1a152a0.js";import"./pagination-db6078c7.js";/* empty css                      */import"./index-971e6ee4.js";/* empty css                                                                   */const Me=g=>(Q("data-v-1fd0fdd9"),g=g(),X(),g),Se={style:{display:"flex","align-items":"center"}},ze={style:{display:"flex",width:"100%"}},Ie=Me(()=>i("div",{class:"tips"},[i("h4",null,"\u63D0\u793A\uFF1A"),i("p",null,"1.\u6570\u636E\u5E93\u7C7B\u578B\u4E0D\u540C\u65E0\u6CD5\u5BFC\u5165"),i("p",null," 2.\u5BFC\u5165\u7684\u6570\u636E\u5E93\u540D\u9700\u8981\u548C\u5BFC\u51FA\u6570\u636E\u5E93\u540D\u4E00\u81F4\uFF0C\u4E0D\u4E00\u81F4\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5BFC\u5165\u51FA\u9519 "),i("p",null," 3.\u53EA\u652F\u6301sql\u540E\u7F00\u6587\u4EF6\u5BFC\u5165 ")],-1)),Le={class:"dialog-footer"},Re=ve({__name:"uploadsql",setup(g,{expose:D}){const r=R({visible:!1,loading:!1,database:"",name:""}),v=new FormData,w=h(),q={},x=()=>{r.name="",r.database="",p.value=0,r.visible=!1},V=d=>{r.database=d,r.visible=!0},M=d=>{!d||d.validate(o=>{o&&oe(t).then(()=>{C({position:"bottom-right",type:"success",message:"\u6570\u636E\u5E93\u4E0A\u4F20\u6210\u529F"}),r.visible=!1}).catch(a=>{console.log(a),p.value=0,C({position:"bottom-right",type:"error",message:a.response.data.message})})})},u=ee();let p=h(0),t={method:"post",url:"/api/v1/tools/db/manage/v2/database/import?uuid="+ae(),headers:{Authorization:u.token,ContentType:"multipart/form-data"},timeout:1e3*60*60*24,data:v,onUploadProgress:d=>{p.value=d.loaded/d.total*100|0}};const N=d=>{w.value.resetFields(),v.delete("file"),v.delete("database"),v.append("file",d.raw),v.append("database",r.database),r.name=d.name},S=(d,o,a)=>{if(o)a();else return a(new Error("\u8BF7\u9009\u62E9\u6587\u4EF6"))};return D({open:V}),(d,o)=>{const a=O,m=qe,y=W,c=te,z=Y,I=se,F=Z;return b(),A(I,{modelValue:e(r).visible,"onUpdate:modelValue":o[1]||(o[1]=$=>e(r).visible=$),title:"\u5BFC\u5165\u6570\u636E\u5E93",width:"25%",onClose:x,"show-close":e(p)==0,"close-on-click-modal":e(p)==0,"close-on-press-escape":e(p)==0},{footer:n(()=>[i("span",Le,[s(a,{onClick:x,loading:e(p)!=0},{default:n(()=>[_("\u53D6\u6D88")]),_:1},8,["loading"]),s(a,{type:"primary",onClick:o[0]||(o[0]=$=>M(e(w))),loading:e(p)!=0},{default:n(()=>[_(" \u4FDD\u5B58 ")]),_:1},8,["loading"])])]),default:n(()=>[T((b(),E("div",null,[s(z,{ref_key:"ruleFormRef",ref:w,model:e(r),rules:q},{default:n(()=>[e(p)==0?(b(),A(y,{key:0,prop:"name",label:"\u6587\u4EF6\u540D\uFF1A",rules:{required:!0,validator:S}},{default:n(()=>[s(m,{class:"upload-demo",accept:".sql",data:{exts:".sql"},action:e(r).database,"auto-upload":!1,"show-file-list":!1,onChange:N},{default:n(()=>[i("div",Se,[s(a,{type:"primary",plain:""},{default:n(()=>[_(B(e(r).name?e(r).name:"\u9009\u62E9\u6587\u4EF6"),1)]),_:1})])]),_:1},8,["data","action"])]),_:1},8,["rules"])):(b(),A(y,{key:1,label:"\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6\uFF1A"},{default:n(()=>[i("div",ze,[s(c,{percentage:e(p),style:{width:"100%",height:"24px"}},null,8,["percentage"])])]),_:1})),Ie]),_:1},8,["model"])])),[[F,e(p)==100]])]),_:1},8,["modelValue","show-close","close-on-click-modal","close-on-press-escape"])}}});const Te=H(Re,[["__scopeId","data-v-1fd0fdd9"]]);const U=g=>(Q("data-v-a66dcf6c"),g=g(),X(),g),Ue={style:{height:"100%"}},Pe={key:0,class:"box",style:{"flex-direction":"column","padding-top":"24px"}},Ke={style:{float:"right",display:"flex","align-items":"center"}},je={key:0,class:"dewindwos"},Ge=["onClick"],Oe={style:{display:"flex","align-items":"left"}},We={style:{width:"60px"}},Ye={key:0,style:{color:"#4b82fa"}},Ze={key:1,style:{color:"#41d888"}},He=U(()=>i("div",{class:"mark"},null,-1)),Qe={style:{"margin-left":"6px"}},Xe={key:1,class:"box empower"},Je={class:"center"},ea=U(()=>i("img",{src:ye},null,-1)),aa=U(()=>i("p",{style:{"font-size":"12px",color:"#333333","margin-top":"12px"}}," \u987B\u4F7F\u7528\u5177\u6709\u6570\u636E\u5E93\u7BA1\u7406\u6743\u9650\u7684\u8D26\u53F7\u8FDE\u63A5\u6570\u636E\u5E93 ",-1)),ta={__name:"index",setup(g){const D=xe(),r=h(),v=h(),w=h(),q=h([]),x=h(),V=h();let M;const u=R({form:{},loading:!1,dbModel:!1,load(){me().then(o=>{t.load(),u.dbModel=!0}).catch(o=>{u.dbModel=!1})},save:ke("debounce")(o=>{!o||o.validate(a=>{a&&(u.loading=!0,ce(u.form).then(()=>{u.load(),C({position:"bottom-right",type:"success",message:"\u94FE\u63A5\u6210\u529F"})}).finally(()=>{u.loading=!1}))})},300)});u.load();const p=h(1),t=R({loading:!1,os:"",data:[],searchVal:{keywords:""},searchValMap:[],search:!1,openeds:[],dbTabel:[],activeDb:"",activeTable:"",currentKey:"",load(o=!0){t.loading=o,ge(t.searchVal).then(async a=>{t.loading=!1,t.data=a.list}).finally(()=>{t.loading=!1})}}),N={repair:(o,a)=>L({message:"\u786E\u5B9A\u8981\u4FEE\u590D\u5417?",okEms:(a?"\u6570\u636E\u8868":"\u6570\u636E\u5E93")+"\u4FEE\u590D\u6210\u529F"},()=>he({db_name:o,table_names:a||[]}).then(m=>(t.load(),m))),optimize:(o,a)=>L({message:"\u4F18\u5316\u6570\u636E\u5E93\u8017\u65F6\u8F83\u957F\uFF0C\u8017\u8D39\u670D\u52A1\u5668\u8D44\u6E90\u8F83\u5927\uFF0C\u786E\u5B9A\u8981\u4F18\u5316\u6570\u636E\u5E93\u5417?",okEms:"\u6570\u636E\u5E93\u4F18\u5316\u6210\u529F"},()=>G({db_name:o,table_names:a||[]}).then(m=>(t.load(),m))),restore:o=>L({message:"\u786E\u5B9A\u8981\u8FD8\u539F\u6570\u636E\u5E93\u5417?",okEms:"\u6570\u636E\u8868\u8FD8\u539F\u6210\u529F"},()=>De(t.activeDb).then(a=>{C({position:"bottom-right",type:"success",message:"\u8FD8\u539F\u6210\u529F"}),t.load()}))},S=o=>{if(o===0)return"0 B";let a=1024,m=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],y=Math.floor(Math.log(o)/Math.log(a));return(o/Math.pow(a,y)).toPrecision(3)+" "+m[y]};we(()=>{clearInterval(M)}),_e().then(o=>{p.value=o.dbType,console.log(p.value," ======\u7CFB\u7EDF1pg,2myspl")}),le().then(o=>{t.os=o.os,console.log(o.os," ======\u7CFB\u7EDF1pg,2myspl")});const d=(o,a)=>{t.loading=!0;const m=new FormData;m.append("status","true"),m.append("database",o),Be(m).then(y=>{y==1?G({db_name:o,table_names:[],status:!0}).then(c=>{t.loading=!1,c==1?a():C({position:"bottom-right",type:"error",message:"\u6570\u636E\u5E93\u6B63\u5728\u4F18\u5316\u4E2D\uFF0C\u8BF7\u52FF\u64CD\u4F5C"})}).catch(()=>{t.loading=!1}):(t.loading=!1,C({position:"bottom-right",type:"error",message:"\u6570\u636E\u5E93\u6B63\u5728\u5BFC\u5165\u4E2D\uFF0C\u8BF7\u52FF\u64CD\u4F5C"}))}).catch(()=>{t.loading=!1})};return(o,a)=>{const m=fe,y=be,c=O,z=ne,I=de,F=pe,$=re,P=ie,K=W,J=Y,j=Z;return b(),E("div",Ue,[e(u).dbModel?T((b(),E("div",Pe,[s(Ve,{class:"plug-header_header"},{default:n(()=>[s(y,{separator:"/"},{default:n(()=>[s(m,{to:{name:"newDatabaseTool"}},{default:n(()=>[_("\u6570\u636E\u5E93\u7BA1\u7406")]),_:1})]),_:1})]),_:1}),i("div",null,[i("div",null,[s(c,{type:"primary",onClick:a[0]||(a[0]=l=>{var f;return(f=e(w))==null?void 0:f.open({})})},{default:n(()=>[_("\u6DFB\u52A0\u6570\u636E\u5E93")]),_:1}),s(c,{type:"primary",onClick:a[1]||(a[1]=l=>{var f;return(f=e(r))==null?void 0:f.open(e(p))})},{default:n(()=>[_("\u6570\u636E\u5E93\u7528\u6237\u7BA1\u7406")]),_:1}),i("div",Ke,[e(t).os=="windows"?(b(),E("span",je,[s(z,{style:{"margin-right":"6px"}},{default:n(()=>[s(e(ue))]),_:1}),_(" Windows\u7CFB\u7EDF\u4E0D\u652F\u6301\u90E8\u5206\u529F\u80FD")])):Ee("",!0),s(I,{modelValue:e(t).searchVal.keywords,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).searchVal.keywords=l),onClear:a[3]||(a[3]=l=>{e(t).searchValMap=[],e(t).search=!1}),onKeyup:a[4]||(a[4]=Fe(l=>e(t).load(),["enter","native"]))},null,8,["modelValue"])])]),s($,{data:e(t).data||[],class:"auto",height:"700",style:{"margin-top":"16px"},stripe:!0,onSelectionChange:a[5]||(a[5]=l=>q.value=l)},{default:n(()=>[s(F,{"min-width":"80",label:"\u6570\u636E\u5E93\u540D",prop:"databaseName","show-overflow-tooltip":!0},{default:n(({row:l})=>[i("span",{onClick:f=>d(l.databaseName,()=>e(D).push({name:"newDatabasesheet",query:{name:l.databaseName}})),style:{color:"#4b82fa",cursor:"pointer"}},B(l.databaseName),9,Ge)]),_:1}),s(F,{"min-width":"80",label:"\u6570\u636E\u5E93\u5927\u5C0F",prop:"database_size","show-overflow-tooltip":!0},{default:n(({row:l})=>[i("div",null,B(l.database_size==0?0:S(l.database_size)),1)]),_:1}),s(F,{"min-width":"80",width:"340",label:"\u6570\u636E\u5E93\u5907\u4EFD","show-overflow-tooltip":!0},{default:n(({row:l})=>[i("div",Oe,[i("div",We,[s(c,{type:"primary",link:"",onClick:f=>{var k;return(k=e(v))==null?void 0:k.open(l.databaseName)},disabled:e(t).os=="windows",style:Ce({opacity:e(t).os=="windows"?.5:1})},{default:n(()=>[l.backups>0?(b(),E("span",Ye,"\u6709\u5907\u4EFD("+B(l.backups)+")",1)):(b(),E("span",Ze,"\u70B9\u51FB\u5907\u4EFD"))]),_:2},1032,["onClick","disabled","style"])]),He,i("div",Qe,[s(c,{type:"primary",link:"",onClick:f=>d(l.databaseName,()=>{var k;return(k=e(x))==null?void 0:k.open(l.databaseName)}),disabled:e(t).os=="windows"},{default:n(()=>[_(" \u5BFC\u5165 ")]),_:2},1032,["onClick","disabled"])])])]),_:1}),s(F,{fixed:"right",label:"\u64CD\u4F5C",align:"right",width:"300"},{default:n(({row:l})=>[s(c,{type:"primary",link:"",style:{width:"50px"},onClick:f=>e(D).push({name:"newDatabaseexecutesql",query:{name:l.databaseName}})},{default:n(()=>[_(" \u6267\u884CSQL ")]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",disabled:e(t).os=="windows",style:{width:"30px"},onClick:f=>d(l.databaseName,()=>N.optimize(l.databaseName))},{default:n(()=>[_(" \u4F18\u5316 ")]),_:2},1032,["disabled","onClick"]),s(c,{type:"primary",link:"",disabled:e(t).os=="windows",style:{width:"30px"},onClick:f=>d(l.databaseName,()=>N.repair(l.databaseName))},{default:n(()=>[_(" \u4FEE\u590D ")]),_:2},1032,["disabled","onClick"]),s(c,{type:"danger",link:"",style:{width:"30px"},onClick:f=>d(l.databaseName,()=>{var k;return(k=e(w))==null?void 0:k.del(l.databaseName)})},{default:n(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),s(Ae,{ref_key:"userRef",ref:r},null,512),s(Ne,{ref_key:"backupsRef",ref:v,onLoad:e(t).load},null,8,["onLoad"]),s($e,{ref_key:"dbRef",ref:w,system:e(p),onLoad:e(t).load},null,8,["system","onLoad"]),s(Te,{ref_key:"uploadsqlref",ref:x,onLoad:e(t).load},null,8,["onLoad"])])])),[[j,e(t).loading]]):(b(),E("div",Xe,[i("div",Je,[ea,s(J,{ref_key:"empowerFormRef",ref:V,"label-width":"90px",model:e(u).form,class:"empowerForm",style:{"max-width":"460px"},"hide-required-asterisk":""},{default:n(()=>[i("h4",null,"\u8FDE\u63A5\u6570\u636E\u5E93("+B(e(p)==1?"pg":"mysql")+")",1),aa,s(K,{prop:"user_name",label:"\u8D26\u53F7",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"}},{default:n(()=>[s(P,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",clearable:"",modelValue:e(u).form.user_name,"onUpdate:modelValue":a[6]||(a[6]=l=>e(u).form.user_name=l),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),s(K,{prop:"password",label:"\u5BC6\u7801",rules:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}},{default:n(()=>[s(P,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",clearable:"",type:"password","show-password":"",modelValue:e(u).form.password,"onUpdate:modelValue":a[7]||(a[7]=l=>e(u).form.password=l),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),T((b(),A(c,{type:"primary",onClick:a[8]||(a[8]=l=>e(u).save(e(V))),class:"submit"},{default:n(()=>[_("\u8FDE\u63A5")]),_:1})),[[j,e(u).loading]])]),_:1},8,["model"])])]))])}}},fa=H(ta,[["__scopeId","data-v-a66dcf6c"]]);export{fa as default};