var $title = $("#title");
var $list = $("#posts")
var $link = $("#link");

var $form = $("form")
$(document).ready(function(){
    console.log("hello")
})
$form.on("submit", function(event){
    event.preventDefault();
    var $post = $("<li>");
    let $star = $("<button>", { class: "far fa-star"});
    $post.append($star);
    var $titleText = $("<span>");
    $titleText.addClass("larger-text");
    $titleText.text($title.val());
    $post.append($titleText);
    var $url = $("<span>")
    $url.text("(" + $link.val() + ")");
    $post.append($url)
    $list.append($post)
})



$list.on("click", "svg", function(event){
    $(event.target).toggleClass("fas fa-star")
})