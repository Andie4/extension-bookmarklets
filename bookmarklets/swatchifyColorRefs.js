javascript: (function() {
    ! function() {
        let e = [{
                regex: /#([0-9A-Fa-f]{3}){1,2}\b/g,
                type: "hex"
            }, {
                regex: /#([0-9A-Fa-f]{4}){1,2}\b/g,
                type: "hex-alpha"
            }, {
                regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/g,
                type: "rgb"
            }, {
                regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0?\.\d+|1(\.0)?)\s*\)/g,
                type: "rgba"
            }],
            t = new Map,
            r = new Set;

        function a(e) {
            let t = e;
            for (; t;) {
                if ("HEAD" === t.tagName || "STYLE" === t.tagName || "SCRIPT" === t.tagName) return !0;
                t = t.parentElement
            }
            return !!(e.classList.contains("color-swatch-container") || e.hasAttribute("alt") || "TITLE" === e.tagName && "http://www.w3.org/2000/svg" === e.namespaceURI || "http://www.w3.org/2000/svg" === e.namespaceURI && e.hasAttribute("title"))
        }

        function n() {
            let e = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
                    acceptNode: function(e) {
                        if (!e.textContent.trim() || a(e.parentElement)) return NodeFilter.FILTER_REJECT;
                        let t = window.getComputedStyle(e.parentElement);
                        return "none" === t.display || "hidden" === t.visibility ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                    }
                }),
                t = [],
                r;
            for (; r = e.nextNode();) t.push(r);
            return t
        }

        function o() {
            let n = document.body.querySelectorAll("p, span, div, li, h1, h2, h3, h4, h5, h6, td, th, label, a, button, strong, em, small, pre, code");
            Array.from(n).forEach(n => {
                a(n) || function n(o) {
                    if ("true" === o.getAttribute("data-color-processed") || a(o)) return;
                    let l = o.textContent,
                        s = !1;
                    for (let d of e) {
                        if (d.regex.test(l)) {
                            s = !0;
                            break
                        }
                        d.regex.lastIndex = 0
                    }
                    if (!s) return;
                    let i = "elem-" + Math.random().toString(36).substr(2, 9);
                    o.setAttribute("data-color-element-id", i), t.set(i, o.innerHTML);
                    let c = o.innerHTML,
                        p = c;
                    for (let u of e) u.regex.lastIndex = 0, p = p.replace(u.regex, function(e) {
                        let t = "color-" + Math.random().toString(36).substr(2, 9);
                        return `<span class="color-code">${e}<span id="${t}" class="swatch-placeholder"></span></span>`
                    });
                    p !== c && (o.innerHTML = p, o.querySelectorAll(".swatch-placeholder").forEach(e => {
                        let t = e.parentNode,
                            a = t.textContent,
                            n = function e(t) {
                                let a = document.createElement("span");
                                a.className = "color-swatch-container", a.style.display = "inline-block", a.style.width = "16px", a.style.height = "16px", a.style.marginLeft = "5px", a.style.verticalAlign = "middle", a.setAttribute("data-color", t);
                                let n = a.attachShadow({
                                    mode: "closed"
                                });
                                r.add(n);
                                let o = document.createElement("style");
                                o.textContent = `.swatch {display: block;width: 16px;height: 16px;background-color: ${t};border: 2px solid #000;outline: 2px solid #fff;border-radius: 3px;box-sizing: border-box;}`;
                                let l = document.createElement("span");
                                return l.className = "swatch", n.appendChild(o), n.appendChild(l), a
                            }(a.trim());
                        e.appendChild(n)
                    }), o.setAttribute("data-color-processed", "true"))
                }(n)
            })
        }

        function l(e) {
            ("q" === e.key || "Q" === e.key) && function e() {
                let a = document.querySelectorAll('[data-color-processed="true"]');
                a.forEach(e => {
                    let r = e.getAttribute("data-color-element-id");
                    r && t.has(r) && (e.innerHTML = t.get(r), e.removeAttribute("data-color-processed"), e.removeAttribute("data-color-element-id"))
                }), t.clear(), r.clear(), document.removeEventListener("keydown", l)
            }()
        }
        document.addEventListener("keydown", l), "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(o, 100) : window.addEventListener("load", o)
    }()
})()