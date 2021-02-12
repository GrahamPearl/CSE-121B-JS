/* Lesson 6 */

/* FETCH */
let listOf = [];
let sortByField = "Surname";

const output = (listOfItems) => {
    let items = 0;

    listOfItems.forEach(element => {
        let node = document.createElement('div');
        node.setAttribute('class', "col-sm-3");

        let card = document.createElement('div');
        card.setAttribute('class', "card text-white bg-dark mb-3");

        let cardPict = document.createElement("img");
        cardPict.setAttribute('class', "card-img-top mx-auto");
        cardPict.setAttribute('src', "./images/nophoto.png");
        cardPict.setAttribute('alt', "Student Photo - Unavailable");

        let cardbody = document.createElement('div');
        cardbody.setAttribute('class', "card-block");

        let item1 = document.createElement('h5');
        item1.textContent = element["Admin"];
        item1.setAttribute('class', "card-title");
        cardbody.appendChild(item1);

        item1 = document.createElement('h6');
        item1.textContent = element["Surname"];
        item1.setAttribute('class', "card-subtitle");
        cardbody.appendChild(item1);

        item1 = document.createElement('p');
        item1.textContent = element["First Name"];
        item1.setAttribute('class', "card-text");
        cardbody.appendChild(item1);

        item1 = document.createElement('p');
        item1.textContent = "Grade: " + element["Grade"] + " " + element["Reg"] + " " + element["House"];
        item1.setAttribute('class', "card-text");
        cardbody.appendChild(item1);

        card.appendChild(cardPict);
        card.appendChild(cardbody);
        node.appendChild(card);
        document.querySelector('#list').appendChild(node);
    });
}

let link = 'https://grahampearl.github.io/CSE-121B-JS/portfolio/data/Main.json';

fetch(link)
    .then(response => response.json())
    .then(list => {
        studentList = list;
        output(studentList);
    });

const reset = () => {
    document.querySelector('#list').innerHTML = '';
}
const compareBy = (a, b) => {
    let result = 0;

    let aName = a[sortByField].toLowerCase();
    let bName = b[sortByField].toLowerCase();

    return aName > bName ? 1 :
        bName > aName ? -1 : 0;
}

const sortBy = () => {
    reset();

    let filterField = document.querySelector('#sortByField').value;
    switch (filterField) {
        case 'byLast':
            sortByField = "Surname";
            break;
        case 'byFirst':
            sortByField = "First Name";
            break;
        case 'byReg':
            sortByField = "Reg";
            break;
        case 'byHouse':
            sortByField = "House";
            break;
    }

    let filterOrder = document.querySelector('#sortByOrder').value;

    switch (filterOrder) {
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

const filterBy = () => {
    reset();

    let filter = document.querySelector('#filter').value.toLowerCase();
    output(studentList.filter( item => item[sortByField].toLowerCase().includes(filter)));
}

const searchByGrade = () => {
    reset();

    let filter = document.querySelector('#filterGrade').value;        
    output(studentList.filter( item => (item['Grade'] === parseInt(filter)) ));
}

const searchByAdmin = () => {
    reset(); 

    let filter = document.querySelector('#adminNo').value;            
    output(studentList.filter( item => (item['Admin'] === parseInt(filter)) ));
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector('#sortByField').addEventListener('change', sortBy);
document.querySelector('#sortByOrder').addEventListener('change', sortBy);
document.querySelector('#filterGrade').addEventListener('change', searchByGrade);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

document.querySelector('#filterBy').addEventListener('click', filterBy);
document.querySelector('#findAdmin').addEventListener('click', searchByAdmin);