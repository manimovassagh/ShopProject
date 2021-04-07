// dom library structure for reminding: element, innerHTML,className

let el = localStorage.getItem("cart");
let identifire = localStorage.getItem("identifire");
el = JSON.parse(el);
// console.log(el);

let root = document.querySelector("#injectData");
// console.log(root);

for (let i = 0; i < el.length; i++) {
  // console.log(el);
  root.innerHTML += `
  <tr>
 <td>${i + 1}</td>
 <td>${el[i].title}</td> 
 <td>${el[i].price} €</td>
 <td>${el[i].count}</td>
 <td>${el[i].price * el[i].count}€ </td>
 <td class="d-flex justify-content-around text-center"><i v class="increment bi bi-bag-plus" style="font-size: 1.8rem; "></i> <i class="bi bi-bag-dash" style="font-size: 1.8rem;"></i></td>
</tr>
   `;

const increment=document.querySelectorAll('.increment')
increment.forEach((element)=>{
  console.log(element);
})
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
