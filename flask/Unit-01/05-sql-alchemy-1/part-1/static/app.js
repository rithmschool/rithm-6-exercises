$(document).ready(function() {
    var elId;
    $('li').on('click', 'button', function(event) {
        
        el = $(event.target).parent();
        elId = el.attr('id');
        
        $.ajax({
            url: '/snacks',
            method: 'DELETE',
            data: {
                id: elId,
            }
        }).then(function(val) {
            el.fadeOut();
            console.log('succes!')
        });
    });
});