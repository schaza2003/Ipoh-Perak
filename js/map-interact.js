function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  jQuery("path[id^=myjs]").each(function (i, e) {
    myaddEvent( jQuery(e).attr("id"));
  });
});
function myaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#myjsvn" + arr.slice(4).join(""));
  jQuery("#" + ["visnames"]).attr({"fill":myjsconfig.general.visibleNames});
  _obj.attr({"fill":myjsconfig[id].upColor, "stroke":myjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (myjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    // _Textobj.hover(function () {
    //   // jQuery("#myjstip").show().html(myjsconfig[id].hover);
    //   _obj.css({"fill":myjsconfig[id].overColor});
    // }, function () {
    //   jQuery("#myjstip").hide();
    //   jQuery("#" + id).css({"fill":myjsconfig[id].upColor});
    // });
    if (myjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":myjsconfig[id].downColor});
      });
    }
    // _Textobj.mouseup(function () {
    //   jQuery("#" + id).css({"fill":"rgb(236,255,179)"});
    //   if (myjsconfig[id].target === "new_window") {
    //     window.open(myjsconfig[id].url);	
    //   } else if (myjsconfig[id].target === "same_window") {
    //     window.parent.location.href = myjsconfig[id].url;
    //   } else if (myjsconfig[id].target === "modal") {
    //     jQuery(myjsconfig[id].url).modal("show");
    //   }
    // });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#myjstip").outerWidth(), tiph =jQuery("#myjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#myjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#myjstip").outerWidth(), tiph =jQuery("#myjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":myjsconfig[id].downColor});
        jQuery("#myjstip").show().html(myjsconfig[id].hover);
        jQuery("#myjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":myjsconfig[id].upColor});
        if (myjsconfig[id].target === "new_window") {
          window.open(myjsconfig[id].url);
        } else if (myjsconfig[id].target === "same_window") {
          window.parent.location.href = myjsconfig[id].url;
        } else if (myjsconfig[id].target === "modal") {
          jQuery(myjsconfig[id].url).modal("show");
        }
      });
    }
	}
}