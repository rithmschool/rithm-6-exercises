// $(function() {
//     $("ul").on("click", "fas fa-trash", function(event) {
//         event.preventDefault();
//         var $snackId = parseInt($(event.target).closest('li').attr("id"));
//         return $.ajax({
//             method: "DELETE",
//             url: `/snacks/${$snackId}`
//         }).then(function() {
//             $(event.target).closest('li').fadeOut();
//         });
//     });
// })


$("#snack-list").on("click", ".far fa-trash-alt", function(event) {
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