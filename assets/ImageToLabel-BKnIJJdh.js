import{g as st,_ as w,h as I,o as f,c as v,a as s,n as R,i as b,j as S,v as lt,b as $,t as d,u as m,e as T,k as B,l as Z,d as E,m as N,w as A,T as P,p as nt,q as at,s as H,x as it,y as j,F as tt,z as et,A as ct,B as rt,C as ut}from"./index-BOx4o23r.js";import{t as dt}from"./Topbar-D0_XjbtO.js";import{i as M}from"./Icon-CEHmRcMh.js";function z(e){let t=e;typeof e=="string"&&(t=e.split(",").map(l=>parseInt(l,10)));const n=l=>{const o=l.toString(16);return o.length===1?"0"+o:o};return"#"+n(t[0])+n(t[1])+n(t[2])}function pt(e,t,n,l,o){const i=(e-t)/(n-t),c=l+i*(o-l);return Math.min(o,Math.max(l,c))}const O={imageData:null,newImageData:null,resultCode:null,imageWidth:150,colorNum:3,colorDetail:100,colorAlgorithm:!1,colorIntensity:30,transMode:0,transModeList:["关闭","自动","指定颜色"],transColor:0,imageColors:[],activeColor:15,colorList:[]},D=st("label_date",{state:()=>({...O}),actions:{reset(){Object.assign(this,O),this.colorList=[]}}}),x=D(),_t=["#000000","#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#0B0B0B","#0C0C0C","#0D0D0D","#0E0E0E","#0F0F0F","#101010","#111111","#121212","#131313","#141414","#151515","#161616","#171717","#181818"];function mt(e,t){const n=document.createElement("canvas"),l=n.getContext("2d",{willReadFrequently:!0}),o=t/e.width*e.height;return n.width=t,n.height=o,l.drawImage(e,0,0,t,o),n}function ht(e){const t=mt(e,x.imageWidth),n=t.getContext("2d",{willReadFrequently:!0}),l=n.getImageData(0,0,t.width,t.height),o=l.data,i={};for(let a=0;a<o.length;a+=16){const g=o[a],_=o[a+1],C=o[a+2];if(o[a+3]===0)continue;const V=`${g},${_},${C}`;i[V]?i[V]++:i[V]=1}const c={};x.colorAlgorithm&&Object.keys(i).forEach(a=>{let g=!1;Object.keys(c).forEach(_=>{if(ot(k(a),k(_))<x.colorIntensity){c[_]+=i[a],g=!0;return}}),g||(c[a]=i[a])});const r=Object.entries(x.colorAlgorithm?c:i).sort((a,g)=>g[1]-a[1]).slice(0,x.colorNum).map(a=>a[0]);x.imageColors=r,ft(r);for(let a=0;a<o.length;a+=4){const g=o[a],_=o[a+1],C=o[a+2],y=o[a+3];if(y===0)continue;const V=`${g},${_},${C}`,q=gt(V,r);o[a]=k(q)[0],o[a+1]=k(q)[1],o[a+2]=k(q)[2],o[a+3]=y<x.colorDetail?0:255,x.transMode===2&&q==x.imageColors[x.transColor]&&(o[a+3]=0)}x.transMode===1&&(vt(1,1,[0,0,0,0],t,o),n.putImageData(l,0,0));const u=document.createElement("canvas");return u.width=t.width,u.height=t.height,u.getContext("2d",{willReadFrequently:!0}).putImageData(l,0,0),{newCanvas:u,topColors:r}}function gt(e,t){let n=null,l=1/0;const o=k(e);return t.forEach(i=>{const c=k(i),p=ot(o,c);p<l&&(l=p,n=i)}),n}function k(e){return e.split(",").map(t=>parseInt(t,10))}function ot(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function ft(e){for(let t=0;t<25;t++)x.colorList[t].color="#000000";for(let t=0;t<10;t++)e[t]&&(x.colorList[t+15].color=z(e[t]))}function vt(e,t,n,l,o){const i=W(e,t,l,o);if(i[3]===0)return;const c=[[e,t]];let p;for(;c.length;){if(p=c.pop(),e=p[0],t=p[1],e<0||e>=l.width||t<0||t>=l.height)continue;let r=W(e,t,l,o);if(!$t(r,i))continue;let u=(e+t*l.width)*4;o.set(n,u),c.push([e+1,t]),c.push([e-1,t]),c.push([e,t+1]),c.push([e,t-1])}}function W(e,t,n,l){var o=(e+t*n.width)*4;return[l[o],l[o+1],l[o+2],l[o+3]]}function $t(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function X(){const e=x.newImageData;if(e==null)return;let t="<mspace=0.2><line-height=0.2><size=0.65>";const o=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;let i=null;for(let c=0;c<o.length;c+=4){const p=o[c],r=o[c+1],u=o[c+2],h=o[c+3],a=`${p},${r},${u}`;i===null&&(i=a,h!==0&&(t+=`<${G(a)}>`)),a!==i&&h!==0&&(t+=`<${G(a)}>`,i=a),c/4%e.width===0&&(t+="<br>"),h===255?t+=".":t+=" "}return t=t.replace(/\s*<br>/g,"<br>").trimEnd(),t=t.replace(/\s{12,}/g,c=>`<space=${(c.length*.2).toFixed(1).replace(/\.0$/,"")}>`),t}function G(e){const t=z(e),n=x.colorList.findIndex(o=>o.color===t);return _t[n]}const Ct={class:"qi-slider"},xt=["min","max","step","value"],bt={__name:"Slider",props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue","change","touchup"],setup(e,{emit:t}){const n=e,l=t,o=p=>{const r=parseInt(p.target.value,10);l("update:modelValue",r),l("change")},i=p=>{l("touchup")},c=I(()=>pt(n.modelValue,n.min,n.max,0,100));return(p,r)=>(f(),v("div",Ct,[s("input",{type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,style:R(`background-size: ${c.value}% 100%`),onInput:o,onMouseup:i,onTouchend:i},null,44,xt)]))}},F=w(bt,[["__scopeId","data-v-1103b91c"]]),wt={class:"qi-switch"},yt={class:"switch-label"},Tt=["checked"],Lt={__name:"Switch",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,l=t,o=b(n.modelValue),i=c=>{l("update:modelValue",o.value),l("change")};return(c,p)=>(f(),v("div",wt,[s("label",yt,[S(s("input",{type:"checkbox","onUpdate:modelValue":p[0]||(p[0]=r=>o.value=r),checked:e.modelValue,onChange:i},null,40,Tt),[[lt,o.value]]),p[1]||(p[1]=s("div",{class:"slider"},[s("div",{class:"slider-button"})],-1))])]))}},kt=w(Lt,[["__scopeId","data-v-5847a79a"]]),Vt={class:"qi-select flex-x-between"},It={class:"value_text"},Dt={key:0,class:"text"},Ut={__name:"Select",props:{modelValue:{type:Number,required:!0},valueList:{type:Array,default:()=>["开启","关闭"]},isColor:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,l=t,o=b(n.modelValue),i=c=>{c===0?o.value=o.value<=0?n.valueList.length-1:o.value-1:o.value=o.value>=n.valueList.length-1?0:o.value+1,l("update:modelValue",o.value),l("change")};return(c,p)=>(f(),v("div",Vt,[s("div",{class:"button flex-x-y",onClick:p[0]||(p[0]=r=>i(0))},[$(M,{icon:"left",size:"1.4em"})]),s("div",It,[e.isColor?(f(),v("div",{key:1,class:"color",style:R({backgroundColor:m(z)(e.valueList[e.modelValue])})},null,4)):(f(),v("span",Dt,d(e.valueList[e.modelValue]),1))]),s("div",{class:"button flex-x-y",onClick:p[1]||(p[1]=r=>i(1))},[$(M,{icon:"right",size:"1.4em"})])]))}},J=w(Ut,[["__scopeId","data-v-b16e0a64"]]),St=["accept"],Mt={key:0,class:"tipsText flex-y"},qt=["innerHTML"],Ft=["src"],At={key:2,class:"xmlData"},Nt={__name:"UploadFile",props:{text:{type:String,default:"点击选择文件，或拖拽到此处"},accept:{type:String,default:"image/*"}},emits:["change"],setup(e,{emit:t}){const n=e,l=t;let o=b(!1),i=b(!1),c=b(""),p=b("");function r(_){const C=_.target.files;g(C)}function u(_){_.preventDefault(),i.value=!0}function h(_){_.preventDefault(),i.value=!1}function a(_){_.preventDefault(),i.value=!1;const C=_.dataTransfer.files;g(C)}function g(_){if(_.length>0){const C=new FileReader;C.readAsDataURL(_[0]),C.onload=function(y){n.accept==="image/*"&&(c.value=y.target.result),n.accept===".xml"&&(p.value=y.target.result),o.value=!0,l("change",y.target.result)}}}return(_,C)=>(f(),v("label",{onDragover:u,onDragleave:h,onDrop:a},[s("input",{type:"file",accept:e.accept,onChange:r},null,40,St),s("div",{class:B(["uploadFile flex-x-y",{draging:m(i)}])},[m(o)?T("",!0):(f(),v("div",Mt,[$(M,{icon:"upload",size:"2em"}),s("div",{class:"text",innerHTML:e.text},null,8,qt)])),m(o)&&e.accept==="image/*"?(f(),v("img",{key:1,src:m(c),alt:""},null,8,Ft)):T("",!0),m(o)&&e.accept===".xml"?(f(),v("div",At,C[0]||(C[0]=[s("span",null,"已选择xml文件",-1)]))):T("",!0)],2)],32))}},Rt=w(Nt,[["__scopeId","data-v-f3a59af5"]]),Bt={class:"main_card edit_card"},Et={class:"card_title"},zt={class:"card_title"},Pt={class:"card_content"},Ht={class:"setting_item"},jt={class:"content flex-x-between"},Ot={class:"title"},Wt={class:"value"},Xt={class:"card_tips"},Gt={class:"setting_item"},Jt={class:"content flex-x-between"},Kt={class:"title"},Qt={class:"value"},Yt={class:"setting_item"},Zt={class:"content flex-x-between"},te={class:"title"},ee={key:0,class:"setting_item"},oe={class:"content flex-x-between"},se={class:"title"},le={class:"value"},ne={class:"setting_item"},ae={class:"content flex-x-between"},ie={class:"title"},ce={class:"value"},re={key:1,class:"setting_item"},ue={class:"content flex-x-between"},de={class:"title"},pe={key:2,class:"setting_item"},_e={class:"content flex-x-between"},me={class:"title"},he={__name:"edit_card",emits:["change"],setup(e,{emit:t}){const{t:n}=Z(),l=D(),o=t,i=b(["imageToLabel.edit.tranMode_off","imageToLabel.edit.tranMode_auto","imageToLabel.edit.tranMode_color"]),c=I(()=>i.value.map(u=>n(u)));function p(u){l.imageData=u,o("change")}const r=()=>{o("change")};return(u,h)=>(f(),v("div",Bt,[s("p",Et,d(u.$t("imageToLabel.edit.title_1")),1),$(Rt,{accept:"image/*",onChange:p,text:u.$t("imageToLabel.edit.select_image")},null,8,["text"]),s("p",zt,d(u.$t("imageToLabel.edit.title_2")),1),s("div",Pt,[s("div",Ht,[s("div",jt,[s("p",Ot,d(u.$t("imageToLabel.edit.imgw")),1),s("p",Wt,d(m(l).imageWidth),1)]),$(F,{modelValue:m(l).imageWidth,"onUpdate:modelValue":h[0]||(h[0]=a=>m(l).imageWidth=a),onTouchup:r,min:10,max:400,step:10},null,8,["modelValue"])]),s("div",Xt,[s("p",null,d(u.$t("imageToLabel.edit.imgw_tips")),1)]),s("div",Gt,[s("div",Jt,[s("p",Kt,d(u.$t("imageToLabel.edit.colorNum")),1),s("p",Qt,d(m(l).colorNum),1)]),$(F,{modelValue:m(l).colorNum,"onUpdate:modelValue":h[1]||(h[1]=a=>m(l).colorNum=a),onTouchup:r,min:1,max:10},null,8,["modelValue"])]),s("div",Yt,[s("div",Zt,[s("p",te,d(u.$t("imageToLabel.edit.colorAl")),1),$(kt,{modelValue:m(l).colorAlgorithm,"onUpdate:modelValue":h[2]||(h[2]=a=>m(l).colorAlgorithm=a),onChange:r},null,8,["modelValue"])])]),m(l).colorAlgorithm?(f(),v("div",ee,[s("div",oe,[s("p",se,d(u.$t("imageToLabel.edit.colorin")),1),s("p",le,d(m(l).colorIntensity),1)]),$(F,{modelValue:m(l).colorIntensity,"onUpdate:modelValue":h[3]||(h[3]=a=>m(l).colorIntensity=a),onTouchup:r,min:10,max:200,step:1},null,8,["modelValue"])])):T("",!0),s("div",ne,[s("div",ae,[s("p",ie,d(u.$t("imageToLabel.edit.tranValue")),1),s("p",ce,d(m(l).colorDetail),1)]),$(F,{modelValue:m(l).colorDetail,"onUpdate:modelValue":h[4]||(h[4]=a=>m(l).colorDetail=a),onTouchup:r,min:0,max:200,step:1},null,8,["modelValue"])]),m(l).imageColors.length!==0?(f(),v("div",re,[s("div",ue,[s("p",de,d(u.$t("imageToLabel.edit.tranMode")),1),$(J,{modelValue:m(l).transMode,"onUpdate:modelValue":h[5]||(h[5]=a=>m(l).transMode=a),onChange:r,"value-list":c.value},null,8,["modelValue","value-list"])])])):T("",!0),m(l).transMode==2?(f(),v("div",pe,[s("div",_e,[s("p",me,d(u.$t("imageToLabel.edit.tranColor")),1),$(J,{modelValue:m(l).transColor,"onUpdate:modelValue":h[6]||(h[6]=a=>m(l).transColor=a),onChange:r,"value-list":m(l).imageColors,"is-color":!0},null,8,["modelValue","value-list"])])])):T("",!0)])]))}},ge=w(he,[["__scopeId","data-v-551b1fa0"]]),fe={class:"main_card result_card"},ve={class:"card_title"},$e={class:"result_box flex-x-y"},Ce=["src"],xe={__name:"result_card",setup(e){const t=D(),n=I(()=>{if(t.newImageData!==null)return t.newImageData.toDataURL()}),l=o=>{};return(o,i)=>(f(),v("div",fe,[s("p",ve,d(o.$t("imageToLabel.result.title_1")),1),s("div",$e,[n.value?(f(),v("img",{key:0,src:n.value,onClick:l,alt:""},null,8,Ce)):T("",!0)])]))}},be=w(xe,[["__scopeId","data-v-01d871a0"]]),we={class:"qi-toast"},ye={__name:"Toast",props:{message:{type:String,default:"提示文本"},icon:{type:String,default:""}},setup(e){return(t,n)=>(f(),v("div",we,[e.icon?(f(),E(M,{key:0,icon:e.icon},null,8,["icon"])):T("",!0),s("span",null,d(e.message),1)]))}},Te=w(ye,[["__scopeId","data-v-48078998"]]);let K=null,L=null;function Q(e,t=1500){L=document.querySelector(".toast-container"),L?N(null,L):(L=document.createElement("div"),L.setAttribute("class","toast-container"),document.querySelector("body").appendChild(L));const n=$(Te,{message:e});N(n,L),clearTimeout(K),K=setTimeout(()=>{N(null,L)},t)}const Le={key:1},ke={__name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"default"},icon:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const n=e,l=I(()=>[`qi-button__${n.type}`]),o=t,i=c=>{o("click")};return(c,p)=>(f(),v("div",{class:B(["qi-button flex-x-y",l.value]),onClick:i},[e.icon?(f(),E(M,{key:0,icon:e.icon,size:"1.3em"},null,8,["icon"])):T("",!0),e.text?(f(),v("span",Le,d(e.text),1)):T("",!0)],2))}},U=w(ke,[["__scopeId","data-v-27ac9df2"]]),Ve={class:"top_box flex-x-y"},Ie={class:"title"},De={class:"content"},Ue={__name:"Popup",props:{title:{type:String,default:"弹窗标题"}},setup(e,{expose:t}){const n=b(!1);b(!1);function l(){n.value=!0}function o(){n.value=!1}return t({show:l}),(i,c)=>(f(),E(P,{name:"fade-bg"},{default:A(()=>[S(s("div",{class:"popup-bg",onClick:o},[$(P,{name:"fade-popup"},{default:A(()=>[S(s("div",{class:"popup",onClick:c[0]||(c[0]=nt(()=>{},["stop"]))},[s("div",Ve,[s("p",Ie,d(e.title),1),s("div",{class:"close_button flex-x-y",onClick:o},"X")]),s("div",De,[at(i.$slots,"default",{},void 0,!0)])],512),[[H,n.value]])]),_:3})],512),[[H,n.value]])]),_:3}))}},Y=w(Ue,[["__scopeId","data-v-ec449a0a"]]),Se={},Me={class:"content"},qe={class:"popup_title"},Fe={class:"popup_text"},Ae={class:"popup_title"},Ne={class:"popup_text"},Re={class:"popup_text"},Be={class:"popup_text"},Ee={class:"popup_text"},ze={class:"popup_title"},Pe={class:"popup_text"},He={class:"popup_title"},je={class:"popup_text"},Oe={class:"popup_text"};function We(e,t){return f(),v("div",Me,[s("p",qe,d(e.$t("popup_howToUse.title_1")),1),s("p",Fe,d(e.$t("popup_howToUse.text_1")),1),s("p",Ae,d(e.$t("popup_howToUse.title_2")),1),s("p",Ne,d(e.$t("popup_howToUse.text_2")),1),s("p",Re,d(e.$t("popup_howToUse.text_3")),1),s("p",Be,d(e.$t("popup_howToUse.text_4")),1),s("p",Ee,d(e.$t("popup_howToUse.text_5")),1),s("p",ze,d(e.$t("popup_howToUse.title_3")),1),s("p",Pe,d(e.$t("popup_howToUse.text_6")),1),s("p",He,d(e.$t("popup_howToUse.title_4")),1),s("p",je,d(e.$t("popup_howToUse.text_7")),1),s("p",Oe,d(e.$t("popup_howToUse.text_8")),1)])}const Xe=w(Se,[["render",We]]),Ge={class:"content"},Je={class:"input_box flex-x"},Ke={class:"text_conut text_show flex-x-y"},Qe={key:0},Ye={class:"input_list"},Ze={class:"input_num text_show flex-x-y"},to=["value"],eo={__name:"manualCopy",setup(e){const t=D(),n=b(""),l=b([]);it(()=>t.resultCode,()=>{n.value="",l.value=[]});const o=I(()=>n.value.length),i=()=>{l.value=c(t.resultCode,o.value)};function c(p,r){const u=[];let h=0;for(;h<p.length;){const a=h+r;u.push(p.substring(h,a)),h=a}return u}return(p,r)=>(f(),v("div",Ge,[r[4]||(r[4]=s("p",{class:"popup_title"},"完整代码",-1)),S(s("textarea",{"onUpdate:modelValue":r[0]||(r[0]=u=>m(t).resultCode=u)},null,512),[[j,m(t).resultCode]]),r[5]||(r[5]=s("p",{class:"popup_title"},"手机剪切板有限制？",-1)),r[6]||(r[6]=s("p",{class:"popup_text"},"把上面的代码复制后粘贴到输入框内↓",-1)),s("div",Je,[S(s("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=u=>n.value=u),onInput:i},null,544),[[j,n.value]]),s("div",Ke,d(o.value),1)]),l.value.length!==0?(f(),v("div",Qe,[r[2]||(r[2]=s("p",{class:"popup_title"},"分段复制",-1)),r[3]||(r[3]=s("p",{class:"popup_text"},"请按顺序复制到 Label 零件中。",-1)),s("div",Ye,[(f(!0),v(tt,null,et(l.value,(u,h)=>(f(),v("div",{class:"input_box flex-x",key:h},[s("div",Ze,d(h+1),1),s("input",{type:"text",value:u},null,8,to)]))),128))])])):T("",!0)]))}},oo=w(eo,[["__scopeId","data-v-adc376cf"]]),so={class:"main_card color_card"},lo={class:"card_title"},no={class:"color_box flex-y"},ao={class:"color_list"},io=["onClick"],co={class:"card_content"},ro={class:"color_hex_text flex-x-y"},uo={class:"edit_buttons"},po={class:"card_tips"},_o={class:"card_title"},mo={class:"card_content export_buttons"},ho={__name:"color_card",setup(e){const t=D();ct();const{t:n}=Z(),l=b(null),o=b(null);function i(){for(let g=0;g<25;g++)t.colorList.push({id:g,color:"#000000"})}rt(()=>{t.colorList.length===0&&i()});const c=(g,_)=>{t.activeColor=_},p=g=>{const _=t.activeColor;if(g===0){if(_>0){const C=t.colorList.splice(_,1)[0];t.colorList.splice(_-1,0,C),t.activeColor-=1}}else if(_<t.colorList.length-1){const C=t.colorList.splice(_,1)[0];t.colorList.splice(_+1,0,C),t.activeColor+=1}};let r=I(()=>{var g;return(g=t.colorList[t.activeColor])==null?void 0:g.color.toUpperCase()});const u=()=>{t.resultCode=X(),t.resultCode&&(navigator.clipboard?(navigator.clipboard.writeText(t.resultCode),Q(n("toast.copy"))):Q(n("toast.copy_err")))},h=()=>{t.resultCode=X(),t.resultCode&&o.value.show()},a=()=>{l.value.show()};return(g,_)=>(f(),v("div",so,[s("p",lo,d(g.$t("imageToLabel.color.title_1")),1),s("div",no,[s("div",ao,[(f(!0),v(tt,null,et(m(t).colorList,(C,y)=>(f(),v("div",{key:y,class:B({color_item:!0,active:y==m(t).activeColor}),style:R(`background: ${C.color}`),onClick:V=>c(C,y)},null,14,io))),128))])]),s("div",co,[s("div",ro,[s("span",null,d(m(r)),1)]),s("div",uo,[$(U,{type:"default",icon:"left",onClick:_[0]||(_[0]=C=>p(0))}),$(U,{type:"default",icon:"right",onClick:_[1]||(_[1]=C=>p(1))})]),s("div",po,[s("p",null,d(g.$t("imageToLabel.color.color_tips")),1)])]),s("p",_o,d(g.$t("imageToLabel.color.title_2")),1),s("div",mo,[$(U,{type:"primary",text:g.$t("imageToLabel.color.btn_copy"),onClick:u},null,8,["text"]),$(U,{type:"default",text:g.$t("imageToLabel.color.btn_m_copy"),onClick:h},null,8,["text"]),$(U,{type:"default",text:g.$t("imageToLabel.color.btn_help"),onClick:a},null,8,["text"])]),$(Y,{ref_key:"howToUsePopupRef",ref:l,title:g.$t("popup_howToUse.main_title")},{default:A(()=>[$(Xe)]),_:1},8,["title"]),$(Y,{ref_key:"manualCopyPopupRef",ref:o,title:g.$t("popup_manualCopy.main_title")},{default:A(()=>[$(oo)]),_:1},8,["title"])]))}},go=w(ho,[["__scopeId","data-v-b1c637e8"]]),fo={class:"imagetolabel-page"},vo={class:"container"},$o={__name:"ImageToLabel",setup(e){const t=D(),n=b(null),l=()=>{if(t.imageData==null)return;const o=new Image;o.src=t.imageData,o.onload=function(){const i=ht(o);t.newImageData=i.newCanvas}};return ut(()=>{t.reset()}),(o,i)=>(f(),v("div",fo,[$(dt,{title:o.$t("imageToLabel.title")},null,8,["title"]),s("div",vo,[$(ge,{onChange:l}),$(be,{ref_key:"result_card",ref:n},null,512),$(go)])]))}},wo=w($o,[["__scopeId","data-v-4491cd73"]]);export{wo as default};