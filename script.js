let recipeEl = document.querySelector("#rec-display");

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
  for (let i = 0; i < 5; i++) {
    
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
    <li class="list-group-item">${ingredientOne}</li>
    <li class="list-group-item">${ingredientTwo}</li>
    <li class="list-group-item">${ingredientThree}</li>
    <li class="list-group-item">${ingredientFour}</li>
    <li class="list-group-item">${ingredientFive}</li> 
    <a href=${urlButton} class="btn btn-primary" id="recipeBtn">go to recipe!</a>
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


// function to obtain data from the ninjas API
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