$(function() {
  var $form = $('#form');

  $form.on('submit', function(event) {
    event.preventDefault();

    var $title = $('#title').val();
    var $url = $('#url').val();
    var $li = $('<li>');
    var $i = $('<i>').addClass('far fa-bookmark bookmark');
    $('ol').append($li);
    $li.append($i, $title, ' (', $url, ')');
    $form.trigger('reset').hide();
  });

  $('ol').on('click', 'i', function(event) {
    $(event.target).toggleClass('far fas');
  });
});
