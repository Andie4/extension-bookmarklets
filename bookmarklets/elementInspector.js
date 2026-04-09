javascript: (function() {
    function elementInspector() {
        ! function e() {
            let t = document.createElement("style");
            t.textContent = `#element-inspector-panel {position: absolute;background-color: rgba(0, 0, 0, 0.9);outline:4px solid rgba(255, 255, 255, 0.9);;color: #ffffff;border-radius: 4px;padding: 8px 12px;font-family: monospace;font-size: 16px;line-height: 1.5;z-index: 10000;pointer-events: none;max-width: 500px;box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);display: none;}#element-inspector-panel dl,#element-inspector-panel dd,#element-inspector-panel dt {padding:0;margin:0;}#element-inspector-panel dd {margin-bottom:0.5em;}#element-inspector-panel dt {font-weight:bold;}#element-inspector-panel dd {padding-left:1em;overflow-wrap:anywhere;}#element-inspector-highlight{position: absolute;border: 2px solid #ff6700;background-color: rgba(255, 103, 0, 0.2);pointer-events: none;z-index: 9999;display: none;}#element-inspector-panel .HTML-el {color:orange;}#element-inspector-panel .aria-attribs {color:yellow;}#element-inspector-panel .role {color:#e98cef;}#element-inspector-panel .accname {color:#FF8B5D;}#element-inspector-panel .focusable {color:white;}#element-inspector-panel .xpath {color:lime;}#inspector-notification {position: fixed;top: 10px;right: 10px;background-color: rgba(0, 0, 0, 0.7);color: white;padding: 8px 12px;border-radius: 4px;font-family: sans-serif;font-size: 16px;z-index: 10001;transition: opacity 0.5s;}`, document.head.appendChild(t)
        }();
        let e = () => {
                let e = document.createElement("div");
                return e.id = "element-inspector-panel", e.setAttribute("role", "status"), document.body.appendChild(e), e
            },
            t = e => {
                try {
                    let t = {
                        name: "",
                        source: ""
                    };
                    if (e.hasAttribute("aria-label")) return t.name = e.getAttribute("aria-label"), t.source = "aria-label", t;
                    if (e.hasAttribute("aria-labelledby")) {
                        let n = e.getAttribute("aria-labelledby").split(/\s+/),
                            l = [];
                        for (let i of n) {
                            let a = document.getElementById(i);
                            a && l.push(a.textContent.trim())
                        }
                        if (l.length > 0) return t.name = l.join(" "), t.source = "aria-labelledby", t
                    }
                    let o = "svg" === e.tagName.toLowerCase() ? e : e.closest("svg");
                    if (o) {
                        if (e !== o) {
                            if (e.hasAttribute("aria-label")) return t.name = e.getAttribute("aria-label"), t.source = "aria-label", t;
                            if (e.hasAttribute("aria-labelledby")) {
                                let s = e.getAttribute("aria-labelledby").split(/\s+/),
                                    c = [];
                                for (let d of s) {
                                    let u = document.getElementById(d);
                                    u && c.push(u.textContent.trim())
                                }
                                if (c.length > 0) return t.name = c.join(" "), t.source = "aria-labelledby", t
                            }
                            let p = Array.from(e.children).find(e => "title" === e.tagName.toLowerCase());
                            if (p && p.textContent.trim()) return t.name = p.textContent.trim(), t.source = "SVG <title> (child)", t
                        }
                        let g = o.querySelector("title");
                        if (g && g.textContent.trim()) return t.name = g.textContent.trim(), t.source = "SVG <title>", t;
                        let m = o.querySelector("desc");
                        if (m && m.textContent.trim()) return t.name = m.textContent.trim(), t.source = "SVG <desc>", t
                    }
                    if ("IMG" === e.tagName && e.hasAttribute("alt")) return t.name = e.getAttribute("alt"), t.source = "alt", t;
                    if ("BUTTON" === e.tagName || "A" === e.tagName) {
                        let h = e.querySelectorAll("svg");
                        if (h.length > 0)
                            for (let f of h) {
                                let b = f.querySelector("title");
                                if (b && b.textContent.trim()) return t.name = b.textContent.trim(), t.source = "SVG <title> (child element)", t;
                                if (f.hasAttribute("aria-label")) return t.name = f.getAttribute("aria-label"), t.source = "SVG aria-label (child element)", t
                            }
                        let $ = e.querySelectorAll("img[alt]");
                        if ($.length > 0)
                            for (let y of $) {
                                let E = y.getAttribute("alt");
                                if (E && "" !== E.trim()) return t.name = E, t.source = "img alt (child element)", t
                            }
                        if ("" === e.textContent.trim()) {
                            if (h.length > 0) return t.name = "Unlabeled SVG", t.source = "missing SVG label", t;
                            let x = e.querySelectorAll("img");
                            if (x.length > 0) return t.name = "Unlabeled image", t.source = "missing image alt", t
                        }
                        let A = e.textContent.trim();
                        if (A) return t.name = A, t.source = "text content", t
                    }
                    if ("CANVAS" === e.tagName && e.hasAttribute("aria-label")) return t.name = e.getAttribute("aria-label"), t.source = "aria-label", t;
                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName) {
                        if (e.id) {
                            let N = document.querySelector(`label[for="${e.id}"]`);
                            if (N) return t.name = N.textContent, t.source = "label element", t
                        }
                        if (e.placeholder) return t.name = e.placeholder, t.source = "placeholder", t
                    }
                    if (e.title) return t.name = e.title, t.source = "title", t;
                    if ("img" === e.getAttribute("role")) {
                        if (e.hasAttribute("aria-label")) return t.name = e.getAttribute("aria-label"), t.source = "aria-label", t;
                        if (e.hasAttribute("alt")) return t.name = e.getAttribute("alt"), t.source = "alt", t
                    }
                    if ("FIGURE" === e.tagName) {
                        let T = e.querySelector("figcaption");
                        if (T) return t.name = T.textContent.trim(), t.source = "figcaption", t
                    }
                    return t.name = r(e), t.name ? t.source = "text content" : (t.name = "No accessible name", t.source = ""), t
                } catch (C) {
                    return console.warn("Error getting accessible name:", C), {
                        name: "Error retrieving name",
                        source: ""
                    }
                }
            },
            r = e => {
                try {
                    if (0 === e.childNodes.length || 1 === e.childNodes.length && e.childNodes[0].nodeType === Node.TEXT_NODE) return e.textContent.trim();
                    let t = "",
                        n = !1;
                    for (let l = 0; l < e.childNodes.length; l++) {
                        let i = e.childNodes[l];
                        if (i.nodeType === Node.TEXT_NODE) {
                            let a = i.textContent.trim();
                            a && (n && t.length > 0 && (t += " "), t += a, n = !0)
                        } else if (i.nodeType === Node.ELEMENT_NODE) {
                            let o = window.getComputedStyle(i),
                                s = "block" === o.display || "flex" === o.display || "grid" === o.display,
                                c = r(i);
                            c ? ((s || "LI" === i.tagName) && t.length > 0 && (t += " "), t += c, s && l < e.childNodes.length - 1 && (t += " "), n = !0) : n = !1
                        }
                    }
                    return t.trim().replace(/\s+/g, " ")
                } catch (d) {
                    return console.warn("Error getting formatted text content:", d), e.textContent.trim()
                }
            },
            n = e => {
                try {
                    if (e.hasAttribute("tabindex")) return parseInt(e.getAttribute("tabindex")) >= 0;
                    return ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA", "DETAILS", "SUMMARY", "IFRAME", "OBJECT", "EMBED", "AUDIO", "VIDEO"].includes(e.tagName) && !e.disabled && "none" !== e.style.display && "hidden" !== e.style.visibility
                } catch (t) {
                    return console.warn("Error checking focusability:", t), !1
                }
            };

        function l(e) {
            let t = e.match(/\d+/g);
            return t ? 3 === t.length ? "#" + t.map(e => {
                let t = parseInt(e).toString(16);
                return 1 === t.length ? "0" + t : t
            }).join("") : 4 === t.length ? "#" + t.slice(0, 3).map(e => {
                let t = parseInt(e).toString(16);
                return 1 === t.length ? "0" + t : t
            }).join("") : null : null
        }

        function i(e) {
            let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            if (!t) return 0;
            let [r, n, l] = [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255], i = [r, n, l].map(e => e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4));
            return .2126 * i[0] + .7152 * i[1] + .0722 * i[2]
        }

        function a(e) {
            try {
                let t = window.getComputedStyle(e),
                    r = t.color,
                    n = t.backgroundColor,
                    a = l(r),
                    o = l(n),
                    s = [];
                if (a && o) {
                    let c = function e(t, r) {
                        let n = i(t),
                            l = i(r);
                        return (Math.max(n, l) + .05) / (Math.min(n, l) + .05)
                    }(a, o);
                    s.push({
                        type: "Text Contrast",
                        colors: `${r} on ${n}`,
                        ratio: c.toFixed(2),
                        passed: c >= 4.5 ? "â WCAG AA" : "â WCAG Fail"
                    })
                }
                let d = t.borderColor;
                return l(d), s
            } catch (u) {
                return console.warn("Error checking color contrast:", u), []
            }
        }
        let o = e => {
                try {
                    if (e.hasAttribute("role")) return e.getAttribute("role");
                    let t = {
                        A: (() => {
                            let t = e.hasAttribute("href") && ("_blank" === e.getAttribute("target") || "_new" === e.getAttribute("target")),
                                r = e.hasAttribute("href") ? "link" : "generic";
                            return t ? `${r} (opens in new window)` : r
                        })(),
                        ARTICLE: "article",
                        ASIDE: "complementary",
                        BUTTON: "button",
                        DETAILS: "group",
                        DIALOG: "dialog",
                        DIV: "generic",
                        FOOTER: "contentinfo",
                        FORM: "form",
                        H1: "heading",
                        H2: "heading",
                        H3: "heading",
                        H4: "heading",
                        H5: "heading",
                        H6: "heading",
                        HEADER: "banner",
                        IMG: e.hasAttribute("alt") && "" === e.getAttribute("alt") ? "presentation" : "img",
                        INPUT: (() => {
                            let t = e.type && e.type.toLowerCase();
                            switch (t) {
                                case "button":
                                case "submit":
                                case "reset":
                                    return "button";
                                case "checkbox":
                                    return "checkbox";
                                case "radio":
                                    return "radio";
                                case "range":
                                    return "slider";
                                case "search":
                                    return "searchbox";
                                default:
                                    return "textbox"
                            }
                        })(),
                        LI: "listitem",
                        MAIN: "main",
                        NAV: "navigation",
                        OL: "list",
                        OPTION: "option",
                        PROGRESS: "progressbar",
                        SECTION: "region",
                        SELECT: "combobox",
                        TABLE: "table",
                        TEXTAREA: "textbox",
                        UL: "list"
                    };
                    return t[e.tagName] || "generic"
                } catch (r) {
                    return console.warn("Error getting element role:", r), "generic"
                }
            },
            s = e => {
                try {
                    let t = e.attributes,
                        r = [];
                    for (let n = 0; n < t.length; n++) {
                        let l = t[n];
                        l.name.startsWith("aria-") && r.push(`${l.name}="${l.value}"`)
                    }
                    return r
                } catch (i) {
                    return console.warn("Error getting ARIA attributes:", i), []
                }
            },
            c = e => {
                try {
                    if (!e) return "";
                    if ("HTML" === e.tagName) return "/HTML[1]";
                    if (e === document.body) return "/HTML[1]/BODY[1]";
                    let t = 0,
                        r = e.parentNode.childNodes;
                    for (let n = 0; n < r.length; n++) {
                        let l = r[n];
                        if (l === e) return c(e.parentNode) + "/" + e.tagName + "[" + (t + 1) + "]";
                        1 === l.nodeType && l.tagName === e.tagName && t++
                    }
                    return ""
                } catch (i) {
                    return console.warn("Error getting XPath:", i), "Error retrieving XPath"
                }
            },
            d = e => {
                try {
                    if (!e || !h(e)) {
                        console.warn("No valid element selected for logging");
                        return
                    }
                    console.group("Element Details"), console.log("XPATH:", c(e)), console.log("outerHTML:", e.outerHTML), console.groupEnd();
                    let t = document.createElement("div");
                    t.id = "inspector-notification", t.setAttribute("role", "status"), document.body.appendChild(t), setTimeout(function e() {
                        t.textContent = "Element details logged to console"
                    }, 500), setTimeout(() => {
                        t.style.opacity = "0", setTimeout(() => {
                            t && t.parentNode && t.parentNode.removeChild(t)
                        }, 500)
                    }, 2e3)
                } catch (r) {
                    console.warn("Error logging element details:", r)
                }
            },
            u = null,
            p = null,
            g = () => {
                let e = document.createElement("div");
                return e.id = "element-inspector-highlight", document.body.appendChild(e), e
            },
            m = () => {
                try {
                    if (!u || !p) return;
                    let e = u.getBoundingClientRect();
                    p.style.left = `${window.scrollX+e.left}px`, p.style.top = `${window.scrollY+e.top}px`, p.style.width = `${e.width}px`, p.style.height = `${e.height}px`, p.style.display = "block"
                } catch (t) {
                    console.warn("Error updating highlight:", t), p && (p.style.display = "none")
                }
            },
            h = e => {
                try {
                    return e && 1 === e.nodeType && e.tagName && "element-inspector-panel" !== e.id && "element-inspector-highlight" !== e.id && "inspector-notification" !== e.id
                } catch (t) {
                    return !1
                }
            },
            f = e => {
                try {
                    let r = document.getElementById("element-inspector-panel");
                    if (!r || !e || !h(e)) return;
                    u = e, m();
                    let l = o(e),
                        i = t(e),
                        a = i.name,
                        d = i.source,
                        p = n(e),
                        g = c(e),
                        f = s(e),
                        b = `<dl><dt class="HTML-el">Element:</dt> <dd class="HTML-el">&lt;${e.tagName.toLowerCase()}&gt;</dd><dt class="role">Role:</dt> <dd class="role">${l}</dd>`;
                    d ? b += `<dt class="accname">Accessible Name (from ${d}):</dt> <dd class="accname">${a.substring(0,200)}${a.length>200?"...":""}</dd>` : b += `<dt class="accname">Accessible Name:</dt> <dd class="accname">${a.substring(0,200)}${a.length>200?"...":""}</dd>`, b += `<dt class="focusable">Keyboard Focusable:</dt> <dd class="focusable">${p?"â Yes":"â No"}</dd>`, b += `<dt class="xpath">XPath:</dt> <dd class="xpath">${g}</dd>`, f.length > 0 && (b += '<dt class="aria-attribs">ARIA Attributes:</dt>', b += '<dd class="aria-attribs">', b += '<ul style="margin: 0; padding-left: 16px;">', f.forEach(e => {
                        b += `<li>${e}</li>`
                    }), b += "</ul>", b += "</dd>"), b += "</dl>", r.innerHTML = b, r.style.display = "block";
                    let $ = window.innerWidth,
                        y = window.innerHeight,
                        E = e.getBoundingClientRect(),
                        x = r.getBoundingClientRect(),
                        A = x.width,
                        N = x.height,
                        T, C;
                    T = E.right + 10 + A <= $ ? E.right + 10 : E.left - A - 10 >= 0 ? E.left - A - 10 : Math.max(10, $ - A - 10), C = E.top + N <= y ? E.top : Math.max(10, y - N - 10), r.style.left = `${T+window.scrollX}px`, r.style.top = `${C+window.scrollY}px`
                } catch (_) {
                    console.warn("Error updating inspector panel:", _);
                    let v = document.getElementById("element-inspector-panel");
                    v && (v.innerHTML = `<div><strong>Error inspecting element</strong></div><div>There was an error inspecting this element. This may be due to browser extension conflicts.</div><div>Try navigating to a different element.</div>`, v.style.display = "block")
                }
            },
            b = e => {
                try {
                    let t = e();
                    return h(t) ? t : null
                } catch (r) {
                    return console.warn("Error navigating to element:", r), null
                }
            },
            $ = e => {
                try {
                    if ("element-inspector-panel" === e.target.id || "element-inspector-highlight" === e.target.id || "inspector-notification" === e.target.id) return;
                    f(e.target), x && u !== e.target && (x = !1)
                } catch (t) {
                    console.warn("Error in mouse over handler:", t)
                }
            },
            y = e => {
                try {
                    let t = e.key;
                    if ("q" === t || "Q" === t) {
                        N(), e.preventDefault();
                        return
                    }
                    if ("c" === t || "C" === t) {
                        u && (d(u), e.preventDefault());
                        return
                    }
                    if (!u) {
                        A();
                        return
                    }
                    x || A();
                    let r = null;
                    switch (t) {
                        case "ArrowUp":
                            (r = b(() => u.parentElement)) && (f(r), e.preventDefault());
                            break;
                        case "ArrowDown":
                            (r = b(() => u.firstElementChild)) && (f(r), e.preventDefault());
                            break;
                        case "ArrowLeft":
                            (r = b(() => u.previousElementSibling)) && (f(r), e.preventDefault());
                            break;
                        case "ArrowRight":
                            (r = b(() => u.nextElementSibling)) && (f(r), e.preventDefault())
                    }
                } catch (n) {
                    console.warn("Error in keyboard navigation:", n)
                }
            },
            E = e => {
                try {
                    if (e && e.relatedTarget && ("element-inspector-panel" === e.relatedTarget.id || "element-inspector-highlight" === e.relatedTarget.id)) return;
                    let t = document.getElementById("element-inspector-panel");
                    t && (t.style.display = "none"), p && (p.style.display = "none"), (!x || u && e.relatedTarget !== u) && (u = null)
                } catch (r) {
                    console.warn("Error hiding inspector panel:", r)
                }
            },
            x = !1,
            A = () => {
                try {
                    x = !0, u && h(u) || (u = document.body, f(u))
                } catch (e) {
                    console.warn("Error entering keyboard mode:", e)
                }
            },
            N = () => {
                try {
                    document.removeEventListener("mouseover", $), document.removeEventListener("mouseout", E), document.removeEventListener("keydown", y);
                    let e = document.getElementById("element-inspector-panel");
                    e && e.parentNode && e.parentNode.removeChild(e), p && p.parentNode && p.parentNode.removeChild(p), u = null, p = null, x = !1;
                    let t = document.createElement("div");
                    t.id = "inspector-notification", t.textContent = "Element Inspector turned off", t.style.cssText = `position: fixed;top: 10px;right: 10px;background-color: rgba(0, 0, 0, 0.7);color: white;padding: 8px 12px;border-radius: 4px;font-family: sans-serif;font-size: 16px;z-index: 1000000000000;transition: opacity 0.5s;`, document.body.appendChild(t), setTimeout(() => {
                        t.style.opacity = "0", setTimeout(() => {
                            t && t.parentNode && t.parentNode.removeChild(t)
                        }, 500)
                    }, 3e3), console.log("Element Inspector stopped permanently.")
                } catch (r) {
                    console.error("Error stopping inspector:", r), ["element-inspector-panel", "element-inspector-highlight", "inspector-notification"].forEach(e => {
                        let t = document.getElementById(e);
                        t && t.parentNode && t.parentNode.removeChild(t)
                    })
                }
            };
        (() => {
            try {
                document.querySelector("#element-inspector-panel") && document.querySelector("#element-inspector-panel").remove(), document.querySelector("#element-inspector-highlight") && document.querySelector("#element-inspector-highlight").remove(), e(), p = g(), document.addEventListener("mouseover", $), document.addEventListener("mouseout", E), document.addEventListener("keydown", y), console.log('Element Inspector initialized. Hover over elements to see details. Use arrow keys to navigate the DOM. Press "C" to log element details to console. Press "Q" to stop.')
            } catch (t) {
                console.error("Error initializing element inspector:", t), alert("Failed to initialize Element Inspector. Check the console for details.")
            }
        })()
    }
    elementInspector()
})()