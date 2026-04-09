javascript: (function() {
    let wwg = "https://html.spec.whatwg.org/multipage",
        mdn = "https://developer.mozilla.org/en-US/docs/Web",
        el = "HTML element",
        att = "HTML attribute",
        a = "ARIA attribute",
        noMdnEntry = "â¼ï¸ No page exists for this at MDN";

    function lookUpHTML() {
        if (console.clear(), !window.htmlData) {
            console.error("HTML data not loaded. Make sure data-source.js is included before this script."), alert("HTML data not available. Please ensure the extension is properly installed.");
            return
        }
        let e = window.htmlData,
            t = document.getElementById("a11y-tools-shadow-host");
        if (t) {
            let l = document.querySelectorAll('[aria-hidden="true"]');
            l.forEach(e => {
                e !== t && e.removeAttribute("aria-hidden")
            });
            let r = document.querySelectorAll('[tabindex="-1"]');
            r.forEach(e => {
                e.removeAttribute("tabindex")
            }), document.body.removeChild(t)
        }
        let n = document.activeElement,
            i = null,
            o = -1,
            m = [],
            d = null,
            c = document.createElement("div");
        c.setAttribute("id", "a11y-tools-shadow-host"), c.style.cssText = `position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999;pointer-events: none;`;
        let s = c.attachShadow({
                mode: "closed"
            }),
            g = "",
            w = !1;
        "undefined" != typeof openInSidebar && openInSidebar && (w = !0, g = `#a11y-tools-data-lookup {width: 100%;height: 100%;max-width: none;max-height: none;top:0;bottom:0;outline:0;border:0;}#data-list {max-height: 70vh;}`);
        let h = document.createElement("style");
        h.textContent = `/* Reset all default styles */*, *::before, *::after {margin: 0;padding: 0;border: 0;font-size: 100%;vertical-align: baseline;box-sizing: border-box;line-height: 1;}/* Basic styling for all elements */* {font-family: Arial, sans-serif;color: inherit;background: transparent;text-decoration: none;list-style: none;}/* Specific component styles */#a11y-tools-modal-backdrop {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);z-index: 9999;pointer-events: all;}#a11y-tools-data-lookup {background: white;background: #e4efe4;color: black;position: fixed;top: 2em;left: 50%;transform: translate(-50%, 0);border: 2px solid #333;padding: 20px;box-shadow: 0 4px 20px rgba(0,0,0,0.5);z-index: 10000;font-family: Arial, sans-serif;max-width: 90vw;width: 60em;max-height: 80vh;overflow: hidden;display: flex;flex-direction: column;pointer-events: all;}#a11y-tools-data-lookup h1 {margin: 0 0 15px 0;color: #333;font-size: 20px;font-weight: bold;line-height: 1.2;}#a11y-tools-data-lookup input[type="text"] {background: white;color: black;width: 100%;padding: 12px;border: 2px solid #235f20;font-size: 16px;margin-bottom: 16px;box-sizing: border-box;border-radius: 5px;}#a11y-tools-data-lookup input[type="text"]:focus {outline: 3px solid #235f20;outline-offset: 3px;}#a11y-tools-data-lookup button {border-radius: 5px;}#a11y-tools-data-lookup button:focus {outline: 3px solid #235f20;outline-offset: 3px;}.search-hint {font-size: 12px;color: #666;margin-bottom: 10px;line-height: 1.3;}#data-list:empty {display:none!important;}#data-list {max-height: 300px;overflow-y: auto;border: 1px solid #ccc;margin: 0 0 15px 0;padding: 0;list-style: none;background: #f9f9f9;}#data-list li {padding: 10px;cursor: pointer;border-bottom: 1px solid #eee;background: white;line-height: 1.4;}#data-list li:hover,#data-list li.hover {background: #0f380d;}#data-list li:hover *,#data-list li.hover * {color: white!important;}#selection-made {border: 1px solid #235f20;padding: 10px;margin-bottom: 15px;background: #f2fff0;display: none;border-radius: 3px;}#selection-made strong {display: block;margin-bottom: 5px;font-weight: bold;}.selection-text {font-family: monospace;font-size: 14px;line-height: 1.3;}#selection-made:focus {outline: 3px solid #235f20;outline-offset: 3px;}.buttons-container {display: none;gap: 10px;flex-wrap: wrap;}.action-button {background: #235f20;color: white;border: none;padding: 10px 15px;cursor: pointer;font-size: 14px;margin: 5px 5px 5px 0;border-radius: 3px;}.action-button:hover {background: #0f380d;}.secondary-button {background: #666;color: white;border: none;padding: 10px 15px;cursor: pointer;font-size: 14px;margin-top: 10px;border-radius: 3px;}.secondary-button:hover {background: #444;}.category {color:white;background:gray;padding:0.2em;font-size:0.8em;border-radius:5px;outline:1px solid white;}.element {background:#173b4e;}.attribute {background:#295f19;}.ARIA {background:#65395b;}/* Radio button options styling */.radio-options {display: none;border: 1px solid #235f20;padding: 10px;margin-bottom: 15px;background: #f2fff0;border-radius: 3px;}.radio-options fieldset {border: none;margin: 0;padding: 0;}.radio-options legend {font-weight: bold;margin-bottom: 8px;color: #235f20;font-size: 14px;}.radio-options-container {display: flex;gap: 20px;flex-wrap: wrap;}.radio-option {margin: 0;display: flex;align-items: center;gap: 8px;}.radio-option input[type="radio"] {width: auto;margin: 0;padding: 0;border: none;background: none;font-size: inherit;}.radio-option input[type="radio"]:focus {outline: 2px solid #235f20;outline-offset: 2px;}.radio-option label {cursor: pointer;font-size: 14px;line-height: 1.3;color: #333;}/* Notification panel styles */#notification-panel {position: fixed;bottom: 20px;left: 20px;right: 20px;background: #2d5016;color: white;padding: 15px 20px;border-radius: 8px;border: 2px solid #4a7c2a;box-shadow: 0 4px 12px rgba(0,0,0,0.3);z-index: 10001;width:calc(100%-40px);font-family: Arial, sans-serif;font-size: 14px;line-height: 1.4;opacity: 0;transform: translateX(100%);pointer-events: all;}#notification-panel.show {opacity: 1;transform: translateX(0);}#notification-panel .notification-title {font-weight: bold;margin-bottom: 8px;color: #a8d982;}#notification-panel .notification-content {font-family: monospace;background: rgba(255,255,255,0.1);padding: 8px;border-radius: 4px;border: 1px solid rgba(255,255,255,0.2);word-break: break-all;}${g}`;
        let U = [],
            y = Array.from(document.body.children);
        y.forEach(e => {
            e !== c && (U.push({
                element: e,
                originalAriaHidden: e.getAttribute("aria-hidden")
            }), e.setAttribute("aria-hidden", "true"))
        });
        let u = Array.from(document.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]')),
            b = [];
        u.forEach(e => {
            b.push({
                element: e,
                originalTabIndex: e.getAttribute("tabindex")
            }), e.setAttribute("tabindex", "-1")
        });
        let p = document.createElement("div");
        p.setAttribute("id", "a11y-tools-modal-backdrop");
        let A = document.createElement("div");
        w || (A.setAttribute("role", "dialog"), A.setAttribute("aria-modal", "true")), A.setAttribute("id", "a11y-tools-data-lookup"), A.setAttribute("aria-labelledby", "a11y-tools-lookup-dialog-header");
        let f = document.createElement("h1");
        f.textContent = "Look up HTML reference", f.setAttribute("id", "a11y-tools-lookup-dialog-header");
        let R = document.createElement("input");
        R.type = "text", R.placeholder = "Type to search/filter", R.setAttribute("spellcheck", "false"), R.setAttribute("role", "combobox"), R.setAttribute("aria-labelledby", "a11y-tools-lookup-dialog-header"), R.setAttribute("aria-controls", "data-list"), R.setAttribute("aria-expanded", "false"), R.setAttribute("aria-autocomplete", "list"), R.setAttribute("aria-describedby", "search-hint");
        let M = document.createElement("ul");
        M.setAttribute("role", "listbox"), M.setAttribute("tabindex", "0"), M.setAttribute("id", "data-list"), M.setAttribute("aria-label", "HTML elements");
        let L = document.createElement("div");
        L.setAttribute("id", "selection-made"), L.setAttribute("tabindex", "-1");
        let T = document.createElement("strong");
        T.textContent = "Selected:";
        let N = document.createElement("div");
        N.className = "selection-text", L.appendChild(T), L.appendChild(N);
        let E = document.createElement("div");
        E.className = "buttons-container";
        let H = document.createElement("div");
        H.setAttribute("id", "notification-panel"), H.setAttribute("role", "status"), H.setAttribute("aria-live", "polite");
        let x = document.createElement("div");
        x.className = "notification-title";
        let $ = document.createElement("div");

        function v(e, t) {
            d && clearTimeout(d), x.textContent = e, $.textContent = t, H.classList.add("show"), d = setTimeout(() => {
                H.classList.remove("show")
            }, 5e3)
        }
        $.className = "notification-content", H.appendChild(x), H.appendChild($);
        let k = [{
                text: "Copy MDN page URL as Markdown Link (1)",
                key: "1",
                action: "MDNpageMarkdown"
            }, {
                text: "Copy MDN page URL as HTML Link (2)",
                key: "2",
                action: "MDNpageHtml"
            }, {
                text: "Go to MDN ref page (3)",
                key: "3",
                action: "gotoMDNpage"
            }, {
                text: "Copy HTML spec URL as Markdown Link (4)",
                key: "4",
                action: "HTMLspecMarkdown"
            }, {
                text: "Copy HTML spec URL as HTML Link (5)",
                key: "5",
                action: "HTMLspecHtml"
            }, {
                text: "Go to HTML spec page (6)",
                key: "6",
                action: "gotoHTMLspec"
            }, ],
            _ = document.createElement("button");
        _.textContent = "Close (Escape)", _.className = "secondary-button";
        let I = document.createElement("button");

        function C() {
            d && clearTimeout(d), U.forEach(({
                element: e,
                originalAriaHidden: t
            }) => {
                null === t ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t)
            }), b.forEach(({
                element: e,
                originalTabIndex: t
            }) => {
                null === t ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", t)
            }), document.body.removeChild(c), n.focus()
        }

        function D(e) {
            let t = A.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])'),
                l = t[0],
                r = t[t.length - 1];
            "Tab" === e.key && (e.shiftKey ? s.activeElement === l && (e.preventDefault(), r.focus()) : s.activeElement === r && (e.preventDefault(), l.focus()))
        }

        function z() {}

        function S(t) {
            if (m = e.filter(e => {
                    if (0 === t.length) return !0;
                    let l = e.title.toLowerCase(),
                        r = t.toLowerCase(),
                        n = l.match(/[a-z0-9]+/g) || [],
                        i = r.match(/[a-z0-9]+/g) || [];
                    return 0 !== i.length && i.every(e => n.some(t => t.startsWith(e)))
                }), M.innerHTML = "", o = -1, R.setAttribute("aria-expanded", m.length > 0 ? "true" : "false"), 0 === m.length) {
                let l = document.createElement("li");
                l.textContent = "No HTML element or attribute found that matches this filtering", l.style.cssText = "padding: 10px; color: #666; font-style: italic;", M.appendChild(l);
                return
            }
            m.forEach((e, t) => {
                let l = document.createElement("li");
                l.setAttribute("role", "option"), l.setAttribute("id", `option-${t}`);
                let r = e.category,
                    n = e.title.replace("<", "&lt;").replace(">", "&gt;");
                l.innerHTML = '<span style="font-weight:bold">' + n + ' <span class="category ' + r + '">' + e.category + "</span></span>", l.dataset.index = t, l.dataset.whatwgUrl = e.whatwgUrl, l.dataset.title = e.title, l.onmouseenter = () => {
                    o = t, B()
                }, l.onclick = () => F(e), M.appendChild(l)
            })
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase();
            console.log("Debug - Title:", e), console.log("Debug - Query:", t);
            let n = l.match(/\b[a-z0-9]+\b/g) || [],
                i = r.match(/\b[a-z0-9]+\b/g) || [];
            if (console.log("Debug - Title words:", n), console.log("Debug - Query words:", i), 0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.startsWith(e)));
            if (console.log("Debug - Starts with match:", o), o) return !0;
            if (1 === i.length && i[0].length >= 4) {
                let m = n.join(""),
                    d = m.includes(i[0]);
                return console.log("Debug - Concatenated title:", m), console.log("Debug - Concat match:", d), d
            }
            return console.log("Debug - Final result: false"), !1
        }

        function j(e, t) {
            return !1
        }

        function q(e, t) {
            let l = e.join("");
            return t.every(e => e.length >= 3 && l.includes(e))
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase();
            console.log("Debug - Title:", e), console.log("Debug - Query:", t);
            let n = l.match(/\b[a-z0-9]+\b/g) || [],
                i = r.match(/\b[a-z0-9]+\b/g) || [];
            if (console.log("Debug - Title words:", n), console.log("Debug - Query words:", i), 0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.startsWith(e)));
            if (console.log("Debug - Starts with match:", o), o) return !0;
            if (1 === i.length && i[0].length >= 4) {
                let m = n.join(""),
                    d = m.includes(i[0]);
                return console.log("Debug - Concatenated title:", m), console.log("Debug - Concat match:", d), d
            }
            return console.log("Debug - Final result: false"), !1
        }

        function j(e, t) {
            return !1
        }

        function q(e, t) {
            let l = e.join("");
            return t.every(e => e.length >= 3 && l.includes(e))
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase(),
                n = l.match(/\b[a-z0-9]+\b/g) || [],
                i = r.match(/\b[a-z0-9]+\b/g) || [];
            if (0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.startsWith(e)));
            if (o) return !0;
            if (1 === i.length && i[0].length >= 4) {
                let m = n.join("");
                return m.includes(i[0])
            }
            return !1
        }

        function j(e, t) {
            return !1
        }

        function q(e, t) {
            let l = e.join("");
            return t.every(e => e.length >= 3 && l.includes(e))
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase(),
                n = l.match(/\b\w+\b/g) || [],
                i = r.match(/\b\w+\b/g) || [];
            if (0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.startsWith(e)));
            return !!o || q(n, i)
        }

        function j(e, t) {
            return !1
        }

        function q(e, t) {
            let l = e.join("");
            return t.every(e => e.length >= 3 && l.includes(e))
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase(),
                n = l.match(/\b\w+\b/g) || [],
                i = r.match(/\b\w+\b/g) || [];
            if (0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.includes(e)));
            return !!o || j(n, i) || q(l, i)
        }

        function j(e, t) {
            return t.every(t => e.some(e => e.includes(t) || e.length >= 2 && t.includes(e)))
        }

        function q(e, t) {
            let l = e.replace(/\s+/g, "");
            return t.every(e => !!l.includes(e) || e.length >= 2 && l.includes(e))
        }

        function G(e, t) {
            let l = e.toLowerCase(),
                r = t.toLowerCase(),
                n = l.match(/\b\w+\b/g) || [],
                i = r.match(/\b\w+\b/g) || [];
            if (0 === i.length) return !1;
            let o = i.every(e => n.some(t => t.includes(e)));
            return !!o || j(n, i) || q(l, i)
        }

        function j(e, t) {
            return t.every(t => e.some(e => e.includes(t) || t.includes(e)))
        }

        function q(e, t) {
            let l = e.replace(/\s+/g, "");
            return t.every(e => !!l.includes(e) || e.length >= 2 && l.includes(e))
        }

        function B() {
            let e = M.querySelectorAll('li[role="option"]');
            e.forEach((e, t) => {
                t === o ? (e.classList.add("hover"), R.setAttribute("aria-activedescendant", e.id), e.scrollIntoView({
                    block: "nearest"
                })) : e.classList.remove("hover")
            })
        }

        function F(e) {
            M.setAttribute("tabindex", "-1"), i = e;
            let t = e.title;
            N.textContent = t, L.style.display = "block", L.focus(),
                function e(t) {
                    E.innerHTML = "";
                    let l = "attribute" === t.category || "ARIA" === t.category,
                        r = l ? k.slice(0, 3) : k;
                    r.forEach(e => {
                        let t = document.createElement("button");
                        t.textContent = e.text, t.className = "action-button", t.onclick = () => W(e.action), E.appendChild(t)
                    })
                }(e), E.style.display = "flex", I.style.display = "block", R.value = t, M.innerHTML = "", R.setAttribute("aria-expanded", "false")
        }

        function W(e) {
            if (!i) return;
            let t = i.title,
                l;
            switch (e) {
                case "HTMLspecMarkdown":
                    l = `[WhatWG - ${t} ${i.category}](${i.whatwgUrl})`;
                    break;
                case "HTMLspecHtml":
                    l = `<a href="${i.whatwgUrl}">WhatWG: ${t} ${i.category}</a>`;
                    break;
                case "gotoHTMLspec":
                    window.open(i.whatwgUrl, "_blank");
                    return;
                case "MDNpageMarkdown":
                    l = `[MDN - ${t} ${i.category}](${i.mdnUrl})`;
                    break;
                case "MDNpageHtml":
                    l = `<a href="${i.mdnUrl}">MDN: ${t} ${i.category}</a>`;
                    break;
                case "gotoMDNpage":
                    window.open(i.mdnUrl, "_blank");
                    return
            }
            navigator.clipboard.writeText(l).then(() => {
                v("Copied to clipboard!", l)
            }).catch(() => {
                console.log(l), v("Could not copy to clipboard", "Details pasted to console")
            })
        }
        I.textContent = "Start again", I.className = "secondary-button", _.addEventListener("click", C), I.addEventListener("click", function e() {
            M.setAttribute("tabindex", "0"), L.style.display = "none", E.style.display = "none", I.style.display = "none", R.value = "", i = null, o = -1, S(""), R.focus()
        }), p.addEventListener("click", e => {
            e.target === p && C()
        }), R.oninput = e => {
            i && (i = null, o = -1, L.style.display = "none", E.style.display = "none", I.style.display = "none", M.setAttribute("tabindex", "0")), S(e.target.value)
        }, R.onfocus = e => {
            i && setTimeout(() => {
                R.select()
            }, 0)
        }, R.onkeydown = e => {
            D(e);
            let t = M.querySelectorAll('li[role="option"]');
            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault(), o < t.length - 1 && (o++, B());
                    break;
                case "ArrowUp":
                    e.preventDefault(), o > 0 && (o--, B());
                    break;
                case "Enter":
                    e.preventDefault(), o >= 0 && m[o] && F(m[o]);
                    break;
                case "Escape":
                    w || (e.preventDefault(), C())
            }
        }, A.addEventListener("keydown", e => {
            if (D(e), "Escape" !== e.key || w || (e.preventDefault(), C()), i && e.key >= "1" && e.key <= "6" && s.activeElement !== R) {
                let t = parseInt(e.key),
                    l = "attribute" === i.category || "ARIA attribute" === i.category;
                (!l || !(t > 3)) && (e.preventDefault(), W(["MDNpageMarkdown", "MDNpageHtml", "gotoMDNpage", "HTMLspecMarkdown", "HTMLspecHtml", "gotoHTMLspec"][t - 1]))
            }
        }), A.appendChild(f), A.appendChild(R), A.appendChild(M), A.appendChild(L), A.appendChild(E), A.appendChild(I), I.style.display = "none", "undefined" == typeof openInSidebar && A.appendChild(_), p.appendChild(A), p.appendChild(H), s.appendChild(h), s.appendChild(p), document.body.appendChild(c), R.focus(), S("")
    }
    window.htmlData = [{
        whatwgUrl: wwg + "/text-level-semantics.html#the-a-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/a",
        title: "`a` (Anchor)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-abbr-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/abbr",
        title: "`abbr` (Abbreviation)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-address-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/address",
        title: "`address` (Contact Address)",
        category: el
    }, {
        whatwgUrl: wwg + "/image-maps.html#the-area-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/area",
        title: "`area` (Image Map Area)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-article-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/article",
        title: "`article` (Article Contents)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-aside-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/aside",
        title: "`aside` (Aside)",
        category: el
    }, {
        whatwgUrl: wwg + "/media.html#the-audio-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/audio",
        title: "`audio` (Embed Audio)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-b-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/b",
        title: "`b` (Bring Attention To)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-base-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/base",
        title: "`base` (Document Base URL)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-bdi-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/bdi",
        title: "`bdi` (Bidirectional Isolate)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-bdo-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/bdo",
        title: "`bdo` (Bidirectional Text Override)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-blockquote-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/blockquote",
        title: "`blockquote` (Block Quotation)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-body-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/body",
        title: "`body` (Document Body)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-br-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/br",
        title: "`br` (Line Break)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-button-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/button",
        title: "`button` (Button)",
        category: el
    }, {
        whatwgUrl: wwg + "/canvas.html#the-canvas-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/canvas",
        title: "`canvas` (Graphics Canvas)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-caption-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/caption",
        title: "`caption` (Table Caption)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-cite-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/cite",
        title: "`cite` (Citation)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-code-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/code",
        title: "`code` (Inline Code)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-col-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/col",
        title: "`col` (Table Column)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-colgroup-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/colgroup",
        title: "`colgroup` (Table Column Group)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-data-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/data",
        title: "`data` (Data)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-datalist-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/datalist",
        title: "`datalist` (HTML Data List)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-dd-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/dd",
        title: "`dd` (Description Details)",
        category: el
    }, {
        whatwgUrl: wwg + "/edits.html#the-del-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/del",
        title: "`del` (Deleted Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/interactive-elements.html#the-details-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/details",
        title: "`details` (Details disclosure)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-dfn-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/dfn",
        title: "`dfn` (Definition)",
        category: el
    }, {
        whatwgUrl: wwg + "/interactive-elements.html#the-dialog-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/dialog",
        title: "`dialog` (Dialog)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-div-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/div",
        title: "`div` (Content Division)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-dl-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/dl",
        title: "`dl` (Description List)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-dt-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/dt",
        title: "`dt` (Description Term)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-em-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/em",
        title: "`em` (Emphasis)",
        category: el
    }, {
        whatwgUrl: wwg + "/iframe-embed-object.html#the-embed-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/embed",
        title: "`embed` (Embed External Content)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-fieldset-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/fieldset",
        title: "`fieldset` (Field Set)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-figcaption-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/figcaption",
        title: "`figcaption` (Figure Caption)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-figure-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/figure",
        title: "`figure` (Figure with Optional Caption)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-footer-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/footer",
        title: "`footer` (Footer)",
        category: el
    }, {
        whatwgUrl: wwg + "/forms.html#the-form-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/form",
        title: "`form` (Form)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-head-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/head",
        title: "`head` (Document Metadata (Header))",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-header-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/header",
        title: "`header` (Header)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-hgroup-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/hgroup",
        title: "`hgroup` (Heading Group)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-hr-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/hr",
        title: "`hr` (Thematic Break (Horizontal Rule))",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-html-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/html",
        title: "`html` (HTML Document / Root)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-i-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/i",
        title: "`i` (Idiomatic Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/iframe-embed-object.html#the-iframe-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/iframe",
        title: "`iframe` (Inline Frame)",
        category: el
    }, {
        whatwgUrl: wwg + "/embedded-content.html#the-img-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/img",
        title: "`img` (Image Embed)",
        category: el
    }, {
        whatwgUrl: wwg + "/input.html#the-input-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/input",
        title: "`input` (HTML Input)",
        category: el
    }, {
        whatwgUrl: wwg + "/edits.html#the-ins-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/ins",
        title: "`ins` (Inserted Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-kbd-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/kbd",
        title: "`kbd` (Keyboard Input)",
        category: el
    }, {
        whatwgUrl: wwg + "/forms.html#the-label-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/label",
        title: "`label` (Label)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-legend-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/legend",
        title: "`legend` (Field Set Legend)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-li-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/li",
        title: "`li` (List Item)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-link-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/link",
        title: "`link` (External Resource Link)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-main-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/main",
        title: "`main` (Main)",
        category: el
    }, {
        whatwgUrl: wwg + "/image-maps.html#the-map-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/map",
        title: "`map` (Image Map)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-mark-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/mark",
        title: "`mark` (Mark Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-menu-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/menu",
        title: "`menu` (Menu)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-meta-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/meta",
        title: "`meta` (metadata)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-meter-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/meter",
        title: "`meter` (HTML Meter)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-nav-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/nav",
        title: "`nav` (Navigation Section)",
        category: el
    }, {
        whatwgUrl: wwg + "/scripting.html#the-noscript-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/noscript",
        title: "`noscript` (Noscript)",
        category: el
    }, {
        whatwgUrl: wwg + "/iframe-embed-object.html#the-object-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/object",
        title: "`object` (External Object)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-ol-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/ol",
        title: "`ol` (Ordered List)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-optgroup-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/optgroup",
        title: "`optgroup` (Option Group)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-option-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/option",
        title: "`option` (HTML Option)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-output-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/output",
        title: "`output` (Output)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-p-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/p",
        title: "`p` (Paragraph)",
        category: el
    }, {
        whatwgUrl: wwg + "/iframe-embed-object.html#the-param-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/param",
        title: "`param` (Object Parameter)",
        category: el
    }, {
        whatwgUrl: wwg + "/embedded-content.html#the-picture-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/picture",
        title: "`picture` (Picture)",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-pre-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/pre",
        title: "`pre` (Preformatted Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-progress-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/progress",
        title: "`progress` (Progress Indicator)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-q-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/q",
        title: "`q` (Inline Quotation)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-rp-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/rp",
        title: "`rp` (Ruby Fallback Parenthesis)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-rt-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/rt",
        title: "`rt` (Ruby Text)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-ruby-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/ruby",
        title: "`ruby` (Ruby Annotation)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-s-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/s",
        title: "`s` (Strikethrough)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-samp-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/samp",
        title: "`samp` (Sample Output)",
        category: el
    }, {
        whatwgUrl: wwg + "/scripting.html#the-script-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/script",
        title: "`script` (Script)",
        category: el
    }, {
        whatwgUrl: wwg + "/sections.html#the-section-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/section",
        title: "`section` (Generic Section)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-select-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/select",
        title: "`select` (HTML Select)",
        category: el
    }, {
        whatwgUrl: wwg + "/scripting.html#the-slot-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/slot",
        title: "`slot` (Web Component Slot)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-small-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/small",
        title: "`small` (Side Comment)",
        category: el
    }, {
        whatwgUrl: wwg + "/embedded-content.html#the-source-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/source",
        title: "`source` (Media or Image Source)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-span-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/span",
        title: "`span` (Content Span)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-strong-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/strong",
        title: "`strong` (Strong Importance)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-style-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/style",
        title: "`style` (Style Information)",
        category: el
    }, {
        whatwgUrl: wwg + "/interactive-elements.html#the-summary-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/summary",
        title: "`summary` (Disclosure Summary)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-table-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/table",
        title: "`table` (Table)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-tbody-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/tbody",
        title: "`tbody` (Table Body)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-td-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/td",
        title: "`td` (Table Data Cell)",
        category: el
    }, {
        whatwgUrl: wwg + "/scripting.html#the-template-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/template",
        title: "`template` (Content Template)",
        category: el
    }, {
        whatwgUrl: wwg + "/form-elements.html#the-textarea-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/textarea",
        title: "`textarea` (Textarea)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-tfoot-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/tfoot",
        title: "`tfoot` (Table Foot)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-th-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/th",
        title: "`th` (Table Header)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-thead-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/thead",
        title: "`thead` (Table Head)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-time-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/time",
        title: "`time` ((Date) Time)",
        category: el
    }, {
        whatwgUrl: wwg + "/semantics.html#the-title-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/title",
        title: "`title` (Document Title)",
        category: el
    }, {
        whatwgUrl: wwg + "/tables.html#the-tr-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/tr",
        title: "`tr` (Table Row)",
        category: el
    }, {
        whatwgUrl: wwg + "/media.html#the-track-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/track",
        title: "`track` (Embed Text Track)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-u-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/u",
        title: "`u` (Unarticulated Annotation (Underline))",
        category: el
    }, {
        whatwgUrl: wwg + "/grouping-content.html#the-ul-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/ul",
        title: "`ul` (Unordered List)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-var-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/var",
        title: "`var` (Variable)",
        category: el
    }, {
        whatwgUrl: wwg + "/media.html#the-video-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/video",
        title: "`video` (Video Embed)",
        category: el
    }, {
        whatwgUrl: wwg + "/text-level-semantics.html#the-wbr-element",
        mdnUrl: mdn + "/HTML/Reference/Elements/wb",
        title: "`wbr` (Line Break Opportunity)",
        category: el
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/accept",
        title: "`accept`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#accept-charset",
        title: "`accept-charset`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/accesskey",
        title: "`accesskey`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#allow",
        title: "`action`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#actionallow",
        title: "`actionallow`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/link#as",
        title: "`as`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/script#async",
        title: "`async`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/autocapitalize",
        title: "`autocapitalize`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/autocomplete",
        title: "`autocomplete`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/capture",
        title: "`capture`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/meta#charset",
        title: "`charset`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/input#checked",
        title: "`checked`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/class",
        title: "`class`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/textarea#cols",
        title: "`cols`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/content",
        title: "`content`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/contenteditable",
        title: "`contenteditable`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/area#coords",
        title: "`coords`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/crossorigin",
        title: "`crossorigin`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/API/HTMLIFrameElement/csp",
        title: "`csp`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/object#data",
        title: "`data`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/data-*",
        title: "`data-*`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/img#decoding",
        title: "`decoding`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/track#default",
        title: "`default`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/script#defer",
        title: "`defer`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/dir",
        title: "`dir`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/dirname",
        title: "`dirname`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/disabled",
        title: "`disabled`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/draggable",
        title: "`draggable`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#enctype",
        title: "`enctype`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/enterkeyhint",
        title: "`enterkeyhint`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/elementtiming",
        title: "`elementtiming`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/for",
        title: "`for`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/hidden",
        title: "`hidden`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/meter#high",
        title: "`high`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/meta/http-equiv",
        title: "`http-equiv`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/id",
        title: "`id`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Security/Subresource_Integrity",
        title: "`integrity`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/img#ismap",
        title: "`ismap`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/itemprop",
        title: "`itemprop`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/track#kind",
        title: "`kind`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/lang",
        title: "`lang`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/script#language",
        title: "`language`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/input#list",
        title: "`list`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/meter#low",
        title: "`low`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/max",
        title: "`max`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/maxlength",
        title: "`maxlength`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/minlength",
        title: "`minlength`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#method",
        title: "`method`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/min",
        title: "`min`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/multiple",
        title: "`multiple`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/form#novalidate",
        title: "`novalidate`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/meter#optimum",
        title: "`optimum`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/pattern",
        title: "`pattern`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/a#ping",
        title: "`ping`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/placeholder",
        title: "`placeholder`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/video#playsinline",
        title: "`playsinline`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/video#poster",
        title: "`poster`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/readonly",
        title: "`readonly`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/rel",
        title: "`rel`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/required",
        title: "`required`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/ol#reversed",
        title: "`reversed`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Roles",
        title: "`role`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/textarea#rows",
        title: "`rows`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/iframe#sandbox",
        title: "`sandbox`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/th#scope",
        title: "`scope`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/option#selected",
        title: "`selected`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/size",
        title: "`size`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/slot",
        title: "`slot`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/spellcheck",
        title: "`spellcheck`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/iframe#srcdoc",
        title: "`srcdoc`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/track#srclang",
        title: "`srclang`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/ol#start",
        title: "`start`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Attributes/step",
        title: "`step`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/style",
        title: "`style`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/table#summary",
        title: "`summary`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/tabindex",
        title: "`tabindex`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/title",
        title: "`title`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Global_attributes/translate",
        title: "`translate`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/HTML/Reference/Elements/textarea#wrap",
        title: "`wrap`",
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-activedescendant",
        title: "`aria-activedescendant`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-atomic",
        title: "`aria-atomic`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-autocomplete",
        title: "`aria-autocomplete`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-busy",
        title: "`aria-busy`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-checked",
        title: "`aria-checked`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-colcount",
        title: "`aria-colcount`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-colindex",
        title: "`aria-colindex`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-colspan",
        title: "`aria-colspan`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-controls",
        title: "`aria-controls`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-current",
        title: "`aria-current`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-describedby",
        title: "`aria-describedby`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-description",
        title: "`aria-description`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-details",
        title: "`aria-details`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-disabled",
        title: "`aria-disabled`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-dropeffect",
        title: "`aria-dropeffect`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-errormessage",
        title: "`aria-errormessage`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-expanded",
        title: "`aria-expanded`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-flowto",
        title: "`aria-flowto`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-grabbed",
        title: "`aria-grabbed`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-haspopup",
        title: "`aria-haspopup`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-hidden",
        title: "`aria-hidden`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-invalid",
        title: "`aria-invalid`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts",
        title: "`aria-keyshortcuts`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-label",
        title: "`aria-label`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-labelledby",
        title: "`aria-labelledby`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-level",
        title: "`aria-level`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-live",
        title: "`aria-live`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-modal",
        title: "`aria-modal`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-multiline",
        title: "`aria-multiline`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-multiselectable",
        title: "`aria-multiselectable`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-orientation",
        title: "`aria-orientation`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-owns",
        title: "`aria-owns`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-placeholder",
        title: "`aria-placeholder`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-posinset",
        title: "`aria-posinset`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-pressed",
        title: "`aria-pressed`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-readonly",
        title: "`aria-readonly`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-relevant",
        title: "`aria-relevant`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-required",
        title: "`aria-required`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-roledescription",
        title: "`aria-roledescription`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-rowcount",
        title: "`aria-rowcount`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-rowindex",
        title: "`aria-rowindex`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-rowspan",
        title: "`aria-rowspan`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-selected",
        title: "`aria-selected`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-setsize",
        title: "`aria-setsize`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-sort",
        title: "`aria-sort`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-valuemax",
        title: "`aria-valuemax`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-valuemin",
        title: "`aria-valuemin`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-valuenow",
        title: "`aria-valuenow`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: mdn + "/Accessibility/ARIA/Reference/Attributes/aria-valuetext",
        title: "`aria-valuetext`",
        category: a
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`alt`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`autoplay`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`background`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`bgcolor`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`border`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`cite`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`color`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`colspan`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`controls`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`datetime`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`download`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`form`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`formaction`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`formenctype`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`formmethod`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`formnovalidate`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`formtarget`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`headers`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`height`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`href`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`hreflang`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`inputmode`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`label`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`loading`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`loop`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`media`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`muted`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`name`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`open`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`preload`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`referrerpolicy`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`rowspan`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`shape`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`sizes`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`span`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`src`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`srcset`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`target`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`type`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`usemap`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`value`" + noMdnEntry,
        category: att
    }, {
        whatwgUrl: "N/A",
        mdnUrl: "N/A",
        title: "`width`" + noMdnEntry,
        category: att
    }, ], lookUpHTML()
})()