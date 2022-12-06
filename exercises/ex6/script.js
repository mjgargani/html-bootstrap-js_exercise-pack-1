let products = [
  {
    id: Date.now(),
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.50
  },
  {
    id: Date.now()+1,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
];

function loadProductList() {
  const prodList = document.getElementById("product-list");
  prodList.innerHTML = "";

  const ul = document.createElement("ul");

  for (const item of products){
    const id = document.createElement("li");
    id.textContent = item.id;

    const subItem = document.createElement("ul");

    const name = document.createElement("li");
    name.textContent = item.name;

    const description = document.createElement("li");
    description.textContent = item.description;

    const price = document.createElement("li");
    price.textContent = `R$ ${item.price}`;

    subItem.appendChild(name);
    subItem.appendChild(description);
    subItem.appendChild(price);

    id.appendChild(subItem);
    ul.appendChild(id);
  }

  prodList.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", loadProductList);