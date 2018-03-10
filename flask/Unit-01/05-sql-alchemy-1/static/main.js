$(function() {
    $('ul').on('click', 'li', function(event) {
        event.preventDefault();
        var $snackId = parseInt($(event.target).attr('id'));
        return $.ajax({
            method: 'DELETE',
            url: '/snacks/' + $snackId
        }).then(function() {
            $(event.target).fadeOut();
        });
    });
})