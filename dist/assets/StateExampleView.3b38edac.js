import{l as r,d as c,o as a,c as i,a as e,t as o,u as s,e as u}from"./vendor.ad6f586a.js";const _=r({id:"counter",state:()=>({counter:0}),getters:{doubleCount:n=>n.counter*2},actions:{increment(){this.counter++}}});const d=e("h1",null,"This page is an example of how to use Pinia for state management",-1),h=e("br",null,null,-1),m=u(),p=e("br",null,null,-1),b=e("br",null,null,-1),f=e("br",null,null,-1),S=c({setup(n){const t=_(),l=()=>{t.increment()};return(x,C)=>(a(),i("div",null,[d,h,m,p,e("button",{onClick:l}," Count: "+o(s(t).counter),1),b,f,u(" Double the count is "+o(s(t).doubleCount)+". ",1)]))}});export{S as default};
