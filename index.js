//just to check my library works or not
// dom('div','my new library works like butter','my prefer class')

//dom library reminder (element, innerHTML,className)
const getFetchData = (values) => {
  for (let i of values) {
    console.log(i.title);
    dom("div", `${i.title}`, "card title");
  }
};
axios.get("/products.json").then((response) => getFetchData(response.data));
