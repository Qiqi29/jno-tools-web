import{u as D}from"./label_data-HuNJnmca.js";import{i as N,t as K}from"./Topbar-6tQCKmGU.js";import{_ as x,f as S,o as p,c as h,a as l,n as E,g as B,d as v,t as _,u,h as W,i as $,b as j,j as G,k,l as O,m as X,F as J,p as Q}from"./index-Dy_dBH2U.js";function F(e){let t=e;typeof e=="string"&&(t=e.split(",").map(s=>parseInt(s,10)));const n=s=>{const o=s.toString(16);return o.length===1?"0"+o:o};return"#"+n(t[0])+n(t[1])+n(t[2])}function Y(e,t,n,s,o){const r=(e-t)/(n-t),c=s+r*(o-s);return Math.min(o,Math.max(s,c))}const b=D(),Z=["#000000","#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#0B0B0B","#0C0C0C","#0D0D0D","#0E0E0E","#0F0F0F","#101010","#111111","#121212","#131313","#141414","#151515","#161616","#171717","#181818"];function tt(e,t){const n=document.createElement("canvas"),s=n.getContext("2d"),o=t/e.width*e.height;return n.width=t,n.height=o,s.drawImage(e,0,0,t,o),n}function et(e){const t=tt(e,b.imageWidth),n=t.getContext("2d",{willReadFrequently:!0}),s=n.getImageData(0,0,t.width,t.height),o=s.data,r={};for(let a=0;a<o.length;a+=4){const i=o[a],g=o[a+1],C=o[a+2];if(o[a+3]===0)continue;const V=`${i},${g},${C}`;r[V]?r[V]++:r[V]=1}const d=Object.entries(r).sort((a,i)=>i[1]-a[1]).slice(0,b.colorNum).map(a=>a[0]);b.imageColors=d,nt(d);for(let a=0;a<o.length;a+=4){const i=o[a],g=o[a+1],C=o[a+2],w=o[a+3];if(w===0)continue;const V=`${i},${g},${C}`,M=ot(V,d);o[a]=T(M)[0],o[a+1]=T(M)[1],o[a+2]=T(M)[2],o[a+3]=w<b.colorDetail?0:255,b.transMode===2&&M==b.imageColors[b.transColor]&&(o[a+3]=0)}b.transMode===1&&(lt(1,1,[0,0,0,0],t,o),n.putImageData(s,0,0));const f=document.createElement("canvas");return f.width=t.width,f.height=t.height,f.getContext("2d").putImageData(s,0,0),{newCanvas:f,topColors:d}}function ot(e,t){let n=null,s=1/0;const o=T(e);return t.forEach(r=>{const c=T(r),d=st(o,c);d<s&&(s=d,n=r)}),n}function T(e){return e.split(",").map(t=>parseInt(t,10))}function st(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function nt(e){for(let t=0;t<25;t++)b.colorList[t].color="#000000";for(let t=0;t<10;t++)e[t]&&(b.colorList[t+15].color=F(e[t]))}function lt(e,t,n,s,o){const r=z(e,t,s,o);if(r[3]===0)return;const c=[[e,t]];let d;for(;c.length;){if(d=c.pop(),e=d[0],t=d[1],e<0||e>=s.width||t<0||t>=s.height)continue;let f=z(e,t,s,o);if(!at(f,r))continue;let m=(e+t*s.width)*4;o.set(n,m),c.push([e+1,t]),c.push([e-1,t]),c.push([e,t+1]),c.push([e,t-1])}}function z(e,t,n,s){var o=(e+t*n.width)*4;return[s[o],s[o+1],s[o+2],s[o+3]]}function at(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function A(){const e=b.newImageData;if(e==null)return;let t="<mspace=0.2><line-height=0.2><size=0.65>";const o=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;let r=null;for(let c=0;c<o.length;c+=4){const d=o[c],f=o[c+1],m=o[c+2],a=o[c+3],i=`${d},${f},${m}`;r===null&&(r=i,a!==0&&(t+=`<${R(i)}>`)),i!==r&&a!==0&&(t+=`<${R(i)}>`,r=i),c/4%e.width===0&&(t+="<br>"),a===255?t+=".":t+=" "}return t.trimEnd()}function R(e){const t=F(e),n=b.colorList.findIndex(o=>o.color===t);return Z[n]}const it={class:"qi-slider"},ct=["min","max","step","value"],rt={__name:"Slider",props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=c=>{const d=parseInt(c.target.value,10);s("update:modelValue",d),s("change")},r=S(()=>Y(n.modelValue,n.min,n.max,0,100));return(c,d)=>(p(),h("div",it,[l("input",{type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,onInput:o,style:E(`background-size: ${r.value}% 100%`)},null,44,ct)]))}},q=x(rt,[["__scopeId","data-v-34d3e4cc"]]),dt={class:"qi-select flex-x-between"},ut={class:"value_text"},pt={key:0,class:"text"},_t={__name:"Select",props:{modelValue:{type:Number,required:!0},valueList:{type:Array,default:()=>["开启","关闭"]},isColor:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,s=t,o=B(n.modelValue),r=c=>{c===0?o.value=o.value<=0?n.valueList.length-1:o.value-1:o.value=o.value>=n.valueList.length-1?0:o.value+1,s("update:modelValue",o.value),s("change")};return(c,d)=>(p(),h("div",dt,[l("div",{class:"button",onClick:d[0]||(d[0]=f=>r(0))},[v(N,{icon:"left",size:"1.5em"})]),l("div",ut,[e.isColor?(p(),h("div",{key:1,class:"color",style:E({backgroundColor:u(F)(e.valueList[e.modelValue])})},null,4)):(p(),h("span",pt,_(e.valueList[e.modelValue]),1))]),l("div",{class:"button",onClick:d[1]||(d[1]=f=>r(1))},[v(N,{icon:"right",size:"1.5em"})])]))}},U=x(_t,[["__scopeId","data-v-c1a26889"]]),mt={class:"main_card edit_card"},ht={class:"card_title"},gt={class:"upload_image_box flex-x-y"},ft={key:0},vt=["src"],Ct={class:"card_title"},bt={class:"card_content"},$t={class:"setting_item"},xt={class:"content flex-x-between"},yt={class:"title"},Lt={class:"value"},wt={class:"card_tips"},Vt={class:"setting_item"},kt={class:"content flex-x-between"},It={class:"title"},Tt={class:"value"},Dt={class:"setting_item"},St={class:"content flex-x-between"},Mt={class:"title"},Nt={class:"value"},qt={key:0,class:"setting_item"},Et={class:"content flex-x-between"},Bt={class:"title"},Ft={key:1,class:"setting_item"},zt={class:"content flex-x-between"},At={class:"title"},Rt={__name:"edit_card",emits:["change"],setup(e,{emit:t}){const{t:n}=W(),s=D(),o=t,r=B(["imageToLabel.edit_card.set_transMode_off","imageToLabel.edit_card.set_transMode_auto","imageToLabel.edit_card.set_transMode_color"]),c=S(()=>r.value.map(m=>n(m)));function d(m){const a=m.target.files;if(a.length>0){const i=new FileReader;i.readAsDataURL(a[0]),i.onload=function(g){s.imageData=g.target.result,o("change")}}}const f=()=>{o("change")};return(m,a)=>(p(),h("div",mt,[l("p",ht,_(m.$t("imageToLabel.edit_card.title_1")),1),l("label",null,[l("input",{type:"file",accept:"image/*",onChange:d},null,32),l("div",gt,[u(s).imageData?$("",!0):(p(),h("p",ft,_(m.$t("imageToLabel.edit_card.select_image")),1)),u(s).imageData?(p(),h("img",{key:1,src:u(s).imageData,alt:""},null,8,vt)):$("",!0)])]),l("p",Ct,_(m.$t("imageToLabel.edit_card.title_2")),1),l("div",bt,[l("div",$t,[l("div",xt,[l("p",yt,_(m.$t("imageToLabel.edit_card.set_imageWidth")),1),l("p",Lt,_(u(s).imageWidth),1)]),v(q,{modelValue:u(s).imageWidth,"onUpdate:modelValue":a[0]||(a[0]=i=>u(s).imageWidth=i),onChange:f,min:10,max:400,step:10},null,8,["modelValue"])]),l("div",wt,[l("p",null,_(m.$t("imageToLabel.edit_card.set_imageWidth_tips")),1)]),l("div",Vt,[l("div",kt,[l("p",It,_(m.$t("imageToLabel.edit_card.set_colorCount")),1),l("p",Tt,_(u(s).colorNum),1)]),v(q,{modelValue:u(s).colorNum,"onUpdate:modelValue":a[1]||(a[1]=i=>u(s).colorNum=i),onChange:f,min:1,max:10},null,8,["modelValue"])]),l("div",Dt,[l("div",St,[l("p",Mt,_(m.$t("imageToLabel.edit_card.set_transFineness")),1),l("p",Nt,_(u(s).colorDetail),1)]),v(q,{modelValue:u(s).colorDetail,"onUpdate:modelValue":a[2]||(a[2]=i=>u(s).colorDetail=i),onChange:f,min:0,max:200,step:1},null,8,["modelValue"])]),u(s).imageColors.length!==0?(p(),h("div",qt,[l("div",Et,[l("p",Bt,_(m.$t("imageToLabel.edit_card.set_transMode")),1),v(U,{modelValue:u(s).transMode,"onUpdate:modelValue":a[3]||(a[3]=i=>u(s).transMode=i),onChange:f,"value-list":c.value},null,8,["modelValue","value-list"])])])):$("",!0),u(s).transMode==2?(p(),h("div",Ft,[l("div",zt,[l("p",At,_(m.$t("imageToLabel.edit_card.set_transColor")),1),v(U,{modelValue:u(s).transColor,"onUpdate:modelValue":a[4]||(a[4]=i=>u(s).transColor=i),onChange:f,"value-list":u(s).imageColors,"is-color":!0},null,8,["modelValue","value-list"])])])):$("",!0)])]))}},Ut=x(Rt,[["__scopeId","data-v-a3796e59"]]),Ht={class:"main_card result_card"},Pt={class:"card_title"},Wt={class:"result_box flex-x-y"},jt=["src"],Gt={__name:"result_card",setup(e){const t=D(),n=S(()=>{if(t.newImageData!==null)return t.newImageData.toDataURL()});return(s,o)=>(p(),h("div",Ht,[l("p",Pt,_(s.$t("imageToLabel.result_card.title_1")),1),l("div",Wt,[n.value?(p(),h("img",{key:0,src:n.value,alt:""},null,8,jt)):$("",!0)])]))}},Kt=x(Gt,[["__scopeId","data-v-52a6aafc"]]),Ot={key:1},Xt={__name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"default"},icon:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const n=e,s=S(()=>[`qi-button__${n.type}`]),o=t,r=c=>{o("click")};return(c,d)=>(p(),h("div",{class:G(["qi-button flex-x-y",s.value]),onClick:r},[e.icon?(p(),j(N,{key:0,icon:e.icon,size:"1.3em"},null,8,["icon"])):$("",!0),e.text?(p(),h("span",Ot,_(e.text),1)):$("",!0)],2))}},I=x(Xt,[["__scopeId","data-v-b9cb7a56"]]),Jt={class:"qi-toast"},Qt={__name:"Toast",props:{message:{type:String,default:"提示文本"},icon:{type:String,default:""}},setup(e){return(t,n)=>(p(),h("div",Jt,[e.icon?(p(),j(N,{key:0,icon:e.icon},null,8,["icon"])):$("",!0),l("span",null,_(e.message),1)]))}},Yt=x(Qt,[["__scopeId","data-v-48078998"]]);let H=null,y=null;function P(e,t=1500){y=document.querySelector(".toast-container"),y?k(null,y):(y=document.createElement("div"),y.setAttribute("class","toast-container"),document.querySelector("body").appendChild(y));const n=v(Yt,{message:e});k(n,y),clearTimeout(H),H=setTimeout(()=>{k(null,y)},t)}const Zt={class:"qi-popup-box"},te={class:"popup"},ee={class:"top_box flex-x-y"},oe={class:"title"},se=["innerHTML"],ne={__name:"Popup",props:{title:{type:String,default:"弹窗标题"},text:{type:String,default:""}},setup(e){const t=()=>{ie()};return(n,s)=>(p(),h("div",Zt,[l("div",te,[l("div",ee,[l("p",oe,_(e.title),1),l("div",{class:"close_button flex-x-y",onClick:t},"X")]),e.text?(p(),h("div",{key:0,class:"content",innerHTML:e.text},null,8,se)):$("",!0)])]))}},le=x(ne,[["__scopeId","data-v-9c6765b5"]]);let L=null;function ae(e,t){L=document.querySelector(".popup-container"),L?k(null,L):(L=document.createElement("div"),L.setAttribute("class","popup-container"),document.querySelector("body").appendChild(L));const n=v(le,{title:e,text:t});k(n,L)}function ie(){k(null,L)}const ce={class:"main_card color_card"},re={class:"card_title"},de={class:"color_box flex-y"},ue={class:"color_list"},pe=["onClick"],_e={class:"card_content"},me={class:"color_hex_text flex-x-y"},he={class:"edit_buttons"},ge={class:"card_tips"},fe={class:"card_title"},ve={class:"card_content export_buttons"},Ce={__name:"color_card",setup(e){const t=D(),n=O(),{t:s}=W();function o(){for(let i=0;i<25;i++)t.colorList.push({id:i,color:"#000000"})}X(()=>{t.colorList.length===0&&o()});const r=(i,g)=>{t.activeColor=g},c=i=>{const g=t.activeColor;if(i===0){if(g>0){const C=t.colorList.splice(g,1)[0];t.colorList.splice(g-1,0,C),t.activeColor-=1}}else if(g<t.colorList.length-1){const C=t.colorList.splice(g,1)[0];t.colorList.splice(g+1,0,C),t.activeColor+=1}};let d=S(()=>{var i;return(i=t.colorList[t.activeColor])==null?void 0:i.color.toUpperCase()});const f=()=>{t.resultCode=A(),t.resultCode&&(navigator.clipboard?(navigator.clipboard.writeText(t.resultCode),P(s("toast.copy"))):P(s("toast.copy_err")))},m=()=>{t.resultCode=A(),t.resultCode&&n.push("/tool/imagetolabel/copycode")},a=()=>{ae("使用方法",`
        <p class="popup_title">1. 粘贴代码</p>
        <p class="popup_text">把复制的代码粘贴到 Lable 零件的输入框中。</p>

        <p class="popup_title">2. 设置 Label 零件的属性</p>
        <p class="popup_text">字体（Font）设置为 Future Earth。</p>
        <p class="popup_text">水平锚点（Horizontal Anchor）设置为 Left。</p>
        <p class="popup_text">垂直锚点（Vertical Anchor）设置为 Top。</p>
        <p class="popup_text">梯度（Gradient）设置为 Vertical。</p>
        
        <p class="popup_title">3. 调整图像大小</p>
        <p class="popup_text">在 TINKER PANEL 选项内通过 Part Scale（零件大小）调整图像的大小。</p>
        
        <p class="popup_title">小提示</p>
        <p class="popup_text">推荐使用清晰、对比度高、颜色较少的图像进行转换。</p>
        <p class="popup_text">粘贴代码后，如果图像异常，把 FontSize、Width、Height 属性都拉到最大，然后再缩小到合适的大小</p>
    `)};return(i,g)=>(p(),h("div",ce,[l("p",re,_(i.$t("imageToLabel.color_card.title_1")),1),l("div",de,[l("div",ue,[(p(!0),h(J,null,Q(u(t).colorList,(C,w)=>(p(),h("div",{key:w,class:G({color_item:!0,active:w==u(t).activeColor}),style:E(`background: ${C.color}`),onClick:V=>r(C,w)},null,14,pe))),128))])]),l("div",_e,[l("div",me,[l("span",null,_(u(d)),1)]),l("div",he,[v(I,{type:"default",icon:"left",onClick:g[0]||(g[0]=C=>c(0))}),v(I,{type:"default",icon:"right",onClick:g[1]||(g[1]=C=>c(1))})]),l("div",ge,[l("p",null,_(i.$t("imageToLabel.color_card.set_tips")),1)])]),l("p",fe,_(i.$t("imageToLabel.color_card.title_2")),1),l("div",ve,[v(I,{type:"primary",text:i.$t("imageToLabel.color_card.btn_copy"),onClick:f},null,8,["text"]),v(I,{type:"default",text:i.$t("imageToLabel.color_card.btn_m_copy"),onClick:m},null,8,["text"]),v(I,{type:"default",text:i.$t("imageToLabel.color_card.btn_help"),onClick:a},null,8,["text"])])]))}},be=x(Ce,[["__scopeId","data-v-7176a73a"]]),$e={class:"imagetolabel-page"},xe={class:"container"},ye={__name:"ImageToLabel",setup(e){const t=D(),n=B(null),s=()=>{if(t.imageData==null)return;const o=new Image;o.src=t.imageData,o.onload=function(){const r=et(o);t.newImageData=r.newCanvas}};return(o,r)=>(p(),h("div",$e,[v(K,{title:o.$t("tools.ImageToLabel")},null,8,["title"]),l("div",xe,[v(Ut,{onChange:s}),v(Kt,{ref_key:"result_card",ref:n},null,512),v(be)])]))}},ke=x(ye,[["__scopeId","data-v-1273c2af"]]);export{ke as default};