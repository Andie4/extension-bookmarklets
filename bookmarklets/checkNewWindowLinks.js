javascript: (function() {
    function checkNewWindowLinks() {
        function e(e, t) {
            let n = window.getComputedStyle(e, t),
                i = n.getPropertyValue("content");
            return "none" === i || "" === i ? null : i.replace(/['"]/g, "")
        }

        function t(t) {
            let n = "",
                i = e(t, "::before"),
                o = e(t, "::after");
            i && (n += i + " ");
            let r = t.querySelector('svg[role="img"]');
            r && r.hasAttribute("aria-label") && (n += r.getAttribute("aria-label") + " ");
            let a = t.querySelector('svg[role="img"] title');
            if (a && (n += a.textContent + " "), t.hasAttribute("aria-label") && (n += t.getAttribute("aria-label") + " "), t.hasAttribute("aria-labelledby")) {
                let l = t.getAttribute("aria-labelledby").split(" "),
                    s = l.map(e => document.getElementById(e)?.textContent || "").join(" ");
                s && (n += s + " ")
            }
            let d = t.querySelectorAll(".visually-hidden, .sr-only");
            d.forEach(e => {
                n += e.textContent + " "
            });
            let p = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
                acceptNode: function(e) {
                    return e.parentElement.closest("svg") || e.parentElement.classList.contains("visually-hidden") || e.parentElement.classList.contains("sr-only") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                }
            });
            for (; p.nextNode();) n += p.currentNode.textContent + " ";
            let c = t.querySelectorAll("img");
            return c.forEach(e => {
                e.hasAttribute("alt") && (n += e.getAttribute("alt") + " ")
            }), o && (n += o + " "), n.trim()
        }

        function n(e, t) {
            let n = e => e.toLowerCase().replace(/\s+/g, " ").trim(),
                i = n(e),
                o = [];
            for (let r of t) {
                let a = n(r);
                if (i === a) continue;
                let l = [i, i.replace("oppens", "opens"), i.replace("anew", "a new"), i.replace("ttab", "tab"), i.replace(/\s+/g, "")],
                    s = [a, a.replace(/\s+/g, "")];
                for (let d of l)
                    for (let p of s)
                        if (d.includes(p) || p.includes(d)) {
                            o.push(r);
                            break
                        }
            }
            return o
        }

        function i(e, t) {
            let n = e.toLowerCase();
            return !(n.includes("oppens") || n.includes("anew") || n.includes("ttab")) && t.some(e => {
                let t = e.toLowerCase();
                return n === t || n.includes(t)
            })
        }

        function o(e) {
            for (var t = e; t && 1 !== t.nodeType;) t = t.parentNode;
            if (!t) return !1;
            var n = window.getComputedStyle(t);
            return "none" === n.display || "hidden" === n.visibility || "0" === n.opacity || t.hasAttribute("aria-hidden") || "0px" === n.fontSize || "-9999px" === n.textIndent || "transparent" === n.color || "absolute" === n.position && ("rect(0px, 0px, 0px, 0px)" === n.clip || "inset(50%)" === n.clipPath) || t.classList.contains("visually-hidden")
        }(r = document.createElement("style")).setAttribute("id", "appStyles"), r.textContent = `.linkNewWindowNoWarning,.linkNewWindowGood,.linkNewWindowTitleHint,.linkNewWindowAlmostMatch {outline-offset:4px;}* .linkNewWindowNoWarning:before,* .linkNewWindowGood:before,* .linkNewWindowTitleHint:before,* .linkNewWindowAlmostMatch:before {color:white!important;padding:3px;display:inline-block;margin-right:5px;font-size:10px;}* .linkNewWindowNoWarning {outline:3px solid red!important;outline-color:red!important;}* .linkNewWindowNoWarning:before {background-color:red!important;content:"BAD"!important;}* .linkNewWindowGood {outline:3px solid green!important;outline-color:green!important;}* .linkNewWindowGood:before {background-color:green!important;content:"GOOD"!important;}* .linkNewWindowTitleHint {outline:3px dotted purple!important;outline-color:purple!important;}* .linkNewWindowTitleHint:before {background-color:purple!important;content:"IN TITLE"!important;}* .linkNewWindowAlmostMatch {outline:3px dashed red!important;outline-color:red!important;}* .linkNewWindowAlmostMatch:before {background-color:red!important;content:"ALMOST"!important;}`, document.head.appendChild(r);
        for (var r, a = 0, l = 0, s = [], d = [], p = {
                en: ["opens in a new window", "opens in new window", "open in a new window", "open in new window", "open - new window", "opens in new tab", "opens in a new tab", "new window", "external link"],
                es: ["se abre en una nueva ventana", "abre en nueva ventana", "nueva ventana", "enlace externo"],
                fr: ["s'ouvre dans une nouvelle fen\xeatre", "nouvelle fen\xeatre", "lien externe"],
                de: ["\xf6ffnet in einem neuen fenster", "\xf6ffnet sich in einem neuen fenster", "neues fenster", "externer link"]
            }, c = function e() {
                var t = document.documentElement.lang;
                if (t) return t.toLowerCase().split("-")[0];
                var n = document.querySelector('meta[http-equiv="content-language"]');
                return n ? n.getAttribute("content").toLowerCase().split("-")[0] : "en"
            }(), u = document.querySelectorAll('a[target="_blank"],a[target="_top"]'), w = u.length, h = 0; h < u.length; h++) {
            var g = u[h],
                f = g.getAttribute("title") || "";
            f.toLowerCase();
            var b = !1,
                m = !1,
                k = !1,
                v = "",
                N = p[c] ? p[c].concat(p.en) : p.en,
                y = t(g);
            if (i(y, N)) b = !0, v = y;
            else {
                var x = n(y, N);
                x.length > 0 ? (k = !0, d.push({
                    text: y,
                    similarTo: x,
                    type: "accessible name"
                })) : f && i(f, N) && (m = !0, v = f)
            }
            var W = g.getAttribute("title") || "",
                A = 'Link has an accessible name of "' + y + '"';
            g.title = W ? W + ". " + A : A, b ? (g.classList.add("linkNewWindowGood"), -1 === s.indexOf(v) && s.push(v)) : k ? (g.classList.add("linkNewWindowAlmostMatch"), a++) : (m ? (g.classList.add("linkNewWindowTitleHint"), l++) : g.classList.add("linkNewWindowNoWarning"), a++)
        }
        if (0 !== w) {
            var $ = "en" !== c ? "\n\nDocument language detected as: " + c.toUpperCase() + ". Both " + c.toUpperCase() + " and EN phrases were checked." : "\n\nDocument language detected as: EN",
                L = l > 0 ? "\n\n" + l + " links had the phrase in the title attribute only (highlighted in purple). These phrases may not be perceived by assistive technology users." : "",
                C = s.length > 0 ? "\n\nMatched phrases found:\n" + s.join("\n") : "",
                T = "";
            if (d.length > 0) {
                T = "\n\nPotential similar phrases found (not exact matches):\n";
                for (var E = 0; E < d.length; E++) {
                    var S = d[E];
                    T += '- "' + S.text + '" (' + S.type + ") similar to: " + S.similarTo.join(", ") + "\n"
                }
            }
            alert(a + " links found that open in new window but have no warning provided for assistive technology users (highlighted with red outline on page)." + $ + L + C + T)
        } else alert('No links have target="_blank" on this page')
    }
    checkNewWindowLinks()
})()