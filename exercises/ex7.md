# Os exercícios 7 e 8, consideram os seguintes arquivos:

> index.html

```html
<html>
  <head>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <p>
      <h1>Lista de receitas favoritas</h1>
    </p>

    <p>
      Filtro:
      <select id="meal-list-cat-filter">
        <option value="none" selected>Nenhum</option>
        <option value="Seafood">Seafood</option>
        <option value="Pasta">Pasta</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
    </p>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody id="fav-meal-list"></tbody>
    </table>

    <div id="detail-modal" class="modal-container hide">
      <div class="modal-content">
        <button id="detail-modal-close" class="modal-close"><b>Fechar detalhamento</b></button>
        <p>
          <h2>Detalhes do item: <span id="detail-id"></span></h2>
        </p>
        <p>
          <h3 id="detail-name"></h3>
          <span id="detail-category"></span>
        </p>
        <img id="detail-thumb" src="" width="25%"/>
        <p id="detail-ingredients"></p>
        <p id="detail-instructions"></p>
      </div>
    </div>

    <script src="./meals.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```


> style.css

```css
* {
  font-family: arial, sans-serif;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.hide {
  display: none;
}

.modal-container {
  /*  */
}

.modal-content {
  /*  */
}

.modal-close {
  /*  */
}
```

> meals.js

```javascript
let meals = [
  {
    id: 53065,
    name: "Sushi",
    category: "Seafood",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/g046bb1663960946.jpg",
    ingredients: [
      "Sushi Rice", 
			"Rice wine",
			"Caster Sugar",
			"Mayonnaise",
			"Rice wine",
			"Soy Sauce",
			"Cucumber"
    ],
    instructions: "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve."
  },
  {
    id: 53041,
    name: "Grilled Portuguese sardines",
    category: "Seafood",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/lpd4wy1614347943.jpg",
    ingredients: [
      "Sardines",
			"Olive Oil",
			"Garlic",
			"Paprika",
			"Lemon",
			"Rosemary",
			"Red Chilli"
    ],
    instructions: "STEP 1\r\n\r\nPut all of the ingredients, except the sardines, into a bowl and mix together with some seasoning. Pour into a baking dish, add the sardines and toss really well. Cover and chill for a few hours.\r\n\r\nSTEP 2\r\n\r\nHeat a BBQ or griddle pan until hot. Cook the sardines for 4-5 minutes on each side or until really caramelised and charred. Put onto a serving plate, drizzle with oil, sprinkle with a little more paprika and squeeze over the lemon wedges."
  },
  {
    id: 53064,
    name: "Fettuccine Alfredo",
    category: "Pasta",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/0jv5gx1661040802.jpg",
    ingredients: [
      "Fettuccine",
			"Heavy Cream",
			"Butter",
			"Parmesan",
			"Parsley",
			"Black Pepper"
    ],
    instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready."
  },
  {
    id: 53026,
    name: "Tamiya",
    category: "Vegetarian",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/n3xxd91598732796.jpg",
    ingredients: [
      "Broad Beans",
			"Spring Onions",
			"Garlic Clove",
			"Parsley",
			"Cumin",
			"Baking Powder",
			"Cayenne Pepper",
			"Flour",
			"Vegetable Oil"
    ],
    instructions: "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce."
  },
  {
    id: 52955,
    name: "Egg Drop Soup",
    category: "Vegetarian",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1529446137.jpg",
    ingredients: [
      "Chicken Stock",
			"Salt",
			"Sugar",
			"Pepper",
			"Sesame Seed Oil",
			"Peas",
			"Mushrooms",
			"Cornstarch",
			"Water",
			"Spring Onions"
    ],
    instructions: "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top."
  },
  {
    id: 52906,
    name: "Flamiche",
    category: "Vegetarian",
    thumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wssvvs1511785879.jpg",
    ingredients: [
      "Butter",
			"Leek",
			"Salt",
			"Creme Fraiche",
			"Egg",
			"Egg Yolks",
			"Nutmeg",
			"Plain Flour",
			"Salt",
			"Butter",
			"Lard",
			"Cheddar Cheese",
			"Water"
    ],
    instructions: "For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes.\r\n02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool.\r\n03.Preheat the oven to 200°C\/fan180°C\/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans\/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C\/fan170°C\/gas 5.\r\n04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve."
  }
]
```

> script.js

```javascript
let modalItemDetail; // utilizado pelo modal, para mostrar detalhes de uma receita específica
let filteredMealList; // utilizado para guardar dados filtrados da array `meals`

const elements = {
  mealCatFilter: document.getElementById("meal-list-cat-filter"),
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
  // imprime os dados no modal (ids `detail-*`) e remove a classe `hide` do id `detail-modal`
}

function setModalItemDetail({ target }){
  const id = Number(target.dataset.id);
  modalItemDetail = meals.filter(item => Number(item.id) === id)[0];
  renderModalDetails();
}

function loadMealsData(wrapper) {
  const mealList = wrapper || meals;
  const favTableBody = document.getElementById("fav-meal-list");
  favTableBody.replaceChildren();

  for (const meal of mealList) {
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
  // adiciona a classe `hide` ao modal de id `detail-modal`
}

function filterMealList({ target }){
  // deve usar a função `loadMealsData(filteredMealList)`, caso haja um filtro definido
}

document.addEventListener("DOMContentLoaded", () => loadMealsData());
```

> ⚠️ Os códigos aqui são sugeridos, por tanto, pode haver mais de uma forma de resolver os problemas.

# Enunciado

Considerando que a página de receitas favoritas possui funções incompletas, realize os seguintes complementos:

- Complete, na folha de estilos css, os atributos para as classes de modal (`.modal-*`) ([O que é um modal?](https://www.w3schools.com/w3css/w3css_modal.asp)), atualmente, a página contém três:
  - `.modal-container` que deve ser uma div flutuante de posição fixa, capaz de poder rolar conteúdo por demanda ([`overflow`](https://www.w3schools.com/css/css_overflow.asp)), esse elemento não recebe o conteúdo diretamente;
  - `.modal-content` deve ser uma div flutuante de posição relativa, aqui, estarão os conteúdos do detalhamento de cada receita (ids `detail-*`);
  - `.modal-close` é um botão flutuante de posição absoluta, ele será responsável posteriormente, por fechar o modal.

- Adicione ao arquivo `script.js`:
  - Um evento que, a partir do botão `.modal-close`, feche o modal (sugestão da função `closeDetailModal()`);
  - Os comandos necessários para espelhar os dados do detalhe de uma receita (`modalItemDetail`), nos elementos html relacionados (`elements.modal.details`), a sugestão é utilizar a função `renderModalDetails()`.

# Gabarito

> style.css

```css
/* ... */

.modal-container {
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  position: relative;
  width: 80%;
  margin: 5%;
  padding: 5%;
  background-color: white;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
}
```

> script.js

```javascript
let modalItemDetail;
// let filteredMealList;

const elements = {
  // mealCatFilter: document.getElementById("meal-list-cat-filter"),
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

// function setModalItemDetail({ target }){
//   const id = Number(target.dataset.id);
//   modalItemDetail = meals.filter(item => Number(item.id) === id)[0];
//   renderModalDetails();
// }

// function loadMealsData(wrapper) {
//   const mealList = wrapper || meals;
//   const favTableBody = document.getElementById("fav-meal-list");
//   favTableBody.replaceChildren();

//   for (const meal of mealList) {
//     ...

//     btnViewDetails.addEventListener("click", setModalItemDetail);

//     ...
// }

function closeDetailModal() {
  document.getElementById("detail-modal").classList.add("hide");
}

// ...

// document.addEventListener("DOMContentLoaded", () => loadMealsData());
elements.modal.closeBtn.addEventListener("click", closeDetailModal);
```