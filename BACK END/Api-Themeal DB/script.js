document.getElementById("get-meal").addEventListener("click", function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      const mealDiv = document.getElementById("meal");
      mealDiv.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3>Ingredientes</h3>
    <ul>
      ${getIngredients(meal).join("")}
    </ul>
    <h3>Instruções</h3>
    <p>${meal.strInstructions}</p>
  `;
    })
    .catch((error) => {
      console.log("Erro ao obter receita:", error);
    });
});

function getIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`
    <li>
      ${ingredient} - ${measure ? measure : ""}
    </li>
  `);
    } else {
      continue;
    }
  }

  return ingredients;
}
