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
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
let favoriteFood = ['Pizza', 'Cheeseburgers', 'Nachos', 'Ice Cream'];
foodElement.textContent = favoriteFood;
let addFood = ['Broccoli'];
/*const favorites = favoriteFood.joint(',');*/
favoriteFood.push(addFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(0);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(-1);
foodElement.innerHTML += `<br>${favoriteFood}`;






