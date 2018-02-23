var $ul = $('#list ul');
var $form = $('form');
var $toggleForm = $('#toggleForm')

$toggleForm.on('click', function(e) {
  if ($form.is(":visible")) $form.hide();
  else $form.show();

})


sampleItems();

var counter = 1;
$form.on('submit', function(e) {
  e.preventDefault();
  var titleTxt = $('#title').val();
  var urlTxt = $('#url').val();
  addListItem(counter, titleTxt, urlTxt);
  counter++;
  $form.trigger("reset");
})

function addListItem(num, title, url) {
  var $num = $('<span>').text(num)
  var $titleTxt = $('<span>').text(title)
  var $urlTxt = $('<span>').text(url)

  var $newLi = $('<li>');
  $newLi.append($num, $titleTxt, $urlTxt);
  $ul.append($newLi);
}

function sampleItems() {
  addListItem('1', 'a', 'blurb');
  addListItem('2', 'b', 'blur');
  addListItem('3', 'c', 'marco polo');
}
