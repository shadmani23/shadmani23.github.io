(function ($) {
  "use strict";

  var burgerMenu = function () {
    $(".burger").click(function (e) {
      $(window).scrollTop(0);
      if (!$(".burger").hasClass("active")) $(".burger").addClass("active");
      else $(".burger").removeClass("active");
    });
  };
  burgerMenu();

  var siteIstotope = function () {
    var $container = $("#portfolio-grid, #portfolio-grid2").isotope({
      itemSelector: ".item",
      isFitWidth: true,
    });

    $(window).resize(function () {
      $container.isotope({
        columnWidth: ".col-sm-3",
      });
    });

    $container.isotope({ filter: "*" });

    $("#filters").on("click", "a", function (e) {
      e.preventDefault();
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
      $("#filters a").removeClass("active");
      $(this).addClass("active");
    });
  };
  $(window).on("load", function () {
    siteIstotope();
  });

  var siteOwlCarousel = function () {
    $(".testimonial-carousel").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();
})(jQuery);

AOS.init({
  easing: "ease",
  duration: 1000,
  once: true,
});

//Scroll back to top

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
