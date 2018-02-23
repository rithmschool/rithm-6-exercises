$(function() {
  $("#submit-nav").on("click", function() {
    $($form).toggleClass("show-form");
  });

  var $form = $("form");
  $($form).on("submit", function() {
    event.preventDefault();
    var $titleVal = $("#title").val();
    var $url = $("#url").val();

    var $newArticle = $("<li>", {
      html: `
      <span><i class="far fa-star fa-sm" style="color:lightgrey"></i>
      </span>
      ${$titleVal} <span><a>
    `
    });
    $("ol").append($newArticle);
    $form.trigger("reset");
  });

  $("ol").on("click", ".fa-star", function(event) {
    $(event.target).toggleClass("far fa-star fas fa-star");
  });
});
