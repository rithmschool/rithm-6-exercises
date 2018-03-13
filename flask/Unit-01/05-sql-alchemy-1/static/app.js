$(function() {
  $("#snacks").on("click", "i", function(event) {
    event.preventDefault();
    let id = $(this)
      .closest("li")
      .attr("id");
    $.ajax({
      method: "DELETE",
      url: `/snacks/${id}`
    }).then(
      data => {
        $(this)
          .closest("li")
          .hide();
      },
      function() {
        debugger;
      }
    );
  });
});
