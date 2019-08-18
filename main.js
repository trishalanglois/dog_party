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
// function hideParagraph (paragraphNumber) {
//   if (paragraphNumber.style.display === 'none') {
//     paragraphNumber.style.display = 'block';
//   } else {
//     paragraphNumber.style.display = 'none'
//   }
// });

hideParagraph1.addEventListener('click', function() {
  var paragraph1ToHide = document.getElementById('column_paragraph1');
  if (paragraph1ToHide.style.display === 'none') {
    paragraph1ToHide.style.display = 'block';
  } else {
    paragraph1ToHide.style.display = 'none';
  }
});

hideParagraph2.addEventListener('click', function(){
  var paragraph2ToHide = document.getElementById('column_paragraph2');
  if (paragraph2ToHide.style.display === 'none') {
    paragraph2ToHide.style.display = 'block';
  } else {
    paragraph2ToHide.style.display = 'none';
  }
});

hideParagraph3.addEventListener('click', function() {
  var paragraph3ToHide = document.getElementById('column_paragraph3');
  if (paragraph3ToHide.style.display === 'none') {
    paragraph3ToHide.style.display = 'block';
  } else {
    paragraph3ToHide.style.display = 'none';
  }
});
