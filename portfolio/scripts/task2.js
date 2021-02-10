/* Lesson 2 */
function step2DisplayFavorites() {
// assumption: The display while adding text to the element will overwrite the prior content as currently written. 
// If needing to concatenate, then adjust the document.querySelector('#food').innerHTML += items;
    var items = '';

    arrPreferences.forEach(addItemsToHtml);

    function addItemsToHtml(item) {
        items += '<p>' + item + '</p>';
        document.querySelector('#food').innerHTML = items;
    }
}
/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let author = 'Graham Pearl';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = author;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear().toString();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const photoFilename = 'images/self.jpg';

// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', photoFilename);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let arrPreferences = ['Yoghurt', 'Rice Pudding', 'Lentils, Barley Tomato Soup', 'Milktart'];

// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food
let otherFavorite = 'Apple Pie';

// Step 4: add the variable holding another favorite food to the favorite food array
arrPreferences.push(otherFavorite);
//otherFavorite;

// Step 5: repeat Step 2
step2DisplayFavorites();

// Step 6: remove the first element in the favorite foods array
arrPreferences.shift();

// Step 7: repeat Step 2
step2DisplayFavorites();

// Step 8: remove the last element in the favorite foods array
arrPreferences.pop();

// Step 7: repeat Step 2
step2DisplayFavorites();