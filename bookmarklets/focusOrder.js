(function() {
    function showFocusOrder() {
        let e = () => {
                let e = document.createElement("style");
                e.id = "tab-order-body-styles", e.textContent = `body.tab-order-active {margin-right: 300px !important;transition: margin-right 0.3s ease;}body.tab-order-active.panel-collapsed {margin-right: 35px !important;}`, document.head.appendChild(e)
            },
            t = () => {
                document.body.classList.add("tab-order-active");
                let e = document.createElement("div");
                e.setAttribute("aria-label", "Tab order"), e.setAttribute("role", "navigation"), e.id = "tab-order-panel-host", e.style.cssText = `position: fixed;right: 0;top: 0;width: 300px;height: 100vh;z-index: 10000;transition: width 0.3s ease;`;
                let t = e.attachShadow({
                        mode: "open"
                    }),
                    o = document.createElement("style");
                o.textContent = `* {box-sizing: border-box;margin: 0;padding: 0;}.tab-order-panel {width: 100%;height: 100%;background: white;border-left: 1px solid #ccc;padding: 20px;box-shadow: -2px 0 5px rgba(0,0,0,0.1);overflow-y: auto;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size: 14px;line-height: 1.5;color: #333;}.panel.collapsed {padding: 0;}.panel.collapsed .panel-content {opacity: 0;visibility: hidden;}.tab-order-toggle {position: absolute;left: 0;top: 10px;width: 35px;height: 35px;padding: 5px;background: white;border: none;border-right: 1px solid #ccc;cursor: pointer;z-index: 1;background:black;}.tab-order-toggle:hover,.tab-order-toggle:focus {outline: 2px solid black;outline-offset: -2px;}.tab-order-toggle svg {width: 24px;height: 24px;display: block;transform: rotate(0deg);transition: transform 0.3s ease;}.panel.collapsed .tab-order-toggle svg {transform: rotate(180deg);}.panel-content {margin-top: 45px;transition: opacity 0.2s ease;}button {background: purple;color: white;border: none;padding: 10px 16px;border-radius: 4px;cursor: pointer;font-size: 14px;font-weight: 500;}button:hover {background: #0052a3;}button:focus {outline: 2px solid #0066cc;outline-offset: 2px;}ol {list-style-position: inside;margin-top: 20px;padding: 0;}li {margin: 0;padding: 0;}a {color: #0066cc;text-decoration: none;display: inline;padding: 4px 0;}a:hover,a:focus {color: #003366;text-decoration: underline;outline: 2px solid #0066cc;outline-offset: 2px;}`, t.appendChild(o);
                let r = document.createElement("div");
                r.className = "tab-order-panel panel";
                let l = document.createElement("button");
                l.className = "tab-order-toggle", l.setAttribute("aria-label", "Toggle tab order panel"), l.setAttribute("aria-expanded", "true"), l.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6" /></svg>`, l.onclick = () => {
                    r.classList.toggle("collapsed"), e.style.width = r.classList.contains("collapsed") ? "35px" : "300px", document.body.classList.toggle("panel-collapsed"), l.setAttribute("aria-expanded", !r.classList.contains("collapsed")), setTimeout(() => {
                        let e = document.querySelectorAll(".tab-order-marker");
                        e.forEach((e, t) => {
                            $[t] && n(e, $[t])
                        });
                        let t = document.getElementById("tab-order-path");
                        t && $.length > 0 && b($)
                    }, 300)
                }, r.appendChild(l);
                let a = document.createElement("div");
                a.className = "panel-content";
                let i = document.createElement("h2");
                i.textContent = "Tabbing order", a.appendChild(i);
                let s = document.createElement("button");
                s.textContent = "Draw path showing focus order", s.setAttribute("aria-pressed", "false"), s.onclick = g, a.appendChild(s);
                let d = document.createElement("ol");
                return d.id = "tab-order-list", a.appendChild(d), r.appendChild(a), t.appendChild(r), document.body.appendChild(e), {
                    list: d,
                    host: e
                }
            },
            o = () => {
                let e = document.createElement("style");
                e.id = "tab-order-marker-styles", e.textContent = `@keyframes pulse {0% {transform: scale(1);opacity: 1;box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7);}70% {transform: scale(1.05);opacity: 0.7;box-shadow: 0 0 0 10px rgba(255, 107, 107, 0);}100% {transform: scale(1);opacity: 1;box-shadow: 0 0 0 0 rgba(255, 107, 107, 0);}}.focus-indicator {position: absolute;border: 3px solid #ff6b6b;border-radius: 4px;pointer-events: none;z-index: 9999;animation: pulse 1s ease-out;animation-iteration-count: 3;}`, document.head.appendChild(e)
            },
            r = e => {
                if (!e) return !1;
                let t = window.getComputedStyle(e);
                if (e.hidden || "none" === t.display || "hidden" === t.visibility || "0" === t.opacity) return !0;
                let o = e.getBoundingClientRect();
                return !(0 !== o.width || 0 !== o.height || l(e))
            },
            l = e => {
                let t = window.getComputedStyle(e);
                return "absolute" === t.position && "1px" === t.width && "1px" === t.height || "rect(0px, 0px, 0px, 0px)" === t.clip || "rect(0, 0, 0, 0)" === t.clip || e.classList.contains("sr-only") || e.classList.contains("visually-hidden")
            },
            a = e => e.getAttribute("aria-label") || e.getAttribute("aria-labelledby") && document.getElementById(e.getAttribute("aria-labelledby"))?.textContent || e.title || e.textContent?.trim() || e.placeholder || e.alt || e.value || `${e.tagName.toLowerCase()}${e.id?"#"+e.id:""}`,
            i = (e, t) => {
                let o = document.createElement("div");
                return o.className = "tab-order-marker", o.textContent = t, o.style.cssText = `position: absolute;background: #045cc1;color: white;border-radius: 50%;padding: 4px 8px;font-size: 12px;pointer-events: none;z-index: 9999;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;font-weight: bold;`, document.body.appendChild(o), n(o, e), o
            },
            n = (e, t) => {
                let o = t.getBoundingClientRect(),
                    r = window.scrollX || window.pageXOffset,
                    l = window.scrollY || window.pageYOffset;
                e.style.left = `${o.left+r-10}px`, e.style.top = `${o.top+l-10}px`
            },
            s = e => {
                let t = e.getBoundingClientRect(),
                    o = window.scrollX || window.pageXOffset,
                    r = window.scrollY || window.pageYOffset;
                return {
                    x: t.left + o - 10 + 14,
                    y: t.top + r - 10 + 14
                }
            },
            d = (e, t = !0) => {
                t && document.querySelectorAll(".focus-indicator.temporary").forEach(e => e.remove());
                let o = document.createElement("div");
                o.className = `focus-indicator ${t?"temporary":""}`;
                let r = e.getBoundingClientRect(),
                    l = window.scrollX || window.pageXOffset,
                    a = window.scrollY || window.pageYOffset;
                return o.style.left = `${r.left+l-5}px`, o.style.top = `${r.top+a-5}px`, o.style.width = `${r.width+10}px`, o.style.height = `${r.height+10}px`, document.body.appendChild(o), t && setTimeout(() => {
                    o.remove()
                }, 3e3), e.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                }), o
            },
            p = () => {
                let e = Array.from(document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
                console.log("Total focusable elements found:", e.length), console.log("Hidden elements:", e.filter(e => r(e)).length);
                let t = e.filter(e => !r(e)),
                    o = [],
                    l = [];
                return t.forEach(e => {
                    let t = parseInt(e.getAttribute("tabindex")) || 0;
                    t > 0 ? o.push({
                        element: e,
                        tabindex: t
                    }) : l.push(e)
                }), o.sort((e, t) => e.tabindex - t.tabindex), [...o.map(e => e.element), ...l]
            },
            c = e => {
                let t = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                    o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                o.id = "tab-order-path", o.style.cssText = `position: absolute;top: 0;left: 0;width: 100%;height: ${t}px;pointer-events: none;z-index: 9998;`, document.body.appendChild(o);
                let r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                r.setAttribute("stroke", "#ffffff"), r.setAttribute("stroke-width", "9"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-linejoin", "round"), o.appendChild(r);
                let l = document.createElementNS("http://www.w3.org/2000/svg", "path");
                l.setAttribute("stroke", "#000000"), l.setAttribute("stroke-width", "3"), l.setAttribute("fill", "none"), l.setAttribute("stroke-linecap", "round"), l.setAttribute("stroke-linejoin", "round"), o.appendChild(l), b(e)
            },
            b = e => {
                let t = document.getElementById("tab-order-path");
                if (!t) return;
                let o = t.querySelectorAll("path"),
                    r = "";
                e.forEach((e, t) => {
                    let o = s(e);
                    r += 0 === t ? `M ${o.x} ${o.y}` : ` L ${o.x} ${o.y}`
                }), o.forEach(e => {
                    e.setAttribute("d", r)
                })
            },
            $ = [],
            h = () => {
                document.getElementById("tab-order-body-styles") || e(), document.getElementById("tab-order-marker-styles") || o(), document.querySelectorAll(".tab-order-marker").forEach(e => e.remove()), $ = p();
                let r, n = document.getElementById("tab-order-panel-host");
                if (n) r = n.shadowRoot.getElementById("tab-order-list");
                else {
                    let s = t();
                    r = s.list
                }
                r.innerHTML = "";
                let c = [];
                return $.forEach((e, t) => {
                    let o = document.createElement("li"),
                        n = document.createElement("a");
                    n.href = "#", n.textContent = `${a(e)}`, l(e) && (n.textContent += " (visually hidden)"), n.onclick = t => {
                        t.preventDefault(), e.focus(), d(e)
                    }, n.onmouseover = () => {
                        d(e)
                    }, n.onfocus = () => {
                        d(e)
                    }, o.appendChild(n), r.appendChild(o), c.push(i(e, t + 1))
                }), {
                    elements: $,
                    markers: c
                }
            },
            g = e => {
                let t = e.target,
                    o = document.getElementById("tab-order-path");
                if (o) o.remove(), t.setAttribute("aria-pressed", "false");
                else {
                    let {
                        elements: r
                    } = h();
                    c(r), t.setAttribute("aria-pressed", "true")
                }
            },
            u, f = () => {
                clearTimeout(u), u = setTimeout(() => {
                    let e = document.querySelectorAll(".tab-order-marker");
                    e.forEach((e, t) => {
                        $[t] && n(e, $[t])
                    });
                    let t = document.getElementById("tab-order-path");
                    t && $.length > 0 && b($)
                }, 100)
            };
        window.addEventListener("resize", f);
        let m = () => {
                window.removeEventListener("resize", f), document.removeEventListener("keypress", x), document.body.classList.remove("tab-order-active", "panel-collapsed"), document.querySelectorAll(".focus-indicator").forEach(e => e.remove()), document.getElementById("tab-order-panel-host")?.remove(), document.getElementById("tab-order-path")?.remove(), document.querySelectorAll(".tab-order-marker").forEach(e => e.remove()), document.getElementById("tab-order-body-styles")?.remove(), document.getElementById("tab-order-marker-styles")?.remove(), document.getElementById("focus-order-notification")?.remove()
            },
            x = e => {
                ("q" === e.key || "Q" === e.key) && m()
            },
            y = document.createElement("div");
        y.id = "focus-order-notification", y.setAttribute("role", "status"), y.setAttribute("aria-live", "polite"), y.style.cssText = "position:fixed;top:10px;left:10px;background:#333;color:#fff;padding:12px 16px;border-radius:4px;z-index:10001;font-family:sans-serif;font-size:14px;", y.textContent = "Focus order visualization active. Press Q to remove.", document.body.appendChild(y), setTimeout(() => {
            y && y.parentNode && y.remove()
        }, 5e3), document.addEventListener("keypress", x), h(), setTimeout(() => {
            let e = document.querySelectorAll(".tab-order-marker");
            e.forEach((e, t) => {
                $[t] && n(e, $[t])
            })
        }, 350)
    }
    showFocusOrder()
})()