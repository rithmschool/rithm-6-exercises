var $form = $("form");

$form.on("submit", function(event) {
  event.preventDefault();
  var $title = $("#title").val();
  var $url = $("#url").val();
  var $newLi = $("<li>", {
    text: $title,
    class: "listing"
  });
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
