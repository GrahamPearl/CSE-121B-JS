/* Lesson 6 */

/* FETCH */
let listOf = [];

const output = (listOfItems) => {
    listOfItems.forEach(element => {       

        let item = document.createElement('article');        
        let itemData = document.createElement('h3');
            itemData.textContent = element.Surname;        
            item.appendChild(itemData);
                
        /*itemData[1].textContent = element.Admin;
        itemData[2].textContent = element.Grade;
        itemData[3].textContent = element.Reg;
        itemData[4].textContent = element.House;
        */
        //itemPicture.setAttribute('src', element.Admin+".jpg")
        //itemPicture.setAttribute('alt', "Photo of "+element.Admin)
        
        document.querySelector('#list').appendChild(item);        
    });
}

alert('Loading Data')
fetch('https://grahampearl.github.io/CSE-121B-JS/portfolio/data/Main.json')
    .then(response => response.json())
    .then(list => {
        studentList = list;
        output(studentList);
    });


// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

const reset = () => {
    document.querySelector('#list').innerHTML = '';
} 
const compareBy = (a, b) => {
    let result = 0;

    let aName = a.Admin.toLowerCase();
    let bName = b.Admin.toLowerCase();

    return aName > bName ? 1 :
        bName > aName ? -1 : 0;
}

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;
    
    switch (filter) {
        case 'sortAsc':
            output(studentList.sort(
                (adminA, adminB) => compareBy(adminA, adminB)));
            break;

        case 'sortDesc':
            output(studentList.sort(
                (adminA, adminB) => compareBy(adminB, adminA)));
            break;

        default:
            // using ternary operators
            output(studentList.sort(
                (adminA, adminB) => compareBy(adminA, adminB)));
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