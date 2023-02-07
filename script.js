// $(document).ready(function () {
//   // Variable to retrieve HTML elements using their ID's - JK
//     var searchButton = document.getElementById("search-button");
//     var userInput = document.getElementById("search-input");
  
//   // Event listener to "searchButton" HTML element when the button is clicked - JK
//     searchButton.addEventListener("click", function (event) {
//       event.preventDefault();
  
//       // Get value of user input - JK
//       userInput = $("#search-input").val();
  
//       $("#search-input").val("");
  
//       // URL for making a fetch request to the Edamam API to search for a recipe based on the user's input. - JK
//       let queryURL =
//         "https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=" + userInput;
//       fetch(queryURL)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     });
//   });
  

let queryURL = "https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=cake"
fetch(queryURL)
	.then(response => response.json())
	.then(data => {
    
    console.log(data)
    // title
  console.log(data.hits[0].recipe.label)
  // image
  console.log(data.hits[0].recipe.image)
  // ingredients
  console.log(data.hits[0].recipe.ingredients[0].text)

  })



  //function to display recipe cards
  function recipeCards(data){
    //clear innerhtml el
    //data I want to display in cards
    let recipeTitle = data.hits[0].recipe.label
    console.log(data.hits[0].recipe.label)
    //image

    //ingredient lines

    //link


  }


  //  function to grab data from api edamam
  function fetchRecipe(foodItem){
    fetch(`https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=${foodItem}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      recipeCards(data)
    })
  }