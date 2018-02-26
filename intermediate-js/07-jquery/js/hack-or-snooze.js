$(document).ready(function() {
    var isSubmissionFormOpen = true;
    var $favAllBtn = $('#fav-all-btn');
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
    $('button').on('click', function(event) {
        event.preventDefault();
        var inputText = $('input').eq(0).val();
        var inputUrl = $('input').eq(1).val();
        var displayUrl = inputUrl.split(/[.,\/ ]/).splice(-2).join('.');
        
        function isUrlValid(url) {
            return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
        }

        if(inputText !== '' && isUrlValid(inputUrl)) {
            $form.trigger('reset');

            var newListItem = $('<li>');
            var favStar = $('<span>').addClass('far fa-star fa-xs');
            // var inputUrlA = $('<a>').addClass('li__url').attr('href', inputUrl).attr('target', '_blank').text(displayUrl);
            var inputUrlSpan = $('<span>').addClass('li__link--grey-and-small').html('(<a class="li__url" target="_blank" href=' + inputUrl + '>' + displayUrl + '</a>)');
            
            newListItem.text(' ' + inputText + ' ');
            newListItem.prepend(favStar);
            newListItem.append(inputUrlSpan);
            
            $ol.append(newListItem);
            $form.slideUp();
            isSubmissionFormOpen = !isSubmissionFormOpen;
        }
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
    
    // ability to select favorite list items from all items tab
    $ol.on('click', 'svg', function() {
        if($(this).attr('data-prefix') === 'fas') {
            $(this).attr('data-prefix', 'far');
        } else {
            $(this).attr('data-prefix', 'fas');
        }
    });

    // ability to deselect fav list items in fav tab
    $ul.on('click', 'svg', function() {
        $(this).parent().fadeOut();
        var statusChangeItem = $(this).next().text();
        for(var i = 0; i < $ol.children().length; i++) {
            if($ol.children().eq(i).children().eq(1).text() === statusChangeItem) {
                $ol.children().eq(i).children().eq(0).attr('data-prefix', 'far');
            };
        }
    });
});