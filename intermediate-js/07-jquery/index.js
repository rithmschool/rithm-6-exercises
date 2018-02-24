$(document).ready(function() {
  var $ol = $('#list ol');
  var $form = $('form');

  sampleItems();

  $('#toggleForm').on('click', function(e) {
    $form.toggleClass('hidden');
  })

  $('#toggleFavorites').on('click', function(e) {
    var $data = $ol.find('svg').filter('.fa-star')
    $data.closest('span').toggleClass('hidden');

  })

  $form.on('submit', function(e) {
    e.preventDefault();
    var titleTxt = $('#title').val();
    var urlTxt = $('#urlInput').val();
    addListItem(titleTxt, urlTxt);
    $form.trigger("reset");
  })


  $ol.on('click', '#star-container', function(e) {
    $(this).children().each(function() {
      $(this).toggleClass('hidden');
    });
  })

  function addListItem(title, url) {
    var $solidStarDiv = ($('<span>').addClass('hidden solid-star')).append($('<i class=\"fas fa-star\"><i>'));
    var $hollowStarDiv = $('<span>').append($('<i class=\"far fa-star\"><i>'));
    var $starContainer = $('<span>').attr('id', 'star-container').append($solidStarDiv, $hollowStarDiv);
    var $titleTxt = $('<span>').addClass('title-txt').text(title)
    var $urlTxt = $('<span>').addClass('urlTxt').text(`(${url})`)
    var $newLi = $('<li>');
    $newLi.append($starContainer, $titleTxt, $urlTxt);
    $ol.append($newLi);
  }

  function sampleItems() {
    addListItem('Visualizing Algorithms', 'visualgo.net');
    addListItem('Problem Solving with Rithm', 'rithmschool.com');
    addListItem('Buy this Book!', 'amazon.com');
  }

});
