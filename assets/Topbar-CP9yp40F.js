import{_ as m,o as l,c as a,a as e,n as f,h as v,g as x,b as c,w as g,t as _,i as b,r as h}from"./index-PSJH3TOm.js";const k="/jno-tools-web/assets/Logo-B77ZJ1CI.png",y={class:"icon"},w=["xlink:href"],$={__name:"Icon",props:{size:{type:String,default:"1.5em"},icon:{type:String,default:""},color:{type:String,default:"currentColor"}},setup(s){return(r,o)=>(l(),a("span",y,[e("i",{style:f({color:s.color,fontSize:s.size})},[(l(),a("svg",null,[e("use",{"xlink:href":`#icon-${s.icon}`},null,8,w)]))],4)]))}},d=m($,[["__scopeId","data-v-874bde7c"]]),S={class:"topbar flex-x-between"},C={class:"title"},I={class:"nav_list flex-x"},z={class:"item flex-x-y",href:"https://www.simplerockets.com/",target:"_blank"},B={key:0,class:"menu"},V={class:"menu_box"},M={class:"item flex-x-y",href:"https://github.com/Qiqi29",target:"_blank"},N={__name:"Topbar",props:{title:{type:String,default:""}},setup(s){const{locale:r}=v(),o=x(!1),u=n=>{r.value=n,localStorage.setItem("locale",n)};return(n,t)=>{const p=h("router-link");return l(),a("div",S,[c(p,{to:"/",class:"logo_box flex-x"},{default:g(()=>[t[4]||(t[4]=e("img",{class:"icon",src:k,alt:""},null,-1)),e("p",C,_(s.title),1)]),_:1}),e("div",I,[e("a",z,[e("span",null,_(n.$t("topbar.jno")),1)]),e("div",{class:"item flex-x-y",onMouseover:t[2]||(t[2]=i=>o.value=!0),onMouseleave:t[3]||(t[3]=i=>o.value=!1)},[c(d,{icon:"langurage"}),o.value?(l(),a("div",B,[e("div",V,[e("div",{class:"menu_item",onClick:t[0]||(t[0]=i=>u("zh"))},"简体中文"),e("div",{class:"menu_item",onClick:t[1]||(t[1]=i=>u("en"))},"English")])])):b("",!0)],32),e("a",M,[c(d,{icon:"github"})])])])}}},E=m(N,[["__scopeId","data-v-52b8e2c3"]]);export{d as i,E as t};
