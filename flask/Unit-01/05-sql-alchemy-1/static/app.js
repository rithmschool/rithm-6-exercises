$("#snacks").on("click","i",function(){
    let id = $(this).closest("li").attr("id")
    console.log(id)
    $.ajax({
        method: "DELETE",
        url: `/snacks/${id}`


    }).then(data => {
        $(this)
          .closest("li")
          .hide();
      })
})

