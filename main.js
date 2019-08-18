var changeDogName = document.querySelector('#name_this_dog_button');
var nameInput = document.getElementById('dog_name_box');
var userDogName = document.querySelector('#name_this_dog_button');
var updateName = document.querySelector('#some_dogs');

changeDogName.addEventListener('click', function() {
  updateName.innerText = nameInput.value;
});

var hideParagraph1 = document.getElementById('left_bottom_button');
var hideParagraph2 = document.getElementById('middle_bottom_button');
var hideParagraph3 = document.getElementById('right_bottom_button');
function hideParagraph (paragraphNumber) {
  if (paragraphNumber.style.display === 'none') {
    paragraphNumber.style.display = 'block';
  } else {
    paragraphNumber.style.display = 'none'
  }
});

hideParagraph ('column_paragraph1');

hideParagraph('column_paragraph2');

hideParagraph('column_paragraph3');
