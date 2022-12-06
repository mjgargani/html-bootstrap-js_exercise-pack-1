# Enunciado

Considerando o exercício 2:

- Crie uma função que possa retornar um produto, passando seu `id` como referência;

# Gabarito

A vantagem de usar `Arrays` no JavaScript, é que é relativamente fácil manipula-los.
O importante aqui, é sempre separar as competências de manipulação (consultar, adicionar, remover, etc), para que possamos recorrer a elas posteriormente.

- Crie uma função `getProduct` que receberá o atributo `id`:

```javascript
function getProduct(id) { }
```

É possível solucionar de mais de uma forma aqui:

- Por exemplo, utilizando um laço de repetição para "achar" o item o correto:

```javascript
function getProduct(id) { 
  let itemFound;
  for (const item of products) {
    if (item.id === id) {
      itemFound = item;
    }
  }
  return itemFound;
}
```

- Alternativamente, utilizando um método das chamadas [*Higher Order Functions*](https://medium.com/orangejuicefc/higher-order-functions-no-javascript-cce3b9aab426), utilizados para manipulação de `Arrays` no JavaScript, como o `filter`:

```javascript
function getProduct(id) { 
  return products.filter(item => item.id === id)[0]
}
```

- Por tanto, considerando a lista de produtos:

```javascript
> products
[
  {
    id: 1670349185727,
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.5
  },
  {
    id: 1670349185728,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
]
```

- Chamar a função deve retornar o item esperado, caso o `id` esteja correto:

```javascript
> getProduct(1670349185728)
{
  id: 1670349185728,
  name: 'Produto B',
  description: 'Descrição do meu produto B',
  price: 8.75
}
```