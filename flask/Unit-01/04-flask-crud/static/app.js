$(function() {
  let $body = $("body");
  $body.on("click", ".delete", e => {
    destroy($(e.target).attr("id"));
  });
});

function destroy(id) {
  $closestSection = $(`#${id}`).closest("section");
  return $.ajax({
    method: "DELETE",
    url: `/snacks/${id}`
  }).then(() => {
    $closestSection.remove();
  });
}
