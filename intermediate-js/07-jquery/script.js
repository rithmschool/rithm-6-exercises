$(document).ready(function() {
  function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }
  function extractHostname(url) {
    var hostname;
    if (url.indexOf("://") > -1) {
      hostname = url.split("/")[2];
    } else {
      hostname = url.split("/")[0];
    }

    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];

    return hostname;
  }

  function extractRootDomain(url) {
    var domain = extractHostname(url);
    var splitArr = domain.split(".");
    var arrLen = splitArr.length;

    if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
      if (
        splitArr[arrLen - 1].length == 2 &&
        splitArr[arrLen - 1].length == 2
      ) {
        domain = splitArr[arrLen - 3] + "." + domain;
      }
    }
    return domain;
  }
  $form = $("form");
  $form.on("submit", function(event) {
    var $form = $("form");
    event.preventDefault();
    var $star = $("<i>", {
      class: "far fa-star"
    });
    $star.attr("aria-hidden", "true");
    var $title = $("#title").val();
    var $url = $("#url").val();
    if (!isUrl($url)) {
      alert("Invalid URL Formatting.");
    } else {
      var $newLi = $("<li>", {
        class: "listing favfalse"
      });
      $newLi.append($star);
      $newLi.append(
        "<a href=" + $url + " class='titlelink'>" + $title + "</a>"
      );
      var domain = extractRootDomain($url);
      var $newUrl = $("<a>", {
        text: "(" + domain + ")",
        href: domain,
        class: "listing__url ml-2"
      });

      $($newLi).append($newUrl);
      $("ol").append($newLi);

      $form.trigger("reset");
    }
  });

  $("#submitbutton").click(function(event) {
    $form.toggle();
  });

  $("ol").on("click", "li", function() {
    $(this).toggleClass("favfalse");
    $(this)
      .find("i")
      .toggleClass("far fas");
  });

  $("#favbutton").click(function() {
    $(".favfalse").toggle();
    $("#favbutton").toggleClass("hidden");
    $("#allbutton").toggleClass("hidden");
  });

  $("#allbutton").click(function() {
    $(".favfalse").toggle();
    $("#favbutton").toggleClass("hidden");
    $("#allbutton").toggleClass("hidden");
  });
});
