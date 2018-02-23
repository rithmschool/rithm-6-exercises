let $form = $("form");

$(function() {
    $form.hide();

    $(".home-link").on("click", function(event) {
        $form.hide();
    });

    $(".submit-link").on("click", function(event) {
        $form.show();
    });

    $form.on("submit", function(event) {
        event.preventDefault();

        let title = $("#inputTitle").val();
        let url = $("#inputUrl").val();

        $("ol").append(
            $("<li><span><i class='far fa-star'></i></span> " + title + "</li>")
        );

        $("#inputTitle").val("");
        $("#inputUrl").val("");

        $form.hide();
    });

    $(".fa-star").on("click", function() {
        $(this).toggleClass("far fa-star fas fa-star");
    });
});

// when clicking star, add those to favorites

// when clicking favorites, only show links with the star clicked