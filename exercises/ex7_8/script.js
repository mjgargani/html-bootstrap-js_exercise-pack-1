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

document.addEventListener("DOMContentLoaded", loadMealsData);
