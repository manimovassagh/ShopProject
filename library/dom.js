const dom = (element, innerHTML,className) => {
    let el = document.createElement(element);
    el.innerHTML = innerHTML;
    
    let div = document.querySelector(".container");
    div.appendChild(el);
    el.classList=className
  };
  