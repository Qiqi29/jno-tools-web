import{u as L}from"./label_data-C62r2sWf.js";import{i as N,t as G}from"./Topbar-D0YM2jRp.js";import{_ as v,f as T,o as p,c as _,a as i,n as B,g as H,d as g,t as y,u as d,h as b,b as j,i as W,j as w,k as K,l as O,F as X,m as J}from"./index-D_0Oy05e.js";function M(e){let t=e;typeof e=="string"&&(t=e.split(",").map(a=>parseInt(a,10)));const n=a=>{const o=a.toString(16);return o.length===1?"0"+o:o};return"#"+n(t[0])+n(t[1])+n(t[2])}function Q(e,t,n,a,o){const c=(e-t)/(n-t),r=a+c*(o-a);return Math.min(o,Math.max(a,r))}const h=L(),Y=["#000000","#010101","#020202","#030303","#040404","#050505","#060606","#070707","#080808","#090909","#0A0A0A","#0B0B0B","#0C0C0C","#0D0D0D","#0E0E0E","#0F0F0F","#101010","#111111","#121212","#131313","#141414","#151515","#161616","#171717","#181818"];function Z(e,t){const n=document.createElement("canvas"),a=n.getContext("2d"),o=t/e.width*e.height;return n.width=t,n.height=o,a.drawImage(e,0,0,t,o),n}function tt(e){const t=Z(e,h.imageWidth),n=t.getContext("2d",{willReadFrequently:!0}),a=n.getImageData(0,0,t.width,t.height),o=a.data,c={};for(let l=0;l<o.length;l+=4){const m=o[l],$=o[l+1],D=o[l+2];if(o[l+3]===0)continue;const V=`${m},${$},${D}`;c[V]?c[V]++:c[V]=1}const s=Object.entries(c).sort((l,m)=>m[1]-l[1]).slice(0,h.colorNum).map(l=>l[0]);h.imageColors=s,nt(s);for(let l=0;l<o.length;l+=4){const m=o[l],$=o[l+1],D=o[l+2],q=o[l+3];if(q===0)continue;const V=`${m},${$},${D}`,S=et(V,s);o[l]=I(S)[0],o[l+1]=I(S)[1],o[l+2]=I(S)[2],o[l+3]=q<h.colorDetail?0:255,h.transMode===2&&S==h.imageColors[h.transColor]&&(o[l+3]=0)}h.transMode===1&&(st(1,1,[0,0,0,0],t,o),n.putImageData(a,0,0));const u=document.createElement("canvas");return u.width=t.width,u.height=t.height,u.getContext("2d").putImageData(a,0,0),{newCanvas:u,topColors:s}}function et(e,t){let n=null,a=1/0;const o=I(e);return t.forEach(c=>{const r=I(c),s=ot(o,r);s<a&&(a=s,n=c)}),n}function I(e){return e.split(",").map(t=>parseInt(t,10))}function ot(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2))}function nt(e){for(let t=0;t<25;t++)h.colorList[t].color="#000000";for(let t=0;t<10;t++)e[t]&&(h.colorList[t+15].color=M(e[t]))}function st(e,t,n,a,o){const c=A(e,t,a,o),r=[[e,t]];let s;for(;r.length;){if(s=r.pop(),e=s[0],t=s[1],e<0||e>=a.width||t<0||t>=a.height)continue;let u=A(e,t,a,o);if(!lt(u,c))continue;let f=(e+t*a.width)*4;o.set(n,f),r.push([e+1,t]),r.push([e-1,t]),r.push([e,t+1]),r.push([e,t-1])}}function A(e,t,n,a){var o=(e+t*n.width)*4;return[a[o],a[o+1],a[o+2],a[o+3]]}function lt(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function F(){const e=h.newImageData;if(e==null)return;let t="<mspace=0.5><line-height=0.5><size=1.6>";const o=e.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e.width,e.height).data;let c=null;for(let r=0;r<o.length;r+=4){const s=o[r],u=o[r+1],f=o[r+2],l=o[r+3],m=`${s},${u},${f}`;c===null&&(c=m,l!==0&&(t+=`<${R(m)}>`)),m!==c&&l!==0&&(t+=`<${R(m)}>`,c=m),l===0?t+=" ":t+=".",r/4%e.width===0&&(t+="<br>")}return t}function R(e){const t=M(e),n=h.colorList.findIndex(o=>o.color===t);return Y[n]}const at={class:"qi-slider"},it=["min","max","step","value"],ct={__name:"Slider",props:{modelValue:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,a=t,o=r=>{const s=parseInt(r.target.value,10);a("update:modelValue",s),a("change")},c=T(()=>Q(n.modelValue,n.min,n.max,0,100));return(r,s)=>(p(),_("div",at,[i("input",{type:"range",min:e.min,max:e.max,step:e.step,value:e.modelValue,onInput:o,style:B(`background-size: ${c.value}% 100%`)},null,44,it)]))}},E=v(ct,[["__scopeId","data-v-34d3e4cc"]]),rt={class:"qi-select flex-x-between"},ut={class:"value_text"},dt={key:0,class:"text"},pt={__name:"Select",props:{modelValue:{type:Number,required:!0},valueList:{type:Array,default:()=>["开启","关闭"]},isColor:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){const n=e,a=t,o=H(n.modelValue),c=r=>{r===0?o.value=o.value<=0?n.valueList.length-1:o.value-1:o.value=o.value>=n.valueList.length-1?0:o.value+1,a("update:modelValue",o.value),a("change")};return(r,s)=>(p(),_("div",rt,[i("div",{class:"button",onClick:s[0]||(s[0]=u=>c(0))},[g(N,{icon:"left",size:"1.5em"})]),i("div",ut,[e.isColor?(p(),_("div",{key:1,class:"color",style:B({backgroundColor:d(M)(e.valueList[e.modelValue])})},null,4)):(p(),_("span",dt,y(e.valueList[e.modelValue]),1))]),i("div",{class:"button",onClick:s[1]||(s[1]=u=>c(1))},[g(N,{icon:"right",size:"1.5em"})])]))}},z=v(pt,[["__scopeId","data-v-c1a26889"]]),mt={class:"main_card edit_card"},_t={class:"upload_image_box flex-x-y"},gt={key:0},ft=["src"],ht={class:"card_content"},vt={class:"setting_item"},Ct={class:"content flex-x-between"},xt={class:"value"},bt={class:"setting_item"},$t={class:"content flex-x-between"},yt={class:"value"},wt={class:"setting_item"},Vt={class:"content flex-x-between"},kt={class:"value"},It={class:"setting_item"},Lt={class:"content flex-x-between"},Dt={key:0,class:"setting_item"},St={class:"content flex-x-between"},Nt={__name:"edit_card",emits:["change"],setup(e,{emit:t}){const n=L(),a=t;function o(r){const s=r.target.files;if(s.length>0){const u=new FileReader;u.readAsDataURL(s[0]),u.onload=function(f){n.imageData=f.target.result,a("change")}}}const c=()=>{a("change")};return(r,s)=>(p(),_("div",mt,[s[11]||(s[11]=i("p",{class:"card_title"},"原始图片",-1)),i("label",null,[i("input",{type:"file",accept:"image/*",onChange:o},null,32),i("div",_t,[d(n).imageData?b("",!0):(p(),_("p",gt,"点击选择图片")),d(n).imageData?(p(),_("img",{key:1,src:d(n).imageData,alt:""},null,8,ft)):b("",!0)])]),s[12]||(s[12]=i("p",{class:"card_title"},"参数设置",-1)),i("div",ht,[i("div",vt,[i("div",Ct,[s[5]||(s[5]=i("p",{class:"title"},"图像宽度",-1)),i("p",xt,y(d(n).imageWidth),1)]),g(E,{modelValue:d(n).imageWidth,"onUpdate:modelValue":s[0]||(s[0]=u=>d(n).imageWidth=u),onChange:c,min:10,max:400,step:10},null,8,["modelValue"])]),s[10]||(s[10]=i("div",{class:"card_tips"},[i("p",null,"越宽越清晰，转换后的数据也越大。Lable 零件有字符数量限制，大概在 20000 字符之内。 ")],-1)),i("div",bt,[i("div",$t,[s[6]||(s[6]=i("p",{class:"title"},"颜色数量",-1)),i("p",yt,y(d(n).colorNum),1)]),g(E,{modelValue:d(n).colorNum,"onUpdate:modelValue":s[1]||(s[1]=u=>d(n).colorNum=u),onChange:c,min:1,max:10},null,8,["modelValue"])]),i("div",wt,[i("div",Vt,[s[7]||(s[7]=i("p",{class:"title"},"透明精细度",-1)),i("p",kt,y(d(n).colorDetail),1)]),g(E,{modelValue:d(n).colorDetail,"onUpdate:modelValue":s[2]||(s[2]=u=>d(n).colorDetail=u),onChange:c,min:0,max:200,step:1},null,8,["modelValue"])]),i("div",It,[i("div",Lt,[s[8]||(s[8]=i("p",{class:"title"},"透明模式",-1)),g(z,{modelValue:d(n).transMode,"onUpdate:modelValue":s[3]||(s[3]=u=>d(n).transMode=u),onChange:c,"value-list":d(n).transModeList},null,8,["modelValue","value-list"])])]),d(n).transMode==2?(p(),_("div",Dt,[i("div",St,[s[9]||(s[9]=i("p",{class:"title"},"透明颜色",-1)),g(z,{modelValue:d(n).transColor,"onUpdate:modelValue":s[4]||(s[4]=u=>d(n).transColor=u),onChange:c,"value-list":d(n).imageColors,"is-color":!0},null,8,["modelValue","value-list"])])])):b("",!0)])]))}},qt=v(Nt,[["__scopeId","data-v-b72383d7"]]),Et={class:"main_card result_card"},Tt={class:"result_box flex-x-y"},Bt=["src"],Mt={__name:"result_card",setup(e){const t=L(),n=T(()=>{if(t.newImageData!==null)return t.newImageData.toDataURL()});return(a,o)=>(p(),_("div",Et,[o[0]||(o[0]=i("p",{class:"card_title"},"转换预览",-1)),i("div",Tt,[n.value?(p(),_("img",{key:0,src:n.value,alt:""},null,8,Bt)):b("",!0)])]))}},At=v(Mt,[["__scopeId","data-v-52eb7791"]]),Ft={key:1},Rt={__name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"default"},icon:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const n=e,a=T(()=>[`qi-button__${n.type}`]),o=t,c=r=>{o("click")};return(r,s)=>(p(),_("div",{class:W(["qi-button flex-x-y",a.value]),onClick:c},[e.icon?(p(),j(N,{key:0,icon:e.icon,size:"1.3em"},null,8,["icon"])):b("",!0),e.text?(p(),_("span",Ft,y(e.text),1)):b("",!0)],2))}},k=v(Rt,[["__scopeId","data-v-b9cb7a56"]]),zt={class:"qi-toast"},Pt={__name:"Toast",props:{message:{type:String,default:"提示文本"},icon:{type:String,default:""}},setup(e){return(t,n)=>(p(),_("div",zt,[e.icon?(p(),j(N,{key:0,icon:e.icon},null,8,["icon"])):b("",!0),i("span",null,y(e.message),1)]))}},Ut=v(Pt,[["__scopeId","data-v-48078998"]]);let P=null,C=null;function U(e,t=1500){C=document.querySelector(".toast-container"),C?w(null,C):(C=document.createElement("div"),C.setAttribute("class","toast-container"),document.querySelector("body").appendChild(C));const n=g(Ut,{message:e});w(n,C),clearTimeout(P),P=setTimeout(()=>{w(null,C)},t)}const Ht={class:"qi-popup-box"},jt={class:"popup"},Wt={class:"top_box flex-x-y"},Gt={class:"title"},Kt=["innerHTML"],Ot={__name:"Popup",props:{title:{type:String,default:"弹窗标题"},text:{type:String,default:""}},setup(e){const t=()=>{Qt()};return(n,a)=>(p(),_("div",Ht,[i("div",jt,[i("div",Wt,[i("p",Gt,y(e.title),1),i("div",{class:"close_button flex-x-y",onClick:t},"X")]),e.text?(p(),_("div",{key:0,class:"content",innerHTML:e.text},null,8,Kt)):b("",!0)])]))}},Xt=v(Ot,[["__scopeId","data-v-7a243ba8"]]);let x=null;function Jt(e,t){x=document.querySelector(".popup-container"),x?w(null,x):(x=document.createElement("div"),x.setAttribute("class","popup-container"),document.querySelector("body").appendChild(x));const n=g(Xt,{title:e,text:t});w(n,x)}function Qt(){w(null,x)}const Yt={class:"main_card color_card"},Zt={class:"color_box flex-y"},te={class:"color_list"},ee=["onClick"],oe={class:"card_content"},ne={class:"edit_buttons"},se={class:"card_content export_buttons"},le={__name:"color_card",setup(e){const t=L(),n=K();function a(){for(let f=0;f<25;f++)t.colorList.push({id:f,color:"#000000"})}O(()=>{t.colorList.length===0&&a()});const o=(f,l)=>{t.activeColor=l},c=f=>{const l=t.activeColor;if(f===0){if(l>0){const m=t.colorList.splice(l,1)[0];t.colorList.splice(l-1,0,m),t.activeColor-=1}}else if(l<t.colorList.length-1){const m=t.colorList.splice(l,1)[0];t.colorList.splice(l+1,0,m),t.activeColor+=1}},r=()=>{t.resultCode=F(),t.resultCode&&(navigator.clipboard?(navigator.clipboard.writeText(t.resultCode),U("已复制代码")):U("复制失败，请手动复制"))},s=()=>{t.resultCode=F(),t.resultCode&&n.push("/tool/imagetolabel/copycode")},u=()=>{Jt("使用方法",`
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
    `)};return(f,l)=>(p(),_("div",Yt,[l[3]||(l[3]=i("p",{class:"card_title"},"颜色编辑",-1)),i("div",Zt,[i("div",te,[(p(!0),_(X,null,J(d(t).colorList,(m,$)=>(p(),_("div",{key:$,class:W({color_item:!0,active:$==d(t).activeColor}),style:B(`background: ${m.color}`),onClick:D=>o(m,$)},null,14,ee))),128))])]),i("div",oe,[i("div",ne,[g(k,{type:"default",icon:"left",onClick:l[0]||(l[0]=m=>c(0))}),g(k,{type:"default",icon:"right",onClick:l[1]||(l[1]=m=>c(1))})]),l[2]||(l[2]=i("div",{class:"card_tips"},[i("p",null,"这里的颜色顺序与游戏内一致，颜色不会保存在代码中，需要在游戏内对应位置修改颜色。")],-1))]),l[4]||(l[4]=i("p",{class:"card_title"},"导出",-1)),i("div",se,[g(k,{type:"primary",text:"复制代码",onClick:r}),g(k,{type:"default",text:"手动复制",onClick:s}),g(k,{type:"default",text:"使用方法",onClick:u})])]))}},ae=v(le,[["__scopeId","data-v-4749a1cd"]]),ie={class:"imagetolabel-page"},ce={class:"container"},re={__name:"ImageToLabel",setup(e){const t=L(),n=H(null),a=()=>{if(t.imageData==null)return;const o=new Image;o.src=t.imageData,o.onload=function(){const c=tt(o);t.newImageData=c.newCanvas}};return(o,c)=>(p(),_("div",ie,[g(G,{title:"图片转 Label"}),i("div",ce,[g(qt,{onChange:a}),g(At,{ref_key:"result_card",ref:n},null,512),g(ae)])]))}},me=v(re,[["__scopeId","data-v-631ad654"]]);export{me as default};
