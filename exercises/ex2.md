# Enunciado

Considere uma lista de produtos, onde cada item possui os seguintes atributos: `id` (um identificador único), `name` (nome), `description` (descrição), `price` (preço). Nesse sentido:

- Crie uma variável capaz de armazenar essa lista de produtos, já definindo dois produtos qualquer;

# Gabarito

1. Nesse caso, o ideal é trabalhar com um `Array` de `Objetos` no formato: `[{...}, {...}, ...]`, exemplo:

```javascript
let products = [
  {
    id: 0,
    name: 'Produto A',
    description: 'Descrição do meu produto A',
    price: 11.50
  },
  {
    id: 1,
    name: 'Produto B',
    description: 'Descrição do meu produto B',
    price: 8.75
  }
];
```