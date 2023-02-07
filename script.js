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
  
        // calling the nurient api function in obtain to gain the user input -EO
        exploreNutrientSearch(userInput);

      // URL for making a fetch request to the Edamam API to search for a recipe based on the user's input. - JK
      var queryURL =
        "https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=" + userInput;
      fetch(queryURL)
        .then((response) => response.json())
        .then((data) => console.log(data));
    });

// DOM ELEMENT OF THE NUTRIENT DETAILS -EO
var nutrientData = document.getElementsByClassName(".nutrient");
var displayNutrient = document.getElementById("#nut-display");

// function that obtain the nutrient through fetch request in the ninjas api-EO
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

    
  });
  