import{r as v,p as h,d as f,P as $}from"./firebase.cf3d130a.js";import{_ as m}from"./index.f9619b2a.js";import{f as _,s as I,o,c as n,e as s,t as q,F as k,m as y,l as g,p as P,b,r as B,a as p,w as N,q as V,d as E}from"./vendor.51adeeb9.js";const i=a=>(P("data-v-757bf786"),a=a(),b(),a),j={key:0,class:"carousel"},F=i(()=>s("i",{class:"fa-solid fa-angle-left"},null,-1)),R=[F],A=["href"],D=["src"],L=i(()=>s("i",{class:"fa-solid fa-angle-right"},null,-1)),T=[L],z=["onClick"],G=i(()=>s("i",{class:"fa-solid fa-circle"},null,-1)),H=[G],J={setup(a){const t=_([]);(async()=>{(await v(h(f,"pop-post"))).forEach(d=>{t.value.push(d.data())})})();const e=_(0),c=I(()=>t.value.length-1),u=()=>{e.value>0?e.value--:e.value=c.value},l=()=>{e.value<c.value?e.value++:e.value=0},S=r=>{e.value=r};return(r,d)=>t.value[0]?(o(),n("div",j,[s("div",null,[s("button",{onClick:u},R),s("a",{href:t.value[e.value].link},[s("img",{src:t.value[e.value].figure,alt:""},null,8,D),s("h5",null,q(t.value[e.value].name),1)],8,A),s("button",{onClick:l},T)]),s("ul",null,[(o(!0),n(k,null,y(t.value,(x,w)=>(o(),n("li",{key:x,onClick:Y=>S(w)},H,8,z))),128))])])):g("",!0)}};var K=m(J,[["__scopeId","data-v-757bf786"]]);const M=a=>(P("data-v-1b16c6a0"),a=a(),b(),a),O=M(()=>s("h2",null,"Popular Posts",-1)),Q={key:0},U={class:"block"},W=E(" All Posts... "),X={setup(a){const t=_([]);return(async()=>{(await v(h(f,"posts"))).forEach(c=>{t.value.push(c.data())})})(),(e,c)=>{const u=B("router-link");return o(),n("div",null,[O,p(K),t.value[0]?(o(),n("h2",Q,"Recent Posts")):g("",!0),s("div",U,[(o(!0),n(k,null,y(t.value,l=>(o(),V($,{link:l.link,figure:l.figure,name:l.name,key:l},null,8,["link","figure","name"]))),128))]),p(u,{class:"allPosts",to:"/all_posts"},{default:N(()=>[W]),_:1})])}}};var te=m(X,[["__scopeId","data-v-1b16c6a0"]]);export{te as default};