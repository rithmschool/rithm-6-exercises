$(function() {
  let $body = $("body");
  $body.on("click", ".delete", e => {
    destroy($(e.target).closest("tr"));
  });
});

function destroy($closestRow) {
  let id = $closestRow.attr("id");
  return $.ajax({
    method: "DELETE",
    url: `/snacks/${id}`
  }).then(() => {
    $closestRow.remove();
  });
}
