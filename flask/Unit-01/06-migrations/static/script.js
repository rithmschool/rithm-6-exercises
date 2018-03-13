$("#submit-sunset").on('submit', (e) => {
  e.preventDefault();
  console.log("ajax call!")
  $.ajax({
    method: "POST",
    url: `/sunsets`,
    data: {
      url: $("#url").val(),
      caption: $("#caption").val(),
      location: $("#location").val()
    }
  }).then(data => {
    console.log(data)
    $("#collection").append(
      $("<div>", {
        "class": "sunset-image",
        "style": "background-image: url(" +
          data.key.url + ")"
      }).text(data.key.caption).append(
        $("<span>").text(data.key.location)
      )
    )
  })
})
