# Enunciado

Considerando o exercício 2:

- Crie uma página que após o carregamento do conteúdo do DOM da página, imprima na tela, a lista de produtos.

# Gabarito

> index.html

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de produtos</title>
  </head>
  <body>
    <div id="product-list"></div>
    <script src="./script.js"></script>
  </body>
</html>
```

> script.js

```javascript
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
```