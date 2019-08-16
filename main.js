var changeDogName = document.querySelector('#name_this_dog_button');
var nameInput = document.getElementById('dog_name_box');
var userDogName = document.querySelector('#name_this_dog_button');
var updateName = document.querySelector('#some_dogs');

changeDogName.addEventListener('click', function() {
  // console.log(nameInput.value);
  // console.log(spanTest.innerText);
  updateName.innerText=nameInput.value;
});




// changeDogName.addEventListener('click', function() {
//
// });
//
// console.log(nameInput.innerText);

// document.querySelector('#some_dogs').innerText = ' how much I wish I could use flexbox';


//user enters name
//user clicks name this dog button
//new name is value of variable
// variable is in innertext
// returns innertext with variable value
