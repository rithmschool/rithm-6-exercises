$(document).ready(function() {
    var isSubmissionFormOpen = true;
    var $favAllBtn = $('fav-all-btn');
    var $form = $('form');
    var $ol = $('ol');
    var $ul = $('ul');
    
    // ability to open/close the submission field
    $('#submit-btn').on('click', function() {
        if($ol.css('display') === 'block') {
            $form.slideToggle();
            isSubmissionFormOpen = !isSubmissionFormOpen;
        }
    });


    $('button').on('click', function() {
        var inputText = $('input').eq(0).val();
        var inputUrl = $('input').eq(1).val();
        var displayUrl = inputUrl.split('.').splice(-2).join('.');
        $form.trigger('reset');

        var newListItem = $('<li>');
        var favStar = $('<span>').addClass('far fa-star fa-xs');
        var inputUrlA = $('<a>').addClass('li__url').attr('href', inputUrl).attr('target', '_blank').text(displayUrl);
        console.log(inputUrlA)
        newListItem.text(' ' + inputText + ' ');
        newListItem.prepend(favStar);
        newListItem.append(inputUrlA);
        
        $ol.append(newListItem);
    });
    
    $('#fav-all-btn').on('click', function() {
        if(isSubmissionFormOpen) {
            if($ol.css('display') === 'block') {
                $form.fadeToggle();
                $ol.fadeToggle(function() {
                    $ul.fadeToggle();
                    $favAllBtn.text('all');
                });
            } else {
                $ul.fadeToggle(function() {
                    $ol.fadeToggle();
                    $form.fadeToggle();
                    $favAllBtn.text('favorites');
                });
            }
        } else {
            if($ol.css('display') === 'block') {
                $ol.fadeToggle(function() {
                    $ul.fadeToggle();
                    $favAllBtn.text('all');
                });
            } else {
                $ul.fadeToggle(function() {
                    $ol.fadeToggle();
                    $favAllBtn.text('favorites');
                });
            }
        } 
    });
    
    $ol.on('click', 'svg', function() {
        if($(this).attr('data-prefix') === 'fas') {
            $(this).attr('data-prefix', 'far');
        } else {
            $(this).attr('data-prefix', 'fas');
        }
    });
});