$(document).ready(function() {
    // DOWN VOTE BUTTON
    $('ul').on('click', '.down-btn', function(event) {
        let el;
        let elId;
        if($(event.target).parent().parent().attr('id')) {
            el = $(event.target).parent().parent();
            elId = el.attr('id');
        } else if($(event.target).parent().parent().parent().attr('id')) {
            el = $(event.target).parent().parent().parent();
            elId = el.attr('id');
        } else {
            el = $(event.target).parent().parent().parent().parent();
            elId = el.attr('id');
        }
        $.ajax({
            method: 'PATCH',
            url: '/bootcamps/' + elId + '/vote',
            data: {
                action: 'down_vote',
            }
        }).then(function(val) {
            el.children().eq(3).children().eq(1).children().eq(0).text(val);
        });
    });

    // UP VOTE BUTTON
    $('ul').on('click', '.up-btn', function(event) {
        let el;
        let elId;
        if($(event.target).parent().parent().attr('id')) {
            el = $(event.target).parent().parent();
            elId = el.attr('id');
        } else if($(event.target).parent().parent().parent().attr('id')) {
            el = $(event.target).parent().parent().parent();
            elId = el.attr('id');
        } else {
            el = $(event.target).parent().parent().parent().parent();
            elId = el.attr('id');
        }
        $.ajax({
            method: 'PATCH',
            url: '/bootcamps/' + elId + '/vote',
            data: {
                action: 'up_vote'
            }
        }).then(function(val) {
            el.children().eq(3).children().eq(1).children().eq(0).text(val);
        });
    });

    // DELETE BUTTON
    $('ul').on('click', '.del-btn', function(event) {
        let el;
        let elId;
        if($(event.target).parent().attr('id')) {
            el = $(event.target).parent();
            elId = el.attr('id');
        } else if($(event.target).parent().parent().attr('id')) {
            el = $(event.target).parent().parent();
            elId = el.attr('id');
        } else {
            el = $(event.target).parent().parent().parent();
            elId = el.attr('id');
        }
        $.ajax({
            method: 'DELETE',
            url: '/bootcamps/' + elId,
        }).then(function() {
            // el.removeClass('d-flex')
            el.fadeOut(function() {
                el.removeClass('d-flex')
            });
        });
    });
});