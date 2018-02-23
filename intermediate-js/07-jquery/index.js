$(document).ready(function() {
  var $ul = $('#list ul');
  var $form = $('form');
  var $toggleForm = $('#toggleForm')
  let counter = 1;

  sampleItems();

  $toggleForm.on('click', function(e) {
    $form.toggleClass('hidden');
  })

  $form.on('submit', function(e) {
    e.preventDefault();
    var titleTxt = $('#title').val();
    var urlTxt = $('#url').val();
    addListItem(counter, titleTxt, urlTxt);
    counter++;
    $form.trigger("reset");
  })


  $ul.on('click', '#starContainer', function(e) {
    $(this).children().each(function() {
      $(this).toggleClass('hidden');
    });
  })

  function addListItem(num, title, url) {
    var $solidStarDiv = ($('<span>').addClass('hidden')).append($('<i class=\"fas fa-star\"><i>'));
    var $hollowStarDiv = $('<span>').append($('<i class=\"far fa-star\"><i>'));
    var $starContainer = $('<span>').attr('id', 'starContainer').append($solidStarDiv, $hollowStarDiv);
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

});
