import{p as d,e as u,u as p,R as e,L as h}from"./vendor.32ae6308.js";import{e as E,D as l,I as f,d as v,B as y}from"./index.dc753515.js";const O=r=>{d();let s=u();p();const{loadingStates:g,cartState:N,_id:a}=r,[m,c]=e.useState([]);e.useEffect(()=>{(async function(){if(a){let{data:n}=await E.get(`/api/orders/${a}`);c(n.orders)}})()},[a]);function i(){s.goBack()}function o(){let n=s.location.pathname;return e.createElement("div",null,m.map(t=>e.createElement("div",{className:"order p-relative"},e.createElement("h3",null,"Order ",e.createElement(h,{to:`${n}/details/${t.order_id}`},"#",t.order_id)),e.createElement("h4",null,"Place on ",new Date().toDateString(),e.createElement("span",{className:"p-right"},t.payment_method==="cash_on_delivery"?"COD":t.payment_method)),e.createElement(l,{lineHeight:1,lineColor:"#d9d9d96f"}),e.createElement("div",{className:"order-item d-flex"},e.createElement("div",{className:"w-25"},e.createElement(f,{src:v(t.product.cover_photo),maxWidth:100})),e.createElement("div",{style:{marginLeft:"30px",width:"100%",marginTop:"10px"}},e.createElement("h3",{className:"font-bold"},t.product.title),e.createElement("h5",{className:"font-medium my-1"},"TK.",t.total_price),e.createElement("h5",{className:"font-medium"},"x ",t.quantity),e.createElement("div",{className:"ml-auto bg-gray-300 text-primary w-max px-2 py-0.5 font-medium rounded-sm"},t.status),e.createElement("h4",{className:"font-medium ml-2 text-"},t.quantity," item, total: ",e.createElement("span",null,t.total_price," tk")))))))}return e.createElement("div",{className:"container"},e.createElement(l,{lineHeight:3}),e.createElement("h1",{className:"t-center"},"Orders"),o(),e.createElement("div",{className:"row justify-space-between"},e.createElement(y,{onClick:i},"Back to Shop")))};export{O as default};
