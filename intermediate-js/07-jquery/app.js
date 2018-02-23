$('.submitNav').on('click', function(e){
    $('.form').toggleClass('hidden')
})

$('.all').on('click', function(e){
    $('.all').toggleClass('hidden')
    $('.favs').toggleClass('hidden')
    $('.news').find($('*')).filter($('.full.hidden')).closest('li').toggleClass('hidden')
})

$('.favs').on('click', function(e){
    $('.all').toggleClass('hidden')
    $('.favs').toggleClass('hidden')
    $('.news').find($('*')).filter($('.full.hidden')).closest('li').toggleClass('hidden')
})

// append new Links
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
        <a class='info' href="${url}">(${url.slice(8, -1)})</a>
    </li>`
    $('.news').append(lineItem)

    $(`#${count + 1}`).on('click', function(e){
        $(this).children().each(function(){
            $(this).toggleClass('hidden')
        })
    })
    $('.form').toggleClass('hidden')
    $('#title').val('');
    $('#url').val('');
    count ++;
})

$(`.icons`).on('click', function(e){
    $(this).children().each(function(){
        $(this).toggleClass('hidden')
    })
})