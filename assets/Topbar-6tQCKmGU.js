import{_ as m,o as a,c,a as e,h as f,g as v,d as l,w as h,t as u,i as g,r as x}from"./index-Dy_dBH2U.js";const b="/jno-tools-web/assets/logo-DWJD8iz0.png",w=["width","height"],k=["xlink:href"],y={__name:"Icon",props:{size:{type:String,default:"1.5em"},icon:{type:String,default:""}},setup(s){return(r,o)=>(a(),c("svg",{class:"icon",width:s.size,height:s.size},[e("use",{"xlink:href":`#icon-${s.icon}`},null,8,k)],8,w))}},d=m(y,[["__scopeId","data-v-105a7380"]]),$={web:{title:"JNO - 工具集",description:"网站的描述",keywords:"网站关键字"}},z={class:"topbar flex-x-between"},C={class:"title"},I={class:"nav_list flex-x"},S={class:"item flex-x-y",href:"https://www.simplerockets.com/",target:"_blank"},N={key:0,class:"menu"},V={class:"menu_box"},B={class:"item flex-x-y",href:"https://github.com/Qiqi29",target:"_blank"},D={__name:"Topbar",props:{title:{type:String,default:$.web.title}},setup(s){const{locale:r}=f(),o=v(!1),_=n=>{r.value=n,localStorage.setItem("locale",n)};return(n,t)=>{const p=x("router-link");return a(),c("div",z,[l(p,{to:"/",class:"logo flex-x"},{default:h(()=>[t[4]||(t[4]=e("img",{class:"icon",src:b,alt:""},null,-1)),e("p",C,u(s.title),1)]),_:1}),e("div",I,[e("a",S,[e("span",null,u(n.$t("topbar.jno")),1)]),e("div",{class:"item flex-x-y",onMouseover:t[2]||(t[2]=i=>o.value=!0),onMouseleave:t[3]||(t[3]=i=>o.value=!1)},[l(d,{icon:"langurage"}),o.value?(a(),c("div",N,[e("div",V,[e("div",{class:"menu_item",onClick:t[0]||(t[0]=i=>_("zh"))},"简体中文"),e("div",{class:"menu_item",onClick:t[1]||(t[1]=i=>_("en"))},"English")])])):g("",!0)],32),e("a",B,[l(d,{icon:"github"})])])])}}},j=m(D,[["__scopeId","data-v-1404b739"]]);export{d as i,j as t};