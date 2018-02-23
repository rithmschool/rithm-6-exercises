// on home page, show all links by default

// when clicking submit in nav bar, show form and links below
// after submitting form, immeditaely hide form
$(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();

        let title = $("#inputTitle").val();
        let url = $("#inputUrl").val();

        $("ol").append(
            $("<li><span><i class='far fa-star'></i></span> " + title + "</li>")
        );

        $("#inputTitle").val("");
        $("#inputUrl").val("");
    });

    $(".fa-star").click(function() {});
});

// when clicking star, add those to favorites

// when clicking favorites, only show links with the star clicked