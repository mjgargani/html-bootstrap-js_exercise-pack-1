/**
 * Gabarito do projeto
 * O objetivo do projeto é medir se o estudante é capaz de trabalhar a
 * abstração de listas (arrays) associando-as a componentes HTML5 
 * (Algo semelhante ao que acontece com o uso de "states" no ReactJS)
 * Aqui, o objetivo é a criação de uma página de um bolão de previsões para resultados 
 * da Copa do Mundo
 */

// A matriz 'predictions' é a fonte da verdade para renderização da tabela.
// Isso signifca que: Para toda modificação na matriz, a tabela é "refeita"
// refletindo esses dados (função 'tableUpdate').
// Esse tipo de abstração é importante, pois o array é mais simples de
// trabalhar (com HOFs) e pode ser trazido através de uma API, por exemplo.
let predictions = [];

// Trabalhando com objetos, abstraindo os principais componentes da página
const elements = {
  form: {
    addPred: document.getElementById("form-add-pred")
  },
  input: {
    selecao1: document.getElementById("input-selecao-1"),
    selecao2: document.getElementById("input-selecao-2"),
    gols1: document.getElementById("input-gols-1"),
    gols2: document.getElementById("input-gols-2")
  },
  btn: {
    addPred: document.getElementById("btn-add-pred")
  },
  tbody: {
    listaPred: document.getElementById("pred-list")
  }
}

// Boas práticas para criação de elementos dentro de um compontente
function createTableRowElements(index) {
  const tr = document.createElement("tr");
  const numPart = document.createElement('th');
  const tdSelecao1 = document.createElement('td');
  const tdGols1 = document.createElement('td');
  const tdSelecao2 = document.createElement('td');
  const tdGols2 = document.createElement('td');
  const rmBtn = document.createElement('button');

  rmBtn.classList.add("btn"); // bootstrap
  rmBtn.classList.add("btn-danger"); // bootstrap
  rmBtn.dataset.id = index;
  rmBtn.textContent = "X";
  
  rmBtn.addEventListener("click", rmPred);

  numPart.setAttribute("scope", "row"); // bootstrap
  numPart.textContent = index;

  return [
    tr, 
    numPart, 
    tdSelecao1, 
    tdGols1, 
    tdSelecao2, 
    tdGols2,
    rmBtn
  ]
}

// Associação da lista (array) com os componentes html relacionados
function tableUpdate(data) {
  // A reconstrução da tabela, independe da operação que foi 
  // realizada na matriz

  elements.tbody.listaPred.innerHTML = "";

  for (const item of data) {
    const [
      tr, 
      numPart, 
      tdSelecao1, 
      tdGols1, 
      tdSelecao2, 
      tdGols2,
      rmBtn
    ] = createTableRowElements(item.numPart);    

    tdSelecao1.textContent = item.selecao1;
    tdGols1.textContent = item.gols1;
    tdSelecao2.textContent = item.selecao2;
    tdGols2.textContent = item.gols2;

    tr.appendChild(numPart);
    tr.appendChild(tdSelecao1);
    tr.appendChild(tdGols1);
    tr.appendChild(tdSelecao2);
    tr.appendChild(tdGols2);
    tr.appendChild(rmBtn);

    elements.tbody.listaPred.appendChild(tr);
  }
}

// Manipulação do array (Adição de itens)
function addPred(event) {
  event.preventDefault();
  const currentPredList = predictions;
  const newPredListItem = {
    numPart: currentPredList.length + 1,
    selecao1: elements.input.selecao1.value,
    gols1: elements.input.gols1.value,
    selecao2: elements.input.selecao2.value,
    gols2: elements.input.gols2.value
  };
  predictions.push(newPredListItem);

  // Reconstruir a tabela, após a mudança na matriz
  tableUpdate(predictions);
}

// Manipulação do array (Remoção de itens com o uso de HOFs)
function rmPred({ target }) {
  const index = Number(target.dataset.id);
  const currentPredList = predictions;
  const filteredPredList = currentPredList.filter(el => el.numPart !== index);
  const newPredList = filteredPredList.map((el, i)=> ({...el, numPart: i+1}))
  predictions = newPredList;

  // Reconstruir a tabela, após a mudança na matriz
  tableUpdate(predictions);
}

// Utilização de eventos
elements.form.addPred.addEventListener("submit", addPred);