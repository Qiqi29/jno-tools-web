import{Q as h}from"./Topbar-BOt_vrKI.js";import{i as c}from"./Icon-Dc4HyyrF.js";import{_ as r,o,c as n,a as t,b as s,t as l,u as p,d as _,e as m}from"./index-BZ2-PfWf.js";const b={class:"footer flex-x"},f={class:"left_box"},$={class:"text flex-x"},v=["innerHTML"],y={class:"text flex-x"},k={__name:"Footer",setup(e){return(i,a)=>(o(),n("div",b,[t("div",f,[a[0]||(a[0]=t("p",{class:"web_title"},"JNO Toolset",-1)),t("div",$,[s(c,{icon:"mit"}),t("div",{innerHTML:i.$t("footer.mit")},null,8,v)]),t("div",y,[s(c,{icon:"copyright"}),t("span",null,l(i.$t("footer.copyright")),1)])]),a[1]||(a[1]=t("div",{class:"right_box"},null,-1))]))}},w=r(k,[["__scopeId","data-v-ae70e938"]]),S={class:"tool_image"},T={class:"image"},x=["src"],j={class:"content"},z={class:"title"},V={class:"name"},H={__name:"Tool_card",props:{link:{type:String,default:"/"},blank:{type:Boolean,default:!1},title:{type:String,default:"卡片标题"},name:{type:String,default:"作者"},image:{type:String,default:""}},setup(e){const i=p(),a=e,g=()=>{a.blank?window.open(a.link):i.push(a.link)};return(tt,et)=>(o(),n("div",{class:"tool_card",onClick:g},[t("div",S,[t("div",T,[t("img",{src:e.image,alt:""},null,8,x)])]),t("div",j,[t("p",z,l(e.title),1),t("p",V,l(e.name),1)])]))}},d=r(H,[["__scopeId","data-v-8e770540"]]),M={class:"member_card flex-y"},Q=["src"],C={class:"name"},I={class:"introduce"},L={class:"social_links"},N=["href"],q=["href"],B=["href"],F={__name:"Member_card",props:{name:{type:String,default:"你的名字"},introduce:{type:String,default:""},avatar:{type:String,default:""},jno:{type:String,default:""},bilibili:{type:String,default:""},github:{type:String,default:""},youtube:{type:String,default:""}},setup(e){return(i,a)=>(o(),n("div",M,[t("img",{class:"avatar",src:e.avatar,alt:""},null,8,Q),t("p",C,l(e.name),1),t("p",I,l(e.introduce),1),t("div",L,[e.jno?(o(),n("a",{key:0,href:e.jno,target:"_blank"},[s(c,{icon:"rocket",size:"1.5em"})],8,N)):_("",!0),e.bilibili?(o(),n("a",{key:1,href:e.bilibili,target:"_blank"},[s(c,{icon:"bilibili",size:"1.5em"})],8,q)):_("",!0),e.github?(o(),n("a",{key:2,href:e.github,target:"_blank"},[s(c,{icon:"github_fill",size:"1.5em"})],8,B)):_("",!0)])]))}},u=r(F,[["__scopeId","data-v-aba54623"]]),J={class:"team_card"},D={class:"main_title"},R={class:"card_list"},E={__name:"TeamView",setup(e){return(i,a)=>(o(),n("div",J,[t("div",D,[t("p",null,l(i.$t("home.team_title")),1)]),t("div",R,[s(u,{name:"琦琦",introduce:"我们的目标是星辰大海",avatar:"https://img.picgo.net/2024/12/14/2921809d8ae9b27884.jpeg",jno:"https://www.simplerockets.com/u/TheQiqi",bilibili:"https://space.bilibili.com/401652755",github:"https://github.com/Qiqi29"}),s(u,{name:"所罗门老狗",introduce:"屑狗",avatar:"https://img.picgo.net/2024/12/14/YF-70043c16ae9f3f23fd2.png",bilibili:"https://space.bilibili.com/176089527"})])]))}},O=r(E,[["__scopeId","data-v-52d04a12"]]),P="/jno-tools-web/assets/image_label-VCRgyJFK.png",K="/jno-tools-web/assets/image_carft-CpQR4bhf.png",Y="/jno-tools-web/assets/image_vizzy-DVzjo4P2.png",A={class:"home-page"},G={class:"container"},U={class:"hello_content flex-y"},W=["innerHTML"],X={class:"card_list"},Z={__name:"Home",setup(e){return(i,a)=>(o(),n("div",A,[s(h,{title:i.$t("web.title")},null,8,["title"]),t("div",G,[t("div",U,[a[0]||(a[0]=t("p",{class:"text"},"Juno: New Origins",-1)),t("p",{class:"title",innerHTML:i.$t("home.mainTitle")},null,8,W)]),t("div",X,[s(d,{link:"/tool/imagetolabel",title:i.$t("imageToLabel.title"),name:"琦琦",image:m(P)},null,8,["title","image"]),s(d,{link:"/tool/carfteditor",title:i.$t("carftEditor.title"),name:"琦琦 / JasonCaesar",image:m(K)},null,8,["title","image"]),s(d,{link:"https://www.yuque.com/yuqueyonghuslrsu6/kd8bhu",blank:"",title:i.$t("cnDoc.title"),name:"琦琦 / 所罗门老狗",image:m(Y)},null,8,["title","image"]),s(d,{title:i.$t("tools.empty"),name:"---",image:""},null,8,["title"])]),s(O)]),s(w)]))}},ot=r(Z,[["__scopeId","data-v-daa0c95a"]]);export{ot as default};
