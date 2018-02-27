
let id = 3;

$(document).ready(() => {

  /****** submit section  *******/

  $('#submitFav').on('click', () => {
    $('.subForm').slideToggle(400);
  })

  $('form').submit(e => {
    console.log("list item added!!")
    e.preventDefault();
    let $title = $('#title').val();
    let $url = $('#url').val().replace(/^\/\/|^.*?:(\/\/)?(www\.)?/, '').replace(/^www\./,'');;
    id++;
    $('ol.stories').append(
      // $(`<li id="${id}">`).append(
        // `<span class="fav"><i class="foo far fa-star"></i></span>` +
        // `<span class="list-text">${$title}</span>` +
        // `<span class="smallSite"><a class="smallSite" href=>(${$url})</a></span>`
        `
        <li id=${id}>
          <span class="fav">
            <i class="foo far fa-star"></i>
          </span>
          <span class="list-text">${$title}</span>
          <span class="smallSite">
            <a href="#" class="smallSite">(${$url})</a>
          </span>
        </li>
        `
      );
    $('.subForm').slideUp('slow');
    $('.subForm').trigger('reset');
  })

// .replace(/^\/\/|^.*?:(\/\/)?(www\.)?/, '').replace(/^www\./,'');

  /********* toggle between favorites and all ********/

  $('#favs, #all').on('click', e => {
    $('#favs, #all').toggle()
    $('#reg-stories, #stories').toggle();
  })

  //

  // fav icon
  // console.log("What the fukc");
  $('.fav').on('click', e => {
    // debugger;
    // let icon = $('.foo');
    let fav = $(e.currentTarget).children().first();
    let icon_fa_prefix = $(e.currentTarget).children().first().attr('data-prefix');
    if (icon_fa_prefix === "fas") {
        $(e.currentTarget).children().first().attr('data-prefix', 'far');
        // console.log("Here is the parent: " + $(e.currentTarget).parent().contents());
        $(e.currentTarget).remove();
    } else {;
      $(e.currentTarget).children().first().attr('data-prefix', 'fas');
      // console.log("Here is the parent: " + $(e.currentTarget).parent().contents());
      // debugger;
      $(e.currentTarget).parent().clone().appendTo('ul.fav-stories');
    }
  });
})
