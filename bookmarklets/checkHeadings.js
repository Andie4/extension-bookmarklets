javascript: (function() {
    "use strict";
    var headingConsoleOutput = "";

    function listHeadings() {
        console.clear();
        let e = document.querySelectorAll("h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6,[role='heading'][aria-level='1'],[role='heading'][aria-level='2'],[role='heading'][aria-level='3'],[role='heading'][aria-level='4'],[role='heading'][aria-level='5'],[role='heading'][aria-level='6'],[aria-role='heading'][aria-level='1'],[aria-role='heading'][aria-level='2'],[aria-role='heading'][aria-level='3'],[aria-role='heading'][aria-level='4'],[aria-role='heading'][aria-level='5'],[aria-role='heading'][aria-level='6']"),
            i = 0,
            a = !1,
            t = 1,
            l = 1,
            n = "",
            h = !1,
            o = 0,
            r = !1,
            g = !1,
            d = "",
            s = "",
            u = "",
            p, f = "",
            m = !1,
            _ = !1,
            c = !1,
            w = 0 === e.length,
            C = !1,
            A = !1,
            v = !1,
            R = !1;

        function N(e) {
            s = "";
            for (let i = 0; i < e - 1; i++) s += " "
        }

        function b(e, i) {
            let a = document.createElement("DIV");
            a.setAttribute("style", "display:inline-block;color:#fff;background:darkred;padding:5px;margin-top:5px;"), a.setAttribute("aria-hidden", "true"), a.setAttribute("class", "bookmarklet-indicator"), a.textContent = "^ " + i, e.parentNode.insertBefore(a, e.nextSibling), e.classList.remove("lime-highlight"), e.classList.add("red-highlight")
        }

        function $() {
            let e = n.split("\n");
            n = "", Array.from(e).forEach(e => {
                n += e.trim() + " "
            })
        }! function e() {
            let i = document.createElement("style");
            i.setAttribute("id", "headingStyles"), i.textContent = `.lime-highlight,.red-highlight {border-radius:3px;outline-offset:2px;box-shadow: 0px 0px 0px 2px #fff;}.lime-highlight {outline:3px solid lime;}.red-highlight {outline:3px solid darkred;}.lime-highlight:after,.red-highlight:after {border-radius:3px;outline:3px solid white;content:'Heading';background:black;display:inline-block;padding:3px;}.lime-highlight:after {color:lime;}.red-highlight:after {background:darkred;color:white;}*[role='heading'][aria-level='1'].lime-highlight:after, *[role='heading'][aria-level='1'].red-highlight:after {content:'ARIA heading - l1';}*[role='heading'][aria-level='2'].lime-highlight:after, *[role='heading'][aria-level='2'].red-highlight:after {content:'ARIA heading - l2';}*[role='heading'][aria-level='3'].lime-highlight:after, *[role='heading'][aria-level='3'].red-highlight:after {content:'ARIA heading - l3';}*[role='heading'][aria-level='4'].lime-highlight:after, *[role='heading'][aria-level='4'].red-highlight:after {content:'ARIA heading - l4';}*[role='heading'][aria-level='5'].lime-highlight:after, *[role='heading'][aria-level='5'].red-highlight:after {content:'ARIA heading - l5';}*[role='heading'][aria-level='6'].lime-highlight:after, *[role='heading'][aria-level='6'].red-highlight:after {content:'ARIA heading - l6';}h1.lime-highlight:after,h1.red-highlight:after {content:'Heading - h1';}h2.lime-highlight:after,h2.red-highlight:after {content:'Heading - h2';}h3.lime-highlight:after,h3.red-highlight:after {content:'Heading - h3';}h4.lime-highlight:after,h4.red-highlight:after {content:'Heading - h4';}h5.lime-highlight:after,h5.red-highlight:after {content:'Heading - h5';}h6.lime-highlight:after,h6.red-highlight:after {content:'Heading - h6';}`, document.head.appendChild(i)
        }(), document.querySelector("h1,[aria-role='heading'][aria-level='1']"), document.title.trim().toLowerCase(), Array.from(e).forEach(e => {
            "H1" === e.tagName || "H2" === e.tagName || "H3" === e.tagName || "H4" === e.tagName || "H5" === e.tagName || "H6" === e.tagName || e.getAttribute("aria-level") || "heading" === e.getAttribute("role") ? (e.classList.add("lime-highlight"), "heading" === e.getAttribute("aria-role") && (m = !0, h = !0, headingConsoleOutput += "\n" + s + "â " + (f = "Invalid attribute `aria-role` applied"), b(e, f)), w = !1, o++, n = e.textContent.trim(), $(), i = n.split(" ").length, "" === n && (h = !0, A = !0, b(e, f = "Empty heading")), "H1" !== e.tagName && "H2" !== e.tagName && "H3" !== e.tagName && "H4" !== e.tagName && "H5" !== e.tagName && "H6" !== e.tagName ? (d = "\nH" + e.getAttribute("aria-level"), N(l = parseInt(e.getAttribute("aria-level"))), headingConsoleOutput += s + d + ": " + n, headingConsoleOutput += "\n" + s + "â Not a *real* heading", headingConsoleOutput += "\n" + s + '`aria-role="heading"`', headingConsoleOutput += "\n" + s + '`aria-level="' + e.getAttribute("aria-level") + '"`') : (d = e.tagName, N(l = parseInt(e.tagName.replace("H", ""))), "" !== n.trim() && (headingConsoleOutput += "\n" + s + d + ": " + n)), 1 === l && (1 === l && r && "heading" === e.getAttribute("role") ? (g = !0, h = !0, headingConsoleOutput += "\n" + s + "â " + (f = "Multiple h1s"), b(e, f)) : r = !0), 1 === l && 1 === o ? c = !0 : 1 === o && (h = !0, headingConsoleOutput += "\n" + s + "â " + (f = "First heading on the page is NOT an h1"), b(e, f)), (p = l - t) > 1 && 1 !== o && (headingConsoleOutput += "\n" + s + "â " + (f = "Skipped heading levels - jumped " + p + " levels (from h" + t + " to h" + l + ")"), h = !0, C = !0, b(e, f)), i > 30 && (a = !0, h = !0, headingConsoleOutput += "\n" + s + "â " + (f = "This is a loooooooooooooong heading"), b(e, f))) : (h = !0, w = !0, v = !0, n = e.textContent.trim(), $(), f = "Styled using CSS class of ", e.classList.contains("h1") && (f += "`h1`"), e.classList.contains("h2") && (f += "`h2`", l = 2), e.classList.contains("h3") && (f += "`h3`", l = 3), e.classList.contains("h4") && (f += "`h4`", l = 4), e.classList.contains("h5") && (f += "`h5`", l = 5), e.classList.contains("h6") && (f += "`h6`", l = 6), N(l), headingConsoleOutput += "\n" + s + n, headingConsoleOutput += "\n" + s + "â " + f, b(e, f)), "0" === e.getAttribute("tabindex") && (h = !0, _ = !0, headingConsoleOutput += "\n" + s + "â " + (f = "Heading is focusable"), b(e, f)), e.getAttribute("role") && "heading" !== e.getAttribute("role").toLowerCase() && (h = !0, R = !0, headingConsoleOutput += "\n" + s + "â " + (f = "Heading has a role applied other than heading"), b(e, f)), t = l
        }), w && (h = !0), h && (R && (u += "\n* WARNING: One or more headings have a role applied other than heading. Most likely a [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) failure"), c || w || (u += "\n* WARNING: First heading found on page is not an h1 [BEST PRACTICE - SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), m && (u += '\n* ERR: Invalid `aria-role="heading"` used (should be `role`) [SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)'), w && (u += "\n* WARNING: No headings found on the page at all [BEST PRACTICE - SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), _ && (u += "\n* ERR: Some headings were made focusable [SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)"), g && (u += "\n* WARNING: Multiple H1 headings present on page [SC 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)"), C && (u += "\n* WARNING: Skipped heading levels [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), A && (u += "\n* WARNING: Empty heading(s) found on page [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), v && (u += "\n* ERR: Text marked up using heading tags as class names, but no heading semantics present [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), a && (u += "\n* WARNING: 1 or more headings found with long  word count (likely not suitable as a heading) [SC 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)"), u = "\n\n#Errors found" + u), headingConsoleOutput += u, console.log(headingConsoleOutput), document.addEventListener("keydown", function(e) {
            "q" === e.key && (e.preventDefault(), function e() {
                let i = document.querySelectorAll(".lime-highlight, .red-highlight"),
                    a = document.querySelectorAll(".bookmarklet-indicator");
                Array.from(i).forEach(e => {
                    e.classList.remove("lime-highlight"), e.classList.remove("red-highlight")
                }), Array.from(a).forEach(e => {
                    e.remove()
                });
                let t = document.querySelector("#headingStyles");
                t.remove()
            }())
        })
    }
    listHeadings()
})()