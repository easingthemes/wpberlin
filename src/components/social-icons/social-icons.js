!function() {
    "use strict";
    function a() {
        var a;
        a = document.querySelectorAll(".dvk-social-sharing a");
        for (var d = 0; d < a.length; d++)
            c(a[d], "click", b)
    }
    function b(a) {
        var b = (screen.availHeight - 500) / 2
          , c = (screen.availWidth - 500) / 2
          , d = window.open(this.href, "social", "width=550,height=420,left=" + c + ",top=" + b + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
        return d ? (d.focus(),
        a.preventDefault(),
        !1) : !0
    }
    function c(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    }
    c(window, "load", a)
}();
