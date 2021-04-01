//just to check my library works or not
// dom('div','my new library works like butter','my prefer class')

//dom library reminder (element, innerHTML,className)

let shoppingList = [];

const getFetchData = (values) => {
  for (let i of values) {
    dom("div", i.title, "card title");
    dom("div", i.Price, "card title");
    dom("div", `<img src="${i.image}">`, "card title");
    domValue(
      "button",
      "Click to Buy",
      " btn-buy btn btn-primary mt-2 mb-2",
      i.title
    );
  }
  const buttons = document.querySelectorAll(".btn-buy");

  buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
      shoppingList.push(e.target.value);
      console.log(shoppingList);
      localStorage.setItem("cart", JSON.stringify(shoppingList));
      // shoppingList.forEach((element,id)=>{
      //   console.log(element,id);
      //   localStorage.setItem(element,id)
      // })
    });
  });
};
axios.get("/products.json").then((response) => getFetchData(response.data));

// buttons.addEventListener('click',()=>{
//   console.log('use clicked');
// })
