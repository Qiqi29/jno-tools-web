import{r as R,u as ot,s as S}from"./UploadFile-BW4RMuCM.js";import{g as st,_ as x,r as w,o as f,c as C,a as o,w as D,v as lt,b as g,t as r,n as J,f as m,h as K,i as q,d as k,j as Y,k as B,l as A,T as F,m as nt,p as at,q as N,s as it,x as P,F as Z,y as tt,u as ct,z as rt,A as ut,B as dt}from"./index-C18C_xQ6.js";import{Q as pt}from"./Topbar-BWAsgqvs.js";import{i as E}from"./Icon-rIM7ThDM.js";import{b as U}from"./Button-1v-q9RM0.js";const z={imageData:null,newImageData:null,resultCode:null,imageWidth:150,colorNum:3,colorDetail:100,colorAlgorithm:!1,colorIntensity:30,transMode:0,transModeList:["关闭","自动","指定颜色"],transColor:0,imageColors:[],activeColor:15,colorList:[]},I=st("label_date",{state:()=>({...z}),actions:{reset(){Object.assign(this,z),this.colorList=[]}}}),$=I(),_t=["#000000","#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#0B0B0B","#0C0C0C","#0D0D0D","#0E0E0E","#0F0F0F","#101010","#111111","#121212","#131313","#141414","#151515","#161616","#171717","#181818"];function mt(e,t){const a=document.createElement("canvas"),l=a.getContext("2d",{willReadFrequently:!0}),s=t/e.width*e.height;return a.width=t,a.height=s,l.drawImage(e,0,0,t,s),a}function ht(e){const t=mt(e,$.imageWidth),a=t.getContext("2d",{willReadFrequently:!0}),l=a.getImageData(0,0,t.width,t.height),s=l.data,u={};for(let n=0;n<s.length;n+=16){const h=s[n],v=s[n+1],b=s[n+2];if(s[n+3]===0)continue;const V=`${h},${v},${b}`;u[V]?u[V]++:u[V]=1}const c={};$.colorAlgorithm&&Object.keys(u).forEach(n=>{let h=!1;Object.keys(c).forEach(v=>{if(et(L(n),L(v))<$.colorIntensity){c[v]+=u[n],h=!0;return}}),h||(c[n]=u[n])});const i=Object.entries($.colorAlgorithm?c:u).sort((n,h)=>h[1]-n[1]).slice(0,$.colorNum).map(n=>n[0]);$.imageColors=i,ft(i);for(let n=0;n<s.length;n+=4){const h=s[n],v=s[n+1],b=s[n+2],T=s[n+3];if(T===0)continue;const V=`${h},${v},${b}`,M=gt(V,i);s[n]=L(M)[0],s[n+1]=L(M)[1],s[n+2]=L(M)[2],s[n+3]=T<$.colorDetail?0:255,$.transMode===2&&M==$.imageColors[$.transColor]&&(s[n+3]=0)}$.transMode===1&&(vt(1,1,[0,0,0,0],t,s),a.putImageData(l,0,0));const d=document.createElement("canvas");return d.width=t.width,d.height=t.height,d.getContext("2d",{willReadFrequently:!0}).putImageData(l,0,0),{newCanvas:d,topColors:i}}function gt(e,t){let a=null,l=1/0;const s=L(e);return t.forEach(u=>{const c=L(u),p=et(s,c);p<l&&(l=p,a=u)}),a}function L(e){return e.split(",").map(t=>parseInt(t,10))}function et(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function ft(e){for(let t=0;t<25;t++)$.colorList[t].color="#000000";for(let t=0;t<10;t++)e[t]&&($.colorList[t+15].color=R(e[t]))}function vt(e,t,a,l,s){const u=j(e,t,l,s);if(u[3]===0)return;const c=[[e,t]];let p;for(;c.length;){if(p=c.pop(),e=p[0],t=p[1],e<0||e>=l.width||t<0||t>=l.height)continue;let i=j(e,t,l,s);if(!Ct(i,u))continue;let d=(e+t*l.width)*4;s.set(a,d),c.push([e+1,t]),c.push([e-1,t]),c.push([e,t+1]),c.push([e,t-1])}}function j(e,t,a,l){var s=(e+t*a.width)*4;return[l[s],l[s+1],l[s+2],l[s+3]]}function Ct(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function O(){const e=$.newImageData;if(e==null)return;let t="<mspace=0.2><line-height=0.2><size=0.65>";const s=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;let u=null;for(let c=0;c<s.length;c+=4){const p=s[c],i=s[c+1],d=s[c+2],_=s[c+3],n=`${p},${i},${d}`;u===null&&(u=n,_!==0&&(t+=`<${H(n)}>`)),n!==u&&_!==0&&(t+=`<${H(n)}>`,u=n),c/4%e.width===0&&(t+="<br>"),_===255?t+=".":t+=" "}return t=t.replace(/\s*<br>/g,"<br>").trimEnd(),t=t.replace(/\s{12,}/g,c=>`<space=${(c.length*.2).toFixed(1).replace(/\.0$/,"")}>`),t}function H(e){const t=R(e),a=$.colorList.findIndex(s=>s.color===t);return _t[a]}const $t={class:"qi-switch"},bt={class:"switch-label"},wt=["checked"],xt={__name:"Switch",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,l=t,s=w(a.modelValue),u=c=>{l("update:modelValue",s.value),l("change")};return(c,p)=>(f(),C("div",$t,[o("label",bt,[D(o("input",{type:"checkbox","onUpdate:modelValue":p[0]||(p[0]=i=>s.value=i),checked:e.modelValue,onChange:u},null,40,wt),[[lt,s.value]]),p[1]||(p[1]=o("div",{class:"slider"},[o("div",{class:"slider-button"})],-1))])]))}},yt=x(xt,[["__scopeId","data-v-5847a79a"]]),Tt={class:"qi-select flex-x-between"},Lt={class:"value_text"},Vt={key:0,class:"text"},kt={__name:"Select",props:{modelValue:{type:Number,required:!0},valueList:{type:Array,default:()=>["开启","关闭"]},isColor:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e,l=t,s=w(a.modelValue),u=c=>{c===0?s.value=s.value<=0?a.valueList.length-1:s.value-1:s.value=s.value>=a.valueList.length-1?0:s.value+1,l("update:modelValue",s.value),l("change")};return(c,p)=>(f(),C("div",Tt,[o("div",{class:"button flex-x-y",onClick:p[0]||(p[0]=i=>u(0))},[g(E,{icon:"left",size:"1.4em"})]),o("div",Lt,[e.isColor?(f(),C("div",{key:1,class:"color",style:J({backgroundColor:m(R)(e.valueList[e.modelValue])})},null,4)):(f(),C("span",Vt,r(e.valueList[e.modelValue]),1))]),o("div",{class:"button flex-x-y",onClick:p[1]||(p[1]=i=>u(1))},[g(E,{icon:"right",size:"1.4em"})])]))}},W=x(kt,[["__scopeId","data-v-b16e0a64"]]),It={class:"main_card edit_card"},Ut={class:"card_title"},Dt={class:"card_title"},Mt={class:"card_content"},St={class:"setting_item"},At={class:"content flex-x-between"},qt={class:"title"},Bt={class:"value"},Et={class:"card_tips"},Rt={class:"setting_item"},Ft={class:"content flex-x-between"},Nt={class:"title"},Pt={class:"value"},zt={class:"setting_item"},jt={class:"content flex-x-between"},Ot={class:"title"},Ht={key:0,class:"setting_item"},Wt={class:"content flex-x-between"},Qt={class:"title"},Xt={class:"value"},Gt={class:"setting_item"},Jt={class:"content flex-x-between"},Kt={class:"title"},Yt={class:"value"},Zt={key:1,class:"setting_item"},te={class:"content flex-x-between"},ee={class:"title"},oe={key:2,class:"setting_item"},se={class:"content flex-x-between"},le={class:"title"},ne={__name:"edit_card",emits:["change"],setup(e,{emit:t}){const{t:a}=K(),l=I(),s=t,u=w(["imageToLabel.edit.tranMode_off","imageToLabel.edit.tranMode_auto","imageToLabel.edit.tranMode_color"]),c=q(()=>u.value.map(d=>a(d)));function p(d){l.imageData=d,s("change")}const i=()=>{s("change")};return(d,_)=>(f(),C("div",It,[o("p",Ut,r(d.$t("imageToLabel.edit.title_1")),1),g(ot,{accept:"image/*",onChange:p,text:d.$t("imageToLabel.edit.select_image")},null,8,["text"]),o("p",Dt,r(d.$t("imageToLabel.edit.title_2")),1),o("div",Mt,[o("div",St,[o("div",At,[o("p",qt,r(d.$t("imageToLabel.edit.imgw")),1),o("p",Bt,r(m(l).imageWidth),1)]),g(S,{modelValue:m(l).imageWidth,"onUpdate:modelValue":_[0]||(_[0]=n=>m(l).imageWidth=n),onTouchup:i,min:10,max:400,step:10},null,8,["modelValue"])]),o("div",Et,[o("p",null,r(d.$t("imageToLabel.edit.imgw_tips")),1)]),o("div",Rt,[o("div",Ft,[o("p",Nt,r(d.$t("imageToLabel.edit.colorNum")),1),o("p",Pt,r(m(l).colorNum),1)]),g(S,{modelValue:m(l).colorNum,"onUpdate:modelValue":_[1]||(_[1]=n=>m(l).colorNum=n),onTouchup:i,min:1,max:10},null,8,["modelValue"])]),o("div",zt,[o("div",jt,[o("p",Ot,r(d.$t("imageToLabel.edit.colorAl")),1),g(yt,{modelValue:m(l).colorAlgorithm,"onUpdate:modelValue":_[2]||(_[2]=n=>m(l).colorAlgorithm=n),onChange:i},null,8,["modelValue"])])]),m(l).colorAlgorithm?(f(),C("div",Ht,[o("div",Wt,[o("p",Qt,r(d.$t("imageToLabel.edit.colorin")),1),o("p",Xt,r(m(l).colorIntensity),1)]),g(S,{modelValue:m(l).colorIntensity,"onUpdate:modelValue":_[3]||(_[3]=n=>m(l).colorIntensity=n),onTouchup:i,min:10,max:200,step:1},null,8,["modelValue"])])):k("",!0),o("div",Gt,[o("div",Jt,[o("p",Kt,r(d.$t("imageToLabel.edit.tranValue")),1),o("p",Yt,r(m(l).colorDetail),1)]),g(S,{modelValue:m(l).colorDetail,"onUpdate:modelValue":_[4]||(_[4]=n=>m(l).colorDetail=n),onTouchup:i,min:0,max:200,step:1},null,8,["modelValue"])]),m(l).imageColors.length!==0?(f(),C("div",Zt,[o("div",te,[o("p",ee,r(d.$t("imageToLabel.edit.tranMode")),1),g(W,{modelValue:m(l).transMode,"onUpdate:modelValue":_[5]||(_[5]=n=>m(l).transMode=n),onChange:i,"value-list":c.value},null,8,["modelValue","value-list"])])])):k("",!0),m(l).transMode==2?(f(),C("div",oe,[o("div",se,[o("p",le,r(d.$t("imageToLabel.edit.tranColor")),1),g(W,{modelValue:m(l).transColor,"onUpdate:modelValue":_[6]||(_[6]=n=>m(l).transColor=n),onChange:i,"value-list":m(l).imageColors,"is-color":!0},null,8,["modelValue","value-list"])])])):k("",!0)])]))}},ae=x(ne,[["__scopeId","data-v-551b1fa0"]]),ie={class:"main_card result_card"},ce={class:"card_title"},re={class:"result_box flex-x-y"},ue=["src"],de={__name:"result_card",setup(e){const t=I(),a=q(()=>{if(t.newImageData!==null)return t.newImageData.toDataURL()}),l=s=>{};return(s,u)=>(f(),C("div",ie,[o("p",ce,r(s.$t("imageToLabel.result.title_1")),1),o("div",re,[a.value?(f(),C("img",{key:0,src:a.value,onClick:l,alt:""},null,8,ue)):k("",!0)])]))}},pe=x(de,[["__scopeId","data-v-01d871a0"]]),_e={class:"qi-toast"},me={__name:"Toast",props:{message:{type:String,default:"提示文本"},icon:{type:String,default:""}},setup(e){return(t,a)=>(f(),C("div",_e,[e.icon?(f(),Y(E,{key:0,icon:e.icon},null,8,["icon"])):k("",!0),o("span",null,r(e.message),1)]))}},he=x(me,[["__scopeId","data-v-48078998"]]);let Q=null,y=null;function X(e,t=1500){y=document.querySelector(".toast-container"),y?B(null,y):(y=document.createElement("div"),y.setAttribute("class","toast-container"),document.querySelector("body").appendChild(y));const a=g(he,{message:e});B(a,y),clearTimeout(Q),Q=setTimeout(()=>{B(null,y)},t)}const ge={class:"top_box flex-x-y"},fe={class:"title"},ve={class:"content"},Ce={__name:"Popup",props:{title:{type:String,default:"弹窗标题"}},setup(e,{expose:t}){const a=w(!1);w(!1);function l(){a.value=!0}function s(){a.value=!1}return t({show:l}),(u,c)=>(f(),Y(F,{name:"fade-bg"},{default:A(()=>[D(o("div",{class:"popup-bg",onClick:s},[g(F,{name:"fade-popup"},{default:A(()=>[D(o("div",{class:"popup",onClick:c[0]||(c[0]=nt(()=>{},["stop"]))},[o("div",ge,[o("p",fe,r(e.title),1),o("div",{class:"close_button flex-x-y",onClick:s},"X")]),o("div",ve,[at(u.$slots,"default",{},void 0,!0)])],512),[[N,a.value]])]),_:3})],512),[[N,a.value]])]),_:3}))}},G=x(Ce,[["__scopeId","data-v-ec449a0a"]]),$e={},be={class:"content"},we={class:"popup_title"},xe={class:"popup_text"},ye={class:"popup_title"},Te={class:"popup_text"},Le={class:"popup_text"},Ve={class:"popup_text"},ke={class:"popup_text"},Ie={class:"popup_title"},Ue={class:"popup_text"},De={class:"popup_title"},Me={class:"popup_text"},Se={class:"popup_text"};function Ae(e,t){return f(),C("div",be,[o("p",we,r(e.$t("popup_howToUse.title_1")),1),o("p",xe,r(e.$t("popup_howToUse.text_1")),1),o("p",ye,r(e.$t("popup_howToUse.title_2")),1),o("p",Te,r(e.$t("popup_howToUse.text_2")),1),o("p",Le,r(e.$t("popup_howToUse.text_3")),1),o("p",Ve,r(e.$t("popup_howToUse.text_4")),1),o("p",ke,r(e.$t("popup_howToUse.text_5")),1),o("p",Ie,r(e.$t("popup_howToUse.title_3")),1),o("p",Ue,r(e.$t("popup_howToUse.text_6")),1),o("p",De,r(e.$t("popup_howToUse.title_4")),1),o("p",Me,r(e.$t("popup_howToUse.text_7")),1),o("p",Se,r(e.$t("popup_howToUse.text_8")),1)])}const qe=x($e,[["render",Ae]]),Be={class:"content"},Ee={class:"input_box flex-x"},Re={class:"text_conut text_show flex-x-y"},Fe={key:0},Ne={class:"input_list"},Pe={class:"input_num text_show flex-x-y"},ze=["value"],je={__name:"manualCopy",setup(e){const t=I(),a=w(""),l=w([]);it(()=>t.resultCode,()=>{a.value="",l.value=[]});const s=q(()=>a.value.length),u=()=>{l.value=c(t.resultCode,s.value)};function c(p,i){const d=[];let _=0;for(;_<p.length;){const n=_+i;d.push(p.substring(_,n)),_=n}return d}return(p,i)=>(f(),C("div",Be,[i[4]||(i[4]=o("p",{class:"popup_title"},"完整代码",-1)),D(o("textarea",{"onUpdate:modelValue":i[0]||(i[0]=d=>m(t).resultCode=d)},null,512),[[P,m(t).resultCode]]),i[5]||(i[5]=o("p",{class:"popup_title"},"手机剪切板有限制？",-1)),i[6]||(i[6]=o("p",{class:"popup_text"},"把上面的代码复制后粘贴到输入框内↓",-1)),o("div",Ee,[D(o("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=d=>a.value=d),onInput:u},null,544),[[P,a.value]]),o("div",Re,r(s.value),1)]),l.value.length!==0?(f(),C("div",Fe,[i[2]||(i[2]=o("p",{class:"popup_title"},"分段复制",-1)),i[3]||(i[3]=o("p",{class:"popup_text"},"请按顺序复制到 Label 零件中。",-1)),o("div",Ne,[(f(!0),C(Z,null,tt(l.value,(d,_)=>(f(),C("div",{class:"input_box flex-x",key:_},[o("div",Pe,r(_+1),1),o("input",{type:"text",value:d},null,8,ze)]))),128))])])):k("",!0)]))}},Oe=x(je,[["__scopeId","data-v-adc376cf"]]),He={class:"main_card color_card"},We={class:"card_title"},Qe={class:"color_box flex-y"},Xe={class:"color_list"},Ge=["onClick"],Je={class:"card_content"},Ke={class:"color_hex_text flex-x-y"},Ye={class:"edit_buttons"},Ze={class:"card_tips"},to={class:"card_title"},eo={class:"card_content export_buttons"},oo={__name:"color_card",setup(e){const t=I();ct();const{t:a}=K(),l=w(null),s=w(null);function u(){for(let h=0;h<25;h++)t.colorList.push({id:h,color:"#000000"})}rt(()=>{t.colorList.length===0&&u()});const c=(h,v)=>{t.activeColor=v},p=h=>{const v=t.activeColor;if(h===0){if(v>0){const b=t.colorList.splice(v,1)[0];t.colorList.splice(v-1,0,b),t.activeColor-=1}}else if(v<t.colorList.length-1){const b=t.colorList.splice(v,1)[0];t.colorList.splice(v+1,0,b),t.activeColor+=1}};let i=q(()=>{var h;return(h=t.colorList[t.activeColor])==null?void 0:h.color.toUpperCase()});const d=()=>{t.resultCode=O(),t.resultCode&&(navigator.clipboard?(navigator.clipboard.writeText(t.resultCode),X(a("toast.copy"))):X(a("toast.copy_err")))},_=()=>{t.resultCode=O(),t.resultCode&&s.value.show()},n=()=>{l.value.show()};return(h,v)=>(f(),C("div",He,[o("p",We,r(h.$t("imageToLabel.color.title_1")),1),o("div",Qe,[o("div",Xe,[(f(!0),C(Z,null,tt(m(t).colorList,(b,T)=>(f(),C("div",{key:T,class:ut({color_item:!0,active:T==m(t).activeColor}),style:J(`background: ${b.color}`),onClick:V=>c(b,T)},null,14,Ge))),128))])]),o("div",Je,[o("div",Ke,[o("span",null,r(m(i)),1)]),o("div",Ye,[g(U,{type:"default",icon:"left",onClick:v[0]||(v[0]=b=>p(0))}),g(U,{type:"default",icon:"right",onClick:v[1]||(v[1]=b=>p(1))})]),o("div",Ze,[o("p",null,r(h.$t("imageToLabel.color.color_tips")),1)])]),o("p",to,r(h.$t("imageToLabel.color.title_2")),1),o("div",eo,[g(U,{type:"primary",text:h.$t("imageToLabel.color.btn_copy"),onClick:d},null,8,["text"]),g(U,{type:"default",text:h.$t("imageToLabel.color.btn_m_copy"),onClick:_},null,8,["text"]),g(U,{type:"default",text:h.$t("imageToLabel.color.btn_help"),onClick:n},null,8,["text"])]),g(G,{ref_key:"howToUsePopupRef",ref:l,title:h.$t("popup_howToUse.main_title")},{default:A(()=>[g(qe)]),_:1},8,["title"]),g(G,{ref_key:"manualCopyPopupRef",ref:s,title:h.$t("popup_manualCopy.main_title")},{default:A(()=>[g(Oe)]),_:1},8,["title"])]))}},so=x(oo,[["__scopeId","data-v-b1c637e8"]]),lo={class:"imagetolabel-page"},no={class:"container"},ao={__name:"ImageToLabel",setup(e){const t=I(),a=w(null),l=()=>{if(t.imageData==null)return;const s=new Image;s.src=t.imageData,s.onload=function(){const u=ht(s);t.newImageData=u.newCanvas}};return dt(()=>{t.reset()}),(s,u)=>(f(),C("div",lo,[g(pt,{title:s.$t("imageToLabel.title")},null,8,["title"]),o("div",no,[g(ae,{onChange:l}),g(pe,{ref_key:"result_card",ref:a},null,512),g(so)])]))}},_o=x(ao,[["__scopeId","data-v-4491cd73"]]);export{_o as default};
