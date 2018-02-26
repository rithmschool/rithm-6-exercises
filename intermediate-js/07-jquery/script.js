var $form = $("form");

$form.on("submit", function(event) {
  event.preventDefault();
  var $star = $('<i class="far fa-star"></i>');
  $star.attr("aria-hidden", "true");
  var $title = $("#title").val();
  var $url = $("#url").val();
  var $newLi = $("<li>", {
    class: "listing favfalse"
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

$("ol").on("click", "li", function() {
  $(this).toggleClass("favfalse");
  $(this)
    .find("i")
    .toggleClass("far fas");
});

$("#favbutton").click(function() {
  $(".favfalse").toggle();
});
