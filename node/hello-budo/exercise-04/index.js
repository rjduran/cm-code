$ = require('jQuery');
require('bootstrap')

console.log("well this works!");

hello();
hello();
hello();
world();
foo();

function hello() {
  console.log("hello!!");
}

function world() {
  console.log("world!!");
}

function foo() {
  console.log("foo!");
}

$(function(){
  var clicked = false;
  
  $('#target').click(function(){
    console.log('yay! div clicked');
    // Ex: Change background color of .lead
    //$('.lead').css('background-color', '#ccc');
    
    // Ex: Toggle background and text colors
    var bgcolor = clicked ? 'black' : 'blue';
    var color = clicked ? 'red' : 'white';
    $('.lead').css('background-color', bgcolor);
    $('.lead').css('color', color);
    
    // Ex: Toggle background and text colors of button
    var bgcolor = clicked ? 'blue' : 'red';
    var color = clicked ? 'white' : 'yellow';
    $('#target').css('background-color', bgcolor);
    $('#target').css('color', color);
    
    clicked = !clicked;
    
  });
  
  $('.starter-template').append('<p>This paragraph is appended to the starter-template class just after the button using jQuery. Change this line to see it change in the <strong>HTML</strong>.</p>');
        
});





