/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Matthew Graham';
let currentYear = '2023';
let profilePicture = 'images/mew_02.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
let text = document.getElementById('#year').textContent;
img.setAttribute('src', profilePicture);
alt.setAttribute('src', `Profile image of [${fullName}]`);





/* Step 5 - Array */
const favoriteFood = ['Pizza', 'Cheeseburgers', 'Nachos', 'Ice Cream'];
const addFood = ['Broccoli'];
const favorites = favoriteFood.joint(',');
favoriteFood.push(addFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(0);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(-1);
foodElement.innerHTML += `<br>${favoriteFood}`;






