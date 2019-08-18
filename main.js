var changeDogName = document.querySelector('#name_this_dog_button');
var nameInput = document.getElementById('dog_name_box');
var userDogName = document.querySelector('#name_this_dog_button');
var updateName = document.querySelector('#some_dogs');

changeDogName.addEventListener('click', function() {
  updateName.innerText = nameInput.value;
});

var hideParagraph = document.getElementById('left_bottom_button');

hideParagraph.addEventListener('click', function() {
  var paragraphToHide = document.querySelector('.column_paragraph');
  if (paragraphToHide.style.display === 'none') {
    paragraphToHide.style.display = "block";
  } else {
    paragraphToHide.style.display = "none";
  }
});
