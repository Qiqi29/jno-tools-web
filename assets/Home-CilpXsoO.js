import{t as u}from"./Topbar-DXFOwf65.js";import{i as c}from"./Icon-KR104nX5.js";import{_ as r,o as a,c as l,a as t,b as i,t as n,d as h,w as p,r as g,e as d,f as b,u as f}from"./index-CoHW37Vb.js";const $={class:"footer flex-x"},v={class:"left_box"},y={class:"text flex-x"},k=["innerHTML"],w={class:"text flex-x"},x={__name:"Footer",setup(e){return(s,o)=>(a(),l("div",$,[t("div",v,[o[0]||(o[0]=t("p",{class:"web_title"},"JNO Toolset",-1)),t("div",y,[i(c,{icon:"mit"}),t("div",{innerHTML:s.$t("footer.mit")},null,8,k)]),t("div",w,[i(c,{icon:"copyright"}),t("span",null,n(s.$t("footer.copyright")),1)])]),o[1]||(o[1]=t("div",{class:"right_box"},null,-1))]))}},S=r(x,[["__scopeId","data-v-ae70e938"]]),T={class:"tool_card"},V={class:"tool_image"},N={class:"image"},j=["src"],B={class:"content"},I={class:"title"},C={class:"name"},H={__name:"Tool_card",props:{link:{type:String,default:"/"},title:{type:String,default:"卡片标题"},name:{type:String,default:"作者"},image:{type:String,default:""}},setup(e){return(s,o)=>{const m=g("router-link");return a(),h(m,{to:e.link},{default:p(()=>[t("div",T,[t("div",V,[t("div",N,[t("img",{src:e.image,alt:""},null,8,j)])]),t("div",B,[t("p",I,n(e.title),1),t("p",C,n(e.name),1)])])]),_:1},8,["to"])}}},_=r(H,[["__scopeId","data-v-050f9069"]]),M={class:"member_card flex-y"},Q={class:"name"},z={class:"introduce"},L={class:"social_links"},q=["href"],F=["href"],J=["href"],O={__name:"Member_card",props:{avatar:{type:String,default:""},name:{type:String,default:"你的名字"},introduce:{type:String,default:""},jno:{type:String,default:""},bilibili:{type:String,default:""},github:{type:String,default:""},youtube:{type:String,default:""}},setup(e){return(s,o)=>(a(),l("div",M,[o[0]||(o[0]=t("img",{class:"avatar",src:"https://avatars.githubusercontent.com/u/112358908?v=4",alt:""},null,-1)),t("p",Q,n(e.name),1),t("p",z,n(e.introduce),1),t("div",L,[e.jno?(a(),l("a",{key:0,href:e.jno,target:"_blank"},[i(c,{icon:"rocket",size:"1.5em"})],8,q)):d("",!0),e.bilibili?(a(),l("a",{key:1,href:e.bilibili,target:"_blank"},[i(c,{icon:"bilibili",size:"1.5em"})],8,F)):d("",!0),e.github?(a(),l("a",{key:2,href:e.github,target:"_blank"},[i(c,{icon:"github_fill",size:"1.5em"})],8,J)):d("",!0)])]))}},A=r(O,[["__scopeId","data-v-ee49bb45"]]),D={class:"team_card"},E={class:"main_title"},P={class:"card_list"},G={__name:"TeamView",setup(e){return(s,o)=>(a(),l("div",D,[t("div",E,[t("p",null,n(s.$t("home.team_title")),1)]),t("div",P,[i(A,{name:"琦琦",introduce:"我们的目标是星辰大海",jno:"https://www.simplerockets.com/u/TheQiqi",avatar:"https://avatars.githubusercontent.com/u/112358908?v=4",bilibili:"https://space.bilibili.com/401652755",github:"https://github.com/Qiqi29"})])]))}},K=r(G,[["__scopeId","data-v-eb1c1028"]]),R="/jno-tools-web/assets/image_label-CQPydABv.png",U={class:"home-page"},W={class:"container"},X={class:"hello_content flex-y"},Y={class:"title"},Z={class:"card_list"},tt={__name:"Home",setup(e){return(s,o)=>(a(),l("div",U,[i(u,{title:s.$t("web.title")},null,8,["title"]),t("div",W,[t("div",X,[o[0]||(o[0]=t("p",{class:"text"},"Juno: New Origins",-1)),t("p",Y,[b(n(s.$t("home.title1")),1),t("span",null,n(s.$t("home.title2")),1)])]),t("div",Z,[i(_,{link:"/tool/imagetolabel",title:s.$t("imageToLabel.title"),name:"琦琦",image:f(R)},null,8,["title","image"]),i(_,{title:s.$t("tools.empty"),name:"---",image:""},null,8,["title"]),i(_,{title:s.$t("tools.empty"),name:"---",image:""},null,8,["title"]),i(_,{title:s.$t("tools.empty"),name:"---",image:""},null,8,["title"])]),i(K)]),i(S)]))}},ot=r(tt,[["__scopeId","data-v-18411a29"]]);export{ot as default};