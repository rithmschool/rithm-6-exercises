$(document).ready(function() {
  let $form = $("form");
  let $url = $("#inputPassword");
  let $title = $("#staticEmail");
  let $toDoList = $("#allToDo");
  let $favorite = $("#favoriteToDo");
  let $showFavorites = $(".favorites");
  let $submit = $("#showform");
  let $all = $("#all");
  $all.hide();

  $form.on("submit", function(event) {
    event.preventDefault();
    if (!$title.val() || !$url.val()) {
      alert("Please input all fields");
    } else {
      let $newToDo = $("<li>");
      // CREATES THE NICER URL - HACKJOB
      let urlT = $url.val();
      let $test = $("<a>")
        .prop("href", urlT)
        .prop("hostname");
      //
      let $newToDoURL = $("<a>", { class: "atag" })
        .attr("href", $url.val())
        .text("(" + $test + ")");
      let $text = $("<p>", { class: "notfloat" }).text($title.val());
      let $star = $("<i>", { class: "far fa-star" });

      $newToDo.append($star);
      $newToDo.append($text);
      $newToDo.append($newToDoURL);
      $toDoList.append($newToDo);

      $form.trigger("reset");
      $form.slideUp(500);
    }
  });

  $toDoList.on("click", "i", function(event) {
    if ($(event.target).hasClass("far fa-star")) {
      $(event.target)
        .removeClass("far fa-star")
        .addClass("fas fa-star");
    } else {
      $(event.target)
        .removeClass("fas fa-star")
        .addClass("far fa-star");
    }
  });

  $submit.on("click", function() {
    $form.slideDown(500);
  });

  $showFavorites.on("click", function() {
    // select all fas fa-star
    // hide
    $showFavorites.hide(500);
    $all.show(500);
    $(".far")
      .parent()
      .hide();
  });

  $all.on("click", function() {
    $all.hide(500);
    $showFavorites.show(500);
    $(".far")
      .parent()
      .show();
  });
});
