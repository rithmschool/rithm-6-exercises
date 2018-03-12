$(function () {
  $("tr").on("click", ".button__delete", function (e) {
    event.preventDefault();
    let dataRow = $(e.target).closest("tr");
    deleteItem(dataRow);
  });

  function deleteItem(dataRow) {
    id = dataRow.attr("id");
    return $.ajax({
      method: "DELETE",
      url: `/snacks/${id}`
    }).then(function (data) {
      dataRow.remove();
    });
  }
});
