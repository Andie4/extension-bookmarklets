javascript: (function() {
    var allElements = document.querySelectorAll("*");

    function findAllVisuallyHiddenElements() {
        document.querySelector("body").classList.add("a11y-tools-active"), Array.from(allElements).forEach(i => {
            cs = getComputedStyle(i);
            for (var t = !1, e = !1, a = !1, l = !1, o = !1, n = !1, s = !1, d = !1, r = 0; r < cs.length; r++) cssProperty = cs[r], cssValue = cs.getPropertyValue(cssProperty), "clip" === cssProperty && "rect(1px, 1px, 1px, 1px)" === cssValue && (t = !0), "clip-path" === cssProperty && "inset(100%)" === cssValue && (e = !0), "height" === cssProperty && "1px" === cssValue && (a = !0), "overflow-x" === cssProperty && "hidden" === cssValue && (l = !0), "overflow-y" === cssProperty && "hidden" === cssValue && (o = !0), "position" === cssProperty && "absolute" === cssValue && (n = !0), "white-space" === cssProperty && "nowrap" === cssValue && (s = !0), "width" === cssProperty && "1px" === cssValue && (d = !0);
            !0 === t && !0 === e && !0 === a && !0 === l && !0 === o && !0 === n && !0 === s && !0 === d && i.classList.add("a11y-tools-was-visually-hidden");
            let c = i.classList;
            c.forEach(t => {
                -1 !== t.indexOf("-offscreen") && i.classList.add("a11y-tools-was-visually-hidden")
            }), (i.classList.contains("sr-only") || i.classList.contains("screenreader-only") || i.classList.contains("visually-hidden") || i.classList.contains("visuallyhidden")) && i.classList.add("a11y-tools-was-visually-hidden")
        })
    }

    function indicateAriaHiddenElements(i) {
        findAllVisuallyHiddenElements(), ! function i() {
            let t = document.createElement("style");
            t.setAttribute("id", "VisuallyHiddenStyles"), t.textContent = `body.a11y-tools-active [aria-hidden=true] {background:black;color:black;}body.a11y-tools-active [aria-hidden=true] img {opacity:0;}body.a11y-tools-active [aria-hidden=true] [aria-hidden=true] {opacity:1}.a11y-tools-was-visually-hidden {clip-path: initial!important;clip: initial!important;height: auto!important;overflow: initial!important;position: initial!important;white-space: initial!important;width: auto!important;opacity:initial!important;z-index:initial!important;background:black!important;color:lime!important;}`, document.head.appendChild(t)
        }(), document.addEventListener("keydown", function(i) {
            "q" === i.key && (i.preventDefault(), function i() {
                document.querySelector("body").classList.remove("a11y-tools-active");
                let t = document.querySelectorAll(".a11y-tools-was-visually-hidden");
                Array.from(t).forEach(i => {
                    i.classList.remove("a11y-tools-was-visually-hidden")
                });
                let e = document.querySelector("#VisuallyHiddenStyles");
                e && e.remove()
            }())
        })
    }
    indicateAriaHiddenElements(document);
    var iframes = document.querySelectorAll("iframe");
    Array.from(iframes).forEach(i => {
        indicateAriaHiddenElements(i.contentWindow.document)
    })
})()