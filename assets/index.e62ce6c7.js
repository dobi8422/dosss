import{r as w,o as p,c as f,a,w as m,p as v,b as h,d as l,e as i,f as g,g as $,n as x,h as I,i as T,j as L}from"./vendor.51adeeb9.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}};P();var y=(o,r)=>{const c=o.__vccOpts||o;for(const[t,e]of r)c[t]=e;return c};const O=o=>(v("data-v-4b30f6d2"),o=o(),h(),o),S=O(()=>i("i",{class:"fa-solid fa-fish"},null,-1)),A=l("Dosss "),N=l(" Works "),R=l(" Posts "),C={setup(o){return(r,c)=>{const t=w("router-link");return p(),f("nav",null,[a(t,{class:"home",to:"/"},{default:m(()=>[S,A]),_:1}),a(t,{"active-class":"active-link",to:"/works"},{default:m(()=>[N]),_:1}),a(t,{"active-class":"active-link",to:"/posts"},{default:m(()=>[R]),_:1})])}}};var V=y(C,[["__scopeId","data-v-4b30f6d2"]]);const D=o=>(v("data-v-7fb19e6a"),o=o(),h(),o),W=D(()=>i("i",{class:"fa-solid fa-arrow-up"},null,-1)),B=[W],F={setup(o){const r=g(0),c=g(!1),t=()=>{r.value=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset,c.value=r.value>=46};function e(n,_=100){let u=null;return()=>{const k=this,E=arguments;clearTimeout(u),u=setTimeout(()=>{n.apply(k,E)},_)}}$(()=>{window.addEventListener("scroll",e(t))});const s=()=>{scrollTo({top:0,behavior:"smooth"})};return(n,_)=>(p(),f("div",null,[i("button",{class:x(["goTop",{vanish:c.value}]),onClick:s},B,2)]))}};var H=y(F,[["__scopeId","data-v-7fb19e6a"]]);const q={},G=o=>(v("data-v-6651b25e"),o=o(),h(),o),j=G(()=>i("p",null,[l("\xA9 2022 "),i("a",{href:"https://github.com/dobi8422/dosss",target:"_blank"},"Dosss"),l(". All Rights Reserved.")],-1)),z=[j];function K(o,r){return p(),f("div",null,z)}var M=y(q,[["render",K],["__scopeId","data-v-6651b25e"]]);const U={setup(o){return(r,c)=>{const t=w("router-view");return p(),f("div",null,[a(V),a(H),a(t,{id:"content"}),a(M)])}}},Y="modulepreload",b={},J="/dosss/",d=function(r,c){return!c||c.length===0?r():Promise.all(c.map(t=>{if(t=`${J}${t}`,t in b)return;b[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":Y,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((_,u)=>{n.addEventListener("load",_),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},Q=[{path:"/:catchAll(.*)",redirect:"/"},{path:"/",name:"Home",component:()=>d(()=>import("./Home.f8e79fa3.js"),["assets/Home.f8e79fa3.js","assets/Home.471b562e.css","assets/vendor.51adeeb9.js"])},{path:"/works",name:"Works",component:()=>d(()=>import("./Works.393dc723.js"),["assets/Works.393dc723.js","assets/Works.76f31623.css","assets/firebase.645e921f.js","assets/firebase.4d953800.css","assets/vendor.51adeeb9.js"])},{path:"/posts",name:"Posts",component:()=>d(()=>import("./Posts.8993ce7d.js"),["assets/Posts.8993ce7d.js","assets/Posts.736afee8.css","assets/firebase.645e921f.js","assets/firebase.4d953800.css","assets/vendor.51adeeb9.js"])},{path:"/all_posts",name:"AllPosts",component:()=>d(()=>import("./AllPosts.1f5680a8.js"),["assets/AllPosts.1f5680a8.js","assets/vendor.51adeeb9.js"])}],X=I({history:T(),routes:Q});L(U).use(X).mount("#app");export{y as _};
