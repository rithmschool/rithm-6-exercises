$(document).ready(function() {
  $('#add__btn').on('click', function(e) {
    e.preventDefault();
    var newForm = $('#new__section');

    if (newForm.hasClass('hidden')) {
      // newForm.removeClass('hidden');
      newForm.slideDown(1000);
    } else {
      //should slide up when clicked
      newForm.addClass('hidden');
      newForm.slideUp(1000);
    }
  });

  $('#snack__list').on('submit', '.edit__btn', function(e) {
    e.preventDefault();
    console.log('edit');
    var editForm = $('.edit__form');
    var target = $(e.target);
    var closestTarget = target.closest('.edit__form');
    debugger;
    closestTarget.slideDown();
    //slide toggle
    // if (editForm.hasClass('hidden')) {
    //   // editForm.removeClass('hidden');
    //   editForm.slideDown(1000);
    // } else {
    //   //should slide up when clicked
    //   // editForm.addClass('hidden');
    //   editForm.slideUp(1000);
    // }
  });

  $('#snack__list').on('submit', '#delete__btn', function(e) {
    e.preventDefault();
    console.log('delete');
  });
});
