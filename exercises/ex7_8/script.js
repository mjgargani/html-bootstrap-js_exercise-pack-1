let modalItemDetail;

const elements = {
  modal: {
    closeBtn: document.getElementById("detail-modal-close"),
    details: {
      id: document.getElementById("detail-id"),
      name: document.getElementById("detail-name"),
      category: document.getElementById("detail-category"),
      thumb: document.getElementById("detail-thumb"),
      ingredients: document.getElementById("detail-ingredients"),
      instructions: document.getElementById("detail-instructions")
    }
  } 
}

function renderModalDetails(){
  elements.modal.details.id.textContent = modalItemDetail.id;
  elements.modal.details.name.textContent = modalItemDetail.name;
  elements.modal.details.category.textContent = modalItemDetail.category;
  elements.modal.details.thumb.src = modalItemDetail.thumb;
  elements.modal.details.ingredients.textContent = `Ingredientes: ${modalItemDetail.ingredients.join(", ")}`;
  elements.modal.details.instructions.textContent = `Preparo: ${modalItemDetail.instructions}`;
  document.getElementById("detail-modal").classList.remove("hide");
}

function setModalItemDetail({ target }){
  const id = Number(target.dataset.id);
  modalItemDetail = meals.filter(item => Number(item.id) === id)[0];
  renderModalDetails();
}

function loadMealsData() {
  const favTableBody = document.getElementById("fav-meal-list");

  for (const meal of meals) {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdDetails = document.createElement("td");

    const btnViewDetails = document.createElement("button");
    btnViewDetails.textContent = "Visualizar";
    btnViewDetails.dataset.id = meal.id;

    btnViewDetails.addEventListener("click", setModalItemDetail);

    tdId.textContent = meal.id;
    tdName.textContent = meal.name;
    tdCategory.textContent = meal.category;

    tdDetails.appendChild(btnViewDetails);

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdDetails);

    favTableBody.appendChild(tr);
  }
}

function closeDetailModal() {
  document.getElementById("detail-modal").classList.add("hide");
}

document.addEventListener("DOMContentLoaded", loadMealsData);
elements.modal.closeBtn.addEventListener("click", closeDetailModal);