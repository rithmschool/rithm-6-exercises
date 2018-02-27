
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
    let $url = $('#url').val();
    id++;
    $('ol').append(
      $(`<li id="${id}">`).append(
        `<span class="fav"><i class="foo far fa-star"></i></span>` +
        `<span class="list-text">${$title}</span>` +
        `<span class="smallSite"><a href=>${$url}</a></span>`
      ));
    $('.subForm').slideUp('slow');
    $('.subForm').trigger('reset');
  })

  /********* toggle between favorites and all ********/

  $('#favs, #all').on('click', e => {
    $('#favs, #all').toggle()
    $('#reg-stories, #stories').toggle();
  })

  $('#submitFav').on('click', () => {
    $('.subForm').slideToggle(400);
  })

  //

  // fav icon
  // console.log("What the fukc");
  $('.fav').on('click', e => {

    let icon = $('.foo');
    let fav = $(e.currentTarget).children().first();
    let icon_fa_prefix = icon.attr('data-prefix');
    if (icon_fa_prefix === "fas") {
        // icon.attr('data-prefix', 'far');
        console.log($(e.target));
        $(e.currentTarget).children().first().attr('data-prefix', 'far');


    } else {
        // icon.attr('data-prefix', 'fas');
        console.log($(e.target));
        console.log("WOW")
        $(e.currentTarget).children().first().attr('data-prefix', 'fas');
        let copy = Object.assign({}, $(e.currentTarget))
        console.log(copy);
        addToFavorites(copy);
        // $(e.currentTarget).closest('svg').attr('data-prefix', 'fas');
    }
  });

  function addToFavorites(story) {
    console.log("Here we are: " + story);
    $('ul').append(
      $(`<li>`).append(story));
  }


  // $('.fav').on('click', event => {


  //   var icon = $('.foo');
  //   var icon_fa_prefix = icon.attr('data-prefix');

  //   if (icon_fa_prefix === "fas") {
  //       icon.attr('data-prefix', 'far');

  //   } else {
  //       icon.attr('data-prefix', 'fas');
  //   }
  // });



})
