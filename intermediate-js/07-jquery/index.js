var $ul = $('#list ul');
var $form = $('form');
var $toggleForm = $('#toggleForm')

$toggleForm.on('click', function(e) {
  $form.toggleClass('hidden');
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

  var $solidStarDiv = $('<span>').append($('<i class=\"fas fa-star hidden\"><i>'));
  var $hollowStarDiv = $('<span>').append($('<i class=\"far fa-star\"><i>'));
  var $starContainer = $('<span>').append($solidStarDiv, $hollowStarDiv);

  $starContainer.css('border', '1px solid blue')
  $starContainer.on('click', function(e) {
    $(this).children().each(function() {
      $(this).toggleClass('hidden');
    });
  });

  var $num = $('<span>').text(num)
  var $titleTxt = $('<span>').text(title)
  var $urlTxt = $('<span>').text(url)

  var $newLi = $('<li>');
  $newLi.append($num, $starContainer, $titleTxt, $urlTxt);
  $ul.append($newLi);
}

function sampleItems() {
  addListItem('1', 'a', 'blurb');
  addListItem('2', 'b', 'blur');
  addListItem('3', 'c', 'marco polo');
}
