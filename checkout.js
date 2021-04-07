// dom library structure for reminding: element, innerHTML,className

let el = localStorage.getItem("cart");
let identifire = localStorage.getItem("identifire");
el = JSON.parse(el);
console.log(el);

let root = document.querySelector("#injectData");
console.log(root);

for (let i = 0; i < el.length; i++) {
  console.log(el);
  root.innerHTML += `
  <tr>
 <td >${i+1}</td>
 <td>${el[i].title}</td> 
 <td>${el[i].price} €</td>
 <td>${el[i].count}</td>
 <td>${el[i].price*el[i].count}€ </td>
 <td><i class="bi bi-bag-plus"> <i class="bi bi-bag-dash"></i></td>
</tr>
        
   `;
  
}




// for (const basketItems of el) {
//   //  console.log(basketItems);
// let sn=null
// sn=sn+1
//   root.innerHTML += `
//    <tr>
//      <td >${sn}</td>
//      <td>${basketItems.title}</td>
//      <td>${basketItems.price} Euro</td>
//      <td>${basketItems.count}</td>
//      <td>${Math.round((basketItems.count*basketItems.price * 100) / 100)} Euro </td>
//    </tr>
        
//    `;
// }

// ${basketItems.title}
//    ${basketItems.count}
//   ${basketItems.price} Euro
