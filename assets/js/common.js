//TOPBAR TEXT CHANGER
(function() {
  var words = [
      "contact us today for repairing your phone",
      "apply coupon <span>'newuser'</span> for getting special discount"
    ],
    i = 0;
  setInterval(function() {
    $("#changingword").fadeOut(function() {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 4000);
})();
