$("#snack-list").on("click", ".fa-trash-alt", function(event) {
    event.preventDefault();
    var $snackID = parseInt(
        $(this)
        .closest("li")
        .attr("id")
    );
    return $.ajax({
        method: "DELETE",
        url: `/snacks/${$snackID}`
    }).then(data => {
        $(this)
            .closest("li")
            .fadeOut();
    });
});