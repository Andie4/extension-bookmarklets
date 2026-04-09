javascript: (function() {
    ! function() {
        let e = !1,
            t = [],
            r = null,
            n = "js",
            i = [],
            o = null,
            l = null,
            a;

        function s(e) {
            let t = e.replace(/\s+/g, " ").trim();
            return t.length > 50 ? t.substring(0, 30) + "..." : t
        }

        function d(e) {
            return [/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, /^[a-z0-9]{10,}$/i, /^(temp|generated|dynamic|auto)/i].some(t => t.test(e))
        }

        function c(e) {
            let t = e;
            for (; t && t !== document.body;) {
                if (t.id && !d(t.id)) {
                    let r = t,
                        n = [];
                    for (; t !== r;) {
                        let i = 1,
                            o = t.previousSibling;
                        for (; o;) 1 === o.nodeType && o.tagName === t.tagName && i++, o = o.previousSibling;
                        n.unshift(`${t.tagName.toLowerCase()}[${i}]`), t = t.parentNode
                    }
                    return `//*[@id="${r.id}"]${n.length>0?"/"+n.join("/"):""}`
                }
                t = t.parentElement
            }
            t = e;
            let l = [];
            for (; t && 1 === t.nodeType && t !== document.body;) {
                let a = 1,
                    s = t.previousSibling;
                for (; s;) 1 === s.nodeType && s.tagName === t.tagName && a++, s = s.previousSibling;
                let c = t.tagName.toLowerCase();
                l.unshift(`${c}[${a}]`), t = t.parentNode
            }
            return "/" + l.join("/")
        }

        function u(e) {
            l && (l.innerHTML = `Tag: &lt;${e.tagName.toLowerCase()}&gt;<br>XPath: ${c(e)}<br>Text: ${s(e.textContent)}`)
        }

        function p(e) {
            return (document.querySelectorAll('[data-selector-highlight="hover"]').forEach(e => {
                e.removeAttribute("style"), e.removeAttribute("data-selector-highlight")
            }), e) ? (e.hasAttribute("data-selector-highlight") && "selected" === e.getAttribute("data-selector-highlight") || (e.style.outline = "2px solid blue", e.setAttribute("data-selector-highlight", "hover"), u(e)), e) : null
        }

        function h(e, t) {
            if (!e) return null;
            switch (t) {
                case "up":
                    let r = e.parentElement;
                    for (; r;) {
                        if (r.parentElement || r.previousElementSibling || r.nextElementSibling) return r;
                        r = r.parentElement
                    }
                    return null;
                case "down":
                    return e.children[0] || null;
                case "left":
                    return e.previousElementSibling || e.parentElement && e.parentElement.previousElementSibling || null;
                case "right":
                    return e.nextElementSibling || e.parentElement && e.parentElement.nextElementSibling || null;
                default:
                    return null
            }
        }

        function p(e) {
            return (document.querySelectorAll('[data-selector-highlight="hover"]').forEach(e => {
                e.removeAttribute("style"), e.removeAttribute("data-selector-highlight")
            }), e) ? (e.getAttribute("data-selector-highlight") && "hover" !== e.getAttribute("data-selector-highlight") || (e.style.outline = "2px solid blue", e.setAttribute("data-selector-highlight", "hover"), u(e)), e) : null
        }

        function g(e) {
            if (e.target.closest("[data-selector-ui]")) return;
            e.preventDefault(), e.stopPropagation();
            let r = e.target;
            if (!r.hasAttribute("data-selector-highlight") || "selected" !== r.getAttribute("data-selector-highlight")) {
                let n = b(r),
                    i = f(r);
                t.push({
                    element: r,
                    structuredSelector: n,
                    idSelector: i,
                    textContent: r.textContent.trim()
                }), r.removeAttribute("style"), r.setAttribute("data-selector-highlight", "selected"), r.style.outline = "2px solid red", o = r
            }
            return !1
        }

        function b(e) {
            let t = e;
            for (; t && t !== document.body;) {
                if (t.id && !d(t.id)) {
                    let r = t,
                        n = [];
                    for (t = e; t !== r;) {
                        let i = t.tagName.toLowerCase(),
                            o = Array.from(t.parentElement?.children || []).filter(e => e.tagName === t.tagName);
                        if (o.length > 0) {
                            let l = o.indexOf(t) + 1;
                            i += `:nth-child(${l})`
                        }
                        n.unshift(i), t = t.parentElement
                    }
                    return `#${r.id} ${n.join(" > ")}`
                }
                t = t.parentElement
            }
            t = e;
            let a = [];
            for (; t && t !== document.body;) {
                let s = t.tagName.toLowerCase(),
                    c = Array.from(t.parentElement?.children || []).filter(e => e.tagName === t.tagName);
                if (c.length > 0) {
                    let u = c.indexOf(t) + 1;
                    s += `:nth-child(${u})`
                }
                a.unshift(s), t = t.parentElement
            }
            return a.join(" > ")
        }

        function f(e) {
            let t = e;
            for (; t && t !== document.body;) {
                if (t.id && !d(t.id)) return `#${t.id}`;
                t = t.parentElement
            }
            t = e;
            let r = [];
            for (; t && t !== document.body;) {
                let n = t.tagName.toLowerCase(),
                    i = Array.from(t.parentElement?.children || []),
                    o = i.indexOf(t) + 1;
                i.length > 1 && (n += `:nth-child(${o})`), r.unshift(n), t = t.parentElement
            }
            return r.join(" ")
        }

        function c(e) {
            let t = e,
                r = null;
            for (; t && t !== document.body;) {
                if (t.id && !d(t.id)) {
                    r = t;
                    break
                }
                t = t.parentElement
            }
            if (r) {
                t = e;
                let n = [];
                for (; t !== r;) {
                    let i = 1,
                        o = t.previousSibling;
                    for (; o;) 1 === o.nodeType && o.tagName === t.tagName && i++, o = o.previousSibling;
                    n.unshift(`${t.tagName.toLowerCase()}[${i}]`), t = t.parentNode
                }
                return `//*[@id="${r.id}"]${n.length>0?"/"+n.join("/"):""}`
            }
            t = e;
            let l = [];
            for (; t && 1 === t.nodeType && t !== document.body;) {
                let a = 1,
                    s = t.previousSibling;
                for (; s;) 1 === s.nodeType && s.tagName === t.tagName && a++, s = s.previousSibling;
                let c = t.tagName.toLowerCase();
                l.unshift(`${c}[${a}]`), t = t.parentNode
            }
            return "/" + l.join("/")
        }

        function m(e, t) {
            if (e.element.id && !d(e.element.id)) switch (t) {
                case "js":
                    return `document.querySelector("#${e.element.id}");`;
                case "css":
                    return `#${e.element.id}`;
                case "xpath":
                    return `//*[@id="${e.element.id}"]`
            }
            switch (t) {
                case "js":
                    return `document.querySelector("${e.structuredSelector}");`;
                case "css":
                default:
                    return e.structuredSelector;
                case "xpath":
                    return e.xpathSelector
            }
        }

        function x(e, n) {
            i.forEach(e => {
                e.removeAttribute("aria-hidden")
            }), i = [], e.remove(), n.remove(), t.forEach(e => {
                e.element.style.outline = ""
            }), t = [], document.querySelectorAll("[data-selector-highlight]").forEach(e => {
                e.removeAttribute("style"), e.removeAttribute("data-selector-highlight")
            }), r && r.focus()
        }
        window.startElementSelection = function() {
            e || (e = !0, a = function o() {
                let d = document.createElement("button");
                d.textContent = 'I am done [press "d"]', d.setAttribute("data-selector-ui", "true"), d.style.cssText = `position: fixed;top: 20px;left: 20px;z-index: 10000;padding: 10px 20px;background: #4CAF50;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 16px;`, d.addEventListener("click", o => {
                    o.stopPropagation(), e = !1, document.removeEventListener("click", g, !0), a.doneButton.remove(), document.body.style.cursor = "default", l && l.remove(),
                        function e(o) {
                            (i = Array.from(document.body.children).filter(e => "true" !== e.getAttribute("data-selector-ui") && !e.contains(document.getElementById("selectorSelectorDialog")))).forEach(e => {
                                e.setAttribute("aria-hidden", "true")
                            }), r = document.activeElement;
                            let l = function e() {
                                let t = document.createElement("div");
                                return t.setAttribute("data-selector-ui", "true"), t.style.cssText = `position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.5);z-index: 10000;`, t
                            }();
                            document.body.appendChild(l);
                            let a = document.createElement("div");
                            a.setAttribute("data-selector-ui", "true"), a.setAttribute("role", "dialog"), a.setAttribute("id", "selectorSelectorDialog"), a.setAttribute("aria-modal", "true"), a.setAttribute("aria-labelledby", "dialog-title"), a.setAttribute("aria-describedby", "selectorSelectorDescription"), a.setAttribute("tabindex", "-1"), a.style.cssText = `position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 80%;max-width: 800px;max-height: 80vh;background: white;padding: 20px;border-radius: 8px;box-shadow: 0 0 20px rgba(0,0,0,0.2);z-index: 10001;overflow-y: auto;font-family: monospace;`;
                            let d = document.createElement("div");
                            d.style.cssText = `display: flex;justify-content: space-between;align-items: center;margin-bottom: 1em;`;
                            let u = document.createElement("h1");
                            u.id = "dialog-title", u.setAttribute("data-selector-ui", "true"), u.style.cssText = `margin: 0;font-family: sans-serif;font-size: 1.5em;`, u.textContent = "Your selections";
                            let p = document.createElement("div");
                            p.style.cssText = `font-size: 0.9em;color: #666;margin-top: 0.5em;`, p.textContent = "Press T to toggle between JS, CSS, and XPath selectors", p.setAttribute("id", "selectorSelectorDescription");
                            let h = document.createElement("button");
                            h.setAttribute("data-selector-ui", "true"), h.setAttribute("data-copy-button", "true"), h.textContent = "Copy all JS selectors", h.style.cssText = `padding: 8px 16px;margin-right: 30px;background: #4CAF50;color: white;border: none;border-radius: 4px;cursor: pointer;font-size: 14px;`;
                            var g, b = document,
                                f = b.createElement("style");
                            b.head.appendChild(f), (g = f.sheet).insertRule("#selectorSelectorDialog {background:white!important;outline:2px solid black;}", 0), g.insertRule("#selectorSelectorDialog * {color:black!important;}", 0), h.addEventListener("click", async () => {
                                try {
                                    await navigator.clipboard.writeText(o.map((e, t) => `Element ${t+1} ("${s(e.textContent)}"):${m(e,n)}`).join("\n"));
                                    let e = h.textContent;
                                    h.textContent = "Copied!", document.querySelector("#copyStatus").textContent = "Copied", h.style.background = "#45a049", setTimeout(() => {
                                        h.textContent = e, document.querySelector("#copyStatus").textContent = "", h.style.background = "#4CAF50"
                                    }, 2e3)
                                } catch (t) {
                                    console.error("Failed to copy text:", t), h.textContent = "Failed to copy", h.style.background = "#f44336", setTimeout(() => {
                                        h.textContent = `Copy all ${n.toUpperCase()} selectors`, h.style.background = "#4CAF50"
                                    }, 2e3)
                                }
                            }), d.appendChild(u), d.appendChild(h);
                            let y = document.createElement("dl");
                            y.setAttribute("data-selector-ui", "true"), o.forEach((e, t) => {
                                e.xpathSelector = c(e.element);
                                let r = document.createElement("dt");
                                r.setAttribute("data-selector-ui", "true"), r.style.cssText = `font-size: 1.2em;margin: 1em 0 0.5em;font-family: sans-serif;`, r.textContent = `Element ${t+1} ("${s(e.textContent)}")`;
                                let i = document.createElement("dd"),
                                    o = document.createElement("div");
                                o.setAttribute("data-selector-ui", "true"), o.setAttribute("data-selector-content", "true"), o.setAttribute("data-item-index", t), o.setAttribute("contenteditable", "true"), o.setAttribute("tabindex", "0"), o.style.cssText = `padding: 5px;margin: 5px 0;background: #f5f5f5;cursor: pointer;white-space: nowrap;overflow-x: auto;`, o.textContent = m(e, n), o.addEventListener("click", function(e) {
                                    e.stopPropagation();
                                    let t = document.createRange();
                                    t.selectNodeContents(this);
                                    let r = window.getSelection();
                                    r.removeAllRanges(), r.addRange(t)
                                }), y.appendChild(r), i.appendChild(o), y.appendChild(i)
                            });
                            let $ = document.createElement("button");
                            $.setAttribute("data-selector-ui", "true"), $.textContent = "\xd7", $.setAttribute("aria-label", "Close dialog"), $.style.cssText = `position: absolute;top: 15px;right: 10px;background: none;border: none;font-size: 24px;cursor: pointer;padding: 5px 10px;`, $.onclick = e => {
                                    e.stopPropagation();
                                    let t = document.querySelector('[data-selector-ui][style*="background: rgba"]');
                                    x(t, a)
                                }, a.appendChild($), a.appendChild(d), a.appendChild(p), a.appendChild(y), document.body.appendChild(a), document.addEventListener("keydown", function(e) {
                                    if ("t" === e.key.toLowerCase()) {
                                        switch (n) {
                                            case "js":
                                                n = "css";
                                                break;
                                            case "css":
                                                n = "xpath";
                                                break;
                                            case "xpath":
                                                n = "js"
                                        }! function e(r) {
                                            let i = r.querySelectorAll("[data-selector-content]");
                                            i.forEach(e => {
                                                let r = e.getAttribute("data-item-index"),
                                                    i = t[r];
                                                e.textContent = m(i, n)
                                            });
                                            let o = r.querySelector("[data-copy-button]");
                                            o && (o.textContent = `Copy all ${n.toUpperCase()} selectors`)
                                        }(a)
                                    }
                                }),
                                function e(t) {
                                    let r = t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                                        n = r[0],
                                        i = r[r.length - 1];
                                    t.addEventListener("keydown", function(e) {
                                        if ("Escape" === e.key) {
                                            let r = document.querySelector('[data-selector-ui][style*="background: rgba"]');
                                            x(r, t);
                                            return
                                        }
                                        "Tab" === e.key && (e.shiftKey ? document.activeElement === n && (e.preventDefault(), i.focus()) : document.activeElement === i && (e.preventDefault(), n.focus()))
                                    })
                                }(a), a.focus()
                        }(t)
                }), document.body.appendChild(d), document.addEventListener("keydown", function(e) {
                    "d" === e.key.toLowerCase() && d.click()
                });
                let u = document.createElement("div");
                return u.setAttribute("role", "status"), u.setAttribute("id", "copyStatus"), u.style.cssText = `clip-path: inset(100%);clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;white-space: nowrap;width: 1px;`, document.body.appendChild(u), (l = document.createElement("div")).id = "nodeDetails", l.setAttribute("role", "status"), l.style.cssText = `position: fixed;bottom: 20px;left: 20px;background: rgba(0,0,0,0.8);color: white;padding: 10px;border-radius: 4px;z-index: 10000;font-family: monospace;word-wrap: break-word;`, document.body.appendChild(l), {
                    doneButton: d
                }
            }(), p(o = document.activeElement || document.body), document.addEventListener("click", g, !0), document.addEventListener("keydown", function(r) {
                if (e) {
                    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(r.key) && r.preventDefault(), "Tab" === r.key) {
                        setTimeout(() => {
                            let e = document.activeElement;
                            e && e !== o && (o = e, e.hasAttribute("data-selector-highlight") && "selected" === e.getAttribute("data-selector-highlight") || p(e))
                        }, 0);
                        return
                    }
                    switch (r.key) {
                        case "ArrowUp":
                            o = h(o, "up");
                            break;
                        case "ArrowDown":
                            o = h(o, "down");
                            break;
                        case "ArrowLeft":
                            o = h(o, "left");
                            break;
                        case "ArrowRight":
                            o = h(o, "right");
                            break;
                        case "Enter":
                            r.preventDefault(), o && (!o.hasAttribute("data-selector-highlight") || "selected" !== o.getAttribute("data-selector-highlight")) && (t.push({
                                element: o,
                                structuredSelector: b(o),
                                idSelector: f(o),
                                textContent: o.textContent.trim()
                            }), o.removeAttribute("style"), o.setAttribute("data-selector-highlight", "selected"), o.style.outline = "2px solid red")
                    }
                    o && (!o.hasAttribute("data-selector-highlight") || "selected" !== o.getAttribute("data-selector-highlight")) && p(o)
                }
            }), document.addEventListener("mousemove", function(t) {
                if (!e) return;
                let r = t.target;
                r === o || r.hasAttribute("data-selector-highlight") && "selected" === r.getAttribute("data-selector-highlight") || p(o = r)
            }), document.body.style.cursor = "pointer", console.log("Selection mode started. Use arrow keys to navigate, ENTER to select, or use mouse and click."))
        }
    }(), startElementSelection()
})()