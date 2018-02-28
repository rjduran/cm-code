$ = require('jQuery'); // Javascript doesn't know about require. You need browserify to use this.

$(function(){
  $('#target').click(function(){
    console.log('yay! div clicked');
  });
});