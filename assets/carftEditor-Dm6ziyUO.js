import{g as k,_ as w,r as y,B as N,c as d,b as n,a as t,A as b,t as m,f as u,d as v,o as _}from"./index-C18C_xQ6.js";import{Q as h}from"./Topbar-BWAsgqvs.js";import{s as V,u as z}from"./UploadFile-BW4RMuCM.js";import{i as C}from"./Icon-rIM7ThDM.js";import{b as S}from"./Button-1v-q9RM0.js";const g={colorNum:0},D=k("carft_date",{state:()=>({carftData:null,...g}),actions:{reset(l=!1){Object.assign(this,g),l&&(this.carftData=null)}}}),c=D();function E(){if(!c.carftData)return;const l=c.carftData.data;let o=atob(l.split(",")[1].replace(/^77u\//,""));const s=new DOMParser().parseFromString(o,"text/xml");if(c.colorNum!==0){const r=s.querySelector("DesignerSettings Theme");for(let e=0;e<c.colorNum;e++){const a=s.createElement("Material");a.setAttribute("name","New Color"),a.setAttribute("color","#FFFFFF"),a.setAttribute("m",0),a.setAttribute("s",0),r.appendChild(a)}}const f=new XMLSerializer().serializeToString(s),p=btoa(f);F(p)}function F(l){const o=document.createElement("a");o.href=`data:text/xml;base64,77u/${l}`,o.download=`${c.carftData.name}.xml`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}const B={class:"sr2ToolKit-page"},A={class:"container"},M={class:"main_card carft_card"},T={class:"card_content card_buttons"},$={class:"main_card tool_card"},L={class:"tool_list"},X={class:"name"},U={key:0,class:"edited_tips"},O={class:"name"},Q={class:"main_card edit_card"},j={class:"card_title"},q={class:"edit_content"},I={key:0},K={class:"setting_item"},P={class:"content flex-x-between"},G={class:"value"},H={key:1},J={__name:"carftEditor",setup(l){const o=D(),i=y(0),s=[{name:"添加颜色格",icon:"color"},{name:"作品缩放",icon:"size"}];function x(r){o.carftData=r}const f=()=>{E()},p=()=>{o.reset()};return N(()=>{o.reset(!0)}),(r,e)=>(_(),d("div",B,[n(h,{title:r.$t("carftEditor.title")},null,8,["title"]),t("div",A,[t("div",M,[e[3]||(e[3]=t("p",{class:"card_title"},"作品存档",-1)),n(z,{accept:".xml",onChange:x,text:"点击选择存档，或拖拽到此处"}),e[4]||(e[4]=t("p",{class:"card_title"},"导出",-1)),t("div",T,[n(S,{type:"default",text:"重置所有设置",onClick:p}),n(S,{type:"primary",text:"保存存档",onClick:f})])]),t("div",$,[e[5]||(e[5]=t("p",{class:"card_title"},"选择工具",-1)),t("div",L,[t("div",{class:b(["tool_item flex-x",{active:i.value==0}]),onClick:e[0]||(e[0]=a=>i.value=0)},[n(C,{icon:s[0].icon,size:"1.7em"},null,8,["icon"]),t("p",X,m(s[0].name),1),u(o).colorNum!==0?(_(),d("div",U,"已编辑")):v("",!0)],2),t("div",{class:b(["tool_item flex-x",{active:i.value==1}]),onClick:e[1]||(e[1]=a=>i.value=1)},[n(C,{icon:s[1].icon,size:"1.7em"},null,8,["icon"]),t("p",O,m(s[1].name),1)],2)])]),t("div",Q,[t("p",j,m(s[i.value].name),1),t("div",q,[i.value==0?(_(),d("div",I,[t("div",K,[t("div",P,[e[6]||(e[6]=t("p",{class:"title"},"颜色格数量",-1)),t("p",G,m(u(o).colorNum),1)]),n(V,{modelValue:u(o).colorNum,"onUpdate:modelValue":e[2]||(e[2]=a=>u(o).colorNum=a),min:0,max:25},null,8,["modelValue"])]),e[7]||(e[7]=t("div",{class:"card_tips"},[t("p",null,"游戏最多支持 50 个颜色格，因此最多只能增加 25 个，多余的不会生效。")],-1))])):v("",!0),i.value==1?(_(),d("div",H,e[8]||(e[8]=[t("p",null,"正在制作中...",-1)]))):v("",!0)])])])]))}},et=w(J,[["__scopeId","data-v-e8196d4c"]]);export{et as default};