var $title = $("#title");
var $list = $("#posts")
var $link = $("#link");
var $form = $("form");
var $favorites = $("#favorites");
var $submit = $("#submit");
var $starredElements = $(".far")
$(document).ready(function(){
    console.log("hello")
})
$form.on("submit", function(event){
    event.preventDefault();
    let $post = $("<li>");
    let $star = $("<i>").addClass("far fa-star")
    let $titleText = $("<span>");
    let $url = $("<span>")
    $post.append($star);
    $titleText.addClass("larger-text").text($title.val());
    $post.append($titleText);
    $url.text("(" + $link.val() + ")");
    $list.append($post.append($url))
})


$list.on("click", "i", function(event){
    $(event.target).toggleClass("far fa-star fas fa-star");
    $
});


$submit.on("click", function(){
    $form.toggle("hide");
});

$favorites.on("click", function(){
    $form.toggle("hide")
    $starredElements.parent().hide();
    
    
});