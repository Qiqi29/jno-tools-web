import{_ as d,h as v,r as f,o as i,c as r,b as l,l as x,a as t,t as c,d as b,C as g}from"./index-C18C_xQ6.js";import{i as _}from"./Icon-rIM7ThDM.js";const h="/jno-tools-web/assets/Logo-B77ZJ1CI.png",k={class:"topbar flex-x-between"},w={class:"title"},C={class:"nav_list flex-x"},y={class:"item flex-x-y",href:"https://www.simplerockets.com/",target:"_blank"},$={key:0,class:"menu"},B={class:"menu_box"},I={class:"item flex-x-y",href:"https://github.com/Qiqi29/jno-tools",target:"_blank"},V={__name:"Topbar",props:{title:{type:String,default:""}},setup(m){const{locale:u}=v(),o=f(!1),a=s=>{u.value=s,localStorage.setItem("locale",s)};return(s,e)=>{const p=g("router-link");return i(),r("div",k,[l(p,{to:"/",class:"logo_box flex-x"},{default:x(()=>[e[4]||(e[4]=t("img",{class:"icon",src:h,alt:""},null,-1)),t("p",w,c(m.title),1)]),_:1}),t("div",C,[t("a",y,[t("span",null,c(s.$t("topbar.jno")),1)]),t("div",{class:"item flex-x-y",onMouseover:e[2]||(e[2]=n=>o.value=!0),onMouseleave:e[3]||(e[3]=n=>o.value=!1)},[l(_,{icon:"langurage"}),o.value?(i(),r("div",$,[t("div",B,[t("div",{class:"menu_item",onClick:e[0]||(e[0]=n=>a("zh"))},"简体中文"),t("div",{class:"menu_item",onClick:e[1]||(e[1]=n=>a("en"))},"English")])])):b("",!0)],32),t("a",I,[l(_,{icon:"github"})])])])}}},N=d(V,[["__scopeId","data-v-18fa8eb8"]]);export{N as Q};