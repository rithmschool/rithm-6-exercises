$(function() {
  $('#index-body ul').on('click', '.fa-ban', function(event) {
    event.preventDefault();
    var $bcID = parseInt(
      $(event.target)
        .closest('li')
        .attr('id')
    );
    return $.ajax({
      method: 'DELETE',
      url: `/bootcamps/${$bcID}`
    }).then(function() {
      $(event.target)
        .closest('li')
        .fadeOut();
    });
  });

  $('#index-body ul').on('click', '.fa-arrow-up', function(event) {
    var $bcID = parseInt(
      $(event.target)
        .closest('li')
        .attr('id')
    );
    return $.ajax({
      method: 'PATCH',
      url: `/bootcamps/${$bcID}/up`,
      success: location.reload()
    }).then(function() {});
  });

  $('#index-body ul').on('click', '.fa-arrow-down', function(event) {
    var $bcID = parseInt(
      $(event.target)
        .closest('li')
        .attr('id')
    );
    $.ajax({
      method: 'PATCH',
      url: `/bootcamps/${$bcID}/down`,
      success: location.reload()
    }).then(function() {});
  });
});
