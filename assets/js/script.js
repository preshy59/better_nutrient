let recipeEl = document.querySelector("#rec-display");
let nutrientData = document.querySelector(".nutrient");
let displayNutrient = document.querySelector("#nut-display");


$(document).ready(function () {
  // Variable to retrieve HTML elements using their ID's - JK
  var searchButton = document.getElementById("search-button");
  var userInput = document.getElementById("search-input");
 

  // Event listener to "searchButton" HTML element when the button is clicked - JK
  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get value of user input - JK
    userInput = $("#search-input").val();

    $("#search-input").val("");

    fetchRecipe(userInput);
    exploreNutrientSearch(userInput);

    // URL for making a fetch request to the Edamam API to search for a recipe based on the user's input. - JK
    // let queryURL =
    //   "https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=" + userInput;
    // fetch(queryURL)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  });
});


//function to display recipe cards
function recipeCards(data) {
  //clear innerhtml el
  recipeEl.innerHTML = "";
  // for loop to cycle through index
  for (let i = 0; i < 8; i++) {
    
    //data I want to display in cards

    //title
    let recipeTitle = data.hits[i].recipe.label
    // console.log(data.hits[0].recipe.label)

    // image
    let recipeImg = data.hits[i].recipe.image
    // console.log(data.hits[0].recipe.image)

    // ingredients
    let ingredientOne = data.hits[i].recipe.ingredientLines[0];
    let ingredientTwo = data.hits[i].recipe.ingredientLines[1];
    let ingredientThree = data.hits[i].recipe.ingredientLines[2];
    let ingredientFour = data.hits[i].recipe.ingredientLines[3];
    let ingredientFive = data.hits[i].recipe.ingredientLines[4];
  
    //URL
    let urlButton = data.hits[i].recipe.url;
    // console.log(data.hits[0].recipe.url)

    let recipeCard = `<div class="card" id="recipe-card" style="width: 20rem;">
    <img class="card-img-top" src=${recipeImg} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${recipeTitle}</h5>
      <p>Ingredients:</p>
      ${ingredientOne ? `<li class="list-group-item">${ingredientOne}</li>` : ""}
      ${ingredientTwo ? `<li class="list-group-item">${ingredientTwo}</li>` : ""}
  
      ${ingredientThree ? `<li class="list-group-item">${ingredientThree}</li>` : ""}
      ${ingredientFour ? `<li class="list-group-item">${ingredientFour}</li>` : ""}
      ${ingredientFive ? `<li class="list-group-item">${ingredientFive}</li>` : ""}
      <a href=${urlButton} class="btn btn-primary" id="recipeBtn">Get full recipe!</a>
    </div>
  </div>`

    recipeEl.innerHTML += recipeCard;


  }


}


//  function to grab data from api edamam
function fetchRecipe(foodItem) {
  fetch(`https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=${foodItem}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      recipeCards(data)
    })
}


// function to obtain data from the ninjas API-EO
function exploreNutrientSearch(choiceofFood) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '565b910ef1msh5378420bcc0f262p1a4229jsnb6c6b7e6740d',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${choiceofFood}`, options)
        .then(response => response.json())
        .then((deatils) => {
         console.log(deatils);
         nutrientDetails(deatils);
        
        });
    }

    //function that display the nutrient as obtain from the URL based on user input-EO
    function nutrientDetails(foodDetails) {
        nutrientData.innerHTML ="";

        let productName = foodDetails[0].name
        let totalCalories = foodDetails[0].calories;
        let carbs = foodDetails[0].carbohydrates_total_g;
        let chole = foodDetails[0].cholesterol_mg;
        let fatSat = foodDetails[0].fat_saturated_g;
        let totalFat =foodDetails[0].fat_total_g;
        let fiber =foodDetails[0].fiber_g;
        let potassium =foodDetails[0].potassium_mg;
        let protein =foodDetails[0].protein_g;
        let size =foodDetails[0].serving_size_g;
        let soduim =foodDetails[0].sodium_mg;
        let sugar =foodDetails[0].sugar_g;
    
       
        console.log(productName);
        nutrientData.innerHTML = ` <div class="card" style="width: 18rem;" id="nurient_value">
            <div class="card-body">
            <h1> Basic Nutrient of ${productName}</h1>
                <p>Calories: ${totalCalories} </p>
                <p>Carbohydrate: ${carbs}g</p>
                <p>Cholesterol: ${chole}mg</p>
                <p>Fat_saturated: ${fatSat}g</p>
                <p>Fat_Total: ${totalFat}g</p>
                <p>Fiber: ${fiber}g</p>
                <p>Protein: ${protein}g</p>
                <pServing_Size: ${size}g</p>
                <p>Soduim: ${soduim}mg</p>
                <p>Potassium: ${potassium}mg</p>
                <p>Sugar: ${sugar}g</p>
                </div>
            </div>`
        displayNutrient.append(nutrientData);

    }