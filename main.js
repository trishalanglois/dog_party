var changeDogName = document.querySelector('#name-this-dog-button');
var nameInput = document.getElementById('dog-name-box');
var updateName = document.querySelector('#some-dogs');

changeDogName.addEventListener('click', function() {
  updateName.innerText = nameInput.value;
});

var hideParagraph1 = document.getElementById('left-bottom-button');
var hideParagraph2 = document.getElementById('middle-bottom-button');
var hideParagraph3 = document.getElementById('right-bottom-button');

hideParagraph1.addEventListener('click', function(){
  var columnParagraph1 = document.getElementById('column-paragraph1');

  if(columnParagraph1.style.display === 'none') {
    columnParagraph1.style.display = 'block';
  } else {
    columnParagraph1.style.display = 'none';
  }
});

hideParagraph2.addEventListener('click', function(){
  var columnParagraph2 = document.getElementById('column-paragraph2');

  if(columnParagraph2.style.display === 'none') {
    columnParagraph2.style.display = 'block';
  } else {
    columnParagraph2.style.display = 'none';
  }
});

hideParagraph3.addEventListener('click', function(){
  var columnParagraph3 = document.getElementById('column-paragraph3');

  if(columnParagraph3.style.display === 'none') {
    columnParagraph3.style.display = 'block';
  } else {
    columnParagraph3.style.display = 'none';
  }
});
