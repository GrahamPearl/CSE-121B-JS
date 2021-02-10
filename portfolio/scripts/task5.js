/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
let today = new Date();
let currentDay = 0;
let dayOfWeek = "";
currentDay = today.getDay();

let message1 = "";
if ((currentDay > 0) & (currentDay < 6)) {
    message1 = "Hang in there!";

} else {
    message1 = "Woohoo!  It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (currentDay) {
    case 0:
        dayOfWeek = "Sun";
        break;
    case 1:
        dayOfWeek = "Mon";
        break;
    case 2:
        dayOfWeek = "Tues";
        break;
    case 3:
        dayOfWeek = "Wednes";
        break;
    case 4:
        dayOfWeek = "Thurs";
        break;
    case 5:
        dayOfWeek = "Fri";
        break;
    case 6:
        dayOfWeek = "Sat";
        break;
    default:
        dayOfWeek = "Unknown";
        break;
}

if (dayOfWeek != "Unknown") {
    dayOfWeek += "day";
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector("#message1").textContent = message1;
document.querySelector("#message2").textContent = dayOfWeek;

/* FETCH */
let listOf = [];
// Step 1: Declare a global empty array variable to store a list of temples
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

const output = (listOfItems) => {
    listOfItems.forEach(element => {
        // alert('Loading Temple:' + element.templeName)

        let item = document.createElement('article');
        let itemNameOf = document.createElement('h3');
        let itemLocation = document.createElement('h4');
        let itemDedication = document.createElement('h4');
        let itemPicture = document.createElement('img');

        itemNameOf.textContent = element.templeName;
        itemLocation.textContent = element.location;
        itemDedication.textContent = element.dedicated;
        itemPicture.setAttribute('src', element.imageUrl)
        itemPicture.setAttribute('alt', element.templeName)

        // alert('Created assets for Temple:' + element.templeName)
        item.appendChild(itemNameOf);
        item.appendChild(itemLocation);
        item.appendChild(itemDedication);
        item.appendChild(itemPicture);

        // alert('Adding to document assets for Temple:' + element.templeName)

        document.querySelector('#temples').appendChild(item);

        // alert('Added to document assets for Temple:' + element.templeName)
    });

}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
// Step 7: Finally, call the output function and pass it the list of temples

// alert('Loading Temples')
fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    .then(response => response.json())
    .then(temples => {
        templeList = temples;
        output(templeList);
    });


// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

const reset = () => {
    document.querySelector('#temples').innerHTML = '';
} // USED THE CONSTANT SHORT-HAND METHOD AS FEEL THAT THIS IS BETTER THAN THE LONG-HAND DECLARATION METHOD

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

const compareBy = (a, b) => {
    let result = 0;

    let aName = a.templeName.toLowerCase();
    let bName = b.templeName.toLowerCase();

    return aName > bName ? 1 :
        bName > aName ? -1 : 0;
}

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    // alert('Applying Sorting: ' + filter);
    switch (filter) {
        case 'templeNameAscending':
            output(templeList.sort(
                (templeA, templeB) => compareBy(templeA, templeB)));
            break;

        case 'templeNameDescending':
            output(templeList.sort(
                (templeA, templeB) => compareBy(templeB, templeA)));
            break;

        default:
            // using ternary operators
            output(templeList.sort(
                (templeA, templeB) => compareBy(templeA, templeB)));
            break;
    }
}

const checkMatch = (item) => {
    let filter = document.querySelector('#filter').value.toLowerCase();
    return item.templeName.toLowerCase().includes(filter);
}

const filterBy = () => {
    reset();    
    output(templeList.filter(checkMatch));
}


// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

document.querySelector('#filterBy').addEventListener('click', filterBy);