# Enunciado

Indique, das opções, qual é a forma válida para definir um evento associado um elemento html qualquer:

# Opções

A) event.listener('elemento', callback);
B) alvo.addEventListener(tipo, callback);
C) eventListener(alvo, evento);
D) alvo.event(tipo, callback);
E) document.addEventListener(tipo, callback);

# Alternativa: B

Justificativa:

- Segundo a documentação da ['Mozilla Developer Network'](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener), o método `addEventListener()` faz parte da instância de um elemento alvo, ou seja, você deve identificar essa instância e utilizar o método seguindo a seguinte sintaxe: `alvo.addEventListener(type,listener[, options]);`;
- Note que: `document` também é considerado uma instância de um elemento nesse contexto (com seu próprio conjunto de eventos), por tanto, a resposta mais abrangente é a letra `B`.