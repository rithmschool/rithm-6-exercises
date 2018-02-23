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
    var title = $('#title').val();
    var url = $('#url').val();
    e.preventDefault();

    $('.news').append(
    `<li class='line'>
        <label>${count +1}.</label>
        <div class='icons info'>
            <i class="far fa-star empty"></i>
            <i class="fa fa-star hidden full"></i>
        </div>
        <a class='info' href="${url}">${title}</a>
	    <a class='info' href="${url}">(${url})</a>
    </li>`
    )

    count ++;
})

$(".fa-star").on("click", function() {
    $(this).toggleClass("far fa-star fas fa-star");
}); 

$('.icons').on('click', function(e){
    $(this).children().each(function(){
        $(this).toggleClass('hidden')
    })
})