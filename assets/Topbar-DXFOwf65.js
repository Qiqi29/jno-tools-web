import{_ as d,k as v,i as f,o as i,c as r,b as l,w as x,a as t,t as c,e as b,r as g}from"./index-CoHW37Vb.js";import{i as _}from"./Icon-KR104nX5.js";const k="/jno-tools-web/assets/Logo-B77ZJ1CI.png",h={class:"topbar flex-x-between"},w={class:"title"},y={class:"nav_list flex-x"},C={class:"item flex-x-y",href:"https://www.simplerockets.com/",target:"_blank"},$={key:0,class:"menu"},B={class:"menu_box"},I={class:"item flex-x-y",href:"https://github.com/Qiqi29/jno-tools",target:"_blank"},V={__name:"Topbar",props:{title:{type:String,default:""}},setup(m){const{locale:u}=v(),o=f(!1),a=s=>{u.value=s,localStorage.setItem("locale",s)};return(s,e)=>{const p=g("router-link");return i(),r("div",h,[l(p,{to:"/",class:"logo_box flex-x"},{default:x(()=>[e[4]||(e[4]=t("img",{class:"icon",src:k,alt:""},null,-1)),t("p",w,c(m.title),1)]),_:1}),t("div",y,[t("a",C,[t("span",null,c(s.$t("topbar.jno")),1)]),t("div",{class:"item flex-x-y",onMouseover:e[2]||(e[2]=n=>o.value=!0),onMouseleave:e[3]||(e[3]=n=>o.value=!1)},[l(_,{icon:"langurage"}),o.value?(i(),r("div",$,[t("div",B,[t("div",{class:"menu_item",onClick:e[0]||(e[0]=n=>a("zh"))},"简体中文"),t("div",{class:"menu_item",onClick:e[1]||(e[1]=n=>a("en"))},"English")])])):b("",!0)],32),t("a",I,[l(_,{icon:"github"})])])])}}},N=d(V,[["__scopeId","data-v-18fa8eb8"]]);export{N as t};
