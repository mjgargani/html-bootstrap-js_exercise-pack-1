# Enunciado

Considerando o exercício 2:

- Crie uma função que possa remover um item da lista de produtos, com base em seu `id`;

# Gabarito

- Crie uma função `rmProduct` que receberá o atributo `id`:

```javascript
function rmProduct(id) { }
```

Assim como no terceiro exercício, é possível solucionar de mais de uma forma aqui:

- Por exemplo, utilizando um laço de repetição para criar uma nova lista de produtos, sem o item relacionado, recomendavelmente, retornando o `id` para efeitos de confirmação:

```javascript
function rmProduct(id) { 
  let newProductList = [];
  for (const item of products) {
    if (item.id !== id) {
      newProductList.push(item);
    }
  }
  products = newProductList;
  return id;
}
```

- Alternativamente, utilizando novamente o método `filter`:

```javascript
function rmProduct(id) { 
  const newProductList =  products.filter(item => item.id !== id)[0]
  products = newProductList;
  return id;
}
```

- Por tanto, considerando a lista de produtos:

```javascript
> products
[
  {
    id: 1670351225843,
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.5
  },
  {
    id: 1670351225844,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
]
```

- Ao chamar a função, devemos ter o retorno do `id` removido:

```javascript
> rmProduct(1670351225843)
1670351225843
```

- Retornando a lista de produtos, veremos que o item foi removido:

```javascript
> products
[
  {
    id: 1670351225844,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
]
```

- Também podemos confirmar isso, utilizando a função que criamos anteriormente, a `getProduct`:

```javascript
> getProduct(1670351225843)
undefined
```