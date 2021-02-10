/* Lesson 6 */

/* FETCH */
let listOf = [];

const output = (listOfItems) => {
    listOfItems.forEach(element => {
        // alert('Loading list:' + element.____)

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

        // alert('Created assets for list:' + element.____)
        item.appendChild(itemNameOf);
        item.appendChild(itemLocation);
        item.appendChild(itemDedication);
        item.appendChild(itemPicture);

        // alert('Adding to document assets for list:' + element.____)

        document.querySelector('#list').appendChild(item);

        // alert('Added to document assets for list:' + element.____)
    });

}

// alert('Loading Temples')
fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    .then(response => response.json())
    .then(temples => {
        studentList = temples;
        output(studentList);
    });


// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

const reset = () => {
    document.querySelector('#temples').innerHTML = '';
} 
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
    
    switch (filter) {
        case 'sortAsc':
            output(studentList.sort(
                (templeA, templeB) => compareBy(templeA, templeB)));
            break;

        case 'sortDesc':
            output(studentList.sort(
                (templeA, templeB) => compareBy(templeB, templeA)));
            break;

        default:
            // using ternary operators
            output(studentList.sort(
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
    output(studentList.filter(checkMatch));
}


// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

document.querySelector('#filterBy').addEventListener('click', filterBy);