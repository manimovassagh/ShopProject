let el = localStorage.getItem("cart");
el=JSON.parse(el)
console.log(el);
document.addEventListener("DOMContentLoaded", evt => {
let checkout=document.createElement('div')
checkout.innerHTML=el
document.body.appendChild(checkout)
});