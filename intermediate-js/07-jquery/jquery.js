function isolateUrlName(str) {
    var com = str.indexOf(".com") + 4;

    if (str.indexOf("https://www.") !== -1) {
            return str.slice(12,com);
    }
    else if (str.indexOf("https://") !== -1) {
            return str.slice(8,com);
    }
}



$(function(){
    var $submitForm = $('#submit-form');
    var $form = $('form');
    var $title = $('#title');
    var $url = $('#url');
    var $row = $('ol');
    var $favorites = $('#favorites');
    var $all = $('#all');



    $submitForm.on("click", function(event){
        event.preventDefault();
        $form.toggle("display")
    });

    $form.on("submit", function(event) {
        event.preventDefault();
        var urlStr = $url.val().toString();
        var $newLi = $("<li>");
        var $newIcon = $("<i>");
        $newIcon.addClass("far fa-star");
        $newLi.addClass("rowli");
        var span1 = $("<span>");
        var span2 = $("<span>");
        span1.text($title.val());
        span1.addClass("span-li");
        span2.addClass("span-li2");
        span2.text("(" + isolateUrlName(urlStr)+")");
        $newLi.append($newIcon);
        $newLi.append(span1);
        $newLi.append(span2);
        $row.append($newLi);
        $form.get(0).reset();
        $form.toggle("display");
    });

    $row.on("click", ".fa-star", function(event){
        event.preventDefault();
        if($(event.target).hasClass("far")) {
            $(event.target).removeClass("far");
            $(event.target).addClass("fas")
        }
        else if ($(event.target).hasClass("fas")){
            $(event.target).removeClass("fas");
            $(event.target).addClass("far")
        }
    });

    $favorites.on("click", function(event) {
        $far = $(".far");
        $favorites.toggle('display');
        $all.toggle('display');
        $far.parent().hide();
    });
    $all.on("click", function(event) {
        $favorites.toggle('display');
        $all.toggle('display');
        $far.parent().show();
    });
}); 