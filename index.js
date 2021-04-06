//just to check my library works or not
// dom('div','my new library works like butter','my prefer class')

//dom library reminder (element, innerHTML,className)

//fetch data from json file
// axios.get("/products.json").then((response) => getFetchData(response.data));
// let shoppingList = [];

// const getFetchData = (values) => {
//   for (let i of values) {
//     dom("div", `<img src="${i.image}">`, "card title");
//     dom("div", i.title, "card title");
//     dom("div", i.Price, "card title");
//     domValue(
//       "button",
//       "Click to Buy",
//       " btn-buy btn btn-primary mt-2 mb-2",
//       i.title
//     );
//   }

//add buy item with click to buy and save it to local storage

//   const buttons = document.querySelectorAll(".btn-buy");
//   buttons.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       shoppingList.push(e.target.value);
//       localStorage.setItem("cart", JSON.stringify(shoppingList));
//       // shoppingList.forEach((element,id)=>{
//       //   console.log(element,id);
//       //   localStorage.setItem(element,id)
//       // })
//     });
//   });
// };
//make a badge number base on buy
// let el = localStorage.getItem("cart");
// el=JSON.parse(el)
// console.log(el);
// let span=document.querySelector("span")
// console.log(span);
// span.innerText=el.length

// ------------------------------------------------------------------------------------------
//connect to firebase to fetch data from cloud
db.collection("items")
  .get()
  .then((snapshot) => {
    snapshot.docs
      .forEach((doc) => {
        shoppingReturn(doc.data());
        
      })
      
  });


  //this is how to add document in database
//   db.collection("items").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });




let shoppingList = [];
const shoppingReturn = (data) => {
  shoppingList.push(data);
  console.log(data);
  // shoppingList.forEach((data) => {
    
document.querySelector('#el')
el.innerHTML+=`<div class="card" style="width: 15rem;">
<img class="card-img-top" src=${data.image} alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${data.brand}</h5>
  <p class="card-text">${data.price}</p>
  <a href="#" class="btn btn-primary">click to Buy</a>
</div>
</div>`
let root=document.querySelector('#root')
root.appendChild(el)
  // });
};

