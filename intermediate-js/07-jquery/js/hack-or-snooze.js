$(document).ready(function() {
    var isSubmissionFormOpen = true;
    $('#submit-btn').on('click', function() {
        $('form').slideToggle();
        isSubmissionFormOpen = !isSubmissionFormOpen;
    });
    $('#fav-all-btn').on('click', function() {
        if(isSubmissionFormOpen) {
            if($('ol').css('display') === 'block') {
                $('form').fadeToggle();
                $('ol').fadeToggle(function() {
                    $('ul').fadeToggle();
                });
            } else {
                $('ul').fadeToggle(function() {
                    $('ol').fadeToggle();
                    $('form').fadeToggle();
                });
            }
        } else {
            if($('ol').css('display') === 'block') {
                $('ol').fadeToggle(function() {
                    $('ul').fadeToggle();
                });
            } else {
                $('ul').fadeToggle(function() {
                    $('ol').fadeToggle();
                });
            }
        }
        
        
        
    });
    $('li').on('click', 'svg', function() {
        if($(this).attr('data-prefix') === 'fas') {
            $(this).attr('data-prefix', 'far');
        } else {
            $(this).attr('data-prefix', 'fas');
        }
    });
});