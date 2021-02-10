// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const generateLinks = () => {

    let itemU = document.createElement('li');
    let itemA = document.createElement('a');
    itemA.textContent = element.linkFor;
    itemA.setAttribute('href', element.linkURL);
    itemU.appendChild(itemA);

    document.querySelector('#menu').appendChild(itemU);
}