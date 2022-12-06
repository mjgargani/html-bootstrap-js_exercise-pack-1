# Enunciado

Considerando o exercício 2:

- Crie uma função que possa adicionar um novo produto à lista de produtos, a função deve receber o nome, descrição e preço;

# Gabarito

- Crie uma função `addProduct` que receberá três atributos (`name, description, price`. O `id` deve ser gerado automaticamente, como no segundo exercício):

```javascript
function addProduct(name, description, price) { }
```

- Crie um objeto dentro da função, definindo o novo item:

```javascript
function addProduct(name, description, price) { 
  const newProduct = {
    id: Date.now(),
    name,
    description,
    price
  };
}
```

- O adicione à lista de produtos existente (como se trata de um `Array`, aqui utilizaremos o método [`push`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push)), recomendavelmente, retornando o item adicionado (para efeitos de confirmação):

```javascript
function addProduct(name, description, price) { 
  const newProduct = {
    id: Date.now(),
    name,
    description,
    price
  };

  products.push(newProduct);

  return newProduct;
}
```

- Por tanto, considerando a lista de produtos:

```javascript
> products
[
  {
    id: 1670350112767,
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.5
  },
  {
    id: 1670350112768,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
]
```

- Ao executarmos a função, devemos ter o retorno com o item inserido:

```javascript
> addProduct('Produto C', 'Descrição do produto C', 9.90)
{
  id: 1670350161574,
  name: 'Produto C',
  description: 'Descrição do produto C',
  price: 9.9
}
```

- Dessa forma, nossa nova lista de produtos deve parecer como:

```javascript
> products
[
  {
    id: 1670350112767,
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.5
  },
  {
    id: 1670350112768,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  },
  {
    id: 1670350161574,
    name: 'Produto C',
    description: 'Descrição do produto C',
    price: 9.9
  }
]
```