import{u as D}from"./label_data-CeqBLNnJ.js";import{i as q,t as X}from"./Topbar-wVbwAJwt.js";import{_ as x,f as S,o as m,c as g,a as l,n as B,g as E,b as v,t as _,u as d,h as j,i as $,e as W,j as O,k as V,l as G,m as J,F as K,p as Q}from"./index-BA5XuFqL.js";function U(e){let t=e;typeof e=="string"&&(t=e.split(",").map(n=>parseInt(n,10)));const s=n=>{const o=n.toString(16);return o.length===1?"0"+o:o};return"#"+s(t[0])+s(t[1])+s(t[2])}function Y(e,t,s,n,o){const r=(e-t)/(s-t),c=n+r*(o-n);return Math.min(o,Math.max(n,c))}const b=D(),Z=["#000000","#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#0B0B0B","#0C0C0C","#0D0D0D","#0E0E0E","#0F0F0F","#101010","#111111","#121212","#131313","#141414","#151515","#161616","#171717","#181818"];function tt(e,t){const s=document.createElement("canvas"),n=s.getContext("2d"),o=t/e.width*e.height;return s.width=t,s.height=o,n.drawImage(e,0,0,t,o),s}function et(e){const t=tt(e,b.imageWidth),s=t.getContext("2d",{willReadFrequently:!0}),n=s.getImageData(0,0,t.width,t.height),o=n.data,r={};for(let a=0;a<o.length;a+=4){const i=o[a],f=o[a+1],C=o[a+2];if(o[a+3]===0)continue;const k=`${i},${f},${C}`;r[k]?r[k]++:r[k]=1}const u=Object.entries(r).sort((a,i)=>i[1]-a[1]).slice(0,b.colorNum).map(a=>a[0]);b.imageColors=u,st(u);for(let a=0;a<o.length;a+=4){const i=o[a],f=o[a+1],C=o[a+2],w=o[a+3];if(w===0)continue;const k=`${i},${f},${C}`,M=ot(k,u);o[a]=T(M)[0],o[a+1]=T(M)[1],o[a+2]=T(M)[2],o[a+3]=w<b.colorDetail?0:255,b.transMode===2&&M==b.imageColors[b.transColor]&&(o[a+3]=0)}b.transMode===1&&(lt(1,1,[0,0,0,0],t,o),s.putImageData(n,0,0));const h=document.createElement("canvas");return h.width=t.width,h.height=t.height,h.getContext("2d").putImageData(n,0,0),{newCanvas:h,topColors:u}}function ot(e,t){let s=null,n=1/0;const o=T(e);return t.forEach(r=>{const c=T(r),u=nt(o,c);u<n&&(n=u,s=r)}),s}function T(e){return e.split(",").map(t=>parseInt(t,10))}function nt(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function st(e){for(let t=0;t<25;t++)b.colorList[t].color="#000000";for(let t=0;t<10;t++)e[t]&&(b.colorList[t+15].color=U(e[t]))}function lt(e,t,s,n,o){const r=F(e,t,n,o);if(r[3]===0)return;const c=[[e,t]];let u;for(;c.length;){if(u=c.pop(),e=u[0],t=u[1],e<0||e>=n.width||t<0||t>=n.height)continue;let h=F(e,t,n,o);if(!at(h,r))continue;let p=(e+t*n.width)*4;o.set(s,p),c.push([e+1,t]),c.push([e-1,t]),c.push([e,t+1]),c.push([e,t-1])}}function F(e,t,s,n){var o=(e+t*s.width)*4;return[n[o],n[o+1],n[o+2],n[o+3]]}function at(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function R(){const e=b.newImageData;if(e==null)return;let t="<mspace=0.2><line-height=0.2><size=0.65>";const o=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;let r=null;for(let c=0;c<o.length;c+=4){const u=o[c],h=o[c+1],p=o[c+2],a=o[c+3],i=`${u},${h},${p}`;r===null&&(r=i,a!==0&&(t+=`<${z(i)}>`)),i!==r&&a!==0&&(t+=`<${z(i)}>`,r=i),c/4%e.width===0&&(t+="<br>"),a===255?t+=".":t+=" "}return t=t.replace(/\s*<br>/g,"<br>").trimEnd(),t=t.replace(/\s{12,}/g,c=>`<space=${(c.length*.2).toFixed(1).replace(/\.0$/,"")}>`),t}function z(e){const t=U(e),s=b.colorList.findIndex(o=>o.color===t);return Z[s]}const it={class:"qi-slider"},ct=["min","max","step","value"],rt={__name:"Slider",props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const s=e,n=t,o=c=>{const u=parseInt(c.target.value,10);n("update:modelValue",u),n("change")},r=S(()=>Y(s.modelValue,s.min,s.max,0,100));return(c,u)=>(m(),g("div",it,[l("input",{type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,onInput:o,style:B(`background-size: ${r.value}% 100%`)},null,44,ct)]))}},N=x(rt,[["__scopeId","data-v-34d3e4cc"]]),ut={class:"qi-select flex-x-between"},dt={class:"value_text"},mt={key:0,class:"text"},_t={__name:"Select",props:{modelValue:{type:Number,required:!0},valueList:{type:Array,default:()=>["开启","关闭"]},isColor:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const s=e,n=t,o=E(s.modelValue),r=c=>{c===0?o.value=o.value<=0?s.valueList.length-1:o.value-1:o.value=o.value>=s.valueList.length-1?0:o.value+1,n("update:modelValue",o.value),n("change")};return(c,u)=>(m(),g("div",ut,[l("div",{class:"button",onClick:u[0]||(u[0]=h=>r(0))},[v(q,{icon:"left",size:"1.5em"})]),l("div",dt,[e.isColor?(m(),g("div",{key:1,class:"color",style:B({backgroundColor:d(U)(e.valueList[e.modelValue])})},null,4)):(m(),g("span",mt,_(e.valueList[e.modelValue]),1))]),l("div",{class:"button",onClick:u[1]||(u[1]=h=>r(1))},[v(q,{icon:"right",size:"1.5em"})])]))}},A=x(_t,[["__scopeId","data-v-c1a26889"]]),pt={class:"main_card edit_card"},gt={class:"card_title"},ht={class:"upload_image_box flex-x-y"},ft={key:0},vt=["src"],Ct={class:"card_title"},bt={class:"card_content"},$t={class:"setting_item"},xt={class:"content flex-x-between"},yt={class:"title"},Lt={class:"value"},wt={class:"card_tips"},kt={class:"setting_item"},Vt={class:"content flex-x-between"},It={class:"title"},Tt={class:"value"},Dt={class:"setting_item"},St={class:"content flex-x-between"},Mt={class:"title"},qt={class:"value"},Nt={key:0,class:"setting_item"},Bt={class:"content flex-x-between"},Et={class:"title"},Ut={key:1,class:"setting_item"},Ft={class:"content flex-x-between"},Rt={class:"title"},zt={__name:"edit_card",emits:["change"],setup(e,{emit:t}){const{t:s}=j(),n=D(),o=t,r=E(["imageToLabel.edit.tranMode_off","imageToLabel.edit.tranMode_auto","imageToLabel.edit.tranMode_color"]),c=S(()=>r.value.map(p=>s(p)));function u(p){const a=p.target.files;if(a.length>0){const i=new FileReader;i.readAsDataURL(a[0]),i.onload=function(f){n.imageData=f.target.result,o("change")}}}const h=()=>{o("change")};return(p,a)=>(m(),g("div",pt,[l("p",gt,_(p.$t("imageToLabel.edit.title_1")),1),l("label",null,[l("input",{type:"file",accept:"image/*",onChange:u},null,32),l("div",ht,[d(n).imageData?$("",!0):(m(),g("p",ft,_(p.$t("imageToLabel.edit.select_image")),1)),d(n).imageData?(m(),g("img",{key:1,src:d(n).imageData,alt:""},null,8,vt)):$("",!0)])]),l("p",Ct,_(p.$t("imageToLabel.edit.title_2")),1),l("div",bt,[l("div",$t,[l("div",xt,[l("p",yt,_(p.$t("imageToLabel.edit.imgw")),1),l("p",Lt,_(d(n).imageWidth),1)]),v(N,{modelValue:d(n).imageWidth,"onUpdate:modelValue":a[0]||(a[0]=i=>d(n).imageWidth=i),onChange:h,min:10,max:400,step:10},null,8,["modelValue"])]),l("div",wt,[l("p",null,_(p.$t("imageToLabel.edit.imgw_tips")),1)]),l("div",kt,[l("div",Vt,[l("p",It,_(p.$t("imageToLabel.edit.colorNum")),1),l("p",Tt,_(d(n).colorNum),1)]),v(N,{modelValue:d(n).colorNum,"onUpdate:modelValue":a[1]||(a[1]=i=>d(n).colorNum=i),onChange:h,min:1,max:10},null,8,["modelValue"])]),l("div",Dt,[l("div",St,[l("p",Mt,_(p.$t("imageToLabel.edit.tranValue")),1),l("p",qt,_(d(n).colorDetail),1)]),v(N,{modelValue:d(n).colorDetail,"onUpdate:modelValue":a[2]||(a[2]=i=>d(n).colorDetail=i),onChange:h,min:0,max:200,step:1},null,8,["modelValue"])]),d(n).imageColors.length!==0?(m(),g("div",Nt,[l("div",Bt,[l("p",Et,_(p.$t("imageToLabel.edit.tranMode")),1),v(A,{modelValue:d(n).transMode,"onUpdate:modelValue":a[3]||(a[3]=i=>d(n).transMode=i),onChange:h,"value-list":c.value},null,8,["modelValue","value-list"])])])):$("",!0),d(n).transMode==2?(m(),g("div",Ut,[l("div",Ft,[l("p",Rt,_(p.$t("imageToLabel.edit.tranColor")),1),v(A,{modelValue:d(n).transColor,"onUpdate:modelValue":a[4]||(a[4]=i=>d(n).transColor=i),onChange:h,"value-list":d(n).imageColors,"is-color":!0},null,8,["modelValue","value-list"])])])):$("",!0)])]))}},At=x(zt,[["__scopeId","data-v-2469a9f1"]]),Ht={class:"main_card result_card"},Pt={class:"card_title"},jt={class:"result_box flex-x-y"},Wt=["src"],Ot={__name:"result_card",setup(e){const t=D(),s=S(()=>{if(t.newImageData!==null)return t.newImageData.toDataURL()});return(n,o)=>(m(),g("div",Ht,[l("p",Pt,_(n.$t("imageToLabel.result.title_1")),1),l("div",jt,[s.value?(m(),g("img",{key:0,src:s.value,alt:""},null,8,Wt)):$("",!0)])]))}},Xt=x(Ot,[["__scopeId","data-v-d37bb013"]]),Gt={key:1},Jt={__name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"default"},icon:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const s=e,n=S(()=>[`qi-button__${s.type}`]),o=t,r=c=>{o("click")};return(c,u)=>(m(),g("div",{class:O(["qi-button flex-x-y",n.value]),onClick:r},[e.icon?(m(),W(q,{key:0,icon:e.icon,size:"1.3em"},null,8,["icon"])):$("",!0),e.text?(m(),g("span",Gt,_(e.text),1)):$("",!0)],2))}},I=x(Jt,[["__scopeId","data-v-b9cb7a56"]]),Kt={class:"qi-toast"},Qt={__name:"Toast",props:{message:{type:String,default:"提示文本"},icon:{type:String,default:""}},setup(e){return(t,s)=>(m(),g("div",Kt,[e.icon?(m(),W(q,{key:0,icon:e.icon},null,8,["icon"])):$("",!0),l("span",null,_(e.message),1)]))}},Yt=x(Qt,[["__scopeId","data-v-48078998"]]);let H=null,y=null;function P(e,t=1500){y=document.querySelector(".toast-container"),y?V(null,y):(y=document.createElement("div"),y.setAttribute("class","toast-container"),document.querySelector("body").appendChild(y));const s=v(Yt,{message:e});V(s,y),clearTimeout(H),H=setTimeout(()=>{V(null,y)},t)}const Zt={class:"qi-popup-box"},te={class:"popup"},ee={class:"top_box flex-x-y"},oe={class:"title"},ne=["innerHTML"],se={__name:"Popup",props:{title:{type:String,default:"弹窗标题"},text:{type:String,default:""}},setup(e){const t=()=>{ie()};return(s,n)=>(m(),g("div",Zt,[l("div",te,[l("div",ee,[l("p",oe,_(e.title),1),l("div",{class:"close_button flex-x-y",onClick:t},"X")]),e.text?(m(),g("div",{key:0,class:"content",innerHTML:e.text},null,8,ne)):$("",!0)])]))}},le=x(se,[["__scopeId","data-v-0f33d7ac"]]);let L=null;function ae(e,t){L=document.querySelector(".popup-container"),L?V(null,L):(L=document.createElement("div"),L.setAttribute("class","popup-container"),document.querySelector("body").appendChild(L));const s=v(le,{title:e,text:t});V(s,L)}function ie(){V(null,L)}const ce={class:"main_card color_card"},re={class:"card_title"},ue={class:"color_box flex-y"},de={class:"color_list"},me=["onClick"],_e={class:"card_content"},pe={class:"color_hex_text flex-x-y"},ge={class:"edit_buttons"},he={class:"card_tips"},fe={class:"card_title"},ve={class:"card_content export_buttons"},Ce={__name:"color_card",setup(e){const t=D(),s=G(),{t:n}=j();function o(){for(let i=0;i<25;i++)t.colorList.push({id:i,color:"#000000"})}J(()=>{t.colorList.length===0&&o()});const r=(i,f)=>{t.activeColor=f},c=i=>{const f=t.activeColor;if(i===0){if(f>0){const C=t.colorList.splice(f,1)[0];t.colorList.splice(f-1,0,C),t.activeColor-=1}}else if(f<t.colorList.length-1){const C=t.colorList.splice(f,1)[0];t.colorList.splice(f+1,0,C),t.activeColor+=1}};let u=S(()=>{var i;return(i=t.colorList[t.activeColor])==null?void 0:i.color.toUpperCase()});const h=()=>{t.resultCode=R(),t.resultCode&&(navigator.clipboard?(navigator.clipboard.writeText(t.resultCode),P(n("toast.copy"))):P(n("toast.copy_err")))},p=()=>{t.resultCode=R(),t.resultCode&&s.push("/tool/imagetolabel/copycode")},a=()=>{ae(n("popup.howToUse_title"),n("popup.howToUse_content"))};return(i,f)=>(m(),g("div",ce,[l("p",re,_(i.$t("imageToLabel.color.title_1")),1),l("div",ue,[l("div",de,[(m(!0),g(K,null,Q(d(t).colorList,(C,w)=>(m(),g("div",{key:w,class:O({color_item:!0,active:w==d(t).activeColor}),style:B(`background: ${C.color}`),onClick:k=>r(C,w)},null,14,me))),128))])]),l("div",_e,[l("div",pe,[l("span",null,_(d(u)),1)]),l("div",ge,[v(I,{type:"default",icon:"left",onClick:f[0]||(f[0]=C=>c(0))}),v(I,{type:"default",icon:"right",onClick:f[1]||(f[1]=C=>c(1))})]),l("div",he,[l("p",null,_(i.$t("imageToLabel.color.color_tips")),1)])]),l("p",fe,_(i.$t("imageToLabel.color.title_2")),1),l("div",ve,[v(I,{type:"primary",text:i.$t("imageToLabel.color.btn_copy"),onClick:h},null,8,["text"]),v(I,{type:"default",text:i.$t("imageToLabel.color.btn_m_copy"),onClick:p},null,8,["text"]),v(I,{type:"default",text:i.$t("imageToLabel.color.btn_help"),onClick:a},null,8,["text"])])]))}},be=x(Ce,[["__scopeId","data-v-e147746c"]]),$e={class:"imagetolabel-page"},xe={class:"container"},ye={__name:"ImageToLabel",setup(e){const t=D(),s=E(null),n=()=>{if(t.imageData==null)return;const o=new Image;o.src=t.imageData,o.onload=function(){const r=et(o);t.newImageData=r.newCanvas}};return(o,r)=>(m(),g("div",$e,[v(X,{title:o.$t("imageToLabel.title")},null,8,["title"]),l("div",xe,[v(At,{onChange:n}),v(Xt,{ref_key:"result_card",ref:s},null,512),v(be)])]))}},Ve=x(ye,[["__scopeId","data-v-1883af06"]]);export{Ve as default};
