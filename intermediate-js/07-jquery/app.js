$(document).ready(function(){

    // opening submission form
    $('.submitNav').on('click', function(e){
        $('.form').toggleClass('hidden')
    })

    // filter for favorites
    $('.all').on('click', function(e){
        $('.all').toggleClass('hidden')
        $('.favs').toggleClass('hidden')
        $('.news').find($('*')).filter($('.full.hidden')).closest('li').toggleClass('hidden')
    })

    // filter back to everything
    $('.favs').on('click', function(e){
        $('.all').toggleClass('hidden')
        $('.favs').toggleClass('hidden')
        $('.news').find($('*')).filter($('.full.hidden')).closest('li').toggleClass('hidden')
    })

    // append new Lines from form submission
    var count = 1
    $('.form').on('submit', function(e){
        e.preventDefault();
        var title = $('#title').val();
        var url = $('#url').val();
        var lineItem = 
        `<li class='line'>
            <label>${count +1}.</label>
            <div class='icons info' id='line${count+1}'>
                <i class="far fa-star empty"></i>
                <i class="fa fa-star hidden full"></i>
            </div>
            <a class='info' href="${url}">${title}</a>
            <a class='info' href="${url}">(${url.slice(url.indexOf("wwww") + 4, url.indexOf(".com") + 4)})</a>
        </li>`

        $('.news').append(lineItem)
        $('.form').toggleClass('hidden')
        $('#title').val('');
        $('#url').val('');
        count ++;
    })

    // favorite a line item
    $(`.news`).on('click', '.icons', function(e){
        $(this).children().each(function(){
            $(this).toggleClass('hidden')
        })
    })
});