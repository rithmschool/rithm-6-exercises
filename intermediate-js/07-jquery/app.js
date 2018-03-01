let $form = $("form");

$(function() {
    $form.hide();

    $(".home-link").on("click", function() {
        $form.hide();
        $("li").show();
    });

    $(".submit-link").on("click", function() {
        $form.show();
        $("li").show();
    });

    $form.on("submit", function(event) {
        event.preventDefault();

        let title = $("#inputTitle").val();
        let url = $("#inputUrl").val();
        let hostName = $("<a>")
            .prop("href", url)
            .prop("hostname");

        $("ol").append(
            $(
                "<li><span><i class='far fa-star'></i></span><a href=' " +
                url +
                "' target='_blank'> " +
                title +
                " (" +
                hostName +
                ")" +
                "</a></li>"
            )
        );

        $("#inputTitle").val("");
        $("#inputUrl").val("");

        $form.slideUp("slow");
    });

    $("ol").on("click", ".fa-star", function() {
        $(this).toggleClass("far fa-star fas fa-star");
        $(this)
            .closest("li")
            .toggleClass("favorited");
    });

    let $favorites = $(".favorites-link");
    $favorites.data("text-original", $favorites.text());
    $favorites.text($favorites.data("text-swap"));

    $favorites.on("click", function() {
        $form.hide();
        $("li:not(.favorited)").hide();
        let el = $(this);
        if (el.text() === el.data("text-swap")) {
            el.text(el.data("text-original"));
        } else {
            el.data("text-original", el.text());
            el.text(el.data("text-swap"));
            $("li").show();
        }
    });
});