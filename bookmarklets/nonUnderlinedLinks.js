javascript: (function() {
    "use strict";
    var consoleOutput = "";

    function checkNonUnderlinedLinks() {
        function e() {
            let e = document.createElement("style");
            e.setAttribute("id", "a11yToolsStyles"), e.textContent = `.a11y-tools-highlighlight {}`, document.head.appendChild(e)
        }
        console.clear();
        let t = !1,
            o = !1,
            n = !1,
            l = !1,
            r = document.querySelectorAll("a"),
            i = 0,
            s = !1,
            a = !1;

        function u(e, t, o) {
            let n = [e, t, o].map(function(e) {
                return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            });
            return .2126 * n[0] + .7152 * n[1] + .0722 * n[2]
        }

        function d(e) {
            return e = (e = (e = e.replace("rgb(", "")).replace(")", "")).split(", ")
        }

        function e() {
            let e = document.createElement("style");
            e.textContent = ".problem-highlight {outline:3px solid darkred;outline-offset:3px;box-shadow: 0px 0px 0px 10px #fff;}.big-problem-highlight {outline:6px solid darkred;}", document.head.appendChild(e)
        }
        if (e(), Array.from(r).forEach(e => {
                if (s = !1, a = !1, l = function e(t, o) {
                        for (;
                            (t = t.parentElement) && !(t.matches || t.matchesSelector).call(t, o););
                        return t
                    }(e, "nav,[role=navigation]"), e.childNodes.length > 0 && (e.childNodes[0].tagName && ("IMG" === e.childNodes[0].tagName.toUpperCase() || "SVG" === e.childNodes[0].tagName.toUpperCase() || "FIGURE" === e.childNodes[0].tagName.toUpperCase()) && (s = !0), ! function e(l) {
                        t = !1, o = !1, n = !1;
                        let r = getComputedStyle(l);
                        for (let i = 0; i < r.length; i++) {
                            let s = r[i],
                                a = r.getPropertyValue(s);
                            "text-decoration-line" === s && "underline" === a && (o = !0), "border-bottom-style" === s && ("solid" === a || "dotted" === a || "dashed" === a) && (n = !0), "border-bottom-color" === s && "transparent" === a && (n = !1), (o || n) && (t = !0)
                        }
                        return t
                    }(e) && !s)) {
                    consoleOutput += "-------\n", consoleOutput += "Link text: " + e.textContent + "\n", !l && (function e(t) {
                        t.classList.add("problem-highlight")
                    }(e), consoleOutput += "Affected node (xpath): " + function e(t) {
                        let o = t,
                            n = t.tagName.toLowerCase(),
                            l, r = "",
                            i = "",
                            s = "",
                            a = "";
                        for (; o.parentNode;) {
                            if ((l = o.parentNode).tagName) {
                                r = l.tagName.toLowerCase();
                                let u = l.querySelectorAll(o.tagName);
                                s = u.length > 1 ? "[" + parseInt(Array.from(u).indexOf(o) + 1) + "]" : "", i = (n = o.tagName.toLowerCase()) + s + a + i, a = "/"
                            }
                            o = l
                        }
                        return "" === r && (r = n), i = "//" + r + s + a + i
                    }(e) + "\n", i++);
                    let r = d(getComputedStyle(e).color),
                        c = d(getComputedStyle(e.parentNode).color),
                        p = function e(t, o) {
                            let n = u(t[0], t[1], t[2]),
                                l = u(o[0], o[1], o[2]);
                            return (Math.max(n, l) + .05) / (Math.min(n, l) + .05)
                        }(r, c);
                    l ? consoleOutput += "Link is inside a <nav> element and therefore its position/display does not require the underline for it to be perceived as a link.\n" : (p < 3 ? (consoleOutput += "\uD83D\uDEA8 Contrast between link text and parent text node is under 3:1. ", l || function e(t) {
                        t.classList.add("big-problem-highlight")
                    }(e)) : consoleOutput += "✅ Contrast between link text and parent text node is over 3:1. ", consoleOutput += "Ratio is " + p.toFixed(2) + ":1.", p < 3 ? consoleOutput += "\n  Very likely a [SC 1.4.1 Use of Color](https://www.w3.org/TR/WCAG21/#use-of-color) issue\n" : consoleOutput += "\n  Possibly a [SC 1.4.1 Use of Color](https://www.w3.org/TR/WCAG21/#use-of-color) issue. HOWEVER, as ratio with adjacent text appears to be over 3:1, it is not a failure [Understanding SC 1.4.1: Use of Color (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) \n")
                }
            }), i > 0) {
            let c = i + " possible issues with non-underlined links found";
            consoleOutput = c + "\n" + consoleOutput, alert(c + " (check console for more details)")
        } else alert("No non-underlined links found (outside of a navigation area)");
        console.log(consoleOutput), document.addEventListener("keydown", function(e) {
            "q" === e.key && (e.preventDefault(), function e() {
                let t = document.querySelectorAll(".problem-highlight,.big-problem-highlight");
                Array.from(t).forEach(e => {
                    e.classList.remove("problem-highlight"), e.classList.remove("big-problem-highlight")
                });
                let o = document.querySelector("#a11yToolsStyles");
                o && o.remove()
            }())
        })
    }
    checkNonUnderlinedLinks();
    var kmOutput = consoleOutput
})()