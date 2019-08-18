var changeDogName = document.querySelector('#name_this_dog_button');
var nameInput = document.getElementById('dog_name_box');
var userDogName = document.querySelector('#name_this_dog_button');
var updateName = document.querySelector('#some_dogs');

changeDogName.addEventListener('click', function() {
  updateName.innerText = nameInput.value;
});

//Iteration 3 JS

var hideParagraph = document.getElementById('left_bottom_button');

hideParagraph.addEventListener('click', function() {
  var paragraphToHide = document.querySelector('.column_paragraph');
  if (paragraphToHide.style.display === 'none') {
    paragraphToHide.style.display = "block";
  } else {
    paragraphToHide.style.display = "none";
  }
});

  // var hideParagraph = querySelector('.column_paragraph');
  //
  // if (hideParagraph.style.display !== 'none') {
  //   hideParagraph.style.display = 'none';
  // } else {
  //   hideParagraph.style.display = 'block';
  // };




// hideHowToDog.addEventListener('click', function() {
//     paragraphToHide.toggleAttribute('column_paragraph')

    // console.log('ruff ruff');
// });

//turn on display: hidden for the paragraph
//turn off display: hidden for the paragraph
