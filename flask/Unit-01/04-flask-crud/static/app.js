$('#index-body ul').on('click', '.fa-eye-slash', function(event) {
  event.preventDefault();
  var $snackID = parseInt(
    $(event.target)
      .closest('li')
      .attr('id')
  );
  return $.ajax({
    method: 'DELETE',
    url: `/snacks/${$snackID}`
  }).then(function() {
    $(event.target)
      .closest('li')
      .fadeOut();
  });
});
