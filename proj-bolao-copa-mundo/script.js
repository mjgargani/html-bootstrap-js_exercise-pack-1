let predictions = [];

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

function createTableRowElements(index) {
  const tr = document.createElement("tr");
  const numPart = document.createElement('th');
  const tdSelecao1 = document.createElement('td');
  const tdGols1 = document.createElement('td');
  const tdSelecao2 = document.createElement('td');
  const tdGols2 = document.createElement('td');
  const rmBtn = document.createElement('button');

  rmBtn.classList.add("btn"); // bootstrap
  rmBtn.classList.add("btn-secondary"); // bootstrap
  rmBtn.dataset.id = index;
  rmBtn.addEventListener("click", rmPred);
  rmBtn.textContent = "Remover Item";

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

function tableUpdate(data) {
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
  tableUpdate(predictions);
}

function rmPred({ target }) {
  const index = Number(target.dataset.id);
  const currentPredList = predictions;
  const filteredPredList = currentPredList.filter(el => el.numPart !== index);
  const newPredList = filteredPredList.map((el, i)=> ({...el, numPart: i+1}))
  console.log(filteredPredList, newPredList)
  predictions = newPredList;
  tableUpdate(predictions);
}

elements.form.addPred.addEventListener("submit", addPred);