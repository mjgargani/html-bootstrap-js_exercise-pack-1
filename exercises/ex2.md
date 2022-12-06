# Enunciado

Considere uma lista de produtos, onde cada item possui os seguintes atributos: `id` (um identificador único), `name` (nome), `description` (descrição), `price` (preço). Nesse sentido, faça um script JavaScript:

- Definindo uma variável capaz de armazenar essa lista de produtos, já com dois produtos inicializados;
- Para cada item, o atributo `id` deve ser um **valor único**;

> Você pode utilizar a função `Date.now()` para gerar um valor único (com base no tempo da máquina), contudo, é importante atentar que utiliza-lo mais de uma vez na mesma definição/atribuição pode gerar valores iguais para produtos diferentes.

# Gabarito

Nesse caso, o ideal é trabalhar com um `Array` de `Objetos` no formato: `[{...}, {...}, ...]`, exemplo:

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
```

> Para gerar um valor único nesse caso *(sem o apoio de bibliotecas externas)* para os dois item, foi necessário adicionar uma unidade, junto à definição do `id` no segundo item (`Date.now()+1`). Isso garante que o segundo valor será diferente do primeiro.