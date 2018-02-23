var $ul = $('#list ul');
var $form = $('form');


var counter = 1;
$form.on('submit', function(e) {
  e.preventDefault();
  var $newLi = $('<li>');
  var $number = $('<span>').text(counter)
  var $titleTxt = $('<span>').text($('#title').val())
  var $urlTxt = $('<span>').text($('#url').val())
  var $newLi = $('<li>');
  $newLi.append($number, $titleTxt, $urlTxt);
  $ul.append($newLi);
  counter++;
  $form.trigger("reset");
})