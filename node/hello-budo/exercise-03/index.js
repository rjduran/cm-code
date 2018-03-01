$ = require('jQuery');

$(function(){
  $('#target').click(function(){
    console.log('yay! div clicked');
  });
});

console.log("well this works!");

hello();
hello();
hello();
world();

function hello() {
  console.log("hello!!");
}

function world() {
  console.log("world!!");
}






