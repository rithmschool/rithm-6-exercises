let $form = $("form");

$(function() {
    $form.hide();

    $(".home-link").on("click", function() {
        $form.hide();
    });

    $(".submit-link").on("click", function() {
        $form.show();
    });

    // NEED TO FIX THIS!
    // when clicking favorites, only show links with the star clicked
    $(".favorites-link").on("click", function() {
        $form.hide();
        if ($("li").hasClass("fas fa-star")) {
            $("li far fa-star").hide();
        }
    });

    $form.on("submit", function(event) {
        event.preventDefault();

        let title = $("#inputTitle").val();
        let url = $("#inputUrl").val();

        $("ol").append(
            $(
                "<li><span><i class='far fa-star'></i></span><a href=' " +
                url +
                "' target='_blank'> " +
                title +
                "</a></li>"
            )
        );

        $("#inputTitle").val("");
        $("#inputUrl").val("");

        $form.hide();
    });

    $(".fa-star").on("click", function() {
        $(this).toggleClass("far fa-star fas fa-star");
    });

    if ($("li").hasClass("fas fa-star")) {
        $("li").addClass("bookmarked");
    }
});

// when clicking star, add those to favorites