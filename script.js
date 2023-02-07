// DOM ELEMENT

let searchBtn = document.querySelector("#search-button");
let searchInput = document.querySelector("#search-input");
let nutrientData = document.querySelector(".nutrient");
let recipeData = document.querySelector(".recipe");
let displayNutrient = document.querySelector("#nut-display");
let displayRecipe = document.querySelector("#rec-display");

let choices = [];

//add eventlistner to the search button
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let foodChoice = searchInput.value;

    exploreNutrientSearch(foodChoice);
    exploreRecipeSearch(foodChoice);

    if (!choices.includes(foodChoice)) {
        choices.push(foodChoice);
        foodStorage();
    }

    function foodStorage() {
        localStorage.setItem("choices", JSON.stringify(choices));
        console.log(choices);

    }
});

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

function exploreRecipeSearch(choiceofFood) {
    let queryURL = `https://api.edamam.com/search?app_id=47e5c8c0&app_key=845a46deb9705db9fc09c18b79695505&q=${choiceofFood}`
fetch(queryURL)
	.then(response => response.json())
	.then((data) => {
         console.log(data);
         recipeDetails(data);
    });

    
}

//function that display the nutrient as obtain from the URL based on user input
    function nutrientDetails(foodDetails) {
        nutrientData.innerHTML ="";

        let productName = foodDetails.name
        let totalCalories = foodDetails.calories;
        let carbs = foodDetails.carbohydrates_total_g;
        let chole = foodDetails.cholesterol_mg;
        let fatSat = foodDetails.fat_saturated_g;
        let totalFat =foodDetails.fat_total_g;
        let fiber =foodDetails.fiber_g;
        let potassium =foodDetails.potassium_mg;
        let protein =foodDetails.protein_g;
        let size =foodDetails.serving_size_g;
        let soduim =foodDetails.sodium_mg;
        let sugar =foodDetails.sugar_g;
    
       
        console.log(productName);
        nutrientData.innerHTML = ` <div class="card" style="width: 18rem;" id="list-of-forecast">
            <div class="card-body">
            <h1> Name: ${productName}</h1>
                <p>Calories: ${totalCalories} </p>
                <p>Carbohydrate: ${carbs}g</p>
                <p>Cholesterol: ${chole}mg</p>
                <p>Fat_saturated: ${fatSat}g</p>
                <p>Fat_Total: ${totalFat}g</p>
                <p>Fiber: ${fiber}g</p>
                p>Protein: ${protein}g</p>
                <pServing_Size: ${size}g</p>
                <p>Soduim: ${soduim}mg</p>
                <p>Potassium: ${potassium}mg</p>
                <p>Sugar: ${sugar}g</p>
                </div>
            </div>`
        displayNutrient.append(nutrientData);

    }


    function recipeDetails(params) {
        
    }