javascript: (function() {
    "use strict";
    console.clear();
    var tempDOMContent, currentEl, currentElTagName, thisTagName, searchScope, newCollection, useIDRefs = !0,
        hidePanels = !1,
        targetAndSourceCompilationReadable = "",
        targetAndSourceCompilationProcessed = "",
        newTargetsAddedCount = 0,
        allowAlerts = !0,
        firstEntry = !0;

    function removeEl(e) {
        document.querySelector("#" + e) && document.querySelector("#" + e).remove()
    }

    function getXpath(e) {
        currentEl = e, currentElTagName = e.tagName.toLowerCase();
        let t, a = "",
            n = "",
            r = "",
            o = "";
        for (; currentEl.parentNode;) {
            if ((t = currentEl.parentNode).tagName) {
                a = t.tagName.toLowerCase();
                let i = t.querySelectorAll(":scope > " + currentEl.tagName);
                r = i.length > 1 ? "[" + parseInt(Array.from(i).indexOf(currentEl) + 1) + "]" : "", currentElTagName = currentEl.tagName.toLowerCase();
                let l = currentEl.getAttribute("id");
                n = l && useIDRefs ? '/*[@id="' + l + '"]' + o + n : currentElTagName + r + o + n, o = "/"
            }
            currentEl = t
        }
        "" === a && (a = currentElTagName), n = "//" + a + r + o + n;
        let s = n.split("//*");
        return s.length > 1 && (n = "//*" + (n = s[s.length - 1])), n
    }

    function getXpathAndSource() {
        let e, t, a, n, r, o, i, l, s, d, u = !1;
        if (!document.querySelector("#tempDOMDumpingGround")) {
            let c = document.createElement("div");
            c.setAttribute("id", "tempDOMDumpingGround"), c.setAttribute("hidden", "hidden"), document.body.appendChild(c)
        }
        let p = document.querySelectorAll("*");

        function m() {
            n.remove(), document.querySelector("#xpathGetterStyles").remove()
        }

        function g() {
            ! function e(t, a) {
                let n = document.querySelector("#allTargetsFileDownloadLinkReadable");
                n.textContent = "Download targets (Readable)", n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(a)), n.setAttribute("download", t)
            }("xpaths-targets-selected.html", targetAndSourceCompilationReadable),
            function e(t, a) {
                let n = document.querySelector("#allTargetsFileDownloadLinkProcessed");
                n.textContent = "Download targets (Processed)", n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(a)), n.setAttribute("download", t)
            }("xpaths-targets-selected-processed.html", targetAndSourceCompilationProcessed)
        }

        function h(e, t = 1) {
            let a = "string" == typeof e ? e : e.outerHTML;
            a = a.replace(/<!--(.*?)-->/g, "");
            let n = "",
                r = [0],
                o = " ".repeat(t),
                i = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]),
                l = e => {
                    let t = e.match(/^<([^ >]+)/);
                    return t && i.has(t[1].toLowerCase())
                },
                s = (e => {
                    let t = [],
                        a = /(<[^>]+>|[^<]+)/g,
                        n;
                    for (; null !== (n = a.exec(e));) {
                        let r = n[0].trim();
                        r && t.push(r)
                    }
                    return t
                })(a);
            for (let d = 0; d < s.length; d++) {
                let u = s[d],
                    c = r[r.length - 1];
                if (u.toLowerCase().startsWith("<!doctype")) {
                    n += u + "\n";
                    continue
                }
                if (u.startsWith("<") && !u.startsWith("</")) {
                    if (l(u)) {
                        n += o.repeat(c) + u + "\n";
                        continue
                    }
                    n += o.repeat(c) + u + "\n", u.endsWith("/>") || r.push(c + 1);
                    continue
                }
                if (u.startsWith("</")) {
                    r.length > 1 && r.pop();
                    let p = r[r.length - 1];
                    n += o.repeat(p) + u + "\n";
                    continue
                }
                if (!u.startsWith("<")) {
                    n += o.repeat(c) + u + "\n";
                    continue
                }
            }
            return n.trim().replace(/^\s+$/gm, "").replace(/\n\n+/g, "\n")
        }

        function b(e, t) {
            var a;
            u || ((n = document.createElement("div")).setAttribute("id", "outputPanel"), n.setAttribute("tabindex", "-1"), n.setAttribute("role", "region"), n.setAttribute("aria-label", "Xpath and Source values"), (i = document.createElement("input")).setAttribute("id", "outputPanel_input"), (r = document.createElement("textarea")).setAttribute("id", "outputPanel_textarea"), r.setAttribute("aria-label", "Source code"), (l = document.createElement("label")).setAttribute("for", "outputPanel_input"), l.textContent = "XPATH locator", (o = document.createElement("label")).setAttribute("for", "outputPanel_textarea"), o.textContent = "Source code (formatted/indented)", (s = document.createElement("button")).setAttribute("type", "button"), s.textContent = "Close", (d = document.createElement("button")).setAttribute("type", "button"), d.setAttribute("title", "Adds a somewhat decrapulated version after the proper markup"), d.innerHTML = "<span aria-hidden='true'>\uD83D\uDCA9 </span>Decrapulate LITE [d]", n.appendChild(l), n.appendChild(i), n.appendChild(o), n.appendChild(r), n.appendChild(s), n.appendChild(d), i.addEventListener("click", e => {
                i.select(), e.stopPropagation()
            }), r.addEventListener("click", e => {
                r.select(), e.stopPropagation()
            }), n.addEventListener("click", e => {
                e.stopPropagation()
            }), l.addEventListener("click", e => {
                e.stopPropagation()
            }), o.addEventListener("click", e => {
                e.stopPropagation()
            }), s.addEventListener("click", e => {
                m()
            }), d.addEventListener("click", e => {
                A()
            }), document.body.appendChild(n), u = !0), g(), w(e), i.value = getXpath(e);
            let c = h(e);
            (tempDOMContent = document.querySelector("#tempDOMDumpingGround")).innerHTML = c;
            let p = tempDOMContent.querySelectorAll(":scope *");
            tempDOMContent.querySelectorAll(":scope>*");
            let b = 0;
            Array.from(p).forEach(e => {
                b++
            }), b > 20 && allowAlerts && confirm("There are quite a lot of child nodes in here (" + b + " in total). Do you want to only reference the parent node (all inner contents replaced with '...')?\n\nOK = Abbreviate\nCancel = Leave as-is") && (b = 0, Array.from(p).forEach(e => {
                1 != ++b && e.remove()
            }), c = (c = h(tempDOMContent.innerHTML)).split("\n").join("\n...\n")), c = c.split(" class=''").join(""), r.value = c, firstEntry || (targetAndSourceCompilationReadable += "\n<!-- ==== END target and source markup ==== -->\n\n\n"), targetAndSourceCompilationReadable += "<!--\n" + getXpath(e) + "\n-->\n" + c, targetAndSourceCompilationProcessed += getXpath(e) + "~~~//~~~" + (a = c).replace(/>\s+</g, "><").replace(/^\s+|\s+$/gm, "").replace(/\n/g, "").replace(/\s{2,}/g, " ").replace(/\s*=\s*/g, "=").replace(/\s+/g, " ").replace(/\s+>/g, ">") + "\n", console.log("LOGGED:\n", targetAndSourceCompilationReadable), firstEntry = !1
        }

        function f() {
            document.querySelector("#outputPanel") && document.querySelector("#outputPanel").setAttribute("hidden", "hidden"), document.querySelector("#allTargetsFileDownloadLinkProcessed") && document.querySelector("#allTargetsFileDownloadLinkProcessed").setAttribute("hidden", "hidden"), document.querySelector("#allTargetsFileDownloadLinkReadable") && document.querySelector("#allTargetsFileDownloadLinkReadable").setAttribute("hidden", "hidden")
        }

        function v() {
            document.querySelector("#outputPanel") && document.querySelector("#outputPanel").removeAttribute("hidden"), document.querySelector("#allTargetsFileDownloadLinkProcessed") && document.querySelector("#allTargetsFileDownloadLinkProcessed").removeAttribute("hidden"), document.querySelector("#allTargetsFileDownloadLinkReadable") && document.querySelector("#allTargetsFileDownloadLinkReadable").removeAttribute("hidden")
        }

        function k() {
            Array.from(p).forEach(e => {
                w(e)
            })
        }

        function y(t, a) {
            e = t, searchScope = t, a.stopPropagation(), E(t), x(e)
        }

        function w(e) {
            e.classList.remove("tempHighlight")
        }

        function E(e) {
            e.classList.add("tempHighlight")
        }

        function x(e) {
            a.innerHTML = getXpath(e)
        }

        function A() {
            let e = document.querySelector("#outputPanel_textarea"),
                t = function e(t) {
                    function a(e) {
                        let t = document.createElement("div");
                        t.innerHTML = e;
                        let a = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
                        return ! function e(t) {
                            if (t.nodeType === Node.ELEMENT_NODE) {
                                if (!a.has(t.tagName.toLowerCase())) {
                                    for (let n = t.childNodes.length - 1; n >= 0; n--) e(t.childNodes[n]);
                                    0 !== t.childNodes.length || a.has(t.tagName.toLowerCase()) || "" !== t.textContent.trim() || t.remove()
                                }
                            } else t.nodeType === Node.TEXT_NODE && "" === t.textContent.trim() && t.remove()
                        }(t), t.innerHTML
                    }
                    let n = new Set(["id", "class", "style", "title", "lang", "dir", "tabindex", "accesskey", "contenteditable", "hidden", "translate", "draggable", "spellcheck", "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onsort", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "accept", "accept-charset", "action", "autocomplete", "autofocus", "checked", "disabled", "enctype", "for", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "value", "width", "autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "href", "hreflang", "media", "rel", "target", "download", "ping", "referrerpolicy", "colspan", "rowspan", "headers", "scope", "allowfullscreen", "allowpaymentrequest", "frameborder", "sandbox", "srcdoc", "alt", "ismap", "longdesc", "srcset", "sizes", "usemap", "async", "defer", "integrity", "nomodule", "nonce", "cite", "datetime", "kind", "label", "start", "coords", "shape", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]),
                        r = document.createElement("div");
                    r.innerHTML = t;
                    let o = r.getElementsByTagName("*");

                    function i(e, t) {
                        Array.from(e.attributes).filter(e => e.name.startsWith(t)).forEach(t => e.removeAttribute(t.name))
                    }
                    for (let l of o) {
                        let s = Array.from(l.attributes).filter(e => !e.name.startsWith("data-") && !n.has(e.name));
                        s.forEach(e => {
                            console.log(`Stripping invalid attribute: \`${e.name}\` from element:`, l), l.removeAttribute(e.name)
                        }), l.removeAttribute("class"), l.removeAttribute("style"), l.removeAttribute("dir"), l.removeAttribute("lang"), l.removeAttribute("onclick"), i(l, "ng-"), i(l, "_ng")
                    }
                    return r.innerHTML
                }(e.value);
            e.value = "\uD83D\uDCA9 De-Crapulated version \uD83D\uDCA9\n" + t, targetAndSourceCompilationReadable += "\n\n\uD83D\uDCA9 De-Crapulated version \uD83D\uDCA9\n" + t, a.innerHTML = '<span aria-hidden="true">\uD83D\uDC4D\uD83D\uDCA9 </span>De-Crapulation Finished!<span aria-hidden="true"> \uD83D\uDCA9\uD83D\uDC4D</span>'
        }

        function L() {
            a.innerHTML = `<p>Xpath and Source getter started.</p><ul><li>Hover over on elements on the page, then click when the correct element is highlighted</li><li>Or <kbd>TAB</kbd> to a focusable element on the page and then press the arrow keys to fine tune your selection (choose parent, child and sibling elements in the DOM) and confirm that selection with <kbd>Enter</kbd></li><li>You can toggle the xpath type (using \`id\` references where present or DOM position) by pressing <kbd>x</kbd> key</li><li>Find all elements at same DOM level by pressing <kbd>a</kbd> key (keep pressing <kbd>a</kbd> to move up the DOM tree while searching for same elements, then press <kbd>Y</kbd> to commit targets)</li><li>Press <kbd>i</kbd> to see these <strong>i</strong>nstructions again at any time</li><li>Press <kbd>h</kbd> to <strong>h</strong>ide/show the display of the output (capture) panel as needed (in case it is obscuring a target)</li><li>Press <kbd>q</kbd> to <strong>q</strong>uit the tool and restore page to previous state</li><li>Press <kbd>d</kbd> to <strong>d</strong>ecrapulate the markup (removes all invalid HTML attributes, but also strips \`class\`, \`style\`, \`dir\`, \`lang\`, \`onclick\`, \`ng-\`, \`_ng\` and any empty nodes)</li></ul>`
        }
        k(), Array.from(p).forEach(e => {
                e.addEventListener("click", t => {
                    "allTargetsFileDownloadLinkReadable" !== e.getAttribute("id") && (t.stopPropagation(), t.preventDefault(), b(e, t), a.innerHTML = "Values captured for " + getXpath(e))
                }), e.addEventListener("focus", t => {
                    y(e, t)
                }), e.addEventListener("mouseover", t => {
                    y(e, t)
                }), e.addEventListener("mouseout", e => {
                    k()
                }), e.addEventListener("blur", e => {
                    k()
                })
            }), ! function e() {
                let t = document.createElement("style");
                t.setAttribute("id", "xpathGetterStyles"), t.textContent = `#outputPanel button {border:1px solid white;color:white!important;background:black;height:2em;margin-right:1em;}#outputPanel label {color:white;}#outputPanel, #outputPanel * {font-size:20px;font-family:sans-serif;}#outputPanel {position:fixed;bottom:80px;right:20px;padding:20px;background:black;width:50vw;z-index:10000;outline:3px solid white;border-radius:5px;}#outputPanel input, #outputPanel textarea {width:100%;display:block;margin:10px 0;background:white;color:black;}#outputPanel textarea {height:5em;}#outputPanel textarea {font-family:monospace;}.tempHighlight{outline:4px solid black!important;outline-offset:-4px!important;-webkit-box-shadow: 0px 0px 0px 4px #fff;box-shadow: 0px 0px 0px 4px #fff;}#infoPanel {z-index:100000;font-size:20px;background:rgba(0,0,0,0.8);color:#fff;font-weight:normal;padding:10px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-width:50vw;font-family:sans-serif;overflow-wrap: break-word;outline:3px solid white;border-radius:5px;}#infoPanel:empty {visibility:hidden;}#infoPanel code {color:lime}#allTargetsFileDownloadLinkReadable {right:20px;background:rgba(41, 98, 24,0.9);}#allTargetsFileDownloadLinkProcessed {right:280px;background:rgba(135, 48, 167,0.9);outline:3px solid white;border-radius:5px;}.allTargetsFileDownloadLink {position:fixed;bottom:20px;color:white!important;font-weight:bold;padding:10px;font-family:sans-serif;font-size:16px;z-index:10000;outline:3px solid white;border-radius:5px;}.allTargetsFileDownloadLink:empty{visibility:hidden}#infoPanel kbd {color:yellow;background:transparent!important;}`, document.head.appendChild(t)
            }(), (a = document.createElement("div")).setAttribute("id", "infoPanel"), a.setAttribute("role", "status"), document.body.appendChild(a),
            function e() {
                let t = document.createElement("a");
                t.setAttribute("id", "allTargetsFileDownloadLinkReadable"), t.setAttribute("class", "allTargetsFileDownloadLink"), t.addEventListener("click", e => {
                    g(), allTargetsFileDownloadLinkReadable.setAttribute("download", "XPATH-and-Source-Code---human-readable.html"), e.stopPropagation()
                }), document.body.appendChild(t)
            }(),
            function e() {
                let t = document.createElement("a");
                t.setAttribute("id", "allTargetsFileDownloadLinkProcessed"), t.setAttribute("class", "allTargetsFileDownloadLink"), t.addEventListener("click", e => {
                    g(), allTargetsFileDownloadLinkProcessed.setAttribute("download", "XPATH-and-Source-Code---machine-readable.log"), e.stopPropagation()
                }), document.body.appendChild(t)
            }(),
            function n() {
                let r = function(n) {
                    if ("Escape" === n.key && m(), "h" === n.key) {
                        n.preventDefault();
                        let o = document.querySelector("#outputPanel");
                        o && (o.hasAttribute("hidden") ? (o.removeAttribute("hidden"), a.innerHTML = "Output panel shown") : (o.setAttribute("hidden", "hidden"), a.innerHTML = "Output panel hidden"))
                    }
                    if ("d" === n.key && (n.preventDefault(), A()), "ArrowUp" === n.key && (n.preventDefault(), e.parentNode && "HTML" !== e.tagName && (w(e), e = t = e.parentNode, E(e)), x(e), a.textContent = a.textContent + " \uD83D\uDC48 Press Return to get this element's details"), "ArrowLeft" === n.key && (n.preventDefault(), e.previousElementSibling && (w(e), y(e = e.previousElementSibling, n))), "ArrowRight" === n.key && (n.preventDefault(), e.nextElementSibling && (w(e), y(e = e.nextElementSibling, n))), "ArrowDown" === n.key && (n.preventDefault(), e.childNodes.length > 1)) {
                        w(e);
                        let i = !1,
                            l;
                        Array.from(e.childNodes).forEach(e => {
                            1 !== e.nodeType || i || (i = !0, l = e)
                        }), l && y(e = l, n)
                    }
                    if ("x" === n.key && ((useIDRefs = !useIDRefs) ? a.innerHTML = "Using ID refs (where available) to get xpath" : a.innerHTML = "Using element position in DOM to get xpath"), "y" === n.key && (a.innerHTML = "Added " + newTargetsAddedCount + " targets to the list", allowAlerts = !1, Array.from(newCollection).forEach(e => {
                            e.click()
                        }), allowAlerts = !0), "i" === n.key && L(), "a" === n.key) {
                        var s, d;
                        thisTagName = e.tagName.toLowerCase(), searchScope.parentNode && (searchScope = searchScope.parentNode), s = searchScope, d = thisTagName, newTargetsAddedCount = (newCollection = s.querySelectorAll(d)).length, k(), Array.from(newCollection).forEach(e => {
                            E(e)
                        }), a.innerHTML = "<p>" + newTargetsAddedCount + " Possible matching targets found (highlighted visually)</p>Searching:<br>" + getXpath(s) + "<br>for tagName `" + d + "`<p>Open console for matched elements.</p><p>Press <kbd>y</kbd> key to commit these targets</p>"
                    }
                    if ("Enter" === n.key && (n.preventDefault(), e.click()), "q" === n.key) {
                        n.preventDefault();
                        let u = document.querySelectorAll("*");
                        Array.from(u).forEach(e => {
                            e.removeEventListener("click", b), e.removeEventListener("focus", y), e.removeEventListener("mouseover", y), e.removeEventListener("mouseout", k), e.removeEventListener("blur", k), e.classList.remove("tempHighlight")
                        }), removeEl("tempDOMDumpingGround"), removeEl("infoPanel"), removeEl("allTargetsFileDownloadLinkReadable"), removeEl("allTargetsFileDownloadLinkProcessed"), removeEl("outputPanel");
                        let c = document.querySelector("#xpathGetterStyles");
                        c && c.remove(), document.removeEventListener("keydown", r), console.log("XPath getter script stopped and cleaned up.")
                    }
                };
                document.addEventListener("keydown", r)
            }(), L()
    }
    removeEl("tempDOMDumpingGround"), removeEl("infoPanel"), removeEl("allTargetsFileDownloadLinkReadable"), removeEl("allTargetsFileDownloadLinkProcessed"), removeEl("outputPanel"), getXpathAndSource()
})()