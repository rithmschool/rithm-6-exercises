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

    // ability to submit new list items
    $('button').on('click', function() {
        var inputText = $('input').eq(0).val();
        var inputUrl = $('input').eq(1).val();
        var displayUrl = inputUrl.split('.').splice(-2).join('.');
        $form.trigger('reset');

        var newListItem = $('<li>');
        var favStar = $('<span>').addClass('far fa-star fa-xs');
        var inputUrlA = $('<a>').addClass('li__url').attr('href', inputUrl).attr('target', '_blank').text(displayUrl);
        
        newListItem.text(' ' + inputText + ' ');
        newListItem.prepend(favStar);
        newListItem.append(inputUrlA);
        
        $ol.append(newListItem);
    });
    
    // ability to switch between all list items and favorite list items
    $('#fav-all-btn').on('click', function() {
        if(isSubmissionFormOpen) {
            if($ol.css('display') === 'block') {
                $form.fadeToggle();
                $ol.fadeToggle(function() {
                    var tempList = $ol.children().clone();
                    for(let i = 0; i < tempList.length; i++) {
                        if(tempList.eq(i).children().eq(0).attr('data-prefix') === 'fas') {
                            $ul.append(tempList.eq(i));
                        }
                    }
                    $ul.fadeToggle();
                    $favAllBtn.text('all');
                });
            } else {
                $ul.fadeToggle(function() {
                    $ul.html('');
                    $ol.fadeToggle();
                    $form.fadeToggle();
                    $favAllBtn.text('favorites');
                });
            }
        } else {
            if($ol.css('display') === 'block') {
                $ol.fadeToggle(function() {
                    var tempList = $ol.children().clone();
                    for(let i = 0; i < tempList.length; i++) {
                        if(tempList.eq(i).children().eq(0).attr('data-prefix') === 'fas') {
                            $ul.append(tempList.eq(i));
                        }
                    }
                    $ul.fadeToggle();
                    $favAllBtn.text('all');
                });
            } else {
                $ul.fadeToggle(function() {
                    $ul.html('');
                    $ol.fadeToggle();
                    $favAllBtn.text('favorites');
                });
            }
        } 
    });
    
    // ability to select favorite list items
    $ol.on('click', 'svg', function() {
        if($(this).attr('data-prefix') === 'fas') {
            $(this).attr('data-prefix', 'far');
        } else {
            $(this).attr('data-prefix', 'fas');
        }
    });
});