$(function() {
  $("#snacks").on("click", "button", function(event) {
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
