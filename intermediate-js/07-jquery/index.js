$(document).ready(function() {
  var $ol = $('#list ol');
  var $form = $('form');
  var $toggleForm = $('#toggleForm')
  var $toggleFavorites = $('#toggleFavorites')

  sampleItems();

  $toggleForm.on('click', function(e) {
    $form.toggleClass('hidden');
  })

  $toggleFavorites.on('click', function(e) {
    console.log('works');
  })

  $form.on('submit', function(e) {
    e.preventDefault();
    var titleTxt = $('#title').val();
    var urlTxt = $('#urlInput').val();
    addListItem(titleTxt, urlTxt);
    $form.trigger("reset");
  })


  $ol.on('click', '#starContainer', function(e) {
    $(this).children().each(function() {
      $(this).toggleClass('hidden');
    });
  })

  function addListItem(title, url) {
    var $solidStarDiv = ($('<span>').addClass('hidden')).append($('<i class=\"fas fa-star\"><i>'));
    var $hollowStarDiv = $('<span>').append($('<i class=\"far fa-star\"><i>'));
    var $starContainer = $('<span>').attr('id', 'starContainer').append($solidStarDiv, $hollowStarDiv);
    var $titleTxt = $('<span>').addClass('titleTxt').text(title)
    var $urlTxt = $('<span>').addClass('urlTxt').text(`(${url})`)
    var $newLi = $('<li>');
    $newLi.append($starContainer, $titleTxt, $urlTxt);
    $ol.append($newLi);
  }

  function sampleItems() {
    addListItem('a', 'blurb');
    addListItem('b', 'blur');
    addListItem('c', 'marco polo');
  }

});
