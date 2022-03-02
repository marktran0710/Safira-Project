$(window).scroll(function () {
  const currenPos = $(this).scrollTop();
  if (currenPos > 200) {
    $(".totop").addClass("fixed");
    $(".header__ware").fadeIn();
  } else {
    $(".totop").removeClass("fixed");
    $(".header__ware").css("display", "none");
  }
});
let moveDropDown = () => {
  $("#header-dropdown-lang").hover(function () {
    $(".lang").slideToggle();
  });
  $("#header-dropdown-eng").hover(function () {
    $(".curren").slideToggle();
  });
  $(".cart").hover(
    function () {
      $(".synethic-products").stop(true, false, true).slideDown(500);
    },
    function () {
      $(".synethic-products").stop(true, false, true).slideUp(300);
    }
  );
};
moveDropDown();
$(".totop").click(function (e) {
  e.preventDefault();
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    "easeInQuint"
  );
});
