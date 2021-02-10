/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
let info = {};
info = {
    name: 'Graham Pearl',
    photo: 'images/self.jpg',
    favoriteFoods: [
        'Rice Pudding',
        'Lentils, Barley Tomato Soup',
        'Milktart'
    ],
    hobbies: [
        'Programming', 'Salsa Dancing', 'Scuba Diving', 'Walking'
    ],
    placesLived: [{
        place: 'Cape Town, South Africa',
        length: '8 years'
    }, {
        place: 'Durban, South Africa',
        length: '25 years'
    }, {
        place: 'Johannesburg, South Africa',
        length: '2 years'
    }, {
        place: 'Pretoria, South Africa',
        length: '3 months'
    }, {
        place: 'Richards Bay, South Africa',
        length: '4 years'
    }, {
        place: 'Salt Lake City, Utah, USA',
        length: '2 years'
    }]
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.querySelector('#name').textContent = info.name;
document.querySelector('#photo').setAttribute('src', info.photo);
document.querySelector('#photo').setAttribute('alt', info.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// USING THE FOR-EACH ITERATOR FOR THE ADDING OF EACH FAVORITE FOOD ITEM
function fillItemFood(item, index) {
    let itemList = document.createElement('li');
    itemList.textContent = item;
    document.querySelector('#favorite-foods').appendChild(itemList);
}

info.favoriteFoods.forEach(fillItemFood);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// USING THE FOR-EACH ITERATOR FOR THE ADDING OF EACH HOBBY ITEM
function fillItemHobbies(item, index) {
    let itemList = document.createElement('li');
    itemList.textContent = item;
    document.querySelector('#hobbies').appendChild(itemList);
}

info.hobbies.forEach(fillItemHobbies);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

function unwrapItemToList(value, index, array) {
    txt = txt + value + "<br>";
}

// USING A SIMPLE FOR-LOOP ITERATOR FOR THE ADDING OF EACH ITEM (JUST FOR FUN)
for (i = 0; i < info.placesLived.length; i++) {
    let objPlace = document.createElement('dt');
    objPlace.textContent = info.placesLived[i].place;
    let objLength = document.createElement('dd');
    objLength.textContent = info.placesLived[i].length;

    document.querySelector('#places-lived').appendChild(objPlace);
    document.querySelector('#places-lived').appendChild(objLength);
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived