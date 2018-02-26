var $form = $("form");

$form.on("submit", function(event) {
  event.preventDefault();
  var $star = $('<span class="favfalse"><i class="far fa-star"></i></span>');
  $star.attr("aria-hidden", "true");
  var $title = $("#title").val();
  var $url = $("#url").val();
  var $newLi = $("<li>", {
    class: "listing",
    id: "favorite-false"
  });
  $newLi.append($star);
  var $newUrl = $("<small>", {
    text: "(" + $url + ")",
    class: "listing__url ml-2"
  });
  $($newLi).append($newUrl);
  $("ol").append($newLi);
  $form.trigger("reset");
});

$("#submitbutton").click(function(event) {
  $form.toggle();
});

$("ol").on("click", "i", function() {
  $(this).attr("class", "fas fa-star");
});
