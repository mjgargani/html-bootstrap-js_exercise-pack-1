# Enunciado

Ainda considerando o exercício anterior, a função de filtragem também não está implementada, por tanto:

- Adicione um evento ao combo box (elemento `select`), que permita que possamos gerar uma lista filtrada (Array `filteredMealList`) de receitas (sugestão da função `filterMealList()`);
- Essa função deve usar, internamente, a função `loadMealsData(filteredMealList)` para que a lista renderizada contenha somente os itens da categoria específica.

# Gabarito

> script.js

```javascript
// let modalItemDetail;
let filteredMealList;

const elements = {
  mealCatFilter: document.getElementById("meal-list-cat-filter"),
  // ... 
}

// ...

// function loadMealsData(wrapper) {
//   const mealList = wrapper || meals;
//   const favTableBody = document.getElementById("fav-meal-list");
//   favTableBody.replaceChildren();

//   for (const meal of mealList) {
//     ...
//   }
// }

//  ...

function filterMealList({ target }){
  const filter = target.value;
  if(filter !== "none") {
    filteredMealList = meals.filter(el => el.category === filter);
    loadMealsData(filteredMealList);
  } else {
    loadMealsData();
  }
}

// document.addEventListener("DOMContentLoaded", () => loadMealsData());
// elements.modal.closeBtn.addEventListener("click", closeDetailModal);
elements.mealCatFilter.addEventListener("change", filterMealList);
```