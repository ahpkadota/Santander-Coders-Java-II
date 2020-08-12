javascript: (function() {
    let c, d, f = document.getElementsByTagName("textarea");
    for (let i = 0; i < f.length; i++) {
        f[i].addEventListener("keydown", function(a) {
            let q = window.event ? event : a,
                w = this,
                e = w.selectionEnd,
                r = w.value.indexOf("\n"),
                t = new Event("input"),
                y = document.querySelector("#SrtEditor > div:nth-child(5) > div:nth-child(1) > div");
            if (d != y.innerHTML) { c = !1, d = y.innerHTML; }
            if (q.keyCode == 13 && q.shiftKey) {
                q.preventDefault();
                w.value.charAt(r - 1) != " " && c == !1 ? w.value = w.value.replace(/\n/g, " ") : w.value = w.value.replace(/\n/g, "");
                c = !0;
                if (r > e || r == -1) {
                    w.value = w.value.substr(0, e).concat("\n".concat(w.value.substr(e, w.value.length)));
                    w.selectionEnd = e + 1;
                } else {
                    w.value = w.value.substr(0, e - 1).concat("\n".concat(w.value.substr(e - 1, w.value.length)));
                    w.selectionEnd = e;
                }
                w.dispatchEvent(t);
            }
        }, !1);
    }
})();