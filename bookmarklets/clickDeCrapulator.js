javascript: (function() {
    javascript: ! function() {
        let e = ["alt", "autocomplete", "for", "href", "id", "lang", "name", "role", "src", "tabindex", "target", "value", "aria-activedescendant", "aria-atomic", "aria-checked", "aria-current", "aria-owns", "aria-controls", "aria-describedby", "aria-disabled", "aria-hidden", "aria-invalid", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-pressed", "aria-readonly", "aria-required", "aria-selected", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
            t = null,
            a = !1,
            r = [],
            n = null;

        function i() {
            r.forEach(e => {
                null === e.originalTabIndex ? e.element.removeAttribute("tabindex") : e.element.setAttribute("tabindex", e.originalTabIndex)
            }), r = []
        }

        function l() {
            t = null, a = !1, (n = document.createElement("div")).setAttribute("role", "status"), n.setAttribute("aria-live", "polite"), n.setAttribute("id", "decrapulator-status"), n.style.cssText = `position: absolute !important;width: 1px !important;height: 1px !important;padding: 0 !important;margin: -1px !important;overflow: hidden !important;clip: rect(0, 0, 0, 0) !important;white-space: nowrap !important;border: 0 !important;`, document.body.appendChild(n);
            if (!document.getElementById("decrapulator-selection-style")) {
                let e = document.createElement("style");
                e.id = "decrapulator-selection-style", e.textContent = `.current-selection {outline: 2px solid red !important;}`, document.head.appendChild(e)
            }
            let r = document.getElementById("xpath-panel");
            r && r.remove();
            let i = document.createElement("div");
            i.id = "xpath-panel", i.style.cssText = `position: fixed;top: 10px;right: 10px;background: rgba(0, 0, 0, 0.9);color: white;padding: 10px;border-radius: 5px;font-family: monospace;font-size: 12px;z-index: 10000;max-width: 400px;word-wrap: break-word;display: none;box-shadow: 0 2px 10px rgba(0,0,0,0.3);pointer-events: none;`, document.body.appendChild(i), document.addEventListener("mousemove", m, !0), document.addEventListener("mouseout", h, !0), document.addEventListener("click", f, !0), document.addEventListener("keydown", u, !0), document.body.style.cursor = "crosshair", n && (n.textContent = "Element selection mode active. Use mouse to hover or arrow keys to navigate, Enter to select.")
        }

        function o(e, a, r) {
            t && t.classList.remove("current-selection"), t = e, e && (e.classList.add("current-selection"), function e(t, a, r) {
                let n = document.getElementById("xpath-panel");
                if (!t || "xpath-panel" === t.id || !n) return;
                let i = function e(t) {
                        if ("" !== t.id) return '//*[@id="' + t.id + '"]';
                        if (t === document.body) return "/html/body";
                        let a = 0,
                            r = t.parentNode.childNodes;
                        for (let n = 0; n < r.length; n++) {
                            let i = r[n];
                            if (i === t) return e(t.parentNode) + "/" + t.tagName.toLowerCase() + "[" + (a + 1) + "]";
                            1 === i.nodeType && i.tagName === t.tagName && a++
                        }
                    }(t),
                    l = t.className ? ` class="${t.className}"` : "",
                    o = t.id ? ` id="${t.id}"` : "",
                    d = t.outerHTML.substring(0, 200) + (t.outerHTML.length > 200 ? "..." : "");
                n.replaceChildren();
                let s = document.createElement("ul"),
                    c = document.createElement("li"),
                    p = document.createElement("strong");
                p.textContent = "XPath:", p.setAttribute("id", "xpath-label"), c.appendChild(p), c.appendChild(document.createTextNode(` ${i}`)), s.appendChild(c);
                let u = document.createElement("li"),
                    m = document.createElement("strong");
                m.textContent = "Tag:", m.setAttribute("id", "tag-label"), u.appendChild(m), u.appendChild(document.createTextNode(` ${t.tagName.toLowerCase()}${o}${l}`)), s.appendChild(u);
                let h = document.createElement("li"),
                    f = document.createElement("strong");
                f.textContent = "HTML:", f.setAttribute("id", "html-label"), h.appendChild(f), h.appendChild(document.createTextNode(` ${d}`)), s.appendChild(h);
                let b = document.createElement("li"),
                    $ = document.createElement("small");
                $.style.color = "#ccc", $.textContent = "Use arrow keys to navigate, ENTER to select", b.appendChild($), s.appendChild(b), n.appendChild(s), n.style.display = "block", void 0 !== a && void 0 !== r && function e(t, a) {
                    let r = document.getElementById("xpath-panel");
                    if (!r) return;
                    let n = r.getBoundingClientRect(),
                        i = window.innerWidth,
                        l = window.innerHeight,
                        o = t + 20,
                        d = a + 20;
                    o + n.width > i && (o = t - n.width - 20), d + n.height > l && (d = a - n.height - 20), o = Math.max(10, Math.min(o, i - n.width - 10)), d = Math.max(10, Math.min(d, l - n.height - 10)), r.style.left = o + "px", r.style.top = d + "px", r.style.right = "auto"
                }(a, r)
            }(e, a, r), function e(t) {
                if (!n || !t) return;
                let a = "";
                if (t.getAttribute("aria-label")) a = t.getAttribute("aria-label");
                else if (t.getAttribute("aria-labelledby")) {
                    let r = t.getAttribute("aria-labelledby"),
                        i = document.getElementById(r);
                    i && (a = i.textContent.trim())
                } else t.alt ? a = t.alt : t.title ? a = t.title : (a = t.textContent.trim()).length > 100 && (a = a.substring(0, 100) + "...");
                !a && (a = `${t.tagName.toLowerCase()} element`, t.id ? a += ` with id "${t.id}"` : t.className && (a += ` with class "${t.className.split(" ")[0]}"`)), n.textContent = `Selected: ${a}`
            }(e))
        }

        function d(e) {
            var t;
            let a = (t = e).replace(/<!--[\s\S]*?-->/g, "");
            a = a.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
            let r = "",
                n = 0,
                i = a.split(/(<\/?[^>]+>)/);
            for (let l = 0; l < i.length; l++) {
                let o = i[l].trim();
                if (o) {
                    if (o.startsWith("</")) n--, r += " ".repeat(Math.max(0, n)) + o + "\n";
                    else if (o.startsWith("<")) {
                        r += " ".repeat(n) + o;
                        let d = o.endsWith("/>") || /^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b/i.test(o);
                        !d && n++, r += "\n"
                    } else o.length > 0 && (r += " ".repeat(n) + o + "\n")
                }
            }
            return r.trim()
        }

        function s() {
            t && (t.classList.remove("current-selection"), t = null), n && n.parentNode && (n.parentNode.removeChild(n), n = null);
            let e = document.getElementById("xpath-panel");
            e && e.remove();
            let a = document.getElementById("decrapulator-selection-style");
            a && a.remove(), document.removeEventListener("mousemove", m, !0), document.removeEventListener("mouseout", h, !0), document.removeEventListener("click", f, !0), document.removeEventListener("keydown", u, !0), document.body.style.cursor = ""
        }
        let c = "";

        function p() {
            let a = t;
            if (!a || "xpath-panel" === a.id || a === document.head || a.closest("head")) return;
            n && (n.textContent = "Element selected and processing..."), c = a.outerHTML;
            let o = function t(a) {
                let r = a.cloneNode(!0),
                    n = new Set,
                    i = ["for", "aria-labelledby", "aria-describedby", "aria-controls", "aria-owns", "aria-activedescendant"];
                return ! function e(t) {
                    1 === t.nodeType && (i.forEach(e => {
                        let a = t.getAttribute(e);
                        if (a) {
                            let r = a.trim().split(/\s+/);
                            r.forEach(e => {
                                e && n.add(e)
                            })
                        }
                    }), [...t.childNodes].forEach(t => {
                        e(t)
                    }))
                }(r), ! function t(a) {
                    if (1 === a.nodeType) {
                        if ("style" === a.tagName.toLowerCase()) {
                            a.remove();
                            return
                        }
                        if ("svg" === a.tagName.toLowerCase()) {
                            for (; a.firstChild;) a.removeChild(a.firstChild);
                            a.appendChild(document.createTextNode("..."));
                            let r = [...a.attributes];
                            r.forEach(t => {
                                let r = t.name.toLowerCase(),
                                    i = e.includes(r);
                                "id" === r && (i = n.has(t.value)), i || a.removeAttribute(t.name)
                            });
                            return
                        }
                        if (a.getAttribute("src")) {
                            let i = a.getAttribute("src");
                            i.length > 50 && a.setAttribute("src", i.substring(0, 50) + "...")
                        }
                        if (a.getAttribute("href")) {
                            let l = a.getAttribute("href");
                            l.length > 50 && a.setAttribute("href", l.substring(0, 50) + "...")
                        }
                        let o = [...a.attributes];
                        o.forEach(t => {
                            let r = t.name.toLowerCase(),
                                i = e.includes(r);
                            "id" === r && (i = n.has(t.value)), "type" === r && "input" === a.tagName.toLowerCase() && (i = !0), i || a.removeAttribute(t.name)
                        }), [...a.childNodes].forEach(e => {
                            t(e)
                        })
                    }
                }(r), r
            }(a);
            ! function e(t) {
                s(),
                    function e() {
                        let t = document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), details, summary, iframe, object, embed, area[href], audio[controls], video[controls]');
                        r = [], t.forEach(e => {
                            let t = e.hasAttribute("tabindex") ? e.getAttribute("tabindex") : null;
                            r.push({
                                element: e,
                                originalTabIndex: t
                            }), e.setAttribute("tabindex", "-1")
                        })
                    }();
                let a = document.createElement("div");
                a.style.cssText = `position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 10001;`;
                let n = a.attachShadow({
                        mode: "closed"
                    }),
                    o = document.createElement("style");
                o.textContent = `:host {all: initial;}.overlay {position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;background: rgba(0, 0, 0, 0.5);display: flex;align-items: center;justify-content: center;z-index: 10001;}.dialog * {color:white;}.dialog {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;background: #332726;border: 2px solid #333;border-radius: 10px;padding: 20px;max-width: 80vw;max-height: 80vh;box-shadow: 0 4px 20px rgba(0,0,0,0.3);display: flex;flex-direction: column;}.title {margin: 0 0 10px 0;font-family: Arial, sans-serif;font-size: 18px;font-weight: bold;}.textarea {width: 600px;height: 400px;font-family: 'Courier New', monospace;font-size: 12px;border: 1px solid #ccc;padding: 10px;resize: both;box-sizing: border-box;line-height:1.5;color:#332726;}textarea::selection {background:#1a1413;color:white;}.button-container {display: flex;gap: 10px;margin-top: 10px;}.button {padding: 8px 2em;background: #333;color: white;border: 2px solid white;border-radius: 5px;cursor: pointer;font-family: Arial, sans-serif;position:relative;}.button:hover {background: #555;}.button:focus {outline: 2px solid #007acc;outline-offset: 2px;}.button[aria-pressed=true] {background:#7e082b;}.button[aria-pressed=true]:before {position:absolute;left:0.6em;top:0;transform:translateY(50%);content:"â";}#decrap-link {padding:0.5em 0;}strong#xpath-label {color:yellow!important}strong#tag-label {color:yellow!important}strong#html-label {color:yellow!important}`;
                let p = document.createElement("div");
                p.className = "overlay";
                let u = document.createElement("div");
                u.className = "dialog", u.setAttribute("role", "dialog"), u.setAttribute("aria-modal", "true");
                let m = document.createElement("h3");
                m.className = "title", m.setAttribute("id", "decrapulator-dialog"), m.textContent = "Here's your 1-Click De-crapulated HTML Output", u.setAttribute("aria-labelledby", "decrapulator-dialog");
                let h = document.createElement("textarea");
                h.className = "textarea", h.setAttribute("aria-labelledby", "decrapulator-dialog");
                let f = document.createElement("textarea");
                f.className = "textarea", f.setAttribute("aria-label", "Original source markup"), f.setAttribute("hidden", "hidden"),
                    function e(t) {
                        function a(e) {
                            let t = e.tagName.toLowerCase();
                            if ("div" !== t && "span" !== t) return !1;
                            let r = e.textContent.trim();
                            if (r.length > 0) return !1;
                            let n = !1;
                            for (let i of e.children) {
                                let l = i.tagName.toLowerCase();
                                if ("div" !== l && "span" !== l || !a(i)) {
                                    n = !0;
                                    break
                                }
                            }
                            return !n
                        }
                        return function e(t) {
                            let r = Array.from(t.children);
                            for (let n of r) e(n);
                            let i = Array.from(t.children);
                            for (let l of i) a(l) && t.removeChild(l)
                        }(t), t
                    }(t);
                let b = d(t.outerHTML),
                    $ = ["Simplified HTML (with some attributes/features removed for clarity):", "", "```html", b, "```"].join("\n");
                try {
                    h.value = $
                } catch (g) {
                    h.textContent = $
                }
                let x = document.createElement("div");
                x.setAttribute("id", "decrap-link");
                let y = document.createElement("a");
                y.textContent = "Visit the full-fat (ugh) De-crapulator", y.setAttribute("href", "https://a11y-tools.com/markup-de-crapulator/"), x.appendChild(y);
                let v = document.createElement("div");
                v.className = "button-container";
                let C = document.createElement("button");
                C.className = "button", C.textContent = "Close";
                let E = document.createElement("button");
                E.className = "button", E.textContent = "Pick again";
                let w = document.createElement("button");
                w.className = "button", w.textContent = "Flatten";
                let _ = document.createElement("button");

                function A() {
                    document.body.removeChild(a), document.removeEventListener("keydown", N), i()
                }

                function N(e) {
                    "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), A())
                }
                _.className = "button", _.textContent = "Show original", _.setAttribute("aria-pressed", "false"), u.appendChild(m), u.appendChild(h), u.appendChild(f), u.appendChild(x), v.appendChild(C), v.appendChild(E), v.appendChild(w), v.appendChild(_), u.appendChild(v), p.appendChild(u), n.appendChild(o), n.appendChild(p), document.body.appendChild(a), document.addEventListener("keydown", N), C.onclick = A, E.onclick = function e() {
                    document.body.removeChild(a), document.removeEventListener("keydown", N), i(), l()
                }, w.onclick = function e() {
                    let a = t.cloneNode(!0);
                    ! function e(t) {
                        function a(e) {
                            let t = e.tagName.toLowerCase();
                            if ("div" !== t && "span" !== t || e.attributes.length > 0) return !1;
                            let a = Array.from(e.children),
                                r = !1;
                            for (let n of e.childNodes)
                                if (n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0) {
                                    r = !0;
                                    break
                                } return (!r || !(a.length > 0)) && 1 === a.length
                        }
                        return function e(t) {
                            let r = Array.from(t.children);
                            for (let n of r) e(n);
                            let i = Array.from(t.children);
                            for (let l of i)
                                if (a(l)) {
                                    let o = l.children[0];
                                    t.replaceChild(o, l), e(t);
                                    break
                                }
                        }(t), t
                    }(a);
                    let r = d(a.outerHTML),
                        n = ["Simplified HTML (with some attributes/features removed for clarity):", "", "```html", r, "```"].join("\n");
                    try {
                        h.value = n
                    } catch (i) {
                        h.textContent = n
                    }
                    h.focus(), h.select(), setTimeout(() => {
                        h.scrollTop = 0
                    }, 10), w.disabled = !0, w.textContent = "Flattened", w.style.opacity = "0.6", w.style.cursor = "default"
                }, _.onclick = function e() {
                    let t = d(c),
                        a = ["Original markup (indented):", "", "```html", t, "```"].join("\n");
                    try {
                        f.value = a
                    } catch (r) {
                        f.textContent = a
                    }
                    "false" === _.getAttribute("aria-pressed") ? (h.setAttribute("hidden", "hidden"), f.removeAttribute("hidden"), _.setAttribute("aria-pressed", "true"), f.focus(), f.select(), setTimeout(() => {
                        f.scrollTop = 0
                    }, 10)) : (f.setAttribute("hidden", "hidden"), h.removeAttribute("hidden"), _.setAttribute("aria-pressed", "false"), h.focus(), h.select(), setTimeout(() => {
                        h.scrollTop = 0
                    }, 10))
                }, p.onclick = e => {
                    e.target === p && A()
                }, h.focus(), h.select(), setTimeout(() => {
                    h.scrollTop = 0
                }, 10)
            }(o)
        }

        function u(e) {
            if ("Escape" === e.key) {
                e.preventDefault(), e.stopPropagation(), s(), n && (n.textContent = "Element selection cancelled.");
                return
            }
            if (t) {
                if ("Enter" === e.key) {
                    e.preventDefault(), e.stopPropagation(), p();
                    return
                }
                if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
                    switch (e.preventDefault(), e.stopPropagation(), a = !0, e.key) {
                        case "ArrowUp":
                            ! function e() {
                                if (!t || !t.parentElement) return;
                                let a = t.parentElement;
                                (a !== document.body && a !== document.documentElement || t !== document.body) && o(a)
                            }();
                            break;
                        case "ArrowDown":
                            ! function e() {
                                if (!t) return;
                                let a = function e(t) {
                                    let a = t.firstChild;
                                    for (; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                                    return a
                                }(t);
                                a && o(a)
                            }();
                            break;
                        case "ArrowLeft":
                            ! function e() {
                                if (!t) return;
                                let a = function e(t) {
                                    let a = t.previousSibling;
                                    for (; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                                    return a
                                }(t);
                                a && o(a)
                            }();
                            break;
                        case "ArrowRight":
                            ! function e() {
                                if (!t) return;
                                let a = function e(t) {
                                    let a = t.nextSibling;
                                    for (; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                                    return a
                                }(t);
                                a && o(a)
                            }()
                    }
                    setTimeout(() => {
                        a = !1
                    }, 100)
                }
            }
        }

        function m(e) {
            if (a) return;
            let t = e.target;
            "xpath-panel" !== t.id && o(t, e.clientX, e.clientY)
        }

        function h(e) {
            if (!a && t === e.target) {
                t && (t.classList.remove("current-selection"), t = null);
                let r = document.getElementById("xpath-panel");
                r && (r.style.display = "none"), n && (n.textContent = "")
            }
        }

        function f(e) {
            e.preventDefault(), e.stopPropagation(), p()
        }
        l()
    }()
})()